/*! For license information please see bb21400a.c73f9d67.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[700595],{585257:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(785893),s=r(511151);const i={id:"backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions"},c=void 0,o={id:"reference/backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions",source:"@site/../docs/reference/backend-plugin-api.rootservicefactoryoptions.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.rootservicefactoryoptions",permalink:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.rootservicefactoryoptions.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.rootservicefactoryoptions",title:"RootServiceFactoryOptions",description:"API reference for RootServiceFactoryOptions"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions",children:(0,t.jsx)(n.code,{children:"RootServiceFactoryOptions"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface RootServiceFactoryOptions<TService, TInstances extends 'singleton' | 'multiton', TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown>;\n}> \n"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Property"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.deps",children:"deps"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"TDeps"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.initialization",children:"initialization?"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"'always' | 'lazy'"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," The initialization strategy for the service factory. This service is root scoped and will use ",(0,t.jsx)(n.code,{children:"always"})," by default."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.service",children:"service"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.serviceref",children:"ServiceRef"}),"<TService, 'root', TInstances>"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.factory",children:"factory(deps)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var t=r(667294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);