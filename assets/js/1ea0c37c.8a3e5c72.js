/*! For license information please see 1ea0c37c.8a3e5c72.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[455254],{983299:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=r(785893),s=r(511151);const c={id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"},o=void 0,a={id:"reference/plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()",source:"@site/../docs/reference/plugin-home-react.createcardextension.md",sourceDirName:"reference",slug:"/reference/plugin-home-react.createcardextension",permalink:"/docs/next/reference/plugin-home-react.createcardextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-home-react.createcardextension.md",tags:[],version:"current",frontMatter:{id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-home-react"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react.createcardextension",children:(0,t.jsx)(n.code,{children:"createCardExtension"})})]}),"\n",(0,t.jsx)(n.p,{children:"An extension creator to create card based components for the homepage"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'function createCardExtension<T>(options: {\n    title?: string;\n    components: () => Promise<ComponentParts>;\n    name?: string;\n    description?: string;\n    layout?: CardLayout;\n    settings?: CardSettings;\n}): import("@backstage/core-plugin-api").Extension<(props: CardExtensionProps<T>) => React.JSX.Element>;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["{ title?: string; components: () => Promise<",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react.componentparts",children:"ComponentParts"}),">; name?: string; description?: string; layout?: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react.cardlayout",children:"CardLayout"}),"; settings?: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react.cardsettings",children:"CardSettings"}),"; }"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:['import("@backstage/core-plugin-api").',(0,t.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.extension",children:"Extension"}),"<(props: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-home-react.cardextensionprops",children:"CardExtensionProps"}),"<T>) => React.JSX.Element>"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,c={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(667294);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);