/*! For license information please see 2f7667be.2be44f81.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[538475],{953319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(785893),c=n(511151);const o={id:"catalog-client.catalogclient.getlocationbyref",title:"CatalogClient.getLocationByRef()",description:"API reference for CatalogClient.getLocationByRef()"},a=void 0,i={id:"reference/catalog-client.catalogclient.getlocationbyref",title:"CatalogClient.getLocationByRef()",description:"API reference for CatalogClient.getLocationByRef()",source:"@site/../docs/reference/catalog-client.catalogclient.getlocationbyref.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogclient.getlocationbyref",permalink:"/docs/next/reference/catalog-client.catalogclient.getlocationbyref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogclient.getlocationbyref.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogclient.getlocationbyref",title:"CatalogClient.getLocationByRef()",description:"API reference for CatalogClient.getLocationByRef()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient",children:(0,r.jsx)(t.code,{children:"CatalogClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient.getlocationbyref",children:(0,r.jsx)(t.code,{children:"getLocationByRef"})})]}),"\n",(0,r.jsx)(t.p,{children:"Gets a registered location by its ref."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getLocationByRef(locationRef: string, options?: CatalogRequestOptions): Promise<Location | undefined>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"locationRef"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:['A location ref, e.g. "url:',(0,r.jsx)(t.a,{href:"https://github.com/",children:"https://github.com/"}),'..."']}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Additional options"]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.location_2",children:"Location"})," | undefined>"]})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,d=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const c={},o=r.createContext(c);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);