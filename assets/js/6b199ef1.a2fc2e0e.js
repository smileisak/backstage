/*! For license information please see 6b199ef1.a2fc2e0e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[136671],{638469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(785893),s=n(511151);const c={id:"backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user"},d=void 0,i={id:"reference/backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user",source:"@site/../docs/reference/backend-test-utils.mockcredentials.user.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockcredentials.user",permalink:"/docs/next/reference/backend-test-utils.mockcredentials.user",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.mockcredentials.user.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user"}},o={},a=[{value:"Functions",id:"functions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials",children:(0,r.jsx)(t.code,{children:"mockCredentials"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials.user",children:(0,r.jsx)(t.code,{children:"user"})})]}),"\n",(0,r.jsx)(t.p,{children:"Utilities related to user credentials."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"namespace user \n"})}),"\n",(0,r.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Function"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials.user.header",children:"header(userEntityRef)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Returns an authorization header with a mocked user token. If a payload is provided it will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials.user.invalidheader",children:"invalidHeader()"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials.user.invalidtoken",children:"invalidToken()"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockcredentials.user.token",children:"token(userEntityRef)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a mocked user token. If a payload is provided it will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,c={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,r)&&!o.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:l,props:c,_owner:i.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var r=n(667294);const s={},c=r.createContext(s);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);