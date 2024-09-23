/*! For license information please see 30747d4a.c780feba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[709700],{366725:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=r(785893),s=r(511151);const t={id:"plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()"},o=void 0,i={id:"reference/plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()",source:"@site/../docs/reference/plugin-search-backend-module-pg.pgsearchengine.from.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-pg.pgsearchengine.from",permalink:"/docs/next/reference/plugin-search-backend-module-pg.pgsearchengine.from",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-pg.pgsearchengine.from.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-pg",children:(0,c.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-pg"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-pg.pgsearchengine",children:(0,c.jsx)(n.code,{children:"PgSearchEngine"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-pg.pgsearchengine.from",children:(0,c.jsx)(n.code,{children:"from"})})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,c.jsx)(n.p,{children:"This will be removed in a future release, please use fromConfig instead"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"static from(options: {\n        database: DatabaseService;\n        config: Config;\n        logger?: LoggerService;\n    }): Promise<PgSearchEngine>;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"options"}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsxs)(n.p,{children:["{ database: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.databaseservice",children:"DatabaseService"}),"; config: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; logger?: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,c.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,c.jsxs)(n.p,{children:["Promise<",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-module-pg.pgsearchengine",children:"PgSearchEngine"}),">"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var c=r(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var c,t={},d=null,l=null;for(c in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,c)&&!a.hasOwnProperty(c)&&(t[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===t[c]&&(t[c]=n[c]);return{$$typeof:s,type:e,key:d,ref:l,props:t,_owner:i.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var c=r(667294);const s={},t=c.createContext(s);function o(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);