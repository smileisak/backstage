/*! For license information please see c37d06cb.3b0f786c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[342506],{300417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(785893),i=r(511151);const s={id:"integration.getgitealatestcommiturl",title:"getGiteaLatestCommitUrl()",description:"API reference for getGiteaLatestCommitUrl()"},a=void 0,o={id:"reference/integration.getgitealatestcommiturl",title:"getGiteaLatestCommitUrl()",description:"API reference for getGiteaLatestCommitUrl()",source:"@site/../docs/reference/integration.getgitealatestcommiturl.md",sourceDirName:"reference",slug:"/reference/integration.getgitealatestcommiturl",permalink:"/docs/next/reference/integration.getgitealatestcommiturl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getgitealatestcommiturl.md",tags:[],version:"current",frontMatter:{id:"integration.getgitealatestcommiturl",title:"getGiteaLatestCommitUrl()",description:"API reference for getGiteaLatestCommitUrl()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.getgitealatestcommiturl",children:(0,n.jsx)(t.code,{children:"getGiteaLatestCommitUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a repository branch, returns a URL for latest commit information."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getGiteaLatestCommitUrl(config: GiteaIntegrationConfig, url: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"config"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"The relevant provider config"}),"\n"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"url"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"string"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"A URL pointing to a repository branch"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://gitea.com/a/b/src/branchname",children:"https://gitea.com/a/b/src/branchname"})," or: ",(0,n.jsx)(t.a,{href:"https://gitea.com/api/v1/repos/a/b/git/commits/branchname",children:"https://gitea.com/api/v1/repos/a/b/git/commits/branchname"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(667294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);