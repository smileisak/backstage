/*! For license information please see 4fe929d5.eacc4cd1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[210231],{629638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(785893),i=n(511151);const s={id:"plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",title:"CatalogIdentityClient.resolveCatalogMembership()",description:"API reference for CatalogIdentityClient.resolveCatalogMembership()"},a=void 0,c={id:"reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",title:"CatalogIdentityClient.resolveCatalogMembership()",description:"API reference for CatalogIdentityClient.resolveCatalogMembership()",source:"@site/../docs/reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",permalink:"/docs/next/reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",title:"CatalogIdentityClient.resolveCatalogMembership()",description:"API reference for CatalogIdentityClient.resolveCatalogMembership()"}},o={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend.catalogidentityclient",children:(0,r.jsx)(t.code,{children:"CatalogIdentityClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend.catalogidentityclient.resolvecatalogmembership",children:(0,r.jsx)(t.code,{children:"resolveCatalogMembership"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Resolve additional entity claims from the catalog, using the passed-in entity names. Designed to be used within a ",(0,r.jsx)(t.code,{children:"signInResolver"})," where additional entity claims might be provided, but group membership and transient group membership lean on imported catalog relations."]}),"\n",(0,r.jsxs)(t.p,{children:["Returns a superset of the entity names that can be passed directly to ",(0,r.jsx)(t.code,{children:"issueToken"})," as ",(0,r.jsx)(t.code,{children:"ent"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"resolveCatalogMembership(query: {\n        entityRefs: string[];\n        logger?: LoggerService;\n    }): Promise<string[]>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"query"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ entityRefs: string[]; logger?: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"Promise<string[]>"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(667294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);