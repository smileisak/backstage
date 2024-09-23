/*! For license information please see fcdf2b61.10ff5051.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[356664],{846454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=t(785893),r=t(511151);const d={id:"plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()"},s=void 0,a={id:"reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",title:"createPublishGitlabAction()",description:"API reference for createPublishGitlabAction()"}},o={},c=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.createpublishgitlabaction",children:(0,i.jsx)(n.code,{children:"createPublishGitlabAction"})})]}),"\n",(0,i.jsx)(n.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitLab."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function createPublishGitlabAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    defaultBranch?: string | undefined;\n    repoVisibility?: "internal" | "private" | "public" | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    setUserAsOwner?: boolean | undefined;\n    topics?: string[] | undefined;\n    settings?: {\n        path?: string | undefined;\n        auto_devops_enabled?: boolean | undefined;\n        ci_config_path?: string | undefined;\n        description?: string | undefined;\n        merge_method?: "merge" | "ff" | "rebase_merge" | undefined;\n        squash_option?: "always" | "never" | "default_off" | "default_on" | undefined;\n        topics?: string[] | undefined;\n        visibility?: "internal" | "private" | "public" | undefined;\n    } | undefined;\n    branches?: {\n        name: string;\n        protect?: boolean | undefined;\n        create?: boolean | undefined;\n        ref?: string | undefined;\n    }[] | undefined;\n    projectVariables?: {\n        key: string;\n        value: string;\n        description?: string | undefined;\n        variable_type?: string | undefined;\n        protected?: boolean | undefined;\n        masked?: boolean | undefined;\n        raw?: boolean | undefined;\n        environment_scope?: string | undefined;\n    }[] | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"options"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["{ integrations: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; }"]}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,i.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; defaultBranch?: string | undefined; repoVisibility?: "internal" | "private" | "public" | undefined; sourcePath?: string | undefined; token?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; setUserAsOwner?: boolean | undefined; topics?: string[] | undefined; settings?: { path?: string | undefined; auto_devops_enabled?: boolean | undefined; ci_config_path?: string | undefined; description?: string | undefined; merge_method?: "merge" | "ff" | "rebase_merge" | undefined; squash_option?: "always" | "never" | "default_off" | "default_on" | undefined; topics?: string[] | undefined; visibility?: "internal" | "private" | "public" | undefined; } | undefined; branches?: { name: string; protect?: boolean | undefined; create?: boolean | undefined; ref?: string | undefined; }[] | undefined; projectVariables?: { key: string; value: string; description?: string | undefined; variable_type?: string | undefined; protected?: boolean | undefined; masked?: boolean | undefined; raw?: boolean | undefined; environment_scope?: string | undefined; }[] | undefined; }, import("@backstage/types").',(0,i.jsx)(n.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var i=t(667294),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,d={},c=null,l=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,i)&&!o.hasOwnProperty(i)&&(d[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===d[i]&&(d[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:l,props:d,_owner:a.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(667294);const r={},d=i.createContext(r);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);