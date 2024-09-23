/*! For license information please see e6186116.7c150c76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[804142],{735311:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=i(785893),o=i(511151);const s={id:"plugin-permission-node.createconditionexports",title:"createConditionExports()",description:"API reference for createConditionExports()"},t=void 0,c={id:"reference/plugin-permission-node.createconditionexports",title:"createConditionExports()",description:"API reference for createConditionExports()",source:"@site/../docs/reference/plugin-permission-node.createconditionexports.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createconditionexports",permalink:"/docs/next/reference/plugin-permission-node.createconditionexports",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createconditionexports.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createconditionexports",title:"createConditionExports()",description:"API reference for createConditionExports()"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.createconditionexports",children:(0,r.jsx)(n.code,{children:"createConditionExports"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates the recommended condition-related exports for a given plugin based on the built-in ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s it supports."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"createConditionExports: <TResourceType extends string, TResource, TRules extends Record<string, PermissionRule<TResource, any, TResourceType>>>(options: {\n    pluginId: string;\n    resourceType: TResourceType;\n    rules: TRules;\n}) => {\n    conditions: Conditions<TRules>;\n    createConditionalDecision: (permission: ResourcePermission<TResourceType>, conditions: PermissionCriteria<PermissionCondition<TResourceType>>) => ConditionalPolicyDecision;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"{ pluginId: string; resourceType: TResourceType; rules: TRules; }"}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:["{ conditions: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.conditions",children:"Conditions"}),"<TRules>; createConditionalDecision: (permission: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),"<TResourceType>, conditions: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"}),"<",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"<TResourceType>>) => ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.conditionalpolicydecision",children:"ConditionalPolicyDecision"}),"; }"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["The function returns a ",(0,r.jsx)(n.code,{children:"conditions"})," object containing a ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"})," factory for each of the supplied ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s, along with a ",(0,r.jsx)(n.code,{children:"createConditionalDecision"})," function which builds the wrapper object needed to enclose conditions when authoring ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"})," implementations."]}),"\n",(0,r.jsxs)(n.p,{children:["Plugin authors should generally call this method with all the built-in ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s the plugin supports, and export the resulting ",(0,r.jsx)(n.code,{children:"conditions"})," object and ",(0,r.jsx)(n.code,{children:"createConditionalDecision"})," function so that they can be used by ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"})," authors."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},675251:(e,n,i)=>{var r=i(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var r,s={},l=null,p=null;for(r in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)t.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:p,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var r=i(667294);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);