/*! For license information please see c4858043.1f657c0e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[587593],{178301:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(785893),s=n(511151);const a={id:"plugin-catalog-backend-module-msgraph.defaultusertransformer",title:"defaultUserTransformer()",description:"API reference for defaultUserTransformer()"},o=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",title:"defaultUserTransformer()",description:"API reference for defaultUserTransformer()",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",permalink:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.defaultusertransformer",title:"defaultUserTransformer()",description:"API reference for defaultUserTransformer()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",children:(0,t.jsx)(r.code,{children:"defaultUserTransformer"})})]}),"\n",(0,t.jsx)(r.p,{children:"The default implementation of the transformation from a graph user entry to a User entity."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function defaultUserTransformer(user: MicrosoftGraph.User, userPhoto?: string): Promise<UserEntity | undefined>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"user"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"MicrosoftGraph.User"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"userPhoto"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/next/reference/catalog-model.userentityv1alpha1",children:"UserEntity"})," | undefined>"]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:i,props:a,_owner:c.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var t=n(667294);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);