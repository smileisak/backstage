/*! For license information please see 27353838.4addc87d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[445836],{974286:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(785893),s=t(511151);const c={id:"core-app-api.urlpatterndiscovery",title:"UrlPatternDiscovery",description:"API reference for UrlPatternDiscovery"},i=void 0,o={id:"reference/core-app-api.urlpatterndiscovery",title:"UrlPatternDiscovery",description:"API reference for UrlPatternDiscovery",source:"@site/../docs/reference/core-app-api.urlpatterndiscovery.md",sourceDirName:"reference",slug:"/reference/core-app-api.urlpatterndiscovery",permalink:"/docs/next/reference/core-app-api.urlpatterndiscovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.urlpatterndiscovery.md",tags:[],version:"current",frontMatter:{id:"core-app-api.urlpatterndiscovery",title:"UrlPatternDiscovery",description:"API reference for UrlPatternDiscovery"}},a={},d=[{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.urlpatterndiscovery",children:(0,n.jsx)(r.code,{children:"UrlPatternDiscovery"})})]}),"\n",(0,n.jsx)(r.p,{children:"UrlPatternDiscovery is a lightweight DiscoveryApi implementation. It uses a single template string to construct URLs for each plugin."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class UrlPatternDiscovery implements DiscoveryApi \n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Implements:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.discoveryapi",children:"DiscoveryApi"})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Method"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.urlpatterndiscovery.compile",children:"compile(pattern)"})}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"static"})}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["Creates a new UrlPatternDiscovery given a template. The the only interpolation done for the template is to replace instances of ",(0,n.jsx)(r.code,{children:"{{pluginId}}"})," with the ID of the plugin being requested."]}),"\n",(0,n.jsxs)(r.p,{children:["Example pattern: ",(0,n.jsx)(r.code,{children:"http://localhost:7007/api/{{ pluginId }}"})]}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.urlpatterndiscovery.getbaseurl",children:"getBaseUrl(pluginId)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsx)(r.td,{children:"\n"})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,c={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:l,props:c,_owner:o.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var n=t(667294);const s={},c=n.createContext(s);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);