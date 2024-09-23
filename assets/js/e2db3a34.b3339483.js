/*! For license information please see e2db3a34.b3339483.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[417336],{430586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(785893),c=n(511151);const i={id:"plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",title:"createBitbucketPipelinesRunAction()",description:"API reference for createBitbucketPipelinesRunAction()"},s=void 0,o={id:"reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",title:"createBitbucketPipelinesRunAction()",description:"API reference for createBitbucketPipelinesRunAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",title:"createBitbucketPipelinesRunAction()",description:"API reference for createBitbucketPipelinesRunAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket-cloud",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-cloud"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createbitbucketpipelinesrunaction",children:(0,r.jsx)(t.code,{children:"createBitbucketPipelinesRunAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Creates a new action that triggers a run of a bitbucket pipeline"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createBitbucketPipelinesRunAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    workspace: string;\n    repo_slug: string;\n    body?: object | undefined;\n    token?: string | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ integrations: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ workspace: string; repo_slug: string; body?: object | undefined; token?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(667294);const c={},i=r.createContext(c);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);