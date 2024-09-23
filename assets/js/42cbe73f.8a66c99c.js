/*! For license information please see 42cbe73f.8a66c99c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[519389],{372502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(785893),s=n(511151);const i={id:"plugin-catalog-react.useentitypresentation",title:"useEntityPresentation()",description:"API reference for useEntityPresentation()"},a=void 0,o={id:"reference/plugin-catalog-react.useentitypresentation",title:"useEntityPresentation()",description:"API reference for useEntityPresentation()",source:"@site/../docs/reference/plugin-catalog-react.useentitypresentation.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-react.useentitypresentation",permalink:"/docs/next/reference/plugin-catalog-react.useentitypresentation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-react.useentitypresentation.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-react.useentitypresentation",title:"useEntityPresentation()",description:"API reference for useEntityPresentation()"}},c={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-react",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-react.useentitypresentation",children:(0,r.jsx)(t.code,{children:"useEntityPresentation"})})]}),"\n",(0,r.jsx)(t.p,{children:"Returns information about how to represent an entity in the interface."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function useEntityPresentation(entityOrRef: Entity | CompoundEntityRef | string, context?: {\n    defaultKind?: string;\n    defaultNamespace?: string;\n}): EntityRefPresentationSnapshot;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"entityOrRef"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entity",children:"Entity"})," | ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})," | string"]}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"The entity to represent, or an entity ref to it. If you pass in an entity, it is assumed that it is NOT a partial one - i.e. only pass in an entity if you know that it was fetched in such a way that it contains all of the fields that the representation renderer needs."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"context"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"{ defaultKind?: string; defaultNamespace?: string; }"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Optional context that control details of the presentation."]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-react.entityrefpresentationsnapshot",children:"EntityRefPresentationSnapshot"})}),"\n",(0,r.jsx)(t.p,{children:"A snapshot of the entity presentation, which may change over time"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(667294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);