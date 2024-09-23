/*! For license information please see d797f57b.2ccae936.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[149795],{78275:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(785893),n=t(511151);const i={id:"plugin-user-settings.usersettingsstorage.create",title:"UserSettingsStorage.create()",description:"API reference for UserSettingsStorage.create()"},c=void 0,a={id:"reference/plugin-user-settings.usersettingsstorage.create",title:"UserSettingsStorage.create()",description:"API reference for UserSettingsStorage.create()",source:"@site/../docs/reference/plugin-user-settings.usersettingsstorage.create.md",sourceDirName:"reference",slug:"/reference/plugin-user-settings.usersettingsstorage.create",permalink:"/docs/next/reference/plugin-user-settings.usersettingsstorage.create",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-user-settings.usersettingsstorage.create.md",tags:[],version:"current",frontMatter:{id:"plugin-user-settings.usersettingsstorage.create",title:"UserSettingsStorage.create()",description:"API reference for UserSettingsStorage.create()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-user-settings",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-user-settings"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-user-settings.usersettingsstorage",children:(0,s.jsx)(r.code,{children:"UserSettingsStorage"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-user-settings.usersettingsstorage.create",children:(0,s.jsx)(r.code,{children:"create"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"static create(options: {\n        fetchApi: FetchApi;\n        discoveryApi: DiscoveryApi;\n        errorApi: ErrorApi;\n        identityApi: IdentityApi;\n        signalApi?: SignalApi;\n        namespace?: string;\n    }): UserSettingsStorage;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"options"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["{ fetchApi: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.fetchapi",children:"FetchApi"}),"; discoveryApi: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.discoveryapi",children:"DiscoveryApi"}),"; errorApi: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.errorapi",children:"ErrorApi"}),"; identityApi: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.identityapi",children:"IdentityApi"}),"; signalApi?: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-signals-react.signalapi",children:"SignalApi"}),"; namespace?: string; }"]}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-user-settings.usersettingsstorage",children:"UserSettingsStorage"})})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},675251:(e,r,t)=>{var s=t(667294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,i={},d=null,p=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,s)&&!o.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:p,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>c});var s=t(667294);const n={},i=s.createContext(n);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);