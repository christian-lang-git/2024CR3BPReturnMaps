var rT=Object.defineProperty;var oT=(t,e,n)=>e in t?rT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ye=(t,e,n)=>(oT(t,typeof e!="symbol"?e+"":e,n),n);function sT(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Pp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ux={exports:{}},Vu={},dx={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),aT=Symbol.for("react.portal"),lT=Symbol.for("react.fragment"),cT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),fT=Symbol.for("react.context"),hT=Symbol.for("react.forward_ref"),pT=Symbol.for("react.suspense"),mT=Symbol.for("react.memo"),_T=Symbol.for("react.lazy"),Lm=Symbol.iterator;function vT(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var fx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hx=Object.assign,px={};function ta(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||fx}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mx(){}mx.prototype=ta.prototype;function Ip(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||fx}var Dp=Ip.prototype=new mx;Dp.constructor=Ip;hx(Dp,ta.prototype);Dp.isPureReactComponent=!0;var Um=Array.isArray,_x=Object.prototype.hasOwnProperty,Np={current:null},vx={key:!0,ref:!0,__self:!0,__source:!0};function gx(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)_x.call(e,i)&&!vx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ml,type:t,key:o,ref:s,props:r,_owner:Np.current}}function gT(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function xT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function Ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xT(""+t.key):e.toString(36)}function zc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ml:case aT:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ld(s,0):i,Um(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),zc(r,e,n,"",function(c){return c})):r!=null&&(Lp(r)&&(r=gT(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Um(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ld(o,a);s+=zc(o,e,n,l,r)}else if(l=vT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ld(o,a++),s+=zc(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function kl(t,e,n){if(t==null)return t;var i=[],r=0;return zc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function yT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Fc={transition:null},ST={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Fc,ReactCurrentOwner:Np};function xx(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:kl,forEach:function(t,e,n){kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kl(t,function(){e++}),e},toArray:function(t){return kl(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=ta;Je.Fragment=lT;Je.Profiler=uT;Je.PureComponent=Ip;Je.StrictMode=cT;Je.Suspense=pT;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST;Je.act=xx;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hx({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Np.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_x.call(e,l)&&!vx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ml,type:t.type,key:r,ref:o,props:i,_owner:s}};Je.createContext=function(t){return t={$$typeof:fT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dT,_context:t},t.Consumer=t};Je.createElement=gx;Je.createFactory=function(t){var e=gx.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:hT,render:t}};Je.isValidElement=Lp;Je.lazy=function(t){return{$$typeof:_T,_payload:{_status:-1,_result:t},_init:yT}};Je.memo=function(t,e){return{$$typeof:mT,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Fc.transition;Fc.transition={};try{t()}finally{Fc.transition=e}};Je.unstable_act=xx;Je.useCallback=function(t,e){return fn.current.useCallback(t,e)};Je.useContext=function(t){return fn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return fn.current.useEffect(t,e)};Je.useId=function(){return fn.current.useId()};Je.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return fn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Je.useRef=function(t){return fn.current.useRef(t)};Je.useState=function(t){return fn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return fn.current.useTransition()};Je.version="18.3.1";dx.exports=Je;var S=dx.exports;const we=Pp(S),Up=sT({__proto__:null,default:we},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=S,TT=Symbol.for("react.element"),wT=Symbol.for("react.fragment"),MT=Object.prototype.hasOwnProperty,bT=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AT={key:!0,ref:!0,__self:!0,__source:!0};function yx(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)MT.call(e,i)&&!AT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:TT,type:t,key:o,ref:s,props:r,_owner:bT.current}}Vu.Fragment=wT;Vu.jsx=yx;Vu.jsxs=yx;ux.exports=Vu;var L=ux.exports,uh={},Sx={exports:{}},zn={},Ex={exports:{}},Tx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,H){var W=N.length;N.push(H);e:for(;0<W;){var re=W-1>>>1,ee=N[re];if(0<r(ee,H))N[re]=H,N[W]=ee,W=re;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],W=N.pop();if(W!==H){N[0]=W;e:for(var re=0,ee=N.length,fe=ee>>>1;re<fe;){var $=2*(re+1)-1,q=N[$],te=$+1,P=N[te];if(0>r(q,W))te<ee&&0>r(P,q)?(N[re]=P,N[te]=W,re=te):(N[re]=q,N[$]=W,re=$);else if(te<ee&&0>r(P,W))N[re]=P,N[te]=W,re=te;else break e}}return H}function r(N,H){var W=N.sortIndex-H.sortIndex;return W!==0?W:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function y(N){if(v=!1,x(N),!_)if(n(l)!==null)_=!0,X(w);else{var H=n(c);H!==null&&K(y,H.startTime-N)}}function w(N,H){_=!1,v&&(v=!1,h(C),C=-1),p=!0;var W=f;try{for(x(H),d=n(l);d!==null&&(!(d.expirationTime>H)||N&&!U());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ee=re(d.expirationTime<=H);H=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),x(H)}else i(l);d=n(l)}if(d!==null)var fe=!0;else{var $=n(c);$!==null&&K(y,$.startTime-H),fe=!1}return fe}finally{d=null,f=W,p=!1}}var T=!1,b=null,C=-1,M=5,E=-1;function U(){return!(t.unstable_now()-E<M)}function O(){if(b!==null){var N=t.unstable_now();E=N;var H=!0;try{H=b(!0,N)}finally{H?D():(T=!1,b=null)}}else T=!1}var D;if(typeof g=="function")D=function(){g(O)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,F=B.port2;B.port1.onmessage=O,D=function(){F.postMessage(null)}}else D=function(){m(O,0)};function X(N){b=N,T||(T=!0,D())}function K(N,H){C=m(function(){N(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(w))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var W=f;f=H;try{return N()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=f;f=N;try{return H()}finally{f=W}},t.unstable_scheduleCallback=function(N,H,W){var re=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=W+ee,N={id:u++,callback:H,priorityLevel:N,startTime:W,expirationTime:ee,sortIndex:-1},W>re?(N.sortIndex=W,e(c,N),n(l)===null&&N===n(c)&&(v?(h(C),C=-1):v=!0,K(y,W-re))):(N.sortIndex=ee,e(l,N),_||p||(_=!0,X(w))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var H=f;return function(){var W=f;f=H;try{return N.apply(this,arguments)}finally{f=W}}}})(Tx);Ex.exports=Tx;var RT=Ex.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT=S,On=RT;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wx=new Set,el={};function Uo(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(el[t]=e,t=0;t<e.length;t++)wx.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,PT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},Fm={};function IT(t){return dh.call(Fm,t)?!0:dh.call(zm,t)?!1:PT.test(t)?Fm[t]=!0:(zm[t]=!0,!1)}function DT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NT(t,e,n,i){if(e===null||typeof e>"u"||DT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Op,zp);Xt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Op,zp);Xt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Op,zp);Xt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NT(e,n,r,i)&&(n=null),i||r===null?IT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=CT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),bx=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Ax=Symbol.for("react.offscreen"),km=Symbol.iterator;function va(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Ud;function Da(t){if(Ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ud=e&&e[1]||""}return`
`+Ud+t}var Od=!1;function zd(t,e){if(!t||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function LT(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=zd(t.type,!1),t;case 11:return t=zd(t.type.render,!1),t;case 1:return t=zd(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case fh:return"Profiler";case kp:return"StrictMode";case hh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bx:return(t.displayName||"Context")+".Consumer";case Mx:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function UT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OT(t){var e=Rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=OT(t))}function Cx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _h(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Px(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function vh(t,e){Px(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Na=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Na(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Ix(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,Nx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zT=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){zT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function Lx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function Ux(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var FT=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(FT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wh=null,Cs=null,Ps=null;function Hm(t){if(t=Rl(t)){if(typeof wh!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=ju(e),wh(t.stateNode,t.type,e))}}function Ox(t){Cs?Ps?Ps.push(t):Ps=[t]:Cs=t}function zx(){if(Cs){var t=Cs,e=Ps;if(Ps=Cs=null,Hm(t),e)for(t=0;t<e.length;t++)Hm(e[t])}}function Fx(t,e){return t(e)}function kx(){}var Fd=!1;function Bx(t,e,n){if(Fd)return t(e,n);Fd=!0;try{return Fx(t,e,n)}finally{Fd=!1,(Cs!==null||Ps!==null)&&(kx(),zx())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var i=ju(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Mh=!1;if(Yi)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Mh=!1}function kT(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ba=!1,nu=null,iu=!1,bh=null,BT={onError:function(t){Ba=!0,nu=t}};function $T(t,e,n,i,r,o,s,a,l){Ba=!1,nu=null,kT.apply(BT,arguments)}function VT(t,e,n,i,r,o,s,a,l){if($T.apply(this,arguments),Ba){if(Ba){var c=nu;Ba=!1,nu=null}else throw Error(ce(198));iu||(iu=!0,bh=c)}}function Oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Oo(t)!==t)throw Error(ce(188))}function GT(t){var e=t.alternate;if(!e){if(e=Oo(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wm(r),t;if(o===i)return Wm(r),e;o=o.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Vx(t){return t=GT(t),t!==null?Gx(t):null}function Gx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gx(t);if(e!==null)return e;t=t.sibling}return null}var Hx=On.unstable_scheduleCallback,Xm=On.unstable_cancelCallback,HT=On.unstable_shouldYield,WT=On.unstable_requestPaint,Rt=On.unstable_now,XT=On.unstable_getCurrentPriorityLevel,Gp=On.unstable_ImmediatePriority,Wx=On.unstable_UserBlockingPriority,ru=On.unstable_NormalPriority,jT=On.unstable_LowPriority,Xx=On.unstable_IdlePriority,Gu=null,Ei=null;function YT(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:ZT,qT=Math.log,KT=Math.LN2;function ZT(t){return t>>>=0,t===0?32:31-(qT(t)/KT|0)|0}var Gl=64,Hl=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=La(a):(o&=s,o!==0&&(i=La(o)))}else s=n&~r,s!==0?i=La(s):o!==0&&(i=La(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function JT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-oi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=JT(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jx(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function ew(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Yx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qx,Wp,Kx,Zx,Jx,Rh=!1,Wl=[],Er=null,Tr=null,wr=null,il=new Map,rl=new Map,_r=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function xa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Rl(e),e!==null&&Wp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function nw(t,e,n,i,r){switch(e){case"focusin":return Er=xa(Er,t,e,n,i,r),!0;case"dragenter":return Tr=xa(Tr,t,e,n,i,r),!0;case"mouseover":return wr=xa(wr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return il.set(o,xa(il.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,rl.set(o,xa(rl.get(o)||null,t,e,n,i,r)),!0}return!1}function Qx(t){var e=mo(t.target);if(e!==null){var n=Oo(e);if(n!==null){if(e=n.tag,e===13){if(e=$x(n),e!==null){t.blockedOn=e,Jx(t.priority,function(){Kx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Th=i,n.target.dispatchEvent(i),Th=null}else return e=Rl(n),e!==null&&Wp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){kc(t)&&n.delete(e)}function iw(){Rh=!1,Er!==null&&kc(Er)&&(Er=null),Tr!==null&&kc(Tr)&&(Tr=null),wr!==null&&kc(wr)&&(wr=null),il.forEach(Ym),rl.forEach(Ym)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Rh||(Rh=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,iw)))}function ol(t){function e(r){return ya(r,t)}if(0<Wl.length){ya(Wl[0],t);for(var n=1;n<Wl.length;n++){var i=Wl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&ya(Er,t),Tr!==null&&ya(Tr,t),wr!==null&&ya(wr,t),il.forEach(e),rl.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Qx(n),n.blockedOn===null&&_r.shift()}var Is=er.ReactCurrentBatchConfig,su=!0;function rw(t,e,n,i){var r=at,o=Is.transition;Is.transition=null;try{at=1,Xp(t,e,n,i)}finally{at=r,Is.transition=o}}function ow(t,e,n,i){var r=at,o=Is.transition;Is.transition=null;try{at=4,Xp(t,e,n,i)}finally{at=r,Is.transition=o}}function Xp(t,e,n,i){if(su){var r=Ch(t,e,n,i);if(r===null)qd(t,e,i,au,n),jm(t,i);else if(nw(r,t,e,n,i))i.stopPropagation();else if(jm(t,i),e&4&&-1<tw.indexOf(t)){for(;r!==null;){var o=Rl(r);if(o!==null&&qx(o),o=Ch(t,e,n,i),o===null&&qd(t,e,i,au,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else qd(t,e,i,null,n)}}var au=null;function Ch(t,e,n,i){if(au=null,t=Vp(i),t=mo(t),t!==null)if(e=Oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XT()){case Gp:return 1;case Wx:return 4;case ru:case jT:return 16;case Xx:return 536870912;default:return 16}default:return 16}}var yr=null,jp=null,Bc=null;function ty(){if(Bc)return Bc;var t,e=jp,n=e.length,i,r="value"in yr?yr.value:yr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Bc=r.slice(t,1<i?1-i:void 0)}function $c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function qm(){return!1}function Fn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xl:qm,this.isPropagationStopped=qm,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=Fn(na),Al=Tt({},na,{view:0,detail:0}),sw=Fn(Al),Bd,$d,Sa,Hu=Tt({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(Bd=t.screenX-Sa.screenX,$d=t.screenY-Sa.screenY):$d=Bd=0,Sa=t),Bd)},movementY:function(t){return"movementY"in t?t.movementY:$d}}),Km=Fn(Hu),aw=Tt({},Hu,{dataTransfer:0}),lw=Fn(aw),cw=Tt({},Al,{relatedTarget:0}),Vd=Fn(cw),uw=Tt({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=Fn(uw),fw=Tt({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hw=Fn(fw),pw=Tt({},na,{data:0}),Zm=Fn(pw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vw[t])?!!e[t]:!1}function qp(){return gw}var xw=Tt({},Al,{key:function(t){if(t.key){var e=mw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_w[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qp,charCode:function(t){return t.type==="keypress"?$c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yw=Fn(xw),Sw=Tt({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Fn(Sw),Ew=Tt({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qp}),Tw=Fn(Ew),ww=Tt({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mw=Fn(ww),bw=Tt({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Aw=Fn(bw),Rw=[9,13,27,32],Kp=Yi&&"CompositionEvent"in window,$a=null;Yi&&"documentMode"in document&&($a=document.documentMode);var Cw=Yi&&"TextEvent"in window&&!$a,ny=Yi&&(!Kp||$a&&8<$a&&11>=$a),Qm=" ",e_=!1;function iy(t,e){switch(t){case"keyup":return Rw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Pw(t,e){switch(t){case"compositionend":return ry(e);case"keypress":return e.which!==32?null:(e_=!0,Qm);case"textInput":return t=e.data,t===Qm&&e_?null:t;default:return null}}function Iw(t,e){if(ms)return t==="compositionend"||!Kp&&iy(t,e)?(t=ty(),Bc=jp=yr=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var Dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dw[t.type]:e==="textarea"}function oy(t,e,n,i){Ox(i),e=lu(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Va=null,sl=null;function Nw(t){_y(t,0)}function Wu(t){var e=gs(t);if(Cx(e))return t}function Lw(t,e){if(t==="change")return e}var sy=!1;if(Yi){var Gd;if(Yi){var Hd="oninput"in document;if(!Hd){var n_=document.createElement("div");n_.setAttribute("oninput","return;"),Hd=typeof n_.oninput=="function"}Gd=Hd}else Gd=!1;sy=Gd&&(!document.documentMode||9<document.documentMode)}function i_(){Va&&(Va.detachEvent("onpropertychange",ay),sl=Va=null)}function ay(t){if(t.propertyName==="value"&&Wu(sl)){var e=[];oy(e,sl,t,Vp(t)),Bx(Nw,e)}}function Uw(t,e,n){t==="focusin"?(i_(),Va=e,sl=n,Va.attachEvent("onpropertychange",ay)):t==="focusout"&&i_()}function Ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(sl)}function zw(t,e){if(t==="click")return Wu(e)}function Fw(t,e){if(t==="input"||t==="change")return Wu(e)}function kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:kw;function al(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!dh.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function r_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function o_(t,e){var n=r_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r_(n)}}function ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Bw(t){var e=cy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(i!==null&&Zp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=o_(n,o);var s=o_(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $w=Yi&&"documentMode"in document&&11>=document.documentMode,_s=null,Ph=null,Ga=null,Ih=!1;function s_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||_s==null||_s!==tu(i)||(i=_s,"selectionStart"in i&&Zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&al(Ga,i)||(Ga=i,i=lu(Ph,"onSelect"),0<i.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Wd={},uy={};Yi&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Xu(t){if(Wd[t])return Wd[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uy)return Wd[t]=e[n];return t}var dy=Xu("animationend"),fy=Xu("animationiteration"),hy=Xu("animationstart"),py=Xu("transitionend"),my=new Map,a_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){my.set(t,e),Uo(e,[t])}for(var Xd=0;Xd<a_.length;Xd++){var jd=a_[Xd],Vw=jd.toLowerCase(),Gw=jd[0].toUpperCase()+jd.slice(1);Wr(Vw,"on"+Gw)}Wr(dy,"onAnimationEnd");Wr(fy,"onAnimationIteration");Wr(hy,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(py,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function l_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,VT(i,e,void 0,t),t.currentTarget=null}function _y(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;l_(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;l_(r,a,c),o=l}}}if(iu)throw t=bh,iu=!1,bh=null,t}function pt(t,e){var n=e[Oh];n===void 0&&(n=e[Oh]=new Set);var i=t+"__bubble";n.has(i)||(vy(e,t,2,!1),n.add(i))}function Yd(t,e,n){var i=0;e&&(i|=4),vy(n,t,i,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Yl]){t[Yl]=!0,wx.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||Yd(n,!1,t),Yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,Yd("selectionchange",!1,e))}}function vy(t,e,n,i){switch(ey(e)){case 1:var r=rw;break;case 4:r=ow;break;default:r=Xp}n=r.bind(null,e,n,t),r=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qd(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=mo(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Bx(function(){var c=o,u=Vp(n),d=[];e:{var f=my.get(t);if(f!==void 0){var p=Yp,_=t;switch(t){case"keypress":if($c(n)===0)break e;case"keydown":case"keyup":p=yw;break;case"focusin":_="focus",p=Vd;break;case"focusout":_="blur",p=Vd;break;case"beforeblur":case"afterblur":p=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tw;break;case dy:case fy:case hy:p=dw;break;case py:p=Mw;break;case"scroll":p=sw;break;case"wheel":p=Aw;break;case"copy":case"cut":case"paste":p=hw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jm}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=nl(g,h),y!=null&&v.push(cl(g,y,x)))),m)break;g=g.return}0<v.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Th&&(_=n.relatedTarget||n.fromElement)&&(mo(_)||_[qi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?mo(_):null,_!==null&&(m=Oo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=Km,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Jm,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:gs(p),x=_==null?f:gs(_),f=new v(y,g+"leave",p,n,u),f.target=m,f.relatedTarget=x,y=null,mo(u)===c&&(v=new v(h,g+"enter",_,n,u),v.target=x,v.relatedTarget=m,y=v),m=y,p&&_)t:{for(v=p,h=_,g=0,x=v;x;x=Vo(x))g++;for(x=0,y=h;y;y=Vo(y))x++;for(;0<g-x;)v=Vo(v),g--;for(;0<x-g;)h=Vo(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=Vo(v),h=Vo(h)}v=null}else v=null;p!==null&&c_(d,f,p,v,!1),_!==null&&m!==null&&c_(d,m,_,v,!0)}}e:{if(f=c?gs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Lw;else if(t_(f))if(sy)w=Fw;else{w=Ow;var T=Uw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=zw);if(w&&(w=w(t,c))){oy(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&gh(f,"number",f.value)}switch(T=c?gs(c):window,t){case"focusin":(t_(T)||T.contentEditable==="true")&&(_s=T,Ph=c,Ga=null);break;case"focusout":Ga=Ph=_s=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,s_(d,n,u);break;case"selectionchange":if($w)break;case"keydown":case"keyup":s_(d,n,u)}var b;if(Kp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ms?iy(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(ny&&n.locale!=="ko"&&(ms||C!=="onCompositionStart"?C==="onCompositionEnd"&&ms&&(b=ty()):(yr=u,jp="value"in yr?yr.value:yr.textContent,ms=!0)),T=lu(c,C),0<T.length&&(C=new Zm(C,t,null,n,u),d.push({event:C,listeners:T}),b?C.data=b:(b=ry(n),b!==null&&(C.data=b)))),(b=Cw?Pw(t,n):Iw(t,n))&&(c=lu(c,"onBeforeInput"),0<c.length&&(u=new Zm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}_y(d,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=nl(t,n),o!=null&&i.unshift(cl(t,o,r)),o=nl(t,e),o!=null&&i.push(cl(t,o,r))),t=t.return}return i}function Vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function c_(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=nl(n,o),l!=null&&s.unshift(cl(n,l,a))):r||(l=nl(n,o),l!=null&&s.push(cl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Ww=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function u_(t){return(typeof t=="string"?t:""+t).replace(Ww,`
`).replace(Xw,"")}function ql(t,e,n){if(e=u_(e),u_(t)!==e&&n)throw Error(ce(425))}function cu(){}var Dh=null,Nh=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,jw=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,Yw=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(t){return d_.resolve(null).then(t).catch(qw)}:Uh;function qw(t){setTimeout(function(){throw t})}function Kd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ol(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ol(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function f_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),_i="__reactFiber$"+ia,ul="__reactProps$"+ia,qi="__reactContainer$"+ia,Oh="__reactEvents$"+ia,Kw="__reactListeners$"+ia,Zw="__reactHandles$"+ia;function mo(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=f_(t);t!==null;){if(n=t[_i])return n;t=f_(t)}return e}t=n,n=t.parentNode}return null}function Rl(t){return t=t[_i]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function ju(t){return t[ul]||null}var zh=[],xs=-1;function Xr(t){return{current:t}}function vt(t){0>xs||(t.current=zh[xs],zh[xs]=null,xs--)}function ut(t,e){xs++,zh[xs]=t.current,t.current=e}var zr={},rn=Xr(zr),xn=Xr(!1),Ro=zr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function uu(){vt(xn),vt(rn)}function h_(t,e,n){if(rn.current!==zr)throw Error(ce(168));ut(rn,e),ut(xn,n)}function gy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,UT(t)||"Unknown",r));return Tt({},n,i)}function du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Ro=rn.current,ut(rn,t),ut(xn,xn.current),!0}function p_(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=gy(t,e,Ro),i.__reactInternalMemoizedMergedChildContext=t,vt(xn),vt(rn),ut(rn,t)):vt(xn),ut(xn,n)}var $i=null,Yu=!1,Zd=!1;function xy(t){$i===null?$i=[t]:$i.push(t)}function Jw(t){Yu=!0,xy(t)}function jr(){if(!Zd&&$i!==null){Zd=!0;var t=0,e=at;try{var n=$i;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}$i=null,Yu=!1}catch(r){throw $i!==null&&($i=$i.slice(t+1)),Hx(Gp,jr),r}finally{at=e,Zd=!1}}return null}var ys=[],Ss=0,fu=null,hu=0,$n=[],Vn=0,Co=null,Gi=1,Hi="";function ao(t,e){ys[Ss++]=hu,ys[Ss++]=fu,fu=t,hu=e}function yy(t,e,n){$n[Vn++]=Gi,$n[Vn++]=Hi,$n[Vn++]=Co,Co=t;var i=Gi;t=Hi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var o=32-oi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Gi=1<<32-oi(e)+r|n<<r|i,Hi=o+t}else Gi=1<<o|n<<r|i,Hi=t}function Jp(t){t.return!==null&&(ao(t,1),yy(t,1,0))}function Qp(t){for(;t===fu;)fu=ys[--Ss],ys[Ss]=null,hu=ys[--Ss],ys[Ss]=null;for(;t===Co;)Co=$n[--Vn],$n[Vn]=null,Hi=$n[--Vn],$n[Vn]=null,Gi=$n[--Vn],$n[Vn]=null}var Nn=null,In=null,xt=!1,ni=null;function Sy(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function m_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,In=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Co!==null?{id:Gi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,In=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(xt){var e=In;if(e){var n=e;if(!m_(t,e)){if(Fh(t))throw Error(ce(418));e=Mr(n.nextSibling);var i=Nn;e&&m_(t,e)?Sy(i,n):(t.flags=t.flags&-4097|2,xt=!1,Nn=t)}}else{if(Fh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,xt=!1,Nn=t}}}function __(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Kl(t){if(t!==Nn)return!1;if(!xt)return __(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=In)){if(Fh(t))throw Ey(),Error(ce(418));for(;e;)Sy(t,e),e=Mr(e.nextSibling)}if(__(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Nn?Mr(t.stateNode.nextSibling):null;return!0}function Ey(){for(var t=In;t;)t=Mr(t.nextSibling)}function $s(){In=Nn=null,xt=!1}function e0(t){ni===null?ni=[t]:ni.push(t)}var Qw=er.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function v_(t){var e=t._init;return e(t._payload)}function Ty(t){function e(h,g){if(t){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Cr(h,g),h.index=0,h.sibling=null,h}function o(h,g,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,x,y){return g===null||g.tag!==6?(g=of(x,h.mode,y),g.return=h,g):(g=r(g,x),g.return=h,g)}function l(h,g,x,y){var w=x.type;return w===ps?u(h,g,x.props.children,y,x.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pr&&v_(w)===g.type)?(y=r(g,x.props),y.ref=Ea(h,g,x),y.return=h,y):(y=Yc(x.type,x.key,x.props,null,h.mode,y),y.ref=Ea(h,g,x),y.return=h,y)}function c(h,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=sf(x,h.mode,y),g.return=h,g):(g=r(g,x.children||[]),g.return=h,g)}function u(h,g,x,y,w){return g===null||g.tag!==7?(g=To(x,h.mode,y,w),g.return=h,g):(g=r(g,x),g.return=h,g)}function d(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=of(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bl:return x=Yc(g.type,g.key,g.props,null,h.mode,x),x.ref=Ea(h,null,g),x.return=h,x;case hs:return g=sf(g,h.mode,x),g.return=h,g;case pr:var y=g._init;return d(h,y(g._payload),x)}if(Na(g)||va(g))return g=To(g,h.mode,x,null),g.return=h,g;Zl(h,g)}return null}function f(h,g,x,y){var w=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:return x.key===w?l(h,g,x,y):null;case hs:return x.key===w?c(h,g,x,y):null;case pr:return w=x._init,f(h,g,w(x._payload),y)}if(Na(x)||va(x))return w!==null?null:u(h,g,x,y,null);Zl(h,x)}return null}function p(h,g,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(g,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return h=h.get(y.key===null?x:y.key)||null,l(g,h,y,w);case hs:return h=h.get(y.key===null?x:y.key)||null,c(g,h,y,w);case pr:var T=y._init;return p(h,g,x,T(y._payload),w)}if(Na(y)||va(y))return h=h.get(x)||null,u(g,h,y,w,null);Zl(g,y)}return null}function _(h,g,x,y){for(var w=null,T=null,b=g,C=g=0,M=null;b!==null&&C<x.length;C++){b.index>C?(M=b,b=null):M=b.sibling;var E=f(h,b,x[C],y);if(E===null){b===null&&(b=M);break}t&&b&&E.alternate===null&&e(h,b),g=o(E,g,C),T===null?w=E:T.sibling=E,T=E,b=M}if(C===x.length)return n(h,b),xt&&ao(h,C),w;if(b===null){for(;C<x.length;C++)b=d(h,x[C],y),b!==null&&(g=o(b,g,C),T===null?w=b:T.sibling=b,T=b);return xt&&ao(h,C),w}for(b=i(h,b);C<x.length;C++)M=p(b,h,C,x[C],y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?C:M.key),g=o(M,g,C),T===null?w=M:T.sibling=M,T=M);return t&&b.forEach(function(U){return e(h,U)}),xt&&ao(h,C),w}function v(h,g,x,y){var w=va(x);if(typeof w!="function")throw Error(ce(150));if(x=w.call(x),x==null)throw Error(ce(151));for(var T=w=null,b=g,C=g=0,M=null,E=x.next();b!==null&&!E.done;C++,E=x.next()){b.index>C?(M=b,b=null):M=b.sibling;var U=f(h,b,E.value,y);if(U===null){b===null&&(b=M);break}t&&b&&U.alternate===null&&e(h,b),g=o(U,g,C),T===null?w=U:T.sibling=U,T=U,b=M}if(E.done)return n(h,b),xt&&ao(h,C),w;if(b===null){for(;!E.done;C++,E=x.next())E=d(h,E.value,y),E!==null&&(g=o(E,g,C),T===null?w=E:T.sibling=E,T=E);return xt&&ao(h,C),w}for(b=i(h,b);!E.done;C++,E=x.next())E=p(b,h,C,E.value,y),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?C:E.key),g=o(E,g,C),T===null?w=E:T.sibling=E,T=E);return t&&b.forEach(function(O){return e(h,O)}),xt&&ao(h,C),w}function m(h,g,x,y){if(typeof x=="object"&&x!==null&&x.type===ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:e:{for(var w=x.key,T=g;T!==null;){if(T.key===w){if(w=x.type,w===ps){if(T.tag===7){n(h,T.sibling),g=r(T,x.props.children),g.return=h,h=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pr&&v_(w)===T.type){n(h,T.sibling),g=r(T,x.props),g.ref=Ea(h,T,x),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===ps?(g=To(x.props.children,h.mode,y,x.key),g.return=h,h=g):(y=Yc(x.type,x.key,x.props,null,h.mode,y),y.ref=Ea(h,g,x),y.return=h,h=y)}return s(h);case hs:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=r(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=sf(x,h.mode,y),g.return=h,h=g}return s(h);case pr:return T=x._init,m(h,g,T(x._payload),y)}if(Na(x))return _(h,g,x,y);if(va(x))return v(h,g,x,y);Zl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,x),g.return=h,h=g):(n(h,g),g=of(x,h.mode,y),g.return=h,h=g),s(h)):n(h,g)}return m}var Vs=Ty(!0),wy=Ty(!1),pu=Xr(null),mu=null,Es=null,t0=null;function n0(){t0=Es=mu=null}function i0(t){var e=pu.current;vt(pu),t._currentValue=e}function Bh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){mu=t,t0=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(t0!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(mu===null)throw Error(ce(308));Es=t,mu.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var _o=null;function r0(t){_o===null?_o=[t]:_o.push(t)}function My(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,r0(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function o0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,r0(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}function g_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,i){var r=t.updateQueue;mr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Tt({},d,f);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Io|=s,t.lanes=s,t.memoizedState=d}}function x_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Cl={},Ti=Xr(Cl),dl=Xr(Cl),fl=Xr(Cl);function vo(t){if(t===Cl)throw Error(ce(174));return t}function s0(t,e){switch(ut(fl,e),ut(dl,t),ut(Ti,Cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}vt(Ti),ut(Ti,e)}function Gs(){vt(Ti),vt(dl),vt(fl)}function Ay(t){vo(fl.current);var e=vo(Ti.current),n=yh(e,t.type);e!==n&&(ut(dl,t),ut(Ti,n))}function a0(t){dl.current===t&&(vt(Ti),vt(dl))}var yt=Xr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jd=[];function l0(){for(var t=0;t<Jd.length;t++)Jd[t]._workInProgressVersionPrimary=null;Jd.length=0}var Gc=er.ReactCurrentDispatcher,Qd=er.ReactCurrentBatchConfig,Po=0,St=null,Nt=null,Ft=null,gu=!1,Ha=!1,hl=0,eM=0;function Kt(){throw Error(ce(321))}function c0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function u0(t,e,n,i,r,o){if(Po=o,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gc.current=t===null||t.memoizedState===null?rM:oM,t=n(i,r),Ha){o=0;do{if(Ha=!1,hl=0,25<=o)throw Error(ce(301));o+=1,Ft=Nt=null,e.updateQueue=null,Gc.current=sM,t=n(i,r)}while(Ha)}if(Gc.current=xu,e=Nt!==null&&Nt.next!==null,Po=0,Ft=Nt=St=null,gu=!1,e)throw Error(ce(300));return t}function d0(){var t=hl!==0;return hl=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Xn(){if(Nt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Nt=t;else{if(t===null)throw Error(ce(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function pl(t,e){return typeof e=="function"?e(t):e}function ef(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Po&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,St.lanes|=u,Io|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,ai(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,St.lanes|=o,Io|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tf(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ai(o,e.memoizedState)||(gn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Ry(){}function Cy(t,e){var n=St,i=Xn(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,gn=!0),i=i.queue,f0(Dy.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,ml(9,Iy.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ce(349));Po&30||Py(n,e,r)}return r}function Py(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iy(t,e,n,i){e.value=n,e.getSnapshot=i,Ny(e)&&Ly(t)}function Dy(t,e,n){return n(function(){Ny(e)&&Ly(t)})}function Ny(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Ly(t){var e=Ki(t,1);e!==null&&si(e,t,1,-1)}function y_(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=iM.bind(null,St,t),[e.memoizedState,t]}function ml(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uy(){return Xn().memoizedState}function Hc(t,e,n,i){var r=hi();St.flags|=t,r.memoizedState=ml(1|e,n,void 0,i===void 0?null:i)}function qu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var o=void 0;if(Nt!==null){var s=Nt.memoizedState;if(o=s.destroy,i!==null&&c0(i,s.deps)){r.memoizedState=ml(e,n,o,i);return}}St.flags|=t,r.memoizedState=ml(1|e,n,o,i)}function S_(t,e){return Hc(8390656,8,t,e)}function f0(t,e){return qu(2048,8,t,e)}function Oy(t,e){return qu(4,2,t,e)}function zy(t,e){return qu(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ky(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,Fy.bind(null,e,t),n)}function h0(){}function By(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&c0(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $y(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&c0(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vy(t,e,n){return Po&21?(ai(n,e)||(n=jx(),St.lanes|=n,Io|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function tM(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Qd.transition;Qd.transition={};try{t(!1),e()}finally{at=n,Qd.transition=i}}function Gy(){return Xn().memoizedState}function nM(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hy(t))Wy(e,n);else if(n=My(t,e,n,i),n!==null){var r=un();si(n,t,i,r),Xy(n,e,i)}}function iM(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hy(t))Wy(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,s)){var l=e.interleaved;l===null?(r.next=r,r0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=My(t,e,r,i),n!==null&&(r=un(),si(n,t,i,r),Xy(n,e,i))}}function Hy(t){var e=t.alternate;return t===St||e!==null&&e===St}function Wy(t,e){Ha=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hp(t,n)}}var xu={readContext:Wn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},rM={readContext:Wn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:S_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hc(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=nM.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:y_,useDebugValue:h0,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=y_(!1),e=t[0];return t=tM.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=hi();if(xt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Bt===null)throw Error(ce(349));Po&30||Py(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,S_(Dy.bind(null,i,o,t),[t]),i.flags|=2048,ml(9,Iy.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=hi(),e=Bt.identifierPrefix;if(xt){var n=Hi,i=Gi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oM={readContext:Wn,useCallback:By,useContext:Wn,useEffect:f0,useImperativeHandle:ky,useInsertionEffect:Oy,useLayoutEffect:zy,useMemo:$y,useReducer:ef,useRef:Uy,useState:function(){return ef(pl)},useDebugValue:h0,useDeferredValue:function(t){var e=Xn();return Vy(e,Nt.memoizedState,t)},useTransition:function(){var t=ef(pl)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Cy,useId:Gy,unstable_isNewReconciler:!1},sM={readContext:Wn,useCallback:By,useContext:Wn,useEffect:f0,useImperativeHandle:ky,useInsertionEffect:Oy,useLayoutEffect:zy,useMemo:$y,useReducer:tf,useRef:Uy,useState:function(){return tf(pl)},useDebugValue:h0,useDeferredValue:function(t){var e=Xn();return Nt===null?e.memoizedState=t:Vy(e,Nt.memoizedState,t)},useTransition:function(){var t=tf(pl)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Cy,useId:Gy,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $h(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?Oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Rr(t),o=Xi(i,r);o.payload=e,n!=null&&(o.callback=n),e=br(t,o,r),e!==null&&(si(e,t,r,i),Vc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Rr(t),o=Xi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=br(t,o,r),e!==null&&(si(e,t,r,i),Vc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Rr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(si(e,t,i,n),Vc(e,t,i))}};function E_(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(r,o):!0}function jy(t,e,n){var i=!1,r=zr,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(r=yn(e)?Ro:rn.current,i=e.contextTypes,o=(i=i!=null)?Bs(t,r):zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function T_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},o0(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Wn(o):(o=yn(e)?Ro:rn.current,r.context=Bs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($h(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ku.enqueueReplaceState(r,r.state,null),_u(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=LT(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aM=typeof WeakMap=="function"?WeakMap:Map;function Yy(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Su||(Su=!0,Qh=i),Gh(t,e)},n}function qy(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Gh(t,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function w_(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=SM.bind(null,t,e,n),e.then(t,t))}function M_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function b_(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var lM=er.ReactCurrentOwner,gn=!1;function cn(t,e,n,i){e.child=t===null?wy(e,null,n,i):Vs(e,t.child,n,i)}function A_(t,e,n,i,r){n=n.render;var o=e.ref;return Ds(e,r),i=u0(t,e,n,i,o,r),n=d0(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&n&&Jp(e),e.flags|=1,cn(t,e,i,r),e.child)}function R_(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!S0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ky(t,e,o,i,r)):(t=Yc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(s,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Cr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ky(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(al(o,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Hh(t,e,n,i,r)}function Zy(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ws,An),An|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ws,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ut(ws,An),An|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ut(ws,An),An|=i;return cn(t,e,r,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,i,r){var o=yn(n)?Ro:rn.current;return o=Bs(e,o),Ds(e,r),n=u0(t,e,n,i,o,r),i=d0(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&i&&Jp(e),e.flags|=1,cn(t,e,n,r),e.child)}function C_(t,e,n,i,r){if(yn(n)){var o=!0;du(e)}else o=!1;if(Ds(e,r),e.stateNode===null)Wc(t,e),jy(e,n,i),Vh(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=yn(n)?Ro:rn.current,c=Bs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&T_(e,s,i,c),mr=!1;var f=e.memoizedState;s.state=f,_u(e,i,s,r),l=e.memoizedState,a!==i||f!==l||xn.current||mr?(typeof u=="function"&&($h(e,n,u,i),l=e.memoizedState),(a=mr||E_(e,n,a,i,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,by(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),s.props=c,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=yn(n)?Ro:rn.current,l=Bs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&T_(e,s,i,l),mr=!1,f=e.memoizedState,s.state=f,_u(e,i,s,r);var _=e.memoizedState;a!==d||f!==_||xn.current||mr?(typeof p=="function"&&($h(e,n,p,i),_=e.memoizedState),(c=mr||E_(e,n,c,i,f,_,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wh(t,e,n,i,o,r)}function Wh(t,e,n,i,r,o){Jy(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&p_(e,n,!1),Zi(t,e,o);i=e.stateNode,lM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Vs(e,t.child,null,o),e.child=Vs(e,null,a,o)):cn(t,e,a,o),e.memoizedState=i.state,r&&p_(e,n,!0),e.child}function Qy(t){var e=t.stateNode;e.pendingContext?h_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&h_(t,e.context,!1),s0(t,e.containerInfo)}function P_(t,e,n,i,r){return $s(),e0(r),e.flags|=256,cn(t,e,n,i),e.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function e9(t,e,n){var i=e.pendingProps,r=yt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(yt,r&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qu(s,i,0,null),t=To(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=jh(n),e.memoizedState=Xh,t):p0(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Cr(a,o):(o=To(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?jh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Xh,i}return o=t.child,t=o.sibling,i=Cr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function p0(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,i){return i!==null&&e0(i),Vs(e,t.child,null,n),t=p0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=nf(Error(ce(422))),Jl(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Qu({mode:"visible",children:i.children},r,0,null),o=To(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Vs(e,t.child,null,s),e.child.memoizedState=jh(s),e.memoizedState=Xh,o);if(!(e.mode&1))return Jl(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ce(419)),i=nf(o,i,void 0),Jl(t,e,s,i)}if(a=(s&t.childLanes)!==0,gn||a){if(i=Bt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ki(t,r),si(i,t,r,-1))}return y0(),i=nf(Error(ce(421))),Jl(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=EM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,In=Mr(r.nextSibling),Nn=e,xt=!0,ni=null,t!==null&&($n[Vn++]=Gi,$n[Vn++]=Hi,$n[Vn++]=Co,Gi=t.id,Hi=t.overflow,Co=e),e=p0(e,i.children),e.flags|=4096,e)}function I_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bh(t.return,e,n)}function rf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function t9(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(cn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I_(t,n,e);else if(t.tag===19)I_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rf(e,!0,n,null,o);break;case"together":rf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Io|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uM(t,e,n){switch(e.tag){case 3:Qy(e),$s();break;case 5:Ay(e);break;case 1:yn(e.type)&&du(e);break;case 4:s0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?e9(t,e,n):(ut(yt,yt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);ut(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t9(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return Zi(t,e,n)}var n9,Yh,i9,r9;n9=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yh=function(){};i9=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vo(Ti.current);var o=null;switch(n){case"input":r=_h(t,r),i=_h(t,i),o=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),o=[];break;case"textarea":r=xh(t,r),i=xh(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cu)}Sh(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(el.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(el.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};r9=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ta(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dM(t,e,n){var i=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return yn(e.type)&&uu(),Zt(e),null;case 3:return i=e.stateNode,Gs(),vt(xn),vt(rn),l0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(np(ni),ni=null))),Yh(t,e),Zt(e),null;case 5:a0(e);var r=vo(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)i9(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Zt(e),null}if(t=vo(Ti.current),Kl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[_i]=e,i[ul]=o,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Ua.length;r++)pt(Ua[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Bm(i,o),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},pt("invalid",i);break;case"textarea":Vm(i,o),pt("invalid",i)}Sh(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ql(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ql(i.textContent,a,t),r=["children",""+a]):el.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&pt("scroll",i)}switch(n){case"input":$l(i),$m(i,o,!0);break;case"textarea":$l(i),Gm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=cu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[_i]=e,t[ul]=i,n9(t,e,!1,!1),e.stateNode=t;e:{switch(s=Eh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ua.length;r++)pt(Ua[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Bm(t,i),r=_h(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Vm(t,i),r=xh(t,i),pt("invalid",t);break;default:r=i}Sh(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ux(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&tl(t,l):typeof l=="number"&&tl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(el.hasOwnProperty(o)?l!=null&&o==="onScroll"&&pt("scroll",t):l!=null&&Fp(t,o,l,s))}switch(n){case"input":$l(t),$m(t,i,!1);break;case"textarea":$l(t),Gm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Rs(t,!!i.multiple,o,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)r9(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=vo(fl.current),vo(Ti.current),Kl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(o=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:ql(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ql(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return Zt(e),null;case 13:if(vt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&In!==null&&e.mode&1&&!(e.flags&128))Ey(),$s(),e.flags|=98560,o=!1;else if(o=Kl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ce(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ce(317));o[_i]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),o=!1}else ni!==null&&(np(ni),ni=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Lt===0&&(Lt=3):y0())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Gs(),Yh(t,e),t===null&&ll(e.stateNode.containerInfo),Zt(e),null;case 10:return i0(e.type._context),Zt(e),null;case 17:return yn(e.type)&&uu(),Zt(e),null;case 19:if(vt(yt),o=e.memoizedState,o===null)return Zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ta(o,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=vu(t),s!==null){for(e.flags|=128,Ta(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(yt,yt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Rt()>Ws&&(e.flags|=128,i=!0,Ta(o,!1),e.lanes=4194304)}else{if(!i)if(t=vu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xt)return Zt(e),null}else 2*Rt()-o.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,Ta(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Rt(),e.sibling=null,n=yt.current,ut(yt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return x0(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function fM(t,e){switch(Qp(e),e.tag){case 1:return yn(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),vt(xn),vt(rn),l0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return a0(e),null;case 13:if(vt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(yt),null;case 4:return Gs(),null;case 10:return i0(e.type._context),null;case 22:case 23:return x0(),null;case 24:return null;default:return null}}var Ql=!1,en=!1,hM=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function qh(t,e,n){try{n()}catch(i){bt(t,e,i)}}var D_=!1;function pM(t,e){if(Dh=su,t=cy(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=s),f===o&&++u===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nh={focusedElem:t,selectionRange:n},su=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:ei(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=D_,D_=!1,_}function Wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&qh(e,n,o)}r=r.next}while(r!==i)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o9(t){var e=t.alternate;e!==null&&(t.alternate=null,o9(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[ul],delete e[Oh],delete e[Kw],delete e[Zw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s9(t){return t.tag===5||t.tag===3||t.tag===4}function N_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s9(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cu));else if(i!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function Jh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var Vt=null,ti=!1;function rr(t,e,n){for(n=n.child;n!==null;)a9(t,e,n),n=n.sibling}function a9(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:en||Ts(n,e);case 6:var i=Vt,r=ti;Vt=null,rr(t,e,n),Vt=i,ti=r,Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?Kd(t.parentNode,n):t.nodeType===1&&Kd(t,n),ol(t)):Kd(Vt,n.stateNode));break;case 4:i=Vt,r=ti,Vt=n.stateNode.containerInfo,ti=!0,rr(t,e,n),Vt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&qh(n,e,s),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!en&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,rr(t,e,n),en=i):rr(t,e,n);break;default:rr(t,e,n)}}function L_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hM),e.forEach(function(i){var r=TM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ti=!1;break e;case 3:Vt=a.stateNode.containerInfo,ti=!0;break e;case 4:Vt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Vt===null)throw Error(ce(160));a9(o,s,r),Vt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l9(e,t),e=e.sibling}function l9(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),fi(t),i&4){try{Wa(3,t,t.return),Zu(3,t)}catch(v){bt(t,t.return,v)}try{Wa(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:qn(e,t),fi(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(qn(e,t),fi(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{tl(r,"")}catch(v){bt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Px(r,o),Eh(a,s);var c=Eh(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Ux(r,d):u==="dangerouslySetInnerHTML"?Nx(r,d):u==="children"?tl(r,d):Fp(r,u,d,c)}switch(a){case"input":vh(r,o);break;case"textarea":Ix(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Rs(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Rs(r,!!o.multiple,o.defaultValue,!0):Rs(r,!!o.multiple,o.multiple?[]:"",!1))}r[ul]=o}catch(v){bt(t,t.return,v)}}break;case 6:if(qn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){bt(t,t.return,v)}}break;case 3:if(qn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:qn(e,t),fi(t);break;case 13:qn(e,t),fi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(v0=Rt())),i&4&&L_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,qn(e,t),en=c):qn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(d=Te=u;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wa(4,f,f.return);break;case 1:Ts(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){bt(i,n,v)}}break;case 5:Ts(f,f.return);break;case 22:if(f.memoizedState!==null){O_(d);continue}}p!==null?(p.return=f,Te=p):O_(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lx("display",s))}catch(v){bt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){bt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),fi(t),i&4&&L_(t);break;case 21:break;default:qn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s9(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(tl(r,""),i.flags&=-33);var o=N_(t);Jh(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=N_(t);Zh(t,a,s);break;default:throw Error(ce(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mM(t,e,n){Te=t,c9(t)}function c9(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ql;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ql;var c=en;if(Ql=s,(en=l)&&!c)for(Te=r;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?z_(r):l!==null?(l.return=s,Te=l):z_(r);for(;o!==null;)Te=o,c9(o),o=o.sibling;Te=r,Ql=a,en=c}U_(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Te=o):U_(t)}}function U_(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Zu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&x_(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x_(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ol(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}en||e.flags&512&&Kh(e)}catch(f){bt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function O_(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function z_(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var o=e.return;try{Kh(e)}catch(l){bt(e,o,l)}break;case 5:var s=e.return;try{Kh(e)}catch(l){bt(e,s,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var _M=Math.ceil,yu=er.ReactCurrentDispatcher,m0=er.ReactCurrentOwner,Hn=er.ReactCurrentBatchConfig,nt=0,Bt=null,Dt=null,Wt=0,An=0,ws=Xr(0),Lt=0,_l=null,Io=0,Ju=0,_0=0,Xa=null,_n=null,v0=0,Ws=1/0,ki=null,Su=!1,Qh=null,Ar=null,ec=!1,Sr=null,Eu=0,ja=0,ep=null,Xc=-1,jc=0;function un(){return nt&6?Rt():Xc!==-1?Xc:Xc=Rt()}function Rr(t){return t.mode&1?nt&2&&Wt!==0?Wt&-Wt:Qw.transition!==null?(jc===0&&(jc=jx()),jc):(t=at,t!==0||(t=window.event,t=t===void 0?16:ey(t.type)),t):1}function si(t,e,n,i){if(50<ja)throw ja=0,ep=null,Error(ce(185));bl(t,n,i),(!(nt&2)||t!==Bt)&&(t===Bt&&(!(nt&2)&&(Ju|=n),Lt===4&&vr(t,Wt)),Sn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ws=Rt()+500,Yu&&jr()))}function Sn(t,e){var n=t.callbackNode;QT(t,e);var i=ou(t,t===Bt?Wt:0);if(i===0)n!==null&&Xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xm(n),e===1)t.tag===0?Jw(F_.bind(null,t)):xy(F_.bind(null,t)),Yw(function(){!(nt&6)&&jr()}),n=null;else{switch(Yx(i)){case 1:n=Gp;break;case 4:n=Wx;break;case 16:n=ru;break;case 536870912:n=Xx;break;default:n=ru}n=v9(n,u9.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u9(t,e){if(Xc=-1,jc=0,nt&6)throw Error(ce(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=ou(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tu(t,i);else{e=i;var r=nt;nt|=2;var o=f9();(Bt!==t||Wt!==e)&&(ki=null,Ws=Rt()+500,Eo(t,e));do try{xM();break}catch(a){d9(t,a)}while(!0);n0(),yu.current=o,nt=r,Dt!==null?e=0:(Bt=null,Wt=0,e=Lt)}if(e!==0){if(e===2&&(r=Ah(t),r!==0&&(i=r,e=tp(t,r))),e===1)throw n=_l,Eo(t,0),vr(t,i),Sn(t,Rt()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!vM(r)&&(e=Tu(t,i),e===2&&(o=Ah(t),o!==0&&(i=o,e=tp(t,o))),e===1))throw n=_l,Eo(t,0),vr(t,i),Sn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:lo(t,_n,ki);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=v0+500-Rt(),10<e)){if(ou(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uh(lo.bind(null,t,_n,ki),e);break}lo(t,_n,ki);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-oi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_M(i/1960))-i,10<i){t.timeoutHandle=Uh(lo.bind(null,t,_n,ki),i);break}lo(t,_n,ki);break;case 5:lo(t,_n,ki);break;default:throw Error(ce(329))}}}return Sn(t,Rt()),t.callbackNode===n?u9.bind(null,t):null}function tp(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Eo(t,e).flags|=256),t=Tu(t,e),t!==2&&(e=_n,_n=n,e!==null&&np(e)),t}function np(t){_n===null?_n=t:_n.push.apply(_n,t)}function vM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~_0,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function F_(t){if(nt&6)throw Error(ce(327));Ns();var e=ou(t,0);if(!(e&1))return Sn(t,Rt()),null;var n=Tu(t,e);if(t.tag!==0&&n===2){var i=Ah(t);i!==0&&(e=i,n=tp(t,i))}if(n===1)throw n=_l,Eo(t,0),vr(t,e),Sn(t,Rt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lo(t,_n,ki),Sn(t,Rt()),null}function g0(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ws=Rt()+500,Yu&&jr())}}function Do(t){Sr!==null&&Sr.tag===0&&!(nt&6)&&Ns();var e=nt;nt|=1;var n=Hn.transition,i=at;try{if(Hn.transition=null,at=1,t)return t()}finally{at=i,Hn.transition=n,nt=e,!(nt&6)&&jr()}}function x0(){An=ws.current,vt(ws)}function Eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jw(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Qp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uu();break;case 3:Gs(),vt(xn),vt(rn),l0();break;case 5:a0(i);break;case 4:Gs();break;case 13:vt(yt);break;case 19:vt(yt);break;case 10:i0(i.type._context);break;case 22:case 23:x0()}n=n.return}if(Bt=t,Dt=t=Cr(t.current,null),Wt=An=e,Lt=0,_l=null,_0=Ju=Io=0,_n=Xa=null,_o!==null){for(e=0;e<_o.length;e++)if(n=_o[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}_o=null}return t}function d9(t,e){do{var n=Dt;try{if(n0(),Gc.current=xu,gu){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gu=!1}if(Po=0,Ft=Nt=St=null,Ha=!1,hl=0,m0.current=null,n===null||n.return===null){Lt=1,_l=e,Dt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=M_(s);if(p!==null){p.flags&=-257,b_(p,s,a,o,e),p.mode&1&&w_(o,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){w_(o,c,e),y0();break e}l=Error(ce(426))}}else if(xt&&a.mode&1){var m=M_(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),b_(m,s,a,o,e),e0(Hs(l,a));break e}}o=l=Hs(l,a),Lt!==4&&(Lt=2),Xa===null?Xa=[o]:Xa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Yy(o,l,e);g_(o,h);break e;case 1:a=l;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ar===null||!Ar.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=qy(o,a,e);g_(o,y);break e}}o=o.return}while(o!==null)}p9(n)}catch(w){e=w,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function f9(){var t=yu.current;return yu.current=xu,t===null?xu:t}function y0(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Bt===null||!(Io&268435455)&&!(Ju&268435455)||vr(Bt,Wt)}function Tu(t,e){var n=nt;nt|=2;var i=f9();(Bt!==t||Wt!==e)&&(ki=null,Eo(t,e));do try{gM();break}catch(r){d9(t,r)}while(!0);if(n0(),nt=n,yu.current=i,Dt!==null)throw Error(ce(261));return Bt=null,Wt=0,Lt}function gM(){for(;Dt!==null;)h9(Dt)}function xM(){for(;Dt!==null&&!HT();)h9(Dt)}function h9(t){var e=_9(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?p9(t):Dt=e,m0.current=null}function p9(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fM(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Dt=null;return}}else if(n=dM(n,e,An),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Lt===0&&(Lt=5)}function lo(t,e,n){var i=at,r=Hn.transition;try{Hn.transition=null,at=1,yM(t,e,n,i)}finally{Hn.transition=r,at=i}return null}function yM(t,e,n,i){do Ns();while(Sr!==null);if(nt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ew(t,o),t===Bt&&(Dt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,v9(ru,function(){return Ns(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var s=at;at=1;var a=nt;nt|=4,m0.current=null,pM(t,n),l9(n,t),Bw(Nh),su=!!Dh,Nh=Dh=null,t.current=n,mM(n),WT(),nt=a,at=s,Hn.transition=o}else t.current=n;if(ec&&(ec=!1,Sr=t,Eu=r),o=t.pendingLanes,o===0&&(Ar=null),YT(n.stateNode),Sn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Su)throw Su=!1,t=Qh,Qh=null,t;return Eu&1&&t.tag!==0&&Ns(),o=t.pendingLanes,o&1?t===ep?ja++:(ja=0,ep=t):ja=0,jr(),null}function Ns(){if(Sr!==null){var t=Yx(Eu),e=Hn.transition,n=at;try{if(Hn.transition=null,at=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,Eu=0,nt&6)throw Error(ce(331));var r=nt;for(nt|=4,Te=t.current;Te!==null;){var o=Te,s=o.child;if(Te.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:Wa(8,u,o)}var d=u.child;if(d!==null)d.return=u,Te=d;else for(;Te!==null;){u=Te;var f=u.sibling,p=u.return;if(o9(u),u===c){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var _=o.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Te=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wa(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Te=h;break e}Te=o.return}}var g=t.current;for(Te=g;Te!==null;){s=Te;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Te=x;else e:for(s=g;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(w){bt(a,a.return,w)}if(a===s){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(nt=r,jr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Gu,t)}catch{}i=!0}return i}finally{at=n,Hn.transition=e}}return!1}function k_(t,e,n){e=Hs(n,e),e=Yy(t,e,1),t=br(t,e,1),e=un(),t!==null&&(bl(t,1,e),Sn(t,e))}function bt(t,e,n){if(t.tag===3)k_(t,t,n);else for(;e!==null;){if(e.tag===3){k_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){t=Hs(n,t),t=qy(e,t,1),e=br(e,t,1),t=un(),e!==null&&(bl(e,1,t),Sn(e,t));break}}e=e.return}}function SM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Lt===4||Lt===3&&(Wt&130023424)===Wt&&500>Rt()-v0?Eo(t,0):_0|=n),Sn(t,e)}function m9(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=un();t=Ki(t,e),t!==null&&(bl(t,e,n),Sn(t,n))}function EM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m9(t,n)}function TM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),m9(t,n)}var _9;_9=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,uM(t,e,n);gn=!!(t.flags&131072)}else gn=!1,xt&&e.flags&1048576&&yy(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wc(t,e),t=e.pendingProps;var r=Bs(e,rn.current);Ds(e,n),r=u0(null,e,i,t,r,n);var o=d0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(o=!0,du(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,o0(e),r.updater=Ku,e.stateNode=r,r._reactInternals=e,Vh(e,i,t,n),e=Wh(null,e,i,!0,o,n)):(e.tag=0,xt&&o&&Jp(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=MM(i),t=ei(i,t),r){case 0:e=Hh(null,e,i,t,n);break e;case 1:e=C_(null,e,i,t,n);break e;case 11:e=A_(null,e,i,t,n);break e;case 14:e=R_(null,e,i,ei(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Hh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),C_(t,e,i,r,n);case 3:e:{if(Qy(e),t===null)throw Error(ce(387));i=e.pendingProps,o=e.memoizedState,r=o.element,by(t,e),_u(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Hs(Error(ce(423)),e),e=P_(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ce(424)),e),e=P_(t,e,i,n,r);break e}else for(In=Mr(e.stateNode.containerInfo.firstChild),Nn=e,xt=!0,ni=null,n=wy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Zi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return Ay(e),t===null&&kh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Lh(i,r)?s=null:o!==null&&Lh(i,o)&&(e.flags|=32),Jy(t,e),cn(t,e,s,n),e.child;case 6:return t===null&&kh(e),null;case 13:return e9(t,e,n);case 4:return s0(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),A_(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ut(pu,i._currentValue),i._currentValue=s,o!==null)if(ai(o.value,s)){if(o.children===r.children&&!xn.current){e=Zi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ce(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Wn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),R_(t,e,i,r,n);case 15:return Ky(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Wc(t,e),e.tag=1,yn(i)?(t=!0,du(e)):t=!1,Ds(e,n),jy(e,i,r),Vh(e,i,r,n),Wh(null,e,i,!0,t,n);case 19:return t9(t,e,n);case 22:return Zy(t,e,n)}throw Error(ce(156,e.tag))};function v9(t,e){return Hx(t,e)}function wM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new wM(t,e,n,i)}function S0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MM(t){if(typeof t=="function")return S0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===$p)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")S0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ps:return To(n.children,r,o,e);case kp:s=8,r|=8;break;case fh:return t=Gn(12,n,e,r|2),t.elementType=fh,t.lanes=o,t;case hh:return t=Gn(13,n,e,r),t.elementType=hh,t.lanes=o,t;case ph:return t=Gn(19,n,e,r),t.elementType=ph,t.lanes=o,t;case Ax:return Qu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mx:s=10;break e;case bx:s=9;break e;case Bp:s=11;break e;case $p:s=14;break e;case pr:s=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Gn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function To(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Qu(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=Ax,t.lanes=n,t.stateNode={isHidden:!1},t}function of(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kd(0),this.expirationTimes=kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function E0(t,e,n,i,r,o,s,a,l){return t=new bM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Gn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},o0(o),t}function AM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g9(t){if(!t)return zr;t=t._reactInternals;e:{if(Oo(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(yn(n))return gy(t,n,e)}return e}function x9(t,e,n,i,r,o,s,a,l){return t=E0(n,i,!0,t,r,o,s,a,l),t.context=g9(null),n=t.current,i=un(),r=Rr(n),o=Xi(i,r),o.callback=e??null,br(n,o,r),t.current.lanes=r,bl(t,r,i),Sn(t,i),t}function ed(t,e,n,i){var r=e.current,o=un(),s=Rr(r);return n=g9(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,s),t!==null&&(si(t,r,s,o),Vc(t,r,s)),s}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function T0(t,e){B_(t,e),(t=t.alternate)&&B_(t,e)}function RM(){return null}var y9=typeof reportError=="function"?reportError:function(t){console.error(t)};function w0(t){this._internalRoot=t}td.prototype.render=w0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));ed(t,e,null,null)};td.prototype.unmount=w0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Do(function(){ed(null,t,null,null)}),e[qi]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Qx(t)}};function M0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $_(){}function CM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=wu(s);o.call(c)}}var s=x9(e,i,t,0,null,!1,!1,"",$_);return t._reactRootContainer=s,t[qi]=s.current,ll(t.nodeType===8?t.parentNode:t),Do(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wu(l);a.call(c)}}var l=E0(t,0,!1,null,null,!1,!1,"",$_);return t._reactRootContainer=l,t[qi]=l.current,ll(t.nodeType===8?t.parentNode:t),Do(function(){ed(e,l,n,i)}),l}function id(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=wu(s);a.call(l)}}ed(e,s,t,r)}else s=CM(n,e,t,r,i);return wu(s)}qx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(Hp(e,n|1),Sn(e,Rt()),!(nt&6)&&(Ws=Rt()+500,jr()))}break;case 13:Do(function(){var i=Ki(t,1);if(i!==null){var r=un();si(i,t,1,r)}}),T0(t,1)}};Wp=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=un();si(e,t,134217728,n)}T0(t,134217728)}};Kx=function(t){if(t.tag===13){var e=Rr(t),n=Ki(t,e);if(n!==null){var i=un();si(n,t,e,i)}T0(t,e)}};Zx=function(){return at};Jx=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};wh=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ju(i);if(!r)throw Error(ce(90));Cx(i),vh(i,r)}}}break;case"textarea":Ix(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};Fx=g0;kx=Do;var PM={usingClientEntryPoint:!1,Events:[Rl,gs,ju,Ox,zx,g0]},wa={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IM={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vx(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||RM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Gu=tc.inject(IM),Ei=tc}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PM;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M0(e))throw Error(ce(200));return AM(t,e,null,n)};zn.createRoot=function(t,e){if(!M0(t))throw Error(ce(299));var n=!1,i="",r=y9;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=E0(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,ll(t.nodeType===8?t.parentNode:t),new w0(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Vx(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return Do(t)};zn.hydrate=function(t,e,n){if(!nd(e))throw Error(ce(200));return id(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!M0(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=y9;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=x9(e,null,t,1,n??null,r,!1,o,s),t[qi]=e.current,ll(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new td(e)};zn.render=function(t,e,n){if(!nd(e))throw Error(ce(200));return id(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!nd(t))throw Error(ce(40));return t._reactRootContainer?(Do(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};zn.unstable_batchedUpdates=g0;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nd(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return id(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function S9(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S9)}catch(t){console.error(t)}}S9(),Sx.exports=zn;var zo=Sx.exports;const DM=Pp(zo);var V_=zo;uh.createRoot=V_.createRoot,uh.hydrateRoot=V_.hydrateRoot;const E9="EVENT_RESIZE_PANEL",b0="EVENT_DATA_UPDATE",T9="EVENT_CAMERA_UPDATE",A0="EVENT_RENDERING_UPDATE",R0="EVENT_ALIGN_CAMERA",w9="EVENT_SELECT_CHANGED",ip="EVENT_SEED_DIRECTION_CHANGED",M9="EVENT_SEED_POSITION_CHANGED",wo="BEHAVIOR_CONTROL_CAMERA",b9="BEHAVIOR_MOVE_SEED",ii=0,Mu=1,C0=2,rd=0,A9=1,P0=2,I0=3,D0=4,N0=5,L0=6,U0=7,vl=8,Ya=9,O0=10,od=11,R9=0,sd=1,C9=2,P9=3,NM="0",ad="1",LM="2",z0=1,I9=!0,UM=!1,ld=0,OM=1,zM=2,Pl=0,D9=1,bu=0,Fr=1,FM=0,Au=1;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const F0="164",af={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kM=0,G_=1,BM=2,N9=1,$M=2,Fi=3,kr=0,En=1,vi=2,Pr=0,Ls=1,H_=2,W_=3,X_=4,VM=5,fo=100,GM=101,HM=102,WM=103,XM=104,jM=200,YM=201,qM=202,KM=203,rp=204,op=205,ZM=206,JM=207,QM=208,eb=209,tb=210,nb=211,ib=212,rb=213,ob=214,sb=0,ab=1,lb=2,Ru=3,cb=4,ub=5,db=6,fb=7,L9=0,hb=1,pb=2,Ir=0,mb=1,_b=2,vb=3,gb=4,xb=5,yb=6,Sb=7,U9=300,Xs=301,js=302,sp=303,ap=304,cd=306,lp=1e3,go=1001,cp=1002,tn=1003,Eb=1004,nc=1005,Pn=1006,lf=1007,xo=1008,Br=1009,Tb=1010,wb=1011,O9=1012,z9=1013,Ys=1014,ri=1015,ud=1016,F9=1017,k9=1018,Il=1020,Mb=35902,bb=1021,Ab=1022,Dn=1023,Rb=1024,Cb=1025,Us=1026,gl=1027,Pb=1028,B9=1029,Ib=1030,$9=1031,V9=1033,cf=33776,uf=33777,df=33778,ff=33779,j_=35840,Y_=35841,q_=35842,K_=35843,Z_=36196,J_=37492,Q_=37496,ev=37808,tv=37809,nv=37810,iv=37811,rv=37812,ov=37813,sv=37814,av=37815,lv=37816,cv=37817,uv=37818,dv=37819,fv=37820,hv=37821,hf=36492,pv=36494,mv=36495,Db=36283,_v=36284,vv=36285,gv=36286,Nb=3200,Lb=3201,G9=0,Ub=1,gr="",pi="srgb",Yr="srgb-linear",k0="display-p3",dd="display-p3-linear",Cu="linear",mt="srgb",Pu="rec709",Iu="p3",Go=7680,xv=519,Ob=512,zb=513,Fb=514,H9=515,kb=516,Bb=517,$b=518,Vb=519,yv=35044,Du="300 es",Wi=2e3,Nu=2001;class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sv=1234567;const qa=Math.PI/180,xl=180/Math.PI;function ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function B0(t,e){return(t%e+e)%e}function Gb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Hb(t,e,n){return t!==e?(n-t)/(e-t):0}function Ka(t,e,n){return(1-n)*t+n*e}function Wb(t,e,n,i){return Ka(t,e,1-Math.exp(-n*i))}function Xb(t,e=1){return e-Math.abs(B0(t,e*2)-e)}function jb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Yb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function qb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Kb(t,e){return t+Math.random()*(e-t)}function Zb(t){return t*(.5-Math.random())}function Jb(t){t!==void 0&&(Sv=t);let e=Sv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qb(t){return t*qa}function eA(t){return t*xl}function tA(t){return(t&t-1)===0&&t!==0}function nA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function iA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rA(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),u=s((e+i)/2),d=o((e-i)/2),f=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:qa,RAD2DEG:xl,generateUUID:ra,clamp:Gt,euclideanModulo:B0,mapLinear:Gb,inverseLerp:Hb,lerp:Ka,damp:Wb,pingpong:Xb,smoothstep:jb,smootherstep:Yb,randInt:qb,randFloat:Kb,randFloatSpread:Zb,seededRandom:Jb,degToRad:Qb,radToDeg:eA,isPowerOfTwo:tA,ceilPowerOfTwo:nA,floorPowerOfTwo:iA,setQuaternionFromProperEuler:rA,normalize:an,denormalize:ds};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,o,s,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],g=r[1],x=r[4],y=r[7],w=r[2],T=r[5],b=r[8];return o[0]=s*v+a*g+l*w,o[3]=s*m+a*x+l*T,o[6]=s*h+a*y+l*b,o[1]=c*v+u*g+d*w,o[4]=c*m+u*x+d*T,o[7]=c*h+u*y+d*b,o[2]=f*v+p*g+_*w,o[5]=f*m+p*x+_*T,o[8]=f*h+p*y+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,p=c*o-s*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pf.makeScale(e,n)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,n){return this.premultiply(pf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new $e;function W9(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oA(){const t=Lu("canvas");return t.style.display="block",t}const Ev={};function sA(t){t in Ev||(Ev[t]=!0,console.warn(t))}const Tv=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wv=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ic={[Yr]:{transfer:Cu,primaries:Pu,toReference:t=>t,fromReference:t=>t},[pi]:{transfer:mt,primaries:Pu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dd]:{transfer:Cu,primaries:Iu,toReference:t=>t.applyMatrix3(wv),fromReference:t=>t.applyMatrix3(Tv)},[k0]:{transfer:mt,primaries:Iu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wv),fromReference:t=>t.applyMatrix3(Tv).convertLinearToSRGB()}},aA=new Set([Yr,dd]),lt={enabled:!0,_workingColorSpace:Yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!aA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ic[e].toReference,r=ic[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ic[t].primaries},getTransfer:function(t){return t===gr?Cu:ic[t].transfer}};function Os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ho;class lA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=Lu("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Os(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cA=0;class X9{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(_f(r[s].image)):o.push(_f(r[s]))}else o=_f(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function _f(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uA=0;class dn extends Fo{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=go,r=go,o=Pn,s=xo,a=Dn,l=Br,c=dn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=ra(),this.name="",this.source=new X9(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U9)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lp:e.x=e.x-Math.floor(e.x);break;case go:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lp:e.y=e.y-Math.floor(e.y);break;case go:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=U9;dn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(h+1)/2,T=(u+f)/4,b=(d+v)/4,C=(_+m)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=T/i,o=b/i):y>w?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=T/r,o=C/r):w<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(w),i=b/o,r=C/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends Fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new X9(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends dA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class j9 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $0 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fA extends $r{constructor(e=1,n=1,i=1,r={}){super(e,n,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new $0(null,e,n,i),this.texture.isRenderTargetTexture=!0}}class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=o[s+0],p=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*v,g=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,h*g);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*g;if(l=l*m+f*y,c=c*m+p*y,u=u*m+_*y,d=d*m+v*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[s],f=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(o/2),f=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*c+s*d-a*u,this.y=i+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new k,Mv=new oa;class Dl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Kn):Kn.fromBufferAttribute(o,s),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),oc.subVectors(this.max,Ma),Wo.subVectors(e.a,Ma),Xo.subVectors(e.b,Ma),jo.subVectors(e.c,Ma),or.subVectors(Xo,Wo),sr.subVectors(jo,Xo),Qr.subVectors(Wo,jo);let n=[0,-or.z,or.y,0,-sr.z,sr.y,0,-Qr.z,Qr.y,or.z,0,-or.x,sr.z,0,-sr.x,Qr.z,0,-Qr.x,-or.y,or.x,0,-sr.y,sr.x,0,-Qr.y,Qr.x,0];return!gf(n,Wo,Xo,jo,oc)||(n=[1,0,0,0,1,0,0,0,1],!gf(n,Wo,Xo,jo,oc))?!1:(sc.crossVectors(or,sr),n=[sc.x,sc.y,sc.z],gf(n,Wo,Xo,jo,oc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new k,new k,new k,new k,new k,new k,new k,new k],Kn=new k,rc=new Dl,Wo=new k,Xo=new k,jo=new k,or=new k,sr=new k,Qr=new k,Ma=new k,oc=new k,sc=new k,eo=new k;function gf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){eo.fromArray(t,o);const a=r.x*Math.abs(eo.x)+r.y*Math.abs(eo.y)+r.z*Math.abs(eo.z),l=e.dot(eo),c=n.dot(eo),u=i.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hA=new Dl,ba=new k,xf=new k;class V0{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hA.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(xf)),this.expandByPoint(ba.copy(e.center).sub(xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new k,yf=new k,ac=new k,ar=new k,Sf=new k,lc=new k,Ef=new k;class Y9{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yf.copy(e).add(n).multiplyScalar(.5),ac.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(yf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ac),a=ar.dot(this.direction),l=-ar.dot(ac),c=ar.lengthSq(),u=Math.abs(1-s*s);let d,f,p,_;if(u>0)if(d=s*l-a,f=s*a-l,_=o*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yf).addScaledVector(ac,f),p}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,o){Sf.subVectors(n,e),lc.subVectors(i,e),Ef.crossVectors(Sf,lc);let s=this.direction.dot(Ef),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(lc.crossVectors(ar,lc));if(l<0)return null;const c=a*this.direction.dot(Sf.cross(ar));if(c<0||l+c>s)return null;const u=-a*ar.dot(Ef);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,c,u,d,f,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,d,f,p,_,v,m)}set(e,n,i,r,o,s,a,l,c,u,d,f,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),o=1/Yo.setFromMatrixColumn(e,1).length(),s=1/Yo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,p=s*d,_=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;n[0]=f+v*a,n[4]=_*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=p*a-_,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;n[0]=f-v*a,n[4]=-s*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*u,n[9]=v-f*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,p=s*d,_=a*u,v=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-f*d,n[8]=_*d+p,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,p=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=s*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pA,e,mA)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),lr.crossVectors(i,wn),lr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),lr.crossVectors(i,wn)),lr.normalize(),cc.crossVectors(wn,lr),r[0]=lr.x,r[4]=cc.x,r[8]=wn.x,r[1]=lr.y,r[5]=cc.y,r[9]=wn.y,r[2]=lr.z,r[6]=cc.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],g=i[3],x=i[7],y=i[11],w=i[15],T=r[0],b=r[4],C=r[8],M=r[12],E=r[1],U=r[5],O=r[9],D=r[13],B=r[2],F=r[6],X=r[10],K=r[14],N=r[3],H=r[7],W=r[11],re=r[15];return o[0]=s*T+a*E+l*B+c*N,o[4]=s*b+a*U+l*F+c*H,o[8]=s*C+a*O+l*X+c*W,o[12]=s*M+a*D+l*K+c*re,o[1]=u*T+d*E+f*B+p*N,o[5]=u*b+d*U+f*F+p*H,o[9]=u*C+d*O+f*X+p*W,o[13]=u*M+d*D+f*K+p*re,o[2]=_*T+v*E+m*B+h*N,o[6]=_*b+v*U+m*F+h*H,o[10]=_*C+v*O+m*X+h*W,o[14]=_*M+v*D+m*K+h*re,o[3]=g*T+x*E+y*B+w*N,o[7]=g*b+x*U+y*F+w*H,o[11]=g*C+x*O+y*X+w*W,o[15]=g*M+x*D+y*K+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+o*l*d-r*c*d-o*a*f+i*c*f+r*a*p-i*l*p)+v*(+n*l*p-n*c*f+o*s*f-r*s*p+r*c*u-o*l*u)+m*(+n*c*d-n*a*p-o*s*d+i*s*p+o*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*s*d-i*s*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],g=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,x=_*f*c-u*m*c-_*l*p+s*m*p+u*l*h-s*f*h,y=u*v*c-_*d*c+_*a*p-s*v*p-u*a*h+s*d*h,w=_*d*l-u*v*l-_*a*f+s*v*f+u*a*m-s*d*m,T=n*g+i*x+r*y+o*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=g*b,e[1]=(v*f*o-d*m*o-v*r*p+i*m*p+d*r*h-i*f*h)*b,e[2]=(a*m*o-v*l*o+v*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(d*l*o-a*f*o-d*r*c+i*f*c+a*r*p-i*l*p)*b,e[4]=x*b,e[5]=(u*m*o-_*f*o+_*r*p-n*m*p-u*r*h+n*f*h)*b,e[6]=(_*l*o-s*m*o-_*r*c+n*m*c+s*r*h-n*l*h)*b,e[7]=(s*f*o-u*l*o+u*r*c-n*f*c-s*r*p+n*l*p)*b,e[8]=y*b,e[9]=(_*d*o-u*v*o-_*i*p+n*v*p+u*i*h-n*d*h)*b,e[10]=(s*v*o-_*a*o+_*i*c-n*v*c-s*i*h+n*a*h)*b,e[11]=(u*a*o-s*d*o-u*i*c+n*d*c+s*i*p-n*a*p)*b,e[12]=w*b,e[13]=(u*v*r-_*d*r+_*i*f-n*v*f-u*i*m+n*d*m)*b,e[14]=(_*a*r-s*v*r-_*i*l+n*v*l+s*i*m-n*a*m)*b,e[15]=(s*d*r-u*a*r+u*i*l-n*d*l-s*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,f=o*c,p=o*u,_=o*d,v=s*u,m=s*d,h=a*d,g=l*c,x=l*u,y=l*d,w=i.x,T=i.y,b=i.z;return r[0]=(1-(v+h))*w,r[1]=(p+y)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(_+x)*b,r[9]=(m-g)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Yo.set(r[0],r[1],r[2]).length();const s=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/o,u=1/s,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Wi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Wi)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Nu)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Wi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(s-o),f=(n+e)*c,p=(i+r)*u;let _,v;if(a===Wi)_=(s+o)*d,v=-2*d;else if(a===Nu)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yo=new k,Zn=new Et,pA=new k(0,0,0),mA=new k(1,1,1),lr=new k,cc=new k,wn=new k,bv=new Et,Av=new oa;class wi{constructor(e=0,n=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _A=0;const Rv=new k,qo=new oa,Li=new Et,uc=new k,Aa=new k,vA=new k,gA=new oa,Cv=new k(1,0,0),Pv=new k(0,1,0),Iv=new k(0,0,1),Dv={type:"added"},xA={type:"removed"},Ko={type:"childadded",child:null},Tf={type:"childremoved",child:null};class $t extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new k,n=new wi,i=new oa,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Pv,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,n){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Pv,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?uc.copy(e):uc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Aa,uc,this.up):Li.lookAt(uc,Aa,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),qo.setFromRotationMatrix(Li),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xA),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,vA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,gA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new k(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new k,Ui=new k,wf=new k,Oi=new k,Zo=new k,Jo=new k,Nv=new k,Mf=new k,bf=new k,Af=new k;class gi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Jn.subVectors(r,n),Ui.subVectors(i,n),wf.subVectors(e,n);const s=Jn.dot(Jn),a=Jn.dot(Ui),l=Jn.dot(wf),c=Ui.dot(Ui),u=Ui.dot(wf),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(s*u-a*l)*f;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Oi.x),l.addScaledVector(s,Oi.y),l.addScaledVector(a,Oi.z),l)}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ui.subVectors(e,n),Jn.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return gi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Zo.subVectors(r,i),Jo.subVectors(o,i),Mf.subVectors(e,i);const l=Zo.dot(Mf),c=Jo.dot(Mf);if(l<=0&&c<=0)return n.copy(i);bf.subVectors(e,r);const u=Zo.dot(bf),d=Jo.dot(bf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Zo,s);Af.subVectors(e,o);const p=Zo.dot(Af),_=Jo.dot(Af);if(_>=0&&p<=_)return n.copy(o);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Jo,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Nv.subVectors(o,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Nv,a);const h=1/(m+v+f);return s=v*h,a=f*h,n.copy(i).addScaledVector(Zo,s).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q9={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Rf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=B0(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Rf(s,o,e+1/3),this.g=Rf(s,o,e),this.b=Rf(s,o,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=pi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const i=q9[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=mf(e.r),this.g=mf(e.g),this.b=mf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return lt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Gt(Qt.r*255,0,255))*65536+Math.round(Gt(Qt.g*255,0,255))*256+Math.round(Gt(Qt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,o=Qt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=pi){lt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(dc);const i=Ka(cr.h,dc.h,n),r=Ka(cr.s,dc.s,n),o=Ka(cr.l,dc.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new tt;tt.NAMES=q9;let yA=0;class Nl extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Ls,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=op,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ru,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rp&&(i.blendSrc=this.blendSrc),this.blendDst!==op&&(i.blendDst=this.blendDst),this.blendEquation!==fo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ru&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yl extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=L9,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new k,fc=new ge;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sA("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fc.fromBufferAttribute(this,n),fc.applyMatrix3(e),this.setXY(n,fc.x,fc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),o=an(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class K9 extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z9 extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SA=0;const Bn=new Et,Cf=new $t,Qo=new k,Mn=new Dl,Ra=new Dl,zt=new k;class jn extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W9(e)?Z9:K9)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new V0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Mn.min,Ra.min),Mn.expandByPoint(zt),zt.addVectors(Mn.max,Ra.max),Mn.expandByPoint(zt)):(Mn.expandByPoint(Ra.min),Mn.expandByPoint(Ra.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)zt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),zt.add(Qo)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new k,l[C]=new k;const c=new k,u=new k,d=new k,f=new ge,p=new ge,_=new ge,v=new k,m=new k;function h(C,M,E){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(o,C),p.fromBufferAttribute(o,M),_.fromBufferAttribute(o,E),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),a[C].add(v),a[M].add(v),a[E].add(v),l[C].add(m),l[M].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,M=g.length;C<M;++C){const E=g[C],U=E.start,O=E.count;for(let D=U,B=U+O;D<B;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new k,y=new k,w=new k,T=new k;function b(C){w.fromBufferAttribute(r,C),T.copy(w);const M=a[C];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);const U=y.dot(l[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,U)}for(let C=0,M=g.length;C<M;++C){const E=g[C],U=E.start,O=E.count;for(let D=U,B=U+O;D<B;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Ln(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new Et,to=new Y9,hc=new V0,Uv=new k,es=new k,ts=new k,ns=new k,Pf=new k,pc=new k,mc=new ge,_c=new ge,vc=new ge,Ov=new k,zv=new k,Fv=new k,gc=new k,xc=new k;class _t extends $t{constructor(e=new jn,n=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){pc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Pf.fromBufferAttribute(d,e),s?pc.addScaledVector(Pf,u):pc.addScaledVector(Pf.sub(n),u))}n.add(pc)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(o),to.copy(e.ray).recast(e.near),!(hc.containsPoint(to.origin)===!1&&(to.intersectSphere(hc,Uv)===null||to.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Lv.copy(o).invert(),to.copy(e.ray).applyMatrix4(Lv),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,to)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=x;y<w;y+=3){const T=a.getX(y),b=a.getX(y+1),C=a.getX(y+2);r=yc(this,h,e,i,c,u,d,T,b,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=yc(this,s,e,i,c,u,d,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=x;y<w;y+=3){const T=y,b=y+1,C=y+2;r=yc(this,h,e,i,c,u,d,T,b,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=m,x=m+1,y=m+2;r=yc(this,s,e,i,c,u,d,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function EA(t,e,n,i,r,o,s,a){let l;if(e.side===En?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===kr,a),l===null)return null;xc.copy(a),xc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xc);return c<n.near||c>n.far?null:{distance:c,point:xc.clone(),object:t}}function yc(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const u=EA(t,e,n,i,es,ts,ns,gc);if(u){r&&(mc.fromBufferAttribute(r,a),_c.fromBufferAttribute(r,l),vc.fromBufferAttribute(r,c),u.uv=gi.getInterpolation(gc,es,ts,ns,mc,_c,vc,new ge)),o&&(mc.fromBufferAttribute(o,a),_c.fromBufferAttribute(o,l),vc.fromBufferAttribute(o,c),u.uv1=gi.getInterpolation(gc,es,ts,ns,mc,_c,vc,new ge)),s&&(Ov.fromBufferAttribute(s,a),zv.fromBufferAttribute(s,l),Fv.fromBufferAttribute(s,c),u.normal=gi.getInterpolation(gc,es,ts,ns,Ov,zv,Fv,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};gi.getNormal(es,ts,ns,d.normal),u.face=d}return u}class sa extends jn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function _(v,m,h,g,x,y,w,T,b,C,M){const E=y/b,U=w/C,O=y/2,D=w/2,B=T/2,F=b+1,X=C+1;let K=0,N=0;const H=new k;for(let W=0;W<X;W++){const re=W*U-D;for(let ee=0;ee<F;ee++){const fe=ee*E-O;H[v]=fe*g,H[m]=re*x,H[h]=B,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[h]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(ee/b),d.push(1-W/C),K+=1}}for(let W=0;W<C;W++)for(let re=0;re<b;re++){const ee=f+re+F*W,fe=f+re+F*(W+1),$=f+(re+1)+F*(W+1),q=f+(re+1)+F*W;l.push(ee,fe,q),l.push(fe,$,q),N+=6}a.addGroup(p,N,M),p+=N,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function TA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J9(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const wA={clone:qs,merge:ln};var MA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MA,this.fragmentShader=bA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=TA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Q9=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const ur=new k,kv=new ge,Bv=new ge;class vn extends Q9{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,kv,Bv),n.subVectors(Bv,kv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class AA extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(is,rs,e,n);r.layers=this.layers,this.add(r);const o=new vn(is,rs,e,n);o.layers=this.layers,this.add(o);const s=new vn(is,rs,e,n);s.layers=this.layers,this.add(s);const a=new vn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new vn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new vn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class eS extends dn{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RA extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sa(5,5,5),o=new Mi({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Pr});o.uniforms.tEquirect.value=n;const s=new _t(r,o),a=n.minFilter;return n.minFilter===xo&&(n.minFilter=Pn),new AA(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const If=new k,CA=new k,PA=new $e;class co{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=If.subVectors(i,n).cross(CA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(If),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PA.getNormalMatrix(e),r=this.coplanarPoint(If).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new V0,Sc=new k;class H0{constructor(e=new co,n=new co,i=new co,r=new co,o=new co,s=new co){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],g=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-o,f-c,m-p,y-h).normalize(),i[1].setComponents(l+o,f+c,m+p,y+h).normalize(),i[2].setComponents(l+s,f+u,m+_,y+g).normalize(),i[3].setComponents(l-s,f-u,m-_,y-g).normalize(),i[4].setComponents(l-a,f-d,m-v,y-x).normalize(),n===Wi)i[5].setComponents(l+a,f+d,m+v,y+x).normalize();else if(n===Nu)i[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sc.x=r.normal.x>0?e.max.x:e.min.x,Sc.y=r.normal.y>0?e.max.y:e.min.y,Sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function IA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ko extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const g=h*f-s;for(let x=0;x<c;x++){const y=x*d-o;_.push(y,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const x=g+c*h,y=g+c*(h+1),w=g+1+c*(h+1),T=g+1+c*h;p.push(x,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var DA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$A=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,VA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lR="gl_FragColor = linearToOutputTexel( gl_FragColor );",cR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ER=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$R=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,YR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,pC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_C=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:DA,alphahash_pars_fragment:NA,alphamap_fragment:LA,alphamap_pars_fragment:UA,alphatest_fragment:OA,alphatest_pars_fragment:zA,aomap_fragment:FA,aomap_pars_fragment:kA,batching_pars_vertex:BA,batching_vertex:$A,begin_vertex:VA,beginnormal_vertex:GA,bsdfs:HA,iridescence_fragment:WA,bumpmap_pars_fragment:XA,clipping_planes_fragment:jA,clipping_planes_pars_fragment:YA,clipping_planes_pars_vertex:qA,clipping_planes_vertex:KA,color_fragment:ZA,color_pars_fragment:JA,color_pars_vertex:QA,color_vertex:eR,common:tR,cube_uv_reflection_fragment:nR,defaultnormal_vertex:iR,displacementmap_pars_vertex:rR,displacementmap_vertex:oR,emissivemap_fragment:sR,emissivemap_pars_fragment:aR,colorspace_fragment:lR,colorspace_pars_fragment:cR,envmap_fragment:uR,envmap_common_pars_fragment:dR,envmap_pars_fragment:fR,envmap_pars_vertex:hR,envmap_physical_pars_fragment:wR,envmap_vertex:pR,fog_vertex:mR,fog_pars_vertex:_R,fog_fragment:vR,fog_pars_fragment:gR,gradientmap_pars_fragment:xR,lightmap_pars_fragment:yR,lights_lambert_fragment:SR,lights_lambert_pars_fragment:ER,lights_pars_begin:TR,lights_toon_fragment:MR,lights_toon_pars_fragment:bR,lights_phong_fragment:AR,lights_phong_pars_fragment:RR,lights_physical_fragment:CR,lights_physical_pars_fragment:PR,lights_fragment_begin:IR,lights_fragment_maps:DR,lights_fragment_end:NR,logdepthbuf_fragment:LR,logdepthbuf_pars_fragment:UR,logdepthbuf_pars_vertex:OR,logdepthbuf_vertex:zR,map_fragment:FR,map_pars_fragment:kR,map_particle_fragment:BR,map_particle_pars_fragment:$R,metalnessmap_fragment:VR,metalnessmap_pars_fragment:GR,morphinstance_vertex:HR,morphcolor_vertex:WR,morphnormal_vertex:XR,morphtarget_pars_vertex:jR,morphtarget_vertex:YR,normal_fragment_begin:qR,normal_fragment_maps:KR,normal_pars_fragment:ZR,normal_pars_vertex:JR,normal_vertex:QR,normalmap_pars_fragment:eC,clearcoat_normal_fragment_begin:tC,clearcoat_normal_fragment_maps:nC,clearcoat_pars_fragment:iC,iridescence_pars_fragment:rC,opaque_fragment:oC,packing:sC,premultiplied_alpha_fragment:aC,project_vertex:lC,dithering_fragment:cC,dithering_pars_fragment:uC,roughnessmap_fragment:dC,roughnessmap_pars_fragment:fC,shadowmap_pars_fragment:hC,shadowmap_pars_vertex:pC,shadowmap_vertex:mC,shadowmask_pars_fragment:_C,skinbase_vertex:vC,skinning_pars_vertex:gC,skinning_vertex:xC,skinnormal_vertex:yC,specularmap_fragment:SC,specularmap_pars_fragment:EC,tonemapping_fragment:TC,tonemapping_pars_fragment:wC,transmission_fragment:MC,transmission_pars_fragment:bC,uv_pars_fragment:AC,uv_pars_vertex:RC,uv_vertex:CC,worldpos_vertex:PC,background_vert:IC,background_frag:DC,backgroundCube_vert:NC,backgroundCube_frag:LC,cube_vert:UC,cube_frag:OC,depth_vert:zC,depth_frag:FC,distanceRGBA_vert:kC,distanceRGBA_frag:BC,equirect_vert:$C,equirect_frag:VC,linedashed_vert:GC,linedashed_frag:HC,meshbasic_vert:WC,meshbasic_frag:XC,meshlambert_vert:jC,meshlambert_frag:YC,meshmatcap_vert:qC,meshmatcap_frag:KC,meshnormal_vert:ZC,meshnormal_frag:JC,meshphong_vert:QC,meshphong_frag:e2,meshphysical_vert:t2,meshphysical_frag:n2,meshtoon_vert:i2,meshtoon_frag:r2,points_vert:o2,points_frag:s2,shadow_vert:a2,shadow_frag:l2,sprite_vert:c2,sprite_frag:u2},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},mi={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ec={r:0,b:0,g:0},io=new wi,d2=new Et;function f2(t,e,n,i,r,o,s){const a=new tt(0);let l=o===!0?0:1,c,u,d=null,f=0,p=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function v(g){let x=!1;const y=_(g);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(g,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===cd)?(u===void 0&&(u=new _t(new sa(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:qs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),io.copy(x.backgroundRotation),io.x*=-1,io.y*=-1,io.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d2.makeRotationFromEuler(io)),u.material.toneMapped=lt.getTransfer(y.colorSpace)!==mt,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new ko(2,2),new Mi({name:"BackgroundMaterial",uniforms:qs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,x){g.getRGB(Ec,J9(t)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:v,addToRenderList:m}}function h2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(E,U,O,D,B){let F=!1;const X=d(D,O,U);o!==X&&(o=X,c(o.object)),F=p(E,D,O,B),F&&_(E,D,O,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,y(E,U,O,D),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function d(E,U,O){const D=O.wireframe===!0;let B=i[E.id];B===void 0&&(B={},i[E.id]=B);let F=B[U.id];F===void 0&&(F={},B[U.id]=F);let X=F[D];return X===void 0&&(X=f(l()),F[D]=X),X}function f(E){const U=[],O=[],D=[];for(let B=0;B<n;B++)U[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:D,object:E,attributes:{},index:null}}function p(E,U,O,D){const B=o.attributes,F=U.attributes;let X=0;const K=O.getAttributes();for(const N in K)if(K[N].location>=0){const W=B[N];let re=F[N];if(re===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),W===void 0||W.attribute!==re||re&&W.data!==re.data)return!0;X++}return o.attributesNum!==X||o.index!==D}function _(E,U,O,D){const B={},F=U.attributes;let X=0;const K=O.getAttributes();for(const N in K)if(K[N].location>=0){let W=F[N];W===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(W=E.instanceColor));const re={};re.attribute=W,W&&W.data&&(re.data=W.data),B[N]=re,X++}o.attributes=B,o.attributesNum=X,o.index=D}function v(){const E=o.newAttributes;for(let U=0,O=E.length;U<O;U++)E[U]=0}function m(E){h(E,0)}function h(E,U){const O=o.newAttributes,D=o.enabledAttributes,B=o.attributeDivisors;O[E]=1,D[E]===0&&(t.enableVertexAttribArray(E),D[E]=1),B[E]!==U&&(t.vertexAttribDivisor(E,U),B[E]=U)}function g(){const E=o.newAttributes,U=o.enabledAttributes;for(let O=0,D=U.length;O<D;O++)U[O]!==E[O]&&(t.disableVertexAttribArray(O),U[O]=0)}function x(E,U,O,D,B,F,X){X===!0?t.vertexAttribIPointer(E,U,O,B,F):t.vertexAttribPointer(E,U,O,D,B,F)}function y(E,U,O,D){v();const B=D.attributes,F=O.getAttributes(),X=U.defaultAttributeValues;for(const K in F){const N=F[K];if(N.location>=0){let H=B[K];if(H===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(H=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(H=E.instanceColor)),H!==void 0){const W=H.normalized,re=H.itemSize,ee=e.get(H);if(ee===void 0)continue;const fe=ee.buffer,$=ee.type,q=ee.bytesPerElement,te=$===t.INT||$===t.UNSIGNED_INT||H.gpuType===z9;if(H.isInterleavedBufferAttribute){const P=H.data,Q=P.stride,le=H.offset;if(P.isInstancedInterleavedBuffer){for(let z=0;z<N.locationSize;z++)h(N.location+z,P.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let z=0;z<N.locationSize;z++)m(N.location+z);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let z=0;z<N.locationSize;z++)x(N.location+z,re/N.locationSize,$,W,Q*q,(le+re/N.locationSize*z)*q,te)}else{if(H.isInstancedBufferAttribute){for(let P=0;P<N.locationSize;P++)h(N.location+P,H.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let P=0;P<N.locationSize;P++)m(N.location+P);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let P=0;P<N.locationSize;P++)x(N.location+P,re/N.locationSize,$,W,re*q,re/N.locationSize*P*q,te)}}else if(X!==void 0){const W=X[K];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(N.location,W);break;case 3:t.vertexAttrib3fv(N.location,W);break;case 4:t.vertexAttrib4fv(N.location,W);break;default:t.vertexAttrib1fv(N.location,W)}}}}g()}function w(){C();for(const E in i){const U=i[E];for(const O in U){const D=U[O];for(const B in D)u(D[B].object),delete D[B];delete U[O]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const O in U){const D=U[O];for(const B in D)u(D[B].object),delete D[B];delete U[O]}delete i[E.id]}function b(E){for(const U in i){const O=i[U];if(O[E.id]===void 0)continue;const D=O[E.id];for(const B in D)u(D[B].object),delete D[B];delete O[E.id]}}function C(){M(),s=!0,o!==r&&(o=r,c(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function p2(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(c[p],u[p]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];for(let v=0;v<f.length;v++)n.update(_,i,f[v])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function m2(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Dn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===ud&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Br&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function _2(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new co,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||o&&!m)o?u(null):c();else{const g=o?0:i,x=g*4;let y=h.clippingState||null;l.value=y,y=u(_,f,x,p);for(let w=0;w!==x;++w)y[w]=n[w];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==v;++x,y+=4)s.copy(d[x]).applyMatrix4(g,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function v2(t){let e=new WeakMap;function n(s,a){return a===sp?s.mapping=Xs:a===ap&&(s.mapping=js),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===sp||a===ap)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new RA(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class nS extends Q9{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=4,$v=[.125,.215,.35,.446,.526,.582],ho=20,Df=new nS,Vv=new tt;let Nf=null,Lf=0,Uf=0,Of=!1;const uo=(1+Math.sqrt(5))/2,os=1/uo,Gv=[new k(-uo,os,0),new k(uo,os,0),new k(-os,0,uo),new k(os,0,uo),new k(0,uo,-os),new k(0,uo,os),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Lf,Uf),this._renderer.xr.enabled=Of,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ud,format:Dn,colorSpace:Yr,depthBuffer:!1},r=Wv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(o)),this._blurMaterial=x2(o,e,n)}return r}_compileMaterial(e){const n=new _t(this._lodPlanes[0],e);this._renderer.compile(n,Df)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vv),u.toneMapping=Ir,u.autoClear=!1;const p=new yl({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new _t(new sa,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Vv),v=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;Tc(r,g*x,h>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xv());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new _t(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Tc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Df)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Gv[(r-o-1)%Gv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _t(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ho-1),v=o/_,m=isFinite(o)?1+Math.floor(u*v):ho;m>ho&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ho}`);const h=[];let g=0;for(let b=0;b<ho;++b){const C=b/v,M=Math.exp(-C*C/2);h.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-bs?r-x+bs:0),T=4*(this._cubeSize-y);Tc(n,w,T,3*y,2*y),l.setRenderTarget(n),l.render(d,Df)}}function g2(t){const e=[],n=[],i=[];let r=t;const o=t-bs+1+$v.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-bs?l=$v[s-t+bs-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,C=T>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];g.set(M,v*_*T),x.set(f,m*_*T);const E=[T,T,T,T,T,T];y.set(E,h*_*T)}const w=new jn;w.setAttribute("position",new Ln(g,v)),w.setAttribute("uv",new Ln(x,m)),w.setAttribute("faceIndex",new Ln(y,h)),e.push(w),r>bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wv(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=cd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x2(t,e,n){const i=new Float32Array(ho),r=new k(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:W0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Xv(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:W0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function jv(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:W0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function W0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sp||l===ap,u=l===Xs||l===js;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Hv(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Hv(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function S2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function E2(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,y=g.length;x<y;x+=3){const w=g[x+0],T=g[x+1],b=g[x+2];f.push(w,T,T,b,b,w)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const w=x+0,T=x+1,b=x+2;f.push(w,T,T,b,b,w)}}else return;const m=new(W9(f)?Z9:K9)(f,1);m.version=v;const h=o.get(d);h&&e.remove(h),o.set(d,m)}function u(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function T2(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(i,p,o,f*s),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,o,f*s,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_;m++)this.render(f[m]/s,p[m]);else{v.multiDrawElementsWEBGL(i,p,0,o,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}}function d(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/s,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];for(let g=0;g<v.length;g++)n.update(h,i,v[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function w2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function M2(t,e,n){const i=new WeakMap,r=new kt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),C=new j9(b,w,T,d);C.type=ri,C.needsUpdate=!0;const M=y*4;for(let U=0;U<d;U++){const O=h[U],D=g[U],B=x[U],F=w*T*4*U;for(let X=0;X<O.count;X++){const K=X*M;_===!0&&(r.fromBufferAttribute(O,X),b[F+K+0]=r.x,b[F+K+1]=r.y,b[F+K+2]=r.z,b[F+K+3]=0),v===!0&&(r.fromBufferAttribute(D,X),b[F+K+4]=r.x,b[F+K+5]=r.y,b[F+K+6]=r.z,b[F+K+7]=0),m===!0&&(r.fromBufferAttribute(B,X),b[F+K+8]=r.x,b[F+K+9]=r.y,b[F+K+10]=r.z,b[F+K+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new ge(w,T)},i.set(a,f),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function b2(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class iS extends dn{constructor(e,n,i,r,o,s,a,l,c,u){if(u=u!==void 0?u:Us,u!==Us&&u!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Us&&(i=Ys),i===void 0&&u===gl&&(i=Il),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rS=new dn,oS=new iS(1,1);oS.compareFunction=H9;const sS=new j9,aS=new $0,lS=new eS,Yv=[],qv=[],Kv=new Float32Array(16),Zv=new Float32Array(9),Jv=new Float32Array(4);function aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Yv[r];if(o===void 0&&(o=new Float32Array(r),Yv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fd(t,e){let n=qv[e];n===void 0&&(n=new Int32Array(e),qv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function A2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function I2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Jv.set(i),t.uniformMatrix2fv(this.addr,!1,Jv),Ot(n,i)}}function D2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Zv.set(i),t.uniformMatrix3fv(this.addr,!1,Zv),Ot(n,i)}}function N2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;Kv.set(i),t.uniformMatrix4fv(this.addr,!1,Kv),Ot(n,i)}}function L2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?oS:rS;n.setTexture2D(e||o,r)}function G2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||aS,r)}function H2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||lS,r)}function W2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sS,r)}function X2(t){switch(t){case 5126:return A2;case 35664:return R2;case 35665:return C2;case 35666:return P2;case 35674:return I2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return L2;case 35667:case 35671:return U2;case 35668:case 35672:return O2;case 35669:case 35673:return z2;case 5125:return F2;case 36294:return k2;case 36295:return B2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return W2}}function j2(t,e){t.uniform1fv(this.addr,e)}function Y2(t,e){const n=aa(e,this.size,2);t.uniform2fv(this.addr,n)}function q2(t,e){const n=aa(e,this.size,3);t.uniform3fv(this.addr,n)}function K2(t,e){const n=aa(e,this.size,4);t.uniform4fv(this.addr,n)}function Z2(t,e){const n=aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function J2(t,e){const n=aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Q2(t,e){const n=aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eP(t,e){t.uniform1iv(this.addr,e)}function tP(t,e){t.uniform2iv(this.addr,e)}function nP(t,e){t.uniform3iv(this.addr,e)}function iP(t,e){t.uniform4iv(this.addr,e)}function rP(t,e){t.uniform1uiv(this.addr,e)}function oP(t,e){t.uniform2uiv(this.addr,e)}function sP(t,e){t.uniform3uiv(this.addr,e)}function aP(t,e){t.uniform4uiv(this.addr,e)}function lP(t,e,n){const i=this.cache,r=e.length,o=fd(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||rS,o[s])}function cP(t,e,n){const i=this.cache,r=e.length,o=fd(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||aS,o[s])}function uP(t,e,n){const i=this.cache,r=e.length,o=fd(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||lS,o[s])}function dP(t,e,n){const i=this.cache,r=e.length,o=fd(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||sS,o[s])}function fP(t){switch(t){case 5126:return j2;case 35664:return Y2;case 35665:return q2;case 35666:return K2;case 35674:return Z2;case 35675:return J2;case 35676:return Q2;case 5124:case 35670:return eP;case 35667:case 35671:return tP;case 35668:case 35672:return nP;case 35669:case 35673:return iP;case 5125:return rP;case 36294:return oP;case 36295:return sP;case 36296:return aP;case 35678:case 36198:case 36298:case 36306:case 35682:return lP;case 35679:case 36299:case 36307:return cP;case 35680:case 36300:case 36308:case 36293:return uP;case 36289:case 36303:case 36311:case 36292:return dP}}class hP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=X2(n.type)}}class pP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fP(n.type)}}class mP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function Qv(t,e){t.seq.push(e),t.map[e.id]=e}function _P(t,e,n){const i=t.name,r=i.length;for(zf.lastIndex=0;;){const o=zf.exec(i),s=zf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Qv(n,c===void 0?new hP(a,t,e):new pP(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new mP(a),Qv(n,d)),n=d}}}class qc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);_P(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vP=37297;let gP=0;function xP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function yP(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===Iu&&n===Pu?i="LinearDisplayP3ToLinearSRGB":e===Pu&&n===Iu&&(i="LinearSRGBToLinearDisplayP3"),t){case Yr:case dd:return[i,"LinearTransferOETF"];case pi:case k0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+xP(t.getShaderSource(e),s)}else return r}function SP(t,e){const n=yP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function EP(t,e){let n;switch(e){case mb:n="Linear";break;case _b:n="Reinhard";break;case vb:n="OptimizedCineon";break;case gb:n="ACESFilmic";break;case yb:n="AgX";break;case Sb:n="Neutral";break;case xb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function TP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function wP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Oa(t){return t!==""}function ng(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bP=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(t){return t.replace(bP,RP)}const AP=new Map;function RP(t,e){let n=Be[e];if(n===void 0){const i=AP.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return up(n)}const CP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(t){return t.replace(CP,PP)}function PP(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function og(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N9?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function DP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function LP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case L9:e="ENVMAP_BLENDING_MULTIPLY";break;case hb:e="ENVMAP_BLENDING_MIX";break;case pb:e="ENVMAP_BLENDING_ADD";break}return e}function UP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OP(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=IP(n),c=DP(n),u=NP(n),d=LP(n),f=UP(n),p=TP(n),_=wP(o),v=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oa).join(`
`),h.length>0&&(h+=`
`)):(m=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),h=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?Be.tonemapping_pars_fragment:"",n.toneMapping!==Ir?EP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,SP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),s=up(s),s=ng(s,n),s=ig(s,n),a=up(a),a=ng(a,n),a=ig(a,n),s=rg(s),a=rg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+s,y=g+h+a,w=eg(r,r.VERTEX_SHADER,x),T=eg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,w),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(U){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(T).trim();let F=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,w,T);else{const K=tg(r,w,"vertex"),N=tg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+K+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||B==="")&&(X=!1);X&&(U.diagnostics={runnable:F,programLog:O,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(w),r.deleteShader(T),C=new qc(r,v),M=MP(r,v)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,vP)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let zP=0;class FP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kP(e),n.set(e,i)),i}}class kP{constructor(e){this.id=zP++,this.code=e,this.usedTimes=0}}function BP(t,e,n,i,r,o,s){const a=new G0,l=new FP,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,U,O,D){const B=O.fog,F=D.geometry,X=M.isMeshStandardMaterial?O.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),N=K&&K.mapping===cd?K.image.height:null,H=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const W=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=W!==void 0?W.length:0;let ee=0;F.morphAttributes.position!==void 0&&(ee=1),F.morphAttributes.normal!==void 0&&(ee=2),F.morphAttributes.color!==void 0&&(ee=3);let fe,$,q,te;if(H){const st=mi[H];fe=st.vertexShader,$=st.fragmentShader}else fe=M.vertexShader,$=M.fragmentShader,l.update(M),q=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const P=t.getRenderTarget(),Q=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,z=!!M.map,pe=!!M.matcap,ie=!!K,Ce=!!M.aoMap,ye=!!M.lightMap,Re=!!M.bumpMap,De=!!M.normalMap,Ne=!!M.displacementMap,rt=!!M.emissiveMap,I=!!M.metalnessMap,A=!!M.roughnessMap,J=M.anisotropy>0,oe=M.clearcoat>0,ae=M.dispersion>0,ue=M.iridescence>0,Ie=M.sheen>0,Se=M.transmission>0,xe=J&&!!M.anisotropyMap,Ve=oe&&!!M.clearcoatMap,he=oe&&!!M.clearcoatNormalMap,Pe=oe&&!!M.clearcoatRoughnessMap,et=ue&&!!M.iridescenceMap,Le=ue&&!!M.iridescenceThicknessMap,Me=Ie&&!!M.sheenColorMap,Ge=Ie&&!!M.sheenRoughnessMap,Qe=!!M.specularMap,At=!!M.specularColorMap,He=!!M.specularIntensityMap,V=Se&&!!M.transmissionMap,se=Se&&!!M.thicknessMap,ne=!!M.gradientMap,_e=!!M.alphaMap,Ee=M.alphaTest>0,it=!!M.alphaHash,ft=!!M.extensions;let wt=Ir;M.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(wt=t.toneMapping);const jt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:$,defines:M.defines,customVertexShaderID:q,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:le,instancing:Q,instancingColor:Q&&D.instanceColor!==null,instancingMorph:Q&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?t.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yr,alphaToCoverage:!!M.alphaToCoverage,map:z,matcap:pe,envMap:ie,envMapMode:ie&&K.mapping,envMapCubeUVHeight:N,aoMap:Ce,lightMap:ye,bumpMap:Re,normalMap:De,displacementMap:f&&Ne,emissiveMap:rt,normalMapObjectSpace:De&&M.normalMapType===Ub,normalMapTangentSpace:De&&M.normalMapType===G9,metalnessMap:I,roughnessMap:A,anisotropy:J,anisotropyMap:xe,clearcoat:oe,clearcoatMap:Ve,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:ae,iridescence:ue,iridescenceMap:et,iridescenceThicknessMap:Le,sheen:Ie,sheenColorMap:Me,sheenRoughnessMap:Ge,specularMap:Qe,specularColorMap:At,specularIntensityMap:He,transmission:Se,transmissionMap:V,thicknessMap:se,gradientMap:ne,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ee,alphaHash:it,combine:M.combine,mapUv:z&&v(M.map.channel),aoMapUv:Ce&&v(M.aoMap.channel),lightMapUv:ye&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:De&&v(M.normalMap.channel),displacementMapUv:Ne&&v(M.displacementMap.channel),emissiveMapUv:rt&&v(M.emissiveMap.channel),metalnessMapUv:I&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:xe&&v(M.anisotropyMap.channel),clearcoatMapUv:Ve&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(M.sheenRoughnessMap.channel),specularMapUv:Qe&&v(M.specularMap.channel),specularColorMapUv:At&&v(M.specularColorMap.channel),specularIntensityMapUv:He&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:se&&v(M.thicknessMap.channel),alphaMapUv:_e&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(De||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(z||_e),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:z&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(g(E,M),x(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function g(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const E=_[M.type];let U;if(E){const O=mi[E];U=wA.clone(O.uniforms)}else U=M.uniforms;return U}function w(M,E){let U;for(let O=0,D=u.length;O<D;O++){const B=u[O];if(B.cacheKey===E){U=B,++U.usedTimes;break}}return U===void 0&&(U=new OP(t,E,M,o),u.push(U)),U}function T(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:C}}function $P(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function VP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ag(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,f,p,_,v,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,_,v,m){const h=s(d,f,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,v,m){const h=s(d,f,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||VP),i.length>1&&i.sort(f||sg),r.length>1&&r.sort(f||sg)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function GP(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new ag,t.set(i,[s])):r>=o.length?(s=new ag,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function HP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new tt};break;case"SpotLight":n={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function WP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XP=0;function jP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YP(t){const e=new HP,n=WP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,o=new Et,s=new Et;function a(c,u){let d=0,f=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,v=0,m=0,h=0,g=0,x=0,y=0,w=0,T=0,b=0,C=0;c.sort(jP);const M=u===!0?Math.PI:1;for(let U=0,O=c.length;U<O;U++){const D=c[U],B=D.color,F=D.intensity,X=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*F*M,f+=B.g*F*M,p+=B.b*F*M;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],F);C++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const H=D.shadow,W=n.get(D);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=N,_++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(B).multiplyScalar(F*M),N.distance=X,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[m]=N;const H=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[m]=H.matrix,D.castShadow){const W=n.get(D);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,i.spotShadow[m]=W,i.spotShadowMap[m]=K,w++}m++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(B).multiplyScalar(F),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=N,h++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*M),N.distance=D.distance,N.decay=D.decay,D.castShadow){const H=D.shadow,W=n.get(D);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=N,v++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(F*M),N.groundColor.copy(D.groundColor).multiplyScalar(F*M),i.hemi[g]=N,g++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==_||E.pointLength!==v||E.spotLength!==m||E.rectAreaLength!==h||E.hemiLength!==g||E.numDirectionalShadows!==x||E.numPointShadows!==y||E.numSpotShadows!==w||E.numSpotMaps!==T||E.numLightProbes!==C)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,E.directionalLength=_,E.pointLength=v,E.spotLength=m,E.rectAreaLength=h,E.hemiLength=g,E.numDirectionalShadows=x,E.numPointShadows=y,E.numSpotShadows=w,E.numSpotMaps=T,E.numLightProbes=C,i.version=XP++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function lg(t){const e=new YP(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function qP(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new lg(t),e.set(r,[a])):o>=s.length?(a=new lg(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class KP extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZP extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e3(t,e,n){let i=new H0;const r=new ge,o=new ge,s=new kt,a=new KP({depthPacking:Lb}),l=new ZP,c={},u=n.maxTextureSize,d={[kr]:En,[En]:kr,[vi]:vi},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:JP,fragmentShader:QP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N9;let h=this.type;this.render=function(T,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Pr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=h!==Fi&&this.type===Fi,B=h===Fi&&this.type!==Fi;for(let F=0,X=T.length;F<X;F++){const K=T[F],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const H=N.getFrameExtents();if(r.multiply(H),o.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/H.x),r.x=o.x*H.x,N.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/H.y),r.y=o.y*H.y,N.mapSize.y=o.y)),N.map===null||D===!0||B===!0){const re=this.type!==Fi?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new $r(r.x,r.y,re),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const W=N.getViewportCount();for(let re=0;re<W;re++){const ee=N.getViewport(re);s.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),O.viewport(s),N.updateMatrices(K,re),i=N.getFrustum(),y(b,C,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===Fi&&g(N,C),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,E,U)};function g(T,b){const C=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $r(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,C,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,C,p,v,null)}function x(T,b,C,M){let E=null;const U=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=C.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=E.uuid,D=b.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let F=B[D];F===void 0&&(F=E.clone(),B[D]=F,b.addEventListener("dispose",w)),E=F}if(E.visible=b.visible,E.wireframe=b.wireframe,M===Fi?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:d[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=t.properties.get(E);O.light=C}return E}function y(T,b,C,M,E){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Fi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const D=e.update(T),B=T.material;if(Array.isArray(B)){const F=D.groups;for(let X=0,K=F.length;X<K;X++){const N=F[X],H=B[N.materialIndex];if(H&&H.visible){const W=x(T,H,M,E);T.onBeforeShadow(t,T,b,C,D,W,N),t.renderBufferDirect(C,null,D,W,T,N),T.onAfterShadow(t,T,b,C,D,W,N)}}}else if(B.visible){const F=x(T,B,M,E);T.onBeforeShadow(t,T,b,C,D,F,null),t.renderBufferDirect(C,null,D,F,T,null),T.onAfterShadow(t,T,b,C,D,F,null)}}const O=T.children;for(let D=0,B=O.length;D<B;D++)y(O[D],b,C,M,E)}function w(T){T.target.removeEventListener("dispose",w);for(const C in c){const M=c[C],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function t3(t){function e(){let V=!1;const se=new kt;let ne=null;const _e=new kt(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!V&&(t.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,it,ft,wt,jt){jt===!0&&(Ee*=wt,it*=wt,ft*=wt),se.set(Ee,it,ft,wt),_e.equals(se)===!1&&(t.clearColor(Ee,it,ft,wt),_e.copy(se))},reset:function(){V=!1,ne=null,_e.set(-1,0,0,0)}}}function n(){let V=!1,se=null,ne=null,_e=null;return{setTest:function(Ee){Ee?te(t.DEPTH_TEST):P(t.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!V&&(t.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(ne!==Ee){switch(Ee){case sb:t.depthFunc(t.NEVER);break;case ab:t.depthFunc(t.ALWAYS);break;case lb:t.depthFunc(t.LESS);break;case Ru:t.depthFunc(t.LEQUAL);break;case cb:t.depthFunc(t.EQUAL);break;case ub:t.depthFunc(t.GEQUAL);break;case db:t.depthFunc(t.GREATER);break;case fb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Ee}},setLocked:function(Ee){V=Ee},setClear:function(Ee){_e!==Ee&&(t.clearDepth(Ee),_e=Ee)},reset:function(){V=!1,se=null,ne=null,_e=null}}}function i(){let V=!1,se=null,ne=null,_e=null,Ee=null,it=null,ft=null,wt=null,jt=null;return{setTest:function(st){V||(st?te(t.STENCIL_TEST):P(t.STENCIL_TEST))},setMask:function(st){se!==st&&!V&&(t.stencilMask(st),se=st)},setFunc:function(st,di,sn){(ne!==st||_e!==di||Ee!==sn)&&(t.stencilFunc(st,di,sn),ne=st,_e=di,Ee=sn)},setOp:function(st,di,sn){(it!==st||ft!==di||wt!==sn)&&(t.stencilOp(st,di,sn),it=st,ft=di,wt=sn)},setLocked:function(st){V=st},setClear:function(st){jt!==st&&(t.clearStencil(st),jt=st)},reset:function(){V=!1,se=null,ne=null,_e=null,Ee=null,it=null,ft=null,wt=null,jt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,m=null,h=null,g=null,x=null,y=null,w=null,T=new tt(0,0,0),b=0,C=!1,M=null,E=null,U=null,O=null,D=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=X>=2);let N=null,H={};const W=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ee=new kt().fromArray(W),fe=new kt().fromArray(re);function $(V,se,ne,_e){const Ee=new Uint8Array(4),it=t.createTexture();t.bindTexture(V,it),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<ne;ft++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(se+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return it}const q={};q[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),te(t.DEPTH_TEST),o.setFunc(Ru),Re(!1),De(G_),te(t.CULL_FACE),Ce(Pr);function te(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function P(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function Q(V,se){return u[V]!==se?(t.bindFramebuffer(V,se),u[V]=se,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function le(V,se){let ne=f,_e=!1;if(V){ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne));const Ee=V.textures;if(ne.length!==Ee.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let it=0,ft=Ee.length;it<ft;it++)ne[it]=t.COLOR_ATTACHMENT0+it;ne.length=Ee.length,_e=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ne)}function z(V){return p!==V?(t.useProgram(V),p=V,!0):!1}const pe={[fo]:t.FUNC_ADD,[GM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};pe[WM]=t.MIN,pe[XM]=t.MAX;const ie={[jM]:t.ZERO,[YM]:t.ONE,[qM]:t.SRC_COLOR,[rp]:t.SRC_ALPHA,[tb]:t.SRC_ALPHA_SATURATE,[QM]:t.DST_COLOR,[ZM]:t.DST_ALPHA,[KM]:t.ONE_MINUS_SRC_COLOR,[op]:t.ONE_MINUS_SRC_ALPHA,[eb]:t.ONE_MINUS_DST_COLOR,[JM]:t.ONE_MINUS_DST_ALPHA,[nb]:t.CONSTANT_COLOR,[ib]:t.ONE_MINUS_CONSTANT_COLOR,[rb]:t.CONSTANT_ALPHA,[ob]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,se,ne,_e,Ee,it,ft,wt,jt,st){if(V===Pr){_===!0&&(P(t.BLEND),_=!1);return}if(_===!1&&(te(t.BLEND),_=!0),V!==VM){if(V!==v||st!==C){if((m!==fo||x!==fo)&&(t.blendEquation(t.FUNC_ADD),m=fo,x=fo),st)switch(V){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case H_:t.blendFunc(t.ONE,t.ONE);break;case W_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case H_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case W_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}h=null,g=null,y=null,w=null,T.set(0,0,0),b=0,v=V,C=st}return}Ee=Ee||se,it=it||ne,ft=ft||_e,(se!==m||Ee!==x)&&(t.blendEquationSeparate(pe[se],pe[Ee]),m=se,x=Ee),(ne!==h||_e!==g||it!==y||ft!==w)&&(t.blendFuncSeparate(ie[ne],ie[_e],ie[it],ie[ft]),h=ne,g=_e,y=it,w=ft),(wt.equals(T)===!1||jt!==b)&&(t.blendColor(wt.r,wt.g,wt.b,jt),T.copy(wt),b=jt),v=V,C=!1}function ye(V,se){V.side===vi?P(t.CULL_FACE):te(t.CULL_FACE);let ne=V.side===En;se&&(ne=!ne),Re(ne),V.blending===Ls&&V.transparent===!1?Ce(Pr):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const _e=V.stencilWrite;s.setTest(_e),_e&&(s.setMask(V.stencilWriteMask),s.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),s.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),rt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):P(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(V){M!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),M=V)}function De(V){V!==kM?(te(t.CULL_FACE),V!==E&&(V===G_?t.cullFace(t.BACK):V===BM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):P(t.CULL_FACE),E=V}function Ne(V){V!==U&&(F&&t.lineWidth(V),U=V)}function rt(V,se,ne){V?(te(t.POLYGON_OFFSET_FILL),(O!==se||D!==ne)&&(t.polygonOffset(se,ne),O=se,D=ne)):P(t.POLYGON_OFFSET_FILL)}function I(V){V?te(t.SCISSOR_TEST):P(t.SCISSOR_TEST)}function A(V){V===void 0&&(V=t.TEXTURE0+B-1),N!==V&&(t.activeTexture(V),N=V)}function J(V,se,ne){ne===void 0&&(N===null?ne=t.TEXTURE0+B-1:ne=N);let _e=H[ne];_e===void 0&&(_e={type:void 0,texture:void 0},H[ne]=_e),(_e.type!==V||_e.texture!==se)&&(N!==ne&&(t.activeTexture(ne),N=ne),t.bindTexture(V,se||q[V]),_e.type=V,_e.texture=se)}function oe(){const V=H[N];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(V){ee.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function Ge(V){fe.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),fe.copy(V))}function Qe(V,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let _e=ne.get(V);_e===void 0&&(_e=t.getUniformBlockIndex(se,V.name),ne.set(V,_e))}function At(V,se){const _e=l.get(se).get(V);a.get(se)!==_e&&(t.uniformBlockBinding(se,_e,V.__bindingPointIndex),a.set(se,_e))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,H={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,m=null,h=null,g=null,x=null,y=null,w=null,T=new tt(0,0,0),b=0,C=!1,M=null,E=null,U=null,O=null,D=null,ee.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:te,disable:P,bindFramebuffer:Q,drawBuffers:le,useProgram:z,setBlending:Ce,setMaterial:ye,setFlipSided:Re,setCullFace:De,setLineWidth:Ne,setPolygonOffset:rt,setScissorTest:I,activeTexture:A,bindTexture:J,unbindTexture:oe,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:et,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:At,texStorage2D:he,texStorage3D:Pe,texSubImage2D:Ie,texSubImage3D:Se,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ve,scissor:Me,viewport:Ge,reset:He}}function n3(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,A){return p?new OffscreenCanvas(I,A):Lu("canvas")}function v(I,A,J){let oe=1;const ae=rt(I);if((ae.width>J||ae.height>J)&&(oe=J/Math.max(ae.width,ae.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(oe*ae.width),Ie=Math.floor(oe*ae.height);d===void 0&&(d=_(ue,Ie));const Se=A?_(ue,Ie):d;return Se.width=ue,Se.height=Ie,Se.getContext("2d").drawImage(I,0,0,ue,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ue+"x"+Ie+")."),Se}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==tn&&I.minFilter!==Pn}function h(I){t.generateMipmap(I)}function g(I,A,J,oe,ae=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=A;if(A===t.RED&&(J===t.FLOAT&&(ue=t.R32F),J===t.HALF_FLOAT&&(ue=t.R16F),J===t.UNSIGNED_BYTE&&(ue=t.R8)),A===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.R8UI),J===t.UNSIGNED_SHORT&&(ue=t.R16UI),J===t.UNSIGNED_INT&&(ue=t.R32UI),J===t.BYTE&&(ue=t.R8I),J===t.SHORT&&(ue=t.R16I),J===t.INT&&(ue=t.R32I)),A===t.RG&&(J===t.FLOAT&&(ue=t.RG32F),J===t.HALF_FLOAT&&(ue=t.RG16F),J===t.UNSIGNED_BYTE&&(ue=t.RG8)),A===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.RG8UI),J===t.UNSIGNED_SHORT&&(ue=t.RG16UI),J===t.UNSIGNED_INT&&(ue=t.RG32UI),J===t.BYTE&&(ue=t.RG8I),J===t.SHORT&&(ue=t.RG16I),J===t.INT&&(ue=t.RG32I)),A===t.RGB&&J===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),A===t.RGBA){const Ie=ae?Cu:lt.getTransfer(oe);J===t.FLOAT&&(ue=t.RGBA32F),J===t.HALF_FLOAT&&(ue=t.RGBA16F),J===t.UNSIGNED_BYTE&&(ue=Ie===mt?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function y(I){const A=I.target;A.removeEventListener("dispose",y),T(A),A.isVideoTexture&&u.delete(A)}function w(I){const A=I.target;A.removeEventListener("dispose",w),C(A)}function T(I){const A=i.get(I);if(A.__webglInit===void 0)return;const J=I.source,oe=f.get(J);if(oe){const ae=oe[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(I),Object.keys(oe).length===0&&f.delete(J)}i.remove(I)}function b(I){const A=i.get(I);t.deleteTexture(A.__webglTexture);const J=I.source,oe=f.get(J);delete oe[A.__cacheKey],s.memory.textures--}function C(I){const A=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ae=0;ae<A.__webglFramebuffer[oe].length;ae++)t.deleteFramebuffer(A.__webglFramebuffer[oe][ae]);else t.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)t.deleteFramebuffer(A.__webglFramebuffer[oe]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=I.textures;for(let oe=0,ae=J.length;oe<ae;oe++){const ue=i.get(J[oe]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),s.memory.textures--),i.remove(J[oe])}i.remove(I)}let M=0;function E(){M=0}function U(){const I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function O(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function D(I,A){const J=i.get(I);if(I.isVideoTexture&&De(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const oe=I.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(J,I,A);return}}n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+A)}function B(I,A){const J=i.get(I);if(I.version>0&&J.__version!==I.version){ee(J,I,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+A)}function F(I,A){const J=i.get(I);if(I.version>0&&J.__version!==I.version){ee(J,I,A);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+A)}function X(I,A){const J=i.get(I);if(I.version>0&&J.__version!==I.version){fe(J,I,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+A)}const K={[lp]:t.REPEAT,[go]:t.CLAMP_TO_EDGE,[cp]:t.MIRRORED_REPEAT},N={[tn]:t.NEAREST,[Eb]:t.NEAREST_MIPMAP_NEAREST,[nc]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[lf]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},H={[Ob]:t.NEVER,[Vb]:t.ALWAYS,[zb]:t.LESS,[H9]:t.LEQUAL,[Fb]:t.EQUAL,[$b]:t.GEQUAL,[kb]:t.GREATER,[Bb]:t.NOTEQUAL};function W(I,A){if(A.type===ri&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===lf||A.magFilter===nc||A.magFilter===xo||A.minFilter===Pn||A.minFilter===lf||A.minFilter===nc||A.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,K[A.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,K[A.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,K[A.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,N[A.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,H[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===tn||A.minFilter!==nc&&A.minFilter!==xo||A.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function re(I,A){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",y));const oe=A.source;let ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));const ue=O(A);if(ue!==I.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,J=!0),ae[ue].usedTimes++;const Ie=ae[I.__cacheKey];Ie!==void 0&&(ae[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(A)),I.__cacheKey=ue,I.__webglTexture=ae[ue].texture}return J}function ee(I,A,J){let oe=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=t.TEXTURE_3D);const ae=re(I,A),ue=A.source;n.bindTexture(oe,I.__webglTexture,t.TEXTURE0+J);const Ie=i.get(ue);if(ue.version!==Ie.__version||ae===!0){n.activeTexture(t.TEXTURE0+J);const Se=lt.getPrimaries(lt.workingColorSpace),xe=A.colorSpace===gr?null:lt.getPrimaries(A.colorSpace),Ve=A.colorSpace===gr||Se===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let he=v(A.image,!1,r.maxTextureSize);he=Ne(A,he);const Pe=o.convert(A.format,A.colorSpace),et=o.convert(A.type);let Le=g(A.internalFormat,Pe,et,A.colorSpace,A.isVideoTexture);W(oe,A);let Me;const Ge=A.mipmaps,Qe=A.isVideoTexture!==!0,At=Ie.__version===void 0||ae===!0,He=ue.dataReady,V=x(A,he);if(A.isDepthTexture)Le=t.DEPTH_COMPONENT16,A.type===ri?Le=t.DEPTH_COMPONENT32F:A.type===Ys?Le=t.DEPTH_COMPONENT24:A.type===Il&&(Le=t.DEPTH24_STENCIL8),At&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Le,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Le,he.width,he.height,0,Pe,et,null));else if(A.isDataTexture)if(Ge.length>0){Qe&&At&&n.texStorage2D(t.TEXTURE_2D,V,Le,Ge[0].width,Ge[0].height);for(let se=0,ne=Ge.length;se<ne;se++)Me=Ge[se],Qe?He&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Pe,et,Me.data):n.texImage2D(t.TEXTURE_2D,se,Le,Me.width,Me.height,0,Pe,et,Me.data);A.generateMipmaps=!1}else Qe?(At&&n.texStorage2D(t.TEXTURE_2D,V,Le,he.width,he.height),He&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Pe,et,he.data)):n.texImage2D(t.TEXTURE_2D,0,Le,he.width,he.height,0,Pe,et,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qe&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Le,Ge[0].width,Ge[0].height,he.depth);for(let se=0,ne=Ge.length;se<ne;se++)Me=Ge[se],A.format!==Dn?Pe!==null?Qe?He&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Pe,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Le,Me.width,Me.height,he.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?He&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Pe,et,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Le,Me.width,Me.height,he.depth,0,Pe,et,Me.data)}else{Qe&&At&&n.texStorage2D(t.TEXTURE_2D,V,Le,Ge[0].width,Ge[0].height);for(let se=0,ne=Ge.length;se<ne;se++)Me=Ge[se],A.format!==Dn?Pe!==null?Qe?He&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Pe,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?He&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Pe,et,Me.data):n.texImage2D(t.TEXTURE_2D,se,Le,Me.width,Me.height,0,Pe,et,Me.data)}else if(A.isDataArrayTexture)Qe?(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Le,he.width,he.height,he.depth),He&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,et,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,Pe,et,he.data);else if(A.isData3DTexture)Qe?(At&&n.texStorage3D(t.TEXTURE_3D,V,Le,he.width,he.height,he.depth),He&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,et,he.data)):n.texImage3D(t.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,Pe,et,he.data);else if(A.isFramebufferTexture){if(At)if(Qe)n.texStorage2D(t.TEXTURE_2D,V,Le,he.width,he.height);else{let se=he.width,ne=he.height;for(let _e=0;_e<V;_e++)n.texImage2D(t.TEXTURE_2D,_e,Le,se,ne,0,Pe,et,null),se>>=1,ne>>=1}}else if(Ge.length>0){if(Qe&&At){const se=rt(Ge[0]);n.texStorage2D(t.TEXTURE_2D,V,Le,se.width,se.height)}for(let se=0,ne=Ge.length;se<ne;se++)Me=Ge[se],Qe?He&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Pe,et,Me):n.texImage2D(t.TEXTURE_2D,se,Le,Pe,et,Me);A.generateMipmaps=!1}else if(Qe){if(At){const se=rt(he);n.texStorage2D(t.TEXTURE_2D,V,Le,se.width,se.height)}He&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,et,he)}else n.texImage2D(t.TEXTURE_2D,0,Le,Pe,et,he);m(A)&&h(oe),Ie.__version=ue.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function fe(I,A,J){if(A.image.length!==6)return;const oe=re(I,A),ae=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+J);const ue=i.get(ae);if(ae.version!==ue.__version||oe===!0){n.activeTexture(t.TEXTURE0+J);const Ie=lt.getPrimaries(lt.workingColorSpace),Se=A.colorSpace===gr?null:lt.getPrimaries(A.colorSpace),xe=A.colorSpace===gr||Ie===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Pe=[];for(let ne=0;ne<6;ne++)!Ve&&!he?Pe[ne]=v(A.image[ne],!0,r.maxCubemapSize):Pe[ne]=he?A.image[ne].image:A.image[ne],Pe[ne]=Ne(A,Pe[ne]);const et=Pe[0],Le=o.convert(A.format,A.colorSpace),Me=o.convert(A.type),Ge=g(A.internalFormat,Le,Me,A.colorSpace),Qe=A.isVideoTexture!==!0,At=ue.__version===void 0||oe===!0,He=ae.dataReady;let V=x(A,et);W(t.TEXTURE_CUBE_MAP,A);let se;if(Ve){Qe&&At&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Ge,et.width,et.height);for(let ne=0;ne<6;ne++){se=Pe[ne].mipmaps;for(let _e=0;_e<se.length;_e++){const Ee=se[_e];A.format!==Dn?Le!==null?Qe?He&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Ee.width,Ee.height,Le,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?He&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Ee.width,Ee.height,Le,Me,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Ge,Ee.width,Ee.height,0,Le,Me,Ee.data)}}}else{if(se=A.mipmaps,Qe&&At){se.length>0&&V++;const ne=rt(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){Qe?He&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe[ne].width,Pe[ne].height,Le,Me,Pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Pe[ne].width,Pe[ne].height,0,Le,Me,Pe[ne].data);for(let _e=0;_e<se.length;_e++){const it=se[_e].image[ne].image;Qe?He&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,it.width,it.height,Le,Me,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Ge,it.width,it.height,0,Le,Me,it.data)}}else{Qe?He&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Me,Pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Le,Me,Pe[ne]);for(let _e=0;_e<se.length;_e++){const Ee=se[_e];Qe?He&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Le,Me,Ee.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Ge,Le,Me,Ee.image[ne])}}}m(A)&&h(t.TEXTURE_CUBE_MAP),ue.__version=ae.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function $(I,A,J,oe,ae,ue){const Ie=o.convert(J.format,J.colorSpace),Se=o.convert(J.type),xe=g(J.internalFormat,Ie,Se,J.colorSpace);if(!i.get(A).__hasExternalTextures){const he=Math.max(1,A.width>>ue),Pe=Math.max(1,A.height>>ue);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ue,xe,he,Pe,A.depth,0,Ie,Se,null):n.texImage2D(ae,ue,xe,he,Pe,0,Ie,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),Re(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ae,i.get(J).__webglTexture,0,ye(A)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,ae,i.get(J).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function q(I,A,J){if(t.bindRenderbuffer(t.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let oe=t.DEPTH_COMPONENT24;if(J||Re(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ri?oe=t.DEPTH_COMPONENT32F:ae.type===Ys&&(oe=t.DEPTH_COMPONENT24));const ue=ye(A);Re(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,oe,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,oe,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){const oe=ye(A);J&&Re(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,A.width,A.height):Re(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,I)}else{const oe=A.textures;for(let ae=0;ae<oe.length;ae++){const ue=oe[ae],Ie=o.convert(ue.format,ue.colorSpace),Se=o.convert(ue.type),xe=g(ue.internalFormat,Ie,Se,ue.colorSpace),Ve=ye(A);J&&Re(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,xe,A.width,A.height):Re(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,xe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,xe,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const oe=i.get(A.depthTexture).__webglTexture,ae=ye(A);if(A.depthTexture.format===Us)Re(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(A.depthTexture.format===gl)Re(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function P(I){const A=i.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");te(A.__webglFramebuffer,I)}else if(J){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]=t.createRenderbuffer(),q(A.__webglDepthbuffer[oe],I,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),q(A.__webglDepthbuffer,I,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Q(I,A,J){const oe=i.get(I);A!==void 0&&$(oe.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&P(I)}function le(I){const A=I.texture,J=i.get(I),oe=i.get(A);I.addEventListener("dispose",w);const ae=I.textures,ue=I.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=A.version,s.memory.textures++),ue){J.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Se]=[];for(let xe=0;xe<A.mipmaps.length;xe++)J.__webglFramebuffer[Se][xe]=t.createFramebuffer()}else J.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)J.__webglFramebuffer[Se]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Se=0,xe=ae.length;Se<xe;Se++){const Ve=i.get(ae[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),s.memory.textures++)}if(I.samples>0&&Re(I)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Se=0;Se<ae.length;Se++){const xe=ae[Se];J.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[Se]);const Ve=o.convert(xe.format,xe.colorSpace),he=o.convert(xe.type),Pe=g(xe.internalFormat,Ve,he,xe.colorSpace,I.isXRRenderTarget===!0),et=ye(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Pe,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,J.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),q(J.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),W(t.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)$(J.__webglFramebuffer[Se][xe],I,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,xe);else $(J.__webglFramebuffer[Se],I,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(A)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Se=0,xe=ae.length;Se<xe;Se++){const Ve=ae[Se],he=i.get(Ve);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),W(t.TEXTURE_2D,Ve),$(J.__webglFramebuffer,I,Ve,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),m(Ve)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,oe.__webglTexture),W(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)$(J.__webglFramebuffer[xe],I,A,t.COLOR_ATTACHMENT0,Se,xe);else $(J.__webglFramebuffer,I,A,t.COLOR_ATTACHMENT0,Se,0);m(A)&&h(Se),n.unbindTexture()}I.depthBuffer&&P(I)}function z(I){const A=I.textures;for(let J=0,oe=A.length;J<oe;J++){const ae=A[J];if(m(ae)){const ue=I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(ae).__webglTexture;n.bindTexture(ue,Ie),h(ue),n.unbindTexture()}}}const pe=[],ie=[];function Ce(I){if(I.samples>0){if(Re(I)===!1){const A=I.textures,J=I.width,oe=I.height;let ae=t.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(I),Se=A.length>1;if(Se)for(let xe=0;xe<A.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Ve=i.get(A[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,J,oe,0,0,J,oe,ae,t.NEAREST),l===!0&&(pe.length=0,ie.length=0,pe.push(t.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pe.push(ue),ie.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let xe=0;xe<A.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Ve=i.get(A[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const A=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function ye(I){return Math.min(r.maxSamples,I.samples)}function Re(I){const A=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function De(I){const A=s.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Ne(I,A){const J=I.colorSpace,oe=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==Yr&&J!==gr&&(lt.getTransfer(J)===mt?(oe!==Dn||ae!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=Q,this.setupRenderTarget=le,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Re}function i3(t,e){function n(i,r=gr){let o;const s=lt.getTransfer(r);if(i===Br)return t.UNSIGNED_BYTE;if(i===F9)return t.UNSIGNED_SHORT_4_4_4_4;if(i===k9)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Mb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Tb)return t.BYTE;if(i===wb)return t.SHORT;if(i===O9)return t.UNSIGNED_SHORT;if(i===z9)return t.INT;if(i===Ys)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===ud)return t.HALF_FLOAT;if(i===bb)return t.ALPHA;if(i===Ab)return t.RGB;if(i===Dn)return t.RGBA;if(i===Rb)return t.LUMINANCE;if(i===Cb)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===gl)return t.DEPTH_STENCIL;if(i===Pb)return t.RED;if(i===B9)return t.RED_INTEGER;if(i===Ib)return t.RG;if(i===$9)return t.RG_INTEGER;if(i===V9)return t.RGBA_INTEGER;if(i===cf||i===uf||i===df||i===ff)if(s===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===cf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===df)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ff)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===cf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===df)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ff)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===j_||i===Y_||i===q_||i===K_)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===j_)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Y_)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===q_)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===K_)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Z_||i===J_||i===Q_)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Z_||i===J_)return s===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Q_)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ev||i===tv||i===nv||i===iv||i===rv||i===ov||i===sv||i===av||i===lv||i===cv||i===uv||i===dv||i===fv||i===hv)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ev)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===iv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ov)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===av)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hv)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hf||i===pv||i===mv)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===hf)return s===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pv)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mv)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Db||i===_v||i===vv||i===gv)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===hf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===_v)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vv)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gv)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class r3 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wc extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o3={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const s3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Mi({vertexShader:s3,fragmentShader:a3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _t(new ko(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class c3 extends Fo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=new l3,m=n.getContextAttributes();let h=null,g=null;const x=[],y=[],w=new ge;let T=null;const b=new vn;b.layers.enable(1),b.viewport=new kt;const C=new vn;C.layers.enable(2),C.viewport=new kt;const M=[b,C],E=new r3;E.layers.enable(1),E.layers.enable(2);let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=x[$];return q===void 0&&(q=new Ff,x[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=x[$];return q===void 0&&(q=new Ff,x[$]=q),q.getGripSpace()},this.getHand=function($){let q=x[$];return q===void 0&&(q=new Ff,x[$]=q),q.getHandSpace()};function D($){const q=y.indexOf($.inputSource);if(q===-1)return;const te=x[q];te!==void 0&&(te.update($.inputSource,$.frame,c||s),te.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let $=0;$<x.length;$++){const q=y[$];q!==null&&(y[$]=null,x[$].disconnect(q))}U=null,O=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,g=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new $r(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,te=null,P=null;m.depth&&(P=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?gl:Us,te=m.stencil?Il:Ys);const Q={colorFormat:n.RGBA8,depthFormat:P,scaleFactor:o};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new $r(f.textureWidth,f.textureHeight,{format:Dn,type:Br,depthTexture:new iS(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F($){for(let q=0;q<$.removed.length;q++){const te=$.removed[q],P=y.indexOf(te);P>=0&&(y[P]=null,x[P].disconnect(te))}for(let q=0;q<$.added.length;q++){const te=$.added[q];let P=y.indexOf(te);if(P===-1){for(let le=0;le<x.length;le++)if(le>=y.length){y.push(te),P=le;break}else if(y[le]===null){y[le]=te,P=le;break}if(P===-1)break}const Q=x[P];Q&&Q.connect(te)}}const X=new k,K=new k;function N($,q,te){X.setFromMatrixPosition(q.matrixWorld),K.setFromMatrixPosition(te.matrixWorld);const P=X.distanceTo(K),Q=q.projectionMatrix.elements,le=te.projectionMatrix.elements,z=Q[14]/(Q[10]-1),pe=Q[14]/(Q[10]+1),ie=(Q[9]+1)/Q[5],Ce=(Q[9]-1)/Q[5],ye=(Q[8]-1)/Q[0],Re=(le[8]+1)/le[0],De=z*ye,Ne=z*Re,rt=P/(-ye+Re),I=rt*-ye;q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(I),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const A=z+rt,J=pe+rt,oe=De-I,ae=Ne+(P-I),ue=ie*pe/J*A,Ie=Ce*pe/J*A;$.projectionMatrix.makePerspective(oe,ae,ue,Ie,A,J),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function H($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;v.texture!==null&&($.near=v.depthNear,$.far=v.depthFar),E.near=C.near=b.near=$.near,E.far=C.far=b.far=$.far,(U!==E.near||O!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,O=E.far,b.near=U,b.far=O,C.near=U,C.far=O,b.updateProjectionMatrix(),C.updateProjectionMatrix(),$.updateProjectionMatrix());const q=$.parent,te=E.cameras;H(E,q);for(let P=0;P<te.length;P++)H(te[P],q);te.length===2?N(E,b,C):E.projectionMatrix.copy(b.projectionMatrix),W($,E,q)};function W($,q,te){te===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null};let re=null;function ee($,q){if(u=q.getViewerPose(c||s),_=q,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let P=!1;te.length!==E.cameras.length&&(E.cameras.length=0,P=!0);for(let le=0;le<te.length;le++){const z=te[le];let pe=null;if(p!==null)pe=p.getViewport(z);else{const Ce=d.getViewSubImage(f,z);pe=Ce.viewport,le===0&&(e.setRenderTargetTextures(g,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(g))}let ie=M[le];ie===void 0&&(ie=new vn,ie.layers.enable(le),ie.viewport=new kt,M[le]=ie),ie.matrix.fromArray(z.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(z.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(pe.x,pe.y,pe.width,pe.height),le===0&&(E.matrix.copy(ie.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),P===!0&&E.cameras.push(ie)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const le=d.getDepthInformation(te[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let te=0;te<x.length;te++){const P=y[te],Q=x[te];P!==null&&Q!==void 0&&Q.update(P,q,c||s)}v.render(e,E),re&&re($,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const fe=new tS;fe.setAnimationLoop(ee),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const ro=new wi,u3=new Et;function d3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,J9(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),d(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(o(m,h),_(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),v(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===En&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===En&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,y=g.envMapRotation;if(x&&(m.envMap.value=x,ro.copy(y),ro.x*=-1,ro.y*=-1,ro.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),m.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(ro)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function f3(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(_(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(g,w);const T=e.render.frame;o[g.id]!==T&&(f(g),o[g.id]=T)}function u(g){const x=d();g.__bindingPointIndex=x;const y=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],y=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,b=y.length;T<b;T++){const C=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,E=C.length;M<E;M++){const U=C[M];if(p(U,T,M,w)===!0){const O=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let F=0;F<D.length;F++){const X=D[F],K=v(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,O+B,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,w){const T=g.value,b=x+"_"+y;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const C=w[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(g){const x=g.uniforms;let y=0;const w=16;for(let b=0,C=x.length;b<C;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,U=M.length;E<U;E++){const O=M[E],D=Array.isArray(O.value)?O.value:[O.value];for(let B=0,F=D.length;B<F;B++){const X=D[B],K=v(X),N=y%w;N!==0&&w-N<K.boundary&&(y+=w-N),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=K.storage}}}const T=y%w;return T>0&&(y+=w-T),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class h3{constructor(e={}){const{canvas:n=oA(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this._useLegacyLights=!1,this.toneMapping=Ir,this.toneMappingExposure=1;const x=this;let y=!1,w=0,T=0,b=null,C=-1,M=null;const E=new kt,U=new kt;let O=null;const D=new tt(0);let B=0,F=n.width,X=n.height,K=1,N=null,H=null;const W=new kt(0,0,F,X),re=new kt(0,0,F,X);let ee=!1;const fe=new H0;let $=!1,q=!1;const te=new Et,P=new k,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return b===null?K:1}let z=i;function pe(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${F0}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",ne,!1),z===null){const G="webgl2";if(z=pe(G,R),z===null)throw pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Ce,ye,Re,De,Ne,rt,I,A,J,oe,ae,ue,Ie,Se,xe,Ve,he,Pe,et,Le,Me,Ge,Qe;function At(){ie=new S2(z),ie.init(),Me=new i3(z,ie),Ce=new m2(z,ie,e,Me),ye=new t3(z),Re=new w2(z),De=new $P,Ne=new n3(z,ie,ye,De,Ce,Me,Re),rt=new v2(x),I=new y2(x),A=new IA(z),Ge=new h2(z,A),J=new E2(z,A,Re,Ge),oe=new b2(z,J,A,Re),Pe=new M2(z,Ce,Ne),xe=new _2(De),ae=new BP(x,rt,I,ie,Ce,Ge,xe),ue=new d3(x,De),Ie=new GP,Se=new qP(ie),he=new f2(x,rt,I,ye,oe,f,l),Ve=new e3(x,oe,Ce),Qe=new f3(z,Re,Ce,ye),et=new p2(z,ie,Re),Le=new T2(z,ie,Re),Re.programs=ae.programs,x.capabilities=Ce,x.extensions=ie,x.properties=De,x.renderLists=Ie,x.shadowMap=Ve,x.state=ye,x.info=Re}At();const He=new c3(x,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(F,X,!1))},this.getSize=function(R){return R.set(F,X)},this.setSize=function(R,G,Z=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,X=G,n.width=Math.floor(R*K),n.height=Math.floor(G*K),Z===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*K,X*K).floor()},this.setDrawingBufferSize=function(R,G,Z){F=R,X=G,K=Z,n.width=Math.floor(R*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,G,Z,j){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,G,Z,j),ye.viewport(E.copy(W).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,G,Z,j){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,G,Z,j),ye.scissor(U.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){ye.setScissorTest(ee=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(R=!0,G=!0,Z=!0){let j=0;if(R){let Y=!1;if(b!==null){const ve=b.texture.format;Y=ve===V9||ve===$9||ve===B9}if(Y){const ve=b.texture.type,be=ve===Br||ve===Ys||ve===O9||ve===Il||ve===F9||ve===k9,Ae=he.getClearColor(),Ue=he.getClearAlpha(),Oe=Ae.r,ke=Ae.g,je=Ae.b;be?(p[0]=Oe,p[1]=ke,p[2]=je,p[3]=Ue,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Oe,_[1]=ke,_[2]=je,_[3]=Ue,z.clearBufferiv(z.COLOR,0,_))}else j|=z.COLOR_BUFFER_BIT}G&&(j|=z.DEPTH_BUFFER_BIT),Z&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),Ie.dispose(),Se.dispose(),De.dispose(),rt.dispose(),I.dispose(),oe.dispose(),Ge.dispose(),Qe.dispose(),ae.dispose(),He.dispose(),He.removeEventListener("sessionstart",st),He.removeEventListener("sessionend",di),sn.stop()};function V(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Re.autoReset,G=Ve.enabled,Z=Ve.autoUpdate,j=Ve.needsUpdate,Y=Ve.type;At(),Re.autoReset=R,Ve.enabled=G,Ve.autoUpdate=Z,Ve.needsUpdate=j,Ve.type=Y}function ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const G=R.target;G.removeEventListener("dispose",_e),Ee(G)}function Ee(R){it(R),De.remove(R)}function it(R){const G=De.get(R).programs;G!==void 0&&(G.forEach(function(Z){ae.releaseProgram(Z)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,j,Y,ve){G===null&&(G=Q);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=eT(R,G,Z,j,Y);ye.setMaterial(j,be);let Ue=Z.index,Oe=1;if(j.wireframe===!0){if(Ue=J.getWireframeAttribute(Z),Ue===void 0)return;Oe=2}const ke=Z.drawRange,je=Z.attributes.position;let Pt=ke.start*Oe,Yt=(ke.start+ke.count)*Oe;ve!==null&&(Pt=Math.max(Pt,ve.start*Oe),Yt=Math.min(Yt,(ve.start+ve.count)*Oe)),Ue!==null?(Pt=Math.max(Pt,0),Yt=Math.min(Yt,Ue.count)):je!=null&&(Pt=Math.max(Pt,0),Yt=Math.min(Yt,je.count));const Tn=Yt-Pt;if(Tn<0||Tn===1/0)return;Ge.setup(Y,j,Ae,Z,Ue);let Ii,ot=et;if(Ue!==null&&(Ii=A.get(Ue),ot=Le,ot.setIndex(Ii)),Y.isMesh)j.wireframe===!0?(ye.setLineWidth(j.wireframeLinewidth*le()),ot.setMode(z.LINES)):ot.setMode(z.TRIANGLES);else if(Y.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),ye.setLineWidth(ze*le()),Y.isLineSegments?ot.setMode(z.LINES):Y.isLineLoop?ot.setMode(z.LINE_LOOP):ot.setMode(z.LINE_STRIP)}else Y.isPoints?ot.setMode(z.POINTS):Y.isSprite&&ot.setMode(z.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?ot.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):ot.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ot.renderInstances(Pt,Tn,Y.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ma=Math.min(Z.instanceCount,ze);ot.renderInstances(Pt,Tn,ma)}else ot.render(Pt,Tn)};function ft(R,G,Z){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,Fl(R,G,Z),R.side=kr,R.needsUpdate=!0,Fl(R,G,Z),R.side=vi):Fl(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),m=Se.get(Z),m.init(G),g.push(m),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==Z&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const j=new Set;return R.traverse(function(Y){const ve=Y.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Ae=ve[be];ft(Ae,Z,Y),j.add(Ae)}else ft(ve,Z,Y),j.add(ve)}),g.pop(),m=null,j},this.compileAsync=function(R,G,Z=null){const j=this.compile(R,G,Z);return new Promise(Y=>{function ve(){if(j.forEach(function(be){De.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){Y(R);return}setTimeout(ve,10)}ie.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let wt=null;function jt(R){wt&&wt(R)}function st(){sn.stop()}function di(){sn.start()}const sn=new tS;sn.setAnimationLoop(jt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(R){wt=R,He.setAnimationLoop(R),R===null?sn.stop():sn.start()},He.addEventListener("sessionstart",st),He.addEventListener("sessionend",di),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(G),G=He.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,b),m=Se.get(R,g.length),m.init(G),g.push(m),te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(te),q=this.localClippingEnabled,$=xe.init(this.clippingPlanes,q),v=Ie.get(R,h.length),v.init(),h.push(v),bm(R,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(N,H);const Z=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1;Z&&he.addToRenderList(v,R),this.info.render.frame++,$===!0&&xe.beginShadows();const j=m.state.shadowsArray;Ve.render(j,R,G),$===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,ve=v.transmissive;if(m.setupLights(x._useLegacyLights),G.isArrayCamera){const be=G.cameras;if(ve.length>0)for(let Ae=0,Ue=be.length;Ae<Ue;Ae++){const Oe=be[Ae];Rm(Y,ve,R,Oe)}Z&&he.render(R);for(let Ae=0,Ue=be.length;Ae<Ue;Ae++){const Oe=be[Ae];Am(v,R,Oe,Oe.viewport)}}else ve.length>0&&Rm(Y,ve,R,G),Z&&he.render(R),Am(v,R,G);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,G),Ge.resetDefaultState(),C=-1,M=null,g.pop(),g.length>0?(m=g[g.length-1],$===!0&&xe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function bm(R,G,Z,j){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){j&&P.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);const be=oe.update(R),Ae=R.material;Ae.visible&&v.push(R,be,Ae,Z,P.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||fe.intersectsObject(R))){const be=oe.update(R),Ae=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),P.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),P.copy(be.boundingSphere.center)),P.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Ae)){const Ue=be.groups;for(let Oe=0,ke=Ue.length;Oe<ke;Oe++){const je=Ue[Oe],Pt=Ae[je.materialIndex];Pt&&Pt.visible&&v.push(R,be,Pt,Z,P.z,je)}}else Ae.visible&&v.push(R,be,Ae,Z,P.z,null)}}const ve=R.children;for(let be=0,Ae=ve.length;be<Ae;be++)bm(ve[be],G,Z,j)}function Am(R,G,Z,j){const Y=R.opaque,ve=R.transmissive,be=R.transparent;m.setupLightsView(Z),$===!0&&xe.setGlobalState(x.clippingPlanes,Z),j&&ye.viewport(E.copy(j)),Y.length>0&&zl(Y,G,Z),ve.length>0&&zl(ve,G,Z),be.length>0&&zl(be,G,Z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Rm(R,G,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new $r(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ud:Br,minFilter:xo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[j.id],be=j.viewport||E;ve.setSize(be.z,be.w);const Ae=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(D),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=Ir;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),$===!0&&xe.setGlobalState(x.clippingPlanes,j),zl(R,Z,j),Ne.updateMultisampleRenderTarget(ve),Ne.updateRenderTargetMipmap(ve),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let je=0,Pt=G.length;je<Pt;je++){const Yt=G[je],Tn=Yt.object,Ii=Yt.geometry,ot=Yt.material,ze=Yt.group;if(ot.side===vi&&Tn.layers.test(j.layers)){const ma=ot.side;ot.side=En,ot.needsUpdate=!0,Cm(Tn,Z,j,Ii,ot,ze),ot.side=ma,ot.needsUpdate=!0,ke=!0}}ke===!0&&(Ne.updateMultisampleRenderTarget(ve),Ne.updateRenderTargetMipmap(ve))}x.setRenderTarget(Ae),x.setClearColor(D,B),Oe!==void 0&&(j.viewport=Oe),x.toneMapping=Ue}function zl(R,G,Z){const j=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,ve=R.length;Y<ve;Y++){const be=R[Y],Ae=be.object,Ue=be.geometry,Oe=j===null?be.material:j,ke=be.group;Ae.layers.test(Z.layers)&&Cm(Ae,G,Z,Ue,Oe,ke)}}function Cm(R,G,Z,j,Y,ve){R.onBeforeRender(x,G,Z,j,Y,ve),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(x,G,Z,j,R,ve),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,x.renderBufferDirect(Z,G,j,Y,R,ve),Y.side=kr,Y.needsUpdate=!0,x.renderBufferDirect(Z,G,j,Y,R,ve),Y.side=vi):x.renderBufferDirect(Z,G,j,Y,R,ve),R.onAfterRender(x,G,Z,j,Y,ve)}function Fl(R,G,Z){G.isScene!==!0&&(G=Q);const j=De.get(R),Y=m.state.lights,ve=m.state.shadowsArray,be=Y.state.version,Ae=ae.getParameters(R,Y.state,ve,G,Z),Ue=ae.getProgramCacheKey(Ae);let Oe=j.programs;j.environment=R.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(R.isMeshStandardMaterial?I:rt).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",_e),Oe=new Map,j.programs=Oe);let ke=Oe.get(Ue);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===be)return Im(R,Ae),ke}else Ae.uniforms=ae.getUniforms(R),R.onBuild(Z,Ae,x),R.onBeforeCompile(Ae,x),ke=ae.acquireProgram(Ae,Ue),Oe.set(Ue,ke),j.uniforms=Ae.uniforms;const je=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=xe.uniform),Im(R,Ae),j.needsLights=nT(R),j.lightsStateVersion=be,j.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function Pm(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Im(R,G){const Z=De.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function eT(R,G,Z,j,Y){G.isScene!==!0&&(G=Q),Ne.resetTextureUnits();const ve=G.fog,be=j.isMeshStandardMaterial?G.environment:null,Ae=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Yr,Ue=(j.isMeshStandardMaterial?I:rt).get(j.envMap||be),Oe=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),je=!!Z.morphAttributes.position,Pt=!!Z.morphAttributes.normal,Yt=!!Z.morphAttributes.color;let Tn=Ir;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tn=x.toneMapping);const Ii=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=Ii!==void 0?Ii.length:0,ze=De.get(j),ma=m.state.lights;if($===!0&&(q===!0||R!==M)){const kn=R===M&&j.id===C;xe.setState(j,R,kn)}let gt=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ma.state.version||ze.outputColorSpace!==Ae||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Ue||j.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==xe.numPlanes||ze.numIntersection!==xe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==ke||ze.morphTargets!==je||ze.morphNormals!==Pt||ze.morphColors!==Yt||ze.toneMapping!==Tn||ze.morphTargetsCount!==ot)&&(gt=!0):(gt=!0,ze.__version=j.version);let Jr=ze.currentProgram;gt===!0&&(Jr=Fl(j,G,Y));let Dm=!1,_a=!1,Id=!1;const qt=Jr.getUniforms(),ir=ze.uniforms;if(ye.useProgram(Jr.program)&&(Dm=!0,_a=!0,Id=!0),j.id!==C&&(C=j.id,_a=!0),Dm||M!==R){qt.setValue(z,"projectionMatrix",R.projectionMatrix),qt.setValue(z,"viewMatrix",R.matrixWorldInverse);const kn=qt.map.cameraPosition;kn!==void 0&&kn.setValue(z,P.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&qt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&qt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,_a=!0,Id=!0)}if(Y.isSkinnedMesh){qt.setOptional(z,Y,"bindMatrix"),qt.setOptional(z,Y,"bindMatrixInverse");const kn=Y.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),qt.setValue(z,"boneTexture",kn.boneTexture,Ne))}Y.isBatchedMesh&&(qt.setOptional(z,Y,"batchingTexture"),qt.setValue(z,"batchingTexture",Y._matricesTexture,Ne));const Dd=Z.morphAttributes;if((Dd.position!==void 0||Dd.normal!==void 0||Dd.color!==void 0)&&Pe.update(Y,Z,Jr),(_a||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,qt.setValue(z,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ir.envMap.value=Ue,ir.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(ir.envMapIntensity.value=G.environmentIntensity),_a&&(qt.setValue(z,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&tT(ir,Id),ve&&j.fog===!0&&ue.refreshFogUniforms(ir,ve),ue.refreshMaterialUniforms(ir,j,K,X,m.state.transmissionRenderTarget[R.id]),qc.upload(z,Pm(ze),ir,Ne)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qc.upload(z,Pm(ze),ir,Ne),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&qt.setValue(z,"center",Y.center),qt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),qt.setValue(z,"normalMatrix",Y.normalMatrix),qt.setValue(z,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kn=j.uniformsGroups;for(let Nd=0,iT=kn.length;Nd<iT;Nd++){const Nm=kn[Nd];Qe.update(Nm,Jr),Qe.bind(Nm,Jr)}}return Jr}function tT(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function nT(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,G,Z){De.get(R.texture).__webglTexture=G,De.get(R.depthTexture).__webglTexture=Z;const j=De.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const Z=De.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Z=0){b=R,w=G,T=Z;let j=!0,Y=null,ve=!1,be=!1;if(R){const Ue=De.get(R);Ue.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):Ue.__webglFramebuffer===void 0?Ne.setupRenderTarget(R):Ue.__hasExternalTextures&&Ne.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture);const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);const ke=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?Y=ke[G][Z]:Y=ke[G],ve=!0):R.samples>0&&Ne.useMultisampledRTT(R)===!1?Y=De.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[Z]:Y=ke,E.copy(R.viewport),U.copy(R.scissor),O=R.scissorTest}else E.copy(W).multiplyScalar(K).floor(),U.copy(re).multiplyScalar(K).floor(),O=ee;if(ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&j&&ye.drawBuffers(R,Y),ye.viewport(E),ye.scissor(U),ye.setScissorTest(O),ve){const Ue=De.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,Z)}else if(be){const Ue=De.get(R.texture),Oe=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,Z||0,Oe)}C=-1},this.readRenderTargetPixels=function(R,G,Z,j,Y,ve,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){ye.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Ue=R.texture,Oe=Ue.format,ke=Ue.type;if(!Ce.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-j&&Z>=0&&Z<=R.height-Y&&z.readPixels(G,Z,j,Y,Me.convert(Oe),Me.convert(ke),ve)}finally{const Ue=b!==null?De.get(b).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(R,G,Z=0){const j=Math.pow(2,-Z),Y=Math.floor(G.image.width*j),ve=Math.floor(G.image.height*j);Ne.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,R.x,R.y,Y,ve),ye.unbindTexture()},this.copyTextureToTexture=function(R,G,Z,j=0){const Y=G.image.width,ve=G.image.height,be=Me.convert(Z.format),Ae=Me.convert(Z.type);Ne.setTexture2D(Z,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,R.x,R.y,Y,ve,be,Ae,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,be,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,j,R.x,R.y,be,Ae,G.image),j===0&&Z.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(R,G,Z,j,Y=0){const ve=R.max.x-R.min.x,be=R.max.y-R.min.y,Ae=R.max.z-R.min.z,Ue=Me.convert(j.format),Oe=Me.convert(j.type);let ke;if(j.isData3DTexture)Ne.setTexture3D(j,0),ke=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ne.setTexture2DArray(j,0),ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const je=z.getParameter(z.UNPACK_ROW_LENGTH),Pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Yt=z.getParameter(z.UNPACK_SKIP_PIXELS),Tn=z.getParameter(z.UNPACK_SKIP_ROWS),Ii=z.getParameter(z.UNPACK_SKIP_IMAGES),ot=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?z.texSubImage3D(ke,Y,G.x,G.y,G.z,ve,be,Ae,Ue,Oe,ot.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(ke,Y,G.x,G.y,G.z,ve,be,Ae,Ue,ot.data):z.texSubImage3D(ke,Y,G.x,G.y,G.z,ve,be,Ae,Ue,Oe,ot),z.pixelStorei(z.UNPACK_ROW_LENGTH,je),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Yt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ii),Y===0&&j.generateMipmaps&&z.generateMipmap(ke),ye.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ne.setTextureCube(R,0):R.isData3DTexture?Ne.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ne.setTexture2DArray(R,0):Ne.setTexture2D(R,0),ye.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,ye.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===k0?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===dd?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class X0 extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class p3 extends dn{constructor(e=null,n=1,i=1,r,o,s,a,l,c=tn,u=tn,d,f){super(null,s,a,l,c,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const u=i[r],f=i[r+1]-u,p=(s-u)/f;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new ge:new k);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],o=[],s=[],a=new k,l=new Et;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}o[0]=new k,s[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,_))}s[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Gt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),s[_].crossVectors(r[_],o[_])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cS extends Ri{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const i=n,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m3 extends cS{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function j0(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,d){let f=(s-o)/c-(a-o)/(c+u)+(a-s)/u,p=(a-s)/u-(l-s)/(u+d)+(l-a)/d;f*=u,p*=u,r(s,a,f,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const Mc=new k,kf=new j0,Bf=new j0,$f=new j0;class _3 extends Ri{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(Mc.subVectors(r[0],r[1]).add(r[0]),c=Mc);const d=r[a%o],f=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(Mc.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),kf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,v,m),Bf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,v,m),$f.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(kf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Bf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),$f.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(kf.calc(l),Bf.calc(l),$f.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cg(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function v3(t,e){const n=1-t;return n*n*e}function g3(t,e){return 2*(1-t)*t*e}function x3(t,e){return t*t*e}function Za(t,e,n,i){return v3(t,e)+g3(t,n)+x3(t,i)}function y3(t,e){const n=1-t;return n*n*n*e}function S3(t,e){const n=1-t;return 3*n*n*t*e}function E3(t,e){return 3*(1-t)*t*t*e}function T3(t,e){return t*t*t*e}function Ja(t,e,n,i,r){return y3(t,e)+S3(t,n)+E3(t,i)+T3(t,r)}class w3 extends Ri{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Ja(e,r.x,o.x,s.x,a.x),Ja(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M3 extends Ri{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Ja(e,r.x,o.x,s.x,a.x),Ja(e,r.y,o.y,s.y,a.y),Ja(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b3 extends Ri{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uS extends Ri{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A3 extends Ri{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Za(e,r.x,o.x,s.x),Za(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dS extends Ri{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Za(e,r.x,o.x,s.x),Za(e,r.y,o.y,s.y),Za(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R3 extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(cg(a,l.x,c.x,u.x,d.x),cg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var dp=Object.freeze({__proto__:null,ArcCurve:m3,CatmullRomCurve3:_3,CubicBezierCurve:w3,CubicBezierCurve3:M3,EllipseCurve:cS,LineCurve:b3,LineCurve3:uS,QuadraticBezierCurve:A3,QuadraticBezierCurve3:dS,SplineCurve:R3});class C3 extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dp[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new dp[r.type]().fromJSON(r))}return this}}class hd extends jn{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[];let _=0;const v=[],m=i/2;let h=0;g(),s===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(p,2));function g(){const y=new k,w=new k;let T=0;const b=(n-e)/i;for(let C=0;C<=o;C++){const M=[],E=C/o,U=E*(n-e)+e;for(let O=0;O<=r;O++){const D=O/r,B=D*l+a,F=Math.sin(B),X=Math.cos(B);w.x=U*F,w.y=-E*i+m,w.z=U*X,d.push(w.x,w.y,w.z),y.set(F,b,X).normalize(),f.push(y.x,y.y,y.z),p.push(D,1-E),M.push(_++)}v.push(M)}for(let C=0;C<r;C++)for(let M=0;M<o;M++){const E=v[M][C],U=v[M+1][C],O=v[M+1][C+1],D=v[M][C+1];u.push(E,U,D),u.push(U,O,D),T+=6}c.addGroup(h,T,0),h+=T}function x(y){const w=_,T=new ge,b=new k;let C=0;const M=y===!0?e:n,E=y===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),_++;const U=_;for(let O=0;O<=r;O++){const B=O/r*l+a,F=Math.cos(B),X=Math.sin(B);b.x=M*X,b.y=m*E,b.z=M*F,d.push(b.x,b.y,b.z),f.push(0,E,0),T.x=F*.5+.5,T.y=X*.5*E+.5,p.push(T.x,T.y),_++}for(let O=0;O<r;O++){const D=w+O,B=U+O;y===!0?u.push(B,B+1,D):u.push(B+1,B,D),C+=3}c.addGroup(h,C,y===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Y0 extends hd{constructor(e=1,n=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,n,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Y0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends jn{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new k,f=new k,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const g=[],x=h/i;let y=0;h===0&&s===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const T=w/n;d.x=-e*Math.cos(r+T*o)*Math.sin(s+x*a),d.y=e*Math.cos(s+x*a),d.z=e*Math.sin(r+T*o)*Math.sin(s+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-x),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const x=u[h][g+1],y=u[h][g],w=u[h+1][g],T=u[h+1][g+1];(h!==0||s>0)&&p.push(x,y,T),(h!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class q0 extends jn{constructor(e=new dS(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:o};const s=e.computeFrenetFrames(n,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new k,l=new k,c=new ge;let u=new k;const d=[],f=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(p,2));function v(){for(let x=0;x<n;x++)m(x);m(o===!1?n:0),g(),h()}function m(x){u=e.getPointAt(x/n,u);const y=s.normals[x],w=s.binormals[x];for(let T=0;T<=r;T++){const b=T/r*Math.PI*2,C=Math.sin(b),M=-Math.cos(b);l.x=M*y.x+C*w.x,l.y=M*y.y+C*w.y,l.z=M*y.z+C*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function h(){for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){const w=(r+1)*(x-1)+(y-1),T=(r+1)*x+(y-1),b=(r+1)*x+y,C=(r+1)*(x-1)+y;_.push(w,T,C),_.push(T,b,C)}}function g(){for(let x=0;x<=n;x++)for(let y=0;y<=r;y++)c.x=x/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new q0(new dp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dr extends Nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G9,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fS extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Vf=new Et,ug=new k,dg=new k;class P3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new H0,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),n.position.copy(ug),dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),Vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I3 extends P3{constructor(){super(new nS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hS extends fS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new I3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pS extends fS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const fg=new Et;class D3{constructor(e,n,i=0,r=1/0){this.ray=new Y9(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new G0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return fg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fg),this}intersectObject(e,n=!0,i=[]){return fp(e,this,i,n),i.sort(hg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)fp(e[r],this,i,n);return i.sort(hg),i}}function hg(t,e){return t.distance-e.distance}function fp(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)fp(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:F0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=F0);const Gf={type:"change"},Hf={type:"start"},Wf={type:"end"};class mS extends Fo{constructor(e,n){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:af.ROTATE,MIDDLE:af.DOLLY,RIGHT:af.PAN},this.target=new k;const o=1e-6,s=new k;let a=1,l=r.NONE,c=r.NONE,u=0,d=0,f=0;const p=new k,_=new ge,v=new ge,m=new k,h=new ge,g=new ge,x=new ge,y=new ge,w=[],T={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const P=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=P.left+window.pageXOffset-Q.clientLeft,i.screen.top=P.top+window.pageYOffset-Q.clientTop,i.screen.width=P.width,i.screen.height=P.height};const b=function(){const P=new ge;return function(le,z){return P.set((le-i.screen.left)/i.screen.width,(z-i.screen.top)/i.screen.height),P}}(),C=function(){const P=new ge;return function(le,z){return P.set((le-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-z))/i.screen.width),P}}();this.rotateCamera=function(){const P=new k,Q=new oa,le=new k,z=new k,pe=new k,ie=new k;return function(){ie.set(v.x-_.x,v.y-_.y,0);let ye=ie.length();ye?(p.copy(i.object.position).sub(i.target),le.copy(p).normalize(),z.copy(i.object.up).normalize(),pe.crossVectors(z,le).normalize(),z.setLength(v.y-_.y),pe.setLength(v.x-_.x),ie.copy(z.add(pe)),P.crossVectors(ie,p).normalize(),ye*=i.rotateSpeed,Q.setFromAxisAngle(P,ye),p.applyQuaternion(Q),i.object.up.applyQuaternion(Q),m.copy(P),f=ye):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(m,f),p.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),_.copy(v)}}(),this.zoomCamera=function(){let P;l===r.TOUCH_ZOOM_PAN?(P=u/d,u=d,i.object.isPerspectiveCamera?p.multiplyScalar(P):i.object.isOrthographicCamera?(i.object.zoom=Ms.clamp(i.object.zoom/P,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(P=1+(g.y-h.y)*i.zoomSpeed,P!==1&&P>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(P):i.object.isOrthographicCamera?(i.object.zoom=Ms.clamp(i.object.zoom/P,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?h.copy(g):h.y+=(g.y-h.y)*this.dynamicDampingFactor)},this.panCamera=function(){const P=new ge,Q=new k,le=new k;return function(){if(P.copy(y).sub(x),P.lengthSq()){if(i.object.isOrthographicCamera){const pe=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,ie=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;P.x*=pe,P.y*=ie}P.multiplyScalar(p.length()*i.panSpeed),le.copy(p).cross(i.object.up).setLength(P.x),le.add(Q.copy(i.object.up).setLength(P.y)),i.object.position.add(le),i.target.add(le),i.staticMoving?x.copy(y):x.add(P.subVectors(y,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),h.copy(g)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),h.copy(g)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(Gf),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>o||a!==i.object.zoom)&&(i.dispatchEvent(Gf),s.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Gf),s.copy(i.object.position),a=i.object.zoom};function M(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",U)),fe(P),P.pointerType==="touch"?H(P):F(P))}function E(P){i.enabled!==!1&&(P.pointerType==="touch"?W(P):X(P))}function U(P){i.enabled!==!1&&(P.pointerType==="touch"?re(P):K(),$(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",U)))}function O(P){$(P)}function D(P){i.enabled!==!1&&(window.removeEventListener("keydown",D),c===r.NONE&&(P.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:P.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:P.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function B(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",D))}function F(P){if(l===r.NONE)switch(P.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(v.copy(C(P.pageX,P.pageY)),_.copy(v)):Q===r.ZOOM&&!i.noZoom?(h.copy(b(P.pageX,P.pageY)),g.copy(h)):Q===r.PAN&&!i.noPan&&(x.copy(b(P.pageX,P.pageY)),y.copy(x)),i.dispatchEvent(Hf)}function X(P){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(v),v.copy(C(P.pageX,P.pageY))):Q===r.ZOOM&&!i.noZoom?g.copy(b(P.pageX,P.pageY)):Q===r.PAN&&!i.noPan&&y.copy(b(P.pageX,P.pageY))}function K(){l=r.NONE,i.dispatchEvent(Wf)}function N(P){if(i.enabled!==!1&&i.noZoom!==!0){switch(P.preventDefault(),P.deltaMode){case 2:h.y-=P.deltaY*.025;break;case 1:h.y-=P.deltaY*.01;break;default:h.y-=P.deltaY*25e-5;break}i.dispatchEvent(Hf),i.dispatchEvent(Wf)}}function H(P){switch(q(P),w.length){case 1:l=r.TOUCH_ROTATE,v.copy(C(w[0].pageX,w[0].pageY)),_.copy(v);break;default:l=r.TOUCH_ZOOM_PAN;const Q=w[0].pageX-w[1].pageX,le=w[0].pageY-w[1].pageY;d=u=Math.sqrt(Q*Q+le*le);const z=(w[0].pageX+w[1].pageX)/2,pe=(w[0].pageY+w[1].pageY)/2;x.copy(b(z,pe)),y.copy(x);break}i.dispatchEvent(Hf)}function W(P){switch(q(P),w.length){case 1:_.copy(v),v.copy(C(P.pageX,P.pageY));break;default:const Q=te(P),le=P.pageX-Q.x,z=P.pageY-Q.y;d=Math.sqrt(le*le+z*z);const pe=(P.pageX+Q.x)/2,ie=(P.pageY+Q.y)/2;y.copy(b(pe,ie));break}}function re(P){switch(w.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,v.copy(C(P.pageX,P.pageY)),_.copy(v);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId!==P.pointerId){const le=T[w[Q].pointerId];v.copy(C(le.x,le.y)),_.copy(v);break}break}i.dispatchEvent(Wf)}function ee(P){i.enabled!==!1&&P.preventDefault()}function fe(P){w.push(P)}function $(P){delete T[P.pointerId];for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId==P.pointerId){w.splice(Q,1);return}}function q(P){let Q=T[P.pointerId];Q===void 0&&(Q=new ge,T[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function te(P){const Q=P.pointerId===w[0].pointerId?w[1]:w[0];return T[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",N),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",U),window.removeEventListener("keydown",D),window.removeEventListener("keyup",B)},this.domElement.addEventListener("contextmenu",ee),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",O),this.domElement.addEventListener("wheel",N,{passive:!1}),window.addEventListener("keydown",D),window.addEventListener("keyup",B),this.handleResize(),this.update()}}var _S={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function r(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new r(u,d||l,f),_=n?n+c:c;return l._events[_]?l._events[_].fn?l._events[_]=[l._events[_],p]:l._events[_].push(p):(l._events[_]=p,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new i:delete l._events[c]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,p=d.length,_=new Array(p);f<p;f++)_[f]=d[f].fn;return _},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,f,p,_){var v=n?n+c:c;if(!this._events[v])return!1;var m=this._events[v],h=arguments.length,g,x;if(m.fn){switch(m.once&&this.removeListener(c,m.fn,void 0,!0),h){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,d),!0;case 4:return m.fn.call(m.context,u,d,f),!0;case 5:return m.fn.call(m.context,u,d,f,p),!0;case 6:return m.fn.call(m.context,u,d,f,p,_),!0}for(x=1,g=new Array(h-1);x<h;x++)g[x-1]=arguments[x];m.fn.apply(m.context,g)}else{var y=m.length,w;for(x=0;x<y;x++)switch(m[x].once&&this.removeListener(c,m[x].fn,void 0,!0),h){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,u);break;case 3:m[x].fn.call(m[x].context,u,d);break;case 4:m[x].fn.call(m[x].context,u,d,f);break;default:if(!g)for(w=1,g=new Array(h-1);w<h;w++)g[w-1]=arguments[w];m[x].fn.apply(m[x].context,g)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,f){var p=n?n+c:c;if(!this._events[p])return this;if(!u)return s(this,p),this;var _=this._events[p];if(_.fn)_.fn===u&&(!f||_.once)&&(!d||_.context===d)&&s(this,p);else{for(var v=0,m=[],h=_.length;v<h;v++)(_[v].fn!==u||f&&!_[v].once||d&&_[v].context!==d)&&m.push(_[v]);m.length?this._events[p]=m.length===1?m[0]:m:s(this,p)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(_S);var N3=_S.exports;const L3=Pp(N3),bc=new L3,Ct={on:(t,e)=>bc.on(t,e),once:(t,e)=>bc.once(t,e),off:(t,e)=>bc.off(t,e),emit:(t,e)=>bc.emit(t,e)};Object.freeze(Ct);const ui=S.createContext(),U3=({children:t})=>{const[e,n]=S.useState({UI_STATE_DATA_PHYSICS_MU:"0.1",UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY:"1.0",UI_STATE_DATA_PHYSICS_SEED_ENERGY:"0.5",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X:"1.0",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y:"1.0",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z:"0.25",UI_STATE_DATA_PHYSICS_SEED_POSITION_X:"0.0",UI_STATE_DATA_PHYSICS_SEED_POSITION_Y:"0.0",UI_STATE_DATA_INTEGRATION_STEP_SIZE:"0.001",UI_STATE_DATA_INTEGRATION_MAX_STEPS:"25000",UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD:ad,UI_STATE_DATA_INTEGRATION_STEP_SIZE:"0.001",UI_STATE_DATA_DOMAIN_MIN_X:"-8",UI_STATE_DATA_DOMAIN_MAX_X:"8",UI_STATE_DATA_DOMAIN_PIXELS_X:"400",UI_STATE_DATA_DOMAIN_MIN_Y:"-8",UI_STATE_DATA_DOMAIN_MAX_Y:"8",UI_STATE_DATA_DOMAIN_PIXELS_Y:"400",UI_STATE_DATA_ANGLE_PIXELS_X:"100",UI_STATE_DATA_ANGLE_PIXELS_Y:"100",UI_STATE_CAMERA_CONTROLS_ROTATESPEED:"1.0",UI_STATE_CAMERA_CONTROLS_PANSPEED:"1.0",UI_STATE_CAMERA_CONTROLS_ZOOMSPEED:"1.0",UI_STATE_RENDERING_FTLE_TYPE:ld,UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES:"0.05",UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS:"0.01",UI_STATE_RENDERING_SCALAR_MIN:"0",UI_STATE_RENDERING_SCALAR_MAX:"10",UI_STATE_RENDERING_OPACITY:"1",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS:"0.02",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX:"0.005",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE:"0.01",UI_STATE_RENDERING_TEXTURE_MODE:ii,UI_STATE_RENDERING_SPECIALIZED_MODE:vl,UI_STATE_RENDERING_RETURN_NUMBER:z0,UI_STATE_RENDERING_DIRECTION:I9,UI_STATE_RENDERING_RAW_MODE:sd,UI_STATE_RENDERING_RAW_MODE_LAYER:"0",UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX:"0",UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX:"0",UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH:"0.01",UI_STATE_RENDERING_TUBE_MAX_SEGMENTS:"1000",UI_STATE_RENDERING_TUBE_RADIUS:"0.0025",UI_STATE_RENDERING_TUBE_NUM_SIDES:"20",UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS:"true",UI_STATE_ACTIVE_BEHAVIOR:wo,UI_STATE_LINKED_VIEWS_ACTIVE:!0,UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY:!1,UI_STATE_AUX_CONTENT:Pl,UI_STATE_AUX_GRID_DIRECTION:Fr,UI_STATE_RENDERING_SCALE_VERTICES:!1}),i={uiState:e,setUiState:r=>n({...e,...r})};return L.jsx(ui.Provider,{value:i,children:t})};var hp=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function Ze(){var t=new hp(3);return hp!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function O3(t){var e=t[0],n=t[1],i=t[2];return Math.hypot(e,n,i)}function xi(t,e,n){var i=new hp(3);return i[0]=t,i[1]=e,i[2]=n,i}function Qn(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function pn(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Mt(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function pp(t,e){var n=e[0],i=e[1],r=e[2],o=n*n+i*i+r*r;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}(function(){var t=Ze();return function(e,n,i,r,o,s){var a,l;for(n||(n=3),i||(i=0),r?l=Math.min(r*n+i,e.length):l=e.length,a=i;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function z3(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),o={},s={},a=t[0].morphTargetsRelative,l=new jn;let c=0;for(let u=0;u<t.length;++u){const d=t[u];let f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const d=[];for(let f=0;f<t.length;++f){const p=t[f].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+u);u+=t[f].attributes.position.count}l.setIndex(d)}for(const u in o){const d=pg(o[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in s){const d=s[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const p=[];for(let v=0;v<s[u].length;++v)p.push(s[u][v][f]);const _=pg(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function pg(t){let e,n,i,r=-1,o=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*n}const s=new e(o),a=new Ln(s,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const d=l/n;for(let f=0,p=u.count;f<p;f++)for(let _=0;_<n;_++){const v=u.getComponent(f,_);a.setComponent(f+d,_,v)}}else s.set(u.array,l);l+=u.count*n}return r!==void 0&&(a.gpuType=r),a}const F3=t=>t[0],vS=F3`
//code from linalg.h + additional wrapper

float mat2det(mat2 a) { return a[0][0] * a[1][1] - a[0][1] * a[1][0]; }

float mat3det(mat3 a) {
    return a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) +
           a[0][1] * (a[1][2] * a[2][0] - a[1][0] * a[2][2]) +
           a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);
}

void mat2invariants(mat2 m, inout vec2 pqr) {
    // invariant0 = det(M)
    pqr[0] = mat2det(m);

    // invariant1 = -trace M
    pqr[1] = -(m[0][0] + m[1][1]);
}

void mat3invariants(mat3 m, inout vec3 pqr) {
    // invariant0 = -det(M)
    pqr[0] = -mat3det(m);

    // invariant1 = det2(M#0) + det2(M#1) + det2(M#2)
    pqr[1] = m[1][1] * m[2][2] - m[1][2] * m[2][1]
             + m[2][2] * m[0][0] - m[2][0] * m[0][2]
             + m[0][0] * m[1][1] - m[0][1] * m[1][0];

    // invariant2 = -trace M
    pqr[2] = -(m[0][0] + m[1][1] + m[2][2]);
}

int vec2squareroots(vec2 a, inout vec2 r)
/*
 *	Solves equation
 *	    1 * x^2 + a[1]*x + a[0] = 0
 *
 *	On output, 
 *	    r[0], r[1] or
 *	    r[0] +- i*r[1] are the roots 
 *	   
 *	returns number of real solutions
 */
{
    float discrim, root;

    discrim = a[1] * a[1] - 4.0 * a[0];

    if (discrim >= 0.0) {
        root = sqrt(discrim);
        r[0] = (-a[1] - root) / 2.0;
        r[1] = (-a[1] + root) / 2.0;
        return (2);
    } else {
        root = sqrt(-discrim);
        r[0] = -a[1] / 2.0;
        r[1] = root / 2.0;
        return (0);
    }
}

int vec3cubicroots(vec3 a, inout vec3 r, bool forceReal)
//  Cubic equation (multiple solutions are returned several times)
//
//	Solves equation
//	    1 * x^3 + a[2]*x^2 + a[1]*x + a[0] = 0
//
//	On output,
//	    r[0], r[1], r[2], or
//	    r[0], r[1] +- i*r[2] are the roots
//
//	returns number of real solutions

{
    
    // Eliminate quadratic term by substituting
    // x = y - a[2] / 3

    float c1 = a[1] - a[2] * a[2] / 3.;
    float c0 = a[0] - a[1] * a[2] / 3. + 2. / 27. * a[2] * a[2] * a[2];

    // Make cubic coefficient 4 and linear coefficient +- 3
    // by substituting y = z*k and multiplying with 4/k^3

    if (c1 == 0.) {
        if (c0 == 0.) r[0] = 0.;
        else if (c0 > 0.) r[0] = -pow(c0, 1. / 3.);
        else r[0] = pow(-c0, 1. / 3.);
    } else {
        bool negc1 = c1 < 0.;
        float absc1 = negc1 ? -c1 : c1;

        float k = sqrt(4. / 3. * absc1);

        float d0 = c0 * 4. / (k * k * k);

        // Find the first solution

        if (negc1) {
            if (d0 > 1.) r[0] = -cosh(acosh(d0) / 3.);
            else if (d0 > -1.) r[0] = -cos(acos(d0) / 3.);
            else r[0] = cosh(acosh(-d0) / 3.);
        } else {
            r[0] = -sinh(asinh(d0) / 3.);
        }

        // Transform back
        r[0] *= k;
    }
    
    r[0] -= a[2] / 3.;

    // Other two solutions
    float p = r[0] + a[2];
    float q = r[0] * p + a[1];

    float discrim = p * p - 4. * q;
    if (forceReal && discrim < 0.0) discrim = 0.0;

    if (discrim >= 0.0) {
        float root = sqrt(discrim);
        r[1] = (-p - root) / 2.;
        r[2] = (-p + root) / 2.;
        return 3;
    } else {
        float root = sqrt(-discrim);
        r[1] = -p / 2.;
        r[2] = root / 2.;
        return 1;
    }    
}

int mat2eigenvalues(mat2 m, inout vec2 lambda) {
    vec2 pqr;

    mat2invariants(m, pqr);

    return (vec2squareroots(pqr, lambda));
}

int mat3eigenvalues(mat3 m, inout vec3 lambda)
// calculate eigenvalues in lambda, return number of real eigenvalues.
// either returnval==1, lambda[0]=real ev, l[1] real part+-l[2] imag part
// or     returnval==3, lambda[0-2] = eigenvalues
{
    vec3 pqr;
    mat3invariants(m, pqr);

    // force real solutions for symmetric matrices
    bool forceReal = false;
    if (m[1][0] == m[0][1] && m[2][0] == m[0][2] && m[2][1] == m[1][2])
        forceReal = true;

    return (vec3cubicroots(pqr, lambda, forceReal));    
}

//this version uses column-major matrix m (the original code uses row-major matrix m)
bool mat3realEigenvector(mat3 m, float lambda, inout vec3 ev)
// calculates eigenvector corresponding to real lambda and returns true if ok
{
    mat3 m_cross;
    vec3 sqr;

    //mat3copy(m, reduced);
    mat3 reduced = mat3(m);// matrix minus lambda I
    reduced[0][0] -= lambda;
    reduced[1][1] -= lambda;
    reduced[2][2] -= lambda;

    //the following 3 lines are added to extract vectors from column-major format so that the rest of the code can stay the same
    vec3 reduced_0 = vec3(reduced[0][0], reduced[1][0], reduced[2][0]);
    vec3 reduced_1 = vec3(reduced[0][1], reduced[1][1], reduced[2][1]);
    vec3 reduced_2 = vec3(reduced[0][2], reduced[1][2], reduced[2][2]);

    m_cross[0] = cross(reduced_1, reduced_2);//vec3cross(reduced[1], reduced[2], m_cross[0]);
    m_cross[1] = cross(reduced_2, reduced_0);//vec3cross(reduced[2], reduced[0], m_cross[1]);
    m_cross[2] = cross(reduced_0, reduced_1);//vec3cross(reduced[0], reduced[1], m_cross[2]);

    sqr[0] = dot(m_cross[0], m_cross[0]);//vec3sqr(m_cross[0]); with vec3sqr(a) = vec3dot(a, a);
    sqr[1] = dot(m_cross[1], m_cross[1]);//vec3sqr(m_cross[1]); with vec3sqr(a) = vec3dot(a, a);
    sqr[2] = dot(m_cross[2], m_cross[2]);//vec3sqr(m_cross[2]); with vec3sqr(a) = vec3dot(a, a);

    // use largest cross product to calculate eigenvector
    int best;
    // ### TODO: divide e.g. sqr[0] by |reduced[1]|^2 * |reduced[2]|^2
    if (sqr[1] > sqr[0]) {
        if (sqr[2] > sqr[1]) best = 2; else best = 1;
    } else {
        if (sqr[2] > sqr[0]) best = 2; else best = 0;
    }

    float len = sqrt(sqr[best]);

    if (len > 0.) {
        ev[0] = m_cross[best][0] / len;
        ev[1] = m_cross[best][1] / len;
        ev[2] = m_cross[best][2] / len;
        return true;                              // result ok
    } else {
        return false;                             // result not ok: multiple eigenvalue, probably
    }
}

//---------------- END OF linalg.h ----------------------

//finds eigenvalue with smallest value and calculates associated eigenvector only if the eigenvalue is negative
//returns:
//if lamda is negative, ev contains the eigenvector, the return value is true (or false if there was a problem)
//if lamba is positive, ev is NOT calculated, the return value is false
bool mat3RidgeEigen(mat3 m, inout float lambda, inout vec3 ev, float ridge_lambda_threshold)
{
    vec3 lambdas = vec3(0,0,0);
    mat3eigenvalues(m, lambdas);
    int index = 0;
    if(lambdas[0] <= lambdas[1]){
        index = lambdas[0] < lambdas[2] ? 0 : 2;
    }else{//1 is smaller than 0
        index = lambdas[1] < lambdas[2] ? 1 : 2;
    }

    lambda = lambdas[index];
    if(lambda >= ridge_lambda_threshold){
        return false;
    }

    return mat3realEigenvector(m, lambda, ev);
}

//finds eigenvalue with smallest value and calculates associated eigenvector
//returns:
//ev contains the eigenvector, 
//the return value is true (or false if there was a problem)
bool mat3RidgeEigenNoThreshold(mat3 m, inout float lambda, inout vec3 ev)
{
    vec3 lambdas = vec3(0,0,0);
    mat3eigenvalues(m, lambdas);
    int index = 0;
    if(lambdas[0] <= lambdas[1]){
        index = lambdas[0] < lambdas[2] ? 0 : 2;
    }else{//1 is smaller than 0
        index = lambdas[1] < lambdas[2] ? 1 : 2;
    }

    lambda = lambdas[index];
    return mat3realEigenvector(m, lambda, ev);
}


`,k3=t=>t[0],K0=k3`

vec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

vec4 map4(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

mat3 BuildJacoby(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = sample_jacoby_direction_x;
    matrix[1] = sample_jacoby_direction_y;
    matrix[2] = sample_jacoby_direction_z;
    return matrix;
}

mat3 BuildHessian(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    //the hessian is the transpose of the jacobian of the gradient
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = vec3(sample_jacoby_direction_x.x, sample_jacoby_direction_y.x, sample_jacoby_direction_z.x);
    matrix[1] = vec3(sample_jacoby_direction_x.y, sample_jacoby_direction_y.y, sample_jacoby_direction_z.y);
    matrix[2] = vec3(sample_jacoby_direction_x.z, sample_jacoby_direction_y.z, sample_jacoby_direction_z.z);
    return matrix;
}

mat3 BuildHessianForceSym(vec3 sample_jacoby_direction_x, vec3 sample_jacoby_direction_y, vec3 sample_jacoby_direction_z)
{
    //the hessian is the transpose of the jacobian of the gradient
    mat3 matrix;//column major order, matrix[0] references the first column
    matrix[0] = 0.5 * (sample_jacoby_direction_x + vec3(sample_jacoby_direction_x.x, sample_jacoby_direction_y.x, sample_jacoby_direction_z.x));
    matrix[1] = 0.5 * (sample_jacoby_direction_y + vec3(sample_jacoby_direction_x.y, sample_jacoby_direction_y.y, sample_jacoby_direction_z.y));
    matrix[2] = 0.5 * (sample_jacoby_direction_z + vec3(sample_jacoby_direction_x.z, sample_jacoby_direction_y.z, sample_jacoby_direction_z.z));
    return matrix;
}

vec3 computeCentralDifference(sampler3D texture, ivec3 pointer, ivec3 offset_backward, ivec3 offset_forward, float h){
    vec3 backward = texelFetch(texture, pointer+offset_backward, 0).xyz;
    vec3 forward = texelFetch(texture, pointer+offset_forward, 0).xyz;
    return (forward - backward) / (2.0*h); 
}

vec3 computeForwardDifference(sampler3D texture, ivec3 pointer, ivec3 offset_forward, float h){
    vec3 value = texelFetch(texture, pointer, 0).xyz;
    vec3 forward = texelFetch(texture, pointer+offset_forward, 0).xyz;
    return (forward - value) / h; 
}

vec3 computeBackwardDifference(sampler3D texture, ivec3 pointer, ivec3 offset_backward, float h){
    vec3 backward = texelFetch(texture, pointer+offset_backward, 0).xyz;
    vec3 value = texelFetch(texture, pointer, 0).xyz;
    return (value - backward) / h; 
}

/**
 * Intended for use with PSFTLE return maps, i.e., we only care about 2 position components but 3 velocity components
 * Ignores the 3rd component of the position
 */
mat2 BuildCauchyGreen(vec3 dpos_dx, vec3 dvel_dx, vec3 dpos_dy, vec3 dvel_dy){
    /*
                                    A =     
                                    | x_dx x_dy |
                                    | y_dx y_dy |
                                    | u_dx u_dy |
                                    | v_dx v_dy |
                                    | w_dx w_dy |
    
    AT =
    | x_dx y_dx u_dx v_dx w_dx |    | a b |
    | x_dy y_dy u_dy v_dy w_dy |    | c d |


    */
    float x_dx = dpos_dx.x;
    float y_dx = dpos_dx.y;
    float u_dx = dvel_dx.x;
    float v_dx = dvel_dx.y;
    float w_dx = dvel_dx.z;

    float x_dy = dpos_dy.x;
    float y_dy = dpos_dy.y;
    float u_dy = dvel_dy.x;
    float v_dy = dvel_dy.y;
    float w_dy = dvel_dy.z;

    float a = x_dx*x_dx + y_dx*y_dx + u_dx*u_dx + v_dx*v_dx + w_dx*w_dx;
    float b = x_dx*x_dy + y_dx*y_dy + u_dx*u_dy + v_dx*v_dy + w_dx*w_dy;
    //float c = x_dy*x_dx + y_dy*y_dx + u_dy*u_dx + v_dy*v_dx + w_dy*w_dx;
    float c = b;//symmetry
    float d = x_dy*x_dy + y_dy*y_dy + u_dy*u_dy + v_dy*v_dy + w_dy*w_dy;
    
    mat2 matrix;//column major order, matrix[0] references the first column
    matrix[0] = vec2(a, c);
    matrix[1] = vec2(b, d);

    return matrix;
}

/**
 * Intended for use with PSFTLE return maps, i.e., we only care about 2 position components but 3 velocity components
 * Ignores the 3rd component of the position
 * This version only cares about position
 */
mat2 BuildCauchyGreenPos(vec3 dpos_dx, vec3 dpos_dy){
    /*
                    A =     
                    | x_dx x_dy |
                    | y_dx y_dy |
    
    AT =
    | x_dx y_dx |   | a b |
    | x_dy y_dy |   | c d |


    */
    float x_dx = dpos_dx.x;
    float y_dx = dpos_dx.y;

    float x_dy = dpos_dy.x;
    float y_dy = dpos_dy.y;

    float a = x_dx*x_dx + y_dx*y_dx;
    float b = x_dx*x_dy + y_dx*y_dy;
    //float c = x_dy*x_dx + y_dy*y_dx;
    float c = b;//symmetry
    float d = x_dy*x_dy + y_dy*y_dy;
    
    mat2 matrix;//column major order, matrix[0] references the first column
    matrix[0] = vec2(a, c);
    matrix[1] = vec2(b, d);

    return matrix;
}

/**
 * Intended for use with PSFTLE return maps, i.e., we only care about 2 position components but 3 velocity components
 * Ignores the 3rd component of the position
 */
mat2 BuildCauchyGreenVel(vec3 dvel_dx, vec3 dvel_dy){
    /*
                            A =     
                            | u_dx u_dy |
                            | v_dx v_dy |
                            | w_dx w_dy |
    
    AT =
    | u_dx v_dx w_dx |      | a b |
    | u_dy v_dy w_dy |      | c d |


    */
    float u_dx = dvel_dx.x;
    float v_dx = dvel_dx.y;
    float w_dx = dvel_dx.z;

    float u_dy = dvel_dy.x;
    float v_dy = dvel_dy.y;
    float w_dy = dvel_dy.z;

    float a = u_dx*u_dx + v_dx*v_dx + w_dx*w_dx;
    float b = u_dx*u_dy + v_dx*v_dy + w_dx*w_dy;
    //float c = u_dy*u_dx + v_dy*v_dx + w_dy*w_dx;
    float c = b;//symmetry
    float d = u_dy*u_dy + v_dy*v_dy + w_dy*w_dy;
    
    mat2 matrix;//column major order, matrix[0] references the first column
    matrix[0] = vec2(a, c);
    matrix[1] = vec2(b, d);

    return matrix;
}

`;class Xf{constructor(e,n,i,r,o,s){this.position=e,this.length=n,this.radius=i,this.cone_radius_factor=r,this.cone_fraction=o,this.color_hex=s,this.list_mesh=[],this.build()}build(){var e=this.radius,n=this.cone_radius_factor,i=this.length*(1-this.cone_fraction),r=20,o=1,s=n*e,a=this.length*this.cone_fraction,l=20,c=1;this.material=new yl({color:this.color_hex}),this.cylinder_geometry=new hd(e,e,i,r,o),this.cylinder_geometry.translate(0,i/2,0),this.cylinder_mesh=new _t(this.cylinder_geometry,this.material),this.cone_geometry=new Y0(s,a,l,c),this.cone_geometry.translate(0,i+a/2,0),this.cone_mesh=new _t(this.cone_geometry,this.material),this.combined_geometry=z3([this.cylinder_geometry,this.cone_geometry],!1),this.mesh=new _t(this.combined_geometry,this.material),this.list_mesh.push(this.cylinder_mesh),this.list_mesh.push(this.cone_mesh)}}class mp{constructor(e,n,i,r,o,s,a,l){this.position=e,this.length_x=n,this.length_y=i,this.length_z=r,this.radius=o,this.cone_radius_factor=s,this.cone_fraction=a,this.theta_down=l,this.list_arrows=[];var c=!0;this.build(c)}setValues(e,n,i,r,o,s,a){this.position=e,this.length_x=n,this.length_y=i,this.length_z=r,this.radius=o,this.cone_radius_factor=s,this.cone_fraction=a,this.theta_down&&(this.position[1]+=this.length_y)}build(e,n,i,r){this.list_arrows=[],this.axes_arrow_x=new Xf(this.position,this.length_x,this.radius,this.cone_radius_factor,this.cone_fraction,n),this.list_arrows.push(this.axes_arrow_x),this.axes_arrow_y=new Xf(this.position,this.length_y,this.radius,this.cone_radius_factor,this.cone_fraction,i),this.list_arrows.push(this.axes_arrow_y),e&&(this.axes_arrow_z=new Xf(this.position,this.length_z,this.radius,this.cone_radius_factor,this.cone_fraction,r),this.axes_arrow_z.mesh.rotateX(Ms.degToRad(90)),this.list_arrows.push(this.axes_arrow_z)),this.theta_down?(this.axes_arrow_x.mesh.rotateZ(Ms.degToRad(180)),this.axes_arrow_y.mesh.rotateZ(Ms.degToRad(-90))):this.axes_arrow_x.mesh.rotateZ(Ms.degToRad(-90))}addToScene(e){for(var n=0;n<this.list_arrows.length;n++){var i=this.list_arrows[n];e.add(i.mesh),i.mesh.position.set(this.position[0],this.position[1],this.position[2])}}removefromScene(e){for(var n=0;n<this.list_arrows.length;n++){var i=this.list_arrows[n];e.remove(i.mesh)}}rebuild(e,n,i,r,o,s,a,l,c,u,d,f){this.removefromScene(i);var p=xi(o,a,0),_=s-o,v=l-a,m=Math.min(_,v)*n,h=5,g=.05;this.setValues(p,_,v,m,c,h,g),this.build(e,u,d,f),this.addToScene(i)}}class B3{constructor(e,n){console.warn("CONSTRUCTOR SpherelikeGrid"),this.scene=e,this.pixels_x=0,this.pixels_y=0,this.subdivide=!1,this.material=n}updateGrid(e,n,i){var r=e==this.subdivide&&n==this.pixels_x&&i==this.pixels_y;if(r){console.warn("SpherelikeGrid updateGrid no change");return}console.warn("SpherelikeGrid updateGrid",n,i),this.subdivide=e,this.pixels_x=n,this.pixels_y=i,this.num_cells_x=n-1,this.num_cells_y=i-1,this.num_cells=this.num_cells_x*this.num_cells_y,this.num_vertices=n*i,this.num_triangles=this.num_cells*2,e&&(this.num_vertices+=this.num_cells,this.num_triangles*=2),this.build()}build(){this.scene.remove(this.mesh);const e=new jn,n=new Float32Array(this.num_vertices*3),i=new Float32Array(this.num_vertices*2),r=Array(this.num_triangles);for(var p=0,o=0,s=0;s<this.pixels_y;s++)for(var a=0;a<this.pixels_x;a++){var l=Math.PI*(a/(this.pixels_x-1)),c=2*Math.PI*(s/(this.pixels_y-1)),u=Math.sin(l)*Math.cos(c),d=Math.sin(l)*Math.sin(c),f=Math.cos(l);n[p]=u,n[p+1]=d,n[p+2]=f,p+=3,i[o]=a/(this.pixels_x-1),i[o+1]=s/(this.pixels_y-1),o+=2}for(var p=0,s=0;s<this.num_cells_y;s++)for(var a=0;a<this.num_cells_x;a++){var _=a+s*this.pixels_x,v=_+this.pixels_x,m=v+1,h=_+1;r[p]=_,r[p+1]=h,r[p+2]=v,r[p+3]=h,r[p+4]=m,r[p+5]=v,p+=6}e.setIndex(r),e.setAttribute("position",new Ln(n,3)),e.setAttribute("uv",new Ln(i,2)),this.mesh=new _t(e,this.material),this.scene.add(this.mesh)}}function mg(t,e,n){return Math.max(e,Math.min(t,n))}function $3(t,e,n){return Math.acos(n)}function V3(t,e,n){return Math.atan2(e,t)}class po{constructor(){this.mu=.1,this.angular_velocity=1,this.seed_direction_x=1,this.seed_direction_y=0,this.seed_direction_z=1,this.seed_direction_theta_frac=0,this.seed_direction_phi_frac=0,this.seed_direction_theta_radians=0,this.seed_direction_phi_radians=0,this.seed_position_x=0,this.seed_position_y=0,this.seed_energy=.25,this.use_constant_velocity=!1,this.max_steps=15e3,this.step_size=.001,this.termination_method=ad,this.camera_near_plane=.001,this.camera_far_plane=25,this.scale_bodies_by_volume=!0,this.max_radius_bodies=.05,this.radius_center_of_mass=.01,this.radius_clicked_position=.025,this.radius_clicked_position_aux=.025,this.tube_radius=.0025,this.tube_num_sides=20,this.tube_num_segments=2e4,this.tube_segment_length=.001,this.tube_max_segments=1e4,this.tube_only_show_successful_returns=!0,this.activeBehavior=wo,this.activeBehaviorLastFrame=wo,this.rendering_texture_mode=ii,this.rendering_specialized_mode=rd,this.return_layer=z0,this.rendering_raw_mode=sd,this.rendering_raw_mode_layer=0,this.rendering_raw_mode_x_texture_index=0,this.rendering_raw_mode_y_texture_index=0,this.rendering_ftle_type=ld,this.scalar_min=0,this.scalar_max=1,this.opacity=1,this.linkedViewsActive=!0,this.auxGridDirection=Fr,this.rendering_scale_vertices=!1,this.print()}getPrimaryMass(){return 1-this.mu}getSecondaryMass(){return this.mu}getPrimaryX(){return-this.mu}getSecondaryX(){return 1-this.mu}getPrimaryRadius(){return this.scale_bodies_by_volume?Math.pow(3/(4*Math.PI)*this.getPrimaryMass(),1/3)*this.max_radius_bodies:this.getPrimaryMass()*this.max_radius_bodies}getSecondaryRadius(){return this.scale_bodies_by_volume?Math.pow(3/(4*Math.PI)*this.getSecondaryMass(),1/3)*this.max_radius_bodies:this.getSecondaryMass()*this.max_radius_bodies}getCenterOfMassRadius(){return this.radius_center_of_mass}getClickedPositionRadius(e){return e==Au?this.radius_clicked_position_aux:this.radius_clicked_position}getSphereVolume(e){return 4/3*Math.PI*e*e*e}print(){var e=this.getPrimaryRadius(),n=this.getSecondaryRadius(),i=this.getPrimaryRadius()/this.max_radius_bodies,r=this.getSecondaryRadius()/this.max_radius_bodies,o=this.getSphereVolume(e),s=this.getSphereVolume(n),a=this.getSphereVolume(i),l=this.getSphereVolume(r);console.log("primary_radius",e),console.log("secondary_radius",n),console.log("primary_radius_unscaled",i),console.log("secondary_radius_unscaled",r),console.log("primary_volume",o),console.log("secondary_volume",s),console.log("primary_volume_unscaled",a),console.log("secondary_volume_unscaled",l)}setSeedDirectionAnglesFromFrac(e,n){if(this.auxGridDirection==Fr){var i=e,r=n;e=1-r,n=i}else this.auxGridDirection==bu||console.error("setSeedDirectionAnglesFromFrac: unkonw auxGridDirection",this.auxGridDirection);var o=Math.PI*e,s=2*Math.PI*n,a=Math.sin(o)*Math.cos(s),l=Math.sin(o)*Math.sin(s),c=Math.cos(o);this.seed_direction_theta_frac=e,this.seed_direction_phi_frac=n,this.seed_direction_theta_radians=o,this.seed_direction_phi_radians=s,this.seed_direction_x=a,this.seed_direction_y=l,this.seed_direction_z=c}setSeedDirection(e,n,i){var r=xi(e,n,i);pp(r,r),e=r[0],n=r[1],i=r[2];var o=$3(e,n,i),s=V3(e,n);s<0&&(s+=2*Math.PI);var a=o/Math.PI,l=s/(2*Math.PI);this.seed_direction_theta_frac=a,this.seed_direction_phi_frac=l,this.seed_direction_theta_radians=o,this.seed_direction_phi_radians=s,this.seed_direction_x=e,this.seed_direction_y=n,this.seed_direction_z=i}static CreateOrGetInstance(){return po.instance||(po.instance=new po),po.instance}}function _g(t,e){var n=t.getBoundingClientRect(),i=Math.round(e.clientX),r=Math.round(e.clientY),o=Math.round(n.left),s=Math.round(n.top),a=Math.round(n.width),l=Math.round(n.height);return{x:(i-o)/a*2-1,y:-((r-s)/l)*2+1}}const vg=t=>t[0];class Ll{constructor(e,n,i){this.renderer=e,this.simulationParameters=n,this.use_external_render_target=!1,this.offscreen_renderer_for_external_render_target=null,this.useAnglePlane=i}getPlaneDimensionX(){return this.useAnglePlane?this.simulationParameters.angle_pixels_x:this.simulationParameters.domain_pixels_x}getPlaneDimensionY(){return this.useAnglePlane?this.simulationParameters.angle_pixels_y:this.simulationParameters.domain_pixels_y}setExternalRenderTarget(e){this.use_external_render_target=!0,this.offscreen_renderer_for_external_render_target=e}initialize(){console.warn("INITIALIZE OffscreenRenderer"),this.width=100,this.height=100,this.updateRenderTarget(),this.bufferScene=new X0,this.bufferCamera=new vn(70,this.width/this.height,.1,100),this.bufferCamera.position.z=5,this.dummy_plane_geometry=new ko(100,100),this.generateUniforms(),this.dummy_plane_material=new Mi({uniforms:this.uniforms,fragmentShader:this.fragmentShader(),vertexShader:this.vertexShader(),glslVersion:Du}),console.log(this.fragmentShader()),this.dummy_plane_mesh=new _t(this.dummy_plane_geometry,this.dummy_plane_material),this.bufferScene.add(this.dummy_plane_mesh),this.compute()}updateTexturedPlane(){this.setAdditionalUniforms(),this.dummy_plane_mesh.material.uniforms.mu.value=this.simulationParameters.mu,this.dummy_plane_mesh.material.uniforms.angular_velocity.value=this.simulationParameters.angular_velocity,this.dummy_plane_mesh.material.uniforms.primary_x.value=this.simulationParameters.getPrimaryX(),this.dummy_plane_mesh.material.uniforms.secondary_x.value=this.simulationParameters.getSecondaryX(),this.dummy_plane_mesh.material.uniforms.primary_mass.value=this.simulationParameters.getPrimaryMass(),this.dummy_plane_mesh.material.uniforms.secondary_mass.value=this.simulationParameters.getSecondaryMass(),this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.x=this.simulationParameters.domain_min_x,this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.y=this.simulationParameters.domain_min_y,this.dummy_plane_mesh.material.uniforms.planeDimensions.value.x=this.simulationParameters.domain_dimension_x,this.dummy_plane_mesh.material.uniforms.planeDimensions.value.y=this.simulationParameters.domain_dimension_y,this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.x=this.getPlaneDimensionX(),this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.y=this.getPlaneDimensionY();var e=!1;return this.getPlaneDimensionX()!=this.width&&(this.width=this.getPlaneDimensionX(),e=!0),this.getPlaneDimensionY()!=this.height&&(this.height=this.getPlaneDimensionY(),e=!0),e&&this.updateRenderTarget(),e}updateRenderTarget(){if(console.warn("UPDATE RENDER TARGET SIZE"),this.use_external_render_target)this.renderTarget=this.offscreen_renderer_for_external_render_target.renderTarget;else{var e=this.width*this.getNumPixelsPerNodeX(),n=this.height*this.getNumPixelsPerNodeY(),i=this.getNumLayers();this.renderTarget=new fA(e,n,i,{minFilter:Pn,magFilter:tn,format:Dn,type:ri});const r=e*n*i*4,o=new Float32Array(r),s=new $0(o,e,n,i);s.format=Dn,s.type=ri,s.minFilter=Pn,s.magFilter=tn,s.unpackAlignment=1,this.renderTarget.texture=s}}compute(){this.computeLayer(0)}computeLayer(e){this.dummy_plane_mesh.material.uniforms.target_layer_index.value=e,this.renderer.setRenderTarget(this.renderTarget,e),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}computeTargetLayerAt0(e){this.dummy_plane_mesh.material.uniforms.target_layer_index.value=e,this.renderer.setRenderTarget(this.renderTarget,0),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}copyTextureToLayer(e,n){this.dummy_plane_mesh.material.uniforms.texture_input.value=e,this.dummy_plane_mesh.material.uniforms.target_layer_index.value=n,this.renderer.setRenderTarget(this.renderTarget,n),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}generateUniforms(){this.uniforms={target_layer_index:{type:"int",value:0},mu:{type:"float",value:.1},angular_velocity:{type:"float",value:1},primary_x:{type:"float",value:0},secondary_x:{type:"float",value:0},primary_mass:{type:"float",value:0},secondary_mass:{type:"float",value:0},planeCenter:{type:"vec2",value:new ge(0,0)},planeCornerBL:{type:"vec2",value:new ge(-1,-1)},planeDimensions:{type:"vec2",value:new ge(2,2)},planeDimensionsPixel:{type:"vec2",value:new ge(100,100)}},this.addAdditionalUniforms()}vertexShader(){return vg`
        varying vec3 vUv; 
    
        void main() {
          vUv = position; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
        `}fragmentShader(){return""+this.getUniformsString()+`
`+this.fragmentShaderAdditionalMethodDeclarations()+vS+`
`+K0+`
`+vg`
        varying vec3 vUv;

        const float G = 1.0;//TODO
        const float PI = 3.1415926535897932384626433832795;
        out vec4 outputColor;
  
        void main() {
            //coordinates in pixel in total texture starting bottom left
            float x_pixel = floor(gl_FragCoord[0]);//x
            float y_pixel = floor(gl_FragCoord[1]);//y

            //coordinates in pixel in virtual texture
            int x_pixel_mod = int(x_pixel) % int(planeDimensionsPixel.x);
            int y_pixel_mod = int(y_pixel) % int(planeDimensionsPixel.y);

            //x and y indices of virtual texture e.g., (0,0) is the top left texture
            int virtual_texture_x = int(x_pixel) / int(planeDimensionsPixel.x);
            int virtual_texture_y = int(y_pixel) / int(planeDimensionsPixel.y);

            //world coordinates in virtual texture (when position is variable and direction is constant)
            float world_x = planeCornerBL.x + (float(x_pixel_mod) / (planeDimensionsPixel.x - 1.0)) * planeDimensions.x;
            float world_y = planeCornerBL.y + (float(y_pixel_mod) / (planeDimensionsPixel.y - 1.0)) * planeDimensions.y;

            //angles in virtual texture (when position is constant and direction is variable)
            //ISO convention (i.e. for physics: radius r, inclination theta, azimuth phi) --> https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
            float theta_radians = PI * (float(x_pixel_mod) / (planeDimensionsPixel.x - 1.0));//TODO REPLACE planeDimensionsPixel with dimension of other grid
            float phi_radians = 2.0 * PI * (float(y_pixel_mod) / (planeDimensionsPixel.y - 1.0));//TODO REPLACE planeDimensionsPixel with dimension of other grid
        `+this.fragmentShaderMethodComputation()+`
        }    
        `+this.fragmentShaderAdditionalMethodDefinitions()}getUniformsString(){return Object.keys(this.uniforms).map(e=>`uniform ${this.uniforms[e].type} ${e};`).join(`
`)}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}getNumLayers(){return 1}fragmentShaderMethodComputation(){return""}addAdditionalUniforms(){}setAdditionalUniforms(){}fragmentShaderAdditionalMethodDeclarations(){return""}fragmentShaderAdditionalMethodDefinitions(){return""}}const G3=t=>t[0];class gg extends Ll{constructor(e,n,i){super(e,n,i)}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 3}addAdditionalUniforms(){this.uniforms.texture_input={type:"sampler3D",value:null}}setAdditionalUniforms(){}fragmentShaderMethodComputation(){return G3`
            ivec3 pointer = ivec3(int(floor(x_pixel)), int(floor(y_pixel)), 0);
            outputColor = texelFetch(texture_input, pointer, 0);       
            //outputColor = vec4(1.0, 0.0, 0.0, 1.0);      
        `}}const jf=t=>t[0];class xg extends Ll{constructor(e,n,i,r){super(e,n,i),this.mode_constant_direction=r}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.seed_direction={type:"vec3",value:new k(0,0,0)},this.uniforms.seed_position={type:"vec3",value:new k(0,0,0)},this.uniforms.seed_energy={type:"float",value:1},this.uniforms.use_constant_velocity={type:"bool",value:!1},this.uniforms.mode_constant_direction={type:"bool",value:!0}}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.seed_direction.value.x=this.simulationParameters.seed_direction_x,this.dummy_plane_mesh.material.uniforms.seed_direction.value.y=this.simulationParameters.seed_direction_y,this.dummy_plane_mesh.material.uniforms.seed_direction.value.z=this.simulationParameters.seed_direction_z,this.dummy_plane_mesh.material.uniforms.seed_position.value.x=this.simulationParameters.seed_position_x,this.dummy_plane_mesh.material.uniforms.seed_position.value.y=this.simulationParameters.seed_position_y,this.dummy_plane_mesh.material.uniforms.seed_energy.value=this.simulationParameters.seed_energy,this.dummy_plane_mesh.material.uniforms.use_constant_velocity.value=this.simulationParameters.use_constant_velocity,this.dummy_plane_mesh.material.uniforms.mode_constant_direction.value=this.mode_constant_direction}fragmentShaderMethodComputation(){return jf`
            if(mode_constant_direction){
                computeSeedConstantDirection(virtual_texture_x, virtual_texture_y, world_x, world_y);
            }
            else{
                computeSeedConstantPosition(virtual_texture_x, virtual_texture_y, theta_radians, phi_radians);
            }    
        `}fragmentShaderAdditionalMethodDeclarations(){return jf`
        void computeSeedConstantDirection(int virtual_texture_x, int virtual_texture_y, float world_x, float world_y);
        void computeSeedConstantPosition(int virtual_texture_x, int virtual_texture_y, float theta_radians, float phi_radians);
        `}fragmentShaderAdditionalMethodDefinitions(){return jf`

        void computeSeedConstantDirection(int virtual_texture_x, int virtual_texture_y, float world_x, float world_y){
            float x = world_x;
            float y = world_y;
            float z = 0.0;
            if(virtual_texture_y == 0){                
                if(virtual_texture_x == 0){
                    //POSITION CALCULATION
                    outputColor = vec4(x, y, 0.0, 1.0);
                }        
                if(virtual_texture_x == 1){
                    //VELOCITY CALCULATION
                    if(use_constant_velocity){
                        //if set to true, use constant velocity
                        vec3 seed_velocity = normalize(seed_direction) * seed_energy;//TODO placeholder
                        outputColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, seed_energy);
                    }
                    else{
                        //if set to false, use constant hamiltonian
                        vec3 dir_normalized = normalize(seed_direction);

                        float dir_x = dir_normalized.x;
                        float dir_y = dir_normalized.y;
                        float dir_z = dir_normalized.z;
    
                        float n = angular_velocity;
                        float H = seed_energy;
                        float phi = - (1.0-mu)/(sqrt((x+mu)*(x+mu) + y*y + z*z)) - mu/(sqrt((x-(1.0-mu))*(x-(1.0-mu)) + y*y + z*z));
                        float ydxminusxdy = y*dir_x - x*dir_y;
                        float L = -n * ydxminusxdy;
                        float R = sqrt(n*n*ydxminusxdy*ydxminusxdy - 2.0*(phi-H));
    
                        float a1 = L + R;
                        float a2 = L - R;
                        float a = max(a1, a2);
    
                        outputColor = vec4(a*dir_x, a*dir_y, a*dir_z, a);
                    }                    
                }
            }
            else{
                outputColor = vec4(0.0, 0.0, 0.0, 0.0);         
            }
        }

        void computeSeedConstantPosition(int virtual_texture_x, int virtual_texture_y, float theta_radians, float phi_radians){
            float x = seed_position.x;
            float y = seed_position.y;
            float z = 0.0;
            if(virtual_texture_y == 0){                
                if(virtual_texture_x == 0){
                    //POSITION CALCULATION
                    //outputColor = vec4(theta_radians, phi_radians, 0.0, 1.0);
                    outputColor = vec4(x, y, 0.0, 1.0);
                }        
                if(virtual_texture_x == 1){
                    //VELOCITY CALCULATION
                    //vec3 direction = vec3(1.0,0.0,0.0);
                    float dir_x = sin(theta_radians) * cos(phi_radians);
                    float dir_y = sin(theta_radians) * sin(phi_radians);
                    float dir_z = cos(theta_radians);
                    vec3 direction = vec3(dir_x, dir_y, dir_z);

                    if(use_constant_velocity){
                        //if set to true, use constant velocity
                        vec3 seed_velocity = normalize(direction) * seed_energy;
                        outputColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, seed_energy);
                    }
                    else{
                        //if set to false, use constant hamiltonian
                        vec3 dir_normalized = normalize(direction);

                        float dir_x = dir_normalized.x;
                        float dir_y = dir_normalized.y;
                        float dir_z = dir_normalized.z;
    
                        float n = angular_velocity;
                        float H = seed_energy;
                        float phi = - (1.0-mu)/(sqrt((x+mu)*(x+mu) + y*y + z*z)) - mu/(sqrt((x-(1.0-mu))*(x-(1.0-mu)) + y*y + z*z));
                        float ydxminusxdy = y*dir_x - x*dir_y;
                        float L = -n * ydxminusxdy;
                        float R = sqrt(n*n*ydxminusxdy*ydxminusxdy - 2.0*(phi-H));
    
                        float a1 = L + R;
                        float a2 = L - R;
                        float a = max(a1, a2);
    
                        outputColor = vec4(a*dir_x, a*dir_y, a*dir_z, a);
                    }                    
                }
            }
            else{
                outputColor = vec4(0.0, 0.0, 0.0, 0.0);         
            }
        }
        `}}const Yf=t=>t[0];class yg extends Ll{constructor(e,n,i,r){super(e,n,i),this.signum=r}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture},this.uniforms.max_steps={type:"int",value:0},this.uniforms.step_size={type:"float",value:0},this.uniforms.signum={type:"float",value:1},console.warn("FLOW MAP uniforms",this.uniforms)}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture,this.dummy_plane_mesh.material.uniforms.max_steps.value=this.simulationParameters.max_steps,this.dummy_plane_mesh.material.uniforms.step_size.value=this.simulationParameters.step_size,this.dummy_plane_mesh.material.uniforms.signum.value=this.signum}fragmentShaderMethodComputation(){return Yf`

            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, target_layer_index-1);
            vec3 seed_position = texelFetch(texture_seeds_and_returns, pointer, 0).xyz;
            float x = seed_position.x;
            float y = seed_position.y;
            float z = seed_position.z;
            vec3 seed_direction = texelFetch(texture_seeds_and_returns, pointer+ivec3(int(planeDimensionsPixel.x),0,0), 0).xyz;
            vec4 data3 = texelFetch(texture_seeds_and_returns, pointer+ivec3(0,int(planeDimensionsPixel.y),0),0);
            float old_success_float = data3.x;
            float advection_time = data3.y;
            float arc_length = data3.z;

            vec3 current_position = seed_position;
            current_position.z = 0.0;
            vec3 current_direction = seed_direction;

            bool success = false;//do we reach the plane intersection
            float success_float = 0.0;
            bool isOnPositiveZ = f_direction(current_position, current_direction, signum).z > 0.0;

            if(target_layer_index > 1){
                //this is not the first return --> only continue if previous was success
                if(old_success_float < 0.5){
                    outputColor = vec4(0.0, 0.0, 0.0, 1.0); 
                    return;
                }            
            }

            for (int i = 0; i < max_steps; i++) {

                //---------- START OF RK4 ----------
                vec3 k1 = step_size * f_position(current_position, current_direction, signum);
                vec3 l1 = step_size * f_direction(current_position, current_direction, signum);

                vec3 k2 = step_size * f_position(current_position + k1/2.0, current_direction + l1/2.0, signum);
                vec3 l2 = step_size * f_direction(current_position + k1/2.0, current_direction + l1/2.0, signum);

                vec3 k3 = step_size * f_position(current_position + k2/2.0, current_direction + l2/2.0, signum);
                vec3 l3 = step_size * f_direction(current_position + k2/2.0, current_direction + l2/2.0, signum);

                vec3 k4 = step_size * f_position(current_position + k3, current_direction + l3, signum);
                vec3 l4 = step_size * f_direction(current_position + k3, current_direction + l3, signum);

                //CALCULATE: vec3 next = current + k1 / 6 + k2 / 3 + k3 / 3 + k4 / 6;
                vec3 add_position = k1 / 6.0 + k2 / 3.0 + k3 / 3.0 + k4 / 6.0;
                vec3 add_direction = l1 / 6.0 + l2 / 3.0 + l3 / 3.0 + l4 / 6.0;
                vec3 next_position = current_position + add_position;
                vec3 next_direction = current_direction + add_direction;


                float segment_length = length(add_position);
                float next_arc_length = arc_length + segment_length;
                float next_advection_time = advection_time + step_size;

                //TODO check alternative termination conditions
                if(false){
                    success = false;//we did not reach the plane
                    break;
                }
                
                //check plane intersection termination condition
                if(current_position.z > 0.0){
                    //we are currently at z > 0
                    if(next_position.z <= 0.0){
                        success = true;//we did reach the plane
                        break;
                    }
                }
                if (current_position.z < 0.0){
                    //we are currently at z < 0
                    if(next_position.z >= 0.0){
                        success = true;//we did reach the plane
                        break;
                    }
                }


                //set values for next iteration
                current_position = next_position;
                current_direction = next_direction;
                arc_length = next_arc_length;
                advection_time = next_advection_time;
            }


            if(success){
                //TODO find better intersection point with either bisection or interpolation
                success_float = 1.0;
            }

            if(virtual_texture_y == 0){
                if(virtual_texture_x == 0){
                    outputColor = vec4(current_position, 1.0); 
                    //outputColor = vec4(0.0, current_position.y, 0.0, 1.0); 
                }
                else{
                    outputColor = vec4(current_direction, 1.0); 
                }
            }
            else{
                if(virtual_texture_x == 0){
                    outputColor = vec4(success_float, advection_time, arc_length, 1.0); 
                }
                else{
                    outputColor = vec4(1.0, 0.5, 1.0, 1.0); 
                }
            }
            
        `}fragmentShaderAdditionalMethodDeclarations(){return Yf`
        vec3 f_position(vec3 position, vec3 direction, float signum);
        vec3 f_direction(vec3 position, vec3 direction, float signum);
        `}fragmentShaderAdditionalMethodDefinitions(){return Yf`
        vec3 f_position(vec3 position, vec3 direction, float signum) {
            float n = angular_velocity;
    
            float x = position.x;
            float y = position.y;
            //float z = position.z;
    
            float px = direction.x;
            float py = direction.y;
            float pz = direction.z;
    
            //equations of motion
            float u = px + n * y;
            float v = py - n * x;
            float w = pz;
    
            return vec3(u * signum, v * signum, w * signum);
        }
    
        vec3 f_direction(vec3 position, vec3 direction, float signum) {
            float n = angular_velocity;
            
    
            float x = position.x;
            float y = position.y;
            float z = position.z;
    
            float px = direction.x;
            float py = direction.y;
            float pz = direction.z;
    
            //helper variables
            float muplusx = mu + x;
            float muminusone = mu - 1.0;
            float muplusxminusone = muplusx - 1.0;
            float left_denominator = pow((muplusxminusone * muplusxminusone + y * y + z * z), (3.0 / 2.0));
            float right_denominator = pow((muplusx * muplusx + y * y + z * z), (3.0 / 2.0));
    
            float dphi_dx = (mu * muplusxminusone) / left_denominator - (muminusone * muplusx) / right_denominator;
            float dphi_dy = (mu * y) / left_denominator - (muminusone * y) / right_denominator;
            float dphi_dz = (mu * z) / left_denominator - (muminusone * z) / right_denominator;
    
            //equations of motion
            float u = n * py - dphi_dx;
            float v = -n * px - dphi_dy;
            float w = - dphi_dz;
    
            return vec3(u * signum, v * signum, w * signum);
        }
        `}}const qf=t=>t[0];class Sg extends Ll{constructor(e,n,i){super(e,n,i)}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture},this.uniforms.max_steps={type:"int",value:0},this.uniforms.step_size={type:"float",value:0},this.uniforms.signum={type:"float",value:1},console.warn("FTLE uniforms",this.uniforms)}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture,this.dummy_plane_mesh.material.uniforms.max_steps.value=this.simulationParameters.max_steps,this.dummy_plane_mesh.material.uniforms.step_size.value=this.simulationParameters.step_size}fragmentShaderMethodComputation(){return qf`
            ivec3 pointer_original = ivec3(int(x_pixel), int(y_pixel), target_layer_index);

            if(virtual_texture_y == 0){
                if(virtual_texture_x == 0){
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
                else{
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
            }
            else{
                if(virtual_texture_x == 0){
                    outputColor = texelFetch(texture_seeds_and_returns, pointer_original, 0);
                }
                else{
                    //float ftle = computeFTLE(x_pixel_mod, y_pixel_mod);
                    float psftle = computePSFTLE(x_pixel_mod, y_pixel_mod, 0);//0 = psftle
                    float psftle_pos = computePSFTLE(x_pixel_mod, y_pixel_mod, 1);//1 = psftle_pos
                    float psftle_vel = computePSFTLE(x_pixel_mod, y_pixel_mod, 2);//2 = psftle_vel
                    
                    outputColor = vec4(psftle,psftle_pos,psftle_vel, 1.0); 
                }
            }
        `}fragmentShaderAdditionalMethodDeclarations(){return qf`
        //float computeFTLE(int x_pixel_mod, int y_pixel_mod);
        float computePSFTLE(int x_pixel_mod, int y_pixel_mod, int type);
        `}fragmentShaderAdditionalMethodDefinitions(){return qf`


        /*
        float computeFTLE(int x_pixel_mod, int y_pixel_mod){
            float dx = 1.0 / (planeDimensionsPixel.x-1.0);
            float dy = 1.0 / (planeDimensionsPixel.y-1.0);
            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, target_layer_index);

            //finite differences
            //finite differences in x direction
            vec3 df_dx;
            if(x_pixel_mod == 0){
                df_dx = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(1,0,0), dx );
            }
            else if(x_pixel_mod == int(planeDimensionsPixel.x-1.0)){
                df_dx = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), dx );
            }
            else{
                df_dx = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), ivec3(1,0,0), dx );
            }
            //finite differences in y direction
            vec3 df_dy;
            if(y_pixel_mod == 0){
                df_dy = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(0,1,0), dx );
            }
            else if(y_pixel_mod == int(planeDimensionsPixel.y-1.0)){
                df_dy = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), dx );
            }
            else{
                df_dy = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), ivec3(0,1,0), dy );
            }
            //finite differences in z direction = (0,0,0)
            vec3 df_dz = vec3(0,0,0);

            //jacobian
            mat3 J = BuildJacoby(df_dx, df_dy, df_dz);
            //transpose jacobian
            mat3 JT = transpose(J);
            //C = cauchy-green tensor = J^T * J
            mat3 C = JT * J;

            //biggest eigenvalue lambda_max
            vec3 lambdas = vec3(0,0,0);
            mat3eigenvalues(C, lambdas);
            float lambda_max = max(lambdas.x, max(lambdas.y, lambdas.z));

            //FTLE
            float advection_time = 1.0;//TODO SCALING?
            float ftle = 1.0 / advection_time * log(sqrt(lambda_max));

            return ftle;
        }*/

        float computePSFTLE(int x_pixel_mod, int y_pixel_mod, int type){
            float dx = 1.0 / (planeDimensionsPixel.x-1.0);
            float dy = 1.0 / (planeDimensionsPixel.y-1.0);
            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, target_layer_index);

            ivec3 x_offset_vel = ivec3(int(planeDimensionsPixel.x),0,0);

            //finite differences
            //finite differences in x direction
            vec3 dpos_dx;
            vec3 dvel_dx;
            if(x_pixel_mod == 0){
                dpos_dx = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(1,0,0), dx );
                dvel_dx = computeForwardDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(1,0,0), dx );
            }
            else if(x_pixel_mod == int(planeDimensionsPixel.x-1.0)){
                dpos_dx = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), dx );
                dvel_dx = computeBackwardDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(-1,0,0), dx );
            }
            else{
                dpos_dx = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(-1,0,0), ivec3(1,0,0), dx );
                dvel_dx = computeCentralDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(-1,0,0), ivec3(1,0,0), dx );
            }
            //finite differences in y direction
            vec3 dpos_dy;
            vec3 dvel_dy;
            if(y_pixel_mod == 0){
                dpos_dy = computeForwardDifference(texture_seeds_and_returns, pointer, ivec3(0,1,0), dx );
                dvel_dy = computeForwardDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(0,1,0), dx );
            }
            else if(y_pixel_mod == int(planeDimensionsPixel.y-1.0)){
                dpos_dy = computeBackwardDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), dx );
                dvel_dy = computeBackwardDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(0,-1,0), dx );
            }
            else{
                dpos_dy = computeCentralDifference(texture_seeds_and_returns, pointer, ivec3(0,-1,0), ivec3(0,1,0), dy );
                dvel_dy = computeCentralDifference(texture_seeds_and_returns, pointer+x_offset_vel, ivec3(0,-1,0), ivec3(0,1,0), dy );
            }

            mat2 C;
            if(type == 0){//0 = psftle
                C = BuildCauchyGreen(dpos_dx, dvel_dx, dpos_dy, dvel_dy);
            }
            else if(type == 1){//1 = psftle_pos
                C = BuildCauchyGreenPos(dpos_dx, dpos_dy);
            }
            else if(type == 2){//2 = psftle_vel
                C = BuildCauchyGreenVel(dvel_dx, dvel_dy);
            }

            //biggest eigenvalue lambda_max
            vec2 lambdas = vec2(0,0);
            mat2eigenvalues(C, lambdas);
            float lambda_max = max(lambdas.x, lambdas.y);

            //FTLE
            float advection_time = 1.0;//TODO SCALING?
            float ftle = 1.0 / advection_time * log(sqrt(lambda_max));

            return ftle;
        }
        `}}const H3=t=>t[0];class W3 extends Ll{constructor(e,n,i){super(e,n,i)}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture}}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture}fragmentShaderMethodComputation(){return H3`            

            //renaming for convenience
            float x1 = primary_x;
            float x2 = secondary_x;
            float m1 = primary_mass;
            float m2 = secondary_mass;

            ivec3 pointer = ivec3(x_pixel_mod, y_pixel_mod, 0);
            vec2 seed_position = texelFetch(texture_seeds_and_returns, pointer, 0).xy;
            float x = seed_position.x;
            float y = seed_position.y;
            vec2 primary_position = vec2(x1, 0.0);
            vec2 secondary_position = vec2(x2, 0.0);

            float r1 = distance(seed_position, primary_position);
            float r2 = distance(seed_position, secondary_position);
            float r13 = r1*r1*r1;
            float r23 = r2*r2*r2;

            vec2 F1 = G * m1 / r13 * vec2(x1-x, -y);//y1=0 per definition
            vec2 F2 = G * m2 / r23 * vec2(x2-x, -y);//y2=0 per definition
            vec2 F = F1 + F2;
            float force_magnitude = length(F);

            outputColor = vec4(F.x, F.y, 0.0, force_magnitude);
        `}}const X3=t=>t[0],gS=X3`

    // x_virtual, y_virtual: which virtual texture is used?
    // component: the index to access the element of the vec4
    float InterpolateScalar(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component){
        
        int x_offset = int(planeDimensionsPixel.x) * x_virtual;
        int y_offset = int(planeDimensionsPixel.y) * y_virtual;

        float dx = 1.0 / (planeDimensionsPixel.x-1.0);
        float dy = 1.0 / (planeDimensionsPixel.y-1.0);

        float x = x_frac;
        float y = y_frac;

        int i = int(floor(x / dx));
        int j = int(floor(y / dy));

        float t_x = (x - (float(i) * dx)) / dx;
        float t_y = (y - (float(j) * dy)) / dy;

        float v_00 = texelFetch(texture, ivec3(i+0+x_offset, j+0+y_offset, z_layer), 0)[component];
        float v_01 = texelFetch(texture, ivec3(i+0+x_offset, j+1+y_offset, z_layer), 0)[component];
        float v_10 = texelFetch(texture, ivec3(i+1+x_offset, j+0+y_offset, z_layer), 0)[component];
        float v_11 = texelFetch(texture, ivec3(i+1+x_offset, j+1+y_offset, z_layer), 0)[component];

        //interpolate 2 points along y axis using t_y
        float v_0 = mix(v_00, v_01, t_y);
        float v_1 = mix(v_10, v_11, t_y);

        //interpolate 1 points along x axis using t_x
        float v = mix(v_0, v_1, t_x);
        
        return v;
    }

    // x_virtual, y_virtual: which virtual texture is used?
    // component: the index to access the element of the vec4
    vec4 InterpolateVec4(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer){
        
        int x_offset = int(planeDimensionsPixel.x) * x_virtual;
        int y_offset = int(planeDimensionsPixel.y) * y_virtual;

        float dx = 1.0 / (planeDimensionsPixel.x-1.0);
        float dy = 1.0 / (planeDimensionsPixel.y-1.0);

        float x = x_frac;
        float y = y_frac;

        int i = int(floor(x / dx));
        int j = int(floor(y / dy));

        float t_x = (x - (float(i) * dx)) / dx;
        float t_y = (y - (float(j) * dy)) / dy;

        vec4 v_00 = texelFetch(texture, ivec3(i+0+x_offset, j+0+y_offset, z_layer), 0);
        vec4 v_01 = texelFetch(texture, ivec3(i+0+x_offset, j+1+y_offset, z_layer), 0);
        vec4 v_10 = texelFetch(texture, ivec3(i+1+x_offset, j+0+y_offset, z_layer), 0);
        vec4 v_11 = texelFetch(texture, ivec3(i+1+x_offset, j+1+y_offset, z_layer), 0);

        //interpolate 2 points along y axis using t_y
        vec4 v_0 = mix(v_00, v_01, t_y);
        vec4 v_1 = mix(v_10, v_11, t_y);

        //interpolate 1 points along x axis using t_x
        vec4 v = mix(v_0, v_1, t_x);
        
        return v;
    }

    float InterpolateScalarWrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component){
        return forward ? InterpolateScalar(displayedTexture, x_frac, y_frac, x_virtual, y_virtual, z_layer, component)
        : InterpolateScalar(displayedTextureBackwards, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
    }

    vec4 InterpolateVec4Wrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer){
        return forward ? InterpolateVec4(displayedTexture,x_frac, y_frac, x_virtual, y_virtual, z_layer)
        : InterpolateVec4(displayedTextureBackwards,x_frac, y_frac, x_virtual, y_virtual, z_layer);
    }

`,j3=t=>t[0],xS=j3`

    float InterpolateScalar(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);
    float InterpolateScalarWrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4Wrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);

`,Kf=t=>t[0];class yS{constructor(e,n,i,r,o,s){this.renderer_id=e,this.renderer=n,this.simulationParameters=i,this.colorMaps=r,this.scene=o,this.useAnglePlane=s}getPlaneDimensionX(){return this.useAnglePlane?this.simulationParameters.angle_pixels_x:this.simulationParameters.domain_pixels_x}getPlaneDimensionY(){return this.useAnglePlane?this.simulationParameters.angle_pixels_y:this.simulationParameters.domain_pixels_y}initialize(){console.warn("INITIALIZE TextureRenderer"),this.width=100,this.height=100,this.generateUniforms(),this.textured_material=new Mi({uniforms:this.uniforms,fragmentShader:this.fragmentShader(),vertexShader:this.vertexShader(),glslVersion:Du}),this.textured_material.transparent=!0,this.textured_material.opacity=.5,this.initializeTexturedGeometry()}initializeTexturedGeometry(){console.error("initializeTexturedGeometry not defined")}changeDisplayedTexture(e){this.displayedTexture=e}changeDisplayedTextureBackwards(e){this.displayedTextureBackwards=e}updateTexturedMesh(){this.setAdditionalUniforms(),this.textured_mesh.material.uniforms.mu.value=this.simulationParameters.mu,this.textured_mesh.material.uniforms.angular_velocity.value=this.simulationParameters.angular_velocity,this.textured_mesh.material.uniforms.primary_x.value=this.simulationParameters.getPrimaryX(),this.textured_mesh.material.uniforms.secondary_x.value=this.simulationParameters.getSecondaryX(),this.textured_mesh.material.uniforms.primary_mass.value=this.simulationParameters.getPrimaryMass(),this.textured_mesh.material.uniforms.secondary_mass.value=this.simulationParameters.getSecondaryMass(),this.textured_mesh.material.uniforms.planeCornerBL.value.x=this.simulationParameters.domain_min_x,this.textured_mesh.material.uniforms.planeCornerBL.value.y=this.simulationParameters.domain_min_y,this.textured_mesh.material.uniforms.planeDimensions.value.x=this.simulationParameters.domain_dimension_x,this.textured_mesh.material.uniforms.planeDimensions.value.y=this.simulationParameters.domain_dimension_y,this.textured_mesh.material.uniforms.planeDimensionsPixel.value.x=this.getPlaneDimensionX(),this.textured_mesh.material.uniforms.planeDimensionsPixel.value.y=this.getPlaneDimensionY()}generateUniforms(){this.uniforms={mu:{type:"float",value:.1},angular_velocity:{type:"float",value:1},primary_x:{type:"float",value:0},secondary_x:{type:"float",value:0},primary_mass:{type:"float",value:0},secondary_mass:{type:"float",value:0},planeCenter:{type:"vec2",value:new ge(0,0)},planeCornerBL:{type:"vec2",value:new ge(-1,-1)},planeDimensions:{type:"vec2",value:new ge(2,2)},planeDimensionsPixel:{type:"vec2",value:new ge(100,100)}},this.addAdditionalUniforms()}vertexShader(){return Kf`
        varying vec2 vUv; 
    
        void main() {
          vUv = uv; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
        `}fragmentShader(){return""+this.getUniformsString()+vS+`
`+K0+`
`+xS+`
`+Kf`

        varying vec2 vUv;
        out vec4 outputColor;

        const float G = 1.0;//TODO
  
        void RenderSpecializedMode(float x_frac, float y_frac);
        vec3 mapScalarToColor(float scalar);
        vec3 mapScalarToColorWithInterval(float scalar, float minValue, float maxValue);
        vec3 normalMappingVec2(vec2 vector);
        vec3 normalMappingVec3(vec3 vector);

        void main() {

            //coordinates as fractions of texture starting bottom left
            float x_frac = vUv.x;
            float y_frac = vUv.y;

            //change coordinate directions if theta down
            if(is_aux_view && is_plane && theta_down){
                x_frac = 1.0-vUv.y;
                y_frac = vUv.x;
            }

            //coordinates in pixel in virtual texture starting bottom left
            int x_pixel = int(round(x_frac * (planeDimensionsPixel.x-1.0)));
            int y_pixel = int(round(y_frac * (planeDimensionsPixel.y-1.0)));
            int x_pixel_total = int(round(x_frac * (2.0*planeDimensionsPixel.x-1.0)));//TODO: const 2.0
            int y_pixel_total = int(round(y_frac * (2.0*planeDimensionsPixel.y-1.0)));//TODO: const 2.0

            int x_offset = rendering_raw_mode_x_texture_index * int(planeDimensionsPixel.x);
            int y_offset = rendering_raw_mode_y_texture_index * int(planeDimensionsPixel.y);

            //testing correct pixel access if theta_down
            /*
            if(x_pixel < 10 && y_pixel < 10){
                outputColor = vec4(0.0, 1.0, 0.0, 1.0);                
                return;
            }
            if(x_pixel < 10 && y_pixel > 90){
                outputColor = vec4(0.0, 0.0, 1.0, 1.0);                
                return;
            }
            */

            ivec3 pointer;
            vec4 data;
            outputColor = vec4(0.0, 0.0, 0.0, 1.0);
            switch (rendering_texture_mode) {
                case 0://specialized
                    RenderSpecializedMode(x_frac, y_frac);
                    break;
                case 1://raw texture output of virtual texture
                    pointer = ivec3(x_pixel+x_offset, y_pixel+y_offset, rendering_raw_mode_layer);
                    data = rendering_forward ? texelFetch(displayedTexture, pointer, 0) : texelFetch(displayedTextureBackwards, pointer, 0);
                    outputColor = vec4(data.x, data.y, data.z, data.a);
                    break;
                case 2://raw texture output of all virtual textures
                    pointer = ivec3(x_pixel_total, y_pixel_total, rendering_raw_mode_layer);
                    data = rendering_forward ? texelFetch(displayedTexture, pointer, 0) : texelFetch(displayedTextureBackwards, pointer, 0);
                    outputColor = vec4(data.x, data.y, data.z, data.a);
                    break;
            }
        `+this.fragmentShaderMethodComputation()+Kf`
        }   
        
        void RenderSpecializedMode(float x_frac, float y_frac){
            int x_virtual = 0;
            int y_virtual = 0;
            int z_layer = 0;
            int component = 0;
            bool forward = rendering_forward;
            vec3 col_forward;
            vec3 col_backwards;
            outputColor = vec4(1.0, 0.0, 1.0, 1.0);

            float scalar;
            vec4 data;
            vec4 data_seeds;
            switch (rendering_specialized_mode) {
                case 0://gravitational force (normal)
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = 0;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    outputColor = vec4(normalMappingVec2(vec2(data.x, data.y)), opacity);
                    break;
                case 1://gravitational force (magnitude)
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = 0;
                    component = 3;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColor(scalar), opacity);
                    break;
                case 2://TEXTURE_MODE_SPECIALIZED_RETURN_ADVECTION_TIME
                    int x_pixel = int(round(x_frac * (planeDimensionsPixel.x-1.0)));
                    int y_pixel = int(round(y_frac * (planeDimensionsPixel.y-1.0)));
                    x_virtual = 0;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = 1;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColor(scalar), opacity);
                    //outputColor = vec4(scalar, 0.0, 0.0, opacity);

                    //ivec3 pointer = ivec3(x_pixel, y_pixel, rendering_raw_mode_layer);
                    //data = texelFetch(displayedTexture, pointer, 0);
                    //outputColor = vec4(data.x, data.y, data.z, data.a);

                    //if(scalar < 10.0){                        
                    //    outputColor = vec4(1.0, 0.0, 0.0, 1.0);
                    //}
                    break;
                case 3://TEXTURE_MODE_SPECIALIZED_RETURN_ARC_LENGTH
                    //int x_pixel = int(round(x_frac * (planeDimensionsPixel.x-1.0)));
                    //int y_pixel = int(round(y_frac * (planeDimensionsPixel.y-1.0)));
                    x_virtual = 0;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = 2;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColor(scalar), opacity);
                    //outputColor = vec4(scalar, 0.0, 0.0, opacity);

                    //ivec3 pointer = ivec3(x_pixel, y_pixel, rendering_raw_mode_layer);
                    //data = texelFetch(displayedTexture, pointer, 0);
                    //outputColor = vec4(data.x, data.y, data.z, data.a);

                    //if(scalar < 10.0){                        
                    //    outputColor = vec4(1.0, 0.0, 0.0, 1.0);
                    //}
                    break;
                case 4://TEXTURE_MODE_SPECIALIZED_RETURN_POSITION
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    //outputColor = vec4(normalMappingVec2(data.xy), opacity);
                    outputColor = vec4(normalMappingVec3(data.xyz), opacity);
                    break;
                case 5://TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    data_seeds = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer-1);
                    outputColor = vec4(normalMappingVec3(data.xyz - data_seeds.xyz), opacity);
                    break;
                case 6://TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE_MAGNITUDE
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    data_seeds = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer-1);
                    float magnitude = length(data.xyz - data_seeds.xyz);
                    outputColor = vec4(mapScalarToColor(magnitude), opacity);
                    break;                    
                case 7://TEXTURE_MODE_SPECIALIZED_RETURN_DIRECTION
                    x_virtual = 1;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    outputColor = vec4(normalMappingVec3(data.xyz), opacity);
                    break;
                case 8://TEXTURE_MODE_SPECIALIZED_RETURN_FTLE
                    x_virtual = 1;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = ftle_type;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);

                    if(false){//TODO parameter to use color map instead of red blue
                        //map to color map
                        outputColor = vec4(mapScalarToColor(scalar), opacity);
                    }
                    else{
                        //map to either red or blue
                        float t = (scalar - scalar_min) / (scalar_max - scalar_min);
                        t = clamp(t, 0.0, 1.0);
    
                        col_forward = vec3(1.0, 1.0-t, 1.0-t);
                        col_backwards = vec3(1.0-t, 1.0-t, 1.0);
                        outputColor = forward ? vec4(col_forward, opacity) : vec4(col_backwards, opacity);
                    }
                    break;
                case 9://TEXTURE_MODE_SPECIALIZED_RETURN_FTLE_BOTH
                    x_virtual = 1;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = ftle_type;
                    scalar = InterpolateScalarWrapper(true, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    float scalarBackwards = InterpolateScalarWrapper(false, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    float t_forward = (scalar - scalar_min) / (scalar_max - scalar_min);
                    float t_backwards = (scalarBackwards - scalar_min) / (scalar_max - scalar_min);
                    t_forward = clamp(t_forward, 0.0, 1.0);
                    t_backwards = clamp(t_backwards, 0.0, 1.0);

                    col_forward = vec3(1.0, 1.0-t_forward, 1.0-t_forward);
                    col_backwards = vec3(1.0-t_backwards, 1.0-t_backwards, 1.0);
                    outputColor = vec4(mix(col_forward, col_backwards, 0.5), opacity);
                    break;
                case 10://TEXTURE_MODE_SPECIALIZED_RETURN_SUCCESS
                    x_virtual = 0;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = 0;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColorWithInterval(scalar, 0.0, 1.0), opacity);
                    break;
                case 11://TEXTURE_MODE_SPECIALIZED_SEED_VELOCITY_MAGNITUDE
                    x_virtual = 1;
                    y_virtual = 0;
                    z_layer = 0;
                    component = 3;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColorWithInterval(scalar, scalar_min, scalar_max), opacity);
                    break;
            }

        }      

        vec3 mapScalarToColor(float scalar){
            int bin_count = 256;

            float t = (scalar - scalar_min) / (scalar_max - scalar_min);
            int bin_index = int(t * float(bin_count-1));
            bin_index = clamp(bin_index, 0, bin_count-1);
            vec3 color = texelFetch(colorMapsTexture, ivec2(bin_index, 0), 0).rgb;

            return vec3(color);
        }

        vec3 mapScalarToColorWithInterval(float scalar, float minValue, float maxValue){
            int bin_count = 256;

            float t = (scalar - minValue) / (maxValue - minValue);
            int bin_index = int(t * float(bin_count-1));
            bin_index = clamp(bin_index, 0, bin_count-1);
            vec3 color = texelFetch(colorMapsTexture, ivec2(bin_index, 0), 0).rgb;

            return vec3(color);
        }

        vec3 normalMappingVec2(vec2 vector){

            vec2 normal = normalize(vector);
            vec2 mapped = 0.5 * normal + 0.5;

            return vec3(mapped.x, mapped.y, 0.0);
        }

        vec3 normalMappingVec3(vec3 vector){

            vec3 normal = normalize(vector);
            vec3 mapped = 0.5 * normal + 0.5;

            return mapped;
        }

        `+`
`+gS}getUniformsString(){return Object.keys(this.uniforms).map(e=>`uniform ${this.uniforms[e].type} ${e};`).join(`
`)}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}fragmentShaderMethodComputation(){return`
        /*
        if(vUv.x > 0.0)
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        if(vUv.y > 0.0)
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
*/

        `}addAdditionalUniforms(){this.uniforms.displayedTexture={type:"sampler3D",value:null},this.uniforms.displayedTextureBackwards={type:"sampler3D",value:null},this.uniforms.colorMapsTexture={type:"sampler2D",value:null},this.uniforms.rendering_texture_mode={type:"int",value:parseInt(ii)},this.uniforms.rendering_specialized_mode={type:"int",value:parseInt(rd)},this.uniforms.return_layer={type:"int",value:z0},this.uniforms.rendering_raw_mode_layer={type:"int",value:0},this.uniforms.rendering_forward={type:"bool",value:!0},this.uniforms.rendering_raw_mode_x_texture_index={type:"int",value:0},this.uniforms.rendering_raw_mode_y_texture_index={type:"int",value:0},this.uniforms.scalar_min={type:"float",value:0},this.uniforms.scalar_max={type:"float",value:1},this.uniforms.opacity={type:"float",value:1},this.uniforms.ftle_type={type:"int",value:ld},this.uniforms.scale_vertices_by_velocity_magnitude={type:"bool",value:!1},this.uniforms.theta_down={type:"bool",value:!0},this.uniforms.is_aux_view={type:"bool",value:this.renderer_id==Au}}setAdditionalUniforms(){this.textured_mesh.material.uniforms.displayedTexture.value=this.displayedTexture,this.textured_mesh.material.uniforms.displayedTextureBackwards.value=this.displayedTextureBackwards,this.textured_mesh.material.uniforms.colorMapsTexture.value=this.colorMaps.texture,this.textured_mesh.material.uniforms.rendering_texture_mode.value=this.simulationParameters.rendering_texture_mode,this.textured_mesh.material.uniforms.rendering_specialized_mode.value=this.simulationParameters.rendering_specialized_mode,this.textured_mesh.material.uniforms.return_layer.value=this.simulationParameters.return_layer,this.textured_mesh.material.uniforms.rendering_forward.value=this.simulationParameters.rendering_forward,this.textured_mesh.material.uniforms.rendering_raw_mode_layer.value=this.simulationParameters.rendering_raw_mode_layer,this.textured_mesh.material.uniforms.rendering_raw_mode_x_texture_index.value=this.simulationParameters.rendering_raw_mode_x_texture_index,this.textured_mesh.material.uniforms.rendering_raw_mode_y_texture_index.value=this.simulationParameters.rendering_raw_mode_y_texture_index,this.textured_mesh.material.uniforms.scalar_min.value=this.simulationParameters.scalar_min,this.textured_mesh.material.uniforms.scalar_max.value=this.simulationParameters.scalar_max,this.textured_mesh.material.uniforms.opacity.value=this.simulationParameters.opacity,this.textured_mesh.material.uniforms.ftle_type.value=this.simulationParameters.rendering_ftle_type,this.textured_mesh.material.uniforms.scale_vertices_by_velocity_magnitude.value=this.shouldScaleVerticesByVelocityMagnitude(),this.textured_mesh.material.uniforms.theta_down.value=this.simulationParameters.auxGridDirection==Fr,console.warn("this.uniforms",this.uniforms)}shouldScaleVerticesByVelocityMagnitude(){return!1}}class Eg{constructor(){this.position=Ze(),this.direction=Ze(),this.arc_length=0,this.t=0}getPosTHREE(){return new k(this.position[0],this.position[1],this.position[2])}}class Zf{constructor(e,n){console.log("Streamline: initialize"),this.streamline_generator=e,this.simulationParameters=e.simulationParameters,this.scene=e.scene,this.multi=n,this.list_point_data=[],this.path=null,this.signum=1,this.arc_length=0,this.seed_position=xi(.75,.4,0),this.seed_direction=xi(0,0,.1),this.seed_velocity=xi(0,0,.1),this.existsInScene=!1}setSeed(e,n){Qn(this.seed_position,e),Qn(this.seed_direction,n)}setSeedPosition(e){Qn(this.seed_position,e)}setSeedDirection(e){Qn(this.seed_direction,e)}recalculate(e,n,i,r,o,s,a){this.setSeedPosition(xi(e,n,i)),this.setSeedDirection(xi(r,o,s)),this.updateSeedVelocity(),this.calculate()}recalculateFromOther(e){console.warn("OTHER:",e);var n=Ze(),i=Ze(),r=e.list_point_data[e.list_point_data.length-1];Qn(n,r.position),Qn(i,r.direction),Qn(this.seed_velocity,r.direction),this.setSeedPosition(n),this.setSeedDirection(i),this.calculate()}updateSeedVelocity(){if(console.warn("SEED DIRECTION: ",this.seed_direction),this.simulationParameters.use_constant_velocity){var e=Ze();pp(e,this.seed_direction),Mt(this.seed_velocity,e,this.simulationParameters.seed_energy)}else{var e=Ze();pp(e,this.seed_direction);var n=e[0],i=e[1];e[2];var r=this.seed_position[0],o=this.seed_position[1],s=this.seed_position[2],a=this.simulationParameters.mu,l=this.simulationParameters.angular_velocity,c=this.simulationParameters.seed_energy,u=-(1-a)/Math.sqrt((r+a)*(r+a)+o*o+s*s)-a/Math.sqrt((r-(1-a))*(r-(1-a))+o*o+s*s),d=o*n-r*i,f=-l*d,p=Math.sqrt(l*l*d*d-2*(u-c)),_=f+p,v=f-p,m=Math.max(_,v);console.warn("results for a",_,v),Mt(this.seed_velocity,e,m)}console.warn("SEED VELOCITY: ",this.seed_velocity)}calculate(){this.list_point_data=[],this.arc_length=0,this.t=0,this.success=!1;var e=new Eg;Qn(e.position,this.seed_position),Qn(e.direction,this.seed_velocity),this.list_point_data.push(e);var n=Ze(),i=Ze(),r=Ze(),o=Ze(),s=Ze(),a=Ze(),l=Ze(),c=Ze(),u=Ze(),d=Ze(),f=Ze(),p=Ze(),_=Ze(),v=Ze(),m=Ze(),h=Ze(),g=Ze(),x=Ze(),y=Ze(),w=Ze(),T=Ze(),b=Ze(),C=Ze(),M=Ze(),E=Ze(),U=Ze(),O=Ze(),D=Ze(),B=this.streamline_generator.simulationParameters.max_steps,F=this.streamline_generator.simulationParameters.step_size;this.streamline_generator.simulationParameters.termination_method;for(var X=this.seed_direction[2]>=0,K=0;K<B;K++){var N=e.position,H=e.direction,W=new Eg;this.list_point_data.push(W),Mt(i,this.streamline_generator.f_position(N,H,this.signum),F),Mt(h,this.streamline_generator.f_direction(N,H,this.signum),F),Mt(a,i,1/2),Mt(w,h,1/2),pn(p,N,a),pn(U,H,w),Mt(r,this.streamline_generator.f_position(p,U,this.signum),F),Mt(g,this.streamline_generator.f_direction(p,U,this.signum),F),Mt(l,r,1/2),Mt(T,g,1/2),pn(_,N,l),pn(O,H,l),Mt(o,this.streamline_generator.f_position(_,O,this.signum),F),Mt(x,this.streamline_generator.f_direction(_,O,this.signum),F),pn(v,N,o),pn(D,H,x),Mt(s,this.streamline_generator.f_position(v,D,this.signum),F),Mt(y,this.streamline_generator.f_direction(v,D,this.signum),F),Mt(c,i,1/6),Mt(b,h,1/6),Mt(u,r,1/3),Mt(C,g,1/3),Mt(d,o,1/3),Mt(M,x,1/3),Mt(f,s,1/6),Mt(E,y,1/6),Qn(n,c),Qn(m,b),pn(n,n,u),pn(m,m,C),pn(n,n,d),pn(m,m,M),pn(n,n,f),pn(m,m,E),pn(W.position,N,n),pn(W.direction,H,m);var re=O3(n);if(W.arc_length=e.arc_length+re,W.t=e.t+F,this.arc_length=W.arc_length,X){if(W.position[2]<0){X=!1,console.warn("multi a",this.multi),this.multi.list_point_data_returns.push(e),this.success=!0;return}}else if(W.position[2]>0){X=!0,console.warn("multi b",this.multi),this.multi.list_point_data_returns.push(e),this.success=!0;return}e=W}}build(){this.path=new C3;for(var e=1;e<this.list_point_data.length;e++){var n=this.list_point_data[e-1],i=this.list_point_data[e],r=new uS(n.getPosTHREE(),i.getPosTHREE());this.path.add(r)}var o=this.streamline_generator.simulationParameters.tube_radius,s=this.streamline_generator.simulationParameters.tube_num_sides,a=this.streamline_generator.simulationParameters.tube_segment_length,l=Math.ceil(this.arc_length/a);l=Math.min(l,this.streamline_generator.simulationParameters.tube_max_segments),this.geometry=new q0(this.path,l,o,s,!1),this.material=new Dr({color:16711680}),this.mesh=new _t(this.geometry,this.material)}}class Y3{constructor(e){console.log("MultipleReturnsStreamline: initialize"),this.streamline_generator=e,this.simulationParameters=e.simulationParameters,this.scene=e.scene,this.has_data=!1,this.initialize()}initialize(){this.list_streamlines=[],this.list_point_data_returns=[];var e=new Zf(this.streamline_generator,this);this.list_streamlines.push(e)}recalculateWithLastParameters(){if(!this.has_data){console.warn("recalculateWithLastParameters NO DATA YET");return}this.list_point_data_returns=[];var e=this.simulationParameters.termination_method,n=0,i=this.list_streamlines[n];for(i.updateSeedVelocity(),i.calculate(),e-=1,this.number_success=i.success?1:0,this.number_computed=1;e>0;){n+=1;var r=this.list_streamlines[n-1];if(!r.success)break;if(n==this.list_streamlines.length){var o=new Zf(this.streamline_generator,this);this.list_streamlines.push(o)}var i=this.list_streamlines[n];i.recalculateFromOther(r),e-=1,this.number_computed+=1,this.number_success+=i.success?1:0}}recalculateKeepPosition(){if(!this.has_data){console.warn("recalculateKeepPosition NO DATA YET");return}var e=this.list_streamlines[0],n=e.seed_position,i=this.simulationParameters.seed_direction_x,r=this.simulationParameters.seed_direction_y,o=this.simulationParameters.seed_direction_z,s=this.simulationParameters.seed_energy;this.recalculate(n[0],n[1],n[2],i,r,o,s)}recalculate(e,n,i,r,o,s,a){this.list_point_data_returns=[];var l=this.simulationParameters.termination_method,c=0,u=this.list_streamlines[c];for(u.recalculate(e,n,i,r,o,s,a),l-=1,this.number_success=u.success?1:0,this.number_computed=1;l>0;){c+=1;var d=this.list_streamlines[c-1];if(!d.success)break;if(c==this.list_streamlines.length){var f=new Zf(this.streamline_generator,this);this.list_streamlines.push(f)}var u=this.list_streamlines[c];u.recalculateFromOther(d),l-=1,this.number_computed+=1,this.number_success=u.success?this.number_success+1:this.number_success}this.has_data=!0}updateStreamlineModels(){console.warn("this.number_success",this.number_success);for(var e=0;e<this.list_streamlines.length;e++){var n=this.list_streamlines[e];n.existsInScene&&this.scene.remove(n.mesh);var i=e<this.number_success,r=e<this.number_computed,o=this.simulationParameters.tube_only_show_successful_returns?i:r;o&&(n.build(),this.scene.add(n.mesh),n.existsInScene=!0)}}}class q3{constructor(e,n){console.log("StreamlineGenerator: initialize"),this.simulationParameters=e,this.scene=n,this.initialize()}initialize(){this.list_multi=[];var e=new Y3(this);this.list_multi.push(e)}recalculateMulti(e,n,i,r,o,s,a,l){console.warn("### recalculateMulti"),this.list_multi[e].recalculate(n,i,r,o,s,a,l)}recalculateMultiKeepPosition(e){console.warn("### recalculateMultiAtLastPosition"),this.list_multi[e].recalculateKeepPosition()}recalculateMultiWithLastParameters(e){console.warn("### recalculateMultiWithLastParameters"),this.list_multi[e].recalculateWithLastParameters()}updateMultiModel(e){console.warn("### updateMultiModel"),this.list_multi[e].updateStreamlineModels()}f_position(e,n,i){var r=this.simulationParameters.angular_velocity,o=e[0],s=e[1],a=n[0],l=n[1],c=n[2],u=a+r*s,d=l-r*o,f=c,p=Ze();return p[0]=u*i,p[1]=d*i,p[2]=f*i,p}f_direction(e,n,i){var r=this.simulationParameters.angular_velocity,o=this.simulationParameters.mu,s=e[0],a=e[1],l=e[2],c=n[0],u=n[1],d=o+s,f=o-1,p=d-1,_=Math.pow(p*p+a*a+l*l,3/2),v=Math.pow(d*d+a*a+l*l,3/2),m=o*p/_-f*d/v,h=o*a/_-f*a/v,g=o*l/_-f*l/v,x=r*u-m,y=-r*c-h,w=-g,T=Ze();return T[0]=x*i,T[1]=y*i,T[2]=w*i,T}}class K3 extends yS{constructor(e,n,i,r,o,s){super(e,n,i,r,o,s),console.warn("CONSTRUCTOR: TextureRendererPlane")}initializeTexturedGeometry(){this.textured_plane_geometry=new ko(1,1),this.textured_mesh=new _t(this.textured_plane_geometry,this.textured_material),this.scene.add(this.textured_mesh)}updateTransform(e,n,i,r){this.textured_mesh.scale.set(i,r,1),this.textured_mesh.position.set(e,n,0)}addAdditionalUniforms(){super.addAdditionalUniforms(),this.uniforms.is_plane={type:"bool",value:!0}}}class Z3{constructor(e){this.bin_count=e,this.convertArray(),this.generateBins()}getArray(){return[]}convertArray(){var e=this.getArray();this.array_values=[],this.array_colors=[];for(var n=e.length/4,i=0;i<n;i++){var r=e[4*i],o=[e[4*i+1],e[4*i+2],e[4*i+3]];this.array_values.push(r),this.array_colors.push(o)}}generateBins(){this.bins=[];for(var e=0,n=0;n<this.bin_count;n++){var i=n/(this.bin_count-1),r=this.findLowerIndex(i,e);r==this.bin_count-1&&(r-=1);var o=r+1,s=this.array_values[r],a=this.array_values[o],l=this.array_colors[r],c=this.array_colors[o],u=a-s,d=(i-s)/u,f=(1-d)*l[0]+d*c[0],p=(1-d)*l[1]+d*c[1],_=(1-d)*l[2]+d*c[2],v=[f,p,_];this.bins.push(v),e=r}}findLowerIndex(e,n){for(var i=0,r=0;r<this.array_values.length;r++){var o=this.array_values[r];if(o>e)break;i=r}return i}}class J3 extends Z3{constructor(e){super(e)}getArray(){return[0,.267004,.004874,.329415,.003922,.26851,.009605,.335427,.007843,.269944,.014625,.341379,.011765,.271305,.019942,.347269,.015686,.272594,.025563,.353093,.019608,.273809,.031497,.358853,.023529,.274952,.037752,.364543,.027451,.276022,.044167,.370164,.031373,.277018,.050344,.375715,.035294,.277941,.056324,.381191,.039216,.278791,.062145,.386592,.043137,.279566,.067836,.391917,.047059,.280267,.073417,.397163,.05098,.280894,.078907,.402329,.054902,.281446,.08432,.407414,.058824,.281924,.089666,.412415,.062745,.282327,.094955,.417331,.066667,.282656,.100196,.42216,.070588,.28291,.105393,.426902,.07451,.283091,.110553,.431554,.078431,.283197,.11568,.436115,.082353,.283229,.120777,.440584,.086275,.283187,.125848,.44496,.090196,.283072,.130895,.449241,.094118,.282884,.13592,.453427,.098039,.282623,.140926,.457517,.101961,.28229,.145912,.46151,.105882,.281887,.150881,.465405,.109804,.281412,.155834,.469201,.113725,.280868,.160771,.472899,.117647,.280255,.165693,.476498,.121569,.279574,.170599,.479997,.12549,.278826,.17549,.483397,.129412,.278012,.180367,.486697,.133333,.277134,.185228,.489898,.137255,.276194,.190074,.493001,.141176,.275191,.194905,.496005,.145098,.274128,.199721,.498911,.14902,.273006,.20452,.501721,.152941,.271828,.209303,.504434,.156863,.270595,.214069,.507052,.160784,.269308,.218818,.509577,.164706,.267968,.223549,.512008,.168627,.26658,.228262,.514349,.172549,.265145,.232956,.516599,.176471,.263663,.237631,.518762,.180392,.262138,.242286,.520837,.184314,.260571,.246922,.522828,.188235,.258965,.251537,.524736,.192157,.257322,.25613,.526563,.196078,.255645,.260703,.528312,.2,.253935,.265254,.529983,.203922,.252194,.269783,.531579,.207843,.250425,.27429,.533103,.211765,.248629,.278775,.534556,.215686,.246811,.283237,.535941,.219608,.244972,.287675,.53726,.223529,.243113,.292092,.538516,.227451,.241237,.296485,.539709,.231373,.239346,.300855,.540844,.235294,.237441,.305202,.541921,.239216,.235526,.309527,.542944,.243137,.233603,.313828,.543914,.247059,.231674,.318106,.544834,.25098,.229739,.322361,.545706,.254902,.227802,.326594,.546532,.258824,.225863,.330805,.547314,.262745,.223925,.334994,.548053,.266667,.221989,.339161,.548752,.270588,.220057,.343307,.549413,.27451,.21813,.347432,.550038,.278431,.21621,.351535,.550627,.282353,.214298,.355619,.551184,.286275,.212395,.359683,.55171,.290196,.210503,.363727,.552206,.294118,.208623,.367752,.552675,.298039,.206756,.371758,.553117,.301961,.204903,.375746,.553533,.305882,.203063,.379716,.553925,.309804,.201239,.38367,.554294,.313725,.19943,.387607,.554642,.317647,.197636,.391528,.554969,.321569,.19586,.395433,.555276,.32549,.1941,.399323,.555565,.329412,.192357,.403199,.555836,.333333,.190631,.407061,.556089,.337255,.188923,.41091,.556326,.341176,.187231,.414746,.556547,.345098,.185556,.41857,.556753,.34902,.183898,.422383,.556944,.352941,.182256,.426184,.55712,.356863,.180629,.429975,.557282,.360784,.179019,.433756,.55743,.364706,.177423,.437527,.557565,.368627,.175841,.44129,.557685,.372549,.174274,.445044,.557792,.376471,.172719,.448791,.557885,.380392,.171176,.45253,.557965,.384314,.169646,.456262,.55803,.388235,.168126,.459988,.558082,.392157,.166617,.463708,.558119,.396078,.165117,.467423,.558141,.4,.163625,.471133,.558148,.403922,.162142,.474838,.55814,.407843,.160665,.47854,.558115,.411765,.159194,.482237,.558073,.415686,.157729,.485932,.558013,.419608,.15627,.489624,.557936,.423529,.154815,.493313,.55784,.427451,.153364,.497,.557724,.431373,.151918,.500685,.557587,.435294,.150476,.504369,.55743,.439216,.149039,.508051,.55725,.443137,.147607,.511733,.557049,.447059,.14618,.515413,.556823,.45098,.144759,.519093,.556572,.454902,.143343,.522773,.556295,.458824,.141935,.526453,.555991,.462745,.140536,.530132,.555659,.466667,.139147,.533812,.555298,.470588,.13777,.537492,.554906,.47451,.136408,.541173,.554483,.478431,.135066,.544853,.554029,.482353,.133743,.548535,.553541,.486275,.132444,.552216,.553018,.490196,.131172,.555899,.552459,.494118,.129933,.559582,.551864,.498039,.128729,.563265,.551229,.501961,.127568,.566949,.550556,.505882,.126453,.570633,.549841,.509804,.125394,.574318,.549086,.513725,.124395,.578002,.548287,.517647,.123463,.581687,.547445,.521569,.122606,.585371,.546557,.52549,.121831,.589055,.545623,.529412,.121148,.592739,.544641,.533333,.120565,.596422,.543611,.537255,.120092,.600104,.54253,.541176,.119738,.603785,.5414,.545098,.119512,.607464,.540218,.54902,.119423,.611141,.538982,.552941,.119483,.614817,.537692,.556863,.119699,.61849,.536347,.560784,.120081,.622161,.534946,.564706,.120638,.625828,.533488,.568627,.12138,.629492,.531973,.572549,.122312,.633153,.530398,.576471,.123444,.636809,.528763,.580392,.12478,.640461,.527068,.584314,.126326,.644107,.525311,.588235,.128087,.647749,.523491,.592157,.130067,.651384,.521608,.596078,.132268,.655014,.519661,.6,.134692,.658636,.517649,.603922,.137339,.662252,.515571,.607843,.14021,.665859,.513427,.611765,.143303,.669459,.511215,.615686,.146616,.67305,.508936,.619608,.150148,.676631,.506589,.623529,.153894,.680203,.504172,.627451,.157851,.683765,.501686,.631373,.162016,.687316,.499129,.635294,.166383,.690856,.496502,.639216,.170948,.694384,.493803,.643137,.175707,.6979,.491033,.647059,.180653,.701402,.488189,.65098,.185783,.704891,.485273,.654902,.19109,.708366,.482284,.658824,.196571,.711827,.479221,.662745,.202219,.715272,.476084,.666667,.20803,.718701,.472873,.670588,.214,.722114,.469588,.67451,.220124,.725509,.466226,.678431,.226397,.728888,.462789,.682353,.232815,.732247,.459277,.686275,.239374,.735588,.455688,.690196,.24607,.73891,.452024,.694118,.252899,.742211,.448284,.698039,.259857,.745492,.444467,.701961,.266941,.748751,.440573,.705882,.274149,.751988,.436601,.709804,.281477,.755203,.432552,.713725,.288921,.758394,.428426,.717647,.296479,.761561,.424223,.721569,.304148,.764704,.419943,.72549,.311925,.767822,.415586,.729412,.319809,.770914,.411152,.733333,.327796,.77398,.40664,.737255,.335885,.777018,.402049,.741176,.344074,.780029,.397381,.745098,.35236,.783011,.392636,.74902,.360741,.785964,.387814,.752941,.369214,.788888,.382914,.756863,.377779,.791781,.377939,.760784,.386433,.794644,.372886,.764706,.395174,.797475,.367757,.768627,.404001,.800275,.362552,.772549,.412913,.803041,.357269,.776471,.421908,.805774,.35191,.780392,.430983,.808473,.346476,.784314,.440137,.811138,.340967,.788235,.449368,.813768,.335384,.792157,.458674,.816363,.329727,.796078,.468053,.818921,.323998,.8,.477504,.821444,.318195,.803922,.487026,.823929,.312321,.807843,.496615,.826376,.306377,.811765,.506271,.828786,.300362,.815686,.515992,.831158,.294279,.819608,.525776,.833491,.288127,.823529,.535621,.835785,.281908,.827451,.545524,.838039,.275626,.831373,.555484,.840254,.269281,.835294,.565498,.84243,.262877,.839216,.575563,.844566,.256415,.843137,.585678,.846661,.249897,.847059,.595839,.848717,.243329,.85098,.606045,.850733,.236712,.854902,.616293,.852709,.230052,.858824,.626579,.854645,.223353,.862745,.636902,.856542,.21662,.866667,.647257,.8584,.209861,.870588,.657642,.860219,.203082,.87451,.668054,.861999,.196293,.878431,.678489,.863742,.189503,.882353,.688944,.865448,.182725,.886275,.699415,.867117,.175971,.890196,.709898,.868751,.169257,.894118,.720391,.87035,.162603,.898039,.730889,.871916,.156029,.901961,.741388,.873449,.149561,.905882,.751884,.874951,.143228,.909804,.762373,.876424,.137064,.913725,.772852,.877868,.131109,.917647,.783315,.879285,.125405,.921569,.79376,.880678,.120005,.92549,.804182,.882046,.114965,.929412,.814576,.883393,.110347,.933333,.82494,.88472,.106217,.937255,.83527,.886029,.102646,.941176,.845561,.887322,.099702,.945098,.85581,.888601,.097452,.94902,.866013,.889868,.095953,.952941,.876168,.891125,.09525,.956863,.886271,.892374,.095374,.960784,.89632,.893616,.096335,.964706,.906311,.894855,.098125,.968627,.916242,.896091,.100717,.972549,.926106,.89733,.104071,.976471,.935904,.89857,.108131,.980392,.945636,.899815,.112838,.984314,.9553,.901065,.118128,.988235,.964894,.902323,.123941,.992157,.974417,.90359,.130215,.996078,.983868,.904867,.136897,1,.993248,.906157,.143936]}}class Q3{constructor(){this.initialize(256)}initialize(e){this.bin_count=e,this.colorMapViridis=new J3(e),this.listColorMaps=[this.colorMapViridis,this.colorMapViridis],this.generateTexture()}generateTexture(){const e=this.bin_count,n=this.listColorMaps.length,i=e*n,r=new Float32Array(4*i);for(var o=0,s=0;s<this.listColorMaps.length;s++)for(var a=this.listColorMaps[s],l=0;l<a.bins.length;l++){var c=a.bins[l];r[o]=c[0],r[o+1]=c[1],r[o+2]=c[2],r[o+3]=1,o+=4}this.texture=new p3(r,e,n,Dn,ri),this.texture.needsUpdate=!0}}class SS{constructor(e,n,i,r,o,s,a,l){console.warn("CONSTRUCTOR SceneWrapperVisualization"),this.renderer_id=e,this.renderer=n,this.scene=i,this.camera=r,this.controls=o,this.raycaster=s,this.mode_constant_direction=a,this.simulationParameters=po.CreateOrGetInstance(),this.colorMaps=new Q3,this.streamlineGenerator=new q3(this.simulationParameters,i),this.streamlineGenerator.initialize(),this.offscreenRendererSeeds=new xg(n,this.simulationParameters,l,this.mode_constant_direction),this.offscreenRendererSeedsBackwards=new xg(n,this.simulationParameters,l,this.mode_constant_direction),this.offscreenRendererFlowMap=new yg(n,this.simulationParameters,l,1),this.offscreenRendererFlowMapBackwards=new yg(n,this.simulationParameters,l,-1),this.OffscreenRendererFTLE=new Sg(n,this.simulationParameters,l),this.OffscreenRendererFTLEBackwards=new Sg(n,this.simulationParameters,l),this.offscreenRendererSeedsAndReturns=new gg(n,this.simulationParameters,l),this.offscreenRendererSeedsAndReturnsBackwards=new gg(n,this.simulationParameters,l),this.offscreenRendererGravitationalForce=new W3(n,this.simulationParameters,l),this.offscreenRendererFlowMap.link(this.offscreenRendererSeedsAndReturns),this.offscreenRendererFlowMapBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards),this.OffscreenRendererFTLE.link(this.offscreenRendererSeedsAndReturns),this.OffscreenRendererFTLEBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards),this.offscreenRendererGravitationalForce.link(this.offscreenRendererSeedsAndReturns),this.offscreenRendererSeeds.initialize(),this.offscreenRendererSeedsBackwards.initialize(),this.offscreenRendererSeedsAndReturns.initialize(),this.offscreenRendererSeedsAndReturnsBackwards.initialize(),this.offscreenRendererFlowMap.initialize(),this.offscreenRendererFlowMapBackwards.initialize(),this.OffscreenRendererFTLE.initialize(),this.OffscreenRendererFTLEBackwards.initialize(),this.offscreenRendererGravitationalForce.initialize(),this.textureRenderer=new K3(e,n,this.simulationParameters,this.colorMaps,i,l),this.activeBehaviorLastFrame=null}initialize(){this.initializeLight(),this.initializeAxesArrows(),this.initializePlane(),this.initializeTexturedPlane(),this.initializeClickedPositionMarker(),this.initializeEventListeners(),this.initializeAdditionalObjects()}initializeAdditionalObjects(){console.error("initializeAdditionalObjects not defined")}initializeExampleCube(){var e=new sa,n=new yl({color:65280});this.example_cube_mesh=new _t(e,n),this.scene.add(this.example_cube_mesh)}initializeLight(){this.directionalLight=new hS(16777215,1),this.directionalLight.position.set(0,0,0),this.camera.add(this.directionalLight),this.directionalLightTarget=new $t,this.camera.add(this.directionalLightTarget),this.directionalLightTarget.position.set(0,0,-1),this.directionalLight.target=this.directionalLightTarget;const e=new pS(4210752);this.scene.add(e)}initializeAxesArrows(){console.warn("#999 initializeAxesArrows");var e=xi(-4,-4,0),n=8,i=.02,r=5,o=.05,s=!1;this.objectAxes=new mp(e,n,n,n,i,r,o,s),this.objectAxes.addToScene(this.scene)}initializePlane(){this.plane_geometry=new ko(256,256),this.plane_material=new yl({color:16776960,side:vi}),this.plane_material.transparent=!0,this.plane_material.opacity=.5,this.plane_mesh=new _t(this.plane_geometry,this.plane_material)}initializeTexturedPlane(){this.textureRenderer.initialize()}initializeClickedPositionMarker(){var e=1;this.clicked_geometry=new ji(e),this.clicked_material=new Dr({color:0}),this.clicked_mesh=new _t(this.clicked_geometry,this.clicked_material),this.clicked_mesh.position.set(0,0,1e4),this.scene.add(this.clicked_mesh),this.return_1_geometry=new ji(e),this.return_1_material=new Dr({color:16711935}),this.return_1_mesh=new _t(this.return_1_geometry,this.return_1_material),this.return_1_mesh.position.set(0,0,1e4),this.scene.add(this.return_1_mesh),this.return_2_geometry=new ji(e),this.return_2_material=new Dr({color:65535}),this.return_2_mesh=new _t(this.return_2_geometry,this.return_2_material),this.return_2_mesh.position.set(0,0,1e4),this.scene.add(this.return_2_mesh)}initializeEventListeners(){this.renderer.domElement.addEventListener("click",e=>{this.simulationParameters.activeBehavior!=wo&&(this.clickedMousePositionNDC=_g(this.renderer.domElement,e),this.newClickedPosition=!0)},!1),this.renderer.domElement.addEventListener("mousemove",e=>{this.simulationParameters.activeBehavior!=wo&&e.buttons&1&&(this.clickedMousePositionNDC=_g(this.renderer.domElement,e),this.newClickedPosition=!0)},!1)}getTexturedPlaneMinX(){console.error("getTexturedPlaneMinX not defined")}getTexturedPlaneMaxX(){console.error("getTexturedPlaneMaxX not defined")}getTexturedPlaneMinY(){console.error("getTexturedPlaneMinY not defined")}getTexturedPlaneMaxY(){console.error("getTexturedPlaneMaxY not defined")}getDefaultCameraDistance(){console.error("getTexturedPlaneMaxY not defined")}rayCastAndMovePosition(e){console.error("rayCastAndMovePosition not defined")}updateParametersData(e,n,i,r,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y){this.simulationParameters.mu=parseFloat(e),this.simulationParameters.angular_velocity=parseFloat(n),this.simulationParameters.use_constant_velocity=i,this.simulationParameters.seed_energy=parseFloat(r),this.simulationParameters.seed_position_x=parseFloat(l),this.simulationParameters.seed_position_y=parseFloat(c),this.simulationParameters.setSeedDirection(parseFloat(o),parseFloat(s),parseFloat(a)),this.simulationParameters.step_size=parseFloat(u),this.simulationParameters.max_steps=parseInt(d),this.simulationParameters.termination_method=parseInt(f),this.simulationParameters.domain_min_x=parseFloat(p),this.simulationParameters.domain_max_x=parseFloat(_),this.simulationParameters.domain_dimension_x=this.simulationParameters.domain_max_x-this.simulationParameters.domain_min_x,this.simulationParameters.domain_pixels_x=parseInt(v),this.simulationParameters.domain_min_y=parseFloat(m),this.simulationParameters.domain_max_y=parseFloat(h),this.simulationParameters.domain_dimension_y=this.simulationParameters.domain_max_y-this.simulationParameters.domain_min_y,this.simulationParameters.domain_pixels_y=parseInt(g),this.simulationParameters.angle_pixels_x=parseInt(x),this.simulationParameters.angle_pixels_y=parseInt(y)}updateParametersRendering(e,n,i,r,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T,b){this.simulationParameters.max_radius_bodies=e,this.simulationParameters.radius_center_of_mass=n,this.simulationParameters.radius_clicked_position=i,this.simulationParameters.radius_clicked_position_aux=r,this.simulationParameters.radius_clicked_position_aux_sphere=o,this.simulationParameters.rendering_ftle_type=parseInt(s),this.simulationParameters.rendering_texture_mode=parseInt(a),this.simulationParameters.rendering_specialized_mode=parseInt(l),this.simulationParameters.return_layer=parseInt(c),this.simulationParameters.rendering_forward=u,this.simulationParameters.rendering_raw_mode=parseInt(d),this.simulationParameters.rendering_raw_mode_layer=parseInt(f),this.simulationParameters.rendering_raw_mode_x_texture_index=parseInt(p),this.simulationParameters.rendering_raw_mode_y_texture_index=parseInt(_),this.simulationParameters.scalar_min=parseFloat(v),this.simulationParameters.scalar_max=parseFloat(m),this.simulationParameters.opacity=parseFloat(h),this.simulationParameters.tube_segment_length=parseFloat(g),this.simulationParameters.tube_max_segments=parseInt(x),this.simulationParameters.tube_num_sides=parseInt(y),this.simulationParameters.tube_radius=parseFloat(w),this.simulationParameters.tube_only_show_successful_returns=T,this.simulationParameters.rendering_scale_vertices=b}updateParametersActiveBehavior(e,n){this.simulationParameters.activeBehavior=e,this.simulationParameters.linkedViewsActive=n}computeStuff(){this.offscreenRendererSeeds.updateTexturedPlane(),this.offscreenRendererSeeds.compute(),this.offscreenRendererSeedsAndReturns.updateTexturedPlane(),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererSeeds.renderTarget.texture,0),this.offscreenRendererSeedsBackwards.updateTexturedPlane(),this.offscreenRendererSeedsBackwards.compute(),this.offscreenRendererSeedsAndReturnsBackwards.updateTexturedPlane(),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererSeedsBackwards.renderTarget.texture,0),this.offscreenRendererFlowMap.updateTexturedPlane(),this.offscreenRendererFlowMap.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture,1),this.OffscreenRendererFTLE.updateTexturedPlane(),this.OffscreenRendererFTLE.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture,1),this.offscreenRendererFlowMapBackwards.updateTexturedPlane(),this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture,1),this.OffscreenRendererFTLEBackwards.updateTexturedPlane(),this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture,1),this.simulationParameters.termination_method!=ad&&(this.offscreenRendererFlowMap.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture,2),this.OffscreenRendererFTLE.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture,2),this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture,2),this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture,2)),this.offscreenRendererGravitationalForce.updateTexturedPlane(),this.offscreenRendererGravitationalForce.compute(),this.computeAdditionalStuff()}computeAdditionalStuff(){}updateTexturedPlane(){var e=this.getTexturedPlaneMinX(),n=this.getTexturedPlaneMaxX(),i=this.getTexturedPlaneMinY(),r=this.getTexturedPlaneMaxY(),o=n-e,s=r-i,a=.5*(e+n),l=.5*(i+r);this.textureRenderer.updateTransform(a,l,o,s),this.changeDisplayedTexture(this.textureRenderer),this.textureRenderer.updateTexturedMesh()}updateAxes(){console.error("updateAxes not defined")}alignCameraWithDomain(e,n,a,l,c,u){var a=this.getTexturedPlaneMinX(),l=this.getTexturedPlaneMaxX(),c=this.getTexturedPlaneMinY(),u=this.getTexturedPlaneMaxY(),d=.5*(a+l),f=.5*(c+u);e.position.set(d,f,this.getDefaultCameraDistance()),n.target.set(d,f,0),e.up.set(0,1,0),console.log(e.position)}changeDisplayedTexture(e){switch(this.simulationParameters.rendering_texture_mode){case ii:this.changeDisplayedTextureSpecialized(e);break;case Mu:this.changeDisplayedTextureRaw(e);break;case C0:this.changeDisplayedTextureRaw(e);break;default:console.error("Error: Unknown rendering_texture_mode",this.simulationParameters.rendering_texture_mode);break}}changeDisplayedTextureSpecialized(e){var n,i;switch(this.simulationParameters.rendering_specialized_mode){case rd:n=this.offscreenRendererGravitationalForce,i=this.offscreenRendererGravitationalForce;break;case A9:n=this.offscreenRendererGravitationalForce,i=this.offscreenRendererGravitationalForce;break;case P0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case I0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case D0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case N0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case L0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case U0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case vl:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case Ya:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case O0:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;case od:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;default:console.error("Error: Unknown rendering_specialized_mode",this.simulationParameters.rendering_specialized_mode);break}e.changeDisplayedTexture(n.renderTarget.texture),e.changeDisplayedTextureBackwards(i.renderTarget.texture)}changeDisplayedTextureRaw(e){var n,i;switch(this.simulationParameters.rendering_raw_mode){case R9:n=this.offscreenRendererSeeds,i=this.offscreenRendererSeedsBackwards;break;case sd:n=this.offscreenRendererGravitationalForce,i=this.offscreenRendererGravitationalForce;break;case C9:n=this.offscreenRendererFlowMap,i=this.offscreenRendererFlowMapBackwards;break;case P9:n=this.offscreenRendererSeedsAndReturns,i=this.offscreenRendererSeedsAndReturnsBackwards;break;default:console.error("Error: Unknown rendering_raw_mode",this.simulationParameters.rendering_raw_mode);break}e.changeDisplayedTexture(n.renderTarget.texture),e.changeDisplayedTextureBackwards(i.renderTarget.texture)}updateClickedPosition(){var e=this.simulationParameters.getClickedPositionRadius(this.renderer_id);if(this.clicked_mesh.scale.set(e,e,e),this.return_1_mesh.scale.set(e,e,e),this.return_2_mesh.scale.set(e,e,e),this.clicked_mesh_spherical_view){var e=this.simulationParameters.radius_clicked_position_aux_sphere;this.clicked_mesh_spherical_view.scale.set(e,e,e)}}recalculateStreamlineFromSimulationParameters(){console.warn("recalculateStreamlineFromSimulationParameters");var e=this.simulationParameters.seed_position_x,n=this.simulationParameters.seed_position_y,i=0,r=this.simulationParameters.seed_direction_x,o=this.simulationParameters.seed_direction_y,s=this.simulationParameters.seed_direction_z,a=this.simulationParameters.seed_energy;console.warn("dir",r,o,s),this.streamlineGenerator.recalculateMulti(0,e,n,i,r,o,s,a),this.streamlineGenerator.updateMultiModel(0)}recalculateStreamlineAtPosition(e,n,i){console.warn("recalculateStreamlineAtPosition");var r=this.simulationParameters.seed_direction_x,o=this.simulationParameters.seed_direction_y,s=this.simulationParameters.seed_direction_z,a=this.simulationParameters.seed_energy;this.streamlineGenerator.recalculateMulti(0,e,n,i,r,o,s,a),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}recalculateStreamlineKeepPosition(){console.warn("recalculateStreamlineKeepPosition");var e=this.simulationParameters.seed_direction_x,n=this.simulationParameters.seed_direction_y,i=this.simulationParameters.seed_direction_z,r=this.simulationParameters.seed_energy;this.streamlineGenerator.recalculateMultiKeepPosition(0,e,n,i,r),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}recalculateStreamlineWithLastParameters(){console.warn("recalculateStreamlineWithLastParameters"),this.streamlineGenerator.recalculateMultiWithLastParameters(0),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}updateStreamlineModel(){this.streamlineGenerator.updateMultiModel(0)}repositionReturnSpheres(){if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length>0){var e=this.streamlineGenerator.list_multi[0].list_point_data_returns[0];this.return_1_mesh.position.set(e.position[0],e.position[1],0)}else this.return_1_mesh.position.set(0,0,1e4);if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length>1){var e=this.streamlineGenerator.list_multi[0].list_point_data_returns[1];this.return_2_mesh.position.set(e.position[0],e.position[1],0)}else this.return_2_mesh.position.set(0,0,1e4)}updateBehavior(){this.simulationParameters.activeBehavior!=this.activeBehaviorLastFrame&&(this.activeBehaviorLastFrame=this.simulationParameters.activeBehavior,this.simulationParameters.activeBehavior==wo&&(this.controls.noRotate=!1,this.controls_sphere&&(this.controls_sphere.noRotate=!1)),this.simulationParameters.activeBehavior==b9&&(this.controls.noRotate=!0,this.controls_sphere&&(this.controls_sphere.noRotate=!0)))}preRender(){this.newClickedPosition&&(this.newClickedPosition=!1,this.seed_changed=!0,this.rayCastAndMovePosition(this.clickedMousePositionNDC)),this.seed_changed&&(this.seed_changed=!1,this.simulationParameters.linkedViewsActive&&this.computeStuff(),this.recalculateStreamlineFromSimulationParameters(),this.repositionReturnSpheres(),this.repositionSeedSpheres())}repositionSeedSpheres(){console.error("repositionSeedSpheres not defined")}}class eI extends SS{constructor(e,n,i,r,o){super(FM,e,n,i,r,o,!0,!1),console.warn("CONSTRUCTOR SceneWrapperVisualizationMain")}initializeAdditionalObjects(){this.initializeBodies()}initializeBodies(){var e=1;this.primary_geometry=new ji(e),this.primary_material=new Dr({color:16711680}),this.primary_mesh=new _t(this.primary_geometry,this.primary_material),this.primary_mesh.position.set(1,0,0),this.scene.add(this.primary_mesh),this.secondary_geometry=new ji(e),this.secondary_material=new Dr({color:65280}),this.secondary_mesh=new _t(this.secondary_geometry,this.secondary_material),this.secondary_mesh.position.set(-1,0,0),this.scene.add(this.secondary_mesh),this.center_geometry=new ji(e),this.center_material=new Dr({color:255}),this.center_mesh=new _t(this.center_geometry,this.center_material),this.center_mesh.position.set(0,0,0),this.scene.add(this.center_mesh)}getTexturedPlaneMinX(){return this.simulationParameters.domain_min_x}getTexturedPlaneMaxX(){return this.simulationParameters.domain_max_x}getTexturedPlaneMinY(){return this.simulationParameters.domain_min_y}getTexturedPlaneMaxY(){return this.simulationParameters.domain_max_y}getDefaultCameraDistance(){return 11}updateVisualElements(){this.updateBodies(),this.updateClickedPosition(),this.updateStreamlineModel(),this.updateTexturedPlane(),this.updateAxes()}updateBodies(){var e=this.simulationParameters.getPrimaryRadius();this.primary_mesh.scale.set(e,e,e);var e=this.simulationParameters.getSecondaryRadius();this.secondary_mesh.scale.set(e,e,e);var e=this.simulationParameters.getCenterOfMassRadius();this.center_mesh.scale.set(e,e,e),this.primary_mesh.position.set(this.simulationParameters.getPrimaryX(),0,0),this.secondary_mesh.position.set(this.simulationParameters.getSecondaryX(),0,0)}updateAxes(){var e=!0,n=.5,i=this.simulationParameters.domain_min_x,r=this.simulationParameters.domain_max_x,o=this.simulationParameters.domain_min_y,s=this.simulationParameters.domain_max_y,a=.02,l=16711680,c=65280,u=255;this.objectAxes.rebuild(e,n,this.scene,this.simulationParameters,i,r,o,s,a,l,c,u)}rayCastAndMovePosition(e){var n=new ge;n.x=e.x,n.y=e.y,this.raycaster.setFromCamera(n,this.camera);const i=this.raycaster.intersectObject(this.plane_mesh);i.length>0&&(this.simulationParameters.seed_position_x=i[0].point.x,this.simulationParameters.seed_position_y=i[0].point.y,Ct.emit(M9,{}))}repositionSeedSpheres(){this.clicked_mesh.position.set(this.simulationParameters.seed_position_x,this.simulationParameters.seed_position_y,0)}OnSeedDirectionChanged(){console.warn("OnSeedDirectionChanged"),this.seed_changed=!0}}class Z0 extends S.Component{constructor(n){super(n);Ye(this,"handleResize",()=>{console.log("handleResize"),this.updateCanvasSize()});Ye(this,"handleEventCameraUpdate",()=>{console.log("handleEventCameraUpdate"),this.updateControls()});Ye(this,"renderLoop",()=>{this.updateParametersActiveBehavior(),this.sceneWrapper.updateBehavior(),this.sceneWrapper.preRender(),this.active_controls.update(),this.renderer.render(this.active_scene,this.active_camera),requestAnimationFrame(this.renderLoop)});console.warn("CONSTRUCTOR ThreeContainer")}componentDidMount(){console.warn("ThreeScene::componentDidMount"),this.list_cameras=[],this.list_controls=[],this.initializeScene(),this.initializeRenderer(),this.initializeCamera(),this.initializeControls(),this.initializeRayCaster(),this.initializeEventHandlers(),this.initializeAdditional(),this.updateCanvasSize(),this.updateControls(),this.updateParameters(),this.computeStuff(),this.updateVisualElements(),this.alignCameraWithDomain(),this.renderLoop()}initializeScene(){this.scene=new X0,this.scene.background=new tt(16777215),this.active_scene=this.scene}initializeRenderer(){this.renderer=new h3({antialias:!0}),this.renderer.setSize(10,10),this.mount.appendChild(this.renderer.domElement)}initializeCamera(){this.camera=new vn(75,1,.01,100),this.camera.position.z=11,this.scene.add(this.camera),this.active_camera=this.camera,this.list_cameras.push(this.camera)}initializeControls(){this.controls=new mS(this.camera,this.renderer.domElement),this.controls.update(),this.active_controls=this.controls,this.list_controls.push(this.controls)}initializeRayCaster(){this.raycaster=new D3}initializeEventHandlers(){window.addEventListener("resize",this.handleResize),Ct.on(E9,this.handleResize),Ct.on(T9,this.handleEventCameraUpdate)}initializeAdditional(){console.error("initializeAdditional not defined")}loadScene(){console.error("loadScene not defined")}updateCanvasSize(){var n=this.renderer.domElement,i=this.renderer.domElement.parentElement;n.style.width="100%",n.style.height="100%";for(var r=i.clientWidth,o=i.clientHeight,s=0;s<this.list_cameras.length;s++){var a=this.list_cameras[s];a.aspect=r/o,a.updateProjectionMatrix()}for(var s=0;s<this.list_controls.length;s++){var l=this.list_controls[s];l.handleResize(),l.update()}this.renderer.setSize(r,o,!1),this.renderer.render(this.active_scene,this.active_camera),console.warn("RESIZE")}updateControls(){this.updateControlsInstance(this.controls)}updateControlsInstance(n){const{uiState:i}=this.context;n.rotateSpeed=i.UI_STATE_CAMERA_CONTROLS_ROTATESPEED*5,n.panSpeed=i.UI_STATE_CAMERA_CONTROLS_PANSPEED*.3,n.zoomSpeed=i.UI_STATE_CAMERA_CONTROLS_ZOOMSPEED*1.2,n.update()}updateParameters(){this.updateParametersData(),this.updateParametersRendering(),this.updateParametersActiveBehavior()}computeStuff(){console.error("computeStuff not defined")}updateVisualElements(){console.error("updateVisualElements not defined")}writeSeedDataToUI(){console.warn("writeSeedDataToUI",this.sceneWrapper.simulationParameters.seed_position_x,this.sceneWrapper.simulationParameters.seed_position_y);const{uiState:n,setUiState:i}=this.context;i({UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X:this.sceneWrapper.simulationParameters.seed_direction_x,UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y:this.sceneWrapper.simulationParameters.seed_direction_y,UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z:this.sceneWrapper.simulationParameters.seed_direction_z,UI_STATE_DATA_PHYSICS_SEED_POSITION_X:this.sceneWrapper.simulationParameters.seed_position_x,UI_STATE_DATA_PHYSICS_SEED_POSITION_Y:this.sceneWrapper.simulationParameters.seed_position_y})}updateParametersData(){const{uiState:n}=this.context;var i=n.UI_STATE_DATA_PHYSICS_MU,r=n.UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY,o=n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY,s=n.UI_STATE_DATA_PHYSICS_SEED_ENERGY,a=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X,l=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y,c=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z,u=n.UI_STATE_DATA_PHYSICS_SEED_POSITION_X,d=n.UI_STATE_DATA_PHYSICS_SEED_POSITION_Y,f=n.UI_STATE_DATA_INTEGRATION_STEP_SIZE,p=n.UI_STATE_DATA_INTEGRATION_MAX_STEPS,_=n.UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD,v=n.UI_STATE_DATA_DOMAIN_MIN_X,m=n.UI_STATE_DATA_DOMAIN_MAX_X,h=n.UI_STATE_DATA_DOMAIN_PIXELS_X,g=n.UI_STATE_DATA_DOMAIN_MIN_Y,x=n.UI_STATE_DATA_DOMAIN_MAX_Y,y=n.UI_STATE_DATA_DOMAIN_PIXELS_Y,w=n.UI_STATE_DATA_ANGLE_PIXELS_X,T=n.UI_STATE_DATA_ANGLE_PIXELS_Y;this.sceneWrapper.updateParametersData(i,r,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T)}updateParametersRendering(){const{uiState:n}=this.context;var i=n.UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES,r=n.UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS,o=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS,s=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX,a=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE,l=n.UI_STATE_RENDERING_FTLE_TYPE,c=n.UI_STATE_RENDERING_TEXTURE_MODE,u=n.UI_STATE_RENDERING_SPECIALIZED_MODE,d=n.UI_STATE_RENDERING_RETURN_NUMBER,f=n.UI_STATE_RENDERING_DIRECTION,p=n.UI_STATE_RENDERING_RAW_MODE,_=n.UI_STATE_RENDERING_RAW_MODE_LAYER,v=n.UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX,m=n.UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX,h=n.UI_STATE_RENDERING_SCALAR_MIN,g=n.UI_STATE_RENDERING_SCALAR_MAX,x=n.UI_STATE_RENDERING_OPACITY,y=n.UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH,w=n.UI_STATE_RENDERING_TUBE_MAX_SEGMENTS,T=n.UI_STATE_RENDERING_TUBE_NUM_SIDES,b=n.UI_STATE_RENDERING_TUBE_RADIUS,C=n.UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS,M=n.UI_STATE_RENDERING_SCALE_VERTICES;this.sceneWrapper.updateParametersRendering(i,r,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T,b,C,M)}updateParametersActiveBehavior(){const{uiState:n}=this.context;var i=n.UI_STATE_ACTIVE_BEHAVIOR,r=n.UI_STATE_LINKED_VIEWS_ACTIVE;this.sceneWrapper.updateParametersActiveBehavior(i,r),this.sceneWrapper.updateBehavior()}alignCameraWithDomain(){this.sceneWrapper.alignCameraWithDomain(this.camera,this.controls),console.log(this.camera.position)}render(){return L.jsx("div",{className:"parent h-full w-full p-2",children:L.jsx("div",{className:"child flex flex-1 h-full w-full",ref:n=>{this.mount=n}})})}}Ye(Z0,"contextType",ui);class tI extends Z0{constructor(n){super(n);Ye(this,"handleEventDataUpdate",()=>{console.log("handleEventDataUpdate"),this.updateParametersData(),this.computeStuff(),this.updateVisualElements()});Ye(this,"handleEventRenderingUpdate",()=>{console.log("handleEventRenderingUpdate"),this.updateParametersRendering(),this.updateVisualElements()});Ye(this,"handleEventAlignCamera",()=>{console.log("handleEventAlignCamera"),this.alignCameraWithDomain()});Ye(this,"handleEventSeedDirectionChanged",()=>{console.log("handleEventSeedDirectionChanged"),this.sceneWrapper.OnSeedDirectionChanged(),this.writeSeedDataToUI()});this.auxRef=n.auxRef,console.warn("CONSTRUCTOR ThreeContainerMain")}initializeAdditional(){Ct.on(b0,this.handleEventDataUpdate),Ct.on(A0,this.handleEventRenderingUpdate),Ct.on(R0,this.handleEventAlignCamera),Ct.on(ip,this.handleEventSeedDirectionChanged),this.sceneWrapper=new eI(this.renderer,this.scene,this.camera,this.controls,this.raycaster),this.sceneWrapper.initialize()}computeStuff(){this.sceneWrapper.computeStuff(),this.sceneWrapper.recalculateStreamlineWithLastParameters(),this.sceneWrapper.recalculateStreamlineKeepPosition()}updateVisualElements(){this.sceneWrapper.updateVisualElements()}}const nI=t=>t[0];class iI extends yS{constructor(e,n,i,r,o,s){super(e,n,i,r,o,s),console.warn("CONSTRUCTOR: TextureRendererSphere")}initializeTexturedGeometry(){this.spherelikeGrid=new B3(this.scene,this.textured_material);var e=!1,n=100,i=100;this.spherelikeGrid.updateGrid(e,n,i),this.textured_mesh=this.spherelikeGrid.mesh}vertexShader(){return""+this.getUniformsString()+K0+`
`+xS+`
`+nI`
        varying vec2 vUv; 
    
        void main() {
            vUv = uv; 
            float a = 1.0;
            vec3 pos = position;

            //modify vertex position by scaling
            if(scale_vertices_by_velocity_magnitude){
                //coordinates as fractions of texture starting bottom left
                float x_frac = vUv.x;
                float y_frac = vUv.y;

                //coordinates in pixel in virtual texture starting bottom left
                int x_pixel = int(round(x_frac * (planeDimensionsPixel.x-1.0)));
                int y_pixel = int(round(y_frac * (planeDimensionsPixel.y-1.0)));
                int x_pixel_total = int(round(x_frac * (2.0*planeDimensionsPixel.x-1.0)));//TODO: const 2.0
                int y_pixel_total = int(round(y_frac * (2.0*planeDimensionsPixel.y-1.0)));//TODO: const 2.0

                int x_virtual = 1;
                int y_virtual = 0;
                int z_layer = 0;
                int component = 3;
                bool forward = rendering_forward;
                a = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);

                //pos = vec3(x_frac, y_frac, 0);
                pos *= a;
            }

            vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * modelViewPosition; 
        }
        `+`
`+gS}shouldScaleVerticesByVelocityMagnitude(){return this.simulationParameters.rendering_texture_mode==ii&&this.simulationParameters.rendering_specialized_mode==od&&this.simulationParameters.rendering_scale_vertices}addAdditionalUniforms(){super.addAdditionalUniforms(),this.uniforms.is_plane={type:"bool",value:!1}}}class rI extends SS{constructor(e,n,i,r,o,s,a,l){super(Au,e,n,i,r,o,!1,!0),console.warn("CONSTRUCTOR SceneWrapperVisualizationAux"),this.scene_sphere=s,this.camera_sphere=a,this.controls_sphere=l;var c=!0;this.textureRendererSphere=new iI(Au,e,this.simulationParameters,this.colorMaps,this.scene_sphere,c)}initializeAdditionalObjects(){this.initializeAxesArrowsPart2(),this.initializeAxesThetaDown(),this.initializeAxesArrowsSpheres(),this.initializeSpherelikeGrid(),this.initializeClickedPositionMarkerSphericalGrid()}getTexturedPlaneMinX(){return 0}getTexturedPlaneMaxX(){return 1}getTexturedPlaneMinY(){return 0}getTexturedPlaneMaxY(){return 1}getDefaultCameraDistance(){return .75}updateVisualElements(){this.updateClickedPosition(),this.updateStreamlineModel(),this.updateTexturedPlane(),this.updateTexturedSphere(),this.updateAxes(),this.repositionSeedSpheres()}updateTexturedSphere(){this.getTexturedPlaneMinX(),this.getTexturedPlaneMaxX(),this.getTexturedPlaneMinY(),this.getTexturedPlaneMaxY(),this.changeDisplayedTexture(this.textureRendererSphere),this.textureRendererSphere.updateTexturedMesh()}initializeAxesArrowsPart2(){var e=!1,n=.5,i=0,r=1,o=0,s=1,a=.002,l=65535,c=16711935,u=0;this.objectAxes.rebuild(e,n,this.scene,this.simulationParameters,i,r,o,s,a,l,c,u)}updateAxes(){}initializeLightSpheres(){this.directionalLight_sphere=new hS(16777215,1),this.directionalLight_sphere.position.set(0,0,0),this.camera_sphere.add(this.directionalLight_sphere),this.directionalLightTarget_sphere=new $t,this.camera_sphere.add(this.directionalLightTarget_sphere),this.directionalLightTarget_sphere.position.set(0,0,-1),this.directionalLight_sphere.target=this.directionalLightTarget_sphere;const e=new pS(4210752);this.scene_sphere.add(e)}initializeAxesThetaDown(){console.warn("#999 initializeAxesThetaDown");var e=xi(-4,-4,0),n=8,f=.02,i=5,r=.05,o=!0;this.objectAxes_thetaDown=new mp(e,n,n,n,f,i,r,o),this.objectAxes_thetaDown.addToScene(this.scene);var s=!1,a=1,l=0,c=1,u=0,d=1,f=.002,p=65535,_=16711935,v=0;this.objectAxes_thetaDown.rebuild(s,a,this.scene,this.simulationParameters,l,c,u,d,f,p,_,v)}initializeAxesArrowsSpheres(){var e=xi(-4,-4,0),n=8,f=.02,i=5,r=.05,o=!1;this.objectAxes_spheres=new mp(e,n,n,n,f,i,r,o),this.objectAxes_spheres.addToScene(this.scene_sphere);var s=!0,a=1,l=0,c=1.25,u=0,d=1.25,f=.002,p=16711680,_=65280,v=255;this.objectAxes_spheres.rebuild(s,a,this.scene_sphere,this.simulationParameters,l,c,u,d,f,p,_,v)}initializeSpherelikeGrid(){this.textureRendererSphere.initialize()}initializeClickedPositionMarkerSphericalGrid(){var e=1;this.clicked_geometry_spherical_view=new ji(e),this.clicked_material_spherical_view=new Dr({color:0}),this.clicked_mesh_spherical_view=new _t(this.clicked_geometry_spherical_view,this.clicked_material_spherical_view),this.clicked_mesh_spherical_view.position.set(0,0,1e4),this.scene_sphere.add(this.clicked_mesh_spherical_view)}computeAdditionalStuff(){var e=!1;this.textureRendererSphere.spherelikeGrid.updateGrid(e,this.offscreenRendererSeedsAndReturns.getPlaneDimensionX(),this.offscreenRendererSeedsAndReturns.getPlaneDimensionY())}rayCastAndMovePosition(e){var n=new ge;if(n.x=e.x,n.y=e.y,this.simulationParameters.active_aux_scene_index==Pl){this.raycaster.setFromCamera(n,this.camera);const o=this.raycaster.intersectObject(this.plane_mesh);if(o.length>0){var i=mg(o[0].point.x,0,1),r=mg(o[0].point.y,0,1);this.simulationParameters.setSeedDirectionAnglesFromFrac(i,r),Ct.emit(ip,{})}}else{this.raycaster.setFromCamera(n,this.camera_sphere);const o=this.raycaster.intersectObject(this.textureRendererSphere.spherelikeGrid.mesh);o.length>0&&(console.log("spherelikeGrid intersection",o[0].point),this.simulationParameters.setSeedDirection(o[0].point.x,o[0].point.y,o[0].point.z),Ct.emit(ip,{}))}}recalculateStreamlineFromSimulationParameters(){}repositionSeedSpheres(){this.clicked_mesh_spherical_view.position.set(this.simulationParameters.seed_direction_x,this.simulationParameters.seed_direction_y,this.simulationParameters.seed_direction_z),this.simulationParameters.auxGridDirection==Fr?this.clicked_mesh.position.set(this.simulationParameters.seed_direction_phi_frac,1-this.simulationParameters.seed_direction_theta_frac,0):this.simulationParameters.auxGridDirection==bu?this.clicked_mesh.position.set(this.simulationParameters.seed_direction_theta_frac,this.simulationParameters.seed_direction_phi_frac,0):console.error("repositionSeedSpheres: unkown auxGridDirection",this.simulationParameters.auxGridDirection)}OnSeedPositionChanged(){console.warn("OnSeedPositionChanged"),this.seed_changed=!0}switchGridDirection(e){console.warn("#999 switchGridDirection",e),this.simulationParameters.auxGridDirection=e,e==Fr?(this.objectAxes.removefromScene(this.scene),this.objectAxes_thetaDown.removefromScene(this.scene),this.objectAxes_thetaDown.addToScene(this.scene)):e==bu?(this.objectAxes.removefromScene(this.scene),this.objectAxes_thetaDown.removefromScene(this.scene),this.objectAxes.addToScene(this.scene)):console.error("switchGridDirection unkown value",e)}}class oI extends Z0{constructor(n){super(n);Ye(this,"handleEventDataUpdate",()=>{console.log("handleEventDataUpdate"),this.updateParametersData(),this.computeStuff(),this.updateVisualElements()});Ye(this,"handleEventRenderingUpdate",()=>{console.log("handleEventRenderingUpdate"),this.updateParametersRendering(),this.updateVisualElements()});Ye(this,"handleEventAlignCamera",()=>{console.log("handleEventAlignCamera"),this.alignCameraWithDomain()});Ye(this,"handleEventSelectChanged",n=>{switch(console.log("handleEventSelectChanged"),n.key){case"UI_STATE_AUX_CONTENT":this.switchToScene(n.value);break;case"UI_STATE_AUX_GRID_DIRECTION":this.switchGridDirection(n.value);break}});Ye(this,"handleEventSeedPositionChanged",()=>{console.log("handleEventSeedPositionChanged"),this.sceneWrapper.OnSeedPositionChanged(),this.writeSeedDataToUI()});this.mainRef=n.mainRef,console.warn("CONSTRUCTOR ThreeContainerAux")}initializeAdditional(){Ct.on(b0,this.handleEventDataUpdate),Ct.on(A0,this.handleEventRenderingUpdate),Ct.on(R0,this.handleEventAlignCamera),Ct.on(w9,this.handleEventSelectChanged),Ct.on(M9,this.handleEventSeedPositionChanged),this.initializeAdditionalSceneSphere(),this.initializeAdditionalCameraSphere(),this.initializeAdditionalControlsSphere(),this.sceneWrapper=new rI(this.renderer,this.scene,this.camera,this.controls,this.raycaster,this.scene_sphere,this.camera_sphere,this.controls_sphere),this.sceneWrapper.initialize(),this.switchToScene(Pl),this.switchGridDirection(Fr)}switchToScene(n){this.sceneWrapper.simulationParameters.active_aux_scene_index=n,n==0?(this.active_scene=this.scene,this.active_camera=this.camera,this.active_controls=this.controls,this.controls.enabled=!0,this.controls_sphere.enabled=!1):(this.active_scene=this.scene_sphere,this.active_camera=this.camera_sphere,this.active_controls=this.controls_sphere,this.controls.enabled=!1,this.controls_sphere.enabled=!0)}switchGridDirection(n){this.sceneWrapper.switchGridDirection(n),this.updateVisualElements()}initializeAdditionalSceneSphere(){this.scene_sphere=new X0,this.scene_sphere.background=new tt(16777215)}initializeAdditionalCameraSphere(){this.camera_sphere=new vn(75,1,.01,100),this.camera_sphere.position.z=2,this.scene_sphere.add(this.camera_sphere),this.list_cameras.push(this.camera_sphere)}initializeAdditionalControlsSphere(){this.controls_sphere=new mS(this.camera_sphere,this.renderer.domElement),this.controls_sphere.update(),this.list_controls.push(this.controls_sphere)}computeStuff(){this.sceneWrapper.computeStuff(),this.sceneWrapper.recalculateStreamlineWithLastParameters(),this.sceneWrapper.recalculateStreamlineKeepPosition()}updateVisualElements(){this.sceneWrapper.updateVisualElements()}updateControls(){this.updateControlsInstance(this.controls),this.updateControlsInstance(this.controls_sphere)}}function de(){return de=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},de.apply(this,arguments)}function We(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function Ci(t,e=[]){let n=[];function i(o,s){const a=S.createContext(s),l=n.length;n=[...n,s];function c(d){const{scope:f,children:p,..._}=d,v=(f==null?void 0:f[t][l])||a,m=S.useMemo(()=>_,Object.values(_));return S.createElement(v.Provider,{value:m},p)}function u(d,f){const p=(f==null?void 0:f[t][l])||a,_=S.useContext(p);if(_)return _;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const r=()=>{const o=n.map(s=>S.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return S.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,sI(r,...e)]}function sI(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const d=l(o)[`__scope${c}`];return{...a,...d}},{});return S.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function aI(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function ES(...t){return e=>t.forEach(n=>aI(n,e))}function ct(...t){return S.useCallback(ES(...t),t)}const Ks=S.forwardRef((t,e)=>{const{children:n,...i}=t,r=S.Children.toArray(n),o=r.find(cI);if(o){const s=o.props.children,a=r.map(l=>l===o?S.Children.count(s)>1?S.Children.only(null):S.isValidElement(s)?s.props.children:null:l);return S.createElement(_p,de({},i,{ref:e}),S.isValidElement(s)?S.cloneElement(s,void 0,a):null)}return S.createElement(_p,de({},i,{ref:e}),n)});Ks.displayName="Slot";const _p=S.forwardRef((t,e)=>{const{children:n,...i}=t;return S.isValidElement(n)?S.cloneElement(n,{...uI(i,n.props),ref:e?ES(e,n.ref):n.ref}):S.Children.count(n)>1?S.Children.only(null):null});_p.displayName="SlotClone";const lI=({children:t})=>S.createElement(S.Fragment,null,t);function cI(t){return S.isValidElement(t)&&t.type===lI}function uI(t,e){const n={...e};for(const i in e){const r=t[i],o=e[i];/^on[A-Z]/.test(i)?r&&o?n[i]=(...a)=>{o(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...o}:i==="className"&&(n[i]=[r,o].filter(Boolean).join(" "))}return{...t,...n}}function J0(t){const e=t+"CollectionProvider",[n,i]=Ci(e),[r,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=p=>{const{scope:_,children:v}=p,m=we.useRef(null),h=we.useRef(new Map).current;return we.createElement(r,{scope:_,itemMap:h,collectionRef:m},v)},a=t+"CollectionSlot",l=we.forwardRef((p,_)=>{const{scope:v,children:m}=p,h=o(a,v),g=ct(_,h.collectionRef);return we.createElement(Ks,{ref:g},m)}),c=t+"CollectionItemSlot",u="data-radix-collection-item",d=we.forwardRef((p,_)=>{const{scope:v,children:m,...h}=p,g=we.useRef(null),x=ct(_,g),y=o(c,v);return we.useEffect(()=>(y.itemMap.set(g,{ref:g,...h}),()=>void y.itemMap.delete(g))),we.createElement(Ks,{[u]:"",ref:x},m)});function f(p){const _=o(t+"CollectionConsumer",p);return we.useCallback(()=>{const m=_.collectionRef.current;if(!m)return[];const h=Array.from(m.querySelectorAll(`[${u}]`));return Array.from(_.itemMap.values()).sort((y,w)=>h.indexOf(y.ref.current)-h.indexOf(w.ref.current))},[_.collectionRef,_.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},f,i]}const on=globalThis!=null&&globalThis.document?S.useLayoutEffect:()=>{},dI=Up.useId||(()=>{});let fI=0;function la(t){const[e,n]=S.useState(dI());return on(()=>{n(i=>i??String(fI++))},[t]),e?`radix-${e}`:""}const hI=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Xe=hI.reduce((t,e)=>{const n=S.forwardRef((i,r)=>{const{asChild:o,...s}=i,a=o?Ks:e;return S.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),S.createElement(a,de({},s,{ref:r}))});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function pI(t,e){t&&zo.flushSync(()=>t.dispatchEvent(e))}function Ht(t){const e=S.useRef(t);return S.useEffect(()=>{e.current=t}),S.useMemo(()=>(...n)=>{var i;return(i=e.current)===null||i===void 0?void 0:i.call(e,...n)},[])}function li({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=mI({defaultProp:e,onChange:n}),o=t!==void 0,s=o?t:i,a=Ht(n),l=S.useCallback(c=>{if(o){const d=typeof c=="function"?c(t):c;d!==t&&a(d)}else r(c)},[o,t,r,a]);return[s,l]}function mI({defaultProp:t,onChange:e}){const n=S.useState(t),[i]=n,r=S.useRef(i),o=Ht(e);return S.useEffect(()=>{r.current!==i&&(o(i),r.current=i)},[i,r,o]),n}const _I=S.createContext(void 0);function ca(t){const e=S.useContext(_I);return t||e||"ltr"}const Jf="rovingFocusGroup.onEntryFocus",vI={bubbles:!1,cancelable:!0},Q0="RovingFocusGroup",[vp,TS,gI]=J0(Q0),[xI,pd]=Ci(Q0,[gI]),[yI,SI]=xI(Q0),EI=S.forwardRef((t,e)=>S.createElement(vp.Provider,{scope:t.__scopeRovingFocusGroup},S.createElement(vp.Slot,{scope:t.__scopeRovingFocusGroup},S.createElement(TI,de({},t,{ref:e}))))),TI=S.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,orientation:i,loop:r=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,...u}=t,d=S.useRef(null),f=ct(e,d),p=ca(o),[_=null,v]=li({prop:s,defaultProp:a,onChange:l}),[m,h]=S.useState(!1),g=Ht(c),x=TS(n),y=S.useRef(!1),[w,T]=S.useState(0);return S.useEffect(()=>{const b=d.current;if(b)return b.addEventListener(Jf,g),()=>b.removeEventListener(Jf,g)},[g]),S.createElement(yI,{scope:n,orientation:i,dir:p,loop:r,currentTabStopId:_,onItemFocus:S.useCallback(b=>v(b),[v]),onItemShiftTab:S.useCallback(()=>h(!0),[]),onFocusableItemAdd:S.useCallback(()=>T(b=>b+1),[]),onFocusableItemRemove:S.useCallback(()=>T(b=>b-1),[])},S.createElement(Xe.div,de({tabIndex:m||w===0?-1:0,"data-orientation":i},u,{ref:f,style:{outline:"none",...t.style},onMouseDown:We(t.onMouseDown,()=>{y.current=!0}),onFocus:We(t.onFocus,b=>{const C=!y.current;if(b.target===b.currentTarget&&C&&!m){const M=new CustomEvent(Jf,vI);if(b.currentTarget.dispatchEvent(M),!M.defaultPrevented){const E=x().filter(F=>F.focusable),U=E.find(F=>F.active),O=E.find(F=>F.id===_),B=[U,O,...E].filter(Boolean).map(F=>F.ref.current);wS(B)}}y.current=!1}),onBlur:We(t.onBlur,()=>h(!1))})))}),wI="RovingFocusGroupItem",MI=S.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,focusable:i=!0,active:r=!1,tabStopId:o,...s}=t,a=la(),l=o||a,c=SI(wI,n),u=c.currentTabStopId===l,d=TS(n),{onFocusableItemAdd:f,onFocusableItemRemove:p}=c;return S.useEffect(()=>{if(i)return f(),()=>p()},[i,f,p]),S.createElement(vp.ItemSlot,{scope:n,id:l,focusable:i,active:r},S.createElement(Xe.span,de({tabIndex:u?0:-1,"data-orientation":c.orientation},s,{ref:e,onMouseDown:We(t.onMouseDown,_=>{i?c.onItemFocus(l):_.preventDefault()}),onFocus:We(t.onFocus,()=>c.onItemFocus(l)),onKeyDown:We(t.onKeyDown,_=>{if(_.key==="Tab"&&_.shiftKey){c.onItemShiftTab();return}if(_.target!==_.currentTarget)return;const v=RI(_,c.orientation,c.dir);if(v!==void 0){_.preventDefault();let h=d().filter(g=>g.focusable).map(g=>g.ref.current);if(v==="last")h.reverse();else if(v==="prev"||v==="next"){v==="prev"&&h.reverse();const g=h.indexOf(_.currentTarget);h=c.loop?CI(h,g+1):h.slice(g+1)}setTimeout(()=>wS(h))}})})))}),bI={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function AI(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function RI(t,e,n){const i=AI(t.key,n);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(i))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(i)))return bI[i]}function wS(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}function CI(t,e){return t.map((n,i)=>t[(e+i)%t.length])}const MS=EI,bS=MI;function PI(t,e){return S.useReducer((n,i)=>{const r=e[n][i];return r??n},t)}const qr=t=>{const{present:e,children:n}=t,i=II(e),r=typeof n=="function"?n({present:i.isPresent}):S.Children.only(n),o=ct(i.ref,r.ref);return typeof n=="function"||i.isPresent?S.cloneElement(r,{ref:o}):null};qr.displayName="Presence";function II(t){const[e,n]=S.useState(),i=S.useRef({}),r=S.useRef(t),o=S.useRef("none"),s=t?"mounted":"unmounted",[a,l]=PI(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return S.useEffect(()=>{const c=Ac(i.current);o.current=a==="mounted"?c:"none"},[a]),on(()=>{const c=i.current,u=r.current;if(u!==t){const f=o.current,p=Ac(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&f!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),on(()=>{if(e){const c=d=>{const p=Ac(i.current).includes(d.animationName);d.target===e&&p&&zo.flushSync(()=>l("ANIMATION_END"))},u=d=>{d.target===e&&(o.current=Ac(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",c),e.addEventListener("animationend",c),()=>{e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",c),e.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:S.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Ac(t){return(t==null?void 0:t.animationName)||"none"}const AS="Tabs",[DI,P5]=Ci(AS,[pd]),RS=pd(),[NI,em]=DI(AS),LI=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:i,onValueChange:r,defaultValue:o,orientation:s="horizontal",dir:a,activationMode:l="automatic",...c}=t,u=ca(a),[d,f]=li({prop:i,onChange:r,defaultProp:o});return S.createElement(NI,{scope:n,baseId:la(),value:d,onValueChange:f,orientation:s,dir:u,activationMode:l},S.createElement(Xe.div,de({dir:u,"data-orientation":s},c,{ref:e})))}),UI="TabsList",OI=S.forwardRef((t,e)=>{const{__scopeTabs:n,loop:i=!0,...r}=t,o=em(UI,n),s=RS(n);return S.createElement(MS,de({asChild:!0},s,{orientation:o.orientation,dir:o.dir,loop:i}),S.createElement(Xe.div,de({role:"tablist","aria-orientation":o.orientation},r,{ref:e})))}),zI="TabsTrigger",FI=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:i,disabled:r=!1,...o}=t,s=em(zI,n),a=RS(n),l=CS(s.baseId,i),c=PS(s.baseId,i),u=i===s.value;return S.createElement(bS,de({asChild:!0},a,{focusable:!r,active:u}),S.createElement(Xe.button,de({type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:l},o,{ref:e,onMouseDown:We(t.onMouseDown,d=>{!r&&d.button===0&&d.ctrlKey===!1?s.onValueChange(i):d.preventDefault()}),onKeyDown:We(t.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(i)}),onFocus:We(t.onFocus,()=>{const d=s.activationMode!=="manual";!u&&!r&&d&&s.onValueChange(i)})})))}),kI="TabsContent",BI=S.forwardRef((t,e)=>{const{__scopeTabs:n,value:i,forceMount:r,children:o,...s}=t,a=em(kI,n),l=CS(a.baseId,i),c=PS(a.baseId,i),u=i===a.value,d=S.useRef(u);return S.useEffect(()=>{const f=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(f)},[]),S.createElement(qr,{present:r||u},({present:f})=>S.createElement(Xe.div,de({"data-state":u?"active":"inactive","data-orientation":a.orientation,role:"tabpanel","aria-labelledby":l,hidden:!f,id:c,tabIndex:0},s,{ref:e,style:{...t.style,animationDuration:d.current?"0s":void 0}}),f&&o))});function CS(t,e){return`${t}-trigger-${e}`}function PS(t,e){return`${t}-content-${e}`}const $I=LI,IS=OI,DS=FI,NS=BI;function LS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=LS(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function VI(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=LS(t))&&(i&&(i+=" "),i+=e);return i}const tm="-";function GI(t){const e=WI(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;function r(s){const a=s.split(tm);return a[0]===""&&a.length!==1&&a.shift(),US(a,e)||HI(s)}function o(s,a){const l=n[s]||[];return a&&i[s]?[...l,...i[s]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:o}}function US(t,e){var s;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?US(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const o=t.join(tm);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId}const Tg=/^\[(.+)\]$/;function HI(t){if(Tg.test(t)){const e=Tg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function WI(t){const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return jI(Object.entries(t.classGroups),n).forEach(([o,s])=>{gp(s,i,o,e)}),i}function gp(t,e,n,i){t.forEach(r=>{if(typeof r=="string"){const o=r===""?e:wg(e,r);o.classGroupId=n;return}if(typeof r=="function"){if(XI(r)){gp(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,s])=>{gp(s,wg(e,o),n,i)})})}function wg(t,e){let n=t;return e.split(tm).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n}function XI(t){return t.isThemeGetter}function jI(t,e){return e?t.map(([n,i])=>{const r=i.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,r]}):t}function YI(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;function r(o,s){n.set(o,s),e++,e>t&&(e=0,i=n,n=new Map)}return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=i.get(o))!==void 0)return r(o,s),s},set(o,s){n.has(o)?n.set(o,s):r(o,s)}}}const OS="!";function qI(t){const e=t.separator,n=e.length===1,i=e[0],r=e.length;return function(s){const a=[];let l=0,c=0,u;for(let v=0;v<s.length;v++){let m=s[v];if(l===0){if(m===i&&(n||s.slice(v,v+r)===e)){a.push(s.slice(c,v)),c=v+r;continue}if(m==="/"){u=v;continue}}m==="["?l++:m==="]"&&l--}const d=a.length===0?s:s.substring(c),f=d.startsWith(OS),p=f?d.substring(1):d,_=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:_}}}function KI(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e}function ZI(t){return{cache:YI(t.cacheSize),splitModifiers:qI(t),...GI(t)}}const JI=/\s+/;function QI(t,e){const{splitModifiers:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,o=new Set;return t.trim().split(JI).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(s);let d=i(u?c.substring(0,u):c),f=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:s};if(d=i(c),!d)return{isTailwindClass:!1,originalClassName:s};f=!1}const p=KI(a).join(":");return{isTailwindClass:!0,modifierId:l?p+OS:p,classGroupId:d,originalClassName:s,hasPostfixModifier:f}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,u=a+l;return o.has(u)?!1:(o.add(u),r(l,c).forEach(d=>o.add(a+d)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function eD(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=zS(e))&&(i&&(i+=" "),i+=n);return i}function zS(t){if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=zS(t[i]))&&(n&&(n+=" "),n+=e);return n}function tD(t,...e){let n,i,r,o=s;function s(l){const c=e.reduce((u,d)=>d(u),t());return n=ZI(c),i=n.cache.get,r=n.cache.set,o=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=QI(l,n);return r(l,u),u}return function(){return o(eD.apply(null,arguments))}}function ht(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const FS=/^\[(?:([a-z-]+):)?(.+)\]$/i,nD=/^\d+\/\d+$/,iD=new Set(["px","full","screen"]),rD=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oD=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,sD=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,aD=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,lD=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function zi(t){return yo(t)||iD.has(t)||nD.test(t)}function dr(t){return ua(t,"length",_D)}function yo(t){return!!t&&!Number.isNaN(Number(t))}function Rc(t){return ua(t,"number",yo)}function Ca(t){return!!t&&Number.isInteger(Number(t))}function cD(t){return t.endsWith("%")&&yo(t.slice(0,-1))}function Fe(t){return FS.test(t)}function fr(t){return rD.test(t)}const uD=new Set(["length","size","percentage"]);function dD(t){return ua(t,uD,kS)}function fD(t){return ua(t,"position",kS)}const hD=new Set(["image","url"]);function pD(t){return ua(t,hD,gD)}function mD(t){return ua(t,"",vD)}function Pa(){return!0}function ua(t,e,n){const i=FS.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1}function _D(t){return oD.test(t)&&!sD.test(t)}function kS(){return!1}function vD(t){return aD.test(t)}function gD(t){return lD.test(t)}function xD(){const t=ht("colors"),e=ht("spacing"),n=ht("blur"),i=ht("brightness"),r=ht("borderColor"),o=ht("borderRadius"),s=ht("borderSpacing"),a=ht("borderWidth"),l=ht("contrast"),c=ht("grayscale"),u=ht("hueRotate"),d=ht("invert"),f=ht("gap"),p=ht("gradientColorStops"),_=ht("gradientColorStopPositions"),v=ht("inset"),m=ht("margin"),h=ht("opacity"),g=ht("padding"),x=ht("saturate"),y=ht("scale"),w=ht("sepia"),T=ht("skew"),b=ht("space"),C=ht("translate"),M=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",Fe,e],O=()=>[Fe,e],D=()=>["",zi,dr],B=()=>["auto",yo,Fe],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",Fe],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[yo,Rc],ee=()=>[yo,Fe];return{cacheSize:500,separator:":",theme:{colors:[Pa],spacing:[zi,dr],blur:["none","",fr,Fe],brightness:re(),borderColor:[t],borderRadius:["none","","full",fr,Fe],borderSpacing:O(),borderWidth:D(),contrast:re(),grayscale:H(),hueRotate:ee(),invert:H(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[cD,dr],inset:U(),margin:U(),opacity:re(),padding:O(),saturate:re(),scale:re(),sepia:H(),skew:ee(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",Fe]}],container:["container"],columns:[{columns:[fr]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),Fe]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ca,Fe]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Fe]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",Ca,Fe]}],"grid-cols":[{"grid-cols":[Pa]}],"col-start-end":[{col:["auto",{span:["full",Ca,Fe]},Fe]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Pa]}],"row-start-end":[{row:["auto",{span:[Ca,Fe]},Fe]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Fe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Fe]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Fe,e]}],"min-w":[{"min-w":[Fe,e,"min","max","fit"]}],"max-w":[{"max-w":[Fe,e,"none","full","min","max","fit","prose",{screen:[fr]},fr]}],h:[{h:[Fe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Fe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",fr,dr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Rc]}],"font-family":[{font:[Pa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Fe]}],"line-clamp":[{"line-clamp":["none",yo,Rc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",zi,Fe]}],"list-image":[{"list-image":["none",Fe]}],"list-style-type":[{list:["none","disc","decimal",Fe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",zi,dr]}],"underline-offset":[{"underline-offset":["auto",zi,Fe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),fD]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",dD]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},pD]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:X()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[zi,Fe]}],"outline-w":[{outline:[zi,dr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[zi,dr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",fr,mD]}],"shadow-color":[{shadow:[Pa]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",fr,Fe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[x]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Fe]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",Fe]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",Fe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Ca,Fe]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Fe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[zi,dr,Rc]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const yD=tD(xD);function dt(...t){return yD(VI(t))}const SD=$I,BS=S.forwardRef(({className:t,...e},n)=>L.jsx(IS,{ref:n,className:dt("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...e}));BS.displayName=IS.displayName;const Kc=S.forwardRef(({className:t,...e},n)=>L.jsx(DS,{ref:n,className:dt("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...e}));Kc.displayName=DS.displayName;const Zc=S.forwardRef(({className:t,...e},n)=>L.jsx(NS,{ref:n,className:dt("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...e}));Zc.displayName=NS.displayName;const $S="Collapsible",[ED,VS]=Ci($S),[TD,nm]=ED($S),wD=S.forwardRef((t,e)=>{const{__scopeCollapsible:n,open:i,defaultOpen:r,disabled:o,onOpenChange:s,...a}=t,[l=!1,c]=li({prop:i,defaultProp:r,onChange:s});return S.createElement(TD,{scope:n,disabled:o,contentId:la(),open:l,onOpenToggle:S.useCallback(()=>c(u=>!u),[c])},S.createElement(Xe.div,de({"data-state":im(l),"data-disabled":o?"":void 0},a,{ref:e})))}),MD="CollapsibleTrigger",bD=S.forwardRef((t,e)=>{const{__scopeCollapsible:n,...i}=t,r=nm(MD,n);return S.createElement(Xe.button,de({type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":im(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled},i,{ref:e,onClick:We(t.onClick,r.onOpenToggle)}))}),GS="CollapsibleContent",AD=S.forwardRef((t,e)=>{const{forceMount:n,...i}=t,r=nm(GS,t.__scopeCollapsible);return S.createElement(qr,{present:n||r.open},({present:o})=>S.createElement(RD,de({},i,{ref:e,present:o})))}),RD=S.forwardRef((t,e)=>{const{__scopeCollapsible:n,present:i,children:r,...o}=t,s=nm(GS,n),[a,l]=S.useState(i),c=S.useRef(null),u=ct(e,c),d=S.useRef(0),f=d.current,p=S.useRef(0),_=p.current,v=s.open||a,m=S.useRef(v),h=S.useRef();return S.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),on(()=>{const g=c.current;if(g){h.current=h.current||{transitionDuration:g.style.transitionDuration,animationName:g.style.animationName},g.style.transitionDuration="0s",g.style.animationName="none";const x=g.getBoundingClientRect();d.current=x.height,p.current=x.width,m.current||(g.style.transitionDuration=h.current.transitionDuration,g.style.animationName=h.current.animationName),l(i)}},[s.open,i]),S.createElement(Xe.div,de({"data-state":im(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!v},o,{ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...t.style}}),v&&r)});function im(t){return t?"open":"closed"}const CD=wD,PD=bD,ID=AD,Kr="Accordion",DD=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[rm,ND,LD]=J0(Kr),[md,I5]=Ci(Kr,[LD,VS]),om=VS(),HS=we.forwardRef((t,e)=>{const{type:n,...i}=t,r=i,o=i;return we.createElement(rm.Provider,{scope:t.__scopeAccordion},n==="multiple"?we.createElement(FD,de({},o,{ref:e})):we.createElement(zD,de({},r,{ref:e})))});HS.propTypes={type(t){const e=t.value||t.defaultValue;return t.type&&!["single","multiple"].includes(t.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):t.type==="multiple"&&typeof e=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):t.type==="single"&&Array.isArray(e)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[WS,UD]=md(Kr),[XS,OD]=md(Kr,{collapsible:!1}),zD=we.forwardRef((t,e)=>{const{value:n,defaultValue:i,onValueChange:r=()=>{},collapsible:o=!1,...s}=t,[a,l]=li({prop:n,defaultProp:i,onChange:r});return we.createElement(WS,{scope:t.__scopeAccordion,value:a?[a]:[],onItemOpen:l,onItemClose:we.useCallback(()=>o&&l(""),[o,l])},we.createElement(XS,{scope:t.__scopeAccordion,collapsible:o},we.createElement(jS,de({},s,{ref:e}))))}),FD=we.forwardRef((t,e)=>{const{value:n,defaultValue:i,onValueChange:r=()=>{},...o}=t,[s=[],a]=li({prop:n,defaultProp:i,onChange:r}),l=we.useCallback(u=>a((d=[])=>[...d,u]),[a]),c=we.useCallback(u=>a((d=[])=>d.filter(f=>f!==u)),[a]);return we.createElement(WS,{scope:t.__scopeAccordion,value:s,onItemOpen:l,onItemClose:c},we.createElement(XS,{scope:t.__scopeAccordion,collapsible:!0},we.createElement(jS,de({},o,{ref:e}))))}),[kD,_d]=md(Kr),jS=we.forwardRef((t,e)=>{const{__scopeAccordion:n,disabled:i,dir:r,orientation:o="vertical",...s}=t,a=we.useRef(null),l=ct(a,e),c=ND(n),d=ca(r)==="ltr",f=We(t.onKeyDown,p=>{var _;if(!DD.includes(p.key))return;const v=p.target,m=c().filter(M=>{var E;return!((E=M.ref.current)!==null&&E!==void 0&&E.disabled)}),h=m.findIndex(M=>M.ref.current===v),g=m.length;if(h===-1)return;p.preventDefault();let x=h;const y=0,w=g-1,T=()=>{x=h+1,x>w&&(x=y)},b=()=>{x=h-1,x<y&&(x=w)};switch(p.key){case"Home":x=y;break;case"End":x=w;break;case"ArrowRight":o==="horizontal"&&(d?T():b());break;case"ArrowDown":o==="vertical"&&T();break;case"ArrowLeft":o==="horizontal"&&(d?b():T());break;case"ArrowUp":o==="vertical"&&b();break}const C=x%g;(_=m[C].ref.current)===null||_===void 0||_.focus()});return we.createElement(kD,{scope:n,disabled:i,direction:r,orientation:o},we.createElement(rm.Slot,{scope:n},we.createElement(Xe.div,de({},s,{"data-orientation":o,ref:l,onKeyDown:i?void 0:f}))))}),xp="AccordionItem",[BD,sm]=md(xp),$D=we.forwardRef((t,e)=>{const{__scopeAccordion:n,value:i,...r}=t,o=_d(xp,n),s=UD(xp,n),a=om(n),l=la(),c=i&&s.value.includes(i)||!1,u=o.disabled||t.disabled;return we.createElement(BD,{scope:n,open:c,disabled:u,triggerId:l},we.createElement(CD,de({"data-orientation":o.orientation,"data-state":YS(c)},a,r,{ref:e,disabled:u,open:c,onOpenChange:d=>{d?s.onItemOpen(i):s.onItemClose(i)}})))}),VD="AccordionHeader",GD=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...i}=t,r=_d(Kr,n),o=sm(VD,n);return we.createElement(Xe.h3,de({"data-orientation":r.orientation,"data-state":YS(o.open),"data-disabled":o.disabled?"":void 0},i,{ref:e}))}),Mg="AccordionTrigger",HD=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...i}=t,r=_d(Kr,n),o=sm(Mg,n),s=OD(Mg,n),a=om(n);return we.createElement(rm.ItemSlot,{scope:n},we.createElement(PD,de({"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":r.orientation,id:o.triggerId},a,i,{ref:e})))}),WD="AccordionContent",XD=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...i}=t,r=_d(Kr,n),o=sm(WD,n),s=om(n);return we.createElement(ID,de({role:"region","aria-labelledby":o.triggerId,"data-orientation":r.orientation},s,i,{ref:e,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}}))});function YS(t){return t?"open":"closed"}const jD=HS,YD=$D,qD=GD,qS=HD,KS=XD;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZS=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:o,iconNode:s,...a},l)=>S.createElement("svg",{ref:l,...ZD,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ZS("lucide",r),...a},[...s.map(([c,u])=>S.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(t,e)=>{const n=S.forwardRef(({className:i,...r},o)=>S.createElement(JD,{ref:o,iconNode:e,className:ZS(`lucide-${KD(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=Zr("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Zr("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=Zr("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=Zr("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=Zr("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=Zr("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=Zr("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=Zr("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]),lm=jD,Nr=S.forwardRef(({className:t,...e},n)=>L.jsx(YD,{ref:n,className:dt("border-b",t),...e}));Nr.displayName="AccordionItem";const Lr=S.forwardRef(({className:t,children:e,...n},i)=>L.jsx(qD,{className:"flex",children:L.jsxs(qS,{ref:i,className:dt("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...n,children:[e,L.jsx(am,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));Lr.displayName=qS.displayName;const Ur=S.forwardRef(({className:t,children:e,...n},i)=>L.jsx(KS,{ref:i,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:L.jsx("div",{className:dt("pb-4 pt-0",t),children:e})}));Ur.displayName=KS.displayName;function QS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=QS(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function oN(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=QS(t))&&(i&&(i+=" "),i+=e);return i}const bg=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Ag=oN,cm=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Ag(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=e,s=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],d=o==null?void 0:o[c];if(u===null)return null;const f=bg(u)||bg(d);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:d,className:f,...p}=u;return Object.entries(p).every(_=>{let[v,m]=_;return Array.isArray(m)?m.includes({...o,...a}[v]):{...o,...a}[v]===m})?[...c,d,f]:c},[]);return Ag(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},sN=cm("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ul=S.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},o)=>{const s=i?Ks:"button";return L.jsx(s,{className:dt(sN({variant:e,size:n,className:t})),ref:o,...r})});Ul.displayName="Button";function yp(t,[e,n]){return Math.min(n,Math.max(e,t))}function aN(t,e){return S.useReducer((n,i)=>{const r=e[n][i];return r??n},t)}const eE="ScrollArea",[tE,D5]=Ci(eE),[lN,Yn]=tE(eE),cN=S.forwardRef((t,e)=>{const{__scopeScrollArea:n,type:i="hover",dir:r,scrollHideDelay:o=600,...s}=t,[a,l]=S.useState(null),[c,u]=S.useState(null),[d,f]=S.useState(null),[p,_]=S.useState(null),[v,m]=S.useState(null),[h,g]=S.useState(0),[x,y]=S.useState(0),[w,T]=S.useState(!1),[b,C]=S.useState(!1),M=ct(e,U=>l(U)),E=ca(r);return S.createElement(lN,{scope:n,type:i,dir:E,scrollHideDelay:o,scrollArea:a,viewport:c,onViewportChange:u,content:d,onContentChange:f,scrollbarX:p,onScrollbarXChange:_,scrollbarXEnabled:w,onScrollbarXEnabledChange:T,scrollbarY:v,onScrollbarYChange:m,scrollbarYEnabled:b,onScrollbarYEnabledChange:C,onCornerWidthChange:g,onCornerHeightChange:y},S.createElement(Xe.div,de({dir:E},s,{ref:M,style:{position:"relative","--radix-scroll-area-corner-width":h+"px","--radix-scroll-area-corner-height":x+"px",...t.style}})))}),uN="ScrollAreaViewport",dN=S.forwardRef((t,e)=>{const{__scopeScrollArea:n,children:i,...r}=t,o=Yn(uN,n),s=S.useRef(null),a=ct(e,s,o.onViewportChange);return S.createElement(S.Fragment,null,S.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),S.createElement(Xe.div,de({"data-radix-scroll-area-viewport":""},r,{ref:a,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...t.style}}),S.createElement("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),tr="ScrollAreaScrollbar",nE=S.forwardRef((t,e)=>{const{forceMount:n,...i}=t,r=Yn(tr,t.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:s}=r,a=t.orientation==="horizontal";return S.useEffect(()=>(a?o(!0):s(!0),()=>{a?o(!1):s(!1)}),[a,o,s]),r.type==="hover"?S.createElement(fN,de({},i,{ref:e,forceMount:n})):r.type==="scroll"?S.createElement(hN,de({},i,{ref:e,forceMount:n})):r.type==="auto"?S.createElement(iE,de({},i,{ref:e,forceMount:n})):r.type==="always"?S.createElement(um,de({},i,{ref:e})):null}),fN=S.forwardRef((t,e)=>{const{forceMount:n,...i}=t,r=Yn(tr,t.__scopeScrollArea),[o,s]=S.useState(!1);return S.useEffect(()=>{const a=r.scrollArea;let l=0;if(a){const c=()=>{window.clearTimeout(l),s(!0)},u=()=>{l=window.setTimeout(()=>s(!1),r.scrollHideDelay)};return a.addEventListener("pointerenter",c),a.addEventListener("pointerleave",u),()=>{window.clearTimeout(l),a.removeEventListener("pointerenter",c),a.removeEventListener("pointerleave",u)}}},[r.scrollArea,r.scrollHideDelay]),S.createElement(qr,{present:n||o},S.createElement(iE,de({"data-state":o?"visible":"hidden"},i,{ref:e})))}),hN=S.forwardRef((t,e)=>{const{forceMount:n,...i}=t,r=Yn(tr,t.__scopeScrollArea),o=t.orientation==="horizontal",s=gd(()=>l("SCROLL_END"),100),[a,l]=aN("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return S.useEffect(()=>{if(a==="idle"){const c=window.setTimeout(()=>l("HIDE"),r.scrollHideDelay);return()=>window.clearTimeout(c)}},[a,r.scrollHideDelay,l]),S.useEffect(()=>{const c=r.viewport,u=o?"scrollLeft":"scrollTop";if(c){let d=c[u];const f=()=>{const p=c[u];d!==p&&(l("SCROLL"),s()),d=p};return c.addEventListener("scroll",f),()=>c.removeEventListener("scroll",f)}},[r.viewport,o,l,s]),S.createElement(qr,{present:n||a!=="hidden"},S.createElement(um,de({"data-state":a==="hidden"?"hidden":"visible"},i,{ref:e,onPointerEnter:We(t.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:We(t.onPointerLeave,()=>l("POINTER_LEAVE"))})))}),iE=S.forwardRef((t,e)=>{const n=Yn(tr,t.__scopeScrollArea),{forceMount:i,...r}=t,[o,s]=S.useState(!1),a=t.orientation==="horizontal",l=gd(()=>{if(n.viewport){const c=n.viewport.offsetWidth<n.viewport.scrollWidth,u=n.viewport.offsetHeight<n.viewport.scrollHeight;s(a?c:u)}},10);return Zs(n.viewport,l),Zs(n.content,l),S.createElement(qr,{present:i||o},S.createElement(um,de({"data-state":o?"visible":"hidden"},r,{ref:e})))}),um=S.forwardRef((t,e)=>{const{orientation:n="vertical",...i}=t,r=Yn(tr,t.__scopeScrollArea),o=S.useRef(null),s=S.useRef(0),[a,l]=S.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=aE(a.viewport,a.content),u={...i,sizes:a,onSizesChange:l,hasThumb:c>0&&c<1,onThumbChange:f=>o.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function d(f,p){return SN(f,s.current,a,p)}return n==="horizontal"?S.createElement(pN,de({},u,{ref:e,onThumbPositionChange:()=>{if(r.viewport&&o.current){const f=r.viewport.scrollLeft,p=Rg(f,a,r.dir);o.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{r.viewport&&(r.viewport.scrollLeft=f)},onDragScroll:f=>{r.viewport&&(r.viewport.scrollLeft=d(f,r.dir))}})):n==="vertical"?S.createElement(mN,de({},u,{ref:e,onThumbPositionChange:()=>{if(r.viewport&&o.current){const f=r.viewport.scrollTop,p=Rg(f,a);o.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{r.viewport&&(r.viewport.scrollTop=f)},onDragScroll:f=>{r.viewport&&(r.viewport.scrollTop=d(f))}})):null}),pN=S.forwardRef((t,e)=>{const{sizes:n,onSizesChange:i,...r}=t,o=Yn(tr,t.__scopeScrollArea),[s,a]=S.useState(),l=S.useRef(null),c=ct(e,l,o.onScrollbarXChange);return S.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),S.createElement(oE,de({"data-orientation":"horizontal"},r,{ref:c,sizes:n,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":vd(n)+"px",...t.style},onThumbPointerDown:u=>t.onThumbPointerDown(u.x),onDragScroll:u=>t.onDragScroll(u.x),onWheelScroll:(u,d)=>{if(o.viewport){const f=o.viewport.scrollLeft+u.deltaX;t.onWheelScroll(f),cE(f,d)&&u.preventDefault()}},onResize:()=>{l.current&&o.viewport&&s&&i({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:Uu(s.paddingLeft),paddingEnd:Uu(s.paddingRight)}})}}))}),mN=S.forwardRef((t,e)=>{const{sizes:n,onSizesChange:i,...r}=t,o=Yn(tr,t.__scopeScrollArea),[s,a]=S.useState(),l=S.useRef(null),c=ct(e,l,o.onScrollbarYChange);return S.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),S.createElement(oE,de({"data-orientation":"vertical"},r,{ref:c,sizes:n,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":vd(n)+"px",...t.style},onThumbPointerDown:u=>t.onThumbPointerDown(u.y),onDragScroll:u=>t.onDragScroll(u.y),onWheelScroll:(u,d)=>{if(o.viewport){const f=o.viewport.scrollTop+u.deltaY;t.onWheelScroll(f),cE(f,d)&&u.preventDefault()}},onResize:()=>{l.current&&o.viewport&&s&&i({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:Uu(s.paddingTop),paddingEnd:Uu(s.paddingBottom)}})}}))}),[_N,rE]=tE(tr),oE=S.forwardRef((t,e)=>{const{__scopeScrollArea:n,sizes:i,hasThumb:r,onThumbChange:o,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:l,onDragScroll:c,onWheelScroll:u,onResize:d,...f}=t,p=Yn(tr,n),[_,v]=S.useState(null),m=ct(e,M=>v(M)),h=S.useRef(null),g=S.useRef(""),x=p.viewport,y=i.content-i.viewport,w=Ht(u),T=Ht(l),b=gd(d,10);function C(M){if(h.current){const E=M.clientX-h.current.left,U=M.clientY-h.current.top;c({x:E,y:U})}}return S.useEffect(()=>{const M=E=>{const U=E.target;(_==null?void 0:_.contains(U))&&w(E,y)};return document.addEventListener("wheel",M,{passive:!1}),()=>document.removeEventListener("wheel",M,{passive:!1})},[x,_,y,w]),S.useEffect(T,[i,T]),Zs(_,b),Zs(p.content,b),S.createElement(_N,{scope:n,scrollbar:_,hasThumb:r,onThumbChange:Ht(o),onThumbPointerUp:Ht(s),onThumbPositionChange:T,onThumbPointerDown:Ht(a)},S.createElement(Xe.div,de({},f,{ref:m,style:{position:"absolute",...f.style},onPointerDown:We(t.onPointerDown,M=>{M.button===0&&(M.target.setPointerCapture(M.pointerId),h.current=_.getBoundingClientRect(),g.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),C(M))}),onPointerMove:We(t.onPointerMove,C),onPointerUp:We(t.onPointerUp,M=>{const E=M.target;E.hasPointerCapture(M.pointerId)&&E.releasePointerCapture(M.pointerId),document.body.style.webkitUserSelect=g.current,p.viewport&&(p.viewport.style.scrollBehavior=""),h.current=null})})))}),Sp="ScrollAreaThumb",vN=S.forwardRef((t,e)=>{const{forceMount:n,...i}=t,r=rE(Sp,t.__scopeScrollArea);return S.createElement(qr,{present:n||r.hasThumb},S.createElement(gN,de({ref:e},i)))}),gN=S.forwardRef((t,e)=>{const{__scopeScrollArea:n,style:i,...r}=t,o=Yn(Sp,n),s=rE(Sp,n),{onThumbPositionChange:a}=s,l=ct(e,d=>s.onThumbChange(d)),c=S.useRef(),u=gd(()=>{c.current&&(c.current(),c.current=void 0)},100);return S.useEffect(()=>{const d=o.viewport;if(d){const f=()=>{if(u(),!c.current){const p=EN(d,a);c.current=p,a()}};return a(),d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[o.viewport,u,a]),S.createElement(Xe.div,de({"data-state":s.hasThumb?"visible":"hidden"},r,{ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:We(t.onPointerDownCapture,d=>{const p=d.target.getBoundingClientRect(),_=d.clientX-p.left,v=d.clientY-p.top;s.onThumbPointerDown({x:_,y:v})}),onPointerUp:We(t.onPointerUp,s.onThumbPointerUp)}))}),sE="ScrollAreaCorner",xN=S.forwardRef((t,e)=>{const n=Yn(sE,t.__scopeScrollArea),i=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&i?S.createElement(yN,de({},t,{ref:e})):null}),yN=S.forwardRef((t,e)=>{const{__scopeScrollArea:n,...i}=t,r=Yn(sE,n),[o,s]=S.useState(0),[a,l]=S.useState(0),c=!!(o&&a);return Zs(r.scrollbarX,()=>{var u;const d=((u=r.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;r.onCornerHeightChange(d),l(d)}),Zs(r.scrollbarY,()=>{var u;const d=((u=r.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;r.onCornerWidthChange(d),s(d)}),c?S.createElement(Xe.div,de({},i,{ref:e,style:{width:o,height:a,position:"absolute",right:r.dir==="ltr"?0:void 0,left:r.dir==="rtl"?0:void 0,bottom:0,...t.style}})):null});function Uu(t){return t?parseInt(t,10):0}function aE(t,e){const n=t/e;return isNaN(n)?0:n}function vd(t){const e=aE(t.viewport,t.content),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=(t.scrollbar.size-n)*e;return Math.max(i,18)}function SN(t,e,n,i="ltr"){const r=vd(n),o=r/2,s=e||o,a=r-s,l=n.scrollbar.paddingStart+s,c=n.scrollbar.size-n.scrollbar.paddingEnd-a,u=n.content-n.viewport,d=i==="ltr"?[0,u]:[u*-1,0];return lE([l,c],d)(t)}function Rg(t,e,n="ltr"){const i=vd(e),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=e.scrollbar.size-r,s=e.content-e.viewport,a=o-i,l=n==="ltr"?[0,s]:[s*-1,0],c=yp(t,l);return lE([0,s],[0,a])(c)}function lE(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(t[1]-t[0]);return e[0]+i*(n-t[0])}}function cE(t,e){return t>0&&t<e}const EN=(t,e=()=>{})=>{let n={left:t.scrollLeft,top:t.scrollTop},i=0;return function r(){const o={left:t.scrollLeft,top:t.scrollTop},s=n.left!==o.left,a=n.top!==o.top;(s||a)&&e(),n=o,i=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(i)};function gd(t,e){const n=Ht(t),i=S.useRef(0);return S.useEffect(()=>()=>window.clearTimeout(i.current),[]),S.useCallback(()=>{window.clearTimeout(i.current),i.current=window.setTimeout(n,e)},[n,e])}function Zs(t,e){const n=Ht(e);on(()=>{let i=0;if(t){const r=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(n)});return r.observe(t),()=>{window.cancelAnimationFrame(i),r.unobserve(t)}}},[t,n])}const uE=cN,TN=dN,wN=xN,xd=S.forwardRef(({className:t,children:e,...n},i)=>L.jsxs(uE,{ref:i,className:dt("relative overflow-hidden",t),...n,children:[L.jsx(TN,{className:"h-full w-full rounded-[inherit]",children:e}),L.jsx(dE,{}),L.jsx(wN,{})]}));xd.displayName=uE.displayName;const dE=S.forwardRef(({className:t,orientation:e="vertical",...n},i)=>L.jsx(nE,{ref:i,orientation:e,className:dt("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...n,children:L.jsx(vN,{className:"relative flex-1 rounded-full bg-border"})}));dE.displayName=nE.displayName;const fE=S.forwardRef(({className:t,type:e,...n},i)=>L.jsx("input",{type:e,className:dt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...n}));fE.displayName="Input";const Ou=S.forwardRef((t,e)=>S.createElement(Xe.label,de({},t,{ref:e,onMouseDown:n=>{var i;(i=t.onMouseDown)===null||i===void 0||i.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),hE=Ou,MN=cm("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),dm=S.forwardRef(({className:t,...e},n)=>L.jsx(hE,{ref:n,className:dt(MN(),t),...e}));dm.displayName=hE.displayName;class qe extends S.Component{constructor(){super(...arguments);Ye(this,"handleChange",n=>{const{setUiState:i}=this.context;i({[n.target.name]:n.target.value})})}render(){const{name:n,labelText:i}=this.props,{uiState:r}=this.context,o=r[n];return L.jsx("div",{className:"w-full p-2",children:L.jsxs(dm,{className:"w-50",children:[i,L.jsx(fE,{name:n,value:o,onChange:this.handleChange})]})})}}Ye(qe,"contextType",ui);function bN(t,e=globalThis==null?void 0:globalThis.document){const n=Ht(t);S.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i),()=>e.removeEventListener("keydown",i)},[n,e])}const Ep="dismissableLayer.update",AN="dismissableLayer.pointerDownOutside",RN="dismissableLayer.focusOutside";let Cg;const CN=S.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),PN=S.forwardRef((t,e)=>{var n;const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=t,u=S.useContext(CN),[d,f]=S.useState(null),p=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,_]=S.useState({}),v=ct(e,C=>f(C)),m=Array.from(u.layers),[h]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(h),x=d?m.indexOf(d):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,w=x>=g,T=IN(C=>{const M=C.target,E=[...u.branches].some(U=>U.contains(M));!w||E||(o==null||o(C),a==null||a(C),C.defaultPrevented||l==null||l())},p),b=DN(C=>{const M=C.target;[...u.branches].some(U=>U.contains(M))||(s==null||s(C),a==null||a(C),C.defaultPrevented||l==null||l())},p);return bN(C=>{x===u.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&l&&(C.preventDefault(),l()))},p),S.useEffect(()=>{if(d)return i&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Cg=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Pg(),()=>{i&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Cg)}},[d,p,i,u]),S.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Pg())},[d,u]),S.useEffect(()=>{const C=()=>_({});return document.addEventListener(Ep,C),()=>document.removeEventListener(Ep,C)},[]),S.createElement(Xe.div,de({},c,{ref:v,style:{pointerEvents:y?w?"auto":"none":void 0,...t.style},onFocusCapture:We(t.onFocusCapture,b.onFocusCapture),onBlurCapture:We(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:We(t.onPointerDownCapture,T.onPointerDownCapture)}))});function IN(t,e=globalThis==null?void 0:globalThis.document){const n=Ht(t),i=S.useRef(!1),r=S.useRef(()=>{});return S.useEffect(()=>{const o=a=>{if(a.target&&!i.current){let u=function(){pE(AN,n,c,{discrete:!0})};var l=u;const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=u,e.addEventListener("click",r.current,{once:!0})):u()}else e.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function DN(t,e=globalThis==null?void 0:globalThis.document){const n=Ht(t),i=S.useRef(!1);return S.useEffect(()=>{const r=o=>{o.target&&!i.current&&pE(RN,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Pg(){const t=new CustomEvent(Ep);document.dispatchEvent(t)}function pE(t,e,n,{discrete:i}){const r=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?pI(r,o):r.dispatchEvent(o)}let Qf=0;function NN(){S.useEffect(()=>{var t,e;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(t=n[0])!==null&&t!==void 0?t:Ig()),document.body.insertAdjacentElement("beforeend",(e=n[1])!==null&&e!==void 0?e:Ig()),Qf++,()=>{Qf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),Qf--}},[])}function Ig(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",t}const eh="focusScope.autoFocusOnMount",th="focusScope.autoFocusOnUnmount",Dg={bubbles:!1,cancelable:!0},LN=S.forwardRef((t,e)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:o,...s}=t,[a,l]=S.useState(null),c=Ht(r),u=Ht(o),d=S.useRef(null),f=ct(e,v=>l(v)),p=S.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;S.useEffect(()=>{if(i){let g=function(T){if(p.paused||!a)return;const b=T.target;a.contains(b)?d.current=b:hr(d.current,{select:!0})},x=function(T){if(p.paused||!a)return;const b=T.relatedTarget;b!==null&&(a.contains(b)||hr(d.current,{select:!0}))},y=function(T){if(document.activeElement===document.body)for(const C of T)C.removedNodes.length>0&&hr(a)};var v=g,m=x,h=y;document.addEventListener("focusin",g),document.addEventListener("focusout",x);const w=new MutationObserver(y);return a&&w.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",x),w.disconnect()}}},[i,a,p.paused]),S.useEffect(()=>{if(a){Lg.add(p);const v=document.activeElement;if(!a.contains(v)){const h=new CustomEvent(eh,Dg);a.addEventListener(eh,c),a.dispatchEvent(h),h.defaultPrevented||(UN(BN(mE(a)),{select:!0}),document.activeElement===v&&hr(a))}return()=>{a.removeEventListener(eh,c),setTimeout(()=>{const h=new CustomEvent(th,Dg);a.addEventListener(th,u),a.dispatchEvent(h),h.defaultPrevented||hr(v??document.body,{select:!0}),a.removeEventListener(th,u),Lg.remove(p)},0)}}},[a,c,u,p]);const _=S.useCallback(v=>{if(!n&&!i||p.paused)return;const m=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,h=document.activeElement;if(m&&h){const g=v.currentTarget,[x,y]=ON(g);x&&y?!v.shiftKey&&h===y?(v.preventDefault(),n&&hr(x,{select:!0})):v.shiftKey&&h===x&&(v.preventDefault(),n&&hr(y,{select:!0})):h===g&&v.preventDefault()}},[n,i,p.paused]);return S.createElement(Xe.div,de({tabIndex:-1},s,{ref:f,onKeyDown:_}))});function UN(t,{select:e=!1}={}){const n=document.activeElement;for(const i of t)if(hr(i,{select:e}),document.activeElement!==n)return}function ON(t){const e=mE(t),n=Ng(e,t),i=Ng(e.reverse(),t);return[n,i]}function mE(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Ng(t,e){for(const n of t)if(!zN(n,{upTo:e}))return n}function zN(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function FN(t){return t instanceof HTMLInputElement&&"select"in t}function hr(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&FN(t)&&e&&t.select()}}const Lg=kN();function kN(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=Ug(t,e),t.unshift(e)},remove(e){var n;t=Ug(t,e),(n=t[0])===null||n===void 0||n.resume()}}}function Ug(t,e){const n=[...t],i=n.indexOf(e);return i!==-1&&n.splice(i,1),n}function BN(t){return t.filter(e=>e.tagName!=="A")}const $N=["top","right","bottom","left"],Si=Math.min,Cn=Math.max,zu=Math.round,Cc=Math.floor,Vr=t=>({x:t,y:t}),VN={left:"right",right:"left",bottom:"top",top:"bottom"},GN={start:"end",end:"start"};function Tp(t,e,n){return Cn(t,Si(e,n))}function Ji(t,e){return typeof t=="function"?t(e):t}function Qi(t){return t.split("-")[0]}function da(t){return t.split("-")[1]}function fm(t){return t==="x"?"y":"x"}function hm(t){return t==="y"?"height":"width"}function fa(t){return["top","bottom"].includes(Qi(t))?"y":"x"}function pm(t){return fm(fa(t))}function HN(t,e,n){n===void 0&&(n=!1);const i=da(t),r=pm(t),o=hm(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Fu(s)),[s,Fu(s)]}function WN(t){const e=Fu(t);return[wp(t),e,wp(e)]}function wp(t){return t.replace(/start|end/g,e=>GN[e])}function XN(t,e,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?o:s;default:return[]}}function jN(t,e,n,i){const r=da(t);let o=XN(Qi(t),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),e&&(o=o.concat(o.map(wp)))),o}function Fu(t){return t.replace(/left|right|bottom|top/g,e=>VN[e])}function YN(t){return{top:0,right:0,bottom:0,left:0,...t}}function _E(t){return typeof t!="number"?YN(t):{top:t,right:t,bottom:t,left:t}}function ku(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Og(t,e,n){let{reference:i,floating:r}=t;const o=fa(e),s=pm(e),a=hm(s),l=Qi(e),c=o==="y",u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,f=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-r.width,y:d};break;default:p={x:i.x,y:i.y}}switch(da(e)){case"start":p[s]-=f*(n&&c?-1:1);break;case"end":p[s]+=f*(n&&c?-1:1);break}return p}const qN=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Og(c,i,l),f=i,p={},_=0;for(let v=0;v<a.length;v++){const{name:m,fn:h}=a[v],{x:g,y:x,data:y,reset:w}=await h({x:u,y:d,initialPlacement:i,placement:f,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});u=g??u,d=x??d,p={...p,[m]:{...p[m],...y}},w&&_<=50&&(_++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(c=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):w.rects),{x:u,y:d}=Og(c,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}};async function Sl(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Ji(e,t),_=_E(p),m=a[f?d==="floating"?"reference":"floating":d],h=ku(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(m)))==null||n?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),g=d==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),y=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},w=ku(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:x,strategy:l}):g);return{top:(h.top-w.top+_.top)/y.y,bottom:(w.bottom-h.bottom+_.bottom)/y.y,left:(h.left-w.left+_.left)/y.x,right:(w.right-h.right+_.right)/y.x}}const KN=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=Ji(t,e)||{};if(c==null)return{};const d=_E(u),f={x:n,y:i},p=pm(r),_=hm(p),v=await s.getDimensions(c),m=p==="y",h=m?"top":"left",g=m?"bottom":"right",x=m?"clientHeight":"clientWidth",y=o.reference[_]+o.reference[p]-f[p]-o.floating[_],w=f[p]-o.reference[p],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let b=T?T[x]:0;(!b||!await(s.isElement==null?void 0:s.isElement(T)))&&(b=a.floating[x]||o.floating[_]);const C=y/2-w/2,M=b/2-v[_]/2-1,E=Si(d[h],M),U=Si(d[g],M),O=E,D=b-v[_]-U,B=b/2-v[_]/2+C,F=Tp(O,B,D),X=!l.arrow&&da(r)!=null&&B!==F&&o.reference[_]/2-(B<O?E:U)-v[_]/2<0,K=X?B<O?B-O:B-D:0;return{[p]:f[p]+K,data:{[p]:F,centerOffset:B-F-K,...X&&{alignmentOffset:K}},reset:X}}}),ZN=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:v=!0,...m}=Ji(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const h=Qi(r),g=Qi(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),y=f||(g||!v?[Fu(a)]:WN(a));!f&&_!=="none"&&y.push(...jN(a,v,_,x));const w=[a,...y],T=await Sl(e,m),b=[];let C=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&b.push(T[h]),d){const O=HN(r,s,x);b.push(T[O[0]],T[O[1]])}if(C=[...C,{placement:r,overflows:b}],!b.every(O=>O<=0)){var M,E;const O=(((M=o.flip)==null?void 0:M.index)||0)+1,D=w[O];if(D)return{data:{index:O,overflows:C},reset:{placement:D}};let B=(E=C.filter(F=>F.overflows[0]<=0).sort((F,X)=>F.overflows[1]-X.overflows[1])[0])==null?void 0:E.placement;if(!B)switch(p){case"bestFit":{var U;const F=(U=C.map(X=>[X.placement,X.overflows.filter(K=>K>0).reduce((K,N)=>K+N,0)]).sort((X,K)=>X[1]-K[1])[0])==null?void 0:U[0];F&&(B=F);break}case"initialPlacement":B=a;break}if(r!==B)return{reset:{placement:B}}}return{}}}};function zg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Fg(t){return $N.some(e=>t[e]>=0)}const JN=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=Ji(t,e);switch(i){case"referenceHidden":{const o=await Sl(e,{...r,elementContext:"reference"}),s=zg(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Fg(s)}}}case"escaped":{const o=await Sl(e,{...r,altBoundary:!0}),s=zg(o,n.floating);return{data:{escapedOffsets:s,escaped:Fg(s)}}}default:return{}}}}};async function QN(t,e){const{placement:n,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=Qi(n),a=da(n),l=fa(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,d=Ji(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:_}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof _=="number"&&(p=a==="end"?_*-1:_),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const eL=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=e,l=await QN(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},tL=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:m=>{let{x:h,y:g}=m;return{x:h,y:g}}},...l}=Ji(t,e),c={x:n,y:i},u=await Sl(e,l),d=fa(Qi(r)),f=fm(d);let p=c[f],_=c[d];if(o){const m=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=p+u[m],x=p-u[h];p=Tp(g,p,x)}if(s){const m=d==="y"?"top":"left",h=d==="y"?"bottom":"right",g=_+u[m],x=_-u[h];_=Tp(g,_,x)}const v=a.fn({...e,[f]:p,[d]:_});return{...v,data:{x:v.x-n,y:v.y-i}}}}},nL=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Ji(t,e),u={x:n,y:i},d=fa(r),f=fm(d);let p=u[f],_=u[d];const v=Ji(a,e),m=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const x=f==="y"?"height":"width",y=o.reference[f]-o.floating[x]+m.mainAxis,w=o.reference[f]+o.reference[x]-m.mainAxis;p<y?p=y:p>w&&(p=w)}if(c){var h,g;const x=f==="y"?"width":"height",y=["top","left"].includes(Qi(r)),w=o.reference[d]-o.floating[x]+(y&&((h=s.offset)==null?void 0:h[d])||0)+(y?0:m.crossAxis),T=o.reference[d]+o.reference[x]+(y?0:((g=s.offset)==null?void 0:g[d])||0)-(y?m.crossAxis:0);_<w?_=w:_>T&&(_=T)}return{[f]:p,[d]:_}}}},iL=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:r,elements:o}=e,{apply:s=()=>{},...a}=Ji(t,e),l=await Sl(e,a),c=Qi(n),u=da(n),d=fa(n)==="y",{width:f,height:p}=i.floating;let _,v;c==="top"||c==="bottom"?(_=c,v=u===(await(r.isRTL==null?void 0:r.isRTL(o.floating))?"start":"end")?"left":"right"):(v=c,_=u==="end"?"top":"bottom");const m=p-l.top-l.bottom,h=f-l.left-l.right,g=Si(p-l[_],m),x=Si(f-l[v],h),y=!e.middlewareData.shift;let w=g,T=x;if(d?T=u||y?Si(x,h):h:w=u||y?Si(g,m):m,y&&!u){const C=Cn(l.left,0),M=Cn(l.right,0),E=Cn(l.top,0),U=Cn(l.bottom,0);d?T=f-2*(C!==0||M!==0?C+M:Cn(l.left,l.right)):w=p-2*(E!==0||U!==0?E+U:Cn(l.top,l.bottom))}await s({...e,availableWidth:T,availableHeight:w});const b=await r.getDimensions(o.floating);return f!==b.width||p!==b.height?{reset:{rects:!0}}:{}}}};function ha(t){return vE(t)?(t.nodeName||"").toLowerCase():"#document"}function Un(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function nr(t){var e;return(e=(vE(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vE(t){return t instanceof Node||t instanceof Un(t).Node}function bi(t){return t instanceof Element||t instanceof Un(t).Element}function Ai(t){return t instanceof HTMLElement||t instanceof Un(t).HTMLElement}function kg(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Un(t).ShadowRoot}function Ol(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=ci(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function rL(t){return["table","td","th"].includes(ha(t))}function mm(t){const e=_m(),n=ci(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function oL(t){let e=Gr(t);for(;Ai(e)&&!Js(e);){if(mm(e))return e;e=Gr(e)}return null}function _m(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Js(t){return["html","body","#document"].includes(ha(t))}function ci(t){return Un(t).getComputedStyle(t)}function yd(t){return bi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Gr(t){if(ha(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kg(t)&&t.host||nr(t);return kg(e)?e.host:e}function gE(t){const e=Gr(t);return Js(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ai(e)&&Ol(e)?e:gE(e)}function El(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=gE(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=Un(r);return o?e.concat(s,s.visualViewport||[],Ol(r)?r:[],s.frameElement&&n?El(s.frameElement):[]):e.concat(r,El(r,[],n))}function xE(t){const e=ci(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ai(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,a=zu(n)!==o||zu(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function vm(t){return bi(t)?t:t.contextElement}function zs(t){const e=vm(t);if(!Ai(e))return Vr(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=xE(e);let s=(o?zu(n.width):n.width)/i,a=(o?zu(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const sL=Vr(0);function yE(t){const e=Un(t);return!_m()||!e.visualViewport?sL:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function aL(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Un(t)?!1:e}function No(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),o=vm(t);let s=Vr(1);e&&(i?bi(i)&&(s=zs(i)):s=zs(t));const a=aL(o,n,i)?yE(o):Vr(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(o){const f=Un(o),p=i&&bi(i)?Un(i):i;let _=f,v=_.frameElement;for(;v&&i&&p!==_;){const m=zs(v),h=v.getBoundingClientRect(),g=ci(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*m.x,y=h.top+(v.clientTop+parseFloat(g.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=x,c+=y,_=Un(v),v=_.frameElement}}return ku({width:u,height:d,x:l,y:c})}const lL=[":popover-open",":modal"];function gm(t){return lL.some(e=>{try{return t.matches(e)}catch{return!1}})}function cL(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const o=r==="fixed",s=nr(i),a=e?gm(e.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Vr(1);const u=Vr(0),d=Ai(i);if((d||!d&&!o)&&((ha(i)!=="body"||Ol(s))&&(l=yd(i)),Ai(i))){const f=No(i);c=zs(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function uL(t){return Array.from(t.getClientRects())}function SE(t){return No(nr(t)).left+yd(t).scrollLeft}function dL(t){const e=nr(t),n=yd(t),i=t.ownerDocument.body,r=Cn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Cn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+SE(t);const a=-n.scrollTop;return ci(i).direction==="rtl"&&(s+=Cn(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function fL(t,e){const n=Un(t),i=nr(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=_m();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function hL(t,e){const n=No(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=Ai(t)?zs(t):Vr(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function Bg(t,e,n){let i;if(e==="viewport")i=fL(t,n);else if(e==="document")i=dL(nr(t));else if(bi(e))i=hL(e,n);else{const r=yE(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return ku(i)}function EE(t,e){const n=Gr(t);return n===e||!bi(n)||Js(n)?!1:ci(n).position==="fixed"||EE(n,e)}function pL(t,e){const n=e.get(t);if(n)return n;let i=El(t,[],!1).filter(a=>bi(a)&&ha(a)!=="body"),r=null;const o=ci(t).position==="fixed";let s=o?Gr(t):t;for(;bi(s)&&!Js(s);){const a=ci(s),l=mm(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ol(s)&&!l&&EE(t,s))?i=i.filter(u=>u!==s):r=a,s=Gr(s)}return e.set(t,i),i}function mL(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const s=[...n==="clippingAncestors"?gm(e)?[]:pL(e,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=Bg(e,u,r);return c.top=Cn(d.top,c.top),c.right=Si(d.right,c.right),c.bottom=Si(d.bottom,c.bottom),c.left=Cn(d.left,c.left),c},Bg(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _L(t){const{width:e,height:n}=xE(t);return{width:e,height:n}}function vL(t,e,n){const i=Ai(e),r=nr(e),o=n==="fixed",s=No(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Vr(0);if(i||!i&&!o)if((ha(e)!=="body"||Ol(r))&&(a=yd(e)),i){const d=No(e,!0,o,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&(l.x=SE(r));const c=s.left+a.scrollLeft-l.x,u=s.top+a.scrollTop-l.y;return{x:c,y:u,width:s.width,height:s.height}}function nh(t){return ci(t).position==="static"}function $g(t,e){return!Ai(t)||ci(t).position==="fixed"?null:e?e(t):t.offsetParent}function TE(t,e){const n=Un(t);if(gm(t))return n;if(!Ai(t)){let r=Gr(t);for(;r&&!Js(r);){if(bi(r)&&!nh(r))return r;r=Gr(r)}return n}let i=$g(t,e);for(;i&&rL(i)&&nh(i);)i=$g(i,e);return i&&Js(i)&&nh(i)&&!mm(i)?n:i||oL(t)||n}const gL=async function(t){const e=this.getOffsetParent||TE,n=this.getDimensions,i=await n(t.floating);return{reference:vL(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function xL(t){return ci(t).direction==="rtl"}const yL={convertOffsetParentRelativeRectToViewportRelativeRect:cL,getDocumentElement:nr,getClippingRect:mL,getOffsetParent:TE,getElementRects:gL,getClientRects:uL,getDimensions:_L,getScale:zs,isElement:bi,isRTL:xL};function SL(t,e){let n=null,i;const r=nr(t);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:d,height:f}=t.getBoundingClientRect();if(a||e(),!d||!f)return;const p=Cc(u),_=Cc(r.clientWidth-(c+d)),v=Cc(r.clientHeight-(u+f)),m=Cc(c),g={rootMargin:-p+"px "+-_+"px "+-v+"px "+-m+"px",threshold:Cn(0,Si(1,l))||1};let x=!0;function y(w){const T=w[0].intersectionRatio;if(T!==l){if(!x)return s();T?s(!1,T):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(y,{...g,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,g)}n.observe(t)}return s(!0),o}function EL(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=vm(t),u=r||o?[...c?El(c):[],...El(e)]:[];u.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const d=c&&a?SL(c,n):null;let f=-1,p=null;s&&(p=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let _,v=l?No(t):null;l&&m();function m(){const h=No(t);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,_=requestAnimationFrame(m)}return n(),()=>{var h;u.forEach(g=>{r&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),d==null||d(),(h=p)==null||h.disconnect(),p=null,l&&cancelAnimationFrame(_)}}const TL=eL,wL=tL,ML=ZN,bL=iL,AL=JN,Vg=KN,RL=nL,CL=(t,e,n)=>{const i=new Map,r={platform:yL,...n},o={...r.platform,_c:i};return qN(t,e,{...r,platform:o})},PL=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?Vg({element:i.current,padding:r}).fn(n):{}:i?Vg({element:i,padding:r}).fn(n):{}}}};var Jc=typeof document<"u"?S.useLayoutEffect:S.useEffect;function Bu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!Bu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const o=r[i];if(!(o==="_owner"&&t.$$typeof)&&!Bu(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function wE(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Gg(t,e){const n=wE(t);return Math.round(e*n)/n}function Hg(t){const e=S.useRef(t);return Jc(()=>{e.current=t}),e}function IL(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,d]=S.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[f,p]=S.useState(i);Bu(f,i)||p(i);const[_,v]=S.useState(null),[m,h]=S.useState(null),g=S.useCallback(K=>{K!==T.current&&(T.current=K,v(K))},[]),x=S.useCallback(K=>{K!==b.current&&(b.current=K,h(K))},[]),y=o||_,w=s||m,T=S.useRef(null),b=S.useRef(null),C=S.useRef(u),M=l!=null,E=Hg(l),U=Hg(r),O=S.useCallback(()=>{if(!T.current||!b.current)return;const K={placement:e,strategy:n,middleware:f};U.current&&(K.platform=U.current),CL(T.current,b.current,K).then(N=>{const H={...N,isPositioned:!0};D.current&&!Bu(C.current,H)&&(C.current=H,zo.flushSync(()=>{d(H)}))})},[f,e,n,U]);Jc(()=>{c===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,d(K=>({...K,isPositioned:!1})))},[c]);const D=S.useRef(!1);Jc(()=>(D.current=!0,()=>{D.current=!1}),[]),Jc(()=>{if(y&&(T.current=y),w&&(b.current=w),y&&w){if(E.current)return E.current(y,w,O);O()}},[y,w,O,E,M]);const B=S.useMemo(()=>({reference:T,floating:b,setReference:g,setFloating:x}),[g,x]),F=S.useMemo(()=>({reference:y,floating:w}),[y,w]),X=S.useMemo(()=>{const K={position:n,left:0,top:0};if(!F.floating)return K;const N=Gg(F.floating,u.x),H=Gg(F.floating,u.y);return a?{...K,transform:"translate("+N+"px, "+H+"px)",...wE(F.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:H}},[n,a,F.floating,u.x,u.y]);return S.useMemo(()=>({...u,update:O,refs:B,elements:F,floatingStyles:X}),[u,O,B,F,X])}function ME(t){const[e,n]=S.useState(void 0);return on(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const o=r[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}const bE="Popper",[AE,RE]=Ci(bE),[DL,CE]=AE(bE),NL=t=>{const{__scopePopper:e,children:n}=t,[i,r]=S.useState(null);return S.createElement(DL,{scope:e,anchor:i,onAnchorChange:r},n)},LL="PopperAnchor",UL=S.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,o=CE(LL,n),s=S.useRef(null),a=ct(e,s);return S.useEffect(()=>{o.onAnchorChange((i==null?void 0:i.current)||s.current)}),i?null:S.createElement(Xe.div,de({},r,{ref:a}))}),PE="PopperContent",[OL,N5]=AE(PE),zL=S.forwardRef((t,e)=>{var n,i,r,o,s,a,l,c;const{__scopePopper:u,side:d="bottom",sideOffset:f=0,align:p="center",alignOffset:_=0,arrowPadding:v=0,avoidCollisions:m=!0,collisionBoundary:h=[],collisionPadding:g=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:w="optimized",onPlaced:T,...b}=t,C=CE(PE,u),[M,E]=S.useState(null),U=ct(e,Re=>E(Re)),[O,D]=S.useState(null),B=ME(O),F=(n=B==null?void 0:B.width)!==null&&n!==void 0?n:0,X=(i=B==null?void 0:B.height)!==null&&i!==void 0?i:0,K=d+(p!=="center"?"-"+p:""),N=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},H=Array.isArray(h)?h:[h],W=H.length>0,re={padding:N,boundary:H.filter(FL),altBoundary:W},{refs:ee,floatingStyles:fe,placement:$,isPositioned:q,middlewareData:te}=IL({strategy:"fixed",placement:K,whileElementsMounted:(...Re)=>EL(...Re,{animationFrame:w==="always"}),elements:{reference:C.anchor},middleware:[TL({mainAxis:f+X,alignmentAxis:_}),m&&wL({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?RL():void 0,...re}),m&&ML({...re}),bL({...re,apply:({elements:Re,rects:De,availableWidth:Ne,availableHeight:rt})=>{const{width:I,height:A}=De.reference,J=Re.floating.style;J.setProperty("--radix-popper-available-width",`${Ne}px`),J.setProperty("--radix-popper-available-height",`${rt}px`),J.setProperty("--radix-popper-anchor-width",`${I}px`),J.setProperty("--radix-popper-anchor-height",`${A}px`)}}),O&&PL({element:O,padding:v}),kL({arrowWidth:F,arrowHeight:X}),y&&AL({strategy:"referenceHidden",...re})]}),[P,Q]=IE($),le=Ht(T);on(()=>{q&&(le==null||le())},[q,le]);const z=(r=te.arrow)===null||r===void 0?void 0:r.x,pe=(o=te.arrow)===null||o===void 0?void 0:o.y,ie=((s=te.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[Ce,ye]=S.useState();return on(()=>{M&&ye(window.getComputedStyle(M).zIndex)},[M]),S.createElement("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...fe,transform:q?fe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ce,"--radix-popper-transform-origin":[(a=te.transformOrigin)===null||a===void 0?void 0:a.x,(l=te.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:t.dir},S.createElement(OL,{scope:u,placedSide:P,onArrowChange:D,arrowX:z,arrowY:pe,shouldHideArrow:ie},S.createElement(Xe.div,de({"data-side":P,"data-align":Q},b,{ref:U,style:{...b.style,animation:q?void 0:"none",opacity:(c=te.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function FL(t){return t!==null}const kL=t=>({name:"transformOrigin",options:t,fn(e){var n,i,r,o,s;const{placement:a,rects:l,middlewareData:c}=e,d=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,f=d?0:t.arrowWidth,p=d?0:t.arrowHeight,[_,v]=IE(a),m={start:"0%",center:"50%",end:"100%"}[v],h=((i=(r=c.arrow)===null||r===void 0?void 0:r.x)!==null&&i!==void 0?i:0)+f/2,g=((o=(s=c.arrow)===null||s===void 0?void 0:s.y)!==null&&o!==void 0?o:0)+p/2;let x="",y="";return _==="bottom"?(x=d?m:`${h}px`,y=`${-p}px`):_==="top"?(x=d?m:`${h}px`,y=`${l.floating.height+p}px`):_==="right"?(x=`${-p}px`,y=d?m:`${g}px`):_==="left"&&(x=`${l.floating.width+p}px`,y=d?m:`${g}px`),{data:{x,y}}}});function IE(t){const[e,n="center"]=t.split("-");return[e,n]}const BL=NL,$L=UL,VL=zL,GL=S.forwardRef((t,e)=>{var n;const{container:i=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...r}=t;return i?DM.createPortal(S.createElement(Xe.div,de({},r,{ref:e})),i):null});function DE(t){const e=S.useRef({value:t,previous:t});return S.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}const HL=S.forwardRef((t,e)=>S.createElement(Xe.span,de({},t,{ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}})));var WL=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},ss=new WeakMap,Pc=new WeakMap,Ic={},ih=0,NE=function(t){return t&&(t.host||NE(t.parentNode))},XL=function(t,e){return e.map(function(n){if(t.contains(n))return n;var i=NE(n);return i&&t.contains(i)?i:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},jL=function(t,e,n,i){var r=XL(e,Array.isArray(t)?t:[t]);Ic[n]||(Ic[n]=new WeakMap);var o=Ic[n],s=[],a=new Set,l=new Set(r),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};r.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))u(f);else try{var p=f.getAttribute(i),_=p!==null&&p!=="false",v=(ss.get(f)||0)+1,m=(o.get(f)||0)+1;ss.set(f,v),o.set(f,m),s.push(f),v===1&&_&&Pc.set(f,!0),m===1&&f.setAttribute(n,"true"),_||f.setAttribute(i,"true")}catch(h){console.error("aria-hidden: cannot operate on ",f,h)}})};return u(e),a.clear(),ih++,function(){s.forEach(function(d){var f=ss.get(d)-1,p=o.get(d)-1;ss.set(d,f),o.set(d,p),f||(Pc.has(d)||d.removeAttribute(i),Pc.delete(d)),p||d.removeAttribute(n)}),ih--,ih||(ss=new WeakMap,ss=new WeakMap,Pc=new WeakMap,Ic={})}},YL=function(t,e,n){n===void 0&&(n="data-aria-hidden");var i=Array.from(Array.isArray(t)?t:[t]),r=WL(t);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live]"))),jL(i,r,n,"aria-hidden")):function(){return null}},yi=function(){return yi=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},yi.apply(this,arguments)};function LE(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function qL(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var Qc="right-scroll-bar-position",eu="width-before-scroll-bar",KL="with-scroll-bars-hidden",ZL="--removed-body-scroll-bar-size";function rh(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function JL(t,e){var n=S.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=e,n.facade}var QL=typeof window<"u"?S.useLayoutEffect:S.useEffect,Wg=new WeakMap;function eU(t,e){var n=JL(null,function(i){return t.forEach(function(r){return rh(r,i)})});return QL(function(){var i=Wg.get(n);if(i){var r=new Set(i),o=new Set(t),s=n.current;r.forEach(function(a){o.has(a)||rh(a,null)}),o.forEach(function(a){r.has(a)||rh(a,s)})}Wg.set(n,t)},[t]),n}function tU(t){return t}function nU(t,e){e===void 0&&(e=tU);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(o){var s=e(o,i);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(i=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){i=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var u=s;s=[],u.forEach(o)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){s.push(u),c()},filter:function(u){return s=s.filter(u),n}}}};return r}function iU(t){t===void 0&&(t={});var e=nU(null);return e.options=yi({async:!0,ssr:!1},t),e}var UE=function(t){var e=t.sideCar,n=LE(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return S.createElement(i,yi({},n))};UE.isSideCarExport=!0;function rU(t,e){return t.useMedium(e),UE}var OE=iU(),oh=function(){},Sd=S.forwardRef(function(t,e){var n=S.useRef(null),i=S.useState({onScrollCapture:oh,onWheelCapture:oh,onTouchMoveCapture:oh}),r=i[0],o=i[1],s=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,u=t.enabled,d=t.shards,f=t.sideCar,p=t.noIsolation,_=t.inert,v=t.allowPinchZoom,m=t.as,h=m===void 0?"div":m,g=LE(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=f,y=eU([n,e]),w=yi(yi({},g),r);return S.createElement(S.Fragment,null,u&&S.createElement(x,{sideCar:OE,removeScrollBar:c,shards:d,noIsolation:p,inert:_,setCallbacks:o,allowPinchZoom:!!v,lockRef:n}),s?S.cloneElement(S.Children.only(a),yi(yi({},w),{ref:y})):S.createElement(h,yi({},w,{className:l,ref:y}),a))});Sd.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Sd.classNames={fullWidth:eu,zeroRight:Qc};var oU=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function sU(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=oU();return e&&t.setAttribute("nonce",e),t}function aU(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function lU(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var cU=function(){var t=0,e=null;return{add:function(n){t==0&&(e=sU())&&(aU(e,n),lU(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},uU=function(){var t=cU();return function(e,n){S.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},zE=function(){var t=uU(),e=function(n){var i=n.styles,r=n.dynamic;return t(i,r),null};return e},dU={left:0,top:0,right:0,gap:0},sh=function(t){return parseInt(t||"",10)||0},fU=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],i=e[t==="padding"?"paddingTop":"marginTop"],r=e[t==="padding"?"paddingRight":"marginRight"];return[sh(n),sh(i),sh(r)]},hU=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return dU;var e=fU(t),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-n+e[2]-e[0])}},pU=zE(),Fs="data-scroll-locked",mU=function(t,e,n,i){var r=t.left,o=t.top,s=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(KL,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat(Fs,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Qc,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(eu,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Qc," .").concat(Qc,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(eu," .").concat(eu,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Fs,`] {
    `).concat(ZL,": ").concat(a,`px;
  }
`)},Xg=function(){var t=parseInt(document.body.getAttribute(Fs)||"0",10);return isFinite(t)?t:0},_U=function(){S.useEffect(function(){return document.body.setAttribute(Fs,(Xg()+1).toString()),function(){var t=Xg()-1;t<=0?document.body.removeAttribute(Fs):document.body.setAttribute(Fs,t.toString())}},[])},vU=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,r=i===void 0?"margin":i;_U();var o=S.useMemo(function(){return hU(r)},[r]);return S.createElement(pU,{styles:mU(o,!e,r,n?"":"!important")})},Mp=!1;if(typeof window<"u")try{var Dc=Object.defineProperty({},"passive",{get:function(){return Mp=!0,!0}});window.addEventListener("test",Dc,Dc),window.removeEventListener("test",Dc,Dc)}catch{Mp=!1}var as=Mp?{passive:!1}:!1,gU=function(t){return t.tagName==="TEXTAREA"},FE=function(t,e){var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!gU(t)&&n[e]==="visible")},xU=function(t){return FE(t,"overflowY")},yU=function(t){return FE(t,"overflowX")},jg=function(t,e){var n=e;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var i=kE(t,n);if(i){var r=BE(t,n),o=r[1],s=r[2];if(o>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},SU=function(t){var e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return[e,n,i]},EU=function(t){var e=t.scrollLeft,n=t.scrollWidth,i=t.clientWidth;return[e,n,i]},kE=function(t,e){return t==="v"?xU(e):yU(e)},BE=function(t,e){return t==="v"?SU(e):EU(e)},TU=function(t,e){return t==="h"&&e==="rtl"?-1:1},wU=function(t,e,n,i,r){var o=TU(t,window.getComputedStyle(e).direction),s=o*i,a=n.target,l=e.contains(a),c=!1,u=s>0,d=0,f=0;do{var p=BE(t,a),_=p[0],v=p[1],m=p[2],h=v-m-o*_;(_||h)&&kE(t,a)&&(d+=h,f+=_),a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(u&&(d===0||!r)||!u&&(f===0||!r))&&(c=!0),c},Nc=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Yg=function(t){return[t.deltaX,t.deltaY]},qg=function(t){return t&&"current"in t?t.current:t},MU=function(t,e){return t[0]===e[0]&&t[1]===e[1]},bU=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},AU=0,ls=[];function RU(t){var e=S.useRef([]),n=S.useRef([0,0]),i=S.useRef(),r=S.useState(AU++)[0],o=S.useState(function(){return zE()})[0],s=S.useRef(t);S.useEffect(function(){s.current=t},[t]),S.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(r));var v=qL([t.lockRef.current],(t.shards||[]).map(qg),!0).filter(Boolean);return v.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),v.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[t.inert,t.lockRef.current,t.shards]);var a=S.useCallback(function(v,m){if("touches"in v&&v.touches.length===2)return!s.current.allowPinchZoom;var h=Nc(v),g=n.current,x="deltaX"in v?v.deltaX:g[0]-h[0],y="deltaY"in v?v.deltaY:g[1]-h[1],w,T=v.target,b=Math.abs(x)>Math.abs(y)?"h":"v";if("touches"in v&&b==="h"&&T.type==="range")return!1;var C=jg(b,T);if(!C)return!0;if(C?w=b:(w=b==="v"?"h":"v",C=jg(b,T)),!C)return!1;if(!i.current&&"changedTouches"in v&&(x||y)&&(i.current=w),!w)return!0;var M=i.current||w;return wU(M,m,v,M==="h"?x:y,!0)},[]),l=S.useCallback(function(v){var m=v;if(!(!ls.length||ls[ls.length-1]!==o)){var h="deltaY"in m?Yg(m):Nc(m),g=e.current.filter(function(w){return w.name===m.type&&w.target===m.target&&MU(w.delta,h)})[0];if(g&&g.should){m.cancelable&&m.preventDefault();return}if(!g){var x=(s.current.shards||[]).map(qg).filter(Boolean).filter(function(w){return w.contains(m.target)}),y=x.length>0?a(m,x[0]):!s.current.noIsolation;y&&m.cancelable&&m.preventDefault()}}},[]),c=S.useCallback(function(v,m,h,g){var x={name:v,delta:m,target:h,should:g};e.current.push(x),setTimeout(function(){e.current=e.current.filter(function(y){return y!==x})},1)},[]),u=S.useCallback(function(v){n.current=Nc(v),i.current=void 0},[]),d=S.useCallback(function(v){c(v.type,Yg(v),v.target,a(v,t.lockRef.current))},[]),f=S.useCallback(function(v){c(v.type,Nc(v),v.target,a(v,t.lockRef.current))},[]);S.useEffect(function(){return ls.push(o),t.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,as),document.addEventListener("touchmove",l,as),document.addEventListener("touchstart",u,as),function(){ls=ls.filter(function(v){return v!==o}),document.removeEventListener("wheel",l,as),document.removeEventListener("touchmove",l,as),document.removeEventListener("touchstart",u,as)}},[]);var p=t.removeScrollBar,_=t.inert;return S.createElement(S.Fragment,null,_?S.createElement(o,{styles:bU(r)}):null,p?S.createElement(vU,{gapMode:"margin"}):null)}const CU=rU(OE,RU);var $E=S.forwardRef(function(t,e){return S.createElement(Sd,yi({},t,{ref:e,sideCar:CU}))});$E.classNames=Sd.classNames;const PU=[" ","Enter","ArrowUp","ArrowDown"],IU=[" ","Enter"],Ed="Select",[Td,wd,DU]=J0(Ed),[pa,L5]=Ci(Ed,[DU,RE]),xm=RE(),[NU,Bo]=pa(Ed),[LU,UU]=pa(Ed),OU=t=>{const{__scopeSelect:e,children:n,open:i,defaultOpen:r,onOpenChange:o,value:s,defaultValue:a,onValueChange:l,dir:c,name:u,autoComplete:d,disabled:f,required:p}=t,_=xm(e),[v,m]=S.useState(null),[h,g]=S.useState(null),[x,y]=S.useState(!1),w=ca(c),[T=!1,b]=li({prop:i,defaultProp:r,onChange:o}),[C,M]=li({prop:s,defaultProp:a,onChange:l}),E=S.useRef(null),U=v?!!v.closest("form"):!0,[O,D]=S.useState(new Set),B=Array.from(O).map(F=>F.props.value).join(";");return S.createElement(BL,_,S.createElement(NU,{required:p,scope:e,trigger:v,onTriggerChange:m,valueNode:h,onValueNodeChange:g,valueNodeHasChildren:x,onValueNodeHasChildrenChange:y,contentId:la(),value:C,onValueChange:M,open:T,onOpenChange:b,dir:w,triggerPointerDownPosRef:E,disabled:f},S.createElement(Td.Provider,{scope:e},S.createElement(LU,{scope:t.__scopeSelect,onNativeOptionAdd:S.useCallback(F=>{D(X=>new Set(X).add(F))},[]),onNativeOptionRemove:S.useCallback(F=>{D(X=>{const K=new Set(X);return K.delete(F),K})},[])},n)),U?S.createElement(XE,{key:B,"aria-hidden":!0,required:p,tabIndex:-1,name:u,autoComplete:d,value:C,onChange:F=>M(F.target.value),disabled:f},C===void 0?S.createElement("option",{value:""}):null,Array.from(O)):null))},zU="SelectTrigger",FU=S.forwardRef((t,e)=>{const{__scopeSelect:n,disabled:i=!1,...r}=t,o=xm(n),s=Bo(zU,n),a=s.disabled||i,l=ct(e,s.onTriggerChange),c=wd(n),[u,d,f]=jE(_=>{const v=c().filter(g=>!g.disabled),m=v.find(g=>g.value===s.value),h=YE(v,_,m);h!==void 0&&s.onValueChange(h.value)}),p=()=>{a||(s.onOpenChange(!0),f())};return S.createElement($L,de({asChild:!0},o),S.createElement(Xe.button,de({type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":WE(s.value)?"":void 0},r,{ref:l,onClick:We(r.onClick,_=>{_.currentTarget.focus()}),onPointerDown:We(r.onPointerDown,_=>{const v=_.target;v.hasPointerCapture(_.pointerId)&&v.releasePointerCapture(_.pointerId),_.button===0&&_.ctrlKey===!1&&(p(),s.triggerPointerDownPosRef.current={x:Math.round(_.pageX),y:Math.round(_.pageY)},_.preventDefault())}),onKeyDown:We(r.onKeyDown,_=>{const v=u.current!=="";!(_.ctrlKey||_.altKey||_.metaKey)&&_.key.length===1&&d(_.key),!(v&&_.key===" ")&&PU.includes(_.key)&&(p(),_.preventDefault())})})))}),kU="SelectValue",BU=S.forwardRef((t,e)=>{const{__scopeSelect:n,className:i,style:r,children:o,placeholder:s="",...a}=t,l=Bo(kU,n),{onValueNodeHasChildrenChange:c}=l,u=o!==void 0,d=ct(e,l.onValueNodeChange);return on(()=>{c(u)},[c,u]),S.createElement(Xe.span,de({},a,{ref:d,style:{pointerEvents:"none"}}),WE(l.value)?S.createElement(S.Fragment,null,s):o)}),$U=S.forwardRef((t,e)=>{const{__scopeSelect:n,children:i,...r}=t;return S.createElement(Xe.span,de({"aria-hidden":!0},r,{ref:e}),i||"▼")}),VU=t=>S.createElement(GL,de({asChild:!0},t)),Qs="SelectContent",GU=S.forwardRef((t,e)=>{const n=Bo(Qs,t.__scopeSelect),[i,r]=S.useState();if(on(()=>{r(new DocumentFragment)},[]),!n.open){const o=i;return o?zo.createPortal(S.createElement(VE,{scope:t.__scopeSelect},S.createElement(Td.Slot,{scope:t.__scopeSelect},S.createElement("div",null,t.children))),o):null}return S.createElement(HU,de({},t,{ref:e}))}),Bi=10,[VE,$o]=pa(Qs),HU=S.forwardRef((t,e)=>{const{__scopeSelect:n,position:i="item-aligned",onCloseAutoFocus:r,onEscapeKeyDown:o,onPointerDownOutside:s,side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:_,hideWhenDetached:v,avoidCollisions:m,...h}=t,g=Bo(Qs,n),[x,y]=S.useState(null),[w,T]=S.useState(null),b=ct(e,P=>y(P)),[C,M]=S.useState(null),[E,U]=S.useState(null),O=wd(n),[D,B]=S.useState(!1),F=S.useRef(!1);S.useEffect(()=>{if(x)return YL(x)},[x]),NN();const X=S.useCallback(P=>{const[Q,...le]=O().map(ie=>ie.ref.current),[z]=le.slice(-1),pe=document.activeElement;for(const ie of P)if(ie===pe||(ie==null||ie.scrollIntoView({block:"nearest"}),ie===Q&&w&&(w.scrollTop=0),ie===z&&w&&(w.scrollTop=w.scrollHeight),ie==null||ie.focus(),document.activeElement!==pe))return},[O,w]),K=S.useCallback(()=>X([C,x]),[X,C,x]);S.useEffect(()=>{D&&K()},[D,K]);const{onOpenChange:N,triggerPointerDownPosRef:H}=g;S.useEffect(()=>{if(x){let P={x:0,y:0};const Q=z=>{var pe,ie,Ce,ye;P={x:Math.abs(Math.round(z.pageX)-((pe=(ie=H.current)===null||ie===void 0?void 0:ie.x)!==null&&pe!==void 0?pe:0)),y:Math.abs(Math.round(z.pageY)-((Ce=(ye=H.current)===null||ye===void 0?void 0:ye.y)!==null&&Ce!==void 0?Ce:0))}},le=z=>{P.x<=10&&P.y<=10?z.preventDefault():x.contains(z.target)||N(!1),document.removeEventListener("pointermove",Q),H.current=null};return H.current!==null&&(document.addEventListener("pointermove",Q),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",le,{capture:!0})}}},[x,N,H]),S.useEffect(()=>{const P=()=>N(!1);return window.addEventListener("blur",P),window.addEventListener("resize",P),()=>{window.removeEventListener("blur",P),window.removeEventListener("resize",P)}},[N]);const[W,re]=jE(P=>{const Q=O().filter(pe=>!pe.disabled),le=Q.find(pe=>pe.ref.current===document.activeElement),z=YE(Q,P,le);z&&setTimeout(()=>z.ref.current.focus())}),ee=S.useCallback((P,Q,le)=>{const z=!F.current&&!le;(g.value!==void 0&&g.value===Q||z)&&(M(P),z&&(F.current=!0))},[g.value]),fe=S.useCallback(()=>x==null?void 0:x.focus(),[x]),$=S.useCallback((P,Q,le)=>{const z=!F.current&&!le;(g.value!==void 0&&g.value===Q||z)&&U(P)},[g.value]),q=i==="popper"?Kg:WU,te=q===Kg?{side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:_,hideWhenDetached:v,avoidCollisions:m}:{};return S.createElement(VE,{scope:n,content:x,viewport:w,onViewportChange:T,itemRefCallback:ee,selectedItem:C,onItemLeave:fe,itemTextRefCallback:$,focusSelectedItem:K,selectedItemText:E,position:i,isPositioned:D,searchRef:W},S.createElement($E,{as:Ks,allowPinchZoom:!0},S.createElement(LN,{asChild:!0,trapped:g.open,onMountAutoFocus:P=>{P.preventDefault()},onUnmountAutoFocus:We(r,P=>{var Q;(Q=g.trigger)===null||Q===void 0||Q.focus({preventScroll:!0}),P.preventDefault()})},S.createElement(PN,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:P=>P.preventDefault(),onDismiss:()=>g.onOpenChange(!1)},S.createElement(q,de({role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:P=>P.preventDefault()},h,te,{onPlaced:()=>B(!0),ref:b,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:We(h.onKeyDown,P=>{const Q=P.ctrlKey||P.altKey||P.metaKey;if(P.key==="Tab"&&P.preventDefault(),!Q&&P.key.length===1&&re(P.key),["ArrowUp","ArrowDown","Home","End"].includes(P.key)){let z=O().filter(pe=>!pe.disabled).map(pe=>pe.ref.current);if(["ArrowUp","End"].includes(P.key)&&(z=z.slice().reverse()),["ArrowUp","ArrowDown"].includes(P.key)){const pe=P.target,ie=z.indexOf(pe);z=z.slice(ie+1)}setTimeout(()=>X(z)),P.preventDefault()}})}))))))}),WU=S.forwardRef((t,e)=>{const{__scopeSelect:n,onPlaced:i,...r}=t,o=Bo(Qs,n),s=$o(Qs,n),[a,l]=S.useState(null),[c,u]=S.useState(null),d=ct(e,b=>u(b)),f=wd(n),p=S.useRef(!1),_=S.useRef(!0),{viewport:v,selectedItem:m,selectedItemText:h,focusSelectedItem:g}=s,x=S.useCallback(()=>{if(o.trigger&&o.valueNode&&a&&c&&v&&m&&h){const b=o.trigger.getBoundingClientRect(),C=c.getBoundingClientRect(),M=o.valueNode.getBoundingClientRect(),E=h.getBoundingClientRect();if(o.dir!=="rtl"){const pe=E.left-C.left,ie=M.left-pe,Ce=b.left-ie,ye=b.width+Ce,Re=Math.max(ye,C.width),De=window.innerWidth-Bi,Ne=yp(ie,[Bi,De-Re]);a.style.minWidth=ye+"px",a.style.left=Ne+"px"}else{const pe=C.right-E.right,ie=window.innerWidth-M.right-pe,Ce=window.innerWidth-b.right-ie,ye=b.width+Ce,Re=Math.max(ye,C.width),De=window.innerWidth-Bi,Ne=yp(ie,[Bi,De-Re]);a.style.minWidth=ye+"px",a.style.right=Ne+"px"}const U=f(),O=window.innerHeight-Bi*2,D=v.scrollHeight,B=window.getComputedStyle(c),F=parseInt(B.borderTopWidth,10),X=parseInt(B.paddingTop,10),K=parseInt(B.borderBottomWidth,10),N=parseInt(B.paddingBottom,10),H=F+X+D+N+K,W=Math.min(m.offsetHeight*5,H),re=window.getComputedStyle(v),ee=parseInt(re.paddingTop,10),fe=parseInt(re.paddingBottom,10),$=b.top+b.height/2-Bi,q=O-$,te=m.offsetHeight/2,P=m.offsetTop+te,Q=F+X+P,le=H-Q;if(Q<=$){const pe=m===U[U.length-1].ref.current;a.style.bottom="0px";const ie=c.clientHeight-v.offsetTop-v.offsetHeight,Ce=Math.max(q,te+(pe?fe:0)+ie+K),ye=Q+Ce;a.style.height=ye+"px"}else{const pe=m===U[0].ref.current;a.style.top="0px";const Ce=Math.max($,F+v.offsetTop+(pe?ee:0)+te)+le;a.style.height=Ce+"px",v.scrollTop=Q-$+v.offsetTop}a.style.margin=`${Bi}px 0`,a.style.minHeight=W+"px",a.style.maxHeight=O+"px",i==null||i(),requestAnimationFrame(()=>p.current=!0)}},[f,o.trigger,o.valueNode,a,c,v,m,h,o.dir,i]);on(()=>x(),[x]);const[y,w]=S.useState();on(()=>{c&&w(window.getComputedStyle(c).zIndex)},[c]);const T=S.useCallback(b=>{b&&_.current===!0&&(x(),g==null||g(),_.current=!1)},[x,g]);return S.createElement(XU,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:p,onScrollButtonChange:T},S.createElement("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y}},S.createElement(Xe.div,de({},r,{ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...r.style}}))))}),Kg=S.forwardRef((t,e)=>{const{__scopeSelect:n,align:i="start",collisionPadding:r=Bi,...o}=t,s=xm(n);return S.createElement(VL,de({},s,o,{ref:e,align:i,collisionPadding:r,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[XU,ym]=pa(Qs,{}),Zg="SelectViewport",jU=S.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t,r=$o(Zg,n),o=ym(Zg,n),s=ct(e,r.onViewportChange),a=S.useRef(0);return S.createElement(S.Fragment,null,S.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),S.createElement(Td.Slot,{scope:n},S.createElement(Xe.div,de({"data-radix-select-viewport":"",role:"presentation"},i,{ref:s,style:{position:"relative",flex:1,overflow:"auto",...i.style},onScroll:We(i.onScroll,l=>{const c=l.currentTarget,{contentWrapper:u,shouldExpandOnScrollRef:d}=o;if(d!=null&&d.current&&u){const f=Math.abs(a.current-c.scrollTop);if(f>0){const p=window.innerHeight-Bi*2,_=parseFloat(u.style.minHeight),v=parseFloat(u.style.height),m=Math.max(_,v);if(m<p){const h=m+f,g=Math.min(p,h),x=h-g;u.style.height=g+"px",u.style.bottom==="0px"&&(c.scrollTop=x>0?x:0,u.style.justifyContent="flex-end")}}}a.current=c.scrollTop})}))))}),YU="SelectGroup",[U5,qU]=pa(YU),KU="SelectLabel",ZU=S.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t,r=qU(KU,n);return S.createElement(Xe.div,de({id:r.id},i,{ref:e}))}),bp="SelectItem",[JU,GE]=pa(bp),QU=S.forwardRef((t,e)=>{const{__scopeSelect:n,value:i,disabled:r=!1,textValue:o,...s}=t,a=Bo(bp,n),l=$o(bp,n),c=a.value===i,[u,d]=S.useState(o??""),[f,p]=S.useState(!1),_=ct(e,h=>{var g;return(g=l.itemRefCallback)===null||g===void 0?void 0:g.call(l,h,i,r)}),v=la(),m=()=>{r||(a.onValueChange(i),a.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return S.createElement(JU,{scope:n,value:i,disabled:r,textId:v,isSelected:c,onItemTextChange:S.useCallback(h=>{d(g=>{var x;return g||((x=h==null?void 0:h.textContent)!==null&&x!==void 0?x:"").trim()})},[])},S.createElement(Td.ItemSlot,{scope:n,value:i,disabled:r,textValue:u},S.createElement(Xe.div,de({role:"option","aria-labelledby":v,"data-highlighted":f?"":void 0,"aria-selected":c&&f,"data-state":c?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1},s,{ref:_,onFocus:We(s.onFocus,()=>p(!0)),onBlur:We(s.onBlur,()=>p(!1)),onPointerUp:We(s.onPointerUp,m),onPointerMove:We(s.onPointerMove,h=>{if(r){var g;(g=l.onItemLeave)===null||g===void 0||g.call(l)}else h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:We(s.onPointerLeave,h=>{if(h.currentTarget===document.activeElement){var g;(g=l.onItemLeave)===null||g===void 0||g.call(l)}}),onKeyDown:We(s.onKeyDown,h=>{var g;((g=l.searchRef)===null||g===void 0?void 0:g.current)!==""&&h.key===" "||(IU.includes(h.key)&&m(),h.key===" "&&h.preventDefault())})}))))}),Lc="SelectItemText",eO=S.forwardRef((t,e)=>{const{__scopeSelect:n,className:i,style:r,...o}=t,s=Bo(Lc,n),a=$o(Lc,n),l=GE(Lc,n),c=UU(Lc,n),[u,d]=S.useState(null),f=ct(e,h=>d(h),l.onItemTextChange,h=>{var g;return(g=a.itemTextRefCallback)===null||g===void 0?void 0:g.call(a,h,l.value,l.disabled)}),p=u==null?void 0:u.textContent,_=S.useMemo(()=>S.createElement("option",{key:l.value,value:l.value,disabled:l.disabled},p),[l.disabled,l.value,p]),{onNativeOptionAdd:v,onNativeOptionRemove:m}=c;return on(()=>(v(_),()=>m(_)),[v,m,_]),S.createElement(S.Fragment,null,S.createElement(Xe.span,de({id:l.textId},o,{ref:f})),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?zo.createPortal(o.children,s.valueNode):null)}),tO="SelectItemIndicator",nO=S.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t;return GE(tO,n).isSelected?S.createElement(Xe.span,de({"aria-hidden":!0},i,{ref:e})):null}),Jg="SelectScrollUpButton",iO=S.forwardRef((t,e)=>{const n=$o(Jg,t.__scopeSelect),i=ym(Jg,t.__scopeSelect),[r,o]=S.useState(!1),s=ct(e,i.onScrollButtonChange);return on(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=l.scrollTop>0;o(u)};var a=c;const l=n.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),r?S.createElement(HE,de({},t,{ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}})):null}),Qg="SelectScrollDownButton",rO=S.forwardRef((t,e)=>{const n=$o(Qg,t.__scopeSelect),i=ym(Qg,t.__scopeSelect),[r,o]=S.useState(!1),s=ct(e,i.onScrollButtonChange);return on(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=l.scrollHeight-l.clientHeight,d=Math.ceil(l.scrollTop)<u;o(d)};var a=c;const l=n.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),r?S.createElement(HE,de({},t,{ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}})):null}),HE=S.forwardRef((t,e)=>{const{__scopeSelect:n,onAutoScroll:i,...r}=t,o=$o("SelectScrollButton",n),s=S.useRef(null),a=wd(n),l=S.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return S.useEffect(()=>()=>l(),[l]),on(()=>{var c;const u=a().find(d=>d.ref.current===document.activeElement);u==null||(c=u.ref.current)===null||c===void 0||c.scrollIntoView({block:"nearest"})},[a]),S.createElement(Xe.div,de({"aria-hidden":!0},r,{ref:e,style:{flexShrink:0,...r.style},onPointerDown:We(r.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(i,50))}),onPointerMove:We(r.onPointerMove,()=>{var c;(c=o.onItemLeave)===null||c===void 0||c.call(o),s.current===null&&(s.current=window.setInterval(i,50))}),onPointerLeave:We(r.onPointerLeave,()=>{l()})}))}),oO=S.forwardRef((t,e)=>{const{__scopeSelect:n,...i}=t;return S.createElement(Xe.div,de({"aria-hidden":!0},i,{ref:e}))});function WE(t){return t===""||t===void 0}const XE=S.forwardRef((t,e)=>{const{value:n,...i}=t,r=S.useRef(null),o=ct(e,r),s=DE(n);return S.useEffect(()=>{const a=r.current,l=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==n&&u){const d=new Event("change",{bubbles:!0});u.call(a,n),a.dispatchEvent(d)}},[s,n]),S.createElement(HL,{asChild:!0},S.createElement("select",de({},i,{ref:o,defaultValue:n})))});XE.displayName="BubbleSelect";function jE(t){const e=Ht(t),n=S.useRef(""),i=S.useRef(0),r=S.useCallback(s=>{const a=n.current+s;e(a),function l(c){n.current=c,window.clearTimeout(i.current),c!==""&&(i.current=window.setTimeout(()=>l(""),1e3))}(a)},[e]),o=S.useCallback(()=>{n.current="",window.clearTimeout(i.current)},[]);return S.useEffect(()=>()=>window.clearTimeout(i.current),[]),[n,r,o]}function YE(t,e,n){const r=e.length>1&&Array.from(e).every(c=>c===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let s=sO(t,Math.max(o,0));r.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.textValue.toLowerCase().startsWith(r.toLowerCase()));return l!==n?l:void 0}function sO(t,e){return t.map((n,i)=>t[(e+i)%t.length])}const aO=OU,qE=FU,lO=BU,cO=$U,uO=VU,KE=GU,dO=jU,ZE=ZU,JE=QU,fO=eO,hO=nO,QE=iO,e1=rO,t1=oO,pO=aO,mO=lO,n1=S.forwardRef(({className:t,children:e,...n},i)=>L.jsxs(qE,{ref:i,className:dt("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[e,L.jsx(cO,{asChild:!0,children:L.jsx(am,{className:"h-4 w-4 opacity-50"})})]}));n1.displayName=qE.displayName;const i1=S.forwardRef(({className:t,...e},n)=>L.jsx(QE,{ref:n,className:dt("flex cursor-default items-center justify-center py-1",t),...e,children:L.jsx(eN,{className:"h-4 w-4"})}));i1.displayName=QE.displayName;const r1=S.forwardRef(({className:t,...e},n)=>L.jsx(e1,{ref:n,className:dt("flex cursor-default items-center justify-center py-1",t),...e,children:L.jsx(am,{className:"h-4 w-4"})}));r1.displayName=e1.displayName;const o1=S.forwardRef(({className:t,children:e,position:n="popper",...i},r)=>L.jsx(uO,{children:L.jsxs(KE,{ref:r,className:dt("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...i,children:[L.jsx(i1,{}),L.jsx(dO,{className:dt("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e}),L.jsx(r1,{})]})}));o1.displayName=KE.displayName;const _O=S.forwardRef(({className:t,...e},n)=>L.jsx(ZE,{ref:n,className:dt("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...e}));_O.displayName=ZE.displayName;const s1=S.forwardRef(({className:t,children:e,...n},i)=>L.jsxs(JE,{ref:i,className:dt("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[L.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:L.jsx(hO,{children:L.jsx(JS,{className:"h-4 w-4"})})}),L.jsx(fO,{children:e})]}));s1.displayName=JE.displayName;const vO=S.forwardRef(({className:t,...e},n)=>L.jsx(t1,{ref:n,className:dt("-mx-1 my-1 h-px bg-muted",t),...e}));vO.displayName=t1.displayName;class Pi extends S.Component{constructor(){super(...arguments);Ye(this,"handleChange",n=>{const{setUiStateKey:i,emit:r}=this.props,{setUiState:o}=this.context;o({[i]:n}),r=="true"&&Ct.emit(w9,{key:i,value:n})})}render(){const{name:n,labelText:i,setUiStateKey:r,emit:o,options:s}=this.props,{uiState:a}=this.context,l=a[r];return L.jsx("div",{className:"w-full p-2",children:L.jsxs(dm,{className:"w-50",children:[i,L.jsxs(pO,{name:n,value:l,defaultValue:l,onValueChange:this.handleChange,children:[L.jsx(n1,{children:L.jsx(mO,{})}),L.jsx(o1,{children:s.map(c=>L.jsx(s1,{value:c.value,children:c.label},c.value))})]})]})})}}Ye(Pi,"contextType",ui);const gO=[{value:ad,label:"first return"},{value:LM,label:"second return"},{value:NM,label:"no return limit"}],xO=()=>L.jsx(Pi,{name:"exampleSelect",labelText:"termination method",setUiStateKey:"UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD",emit:"false",options:gO}),yO=[{value:!0,label:"constant velocity"},{value:!1,label:"constant hamiltonian"}],SO=()=>L.jsx(Pi,{name:"selectSeedVelocityType",labelText:"seed velocity",setUiStateKey:"UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY",emit:"false",options:yO});class a1 extends S.Component{constructor(){super(...arguments);Ye(this,"shouldRenderSeedMagnitude",()=>{const{uiState:n}=this.context;return n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY===!0});Ye(this,"shouldRenderSeedHamiltonian",()=>{const{uiState:n}=this.context;return n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY===!1})}handleClickDataUpdate(){console.log("handleClickDataUpdate"),Ct.emit(b0,{})}render(){return L.jsxs("div",{className:"flex flex-col h-full",children:[L.jsx("div",{className:"p-2 bg-secondary",children:L.jsx(Ul,{className:"w-full",onClick:this.handleClickDataUpdate,children:"update"})}),L.jsx(xd,{className:"flex-1 overflow-y-auto",children:L.jsx("div",{className:"pl-2 pr-4 pb-2",children:L.jsxs(lm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["physics","integration","domain","streamline","ftle","geometry"],children:[L.jsxs(Nr,{value:"physics",children:[L.jsx(Lr,{children:"Physics"}),L.jsxs(Ur,{children:[L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_MU",labelText:"mass of secondary: mu"}),L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY",labelText:"angular velocity: n"}),L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(SO,{}),this.shouldRenderSeedMagnitude()&&L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_ENERGY",labelText:"magnitude"}),this.shouldRenderSeedHamiltonian()&&L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_ENERGY",labelText:"hamiltonian"})]}),L.jsx(Ou,{className:"font-medium",children:"constant seed direction (left view)"}),L.jsxs("div",{className:"grid grid-cols-3",children:[L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X",labelText:"x"}),L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y",labelText:"y"}),L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z",labelText:"z"})]}),L.jsx(Ou,{className:"font-medium",children:"constant seed position (right view)"}),L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_POSITION_X",labelText:"x"}),L.jsx(qe,{name:"UI_STATE_DATA_PHYSICS_SEED_POSITION_Y",labelText:"y"})]})]})]}),L.jsxs(Nr,{value:"integration",children:[L.jsx(Lr,{children:"Integration"}),L.jsxs(Ur,{children:[L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_DATA_INTEGRATION_STEP_SIZE",labelText:"step size"}),L.jsx(qe,{name:"UI_STATE_DATA_INTEGRATION_MAX_STEPS",labelText:"max steps"})]}),L.jsx(xO,{})]})]}),L.jsxs(Nr,{value:"domain",children:[L.jsx(Lr,{children:"Domain"}),L.jsxs(Ur,{children:[L.jsxs("div",{className:"grid grid-cols-3",children:[L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_MIN_X",labelText:"min x"}),L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_MAX_X",labelText:"max x"}),L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_PIXELS_X",labelText:"grid nodes x"})]}),L.jsxs("div",{className:"grid grid-cols-3",children:[L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_MIN_Y",labelText:"min y"}),L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_MAX_Y",labelText:"max y"}),L.jsx(qe,{name:"UI_STATE_DATA_DOMAIN_PIXELS_Y",labelText:"grid nodes y"})]}),L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_DATA_ANGLE_PIXELS_X",labelText:"grid nodes theta"}),L.jsx(qe,{name:"UI_STATE_DATA_ANGLE_PIXELS_Y",labelText:"grid nodes phi"})]})]})]})]})})})]})}}Ye(a1,"contextType",ui);class EO extends S.Component{handleClickCameraUpdate(){console.log("handleClickCameraUpdate"),Ct.emit(T9,{})}render(){return L.jsxs("div",{className:"flex flex-col h-full",children:[L.jsx("div",{className:"p-2 bg-secondary",children:L.jsx(Ul,{className:"w-full",onClick:this.handleClickCameraUpdate,children:"update"})}),L.jsx(xd,{className:"flex-1 overflow-y-auto",children:L.jsx("div",{className:"pl-2 pr-4 pb-2",children:L.jsx(lm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["controls"],children:L.jsxs(Nr,{value:"controls",children:[L.jsx(Lr,{children:"Controls"}),L.jsxs(Ur,{children:[L.jsx(qe,{name:"UI_STATE_CAMERA_CONTROLS_ROTATESPEED",labelText:"rotation speed"}),L.jsx(qe,{name:"UI_STATE_CAMERA_CONTROLS_PANSPEED",labelText:"pan speed"}),L.jsx(qe,{name:"UI_STATE_CAMERA_CONTROLS_ZOOMSPEED",labelText:"zoom speed"})]})]})})})})]})}}const l1="Checkbox",[TO,O5]=Ci(l1),[wO,MO]=TO(l1),bO=S.forwardRef((t,e)=>{const{__scopeCheckbox:n,name:i,checked:r,defaultChecked:o,required:s,disabled:a,value:l="on",onCheckedChange:c,...u}=t,[d,f]=S.useState(null),p=ct(e,x=>f(x)),_=S.useRef(!1),v=d?!!d.closest("form"):!0,[m=!1,h]=li({prop:r,defaultProp:o,onChange:c}),g=S.useRef(m);return S.useEffect(()=>{const x=d==null?void 0:d.form;if(x){const y=()=>h(g.current);return x.addEventListener("reset",y),()=>x.removeEventListener("reset",y)}},[d,h]),S.createElement(wO,{scope:n,state:m,disabled:a},S.createElement(Xe.button,de({type:"button",role:"checkbox","aria-checked":Mo(m)?"mixed":m,"aria-required":s,"data-state":c1(m),"data-disabled":a?"":void 0,disabled:a,value:l},u,{ref:p,onKeyDown:We(t.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:We(t.onClick,x=>{h(y=>Mo(y)?!0:!y),v&&(_.current=x.isPropagationStopped(),_.current||x.stopPropagation())})})),v&&S.createElement(CO,{control:d,bubbles:!_.current,name:i,value:l,checked:m,required:s,disabled:a,style:{transform:"translateX(-100%)"}}))}),AO="CheckboxIndicator",RO=S.forwardRef((t,e)=>{const{__scopeCheckbox:n,forceMount:i,...r}=t,o=MO(AO,n);return S.createElement(qr,{present:i||Mo(o.state)||o.state===!0},S.createElement(Xe.span,de({"data-state":c1(o.state),"data-disabled":o.disabled?"":void 0},r,{ref:e,style:{pointerEvents:"none",...t.style}})))}),CO=t=>{const{control:e,checked:n,bubbles:i=!0,...r}=t,o=S.useRef(null),s=DE(n),a=ME(e);return S.useEffect(()=>{const l=o.current,c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"checked").set;if(s!==n&&d){const f=new Event("click",{bubbles:i});l.indeterminate=Mo(n),d.call(l,Mo(n)?!1:n),l.dispatchEvent(f)}},[s,n,i]),S.createElement("input",de({type:"checkbox","aria-hidden":!0,defaultChecked:Mo(n)?!1:n},r,{tabIndex:-1,ref:o,style:{...t.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Mo(t){return t==="indeterminate"}function c1(t){return Mo(t)?"indeterminate":t?"checked":"unchecked"}const u1=bO,PO=RO,d1=S.forwardRef(({className:t,...e},n)=>L.jsx(u1,{ref:n,className:dt("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...e,children:L.jsx(PO,{className:dt("flex items-center justify-center text-current"),children:L.jsx(JS,{className:"h-4 w-4"})})}));d1.displayName=u1.displayName;class Sm extends S.Component{constructor(){super(...arguments);Ye(this,"handleChange",n=>{const{uiState:i,setUiState:r}=this.context;console.warn("e",i[n.target.id]),r({[n.target.id]:!i[n.target.id]})})}render(){const{name:n,labelText:i}=this.props,{uiState:r}=this.context,s=!!r[n];return L.jsx("div",{className:"w-full p-2 ",children:L.jsxs("div",{className:"flex items-center space-x-2",children:[L.jsx(d1,{id:n,name:n,checked:s,onClick:this.handleChange}),L.jsx("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:i})]})})}}Ye(Sm,"contextType",ui);const IO=[{value:ii,label:"specialized [default]"},{value:Mu,label:"raw virtual data texture"},{value:C0,label:"raw data texture"}],DO=()=>L.jsx(Pi,{name:"selectTextureMode",labelText:"texture mode",setUiStateKey:"UI_STATE_RENDERING_TEXTURE_MODE",emit:"false",options:IO}),NO=[{value:rd,label:"gravitational force: normal"},{value:A9,label:"gravitational force: magnitude"},{value:P0,label:"return: advection time"},{value:I0,label:"return: arc length"},{value:D0,label:"return: position"},{value:N0,label:"return: relative position (normalized)"},{value:L0,label:"return: relative position (magnitude)"},{value:U0,label:"return: direction"},{value:vl,label:"return: FTLE"},{value:Ya,label:"return: FTLE (both)"},{value:O0,label:"return: success"},{value:od,label:"seed: velocity magnitude"}],LO=()=>L.jsx(Pi,{name:"selectSpecializedMode",labelText:"specialized mode",setUiStateKey:"UI_STATE_RENDERING_SPECIALIZED_MODE",emit:"false",options:NO}),UO=[{value:R9,label:"seeds"},{value:sd,label:"gravitational force"},{value:C9,label:"flow map"},{value:P9,label:"seeds and returns"}],OO=()=>L.jsx(Pi,{name:"selectRawMode",labelText:"display texture",setUiStateKey:"UI_STATE_RENDERING_RAW_MODE",emit:"false",options:UO}),zO=[{value:I9,label:"forward"},{value:UM,label:"backward"}],FO=()=>L.jsx(Pi,{name:"selectRenderingDirection",labelText:"direction",setUiStateKey:"UI_STATE_RENDERING_DIRECTION",emit:"false",options:zO}),kO=[{value:ld,label:"position and velocity separation"},{value:OM,label:"position separation"},{value:zM,label:"velocity separation"}],BO=()=>L.jsx(Pi,{name:"selectFtleType",labelText:"FTLE type",setUiStateKey:"UI_STATE_RENDERING_FTLE_TYPE",emit:"false",options:kO});class f1 extends S.Component{constructor(){super(...arguments);Ye(this,"shouldRenderSpecializedMode",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===ii});Ye(this,"shouldRenderReturnNumber",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===ii&&(n.UI_STATE_RENDERING_SPECIALIZED_MODE===P0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===I0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===D0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===N0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===L0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===U0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===vl||n.UI_STATE_RENDERING_SPECIALIZED_MODE===Ya||n.UI_STATE_RENDERING_SPECIALIZED_MODE===O0)});Ye(this,"shouldRenderFtleType",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===ii&&(n.UI_STATE_RENDERING_SPECIALIZED_MODE===vl||n.UI_STATE_RENDERING_SPECIALIZED_MODE===Ya)});Ye(this,"shouldRenderDirection",()=>{const{uiState:n}=this.context;return!(n.UI_STATE_RENDERING_TEXTURE_MODE===ii&&n.UI_STATE_RENDERING_SPECIALIZED_MODE===Ya)});Ye(this,"shouldRenderRawMode",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===C0||n.UI_STATE_RENDERING_TEXTURE_MODE===Mu});Ye(this,"shouldRenderRawModeVirtual",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===Mu})}handleClickRenderingUpdate(){console.log("handleClickRenderingUpdate"),Ct.emit(A0,{})}render(){return L.jsxs("div",{className:"flex flex-col h-full",children:[L.jsx("div",{className:"p-2 bg-secondary",children:L.jsx(Ul,{className:"w-full",onClick:this.handleClickRenderingUpdate,children:"update"})}),L.jsx(xd,{className:"flex-1 overflow-y-auto",children:L.jsx("div",{className:"pl-2 pr-4 pb-2",children:L.jsxs(lm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["plane","spheres"],children:[L.jsxs(Nr,{value:"plane",children:[L.jsx(Lr,{children:"Plane"}),L.jsxs(Ur,{children:[L.jsx(DO,{}),this.shouldRenderSpecializedMode()&&L.jsx(LO,{}),this.shouldRenderRawMode()&&L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(OO,{}),L.jsx(qe,{name:"UI_STATE_RENDERING_RAW_MODE_LAYER",labelText:"layer"})]}),this.shouldRenderFtleType()&&L.jsx(BO,{}),this.shouldRenderDirection()&&L.jsx(FO,{}),this.shouldRenderReturnNumber()&&L.jsx(qe,{name:"UI_STATE_RENDERING_RETURN_NUMBER",labelText:"return number"}),this.shouldRenderRawModeVirtual()&&L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX",labelText:"x texture index"}),L.jsx(qe,{name:"UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX",labelText:"y texture index"})]}),L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_RENDERING_SCALAR_MIN",labelText:"min scalar"}),L.jsx(qe,{name:"UI_STATE_RENDERING_SCALAR_MAX",labelText:"max scalar"})]}),L.jsx(qe,{name:"UI_STATE_RENDERING_OPACITY",labelText:"opacity"})]})]}),L.jsxs(Nr,{value:"spheres",children:[L.jsx(Lr,{children:"Spheres"}),L.jsxs(Ur,{children:[L.jsx(qe,{name:"UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES",labelText:"max radius bodies"}),L.jsx(Ou,{className:"font-medium",children:"radius clicked position"}),L.jsxs("div",{className:"grid grid-cols-3",children:[L.jsx(qe,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS",labelText:"main"}),L.jsx(qe,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX",labelText:"aux (plane)"}),L.jsx(qe,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE",labelText:"aux (sphere)"})]})]})]}),L.jsxs(Nr,{value:"spheres",children:[L.jsx(Lr,{children:"Tubes"}),L.jsxs(Ur,{children:[L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH",labelText:"segment length"}),L.jsx(qe,{name:"UI_STATE_RENDERING_TUBE_MAX_SEGMENTS",labelText:"max segments"})]}),L.jsxs("div",{className:"grid grid-cols-2",children:[L.jsx(qe,{name:"UI_STATE_RENDERING_TUBE_RADIUS",labelText:"tube radius"}),L.jsx(qe,{name:"UI_STATE_RENDERING_TUBE_NUM_SIDES",labelText:"number of sides"})]}),L.jsx(Sm,{name:"UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS",labelText:"only show successful returns"})]})]})]})})})]})}}Ye(f1,"contextType",ui);class $O extends S.Component{render(){return L.jsxs(SD,{defaultValue:"data",className:"flex flex-col h-full",children:[L.jsxs(BS,{className:"rounded-none",children:[L.jsx(Kc,{value:"data",children:"Data"}),L.jsx(Kc,{value:"rendering",children:"Rendering"}),L.jsx(Kc,{value:"camera",children:"Camera"})]}),L.jsx(Zc,{value:"data",className:"mt-0 flex-1 overflow-hidden",children:L.jsx(a1,{})}),L.jsx(Zc,{value:"rendering",className:"mt-0 flex-1 overflow-hidden",children:L.jsx(f1,{})}),L.jsx(Zc,{value:"camera",className:"mt-0 flex-1 overflow-hidden",children:L.jsx(EO,{})})]})}}const VO=[{value:Pl,label:"2D grid (default)"},{value:D9,label:"spherical"}],GO=()=>L.jsx(Pi,{name:"selectAuxContent",labelText:"aux view content",setUiStateKey:"UI_STATE_AUX_CONTENT",emit:"true",options:VO}),HO=[{value:bu,label:"theta right, phi up"},{value:Fr,label:"theta down, phi right"}],WO=()=>L.jsx(Pi,{name:"selectAuxGridDirection",labelText:"aux grid direction",setUiStateKey:"UI_STATE_AUX_GRID_DIRECTION",emit:"true",options:HO});class h1 extends S.Component{constructor(){super(...arguments);Ye(this,"shouldRenderCheckboxScaleVertices",()=>{const{uiState:n}=this.context;return n.UI_STATE_AUX_CONTENT===D9&&n.UI_STATE_RENDERING_TEXTURE_MODE===ii&&n.UI_STATE_RENDERING_SPECIALIZED_MODE===od});Ye(this,"shouldRenderGridDirection",()=>{const{uiState:n}=this.context;return n.UI_STATE_AUX_CONTENT===Pl})}render(){return L.jsxs("div",{children:[L.jsx(GO,{}),this.shouldRenderGridDirection()&&L.jsx(WO,{}),this.shouldRenderCheckboxScaleVertices()&&L.jsx(Sm,{name:"UI_STATE_RENDERING_SCALE_VERTICES",labelText:"scale vertices"})]})}}Ye(h1,"contextType",ui);const{createElement:ea,createContext:XO,createRef:z5,forwardRef:p1,useCallback:bn,useContext:m1,useEffect:bo,useImperativeHandle:_1,useLayoutEffect:jO,useMemo:YO,useRef:mn,useState:Qa}=Up,ex=Up.useId,qO=jO,Md=XO(null);Md.displayName="PanelGroupContext";const Ao=qO,KO=typeof ex=="function"?ex:()=>null;let ZO=0;function Em(t=null){const e=KO(),n=mn(t||e||null);return n.current===null&&(n.current=""+ZO++),t??n.current}function v1({children:t,className:e="",collapsedSize:n,collapsible:i,defaultSize:r,forwardedRef:o,id:s,maxSize:a,minSize:l,onCollapse:c,onExpand:u,onResize:d,order:f,style:p,tagName:_="div",...v}){const m=m1(Md);if(m===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:h,expandPanel:g,getPanelSize:x,getPanelStyle:y,groupId:w,isPanelCollapsed:T,reevaluatePanelConstraints:b,registerPanel:C,resizePanel:M,unregisterPanel:E}=m,U=Em(s),O=mn({callbacks:{onCollapse:c,onExpand:u,onResize:d},constraints:{collapsedSize:n,collapsible:i,defaultSize:r,maxSize:a,minSize:l},id:U,idIsFromProps:s!==void 0,order:f});mn({didLogMissingDefaultSizeWarning:!1}),Ao(()=>{const{callbacks:B,constraints:F}=O.current,X={...F};O.current.id=U,O.current.idIsFromProps=s!==void 0,O.current.order=f,B.onCollapse=c,B.onExpand=u,B.onResize=d,F.collapsedSize=n,F.collapsible=i,F.defaultSize=r,F.maxSize=a,F.minSize=l,(X.collapsedSize!==F.collapsedSize||X.collapsible!==F.collapsible||X.maxSize!==F.maxSize||X.minSize!==F.minSize)&&b(O.current,X)}),Ao(()=>{const B=O.current;return C(B),()=>{E(B)}},[f,U,C,E]),_1(o,()=>({collapse:()=>{h(O.current)},expand:B=>{g(O.current,B)},getId(){return U},getSize(){return x(O.current)},isCollapsed(){return T(O.current)},isExpanded(){return!T(O.current)},resize:B=>{M(O.current,B)}}),[h,g,x,T,U,M]);const D=y(O.current,r);return ea(_,{...v,children:t,className:e,id:s,style:{...D,...p},"data-panel":"","data-panel-collapsible":i||void 0,"data-panel-group-id":w,"data-panel-id":U,"data-panel-size":parseFloat(""+D.flexGrow).toFixed(1)})}const g1=p1((t,e)=>ea(v1,{...t,forwardedRef:e}));v1.displayName="Panel";g1.displayName="forwardRef(Panel)";let Ap=null,So=null;function JO(t,e){if(e){const n=(e&T1)!==0,i=(e&w1)!==0,r=(e&M1)!==0,o=(e&b1)!==0;if(n)return r?"se-resize":o?"ne-resize":"e-resize";if(i)return r?"sw-resize":o?"nw-resize":"w-resize";if(r)return"s-resize";if(o)return"n-resize"}switch(t){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function QO(){So!==null&&(document.head.removeChild(So),Ap=null,So=null)}function ah(t,e){const n=JO(t,e);Ap!==n&&(Ap=n,So===null&&(So=document.createElement("style"),document.head.appendChild(So)),So.innerHTML=`*{cursor: ${n}!important;}`)}function x1(t){return t.type==="keydown"}function y1(t){return t.type.startsWith("pointer")}function S1(t){return t.type.startsWith("mouse")}function bd(t){if(y1(t)){if(t.isPrimary)return{x:t.clientX,y:t.clientY}}else if(S1(t))return{x:t.clientX,y:t.clientY};return{x:1/0,y:1/0}}function e5(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function t5(t,e,n){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function n5(t,e){if(t===e)throw new Error("Cannot compare node with itself");const n={a:ix(t),b:ix(e)};let i;for(;n.a.at(-1)===n.b.at(-1);)t=n.a.pop(),e=n.b.pop(),i=t;Ke(i,"Stacking order can only be calculated for elements with a common ancestor");const r={a:nx(tx(n.a)),b:nx(tx(n.b))};if(r.a===r.b){const o=i.childNodes,s={a:n.a.at(-1),b:n.b.at(-1)};let a=o.length;for(;a--;){const l=o[a];if(l===s.a)return 1;if(l===s.b)return-1}}return Math.sign(r.a-r.b)}const i5=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function r5(t){var e;const n=getComputedStyle((e=E1(t))!==null&&e!==void 0?e:t).display;return n==="flex"||n==="inline-flex"}function o5(t){const e=getComputedStyle(t);return!!(e.position==="fixed"||e.zIndex!=="auto"&&(e.position!=="static"||r5(t))||+e.opacity<1||"transform"in e&&e.transform!=="none"||"webkitTransform"in e&&e.webkitTransform!=="none"||"mixBlendMode"in e&&e.mixBlendMode!=="normal"||"filter"in e&&e.filter!=="none"||"webkitFilter"in e&&e.webkitFilter!=="none"||"isolation"in e&&e.isolation==="isolate"||i5.test(e.willChange)||e.webkitOverflowScrolling==="touch")}function tx(t){let e=t.length;for(;e--;){const n=t[e];if(Ke(n,"Missing node"),o5(n))return n}return null}function nx(t){return t&&Number(getComputedStyle(t).zIndex)||0}function ix(t){const e=[];for(;t;)e.push(t),t=E1(t);return e}function E1(t){const{parentNode:e}=t;return e&&e instanceof ShadowRoot?e.host:e}const T1=1,w1=2,M1=4,b1=8,s5=e5()==="coarse";let Hr=[],Ad=!1,xr=new Map,Rd=new Map;const Tl=new Set;function a5(t,e,n,i,r){var o;const{ownerDocument:s}=e,a={direction:n,element:e,hitAreaMargins:i,setResizeHandlerState:r},l=(o=xr.get(s))!==null&&o!==void 0?o:0;return xr.set(s,l+1),Tl.add(a),$u(),function(){var u;Rd.delete(t),Tl.delete(a);const d=(u=xr.get(s))!==null&&u!==void 0?u:1;xr.set(s,d-1),$u(),d===1&&xr.delete(s)}}function rx(t){const{target:e}=t,{x:n,y:i}=bd(t);Ad=!0,Tm({target:e,x:n,y:i}),$u(),Hr.length>0&&(wm("down",t),t.preventDefault(),t.stopPropagation())}function Ia(t){const{x:e,y:n}=bd(t);if(!Ad){const{target:i}=t;Tm({target:i,x:e,y:n})}wm("move",t),A1(),Hr.length>0&&t.preventDefault()}function cs(t){const{target:e}=t,{x:n,y:i}=bd(t);Rd.clear(),Ad=!1,Hr.length>0&&t.preventDefault(),wm("up",t),Tm({target:e,x:n,y:i}),A1(),$u()}function Tm({target:t,x:e,y:n}){Hr.splice(0);let i=null;t instanceof HTMLElement&&(i=t),Tl.forEach(r=>{const{element:o,hitAreaMargins:s}=r,a=o.getBoundingClientRect(),{bottom:l,left:c,right:u,top:d}=a,f=s5?s.coarse:s.fine;if(e>=c-f&&e<=u+f&&n>=d-f&&n<=l+f){if(i!==null&&o!==i&&!o.contains(i)&&!i.contains(o)&&n5(i,o)>0){let _=i,v=!1;for(;_&&!_.contains(o);){if(t5(_.getBoundingClientRect(),a)){v=!0;break}_=_.parentElement}if(v)return}Hr.push(r)}})}function lh(t,e){Rd.set(t,e)}function A1(){let t=!1,e=!1;Hr.forEach(i=>{const{direction:r}=i;r==="horizontal"?t=!0:e=!0});let n=0;Rd.forEach(i=>{n|=i}),t&&e?ah("intersection",n):t?ah("horizontal",n):e?ah("vertical",n):QO()}function $u(){xr.forEach((t,e)=>{const{body:n}=e;n.removeEventListener("contextmenu",cs),n.removeEventListener("pointerdown",rx),n.removeEventListener("pointerleave",Ia),n.removeEventListener("pointermove",Ia)}),window.removeEventListener("pointerup",cs),window.removeEventListener("pointercancel",cs),Tl.size>0&&(Ad?(Hr.length>0&&xr.forEach((t,e)=>{const{body:n}=e;t>0&&(n.addEventListener("contextmenu",cs),n.addEventListener("pointerleave",Ia),n.addEventListener("pointermove",Ia))}),window.addEventListener("pointerup",cs),window.addEventListener("pointercancel",cs)):xr.forEach((t,e)=>{const{body:n}=e;t>0&&(n.addEventListener("pointerdown",rx,{capture:!0}),n.addEventListener("pointermove",Ia))}))}function wm(t,e){Tl.forEach(n=>{const{setResizeHandlerState:i}=n,r=Hr.includes(n);i(t,r,e)})}function Ke(t,e){if(!t)throw console.error(e),Error(e)}const Mm=10;function Lo(t,e,n=Mm){return t.toFixed(n)===e.toFixed(n)?0:t>e?1:-1}function Vi(t,e,n=Mm){return Lo(t,e,n)===0}function Rn(t,e,n){return Lo(t,e,n)===0}function l5(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){const r=t[i],o=e[i];if(!Rn(r,o,n))return!1}return!0}function As({panelConstraints:t,panelIndex:e,size:n}){const i=t[e];Ke(i!=null,`Panel constraints not found for index ${e}`);let{collapsedSize:r=0,collapsible:o,maxSize:s=100,minSize:a=0}=i;if(Lo(n,a)<0)if(o){const l=(r+a)/2;Lo(n,l)<0?n=r:n=a}else n=a;return n=Math.min(s,n),n=parseFloat(n.toFixed(Mm)),n}function za({delta:t,initialLayout:e,panelConstraints:n,pivotIndices:i,prevLayout:r,trigger:o}){if(Rn(t,0))return e;const s=[...e],[a,l]=i;Ke(a!=null,"Invalid first pivot index"),Ke(l!=null,"Invalid second pivot index");let c=0;if(o==="keyboard"){{const d=t<0?l:a,f=n[d];Ke(f,`Panel constraints not found for index ${d}`);const{collapsedSize:p=0,collapsible:_,minSize:v=0}=f;if(_){const m=e[d];if(Ke(m!=null,`Previous layout not found for panel index ${d}`),Rn(m,p)){const h=v-m;Lo(h,Math.abs(t))>0&&(t=t<0?0-h:h)}}}{const d=t<0?a:l,f=n[d];Ke(f,`No panel constraints found for index ${d}`);const{collapsedSize:p=0,collapsible:_,minSize:v=0}=f;if(_){const m=e[d];if(Ke(m!=null,`Previous layout not found for panel index ${d}`),Rn(m,v)){const h=m-p;Lo(h,Math.abs(t))>0&&(t=t<0?0-h:h)}}}}{const d=t<0?1:-1;let f=t<0?l:a,p=0;for(;;){const v=e[f];Ke(v!=null,`Previous layout not found for panel index ${f}`);const h=As({panelConstraints:n,panelIndex:f,size:100})-v;if(p+=h,f+=d,f<0||f>=n.length)break}const _=Math.min(Math.abs(t),Math.abs(p));t=t<0?0-_:_}{let f=t<0?a:l;for(;f>=0&&f<n.length;){const p=Math.abs(t)-Math.abs(c),_=e[f];Ke(_!=null,`Previous layout not found for panel index ${f}`);const v=_-p,m=As({panelConstraints:n,panelIndex:f,size:v});if(!Rn(_,m)&&(c+=_-m,s[f]=m,c.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3),void 0,{numeric:!0})>=0))break;t<0?f--:f++}}if(l5(r,s))return r;{const d=t<0?l:a,f=e[d];Ke(f!=null,`Previous layout not found for panel index ${d}`);const p=f+c,_=As({panelConstraints:n,panelIndex:d,size:p});if(s[d]=_,!Rn(_,p)){let v=p-_,h=t<0?l:a;for(;h>=0&&h<n.length;){const g=s[h];Ke(g!=null,`Previous layout not found for panel index ${h}`);const x=g+v,y=As({panelConstraints:n,panelIndex:h,size:x});if(Rn(g,y)||(v-=y-g,s[h]=y),Rn(v,0))break;t>0?h--:h++}}}const u=s.reduce((d,f)=>f+d,0);return Rn(u,100)?s:r}function c5({layout:t,panelsArray:e,pivotIndices:n}){let i=0,r=100,o=0,s=0;const a=n[0];Ke(a!=null,"No pivot index found"),e.forEach((d,f)=>{const{constraints:p}=d,{maxSize:_=100,minSize:v=0}=p;f===a?(i=v,r=_):(o+=v,s+=_)});const l=Math.min(r,100-o),c=Math.max(i,100-s),u=t[a];return{valueMax:l,valueMin:c,valueNow:u}}function wl(t,e=document){return Array.from(e.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${t}"]`))}function R1(t,e,n=document){const r=wl(t,n).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===e);return r??null}function C1(t,e,n){const i=R1(t,e,n);return i!=null?[i,i+1]:[-1,-1]}function P1(t,e=document){var n;if(e instanceof HTMLElement&&(e==null||(n=e.dataset)===null||n===void 0?void 0:n.panelGroupId)==t)return e;const i=e.querySelector(`[data-panel-group][data-panel-group-id="${t}"]`);return i||null}function Cd(t,e=document){const n=e.querySelector(`[data-panel-resize-handle-id="${t}"]`);return n||null}function u5(t,e,n,i=document){var r,o,s,a;const l=Cd(e,i),c=wl(t,i),u=l?c.indexOf(l):-1,d=(r=(o=n[u])===null||o===void 0?void 0:o.id)!==null&&r!==void 0?r:null,f=(s=(a=n[u+1])===null||a===void 0?void 0:a.id)!==null&&s!==void 0?s:null;return[d,f]}function d5({committedValuesRef:t,eagerValuesRef:e,groupId:n,layout:i,panelDataArray:r,panelGroupElement:o,setLayout:s}){mn({didWarnAboutMissingResizeHandle:!1}),Ao(()=>{if(!o)return;const a=wl(n,o);for(let l=0;l<r.length-1;l++){const{valueMax:c,valueMin:u,valueNow:d}=c5({layout:i,panelsArray:r,pivotIndices:[l,l+1]}),f=a[l];if(f!=null){const p=r[l];Ke(p,`No panel data found for index "${l}"`),f.setAttribute("aria-controls",p.id),f.setAttribute("aria-valuemax",""+Math.round(c)),f.setAttribute("aria-valuemin",""+Math.round(u)),f.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{a.forEach((l,c)=>{l.removeAttribute("aria-controls"),l.removeAttribute("aria-valuemax"),l.removeAttribute("aria-valuemin"),l.removeAttribute("aria-valuenow")})}},[n,i,r,o]),bo(()=>{if(!o)return;const a=e.current;Ke(a,"Eager values not found");const{panelDataArray:l}=a,c=P1(n,o);Ke(c!=null,`No group found for id "${n}"`);const u=wl(n,o);Ke(u,`No resize handles found for group id "${n}"`);const d=u.map(f=>{const p=f.getAttribute("data-panel-resize-handle-id");Ke(p,"Resize handle element has no handle id attribute");const[_,v]=u5(n,p,l,o);if(_==null||v==null)return()=>{};const m=h=>{if(!h.defaultPrevented)switch(h.key){case"Enter":{h.preventDefault();const g=l.findIndex(x=>x.id===_);if(g>=0){const x=l[g];Ke(x,`No panel data found for index ${g}`);const y=i[g],{collapsedSize:w=0,collapsible:T,minSize:b=0}=x.constraints;if(y!=null&&T){const C=za({delta:Rn(y,w)?b-w:w-y,initialLayout:i,panelConstraints:l.map(M=>M.constraints),pivotIndices:C1(n,p,o),prevLayout:i,trigger:"keyboard"});i!==C&&s(C)}}break}}};return f.addEventListener("keydown",m),()=>{f.removeEventListener("keydown",m)}});return()=>{d.forEach(f=>f())}},[o,t,e,n,i,r,s])}function ox(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function I1(t,e){const n=t==="horizontal",{x:i,y:r}=bd(e);return n?i:r}function f5(t,e,n,i,r){const o=n==="horizontal",s=Cd(e,r);Ke(s,`No resize handle element found for id "${e}"`);const a=s.getAttribute("data-panel-group-id");Ke(a,"Resize handle element has no group id attribute");let{initialCursorPosition:l}=i;const c=I1(n,t),u=P1(a,r);Ke(u,`No group element found for id "${a}"`);const d=u.getBoundingClientRect(),f=o?d.width:d.height;return(c-l)/f*100}function h5(t,e,n,i,r,o){if(x1(t)){const s=n==="horizontal";let a=0;t.shiftKey?a=100:r!=null?a=r:a=10;let l=0;switch(t.key){case"ArrowDown":l=s?0:a;break;case"ArrowLeft":l=s?-a:0;break;case"ArrowRight":l=s?a:0;break;case"ArrowUp":l=s?0:-a;break;case"End":l=100;break;case"Home":l=-100;break}return l}else return i==null?0:f5(t,e,n,i,o)}function p5({panelDataArray:t}){const e=Array(t.length),n=t.map(o=>o.constraints);let i=0,r=100;for(let o=0;o<t.length;o++){const s=n[o];Ke(s,`Panel constraints not found for index ${o}`);const{defaultSize:a}=s;a!=null&&(i++,e[o]=a,r-=a)}for(let o=0;o<t.length;o++){const s=n[o];Ke(s,`Panel constraints not found for index ${o}`);const{defaultSize:a}=s;if(a!=null)continue;const l=t.length-i,c=r/l;i++,e[o]=c,r-=c}return e}function us(t,e,n){e.forEach((i,r)=>{const o=t[r];Ke(o,`Panel data not found for index ${r}`);const{callbacks:s,constraints:a,id:l}=o,{collapsedSize:c=0,collapsible:u}=a,d=n[l];if(d==null||i!==d){n[l]=i;const{onCollapse:f,onExpand:p,onResize:_}=s;_&&_(i,d),u&&(f||p)&&(p&&(d==null||Vi(d,c))&&!Vi(i,c)&&p(),f&&(d==null||!Vi(d,c))&&Vi(i,c)&&f())}})}function Uc(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!=e[n])return!1;return!0}function m5({defaultSize:t,dragState:e,layout:n,panelData:i,panelIndex:r,precision:o=3}){const s=n[r];let a;return s==null?a=t!=null?t.toPrecision(o):"1":i.length===1?a="1":a=s.toPrecision(o),{flexBasis:0,flexGrow:a,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}function _5(t,e=10){let n=null;return(...r)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>{t(...r)},e)}}function sx(t){try{if(typeof localStorage<"u")t.getItem=e=>localStorage.getItem(e),t.setItem=(e,n)=>{localStorage.setItem(e,n)};else throw new Error("localStorage not supported in this environment")}catch(e){console.error(e),t.getItem=()=>null,t.setItem=()=>{}}}function D1(t){return`react-resizable-panels:${t}`}function N1(t){return t.map(e=>{const{constraints:n,id:i,idIsFromProps:r,order:o}=e;return r?i:o?`${o}:${JSON.stringify(n)}`:JSON.stringify(n)}).sort((e,n)=>e.localeCompare(n)).join(",")}function L1(t,e){try{const n=D1(t),i=e.getItem(n);if(i){const r=JSON.parse(i);if(typeof r=="object"&&r!=null)return r}}catch{}return null}function v5(t,e,n){var i,r;const o=(i=L1(t,n))!==null&&i!==void 0?i:{},s=N1(e);return(r=o[s])!==null&&r!==void 0?r:null}function g5(t,e,n,i,r){var o;const s=D1(t),a=N1(e),l=(o=L1(t,r))!==null&&o!==void 0?o:{};l[a]={expandToSizes:Object.fromEntries(n.entries()),layout:i};try{r.setItem(s,JSON.stringify(l))}catch(c){console.error(c)}}function ax({layout:t,panelConstraints:e}){const n=[...t],i=n.reduce((o,s)=>o+s,0);if(n.length!==e.length)throw Error(`Invalid ${e.length} panel layout: ${n.map(o=>`${o}%`).join(", ")}`);if(!Rn(i,100))for(let o=0;o<e.length;o++){const s=n[o];Ke(s!=null,`No layout data found for index ${o}`);const a=100/i*s;n[o]=a}let r=0;for(let o=0;o<e.length;o++){const s=n[o];Ke(s!=null,`No layout data found for index ${o}`);const a=As({panelConstraints:e,panelIndex:o,size:s});s!=a&&(r+=s-a,n[o]=a)}if(!Rn(r,0))for(let o=0;o<e.length;o++){const s=n[o];Ke(s!=null,`No layout data found for index ${o}`);const a=s+r,l=As({panelConstraints:e,panelIndex:o,size:a});if(s!==l&&(r-=l-s,n[o]=l,Rn(r,0)))break}return n}const x5=100,Fa={getItem:t=>(sx(Fa),Fa.getItem(t)),setItem:(t,e)=>{sx(Fa),Fa.setItem(t,e)}},lx={};function U1({autoSaveId:t=null,children:e,className:n="",direction:i,forwardedRef:r,id:o=null,onLayout:s=null,keyboardResizeBy:a=null,storage:l=Fa,style:c,tagName:u="div",...d}){const f=Em(o),p=mn(null),[_,v]=Qa(null),[m,h]=Qa([]),g=mn({}),x=mn(new Map),y=mn(0),w=mn({autoSaveId:t,direction:i,dragState:_,id:f,keyboardResizeBy:a,onLayout:s,storage:l}),T=mn({layout:m,panelDataArray:[],panelDataArrayChanged:!1});mn({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),_1(r,()=>({getId:()=>w.current.id,getLayout:()=>{const{layout:ee}=T.current;return ee},setLayout:ee=>{const{onLayout:fe}=w.current,{layout:$,panelDataArray:q}=T.current,te=ax({layout:ee,panelConstraints:q.map(P=>P.constraints)});ox($,te)||(h(te),T.current.layout=te,fe&&fe(te),us(q,te,g.current))}}),[]),Ao(()=>{w.current.autoSaveId=t,w.current.direction=i,w.current.dragState=_,w.current.id=f,w.current.onLayout=s,w.current.storage=l}),d5({committedValuesRef:w,eagerValuesRef:T,groupId:f,layout:m,panelDataArray:T.current.panelDataArray,setLayout:h,panelGroupElement:p.current}),bo(()=>{const{panelDataArray:ee}=T.current;if(t){if(m.length===0||m.length!==ee.length)return;let fe=lx[t];fe==null&&(fe=_5(g5,x5),lx[t]=fe);const $=[...ee],q=new Map(x.current);fe(t,$,q,m,l)}},[t,m,l]),bo(()=>{});const b=bn(ee=>{const{onLayout:fe}=w.current,{layout:$,panelDataArray:q}=T.current;if(ee.constraints.collapsible){const te=q.map(z=>z.constraints),{collapsedSize:P=0,panelSize:Q,pivotIndices:le}=oo(q,ee,$);if(Ke(Q!=null,`Panel size not found for panel "${ee.id}"`),!Vi(Q,P)){x.current.set(ee.id,Q);const pe=fs(q,ee)===q.length-1?Q-P:P-Q,ie=za({delta:pe,initialLayout:$,panelConstraints:te,pivotIndices:le,prevLayout:$,trigger:"imperative-api"});Uc($,ie)||(h(ie),T.current.layout=ie,fe&&fe(ie),us(q,ie,g.current))}}},[]),C=bn((ee,fe)=>{const{onLayout:$}=w.current,{layout:q,panelDataArray:te}=T.current;if(ee.constraints.collapsible){const P=te.map(Ce=>Ce.constraints),{collapsedSize:Q=0,panelSize:le=0,minSize:z=0,pivotIndices:pe}=oo(te,ee,q),ie=fe??z;if(Vi(le,Q)){const Ce=x.current.get(ee.id),ye=Ce!=null&&Ce>=ie?Ce:ie,De=fs(te,ee)===te.length-1?le-ye:ye-le,Ne=za({delta:De,initialLayout:q,panelConstraints:P,pivotIndices:pe,prevLayout:q,trigger:"imperative-api"});Uc(q,Ne)||(h(Ne),T.current.layout=Ne,$&&$(Ne),us(te,Ne,g.current))}}},[]),M=bn(ee=>{const{layout:fe,panelDataArray:$}=T.current,{panelSize:q}=oo($,ee,fe);return Ke(q!=null,`Panel size not found for panel "${ee.id}"`),q},[]),E=bn((ee,fe)=>{const{panelDataArray:$}=T.current,q=fs($,ee);return m5({defaultSize:fe,dragState:_,layout:m,panelData:$,panelIndex:q})},[_,m]),U=bn(ee=>{const{layout:fe,panelDataArray:$}=T.current,{collapsedSize:q=0,collapsible:te,panelSize:P}=oo($,ee,fe);return Ke(P!=null,`Panel size not found for panel "${ee.id}"`),te===!0&&Vi(P,q)},[]),O=bn(ee=>{const{layout:fe,panelDataArray:$}=T.current,{collapsedSize:q=0,collapsible:te,panelSize:P}=oo($,ee,fe);return Ke(P!=null,`Panel size not found for panel "${ee.id}"`),!te||Lo(P,q)>0},[]),D=bn(ee=>{const{panelDataArray:fe}=T.current;fe.push(ee),fe.sort(($,q)=>{const te=$.order,P=q.order;return te==null&&P==null?0:te==null?-1:P==null?1:te-P}),T.current.panelDataArrayChanged=!0},[]);Ao(()=>{if(T.current.panelDataArrayChanged){T.current.panelDataArrayChanged=!1;const{autoSaveId:ee,onLayout:fe,storage:$}=w.current,{layout:q,panelDataArray:te}=T.current;let P=null;if(ee){const le=v5(ee,te,$);le&&(x.current=new Map(Object.entries(le.expandToSizes)),P=le.layout)}P==null&&(P=p5({panelDataArray:te}));const Q=ax({layout:P,panelConstraints:te.map(le=>le.constraints)});ox(q,Q)||(h(Q),T.current.layout=Q,fe&&fe(Q),us(te,Q,g.current))}}),Ao(()=>{const ee=T.current;return()=>{ee.layout=[]}},[]);const B=bn(ee=>function($){$.preventDefault();const q=p.current;if(!q)return()=>null;const{direction:te,dragState:P,id:Q,keyboardResizeBy:le,onLayout:z}=w.current,{layout:pe,panelDataArray:ie}=T.current,{initialLayout:Ce}=P??{},ye=C1(Q,ee,q);let Re=h5($,ee,te,P,le,q);if(Re===0)return;const De=te==="horizontal";document.dir==="rtl"&&De&&(Re=-Re);const Ne=ie.map(A=>A.constraints),rt=za({delta:Re,initialLayout:Ce??pe,panelConstraints:Ne,pivotIndices:ye,prevLayout:pe,trigger:x1($)?"keyboard":"mouse-or-touch"}),I=!Uc(pe,rt);(y1($)||S1($))&&y.current!=Re&&(y.current=Re,I?lh(ee,0):De?lh(ee,Re<0?T1:w1):lh(ee,Re<0?M1:b1)),I&&(h(rt),T.current.layout=rt,z&&z(rt),us(ie,rt,g.current))},[]),F=bn((ee,fe)=>{const{onLayout:$}=w.current,{layout:q,panelDataArray:te}=T.current,P=te.map(Ce=>Ce.constraints),{panelSize:Q,pivotIndices:le}=oo(te,ee,q);Ke(Q!=null,`Panel size not found for panel "${ee.id}"`);const pe=fs(te,ee)===te.length-1?Q-fe:fe-Q,ie=za({delta:pe,initialLayout:q,panelConstraints:P,pivotIndices:le,prevLayout:q,trigger:"imperative-api"});Uc(q,ie)||(h(ie),T.current.layout=ie,$&&$(ie),us(te,ie,g.current))},[]),X=bn((ee,fe)=>{const{layout:$,panelDataArray:q}=T.current,{collapsedSize:te=0,collapsible:P}=fe,{collapsedSize:Q=0,collapsible:le,maxSize:z=100,minSize:pe=0}=ee.constraints,{panelSize:ie}=oo(q,ee,$);ie!=null&&(P&&le&&Vi(ie,te)?Vi(te,Q)||F(ee,Q):ie<pe?F(ee,pe):ie>z&&F(ee,z))},[F]),K=bn((ee,fe)=>{const{direction:$}=w.current,{layout:q}=T.current;if(!p.current)return;const te=Cd(ee,p.current);Ke(te,`Drag handle element not found for id "${ee}"`);const P=I1($,fe);v({dragHandleId:ee,dragHandleRect:te.getBoundingClientRect(),initialCursorPosition:P,initialLayout:q})},[]),N=bn(()=>{v(null)},[]),H=bn(ee=>{const{panelDataArray:fe}=T.current,$=fs(fe,ee);$>=0&&(fe.splice($,1),delete g.current[ee.id],T.current.panelDataArrayChanged=!0)},[]),W=YO(()=>({collapsePanel:b,direction:i,dragState:_,expandPanel:C,getPanelSize:M,getPanelStyle:E,groupId:f,isPanelCollapsed:U,isPanelExpanded:O,reevaluatePanelConstraints:X,registerPanel:D,registerResizeHandle:B,resizePanel:F,startDragging:K,stopDragging:N,unregisterPanel:H,panelGroupElement:p.current}),[b,_,i,C,M,E,f,U,O,X,D,B,F,K,N,H]),re={display:"flex",flexDirection:i==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return ea(Md.Provider,{value:W},ea(u,{...d,children:e,className:n,id:o,ref:p,style:{...re,...c},"data-panel-group":"","data-panel-group-direction":i,"data-panel-group-id":f}))}const O1=p1((t,e)=>ea(U1,{...t,forwardedRef:e}));U1.displayName="PanelGroup";O1.displayName="forwardRef(PanelGroup)";function fs(t,e){return t.findIndex(n=>n===e||n.id===e.id)}function oo(t,e,n){const i=fs(t,e),o=i===t.length-1?[i-1,i]:[i,i+1],s=n[i];return{...e.constraints,panelSize:s,pivotIndices:o}}function y5({disabled:t,handleId:e,resizeHandler:n,panelGroupElement:i}){bo(()=>{if(t||n==null||i==null)return;const r=Cd(e,i);if(r==null)return;const o=s=>{if(!s.defaultPrevented)switch(s.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{s.preventDefault(),n(s);break}case"F6":{s.preventDefault();const a=r.getAttribute("data-panel-group-id");Ke(a,`No group element found for id "${a}"`);const l=wl(a,i),c=R1(a,e,i);Ke(c!==null,`No resize element found for id "${e}"`);const u=s.shiftKey?c>0?c-1:l.length-1:c+1<l.length?c+1:0;l[u].focus();break}}};return r.addEventListener("keydown",o),()=>{r.removeEventListener("keydown",o)}},[i,t,e,n])}function z1({children:t=null,className:e="",disabled:n=!1,hitAreaMargins:i,id:r,onDragging:o,style:s={},tabIndex:a=0,tagName:l="div",...c}){var u,d;const f=mn(null),p=mn({onDragging:o});bo(()=>{p.current.onDragging=o});const _=m1(Md);if(_===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:v,groupId:m,registerResizeHandle:h,startDragging:g,stopDragging:x,panelGroupElement:y}=_,w=Em(r),[T,b]=Qa("inactive"),[C,M]=Qa(!1),[E,U]=Qa(null),O=mn({state:T});Ao(()=>{O.current.state=T}),bo(()=>{if(n)U(null);else{const X=h(w);U(()=>X)}},[n,w,h]);const D=(u=i==null?void 0:i.coarse)!==null&&u!==void 0?u:15,B=(d=i==null?void 0:i.fine)!==null&&d!==void 0?d:5;return bo(()=>{if(n||E==null)return;const X=f.current;return Ke(X,"Element ref not attached"),a5(w,X,v,{coarse:D,fine:B},(N,H,W)=>{if(H)switch(N){case"down":{b("drag"),g(w,W);const{onDragging:re}=p.current;re&&re(!0);break}case"move":{const{state:re}=O.current;re!=="drag"&&b("hover"),E(W);break}case"up":{b("hover"),x();const{onDragging:re}=p.current;re&&re(!1);break}}else b("inactive")})},[D,v,n,B,h,w,E,g,x]),y5({disabled:n,handleId:w,resizeHandler:E,panelGroupElement:y}),ea(l,{...c,children:t,className:e,id:r,onBlur:()=>M(!1),onFocus:()=>M(!0),ref:f,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...s},tabIndex:a,"data-panel-group-direction":v,"data-panel-group-id":m,"data-resize-handle":"","data-resize-handle-active":T==="drag"?"pointer":C?"keyboard":void 0,"data-resize-handle-state":T,"data-panel-resize-handle-enabled":!n,"data-panel-resize-handle-id":w})}z1.displayName="PanelResizeHandle";const ch=({className:t,...e})=>L.jsx(O1,{className:dt("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...e}),so=g1,Oc=({withHandle:t,className:e,...n})=>L.jsx(z1,{className:dt("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",e),...n,children:t&&L.jsx("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:L.jsx(nN,{className:"h-2.5 w-2.5"})})}),F1=S.forwardRef((t,e)=>{const{pressed:n,defaultPressed:i=!1,onPressedChange:r,...o}=t,[s=!1,a]=li({prop:n,onChange:r,defaultProp:i});return S.createElement(Xe.button,de({type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":t.disabled?"":void 0},o,{ref:e,onClick:We(t.onClick,()=>{t.disabled||a(!s)})}))}),k1=F1,Pd="ToggleGroup",[B1,F5]=Ci(Pd,[pd]),$1=pd(),S5=we.forwardRef((t,e)=>{const{type:n,...i}=t;if(n==="single"){const r=i;return we.createElement(E5,de({},r,{ref:e}))}if(n==="multiple"){const r=i;return we.createElement(T5,de({},r,{ref:e}))}throw new Error(`Missing prop \`type\` expected on \`${Pd}\``)}),[V1,G1]=B1(Pd),E5=we.forwardRef((t,e)=>{const{value:n,defaultValue:i,onValueChange:r=()=>{},...o}=t,[s,a]=li({prop:n,defaultProp:i,onChange:r});return we.createElement(V1,{scope:t.__scopeToggleGroup,type:"single",value:s?[s]:[],onItemActivate:a,onItemDeactivate:we.useCallback(()=>a(""),[a])},we.createElement(H1,de({},o,{ref:e})))}),T5=we.forwardRef((t,e)=>{const{value:n,defaultValue:i,onValueChange:r=()=>{},...o}=t,[s=[],a]=li({prop:n,defaultProp:i,onChange:r}),l=we.useCallback(u=>a((d=[])=>[...d,u]),[a]),c=we.useCallback(u=>a((d=[])=>d.filter(f=>f!==u)),[a]);return we.createElement(V1,{scope:t.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:l,onItemDeactivate:c},we.createElement(H1,de({},o,{ref:e})))}),[w5,M5]=B1(Pd),H1=we.forwardRef((t,e)=>{const{__scopeToggleGroup:n,disabled:i=!1,rovingFocus:r=!0,orientation:o,dir:s,loop:a=!0,...l}=t,c=$1(n),u=ca(s),d={role:"group",dir:u,...l};return we.createElement(w5,{scope:n,rovingFocus:r,disabled:i},r?we.createElement(MS,de({asChild:!0},c,{orientation:o,dir:u,loop:a}),we.createElement(Xe.div,de({},d,{ref:e}))):we.createElement(Xe.div,de({},d,{ref:e})))}),Rp="ToggleGroupItem",b5=we.forwardRef((t,e)=>{const n=G1(Rp,t.__scopeToggleGroup),i=M5(Rp,t.__scopeToggleGroup),r=$1(t.__scopeToggleGroup),o=n.value.includes(t.value),s=i.disabled||t.disabled,a={...t,pressed:o,disabled:s},l=we.useRef(null);return i.rovingFocus?we.createElement(bS,de({asChild:!0},r,{focusable:!s,active:o,ref:l}),we.createElement(cx,de({},a,{ref:e}))):we.createElement(cx,de({},a,{ref:e}))}),cx=we.forwardRef((t,e)=>{const{__scopeToggleGroup:n,value:i,...r}=t,o=G1(Rp,n),s={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},a=o.type==="single"?s:void 0;return we.createElement(F1,de({},a,r,{ref:e,onPressedChange:l=>{l?o.onItemActivate(i):o.onItemDeactivate(i)}}))}),W1=S5,X1=b5,j1=cm("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),Y1=S.forwardRef(({className:t,variant:e,size:n,...i},r)=>L.jsx(k1,{ref:r,className:dt(j1({variant:e,size:n,className:t})),...i}));Y1.displayName=k1.displayName;const q1=S.createContext({size:"default",variant:"default"}),K1=S.forwardRef(({className:t,variant:e,size:n,children:i,...r},o)=>L.jsx(W1,{ref:o,className:dt("flex items-center justify-center gap-1",t),...r,children:L.jsx(q1.Provider,{value:{variant:e,size:n},children:i})}));K1.displayName=W1.displayName;const Cp=S.forwardRef(({className:t,children:e,variant:n,size:i,...r},o)=>{const s=S.useContext(q1);return L.jsx(X1,{ref:o,className:dt(j1({variant:s.variant||n,size:s.size||i}),t),...r,children:e})});Cp.displayName=X1.displayName;class Z1 extends S.Component{constructor(){super(...arguments);Ye(this,"handleChange",n=>{const{uiState:i,setUiState:r}=this.context;console.warn("e",i.UI_STATE_LINKED_VIEWS_ACTIVE),r({UI_STATE_LINKED_VIEWS_ACTIVE:!i.UI_STATE_LINKED_VIEWS_ACTIVE})})}render(){this.props;const{uiState:n}=this.context,i=n.UI_STATE_LINKED_VIEWS_ACTIVE,r=!!i;return L.jsx(Y1,{name:"","data-state":r?"on":"off",defaultValue:i,onClick:this.handleChange,children:L.jsx(iN,{className:"h-8 w-8"})})}}Ye(Z1,"contextType",ui);class J1 extends S.Component{constructor(){super(...arguments);Ye(this,"handleToggleChange",n=>{if(n){const{setUiState:i}=this.context;i({UI_STATE_ACTIVE_BEHAVIOR:n})}})}render(){const{uiState:n}=this.context,i=n.UI_STATE_ACTIVE_BEHAVIOR;return L.jsxs("div",{children:[L.jsxs(K1,{type:"single",value:i,onValueChange:this.handleToggleChange,children:[L.jsx(Cp,{value:wo,children:L.jsx(QD,{className:"h-8 w-8"})}),L.jsx(Cp,{value:b9,children:L.jsx(rN,{className:"h-8 w-8"})})]}),L.jsx(Z1,{})]})}}Ye(J1,"contextType",ui);class Q1 extends S.Component{handleClickAlignCamera(){console.log("handleClickAlignCamera"),Ct.emit(R0,{})}render(){const{uiState:e}=this.context;return e.UI_STATE_ACTIVE_BEHAVIOR,L.jsx(Ul,{variant:"outline",size:"icon",onClick:this.handleClickAlignCamera,children:L.jsx(tN,{className:"h-4 w-4"})})}}Ye(Q1,"contextType",ui);function A5(){const t=S.useRef(null),e=S.useRef(null);function n(){console.log("handleResizePanel"),Ct.emit(E9,{})}return L.jsx(U3,{children:L.jsx("div",{className:"absolute inset-2 flex flex-col",children:L.jsxs(ch,{direction:"horizontal",className:"max-w-md inset-0 min-w-full rounded-lg border",children:[L.jsx(so,{defaultSize:25,children:L.jsx($O,{})}),L.jsx(Oc,{}),L.jsx(so,{onResize:n,defaultSize:50,children:L.jsxs(ch,{direction:"vertical",children:[L.jsx(so,{onResize:n,defaultSize:85,children:L.jsx(tI,{ref:t,auxRef:e})}),L.jsx(Oc,{}),L.jsxs(so,{defaultSize:15,children:[L.jsx("div",{className:"flex items-center justify-center p-2",children:L.jsx(J1,{})}),L.jsx("div",{className:"flex items-center justify-center p-2",children:L.jsx(Q1,{})})]})]})}),L.jsx(Oc,{}),L.jsx(so,{defaultSize:25,children:L.jsxs(ch,{direction:"vertical",children:[L.jsx(so,{onResize:n,defaultSize:50,children:L.jsx(oI,{ref:e,mainRef:t})}),L.jsx(Oc,{}),L.jsx(so,{defaultSize:50,children:L.jsx(h1,{})})]})})]})})})}uh.createRoot(document.getElementById("root")).render(L.jsx(A5,{}));
