/*! For license information please see c36af531.24d5da02.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[686739],{704179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=n(785893),i=n(511151);const a={id:"plugin-auth-node.defaultidentityclient.authenticate",title:"DefaultIdentityClient.authenticate()",description:"API reference for DefaultIdentityClient.authenticate()"},c=void 0,s={id:"reference/plugin-auth-node.defaultidentityclient.authenticate",title:"DefaultIdentityClient.authenticate()",description:"API reference for DefaultIdentityClient.authenticate()",source:"@site/../docs/reference/plugin-auth-node.defaultidentityclient.authenticate.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.defaultidentityclient.authenticate",permalink:"/docs/next/reference/plugin-auth-node.defaultidentityclient.authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.defaultidentityclient.authenticate.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.defaultidentityclient.authenticate",title:"DefaultIdentityClient.authenticate()",description:"API reference for DefaultIdentityClient.authenticate()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.defaultidentityclient",children:(0,r.jsx)(t.code,{children:"DefaultIdentityClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.defaultidentityclient.authenticate",children:(0,r.jsx)(t.code,{children:"authenticate"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsx)(t.p,{children:"You should start to use getIdentity instead of authenticate to retrieve the user identity."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Verifies the given backstage identity token Returns a BackstageIdentity (user) matching the token. The method throws an error if verification fails."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"authenticate(token: string | undefined): Promise<BackstageIdentityResponse>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"token"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string | undefined"}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-node.backstageidentityresponse",children:"BackstageIdentityResponse"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,a={},o=null,l=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(667294);const i={},a=r.createContext(i);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);