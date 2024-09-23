/*! For license information please see 9fe60e4e.883d94f9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[89805],{629600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(785893),i=n(511151);const c={id:"integration.getbitbucketdefaultbranch",title:"getBitbucketDefaultBranch()",description:"API reference for getBitbucketDefaultBranch()"},s=void 0,a={id:"reference/integration.getbitbucketdefaultbranch",title:"getBitbucketDefaultBranch()",description:"API reference for getBitbucketDefaultBranch()",source:"@site/../docs/reference/integration.getbitbucketdefaultbranch.md",sourceDirName:"reference",slug:"/reference/integration.getbitbucketdefaultbranch",permalink:"/docs/next/reference/integration.getbitbucketdefaultbranch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getbitbucketdefaultbranch.md",tags:[],version:"current",frontMatter:{id:"integration.getbitbucketdefaultbranch",title:"getBitbucketDefaultBranch()",description:"API reference for getBitbucketDefaultBranch()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.getbitbucketdefaultbranch",children:(0,r.jsx)(t.code,{children:"getBitbucketDefaultBranch"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsx)(t.p,{children:"no longer in use, bitbucket integration replaced by integrations bitbucketCloud and bitbucketServer."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Given a URL pointing to a path on a provider, returns the default branch."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function getBitbucketDefaultBranch(url: string, config: BitbucketIntegrationConfig): Promise<string>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"url"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"A URL pointing to a path"}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"config"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.bitbucketintegrationconfig",children:"BitbucketIntegrationConfig"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"The relevant provider config"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"Promise<string>"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,c={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!o.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:c,_owner:a.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);