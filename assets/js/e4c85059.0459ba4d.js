/*! For license information please see e4c85059.0459ba4d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[194406],{342265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var n=t(785893),c=t(511151);const a={id:"core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"},s=void 0,p={id:"reference/core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()",source:"@site/../docs/reference/core-app-api.createspecializedapp.md",sourceDirName:"reference",slug:"/reference/core-app-api.createspecializedapp",permalink:"/docs/next/reference/core-app-api.createspecializedapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.createspecializedapp.md",tags:[],version:"current",frontMatter:{id:"core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"}},i={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.createspecializedapp",children:(0,n.jsx)(r.code,{children:"createSpecializedApp"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a new Backstage App where the full set of options are required."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createSpecializedApp(options: AppOptions): BackstageApp;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.appoptions",children:"AppOptions"})}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"A set of options for creating the app"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.backstageapp",children:"BackstageApp"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["You will most likely want to use ",(0,n.jsx)(r.a,{href:"/docs/next/reference/app-defaults.createapp",children:"createApp()"}),", however, this low-level API allows you to provide a full set of options, including your own ",(0,n.jsx)(r.code,{children:"components"}),", ",(0,n.jsx)(r.code,{children:"icons"}),", ",(0,n.jsx)(r.code,{children:"defaultApis"}),", and ",(0,n.jsx)(r.code,{children:"themes"}),". This is particularly useful if you are not using ",(0,n.jsx)(r.code,{children:"@backstage/core-components"})," or Material UI, as it allows you to avoid those dependencies completely."]})]})}function l(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,a={},o=null,d=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:c,type:e,key:o,ref:d,props:a,_owner:p.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>s});var n=t(667294);const c={},a=n.createContext(c);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);