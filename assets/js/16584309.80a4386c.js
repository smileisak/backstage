/*! For license information please see 16584309.80a4386c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[999621],{481772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(785893),c=n(511151);const a={id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"},o=void 0,i={id:"reference/plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createfetchtemplateaction",permalink:"/docs/next/reference/plugin-scaffolder-backend.createfetchtemplateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createfetchtemplateaction",children:(0,r.jsx)(t.code,{children:"createFetchTemplateAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Downloads a skeleton, templates variables into file and directory names and content. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createFetchTemplateAction(options: {\n    reader: UrlReaderService;\n    integrations: ScmIntegrations;\n    additionalTemplateFilters?: Record<string, TemplateFilter>;\n    additionalTemplateGlobals?: Record<string, TemplateGlobal>;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    url: string;\n    targetPath?: string | undefined;\n    values: any;\n    templateFileExtension?: string | boolean | undefined;\n    copyWithoutRender?: string[] | undefined;\n    copyWithoutTemplating?: string[] | undefined;\n    cookiecutterCompat?: boolean | undefined;\n    replace?: boolean | undefined;\n    trimBlocks?: boolean | undefined;\n    lstripBlocks?: boolean | undefined;\n    token?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ reader: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; integrations: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; additionalTemplateFilters?: Record<string, ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templatefilter",children:"TemplateFilter"}),">; additionalTemplateGlobals?: Record<string, ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateglobal",children:"TemplateGlobal"}),">; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ url: string; targetPath?: string | undefined; values: any; templateFileExtension?: string | boolean | undefined; copyWithoutRender?: string[] | undefined; copyWithoutTemplating?: string[] | undefined; cookiecutterCompat?: boolean | undefined; replace?: boolean | undefined; trimBlocks?: boolean | undefined; lstripBlocks?: boolean | undefined; token?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function p(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(667294);const c={},a=r.createContext(c);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);