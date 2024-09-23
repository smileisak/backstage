/*! For license information please see 1f8a6252.bce37971.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[272261],{779698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=n(785893),r=n(511151);const c={id:"core-compat-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"},s=void 0,a={id:"reference/core-compat-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi",source:"@site/../docs/reference/core-compat-api.multipleanalyticsapi.md",sourceDirName:"reference",slug:"/reference/core-compat-api.multipleanalyticsapi",permalink:"/docs/next/reference/core-compat-api.multipleanalyticsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-compat-api.multipleanalyticsapi.md",tags:[],version:"current",frontMatter:{id:"core-compat-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"}},l={},o=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-compat-api",children:(0,i.jsx)(t.code,{children:"@backstage/core-compat-api"})})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-compat-api.multipleanalyticsapi",children:(0,i.jsx)(t.code,{children:"MultipleAnalyticsApi"})})]}),"\n",(0,i.jsx)(t.p,{children:"An implementation of the AnalyticsApi that can be used to forward analytics events to multiple concrete implementations."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class MultipleAnalyticsApi implements AnalyticsApi, NewAnalyicsApi \n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Implements:"})," ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"}),", ",(0,i.jsx)(t.a,{href:"/docs/next/reference/frontend-plugin-api.analyticsapi",children:"NewAnalyicsApi"})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"createApiFactory({\n  api: analyticsApiRef,\n  deps: { configApi: configApiRef, identityApi: identityApiRef, storageApi: storageApiRef },\n  factory: ({ configApi, identityApi, storageApi }) =>\n    MultipleAnalyticsApi.fromApis([\n      VendorAnalyticsApi.fromConfig(configApi, { identityApi }),\n      CustomAnalyticsApi.fromConfig(configApi, { identityApi, storageApi }),\n    ]),\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Method"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(t.th,{children:["\n",(0,i.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/next/reference/core-compat-api.multipleanalyticsapi.captureevent",children:"captureEvent(event)"})}),"\n"]}),(0,i.jsx)(t.td,{children:"\n"}),(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:"Forward the event to all configured analytics API implementations."}),"\n"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/next/reference/core-compat-api.multipleanalyticsapi.fromapis",children:"fromApis(actualApis)"})}),"\n"]}),(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"static"})}),"\n"]}),(0,i.jsxs)(t.td,{children:["\n",(0,i.jsx)(t.p,{children:"Create an AnalyticsApi implementation from an array of concrete implementations."}),"\n"]})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},675251:(e,t,n)=>{var i=n(667294),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var i,c={},o=null,p=null;for(i in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:o,ref:p,props:c,_owner:a.current}}t.Fragment=c,t.jsx=o,t.jsxs=o},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(667294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);