/*! For license information please see d74c3f64.f5f76467.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[386196],{967629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var t=n(785893),s=n(511151);const c={id:"backend-plugin-api.schedulerservice.triggertask",title:"SchedulerService.triggerTask()",description:"API reference for SchedulerService.triggerTask()"},i=void 0,a={id:"reference/backend-plugin-api.schedulerservice.triggertask",title:"SchedulerService.triggerTask()",description:"API reference for SchedulerService.triggerTask()",source:"@site/../docs/reference/backend-plugin-api.schedulerservice.triggertask.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservice.triggertask",permalink:"/docs/next/reference/backend-plugin-api.schedulerservice.triggertask",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.schedulerservice.triggertask.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.schedulerservice.triggertask",title:"SchedulerService.triggerTask()",description:"API reference for SchedulerService.triggerTask()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservice",children:(0,t.jsx)(r.code,{children:"SchedulerService"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservice.triggertask",children:(0,t.jsx)(r.code,{children:"triggerTask"})})]}),"\n",(0,t.jsx)(r.p,{children:"Manually triggers a task by ID."}),"\n",(0,t.jsx)(r.p,{children:"If the task doesn't exist, a NotFoundError is thrown. If the task is currently running, a ConflictError is thrown."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"triggerTask(id: string): Promise<void>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"id"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"The task ID"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"Promise<void>"})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,c={},o=null,l=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!d.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=o,r.jsxs=o},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var t=n(667294);const s={},c=t.createContext(s);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);