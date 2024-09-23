/*! For license information please see 05c28014.5191a321.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[839093],{972605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var n=t(785893),s=t(511151);const c={id:"backend-plugin-api.httprouterservice",title:"HttpRouterService",description:"API reference for HttpRouterService"},i=void 0,o={id:"reference/backend-plugin-api.httprouterservice",title:"HttpRouterService",description:"API reference for HttpRouterService",source:"@site/../docs/reference/backend-plugin-api.httprouterservice.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.httprouterservice",permalink:"/docs/next/reference/backend-plugin-api.httprouterservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.httprouterservice.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.httprouterservice",title:"HttpRouterService",description:"API reference for HttpRouterService"}},d={},a=[{value:"Methods",id:"methods",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.httprouterservice",children:(0,n.jsx)(r.code,{children:"HttpRouterService"})})]}),"\n",(0,n.jsx)(r.p,{children:"Allows plugins to register HTTP routes."}),"\n",(0,n.jsxs)(r.p,{children:["See the ",(0,n.jsx)(r.a,{href:"https://backstage.io/docs/backend-system/core-services/http-router",children:"service documentation"})," for more details."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface HttpRouterService \n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Method"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.httprouterservice.addauthpolicy",children:"addAuthPolicy(policy)"})}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds an auth policy to the router. This is used to allow unauthenticated or cookie based access to parts of a plugin's API."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.httprouterservice.use",children:"use(handler)"})}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["Registers an Express request handler under the plugin's base router. This typically makes its base path ",(0,n.jsx)(r.code,{children:"/api/<plugin-id>"}),"."]}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,p=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:p,props:c,_owner:o.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var n=t(667294);const s={},c=n.createContext(s);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);