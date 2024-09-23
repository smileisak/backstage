/*! For license information please see 13ea340f.8cd5ec60.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[361595],{316891:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(785893),s=n(511151);const o={id:"plugin-permission-node.serverpermissionclient.fromconfig",title:"ServerPermissionClient.fromConfig()",description:"API reference for ServerPermissionClient.fromConfig()"},t=void 0,c={id:"reference/plugin-permission-node.serverpermissionclient.fromconfig",title:"ServerPermissionClient.fromConfig()",description:"API reference for ServerPermissionClient.fromConfig()",source:"@site/../docs/reference/plugin-permission-node.serverpermissionclient.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.serverpermissionclient.fromconfig",permalink:"/docs/next/reference/plugin-permission-node.serverpermissionclient.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.serverpermissionclient.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.serverpermissionclient.fromconfig",title:"ServerPermissionClient.fromConfig()",description:"API reference for ServerPermissionClient.fromConfig()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,i.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.serverpermissionclient",children:(0,i.jsx)(r.code,{children:"ServerPermissionClient"})})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.serverpermissionclient.fromconfig",children:(0,i.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(config: Config, options: {\n        discovery: DiscoveryService;\n        tokenManager?: TokenManager;\n        auth?: AuthService;\n    }): ServerPermissionClient;\n"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"config"}),"\n"]}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/next/reference/config.config",children:"Config"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"options"}),"\n"]}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsxs)(r.p,{children:["{ discovery: ",(0,i.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),"; tokenManager?: TokenManager; auth?: ",(0,i.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:"AuthService"}),"; }"]}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.serverpermissionclient",children:"ServerPermissionClient"})})]})}function f(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},675251:(e,r,n)=>{var i=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var i,o={},l=null,a=null;for(i in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)t.call(r,i)&&!d.hasOwnProperty(i)&&(o[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===o[i]&&(o[i]=r[i]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var i=n(667294);const s={},o=i.createContext(s);function t(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);