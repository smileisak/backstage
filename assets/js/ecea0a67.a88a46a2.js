/*! For license information please see ecea0a67.a88a46a2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[472506],{438841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.extensionblueprint",title:"ExtensionBlueprint",description:"API reference for ExtensionBlueprint"},s=void 0,u={id:"reference/frontend-plugin-api.extensionblueprint",title:"ExtensionBlueprint",description:"API reference for ExtensionBlueprint",source:"@site/../docs/reference/frontend-plugin-api.extensionblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint",permalink:"/docs/reference/frontend-plugin-api.extensionblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensionblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensionblueprint",title:"ExtensionBlueprint",description:"API reference for ExtensionBlueprint"}},c={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:(0,r.jsx)(n.code,{children:"ExtensionBlueprint"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface ExtensionBlueprint<TKind extends string, TNamespace extends string | undefined, TName extends string | undefined, TParams, UOutput extends AnyExtensionDataRef, TInputs extends {\n    [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n        optional: boolean;\n        singleton: boolean;\n    }>;\n}, TConfig extends {\n    [key in string]: unknown;\n}, TConfigInput extends {\n    [key in string]: unknown;\n}, TDataRefs extends {\n    [name in string]: AnyExtensionDataRef;\n}> \n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Modifiers"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.datarefs",children:"dataRefs"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"TDataRefs"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.optional",children:"optional"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.singleton",children:"singleton"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.make",children:"make(args)"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",children:"makeWithOverrides(args)"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"Creates a new extension from the blueprint."}),(0,r.jsxs)(n.p,{children:["You must either pass ",(0,r.jsx)(n.code,{children:"params"})," directly, or define a ",(0,r.jsx)(n.code,{children:"factory"})," that can optionally call the original factory with the same params."]})]})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:u.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function m(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||h}function b(){}function j(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var _=j.prototype=new b;_.constructor=j,y(_,m.prototype),_.isPureReactComponent=!0;var g=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var o,i={},s=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(s=""+n.key),n)v.call(n,o)&&!E.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:s,ref:u,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,o,i,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+C(c,0):i,g(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),P(s,n,o,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),n.push(s)),1;if(c=0,i=""===i?".":i+":",g(e))for(var a=0;a<e.length;a++){var l=i+C(u=e[a],a);c+=P(u,n,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)c+=P(u=u.value,n,o,l=i+C(u,a++),s);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,n,t){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=o,n.Profiler=s,n.PureComponent=j,n.StrictMode=i,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,u=k.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in n)v.call(n,a)&&!E.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==c?c[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return T.current.useCallback(e,n)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,n){return T.current.useEffect(e,n)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,n,t){return T.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return T.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return T.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return T.current.useMemo(e,n)},n.useReducer=function(e,n,t){return T.current.useReducer(e,n,t)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return T.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>s});var r=t(667294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);