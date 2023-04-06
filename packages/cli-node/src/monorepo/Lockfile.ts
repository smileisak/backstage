/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { parseSyml } from '@yarnpkg/parsers';
import fs from 'fs-extra';

const ENTRY_PATTERN = /^((?:@[^/]+\/)?[^@/]+)@(.+)$/;

type LockfileData = {
  [entry: string]: {
    version: string;
    resolved?: string;
    integrity?: string /* old */;
    checksum?: string /* new */;
    dependencies?: { [name: string]: string };
    peerDependencies?: { [name: string]: string };
  };
};

type LockfileQueryEntry = {
  range: string;
  version: string;
  dataKey: string;
};

type LockfileDiffEntry = {
  name: string;
  range: string;
};

type LockfileDiff = {
  added: LockfileDiffEntry[];
  changed: LockfileDiffEntry[];
  removed: LockfileDiffEntry[];
};

// these are special top level yarn keys.
// https://github.com/yarnpkg/berry/blob/9bd61fbffb83d0b8166a9cc26bec3a58743aa453/packages/yarnpkg-parsers/sources/syml.ts#L9
const SPECIAL_OBJECT_KEYS = [
  `__metadata`,
  `version`,
  `resolution`,
  `dependencies`,
  `peerDependencies`,
  `dependenciesMeta`,
  `peerDependenciesMeta`,
  `binaries`,
];

export class Lockfile {
  static async load(path: string) {
    const lockfileContents = await fs.readFile(path, 'utf8');
    return Lockfile.parse(lockfileContents);
  }

  static parse(content: string) {
    let data: LockfileData;
    try {
      data = parseSyml(content);
    } catch (err) {
      throw new Error(`Failed yarn.lock parse, ${err}`);
    }

    const packages = new Map<string, LockfileQueryEntry[]>();

    for (const [key, value] of Object.entries(data)) {
      if (SPECIAL_OBJECT_KEYS.includes(key)) continue;

      const [, name, ranges] = ENTRY_PATTERN.exec(key) ?? [];
      if (!name) {
        throw new Error(`Failed to parse yarn.lock entry '${key}'`);
      }

      let queries = packages.get(name);
      if (!queries) {
        queries = [];
        packages.set(name, queries);
      }
      for (let range of ranges.split(/\s*,\s*/)) {
        if (range.startsWith(`${name}@`)) {
          range = range.slice(`${name}@`.length);
        }
        if (range.startsWith('npm:')) {
          range = range.slice('npm:'.length);
        }
        queries.push({ range, version: value.version, dataKey: key });
      }
    }

    return new Lockfile(packages, data);
  }

  private constructor(
    private readonly packages: Map<string, LockfileQueryEntry[]>,
    private readonly data: LockfileData,
  ) {}

  createSimplifiedDependencyGraph(): Map<string, Set<string>> {
    const graph = new Map<string, Set<string>>();

    for (const [name, entries] of this.packages) {
      const dependencies = new Set(
        entries.flatMap(e => {
          const data = this.data[e.dataKey];
          return [
            ...Object.keys(data?.dependencies ?? {}),
            ...Object.keys(data?.peerDependencies ?? {}),
          ];
        }),
      );
      graph.set(name, dependencies);
    }

    return graph;
  }

  /**
   * Diff with another lockfile, returning entries that have been
   * added, changed, and removed compared to the other lockfile.
   */
  diff(otherLockfile: Lockfile): LockfileDiff {
    const diff = {
      added: new Array<{ name: string; range: string }>(),
      changed: new Array<{ name: string; range: string }>(),
      removed: new Array<{ name: string; range: string }>(),
    };

    // Keeps track of packages that only exist in this lockfile
    const remainingOldNames = new Set(this.packages.keys());

    for (const [name, otherQueries] of otherLockfile.packages) {
      remainingOldNames.delete(name);

      const thisQueries = this.packages.get(name);
      // If the packages doesn't exist in this lockfile, add all entries
      if (!thisQueries) {
        diff.removed.push(...otherQueries.map(q => ({ name, range: q.range })));
        continue;
      }

      const remainingOldRanges = new Set(thisQueries.map(q => q.range));

      for (const otherQuery of otherQueries) {
        remainingOldRanges.delete(otherQuery.range);

        const thisQuery = thisQueries.find(q => q.range === otherQuery.range);
        if (!thisQuery) {
          diff.removed.push({ name, range: otherQuery.range });
          continue;
        }

        const otherPkg = otherLockfile.data[otherQuery.dataKey];
        const thisPkg = this.data[thisQuery.dataKey];
        if (otherPkg && thisPkg) {
          const thisCheck = thisPkg.integrity || thisPkg.checksum;
          const otherCheck = otherPkg.integrity || otherPkg.checksum;
          if (thisCheck !== otherCheck) {
            diff.changed.push({ name, range: otherQuery.range });
          }
        }
      }

      for (const thisRange of remainingOldRanges) {
        diff.added.push({ name, range: thisRange });
      }
    }

    for (const name of remainingOldNames) {
      const queries = this.packages.get(name) ?? [];
      diff.added.push(...queries.map(q => ({ name, range: q.range })));
    }

    return diff;
  }
}
