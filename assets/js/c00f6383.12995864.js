/*! For license information please see c00f6383.12995864.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[320243],{332790:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(785893),a=t(511151);const s={id:"frontend-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()"},o=void 0,c={id:"reference/frontend-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()",source:"@site/../docs/reference/frontend-plugin-api.createsubrouteref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createsubrouteref",permalink:"/docs/next/reference/frontend-plugin-api.createsubrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createsubrouteref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.createsubrouteref",children:(0,n.jsx)(r.code,{children:"createSubRouteRef"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Create a ",(0,n.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"})," from a route descriptor."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createSubRouteRef<Path extends string, ParentParams extends AnyRouteRefParams = never>(config: {\n    path: Path;\n    parent: RouteRef<ParentParams>;\n}): MakeSubRouteRef<PathParams<Path>, ParentParams>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"config"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ path: Path; parent: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"<ParentParams>; }"]}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Description of the route reference to be created."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"MakeSubRouteRef<PathParams<Path>, ParentParams>"})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,r,t)=>{var n=t(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:d,ref:u,props:s,_owner:c.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var n=t(667294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);