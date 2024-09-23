/*! For license information please see 6c48785d.290382c4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[494258],{846461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(785893),a=n(511151);const c={id:"plugin-scaffolder-backend.createcatalogregisteraction",title:"createCatalogRegisterAction()",description:"API reference for createCatalogRegisterAction()"},o=void 0,s={id:"reference/plugin-scaffolder-backend.createcatalogregisteraction",title:"createCatalogRegisterAction()",description:"API reference for createCatalogRegisterAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createcatalogregisteraction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createcatalogregisteraction",permalink:"/docs/next/reference/plugin-scaffolder-backend.createcatalogregisteraction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createcatalogregisteraction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createcatalogregisteraction",title:"createCatalogRegisterAction()",description:"API reference for createCatalogRegisterAction()"}},i={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createcatalogregisteraction",children:(0,r.jsx)(t.code,{children:"createCatalogRegisterAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Registers entities from a catalog descriptor file in the workspace into the software catalog."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createCatalogRegisterAction(options: {\n    catalogClient: CatalogApi;\n    integrations: ScmIntegrations;\n    auth?: AuthService;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    catalogInfoUrl: string;\n    optional?: boolean | undefined;\n} | {\n    repoContentsUrl: string;\n    catalogInfoPath?: string | undefined;\n    optional?: boolean | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ catalogClient: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogapi",children:"CatalogApi"}),"; integrations: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; auth?: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:"AuthService"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ catalogInfoUrl: string; optional?: boolean | undefined; } | { repoContentsUrl: string; catalogInfoPath?: string | undefined; optional?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:c,_owner:s.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(667294);const a={},c=r.createContext(a);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);