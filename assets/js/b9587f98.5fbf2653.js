/*! For license information please see b9587f98.5fbf2653.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[259304],{460890:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=t(785893),n=t(511151);const a={id:"core-plugin-api.featureflagsapi",title:"FeatureFlagsApi",description:"API reference for FeatureFlagsApi"},i=void 0,l={id:"reference/core-plugin-api.featureflagsapi",title:"FeatureFlagsApi",description:"API reference for FeatureFlagsApi",source:"@site/../docs/reference/core-plugin-api.featureflagsapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.featureflagsapi",permalink:"/docs/next/reference/core-plugin-api.featureflagsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.featureflagsapi.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.featureflagsapi",title:"FeatureFlagsApi",description:"API reference for FeatureFlagsApi"}},c={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,s.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi",children:(0,s.jsx)(r.code,{children:"FeatureFlagsApi"})})]}),"\n",(0,s.jsx)(r.p,{children:"The feature flags API is used to toggle functionality to users across plugins and Backstage."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface FeatureFlagsApi \n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Plugins can use this API to register feature flags that they have available for users to enable/disable, and this API will centralize the current user's state of which feature flags they would like to enable."}),"\n",(0,s.jsx)(r.p,{children:"This is ideal for Backstage plugins, as well as your own App, to trial incomplete or unstable upcoming features. Although there will be a common interface for users to enable and disable feature flags, this API acts as another way to enable/disable."}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Method"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi.getregisteredflags",children:"getRegisteredFlags()"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Get a list of all registered flags."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi.isactive",children:"isActive(name)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Whether the feature flag with the given name is currently activated for the user."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi.registerflag",children:"registerFlag(flag)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Registers a new feature flag. Once a feature flag has been registered it can be toggled by users, and read back to enable or disable features."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi.save",children:"save(options)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Save the user's choice of feature flag states."}),"\n"]})]})]})]})]})}function f(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var s=t(667294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var s,a={},o=null,d=null;for(s in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:o,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var s=t(667294);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);