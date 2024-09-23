/*! For license information please see ad6bdf9b.8787ed68.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[147300],{614420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(785893),i=n(511151);const s={id:"integration.scmintegration",title:"ScmIntegration",description:"API reference for ScmIntegration"},o=void 0,c={id:"reference/integration.scmintegration",title:"ScmIntegration",description:"API reference for ScmIntegration",source:"@site/../docs/reference/integration.scmintegration.md",sourceDirName:"reference",slug:"/reference/integration.scmintegration",permalink:"/docs/next/reference/integration.scmintegration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.scmintegration.md",tags:[],version:"current",frontMatter:{id:"integration.scmintegration",title:"ScmIntegration",description:"API reference for ScmIntegration"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegration",children:(0,r.jsx)(t.code,{children:"ScmIntegration"})})]}),"\n",(0,r.jsx)(t.p,{children:"Encapsulates a single SCM integration."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface ScmIntegration \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Property"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegration.title",children:"title"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"A human readable title for the integration, that can be shown to users to differentiate between different integrations."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegration.type",children:"type"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:'The type of integration, e.g. "github".'}),"\n"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegration.resolveediturl",children:"resolveEditUrl(url)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Resolves the edit URL for a file within the SCM system."}),"\n",(0,r.jsx)(t.p,{children:"Most SCM systems have a web interface that allows viewing and editing files in the repository. The returned URL directly jumps into the edit mode for the file. If this is not possible, the integration can fall back to a URL to view the file in the web interface."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegration.resolveurl",children:"resolveUrl(options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Resolves an absolute or relative URL in relation to a base URL."}),"\n",(0,r.jsx)(t.p,{children:"This method is adapted for use within SCM systems, so relative URLs are within the context of the root of the hierarchy pointed to by the base URL."}),"\n",(0,r.jsxs)(t.p,{children:["For example, if the base URL is ",(0,r.jsx)(t.code,{children:"<repo root url>/folder/a.yaml"}),", i.e. within the file tree of a certain repo, an absolute path of ",(0,r.jsx)(t.code,{children:"/b.yaml"})," does not resolve to ",(0,r.jsx)(t.code,{children:"https://hostname/b.yaml"})," but rather to ",(0,r.jsx)(t.code,{children:"<repo root url>/b.yaml"})," inside the file tree of that same repo."]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(667294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);