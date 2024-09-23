/*! For license information please see 5b3e98b5.9783cb94.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[180221],{379044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(785893),c=r(511151);const s={id:"plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",title:"createSentryCreateProjectAction()",description:"API reference for createSentryCreateProjectAction()"},o=void 0,a={id:"reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",title:"createSentryCreateProjectAction()",description:"API reference for createSentryCreateProjectAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",title:"createSentryCreateProjectAction()",description:"API reference for createSentryCreateProjectAction()"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-sentry",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-sentry"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-sentry.createsentrycreateprojectaction",children:(0,n.jsx)(t.code,{children:"createSentryCreateProjectAction"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Creates the ",(0,n.jsx)(t.code,{children:"sentry:project:create"})," Scaffolder action."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'function createSentryCreateProjectAction(options: {\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    organizationSlug: string;\n    teamSlug: string;\n    name: string;\n    slug?: string | undefined;\n    authToken?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"options"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsxs)(t.p,{children:["{ config: ",(0,n.jsx)(t.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; }"]}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"Configuration of the Sentry API."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ organizationSlug: string; teamSlug: string; name: string; slug?: string | undefined; authToken?: string | undefined; }, import("@backstage/types").',(0,n.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-custom-actions",children:"https://backstage.io/docs/features/software-templates/writing-custom-actions"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:c,type:e,key:d,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(667294);const c={},s=n.createContext(c);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);