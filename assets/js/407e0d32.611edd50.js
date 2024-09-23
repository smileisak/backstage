/*! For license information please see 407e0d32.611edd50.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296892],{887848:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(785893),i=n(511151);const o={id:"plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule()",description:"API reference for makeCreatePermissionRule()"},t=void 0,c={id:"reference/plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule()",description:"API reference for makeCreatePermissionRule()",source:"@site/../docs/reference/plugin-permission-node.makecreatepermissionrule.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.makecreatepermissionrule",permalink:"/docs/next/reference/plugin-permission-node.makecreatepermissionrule",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.makecreatepermissionrule.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.makecreatepermissionrule",title:"makeCreatePermissionRule()",description:"API reference for makeCreatePermissionRule()"}},a={},u=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.makecreatepermissionrule",children:(0,s.jsx)(r.code,{children:"makeCreatePermissionRule"})})]}),"\n",(0,s.jsx)(r.p,{children:"Helper for making plugin-specific createPermissionRule functions, that have the TResource and TQuery type parameters populated but infer the params from the supplied rule. This helps ensure that rules created for this plugin use consistent types for the resource and query."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"makeCreatePermissionRule: <TResource, TQuery, TResourceType extends string>() => <TParams extends PermissionRuleParams = undefined>(rule: PermissionRule<TResource, TQuery, TResourceType, TParams>) => PermissionRule<TResource, TQuery, TResourceType, TParams>\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["<TParams extends ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.permissionruleparams",children:"PermissionRuleParams"})," = undefined>(rule: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"<TResource, TQuery, TResourceType, TParams>) => ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"<TResource, TQuery, TResourceType, TParams>"]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var s=n(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var s,o={},u=null,l=null;for(s in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)t.call(r,s)&&!a.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(667294);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);