/*! For license information please see 969ce3a1.88c179d0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[211976],{339073:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(785893),a=n(511151);const s={id:"backend-plugin-api.resolvepackagepath",title:"resolvePackagePath()",description:"API reference for resolvePackagePath()"},c=void 0,i={id:"reference/backend-plugin-api.resolvepackagepath",title:"resolvePackagePath()",description:"API reference for resolvePackagePath()",source:"@site/../docs/reference/backend-plugin-api.resolvepackagepath.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.resolvepackagepath",permalink:"/docs/next/reference/backend-plugin-api.resolvepackagepath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.resolvepackagepath.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.resolvepackagepath",title:"resolvePackagePath()",description:"API reference for resolvePackagePath()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.resolvepackagepath",children:(0,t.jsx)(r.code,{children:"resolvePackagePath"})})]}),"\n",(0,t.jsx)(r.p,{children:"Resolve a path relative to the root of a package directory. Additional path arguments are resolved relative to the package dir."}),"\n",(0,t.jsxs)(r.p,{children:["This is particularly useful when you want to access assets shipped with your backend plugin package. When doing so, do not forget to include the assets in your published package by adding them to ",(0,t.jsx)(r.code,{children:"files"})," in your ",(0,t.jsx)(r.code,{children:"package.json"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function resolvePackagePath(name: string, ...paths: string[]): string;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"name"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"paths"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string[]"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"string"})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(667294);const a={},s=t.createContext(a);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);