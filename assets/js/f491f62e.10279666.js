/*! For license information please see f491f62e.10279666.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[11802],{775309:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(785893),o=t(511151);const i={id:"plugin-auth-node.getbearertokenfromauthorizationheader",title:"getBearerTokenFromAuthorizationHeader()",description:"API reference for getBearerTokenFromAuthorizationHeader()"},a=void 0,s={id:"reference/plugin-auth-node.getbearertokenfromauthorizationheader",title:"getBearerTokenFromAuthorizationHeader()",description:"API reference for getBearerTokenFromAuthorizationHeader()",source:"@site/../docs/reference/plugin-auth-node.getbearertokenfromauthorizationheader.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.getbearertokenfromauthorizationheader",permalink:"/docs/next/reference/plugin-auth-node.getbearertokenfromauthorizationheader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.getbearertokenfromauthorizationheader.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.getbearertokenfromauthorizationheader",title:"getBearerTokenFromAuthorizationHeader()",description:"API reference for getBearerTokenFromAuthorizationHeader()"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.getbearertokenfromauthorizationheader",children:(0,n.jsx)(r.code,{children:"getBearerTokenFromAuthorizationHeader"})})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.code,{children:"credentials"})," method of ",(0,n.jsx)(r.code,{children:"HttpAuthService"})," from ",(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})," instead"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Parses the given authorization header and returns the bearer token, or undefined if no bearer token is given."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function getBearerTokenFromAuthorizationHeader(authorizationHeader: unknown): string | undefined;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"authorizationHeader"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"unknown"}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"string | undefined"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["This function is explicitly built to tolerate bad inputs safely, so you may call it directly with e.g. the output of ",(0,n.jsx)(r.code,{children:"req.header('authorization')"})," without first checking that it exists."]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,r,t)=>{var n=t(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,h=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:h,props:i,_owner:s.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(667294);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);