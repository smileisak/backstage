/*! For license information please see 5b7bc110.0c36816c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[407514],{482444:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=o(785893),r=o(511151);const c={id:"plugin-techdocs-module-addons-contrib.lightbox",title:"LightBox()",description:"API reference for LightBox()"},s=void 0,i={id:"reference/plugin-techdocs-module-addons-contrib.lightbox",title:"LightBox()",description:"API reference for LightBox()",source:"@site/../docs/reference/plugin-techdocs-module-addons-contrib.lightbox.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-module-addons-contrib.lightbox",permalink:"/docs/next/reference/plugin-techdocs-module-addons-contrib.lightbox",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-module-addons-contrib.lightbox.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-module-addons-contrib.lightbox",title:"LightBox()",description:"API reference for LightBox()"}},d={},a=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-module-addons-contrib",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-module-addons-contrib.lightbox",children:(0,t.jsx)(n.code,{children:"LightBox"})})]}),"\n",(0,t.jsx)(n.p,{children:"This TechDocs addon allows users to open images in a lightbox on documentation pages, they can navigate between images if there are several on one page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"LightBox: () => JSX.Element | null\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"JSX.Element | null"}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The image size of the lightbox image is the same as the image size on the document page."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here's a simple example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { LightBox } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    // other plugin routes\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      <TechDocsAddons>\n        <LightBox />\n      </TechDocsAddons>\n    </Route>\n  </FlatRoutes>;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,o)=>{var t=o(667294),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var t,c={},a=null,l=null;for(t in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var t=o(667294);const r={},c=t.createContext(r);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);