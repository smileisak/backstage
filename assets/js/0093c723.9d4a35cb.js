/*! For license information please see 0093c723.9d4a35cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[932280],{993682:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=t(785893),n=t(511151);const c={id:"plugin-techdocs.techdocsstorageapi.getbaseurl",title:"TechDocsStorageApi.getBaseUrl()",description:"API reference for TechDocsStorageApi.getBaseUrl()"},o=void 0,i={id:"reference/plugin-techdocs.techdocsstorageapi.getbaseurl",title:"TechDocsStorageApi.getBaseUrl()",description:"API reference for TechDocsStorageApi.getBaseUrl()",source:"@site/../docs/reference/plugin-techdocs.techdocsstorageapi.getbaseurl.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.techdocsstorageapi.getbaseurl",permalink:"/docs/next/reference/plugin-techdocs.techdocsstorageapi.getbaseurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs.techdocsstorageapi.getbaseurl.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs.techdocsstorageapi.getbaseurl",title:"TechDocsStorageApi.getBaseUrl()",description:"API reference for TechDocsStorageApi.getBaseUrl()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs.techdocsstorageapi",children:(0,s.jsx)(r.code,{children:"TechDocsStorageApi"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs.techdocsstorageapi.getbaseurl",children:(0,s.jsx)(r.code,{children:"getBaseUrl"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"getBaseUrl(oldBaseUrl: string, entityId: CompoundEntityRef, path: string): Promise<string>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"oldBaseUrl"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"entityId"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"path"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"Promise<string>"})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var s=t(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var s,c={},a=null,l=null;for(s in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:n,type:e,key:a,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var s=t(667294);const n={},c=s.createContext(n);function o(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);