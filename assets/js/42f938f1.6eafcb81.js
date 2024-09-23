/*! For license information please see 42f938f1.6eafcb81.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[99280],{670597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=t(785893),s=t(511151);const i={id:"frontend-defaults.createpublicsigninapp",title:"createPublicSignInApp()",description:"API reference for createPublicSignInApp()"},c=void 0,a={id:"reference/frontend-defaults.createpublicsigninapp",title:"createPublicSignInApp()",description:"API reference for createPublicSignInApp()",source:"@site/../docs/reference/frontend-defaults.createpublicsigninapp.md",sourceDirName:"reference",slug:"/reference/frontend-defaults.createpublicsigninapp",permalink:"/docs/next/reference/frontend-defaults.createpublicsigninapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-defaults.createpublicsigninapp.md",tags:[],version:"current",frontMatter:{id:"frontend-defaults.createpublicsigninapp",title:"createPublicSignInApp()",description:"API reference for createPublicSignInApp()"}},l={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-defaults",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-defaults"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-defaults.createpublicsigninapp",children:(0,r.jsx)(n.code,{children:"createPublicSignInApp"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates an app that is suitable for the public sign-in page, for use in the ",(0,r.jsx)(n.code,{children:"index-public-experimental.tsx"})," file."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createPublicSignInApp(options?: CreateAppOptions): {\n    createRoot(): React.JSX.Element;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-defaults.createappoptions",children:"CreateAppOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"{ createRoot(): React.JSX.Element; }"}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["This app has an override for the ",(0,r.jsx)(n.code,{children:"app/layout"})," extension, which means that most extension typically installed in an app will be ignored. However, you can still for example install API and root element extensions."]}),"\n",(0,r.jsx)(n.p,{children:"A typical setup of this app will only install a custom sign-in page."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const app = createPublicSignInApp({\n  features: [signInPageModule],\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,i={},o=null,p=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:p,props:i,_owner:a.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(667294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);