/*! For license information please see cd6f7e66.d597d220.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[941919],{903538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(785893),i=t(511151);const s={id:"plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()"},c=void 0,o={id:"reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",permalink:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",children:(0,r.jsx)(n.code,{children:"createPublishGithubPullRequestAction"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["use import from ",(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'createPublishGithubPullRequestAction: (options: github.CreateGithubPullRequestActionOptions) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    title: string;\n    branchName: string;\n    targetBranchName?: string | undefined;\n    description: string;\n    repoUrl: string;\n    draft?: boolean | undefined;\n    targetPath?: string | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    reviewers?: string[] | undefined;\n    teamReviewers?: string[] | undefined;\n    commitMessage?: string | undefined;\n    update?: boolean | undefined;\n    forceFork?: boolean | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    forceEmptyGitAuthor?: boolean | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions",children:"github.CreateGithubPullRequestActionOptions"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ title: string; branchName: string; targetBranchName?: string | undefined; description: string; repoUrl: string; draft?: boolean | undefined; targetPath?: string | undefined; sourcePath?: string | undefined; token?: string | undefined; reviewers?: string[] | undefined; teamReviewers?: string[] | undefined; commitMessage?: string | undefined; update?: boolean | undefined; forceFork?: boolean | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; forceEmptyGitAuthor?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(667294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);