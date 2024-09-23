/*! For license information please see c911d46c.2f486da4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[125452],{594621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(785893),c=t(511151);const a={id:"core-plugin-api.createapifactory",title:"createApiFactory()",description:"API reference for createApiFactory()"},i=void 0,s={id:"reference/core-plugin-api.createapifactory",title:"createApiFactory()",description:"API reference for createApiFactory()",source:"@site/../docs/reference/core-plugin-api.createapifactory.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.createapifactory",permalink:"/docs/next/reference/core-plugin-api.createapifactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.createapifactory.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.createapifactory",title:"createApiFactory()",description:"API reference for createApiFactory()"}},o={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.createapifactory",children:(0,n.jsx)(r.code,{children:"createApiFactory"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Used to infer types for a standalone ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apifactory",children:"ApiFactory"})," that isn't immediately passed to another function."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createApiFactory<Api, Impl extends Api, Deps extends {\n    [name in string]: unknown;\n}>(factory: ApiFactory<Api, Impl, Deps>): ApiFactory<Api, Impl, Deps>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"factory"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apifactory",children:"ApiFactory"}),"<Api, Impl, Deps>"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apifactory",children:"ApiFactory"}),"<Api, Impl, Deps>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"This function doesn't actually do anything, it's only used to infer types."})]})}function l(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,a={},p=null,d=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:c,type:e,key:p,ref:d,props:a,_owner:s.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var n=t(667294);const c={},a=n.createContext(c);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);