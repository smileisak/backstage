/*! For license information please see adbbfc64.a59c5f53.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[596091],{336170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var s=r(785893),c=r(511151);const t={id:"plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase"},d=void 0,o={id:"reference/plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase",source:"@site/../docs/reference/plugin-search-backend-node.decoratorbase.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.decoratorbase",permalink:"/docs/next/reference/plugin-search-backend-node.decoratorbase",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.decoratorbase.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase"}},a={},i=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase",children:(0,s.jsx)(n.code,{children:"DecoratorBase"})})]}),"\n",(0,s.jsx)(n.p,{children:"Base class encapsulating simple async transformations. Useful as a base class for Backstage search decorators."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"abstract class DecoratorBase extends Transform \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Extends:"})," Transform"]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Constructor"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase._constructor_",children:"(constructor)()"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["Constructs a new instance of the ",(0,s.jsx)(n.code,{children:"DecoratorBase"})," class"]}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Method"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase.decorate",children:"decorate(document)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Receives a single indexable document. In your decorate method, you can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Resolve ",(0,s.jsx)(n.code,{children:"undefined"})," to indicate the record should be omitted. - Resolve a single modified document, which could contain new fields, edited fields, or removed fields. - Resolve an array of indexable documents, if the purpose if the decorator is to convert one document into multiple derivative documents."]}),"\n"]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase.finalize",children:"finalize()"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Any asynchronous teardown tasks can be performed here."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase.initialize",children:"initialize()"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Any asynchronous setup tasks can be performed here."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var s=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var s,t={},i=null,l=null;for(s in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,s)&&!a.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:c,type:e,key:i,ref:l,props:t,_owner:o.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(667294);const c={},t=s.createContext(c);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);