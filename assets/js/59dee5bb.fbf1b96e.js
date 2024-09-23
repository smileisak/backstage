/*! For license information please see 59dee5bb.fbf1b96e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296745],{539322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(785893),c=t(511151);const s={id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction()",description:"API reference for createGitlabProjectAccessTokenAction()"},o=void 0,i={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction()",description:"API reference for createGitlabProjectAccessTokenAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction()",description:"API reference for createGitlabProjectAccessTokenAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",children:(0,r.jsx)(n.code,{children:"createGitlabProjectAccessTokenAction"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates a ",(0,r.jsx)(n.code,{children:"gitlab:projectAccessToken:create"})," Scaffolder action."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'createGitlabProjectAccessTokenAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    projectId: string | number;\n    name?: string | undefined;\n    token?: string | undefined;\n    scopes?: string[] | undefined;\n    expiresAt?: string | undefined;\n    accessLevel?: number | undefined;\n}, {\n    access_token: string;\n}>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Templating configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<{ repoUrl: string; projectId: string | number; name?: string | undefined; token?: string | undefined; scopes?: string[] | undefined; expiresAt?: string | undefined; accessLevel?: number | undefined; }, { access_token: string; }>"]})]})}function f(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:c,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(667294);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);