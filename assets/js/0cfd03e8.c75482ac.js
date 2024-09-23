/*! For license information please see 0cfd03e8.c75482ac.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[311254],{447060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=n(785893),r=n(511151);const c={id:"backend-test-utils.testcaches.init",title:"TestCaches.init()",description:"API reference for TestCaches.init()"},i=void 0,a={id:"reference/backend-test-utils.testcaches.init",title:"TestCaches.init()",description:"API reference for TestCaches.init()",source:"@site/../docs/reference/backend-test-utils.testcaches.init.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.testcaches.init",permalink:"/docs/next/reference/backend-test-utils.testcaches.init",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.testcaches.init.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.testcaches.init",title:"TestCaches.init()",description:"API reference for TestCaches.init()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils",children:(0,s.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testcaches",children:(0,s.jsx)(t.code,{children:"TestCaches"})})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testcaches.init",children:(0,s.jsx)(t.code,{children:"init"})})]}),"\n",(0,s.jsx)(t.p,{children:"Returns a fresh, empty cache for the given driver."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"init(id: TestCacheId): Promise<{\n        store: string;\n        connection: string;\n        keyv: Keyv;\n    }>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"id"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testcacheid",children:"TestCacheId"})}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"The ID of the cache to use, e.g. 'REDIS_7'"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,s.jsx)(t.p,{children:"Promise<{ store: string; connection: string; keyv: Keyv; }>"}),"\n",(0,s.jsx)(t.p,{children:"Cache connection properties"})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,t,n)=>{var s=n(667294),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var s,c={},o=null,h=null;for(s in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:r,type:e,key:o,ref:h,props:c,_owner:a.current}}t.Fragment=c,t.jsx=o,t.jsxs=o},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(667294);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);