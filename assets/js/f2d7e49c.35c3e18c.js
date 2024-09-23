/*! For license information please see f2d7e49c.35c3e18c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881857],{469572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>p,metadata:()=>a,toc:()=>i});var n=r(785893),s=r(511151);const p={id:"test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()"},c=void 0,a={id:"reference/test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()",source:"@site/../docs/reference/test-utils.createtestappwrapper.md",sourceDirName:"reference",slug:"/reference/test-utils.createtestappwrapper",permalink:"/docs/next/reference/test-utils.createtestappwrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.createtestappwrapper.md",tags:[],version:"current",frontMatter:{id:"test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()"}},o={},i=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils.createtestappwrapper",children:(0,n.jsx)(t.code,{children:"createTestAppWrapper"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a Wrapper component that wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function createTestAppWrapper(options?: TestAppOptions): (props: {\n    children: ReactNode;\n}) => JSX.Element;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"options"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils.testappoptions",children:"TestAppOptions"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Additional options for the rendering."]}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:"(props: { children: ReactNode; }) => JSX.Element"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),p=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,p={},i=null,d=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!o.hasOwnProperty(n)&&(p[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===p[n]&&(p[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:d,props:p,_owner:a.current}}t.Fragment=p,t.jsx=i,t.jsxs=i},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var n=r(667294);const s={},p=n.createContext(s);function c(e){const t=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(p.Provider,{value:t},e.children)}}}]);