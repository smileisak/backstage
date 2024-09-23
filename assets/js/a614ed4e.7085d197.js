/*! For license information please see a614ed4e.7085d197.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[698057],{772794:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=n(785893),t=n(511151);const c={id:"plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore"},d=void 0,l={id:"reference/plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore",source:"@site/../docs/reference/plugin-scaffolder-backend.taskstore.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskstore",permalink:"/docs/next/reference/plugin-scaffolder-backend.taskstore",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskstore.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore"}},i={},a=[{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore",children:(0,r.jsx)(s.code,{children:"TaskStore"})})]}),"\n",(0,r.jsx)(s.p,{children:"TaskStore"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export interface TaskStore \n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.canceltask",children:"cancelTask(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.claimtask",children:"claimTask()"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.cleanworkspace",children:"cleanWorkspace({ taskId })?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.completetask",children:"completeTask(options)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.createtask",children:"createTask(options)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.emitlogevent",children:"emitLogEvent(options)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.gettask",children:"getTask(taskId)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.gettaskstate",children:"getTaskState({ taskId })?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.heartbeattask",children:"heartbeatTask(taskId)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.list",children:"list(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.list_1",children:"list(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.listevents",children:"listEvents(options)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.liststaletasks",children:"listStaleTasks(options)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.recovertasks",children:"recoverTasks(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.rehydrateworkspace",children:"rehydrateWorkspace(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.savetaskstate",children:"saveTaskState(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.serializeworkspace",children:"serializeWorkspace({ path, taskId, })?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskstore.shutdowntask",children:"shutdownTask(options)?"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},675251:(e,s,n)=>{var r=n(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var r,c={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,r)&&!i.hasOwnProperty(r)&&(c[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===c[r]&&(c[r]=s[r]);return{$$typeof:t,type:e,key:a,ref:o,props:c,_owner:l.current}}s.Fragment=c,s.jsx=a,s.jsxs=a},785893:(e,s,n)=>{e.exports=n(675251)},511151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var r=n(667294);const t={},c=r.createContext(t);function d(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);