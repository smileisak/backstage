/*! For license information please see 2f52082e.b912a501.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[257103],{306891:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=n(785893),i=n(511151);const t={id:"backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService"},o=void 0,c={id:"reference/backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService",source:"@site/../docs/reference/backend-plugin-api.permissionsservice.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.permissionsservice",permalink:"/docs/next/reference/backend-plugin-api.permissionsservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.permissionsservice.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService"}},d={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,r.jsx)(s.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/backend-plugin-api.permissionsservice",children:(0,r.jsx)(s.code,{children:"PermissionsService"})})]}),"\n",(0,r.jsx)(s.p,{children:"Permission system integration for authorization of user/service actions."}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"https://backstage.io/docs/permissions/overview",children:"permissions documentation"})," and the ",(0,r.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/core-services/permissions",children:"service documentation"})," for more details."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export interface PermissionsService extends PermissionEvaluator \n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Extends:"})," ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/backend-plugin-api.permissionsservice.authorize",children:"authorize(requests, options)"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsxs)(s.p,{children:["Evaluates ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-permission-common.permission",children:"Permissions"})," and returns definitive decisions."]}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/backend-plugin-api.permissionsservice.authorizeconditional",children:"authorizeConditional(requests, options)"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsxs)(s.p,{children:["Evaluates ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),"."]}),"\n"]})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,s,n)=>{var r=n(667294),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var r,t={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,r)&&!d.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:l,props:t,_owner:c.current}}s.Fragment=t,s.jsx=a,s.jsxs=a},785893:(e,s,n)=>{e.exports=n(675251)},511151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var r=n(667294);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);