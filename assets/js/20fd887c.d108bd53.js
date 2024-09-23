/*! For license information please see 20fd887c.d108bd53.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[131945],{192114:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(785893),a=r(511151);const i={id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()"},c=void 0,o={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",children:(0,t.jsx)(n.code,{children:"createGitlabProjectVariableAction"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Creates a ",(0,t.jsx)(n.code,{children:"gitlab:projectVariable:create"})," Scaffolder action."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'createGitlabProjectVariableAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    key: string;\n    value: string;\n    repoUrl: string;\n    projectId: string | number;\n    variableType: string;\n    raw?: boolean | undefined;\n    token?: string | undefined;\n    masked?: boolean | undefined;\n    environmentScope?: string | undefined;\n    variableProtected?: boolean | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["{ integrations: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Templating configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ key: string; value: string; repoUrl: string; projectId: string | number; variableType: string; raw?: boolean | undefined; token?: string | undefined; masked?: boolean | undefined; environmentScope?: string | undefined; variableProtected?: boolean | undefined; }, import("@backstage/types").',(0,t.jsx)(n.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var t=r(667294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!s.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var t=r(667294);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);