/*! For license information please see ed656607.a928d3d0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[723997],{18696:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=l(785893),n=l(511151);const c={id:"plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()"},s=void 0,a={id:"reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",permalink:"/docs/next/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder",children:(0,t.jsx)(r.code,{children:"CatalogBuilder"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",children:(0,t.jsx)(r.code,{children:"setPlaceholderResolver"})})]}),"\n",(0,t.jsx)(r.p,{children:"Adds, or overwrites, a handler for placeholders (e.g. $file) in entity definition files."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"setPlaceholderResolver(key: string, resolver: PlaceholderResolver): CatalogBuilder;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"key"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:'The key that identifies the placeholder, e.g. "file"'}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"resolver"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-node.placeholderresolver",children:"PlaceholderResolver"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"The resolver that gets values for this placeholder"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},675251:(e,r,l)=>{var t=l(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,l){var t,c={},d=null,i=null;for(t in void 0!==l&&(d=""+l),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:i,props:c,_owner:a.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},785893:(e,r,l)=>{e.exports=l(675251)},511151:(e,r,l)=>{l.d(r,{Z:()=>a,a:()=>s});var t=l(667294);const n={},c=t.createContext(n);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);