/*! For license information please see b433f7db.47b00f2d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[526309],{143996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var c=n(785893),r=n(511151);const i={id:"plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",title:"BitbucketCloudEntityProvider",description:"API reference for BitbucketCloudEntityProvider"},d=void 0,o={id:"reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",title:"BitbucketCloudEntityProvider",description:"API reference for BitbucketCloudEntityProvider",source:"@site/../docs/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",permalink:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",title:"BitbucketCloudEntityProvider",description:"API reference for BitbucketCloudEntityProvider"}},l={},s=[{value:"Methods",id:"methods",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud",children:(0,c.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-cloud"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider",children:(0,c.jsx)(t.code,{children:"BitbucketCloudEntityProvider"})})]}),"\n",(0,c.jsxs)(t.p,{children:["Discovers catalog files located in [Bitbucket Cloud](",(0,c.jsx)(t.a,{href:"https://bitbucket.org",children:"https://bitbucket.org"}),"). The provider will search your Bitbucket Cloud account and register catalog files matching the configured path as Location entity and via following processing steps add all contained catalog entities. This can be useful as an alternative to static locations or manually adding things to the catalog."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"class BitbucketCloudEntityProvider implements EntityProvider \n"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Implements:"})," ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})]}),"\n",(0,c.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Method"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.connect",children:"connect(connection)"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.fromconfig",children:"fromConfig(config, options)"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:"static"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.getprovidername",children:"getProviderName()"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.gettaskid",children:"getTaskId()"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.onrepopush",children:"onRepoPush(event)"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-bitbucket-cloud.bitbucketcloudentityprovider.refresh",children:"refresh(logger)"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"}),(0,c.jsx)(t.td,{children:"\n"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var c=n(667294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var c,i={},s=null,u=null;for(c in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)d.call(t,c)&&!l.hasOwnProperty(c)&&(i[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===i[c]&&(i[c]=t[c]);return{$$typeof:r,type:e,key:s,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var c=n(667294);const r={},i=c.createContext(r);function d(e){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(i.Provider,{value:t},e.children)}}}]);