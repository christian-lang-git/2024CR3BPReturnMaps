var vT=Object.defineProperty;var gT=(t,e,n)=>e in t?vT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fe=(t,e,n)=>(gT(t,typeof e!="symbol"?e+"":e,n),n);function xT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yx={exports:{}},Xu={},Ex={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),yT=Symbol.for("react.portal"),ET=Symbol.for("react.fragment"),ST=Symbol.for("react.strict_mode"),TT=Symbol.for("react.profiler"),wT=Symbol.for("react.provider"),MT=Symbol.for("react.context"),bT=Symbol.for("react.forward_ref"),AT=Symbol.for("react.suspense"),RT=Symbol.for("react.memo"),CT=Symbol.for("react.lazy"),Hm=Symbol.iterator;function PT(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tx=Object.assign,wx={};function ia(t,e,n){this.props=t,this.context=e,this.refs=wx,this.updater=n||Sx}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mx(){}Mx.prototype=ia.prototype;function zp(t,e,n){this.props=t,this.context=e,this.refs=wx,this.updater=n||Sx}var Fp=zp.prototype=new Mx;Fp.constructor=zp;Tx(Fp,ia.prototype);Fp.isPureReactComponent=!0;var Wm=Array.isArray,bx=Object.prototype.hasOwnProperty,kp={current:null},Ax={key:!0,ref:!0,__self:!0,__source:!0};function Rx(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)bx.call(e,r)&&!Ax.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:t,key:o,ref:s,props:i,_owner:kp.current}}function IT(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function DT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xm=/\/+/g;function Fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DT(""+t.key):e.toString(36)}function $c(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Cl:case yT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Fd(s,0):r,Wm(i)?(n="",t!=null&&(n=t.replace(Xm,"$&/")+"/"),$c(i,e,n,"",function(c){return c})):i!=null&&(Bp(i)&&(i=IT(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Wm(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Fd(o,a);s+=$c(o,e,n,l,i)}else if(l=PT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Fd(o,a++),s+=$c(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Vl(t,e,n){if(t==null)return t;var r=[],i=0;return $c(t,r,"","",function(o){return e.call(n,o,i++)}),r}function NT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Vc={transition:null},LT={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:kp};function Cx(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Bp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=ia;tt.Fragment=ET;tt.Profiler=TT;tt.PureComponent=zp;tt.StrictMode=ST;tt.Suspense=AT;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;tt.act=Cx;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tx({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bx.call(e,l)&&!Ax.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cl,type:t.type,key:i,ref:o,props:r,_owner:s}};tt.createContext=function(t){return t={$$typeof:MT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wT,_context:t},t.Consumer=t};tt.createElement=Rx;tt.createFactory=function(t){var e=Rx.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:bT,render:t}};tt.isValidElement=Bp;tt.lazy=function(t){return{$$typeof:CT,_payload:{_status:-1,_result:t},_init:NT}};tt.memo=function(t,e){return{$$typeof:RT,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Vc.transition;Vc.transition={};try{t()}finally{Vc.transition=e}};tt.unstable_act=Cx;tt.useCallback=function(t,e){return pn.current.useCallback(t,e)};tt.useContext=function(t){return pn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return pn.current.useEffect(t,e)};tt.useId=function(){return pn.current.useId()};tt.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return pn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};tt.useRef=function(t){return pn.current.useRef(t)};tt.useState=function(t){return pn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return pn.current.useTransition()};tt.version="18.3.1";Ex.exports=tt;var E=Ex.exports;const we=Op(E),$p=xT({__proto__:null,default:we},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT=E,OT=Symbol.for("react.element"),zT=Symbol.for("react.fragment"),FT=Object.prototype.hasOwnProperty,kT=UT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BT={key:!0,ref:!0,__self:!0,__source:!0};function Px(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)FT.call(e,r)&&!BT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OT,type:t,key:o,ref:s,props:i,_owner:kT.current}}Xu.Fragment=zT;Xu.jsx=Px;Xu.jsxs=Px;yx.exports=Xu;var I=yx.exports,_h={},Ix={exports:{}},kn={},Dx={exports:{}},Nx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var X=U.length;U.push(H);e:for(;0<X;){var re=X-1>>>1,Z=U[re];if(0<i(Z,H))U[re]=H,U[X]=Z,X=re;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],X=U.pop();if(X!==H){U[0]=X;e:for(var re=0,Z=U.length,fe=Z>>>1;re<fe;){var $=2*(re+1)-1,K=U[$],te=$+1,P=U[te];if(0>i(K,X))te<Z&&0>i(P,K)?(U[re]=P,U[te]=X,re=te):(U[re]=K,U[$]=X,re=$);else if(te<Z&&0>i(P,X))U[re]=P,U[te]=X,re=te;else break e}}return H}function i(U,H){var X=U.sortIndex-H.sortIndex;return X!==0?X:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=U)r(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function y(U){if(v=!1,x(U),!_)if(n(l)!==null)_=!0,q(w);else{var H=n(c);H!==null&&W(y,H.startTime-U)}}function w(U,H){_=!1,v&&(v=!1,h(C),C=-1),p=!0;var X=f;try{for(x(H),d=n(l);d!==null&&(!(d.expirationTime>H)||U&&!L());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var Z=re(d.expirationTime<=H);H=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),x(H)}else r(l);d=n(l)}if(d!==null)var fe=!0;else{var $=n(c);$!==null&&W(y,$.startTime-H),fe=!1}return fe}finally{d=null,f=X,p=!1}}var T=!1,b=null,C=-1,M=5,S=-1;function L(){return!(t.unstable_now()-S<M)}function O(){if(b!==null){var U=t.unstable_now();S=U;var H=!0;try{H=b(!0,U)}finally{H?N():(T=!1,b=null)}}else T=!1}var N;if(typeof g=="function")N=function(){g(O)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,F=B.port2;B.port1.onmessage=O,N=function(){F.postMessage(null)}}else N=function(){m(O,0)};function q(U){b=U,T||(T=!0,N())}function W(U,H){C=m(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(w))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var X=f;f=H;try{return U()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=f;f=U;try{return H()}finally{f=X}},t.unstable_scheduleCallback=function(U,H,X){var re=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?re+X:re):X=re,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=X+Z,U={id:u++,callback:H,priorityLevel:U,startTime:X,expirationTime:Z,sortIndex:-1},X>re?(U.sortIndex=X,e(c,U),n(l)===null&&U===n(c)&&(v?(h(C),C=-1):v=!0,W(y,X-re))):(U.sortIndex=Z,e(l,U),_||p||(_=!0,q(w))),U},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(U){var H=f;return function(){var X=f;f=H;try{return U.apply(this,arguments)}finally{f=X}}}})(Nx);Dx.exports=Nx;var $T=Dx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=E,Fn=$T;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lx=new Set,rl={};function Fo(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(rl[t]=e,t=0;t<e.length;t++)Lx.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,GT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Ym={};function HT(t){return vh.call(Ym,t)?!0:vh.call(jm,t)?!1:GT.test(t)?Ym[t]=!0:(jm[t]=!0,!1)}function WT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XT(t,e,n,r){if(e===null||typeof e>"u"||WT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);Yt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Gp);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hp(t,e,n,r){var i=Yt.hasOwnProperty(e)?Yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XT(e,n,i,r)&&(n=null),r||i===null?HT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ni=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),_s=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),zx=Symbol.for("react.offscreen"),qm=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,kd;function Ua(t){if(kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kd=e&&e[1]||""}return`
`+kd+t}var Bd=!1;function $d(t,e){if(!t||Bd)return"";Bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function jT(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=$d(t.type,!1),t;case 11:return t=$d(t.type.render,!1),t;case 1:return t=$d(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case _s:return"Portal";case gh:return"Profiler";case Wp:return"StrictMode";case xh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ox:return(t.displayName||"Context")+".Consumer";case Ux:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function YT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qT(t){var e=Fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=qT(t))}function kx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bx(t,e){e=e.checked,e!=null&&Hp(t,"checked",e,!1)}function Th(t,e){Bx(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function Is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Oa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function $x(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wl,Gx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KT=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){KT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function Hx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function Wx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZT=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(ZT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,Ds=null,Ns=null;function e_(t){if(t=Dl(t)){if(typeof Ph!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Zu(e),Ph(t.stateNode,t.type,e))}}function Xx(t){Ds?Ns?Ns.push(t):Ns=[t]:Ds=t}function jx(){if(Ds){var t=Ds,e=Ns;if(Ns=Ds=null,e_(t),e)for(t=0;t<e.length;t++)e_(e[t])}}function Yx(t,e){return t(e)}function qx(){}var Vd=!1;function Kx(t,e,n){if(Vd)return t(e,n);Vd=!0;try{return Yx(t,e,n)}finally{Vd=!1,(Ds!==null||Ns!==null)&&(qx(),jx())}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Ih=!1;if(Kr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Ih=!1}function JT(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ga=!1,su=null,au=!1,Dh=null,QT={onError:function(t){Ga=!0,su=t}};function ew(t,e,n,r,i,o,s,a,l){Ga=!1,su=null,JT.apply(QT,arguments)}function tw(t,e,n,r,i,o,s,a,l){if(ew.apply(this,arguments),Ga){if(Ga){var c=su;Ga=!1,su=null}else throw Error(ce(198));au||(au=!0,Dh=c)}}function ko(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t_(t){if(ko(t)!==t)throw Error(ce(188))}function nw(t){var e=t.alternate;if(!e){if(e=ko(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return t_(i),t;if(o===r)return t_(i),e;o=o.sibling}throw Error(ce(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==r)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Jx(t){return t=nw(t),t!==null?Qx(t):null}function Qx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qx(t);if(e!==null)return e;t=t.sibling}return null}var ey=Fn.unstable_scheduleCallback,n_=Fn.unstable_cancelCallback,rw=Fn.unstable_shouldYield,iw=Fn.unstable_requestPaint,It=Fn.unstable_now,ow=Fn.unstable_getCurrentPriorityLevel,qp=Fn.unstable_ImmediatePriority,ty=Fn.unstable_UserBlockingPriority,lu=Fn.unstable_NormalPriority,sw=Fn.unstable_LowPriority,ny=Fn.unstable_IdlePriority,ju=null,wr=null;function aw(t){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:uw,lw=Math.log,cw=Math.LN2;function uw(t){return t>>>=0,t===0?32:31-(lw(t)/cw|0)|0}var Xl=64,jl=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=za(a):(o&=s,o!==0&&(r=za(o)))}else s=n&~i,s!==0?r=za(s):o!==0&&(r=za(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lr(e),i=1<<n,r|=t[n],e&=~i;return r}function dw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-lr(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=dw(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ry(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function Gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lr(e),t[e]=n}function hw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ut=0;function iy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oy,Zp,sy,ay,ly,Lh=!1,Yl=[],Mi=null,bi=null,Ai=null,sl=new Map,al=new Map,xi=[],pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r_(t,e){switch(t){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Ai=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function Sa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Dl(e),e!==null&&Zp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mw(t,e,n,r,i){switch(e){case"focusin":return Mi=Sa(Mi,t,e,n,r,i),!0;case"dragenter":return bi=Sa(bi,t,e,n,r,i),!0;case"mouseover":return Ai=Sa(Ai,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return sl.set(o,Sa(sl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,al.set(o,Sa(al.get(o)||null,t,e,n,r,i)),!0}return!1}function cy(t){var e=vo(t.target);if(e!==null){var n=ko(e);if(n!==null){if(e=n.tag,e===13){if(e=Zx(n),e!==null){t.blockedOn=e,ly(t.priority,function(){sy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=Dl(n),e!==null&&Zp(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){Gc(t)&&n.delete(e)}function _w(){Lh=!1,Mi!==null&&Gc(Mi)&&(Mi=null),bi!==null&&Gc(bi)&&(bi=null),Ai!==null&&Gc(Ai)&&(Ai=null),sl.forEach(i_),al.forEach(i_)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,_w)))}function ll(t){function e(i){return Ta(i,t)}if(0<Yl.length){Ta(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mi!==null&&Ta(Mi,t),bi!==null&&Ta(bi,t),Ai!==null&&Ta(Ai,t),sl.forEach(e),al.forEach(e),n=0;n<xi.length;n++)r=xi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&xi.shift()}var Ls=ni.ReactCurrentBatchConfig,uu=!0;function vw(t,e,n,r){var i=ut,o=Ls.transition;Ls.transition=null;try{ut=1,Jp(t,e,n,r)}finally{ut=i,Ls.transition=o}}function gw(t,e,n,r){var i=ut,o=Ls.transition;Ls.transition=null;try{ut=4,Jp(t,e,n,r)}finally{ut=i,Ls.transition=o}}function Jp(t,e,n,r){if(uu){var i=Uh(t,e,n,r);if(i===null)Qd(t,e,r,du,n),r_(t,r);else if(mw(i,t,e,n,r))r.stopPropagation();else if(r_(t,r),e&4&&-1<pw.indexOf(t)){for(;i!==null;){var o=Dl(i);if(o!==null&&oy(o),o=Uh(t,e,n,r),o===null&&Qd(t,e,r,du,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qd(t,e,r,null,n)}}var du=null;function Uh(t,e,n,r){if(du=null,t=Yp(r),t=vo(t),t!==null)if(e=ko(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ow()){case qp:return 1;case ty:return 4;case lu:case sw:return 16;case ny:return 536870912;default:return 16}default:return 16}}var Ti=null,Qp=null,Hc=null;function dy(){if(Hc)return Hc;var t,e=Qp,n=e.length,r,i="value"in Ti?Ti.value:Ti.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Hc=i.slice(t,1<r?1-r:void 0)}function Wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function o_(){return!1}function Bn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ql:o_,this.isPropagationStopped=o_,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},e0=Bn(oa),Il=bt({},oa,{view:0,detail:0}),xw=Bn(Il),Hd,Wd,wa,Yu=bt({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:t0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(Hd=t.screenX-wa.screenX,Wd=t.screenY-wa.screenY):Wd=Hd=0,wa=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Wd}}),s_=Bn(Yu),yw=bt({},Yu,{dataTransfer:0}),Ew=Bn(yw),Sw=bt({},Il,{relatedTarget:0}),Xd=Bn(Sw),Tw=bt({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),ww=Bn(Tw),Mw=bt({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bw=Bn(Mw),Aw=bt({},oa,{data:0}),a_=Bn(Aw),Rw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pw[t])?!!e[t]:!1}function t0(){return Iw}var Dw=bt({},Il,{key:function(t){if(t.key){var e=Rw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:t0,charCode:function(t){return t.type==="keypress"?Wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nw=Bn(Dw),Lw=bt({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l_=Bn(Lw),Uw=bt({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:t0}),Ow=Bn(Uw),zw=bt({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fw=Bn(zw),kw=bt({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bw=Bn(kw),$w=[9,13,27,32],n0=Kr&&"CompositionEvent"in window,Ha=null;Kr&&"documentMode"in document&&(Ha=document.documentMode);var Vw=Kr&&"TextEvent"in window&&!Ha,fy=Kr&&(!n0||Ha&&8<Ha&&11>=Ha),c_=" ",u_=!1;function hy(t,e){switch(t){case"keyup":return $w.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Gw(t,e){switch(t){case"compositionend":return py(e);case"keypress":return e.which!==32?null:(u_=!0,c_);case"textInput":return t=e.data,t===c_&&u_?null:t;default:return null}}function Hw(t,e){if(gs)return t==="compositionend"||!n0&&hy(t,e)?(t=dy(),Hc=Qp=Ti=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fy&&e.locale!=="ko"?null:e.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ww[t.type]:e==="textarea"}function my(t,e,n,r){Xx(r),e=fu(e,"onChange"),0<e.length&&(n=new e0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,cl=null;function Xw(t){by(t,0)}function qu(t){var e=Es(t);if(kx(e))return t}function jw(t,e){if(t==="change")return e}var _y=!1;if(Kr){var jd;if(Kr){var Yd="oninput"in document;if(!Yd){var f_=document.createElement("div");f_.setAttribute("oninput","return;"),Yd=typeof f_.oninput=="function"}jd=Yd}else jd=!1;_y=jd&&(!document.documentMode||9<document.documentMode)}function h_(){Wa&&(Wa.detachEvent("onpropertychange",vy),cl=Wa=null)}function vy(t){if(t.propertyName==="value"&&qu(cl)){var e=[];my(e,cl,t,Yp(t)),Kx(Xw,e)}}function Yw(t,e,n){t==="focusin"?(h_(),Wa=e,cl=n,Wa.attachEvent("onpropertychange",vy)):t==="focusout"&&h_()}function qw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(cl)}function Kw(t,e){if(t==="click")return qu(e)}function Zw(t,e){if(t==="input"||t==="change")return qu(e)}function Jw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ur=typeof Object.is=="function"?Object.is:Jw;function ul(t,e){if(ur(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(e,i)||!ur(t[i],e[i]))return!1}return!0}function p_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m_(t,e){var n=p_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p_(n)}}function gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xy(){for(var t=window,e=ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function r0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qw(t){var e=xy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&r0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=m_(n,o);var s=m_(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eM=Kr&&"documentMode"in document&&11>=document.documentMode,xs=null,Oh=null,Xa=null,zh=!1;function __(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||xs==null||xs!==ou(r)||(r=xs,"selectionStart"in r&&r0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xa&&ul(Xa,r)||(Xa=r,r=fu(Oh,"onSelect"),0<r.length&&(e=new e0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},qd={},yy={};Kr&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ku(t){if(qd[t])return qd[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yy)return qd[t]=e[n];return t}var Ey=Ku("animationend"),Sy=Ku("animationiteration"),Ty=Ku("animationstart"),wy=Ku("transitionend"),My=new Map,v_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){My.set(t,e),Fo(e,[t])}for(var Kd=0;Kd<v_.length;Kd++){var Zd=v_[Kd],tM=Zd.toLowerCase(),nM=Zd[0].toUpperCase()+Zd.slice(1);Yi(tM,"on"+nM)}Yi(Ey,"onAnimationEnd");Yi(Sy,"onAnimationIteration");Yi(Ty,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(wy,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function g_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tw(r,e,void 0,t),t.currentTarget=null}function by(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;g_(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;g_(i,a,c),o=l}}}if(au)throw t=Dh,au=!1,Dh=null,t}function vt(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(Ay(e,t,2,!1),n.add(r))}function Jd(t,e,n){var r=0;e&&(r|=4),Ay(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function dl(t){if(!t[Zl]){t[Zl]=!0,Lx.forEach(function(n){n!=="selectionchange"&&(rM.has(n)||Jd(n,!1,t),Jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,Jd("selectionchange",!1,e))}}function Ay(t,e,n,r){switch(uy(e)){case 1:var i=vw;break;case 4:i=gw;break;default:i=Jp}n=i.bind(null,e,n,t),i=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qd(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=vo(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Kx(function(){var c=o,u=Yp(n),d=[];e:{var f=My.get(t);if(f!==void 0){var p=e0,_=t;switch(t){case"keypress":if(Wc(n)===0)break e;case"keydown":case"keyup":p=Nw;break;case"focusin":_="focus",p=Xd;break;case"focusout":_="blur",p=Xd;break;case"beforeblur":case"afterblur":p=Xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=s_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ow;break;case Ey:case Sy:case Ty:p=ww;break;case wy:p=Fw;break;case"scroll":p=xw;break;case"wheel":p=Bw;break;case"copy":case"cut":case"paste":p=bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=l_}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=ol(g,h),y!=null&&v.push(fl(g,y,x)))),m)break;g=g.return}0<v.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ch&&(_=n.relatedTarget||n.fromElement)&&(vo(_)||_[Zr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?vo(_):null,_!==null&&(m=ko(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=s_,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=l_,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Es(p),x=_==null?f:Es(_),f=new v(y,g+"leave",p,n,u),f.target=m,f.relatedTarget=x,y=null,vo(u)===c&&(v=new v(h,g+"enter",_,n,u),v.target=x,v.relatedTarget=m,y=v),m=y,p&&_)t:{for(v=p,h=_,g=0,x=v;x;x=Wo(x))g++;for(x=0,y=h;y;y=Wo(y))x++;for(;0<g-x;)v=Wo(v),g--;for(;0<x-g;)h=Wo(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=Wo(v),h=Wo(h)}v=null}else v=null;p!==null&&x_(d,f,p,v,!1),_!==null&&m!==null&&x_(d,m,_,v,!0)}}e:{if(f=c?Es(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=jw;else if(d_(f))if(_y)w=Zw;else{w=qw;var T=Yw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Kw);if(w&&(w=w(t,c))){my(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&wh(f,"number",f.value)}switch(T=c?Es(c):window,t){case"focusin":(d_(T)||T.contentEditable==="true")&&(xs=T,Oh=c,Xa=null);break;case"focusout":Xa=Oh=xs=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,__(d,n,u);break;case"selectionchange":if(eM)break;case"keydown":case"keyup":__(d,n,u)}var b;if(n0)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else gs?hy(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(fy&&n.locale!=="ko"&&(gs||C!=="onCompositionStart"?C==="onCompositionEnd"&&gs&&(b=dy()):(Ti=u,Qp="value"in Ti?Ti.value:Ti.textContent,gs=!0)),T=fu(c,C),0<T.length&&(C=new a_(C,t,null,n,u),d.push({event:C,listeners:T}),b?C.data=b:(b=py(n),b!==null&&(C.data=b)))),(b=Vw?Gw(t,n):Hw(t,n))&&(c=fu(c,"onBeforeInput"),0<c.length&&(u=new a_("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}by(d,e)})}function fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ol(t,n),o!=null&&r.unshift(fl(t,o,i)),o=ol(t,e),o!=null&&r.push(fl(t,o,i))),t=t.return}return r}function Wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x_(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ol(n,o),l!=null&&s.unshift(fl(n,l,a))):i||(l=ol(n,o),l!=null&&s.push(fl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var iM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function y_(t){return(typeof t=="string"?t:""+t).replace(iM,`
`).replace(oM,"")}function Jl(t,e,n){if(e=y_(e),y_(t)!==e&&n)throw Error(ce(425))}function hu(){}var Fh=null,kh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(lM)}:$h;function lM(t){setTimeout(function(){throw t})}function ef(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ll(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ll(e)}function Ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function S_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),gr="__reactFiber$"+sa,hl="__reactProps$"+sa,Zr="__reactContainer$"+sa,Vh="__reactEvents$"+sa,cM="__reactListeners$"+sa,uM="__reactHandles$"+sa;function vo(t){var e=t[gr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zr]||n[gr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=S_(t);t!==null;){if(n=t[gr])return n;t=S_(t)}return e}t=n,n=t.parentNode}return null}function Dl(t){return t=t[gr]||t[Zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Zu(t){return t[hl]||null}var Gh=[],Ss=-1;function qi(t){return{current:t}}function yt(t){0>Ss||(t.current=Gh[Ss],Gh[Ss]=null,Ss--)}function ht(t,e){Ss++,Gh[Ss]=t.current,t.current=e}var Bi={},sn=qi(Bi),En=qi(!1),Po=Bi;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Bi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Sn(t){return t=t.childContextTypes,t!=null}function pu(){yt(En),yt(sn)}function T_(t,e,n){if(sn.current!==Bi)throw Error(ce(168));ht(sn,e),ht(En,n)}function Ry(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ce(108,YT(t)||"Unknown",i));return bt({},n,r)}function mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,Po=sn.current,ht(sn,t),ht(En,En.current),!0}function w_(t,e,n){var r=t.stateNode;if(!r)throw Error(ce(169));n?(t=Ry(t,e,Po),r.__reactInternalMemoizedMergedChildContext=t,yt(En),yt(sn),ht(sn,t)):yt(En),ht(En,n)}var Gr=null,Ju=!1,tf=!1;function Cy(t){Gr===null?Gr=[t]:Gr.push(t)}function dM(t){Ju=!0,Cy(t)}function Ki(){if(!tf&&Gr!==null){tf=!0;var t=0,e=ut;try{var n=Gr;for(ut=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gr=null,Ju=!1}catch(i){throw Gr!==null&&(Gr=Gr.slice(t+1)),ey(qp,Ki),i}finally{ut=e,tf=!1}}return null}var Ts=[],ws=0,_u=null,vu=0,Gn=[],Hn=0,Io=null,Wr=1,Xr="";function co(t,e){Ts[ws++]=vu,Ts[ws++]=_u,_u=t,vu=e}function Py(t,e,n){Gn[Hn++]=Wr,Gn[Hn++]=Xr,Gn[Hn++]=Io,Io=t;var r=Wr;t=Xr;var i=32-lr(r)-1;r&=~(1<<i),n+=1;var o=32-lr(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Wr=1<<32-lr(e)+i|n<<i|r,Xr=o+t}else Wr=1<<o|n<<i|r,Xr=t}function i0(t){t.return!==null&&(co(t,1),Py(t,1,0))}function o0(t){for(;t===_u;)_u=Ts[--ws],Ts[ws]=null,vu=Ts[--ws],Ts[ws]=null;for(;t===Io;)Io=Gn[--Hn],Gn[Hn]=null,Xr=Gn[--Hn],Gn[Hn]=null,Wr=Gn[--Hn],Gn[Hn]=null}var Un=null,Nn=null,St=!1,or=null;function Iy(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function M_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Nn=Ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Io!==null?{id:Wr,overflow:Xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Nn=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wh(t){if(St){var e=Nn;if(e){var n=e;if(!M_(t,e)){if(Hh(t))throw Error(ce(418));e=Ri(n.nextSibling);var r=Un;e&&M_(t,e)?Iy(r,n):(t.flags=t.flags&-4097|2,St=!1,Un=t)}}else{if(Hh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,St=!1,Un=t}}}function b_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Ql(t){if(t!==Un)return!1;if(!St)return b_(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=Nn)){if(Hh(t))throw Dy(),Error(ce(418));for(;e;)Iy(t,e),e=Ri(e.nextSibling)}if(b_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=Ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Un?Ri(t.stateNode.nextSibling):null;return!0}function Dy(){for(var t=Nn;t;)t=Ri(t.nextSibling)}function Hs(){Nn=Un=null,St=!1}function s0(t){or===null?or=[t]:or.push(t)}var fM=ni.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var r=n.stateNode}if(!r)throw Error(ce(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function ec(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function A_(t){var e=t._init;return e(t._payload)}function Ny(t){function e(h,g){if(t){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=Di(h,g),h.index=0,h.sibling=null,h}function o(h,g,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,x,y){return g===null||g.tag!==6?(g=cf(x,h.mode,y),g.return=h,g):(g=i(g,x),g.return=h,g)}function l(h,g,x,y){var w=x.type;return w===vs?u(h,g,x.props.children,y,x.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vi&&A_(w)===g.type)?(y=i(g,x.props),y.ref=Ma(h,g,x),y.return=h,y):(y=Jc(x.type,x.key,x.props,null,h.mode,y),y.ref=Ma(h,g,x),y.return=h,y)}function c(h,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=uf(x,h.mode,y),g.return=h,g):(g=i(g,x.children||[]),g.return=h,g)}function u(h,g,x,y,w){return g===null||g.tag!==7?(g=Mo(x,h.mode,y,w),g.return=h,g):(g=i(g,x),g.return=h,g)}function d(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=cf(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gl:return x=Jc(g.type,g.key,g.props,null,h.mode,x),x.ref=Ma(h,null,g),x.return=h,x;case _s:return g=uf(g,h.mode,x),g.return=h,g;case vi:var y=g._init;return d(h,y(g._payload),x)}if(Oa(g)||ya(g))return g=Mo(g,h.mode,x,null),g.return=h,g;ec(h,g)}return null}function f(h,g,x,y){var w=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gl:return x.key===w?l(h,g,x,y):null;case _s:return x.key===w?c(h,g,x,y):null;case vi:return w=x._init,f(h,g,w(x._payload),y)}if(Oa(x)||ya(x))return w!==null?null:u(h,g,x,y,null);ec(h,x)}return null}function p(h,g,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(g,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gl:return h=h.get(y.key===null?x:y.key)||null,l(g,h,y,w);case _s:return h=h.get(y.key===null?x:y.key)||null,c(g,h,y,w);case vi:var T=y._init;return p(h,g,x,T(y._payload),w)}if(Oa(y)||ya(y))return h=h.get(x)||null,u(g,h,y,w,null);ec(g,y)}return null}function _(h,g,x,y){for(var w=null,T=null,b=g,C=g=0,M=null;b!==null&&C<x.length;C++){b.index>C?(M=b,b=null):M=b.sibling;var S=f(h,b,x[C],y);if(S===null){b===null&&(b=M);break}t&&b&&S.alternate===null&&e(h,b),g=o(S,g,C),T===null?w=S:T.sibling=S,T=S,b=M}if(C===x.length)return n(h,b),St&&co(h,C),w;if(b===null){for(;C<x.length;C++)b=d(h,x[C],y),b!==null&&(g=o(b,g,C),T===null?w=b:T.sibling=b,T=b);return St&&co(h,C),w}for(b=r(h,b);C<x.length;C++)M=p(b,h,C,x[C],y),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?C:M.key),g=o(M,g,C),T===null?w=M:T.sibling=M,T=M);return t&&b.forEach(function(L){return e(h,L)}),St&&co(h,C),w}function v(h,g,x,y){var w=ya(x);if(typeof w!="function")throw Error(ce(150));if(x=w.call(x),x==null)throw Error(ce(151));for(var T=w=null,b=g,C=g=0,M=null,S=x.next();b!==null&&!S.done;C++,S=x.next()){b.index>C?(M=b,b=null):M=b.sibling;var L=f(h,b,S.value,y);if(L===null){b===null&&(b=M);break}t&&b&&L.alternate===null&&e(h,b),g=o(L,g,C),T===null?w=L:T.sibling=L,T=L,b=M}if(S.done)return n(h,b),St&&co(h,C),w;if(b===null){for(;!S.done;C++,S=x.next())S=d(h,S.value,y),S!==null&&(g=o(S,g,C),T===null?w=S:T.sibling=S,T=S);return St&&co(h,C),w}for(b=r(h,b);!S.done;C++,S=x.next())S=p(b,h,C,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?C:S.key),g=o(S,g,C),T===null?w=S:T.sibling=S,T=S);return t&&b.forEach(function(O){return e(h,O)}),St&&co(h,C),w}function m(h,g,x,y){if(typeof x=="object"&&x!==null&&x.type===vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gl:e:{for(var w=x.key,T=g;T!==null;){if(T.key===w){if(w=x.type,w===vs){if(T.tag===7){n(h,T.sibling),g=i(T,x.props.children),g.return=h,h=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vi&&A_(w)===T.type){n(h,T.sibling),g=i(T,x.props),g.ref=Ma(h,T,x),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===vs?(g=Mo(x.props.children,h.mode,y,x.key),g.return=h,h=g):(y=Jc(x.type,x.key,x.props,null,h.mode,y),y.ref=Ma(h,g,x),y.return=h,h=y)}return s(h);case _s:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=i(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=uf(x,h.mode,y),g.return=h,h=g}return s(h);case vi:return T=x._init,m(h,g,T(x._payload),y)}if(Oa(x))return _(h,g,x,y);if(ya(x))return v(h,g,x,y);ec(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,x),g.return=h,h=g):(n(h,g),g=cf(x,h.mode,y),g.return=h,h=g),s(h)):n(h,g)}return m}var Ws=Ny(!0),Ly=Ny(!1),gu=qi(null),xu=null,Ms=null,a0=null;function l0(){a0=Ms=xu=null}function c0(t){var e=gu.current;yt(gu),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){xu=t,a0=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(a0!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(xu===null)throw Error(ce(308));Ms=t,xu.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var go=null;function u0(t){go===null?go=[t]:go.push(t)}function Uy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,u0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jr(t,r)}function Jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gi=!1;function d0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ci(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ot&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jr(t,n)}return i=r.interleaved,i===null?(e.next=e,u0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jr(t,n)}function Xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function R_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yu(t,e,n,r){var i=t.updateQueue;gi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=bt({},d,f);break e;case 2:gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);No|=s,t.lanes=s,t.memoizedState=d}}function C_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ce(191,i));i.call(r)}}}var Nl={},Mr=qi(Nl),pl=qi(Nl),ml=qi(Nl);function xo(t){if(t===Nl)throw Error(ce(174));return t}function f0(t,e){switch(ht(ml,e),ht(pl,t),ht(Mr,Nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}yt(Mr),ht(Mr,e)}function Xs(){yt(Mr),yt(pl),yt(ml)}function zy(t){xo(ml.current);var e=xo(Mr.current),n=bh(e,t.type);e!==n&&(ht(pl,t),ht(Mr,n))}function h0(t){pl.current===t&&(yt(Mr),yt(pl))}var Tt=qi(0);function Eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nf=[];function p0(){for(var t=0;t<nf.length;t++)nf[t]._workInProgressVersionPrimary=null;nf.length=0}var jc=ni.ReactCurrentDispatcher,rf=ni.ReactCurrentBatchConfig,Do=0,wt=null,Ut=null,Bt=null,Su=!1,ja=!1,_l=0,hM=0;function Jt(){throw Error(ce(321))}function m0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ur(t[n],e[n]))return!1;return!0}function _0(t,e,n,r,i,o){if(Do=o,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jc.current=t===null||t.memoizedState===null?vM:gM,t=n(r,i),ja){o=0;do{if(ja=!1,_l=0,25<=o)throw Error(ce(301));o+=1,Bt=Ut=null,e.updateQueue=null,jc.current=xM,t=n(r,i)}while(ja)}if(jc.current=Tu,e=Ut!==null&&Ut.next!==null,Do=0,Bt=Ut=wt=null,Su=!1,e)throw Error(ce(300));return t}function v0(){var t=_l!==0;return _l=0,t}function mr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Yn(){if(Ut===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Bt===null?wt.memoizedState:Bt.next;if(e!==null)Bt=e,Ut=t;else{if(t===null)throw Error(ce(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Bt===null?wt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function vl(t,e){return typeof e=="function"?e(t):e}function of(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var r=Ut,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Do&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,wt.lanes|=u,No|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,ur(r,e.memoizedState)||(yn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,wt.lanes|=o,No|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ur(o,e.memoizedState)||(yn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Fy(){}function ky(t,e){var n=wt,r=Yn(),i=e(),o=!ur(r.memoizedState,i);if(o&&(r.memoizedState=i,yn=!0),r=r.queue,g0(Vy.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,gl(9,$y.bind(null,n,r,i,e),void 0,null),Vt===null)throw Error(ce(349));Do&30||By(n,e,i)}return i}function By(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $y(t,e,n,r){e.value=n,e.getSnapshot=r,Gy(e)&&Hy(t)}function Vy(t,e,n){return n(function(){Gy(e)&&Hy(t)})}function Gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ur(t,n)}catch{return!0}}function Hy(t){var e=Jr(t,1);e!==null&&cr(e,t,1,-1)}function P_(t){var e=mr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:t},e.queue=t,t=t.dispatch=_M.bind(null,wt,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wy(){return Yn().memoizedState}function Yc(t,e,n,r){var i=mr();wt.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=Yn();r=r===void 0?null:r;var o=void 0;if(Ut!==null){var s=Ut.memoizedState;if(o=s.destroy,r!==null&&m0(r,s.deps)){i.memoizedState=gl(e,n,o,r);return}}wt.flags|=t,i.memoizedState=gl(1|e,n,o,r)}function I_(t,e){return Yc(8390656,8,t,e)}function g0(t,e){return Qu(2048,8,t,e)}function Xy(t,e){return Qu(4,2,t,e)}function jy(t,e){return Qu(4,4,t,e)}function Yy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qy(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,Yy.bind(null,e,t),n)}function x0(){}function Ky(t,e){var n=Yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&m0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zy(t,e){var n=Yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&m0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jy(t,e,n){return Do&21?(ur(n,e)||(n=ry(),wt.lanes|=n,No|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function pM(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var r=rf.transition;rf.transition={};try{t(!1),e()}finally{ut=n,rf.transition=r}}function Qy(){return Yn().memoizedState}function mM(t,e,n){var r=Ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e9(t))t9(e,n);else if(n=Uy(t,e,n,r),n!==null){var i=fn();cr(n,t,r,i),n9(n,e,r)}}function _M(t,e,n){var r=Ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e9(t))t9(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ur(a,s)){var l=e.interleaved;l===null?(i.next=i,u0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Uy(t,e,i,r),n!==null&&(i=fn(),cr(n,t,r,i),n9(n,e,r))}}function e9(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function t9(t,e){ja=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n9(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var Tu={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},vM={readContext:jn,useCallback:function(t,e){return mr().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:I_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4194308,4,Yy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yc(4,2,t,e)},useMemo:function(t,e){var n=mr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mM.bind(null,wt,t),[r.memoizedState,t]},useRef:function(t){var e=mr();return t={current:t},e.memoizedState=t},useState:P_,useDebugValue:x0,useDeferredValue:function(t){return mr().memoizedState=t},useTransition:function(){var t=P_(!1),e=t[0];return t=pM.bind(null,t[1]),mr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=wt,i=mr();if(St){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Vt===null)throw Error(ce(349));Do&30||By(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,I_(Vy.bind(null,r,o,t),[t]),r.flags|=2048,gl(9,$y.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=mr(),e=Vt.identifierPrefix;if(St){var n=Xr,r=Wr;n=(r&~(1<<32-lr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gM={readContext:jn,useCallback:Ky,useContext:jn,useEffect:g0,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:jy,useMemo:Zy,useReducer:of,useRef:Wy,useState:function(){return of(vl)},useDebugValue:x0,useDeferredValue:function(t){var e=Yn();return Jy(e,Ut.memoizedState,t)},useTransition:function(){var t=of(vl)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:ky,useId:Qy,unstable_isNewReconciler:!1},xM={readContext:jn,useCallback:Ky,useContext:jn,useEffect:g0,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:jy,useMemo:Zy,useReducer:sf,useRef:Wy,useState:function(){return sf(vl)},useDebugValue:x0,useDeferredValue:function(t){var e=Yn();return Ut===null?e.memoizedState=t:Jy(e,Ut.memoizedState,t)},useTransition:function(){var t=sf(vl)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:ky,useId:Qy,unstable_isNewReconciler:!1};function rr(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ed={isMounted:function(t){return(t=t._reactInternals)?ko(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=fn(),i=Ii(t),o=Yr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ci(t,o,i),e!==null&&(cr(e,t,i,r),Xc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=fn(),i=Ii(t),o=Yr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ci(t,o,i),e!==null&&(cr(e,t,i,r),Xc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),r=Ii(t),i=Yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ci(t,i,r),e!==null&&(cr(e,t,r,n),Xc(e,t,r))}};function D_(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ul(n,r)||!ul(i,o):!0}function r9(t,e,n){var r=!1,i=Bi,o=e.contextType;return typeof o=="object"&&o!==null?o=jn(o):(i=Sn(e)?Po:sn.current,r=e.contextTypes,o=(r=r!=null)?Gs(t,i):Bi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ed,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function N_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ed.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},d0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=jn(o):(o=Sn(e)?Po:sn.current,i.context=Gs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ed.enqueueReplaceState(i,i.state,null),yu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=jT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function af(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yM=typeof WeakMap=="function"?WeakMap:Map;function i9(t,e,n){n=Yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,op=r),qh(t,e)},n}function o9(t,e,n){n=Yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function L_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yM;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LM.bind(null,t,e,n),e.then(t,t))}function U_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function O_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yr(-1,1),e.tag=2,Ci(n,e,1))),n.lanes|=1),t)}var EM=ni.ReactCurrentOwner,yn=!1;function dn(t,e,n,r){e.child=t===null?Ly(e,null,n,r):Ws(e,t.child,n,r)}function z_(t,e,n,r,i){n=n.render;var o=e.ref;return Us(e,i),r=_0(t,e,n,r,o,i),n=v0(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(St&&n&&i0(e),e.flags|=1,dn(t,e,r,i),e.child)}function F_(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!A0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,s9(t,e,o,r,i)):(t=Jc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(s,r)&&t.ref===e.ref)return Qr(t,e,i)}return e.flags|=1,t=Di(o,r),t.ref=e.ref,t.return=e,e.child=t}function s9(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ul(o,r)&&t.ref===e.ref)if(yn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Qr(t,e,i)}return Kh(t,e,n,r,i)}function a9(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(As,Cn),Cn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(As,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ht(As,Cn),Cn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ht(As,Cn),Cn|=r;return dn(t,e,i,n),e.child}function l9(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var o=Sn(n)?Po:sn.current;return o=Gs(e,o),Us(e,i),n=_0(t,e,n,r,o,i),r=v0(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(St&&r&&i0(e),e.flags|=1,dn(t,e,n,i),e.child)}function k_(t,e,n,r,i){if(Sn(n)){var o=!0;mu(e)}else o=!1;if(Us(e,i),e.stateNode===null)qc(t,e),r9(e,n,r),Yh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=Sn(n)?Po:sn.current,c=Gs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&N_(e,s,r,c),gi=!1;var f=e.memoizedState;s.state=f,yu(e,r,s,i),l=e.memoizedState,a!==r||f!==l||En.current||gi?(typeof u=="function"&&(jh(e,n,u,r),l=e.memoizedState),(a=gi||D_(e,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Oy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:rr(e.type,a),s.props=c,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=Sn(n)?Po:sn.current,l=Gs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&N_(e,s,r,l),gi=!1,f=e.memoizedState,s.state=f,yu(e,r,s,i);var _=e.memoizedState;a!==d||f!==_||En.current||gi?(typeof p=="function"&&(jh(e,n,p,r),_=e.memoizedState),(c=gi||D_(e,n,c,r,f,_,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Zh(t,e,n,r,o,i)}function Zh(t,e,n,r,i,o){l9(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&w_(e,n,!1),Qr(t,e,o);r=e.stateNode,EM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ws(e,t.child,null,o),e.child=Ws(e,null,a,o)):dn(t,e,a,o),e.memoizedState=r.state,i&&w_(e,n,!0),e.child}function c9(t){var e=t.stateNode;e.pendingContext?T_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&T_(t,e.context,!1),f0(t,e.containerInfo)}function B_(t,e,n,r,i){return Hs(),s0(i),e.flags|=256,dn(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function u9(t,e,n){var r=e.pendingProps,i=Tt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ht(Tt,i&1),t===null)return Wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=rd(s,r,0,null),t=Mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Qh(n),e.memoizedState=Jh,t):y0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SM(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Di(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Di(a,o):(o=Mo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Qh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return o=t.child,t=o.sibling,r=Di(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function y0(t,e){return e=rd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tc(t,e,n,r){return r!==null&&s0(r),Ws(e,t.child,null,n),t=y0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SM(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=af(Error(ce(422))),tc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=rd({mode:"visible",children:r.children},i,0,null),o=Mo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ws(e,t.child,null,s),e.child.memoizedState=Qh(s),e.memoizedState=Jh,o);if(!(e.mode&1))return tc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(ce(419)),r=af(o,r,void 0),tc(t,e,s,r)}if(a=(s&t.childLanes)!==0,yn||a){if(r=Vt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jr(t,i),cr(r,t,i,-1))}return b0(),r=af(Error(ce(421))),tc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UM.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Nn=Ri(i.nextSibling),Un=e,St=!0,or=null,t!==null&&(Gn[Hn++]=Wr,Gn[Hn++]=Xr,Gn[Hn++]=Io,Wr=t.id,Xr=t.overflow,Io=e),e=y0(e,r.children),e.flags|=4096,e)}function $_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function lf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function d9(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(dn(t,e,r.children,n),r=Tt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$_(t,n,e);else if(t.tag===19)$_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ht(Tt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Eu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Eu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lf(e,!0,n,null,o);break;case"together":lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),No|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TM(t,e,n){switch(e.tag){case 3:c9(e),Hs();break;case 5:zy(e);break;case 1:Sn(e.type)&&mu(e);break;case 4:f0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ht(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ht(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?u9(t,e,n):(ht(Tt,Tt.current&1),t=Qr(t,e,n),t!==null?t.sibling:null);ht(Tt,Tt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return d9(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ht(Tt,Tt.current),r)break;return null;case 22:case 23:return e.lanes=0,a9(t,e,n)}return Qr(t,e,n)}var f9,ep,h9,p9;f9=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};h9=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xo(Mr.current);var o=null;switch(n){case"input":i=Sh(t,i),r=Sh(t,r),o=[];break;case"select":i=bt({},i,{value:void 0}),r=bt({},r,{value:void 0}),o=[];break;case"textarea":i=Mh(t,i),r=Mh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Ah(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};p9=function(t,e,n,r){n!==r&&(e.flags|=4)};function ba(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wM(t,e,n){var r=e.pendingProps;switch(o0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&pu(),Qt(e),null;case 3:return r=e.stateNode,Xs(),yt(En),yt(sn),p0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(lp(or),or=null))),ep(t,e),Qt(e),null;case 5:h0(e);var i=xo(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)h9(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ce(166));return Qt(e),null}if(t=xo(Mr.current),Ql(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[gr]=e,r[hl]=o,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",r),vt("close",r);break;case"iframe":case"object":case"embed":vt("load",r);break;case"video":case"audio":for(i=0;i<Fa.length;i++)vt(Fa[i],r);break;case"source":vt("error",r);break;case"img":case"image":case"link":vt("error",r),vt("load",r);break;case"details":vt("toggle",r);break;case"input":Km(r,o),vt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},vt("invalid",r);break;case"textarea":Jm(r,o),vt("invalid",r)}Ah(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Jl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Jl(r.textContent,a,t),i=["children",""+a]):rl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&vt("scroll",r)}switch(n){case"input":Hl(r),Zm(r,o,!0);break;case"textarea":Hl(r),Qm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[gr]=e,t[hl]=r,f9(t,e,!1,!1),e.stateNode=t;e:{switch(s=Rh(n,r),n){case"dialog":vt("cancel",t),vt("close",t),i=r;break;case"iframe":case"object":case"embed":vt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fa.length;i++)vt(Fa[i],t);i=r;break;case"source":vt("error",t),i=r;break;case"img":case"image":case"link":vt("error",t),vt("load",t),i=r;break;case"details":vt("toggle",t),i=r;break;case"input":Km(t,r),i=Sh(t,r),vt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=bt({},r,{value:void 0}),vt("invalid",t);break;case"textarea":Jm(t,r),i=Mh(t,r),vt("invalid",t);break;default:i=r}Ah(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wx(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&il(t,l):typeof l=="number"&&il(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(rl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&vt("scroll",t):l!=null&&Hp(t,o,l,s))}switch(n){case"input":Hl(t),Zm(t,r,!1);break;case"textarea":Hl(t),Qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Is(t,!!r.multiple,o,!1):r.defaultValue!=null&&Is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)p9(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ce(166));if(n=xo(ml.current),xo(Mr.current),Ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[gr]=e,(o=r.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Jl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gr]=e,e.stateNode=r}return Qt(e),null;case 13:if(yt(Tt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Nn!==null&&e.mode&1&&!(e.flags&128))Dy(),Hs(),e.flags|=98560,o=!1;else if(o=Ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(ce(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ce(317));o[gr]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),o=!1}else or!==null&&(lp(or),or=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ot===0&&(Ot=3):b0())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Xs(),ep(t,e),t===null&&dl(e.stateNode.containerInfo),Qt(e),null;case 10:return c0(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&pu(),Qt(e),null;case 19:if(yt(Tt),o=e.memoizedState,o===null)return Qt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ba(o,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Eu(t),s!==null){for(e.flags|=128,ba(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(Tt,Tt.current&1|2),e.child}t=t.sibling}o.tail!==null&&It()>Ys&&(e.flags|=128,r=!0,ba(o,!1),e.lanes=4194304)}else{if(!r)if(t=Eu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!St)return Qt(e),null}else 2*It()-o.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,ba(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=It(),e.sibling=null,n=Tt.current,ht(Tt,r?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return M0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Cn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function MM(t,e){switch(o0(e),e.tag){case 1:return Sn(e.type)&&pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),yt(En),yt(sn),p0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return h0(e),null;case 13:if(yt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Tt),null;case 4:return Xs(),null;case 10:return c0(e.type._context),null;case 22:case 23:return M0(),null;case 24:return null;default:return null}}var nc=!1,nn=!1,bM=typeof WeakSet=="function"?WeakSet:Set,Te=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){Ct(t,e,r)}}var V_=!1;function AM(t,e){if(Fh=uu,t=xy(),r0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},uu=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:rr(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Ct(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=V_,V_=!1,_}function Ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&tp(e,n,o)}i=i.next}while(i!==r)}}function td(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m9(t){var e=t.alternate;e!==null&&(t.alternate=null,m9(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gr],delete e[hl],delete e[Vh],delete e[cM],delete e[uM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _9(t){return t.tag===5||t.tag===3||t.tag===4}function G_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_9(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var Ht=null,ir=!1;function ai(t,e,n){for(n=n.child;n!==null;)v9(t,e,n),n=n.sibling}function v9(t,e,n){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:nn||bs(n,e);case 6:var r=Ht,i=ir;Ht=null,ai(t,e,n),Ht=r,ir=i,Ht!==null&&(ir?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(ir?(t=Ht,n=n.stateNode,t.nodeType===8?ef(t.parentNode,n):t.nodeType===1&&ef(t,n),ll(t)):ef(Ht,n.stateNode));break;case 4:r=Ht,i=ir,Ht=n.stateNode.containerInfo,ir=!0,ai(t,e,n),Ht=r,ir=i;break;case 0:case 11:case 14:case 15:if(!nn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tp(n,e,s),i=i.next}while(i!==r)}ai(t,e,n);break;case 1:if(!nn&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,e,a)}ai(t,e,n);break;case 21:ai(t,e,n);break;case 22:n.mode&1?(nn=(r=nn)||n.memoizedState!==null,ai(t,e,n),nn=r):ai(t,e,n);break;default:ai(t,e,n)}}function H_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bM),e.forEach(function(r){var i=OM.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,ir=!1;break e;case 3:Ht=a.stateNode.containerInfo,ir=!0;break e;case 4:Ht=a.stateNode.containerInfo,ir=!0;break e}a=a.return}if(Ht===null)throw Error(ce(160));v9(o,s,i),Ht=null,ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ct(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g9(e,t),e=e.sibling}function g9(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),pr(t),r&4){try{Ya(3,t,t.return),td(3,t)}catch(v){Ct(t,t.return,v)}try{Ya(5,t,t.return)}catch(v){Ct(t,t.return,v)}}break;case 1:Jn(e,t),pr(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Jn(e,t),pr(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{il(i,"")}catch(v){Ct(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Bx(i,o),Rh(a,s);var c=Rh(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Wx(i,d):u==="dangerouslySetInnerHTML"?Gx(i,d):u==="children"?il(i,d):Hp(i,u,d,c)}switch(a){case"input":Th(i,o);break;case"textarea":$x(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Is(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Is(i,!!o.multiple,o.defaultValue,!0):Is(i,!!o.multiple,o.multiple?[]:"",!1))}i[hl]=o}catch(v){Ct(t,t.return,v)}}break;case 6:if(Jn(e,t),pr(t),r&4){if(t.stateNode===null)throw Error(ce(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){Ct(t,t.return,v)}}break;case 3:if(Jn(e,t),pr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(v){Ct(t,t.return,v)}break;case 4:Jn(e,t),pr(t);break;case 13:Jn(e,t),pr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(T0=It())),r&4&&H_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Jn(e,t),nn=c):Jn(e,t),pr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(d=Te=u;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ya(4,f,f.return);break;case 1:bs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ct(r,n,v)}}break;case 5:bs(f,f.return);break;case 22:if(f.memoizedState!==null){X_(d);continue}}p!==null?(p.return=f,Te=p):X_(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hx("display",s))}catch(v){Ct(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Ct(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),pr(t),r&4&&H_(t);break;case 21:break;default:Jn(e,t),pr(t)}}function pr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_9(n)){var r=n;break e}n=n.return}throw Error(ce(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(il(i,""),r.flags&=-33);var o=G_(t);ip(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=G_(t);rp(t,a,s);break;default:throw Error(ce(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RM(t,e,n){Te=t,x9(t)}function x9(t,e,n){for(var r=(t.mode&1)!==0;Te!==null;){var i=Te,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||nc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nn;a=nc;var c=nn;if(nc=s,(nn=l)&&!c)for(Te=i;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?j_(i):l!==null?(l.return=s,Te=l):j_(i);for(;o!==null;)Te=o,x9(o),o=o.sibling;Te=i,nc=a,nn=c}W_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Te=o):W_(t)}}function W_(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||td(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&C_(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}C_(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ll(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}nn||e.flags&512&&np(e)}catch(f){Ct(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function X_(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function j_(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{td(4,e)}catch(l){Ct(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ct(e,i,l)}}var o=e.return;try{np(e)}catch(l){Ct(e,o,l)}break;case 5:var s=e.return;try{np(e)}catch(l){Ct(e,s,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var CM=Math.ceil,wu=ni.ReactCurrentDispatcher,E0=ni.ReactCurrentOwner,Xn=ni.ReactCurrentBatchConfig,ot=0,Vt=null,Lt=null,jt=0,Cn=0,As=qi(0),Ot=0,xl=null,No=0,nd=0,S0=0,qa=null,gn=null,T0=0,Ys=1/0,$r=null,Mu=!1,op=null,Pi=null,rc=!1,wi=null,bu=0,Ka=0,sp=null,Kc=-1,Zc=0;function fn(){return ot&6?It():Kc!==-1?Kc:Kc=It()}function Ii(t){return t.mode&1?ot&2&&jt!==0?jt&-jt:fM.transition!==null?(Zc===0&&(Zc=ry()),Zc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:uy(t.type)),t):1}function cr(t,e,n,r){if(50<Ka)throw Ka=0,sp=null,Error(ce(185));Pl(t,n,r),(!(ot&2)||t!==Vt)&&(t===Vt&&(!(ot&2)&&(nd|=n),Ot===4&&yi(t,jt)),Tn(t,r),n===1&&ot===0&&!(e.mode&1)&&(Ys=It()+500,Ju&&Ki()))}function Tn(t,e){var n=t.callbackNode;fw(t,e);var r=cu(t,t===Vt?jt:0);if(r===0)n!==null&&n_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n_(n),e===1)t.tag===0?dM(Y_.bind(null,t)):Cy(Y_.bind(null,t)),aM(function(){!(ot&6)&&Ki()}),n=null;else{switch(iy(r)){case 1:n=qp;break;case 4:n=ty;break;case 16:n=lu;break;case 536870912:n=ny;break;default:n=lu}n=A9(n,y9.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y9(t,e){if(Kc=-1,Zc=0,ot&6)throw Error(ce(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=cu(t,t===Vt?jt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Au(t,r);else{e=r;var i=ot;ot|=2;var o=S9();(Vt!==t||jt!==e)&&($r=null,Ys=It()+500,wo(t,e));do try{DM();break}catch(a){E9(t,a)}while(!0);l0(),wu.current=o,ot=i,Lt!==null?e=0:(Vt=null,jt=0,e=Ot)}if(e!==0){if(e===2&&(i=Nh(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=xl,wo(t,0),yi(t,r),Tn(t,It()),n;if(e===6)yi(t,r);else{if(i=t.current.alternate,!(r&30)&&!PM(i)&&(e=Au(t,r),e===2&&(o=Nh(t),o!==0&&(r=o,e=ap(t,o))),e===1))throw n=xl,wo(t,0),yi(t,r),Tn(t,It()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ce(345));case 2:uo(t,gn,$r);break;case 3:if(yi(t,r),(r&130023424)===r&&(e=T0+500-It(),10<e)){if(cu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){fn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$h(uo.bind(null,t,gn,$r),e);break}uo(t,gn,$r);break;case 4:if(yi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-lr(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=It()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CM(r/1960))-r,10<r){t.timeoutHandle=$h(uo.bind(null,t,gn,$r),r);break}uo(t,gn,$r);break;case 5:uo(t,gn,$r);break;default:throw Error(ce(329))}}}return Tn(t,It()),t.callbackNode===n?y9.bind(null,t):null}function ap(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(wo(t,e).flags|=256),t=Au(t,e),t!==2&&(e=gn,gn=n,e!==null&&lp(e)),t}function lp(t){gn===null?gn=t:gn.push.apply(gn,t)}function PM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ur(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(t,e){for(e&=~S0,e&=~nd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lr(e),r=1<<n;t[n]=-1,e&=~r}}function Y_(t){if(ot&6)throw Error(ce(327));Os();var e=cu(t,0);if(!(e&1))return Tn(t,It()),null;var n=Au(t,e);if(t.tag!==0&&n===2){var r=Nh(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=xl,wo(t,0),yi(t,e),Tn(t,It()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,uo(t,gn,$r),Tn(t,It()),null}function w0(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(Ys=It()+500,Ju&&Ki())}}function Lo(t){wi!==null&&wi.tag===0&&!(ot&6)&&Os();var e=ot;ot|=1;var n=Xn.transition,r=ut;try{if(Xn.transition=null,ut=1,t)return t()}finally{ut=r,Xn.transition=n,ot=e,!(ot&6)&&Ki()}}function M0(){Cn=As.current,yt(As)}function wo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sM(n)),Lt!==null)for(n=Lt.return;n!==null;){var r=n;switch(o0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:Xs(),yt(En),yt(sn),p0();break;case 5:h0(r);break;case 4:Xs();break;case 13:yt(Tt);break;case 19:yt(Tt);break;case 10:c0(r.type._context);break;case 22:case 23:M0()}n=n.return}if(Vt=t,Lt=t=Di(t.current,null),jt=Cn=e,Ot=0,xl=null,S0=nd=No=0,gn=qa=null,go!==null){for(e=0;e<go.length;e++)if(n=go[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}go=null}return t}function E9(t,e){do{var n=Lt;try{if(l0(),jc.current=Tu,Su){for(var r=wt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Su=!1}if(Do=0,Bt=Ut=wt=null,ja=!1,_l=0,E0.current=null,n===null||n.return===null){Ot=1,xl=e,Lt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=U_(s);if(p!==null){p.flags&=-257,O_(p,s,a,o,e),p.mode&1&&L_(o,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){L_(o,c,e),b0();break e}l=Error(ce(426))}}else if(St&&a.mode&1){var m=U_(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),O_(m,s,a,o,e),s0(js(l,a));break e}}o=l=js(l,a),Ot!==4&&(Ot=2),qa===null?qa=[o]:qa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=i9(o,l,e);R_(o,h);break e;case 1:a=l;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Pi===null||!Pi.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=o9(o,a,e);R_(o,y);break e}}o=o.return}while(o!==null)}w9(n)}catch(w){e=w,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function S9(){var t=wu.current;return wu.current=Tu,t===null?Tu:t}function b0(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Vt===null||!(No&268435455)&&!(nd&268435455)||yi(Vt,jt)}function Au(t,e){var n=ot;ot|=2;var r=S9();(Vt!==t||jt!==e)&&($r=null,wo(t,e));do try{IM();break}catch(i){E9(t,i)}while(!0);if(l0(),ot=n,wu.current=r,Lt!==null)throw Error(ce(261));return Vt=null,jt=0,Ot}function IM(){for(;Lt!==null;)T9(Lt)}function DM(){for(;Lt!==null&&!rw();)T9(Lt)}function T9(t){var e=b9(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?w9(t):Lt=e,E0.current=null}function w9(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Lt=null;return}}else if(n=wM(n,e,Cn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ot===0&&(Ot=5)}function uo(t,e,n){var r=ut,i=Xn.transition;try{Xn.transition=null,ut=1,NM(t,e,n,r)}finally{Xn.transition=i,ut=r}return null}function NM(t,e,n,r){do Os();while(wi!==null);if(ot&6)throw Error(ce(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(hw(t,o),t===Vt&&(Lt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rc||(rc=!0,A9(lu,function(){return Os(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xn.transition,Xn.transition=null;var s=ut;ut=1;var a=ot;ot|=4,E0.current=null,AM(t,n),g9(n,t),Qw(kh),uu=!!Fh,kh=Fh=null,t.current=n,RM(n),iw(),ot=a,ut=s,Xn.transition=o}else t.current=n;if(rc&&(rc=!1,wi=t,bu=i),o=t.pendingLanes,o===0&&(Pi=null),aw(n.stateNode),Tn(t,It()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=op,op=null,t;return bu&1&&t.tag!==0&&Os(),o=t.pendingLanes,o&1?t===sp?Ka++:(Ka=0,sp=t):Ka=0,Ki(),null}function Os(){if(wi!==null){var t=iy(bu),e=Xn.transition,n=ut;try{if(Xn.transition=null,ut=16>t?16:t,wi===null)var r=!1;else{if(t=wi,wi=null,bu=0,ot&6)throw Error(ce(331));var i=ot;for(ot|=4,Te=t.current;Te!==null;){var o=Te,s=o.child;if(Te.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:Ya(8,u,o)}var d=u.child;if(d!==null)d.return=u,Te=d;else for(;Te!==null;){u=Te;var f=u.sibling,p=u.return;if(m9(u),u===c){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var _=o.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Te=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ya(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Te=h;break e}Te=o.return}}var g=t.current;for(Te=g;Te!==null;){s=Te;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Te=x;else e:for(s=g;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:td(9,a)}}catch(w){Ct(a,a.return,w)}if(a===s){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(ot=i,Ki(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(ju,t)}catch{}r=!0}return r}finally{ut=n,Xn.transition=e}}return!1}function q_(t,e,n){e=js(n,e),e=i9(t,e,1),t=Ci(t,e,1),e=fn(),t!==null&&(Pl(t,1,e),Tn(t,e))}function Ct(t,e,n){if(t.tag===3)q_(t,t,n);else for(;e!==null;){if(e.tag===3){q_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pi===null||!Pi.has(r))){t=js(n,t),t=o9(e,t,1),e=Ci(e,t,1),t=fn(),e!==null&&(Pl(e,1,t),Tn(e,t));break}}e=e.return}}function LM(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Ot===4||Ot===3&&(jt&130023424)===jt&&500>It()-T0?wo(t,0):S0|=n),Tn(t,e)}function M9(t,e){e===0&&(t.mode&1?(e=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):e=1);var n=fn();t=Jr(t,e),t!==null&&(Pl(t,e,n),Tn(t,n))}function UM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M9(t,n)}function OM(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ce(314))}r!==null&&r.delete(e),M9(t,n)}var b9;b9=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,TM(t,e,n);yn=!!(t.flags&131072)}else yn=!1,St&&e.flags&1048576&&Py(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qc(t,e),t=e.pendingProps;var i=Gs(e,sn.current);Us(e,n),i=_0(null,e,r,t,i,n);var o=v0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(r)?(o=!0,mu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,d0(e),i.updater=ed,e.stateNode=i,i._reactInternals=e,Yh(e,r,t,n),e=Zh(null,e,r,!0,o,n)):(e.tag=0,St&&o&&i0(e),dn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FM(r),t=rr(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=k_(null,e,r,t,n);break e;case 11:e=z_(null,e,r,t,n);break e;case 14:e=F_(null,e,r,rr(r.type,t),n);break e}throw Error(ce(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),k_(t,e,r,i,n);case 3:e:{if(c9(e),t===null)throw Error(ce(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Oy(t,e),yu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=js(Error(ce(423)),e),e=B_(t,e,r,n,i);break e}else if(r!==i){i=js(Error(ce(424)),e),e=B_(t,e,r,n,i);break e}else for(Nn=Ri(e.stateNode.containerInfo.firstChild),Un=e,St=!0,or=null,n=Ly(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===i){e=Qr(t,e,n);break e}dn(t,e,r,n)}e=e.child}return e;case 5:return zy(e),t===null&&Wh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Bh(r,i)?s=null:o!==null&&Bh(r,o)&&(e.flags|=32),l9(t,e),dn(t,e,s,n),e.child;case 6:return t===null&&Wh(e),null;case 13:return u9(t,e,n);case 4:return f0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):dn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),z_(t,e,r,i,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ht(gu,r._currentValue),r._currentValue=s,o!==null)if(ur(o.value,s)){if(o.children===i.children&&!En.current){e=Qr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ce(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}dn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Us(e,n),i=jn(i),r=r(i),e.flags|=1,dn(t,e,r,n),e.child;case 14:return r=e.type,i=rr(r,e.pendingProps),i=rr(r.type,i),F_(t,e,r,i,n);case 15:return s9(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rr(r,i),qc(t,e),e.tag=1,Sn(r)?(t=!0,mu(e)):t=!1,Us(e,n),r9(e,r,i),Yh(e,r,i,n),Zh(null,e,r,!0,t,n);case 19:return d9(t,e,n);case 22:return a9(t,e,n)}throw Error(ce(156,e.tag))};function A9(t,e){return ey(t,e)}function zM(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,r){return new zM(t,e,n,r)}function A0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FM(t){if(typeof t=="function")return A0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===jp)return 14}return 2}function Di(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")A0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case vs:return Mo(n.children,i,o,e);case Wp:s=8,i|=8;break;case gh:return t=Wn(12,n,e,i|2),t.elementType=gh,t.lanes=o,t;case xh:return t=Wn(13,n,e,i),t.elementType=xh,t.lanes=o,t;case yh:return t=Wn(19,n,e,i),t.elementType=yh,t.lanes=o,t;case zx:return rd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ux:s=10;break e;case Ox:s=9;break e;case Xp:s=11;break e;case jp:s=14;break e;case vi:s=16,r=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Wn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Mo(t,e,n,r){return t=Wn(7,t,r,e),t.lanes=n,t}function rd(t,e,n,r){return t=Wn(22,t,r,e),t.elementType=zx,t.lanes=n,t.stateNode={isHidden:!1},t}function cf(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kM(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gd(0),this.expirationTimes=Gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function R0(t,e,n,r,i,o,s,a,l){return t=new kM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},d0(o),t}function BM(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function R9(t){if(!t)return Bi;t=t._reactInternals;e:{if(ko(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Ry(t,n,e)}return e}function C9(t,e,n,r,i,o,s,a,l){return t=R0(n,r,!0,t,i,o,s,a,l),t.context=R9(null),n=t.current,r=fn(),i=Ii(n),o=Yr(r,i),o.callback=e??null,Ci(n,o,i),t.current.lanes=i,Pl(t,i,r),Tn(t,r),t}function id(t,e,n,r){var i=e.current,o=fn(),s=Ii(i);return n=R9(n),e.context===null?e.context=n:e.pendingContext=n,e=Yr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ci(i,e,s),t!==null&&(cr(t,i,s,o),Xc(t,i,s)),s}function Ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function K_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function C0(t,e){K_(t,e),(t=t.alternate)&&K_(t,e)}function $M(){return null}var P9=typeof reportError=="function"?reportError:function(t){console.error(t)};function P0(t){this._internalRoot=t}od.prototype.render=P0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));id(t,e,null,null)};od.prototype.unmount=P0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lo(function(){id(null,t,null,null)}),e[Zr]=null}};function od(t){this._internalRoot=t}od.prototype.unstable_scheduleHydration=function(t){if(t){var e=ay();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&cy(t)}};function I0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Z_(){}function VM(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ru(s);o.call(c)}}var s=C9(e,r,t,0,null,!1,!1,"",Z_);return t._reactRootContainer=s,t[Zr]=s.current,dl(t.nodeType===8?t.parentNode:t),Lo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ru(l);a.call(c)}}var l=R0(t,0,!1,null,null,!1,!1,"",Z_);return t._reactRootContainer=l,t[Zr]=l.current,dl(t.nodeType===8?t.parentNode:t),Lo(function(){id(e,l,n,r)}),l}function ad(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ru(s);a.call(l)}}id(e,s,t,i)}else s=VM(n,e,t,i,r);return Ru(s)}oy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(Kp(e,n|1),Tn(e,It()),!(ot&6)&&(Ys=It()+500,Ki()))}break;case 13:Lo(function(){var r=Jr(t,1);if(r!==null){var i=fn();cr(r,t,1,i)}}),C0(t,1)}};Zp=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var n=fn();cr(e,t,134217728,n)}C0(t,134217728)}};sy=function(t){if(t.tag===13){var e=Ii(t),n=Jr(t,e);if(n!==null){var r=fn();cr(n,t,e,r)}C0(t,e)}};ay=function(){return ut};ly=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Ph=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zu(r);if(!i)throw Error(ce(90));kx(r),Th(r,i)}}}break;case"textarea":$x(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};Yx=w0;qx=Lo;var GM={usingClientEntryPoint:!1,Events:[Dl,Es,Zu,Xx,jx,w0]},Aa={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HM={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jx(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||$M,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ju=ic.inject(HM),wr=ic}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GM;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!I0(e))throw Error(ce(200));return BM(t,e,null,n)};kn.createRoot=function(t,e){if(!I0(t))throw Error(ce(299));var n=!1,r="",i=P9;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=R0(t,1,!1,null,null,n,!1,r,i),t[Zr]=e.current,dl(t.nodeType===8?t.parentNode:t),new P0(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Jx(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Lo(t)};kn.hydrate=function(t,e,n){if(!sd(e))throw Error(ce(200));return ad(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!I0(t))throw Error(ce(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=P9;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=C9(e,null,t,1,n??null,i,!1,o,s),t[Zr]=e.current,dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new od(e)};kn.render=function(t,e,n){if(!sd(e))throw Error(ce(200));return ad(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!sd(t))throw Error(ce(40));return t._reactRootContainer?(Lo(function(){ad(null,null,t,!1,function(){t._reactRootContainer=null,t[Zr]=null})}),!0):!1};kn.unstable_batchedUpdates=w0;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return ad(t,e,n,!1,r)};kn.version="18.3.1-next-f1338f8080-20240426";function I9(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I9)}catch(t){console.error(t)}}I9(),Ix.exports=kn;var Bo=Ix.exports;const WM=Op(Bo);var J_=Bo;_h.createRoot=J_.createRoot,_h.hydrateRoot=J_.hydrateRoot;const D9="EVENT_RESIZE_PANEL",D0="EVENT_FULL_UPDATE",N0="EVENT_DATA_UPDATE",N9="EVENT_DATA_UPDATE_STREAMLINE",L9="EVENT_CAMERA_UPDATE",L0="EVENT_RENDERING_UPDATE",U0="EVENT_ALIGN_CAMERA",O0="EVENT_SELECT_CHANGED",cp="EVENT_SEED_DIRECTION_CHANGED",U9="EVENT_SEED_POSITION_CHANGED",yl="EVENT_WRITE_FROM_UI_TO_URL",O9="EVENT_INITIALIZATION_COMPLETED",z0="EVENT_DOWNLOAD",XM=2,bo="BEHAVIOR_CONTROL_CAMERA",z9="BEHAVIOR_MOVE_SEED",sr=0,Cu=1,F0=2,ld=0,F9=1,k0=2,B0=3,$0=4,V0=5,G0=6,H0=7,El=8,Za=9,W0=10,cd=11,k9=12,X0=13,B9=0,ud=1,$9=2,V9=3,jM="0",dd="1",YM="2",j0=1,G9=!0,qM=!1,fd=0,KM=1,ZM=2,Ll=0,H9=1,Pu=0,$i=1,JM=0,Iu=1,ze=0,df=1,oc=2,ff=3;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Y0="164",hf={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},QM=0,Q_=1,eb=2,W9=1,tb=2,Br=3,Vi=0,wn=1,xr=2,Ni=0,zs=1,ev=2,tv=3,nv=4,nb=5,po=100,rb=101,ib=102,ob=103,sb=104,ab=200,lb=201,cb=202,ub=203,up=204,dp=205,db=206,fb=207,hb=208,pb=209,mb=210,_b=211,vb=212,gb=213,xb=214,yb=0,Eb=1,Sb=2,Du=3,Tb=4,wb=5,Mb=6,bb=7,X9=0,Ab=1,Rb=2,Li=0,Cb=1,Pb=2,Ib=3,Db=4,Nb=5,Lb=6,Ub=7,j9=300,qs=301,Ks=302,fp=303,hp=304,hd=306,pp=1e3,yo=1001,mp=1002,rn=1003,Ob=1004,sc=1005,Dn=1006,pf=1007,Eo=1008,Gi=1009,zb=1010,Fb=1011,Y9=1012,q9=1013,Zs=1014,ar=1015,pd=1016,K9=1017,Z9=1018,Ul=1020,kb=35902,Bb=1021,$b=1022,Ln=1023,Vb=1024,Gb=1025,Fs=1026,Sl=1027,Hb=1028,J9=1029,Wb=1030,Q9=1031,eE=1033,mf=33776,_f=33777,vf=33778,gf=33779,rv=35840,iv=35841,ov=35842,sv=35843,av=36196,lv=37492,cv=37496,uv=37808,dv=37809,fv=37810,hv=37811,pv=37812,mv=37813,_v=37814,vv=37815,gv=37816,xv=37817,yv=37818,Ev=37819,Sv=37820,Tv=37821,xf=36492,wv=36494,Mv=36495,Xb=36283,bv=36284,Av=36285,Rv=36286,jb=3200,Yb=3201,tE=0,qb=1,Ei="",_r="srgb",Zi="srgb-linear",q0="display-p3",md="display-p3-linear",Nu="linear",gt="srgb",Lu="rec709",Uu="p3",Xo=7680,Cv=519,Kb=512,Zb=513,Jb=514,nE=515,Qb=516,eA=517,tA=518,nA=519,Pv=35044,Ou="300 es",jr=2e3,zu=2001;class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iv=1234567;const Ja=Math.PI/180,Tl=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function K0(t,e){return(t%e+e)%e}function rA(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function iA(t,e,n){return t!==e?(n-t)/(e-t):0}function Qa(t,e,n){return(1-n)*t+n*e}function oA(t,e,n,r){return Qa(t,e,1-Math.exp(-n*r))}function sA(t,e=1){return e-Math.abs(K0(t,e*2)-e)}function aA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function cA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function uA(t,e){return t+Math.random()*(e-t)}function dA(t){return t*(.5-Math.random())}function fA(t){t!==void 0&&(Iv=t);let e=Iv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hA(t){return t*Ja}function pA(t){return t*Tl}function mA(t){return(t&t-1)===0&&t!==0}function _A(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gA(t,e,n,r,i){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+r)/2),u=s((e+r)/2),d=o((e-r)/2),f=s((e-r)/2),p=o((r-e)/2),_=s((r-e)/2);switch(i){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rs={DEG2RAD:Ja,RAD2DEG:Tl,generateUUID:aa,clamp:Wt,euclideanModulo:K0,mapLinear:rA,inverseLerp:iA,lerp:Qa,damp:oA,pingpong:sA,smoothstep:aA,smootherstep:lA,randInt:cA,randFloat:uA,randFloatSpread:dA,seededRandom:fA,degToRad:hA,radToDeg:pA,isPowerOfTwo:mA,ceilPowerOfTwo:_A,floorPowerOfTwo:vA,setQuaternionFromProperEuler:gA,normalize:cn,denormalize:ps};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,r,i,o,s,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c)}set(e,n,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],p=r[5],_=r[8],v=i[0],m=i[3],h=i[6],g=i[1],x=i[4],y=i[7],w=i[2],T=i[5],b=i[8];return o[0]=s*v+a*g+l*w,o[3]=s*m+a*x+l*T,o[6]=s*h+a*y+l*b,o[1]=c*v+u*g+d*w,o[4]=c*m+u*x+d*T,o[7]=c*h+u*y+d*b,o[2]=f*v+p*g+_*w,o[5]=f*m+p*x+_*T,o[8]=f*h+p*y+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,f=a*l-u*o,p=c*o-s*l,_=n*d+r*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*c-u*r)*v,e[2]=(a*r-i*s)*v,e[3]=f*v,e[4]=(u*n-i*l)*v,e[5]=(i*o-a*n)*v,e[6]=p*v,e[7]=(r*l-c*n)*v,e[8]=(s*n-r*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yf.makeScale(e,n)),this}rotate(e){return this.premultiply(yf.makeRotation(-e)),this}translate(e,n){return this.premultiply(yf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yf=new We;function rE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xA(){const t=Fu("canvas");return t.style.display="block",t}const Dv={};function yA(t){t in Dv||(Dv[t]=!0,console.warn(t))}const Nv=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lv=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ac={[Zi]:{transfer:Nu,primaries:Lu,toReference:t=>t,fromReference:t=>t},[_r]:{transfer:gt,primaries:Lu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[md]:{transfer:Nu,primaries:Uu,toReference:t=>t.applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Nv)},[q0]:{transfer:gt,primaries:Uu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Nv).convertLinearToSRGB()}},EA=new Set([Zi,md]),dt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!EA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=ac[e].toReference,i=ac[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ac[t].primaries},getTransfer:function(t){return t===Ei?Nu:ac[t].transfer}};function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ef(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jo;class SA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jo===void 0&&(jo=Fu("canvas")),jo.width=e.width,jo.height=e.height;const r=jo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=jo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=ks(o[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ks(n[r]/255)*255):n[r]=ks(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TA=0;class iE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(Sf(i[s].image)):o.push(Sf(i[s]))}else o=Sf(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function Sf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?SA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wA=0;class hn extends $o{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,r=yo,i=yo,o=Dn,s=Eo,a=Ln,l=Gi,c=hn.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=aa(),this.name="",this.source=new iE(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j9)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pp:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pp:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=j9;hn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,i=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(h+1)/2,T=(u+f)/4,b=(d+v)/4,C=(_+m)/4;return x>y&&x>w?x<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(x),i=T/r,o=b/r):y>w?y<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),r=T/i,o=C/i):w<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(w),r=b/o,i=C/o),this.set(r,i,o,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MA extends $o{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new hn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new iE(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends MA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class oE extends hn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z0 extends hn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bA extends Hi{constructor(e=1,n=1,r=1,i={}){super(e,n,i),this.isWebGL3DRenderTarget=!0,this.depth=r,this.texture=new Z0(null,e,n,r),this.texture.isRenderTargetTexture=!0}}class la{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=o[s+0],p=o[s+1],_=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*v,g=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,h*g);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*g;if(l=l*m+f*y,c=c*m+p*y,u=u*m+_*y,d=d*m+v*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],f=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),f=l(r/2),p=l(i/2),_=l(o/2);switch(s){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=r+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-i)*p}else if(r>a&&r>d){const p=2*Math.sqrt(1+r-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-r-d);this._w=(o-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-r-a);this._w=(s-i)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*n-o*i),d=2*(o*r-s*n);return this.x=n+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new k,Uv=new la;class Ol{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Qn):Qn.fromBufferAttribute(o,s),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),cc.subVectors(this.max,Ra),Yo.subVectors(e.a,Ra),qo.subVectors(e.b,Ra),Ko.subVectors(e.c,Ra),li.subVectors(qo,Yo),ci.subVectors(Ko,qo),to.subVectors(Yo,Ko);let n=[0,-li.z,li.y,0,-ci.z,ci.y,0,-to.z,to.y,li.z,0,-li.x,ci.z,0,-ci.x,to.z,0,-to.x,-li.y,li.x,0,-ci.y,ci.x,0,-to.y,to.x,0];return!wf(n,Yo,qo,Ko,cc)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,Yo,qo,Ko,cc))?!1:(uc.crossVectors(li,ci),n=[uc.x,uc.y,uc.z],wf(n,Yo,qo,Ko,cc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lr=[new k,new k,new k,new k,new k,new k,new k,new k],Qn=new k,lc=new Ol,Yo=new k,qo=new k,Ko=new k,li=new k,ci=new k,to=new k,Ra=new k,cc=new k,uc=new k,no=new k;function wf(t,e,n,r,i){for(let o=0,s=t.length-3;o<=s;o+=3){no.fromArray(t,o);const a=i.x*Math.abs(no.x)+i.y*Math.abs(no.y)+i.z*Math.abs(no.z),l=e.dot(no),c=n.dot(no),u=r.dot(no);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AA=new Ol,Ca=new k,Mf=new k;class J0{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):AA.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Ca,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Mf)),this.expandByPoint(Ca.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ur=new k,bf=new k,dc=new k,ui=new k,Af=new k,fc=new k,Rf=new k;class sE{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ur.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,n),Ur.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){bf.copy(e).add(n).multiplyScalar(.5),dc.copy(n).sub(e).normalize(),ui.copy(this.origin).sub(bf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(dc),a=ui.dot(this.direction),l=-ui.dot(dc),c=ui.lengthSq(),u=Math.abs(1-s*s);let d,f,p,_;if(u>0)if(d=s*l-a,f=s*a-l,_=o*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+s*f+2*a)+f*(s*d+f+2*l)+c}else f=o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+c);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),p=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(bf).addScaledVector(dc,f),p}intersectSphere(e,n){Ur.subVectors(e.center,this.origin);const r=Ur.dot(this.direction),i=Ur.dot(Ur)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,n,r,i,o){Af.subVectors(n,e),fc.subVectors(r,e),Rf.crossVectors(Af,fc);let s=this.direction.dot(Rf),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(fc.crossVectors(ui,fc));if(l<0)return null;const c=a*this.direction.dot(Af.cross(ui));if(c<0||l+c>s)return null;const u=-a*ui.dot(Rf);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,r,i,o,s,a,l,c,u,d,f,p,_,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c,u,d,f,p,_,v,m)}set(e,n,r,i,o,s,a,l,c,u,d,f,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=r,h[12]=i,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Zo.setFromMatrixColumn(e,0).length(),o=1/Zo.setFromMatrixColumn(e,1).length(),s=1/Zo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*u,p=s*d,_=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;n[0]=f+v*a,n[4]=_*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=p*a-_,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;n[0]=f-v*a,n[4]=-s*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*u,n[9]=v-f*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,p=s*d,_=a*u,v=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-f*d,n[8]=_*d+p,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,p=s*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=s*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RA,e,CA)}lookAt(e,n,r){const i=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),di.crossVectors(r,bn),di.lengthSq()===0&&(Math.abs(r.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),di.crossVectors(r,bn)),di.normalize(),hc.crossVectors(bn,di),i[0]=di.x,i[4]=hc.x,i[8]=bn.x,i[1]=di.y,i[5]=hc.y,i[9]=bn.y,i[2]=di.z,i[6]=hc.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],p=r[13],_=r[2],v=r[6],m=r[10],h=r[14],g=r[3],x=r[7],y=r[11],w=r[15],T=i[0],b=i[4],C=i[8],M=i[12],S=i[1],L=i[5],O=i[9],N=i[13],B=i[2],F=i[6],q=i[10],W=i[14],U=i[3],H=i[7],X=i[11],re=i[15];return o[0]=s*T+a*S+l*B+c*U,o[4]=s*b+a*L+l*F+c*H,o[8]=s*C+a*O+l*q+c*X,o[12]=s*M+a*N+l*W+c*re,o[1]=u*T+d*S+f*B+p*U,o[5]=u*b+d*L+f*F+p*H,o[9]=u*C+d*O+f*q+p*X,o[13]=u*M+d*N+f*W+p*re,o[2]=_*T+v*S+m*B+h*U,o[6]=_*b+v*L+m*F+h*H,o[10]=_*C+v*O+m*q+h*X,o[14]=_*M+v*N+m*W+h*re,o[3]=g*T+x*S+y*B+w*U,o[7]=g*b+x*L+y*F+w*H,o[11]=g*C+x*O+y*q+w*X,o[15]=g*M+x*N+y*W+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+o*l*d-i*c*d-o*a*f+r*c*f+i*a*p-r*l*p)+v*(+n*l*p-n*c*f+o*s*f-i*s*p+i*c*u-o*l*u)+m*(+n*c*d-n*a*p-o*s*d+r*s*p+o*a*u-r*c*u)+h*(-i*a*u-n*l*d+n*a*f+i*s*d-r*s*f+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],g=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,x=_*f*c-u*m*c-_*l*p+s*m*p+u*l*h-s*f*h,y=u*v*c-_*d*c+_*a*p-s*v*p-u*a*h+s*d*h,w=_*d*l-u*v*l-_*a*f+s*v*f+u*a*m-s*d*m,T=n*g+r*x+i*y+o*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=g*b,e[1]=(v*f*o-d*m*o-v*i*p+r*m*p+d*i*h-r*f*h)*b,e[2]=(a*m*o-v*l*o+v*i*c-r*m*c-a*i*h+r*l*h)*b,e[3]=(d*l*o-a*f*o-d*i*c+r*f*c+a*i*p-r*l*p)*b,e[4]=x*b,e[5]=(u*m*o-_*f*o+_*i*p-n*m*p-u*i*h+n*f*h)*b,e[6]=(_*l*o-s*m*o-_*i*c+n*m*c+s*i*h-n*l*h)*b,e[7]=(s*f*o-u*l*o+u*i*c-n*f*c-s*i*p+n*l*p)*b,e[8]=y*b,e[9]=(_*d*o-u*v*o-_*r*p+n*v*p+u*r*h-n*d*h)*b,e[10]=(s*v*o-_*a*o+_*r*c-n*v*c-s*r*h+n*a*h)*b,e[11]=(u*a*o-s*d*o-u*r*c+n*d*c+s*r*p-n*a*p)*b,e[12]=w*b,e[13]=(u*v*i-_*d*i+_*r*f-n*v*f-u*r*m+n*d*m)*b,e[14]=(_*a*i-s*v*i-_*r*l+n*v*l+s*r*m-n*a*m)*b,e[15]=(s*d*i-u*a*i+u*r*l-n*d*l-s*r*f+n*a*f)*b,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,f=o*c,p=o*u,_=o*d,v=s*u,m=s*d,h=a*d,g=l*c,x=l*u,y=l*d,w=r.x,T=r.y,b=r.z;return i[0]=(1-(v+h))*w,i[1]=(p+y)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(f+h))*T,i[6]=(m+g)*T,i[7]=0,i[8]=(_+x)*b,i[9]=(m-g)*b,i[10]=(1-(f+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=Zo.set(i[0],i[1],i[2]).length();const s=Zo.set(i[4],i[5],i[6]).length(),a=Zo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],er.copy(this);const c=1/o,u=1/s,d=1/a;return er.elements[0]*=c,er.elements[1]*=c,er.elements[2]*=c,er.elements[4]*=u,er.elements[5]*=u,er.elements[6]*=u,er.elements[8]*=d,er.elements[9]*=d,er.elements[10]*=d,n.setFromRotationMatrix(er),r.x=o,r.y=s,r.z=a,this}makePerspective(e,n,r,i,o,s,a=jr){const l=this.elements,c=2*o/(n-e),u=2*o/(r-i),d=(n+e)/(n-e),f=(r+i)/(r-i);let p,_;if(a===jr)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===zu)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,s,a=jr){const l=this.elements,c=1/(n-e),u=1/(r-i),d=1/(s-o),f=(n+e)*c,p=(r+i)*u;let _,v;if(a===jr)_=(s+o)*d,v=-2*d;else if(a===zu)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Zo=new k,er=new Mt,RA=new k(0,0,0),CA=new k(1,1,1),di=new k,hc=new k,bn=new k,Ov=new Mt,zv=new la;class br{constructor(e=0,n=0,r=0,i=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ov,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zv.setFromEuler(this),this.setFromQuaternion(zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Q0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PA=0;const Fv=new k,Jo=new la,Or=new Mt,pc=new k,Pa=new k,IA=new k,DA=new la,kv=new k(1,0,0),Bv=new k(0,1,0),$v=new k(0,0,1),Vv={type:"added"},NA={type:"removed"},Qo={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Gt extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new k,n=new br,r=new la,i=new k(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new We}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(e,n){return Jo.setFromAxisAngle(e,n),this.quaternion.premultiply(Jo),this}rotateX(e){return this.rotateOnAxis(kv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,n){return Fv.copy(e).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?pc.copy(e):pc.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(Pa,pc,this.up):Or.lookAt(pc,Pa,this.up),this.quaternion.setFromRotationMatrix(Or),i&&(Or.extractRotation(i.matrixWorld),Jo.setFromRotationMatrix(Or),this.quaternion.premultiply(Jo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vv),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NA),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vv),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,IA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,DA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new k,zr=new k,Pf=new k,Fr=new k,es=new k,ts=new k,Gv=new k,If=new k,Df=new k,Nf=new k;class yr{constructor(e=new k,n=new k,r=new k){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),tr.subVectors(e,n),i.cross(tr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){tr.subVectors(i,n),zr.subVectors(r,n),Pf.subVectors(e,n);const s=tr.dot(tr),a=tr.dot(zr),l=tr.dot(Pf),c=zr.dot(zr),u=zr.dot(Pf),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(s*u-a*l)*f;return o.set(1-p-_,_,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,n,r,i,o,s,a,l){return this.getBarycoord(e,n,r,i,Fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fr.x),l.addScaledVector(s,Fr.y),l.addScaledVector(a,Fr.z),l)}static isFrontFacing(e,n,r,i){return tr.subVectors(r,n),zr.subVectors(e,n),tr.cross(zr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),tr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,o){return yr.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let s,a;es.subVectors(i,r),ts.subVectors(o,r),If.subVectors(e,r);const l=es.dot(If),c=ts.dot(If);if(l<=0&&c<=0)return n.copy(r);Df.subVectors(e,i);const u=es.dot(Df),d=ts.dot(Df);if(u>=0&&d<=u)return n.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(es,s);Nf.subVectors(e,o);const p=es.dot(Nf),_=ts.dot(Nf);if(_>=0&&p<=_)return n.copy(o);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(r).addScaledVector(ts,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Gv.subVectors(o,i),a=(d-u)/(d-u+(p-_)),n.copy(i).addScaledVector(Gv,a);const h=1/(m+v+f);return s=v*h,a=f*h,n.copy(r).addScaledVector(es,s).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const aE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_r){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,dt.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=dt.workingColorSpace){if(e=K0(e,1),n=Wt(n,0,1),r=Wt(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,s=2*r-o;this.r=Lf(s,o,e+1/3),this.g=Lf(s,o,e),this.b=Lf(s,o,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,n=_r){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_r){const r=aE[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=Ef(e.r),this.g=Ef(e.g),this.b=Ef(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_r){return dt.fromWorkingColorSpace(tn.copy(this),e),Math.round(Wt(tn.r*255,0,255))*65536+Math.round(Wt(tn.g*255,0,255))*256+Math.round(Wt(tn.b*255,0,255))}getHexString(e=_r){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(tn.copy(this),n);const r=tn.r,i=tn.g,o=tn.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=_r){dt.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,r=tn.g,i=tn.b;return e!==_r?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+n,fi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(mc);const r=Qa(fi.h,mc.h,n),i=Qa(fi.s,mc.s,n),o=Qa(fi.l,mc.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new it;it.NAMES=aE;let LA=0;class zl extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=zs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=dp,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Du,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Vi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==up&&(r.blendSrc=this.blendSrc),this.blendDst!==dp&&(r.blendDst=this.blendDst),this.blendEquation!==po&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Du&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wl extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=X9,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new k,_c=new ge;class On{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yA("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_c.fromBufferAttribute(this,n),_c.applyMatrix3(e),this.setXY(n,_c.x,_c.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ps(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),r=cn(r,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),r=cn(r,this.array),i=cn(i,this.array),o=cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pv&&(e.usage=this.usage),e}}class lE extends On{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class cE extends On{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class on extends On{constructor(e,n,r){super(new Float32Array(e),n,r)}}let UA=0;const Vn=new Mt,Uf=new Gt,ns=new k,An=new Ol,Ia=new Ol,kt=new k;class qn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rE(e)?cE:lE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new We().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,r){return Vn.makeTranslation(e,n,r),this.applyMatrix4(Vn),this}scale(e,n,r){return Vn.makeScale(e,n,r),this.applyMatrix4(Vn),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new on(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];An.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new J0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(An.min,Ia.min),An.expandByPoint(kt),kt.addVectors(An.max,Ia.max),An.expandByPoint(kt)):(An.expandByPoint(Ia.min),An.expandByPoint(Ia.max))}An.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)kt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(kt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),kt.add(ns)),i=Math.max(i,r.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<r.count;C++)a[C]=new k,l[C]=new k;const c=new k,u=new k,d=new k,f=new ge,p=new ge,_=new ge,v=new k,m=new k;function h(C,M,S){c.fromBufferAttribute(r,C),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,S),f.fromBufferAttribute(o,C),p.fromBufferAttribute(o,M),_.fromBufferAttribute(o,S),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[C].add(v),a[M].add(v),a[S].add(v),l[C].add(m),l[M].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,M=g.length;C<M;++C){const S=g[C],L=S.start,O=S.count;for(let N=L,B=L+O;N<B;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new k,y=new k,w=new k,T=new k;function b(C){w.fromBufferAttribute(i,C),T.copy(w);const M=a[C];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);const L=y.dot(l[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,M=g.length;C<M;++C){const S=g[C],L=S.start,O=S.count;for(let N=L,B=L+O;N<B;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);const i=new k,o=new k,s=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),a.add(u),l.add(u),c.add(u),r.setXYZ(_,a.x,a.y,a.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)i.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new On(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,r);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hv=new Mt,ro=new sE,vc=new J0,Wv=new k,rs=new k,is=new k,os=new k,Of=new k,gc=new k,xc=new ge,yc=new ge,Ec=new ge,Xv=new k,jv=new k,Yv=new k,Sc=new k,Tc=new k;class xt extends Gt{constructor(e=new qn,n=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){gc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Of.fromBufferAttribute(d,e),s?gc.addScaledVector(Of,u):gc.addScaledVector(Of.sub(n),u))}n.add(gc)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(o),ro.copy(e.ray).recast(e.near),!(vc.containsPoint(ro.origin)===!1&&(ro.intersectSphere(vc,Wv)===null||ro.origin.distanceToSquared(Wv)>(e.far-e.near)**2))&&(Hv.copy(o).invert(),ro.copy(e.ray).applyMatrix4(Hv),!(r.boundingBox!==null&&ro.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ro)))}_computeIntersections(e,n,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=x;y<w;y+=3){const T=a.getX(y),b=a.getX(y+1),C=a.getX(y+2);i=wc(this,h,e,r,c,u,d,T,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=wc(this,s,e,r,c,u,d,g,x,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=s[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,w=x;y<w;y+=3){const T=y,b=y+1,C=y+2;i=wc(this,h,e,r,c,u,d,T,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=m,x=m+1,y=m+2;i=wc(this,s,e,r,c,u,d,g,x,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function OA(t,e,n,r,i,o,s,a){let l;if(e.side===wn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Vi,a),l===null)return null;Tc.copy(a),Tc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Tc);return c<n.near||c>n.far?null:{distance:c,point:Tc.clone(),object:t}}function wc(t,e,n,r,i,o,s,a,l,c){t.getVertexPosition(a,rs),t.getVertexPosition(l,is),t.getVertexPosition(c,os);const u=OA(t,e,n,r,rs,is,os,Sc);if(u){i&&(xc.fromBufferAttribute(i,a),yc.fromBufferAttribute(i,l),Ec.fromBufferAttribute(i,c),u.uv=yr.getInterpolation(Sc,rs,is,os,xc,yc,Ec,new ge)),o&&(xc.fromBufferAttribute(o,a),yc.fromBufferAttribute(o,l),Ec.fromBufferAttribute(o,c),u.uv1=yr.getInterpolation(Sc,rs,is,os,xc,yc,Ec,new ge)),s&&(Xv.fromBufferAttribute(s,a),jv.fromBufferAttribute(s,l),Yv.fromBufferAttribute(s,c),u.normal=yr.getInterpolation(Sc,rs,is,os,Xv,jv,Yv,new k),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};yr.getNormal(rs,is,os,d.normal),u.face=d}return u}class ca extends qn{constructor(e=1,n=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,r,n,e,s,o,0),_("z","y","x",1,-1,r,n,-e,s,o,1),_("x","z","y",1,1,e,r,n,i,s,2),_("x","z","y",1,-1,e,r,-n,i,s,3),_("x","y","z",1,-1,e,n,r,i,o,4),_("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(d,2));function _(v,m,h,g,x,y,w,T,b,C,M){const S=y/b,L=w/C,O=y/2,N=w/2,B=T/2,F=b+1,q=C+1;let W=0,U=0;const H=new k;for(let X=0;X<q;X++){const re=X*L-N;for(let Z=0;Z<F;Z++){const fe=Z*S-O;H[v]=fe*g,H[m]=re*x,H[h]=B,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[h]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(Z/b),d.push(1-X/C),W+=1}}for(let X=0;X<C;X++)for(let re=0;re<b;re++){const Z=f+re+F*X,fe=f+re+F*(X+1),$=f+(re+1)+F*(X+1),K=f+(re+1)+F*X;l.push(Z,fe,K),l.push(fe,$,K),U+=6}a.addGroup(p,U,M),p+=U,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const r=Js(t[n]);for(const i in r)e[i]=r[i]}return e}function zA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const FA={clone:Js,merge:un};var kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=zA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}let dE=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=jr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const hi=new k,qv=new ge,Kv=new ge;class xn extends dE{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,n){return this.getViewBounds(e,qv,Kv),n.subVectors(Kv,qv)}setViewOffset(e,n,r,i,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ja*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,n-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class $A extends Gt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(ss,as,e,n);i.layers=this.layers,this.add(i);const o=new xn(ss,as,e,n);o.layers=this.layers,this.add(o);const s=new xn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new xn(ss,as,e,n);a.layers=this.layers,this.add(a);const l=new xn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new xn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===jr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class fE extends hn{constructor(e,n,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VA extends Hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new fE(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ca(5,5,5),o=new Ar({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:Ni});o.uniforms.tEquirect.value=n;const s=new xt(i,o),a=n.minFilter;return n.minFilter===Eo&&(n.minFilter=Dn),new $A(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(o)}}const zf=new k,GA=new k,HA=new We;class fo{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=zf.subVectors(r,n).cross(GA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(zf),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||HA.getNormalMatrix(e),i=this.coplanarPoint(zf).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new J0,Mc=new k;class em{constructor(e=new fo,n=new fo,r=new fo,i=new fo,o=new fo,s=new fo){this.planes=[e,n,r,i,o,s]}set(e,n,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=jr){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],_=i[9],v=i[10],m=i[11],h=i[12],g=i[13],x=i[14],y=i[15];if(r[0].setComponents(l-o,f-c,m-p,y-h).normalize(),r[1].setComponents(l+o,f+c,m+p,y+h).normalize(),r[2].setComponents(l+s,f+u,m+_,y+g).normalize(),r[3].setComponents(l-s,f-u,m-_,y-g).normalize(),r[4].setComponents(l-a,f-d,m-v,y-x).normalize(),n===jr)r[5].setComponents(l+a,f+d,m+v,y+x).normalize();else if(n===zu)r[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){return io.center.set(0,0,0),io.radius=.7071067811865476,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Mc.x=i.normal.x>0?e.max.x:e.min.x,Mc.y=i.normal.y>0?e.max.y:e.min.y,Mc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hE(){let t=null,e=!1,n=null,r=null;function i(o,s){n(o,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function WA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}class Vo extends qn{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,s=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const g=h*f-s;for(let x=0;x<c;x++){const y=x*d-o;_.push(y,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const x=g+c*h,y=g+c*(h+1),w=g+1+c*(h+1),T=g+1+c*h;p.push(x,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var XA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jA=`#ifdef USE_ALPHAHASH
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
#endif`,YA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JA=`#ifdef USE_AOMAP
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
#endif`,QA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eR=`#ifdef USE_BATCHING
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
#endif`,tR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oR=`#ifdef USE_IRIDESCENCE
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
#endif`,sR=`#ifdef USE_BUMPMAP
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
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mR=`#define PI 3.141592653589793
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
} // validated`,_R=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vR=`vec3 transformedNormal = objectNormal;
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
#endif`,gR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SR="gl_FragColor = linearToOutputTexel( gl_FragColor );",TR=`
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
}`,wR=`#ifdef USE_ENVMAP
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
#endif`,MR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bR=`#ifdef USE_ENVMAP
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
#endif`,AR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RR=`#ifdef USE_ENVMAP
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
#endif`,CR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NR=`#ifdef USE_GRADIENTMAP
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
}`,LR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zR=`uniform bool receiveShadow;
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
#endif`,FR=`#ifdef USE_ENVMAP
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
#endif`,kR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GR=`PhysicalMaterial material;
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
#endif`,HR=`struct PhysicalMaterial {
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
}`,WR=`
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
#endif`,XR=`#if defined( RE_IndirectDiffuse )
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
#endif`,jR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tC=`#if defined( USE_POINTS_UV )
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
#endif`,nC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sC=`#ifdef USE_MORPHNORMALS
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
#endif`,aC=`#ifdef USE_MORPHTARGETS
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
#endif`,lC=`#ifdef USE_MORPHTARGETS
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
#endif`,cC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pC=`#ifdef USE_NORMALMAP
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
#endif`,mC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_C=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PC=`float getShadowMask() {
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
}`,IC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DC=`#ifdef USE_SKINNING
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
#endif`,NC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LC=`#ifdef USE_SKINNING
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
#endif`,UC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kC=`#ifdef USE_TRANSMISSION
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
#endif`,BC=`#ifdef USE_TRANSMISSION
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
#endif`,$C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XC=`uniform sampler2D t2D;
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
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`#include <common>
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
}`,JC=`#if DEPTH_PACKING == 3200
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
}`,QC=`#define DISTANCE
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
}`,e2=`#define DISTANCE
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
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`uniform float scale;
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
}`,i2=`uniform vec3 diffuse;
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
}`,o2=`#include <common>
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
}`,s2=`uniform vec3 diffuse;
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
}`,a2=`#define LAMBERT
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define MATCAP
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
}`,u2=`#define MATCAP
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
}`,d2=`#define NORMAL
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
}`,f2=`#define NORMAL
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
}`,h2=`#define PHONG
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
}`,p2=`#define PHONG
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
}`,m2=`#define STANDARD
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
}`,_2=`#define STANDARD
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
}`,v2=`#define TOON
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
}`,g2=`#define TOON
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
}`,x2=`uniform float size;
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
}`,y2=`uniform vec3 diffuse;
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
}`,E2=`#include <common>
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
}`,S2=`uniform vec3 color;
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
}`,T2=`uniform float rotation;
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
}`,w2=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:XA,alphahash_pars_fragment:jA,alphamap_fragment:YA,alphamap_pars_fragment:qA,alphatest_fragment:KA,alphatest_pars_fragment:ZA,aomap_fragment:JA,aomap_pars_fragment:QA,batching_pars_vertex:eR,batching_vertex:tR,begin_vertex:nR,beginnormal_vertex:rR,bsdfs:iR,iridescence_fragment:oR,bumpmap_pars_fragment:sR,clipping_planes_fragment:aR,clipping_planes_pars_fragment:lR,clipping_planes_pars_vertex:cR,clipping_planes_vertex:uR,color_fragment:dR,color_pars_fragment:fR,color_pars_vertex:hR,color_vertex:pR,common:mR,cube_uv_reflection_fragment:_R,defaultnormal_vertex:vR,displacementmap_pars_vertex:gR,displacementmap_vertex:xR,emissivemap_fragment:yR,emissivemap_pars_fragment:ER,colorspace_fragment:SR,colorspace_pars_fragment:TR,envmap_fragment:wR,envmap_common_pars_fragment:MR,envmap_pars_fragment:bR,envmap_pars_vertex:AR,envmap_physical_pars_fragment:FR,envmap_vertex:RR,fog_vertex:CR,fog_pars_vertex:PR,fog_fragment:IR,fog_pars_fragment:DR,gradientmap_pars_fragment:NR,lightmap_pars_fragment:LR,lights_lambert_fragment:UR,lights_lambert_pars_fragment:OR,lights_pars_begin:zR,lights_toon_fragment:kR,lights_toon_pars_fragment:BR,lights_phong_fragment:$R,lights_phong_pars_fragment:VR,lights_physical_fragment:GR,lights_physical_pars_fragment:HR,lights_fragment_begin:WR,lights_fragment_maps:XR,lights_fragment_end:jR,logdepthbuf_fragment:YR,logdepthbuf_pars_fragment:qR,logdepthbuf_pars_vertex:KR,logdepthbuf_vertex:ZR,map_fragment:JR,map_pars_fragment:QR,map_particle_fragment:eC,map_particle_pars_fragment:tC,metalnessmap_fragment:nC,metalnessmap_pars_fragment:rC,morphinstance_vertex:iC,morphcolor_vertex:oC,morphnormal_vertex:sC,morphtarget_pars_vertex:aC,morphtarget_vertex:lC,normal_fragment_begin:cC,normal_fragment_maps:uC,normal_pars_fragment:dC,normal_pars_vertex:fC,normal_vertex:hC,normalmap_pars_fragment:pC,clearcoat_normal_fragment_begin:mC,clearcoat_normal_fragment_maps:_C,clearcoat_pars_fragment:vC,iridescence_pars_fragment:gC,opaque_fragment:xC,packing:yC,premultiplied_alpha_fragment:EC,project_vertex:SC,dithering_fragment:TC,dithering_pars_fragment:wC,roughnessmap_fragment:MC,roughnessmap_pars_fragment:bC,shadowmap_pars_fragment:AC,shadowmap_pars_vertex:RC,shadowmap_vertex:CC,shadowmask_pars_fragment:PC,skinbase_vertex:IC,skinning_pars_vertex:DC,skinning_vertex:NC,skinnormal_vertex:LC,specularmap_fragment:UC,specularmap_pars_fragment:OC,tonemapping_fragment:zC,tonemapping_pars_fragment:FC,transmission_fragment:kC,transmission_pars_fragment:BC,uv_pars_fragment:$C,uv_pars_vertex:VC,uv_vertex:GC,worldpos_vertex:HC,background_vert:WC,background_frag:XC,backgroundCube_vert:jC,backgroundCube_frag:YC,cube_vert:qC,cube_frag:KC,depth_vert:ZC,depth_frag:JC,distanceRGBA_vert:QC,distanceRGBA_frag:e2,equirect_vert:t2,equirect_frag:n2,linedashed_vert:r2,linedashed_frag:i2,meshbasic_vert:o2,meshbasic_frag:s2,meshlambert_vert:a2,meshlambert_frag:l2,meshmatcap_vert:c2,meshmatcap_frag:u2,meshnormal_vert:d2,meshnormal_frag:f2,meshphong_vert:h2,meshphong_frag:p2,meshphysical_vert:m2,meshphysical_frag:_2,meshtoon_vert:v2,meshtoon_frag:g2,points_vert:x2,points_frag:y2,shadow_vert:E2,shadow_frag:S2,sprite_vert:T2,sprite_frag:w2},me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vr={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};vr.physical={uniforms:un([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const bc={r:0,b:0,g:0},oo=new br,M2=new Mt;function b2(t,e,n,r,i,o,s){const a=new it(0);let l=o===!0?0:1,c,u,d=null,f=0,p=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function v(g){let x=!1;const y=_(g);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(g,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===hd)?(u===void 0&&(u=new xt(new ca(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Js(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oo.copy(x.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M2.makeRotationFromEuler(oo)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==gt,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xt(new Vo(2,2),new Ar({name:"BackgroundMaterial",uniforms:Js(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,x){g.getRGB(bc,uE(t)),r.buffers.color.setClear(bc.r,bc.g,bc.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:v,addToRenderList:m}}function A2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(S,L,O,N,B){let F=!1;const q=d(N,O,L);o!==q&&(o=q,c(o.object)),F=p(S,N,O,B),F&&_(S,N,O,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,y(S,L,O,N),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,L,O){const N=O.wireframe===!0;let B=r[S.id];B===void 0&&(B={},r[S.id]=B);let F=B[L.id];F===void 0&&(F={},B[L.id]=F);let q=F[N];return q===void 0&&(q=f(l()),F[N]=q),q}function f(S){const L=[],O=[],N=[];for(let B=0;B<n;B++)L[B]=0,O[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,L,O,N){const B=o.attributes,F=L.attributes;let q=0;const W=O.getAttributes();for(const U in W)if(W[U].location>=0){const X=B[U];let re=F[U];if(re===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),X===void 0||X.attribute!==re||re&&X.data!==re.data)return!0;q++}return o.attributesNum!==q||o.index!==N}function _(S,L,O,N){const B={},F=L.attributes;let q=0;const W=O.getAttributes();for(const U in W)if(W[U].location>=0){let X=F[U];X===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const re={};re.attribute=X,X&&X.data&&(re.data=X.data),B[U]=re,q++}o.attributes=B,o.attributesNum=q,o.index=N}function v(){const S=o.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const O=o.newAttributes,N=o.enabledAttributes,B=o.attributeDivisors;O[S]=1,N[S]===0&&(t.enableVertexAttribArray(S),N[S]=1),B[S]!==L&&(t.vertexAttribDivisor(S,L),B[S]=L)}function g(){const S=o.newAttributes,L=o.enabledAttributes;for(let O=0,N=L.length;O<N;O++)L[O]!==S[O]&&(t.disableVertexAttribArray(O),L[O]=0)}function x(S,L,O,N,B,F,q){q===!0?t.vertexAttribIPointer(S,L,O,B,F):t.vertexAttribPointer(S,L,O,N,B,F)}function y(S,L,O,N){v();const B=N.attributes,F=O.getAttributes(),q=L.defaultAttributeValues;for(const W in F){const U=F[W];if(U.location>=0){let H=B[W];if(H===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const X=H.normalized,re=H.itemSize,Z=e.get(H);if(Z===void 0)continue;const fe=Z.buffer,$=Z.type,K=Z.bytesPerElement,te=$===t.INT||$===t.UNSIGNED_INT||H.gpuType===q9;if(H.isInterleavedBufferAttribute){const P=H.data,ee=P.stride,le=H.offset;if(P.isInstancedInterleavedBuffer){for(let z=0;z<U.locationSize;z++)h(U.location+z,P.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let z=0;z<U.locationSize;z++)m(U.location+z);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let z=0;z<U.locationSize;z++)x(U.location+z,re/U.locationSize,$,X,ee*K,(le+re/U.locationSize*z)*K,te)}else{if(H.isInstancedBufferAttribute){for(let P=0;P<U.locationSize;P++)h(U.location+P,H.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let P=0;P<U.locationSize;P++)m(U.location+P);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let P=0;P<U.locationSize;P++)x(U.location+P,re/U.locationSize,$,X,re*K,re/U.locationSize*P*K,te)}}else if(q!==void 0){const X=q[W];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(U.location,X);break;case 3:t.vertexAttrib3fv(U.location,X);break;case 4:t.vertexAttrib4fv(U.location,X);break;default:t.vertexAttrib1fv(U.location,X)}}}}g()}function w(){C();for(const S in r){const L=r[S];for(const O in L){const N=L[O];for(const B in N)u(N[B].object),delete N[B];delete L[O]}delete r[S]}}function T(S){if(r[S.id]===void 0)return;const L=r[S.id];for(const O in L){const N=L[O];for(const B in N)u(N[B].object),delete N[B];delete L[O]}delete r[S.id]}function b(S){for(const L in r){const O=r[L];if(O[S.id]===void 0)continue;const N=O[S.id];for(const B in N)u(N[B].object),delete N[B];delete O[S.id]}}function C(){M(),s=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function R2(t,e,n){let r;function i(c){r=c}function o(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(r,c,u,d),n.update(u,r,d))}function a(c,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(c[p],u[p]);else{f.multiDrawArraysWEBGL(r,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,r,1)}}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];for(let v=0;v<f.length;v++)n.update(_,r,f[v])}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C2(t,e,n,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==Ln&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===pd&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gi&&r.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ar&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function P2(t){const e=this;let n=null,r=0,i=!1,o=!1;const s=new fo,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||r!==0||i;return i=f,r=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!i||_===null||_.length===0||o&&!m)o?u(null):c();else{const g=o?0:r,x=g*4;let y=h.clippingState||null;l.value=y,y=u(_,f,x,p);for(let w=0;w!==x;++w)y[w]=n[w];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==v;++x,y+=4)s.copy(d[x]).applyMatrix4(g,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function I2(t){let e=new WeakMap;function n(s,a){return a===fp?s.mapping=qs:a===hp&&(s.mapping=Ks),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===fp||a===hp)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new VA(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",i),n(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class pE extends dE{constructor(e=-1,n=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,Zv=[.125,.215,.35,.446,.526,.582],mo=20,Ff=new pE,Jv=new it;let kf=null,Bf=0,$f=0,Vf=!1;const ho=(1+Math.sqrt(5))/2,ls=1/ho,Qv=[new k(-ho,ls,0),new k(ho,ls,0),new k(-ls,0,ho),new k(ls,0,ho),new k(0,ho,-ls),new k(0,ho,ls),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,Bf,$f),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:pd,format:Ln,colorSpace:Zi,depthBuffer:!1},i=tg(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D2(o)),this._blurMaterial=N2(o,e,n)}return i}_compileMaterial(e){const n=new xt(this._lodPlanes[0],e);this._renderer.compile(n,Ff)}_sceneToCubeUV(e,n,r,i){const a=new xn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jv),u.toneMapping=Li,u.autoClear=!1;const p=new wl({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new xt(new ca,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jv),v=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;Ac(i,g*x,h>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===qs||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new xt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ac(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,Ff)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Qv[(i-o-1)%Qv.length];this._blur(e,o-1,o,s,a)}n.autoClear=r}_blur(e,n,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[r]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*mo-1),v=o/_,m=isFinite(o)?1+Math.floor(u*v):mo;m>mo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mo}`);const h=[];let g=0;for(let b=0;b<mo;++b){const C=b/v,M=Math.exp(-C*C/2);h.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-r;const y=this._sizeLods[i],w=3*y*(i>x-Cs?i-x+Cs:0),T=4*(this._cubeSize-y);Ac(n,w,T,3*y,2*y),l.setRenderTarget(n),l.render(d,Ff)}}function D2(t){const e=[],n=[],r=[];let i=t;const o=t-Cs+1+Zv.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);n.push(a);let l=1/a;s>t-Cs?l=Zv[s-t+Cs-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,C=T>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];g.set(M,v*_*T),x.set(f,m*_*T);const S=[T,T,T,T,T,T];y.set(S,h*_*T)}const w=new qn;w.setAttribute("position",new On(g,v)),w.setAttribute("uv",new On(x,m)),w.setAttribute("faceIndex",new On(y,h)),e.push(w),i>Cs&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function tg(t,e,n){const r=new Hi(t,e,n);return r.texture.mapping=hd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function N2(t,e,n){const r=new Float32Array(mo),i=new k(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tm(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ng(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function rg(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function tm(){return`

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
	`}function L2(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===fp||l===hp,u=l===qs||l===Ks;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new eg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new eg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function U2(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function O2(t,e,n,r){const i={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",s),delete i[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,y=g.length;x<y;x+=3){const w=g[x+0],T=g[x+1],b=g[x+2];f.push(w,T,T,b,b,w)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const w=x+0,T=x+1,b=x+2;f.push(w,T,T,b,b,w)}}else return;const m=new(rE(f)?cE:lE)(f,1);m.version=v;const h=o.get(d);h&&e.remove(h),o.set(d,m)}function u(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function z2(t,e,n){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(r,p,o,f*s),n.update(p,r,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(r,p,o,f*s,_),n.update(p,r,_))}function u(f,p,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_;m++)this.render(f[m]/s,p[m]);else{v.multiDrawElementsWEBGL(r,p,0,o,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,r,1)}}function d(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/s,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,o,f,0,v,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];for(let g=0;g<v.length;g++)n.update(h,r,v[g])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function F2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function k2(t,e,n){const r=new WeakMap,i=new $t;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let S=function(){C.dispose(),r.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),C=new oE(b,w,T,d);C.type=ar,C.needsUpdate=!0;const M=y*4;for(let L=0;L<d;L++){const O=h[L],N=g[L],B=x[L],F=w*T*4*L;for(let q=0;q<O.count;q++){const W=q*M;_===!0&&(i.fromBufferAttribute(O,q),b[F+W+0]=i.x,b[F+W+1]=i.y,b[F+W+2]=i.z,b[F+W+3]=0),v===!0&&(i.fromBufferAttribute(N,q),b[F+W+4]=i.x,b[F+W+5]=i.y,b[F+W+6]=i.z,b[F+W+7]=0),m===!0&&(i.fromBufferAttribute(B,q),b[F+W+8]=i.x,b[F+W+9]=i.y,b[F+W+10]=i.z,b[F+W+11]=B.itemSize===4?i.w:1)}}f={count:d,texture:C,size:new ge(w,T)},r.set(a,f),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function B2(t,e,n,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class mE extends hn{constructor(e,n,r,i,o,s,a,l,c,u){if(u=u!==void 0?u:Fs,u!==Fs&&u!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Fs&&(r=Zs),r===void 0&&u===Sl&&(r=Ul),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _E=new hn,vE=new mE(1,1);vE.compareFunction=nE;const gE=new oE,xE=new Z0,yE=new fE,ig=[],og=[],sg=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function ua(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=ig[i];if(o===void 0&&(o=new Float32Array(i),ig[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function _d(t,e){let n=og[e];n===void 0&&(n=new Int32Array(e),og[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function $2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function W2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,r))return;lg.set(r),t.uniformMatrix2fv(this.addr,!1,lg),Ft(n,r)}}function X2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,r))return;ag.set(r),t.uniformMatrix3fv(this.addr,!1,ag),Ft(n,r)}}function j2(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(zt(n,r))return;sg.set(r),t.uniformMatrix4fv(this.addr,!1,sg),Ft(n,r)}}function Y2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function J2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function eP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function tP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function nP(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const o=this.type===t.SAMPLER_2D_SHADOW?vE:_E;n.setTexture2D(e||o,i)}function rP(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||xE,i)}function iP(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||yE,i)}function oP(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||gE,i)}function sP(t){switch(t){case 5126:return $2;case 35664:return V2;case 35665:return G2;case 35666:return H2;case 35674:return W2;case 35675:return X2;case 35676:return j2;case 5124:case 35670:return Y2;case 35667:case 35671:return q2;case 35668:case 35672:return K2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return Q2;case 36295:return eP;case 36296:return tP;case 35678:case 36198:case 36298:case 36306:case 35682:return nP;case 35679:case 36299:case 36307:return rP;case 35680:case 36300:case 36308:case 36293:return iP;case 36289:case 36303:case 36311:case 36292:return oP}}function aP(t,e){t.uniform1fv(this.addr,e)}function lP(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function cP(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function uP(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function dP(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fP(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hP(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pP(t,e){t.uniform1iv(this.addr,e)}function mP(t,e){t.uniform2iv(this.addr,e)}function _P(t,e){t.uniform3iv(this.addr,e)}function vP(t,e){t.uniform4iv(this.addr,e)}function gP(t,e){t.uniform1uiv(this.addr,e)}function xP(t,e){t.uniform2uiv(this.addr,e)}function yP(t,e){t.uniform3uiv(this.addr,e)}function EP(t,e){t.uniform4uiv(this.addr,e)}function SP(t,e,n){const r=this.cache,i=e.length,o=_d(n,i);zt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||_E,o[s])}function TP(t,e,n){const r=this.cache,i=e.length,o=_d(n,i);zt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||xE,o[s])}function wP(t,e,n){const r=this.cache,i=e.length,o=_d(n,i);zt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||yE,o[s])}function MP(t,e,n){const r=this.cache,i=e.length,o=_d(n,i);zt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||gE,o[s])}function bP(t){switch(t){case 5126:return aP;case 35664:return lP;case 35665:return cP;case 35666:return uP;case 35674:return dP;case 35675:return fP;case 35676:return hP;case 5124:case 35670:return pP;case 35667:case 35671:return mP;case 35668:case 35672:return _P;case 35669:case 35673:return vP;case 5125:return gP;case 36294:return xP;case 36295:return yP;case 36296:return EP;case 35678:case 36198:case 36298:case 36306:case 35682:return SP;case 35679:case 36299:case 36307:return TP;case 35680:case 36300:case 36308:case 36293:return wP;case 36289:case 36303:case 36311:case 36292:return MP}}class AP{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=sP(n.type)}}class RP{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bP(n.type)}}class CP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,n[a.id],r)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function PP(t,e,n){const r=t.name,i=r.length;for(Gf.lastIndex=0;;){const o=Gf.exec(r),s=Gf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){cg(n,c===void 0?new AP(a,t,e):new RP(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new CP(a),cg(n,d)),n=d}}}class Qc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),s=e.getUniformLocation(n,o.name);PP(o,s,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function ug(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const IP=37297;let DP=0;function NP(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}function LP(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let r;switch(e===n?r="":e===Uu&&n===Lu?r="LinearDisplayP3ToLinearSRGB":e===Lu&&n===Uu&&(r="LinearSRGBToLinearDisplayP3"),t){case Zi:case md:return[r,"LinearTransferOETF"];case _r:case q0:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function dg(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+NP(t.getShaderSource(e),s)}else return i}function UP(t,e){const n=LP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OP(t,e){let n;switch(e){case Cb:n="Linear";break;case Pb:n="Reinhard";break;case Ib:n="OptimizedCineon";break;case Db:n="ACESFilmic";break;case Lb:n="AgX";break;case Ub:n="Neutral";break;case Nb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function FP(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kP(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ka(t){return t!==""}function fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BP=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(t){return t.replace(BP,VP)}const $P=new Map;function VP(t,e){let n=He[e];if(n===void 0){const r=$P.get(e);if(r!==void 0)n=He[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return _p(n)}const GP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(t){return t.replace(GP,HP)}function HP(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function mg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function WP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===W9?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Br&&(e="SHADOWMAP_TYPE_VSM"),e}function XP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case hd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function YP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case X9:e="ENVMAP_BLENDING_MULTIPLY";break;case Ab:e="ENVMAP_BLENDING_MIX";break;case Rb:e="ENVMAP_BLENDING_ADD";break}return e}function qP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function KP(t,e,n,r){const i=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=WP(n),c=XP(n),u=jP(n),d=YP(n),f=qP(n),p=zP(n),_=FP(o),v=i.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ka).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ka).join(`
`),h.length>0&&(h+=`
`)):(m=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),h=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?He.tonemapping_pars_fragment:"",n.toneMapping!==Li?OP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,UP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),s=_p(s),s=fg(s,n),s=hg(s,n),a=_p(a),a=fg(a,n),a=hg(a,n),s=pg(s),a=pg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+s,y=g+h+a,w=ug(i,i.VERTEX_SHADER,x),T=ug(i,i.FRAGMENT_SHADER,y);i.attachShader(v,w),i.attachShader(v,T),n.index0AttributeName!==void 0?i.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function b(L){if(t.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(w).trim(),B=i.getShaderInfoLog(T).trim();let F=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,v,w,T);else{const W=dg(i,w,"vertex"),U=dg(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+W+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||B==="")&&(q=!1);q&&(L.diagnostics={runnable:F,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:h}})}i.deleteShader(w),i.deleteShader(T),C=new Qc(i,v),M=kP(i,v)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,IP)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let ZP=0;class JP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new QP(e),n.set(e,r)),r}}class QP{constructor(e){this.id=ZP++,this.code=e,this.usedTimes=0}}function e3(t,e,n,r,i,o,s){const a=new Q0,l=new JP,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,O,N){const B=O.fog,F=N.geometry,q=M.isMeshStandardMaterial?O.environment:null,W=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),U=W&&W.mapping===hd?W.image.height:null,H=_[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=X!==void 0?X.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let fe,$,K,te;if(H){const ct=vr[H];fe=ct.vertexShader,$=ct.fragmentShader}else fe=M.vertexShader,$=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const P=t.getRenderTarget(),ee=N.isInstancedMesh===!0,le=N.isBatchedMesh===!0,z=!!M.map,pe=!!M.matcap,ie=!!W,Pe=!!M.aoMap,ye=!!M.lightMap,Ce=!!M.bumpMap,Ne=!!M.normalMap,Le=!!M.displacementMap,at=!!M.emissiveMap,D=!!M.metalnessMap,A=!!M.roughnessMap,Q=M.anisotropy>0,oe=M.clearcoat>0,ae=M.dispersion>0,ue=M.iridescence>0,De=M.sheen>0,Ee=M.transmission>0,xe=Q&&!!M.anisotropyMap,Xe=oe&&!!M.clearcoatMap,he=oe&&!!M.clearcoatNormalMap,Ie=oe&&!!M.clearcoatRoughnessMap,rt=ue&&!!M.iridescenceMap,Ue=ue&&!!M.iridescenceThicknessMap,Me=De&&!!M.sheenColorMap,je=De&&!!M.sheenRoughnessMap,nt=!!M.specularMap,Pt=!!M.specularColorMap,Ye=!!M.specularIntensityMap,V=Ee&&!!M.transmissionMap,se=Ee&&!!M.thicknessMap,ne=!!M.gradientMap,_e=!!M.alphaMap,Se=M.alphaTest>0,st=!!M.alphaHash,mt=!!M.extensions;let At=Li;M.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(At=t.toneMapping);const qt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:$,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:le,instancing:ee,instancingColor:ee&&N.instanceColor!==null,instancingMorph:ee&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?t.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zi,alphaToCoverage:!!M.alphaToCoverage,map:z,matcap:pe,envMap:ie,envMapMode:ie&&W.mapping,envMapCubeUVHeight:U,aoMap:Pe,lightMap:ye,bumpMap:Ce,normalMap:Ne,displacementMap:f&&Le,emissiveMap:at,normalMapObjectSpace:Ne&&M.normalMapType===qb,normalMapTangentSpace:Ne&&M.normalMapType===tE,metalnessMap:D,roughnessMap:A,anisotropy:Q,anisotropyMap:xe,clearcoat:oe,clearcoatMap:Xe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ie,dispersion:ae,iridescence:ue,iridescenceMap:rt,iridescenceThicknessMap:Ue,sheen:De,sheenColorMap:Me,sheenRoughnessMap:je,specularMap:nt,specularColorMap:Pt,specularIntensityMap:Ye,transmission:Ee,transmissionMap:V,thicknessMap:se,gradientMap:ne,opaque:M.transparent===!1&&M.blending===zs&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:Se,alphaHash:st,combine:M.combine,mapUv:z&&v(M.map.channel),aoMapUv:Pe&&v(M.aoMap.channel),lightMapUv:ye&&v(M.lightMap.channel),bumpMapUv:Ce&&v(M.bumpMap.channel),normalMapUv:Ne&&v(M.normalMap.channel),displacementMapUv:Le&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:D&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:xe&&v(M.anisotropyMap.channel),clearcoatMapUv:Xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&v(M.sheenRoughnessMap.channel),specularMapUv:nt&&v(M.specularMap.channel),specularColorMapUv:Pt&&v(M.specularColorMap.channel),specularIntensityMapUv:Ye&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:se&&v(M.thicknessMap.channel),alphaMapUv:_e&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ne||Q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(z||_e),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:At,useLegacyLights:t._useLegacyLights,decodeVideoTexture:z&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xr,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:mt&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&M.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(g(S,M),x(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const S=_[M.type];let L;if(S){const O=vr[S];L=FA.clone(O.uniforms)}else L=M.uniforms;return L}function w(M,S){let L;for(let O=0,N=u.length;O<N;O++){const B=u[O];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new KP(t,S,M,o),u.push(L)),L}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:C}}function t3(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function r(o,s,a){t.get(o)[s]=a}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function n3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function s(d,f,p,_,v,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,_,v,m){const h=s(d,f,p,_,v,m);p.transmission>0?r.push(h):p.transparent===!0?i.push(h):n.push(h)}function l(d,f,p,_,v,m){const h=s(d,f,p,_,v,m);p.transmission>0?r.unshift(h):p.transparent===!0?i.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||n3),r.length>1&&r.sort(f||_g),i.length>1&&i.sort(f||_g)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function r3(){let t=new WeakMap;function e(r,i){const o=t.get(r);let s;return o===void 0?(s=new vg,t.set(r,[s])):i>=o.length?(s=new vg,o.push(s)):s=o[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function i3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new it};break;case"SpotLight":n={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function o3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let s3=0;function a3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function l3(t){const e=new i3,n=o3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const i=new k,o=new Mt,s=new Mt;function a(c,u){let d=0,f=0,p=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let _=0,v=0,m=0,h=0,g=0,x=0,y=0,w=0,T=0,b=0,C=0;c.sort(a3);const M=u===!0?Math.PI:1;for(let L=0,O=c.length;L<O;L++){const N=c[L],B=N.color,F=N.intensity,q=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=B.r*F*M,f+=B.g*F*M,p+=B.b*F*M;else if(N.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(N.sh.coefficients[U],F);C++}else if(N.isDirectionalLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=N.shadow.matrix,x++}r.directional[_]=U,_++}else if(N.isSpotLight){const U=e.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(B).multiplyScalar(F*M),U.distance=q,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,r.spot[m]=U;const H=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,H.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[m]=H.matrix,N.castShadow){const X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,r.spotShadow[m]=X,r.spotShadowMap[m]=W,w++}m++}else if(N.isRectAreaLight){const U=e.get(N);U.color.copy(B).multiplyScalar(F),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),r.rectArea[h]=U,h++}else if(N.isPointLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*M),U.distance=N.distance,U.decay=N.decay,N.castShadow){const H=N.shadow,X=n.get(N);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,r.pointShadow[v]=X,r.pointShadowMap[v]=W,r.pointShadowMatrix[v]=N.shadow.matrix,y++}r.point[v]=U,v++}else if(N.isHemisphereLight){const U=e.get(N);U.skyColor.copy(N.color).multiplyScalar(F*M),U.groundColor.copy(N.groundColor).multiplyScalar(F*M),r.hemi[g]=U,g++}}h>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=p;const S=r.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==m||S.rectAreaLength!==h||S.hemiLength!==g||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==w||S.numSpotMaps!==T||S.numLightProbes!==C)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=h,r.point.length=v,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=w+T-b,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=C,S.directionalLength=_,S.pointLength=v,S.spotLength=m,S.rectAreaLength=h,S.hemiLength=g,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=w,S.numSpotMaps=T,S.numLightProbes=C,r.version=s3++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=r.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const y=r.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=r.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:r}}function gg(t){const e=new l3(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function o(u){n.push(u)}function s(u){r.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function c3(t){let e=new WeakMap;function n(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new gg(t),e.set(i,[a])):o>=s.length?(a=new gg(t),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class u3 extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d3 extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h3=`uniform sampler2D shadow_pass;
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
}`;function p3(t,e,n){let r=new em;const i=new ge,o=new ge,s=new $t,a=new u3({depthPacking:Yb}),l=new d3,c={},u=n.maxTextureSize,d={[Vi]:wn,[wn]:Vi,[xr]:xr},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:f3,fragmentShader:h3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W9;let h=this.type;this.render=function(T,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ni),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=h!==Br&&this.type===Br,B=h===Br&&this.type!==Br;for(let F=0,q=T.length;F<q;F++){const W=T[F],U=W.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const H=U.getFrameExtents();if(i.multiply(H),o.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/H.x),i.x=o.x*H.x,U.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/H.y),i.y=o.y*H.y,U.mapSize.y=o.y)),U.map===null||N===!0||B===!0){const re=this.type!==Br?{minFilter:rn,magFilter:rn}:{};U.map!==null&&U.map.dispose(),U.map=new Hi(i.x,i.y,re),U.map.texture.name=W.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const X=U.getViewportCount();for(let re=0;re<X;re++){const Z=U.getViewport(re);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),O.viewport(s),U.updateMatrices(W,re),r=U.getFrustum(),y(b,C,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===Br&&g(U,C),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,L)};function g(T,b){const C=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hi(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,C,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,C,p,v,null)}function x(T,b,C,M){let S=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=S.uuid,N=b.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let F=B[N];F===void 0&&(F=S.clone(),B[N]=F,b.addEventListener("dispose",w)),S=F}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Br?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=C}return S}function y(T,b,C,M,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Br)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=e.update(T),B=T.material;if(Array.isArray(B)){const F=N.groups;for(let q=0,W=F.length;q<W;q++){const U=F[q],H=B[U.materialIndex];if(H&&H.visible){const X=x(T,H,M,S);T.onBeforeShadow(t,T,b,C,N,X,U),t.renderBufferDirect(C,null,N,X,T,U),T.onAfterShadow(t,T,b,C,N,X,U)}}}else if(B.visible){const F=x(T,B,M,S);T.onBeforeShadow(t,T,b,C,N,F,null),t.renderBufferDirect(C,null,N,F,T,null),T.onAfterShadow(t,T,b,C,N,F,null)}}const O=T.children;for(let N=0,B=O.length;N<B;N++)y(O[N],b,C,M,S)}function w(T){T.target.removeEventListener("dispose",w);for(const C in c){const M=c[C],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function m3(t){function e(){let V=!1;const se=new $t;let ne=null;const _e=new $t(0,0,0,0);return{setMask:function(Se){ne!==Se&&!V&&(t.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){V=Se},setClear:function(Se,st,mt,At,qt){qt===!0&&(Se*=At,st*=At,mt*=At),se.set(Se,st,mt,At),_e.equals(se)===!1&&(t.clearColor(Se,st,mt,At),_e.copy(se))},reset:function(){V=!1,ne=null,_e.set(-1,0,0,0)}}}function n(){let V=!1,se=null,ne=null,_e=null;return{setTest:function(Se){Se?te(t.DEPTH_TEST):P(t.DEPTH_TEST)},setMask:function(Se){se!==Se&&!V&&(t.depthMask(Se),se=Se)},setFunc:function(Se){if(ne!==Se){switch(Se){case yb:t.depthFunc(t.NEVER);break;case Eb:t.depthFunc(t.ALWAYS);break;case Sb:t.depthFunc(t.LESS);break;case Du:t.depthFunc(t.LEQUAL);break;case Tb:t.depthFunc(t.EQUAL);break;case wb:t.depthFunc(t.GEQUAL);break;case Mb:t.depthFunc(t.GREATER);break;case bb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Se}},setLocked:function(Se){V=Se},setClear:function(Se){_e!==Se&&(t.clearDepth(Se),_e=Se)},reset:function(){V=!1,se=null,ne=null,_e=null}}}function r(){let V=!1,se=null,ne=null,_e=null,Se=null,st=null,mt=null,At=null,qt=null;return{setTest:function(ct){V||(ct?te(t.STENCIL_TEST):P(t.STENCIL_TEST))},setMask:function(ct){se!==ct&&!V&&(t.stencilMask(ct),se=ct)},setFunc:function(ct,hr,ln){(ne!==ct||_e!==hr||Se!==ln)&&(t.stencilFunc(ct,hr,ln),ne=ct,_e=hr,Se=ln)},setOp:function(ct,hr,ln){(st!==ct||mt!==hr||At!==ln)&&(t.stencilOp(ct,hr,ln),st=ct,mt=hr,At=ln)},setLocked:function(ct){V=ct},setClear:function(ct){qt!==ct&&(t.clearStencil(ct),qt=ct)},reset:function(){V=!1,se=null,ne=null,_e=null,Se=null,st=null,mt=null,At=null,qt=null}}}const i=new e,o=new n,s=new r,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,m=null,h=null,g=null,x=null,y=null,w=null,T=new it(0,0,0),b=0,C=!1,M=null,S=null,L=null,O=null,N=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,q=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=q>=2);let U=null,H={};const X=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Z=new $t().fromArray(X),fe=new $t().fromArray(re);function $(V,se,ne,_e){const Se=new Uint8Array(4),st=t.createTexture();t.bindTexture(V,st),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let mt=0;mt<ne;mt++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(se+mt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return st}const K={};K[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),s.setClear(0),te(t.DEPTH_TEST),o.setFunc(Du),Ce(!1),Ne(Q_),te(t.CULL_FACE),Pe(Ni);function te(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function P(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function ee(V,se){return u[V]!==se?(t.bindFramebuffer(V,se),u[V]=se,V===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),V===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function le(V,se){let ne=f,_e=!1;if(V){ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne));const Se=V.textures;if(ne.length!==Se.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let st=0,mt=Se.length;st<mt;st++)ne[st]=t.COLOR_ATTACHMENT0+st;ne.length=Se.length,_e=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ne)}function z(V){return p!==V?(t.useProgram(V),p=V,!0):!1}const pe={[po]:t.FUNC_ADD,[rb]:t.FUNC_SUBTRACT,[ib]:t.FUNC_REVERSE_SUBTRACT};pe[ob]=t.MIN,pe[sb]=t.MAX;const ie={[ab]:t.ZERO,[lb]:t.ONE,[cb]:t.SRC_COLOR,[up]:t.SRC_ALPHA,[mb]:t.SRC_ALPHA_SATURATE,[hb]:t.DST_COLOR,[db]:t.DST_ALPHA,[ub]:t.ONE_MINUS_SRC_COLOR,[dp]:t.ONE_MINUS_SRC_ALPHA,[pb]:t.ONE_MINUS_DST_COLOR,[fb]:t.ONE_MINUS_DST_ALPHA,[_b]:t.CONSTANT_COLOR,[vb]:t.ONE_MINUS_CONSTANT_COLOR,[gb]:t.CONSTANT_ALPHA,[xb]:t.ONE_MINUS_CONSTANT_ALPHA};function Pe(V,se,ne,_e,Se,st,mt,At,qt,ct){if(V===Ni){_===!0&&(P(t.BLEND),_=!1);return}if(_===!1&&(te(t.BLEND),_=!0),V!==nb){if(V!==v||ct!==C){if((m!==po||x!==po)&&(t.blendEquation(t.FUNC_ADD),m=po,x=po),ct)switch(V){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ev:t.blendFunc(t.ONE,t.ONE);break;case tv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ev:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}h=null,g=null,y=null,w=null,T.set(0,0,0),b=0,v=V,C=ct}return}Se=Se||se,st=st||ne,mt=mt||_e,(se!==m||Se!==x)&&(t.blendEquationSeparate(pe[se],pe[Se]),m=se,x=Se),(ne!==h||_e!==g||st!==y||mt!==w)&&(t.blendFuncSeparate(ie[ne],ie[_e],ie[st],ie[mt]),h=ne,g=_e,y=st,w=mt),(At.equals(T)===!1||qt!==b)&&(t.blendColor(At.r,At.g,At.b,qt),T.copy(At),b=qt),v=V,C=!1}function ye(V,se){V.side===xr?P(t.CULL_FACE):te(t.CULL_FACE);let ne=V.side===wn;se&&(ne=!ne),Ce(ne),V.blending===zs&&V.transparent===!1?Pe(Ni):Pe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),i.setMask(V.colorWrite);const _e=V.stencilWrite;s.setTest(_e),_e&&(s.setMask(V.stencilWriteMask),s.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),s.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),at(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):P(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(V){M!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),M=V)}function Ne(V){V!==QM?(te(t.CULL_FACE),V!==S&&(V===Q_?t.cullFace(t.BACK):V===eb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):P(t.CULL_FACE),S=V}function Le(V){V!==L&&(F&&t.lineWidth(V),L=V)}function at(V,se,ne){V?(te(t.POLYGON_OFFSET_FILL),(O!==se||N!==ne)&&(t.polygonOffset(se,ne),O=se,N=ne)):P(t.POLYGON_OFFSET_FILL)}function D(V){V?te(t.SCISSOR_TEST):P(t.SCISSOR_TEST)}function A(V){V===void 0&&(V=t.TEXTURE0+B-1),U!==V&&(t.activeTexture(V),U=V)}function Q(V,se,ne){ne===void 0&&(U===null?ne=t.TEXTURE0+B-1:ne=U);let _e=H[ne];_e===void 0&&(_e={type:void 0,texture:void 0},H[ne]=_e),(_e.type!==V||_e.texture!==se)&&(U!==ne&&(t.activeTexture(ne),U=ne),t.bindTexture(V,se||K[V]),_e.type=V,_e.texture=se)}function oe(){const V=H[U];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(V){Z.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Z.copy(V))}function je(V){fe.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),fe.copy(V))}function nt(V,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let _e=ne.get(V);_e===void 0&&(_e=t.getUniformBlockIndex(se,V.name),ne.set(V,_e))}function Pt(V,se){const _e=l.get(se).get(V);a.get(se)!==_e&&(t.uniformBlockBinding(se,_e,V.__bindingPointIndex),a.set(se,_e))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,H={},u={},d=new WeakMap,f=[],p=null,_=!1,v=null,m=null,h=null,g=null,x=null,y=null,w=null,T=new it(0,0,0),b=0,C=!1,M=null,S=null,L=null,O=null,N=null,Z.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),i.reset(),o.reset(),s.reset()}return{buffers:{color:i,depth:o,stencil:s},enable:te,disable:P,bindFramebuffer:ee,drawBuffers:le,useProgram:z,setBlending:Pe,setMaterial:ye,setFlipSided:Ce,setCullFace:Ne,setLineWidth:Le,setPolygonOffset:at,setScissorTest:D,activeTexture:A,bindTexture:Q,unbindTexture:oe,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:rt,texImage3D:Ue,updateUBOMapping:nt,uniformBlockBinding:Pt,texStorage2D:he,texStorage3D:Ie,texSubImage2D:De,texSubImage3D:Ee,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Me,viewport:je,reset:Ye}}function _3(t,e,n,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,A){return p?new OffscreenCanvas(D,A):Fu("canvas")}function v(D,A,Q){let oe=1;const ae=at(D);if((ae.width>Q||ae.height>Q)&&(oe=Q/Math.max(ae.width,ae.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(oe*ae.width),De=Math.floor(oe*ae.height);d===void 0&&(d=_(ue,De));const Ee=A?_(ue,De):d;return Ee.width=ue,Ee.height=De,Ee.getContext("2d").drawImage(D,0,0,ue,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ue+"x"+De+")."),Ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==rn&&D.minFilter!==Dn}function h(D){t.generateMipmap(D)}function g(D,A,Q,oe,ae=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=A;if(A===t.RED&&(Q===t.FLOAT&&(ue=t.R32F),Q===t.HALF_FLOAT&&(ue=t.R16F),Q===t.UNSIGNED_BYTE&&(ue=t.R8)),A===t.RED_INTEGER&&(Q===t.UNSIGNED_BYTE&&(ue=t.R8UI),Q===t.UNSIGNED_SHORT&&(ue=t.R16UI),Q===t.UNSIGNED_INT&&(ue=t.R32UI),Q===t.BYTE&&(ue=t.R8I),Q===t.SHORT&&(ue=t.R16I),Q===t.INT&&(ue=t.R32I)),A===t.RG&&(Q===t.FLOAT&&(ue=t.RG32F),Q===t.HALF_FLOAT&&(ue=t.RG16F),Q===t.UNSIGNED_BYTE&&(ue=t.RG8)),A===t.RG_INTEGER&&(Q===t.UNSIGNED_BYTE&&(ue=t.RG8UI),Q===t.UNSIGNED_SHORT&&(ue=t.RG16UI),Q===t.UNSIGNED_INT&&(ue=t.RG32UI),Q===t.BYTE&&(ue=t.RG8I),Q===t.SHORT&&(ue=t.RG16I),Q===t.INT&&(ue=t.RG32I)),A===t.RGB&&Q===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),A===t.RGBA){const De=ae?Nu:dt.getTransfer(oe);Q===t.FLOAT&&(ue=t.RGBA32F),Q===t.HALF_FLOAT&&(ue=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(ue=De===gt?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==rn&&D.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function y(D){const A=D.target;A.removeEventListener("dispose",y),T(A),A.isVideoTexture&&u.delete(A)}function w(D){const A=D.target;A.removeEventListener("dispose",w),C(A)}function T(D){const A=r.get(D);if(A.__webglInit===void 0)return;const Q=D.source,oe=f.get(Q);if(oe){const ae=oe[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(D),Object.keys(oe).length===0&&f.delete(Q)}r.remove(D)}function b(D){const A=r.get(D);t.deleteTexture(A.__webglTexture);const Q=D.source,oe=f.get(Q);delete oe[A.__cacheKey],s.memory.textures--}function C(D){const A=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ae=0;ae<A.__webglFramebuffer[oe].length;ae++)t.deleteFramebuffer(A.__webglFramebuffer[oe][ae]);else t.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)t.deleteFramebuffer(A.__webglFramebuffer[oe]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=D.textures;for(let oe=0,ae=Q.length;oe<ae;oe++){const ue=r.get(Q[oe]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),s.memory.textures--),r.remove(Q[oe])}r.remove(D)}let M=0;function S(){M=0}function L(){const D=M;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),M+=1,D}function O(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function N(D,A){const Q=r.get(D);if(D.isVideoTexture&&Ne(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,D,A);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+A)}function B(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){Z(Q,D,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+A)}function F(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){Z(Q,D,A);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+A)}function q(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){fe(Q,D,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+A)}const W={[pp]:t.REPEAT,[yo]:t.CLAMP_TO_EDGE,[mp]:t.MIRRORED_REPEAT},U={[rn]:t.NEAREST,[Ob]:t.NEAREST_MIPMAP_NEAREST,[sc]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[pf]:t.LINEAR_MIPMAP_NEAREST,[Eo]:t.LINEAR_MIPMAP_LINEAR},H={[Kb]:t.NEVER,[nA]:t.ALWAYS,[Zb]:t.LESS,[nE]:t.LEQUAL,[Jb]:t.EQUAL,[tA]:t.GEQUAL,[Qb]:t.GREATER,[eA]:t.NOTEQUAL};function X(D,A){if(A.type===ar&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===pf||A.magFilter===sc||A.magFilter===Eo||A.minFilter===Dn||A.minFilter===pf||A.minFilter===sc||A.minFilter===Eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,W[A.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,W[A.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,W[A.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,U[A.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,U[A.minFilter]),A.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,H[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==sc&&A.minFilter!==Eo||A.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function re(D,A){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",y));const oe=A.source;let ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));const ue=O(A);if(ue!==D.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),ae[ue].usedTimes++;const De=ae[D.__cacheKey];De!==void 0&&(ae[D.__cacheKey].usedTimes--,De.usedTimes===0&&b(A)),D.__cacheKey=ue,D.__webglTexture=ae[ue].texture}return Q}function Z(D,A,Q){let oe=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=t.TEXTURE_3D);const ae=re(D,A),ue=A.source;n.bindTexture(oe,D.__webglTexture,t.TEXTURE0+Q);const De=r.get(ue);if(ue.version!==De.__version||ae===!0){n.activeTexture(t.TEXTURE0+Q);const Ee=dt.getPrimaries(dt.workingColorSpace),xe=A.colorSpace===Ei?null:dt.getPrimaries(A.colorSpace),Xe=A.colorSpace===Ei||Ee===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let he=v(A.image,!1,i.maxTextureSize);he=Le(A,he);const Ie=o.convert(A.format,A.colorSpace),rt=o.convert(A.type);let Ue=g(A.internalFormat,Ie,rt,A.colorSpace,A.isVideoTexture);X(oe,A);let Me;const je=A.mipmaps,nt=A.isVideoTexture!==!0,Pt=De.__version===void 0||ae===!0,Ye=ue.dataReady,V=x(A,he);if(A.isDepthTexture)Ue=t.DEPTH_COMPONENT16,A.type===ar?Ue=t.DEPTH_COMPONENT32F:A.type===Zs?Ue=t.DEPTH_COMPONENT24:A.type===Ul&&(Ue=t.DEPTH24_STENCIL8),Pt&&(nt?n.texStorage2D(t.TEXTURE_2D,1,Ue,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ue,he.width,he.height,0,Ie,rt,null));else if(A.isDataTexture)if(je.length>0){nt&&Pt&&n.texStorage2D(t.TEXTURE_2D,V,Ue,je[0].width,je[0].height);for(let se=0,ne=je.length;se<ne;se++)Me=je[se],nt?Ye&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Ie,rt,Me.data):n.texImage2D(t.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Ie,rt,Me.data);A.generateMipmaps=!1}else nt?(Pt&&n.texStorage2D(t.TEXTURE_2D,V,Ue,he.width,he.height),Ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Ie,rt,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,he.width,he.height,0,Ie,rt,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Ue,je[0].width,je[0].height,he.depth);for(let se=0,ne=je.length;se<ne;se++)Me=je[se],A.format!==Ln?Ie!==null?nt?Ye&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Ie,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ue,Me.width,Me.height,he.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,he.depth,Ie,rt,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ue,Me.width,Me.height,he.depth,0,Ie,rt,Me.data)}else{nt&&Pt&&n.texStorage2D(t.TEXTURE_2D,V,Ue,je[0].width,je[0].height);for(let se=0,ne=je.length;se<ne;se++)Me=je[se],A.format!==Ln?Ie!==null?nt?Ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Ie,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Ye&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Me.width,Me.height,Ie,rt,Me.data):n.texImage2D(t.TEXTURE_2D,se,Ue,Me.width,Me.height,0,Ie,rt,Me.data)}else if(A.isDataArrayTexture)nt?(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,Ue,he.width,he.height,he.depth),Ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ie,rt,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Ie,rt,he.data);else if(A.isData3DTexture)nt?(Pt&&n.texStorage3D(t.TEXTURE_3D,V,Ue,he.width,he.height,he.depth),Ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ie,rt,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Ie,rt,he.data);else if(A.isFramebufferTexture){if(Pt)if(nt)n.texStorage2D(t.TEXTURE_2D,V,Ue,he.width,he.height);else{let se=he.width,ne=he.height;for(let _e=0;_e<V;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ue,se,ne,0,Ie,rt,null),se>>=1,ne>>=1}}else if(je.length>0){if(nt&&Pt){const se=at(je[0]);n.texStorage2D(t.TEXTURE_2D,V,Ue,se.width,se.height)}for(let se=0,ne=je.length;se<ne;se++)Me=je[se],nt?Ye&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ie,rt,Me):n.texImage2D(t.TEXTURE_2D,se,Ue,Ie,rt,Me);A.generateMipmaps=!1}else if(nt){if(Pt){const se=at(he);n.texStorage2D(t.TEXTURE_2D,V,Ue,se.width,se.height)}Ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,rt,he)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Ie,rt,he);m(A)&&h(oe),De.__version=ue.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function fe(D,A,Q){if(A.image.length!==6)return;const oe=re(D,A),ae=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Q);const ue=r.get(ae);if(ae.version!==ue.__version||oe===!0){n.activeTexture(t.TEXTURE0+Q);const De=dt.getPrimaries(dt.workingColorSpace),Ee=A.colorSpace===Ei?null:dt.getPrimaries(A.colorSpace),xe=A.colorSpace===Ei||De===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let ne=0;ne<6;ne++)!Xe&&!he?Ie[ne]=v(A.image[ne],!0,i.maxCubemapSize):Ie[ne]=he?A.image[ne].image:A.image[ne],Ie[ne]=Le(A,Ie[ne]);const rt=Ie[0],Ue=o.convert(A.format,A.colorSpace),Me=o.convert(A.type),je=g(A.internalFormat,Ue,Me,A.colorSpace),nt=A.isVideoTexture!==!0,Pt=ue.__version===void 0||oe===!0,Ye=ae.dataReady;let V=x(A,rt);X(t.TEXTURE_CUBE_MAP,A);let se;if(Xe){nt&&Pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,je,rt.width,rt.height);for(let ne=0;ne<6;ne++){se=Ie[ne].mipmaps;for(let _e=0;_e<se.length;_e++){const Se=se[_e];A.format!==Ln?Ue!==null?nt?Ye&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Se.width,Se.height,Ue,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,je,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Se.width,Se.height,Ue,Me,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,je,Se.width,Se.height,0,Ue,Me,Se.data)}}}else{if(se=A.mipmaps,nt&&Pt){se.length>0&&V++;const ne=at(Ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){nt?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie[ne].width,Ie[ne].height,Ue,Me,Ie[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Ie[ne].width,Ie[ne].height,0,Ue,Me,Ie[ne].data);for(let _e=0;_e<se.length;_e++){const st=se[_e].image[ne].image;nt?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,st.width,st.height,Ue,Me,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,je,st.width,st.height,0,Ue,Me,st.data)}}else{nt?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Me,Ie[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Ue,Me,Ie[ne]);for(let _e=0;_e<se.length;_e++){const Se=se[_e];nt?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ue,Me,Se.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,je,Ue,Me,Se.image[ne])}}}m(A)&&h(t.TEXTURE_CUBE_MAP),ue.__version=ae.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function $(D,A,Q,oe,ae,ue){const De=o.convert(Q.format,Q.colorSpace),Ee=o.convert(Q.type),xe=g(Q.internalFormat,De,Ee,Q.colorSpace);if(!r.get(A).__hasExternalTextures){const he=Math.max(1,A.width>>ue),Ie=Math.max(1,A.height>>ue);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ue,xe,he,Ie,A.depth,0,De,Ee,null):n.texImage2D(ae,ue,xe,he,Ie,0,De,Ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ae,r.get(Q).__webglTexture,0,ye(A)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,ae,r.get(Q).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(D,A,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let oe=t.DEPTH_COMPONENT24;if(Q||Ce(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ar?oe=t.DEPTH_COMPONENT32F:ae.type===Zs&&(oe=t.DEPTH_COMPONENT24));const ue=ye(A);Ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,oe,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,oe,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const oe=ye(A);Q&&Ce(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,A.width,A.height):Ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,D)}else{const oe=A.textures;for(let ae=0;ae<oe.length;ae++){const ue=oe[ae],De=o.convert(ue.format,ue.colorSpace),Ee=o.convert(ue.type),xe=g(ue.internalFormat,De,Ee,ue.colorSpace),Xe=ye(A);Q&&Ce(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,xe,A.width,A.height):Ce(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,xe,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,xe,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),N(A.depthTexture,0);const oe=r.get(A.depthTexture).__webglTexture,ae=ye(A);if(A.depthTexture.format===Fs)Ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(A.depthTexture.format===Sl)Ce(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function P(D){const A=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");te(A.__webglFramebuffer,D)}else if(Q){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]=t.createRenderbuffer(),K(A.__webglDepthbuffer[oe],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),K(A.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(D,A,Q){const oe=r.get(D);A!==void 0&&$(oe.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Q!==void 0&&P(D)}function le(D){const A=D.texture,Q=r.get(D),oe=r.get(A);D.addEventListener("dispose",w);const ae=D.textures,ue=D.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=A.version,s.memory.textures++),ue){Q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ee]=[];for(let xe=0;xe<A.mipmaps.length;xe++)Q.__webglFramebuffer[Ee][xe]=t.createFramebuffer()}else Q.__webglFramebuffer[Ee]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)Q.__webglFramebuffer[Ee]=t.createFramebuffer()}else Q.__webglFramebuffer=t.createFramebuffer();if(De)for(let Ee=0,xe=ae.length;Ee<xe;Ee++){const Xe=r.get(ae[Ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),s.memory.textures++)}if(D.samples>0&&Ce(D)===!1){Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ae.length;Ee++){const xe=ae[Ee];Q.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const Xe=o.convert(xe.format,xe.colorSpace),he=o.convert(xe.type),Ie=g(xe.internalFormat,Xe,he,xe.colorSpace,D.isXRRenderTarget===!0),rt=ye(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,Ie,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),K(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),X(t.TEXTURE_CUBE_MAP,A);for(let Ee=0;Ee<6;Ee++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)$(Q.__webglFramebuffer[Ee][xe],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xe);else $(Q.__webglFramebuffer[Ee],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(A)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let Ee=0,xe=ae.length;Ee<xe;Ee++){const Xe=ae[Ee],he=r.get(Xe);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),X(t.TEXTURE_2D,Xe),$(Q.__webglFramebuffer,D,Xe,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),m(Xe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let Ee=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,oe.__webglTexture),X(Ee,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)$(Q.__webglFramebuffer[xe],D,A,t.COLOR_ATTACHMENT0,Ee,xe);else $(Q.__webglFramebuffer,D,A,t.COLOR_ATTACHMENT0,Ee,0);m(A)&&h(Ee),n.unbindTexture()}D.depthBuffer&&P(D)}function z(D){const A=D.textures;for(let Q=0,oe=A.length;Q<oe;Q++){const ae=A[Q];if(m(ae)){const ue=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,De=r.get(ae).__webglTexture;n.bindTexture(ue,De),h(ue),n.unbindTexture()}}}const pe=[],ie=[];function Pe(D){if(D.samples>0){if(Ce(D)===!1){const A=D.textures,Q=D.width,oe=D.height;let ae=t.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=r.get(D),Ee=A.length>1;if(Ee)for(let xe=0;xe<A.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);const Xe=r.get(A[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,ae,t.NEAREST),l===!0&&(pe.length=0,ie.length=0,pe.push(t.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pe.push(ue),ie.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let xe=0;xe<A.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);const Xe=r.get(A[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function ye(D){return Math.min(i.maxSamples,D.samples)}function Ce(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(D){const A=s.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Le(D,A){const Q=D.colorSpace,oe=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Zi&&Q!==Ei&&(dt.getTransfer(Q)===gt?(oe!==Ln||ae!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=ee,this.setupRenderTarget=le,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ce}function v3(t,e){function n(r,i=Ei){let o;const s=dt.getTransfer(i);if(r===Gi)return t.UNSIGNED_BYTE;if(r===K9)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Z9)return t.UNSIGNED_SHORT_5_5_5_1;if(r===kb)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===zb)return t.BYTE;if(r===Fb)return t.SHORT;if(r===Y9)return t.UNSIGNED_SHORT;if(r===q9)return t.INT;if(r===Zs)return t.UNSIGNED_INT;if(r===ar)return t.FLOAT;if(r===pd)return t.HALF_FLOAT;if(r===Bb)return t.ALPHA;if(r===$b)return t.RGB;if(r===Ln)return t.RGBA;if(r===Vb)return t.LUMINANCE;if(r===Gb)return t.LUMINANCE_ALPHA;if(r===Fs)return t.DEPTH_COMPONENT;if(r===Sl)return t.DEPTH_STENCIL;if(r===Hb)return t.RED;if(r===J9)return t.RED_INTEGER;if(r===Wb)return t.RG;if(r===Q9)return t.RG_INTEGER;if(r===eE)return t.RGBA_INTEGER;if(r===mf||r===_f||r===vf||r===gf)if(s===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===mf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_f)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===mf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_f)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vf)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rv||r===iv||r===ov||r===sv)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rv)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===iv)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ov)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sv)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===av||r===lv||r===cv)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===av||r===lv)return s===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===cv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uv||r===dv||r===fv||r===hv||r===pv||r===mv||r===_v||r===vv||r===gv||r===xv||r===yv||r===Ev||r===Sv||r===Tv)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_v)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ev)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tv)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xf||r===wv||r===Mv)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===xf)return s===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wv)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mv)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xb||r===bv||r===Av||r===Rv)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===xf)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bv)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Av)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rv)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ul?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class g3 extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rc extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x3={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,r),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x3)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E3=`
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

}`;class S3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new hn,o=e.properties.get(i);o.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,i=new Ar({vertexShader:y3,fragmentShader:E3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new xt(new Vo(20,20),i)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class T3 extends $o{constructor(e,n){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=new S3,m=n.getContextAttributes();let h=null,g=null;const x=[],y=[],w=new ge;let T=null;const b=new xn;b.layers.enable(1),b.viewport=new $t;const C=new xn;C.layers.enable(2),C.viewport=new $t;const M=[b,C],S=new g3;S.layers.enable(1),S.layers.enable(2);let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=x[$];return K===void 0&&(K=new Hf,x[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=x[$];return K===void 0&&(K=new Hf,x[$]=K),K.getGripSpace()},this.getHand=function($){let K=x[$];return K===void 0&&(K=new Hf,x[$]=K),K.getHandSpace()};function N($){const K=y.indexOf($.inputSource);if(K===-1)return;const te=x[K];te!==void 0&&(te.update($.inputSource,$.frame,c||s),te.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",F);for(let $=0;$<x.length;$++){const K=y[$];K!==null&&(y[$]=null,x[$].disconnect(K))}L=null,O=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,i=null,g=null,fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,n,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Hi(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,te=null,P=null;m.depth&&(P=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=m.stencil?Sl:Fs,te=m.stencil?Ul:Zs);const ee={colorFormat:n.RGBA8,depthFormat:P,scaleFactor:o};d=new XRWebGLBinding(i,n),f=d.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Hi(f.textureWidth,f.textureHeight,{format:Ln,type:Gi,depthTexture:new mE(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F($){for(let K=0;K<$.removed.length;K++){const te=$.removed[K],P=y.indexOf(te);P>=0&&(y[P]=null,x[P].disconnect(te))}for(let K=0;K<$.added.length;K++){const te=$.added[K];let P=y.indexOf(te);if(P===-1){for(let le=0;le<x.length;le++)if(le>=y.length){y.push(te),P=le;break}else if(y[le]===null){y[le]=te,P=le;break}if(P===-1)break}const ee=x[P];ee&&ee.connect(te)}}const q=new k,W=new k;function U($,K,te){q.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(te.matrixWorld);const P=q.distanceTo(W),ee=K.projectionMatrix.elements,le=te.projectionMatrix.elements,z=ee[14]/(ee[10]-1),pe=ee[14]/(ee[10]+1),ie=(ee[9]+1)/ee[5],Pe=(ee[9]-1)/ee[5],ye=(ee[8]-1)/ee[0],Ce=(le[8]+1)/le[0],Ne=z*ye,Le=z*Ce,at=P/(-ye+Ce),D=at*-ye;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(D),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const A=z+at,Q=pe+at,oe=Ne-D,ae=Le+(P-D),ue=ie*pe/Q*A,De=Pe*pe/Q*A;$.projectionMatrix.makePerspective(oe,ae,ue,De,A,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function H($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;v.texture!==null&&($.near=v.depthNear,$.far=v.depthFar),S.near=C.near=b.near=$.near,S.far=C.far=b.far=$.far,(L!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,O=S.far,b.near=L,b.far=O,C.near=L,C.far=O,b.updateProjectionMatrix(),C.updateProjectionMatrix(),$.updateProjectionMatrix());const K=$.parent,te=S.cameras;H(S,K);for(let P=0;P<te.length;P++)H(te[P],K);te.length===2?U(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),X($,S,K)};function X($,K,te){te===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null};let re=null;function Z($,K){if(u=K.getViewerPose(c||s),_=K,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let P=!1;te.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let le=0;le<te.length;le++){const z=te[le];let pe=null;if(p!==null)pe=p.getViewport(z);else{const Pe=d.getViewSubImage(f,z);pe=Pe.viewport,le===0&&(e.setRenderTargetTextures(g,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(g))}let ie=M[le];ie===void 0&&(ie=new xn,ie.layers.enable(le),ie.viewport=new $t,M[le]=ie),ie.matrix.fromArray(z.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(z.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(pe.x,pe.y,pe.width,pe.height),le===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),P===!0&&S.cameras.push(ie)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const le=d.getDepthInformation(te[0]);le&&le.isValid&&le.texture&&v.init(e,le,i.renderState)}}for(let te=0;te<x.length;te++){const P=y[te],ee=x[te];P!==null&&ee!==void 0&&ee.update(P,K,c||s)}v.render(e,S),re&&re($,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),_=null}const fe=new hE;fe.setAnimationLoop(Z),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const so=new br,w3=new Mt;function M3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,uE(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,g,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),d(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(o(m,h),_(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),v(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===wn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===wn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,y=g.envMapRotation;if(x&&(m.envMap.value=x,so.copy(y),so.x*=-1,so.y*=-1,so.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),m.envMapRotation.value.setFromMatrix4(w3.makeRotationFromEuler(so)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function b3(t,e,n,r){let i={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;r.uniformBlockBinding(g,y)}function c(g,x){let y=i[g.id];y===void 0&&(_(g),y=u(g),i[g.id]=y,g.addEventListener("dispose",m));const w=x.program;r.updateUBOMapping(g,w);const T=e.render.frame;o[g.id]!==T&&(f(g),o[g.id]=T)}function u(g){const x=d();g.__bindingPointIndex=x;const y=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=i[g.id],y=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,b=y.length;T<b;T++){const C=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,S=C.length;M<S;M++){const L=C[M];if(p(L,T,M,w)===!0){const O=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let F=0;F<N.length;F++){const q=N[F],W=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,O+B,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,w){const T=g.value,b=x+"_"+y;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const C=w[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(g){const x=g.uniforms;let y=0;const w=16;for(let b=0,C=x.length;b<C;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,L=M.length;S<L;S++){const O=M[S],N=Array.isArray(O.value)?O.value:[O.value];for(let B=0,F=N.length;B<F;B++){const q=N[B],W=v(q),U=y%w;U!==0&&w-U<W.boundary&&(y+=w-U),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=W.storage}}}const T=y%w;return T>0&&(y+=w-T),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function h(){for(const g in i)t.deleteBuffer(i[g]);s=[],i={},o={}}return{bind:l,update:c,dispose:h}}class A3{constructor(e={}){const{canvas:n=xA(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_r,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const x=this;let y=!1,w=0,T=0,b=null,C=-1,M=null;const S=new $t,L=new $t;let O=null;const N=new it(0);let B=0,F=n.width,q=n.height,W=1,U=null,H=null;const X=new $t(0,0,F,q),re=new $t(0,0,F,q);let Z=!1;const fe=new em;let $=!1,K=!1;const te=new Mt,P=new k,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return b===null?W:1}let z=r;function pe(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Y0}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",ne,!1),z===null){const G="webgl2";if(z=pe(G,R),z===null)throw pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Pe,ye,Ce,Ne,Le,at,D,A,Q,oe,ae,ue,De,Ee,xe,Xe,he,Ie,rt,Ue,Me,je,nt;function Pt(){ie=new U2(z),ie.init(),Me=new v3(z,ie),Pe=new C2(z,ie,e,Me),ye=new m3(z),Ce=new F2(z),Ne=new t3,Le=new _3(z,ie,ye,Ne,Pe,Me,Ce),at=new I2(x),D=new L2(x),A=new WA(z),je=new A2(z,A),Q=new O2(z,A,Ce,je),oe=new B2(z,Q,A,Ce),Ie=new k2(z,Pe,Le),xe=new P2(Ne),ae=new e3(x,at,D,ie,Pe,je,xe),ue=new M3(x,Ne),De=new r3,Ee=new c3(ie),he=new b2(x,at,D,ye,oe,f,l),Xe=new p3(x,oe,Pe),nt=new b3(z,Ce,Pe,ye),rt=new R2(z,ie,Ce),Ue=new z2(z,ie,Ce),Ce.programs=ae.programs,x.capabilities=Pe,x.extensions=ie,x.properties=Ne,x.renderLists=De,x.shadowMap=Xe,x.state=ye,x.info=Ce}Pt();const Ye=new T3(x,z);this.xr=Ye,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,q,!1))},this.getSize=function(R){return R.set(F,q)},this.setSize=function(R,G,J=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,q=G,n.width=Math.floor(R*W),n.height=Math.floor(G*W),J===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*W,q*W).floor()},this.setDrawingBufferSize=function(R,G,J){F=R,q=G,W=J,n.width=Math.floor(R*J),n.height=Math.floor(G*J),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,G,J,j){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,G,J,j),ye.viewport(S.copy(X).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,G,J,j){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,G,J,j),ye.scissor(L.copy(re).multiplyScalar(W).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(R){ye.setScissorTest(Z=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(R=!0,G=!0,J=!0){let j=0;if(R){let Y=!1;if(b!==null){const ve=b.texture.format;Y=ve===eE||ve===Q9||ve===J9}if(Y){const ve=b.texture.type,be=ve===Gi||ve===Zs||ve===Y9||ve===Ul||ve===K9||ve===Z9,Ae=he.getClearColor(),Oe=he.getClearAlpha(),Be=Ae.r,Ge=Ae.g,Ze=Ae.b;be?(p[0]=Be,p[1]=Ge,p[2]=Ze,p[3]=Oe,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Be,_[1]=Ge,_[2]=Ze,_[3]=Oe,z.clearBufferiv(z.COLOR,0,_))}else j|=z.COLOR_BUFFER_BIT}G&&(j|=z.DEPTH_BUFFER_BIT),J&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),De.dispose(),Ee.dispose(),Ne.dispose(),at.dispose(),D.dispose(),oe.dispose(),je.dispose(),nt.dispose(),ae.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",ct),Ye.removeEventListener("sessionend",hr),ln.stop()};function V(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ce.autoReset,G=Xe.enabled,J=Xe.autoUpdate,j=Xe.needsUpdate,Y=Xe.type;Pt(),Ce.autoReset=R,Xe.enabled=G,Xe.autoUpdate=J,Xe.needsUpdate=j,Xe.type=Y}function ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const G=R.target;G.removeEventListener("dispose",_e),Se(G)}function Se(R){st(R),Ne.remove(R)}function st(R){const G=Ne.get(R).programs;G!==void 0&&(G.forEach(function(J){ae.releaseProgram(J)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,J,j,Y,ve){G===null&&(G=ee);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=hT(R,G,J,j,Y);ye.setMaterial(j,be);let Oe=J.index,Be=1;if(j.wireframe===!0){if(Oe=Q.getWireframeAttribute(J),Oe===void 0)return;Be=2}const Ge=J.drawRange,Ze=J.attributes.position;let Dt=Ge.start*Be,Kt=(Ge.start+Ge.count)*Be;ve!==null&&(Dt=Math.max(Dt,ve.start*Be),Kt=Math.min(Kt,(ve.start+ve.count)*Be)),Oe!==null?(Dt=Math.max(Dt,0),Kt=Math.min(Kt,Oe.count)):Ze!=null&&(Dt=Math.max(Dt,0),Kt=Math.min(Kt,Ze.count));const Mn=Kt-Dt;if(Mn<0||Mn===1/0)return;je.setup(Y,j,Ae,J,Oe);let Nr,lt=rt;if(Oe!==null&&(Nr=A.get(Oe),lt=Ue,lt.setIndex(Nr)),Y.isMesh)j.wireframe===!0?(ye.setLineWidth(j.wireframeLinewidth*le()),lt.setMode(z.LINES)):lt.setMode(z.TRIANGLES);else if(Y.isLine){let $e=j.linewidth;$e===void 0&&($e=1),ye.setLineWidth($e*le()),Y.isLineSegments?lt.setMode(z.LINES):Y.isLineLoop?lt.setMode(z.LINE_LOOP):lt.setMode(z.LINE_STRIP)}else Y.isPoints?lt.setMode(z.POINTS):Y.isSprite&&lt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)lt.renderInstances(Dt,Mn,Y.count);else if(J.isInstancedBufferGeometry){const $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ga=Math.min(J.instanceCount,$e);lt.renderInstances(Dt,Mn,ga)}else lt.render(Dt,Mn)};function mt(R,G,J){R.transparent===!0&&R.side===xr&&R.forceSinglePass===!1?(R.side=wn,R.needsUpdate=!0,$l(R,G,J),R.side=Vi,R.needsUpdate=!0,$l(R,G,J),R.side=xr):$l(R,G,J)}this.compile=function(R,G,J=null){J===null&&(J=R),m=Ee.get(J),m.init(G),g.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const j=new Set;return R.traverse(function(Y){const ve=Y.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Ae=ve[be];mt(Ae,J,Y),j.add(Ae)}else mt(ve,J,Y),j.add(ve)}),g.pop(),m=null,j},this.compileAsync=function(R,G,J=null){const j=this.compile(R,G,J);return new Promise(Y=>{function ve(){if(j.forEach(function(be){Ne.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){Y(R);return}setTimeout(ve,10)}ie.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let At=null;function qt(R){At&&At(R)}function ct(){ln.stop()}function hr(){ln.start()}const ln=new hE;ln.setAnimationLoop(qt),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(R){At=R,Ye.setAnimationLoop(R),R===null?ln.stop():ln.start()},Ye.addEventListener("sessionstart",ct),Ye.addEventListener("sessionend",hr),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(G),G=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,b),m=Ee.get(R,g.length),m.init(G),g.push(m),te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(te),K=this.localClippingEnabled,$=xe.init(this.clippingPlanes,K),v=De.get(R,h.length),v.init(),h.push(v),Om(R,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(U,H);const J=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1;J&&he.addToRenderList(v,R),this.info.render.frame++,$===!0&&xe.beginShadows();const j=m.state.shadowsArray;Xe.render(j,R,G),$===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,ve=v.transmissive;if(m.setupLights(x._useLegacyLights),G.isArrayCamera){const be=G.cameras;if(ve.length>0)for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];Fm(Y,ve,R,Be)}J&&he.render(R);for(let Ae=0,Oe=be.length;Ae<Oe;Ae++){const Be=be[Ae];zm(v,R,Be,Be.viewport)}}else ve.length>0&&Fm(Y,ve,R,G),J&&he.render(R),zm(v,R,G);b!==null&&(Le.updateMultisampleRenderTarget(b),Le.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,G),je.resetDefaultState(),C=-1,M=null,g.pop(),g.length>0?(m=g[g.length-1],$===!0&&xe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Om(R,G,J,j){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){j&&P.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);const be=oe.update(R),Ae=R.material;Ae.visible&&v.push(R,be,Ae,J,P.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||fe.intersectsObject(R))){const be=oe.update(R),Ae=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),P.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),P.copy(be.boundingSphere.center)),P.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Ae)){const Oe=be.groups;for(let Be=0,Ge=Oe.length;Be<Ge;Be++){const Ze=Oe[Be],Dt=Ae[Ze.materialIndex];Dt&&Dt.visible&&v.push(R,be,Dt,J,P.z,Ze)}}else Ae.visible&&v.push(R,be,Ae,J,P.z,null)}}const ve=R.children;for(let be=0,Ae=ve.length;be<Ae;be++)Om(ve[be],G,J,j)}function zm(R,G,J,j){const Y=R.opaque,ve=R.transmissive,be=R.transparent;m.setupLightsView(J),$===!0&&xe.setGlobalState(x.clippingPlanes,J),j&&ye.viewport(S.copy(j)),Y.length>0&&Bl(Y,G,J),ve.length>0&&Bl(ve,G,J),be.length>0&&Bl(be,G,J),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Fm(R,G,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Hi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?pd:Gi,minFilter:Eo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[j.id],be=j.viewport||S;ve.setSize(be.z,be.w);const Ae=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(N),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Oe=x.toneMapping;x.toneMapping=Li;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),$===!0&&xe.setGlobalState(x.clippingPlanes,j),Bl(R,J,j),Le.updateMultisampleRenderTarget(ve),Le.updateRenderTargetMipmap(ve),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ze=0,Dt=G.length;Ze<Dt;Ze++){const Kt=G[Ze],Mn=Kt.object,Nr=Kt.geometry,lt=Kt.material,$e=Kt.group;if(lt.side===xr&&Mn.layers.test(j.layers)){const ga=lt.side;lt.side=wn,lt.needsUpdate=!0,km(Mn,J,j,Nr,lt,$e),lt.side=ga,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Le.updateMultisampleRenderTarget(ve),Le.updateRenderTargetMipmap(ve))}x.setRenderTarget(Ae),x.setClearColor(N,B),Be!==void 0&&(j.viewport=Be),x.toneMapping=Oe}function Bl(R,G,J){const j=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,ve=R.length;Y<ve;Y++){const be=R[Y],Ae=be.object,Oe=be.geometry,Be=j===null?be.material:j,Ge=be.group;Ae.layers.test(J.layers)&&km(Ae,G,J,Oe,Be,Ge)}}function km(R,G,J,j,Y,ve){R.onBeforeRender(x,G,J,j,Y,ve),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(x,G,J,j,R,ve),Y.transparent===!0&&Y.side===xr&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,x.renderBufferDirect(J,G,j,Y,R,ve),Y.side=Vi,Y.needsUpdate=!0,x.renderBufferDirect(J,G,j,Y,R,ve),Y.side=xr):x.renderBufferDirect(J,G,j,Y,R,ve),R.onAfterRender(x,G,J,j,Y,ve)}function $l(R,G,J){G.isScene!==!0&&(G=ee);const j=Ne.get(R),Y=m.state.lights,ve=m.state.shadowsArray,be=Y.state.version,Ae=ae.getParameters(R,Y.state,ve,G,J),Oe=ae.getProgramCacheKey(Ae);let Be=j.programs;j.environment=R.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(R.isMeshStandardMaterial?D:at).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",_e),Be=new Map,j.programs=Be);let Ge=Be.get(Oe);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===be)return $m(R,Ae),Ge}else Ae.uniforms=ae.getUniforms(R),R.onBuild(J,Ae,x),R.onBeforeCompile(Ae,x),Ge=ae.acquireProgram(Ae,Oe),Be.set(Oe,Ge),j.uniforms=Ae.uniforms;const Ze=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=xe.uniform),$m(R,Ae),j.needsLights=mT(R),j.lightsStateVersion=be,j.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function Bm(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Qc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function $m(R,G){const J=Ne.get(R);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function hT(R,G,J,j,Y){G.isScene!==!0&&(G=ee),Le.resetTextureUnits();const ve=G.fog,be=j.isMeshStandardMaterial?G.environment:null,Ae=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zi,Oe=(j.isMeshStandardMaterial?D:at).get(j.envMap||be),Be=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ze=!!J.morphAttributes.position,Dt=!!J.morphAttributes.normal,Kt=!!J.morphAttributes.color;let Mn=Li;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mn=x.toneMapping);const Nr=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Nr!==void 0?Nr.length:0,$e=Ne.get(j),ga=m.state.lights;if($===!0&&(K===!0||R!==M)){const $n=R===M&&j.id===C;xe.setState(j,R,$n)}let Et=!1;j.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ga.state.version||$e.outputColorSpace!==Ae||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==Oe||j.fog===!0&&$e.fog!==ve||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==xe.numPlanes||$e.numIntersection!==xe.numIntersection)||$e.vertexAlphas!==Be||$e.vertexTangents!==Ge||$e.morphTargets!==Ze||$e.morphNormals!==Dt||$e.morphColors!==Kt||$e.toneMapping!==Mn||$e.morphTargetsCount!==lt)&&(Et=!0):(Et=!0,$e.__version=j.version);let eo=$e.currentProgram;Et===!0&&(eo=$l(j,G,Y));let Vm=!1,xa=!1,Ud=!1;const Zt=eo.getUniforms(),si=$e.uniforms;if(ye.useProgram(eo.program)&&(Vm=!0,xa=!0,Ud=!0),j.id!==C&&(C=j.id,xa=!0),Vm||M!==R){Zt.setValue(z,"projectionMatrix",R.projectionMatrix),Zt.setValue(z,"viewMatrix",R.matrixWorldInverse);const $n=Zt.map.cameraPosition;$n!==void 0&&$n.setValue(z,P.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xa=!0,Ud=!0)}if(Y.isSkinnedMesh){Zt.setOptional(z,Y,"bindMatrix"),Zt.setOptional(z,Y,"bindMatrixInverse");const $n=Y.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Zt.setValue(z,"boneTexture",$n.boneTexture,Le))}Y.isBatchedMesh&&(Zt.setOptional(z,Y,"batchingTexture"),Zt.setValue(z,"batchingTexture",Y._matricesTexture,Le));const Od=J.morphAttributes;if((Od.position!==void 0||Od.normal!==void 0||Od.color!==void 0)&&Ie.update(Y,J,eo),(xa||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,Zt.setValue(z,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(si.envMap.value=Oe,si.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(si.envMapIntensity.value=G.environmentIntensity),xa&&(Zt.setValue(z,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&pT(si,Ud),ve&&j.fog===!0&&ue.refreshFogUniforms(si,ve),ue.refreshMaterialUniforms(si,j,W,q,m.state.transmissionRenderTarget[R.id]),Qc.upload(z,Bm($e),si,Le)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Qc.upload(z,Bm($e),si,Le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Zt.setValue(z,"center",Y.center),Zt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Zt.setValue(z,"normalMatrix",Y.normalMatrix),Zt.setValue(z,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const $n=j.uniformsGroups;for(let zd=0,_T=$n.length;zd<_T;zd++){const Gm=$n[zd];nt.update(Gm,eo),nt.bind(Gm,eo)}}return eo}function pT(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function mT(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,G,J){Ne.get(R.texture).__webglTexture=G,Ne.get(R.depthTexture).__webglTexture=J;const j=Ne.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const J=Ne.get(R);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,J=0){b=R,w=G,T=J;let j=!0,Y=null,ve=!1,be=!1;if(R){const Oe=Ne.get(R);Oe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):Oe.__webglFramebuffer===void 0?Le.setupRenderTarget(R):Oe.__hasExternalTextures&&Le.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const Ge=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?Y=Ge[G][J]:Y=Ge[G],ve=!0):R.samples>0&&Le.useMultisampledRTT(R)===!1?Y=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?Y=Ge[J]:Y=Ge,S.copy(R.viewport),L.copy(R.scissor),O=R.scissorTest}else S.copy(X).multiplyScalar(W).floor(),L.copy(re).multiplyScalar(W).floor(),O=Z;if(ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&j&&ye.drawBuffers(R,Y),ye.viewport(S),ye.scissor(L),ye.setScissorTest(O),ve){const Oe=Ne.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,J)}else if(be){const Oe=Ne.get(R.texture),Be=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,J||0,Be)}C=-1},this.readRenderTargetPixels=function(R,G,J,j,Y,ve,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){ye.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Oe=R.texture,Be=Oe.format,Ge=Oe.type;if(!Pe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-j&&J>=0&&J<=R.height-Y&&z.readPixels(G,J,j,Y,Me.convert(Be),Me.convert(Ge),ve)}finally{const Oe=b!==null?Ne.get(b).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,G,J=0){const j=Math.pow(2,-J),Y=Math.floor(G.image.width*j),ve=Math.floor(G.image.height*j);Le.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,R.x,R.y,Y,ve),ye.unbindTexture()},this.copyTextureToTexture=function(R,G,J,j=0){const Y=G.image.width,ve=G.image.height,be=Me.convert(J.format),Ae=Me.convert(J.type);Le.setTexture2D(J,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,R.x,R.y,Y,ve,be,Ae,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,be,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,j,R.x,R.y,be,Ae,G.image),j===0&&J.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(R,G,J,j,Y=0){const ve=R.max.x-R.min.x,be=R.max.y-R.min.y,Ae=R.max.z-R.min.z,Oe=Me.convert(j.format),Be=Me.convert(j.type);let Ge;if(j.isData3DTexture)Le.setTexture3D(j,0),Ge=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Le.setTexture2DArray(j,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Ze=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Kt=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),Nr=z.getParameter(z.UNPACK_SKIP_IMAGES),lt=J.isCompressedTexture?J.mipmaps[Y]:J.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,lt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?z.texSubImage3D(Ge,Y,G.x,G.y,G.z,ve,be,Ae,Oe,Be,lt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ge,Y,G.x,G.y,G.z,ve,be,Ae,Oe,lt.data):z.texSubImage3D(Ge,Y,G.x,G.y,G.z,ve,be,Ae,Oe,Be,lt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nr),Y===0&&j.generateMipmaps&&z.generateMipmap(Ge),ye.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Le.setTextureCube(R,0):R.isData3DTexture?Le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Le.setTexture2DArray(R,0):Le.setTexture2D(R,0),ye.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,ye.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===q0?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===md?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nm extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class R3 extends hn{constructor(e=null,n=1,r=1,i,o,s,a,l,c=rn,u=rn,d,f){super(null,s,a,l,c,u,i,o,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,i=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)r=this.getPoint(s/e),o+=r.distanceTo(i),n.push(o),i=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let i=0;const o=r.length;let s;n?s=n:s=e*r[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=r[i]-s,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,r[i]===s)return i/(o-1);const u=r[i],f=r[i+1]-u,p=(s-u)/f;return(i+p)/(o-1)}getTangent(e,n){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const s=this.getPoint(i),a=this.getPoint(o),l=n||(s.isVector2?new ge:new k);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new k,i=[],o=[],s=[],a=new k,l=new Mt;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new k)}o[0]=new k,s[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,r.set(1,0,0)),d<=c&&(c=d,r.set(0,1,0)),f<=c&&r.set(0,0,1),a.crossVectors(i[0],r).normalize(),o[0].crossVectors(i[0],a),s[0].crossVectors(i[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Wt(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,_))}s[p].crossVectors(i[p],o[p])}if(n===!0){let p=Math.acos(Wt(o[0].dot(o[e]),-1,1));p/=e,i[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),s[_].crossVectors(i[_],o[_])}return{tangents:i,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EE extends Pr{constructor(e=0,n=0,r=1,i=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const r=n,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(s?o=0:o=i),this.aClockwise===!0&&!s&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return r.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C3 extends EE{constructor(e,n,r,i,o,s){super(e,n,r,r,i,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function rm(){let t=0,e=0,n=0,r=0;function i(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,r=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){i(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,d){let f=(s-o)/c-(a-o)/(c+u)+(a-s)/u,p=(a-s)/u-(l-s)/(u+d)+(l-a)/d;f*=u,p*=u,i(s,a,f,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+r*a}}}const Cc=new k,Wf=new rm,Xf=new rm,jf=new rm;class P3 extends Pr{constructor(e=[],n=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=i}getPoint(e,n=new k){const r=n,i=this.points,o=i.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%o]:(Cc.subVectors(i[0],i[1]).add(i[0]),c=Cc);const d=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?u=i[(a+2)%o]:(Cc.subVectors(i[o-1],i[o-2]).add(i[o-1]),u=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Wf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,v,m),Xf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,v,m),jf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(Wf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Xf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),jf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return r.set(Wf.calc(l),Xf.calc(l),jf.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const i=this.points[n];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xg(t,e,n,r,i){const o=(r-e)*.5,s=(i-n)*.5,a=t*t,l=t*a;return(2*n-2*r+o+s)*l+(-3*n+3*r-2*o-s)*a+o*t+n}function I3(t,e){const n=1-t;return n*n*e}function D3(t,e){return 2*(1-t)*t*e}function N3(t,e){return t*t*e}function el(t,e,n,r){return I3(t,e)+D3(t,n)+N3(t,r)}function L3(t,e){const n=1-t;return n*n*n*e}function U3(t,e){const n=1-t;return 3*n*n*t*e}function O3(t,e){return 3*(1-t)*t*t*e}function z3(t,e){return t*t*t*e}function tl(t,e,n,r,i){return L3(t,e)+U3(t,n)+O3(t,r)+z3(t,i)}class F3 extends Pr{constructor(e=new ge,n=new ge,r=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=i}getPoint(e,n=new ge){const r=n,i=this.v0,o=this.v1,s=this.v2,a=this.v3;return r.set(tl(e,i.x,o.x,s.x,a.x),tl(e,i.y,o.y,s.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k3 extends Pr{constructor(e=new k,n=new k,r=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=i}getPoint(e,n=new k){const r=n,i=this.v0,o=this.v1,s=this.v2,a=this.v3;return r.set(tl(e,i.x,o.x,s.x,a.x),tl(e,i.y,o.y,s.y,a.y),tl(e,i.z,o.z,s.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B3 extends Pr{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SE extends Pr{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $3 extends Pr{constructor(e=new ge,n=new ge,r=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new ge){const r=n,i=this.v0,o=this.v1,s=this.v2;return r.set(el(e,i.x,o.x,s.x),el(e,i.y,o.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TE extends Pr{constructor(e=new k,n=new k,r=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new k){const r=n,i=this.v0,o=this.v1,s=this.v2;return r.set(el(e,i.x,o.x,s.x),el(e,i.y,o.y,s.y),el(e,i.z,o.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V3 extends Pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const r=n,i=this.points,o=(i.length-1)*e,s=Math.floor(o),a=o-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return r.set(xg(a,l.x,c.x,u.x,d.x),xg(a,l.y,c.y,u.y,d.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const i=this.points[n];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(new ge().fromArray(i))}return this}}var vp=Object.freeze({__proto__:null,ArcCurve:C3,CatmullRomCurve3:P3,CubicBezierCurve:F3,CubicBezierCurve3:k3,EllipseCurve:EE,LineCurve:B3,LineCurve3:SE,QuadraticBezierCurve:$3,QuadraticBezierCurve3:TE,SplineCurve:V3});class G3 extends Pr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vp[r](n,e))}return this}getPoint(e,n){const r=e*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=r){const s=i[o]-r,a=this.curves[o],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let r=0,i=this.curves.length;r<i;r++)n+=this.curves[r].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let r;for(let i=0,o=this.curves;i<o.length;i++){const s=o[i],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];r&&r.equals(u)||(n.push(u),r=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const i=e.curves[n];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,r=this.curves.length;n<r;n++){const i=this.curves[n];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,r=e.curves.length;n<r;n++){const i=e.curves[n];this.curves.push(new vp[i.type]().fromJSON(i))}return this}}class vd extends qn{constructor(e=1,n=1,r=1,i=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const u=[],d=[],f=[],p=[];let _=0;const v=[],m=r/2;let h=0;g(),s===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(f,3)),this.setAttribute("uv",new on(p,2));function g(){const y=new k,w=new k;let T=0;const b=(n-e)/r;for(let C=0;C<=o;C++){const M=[],S=C/o,L=S*(n-e)+e;for(let O=0;O<=i;O++){const N=O/i,B=N*l+a,F=Math.sin(B),q=Math.cos(B);w.x=L*F,w.y=-S*r+m,w.z=L*q,d.push(w.x,w.y,w.z),y.set(F,b,q).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-S),M.push(_++)}v.push(M)}for(let C=0;C<i;C++)for(let M=0;M<o;M++){const S=v[M][C],L=v[M+1][C],O=v[M+1][C+1],N=v[M][C+1];u.push(S,L,N),u.push(L,O,N),T+=6}c.addGroup(h,T,0),h+=T}function x(y){const w=_,T=new ge,b=new k;let C=0;const M=y===!0?e:n,S=y===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const L=_;for(let O=0;O<=i;O++){const B=O/i*l+a,F=Math.cos(B),q=Math.sin(B);b.x=M*q,b.y=m*S,b.z=M*F,d.push(b.x,b.y,b.z),f.push(0,S,0),T.x=F*.5+.5,T.y=q*.5*S+.5,p.push(T.x,T.y),_++}for(let O=0;O<i;O++){const N=w+O,B=L+O;y===!0?u.push(B,B+1,N):u.push(B+1,B,N),C+=3}c.addGroup(h,C,y===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class im extends vd{constructor(e=1,n=1,r=32,i=1,o=!1,s=0,a=Math.PI*2){super(0,e,n,r,i,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new im(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qr extends qn{constructor(e=1,n=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new k,f=new k,p=[],_=[],v=[],m=[];for(let h=0;h<=r;h++){const g=[],x=h/r;let y=0;h===0&&s===0?y=.5/n:h===r&&l===Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const T=w/n;d.x=-e*Math.cos(i+T*o)*Math.sin(s+x*a),d.y=e*Math.cos(s+x*a),d.z=e*Math.sin(i+T*o)*Math.sin(s+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-x),g.push(c++)}u.push(g)}for(let h=0;h<r;h++)for(let g=0;g<n;g++){const x=u[h][g+1],y=u[h][g],w=u[h+1][g],T=u[h+1][g+1];(h!==0||s>0)&&p.push(x,y,T),(h!==r-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class om extends qn{constructor(e=new TE(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,r=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:i,closed:o};const s=e.computeFrenetFrames(n,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new k,l=new k,c=new ge;let u=new k;const d=[],f=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(f,3)),this.setAttribute("uv",new on(p,2));function v(){for(let x=0;x<n;x++)m(x);m(o===!1?n:0),g(),h()}function m(x){u=e.getPointAt(x/n,u);const y=s.normals[x],w=s.binormals[x];for(let T=0;T<=i;T++){const b=T/i*Math.PI*2,C=Math.sin(b),M=-Math.cos(b);l.x=M*y.x+C*w.x,l.y=M*y.y+C*w.y,l.z=M*y.z+C*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+r*l.x,a.y=u.y+r*l.y,a.z=u.z+r*l.z,d.push(a.x,a.y,a.z)}}function h(){for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const w=(i+1)*(x-1)+(y-1),T=(i+1)*x+(y-1),b=(i+1)*x+y,C=(i+1)*(x-1)+y;_.push(w,T,C),_.push(T,b,C)}}function g(){for(let x=0;x<=n;x++)for(let y=0;y<=i;y++)c.x=x/n,c.y=y/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new om(new vp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ui extends zl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tE,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wE extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Yf=new Mt,yg=new k,Eg=new k;class H3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new em,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;yg.setFromMatrixPosition(e.matrixWorld),n.position.copy(yg),Eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Eg),n.updateMatrixWorld(),Yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W3 extends H3{constructor(){super(new pE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ME extends wE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new W3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bE extends wE{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Sg=new Mt;class X3{constructor(e,n,r=0,i=1/0){this.ray=new sE(e,n),this.near=r,this.far=i,this.camera=null,this.layers=new Q0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Sg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sg),this}intersectObject(e,n=!0,r=[]){return gp(e,this,r,n),r.sort(Tg),r}intersectObjects(e,n=!0,r=[]){for(let i=0,o=e.length;i<o;i++)gp(e[i],this,r,n);return r.sort(Tg),r}}function Tg(t,e){return t.distance-e.distance}function gp(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const i=t.children;for(let o=0,s=i.length;o<s;o++)gp(i[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Y0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Y0);const qf={type:"change"},Kf={type:"start"},Zf={type:"end"};class AE extends $o{constructor(e,n){super();const r=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:hf.ROTATE,MIDDLE:hf.DOLLY,RIGHT:hf.PAN},this.target=new k;const o=1e-6,s=new k;let a=1,l=i.NONE,c=i.NONE,u=0,d=0,f=0;const p=new k,_=new ge,v=new ge,m=new k,h=new ge,g=new ge,x=new ge,y=new ge,w=[],T={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const P=r.domElement.getBoundingClientRect(),ee=r.domElement.ownerDocument.documentElement;r.screen.left=P.left+window.pageXOffset-ee.clientLeft,r.screen.top=P.top+window.pageYOffset-ee.clientTop,r.screen.width=P.width,r.screen.height=P.height};const b=function(){const P=new ge;return function(le,z){return P.set((le-r.screen.left)/r.screen.width,(z-r.screen.top)/r.screen.height),P}}(),C=function(){const P=new ge;return function(le,z){return P.set((le-r.screen.width*.5-r.screen.left)/(r.screen.width*.5),(r.screen.height+2*(r.screen.top-z))/r.screen.width),P}}();this.rotateCamera=function(){const P=new k,ee=new la,le=new k,z=new k,pe=new k,ie=new k;return function(){ie.set(v.x-_.x,v.y-_.y,0);let ye=ie.length();ye?(p.copy(r.object.position).sub(r.target),le.copy(p).normalize(),z.copy(r.object.up).normalize(),pe.crossVectors(z,le).normalize(),z.setLength(v.y-_.y),pe.setLength(v.x-_.x),ie.copy(z.add(pe)),P.crossVectors(ie,p).normalize(),ye*=r.rotateSpeed,ee.setFromAxisAngle(P,ye),p.applyQuaternion(ee),r.object.up.applyQuaternion(ee),m.copy(P),f=ye):!r.staticMoving&&f&&(f*=Math.sqrt(1-r.dynamicDampingFactor),p.copy(r.object.position).sub(r.target),ee.setFromAxisAngle(m,f),p.applyQuaternion(ee),r.object.up.applyQuaternion(ee)),_.copy(v)}}(),this.zoomCamera=function(){let P;l===i.TOUCH_ZOOM_PAN?(P=u/d,u=d,r.object.isPerspectiveCamera?p.multiplyScalar(P):r.object.isOrthographicCamera?(r.object.zoom=Rs.clamp(r.object.zoom/P,r.minZoom,r.maxZoom),a!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(P=1+(g.y-h.y)*r.zoomSpeed,P!==1&&P>0&&(r.object.isPerspectiveCamera?p.multiplyScalar(P):r.object.isOrthographicCamera?(r.object.zoom=Rs.clamp(r.object.zoom/P,r.minZoom,r.maxZoom),a!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),r.staticMoving?h.copy(g):h.y+=(g.y-h.y)*this.dynamicDampingFactor)},this.panCamera=function(){const P=new ge,ee=new k,le=new k;return function(){if(P.copy(y).sub(x),P.lengthSq()){if(r.object.isOrthographicCamera){const pe=(r.object.right-r.object.left)/r.object.zoom/r.domElement.clientWidth,ie=(r.object.top-r.object.bottom)/r.object.zoom/r.domElement.clientWidth;P.x*=pe,P.y*=ie}P.multiplyScalar(p.length()*r.panSpeed),le.copy(p).cross(r.object.up).setLength(P.x),le.add(ee.copy(r.object.up).setLength(P.y)),r.object.position.add(le),r.target.add(le),r.staticMoving?x.copy(y):x.add(P.subVectors(y,x).multiplyScalar(r.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!r.noZoom||!r.noPan)&&(p.lengthSq()>r.maxDistance*r.maxDistance&&(r.object.position.addVectors(r.target,p.setLength(r.maxDistance)),h.copy(g)),p.lengthSq()<r.minDistance*r.minDistance&&(r.object.position.addVectors(r.target,p.setLength(r.minDistance)),h.copy(g)))},this.update=function(){p.subVectors(r.object.position,r.target),r.noRotate||r.rotateCamera(),r.noZoom||r.zoomCamera(),r.noPan||r.panCamera(),r.object.position.addVectors(r.target,p),r.object.isPerspectiveCamera?(r.checkDistances(),r.object.lookAt(r.target),s.distanceToSquared(r.object.position)>o&&(r.dispatchEvent(qf),s.copy(r.object.position))):r.object.isOrthographicCamera?(r.object.lookAt(r.target),(s.distanceToSquared(r.object.position)>o||a!==r.object.zoom)&&(r.dispatchEvent(qf),s.copy(r.object.position),a=r.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,c=i.NONE,r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.up.copy(r.up0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),p.subVectors(r.object.position,r.target),r.object.lookAt(r.target),r.dispatchEvent(qf),s.copy(r.object.position),a=r.object.zoom};function M(P){r.enabled!==!1&&(w.length===0&&(r.domElement.setPointerCapture(P.pointerId),r.domElement.addEventListener("pointermove",S),r.domElement.addEventListener("pointerup",L)),fe(P),P.pointerType==="touch"?H(P):F(P))}function S(P){r.enabled!==!1&&(P.pointerType==="touch"?X(P):q(P))}function L(P){r.enabled!==!1&&(P.pointerType==="touch"?re(P):W(),$(P),w.length===0&&(r.domElement.releasePointerCapture(P.pointerId),r.domElement.removeEventListener("pointermove",S),r.domElement.removeEventListener("pointerup",L)))}function O(P){$(P)}function N(P){r.enabled!==!1&&(window.removeEventListener("keydown",N),c===i.NONE&&(P.code===r.keys[i.ROTATE]&&!r.noRotate?c=i.ROTATE:P.code===r.keys[i.ZOOM]&&!r.noZoom?c=i.ZOOM:P.code===r.keys[i.PAN]&&!r.noPan&&(c=i.PAN)))}function B(){r.enabled!==!1&&(c=i.NONE,window.addEventListener("keydown",N))}function F(P){if(l===i.NONE)switch(P.button){case r.mouseButtons.LEFT:l=i.ROTATE;break;case r.mouseButtons.MIDDLE:l=i.ZOOM;break;case r.mouseButtons.RIGHT:l=i.PAN;break}const ee=c!==i.NONE?c:l;ee===i.ROTATE&&!r.noRotate?(v.copy(C(P.pageX,P.pageY)),_.copy(v)):ee===i.ZOOM&&!r.noZoom?(h.copy(b(P.pageX,P.pageY)),g.copy(h)):ee===i.PAN&&!r.noPan&&(x.copy(b(P.pageX,P.pageY)),y.copy(x)),r.dispatchEvent(Kf)}function q(P){const ee=c!==i.NONE?c:l;ee===i.ROTATE&&!r.noRotate?(_.copy(v),v.copy(C(P.pageX,P.pageY))):ee===i.ZOOM&&!r.noZoom?g.copy(b(P.pageX,P.pageY)):ee===i.PAN&&!r.noPan&&y.copy(b(P.pageX,P.pageY))}function W(){l=i.NONE,r.dispatchEvent(Zf)}function U(P){if(r.enabled!==!1&&r.noZoom!==!0){switch(P.preventDefault(),P.deltaMode){case 2:h.y-=P.deltaY*.025;break;case 1:h.y-=P.deltaY*.01;break;default:h.y-=P.deltaY*25e-5;break}r.dispatchEvent(Kf),r.dispatchEvent(Zf)}}function H(P){switch(K(P),w.length){case 1:l=i.TOUCH_ROTATE,v.copy(C(w[0].pageX,w[0].pageY)),_.copy(v);break;default:l=i.TOUCH_ZOOM_PAN;const ee=w[0].pageX-w[1].pageX,le=w[0].pageY-w[1].pageY;d=u=Math.sqrt(ee*ee+le*le);const z=(w[0].pageX+w[1].pageX)/2,pe=(w[0].pageY+w[1].pageY)/2;x.copy(b(z,pe)),y.copy(x);break}r.dispatchEvent(Kf)}function X(P){switch(K(P),w.length){case 1:_.copy(v),v.copy(C(P.pageX,P.pageY));break;default:const ee=te(P),le=P.pageX-ee.x,z=P.pageY-ee.y;d=Math.sqrt(le*le+z*z);const pe=(P.pageX+ee.x)/2,ie=(P.pageY+ee.y)/2;y.copy(b(pe,ie));break}}function re(P){switch(w.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,v.copy(C(P.pageX,P.pageY)),_.copy(v);break;case 2:l=i.TOUCH_ZOOM_PAN;for(let ee=0;ee<w.length;ee++)if(w[ee].pointerId!==P.pointerId){const le=T[w[ee].pointerId];v.copy(C(le.x,le.y)),_.copy(v);break}break}r.dispatchEvent(Zf)}function Z(P){r.enabled!==!1&&P.preventDefault()}function fe(P){w.push(P)}function $(P){delete T[P.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee].pointerId==P.pointerId){w.splice(ee,1);return}}function K(P){let ee=T[P.pointerId];ee===void 0&&(ee=new ge,T[P.pointerId]=ee),ee.set(P.pageX,P.pageY)}function te(P){const ee=P.pointerId===w[0].pointerId?w[1]:w[0];return T[ee.pointerId]}this.dispose=function(){r.domElement.removeEventListener("contextmenu",Z),r.domElement.removeEventListener("pointerdown",M),r.domElement.removeEventListener("pointercancel",O),r.domElement.removeEventListener("wheel",U),r.domElement.removeEventListener("pointermove",S),r.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",N),window.removeEventListener("keyup",B)},this.domElement.addEventListener("contextmenu",Z),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",O),this.domElement.addEventListener("wheel",U,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",B),this.handleResize(),this.update()}}var RE={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new i(u,d||l,f),_=n?n+c:c;return l._events[_]?l._events[_].fn?l._events[_]=[l._events[_],p]:l._events[_].push(p):(l._events[_]=p,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,p=d.length,_=new Array(p);f<p;f++)_[f]=d[f].fn;return _},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,f,p,_){var v=n?n+c:c;if(!this._events[v])return!1;var m=this._events[v],h=arguments.length,g,x;if(m.fn){switch(m.once&&this.removeListener(c,m.fn,void 0,!0),h){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,d),!0;case 4:return m.fn.call(m.context,u,d,f),!0;case 5:return m.fn.call(m.context,u,d,f,p),!0;case 6:return m.fn.call(m.context,u,d,f,p,_),!0}for(x=1,g=new Array(h-1);x<h;x++)g[x-1]=arguments[x];m.fn.apply(m.context,g)}else{var y=m.length,w;for(x=0;x<y;x++)switch(m[x].once&&this.removeListener(c,m[x].fn,void 0,!0),h){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,u);break;case 3:m[x].fn.call(m[x].context,u,d);break;case 4:m[x].fn.call(m[x].context,u,d,f);break;default:if(!g)for(w=1,g=new Array(h-1);w<h;w++)g[w-1]=arguments[w];m[x].fn.apply(m[x].context,g)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,f){var p=n?n+c:c;if(!this._events[p])return this;if(!u)return s(this,p),this;var _=this._events[p];if(_.fn)_.fn===u&&(!f||_.once)&&(!d||_.context===d)&&s(this,p);else{for(var v=0,m=[],h=_.length;v<h;v++)(_[v].fn!==u||f&&!_[v].once||d&&_[v].context!==d)&&m.push(_[v]);m.length?this._events[p]=m.length===1?m[0]:m:s(this,p)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(RE);var j3=RE.exports;const Y3=Op(j3),Pc=new Y3,et={on:(t,e)=>Pc.on(t,e),once:(t,e)=>Pc.once(t,e),off:(t,e)=>Pc.off(t,e),emit:(t,e)=>Pc.emit(t,e)};Object.freeze(et);const Kn=E.createContext(),q3=({children:t})=>{const[e,n]=E.useState({UI_STATE_DATA_PHYSICS_MU:"0.1",UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY:"1.0",UI_STATE_DATA_PHYSICS_SEED_ENERGY:"0.5",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X:"1.0",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y:"1.0",UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z:"0.25",UI_STATE_DATA_PHYSICS_SEED_POSITION_X:"0.0",UI_STATE_DATA_PHYSICS_SEED_POSITION_Y:"0.0",UI_STATE_DATA_INTEGRATION_STEP_SIZE:"0.001",UI_STATE_DATA_INTEGRATION_MAX_STEPS:"25000",UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD:dd,UI_STATE_DATA_DOMAIN_MIN_X:"-8",UI_STATE_DATA_DOMAIN_MAX_X:"8",UI_STATE_DATA_DOMAIN_PIXELS_X:"400",UI_STATE_DATA_DOMAIN_MIN_Y:"-8",UI_STATE_DATA_DOMAIN_MAX_Y:"8",UI_STATE_DATA_DOMAIN_PIXELS_Y:"400",UI_STATE_DATA_ANGLE_PIXELS_X:"100",UI_STATE_DATA_ANGLE_PIXELS_Y:"100",UI_STATE_CAMERA_CONTROLS_ROTATESPEED:"1.0",UI_STATE_CAMERA_CONTROLS_PANSPEED:"1.0",UI_STATE_CAMERA_CONTROLS_ZOOMSPEED:"1.0",UI_STATE_CAMERA_NEAR:"0.01",UI_STATE_CAMERA_FAR:"100",UI_STATE_RENDERING_FTLE_TYPE:fd,UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES:"0.05",UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS:"0.01",UI_STATE_RENDERING_SCALAR_MIN:"0",UI_STATE_RENDERING_SCALAR_MAX:"10",UI_STATE_RENDERING_OPACITY:"1",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS:"0.02",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX:"0.005",UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE:"0.01",UI_STATE_RENDERING_TEXTURE_MODE:sr,UI_STATE_RENDERING_SPECIALIZED_MODE:El,UI_STATE_RENDERING_RETURN_NUMBER:j0,UI_STATE_RENDERING_DIRECTION:G9,UI_STATE_RENDERING_RAW_MODE:ud,UI_STATE_RENDERING_RAW_MODE_LAYER:"0",UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX:"0",UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX:"0",UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH:"0.01",UI_STATE_RENDERING_TUBE_MAX_SEGMENTS:"1000",UI_STATE_RENDERING_TUBE_RADIUS:"0.0025",UI_STATE_RENDERING_TUBE_NUM_SIDES:"20",UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS:"true",UI_STATE_RENDERING_TUBE_COLOR:"0x00ffff",UI_STATE_RENDERING_TUBE_ROUGHNESS:"0.75",UI_STATE_RENDERING_TUBE_EMISSIVE_INTENSITY:"0.4",UI_STATE_ACTIVE_BEHAVIOR:bo,UI_STATE_LINKED_VIEWS_ACTIVE:!0,UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY:!1,UI_STATE_AUX_CONTENT:Ll,UI_STATE_AUX_GRID_DIRECTION:$i,UI_STATE_RENDERING_SCALE_VERTICES:!1}),r={uiState:e,setUiState:i=>{console.warn("update state:",i),n({...e,...i})}};return I.jsx(Kn.Provider,{value:r,children:t})};var xp=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function Qe(){var t=new xp(3);return xp!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function K3(t){var e=t[0],n=t[1],r=t[2];return Math.hypot(e,n,r)}function Er(t,e,n){var r=new xp(3);return r[0]=t,r[1]=e,r[2]=n,r}function nr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function _n(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Rt(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function yp(t,e){var n=e[0],r=e[1],i=e[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}(function(){var t=Qe();return function(e,n,r,i,o,s){var a,l;for(n||(n=3),r||(r=0),i?l=Math.min(i*n+r,e.length):l=e.length,a=r;a<l;a+=n)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}})();function Z3(t,e=!1){const n=t[0].index!==null,r=new Set(Object.keys(t[0].attributes)),i=new Set(Object.keys(t[0].morphAttributes)),o={},s={},a=t[0].morphTargetsRelative,l=new qn;let c=0;for(let u=0;u<t.length;++u){const d=t[u];let f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.attributes[p]),f++}if(f!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const d=[];for(let f=0;f<t.length;++f){const p=t[f].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+u);u+=t[f].attributes.position.count}l.setIndex(d)}for(const u in o){const d=wg(o[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in s){const d=s[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const p=[];for(let v=0;v<s[u].length;++v)p.push(s[u][v][f]);const _=wg(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function wg(t){let e,n,r,i=-1,o=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=u.normalized),r!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*n}const s=new e(o),a=new On(s,n,r);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const d=l/n;for(let f=0,p=u.count;f<p;f++)for(let _=0;_<n;_++){const v=u.getComponent(f,_);a.setComponent(f+d,_,v)}}else s.set(u.array,l);l+=u.count*n}return i!==void 0&&(a.gpuType=i),a}const J3=t=>t[0],CE=J3`
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


`,Q3=t=>t[0],sm=Q3`

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

`;class Jf{constructor(e,n,r,i,o,s){this.position=e,this.length=n,this.radius=r,this.cone_radius_factor=i,this.cone_fraction=o,this.color_hex=s,this.list_mesh=[],this.build()}build(){var e=this.radius,n=this.cone_radius_factor,r=this.length*(1-this.cone_fraction),i=20,o=1,s=n*e,a=this.length*this.cone_fraction,l=20,c=1;this.material=new wl({color:this.color_hex}),this.cylinder_geometry=new vd(e,e,r,i,o),this.cylinder_geometry.translate(0,r/2,0),this.cylinder_mesh=new xt(this.cylinder_geometry,this.material),this.cone_geometry=new im(s,a,l,c),this.cone_geometry.translate(0,r+a/2,0),this.cone_mesh=new xt(this.cone_geometry,this.material),this.combined_geometry=Z3([this.cylinder_geometry,this.cone_geometry],!1),this.mesh=new xt(this.combined_geometry,this.material),this.list_mesh.push(this.cylinder_mesh),this.list_mesh.push(this.cone_mesh)}}class Ep{constructor(e,n,r,i,o,s,a,l){this.position=e,this.length_x=n,this.length_y=r,this.length_z=i,this.radius=o,this.cone_radius_factor=s,this.cone_fraction=a,this.theta_down=l,this.list_arrows=[];var c=!0;this.build(c)}setValues(e,n,r,i,o,s,a){this.position=e,this.length_x=n,this.length_y=r,this.length_z=i,this.radius=o,this.cone_radius_factor=s,this.cone_fraction=a,this.theta_down&&(this.position[1]+=this.length_y)}build(e,n,r,i){this.list_arrows=[],this.axes_arrow_x=new Jf(this.position,this.length_x,this.radius,this.cone_radius_factor,this.cone_fraction,n),this.list_arrows.push(this.axes_arrow_x),this.axes_arrow_y=new Jf(this.position,this.length_y,this.radius,this.cone_radius_factor,this.cone_fraction,r),this.list_arrows.push(this.axes_arrow_y),e&&(this.axes_arrow_z=new Jf(this.position,this.length_z,this.radius,this.cone_radius_factor,this.cone_fraction,i),this.axes_arrow_z.mesh.rotateX(Rs.degToRad(90)),this.list_arrows.push(this.axes_arrow_z)),this.theta_down?(this.axes_arrow_x.mesh.rotateZ(Rs.degToRad(180)),this.axes_arrow_y.mesh.rotateZ(Rs.degToRad(-90))):this.axes_arrow_x.mesh.rotateZ(Rs.degToRad(-90))}addToScene(e){for(var n=0;n<this.list_arrows.length;n++){var r=this.list_arrows[n];e.add(r.mesh),r.mesh.position.set(this.position[0],this.position[1],this.position[2])}}removefromScene(e){for(var n=0;n<this.list_arrows.length;n++){var r=this.list_arrows[n];e.remove(r.mesh)}}rebuild(e,n,r,i,o,s,a,l,c,u,d,f){this.removefromScene(r);var p=Er(o,a,0),_=s-o,v=l-a,m=Math.min(_,v)*n,h=5,g=.05;this.setValues(p,_,v,m,c,h,g),this.build(e,u,d,f),this.addToScene(r)}}class eI{constructor(e,n){console.warn("CONSTRUCTOR SpherelikeGrid"),this.scene=e,this.pixels_x=0,this.pixels_y=0,this.subdivide=!1,this.material=n}updateGrid(e,n,r){var i=e==this.subdivide&&n==this.pixels_x&&r==this.pixels_y;if(i){console.warn("SpherelikeGrid updateGrid no change");return}console.warn("SpherelikeGrid updateGrid",n,r),this.subdivide=e,this.pixels_x=n,this.pixels_y=r,this.num_cells_x=n-1,this.num_cells_y=r-1,this.num_cells=this.num_cells_x*this.num_cells_y,this.num_vertices=n*r,this.num_triangles=this.num_cells*2,e&&(this.num_vertices+=this.num_cells,this.num_triangles*=2),this.build()}build(){this.scene.remove(this.mesh);const e=new qn,n=new Float32Array(this.num_vertices*3),r=new Float32Array(this.num_vertices*2),i=Array(this.num_triangles);for(var p=0,o=0,s=0;s<this.pixels_y;s++)for(var a=0;a<this.pixels_x;a++){var l=Math.PI*(a/(this.pixels_x-1)),c=2*Math.PI*(s/(this.pixels_y-1)),u=Math.sin(l)*Math.cos(c),d=Math.sin(l)*Math.sin(c),f=Math.cos(l);n[p]=u,n[p+1]=d,n[p+2]=f,p+=3,r[o]=a/(this.pixels_x-1),r[o+1]=s/(this.pixels_y-1),o+=2}for(var p=0,s=0;s<this.num_cells_y;s++)for(var a=0;a<this.num_cells_x;a++){var _=a+s*this.pixels_x,v=_+this.pixels_x,m=v+1,h=_+1;i[p]=_,i[p+1]=h,i[p+2]=v,i[p+3]=h,i[p+4]=m,i[p+5]=v,p+=6}e.setIndex(i),e.setAttribute("position",new On(n,3)),e.setAttribute("uv",new On(r,2)),this.mesh=new xt(e,this.material),this.scene.add(this.mesh)}}function Mg(t,e,n){return Math.max(e,Math.min(t,n))}function tI(t,e,n){return Math.acos(n)}function nI(t,e,n){return Math.atan2(e,t)}class _o{constructor(){this.mu=.1,this.angular_velocity=1,this.seed_direction_x=1,this.seed_direction_y=0,this.seed_direction_z=1,this.seed_direction_theta_frac=0,this.seed_direction_phi_frac=0,this.seed_direction_theta_radians=0,this.seed_direction_phi_radians=0,this.seed_position_x=0,this.seed_position_y=0,this.seed_energy=.25,this.use_constant_velocity=!1,this.max_steps=15e3,this.step_size=.001,this.termination_method=dd,this.camera_near_plane=.001,this.camera_far_plane=25,this.scale_bodies_by_volume=!0,this.max_radius_bodies=.05,this.radius_center_of_mass=.01,this.radius_clicked_position=.025,this.radius_clicked_position_aux=.025,this.tube_radius=.0025,this.tube_num_sides=20,this.tube_num_segments=2e4,this.tube_segment_length=.001,this.tube_max_segments=1e4,this.tube_only_show_successful_returns=!0,this.activeBehavior=bo,this.activeBehaviorLastFrame=bo,this.rendering_texture_mode=sr,this.rendering_specialized_mode=ld,this.return_layer=j0,this.rendering_raw_mode=ud,this.rendering_raw_mode_layer=0,this.rendering_raw_mode_x_texture_index=0,this.rendering_raw_mode_y_texture_index=0,this.rendering_ftle_type=fd,this.scalar_min=0,this.scalar_max=1,this.opacity=1,this.linkedViewsActive=!0,this.auxGridDirection=$i,this.rendering_scale_vertices=!1,this.tube_color=65535,this.tube_roughness=.75,this.tube_emissive_intensity=.4,this.print()}getPrimaryMass(){return 1-this.mu}getSecondaryMass(){return this.mu}getPrimaryX(){return-this.mu}getSecondaryX(){return 1-this.mu}getPrimaryRadius(){return this.scale_bodies_by_volume?Math.pow(3/(4*Math.PI)*this.getPrimaryMass(),1/3)*this.max_radius_bodies:this.getPrimaryMass()*this.max_radius_bodies}getSecondaryRadius(){return this.scale_bodies_by_volume?Math.pow(3/(4*Math.PI)*this.getSecondaryMass(),1/3)*this.max_radius_bodies:this.getSecondaryMass()*this.max_radius_bodies}getCenterOfMassRadius(){return this.radius_center_of_mass}getClickedPositionRadius(e){return e==Iu?this.radius_clicked_position_aux:this.radius_clicked_position}getSphereVolume(e){return 4/3*Math.PI*e*e*e}print(){var e=this.getPrimaryRadius(),n=this.getSecondaryRadius(),r=this.getPrimaryRadius()/this.max_radius_bodies,i=this.getSecondaryRadius()/this.max_radius_bodies,o=this.getSphereVolume(e),s=this.getSphereVolume(n),a=this.getSphereVolume(r),l=this.getSphereVolume(i);console.log("primary_radius",e),console.log("secondary_radius",n),console.log("primary_radius_unscaled",r),console.log("secondary_radius_unscaled",i),console.log("primary_volume",o),console.log("secondary_volume",s),console.log("primary_volume_unscaled",a),console.log("secondary_volume_unscaled",l)}setSeedDirectionAnglesFromFrac(e,n){if(this.auxGridDirection==$i){var r=e,i=n;e=1-i,n=r}else this.auxGridDirection==Pu||console.error("setSeedDirectionAnglesFromFrac: unkonw auxGridDirection",this.auxGridDirection);var o=Math.PI*e,s=2*Math.PI*n,a=Math.sin(o)*Math.cos(s),l=Math.sin(o)*Math.sin(s),c=Math.cos(o);this.seed_direction_theta_frac=e,this.seed_direction_phi_frac=n,this.seed_direction_theta_radians=o,this.seed_direction_phi_radians=s,this.seed_direction_x=a,this.seed_direction_y=l,this.seed_direction_z=c}setSeedDirection(e,n,r){var i=Er(e,n,r);yp(i,i),e=i[0],n=i[1],r=i[2];var o=tI(e,n,r),s=nI(e,n);s<0&&(s+=2*Math.PI);var a=o/Math.PI,l=s/(2*Math.PI);this.seed_direction_theta_frac=a,this.seed_direction_phi_frac=l,this.seed_direction_theta_radians=o,this.seed_direction_phi_radians=s,this.seed_direction_x=e,this.seed_direction_y=n,this.seed_direction_z=r}static CreateOrGetInstance(){return _o.instance||(_o.instance=new _o),_o.instance}}function bg(t,e){var n=t.getBoundingClientRect(),r=Math.round(e.clientX),i=Math.round(e.clientY),o=Math.round(n.left),s=Math.round(n.top),a=Math.round(n.width),l=Math.round(n.height);return{x:(r-o)/a*2-1,y:-((i-s)/l)*2+1}}const Ag=t=>t[0];class Fl{constructor(e,n,r){this.renderer=e,this.simulationParameters=n,this.use_external_render_target=!1,this.offscreen_renderer_for_external_render_target=null,this.useAnglePlane=r}getPlaneDimensionX(){return this.useAnglePlane?this.simulationParameters.angle_pixels_x:this.simulationParameters.domain_pixels_x}getPlaneDimensionY(){return this.useAnglePlane?this.simulationParameters.angle_pixels_y:this.simulationParameters.domain_pixels_y}setExternalRenderTarget(e){this.use_external_render_target=!0,this.offscreen_renderer_for_external_render_target=e}initialize(){console.warn("INITIALIZE OffscreenRenderer"),this.width=100,this.height=100,this.updateRenderTarget(),this.bufferScene=new nm,this.bufferCamera=new xn(70,this.width/this.height,.1,100),this.bufferCamera.position.z=5,this.dummy_plane_geometry=new Vo(100,100),this.generateUniforms(),this.dummy_plane_material=new Ar({uniforms:this.uniforms,fragmentShader:this.fragmentShader(),vertexShader:this.vertexShader(),glslVersion:Ou}),console.log(this.fragmentShader()),this.dummy_plane_mesh=new xt(this.dummy_plane_geometry,this.dummy_plane_material),this.bufferScene.add(this.dummy_plane_mesh),this.compute()}updateTexturedPlane(){this.setAdditionalUniforms(),this.dummy_plane_mesh.material.uniforms.mu.value=this.simulationParameters.mu,this.dummy_plane_mesh.material.uniforms.angular_velocity.value=this.simulationParameters.angular_velocity,this.dummy_plane_mesh.material.uniforms.primary_x.value=this.simulationParameters.getPrimaryX(),this.dummy_plane_mesh.material.uniforms.secondary_x.value=this.simulationParameters.getSecondaryX(),this.dummy_plane_mesh.material.uniforms.primary_mass.value=this.simulationParameters.getPrimaryMass(),this.dummy_plane_mesh.material.uniforms.secondary_mass.value=this.simulationParameters.getSecondaryMass(),this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.x=this.simulationParameters.domain_min_x,this.dummy_plane_mesh.material.uniforms.planeCornerBL.value.y=this.simulationParameters.domain_min_y,this.dummy_plane_mesh.material.uniforms.planeDimensions.value.x=this.simulationParameters.domain_dimension_x,this.dummy_plane_mesh.material.uniforms.planeDimensions.value.y=this.simulationParameters.domain_dimension_y,this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.x=this.getPlaneDimensionX(),this.dummy_plane_mesh.material.uniforms.planeDimensionsPixel.value.y=this.getPlaneDimensionY();var e=!1;return this.getPlaneDimensionX()!=this.width&&(this.width=this.getPlaneDimensionX(),e=!0),this.getPlaneDimensionY()!=this.height&&(this.height=this.getPlaneDimensionY(),e=!0),e&&this.updateRenderTarget(),e}updateRenderTarget(){if(console.warn("UPDATE RENDER TARGET SIZE"),this.use_external_render_target)this.renderTarget=this.offscreen_renderer_for_external_render_target.renderTarget;else{var e=this.width*this.getNumPixelsPerNodeX(),n=this.height*this.getNumPixelsPerNodeY(),r=this.getNumLayers();this.renderTarget=new bA(e,n,r,{minFilter:Dn,magFilter:rn,format:Ln,type:ar});const i=e*n*r*4,o=new Float32Array(i),s=new Z0(o,e,n,r);s.format=Ln,s.type=ar,s.minFilter=Dn,s.magFilter=rn,s.unpackAlignment=1,this.renderTarget.texture=s}}compute(){this.computeLayer(0)}computeLayer(e){this.dummy_plane_mesh.material.uniforms.target_layer_index.value=e,this.renderer.setRenderTarget(this.renderTarget,e),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}computeTargetLayerAt0(e){this.dummy_plane_mesh.material.uniforms.target_layer_index.value=e,this.renderer.setRenderTarget(this.renderTarget,0),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}copyTextureToLayer(e,n){this.dummy_plane_mesh.material.uniforms.texture_input.value=e,this.dummy_plane_mesh.material.uniforms.target_layer_index.value=n,this.renderer.setRenderTarget(this.renderTarget,n),this.renderer.render(this.bufferScene,this.bufferCamera),this.renderer.setRenderTarget(null)}generateUniforms(){this.uniforms={target_layer_index:{type:"int",value:0},mu:{type:"float",value:.1},angular_velocity:{type:"float",value:1},primary_x:{type:"float",value:0},secondary_x:{type:"float",value:0},primary_mass:{type:"float",value:0},secondary_mass:{type:"float",value:0},planeCenter:{type:"vec2",value:new ge(0,0)},planeCornerBL:{type:"vec2",value:new ge(-1,-1)},planeDimensions:{type:"vec2",value:new ge(2,2)},planeDimensionsPixel:{type:"vec2",value:new ge(100,100)}},this.addAdditionalUniforms()}vertexShader(){return Ag`
        varying vec3 vUv; 
    
        void main() {
          vUv = position; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
        `}fragmentShader(){return""+this.getUniformsString()+`
`+this.fragmentShaderAdditionalMethodDeclarations()+CE+`
`+sm+`
`+Ag`
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
`)}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}getNumLayers(){return 1}fragmentShaderMethodComputation(){return""}addAdditionalUniforms(){}setAdditionalUniforms(){}fragmentShaderAdditionalMethodDeclarations(){return""}fragmentShaderAdditionalMethodDefinitions(){return""}}const rI=t=>t[0];class Rg extends Fl{constructor(e,n,r){super(e,n,r)}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 3}addAdditionalUniforms(){this.uniforms.texture_input={type:"sampler3D",value:null}}setAdditionalUniforms(){}fragmentShaderMethodComputation(){return rI`
            ivec3 pointer = ivec3(int(floor(x_pixel)), int(floor(y_pixel)), 0);
            outputColor = texelFetch(texture_input, pointer, 0);       
            //outputColor = vec4(1.0, 0.0, 0.0, 1.0);      
        `}}const Qf=t=>t[0];class Cg extends Fl{constructor(e,n,r,i){super(e,n,r),this.mode_constant_direction=i}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.seed_direction={type:"vec3",value:new k(0,0,0)},this.uniforms.seed_position={type:"vec3",value:new k(0,0,0)},this.uniforms.seed_energy={type:"float",value:1},this.uniforms.use_constant_velocity={type:"bool",value:!1},this.uniforms.mode_constant_direction={type:"bool",value:!0}}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.seed_direction.value.x=this.simulationParameters.seed_direction_x,this.dummy_plane_mesh.material.uniforms.seed_direction.value.y=this.simulationParameters.seed_direction_y,this.dummy_plane_mesh.material.uniforms.seed_direction.value.z=this.simulationParameters.seed_direction_z,this.dummy_plane_mesh.material.uniforms.seed_position.value.x=this.simulationParameters.seed_position_x,this.dummy_plane_mesh.material.uniforms.seed_position.value.y=this.simulationParameters.seed_position_y,this.dummy_plane_mesh.material.uniforms.seed_energy.value=this.simulationParameters.seed_energy,this.dummy_plane_mesh.material.uniforms.use_constant_velocity.value=this.simulationParameters.use_constant_velocity,this.dummy_plane_mesh.material.uniforms.mode_constant_direction.value=this.mode_constant_direction}fragmentShaderMethodComputation(){return Qf`
            if(mode_constant_direction){
                computeSeedConstantDirection(virtual_texture_x, virtual_texture_y, world_x, world_y);
            }
            else{
                computeSeedConstantPosition(virtual_texture_x, virtual_texture_y, theta_radians, phi_radians);
            }    
        `}fragmentShaderAdditionalMethodDeclarations(){return Qf`
        void computeSeedConstantDirection(int virtual_texture_x, int virtual_texture_y, float world_x, float world_y);
        void computeSeedConstantPosition(int virtual_texture_x, int virtual_texture_y, float theta_radians, float phi_radians);
        float calculateHamiltonian(float x, float y, float z, float px, float py, float pz, float mu, float n);
        float calculateUeff(float x, float y, float z, float mu);
        bool allowStart(float a);
        `}fragmentShaderAdditionalMethodDefinitions(){return Qf`

        void computeSeedConstantDirection(int virtual_texture_x, int virtual_texture_y, float world_x, float world_y){
            float x = world_x;
            float y = world_y;
            float z = 0.0;
            float a = 1.0;
            bool a_is_real = true;
            vec3 seed_velocity;

            if(use_constant_velocity){
                //if set to true, use constant velocity
                seed_velocity = normalize(seed_direction) * seed_energy;//TODO placeholder
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
                float root = n*n*ydxminusxdy*ydxminusxdy - 2.0*(phi-H);
                float R = sqrt(root);

                float a1 = L + R;
                float a2 = L - R;
                a = max(a1, a2);
                a_is_real = root >= 0.0;

                seed_velocity = vec3(a*dir_x, a*dir_y, a*dir_z);
            }  

            //debug: hamiltonian
            float H = calculateHamiltonian(x, y, z, seed_velocity.x, seed_velocity.y, seed_velocity.z, mu, angular_velocity);
            float Ueff = calculateUeff(x, y, z, mu);

            if(virtual_texture_y == 0){                
                if(virtual_texture_x == 0){
                    //POSITION OUTPUT
                    outputColor = vec4(x, y, 0.0, H);
                }        
                if(virtual_texture_x == 1){
                    //VELOCITY OUTPUT
                    outputColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, H);                                      
                }
            }
            else{
                if(virtual_texture_x == 0){
                    //first value is "success" flag --> if this is 0, we do not start the integration
                    bool allow_start = allowStart(a);
                    outputColor = vec4(allow_start, 0.0, 0.0, 0.0);
                }
                else{
                    outputColor = vec4(a, a_is_real, Ueff, 0.0);  
                }         
            }
        }

        void computeSeedConstantPosition(int virtual_texture_x, int virtual_texture_y, float theta_radians, float phi_radians){
            float x = seed_position.x;
            float y = seed_position.y;
            float z = 0.0;
            float a = 1.0;
            bool a_is_real = true;
            vec3 seed_velocity;

            float dir_x = sin(theta_radians) * cos(phi_radians);
            float dir_y = sin(theta_radians) * sin(phi_radians);
            float dir_z = cos(theta_radians);
            vec3 direction = vec3(dir_x, dir_y, dir_z);

            if(use_constant_velocity){
                //if set to true, use constant velocity
                seed_velocity = normalize(direction) * seed_energy;
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
                float root = n*n*ydxminusxdy*ydxminusxdy - 2.0*(phi-H);
                float R = sqrt(root);

                float a1 = L + R;
                float a2 = L - R;
                a = max(a1, a2);
                a_is_real = root >= 0.0;

                seed_velocity = vec3(a*dir_x, a*dir_y, a*dir_z);
            }     

            //debug: hamiltonian
            float H = calculateHamiltonian(x, y, z, seed_velocity.x, seed_velocity.y, seed_velocity.z, mu, angular_velocity);
            float Ueff = calculateUeff(x, y, z, mu);

            if(virtual_texture_y == 0){                
                if(virtual_texture_x == 0){
                    //POSITION CALCULATION
                    //outputColor = vec4(theta_radians, phi_radians, 0.0, 1.0);
                    outputColor = vec4(x, y, 0.0, H);
                }        
                if(virtual_texture_x == 1){
                    //VELOCITY CALCULATION
                    //vec3 direction = vec3(1.0,0.0,0.0);
                    outputColor = vec4(seed_velocity.x, seed_velocity.y, seed_velocity.z, H);               
                }
            }
            else{
                if(virtual_texture_x == 0){
                    //first value is "success" flag --> if this is 0, we do not start the integration
                    bool allow_start = allowStart(a);
                    outputColor = vec4(allow_start, 0.0, 0.0, 0.0);
                }
                else{
                    outputColor = vec4(a, a_is_real, Ueff, 0.0);  
                }       
            }
        }

        float calculateHamiltonian(float x, float y, float z, float px, float py, float pz, float mu, float n){
            float L = 0.5*(px*px + py*py + pz*pz);
            float phi = - (1.0-mu)/(sqrt((x+mu)*(x+mu) + y*y + z*z)) - mu/(sqrt((x-(1.0-mu))*(x-(1.0-mu)) + y*y + z*z));
            float R = n*(y*px - x*py);        
            return L + phi + R;
        }

        float calculateUeff(float x, float y, float z, float mu){
            float phi = - (1.0-mu)/(sqrt((x+mu)*(x+mu) + y*y + z*z)) - mu/(sqrt((x-(1.0-mu))*(x-(1.0-mu)) + y*y + z*z));
            float R = 1.0/2.0*(x*x + y*y);
            return phi - R;
        }

        bool allowStart(float a){
            return a > 0.0;
        }
        `}}const eh=t=>t[0];class Pg extends Fl{constructor(e,n,r,i){super(e,n,r),this.signum=i}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture},this.uniforms.max_steps={type:"int",value:0},this.uniforms.step_size={type:"float",value:0},this.uniforms.signum={type:"float",value:1},console.warn("FLOW MAP uniforms",this.uniforms)}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture,this.dummy_plane_mesh.material.uniforms.max_steps.value=this.simulationParameters.max_steps,this.dummy_plane_mesh.material.uniforms.step_size.value=this.simulationParameters.step_size,this.dummy_plane_mesh.material.uniforms.signum.value=this.signum}fragmentShaderMethodComputation(){return eh`

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
            float hamiltonian_smallest = texelFetch(texture_seeds_and_returns, pointer, 0).w;
            float hamiltonian_largest = texelFetch(texture_seeds_and_returns, pointer+ivec3(int(planeDimensionsPixel.x),0,0), 0).w;
            

            vec3 current_position = seed_position;
            current_position.z = 0.0;
            vec3 current_direction = seed_direction;

            bool success = false;//do we reach the plane intersection
            float success_float = 0.0;
            bool isOnPositiveZ = f_direction(current_position, current_direction, signum).z > 0.0;

            //if this is not the first return --> only continue if previous was success
            //if this is the first return --> only continue if seed was ok
            if(old_success_float < 0.5){
                outputColor = vec4(0.0, 0.0, 0.0, 1.0); 
                return;
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

                //debug: hamiltonian
                float H = calculateHamiltonian(current_position[0], current_position[1], current_position[2],
                    current_direction[0], current_direction[1], current_direction[2],
                    mu, angular_velocity);
                hamiltonian_smallest = min(H, hamiltonian_smallest);
                hamiltonian_largest = max(H, hamiltonian_largest);

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
                    outputColor = vec4(current_position, hamiltonian_smallest); 
                    //outputColor = vec4(0.0, current_position.y, 0.0, 1.0); 
                }
                else{
                    outputColor = vec4(current_direction, hamiltonian_largest); 
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
            
        `}fragmentShaderAdditionalMethodDeclarations(){return eh`
        vec3 f_position(vec3 position, vec3 direction, float signum);
        vec3 f_direction(vec3 position, vec3 direction, float signum);
        float calculateHamiltonian(float x, float y, float z, float px, float py, float pz, float mu, float n);
        `}fragmentShaderAdditionalMethodDefinitions(){return eh`
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

        float calculateHamiltonian(float x, float y, float z, float px, float py, float pz, float mu, float n){
            float L = 0.5*(px*px + py*py + pz*pz);
            float phi = - (1.0-mu)/(sqrt((x+mu)*(x+mu) + y*y + z*z)) - mu/(sqrt((x-(1.0-mu))*(x-(1.0-mu)) + y*y + z*z));
            float R = n*(y*px - x*py);        
            return L + phi + R;
        }
        `}}const th=t=>t[0];class Ig extends Fl{constructor(e,n,r){super(e,n,r)}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 2}getNumPixelsPerNodeY(){return 2}getNumLayers(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture},this.uniforms.max_steps={type:"int",value:0},this.uniforms.step_size={type:"float",value:0},this.uniforms.signum={type:"float",value:1},console.warn("FTLE uniforms",this.uniforms)}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture,this.dummy_plane_mesh.material.uniforms.max_steps.value=this.simulationParameters.max_steps,this.dummy_plane_mesh.material.uniforms.step_size.value=this.simulationParameters.step_size}fragmentShaderMethodComputation(){return th`
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
        `}fragmentShaderAdditionalMethodDeclarations(){return th`
        //float computeFTLE(int x_pixel_mod, int y_pixel_mod);
        float computePSFTLE(int x_pixel_mod, int y_pixel_mod, int type);
        `}fragmentShaderAdditionalMethodDefinitions(){return th`


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
        `}}const iI=t=>t[0];class oI extends Fl{constructor(e,n,r){super(e,n,r)}link(e){this.offscreenRendererSeedsAndReturns=e}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}addAdditionalUniforms(){this.uniforms.texture_seeds_and_returns={type:"sampler3D",value:this.offscreenRendererSeedsAndReturns.renderTarget.texture}}setAdditionalUniforms(){this.dummy_plane_mesh.material.uniforms.texture_seeds_and_returns.value=this.offscreenRendererSeedsAndReturns.renderTarget.texture}fragmentShaderMethodComputation(){return iI`            

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
        `}}const sI=t=>t[0],PE=sI`

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

`,aI=t=>t[0],IE=aI`

    float InterpolateScalar(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4(sampler3D texture, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);
    float InterpolateScalarWrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer, int component);
    vec4 InterpolateVec4Wrapper(bool forward, float x_frac, float y_frac, int x_virtual, int y_virtual, int z_layer);

`,nh=t=>t[0];class DE{constructor(e,n,r,i,o,s){this.renderer_id=e,this.renderer=n,this.simulationParameters=r,this.colorMaps=i,this.scene=o,this.useAnglePlane=s}getPlaneDimensionX(){return this.useAnglePlane?this.simulationParameters.angle_pixels_x:this.simulationParameters.domain_pixels_x}getPlaneDimensionY(){return this.useAnglePlane?this.simulationParameters.angle_pixels_y:this.simulationParameters.domain_pixels_y}initialize(){console.warn("INITIALIZE TextureRenderer"),this.width=100,this.height=100,this.generateUniforms(),this.textured_material=new Ar({uniforms:this.uniforms,fragmentShader:this.fragmentShader(),vertexShader:this.vertexShader(),glslVersion:Ou}),this.textured_material.transparent=!0,this.textured_material.opacity=.5,this.initializeTexturedGeometry()}initializeTexturedGeometry(){console.error("initializeTexturedGeometry not defined")}changeDisplayedTexture(e){this.displayedTexture=e}changeDisplayedTextureBackwards(e){this.displayedTextureBackwards=e}updateTexturedMesh(){this.setAdditionalUniforms(),this.textured_mesh.material.uniforms.mu.value=this.simulationParameters.mu,this.textured_mesh.material.uniforms.angular_velocity.value=this.simulationParameters.angular_velocity,this.textured_mesh.material.uniforms.primary_x.value=this.simulationParameters.getPrimaryX(),this.textured_mesh.material.uniforms.secondary_x.value=this.simulationParameters.getSecondaryX(),this.textured_mesh.material.uniforms.primary_mass.value=this.simulationParameters.getPrimaryMass(),this.textured_mesh.material.uniforms.secondary_mass.value=this.simulationParameters.getSecondaryMass(),this.textured_mesh.material.uniforms.planeCornerBL.value.x=this.simulationParameters.domain_min_x,this.textured_mesh.material.uniforms.planeCornerBL.value.y=this.simulationParameters.domain_min_y,this.textured_mesh.material.uniforms.planeDimensions.value.x=this.simulationParameters.domain_dimension_x,this.textured_mesh.material.uniforms.planeDimensions.value.y=this.simulationParameters.domain_dimension_y,this.textured_mesh.material.uniforms.planeDimensionsPixel.value.x=this.getPlaneDimensionX(),this.textured_mesh.material.uniforms.planeDimensionsPixel.value.y=this.getPlaneDimensionY(),this.textured_mesh.material.uniforms.constant_hamiltonian.value=this.simulationParameters.seed_energy}generateUniforms(){this.uniforms={mu:{type:"float",value:.1},angular_velocity:{type:"float",value:1},primary_x:{type:"float",value:0},secondary_x:{type:"float",value:0},primary_mass:{type:"float",value:0},secondary_mass:{type:"float",value:0},planeCenter:{type:"vec2",value:new ge(0,0)},planeCornerBL:{type:"vec2",value:new ge(-1,-1)},planeDimensions:{type:"vec2",value:new ge(2,2)},planeDimensionsPixel:{type:"vec2",value:new ge(100,100)}},this.addAdditionalUniforms()}vertexShader(){return nh`
        varying vec2 vUv; 
    
        void main() {
          vUv = uv; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
        `}fragmentShader(){return""+this.getUniformsString()+CE+`
`+sm+`
`+IE+`
`+nh`

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
        `+this.fragmentShaderMethodComputation()+nh`
        }   
        
        void RenderSpecializedMode(float x_frac, float y_frac){
            bool show_no_data_marker = true;
            int check_return_z_layer = -1;//deactivated if smaller than 0
            bool check_return_z_layer_both_directions = false;
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
                    check_return_z_layer = return_layer;
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
                    check_return_z_layer = return_layer;
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
                    check_return_z_layer = return_layer;
                    break;
                case 5://TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    data_seeds = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer-1);
                    outputColor = vec4(normalMappingVec3(data.xyz - data_seeds.xyz), opacity);
                    check_return_z_layer = return_layer;
                    break;
                case 6://TEXTURE_MODE_SPECIALIZED_RETURN_POSITION_RELATIVE_MAGNITUDE
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    data_seeds = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer-1);
                    float magnitude = length(data.xyz - data_seeds.xyz);
                    outputColor = vec4(mapScalarToColor(magnitude), opacity);
                    check_return_z_layer = return_layer;
                    break;                    
                case 7://TEXTURE_MODE_SPECIALIZED_RETURN_DIRECTION
                    x_virtual = 1;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    outputColor = vec4(normalMappingVec3(data.xyz), opacity);
                    check_return_z_layer = return_layer;
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
                    check_return_z_layer = return_layer;
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
                    check_return_z_layer_both_directions = true;
                    check_return_z_layer = return_layer;
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
                    y_virtual = 1;
                    z_layer = 0;
                    component = 0;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    outputColor = vec4(mapScalarToColorWithInterval(scalar, scalar_min, scalar_max), opacity);
                    break;
                case 12://TEXTURE_MODE_SPECIALIZED_HAMILTONIAN_ERROR
                    //debug: hamiltonian
                    //seed hamiltonian
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = 0;
                    component = 3;
                    float scalar_seed = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);

                    //return hamiltonian min
                    x_virtual = 0;
                    z_layer = return_layer;
                    float hamiltonian_min = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);

                    //return hamiltonian min
                    x_virtual = 1;
                    float hamiltonian_max = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);

                    scalar = abs(hamiltonian_max - hamiltonian_min);
                    //scalar = hamiltonian_max;

                    outputColor = vec4(mapScalarToColorWithInterval(scalar, scalar_min, scalar_max), opacity);
                    check_return_z_layer = return_layer;
                    break;
                case 13://TEXTURE_MODE_SPECIALIZED_RETURN_DIST_BODIES
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = return_layer;
                    data = InterpolateVec4Wrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer);
                    float posistion_x = data.x;
                    float posistion_y = data.y;
                    //outputColor = vec4(normalMappingVec3(data.xyz - data_seeds.xyz), opacity);
                    float dx = posistion_x-(-mu);
                    float dy = posistion_y;
                    float dist_primary = sqrt(dx*dx + dy*dy);
                    dx = posistion_x-(1.0-mu);
                    float dist_secondary = sqrt(dx*dx + dy*dy);
                    float scalar;
                    if(dist_primary < dist_secondary){
                        float t = dist_primary/scalar_max;
                        scalar = mix(1.0, 0.0, t);
                        outputColor = vec4(scalar, 0.0, 0.0, opacity);
                    }
                    else{
                        float t = dist_secondary/scalar_max;
                        scalar = mix(1.0, 0.0, t);
                        outputColor = vec4(0.0, scalar, 0.0, opacity);
                    }
                    check_return_z_layer = return_layer;
                    break;
            }

            /////////////////////////////////////////////////
            //
            //MARK CELLS WITHOUT SUFFICIENT DATA
            //
            /////////////////////////////////////////////////
            if(show_no_data_marker){
                float return_scalar_threshold = 1.0;
                //MARK NO RETURN
                if(check_return_z_layer >= 0){
                    //use z_layer set above
                    x_virtual = 0;
                    y_virtual = 1;
                    z_layer = return_layer;
                    component = 0;
                    if(check_return_z_layer_both_directions){
                        float scalar_forward = InterpolateScalarWrapper(true, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                        float scalar_backward = InterpolateScalarWrapper(false, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                        scalar = max(scalar_forward, scalar_forward);
                    }
                    else{
                        scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    }
                    if(scalar < return_scalar_threshold){
                        float value = 0.6;
                        outputColor = vec4(value, value, value, opacity);   
                    }
                }

                //MARK NO START
                if(check_return_z_layer >= 0){
                    //use z_layer of seed
                    x_virtual = 0;
                    y_virtual = 1;
                    z_layer = 0;
                    component = 0;
                    if(check_return_z_layer_both_directions){
                        float scalar_forward = InterpolateScalarWrapper(true, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                        float scalar_backward = InterpolateScalarWrapper(false, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                        scalar = max(scalar_forward, scalar_forward);
                    }
                    else{
                        scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    }
                    if(scalar < return_scalar_threshold){
                        float value = 0.45;
                        outputColor = vec4(value, value, value, opacity);   
                    }
                }

                if(check_return_z_layer >= 0){
                    //seed Ueff
                    x_virtual = 1;
                    y_virtual = 1;
                    z_layer = 0;
                    component = 1;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    
                    //seed hamiltonian
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = 0;
                    component = 3;

                    if(scalar < 1.0){
                        float value = 0.3;
                        outputColor = vec4(value, value, value, opacity);      
                    } 
                }

                if(check_return_z_layer >= 0){
                    //seed Ueff
                    x_virtual = 1;
                    y_virtual = 1;
                    z_layer = 0;
                    component = 2;
                    scalar = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                    
                    //seed hamiltonian
                    x_virtual = 0;
                    y_virtual = 0;
                    z_layer = 0;
                    component = 3;

                    if(scalar > constant_hamiltonian){
                        float value = 0.15;
                        outputColor = vec4(value, value, value, opacity);     
                    } 
                }
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
`+PE}getUniformsString(){return Object.keys(this.uniforms).map(e=>`uniform ${this.uniforms[e].type} ${e};`).join(`
`)}getNumPixelsPerNodeX(){return 1}getNumPixelsPerNodeY(){return 1}fragmentShaderMethodComputation(){return`
        /*
        if(vUv.x > 0.0)
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        if(vUv.y > 0.0)
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
*/

        `}addAdditionalUniforms(){this.uniforms.displayedTexture={type:"sampler3D",value:null},this.uniforms.displayedTextureBackwards={type:"sampler3D",value:null},this.uniforms.colorMapsTexture={type:"sampler2D",value:null},this.uniforms.rendering_texture_mode={type:"int",value:parseInt(sr)},this.uniforms.rendering_specialized_mode={type:"int",value:parseInt(ld)},this.uniforms.return_layer={type:"int",value:j0},this.uniforms.rendering_raw_mode_layer={type:"int",value:0},this.uniforms.rendering_forward={type:"bool",value:!0},this.uniforms.rendering_raw_mode_x_texture_index={type:"int",value:0},this.uniforms.rendering_raw_mode_y_texture_index={type:"int",value:0},this.uniforms.scalar_min={type:"float",value:0},this.uniforms.scalar_max={type:"float",value:1},this.uniforms.opacity={type:"float",value:1},this.uniforms.ftle_type={type:"int",value:fd},this.uniforms.scale_vertices_by_velocity_magnitude={type:"bool",value:!1},this.uniforms.theta_down={type:"bool",value:!0},this.uniforms.is_aux_view={type:"bool",value:this.renderer_id==Iu},this.uniforms.constant_hamiltonian={type:"float",value:0}}setAdditionalUniforms(){this.textured_mesh.material.uniforms.displayedTexture.value=this.displayedTexture,this.textured_mesh.material.uniforms.displayedTextureBackwards.value=this.displayedTextureBackwards,this.textured_mesh.material.uniforms.colorMapsTexture.value=this.colorMaps.texture,this.textured_mesh.material.uniforms.rendering_texture_mode.value=this.simulationParameters.rendering_texture_mode,this.textured_mesh.material.uniforms.rendering_specialized_mode.value=this.simulationParameters.rendering_specialized_mode,this.textured_mesh.material.uniforms.return_layer.value=this.simulationParameters.return_layer,this.textured_mesh.material.uniforms.rendering_forward.value=this.simulationParameters.rendering_forward,this.textured_mesh.material.uniforms.rendering_raw_mode_layer.value=this.simulationParameters.rendering_raw_mode_layer,this.textured_mesh.material.uniforms.rendering_raw_mode_x_texture_index.value=this.simulationParameters.rendering_raw_mode_x_texture_index,this.textured_mesh.material.uniforms.rendering_raw_mode_y_texture_index.value=this.simulationParameters.rendering_raw_mode_y_texture_index,this.textured_mesh.material.uniforms.scalar_min.value=this.simulationParameters.scalar_min,this.textured_mesh.material.uniforms.scalar_max.value=this.simulationParameters.scalar_max,this.textured_mesh.material.uniforms.opacity.value=this.simulationParameters.opacity,this.textured_mesh.material.uniforms.ftle_type.value=this.simulationParameters.rendering_ftle_type,this.textured_mesh.material.uniforms.scale_vertices_by_velocity_magnitude.value=this.shouldScaleVerticesByVelocityMagnitude(),this.textured_mesh.material.uniforms.theta_down.value=this.simulationParameters.auxGridDirection==$i,console.warn("this.uniforms",this.uniforms)}shouldScaleVerticesByVelocityMagnitude(){return!1}}class Dg{constructor(){this.position=Qe(),this.direction=Qe(),this.arc_length=0,this.t=0}getPosTHREE(){return new k(this.position[0],this.position[1],this.position[2])}}class rh{constructor(e,n){console.log("Streamline: initialize"),this.streamline_generator=e,this.simulationParameters=e.simulationParameters,this.scene=e.scene,this.multi=n,this.list_point_data=[],this.path=null,this.signum=1,this.arc_length=0,this.seed_position=Er(.75,.4,0),this.seed_direction=Er(0,0,.1),this.seed_velocity=Er(0,0,.1),this.existsInScene=!1}setSeed(e,n){nr(this.seed_position,e),nr(this.seed_direction,n)}setSeedPosition(e){nr(this.seed_position,e)}setSeedDirection(e){nr(this.seed_direction,e)}recalculate(e,n,r,i,o,s,a){this.setSeedPosition(Er(e,n,r)),this.setSeedDirection(Er(i,o,s)),this.updateSeedVelocity(),this.calculate()}recalculateFromOther(e){console.warn("OTHER:",e);var n=Qe(),r=Qe(),i=e.list_point_data[e.list_point_data.length-1];nr(n,i.position),nr(r,i.direction),nr(this.seed_velocity,i.direction),this.setSeedPosition(n),this.setSeedDirection(r),this.calculate()}updateSeedVelocity(){if(console.warn("SEED DIRECTION: ",this.seed_direction),this.simulationParameters.use_constant_velocity){var e=Qe();yp(e,this.seed_direction),Rt(this.seed_velocity,e,this.simulationParameters.seed_energy)}else{var e=Qe();yp(e,this.seed_direction);var n=e[0],r=e[1];e[2];var i=this.seed_position[0],o=this.seed_position[1],s=this.seed_position[2],a=this.simulationParameters.mu,l=this.simulationParameters.angular_velocity,c=this.simulationParameters.seed_energy,u=-(1-a)/Math.sqrt((i+a)*(i+a)+o*o+s*s)-a/Math.sqrt((i-(1-a))*(i-(1-a))+o*o+s*s),d=o*n-i*r,f=-l*d,p=Math.sqrt(l*l*d*d-2*(u-c)),_=f+p,v=f-p,m=Math.max(_,v);console.warn("results for a",_,v),Rt(this.seed_velocity,e,m)}console.warn("SEED VELOCITY: ",this.seed_velocity)}calculate(){this.list_point_data=[],this.arc_length=0,this.t=0,this.success=!1;var e=new Dg;nr(e.position,this.seed_position),nr(e.direction,this.seed_velocity),this.list_point_data.push(e);var n=this.calculateHamiltonian(this.seed_position[0],this.seed_position[1],this.seed_position[2],this.seed_velocity[0],this.seed_velocity[1],this.seed_velocity[2],this.simulationParameters.mu,this.simulationParameters.angular_velocity);console.warn("debug hamiltonian start:",n),this.hamiltonian_smallest=n,this.hamiltonian_largest=n;var r=this.calculateUeff(this.seed_position[0],this.seed_position[1],this.seed_position[2],this.simulationParameters.mu);console.warn("debug Ueff start:",r);var i=Qe(),o=Qe(),s=Qe(),a=Qe(),l=Qe(),c=Qe(),u=Qe(),d=Qe(),f=Qe(),p=Qe(),_=Qe(),v=Qe(),m=Qe(),h=Qe(),g=Qe(),x=Qe(),y=Qe(),w=Qe(),T=Qe(),b=Qe(),C=Qe(),M=Qe(),S=Qe(),L=Qe(),O=Qe(),N=Qe(),B=Qe(),F=Qe(),q=this.streamline_generator.simulationParameters.max_steps,W=this.streamline_generator.simulationParameters.step_size;this.streamline_generator.simulationParameters.termination_method;for(var U=this.seed_direction[2]>=0,H=0;H<q;H++){var X=e.position,re=e.direction,Z=new Dg;this.list_point_data.push(Z),Rt(o,this.streamline_generator.f_position(X,re,this.signum),W),Rt(x,this.streamline_generator.f_direction(X,re,this.signum),W),Rt(c,o,1/2),Rt(b,x,1/2),_n(v,X,c),_n(N,re,b),Rt(s,this.streamline_generator.f_position(v,N,this.signum),W),Rt(y,this.streamline_generator.f_direction(v,N,this.signum),W),Rt(u,s,1/2),Rt(C,y,1/2),_n(m,X,u),_n(B,re,u),Rt(a,this.streamline_generator.f_position(m,B,this.signum),W),Rt(w,this.streamline_generator.f_direction(m,B,this.signum),W),_n(h,X,a),_n(F,re,w),Rt(l,this.streamline_generator.f_position(h,F,this.signum),W),Rt(T,this.streamline_generator.f_direction(h,F,this.signum),W),Rt(d,o,1/6),Rt(M,x,1/6),Rt(f,s,1/3),Rt(S,y,1/3),Rt(p,a,1/3),Rt(L,w,1/3),Rt(_,l,1/6),Rt(O,T,1/6),nr(i,d),nr(g,M),_n(i,i,f),_n(g,g,S),_n(i,i,p),_n(g,g,L),_n(i,i,_),_n(g,g,O),_n(Z.position,X,i),_n(Z.direction,re,g);var fe=K3(i);Z.arc_length=e.arc_length+fe,Z.t=e.t+W,this.arc_length=Z.arc_length;var n=this.calculateHamiltonian(e.position[0],e.position[1],e.position[2],e.direction[0],e.direction[1],e.direction[2],this.simulationParameters.mu,this.simulationParameters.angular_velocity);if(this.hamiltonian_smallest=Math.min(n,this.hamiltonian_smallest),this.hamiltonian_largest=Math.max(n,this.hamiltonian_largest),U){if(Z.position[2]<0){U=!1,console.warn("multi a",this.multi),this.multi.list_point_data_returns.push(e),this.success=!0;break}}else if(Z.position[2]>0){U=!0,console.warn("multi b",this.multi),this.multi.list_point_data_returns.push(e),this.success=!0;break}e=Z}console.warn("debug hamiltonian smallest:",this.hamiltonian_smallest),console.warn("debug hamiltonian largest:",this.hamiltonian_largest)}build(){this.path=new G3;for(var e=1;e<this.list_point_data.length;e++){var n=this.list_point_data[e-1],r=this.list_point_data[e],i=new SE(n.getPosTHREE(),r.getPosTHREE());this.path.add(i)}var o=this.streamline_generator.simulationParameters.tube_radius,s=this.streamline_generator.simulationParameters.tube_num_sides,a=this.streamline_generator.simulationParameters.tube_segment_length,l=Math.ceil(this.arc_length/a);l=Math.min(l,this.streamline_generator.simulationParameters.tube_max_segments),this.geometry=new om(this.path,l,o,s,!1);var c=this.streamline_generator.simulationParameters.tube_color,u=this.streamline_generator.simulationParameters.tube_roughness,d=this.streamline_generator.simulationParameters.tube_emissive_intensity;this.material=new Ui({color:c,roughness:u,emissive:c,emissiveIntensity:d}),this.mesh=new xt(this.geometry,this.material)}calculateHamiltonian(e,n,r,i,o,s,a,l){var c=.5*(i*i+o*o+s*s),u=-(1-a)/Math.sqrt((e+a)*(e+a)+n*n+r*r)-a/Math.sqrt((e-(1-a))*(e-(1-a))+n*n+r*r),d=l*(n*i-e*o);return c+u+d}calculateUeff(e,n,r,i){var o=-(1-i)/Math.sqrt((e+i)*(e+i)+n*n+r*r)-i/Math.sqrt((e-(1-i))*(e-(1-i))+n*n+r*r),s=1/2*(e*e+n*n);return o-s}}class lI{constructor(e){console.log("MultipleReturnsStreamline: initialize"),this.streamline_generator=e,this.simulationParameters=e.simulationParameters,this.scene=e.scene,this.has_data=!1,this.initialize()}initialize(){this.list_streamlines=[],this.list_point_data_returns=[];var e=new rh(this.streamline_generator,this);this.list_streamlines.push(e)}recalculateWithLastParameters(){if(!this.has_data){console.warn("recalculateWithLastParameters NO DATA YET");return}this.list_point_data_returns=[];var e=this.simulationParameters.termination_method,n=0,r=this.list_streamlines[n];for(r.updateSeedVelocity(),r.calculate(),e-=1,this.number_success=r.success?1:0,this.number_computed=1;e>0;){n+=1;var i=this.list_streamlines[n-1];if(!i.success)break;if(n==this.list_streamlines.length){var o=new rh(this.streamline_generator,this);this.list_streamlines.push(o)}var r=this.list_streamlines[n];r.recalculateFromOther(i),e-=1,this.number_computed+=1,this.number_success+=r.success?1:0}}recalculateKeepPosition(){if(!this.has_data){console.warn("recalculateKeepPosition NO DATA YET");return}var e=this.list_streamlines[0],n=e.seed_position,r=this.simulationParameters.seed_direction_x,i=this.simulationParameters.seed_direction_y,o=this.simulationParameters.seed_direction_z,s=this.simulationParameters.seed_energy;this.recalculate(n[0],n[1],n[2],r,i,o,s)}recalculate(e,n,r,i,o,s,a){this.list_point_data_returns=[];var l=this.simulationParameters.termination_method,c=0,u=this.list_streamlines[c];for(u.recalculate(e,n,r,i,o,s,a),l-=1,this.number_success=u.success?1:0,this.number_computed=1;l>0;){c+=1;var d=this.list_streamlines[c-1];if(!d.success)break;if(c==this.list_streamlines.length){var f=new rh(this.streamline_generator,this);this.list_streamlines.push(f)}var u=this.list_streamlines[c];u.recalculateFromOther(d),l-=1,this.number_computed+=1,this.number_success=u.success?this.number_success+1:this.number_success}this.has_data=!0}updateStreamlineModels(){console.warn("this.number_success",this.number_success);for(var e=0;e<this.list_streamlines.length;e++){var n=this.list_streamlines[e];n.existsInScene&&this.scene.remove(n.mesh);var r=e<this.number_success,i=e<this.number_computed,o=this.simulationParameters.tube_only_show_successful_returns?r:i;o&&(n.build(),this.scene.add(n.mesh),n.existsInScene=!0)}}}class cI{constructor(e,n){console.log("StreamlineGenerator: initialize"),this.simulationParameters=e,this.scene=n,this.initialize()}initialize(){this.list_multi=[];var e=new lI(this);this.list_multi.push(e)}recalculateMulti(e,n,r,i,o,s,a,l){console.warn("### recalculateMulti"),this.list_multi[e].recalculate(n,r,i,o,s,a,l)}recalculateMultiKeepPosition(e){console.warn("### recalculateMultiAtLastPosition"),this.list_multi[e].recalculateKeepPosition()}recalculateMultiWithLastParameters(e){console.warn("### recalculateMultiWithLastParameters"),this.list_multi[e].recalculateWithLastParameters()}updateMultiModel(e){console.warn("### updateMultiModel"),this.list_multi[e].updateStreamlineModels()}f_position(e,n,r){var i=this.simulationParameters.angular_velocity,o=e[0],s=e[1],a=n[0],l=n[1],c=n[2],u=a+i*s,d=l-i*o,f=c,p=Qe();return p[0]=u*r,p[1]=d*r,p[2]=f*r,p}f_direction(e,n,r){var i=this.simulationParameters.angular_velocity,o=this.simulationParameters.mu,s=e[0],a=e[1],l=e[2],c=n[0],u=n[1],d=o+s,f=o-1,p=d-1,_=Math.pow(p*p+a*a+l*l,3/2),v=Math.pow(d*d+a*a+l*l,3/2),m=o*p/_-f*d/v,h=o*a/_-f*a/v,g=o*l/_-f*l/v,x=i*u-m,y=-i*c-h,w=-g,T=Qe();return T[0]=x*r,T[1]=y*r,T[2]=w*r,T}}class uI extends DE{constructor(e,n,r,i,o,s){super(e,n,r,i,o,s),console.warn("CONSTRUCTOR: TextureRendererPlane")}initializeTexturedGeometry(){this.textured_plane_geometry=new Vo(1,1),this.textured_mesh=new xt(this.textured_plane_geometry,this.textured_material),this.scene.add(this.textured_mesh)}updateTransform(e,n,r,i){this.textured_mesh.scale.set(r,i,1),this.textured_mesh.position.set(e,n,0)}addAdditionalUniforms(){super.addAdditionalUniforms(),this.uniforms.is_plane={type:"bool",value:!0}}}class dI{constructor(e){this.bin_count=e,this.convertArray(),this.generateBins()}getArray(){return[]}convertArray(){var e=this.getArray();this.array_values=[],this.array_colors=[];for(var n=e.length/4,r=0;r<n;r++){var i=e[4*r],o=[e[4*r+1],e[4*r+2],e[4*r+3]];this.array_values.push(i),this.array_colors.push(o)}}generateBins(){this.bins=[];for(var e=0,n=0;n<this.bin_count;n++){var r=n/(this.bin_count-1),i=this.findLowerIndex(r,e);i==this.bin_count-1&&(i-=1);var o=i+1,s=this.array_values[i],a=this.array_values[o],l=this.array_colors[i],c=this.array_colors[o],u=a-s,d=(r-s)/u,f=(1-d)*l[0]+d*c[0],p=(1-d)*l[1]+d*c[1],_=(1-d)*l[2]+d*c[2],v=[f,p,_];this.bins.push(v),e=i}}findLowerIndex(e,n){for(var r=0,i=0;i<this.array_values.length;i++){var o=this.array_values[i];if(o>e)break;r=i}return r}}class fI extends dI{constructor(e){super(e)}getArray(){return[0,.267004,.004874,.329415,.003922,.26851,.009605,.335427,.007843,.269944,.014625,.341379,.011765,.271305,.019942,.347269,.015686,.272594,.025563,.353093,.019608,.273809,.031497,.358853,.023529,.274952,.037752,.364543,.027451,.276022,.044167,.370164,.031373,.277018,.050344,.375715,.035294,.277941,.056324,.381191,.039216,.278791,.062145,.386592,.043137,.279566,.067836,.391917,.047059,.280267,.073417,.397163,.05098,.280894,.078907,.402329,.054902,.281446,.08432,.407414,.058824,.281924,.089666,.412415,.062745,.282327,.094955,.417331,.066667,.282656,.100196,.42216,.070588,.28291,.105393,.426902,.07451,.283091,.110553,.431554,.078431,.283197,.11568,.436115,.082353,.283229,.120777,.440584,.086275,.283187,.125848,.44496,.090196,.283072,.130895,.449241,.094118,.282884,.13592,.453427,.098039,.282623,.140926,.457517,.101961,.28229,.145912,.46151,.105882,.281887,.150881,.465405,.109804,.281412,.155834,.469201,.113725,.280868,.160771,.472899,.117647,.280255,.165693,.476498,.121569,.279574,.170599,.479997,.12549,.278826,.17549,.483397,.129412,.278012,.180367,.486697,.133333,.277134,.185228,.489898,.137255,.276194,.190074,.493001,.141176,.275191,.194905,.496005,.145098,.274128,.199721,.498911,.14902,.273006,.20452,.501721,.152941,.271828,.209303,.504434,.156863,.270595,.214069,.507052,.160784,.269308,.218818,.509577,.164706,.267968,.223549,.512008,.168627,.26658,.228262,.514349,.172549,.265145,.232956,.516599,.176471,.263663,.237631,.518762,.180392,.262138,.242286,.520837,.184314,.260571,.246922,.522828,.188235,.258965,.251537,.524736,.192157,.257322,.25613,.526563,.196078,.255645,.260703,.528312,.2,.253935,.265254,.529983,.203922,.252194,.269783,.531579,.207843,.250425,.27429,.533103,.211765,.248629,.278775,.534556,.215686,.246811,.283237,.535941,.219608,.244972,.287675,.53726,.223529,.243113,.292092,.538516,.227451,.241237,.296485,.539709,.231373,.239346,.300855,.540844,.235294,.237441,.305202,.541921,.239216,.235526,.309527,.542944,.243137,.233603,.313828,.543914,.247059,.231674,.318106,.544834,.25098,.229739,.322361,.545706,.254902,.227802,.326594,.546532,.258824,.225863,.330805,.547314,.262745,.223925,.334994,.548053,.266667,.221989,.339161,.548752,.270588,.220057,.343307,.549413,.27451,.21813,.347432,.550038,.278431,.21621,.351535,.550627,.282353,.214298,.355619,.551184,.286275,.212395,.359683,.55171,.290196,.210503,.363727,.552206,.294118,.208623,.367752,.552675,.298039,.206756,.371758,.553117,.301961,.204903,.375746,.553533,.305882,.203063,.379716,.553925,.309804,.201239,.38367,.554294,.313725,.19943,.387607,.554642,.317647,.197636,.391528,.554969,.321569,.19586,.395433,.555276,.32549,.1941,.399323,.555565,.329412,.192357,.403199,.555836,.333333,.190631,.407061,.556089,.337255,.188923,.41091,.556326,.341176,.187231,.414746,.556547,.345098,.185556,.41857,.556753,.34902,.183898,.422383,.556944,.352941,.182256,.426184,.55712,.356863,.180629,.429975,.557282,.360784,.179019,.433756,.55743,.364706,.177423,.437527,.557565,.368627,.175841,.44129,.557685,.372549,.174274,.445044,.557792,.376471,.172719,.448791,.557885,.380392,.171176,.45253,.557965,.384314,.169646,.456262,.55803,.388235,.168126,.459988,.558082,.392157,.166617,.463708,.558119,.396078,.165117,.467423,.558141,.4,.163625,.471133,.558148,.403922,.162142,.474838,.55814,.407843,.160665,.47854,.558115,.411765,.159194,.482237,.558073,.415686,.157729,.485932,.558013,.419608,.15627,.489624,.557936,.423529,.154815,.493313,.55784,.427451,.153364,.497,.557724,.431373,.151918,.500685,.557587,.435294,.150476,.504369,.55743,.439216,.149039,.508051,.55725,.443137,.147607,.511733,.557049,.447059,.14618,.515413,.556823,.45098,.144759,.519093,.556572,.454902,.143343,.522773,.556295,.458824,.141935,.526453,.555991,.462745,.140536,.530132,.555659,.466667,.139147,.533812,.555298,.470588,.13777,.537492,.554906,.47451,.136408,.541173,.554483,.478431,.135066,.544853,.554029,.482353,.133743,.548535,.553541,.486275,.132444,.552216,.553018,.490196,.131172,.555899,.552459,.494118,.129933,.559582,.551864,.498039,.128729,.563265,.551229,.501961,.127568,.566949,.550556,.505882,.126453,.570633,.549841,.509804,.125394,.574318,.549086,.513725,.124395,.578002,.548287,.517647,.123463,.581687,.547445,.521569,.122606,.585371,.546557,.52549,.121831,.589055,.545623,.529412,.121148,.592739,.544641,.533333,.120565,.596422,.543611,.537255,.120092,.600104,.54253,.541176,.119738,.603785,.5414,.545098,.119512,.607464,.540218,.54902,.119423,.611141,.538982,.552941,.119483,.614817,.537692,.556863,.119699,.61849,.536347,.560784,.120081,.622161,.534946,.564706,.120638,.625828,.533488,.568627,.12138,.629492,.531973,.572549,.122312,.633153,.530398,.576471,.123444,.636809,.528763,.580392,.12478,.640461,.527068,.584314,.126326,.644107,.525311,.588235,.128087,.647749,.523491,.592157,.130067,.651384,.521608,.596078,.132268,.655014,.519661,.6,.134692,.658636,.517649,.603922,.137339,.662252,.515571,.607843,.14021,.665859,.513427,.611765,.143303,.669459,.511215,.615686,.146616,.67305,.508936,.619608,.150148,.676631,.506589,.623529,.153894,.680203,.504172,.627451,.157851,.683765,.501686,.631373,.162016,.687316,.499129,.635294,.166383,.690856,.496502,.639216,.170948,.694384,.493803,.643137,.175707,.6979,.491033,.647059,.180653,.701402,.488189,.65098,.185783,.704891,.485273,.654902,.19109,.708366,.482284,.658824,.196571,.711827,.479221,.662745,.202219,.715272,.476084,.666667,.20803,.718701,.472873,.670588,.214,.722114,.469588,.67451,.220124,.725509,.466226,.678431,.226397,.728888,.462789,.682353,.232815,.732247,.459277,.686275,.239374,.735588,.455688,.690196,.24607,.73891,.452024,.694118,.252899,.742211,.448284,.698039,.259857,.745492,.444467,.701961,.266941,.748751,.440573,.705882,.274149,.751988,.436601,.709804,.281477,.755203,.432552,.713725,.288921,.758394,.428426,.717647,.296479,.761561,.424223,.721569,.304148,.764704,.419943,.72549,.311925,.767822,.415586,.729412,.319809,.770914,.411152,.733333,.327796,.77398,.40664,.737255,.335885,.777018,.402049,.741176,.344074,.780029,.397381,.745098,.35236,.783011,.392636,.74902,.360741,.785964,.387814,.752941,.369214,.788888,.382914,.756863,.377779,.791781,.377939,.760784,.386433,.794644,.372886,.764706,.395174,.797475,.367757,.768627,.404001,.800275,.362552,.772549,.412913,.803041,.357269,.776471,.421908,.805774,.35191,.780392,.430983,.808473,.346476,.784314,.440137,.811138,.340967,.788235,.449368,.813768,.335384,.792157,.458674,.816363,.329727,.796078,.468053,.818921,.323998,.8,.477504,.821444,.318195,.803922,.487026,.823929,.312321,.807843,.496615,.826376,.306377,.811765,.506271,.828786,.300362,.815686,.515992,.831158,.294279,.819608,.525776,.833491,.288127,.823529,.535621,.835785,.281908,.827451,.545524,.838039,.275626,.831373,.555484,.840254,.269281,.835294,.565498,.84243,.262877,.839216,.575563,.844566,.256415,.843137,.585678,.846661,.249897,.847059,.595839,.848717,.243329,.85098,.606045,.850733,.236712,.854902,.616293,.852709,.230052,.858824,.626579,.854645,.223353,.862745,.636902,.856542,.21662,.866667,.647257,.8584,.209861,.870588,.657642,.860219,.203082,.87451,.668054,.861999,.196293,.878431,.678489,.863742,.189503,.882353,.688944,.865448,.182725,.886275,.699415,.867117,.175971,.890196,.709898,.868751,.169257,.894118,.720391,.87035,.162603,.898039,.730889,.871916,.156029,.901961,.741388,.873449,.149561,.905882,.751884,.874951,.143228,.909804,.762373,.876424,.137064,.913725,.772852,.877868,.131109,.917647,.783315,.879285,.125405,.921569,.79376,.880678,.120005,.92549,.804182,.882046,.114965,.929412,.814576,.883393,.110347,.933333,.82494,.88472,.106217,.937255,.83527,.886029,.102646,.941176,.845561,.887322,.099702,.945098,.85581,.888601,.097452,.94902,.866013,.889868,.095953,.952941,.876168,.891125,.09525,.956863,.886271,.892374,.095374,.960784,.89632,.893616,.096335,.964706,.906311,.894855,.098125,.968627,.916242,.896091,.100717,.972549,.926106,.89733,.104071,.976471,.935904,.89857,.108131,.980392,.945636,.899815,.112838,.984314,.9553,.901065,.118128,.988235,.964894,.902323,.123941,.992157,.974417,.90359,.130215,.996078,.983868,.904867,.136897,1,.993248,.906157,.143936]}}class hI{constructor(){this.initialize(256)}initialize(e){this.bin_count=e,this.colorMapViridis=new fI(e),this.listColorMaps=[this.colorMapViridis,this.colorMapViridis],this.generateTexture()}generateTexture(){const e=this.bin_count,n=this.listColorMaps.length,r=e*n,i=new Float32Array(4*r);for(var o=0,s=0;s<this.listColorMaps.length;s++)for(var a=this.listColorMaps[s],l=0;l<a.bins.length;l++){var c=a.bins[l];i[o]=c[0],i[o+1]=c[1],i[o+2]=c[2],i[o+3]=1,o+=4}this.texture=new R3(i,e,n,Ln,ar),this.texture.needsUpdate=!0}}class NE{constructor(e,n,r,i,o,s,a,l){console.warn("CONSTRUCTOR SceneWrapperVisualization"),this.renderer_id=e,this.renderer=n,this.scene=r,this.camera=i,this.controls=o,this.raycaster=s,this.mode_constant_direction=a,this.simulationParameters=_o.CreateOrGetInstance(),this.colorMaps=new hI,this.streamlineGenerator=new cI(this.simulationParameters,r),this.streamlineGenerator.initialize(),this.offscreenRendererSeeds=new Cg(n,this.simulationParameters,l,this.mode_constant_direction),this.offscreenRendererSeedsBackwards=new Cg(n,this.simulationParameters,l,this.mode_constant_direction),this.offscreenRendererFlowMap=new Pg(n,this.simulationParameters,l,1),this.offscreenRendererFlowMapBackwards=new Pg(n,this.simulationParameters,l,-1),this.OffscreenRendererFTLE=new Ig(n,this.simulationParameters,l),this.OffscreenRendererFTLEBackwards=new Ig(n,this.simulationParameters,l),this.offscreenRendererSeedsAndReturns=new Rg(n,this.simulationParameters,l),this.offscreenRendererSeedsAndReturnsBackwards=new Rg(n,this.simulationParameters,l),this.offscreenRendererGravitationalForce=new oI(n,this.simulationParameters,l),this.offscreenRendererFlowMap.link(this.offscreenRendererSeedsAndReturns),this.offscreenRendererFlowMapBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards),this.OffscreenRendererFTLE.link(this.offscreenRendererSeedsAndReturns),this.OffscreenRendererFTLEBackwards.link(this.offscreenRendererSeedsAndReturnsBackwards),this.offscreenRendererGravitationalForce.link(this.offscreenRendererSeedsAndReturns),this.offscreenRendererSeeds.initialize(),this.offscreenRendererSeedsBackwards.initialize(),this.offscreenRendererSeedsAndReturns.initialize(),this.offscreenRendererSeedsAndReturnsBackwards.initialize(),this.offscreenRendererFlowMap.initialize(),this.offscreenRendererFlowMapBackwards.initialize(),this.OffscreenRendererFTLE.initialize(),this.OffscreenRendererFTLEBackwards.initialize(),this.offscreenRendererGravitationalForce.initialize(),this.textureRenderer=new uI(e,n,this.simulationParameters,this.colorMaps,r,l),this.activeBehaviorLastFrame=null}initialize(){this.initializeLight(),this.initializeAxesArrows(),this.initializePlane(),this.initializeTexturedPlane(),this.initializeClickedPositionMarker(),this.initializeEventListeners(),this.initializeAdditionalObjects()}initializeAdditionalObjects(){console.error("initializeAdditionalObjects not defined")}initializeExampleCube(){var e=new ca,n=new wl({color:65280});this.example_cube_mesh=new xt(e,n),this.scene.add(this.example_cube_mesh)}initializeLight(){this.directionalLight=new ME(16777215,2),this.directionalLight.position.set(0,0,0),this.camera.add(this.directionalLight),this.directionalLightTarget=new Gt,this.camera.add(this.directionalLightTarget),this.directionalLightTarget.position.set(0,0,-1),this.directionalLight.target=this.directionalLightTarget;const e=new bE(5263440);this.scene.add(e)}initializeAxesArrows(){console.warn("#999 initializeAxesArrows");var e=Er(-4,-4,0),n=8,r=.02,i=5,o=.05,s=!1;this.objectAxes=new Ep(e,n,n,n,r,i,o,s),this.objectAxes.addToScene(this.scene)}initializePlane(){this.plane_geometry=new Vo(256,256),this.plane_material=new wl({color:16776960,side:xr}),this.plane_material.transparent=!0,this.plane_material.opacity=.5,this.plane_mesh=new xt(this.plane_geometry,this.plane_material)}initializeTexturedPlane(){this.textureRenderer.initialize()}initializeClickedPositionMarker(){var e=1,n=65535,r=16711935,i=16497669;this.clicked_geometry=new qr(e),this.clicked_material=new Ui({color:n}),this.clicked_mesh=new xt(this.clicked_geometry,this.clicked_material),this.clicked_mesh.position.set(0,0,1e4),this.scene.add(this.clicked_mesh),this.return_1_geometry=new qr(e),this.return_1_material=new Ui({color:r}),this.return_1_mesh=new xt(this.return_1_geometry,this.return_1_material),this.return_1_mesh.position.set(0,0,1e4),this.scene.add(this.return_1_mesh),this.return_2_geometry=new qr(e),this.return_2_material=new Ui({color:i}),this.return_2_mesh=new xt(this.return_2_geometry,this.return_2_material),this.return_2_mesh.position.set(0,0,1e4),this.scene.add(this.return_2_mesh)}initializeEventListeners(){this.renderer.domElement.addEventListener("click",e=>{this.simulationParameters.activeBehavior!=bo&&(this.clickedMousePositionNDC=bg(this.renderer.domElement,e),this.newClickedPosition=!0)},!1),this.renderer.domElement.addEventListener("mousemove",e=>{this.simulationParameters.activeBehavior!=bo&&e.buttons&1&&(this.clickedMousePositionNDC=bg(this.renderer.domElement,e),this.newClickedPosition=!0)},!1)}getTexturedPlaneMinX(){console.error("getTexturedPlaneMinX not defined")}getTexturedPlaneMaxX(){console.error("getTexturedPlaneMaxX not defined")}getTexturedPlaneMinY(){console.error("getTexturedPlaneMinY not defined")}getTexturedPlaneMaxY(){console.error("getTexturedPlaneMaxY not defined")}getDefaultCameraDistance(){console.error("getTexturedPlaneMaxY not defined")}rayCastAndMovePosition(e){console.error("rayCastAndMovePosition not defined")}updateParametersData(e,n,r,i,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y){this.simulationParameters.mu=parseFloat(e),this.simulationParameters.angular_velocity=parseFloat(n),this.simulationParameters.use_constant_velocity=r,this.simulationParameters.seed_energy=parseFloat(i),this.simulationParameters.seed_position_x=parseFloat(l),this.simulationParameters.seed_position_y=parseFloat(c),this.simulationParameters.setSeedDirection(parseFloat(o),parseFloat(s),parseFloat(a)),this.simulationParameters.step_size=parseFloat(u),this.simulationParameters.max_steps=parseInt(d),this.simulationParameters.termination_method=parseInt(f),this.simulationParameters.domain_min_x=parseFloat(p),this.simulationParameters.domain_max_x=parseFloat(_),this.simulationParameters.domain_dimension_x=this.simulationParameters.domain_max_x-this.simulationParameters.domain_min_x,this.simulationParameters.domain_pixels_x=parseInt(v),this.simulationParameters.domain_min_y=parseFloat(m),this.simulationParameters.domain_max_y=parseFloat(h),this.simulationParameters.domain_dimension_y=this.simulationParameters.domain_max_y-this.simulationParameters.domain_min_y,this.simulationParameters.domain_pixels_y=parseInt(g),this.simulationParameters.angle_pixels_x=parseInt(x),this.simulationParameters.angle_pixels_y=parseInt(y)}updateParametersRendering(e,n,r,i,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T,b,C,M,S){this.simulationParameters.max_radius_bodies=e,this.simulationParameters.radius_center_of_mass=n,this.simulationParameters.radius_clicked_position=r,this.simulationParameters.radius_clicked_position_aux=i,this.simulationParameters.radius_clicked_position_aux_sphere=o,this.simulationParameters.rendering_ftle_type=parseInt(s),this.simulationParameters.rendering_texture_mode=parseInt(a),this.simulationParameters.rendering_specialized_mode=parseInt(l),this.simulationParameters.return_layer=parseInt(c),this.simulationParameters.rendering_forward=u,this.simulationParameters.rendering_raw_mode=parseInt(d),this.simulationParameters.rendering_raw_mode_layer=parseInt(f),this.simulationParameters.rendering_raw_mode_x_texture_index=parseInt(p),this.simulationParameters.rendering_raw_mode_y_texture_index=parseInt(_),this.simulationParameters.scalar_min=parseFloat(v),this.simulationParameters.scalar_max=parseFloat(m),this.simulationParameters.opacity=parseFloat(h),this.simulationParameters.tube_segment_length=parseFloat(g),this.simulationParameters.tube_max_segments=parseInt(x),this.simulationParameters.tube_num_sides=parseInt(y),this.simulationParameters.tube_radius=parseFloat(w),this.simulationParameters.tube_only_show_successful_returns=T,this.simulationParameters.tube_color=parseInt(b,16),this.simulationParameters.tube_roughness=C,this.simulationParameters.tube_emissive_intensity=M,this.simulationParameters.rendering_scale_vertices=S}updateParametersActiveBehavior(e,n){this.simulationParameters.activeBehavior=e,this.simulationParameters.linkedViewsActive=n}computeStuff(){this.offscreenRendererSeeds.updateTexturedPlane(),this.offscreenRendererSeeds.compute(),this.offscreenRendererSeedsAndReturns.updateTexturedPlane(),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererSeeds.renderTarget.texture,0),this.offscreenRendererSeedsBackwards.updateTexturedPlane(),this.offscreenRendererSeedsBackwards.compute(),this.offscreenRendererSeedsAndReturnsBackwards.updateTexturedPlane(),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererSeedsBackwards.renderTarget.texture,0),this.offscreenRendererFlowMap.updateTexturedPlane(),this.offscreenRendererFlowMap.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture,1),this.OffscreenRendererFTLE.updateTexturedPlane(),this.OffscreenRendererFTLE.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture,1),this.offscreenRendererFlowMapBackwards.updateTexturedPlane(),this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture,1),this.OffscreenRendererFTLEBackwards.updateTexturedPlane(),this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(1),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture,1),this.simulationParameters.termination_method!=dd&&(this.offscreenRendererFlowMap.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.offscreenRendererFlowMap.renderTarget.texture,2),this.OffscreenRendererFTLE.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturns.copyTextureToLayer(this.OffscreenRendererFTLE.renderTarget.texture,2),this.offscreenRendererFlowMapBackwards.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.offscreenRendererFlowMapBackwards.renderTarget.texture,2),this.OffscreenRendererFTLEBackwards.computeTargetLayerAt0(2),this.offscreenRendererSeedsAndReturnsBackwards.copyTextureToLayer(this.OffscreenRendererFTLEBackwards.renderTarget.texture,2)),this.offscreenRendererGravitationalForce.updateTexturedPlane(),this.offscreenRendererGravitationalForce.compute(),this.computeAdditionalStuff()}computeAdditionalStuff(){}updateTexturedPlane(){var e=this.getTexturedPlaneMinX(),n=this.getTexturedPlaneMaxX(),r=this.getTexturedPlaneMinY(),i=this.getTexturedPlaneMaxY(),o=n-e,s=i-r,a=.5*(e+n),l=.5*(r+i);this.textureRenderer.updateTransform(a,l,o,s),this.changeDisplayedTexture(this.textureRenderer),this.textureRenderer.updateTexturedMesh()}updateAxes(){console.error("updateAxes not defined")}alignCameraWithDomain(e,n,a,l,c,u){var a=this.getTexturedPlaneMinX(),l=this.getTexturedPlaneMaxX(),c=this.getTexturedPlaneMinY(),u=this.getTexturedPlaneMaxY(),d=.5*(a+l),f=.5*(c+u);e.position.set(d,f,this.getDefaultCameraDistance()),n.target.set(d,f,0),e.up.set(0,1,0),console.log(e.position)}changeDisplayedTexture(e){switch(this.simulationParameters.rendering_texture_mode){case sr:this.changeDisplayedTextureSpecialized(e);break;case Cu:this.changeDisplayedTextureRaw(e);break;case F0:this.changeDisplayedTextureRaw(e);break;default:console.error("Error: Unknown rendering_texture_mode",this.simulationParameters.rendering_texture_mode);break}}changeDisplayedTextureSpecialized(e){var n,r;switch(this.simulationParameters.rendering_specialized_mode){case ld:n=this.offscreenRendererGravitationalForce,r=this.offscreenRendererGravitationalForce;break;case F9:n=this.offscreenRendererGravitationalForce,r=this.offscreenRendererGravitationalForce;break;case k0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case B0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case $0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case V0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case G0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case H0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case El:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case Za:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case W0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case cd:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case k9:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;case X0:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;default:console.error("Error: Unknown rendering_specialized_mode",this.simulationParameters.rendering_specialized_mode);break}e.changeDisplayedTexture(n.renderTarget.texture),e.changeDisplayedTextureBackwards(r.renderTarget.texture)}changeDisplayedTextureRaw(e){var n,r;switch(this.simulationParameters.rendering_raw_mode){case B9:n=this.offscreenRendererSeeds,r=this.offscreenRendererSeedsBackwards;break;case ud:n=this.offscreenRendererGravitationalForce,r=this.offscreenRendererGravitationalForce;break;case $9:n=this.offscreenRendererFlowMap,r=this.offscreenRendererFlowMapBackwards;break;case V9:n=this.offscreenRendererSeedsAndReturns,r=this.offscreenRendererSeedsAndReturnsBackwards;break;default:console.error("Error: Unknown rendering_raw_mode",this.simulationParameters.rendering_raw_mode);break}e.changeDisplayedTexture(n.renderTarget.texture),e.changeDisplayedTextureBackwards(r.renderTarget.texture)}updateClickedPosition(){var e=this.simulationParameters.getClickedPositionRadius(this.renderer_id);if(this.clicked_mesh.scale.set(e,e,e),this.return_1_mesh.scale.set(e,e,e),this.return_2_mesh.scale.set(e,e,e),this.clicked_mesh_spherical_view){var e=this.simulationParameters.radius_clicked_position_aux_sphere;this.clicked_mesh_spherical_view.scale.set(e,e,e)}}recalculateStreamlineFromSimulationParameters(){console.warn("recalculateStreamlineFromSimulationParameters");var e=this.simulationParameters.seed_position_x,n=this.simulationParameters.seed_position_y,r=0,i=this.simulationParameters.seed_direction_x,o=this.simulationParameters.seed_direction_y,s=this.simulationParameters.seed_direction_z,a=this.simulationParameters.seed_energy;console.warn("dir",i,o,s),this.streamlineGenerator.recalculateMulti(0,e,n,r,i,o,s,a),this.streamlineGenerator.updateMultiModel(0)}recalculateStreamlineAtPosition(e,n,r){console.warn("recalculateStreamlineAtPosition");var i=this.simulationParameters.seed_direction_x,o=this.simulationParameters.seed_direction_y,s=this.simulationParameters.seed_direction_z,a=this.simulationParameters.seed_energy;this.streamlineGenerator.recalculateMulti(0,e,n,r,i,o,s,a),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}recalculateStreamlineKeepPosition(){console.warn("recalculateStreamlineKeepPosition");var e=this.simulationParameters.seed_direction_x,n=this.simulationParameters.seed_direction_y,r=this.simulationParameters.seed_direction_z,i=this.simulationParameters.seed_energy;this.streamlineGenerator.recalculateMultiKeepPosition(0,e,n,r,i),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}recalculateStreamlineWithLastParameters(){console.warn("recalculateStreamlineWithLastParameters"),this.streamlineGenerator.recalculateMultiWithLastParameters(0),this.streamlineGenerator.updateMultiModel(0),this.repositionReturnSpheres()}updateStreamlineModel(){this.streamlineGenerator.updateMultiModel(0)}repositionReturnSpheres(){if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length>0){var e=this.streamlineGenerator.list_multi[0].list_point_data_returns[0];this.return_1_mesh.position.set(e.position[0],e.position[1],0)}else this.return_1_mesh.position.set(0,0,1e4);if(this.streamlineGenerator.list_multi[0].list_point_data_returns.length>1){var e=this.streamlineGenerator.list_multi[0].list_point_data_returns[1];this.return_2_mesh.position.set(e.position[0],e.position[1],0)}else this.return_2_mesh.position.set(0,0,1e4)}updateBehavior(){this.simulationParameters.activeBehavior!=this.activeBehaviorLastFrame&&(this.activeBehaviorLastFrame=this.simulationParameters.activeBehavior,this.simulationParameters.activeBehavior==bo&&(this.controls.noRotate=!1,this.controls_sphere&&(this.controls_sphere.noRotate=!1)),this.simulationParameters.activeBehavior==z9&&(this.controls.noRotate=!0,this.controls_sphere&&(this.controls_sphere.noRotate=!0)))}preRender(){this.newClickedPosition&&(this.newClickedPosition=!1,this.seed_changed=!0,this.rayCastAndMovePosition(this.clickedMousePositionNDC)),this.seed_changed&&(this.seed_changed=!1,this.simulationParameters.linkedViewsActive&&this.computeStuff(),this.recalculateStreamlineFromSimulationParameters(),this.repositionReturnSpheres(),this.repositionSeedSpheres())}repositionSeedSpheres(){console.error("repositionSeedSpheres not defined")}}class pI extends NE{constructor(e,n,r,i,o){super(JM,e,n,r,i,o,!0,!1),console.warn("CONSTRUCTOR SceneWrapperVisualizationMain")}initializeAdditionalObjects(){this.initializeBodies()}initializeBodies(){var e=1;this.primary_geometry=new qr(e),this.primary_material=new Ui({color:16711680}),this.primary_mesh=new xt(this.primary_geometry,this.primary_material),this.primary_mesh.position.set(1,0,0),this.scene.add(this.primary_mesh),this.secondary_geometry=new qr(e),this.secondary_material=new Ui({color:65280}),this.secondary_mesh=new xt(this.secondary_geometry,this.secondary_material),this.secondary_mesh.position.set(-1,0,0),this.scene.add(this.secondary_mesh),this.center_geometry=new qr(e),this.center_material=new Ui({color:255}),this.center_mesh=new xt(this.center_geometry,this.center_material),this.center_mesh.position.set(0,0,0),this.scene.add(this.center_mesh)}getTexturedPlaneMinX(){return this.simulationParameters.domain_min_x}getTexturedPlaneMaxX(){return this.simulationParameters.domain_max_x}getTexturedPlaneMinY(){return this.simulationParameters.domain_min_y}getTexturedPlaneMaxY(){return this.simulationParameters.domain_max_y}getDefaultCameraDistance(){return 11}updateVisualElements(){this.updateBodies(),this.updateClickedPosition(),this.updateStreamlineModel(),this.updateTexturedPlane(),this.updateAxes()}updateBodies(){var e=this.simulationParameters.getPrimaryRadius();this.primary_mesh.scale.set(e,e,e);var e=this.simulationParameters.getSecondaryRadius();this.secondary_mesh.scale.set(e,e,e);var e=this.simulationParameters.getCenterOfMassRadius();this.center_mesh.scale.set(e,e,e),this.primary_mesh.position.set(this.simulationParameters.getPrimaryX(),0,0),this.secondary_mesh.position.set(this.simulationParameters.getSecondaryX(),0,0)}updateAxes(){var e=!0,n=.5,r=this.simulationParameters.domain_min_x,i=this.simulationParameters.domain_max_x,o=this.simulationParameters.domain_min_y,s=this.simulationParameters.domain_max_y,a=i-r,l=s-o,c=Math.min(a,l),u=.02*c/16,d=16711680,f=65280,p=255;this.objectAxes.rebuild(e,n,this.scene,this.simulationParameters,r,i,o,s,u,d,f,p)}rayCastAndMovePosition(e){var n=new ge;n.x=e.x,n.y=e.y,this.raycaster.setFromCamera(n,this.camera);const r=this.raycaster.intersectObject(this.plane_mesh);r.length>0&&(this.simulationParameters.seed_position_x=r[0].point.x,this.simulationParameters.seed_position_y=r[0].point.y,et.emit(U9,{}))}repositionSeedSpheres(){this.clicked_mesh.position.set(this.simulationParameters.seed_position_x,this.simulationParameters.seed_position_y,0)}OnSeedDirectionChanged(){console.warn("OnSeedDirectionChanged"),this.seed_changed=!0}}class am extends E.Component{constructor(n){super(n);Fe(this,"handleResize",()=>{console.log("handleResize"),this.updateCanvasSize()});Fe(this,"handleEventCameraUpdate",()=>{console.log("handleEventCameraUpdate"),this.updateControls(),this.updateCamera()});Fe(this,"renderLoop",()=>{this.frame_counter==1&&this.initializationCompleted(),this.frame_counter>=0&&(this.frame_counter+=1),this.updateParametersActiveBehavior(),this.sceneWrapper.updateBehavior(),this.sceneWrapper.preRender(),this.active_controls.update(),this.renderer.render(this.active_scene,this.active_camera),requestAnimationFrame(this.renderLoop)});Fe(this,"saveBlob",function(){const n=document.createElement("a");return document.body.appendChild(n),n.style.display="none",function(i,o){const s=window.URL.createObjectURL(i);n.href=s,n.download=o,n.click()}}());console.warn("CONSTRUCTOR ThreeContainer")}componentDidMount(){console.warn("ThreeScene::componentDidMount"),this.frame_counter=0,this.list_cameras=[],this.list_controls=[],this.initializeScene(),this.initializeRenderer(),this.initializeCamera(),this.initializeControls(),this.initializeRayCaster(),this.initializeEventHandlers(),this.initializeAdditional(),this.updateCanvasSize(),this.updateControls(),this.updateParameters(),this.computeStuff(),this.updateVisualElements(),this.alignCameraWithDomain(),this.renderLoop()}initializeScene(){this.scene=new nm,this.scene.background=new it(16777215),this.active_scene=this.scene}initializeRenderer(){this.renderer=new A3({antialias:!0}),this.renderer.setSize(10,10),this.mount.appendChild(this.renderer.domElement)}initializeCamera(){this.camera=new xn(75,1,.01,100),this.camera.useQuaternion=!0,this.camera.position.z=11,this.scene.add(this.camera),this.active_camera=this.camera,this.list_cameras.push(this.camera)}initializeControls(){this.controls=new AE(this.camera,this.renderer.domElement),this.controls.update(),this.active_controls=this.controls,this.list_controls.push(this.controls)}initializeRayCaster(){this.raycaster=new X3}initializeEventHandlers(){window.addEventListener("resize",this.handleResize),et.on(D9,this.handleResize),et.on(L9,this.handleEventCameraUpdate)}initializeAdditional(){console.error("initializeAdditional not defined")}loadScene(){console.error("loadScene not defined")}initializationCompleted(){et.emit(O9,{})}updateCanvasSize(){var n=this.renderer.domElement,r=this.renderer.domElement.parentElement;n.style.width="100%",n.style.height="100%";for(var i=r.clientWidth,o=r.clientHeight,s=0;s<this.list_cameras.length;s++){var a=this.list_cameras[s];a.aspect=i/o,a.updateProjectionMatrix()}for(var s=0;s<this.list_controls.length;s++){var l=this.list_controls[s];l.handleResize(),l.update()}this.renderer.setSize(i,o,!1),this.renderer.render(this.active_scene,this.active_camera),console.warn("RESIZE")}updateControls(){this.updateControlsInstance(this.controls)}updateCamera(){this.updateCameraInstance(this.camera)}updateControlsInstance(n){const{uiState:r}=this.context;n.rotateSpeed=r.UI_STATE_CAMERA_CONTROLS_ROTATESPEED*5,n.panSpeed=r.UI_STATE_CAMERA_CONTROLS_PANSPEED*.3,n.zoomSpeed=r.UI_STATE_CAMERA_CONTROLS_ZOOMSPEED*1.2,n.update()}updateCameraInstance(n){const{uiState:r}=this.context;n.near=parseFloat(r.UI_STATE_CAMERA_NEAR),n.far=parseFloat(r.UI_STATE_CAMERA_FAR),n.updateProjectionMatrix()}updateParameters(){this.updateParametersData(),this.updateParametersRendering(),this.updateParametersActiveBehavior()}computeStuff(){console.error("computeStuff not defined")}updateVisualElements(){console.error("updateVisualElements not defined")}writeSeedDataToUI(){console.warn("writeSeedDataToUI",this.sceneWrapper.simulationParameters.seed_position_x,this.sceneWrapper.simulationParameters.seed_position_y);const{uiState:n,setUiState:r}=this.context;r({UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X:this.sceneWrapper.simulationParameters.seed_direction_x,UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y:this.sceneWrapper.simulationParameters.seed_direction_y,UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z:this.sceneWrapper.simulationParameters.seed_direction_z,UI_STATE_DATA_PHYSICS_SEED_POSITION_X:this.sceneWrapper.simulationParameters.seed_position_x,UI_STATE_DATA_PHYSICS_SEED_POSITION_Y:this.sceneWrapper.simulationParameters.seed_position_y})}updateParametersData(){const{uiState:n}=this.context;var r=n.UI_STATE_DATA_PHYSICS_MU,i=n.UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY,o=n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY,s=n.UI_STATE_DATA_PHYSICS_SEED_ENERGY,a=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X,l=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y,c=n.UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z,u=n.UI_STATE_DATA_PHYSICS_SEED_POSITION_X,d=n.UI_STATE_DATA_PHYSICS_SEED_POSITION_Y,f=n.UI_STATE_DATA_INTEGRATION_STEP_SIZE,p=n.UI_STATE_DATA_INTEGRATION_MAX_STEPS,_=n.UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD,v=n.UI_STATE_DATA_DOMAIN_MIN_X,m=n.UI_STATE_DATA_DOMAIN_MAX_X,h=n.UI_STATE_DATA_DOMAIN_PIXELS_X,g=n.UI_STATE_DATA_DOMAIN_MIN_Y,x=n.UI_STATE_DATA_DOMAIN_MAX_Y,y=n.UI_STATE_DATA_DOMAIN_PIXELS_Y,w=n.UI_STATE_DATA_ANGLE_PIXELS_X,T=n.UI_STATE_DATA_ANGLE_PIXELS_Y;this.sceneWrapper.updateParametersData(r,i,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T)}updateParametersRendering(){const{uiState:n}=this.context;var r=n.UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES,i=n.UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS,o=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS,s=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX,a=n.UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE,l=n.UI_STATE_RENDERING_FTLE_TYPE,c=n.UI_STATE_RENDERING_TEXTURE_MODE,u=n.UI_STATE_RENDERING_SPECIALIZED_MODE,d=n.UI_STATE_RENDERING_RETURN_NUMBER,f=n.UI_STATE_RENDERING_DIRECTION,p=n.UI_STATE_RENDERING_RAW_MODE,_=n.UI_STATE_RENDERING_RAW_MODE_LAYER,v=n.UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX,m=n.UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX,h=n.UI_STATE_RENDERING_SCALAR_MIN,g=n.UI_STATE_RENDERING_SCALAR_MAX,x=n.UI_STATE_RENDERING_OPACITY,y=n.UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH,w=n.UI_STATE_RENDERING_TUBE_MAX_SEGMENTS,T=n.UI_STATE_RENDERING_TUBE_NUM_SIDES,b=n.UI_STATE_RENDERING_TUBE_RADIUS,C=n.UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS,M=n.UI_STATE_RENDERING_TUBE_COLOR,S=n.UI_STATE_RENDERING_TUBE_ROUGHNESS,L=n.UI_STATE_RENDERING_TUBE_EMISSIVE_INTENSITY,O=n.UI_STATE_RENDERING_SCALE_VERTICES;this.sceneWrapper.updateParametersRendering(r,i,o,s,a,l,c,u,d,f,p,_,v,m,h,g,x,y,w,T,b,C,M,S,L,O)}updateParametersActiveBehavior(){const{uiState:n}=this.context;var r=n.UI_STATE_ACTIVE_BEHAVIOR,i=n.UI_STATE_LINKED_VIEWS_ACTIVE;this.sceneWrapper.updateParametersActiveBehavior(r,i),this.sceneWrapper.updateBehavior()}alignCameraWithDomain(){this.sceneWrapper.alignCameraWithDomain(this.camera,this.controls),console.log(this.camera.position)}render(){return I.jsx("div",{className:"parent h-full w-full p-2",children:I.jsx("div",{className:"child flex flex-1 h-full w-full",ref:n=>{this.mount=n}})})}}Fe(am,"contextType",Kn);class mI extends am{constructor(n){super(n);Fe(this,"handleEventDownload",()=>{console.warn("handleEventDownload"),this.saveImage()});Fe(this,"handleEventFullUpdate",()=>{console.warn("handleEventFullUpdate"),this.updateParametersData(),this.updateParametersRendering(),this.computeStuff(),this.updateVisualElements()});Fe(this,"handleEventDataUpdate",()=>{console.warn("handleEventDataUpdate"),this.updateParametersData(),this.computeStuff(),this.updateVisualElements()});Fe(this,"handleEventDataUpdateStreamline",()=>{console.warn("handleEventDataUpdateStreamline"),this.updateParametersData(),this.computeStreamline(),this.updateVisualElements()});Fe(this,"handleEventRenderingUpdate",()=>{console.log("handleEventRenderingUpdate"),this.updateParametersRendering(),this.updateVisualElements()});Fe(this,"handleEventAlignCamera",()=>{console.log("handleEventAlignCamera"),this.alignCameraWithDomain()});Fe(this,"handleEventSeedDirectionChanged",()=>{console.log("handleEventSeedDirectionChanged"),this.sceneWrapper.OnSeedDirectionChanged(),this.writeSeedDataToUI()});this.auxRef=n.auxRef,console.warn("CONSTRUCTOR ThreeContainerMain")}initializeAdditional(){et.on(z0,this.handleEventDownload),et.on(D0,this.handleEventFullUpdate),et.on(N0,this.handleEventDataUpdate),et.on(N9,this.handleEventDataUpdateStreamline),et.on(L0,this.handleEventRenderingUpdate),et.on(U0,this.handleEventAlignCamera),et.on(cp,this.handleEventSeedDirectionChanged),this.sceneWrapper=new pI(this.renderer,this.scene,this.camera,this.controls,this.raycaster),this.sceneWrapper.initialize()}computeStuff(){console.warn("computeStuff"),this.sceneWrapper.computeStuff(),this.sceneWrapper.recalculateStreamlineFromSimulationParameters(),this.sceneWrapper.repositionReturnSpheres(),this.sceneWrapper.repositionSeedSpheres()}computeStreamline(){console.warn("computeStreamline"),this.sceneWrapper.recalculateStreamlineFromSimulationParameters(),this.sceneWrapper.repositionReturnSpheres(),this.sceneWrapper.repositionSeedSpheres()}updateVisualElements(){this.sceneWrapper.updateVisualElements()}saveImage(){this.renderer.render(this.active_scene,this.active_camera);var n=this.renderer.domElement;n.toBlob(r=>{this.saveBlob(r,"capture-main.png")})}}const _I=t=>t[0];class vI extends DE{constructor(e,n,r,i,o,s){super(e,n,r,i,o,s),console.warn("CONSTRUCTOR: TextureRendererSphere")}initializeTexturedGeometry(){this.spherelikeGrid=new eI(this.scene,this.textured_material);var e=!1,n=100,r=100;this.spherelikeGrid.updateGrid(e,n,r),this.textured_mesh=this.spherelikeGrid.mesh}vertexShader(){return""+this.getUniformsString()+sm+`
`+IE+`
`+_I`
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
                int y_virtual = 1;
                int z_layer = 0;
                int component = 0;
                bool forward = rendering_forward;
                a = InterpolateScalarWrapper(forward, x_frac, y_frac, x_virtual, y_virtual, z_layer, component);
                a = max(a, 0.0);
                //pos = vec3(x_frac, y_frac, 0);
                pos *= a;
            }

            vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * modelViewPosition; 
        }
        `+`
`+PE}shouldScaleVerticesByVelocityMagnitude(){return this.simulationParameters.rendering_texture_mode==sr&&this.simulationParameters.rendering_specialized_mode==cd&&this.simulationParameters.rendering_scale_vertices}addAdditionalUniforms(){super.addAdditionalUniforms(),this.uniforms.is_plane={type:"bool",value:!1}}}class gI extends NE{constructor(e,n,r,i,o,s,a,l){super(Iu,e,n,r,i,o,!1,!0),console.warn("CONSTRUCTOR SceneWrapperVisualizationAux"),this.scene_sphere=s,this.camera_sphere=a,this.controls_sphere=l;var c=!0;this.textureRendererSphere=new vI(Iu,e,this.simulationParameters,this.colorMaps,this.scene_sphere,c)}initializeAdditionalObjects(){this.initializeAxesArrowsPart2(),this.initializeAxesThetaDown(),this.initializeAxesArrowsSpheres(),this.initializeSpherelikeGrid(),this.initializeClickedPositionMarkerSphericalGrid()}getTexturedPlaneMinX(){return 0}getTexturedPlaneMaxX(){return 1}getTexturedPlaneMinY(){return 0}getTexturedPlaneMaxY(){return 1}getDefaultCameraDistance(){return .75}updateVisualElements(){this.updateClickedPosition(),this.updateStreamlineModel(),this.updateTexturedPlane(),this.updateTexturedSphere(),this.updateAxes(),this.repositionSeedSpheres()}updateTexturedSphere(){this.getTexturedPlaneMinX(),this.getTexturedPlaneMaxX(),this.getTexturedPlaneMinY(),this.getTexturedPlaneMaxY(),this.changeDisplayedTexture(this.textureRendererSphere),this.textureRendererSphere.updateTexturedMesh()}initializeAxesArrowsPart2(){var e=!1,n=.5,r=0,i=1,o=0,s=1,a=.002,l=65535,c=16711935,u=0;this.objectAxes.rebuild(e,n,this.scene,this.simulationParameters,r,i,o,s,a,l,c,u)}updateAxes(){}initializeLightSpheres(){this.directionalLight_sphere=new ME(16777215,1),this.directionalLight_sphere.position.set(0,0,0),this.camera_sphere.add(this.directionalLight_sphere),this.directionalLightTarget_sphere=new Gt,this.camera_sphere.add(this.directionalLightTarget_sphere),this.directionalLightTarget_sphere.position.set(0,0,-1),this.directionalLight_sphere.target=this.directionalLightTarget_sphere;const e=new bE(4210752);this.scene_sphere.add(e)}initializeAxesThetaDown(){console.warn("#999 initializeAxesThetaDown");var e=Er(-4,-4,0),n=8,f=.02,r=5,i=.05,o=!0;this.objectAxes_thetaDown=new Ep(e,n,n,n,f,r,i,o),this.objectAxes_thetaDown.addToScene(this.scene);var s=!1,a=1,l=0,c=1,u=0,d=1,f=.002,p=65535,_=16711935,v=0;this.objectAxes_thetaDown.rebuild(s,a,this.scene,this.simulationParameters,l,c,u,d,f,p,_,v)}initializeAxesArrowsSpheres(){var e=Er(-4,-4,0),n=8,f=.02,r=5,i=.05,o=!1;this.objectAxes_spheres=new Ep(e,n,n,n,f,r,i,o),this.objectAxes_spheres.addToScene(this.scene_sphere);var s=!0,a=1,l=0,c=1.25,u=0,d=1.25,f=.002,p=16711680,_=65280,v=255;this.objectAxes_spheres.rebuild(s,a,this.scene_sphere,this.simulationParameters,l,c,u,d,f,p,_,v)}initializeSpherelikeGrid(){this.textureRendererSphere.initialize()}initializeClickedPositionMarkerSphericalGrid(){var e=1;this.clicked_geometry_spherical_view=new qr(e),this.clicked_material_spherical_view=new Ui({color:0}),this.clicked_mesh_spherical_view=new xt(this.clicked_geometry_spherical_view,this.clicked_material_spherical_view),this.clicked_mesh_spherical_view.position.set(0,0,1e4),this.scene_sphere.add(this.clicked_mesh_spherical_view)}computeAdditionalStuff(){var e=!1;this.textureRendererSphere.spherelikeGrid.updateGrid(e,this.offscreenRendererSeedsAndReturns.getPlaneDimensionX(),this.offscreenRendererSeedsAndReturns.getPlaneDimensionY())}rayCastAndMovePosition(e){var n=new ge;if(n.x=e.x,n.y=e.y,this.simulationParameters.active_aux_scene_index==Ll){this.raycaster.setFromCamera(n,this.camera);const o=this.raycaster.intersectObject(this.plane_mesh);if(o.length>0){var r=Mg(o[0].point.x,0,1),i=Mg(o[0].point.y,0,1);this.simulationParameters.setSeedDirectionAnglesFromFrac(r,i),et.emit(cp,{})}}else{this.raycaster.setFromCamera(n,this.camera_sphere);const o=this.raycaster.intersectObject(this.textureRendererSphere.spherelikeGrid.mesh);o.length>0&&(console.log("spherelikeGrid intersection",o[0].point),this.simulationParameters.setSeedDirection(o[0].point.x,o[0].point.y,o[0].point.z),et.emit(cp,{}))}}recalculateStreamlineFromSimulationParameters(){}repositionSeedSpheres(){this.clicked_mesh_spherical_view.position.set(this.simulationParameters.seed_direction_x,this.simulationParameters.seed_direction_y,this.simulationParameters.seed_direction_z),this.simulationParameters.auxGridDirection==$i?this.clicked_mesh.position.set(this.simulationParameters.seed_direction_phi_frac,1-this.simulationParameters.seed_direction_theta_frac,0):this.simulationParameters.auxGridDirection==Pu?this.clicked_mesh.position.set(this.simulationParameters.seed_direction_theta_frac,this.simulationParameters.seed_direction_phi_frac,0):console.error("repositionSeedSpheres: unkown auxGridDirection",this.simulationParameters.auxGridDirection)}OnSeedPositionChanged(){console.warn("OnSeedPositionChanged"),this.seed_changed=!0}switchGridDirection(e){console.warn("#999 switchGridDirection",e),this.simulationParameters.auxGridDirection=e,e==$i?(this.objectAxes.removefromScene(this.scene),this.objectAxes_thetaDown.removefromScene(this.scene),this.objectAxes_thetaDown.addToScene(this.scene)):e==Pu?(this.objectAxes.removefromScene(this.scene),this.objectAxes_thetaDown.removefromScene(this.scene),this.objectAxes.addToScene(this.scene)):console.error("switchGridDirection unkown value",e)}}class xI extends am{constructor(n){super(n);Fe(this,"handleEventDownload",()=>{console.warn("handleEventDownload"),this.saveImage()});Fe(this,"handleEventFullUpdate",()=>{console.warn("handleEventFullUpdate"),this.updateParametersData(),this.updateParametersRendering(),this.computeStuff(),this.updateVisualElements()});Fe(this,"handleEventDataUpdate",()=>{console.warn("aux handleEventDataUpdate"),this.updateParametersData(),this.computeStuff(),this.updateVisualElements()});Fe(this,"handleEventRenderingUpdate",()=>{console.log("handleEventRenderingUpdate"),this.updateParametersRendering(),this.updateVisualElements()});Fe(this,"handleEventAlignCamera",()=>{console.log("handleEventAlignCamera"),this.alignCameraWithDomain()});Fe(this,"handleEventSelectChanged",n=>{switch(console.log("handleEventSelectChanged"),n.key){case"UI_STATE_AUX_CONTENT":this.switchToScene(n.value);break;case"UI_STATE_AUX_GRID_DIRECTION":this.switchGridDirection(n.value);break}});Fe(this,"handleEventSeedPositionChanged",()=>{console.log("handleEventSeedPositionChanged"),this.sceneWrapper.OnSeedPositionChanged(),this.writeSeedDataToUI()});this.mainRef=n.mainRef,console.warn("CONSTRUCTOR ThreeContainerAux")}initializeAdditional(){et.on(z0,this.handleEventDownload),et.on(D0,this.handleEventFullUpdate),et.on(N0,this.handleEventDataUpdate),et.on(L0,this.handleEventRenderingUpdate),et.on(U0,this.handleEventAlignCamera),et.on(O0,this.handleEventSelectChanged),et.on(U9,this.handleEventSeedPositionChanged),this.initializeAdditionalSceneSphere(),this.initializeAdditionalCameraSphere(),this.initializeAdditionalControlsSphere(),this.sceneWrapper=new gI(this.renderer,this.scene,this.camera,this.controls,this.raycaster,this.scene_sphere,this.camera_sphere,this.controls_sphere),this.sceneWrapper.initialize(),this.switchToScene(Ll),this.switchGridDirection($i)}switchToScene(n){this.sceneWrapper.simulationParameters.active_aux_scene_index=n,n==0?(this.active_scene=this.scene,this.active_camera=this.camera,this.active_controls=this.controls,this.controls.enabled=!0,this.controls_sphere.enabled=!1):(this.active_scene=this.scene_sphere,this.active_camera=this.camera_sphere,this.active_controls=this.controls_sphere,this.controls.enabled=!1,this.controls_sphere.enabled=!0)}switchGridDirection(n){this.sceneWrapper.switchGridDirection(n),this.updateVisualElements()}initializeAdditionalSceneSphere(){this.scene_sphere=new nm,this.scene_sphere.background=new it(16777215)}initializeAdditionalCameraSphere(){this.camera_sphere=new xn(75,1,.01,100),this.camera_sphere.position.z=2,this.scene_sphere.add(this.camera_sphere),this.list_cameras.push(this.camera_sphere)}initializeAdditionalControlsSphere(){this.controls_sphere=new AE(this.camera_sphere,this.renderer.domElement),this.controls_sphere.update(),this.list_controls.push(this.controls_sphere)}computeStuff(){this.sceneWrapper.computeStuff()}updateVisualElements(){this.sceneWrapper.updateVisualElements()}updateControls(){this.updateControlsInstance(this.controls),this.updateControlsInstance(this.controls_sphere)}saveImage(){this.renderer.render(this.active_scene,this.active_camera);var n=this.renderer.domElement;n.toBlob(r=>{this.saveBlob(r,"capture-aux.png")})}}function de(){return de=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},de.apply(this,arguments)}function qe(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function Ir(t,e=[]){let n=[];function r(o,s){const a=E.createContext(s),l=n.length;n=[...n,s];function c(d){const{scope:f,children:p,..._}=d,v=(f==null?void 0:f[t][l])||a,m=E.useMemo(()=>_,Object.values(_));return E.createElement(v.Provider,{value:m},p)}function u(d,f){const p=(f==null?void 0:f[t][l])||a,_=E.useContext(p);if(_)return _;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const i=()=>{const o=n.map(s=>E.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return E.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,yI(i,...e)]}function yI(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const d=l(o)[`__scope${c}`];return{...a,...d}},{});return E.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function EI(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function LE(...t){return e=>t.forEach(n=>EI(n,e))}function ft(...t){return E.useCallback(LE(...t),t)}const Qs=E.forwardRef((t,e)=>{const{children:n,...r}=t,i=E.Children.toArray(n),o=i.find(TI);if(o){const s=o.props.children,a=i.map(l=>l===o?E.Children.count(s)>1?E.Children.only(null):E.isValidElement(s)?s.props.children:null:l);return E.createElement(Sp,de({},r,{ref:e}),E.isValidElement(s)?E.cloneElement(s,void 0,a):null)}return E.createElement(Sp,de({},r,{ref:e}),n)});Qs.displayName="Slot";const Sp=E.forwardRef((t,e)=>{const{children:n,...r}=t;return E.isValidElement(n)?E.cloneElement(n,{...wI(r,n.props),ref:e?LE(e,n.ref):n.ref}):E.Children.count(n)>1?E.Children.only(null):null});Sp.displayName="SlotClone";const SI=({children:t})=>E.createElement(E.Fragment,null,t);function TI(t){return E.isValidElement(t)&&t.type===SI}function wI(t,e){const n={...e};for(const r in e){const i=t[r],o=e[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...t,...n}}function lm(t){const e=t+"CollectionProvider",[n,r]=Ir(e),[i,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=p=>{const{scope:_,children:v}=p,m=we.useRef(null),h=we.useRef(new Map).current;return we.createElement(i,{scope:_,itemMap:h,collectionRef:m},v)},a=t+"CollectionSlot",l=we.forwardRef((p,_)=>{const{scope:v,children:m}=p,h=o(a,v),g=ft(_,h.collectionRef);return we.createElement(Qs,{ref:g},m)}),c=t+"CollectionItemSlot",u="data-radix-collection-item",d=we.forwardRef((p,_)=>{const{scope:v,children:m,...h}=p,g=we.useRef(null),x=ft(_,g),y=o(c,v);return we.useEffect(()=>(y.itemMap.set(g,{ref:g,...h}),()=>void y.itemMap.delete(g))),we.createElement(Qs,{[u]:"",ref:x},m)});function f(p){const _=o(t+"CollectionConsumer",p);return we.useCallback(()=>{const m=_.collectionRef.current;if(!m)return[];const h=Array.from(m.querySelectorAll(`[${u}]`));return Array.from(_.itemMap.values()).sort((y,w)=>h.indexOf(y.ref.current)-h.indexOf(w.ref.current))},[_.collectionRef,_.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},f,r]}const an=globalThis!=null&&globalThis.document?E.useLayoutEffect:()=>{},MI=$p.useId||(()=>{});let bI=0;function da(t){const[e,n]=E.useState(MI());return an(()=>{n(r=>r??String(bI++))},[t]),e?`radix-${e}`:""}const AI=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ke=AI.reduce((t,e)=>{const n=E.forwardRef((r,i)=>{const{asChild:o,...s}=r,a=o?Qs:e;return E.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),E.createElement(a,de({},s,{ref:i}))});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function RI(t,e){t&&Bo.flushSync(()=>t.dispatchEvent(e))}function Xt(t){const e=E.useRef(t);return E.useEffect(()=>{e.current=t}),E.useMemo(()=>(...n)=>{var r;return(r=e.current)===null||r===void 0?void 0:r.call(e,...n)},[])}function dr({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,i]=CI({defaultProp:e,onChange:n}),o=t!==void 0,s=o?t:r,a=Xt(n),l=E.useCallback(c=>{if(o){const d=typeof c=="function"?c(t):c;d!==t&&a(d)}else i(c)},[o,t,i,a]);return[s,l]}function CI({defaultProp:t,onChange:e}){const n=E.useState(t),[r]=n,i=E.useRef(r),o=Xt(e);return E.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}const PI=E.createContext(void 0);function fa(t){const e=E.useContext(PI);return t||e||"ltr"}const ih="rovingFocusGroup.onEntryFocus",II={bubbles:!1,cancelable:!0},cm="RovingFocusGroup",[Tp,UE,DI]=lm(cm),[NI,gd]=Ir(cm,[DI]),[LI,UI]=NI(cm),OI=E.forwardRef((t,e)=>E.createElement(Tp.Provider,{scope:t.__scopeRovingFocusGroup},E.createElement(Tp.Slot,{scope:t.__scopeRovingFocusGroup},E.createElement(zI,de({},t,{ref:e}))))),zI=E.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,...u}=t,d=E.useRef(null),f=ft(e,d),p=fa(o),[_=null,v]=dr({prop:s,defaultProp:a,onChange:l}),[m,h]=E.useState(!1),g=Xt(c),x=UE(n),y=E.useRef(!1),[w,T]=E.useState(0);return E.useEffect(()=>{const b=d.current;if(b)return b.addEventListener(ih,g),()=>b.removeEventListener(ih,g)},[g]),E.createElement(LI,{scope:n,orientation:r,dir:p,loop:i,currentTabStopId:_,onItemFocus:E.useCallback(b=>v(b),[v]),onItemShiftTab:E.useCallback(()=>h(!0),[]),onFocusableItemAdd:E.useCallback(()=>T(b=>b+1),[]),onFocusableItemRemove:E.useCallback(()=>T(b=>b-1),[])},E.createElement(Ke.div,de({tabIndex:m||w===0?-1:0,"data-orientation":r},u,{ref:f,style:{outline:"none",...t.style},onMouseDown:qe(t.onMouseDown,()=>{y.current=!0}),onFocus:qe(t.onFocus,b=>{const C=!y.current;if(b.target===b.currentTarget&&C&&!m){const M=new CustomEvent(ih,II);if(b.currentTarget.dispatchEvent(M),!M.defaultPrevented){const S=x().filter(F=>F.focusable),L=S.find(F=>F.active),O=S.find(F=>F.id===_),B=[L,O,...S].filter(Boolean).map(F=>F.ref.current);OE(B)}}y.current=!1}),onBlur:qe(t.onBlur,()=>h(!1))})))}),FI="RovingFocusGroupItem",kI=E.forwardRef((t,e)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,...s}=t,a=da(),l=o||a,c=UI(FI,n),u=c.currentTabStopId===l,d=UE(n),{onFocusableItemAdd:f,onFocusableItemRemove:p}=c;return E.useEffect(()=>{if(r)return f(),()=>p()},[r,f,p]),E.createElement(Tp.ItemSlot,{scope:n,id:l,focusable:r,active:i},E.createElement(Ke.span,de({tabIndex:u?0:-1,"data-orientation":c.orientation},s,{ref:e,onMouseDown:qe(t.onMouseDown,_=>{r?c.onItemFocus(l):_.preventDefault()}),onFocus:qe(t.onFocus,()=>c.onItemFocus(l)),onKeyDown:qe(t.onKeyDown,_=>{if(_.key==="Tab"&&_.shiftKey){c.onItemShiftTab();return}if(_.target!==_.currentTarget)return;const v=VI(_,c.orientation,c.dir);if(v!==void 0){_.preventDefault();let h=d().filter(g=>g.focusable).map(g=>g.ref.current);if(v==="last")h.reverse();else if(v==="prev"||v==="next"){v==="prev"&&h.reverse();const g=h.indexOf(_.currentTarget);h=c.loop?GI(h,g+1):h.slice(g+1)}setTimeout(()=>OE(h))}})})))}),BI={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $I(t,e){return e!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function VI(t,e,n){const r=$I(t.key,n);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return BI[r]}function OE(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}function GI(t,e){return t.map((n,r)=>t[(e+r)%t.length])}const zE=OI,FE=kI;function HI(t,e){return E.useReducer((n,r)=>{const i=e[n][r];return i??n},t)}const Ji=t=>{const{present:e,children:n}=t,r=WI(e),i=typeof n=="function"?n({present:r.isPresent}):E.Children.only(n),o=ft(r.ref,i.ref);return typeof n=="function"||r.isPresent?E.cloneElement(i,{ref:o}):null};Ji.displayName="Presence";function WI(t){const[e,n]=E.useState(),r=E.useRef({}),i=E.useRef(t),o=E.useRef("none"),s=t?"mounted":"unmounted",[a,l]=HI(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return E.useEffect(()=>{const c=Ic(r.current);o.current=a==="mounted"?c:"none"},[a]),an(()=>{const c=r.current,u=i.current;if(u!==t){const f=o.current,p=Ic(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&f!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),an(()=>{if(e){const c=d=>{const p=Ic(r.current).includes(d.animationName);d.target===e&&p&&Bo.flushSync(()=>l("ANIMATION_END"))},u=d=>{d.target===e&&(o.current=Ic(r.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",c),e.addEventListener("animationend",c),()=>{e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",c),e.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:E.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Ic(t){return(t==null?void 0:t.animationName)||"none"}const kE="Tabs",[XI,W5]=Ir(kE,[gd]),BE=gd(),[jI,um]=XI(kE),YI=E.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,onValueChange:i,defaultValue:o,orientation:s="horizontal",dir:a,activationMode:l="automatic",...c}=t,u=fa(a),[d,f]=dr({prop:r,onChange:i,defaultProp:o});return E.createElement(jI,{scope:n,baseId:da(),value:d,onValueChange:f,orientation:s,dir:u,activationMode:l},E.createElement(Ke.div,de({dir:u,"data-orientation":s},c,{ref:e})))}),qI="TabsList",KI=E.forwardRef((t,e)=>{const{__scopeTabs:n,loop:r=!0,...i}=t,o=um(qI,n),s=BE(n);return E.createElement(zE,de({asChild:!0},s,{orientation:o.orientation,dir:o.dir,loop:r}),E.createElement(Ke.div,de({role:"tablist","aria-orientation":o.orientation},i,{ref:e})))}),ZI="TabsTrigger",JI=E.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,disabled:i=!1,...o}=t,s=um(ZI,n),a=BE(n),l=$E(s.baseId,r),c=VE(s.baseId,r),u=r===s.value;return E.createElement(FE,de({asChild:!0},a,{focusable:!i,active:u}),E.createElement(Ke.button,de({type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:l},o,{ref:e,onMouseDown:qe(t.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:qe(t.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:qe(t.onFocus,()=>{const d=s.activationMode!=="manual";!u&&!i&&d&&s.onValueChange(r)})})))}),QI="TabsContent",eD=E.forwardRef((t,e)=>{const{__scopeTabs:n,value:r,forceMount:i,children:o,...s}=t,a=um(QI,n),l=$E(a.baseId,r),c=VE(a.baseId,r),u=r===a.value,d=E.useRef(u);return E.useEffect(()=>{const f=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(f)},[]),E.createElement(Ji,{present:i||u},({present:f})=>E.createElement(Ke.div,de({"data-state":u?"active":"inactive","data-orientation":a.orientation,role:"tabpanel","aria-labelledby":l,hidden:!f,id:c,tabIndex:0},s,{ref:e,style:{...t.style,animationDuration:d.current?"0s":void 0}}),f&&o))});function $E(t,e){return`${t}-trigger-${e}`}function VE(t,e){return`${t}-content-${e}`}const tD=YI,GE=KI,HE=JI,WE=eD;function XE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=XE(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function nD(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=XE(t))&&(r&&(r+=" "),r+=e);return r}const dm="-";function rD(t){const e=oD(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;function i(s){const a=s.split(dm);return a[0]===""&&a.length!==1&&a.shift(),jE(a,e)||iD(s)}function o(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function jE(t,e){var s;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?jE(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const o=t.join(dm);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId}const Ng=/^\[(.+)\]$/;function iD(t){if(Ng.test(t)){const e=Ng.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function oD(t){const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return aD(Object.entries(t.classGroups),n).forEach(([o,s])=>{wp(s,r,o,e)}),r}function wp(t,e,n,r){t.forEach(i=>{if(typeof i=="string"){const o=i===""?e:Lg(e,i);o.classGroupId=n;return}if(typeof i=="function"){if(sD(i)){wp(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{wp(s,Lg(e,o),n,r)})})}function Lg(t,e){let n=t;return e.split(dm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function sD(t){return t.isThemeGetter}function aD(t,e){return e?t.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,i]}):t}function lD(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;function i(o,s){n.set(o,s),e++,e>t&&(e=0,r=n,n=new Map)}return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}}const YE="!";function cD(t){const e=t.separator,n=e.length===1,r=e[0],i=e.length;return function(s){const a=[];let l=0,c=0,u;for(let v=0;v<s.length;v++){let m=s[v];if(l===0){if(m===r&&(n||s.slice(v,v+i)===e)){a.push(s.slice(c,v)),c=v+i;continue}if(m==="/"){u=v;continue}}m==="["?l++:m==="]"&&l--}const d=a.length===0?s:s.substring(c),f=d.startsWith(YE),p=f?d.substring(1):d,_=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:_}}}function uD(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e}function dD(t){return{cache:lD(t.cacheSize),splitModifiers:cD(t),...rD(t)}}const fD=/\s+/;function hD(t,e){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,o=new Set;return t.trim().split(fD).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(s);let d=r(u?c.substring(0,u):c),f=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:s};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:s};f=!1}const p=uD(a).join(":");return{isTailwindClass:!0,modifierId:l?p+YE:p,classGroupId:d,originalClassName:s,hasPostfixModifier:f}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,u=a+l;return o.has(u)?!1:(o.add(u),i(l,c).forEach(d=>o.add(a+d)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function pD(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=qE(e))&&(r&&(r+=" "),r+=n);return r}function qE(t){if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=qE(t[r]))&&(n&&(n+=" "),n+=e);return n}function mD(t,...e){let n,r,i,o=s;function s(l){const c=e.reduce((u,d)=>d(u),t());return n=dD(c),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=hD(l,n);return i(l,u),u}return function(){return o(pD.apply(null,arguments))}}function _t(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const KE=/^\[(?:([a-z-]+):)?(.+)\]$/i,_D=/^\d+\/\d+$/,vD=new Set(["px","full","screen"]),gD=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xD=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yD=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ED=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,SD=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function kr(t){return So(t)||vD.has(t)||_D.test(t)}function pi(t){return ha(t,"length",PD)}function So(t){return!!t&&!Number.isNaN(Number(t))}function Dc(t){return ha(t,"number",So)}function Da(t){return!!t&&Number.isInteger(Number(t))}function TD(t){return t.endsWith("%")&&So(t.slice(0,-1))}function Ve(t){return KE.test(t)}function mi(t){return gD.test(t)}const wD=new Set(["length","size","percentage"]);function MD(t){return ha(t,wD,ZE)}function bD(t){return ha(t,"position",ZE)}const AD=new Set(["image","url"]);function RD(t){return ha(t,AD,DD)}function CD(t){return ha(t,"",ID)}function Na(){return!0}function ha(t,e,n){const r=KE.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1}function PD(t){return xD.test(t)&&!yD.test(t)}function ZE(){return!1}function ID(t){return ED.test(t)}function DD(t){return SD.test(t)}function ND(){const t=_t("colors"),e=_t("spacing"),n=_t("blur"),r=_t("brightness"),i=_t("borderColor"),o=_t("borderRadius"),s=_t("borderSpacing"),a=_t("borderWidth"),l=_t("contrast"),c=_t("grayscale"),u=_t("hueRotate"),d=_t("invert"),f=_t("gap"),p=_t("gradientColorStops"),_=_t("gradientColorStopPositions"),v=_t("inset"),m=_t("margin"),h=_t("opacity"),g=_t("padding"),x=_t("saturate"),y=_t("scale"),w=_t("sepia"),T=_t("skew"),b=_t("space"),C=_t("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",Ve,e],O=()=>[Ve,e],N=()=>["",kr,pi],B=()=>["auto",So,Ve],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",Ve],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[So,Dc],Z=()=>[So,Ve];return{cacheSize:500,separator:":",theme:{colors:[Na],spacing:[kr,pi],blur:["none","",mi,Ve],brightness:re(),borderColor:[t],borderRadius:["none","","full",mi,Ve],borderSpacing:O(),borderWidth:N(),contrast:re(),grayscale:H(),hueRotate:Z(),invert:H(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[TD,pi],inset:L(),margin:L(),opacity:re(),padding:O(),saturate:re(),scale:re(),sepia:H(),skew:Z(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",Ve]}],container:["container"],columns:[{columns:[mi]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),Ve]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Da,Ve]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ve]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",Da,Ve]}],"grid-cols":[{"grid-cols":[Na]}],"col-start-end":[{col:["auto",{span:["full",Da,Ve]},Ve]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Na]}],"row-start-end":[{row:["auto",{span:[Da,Ve]},Ve]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ve]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ve]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ve,e]}],"min-w":[{"min-w":[Ve,e,"min","max","fit"]}],"max-w":[{"max-w":[Ve,e,"none","full","min","max","fit","prose",{screen:[mi]},mi]}],h:[{h:[Ve,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ve,e,"auto","min","max","fit"]}],"font-size":[{text:["base",mi,pi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Dc]}],"font-family":[{font:[Na]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ve]}],"line-clamp":[{"line-clamp":["none",So,Dc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",kr,Ve]}],"list-image":[{"list-image":["none",Ve]}],"list-style-type":[{list:["none","disc","decimal",Ve]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",kr,pi]}],"underline-offset":[{"underline-offset":["auto",kr,Ve]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ve]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ve]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),bD]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",MD]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},RD]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[kr,Ve]}],"outline-w":[{outline:[kr,pi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[kr,pi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",mi,CD]}],"shadow-color":[{shadow:[Na]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",mi,Ve]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[x]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ve]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",Ve]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ve]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Da,Ve]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ve]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ve]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ve]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[kr,pi,Dc]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const LD=mD(ND);function pt(...t){return LD(nD(t))}const UD=tD,JE=E.forwardRef(({className:t,...e},n)=>I.jsx(GE,{ref:n,className:pt("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...e}));JE.displayName=GE.displayName;const eu=E.forwardRef(({className:t,...e},n)=>I.jsx(HE,{ref:n,className:pt("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...e}));eu.displayName=HE.displayName;const tu=E.forwardRef(({className:t,...e},n)=>I.jsx(WE,{ref:n,className:pt("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...e}));tu.displayName=WE.displayName;const QE="Collapsible",[OD,eS]=Ir(QE),[zD,fm]=OD(QE),FD=E.forwardRef((t,e)=>{const{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:o,onOpenChange:s,...a}=t,[l=!1,c]=dr({prop:r,defaultProp:i,onChange:s});return E.createElement(zD,{scope:n,disabled:o,contentId:da(),open:l,onOpenToggle:E.useCallback(()=>c(u=>!u),[c])},E.createElement(Ke.div,de({"data-state":hm(l),"data-disabled":o?"":void 0},a,{ref:e})))}),kD="CollapsibleTrigger",BD=E.forwardRef((t,e)=>{const{__scopeCollapsible:n,...r}=t,i=fm(kD,n);return E.createElement(Ke.button,de({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":hm(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},r,{ref:e,onClick:qe(t.onClick,i.onOpenToggle)}))}),tS="CollapsibleContent",$D=E.forwardRef((t,e)=>{const{forceMount:n,...r}=t,i=fm(tS,t.__scopeCollapsible);return E.createElement(Ji,{present:n||i.open},({present:o})=>E.createElement(VD,de({},r,{ref:e,present:o})))}),VD=E.forwardRef((t,e)=>{const{__scopeCollapsible:n,present:r,children:i,...o}=t,s=fm(tS,n),[a,l]=E.useState(r),c=E.useRef(null),u=ft(e,c),d=E.useRef(0),f=d.current,p=E.useRef(0),_=p.current,v=s.open||a,m=E.useRef(v),h=E.useRef();return E.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),an(()=>{const g=c.current;if(g){h.current=h.current||{transitionDuration:g.style.transitionDuration,animationName:g.style.animationName},g.style.transitionDuration="0s",g.style.animationName="none";const x=g.getBoundingClientRect();d.current=x.height,p.current=x.width,m.current||(g.style.transitionDuration=h.current.transitionDuration,g.style.animationName=h.current.animationName),l(r)}},[s.open,r]),E.createElement(Ke.div,de({"data-state":hm(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!v},o,{ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...t.style}}),v&&i)});function hm(t){return t?"open":"closed"}const GD=FD,HD=BD,WD=$D,Qi="Accordion",XD=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[pm,jD,YD]=lm(Qi),[xd,X5]=Ir(Qi,[YD,eS]),mm=eS(),nS=we.forwardRef((t,e)=>{const{type:n,...r}=t,i=r,o=r;return we.createElement(pm.Provider,{scope:t.__scopeAccordion},n==="multiple"?we.createElement(JD,de({},o,{ref:e})):we.createElement(ZD,de({},i,{ref:e})))});nS.propTypes={type(t){const e=t.value||t.defaultValue;return t.type&&!["single","multiple"].includes(t.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):t.type==="multiple"&&typeof e=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):t.type==="single"&&Array.isArray(e)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[rS,qD]=xd(Qi),[iS,KD]=xd(Qi,{collapsible:!1}),ZD=we.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:o=!1,...s}=t,[a,l]=dr({prop:n,defaultProp:r,onChange:i});return we.createElement(rS,{scope:t.__scopeAccordion,value:a?[a]:[],onItemOpen:l,onItemClose:we.useCallback(()=>o&&l(""),[o,l])},we.createElement(iS,{scope:t.__scopeAccordion,collapsible:o},we.createElement(oS,de({},s,{ref:e}))))}),JD=we.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...o}=t,[s=[],a]=dr({prop:n,defaultProp:r,onChange:i}),l=we.useCallback(u=>a((d=[])=>[...d,u]),[a]),c=we.useCallback(u=>a((d=[])=>d.filter(f=>f!==u)),[a]);return we.createElement(rS,{scope:t.__scopeAccordion,value:s,onItemOpen:l,onItemClose:c},we.createElement(iS,{scope:t.__scopeAccordion,collapsible:!0},we.createElement(oS,de({},o,{ref:e}))))}),[QD,yd]=xd(Qi),oS=we.forwardRef((t,e)=>{const{__scopeAccordion:n,disabled:r,dir:i,orientation:o="vertical",...s}=t,a=we.useRef(null),l=ft(a,e),c=jD(n),d=fa(i)==="ltr",f=qe(t.onKeyDown,p=>{var _;if(!XD.includes(p.key))return;const v=p.target,m=c().filter(M=>{var S;return!((S=M.ref.current)!==null&&S!==void 0&&S.disabled)}),h=m.findIndex(M=>M.ref.current===v),g=m.length;if(h===-1)return;p.preventDefault();let x=h;const y=0,w=g-1,T=()=>{x=h+1,x>w&&(x=y)},b=()=>{x=h-1,x<y&&(x=w)};switch(p.key){case"Home":x=y;break;case"End":x=w;break;case"ArrowRight":o==="horizontal"&&(d?T():b());break;case"ArrowDown":o==="vertical"&&T();break;case"ArrowLeft":o==="horizontal"&&(d?b():T());break;case"ArrowUp":o==="vertical"&&b();break}const C=x%g;(_=m[C].ref.current)===null||_===void 0||_.focus()});return we.createElement(QD,{scope:n,disabled:r,direction:i,orientation:o},we.createElement(pm.Slot,{scope:n},we.createElement(Ke.div,de({},s,{"data-orientation":o,ref:l,onKeyDown:r?void 0:f}))))}),Mp="AccordionItem",[eN,_m]=xd(Mp),tN=we.forwardRef((t,e)=>{const{__scopeAccordion:n,value:r,...i}=t,o=yd(Mp,n),s=qD(Mp,n),a=mm(n),l=da(),c=r&&s.value.includes(r)||!1,u=o.disabled||t.disabled;return we.createElement(eN,{scope:n,open:c,disabled:u,triggerId:l},we.createElement(GD,de({"data-orientation":o.orientation,"data-state":sS(c)},a,i,{ref:e,disabled:u,open:c,onOpenChange:d=>{d?s.onItemOpen(r):s.onItemClose(r)}})))}),nN="AccordionHeader",rN=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,i=yd(Qi,n),o=_m(nN,n);return we.createElement(Ke.h3,de({"data-orientation":i.orientation,"data-state":sS(o.open),"data-disabled":o.disabled?"":void 0},r,{ref:e}))}),Ug="AccordionTrigger",iN=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,i=yd(Qi,n),o=_m(Ug,n),s=KD(Ug,n),a=mm(n);return we.createElement(pm.ItemSlot,{scope:n},we.createElement(HD,de({"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:o.triggerId},a,r,{ref:e})))}),oN="AccordionContent",sN=we.forwardRef((t,e)=>{const{__scopeAccordion:n,...r}=t,i=yd(Qi,n),o=_m(oN,n),s=mm(n);return we.createElement(WD,de({role:"region","aria-labelledby":o.triggerId,"data-orientation":i.orientation},s,r,{ref:e,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}}))});function sS(t){return t?"open":"closed"}const aN=nS,lN=tN,cN=rN,aS=iN,lS=sN;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cS=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>E.createElement("svg",{ref:l,...dN,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:cS("lucide",i),...a},[...s.map(([c,u])=>E.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=(t,e)=>{const n=E.forwardRef(({className:r,...i},o)=>E.createElement(fN,{ref:o,iconNode:e,className:cS(`lucide-${uN(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=ri("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=ri("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ri("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=ri("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=ri("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=ri("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=ri("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=ri("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=ri("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]),gm=aN,Oi=E.forwardRef(({className:t,...e},n)=>I.jsx(lN,{ref:n,className:pt("border-b",t),...e}));Oi.displayName="AccordionItem";const zi=E.forwardRef(({className:t,children:e,...n},r)=>I.jsx(cN,{className:"flex",children:I.jsxs(aS,{ref:r,className:pt("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...n,children:[e,I.jsx(vm,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));zi.displayName=aS.displayName;const Fi=E.forwardRef(({className:t,children:e,...n},r)=>I.jsx(lS,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:I.jsx("div",{className:pt("pb-4 pt-0",t),children:e})}));Fi.displayName=lS.displayName;function dS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=dS(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function yN(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=dS(t))&&(r&&(r+=" "),r+=e);return r}const Og=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,zg=yN,xm=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return zg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=e,s=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],d=o==null?void 0:o[c];if(u===null)return null;const f=Og(u)||Og(d);return i[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:f,...p}=u;return Object.entries(p).every(_=>{let[v,m]=_;return Array.isArray(m)?m.includes({...o,...a}[v]):{...o,...a}[v]===m})?[...c,d,f]:c},[]);return zg(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},EN=xm("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Uo=E.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},o)=>{const s=r?Qs:"button";return I.jsx(s,{className:pt(EN({variant:e,size:n,className:t})),ref:o,...i})});Uo.displayName="Button";function bp(t,[e,n]){return Math.min(n,Math.max(e,t))}function SN(t,e){return E.useReducer((n,r)=>{const i=e[n][r];return i??n},t)}const fS="ScrollArea",[hS,j5]=Ir(fS),[TN,Zn]=hS(fS),wN=E.forwardRef((t,e)=>{const{__scopeScrollArea:n,type:r="hover",dir:i,scrollHideDelay:o=600,...s}=t,[a,l]=E.useState(null),[c,u]=E.useState(null),[d,f]=E.useState(null),[p,_]=E.useState(null),[v,m]=E.useState(null),[h,g]=E.useState(0),[x,y]=E.useState(0),[w,T]=E.useState(!1),[b,C]=E.useState(!1),M=ft(e,L=>l(L)),S=fa(i);return E.createElement(TN,{scope:n,type:r,dir:S,scrollHideDelay:o,scrollArea:a,viewport:c,onViewportChange:u,content:d,onContentChange:f,scrollbarX:p,onScrollbarXChange:_,scrollbarXEnabled:w,onScrollbarXEnabledChange:T,scrollbarY:v,onScrollbarYChange:m,scrollbarYEnabled:b,onScrollbarYEnabledChange:C,onCornerWidthChange:g,onCornerHeightChange:y},E.createElement(Ke.div,de({dir:S},s,{ref:M,style:{position:"relative","--radix-scroll-area-corner-width":h+"px","--radix-scroll-area-corner-height":x+"px",...t.style}})))}),MN="ScrollAreaViewport",bN=E.forwardRef((t,e)=>{const{__scopeScrollArea:n,children:r,...i}=t,o=Zn(MN,n),s=E.useRef(null),a=ft(e,s,o.onViewportChange);return E.createElement(E.Fragment,null,E.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),E.createElement(Ke.div,de({"data-radix-scroll-area-viewport":""},i,{ref:a,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...t.style}}),E.createElement("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"}},r)))}),ii="ScrollAreaScrollbar",pS=E.forwardRef((t,e)=>{const{forceMount:n,...r}=t,i=Zn(ii,t.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:s}=i,a=t.orientation==="horizontal";return E.useEffect(()=>(a?o(!0):s(!0),()=>{a?o(!1):s(!1)}),[a,o,s]),i.type==="hover"?E.createElement(AN,de({},r,{ref:e,forceMount:n})):i.type==="scroll"?E.createElement(RN,de({},r,{ref:e,forceMount:n})):i.type==="auto"?E.createElement(mS,de({},r,{ref:e,forceMount:n})):i.type==="always"?E.createElement(ym,de({},r,{ref:e})):null}),AN=E.forwardRef((t,e)=>{const{forceMount:n,...r}=t,i=Zn(ii,t.__scopeScrollArea),[o,s]=E.useState(!1);return E.useEffect(()=>{const a=i.scrollArea;let l=0;if(a){const c=()=>{window.clearTimeout(l),s(!0)},u=()=>{l=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return a.addEventListener("pointerenter",c),a.addEventListener("pointerleave",u),()=>{window.clearTimeout(l),a.removeEventListener("pointerenter",c),a.removeEventListener("pointerleave",u)}}},[i.scrollArea,i.scrollHideDelay]),E.createElement(Ji,{present:n||o},E.createElement(mS,de({"data-state":o?"visible":"hidden"},r,{ref:e})))}),RN=E.forwardRef((t,e)=>{const{forceMount:n,...r}=t,i=Zn(ii,t.__scopeScrollArea),o=t.orientation==="horizontal",s=Sd(()=>l("SCROLL_END"),100),[a,l]=SN("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return E.useEffect(()=>{if(a==="idle"){const c=window.setTimeout(()=>l("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(c)}},[a,i.scrollHideDelay,l]),E.useEffect(()=>{const c=i.viewport,u=o?"scrollLeft":"scrollTop";if(c){let d=c[u];const f=()=>{const p=c[u];d!==p&&(l("SCROLL"),s()),d=p};return c.addEventListener("scroll",f),()=>c.removeEventListener("scroll",f)}},[i.viewport,o,l,s]),E.createElement(Ji,{present:n||a!=="hidden"},E.createElement(ym,de({"data-state":a==="hidden"?"hidden":"visible"},r,{ref:e,onPointerEnter:qe(t.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:qe(t.onPointerLeave,()=>l("POINTER_LEAVE"))})))}),mS=E.forwardRef((t,e)=>{const n=Zn(ii,t.__scopeScrollArea),{forceMount:r,...i}=t,[o,s]=E.useState(!1),a=t.orientation==="horizontal",l=Sd(()=>{if(n.viewport){const c=n.viewport.offsetWidth<n.viewport.scrollWidth,u=n.viewport.offsetHeight<n.viewport.scrollHeight;s(a?c:u)}},10);return ea(n.viewport,l),ea(n.content,l),E.createElement(Ji,{present:r||o},E.createElement(ym,de({"data-state":o?"visible":"hidden"},i,{ref:e})))}),ym=E.forwardRef((t,e)=>{const{orientation:n="vertical",...r}=t,i=Zn(ii,t.__scopeScrollArea),o=E.useRef(null),s=E.useRef(0),[a,l]=E.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=xS(a.viewport,a.content),u={...r,sizes:a,onSizesChange:l,hasThumb:c>0&&c<1,onThumbChange:f=>o.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function d(f,p){return ON(f,s.current,a,p)}return n==="horizontal"?E.createElement(CN,de({},u,{ref:e,onThumbPositionChange:()=>{if(i.viewport&&o.current){const f=i.viewport.scrollLeft,p=Fg(f,a,i.dir);o.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{i.viewport&&(i.viewport.scrollLeft=f)},onDragScroll:f=>{i.viewport&&(i.viewport.scrollLeft=d(f,i.dir))}})):n==="vertical"?E.createElement(PN,de({},u,{ref:e,onThumbPositionChange:()=>{if(i.viewport&&o.current){const f=i.viewport.scrollTop,p=Fg(f,a);o.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{i.viewport&&(i.viewport.scrollTop=f)},onDragScroll:f=>{i.viewport&&(i.viewport.scrollTop=d(f))}})):null}),CN=E.forwardRef((t,e)=>{const{sizes:n,onSizesChange:r,...i}=t,o=Zn(ii,t.__scopeScrollArea),[s,a]=E.useState(),l=E.useRef(null),c=ft(e,l,o.onScrollbarXChange);return E.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),E.createElement(vS,de({"data-orientation":"horizontal"},i,{ref:c,sizes:n,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Ed(n)+"px",...t.style},onThumbPointerDown:u=>t.onThumbPointerDown(u.x),onDragScroll:u=>t.onDragScroll(u.x),onWheelScroll:(u,d)=>{if(o.viewport){const f=o.viewport.scrollLeft+u.deltaX;t.onWheelScroll(f),ES(f,d)&&u.preventDefault()}},onResize:()=>{l.current&&o.viewport&&s&&r({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:ku(s.paddingLeft),paddingEnd:ku(s.paddingRight)}})}}))}),PN=E.forwardRef((t,e)=>{const{sizes:n,onSizesChange:r,...i}=t,o=Zn(ii,t.__scopeScrollArea),[s,a]=E.useState(),l=E.useRef(null),c=ft(e,l,o.onScrollbarYChange);return E.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),E.createElement(vS,de({"data-orientation":"vertical"},i,{ref:c,sizes:n,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Ed(n)+"px",...t.style},onThumbPointerDown:u=>t.onThumbPointerDown(u.y),onDragScroll:u=>t.onDragScroll(u.y),onWheelScroll:(u,d)=>{if(o.viewport){const f=o.viewport.scrollTop+u.deltaY;t.onWheelScroll(f),ES(f,d)&&u.preventDefault()}},onResize:()=>{l.current&&o.viewport&&s&&r({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:ku(s.paddingTop),paddingEnd:ku(s.paddingBottom)}})}}))}),[IN,_S]=hS(ii),vS=E.forwardRef((t,e)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:o,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:l,onDragScroll:c,onWheelScroll:u,onResize:d,...f}=t,p=Zn(ii,n),[_,v]=E.useState(null),m=ft(e,M=>v(M)),h=E.useRef(null),g=E.useRef(""),x=p.viewport,y=r.content-r.viewport,w=Xt(u),T=Xt(l),b=Sd(d,10);function C(M){if(h.current){const S=M.clientX-h.current.left,L=M.clientY-h.current.top;c({x:S,y:L})}}return E.useEffect(()=>{const M=S=>{const L=S.target;(_==null?void 0:_.contains(L))&&w(S,y)};return document.addEventListener("wheel",M,{passive:!1}),()=>document.removeEventListener("wheel",M,{passive:!1})},[x,_,y,w]),E.useEffect(T,[r,T]),ea(_,b),ea(p.content,b),E.createElement(IN,{scope:n,scrollbar:_,hasThumb:i,onThumbChange:Xt(o),onThumbPointerUp:Xt(s),onThumbPositionChange:T,onThumbPointerDown:Xt(a)},E.createElement(Ke.div,de({},f,{ref:m,style:{position:"absolute",...f.style},onPointerDown:qe(t.onPointerDown,M=>{M.button===0&&(M.target.setPointerCapture(M.pointerId),h.current=_.getBoundingClientRect(),g.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),C(M))}),onPointerMove:qe(t.onPointerMove,C),onPointerUp:qe(t.onPointerUp,M=>{const S=M.target;S.hasPointerCapture(M.pointerId)&&S.releasePointerCapture(M.pointerId),document.body.style.webkitUserSelect=g.current,p.viewport&&(p.viewport.style.scrollBehavior=""),h.current=null})})))}),Ap="ScrollAreaThumb",DN=E.forwardRef((t,e)=>{const{forceMount:n,...r}=t,i=_S(Ap,t.__scopeScrollArea);return E.createElement(Ji,{present:n||i.hasThumb},E.createElement(NN,de({ref:e},r)))}),NN=E.forwardRef((t,e)=>{const{__scopeScrollArea:n,style:r,...i}=t,o=Zn(Ap,n),s=_S(Ap,n),{onThumbPositionChange:a}=s,l=ft(e,d=>s.onThumbChange(d)),c=E.useRef(),u=Sd(()=>{c.current&&(c.current(),c.current=void 0)},100);return E.useEffect(()=>{const d=o.viewport;if(d){const f=()=>{if(u(),!c.current){const p=zN(d,a);c.current=p,a()}};return a(),d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[o.viewport,u,a]),E.createElement(Ke.div,de({"data-state":s.hasThumb?"visible":"hidden"},i,{ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:qe(t.onPointerDownCapture,d=>{const p=d.target.getBoundingClientRect(),_=d.clientX-p.left,v=d.clientY-p.top;s.onThumbPointerDown({x:_,y:v})}),onPointerUp:qe(t.onPointerUp,s.onThumbPointerUp)}))}),gS="ScrollAreaCorner",LN=E.forwardRef((t,e)=>{const n=Zn(gS,t.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?E.createElement(UN,de({},t,{ref:e})):null}),UN=E.forwardRef((t,e)=>{const{__scopeScrollArea:n,...r}=t,i=Zn(gS,n),[o,s]=E.useState(0),[a,l]=E.useState(0),c=!!(o&&a);return ea(i.scrollbarX,()=>{var u;const d=((u=i.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;i.onCornerHeightChange(d),l(d)}),ea(i.scrollbarY,()=>{var u;const d=((u=i.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;i.onCornerWidthChange(d),s(d)}),c?E.createElement(Ke.div,de({},r,{ref:e,style:{width:o,height:a,position:"absolute",right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:0,...t.style}})):null});function ku(t){return t?parseInt(t,10):0}function xS(t,e){const n=t/e;return isNaN(n)?0:n}function Ed(t){const e=xS(t.viewport,t.content),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,r=(t.scrollbar.size-n)*e;return Math.max(r,18)}function ON(t,e,n,r="ltr"){const i=Ed(n),o=i/2,s=e||o,a=i-s,l=n.scrollbar.paddingStart+s,c=n.scrollbar.size-n.scrollbar.paddingEnd-a,u=n.content-n.viewport,d=r==="ltr"?[0,u]:[u*-1,0];return yS([l,c],d)(t)}function Fg(t,e,n="ltr"){const r=Ed(e),i=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=e.scrollbar.size-i,s=e.content-e.viewport,a=o-r,l=n==="ltr"?[0,s]:[s*-1,0],c=bp(t,l);return yS([0,s],[0,a])(c)}function yS(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const r=(e[1]-e[0])/(t[1]-t[0]);return e[0]+r*(n-t[0])}}function ES(t,e){return t>0&&t<e}const zN=(t,e=()=>{})=>{let n={left:t.scrollLeft,top:t.scrollTop},r=0;return function i(){const o={left:t.scrollLeft,top:t.scrollTop},s=n.left!==o.left,a=n.top!==o.top;(s||a)&&e(),n=o,r=window.requestAnimationFrame(i)}(),()=>window.cancelAnimationFrame(r)};function Sd(t,e){const n=Xt(t),r=E.useRef(0);return E.useEffect(()=>()=>window.clearTimeout(r.current),[]),E.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,e)},[n,e])}function ea(t,e){const n=Xt(e);an(()=>{let r=0;if(t){const i=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return i.observe(t),()=>{window.cancelAnimationFrame(r),i.unobserve(t)}}},[t,n])}const SS=wN,FN=bN,kN=LN,Td=E.forwardRef(({className:t,children:e,...n},r)=>I.jsxs(SS,{ref:r,className:pt("relative overflow-hidden",t),...n,children:[I.jsx(FN,{className:"h-full w-full rounded-[inherit]",children:e}),I.jsx(TS,{}),I.jsx(kN,{})]}));Td.displayName=SS.displayName;const TS=E.forwardRef(({className:t,orientation:e="vertical",...n},r)=>I.jsx(pS,{ref:r,orientation:e,className:pt("flex touch-none select-none transition-colors",e==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",e==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...n,children:I.jsx(DN,{className:"relative flex-1 rounded-full bg-border"})}));TS.displayName=pS.displayName;const wS=E.forwardRef(({className:t,type:e,...n},r)=>I.jsx("input",{type:e,className:pt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n}));wS.displayName="Input";const Bu=E.forwardRef((t,e)=>E.createElement(Ke.label,de({},t,{ref:e,onMouseDown:n=>{var r;(r=t.onMouseDown)===null||r===void 0||r.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),MS=Bu,BN=xm("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Em=E.forwardRef(({className:t,...e},n)=>I.jsx(MS,{ref:n,className:pt(BN(),t),...e}));Em.displayName=MS.displayName;class ke extends E.Component{constructor(){super(...arguments);Fe(this,"handleChange",n=>{const{setUiState:r}=this.context;r({[n.target.name]:n.target.value})})}render(){const{name:n,labelText:r}=this.props,{uiState:i}=this.context,o=i[n];return I.jsx("div",{className:"w-full p-2",children:I.jsxs(Em,{className:"w-50",children:[r,I.jsx(wS,{name:n,value:o,onChange:this.handleChange})]})})}}Fe(ke,"contextType",Kn);function $N(t,e=globalThis==null?void 0:globalThis.document){const n=Xt(t);E.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r),()=>e.removeEventListener("keydown",r)},[n,e])}const Rp="dismissableLayer.update",VN="dismissableLayer.pointerDownOutside",GN="dismissableLayer.focusOutside";let kg;const HN=E.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),WN=E.forwardRef((t,e)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=t,u=E.useContext(HN),[d,f]=E.useState(null),p=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,_]=E.useState({}),v=ft(e,C=>f(C)),m=Array.from(u.layers),[h]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(h),x=d?m.indexOf(d):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,w=x>=g,T=XN(C=>{const M=C.target,S=[...u.branches].some(L=>L.contains(M));!w||S||(o==null||o(C),a==null||a(C),C.defaultPrevented||l==null||l())},p),b=jN(C=>{const M=C.target;[...u.branches].some(L=>L.contains(M))||(s==null||s(C),a==null||a(C),C.defaultPrevented||l==null||l())},p);return $N(C=>{x===u.layers.size-1&&(i==null||i(C),!C.defaultPrevented&&l&&(C.preventDefault(),l()))},p),E.useEffect(()=>{if(d)return r&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(kg=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Bg(),()=>{r&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=kg)}},[d,p,r,u]),E.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Bg())},[d,u]),E.useEffect(()=>{const C=()=>_({});return document.addEventListener(Rp,C),()=>document.removeEventListener(Rp,C)},[]),E.createElement(Ke.div,de({},c,{ref:v,style:{pointerEvents:y?w?"auto":"none":void 0,...t.style},onFocusCapture:qe(t.onFocusCapture,b.onFocusCapture),onBlurCapture:qe(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:qe(t.onPointerDownCapture,T.onPointerDownCapture)}))});function XN(t,e=globalThis==null?void 0:globalThis.document){const n=Xt(t),r=E.useRef(!1),i=E.useRef(()=>{});return E.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let u=function(){bS(VN,n,c,{discrete:!0})};var l=u;const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=u,e.addEventListener("click",i.current,{once:!0})):u()}else e.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function jN(t,e=globalThis==null?void 0:globalThis.document){const n=Xt(t),r=E.useRef(!1);return E.useEffect(()=>{const i=o=>{o.target&&!r.current&&bS(GN,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Bg(){const t=new CustomEvent(Rp);document.dispatchEvent(t)}function bS(t,e,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?RI(i,o):i.dispatchEvent(o)}let oh=0;function YN(){E.useEffect(()=>{var t,e;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(t=n[0])!==null&&t!==void 0?t:$g()),document.body.insertAdjacentElement("beforeend",(e=n[1])!==null&&e!==void 0?e:$g()),oh++,()=>{oh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),oh--}},[])}function $g(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",t}const sh="focusScope.autoFocusOnMount",ah="focusScope.autoFocusOnUnmount",Vg={bubbles:!1,cancelable:!0},qN=E.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=t,[a,l]=E.useState(null),c=Xt(i),u=Xt(o),d=E.useRef(null),f=ft(e,v=>l(v)),p=E.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;E.useEffect(()=>{if(r){let g=function(T){if(p.paused||!a)return;const b=T.target;a.contains(b)?d.current=b:_i(d.current,{select:!0})},x=function(T){if(p.paused||!a)return;const b=T.relatedTarget;b!==null&&(a.contains(b)||_i(d.current,{select:!0}))},y=function(T){if(document.activeElement===document.body)for(const C of T)C.removedNodes.length>0&&_i(a)};var v=g,m=x,h=y;document.addEventListener("focusin",g),document.addEventListener("focusout",x);const w=new MutationObserver(y);return a&&w.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",x),w.disconnect()}}},[r,a,p.paused]),E.useEffect(()=>{if(a){Hg.add(p);const v=document.activeElement;if(!a.contains(v)){const h=new CustomEvent(sh,Vg);a.addEventListener(sh,c),a.dispatchEvent(h),h.defaultPrevented||(KN(tL(AS(a)),{select:!0}),document.activeElement===v&&_i(a))}return()=>{a.removeEventListener(sh,c),setTimeout(()=>{const h=new CustomEvent(ah,Vg);a.addEventListener(ah,u),a.dispatchEvent(h),h.defaultPrevented||_i(v??document.body,{select:!0}),a.removeEventListener(ah,u),Hg.remove(p)},0)}}},[a,c,u,p]);const _=E.useCallback(v=>{if(!n&&!r||p.paused)return;const m=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,h=document.activeElement;if(m&&h){const g=v.currentTarget,[x,y]=ZN(g);x&&y?!v.shiftKey&&h===y?(v.preventDefault(),n&&_i(x,{select:!0})):v.shiftKey&&h===x&&(v.preventDefault(),n&&_i(y,{select:!0})):h===g&&v.preventDefault()}},[n,r,p.paused]);return E.createElement(Ke.div,de({tabIndex:-1},s,{ref:f,onKeyDown:_}))});function KN(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(_i(r,{select:e}),document.activeElement!==n)return}function ZN(t){const e=AS(t),n=Gg(e,t),r=Gg(e.reverse(),t);return[n,r]}function AS(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Gg(t,e){for(const n of t)if(!JN(n,{upTo:e}))return n}function JN(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function QN(t){return t instanceof HTMLInputElement&&"select"in t}function _i(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&QN(t)&&e&&t.select()}}const Hg=eL();function eL(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=Wg(t,e),t.unshift(e)},remove(e){var n;t=Wg(t,e),(n=t[0])===null||n===void 0||n.resume()}}}function Wg(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function tL(t){return t.filter(e=>e.tagName!=="A")}const nL=["top","right","bottom","left"],Tr=Math.min,In=Math.max,$u=Math.round,Nc=Math.floor,Wi=t=>({x:t,y:t}),rL={left:"right",right:"left",bottom:"top",top:"bottom"},iL={start:"end",end:"start"};function Cp(t,e,n){return In(t,Tr(e,n))}function ei(t,e){return typeof t=="function"?t(e):t}function ti(t){return t.split("-")[0]}function pa(t){return t.split("-")[1]}function Sm(t){return t==="x"?"y":"x"}function Tm(t){return t==="y"?"height":"width"}function ma(t){return["top","bottom"].includes(ti(t))?"y":"x"}function wm(t){return Sm(ma(t))}function oL(t,e,n){n===void 0&&(n=!1);const r=pa(t),i=wm(t),o=Tm(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Vu(s)),[s,Vu(s)]}function sL(t){const e=Vu(t);return[Pp(t),e,Pp(e)]}function Pp(t){return t.replace(/start|end/g,e=>iL[e])}function aL(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function lL(t,e,n,r){const i=pa(t);let o=aL(ti(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(Pp)))),o}function Vu(t){return t.replace(/left|right|bottom|top/g,e=>rL[e])}function cL(t){return{top:0,right:0,bottom:0,left:0,...t}}function RS(t){return typeof t!="number"?cL(t):{top:t,right:t,bottom:t,left:t}}function Gu(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Xg(t,e,n){let{reference:r,floating:i}=t;const o=ma(e),s=wm(e),a=Tm(s),l=ti(e),c=o==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:u,y:r.y-i.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(pa(e)){case"start":p[s]-=f*(n&&c?-1:1);break;case"end":p[s]+=f*(n&&c?-1:1);break}return p}const uL=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Xg(c,r,l),f=r,p={},_=0;for(let v=0;v<a.length;v++){const{name:m,fn:h}=a[v],{x:g,y:x,data:y,reset:w}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});u=g??u,d=x??d,p={...p,[m]:{...p[m],...y}},w&&_<=50&&(_++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(c=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:u,y:d}=Xg(c,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function Ml(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=ei(e,t),_=RS(p),m=a[f?d==="floating"?"reference":"floating":d],h=Gu(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(m)))==null||n?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),g=d==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),y=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},w=Gu(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:x,strategy:l}):g);return{top:(h.top-w.top+_.top)/y.y,bottom:(w.bottom-h.bottom+_.bottom)/y.y,left:(h.left-w.left+_.left)/y.x,right:(w.right-h.right+_.right)/y.x}}const dL=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=ei(t,e)||{};if(c==null)return{};const d=RS(u),f={x:n,y:r},p=wm(i),_=Tm(p),v=await s.getDimensions(c),m=p==="y",h=m?"top":"left",g=m?"bottom":"right",x=m?"clientHeight":"clientWidth",y=o.reference[_]+o.reference[p]-f[p]-o.floating[_],w=f[p]-o.reference[p],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let b=T?T[x]:0;(!b||!await(s.isElement==null?void 0:s.isElement(T)))&&(b=a.floating[x]||o.floating[_]);const C=y/2-w/2,M=b/2-v[_]/2-1,S=Tr(d[h],M),L=Tr(d[g],M),O=S,N=b-v[_]-L,B=b/2-v[_]/2+C,F=Cp(O,B,N),q=!l.arrow&&pa(i)!=null&&B!==F&&o.reference[_]/2-(B<O?S:L)-v[_]/2<0,W=q?B<O?B-O:B-N:0;return{[p]:f[p]+W,data:{[p]:F,centerOffset:B-F-W,...q&&{alignmentOffset:W}},reset:q}}}),fL=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:v=!0,...m}=ei(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const h=ti(i),g=ti(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),y=f||(g||!v?[Vu(a)]:sL(a));!f&&_!=="none"&&y.push(...lL(a,v,_,x));const w=[a,...y],T=await Ml(e,m),b=[];let C=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&b.push(T[h]),d){const O=oL(i,s,x);b.push(T[O[0]],T[O[1]])}if(C=[...C,{placement:i,overflows:b}],!b.every(O=>O<=0)){var M,S;const O=(((M=o.flip)==null?void 0:M.index)||0)+1,N=w[O];if(N)return{data:{index:O,overflows:C},reset:{placement:N}};let B=(S=C.filter(F=>F.overflows[0]<=0).sort((F,q)=>F.overflows[1]-q.overflows[1])[0])==null?void 0:S.placement;if(!B)switch(p){case"bestFit":{var L;const F=(L=C.map(q=>[q.placement,q.overflows.filter(W=>W>0).reduce((W,U)=>W+U,0)]).sort((q,W)=>q[1]-W[1])[0])==null?void 0:L[0];F&&(B=F);break}case"initialPlacement":B=a;break}if(i!==B)return{reset:{placement:B}}}return{}}}};function jg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Yg(t){return nL.some(e=>t[e]>=0)}const hL=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...i}=ei(t,e);switch(r){case"referenceHidden":{const o=await Ml(e,{...i,elementContext:"reference"}),s=jg(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Yg(s)}}}case"escaped":{const o=await Ml(e,{...i,altBoundary:!0}),s=jg(o,n.floating);return{data:{escapedOffsets:s,escaped:Yg(s)}}}default:return{}}}}};async function pL(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=ti(n),a=pa(n),l=ma(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,d=ei(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:_}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof _=="number"&&(p=a==="end"?_*-1:_),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const mL=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=e,l=await pL(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},_L=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:m=>{let{x:h,y:g}=m;return{x:h,y:g}}},...l}=ei(t,e),c={x:n,y:r},u=await Ml(e,l),d=ma(ti(i)),f=Sm(d);let p=c[f],_=c[d];if(o){const m=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=p+u[m],x=p-u[h];p=Cp(g,p,x)}if(s){const m=d==="y"?"top":"left",h=d==="y"?"bottom":"right",g=_+u[m],x=_-u[h];_=Cp(g,_,x)}const v=a.fn({...e,[f]:p,[d]:_});return{...v,data:{x:v.x-n,y:v.y-r}}}}},vL=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=ei(t,e),u={x:n,y:r},d=ma(i),f=Sm(d);let p=u[f],_=u[d];const v=ei(a,e),m=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const x=f==="y"?"height":"width",y=o.reference[f]-o.floating[x]+m.mainAxis,w=o.reference[f]+o.reference[x]-m.mainAxis;p<y?p=y:p>w&&(p=w)}if(c){var h,g;const x=f==="y"?"width":"height",y=["top","left"].includes(ti(i)),w=o.reference[d]-o.floating[x]+(y&&((h=s.offset)==null?void 0:h[d])||0)+(y?0:m.crossAxis),T=o.reference[d]+o.reference[x]+(y?0:((g=s.offset)==null?void 0:g[d])||0)-(y?m.crossAxis:0);_<w?_=w:_>T&&(_=T)}return{[f]:p,[d]:_}}}},gL=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:r,platform:i,elements:o}=e,{apply:s=()=>{},...a}=ei(t,e),l=await Ml(e,a),c=ti(n),u=pa(n),d=ma(n)==="y",{width:f,height:p}=r.floating;let _,v;c==="top"||c==="bottom"?(_=c,v=u===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(v=c,_=u==="end"?"top":"bottom");const m=p-l.top-l.bottom,h=f-l.left-l.right,g=Tr(p-l[_],m),x=Tr(f-l[v],h),y=!e.middlewareData.shift;let w=g,T=x;if(d?T=u||y?Tr(x,h):h:w=u||y?Tr(g,m):m,y&&!u){const C=In(l.left,0),M=In(l.right,0),S=In(l.top,0),L=In(l.bottom,0);d?T=f-2*(C!==0||M!==0?C+M:In(l.left,l.right)):w=p-2*(S!==0||L!==0?S+L:In(l.top,l.bottom))}await s({...e,availableWidth:T,availableHeight:w});const b=await i.getDimensions(o.floating);return f!==b.width||p!==b.height?{reset:{rects:!0}}:{}}}};function _a(t){return CS(t)?(t.nodeName||"").toLowerCase():"#document"}function zn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function oi(t){var e;return(e=(CS(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function CS(t){return t instanceof Node||t instanceof zn(t).Node}function Rr(t){return t instanceof Element||t instanceof zn(t).Element}function Cr(t){return t instanceof HTMLElement||t instanceof zn(t).HTMLElement}function qg(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof zn(t).ShadowRoot}function kl(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=fr(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function xL(t){return["table","td","th"].includes(_a(t))}function Mm(t){const e=bm(),n=fr(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function yL(t){let e=Xi(t);for(;Cr(e)&&!ta(e);){if(Mm(e))return e;e=Xi(e)}return null}function bm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ta(t){return["html","body","#document"].includes(_a(t))}function fr(t){return zn(t).getComputedStyle(t)}function wd(t){return Rr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Xi(t){if(_a(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qg(t)&&t.host||oi(t);return qg(e)?e.host:e}function PS(t){const e=Xi(t);return ta(e)?t.ownerDocument?t.ownerDocument.body:t.body:Cr(e)&&kl(e)?e:PS(e)}function bl(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=PS(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=zn(i);return o?e.concat(s,s.visualViewport||[],kl(i)?i:[],s.frameElement&&n?bl(s.frameElement):[]):e.concat(i,bl(i,[],n))}function IS(t){const e=fr(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Cr(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,a=$u(n)!==o||$u(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function Am(t){return Rr(t)?t:t.contextElement}function Bs(t){const e=Am(t);if(!Cr(e))return Wi(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=IS(e);let s=(o?$u(n.width):n.width)/r,a=(o?$u(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const EL=Wi(0);function DS(t){const e=zn(t);return!bm()||!e.visualViewport?EL:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function SL(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==zn(t)?!1:e}function Oo(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Am(t);let s=Wi(1);e&&(r?Rr(r)&&(s=Bs(r)):s=Bs(t));const a=SL(o,n,r)?DS(o):Wi(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(o){const f=zn(o),p=r&&Rr(r)?zn(r):r;let _=f,v=_.frameElement;for(;v&&r&&p!==_;){const m=Bs(v),h=v.getBoundingClientRect(),g=fr(v),x=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*m.x,y=h.top+(v.clientTop+parseFloat(g.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=x,c+=y,_=zn(v),v=_.frameElement}}return Gu({width:u,height:d,x:l,y:c})}const TL=[":popover-open",":modal"];function Rm(t){return TL.some(e=>{try{return t.matches(e)}catch{return!1}})}function wL(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=oi(r),a=e?Rm(e.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Wi(1);const u=Wi(0),d=Cr(r);if((d||!d&&!o)&&((_a(r)!=="body"||kl(s))&&(l=wd(r)),Cr(r))){const f=Oo(r);c=Bs(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function ML(t){return Array.from(t.getClientRects())}function NS(t){return Oo(oi(t)).left+wd(t).scrollLeft}function bL(t){const e=oi(t),n=wd(t),r=t.ownerDocument.body,i=In(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=In(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+NS(t);const a=-n.scrollTop;return fr(r).direction==="rtl"&&(s+=In(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function AL(t,e){const n=zn(t),r=oi(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=bm();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}function RL(t,e){const n=Oo(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=Cr(t)?Bs(t):Wi(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function Kg(t,e,n){let r;if(e==="viewport")r=AL(t,n);else if(e==="document")r=bL(oi(t));else if(Rr(e))r=RL(e,n);else{const i=DS(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return Gu(r)}function LS(t,e){const n=Xi(t);return n===e||!Rr(n)||ta(n)?!1:fr(n).position==="fixed"||LS(n,e)}function CL(t,e){const n=e.get(t);if(n)return n;let r=bl(t,[],!1).filter(a=>Rr(a)&&_a(a)!=="body"),i=null;const o=fr(t).position==="fixed";let s=o?Xi(t):t;for(;Rr(s)&&!ta(s);){const a=fr(s),l=Mm(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||kl(s)&&!l&&LS(t,s))?r=r.filter(u=>u!==s):i=a,s=Xi(s)}return e.set(t,r),r}function PL(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?Rm(e)?[]:CL(e,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,u)=>{const d=Kg(e,u,i);return c.top=In(d.top,c.top),c.right=Tr(d.right,c.right),c.bottom=Tr(d.bottom,c.bottom),c.left=In(d.left,c.left),c},Kg(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function IL(t){const{width:e,height:n}=IS(t);return{width:e,height:n}}function DL(t,e,n){const r=Cr(e),i=oi(e),o=n==="fixed",s=Oo(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Wi(0);if(r||!r&&!o)if((_a(e)!=="body"||kl(i))&&(a=wd(e)),r){const d=Oo(e,!0,o,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else i&&(l.x=NS(i));const c=s.left+a.scrollLeft-l.x,u=s.top+a.scrollTop-l.y;return{x:c,y:u,width:s.width,height:s.height}}function lh(t){return fr(t).position==="static"}function Zg(t,e){return!Cr(t)||fr(t).position==="fixed"?null:e?e(t):t.offsetParent}function US(t,e){const n=zn(t);if(Rm(t))return n;if(!Cr(t)){let i=Xi(t);for(;i&&!ta(i);){if(Rr(i)&&!lh(i))return i;i=Xi(i)}return n}let r=Zg(t,e);for(;r&&xL(r)&&lh(r);)r=Zg(r,e);return r&&ta(r)&&lh(r)&&!Mm(r)?n:r||yL(t)||n}const NL=async function(t){const e=this.getOffsetParent||US,n=this.getDimensions,r=await n(t.floating);return{reference:DL(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function LL(t){return fr(t).direction==="rtl"}const UL={convertOffsetParentRelativeRectToViewportRelativeRect:wL,getDocumentElement:oi,getClippingRect:PL,getOffsetParent:US,getElementRects:NL,getClientRects:ML,getDimensions:IL,getScale:Bs,isElement:Rr,isRTL:LL};function OL(t,e){let n=null,r;const i=oi(t);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:d,height:f}=t.getBoundingClientRect();if(a||e(),!d||!f)return;const p=Nc(u),_=Nc(i.clientWidth-(c+d)),v=Nc(i.clientHeight-(u+f)),m=Nc(c),g={rootMargin:-p+"px "+-_+"px "+-v+"px "+-m+"px",threshold:In(0,Tr(1,l))||1};let x=!0;function y(w){const T=w[0].intersectionRatio;if(T!==l){if(!x)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(y,{...g,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,g)}n.observe(t)}return s(!0),o}function zL(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Am(t),u=i||o?[...c?bl(c):[],...bl(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const d=c&&a?OL(c,n):null;let f=-1,p=null;s&&(p=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let _,v=l?Oo(t):null;l&&m();function m(){const h=Oo(t);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,_=requestAnimationFrame(m)}return n(),()=>{var h;u.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),d==null||d(),(h=p)==null||h.disconnect(),p=null,l&&cancelAnimationFrame(_)}}const FL=mL,kL=_L,BL=fL,$L=gL,VL=hL,Jg=dL,GL=vL,HL=(t,e,n)=>{const r=new Map,i={platform:UL,...n},o={...i.platform,_c:r};return uL(t,e,{...i,platform:o})},WL=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?Jg({element:r.current,padding:i}).fn(n):{}:r?Jg({element:r,padding:i}).fn(n):{}}}};var nu=typeof document<"u"?E.useLayoutEffect:E.useEffect;function Hu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Hu(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&t.$$typeof)&&!Hu(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function OS(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Qg(t,e){const n=OS(t);return Math.round(e*n)/n}function ex(t){const e=E.useRef(t);return nu(()=>{e.current=t}),e}function XL(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,d]=E.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[f,p]=E.useState(r);Hu(f,r)||p(r);const[_,v]=E.useState(null),[m,h]=E.useState(null),g=E.useCallback(W=>{W!==T.current&&(T.current=W,v(W))},[]),x=E.useCallback(W=>{W!==b.current&&(b.current=W,h(W))},[]),y=o||_,w=s||m,T=E.useRef(null),b=E.useRef(null),C=E.useRef(u),M=l!=null,S=ex(l),L=ex(i),O=E.useCallback(()=>{if(!T.current||!b.current)return;const W={placement:e,strategy:n,middleware:f};L.current&&(W.platform=L.current),HL(T.current,b.current,W).then(U=>{const H={...U,isPositioned:!0};N.current&&!Hu(C.current,H)&&(C.current=H,Bo.flushSync(()=>{d(H)}))})},[f,e,n,L]);nu(()=>{c===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,d(W=>({...W,isPositioned:!1})))},[c]);const N=E.useRef(!1);nu(()=>(N.current=!0,()=>{N.current=!1}),[]),nu(()=>{if(y&&(T.current=y),w&&(b.current=w),y&&w){if(S.current)return S.current(y,w,O);O()}},[y,w,O,S,M]);const B=E.useMemo(()=>({reference:T,floating:b,setReference:g,setFloating:x}),[g,x]),F=E.useMemo(()=>({reference:y,floating:w}),[y,w]),q=E.useMemo(()=>{const W={position:n,left:0,top:0};if(!F.floating)return W;const U=Qg(F.floating,u.x),H=Qg(F.floating,u.y);return a?{...W,transform:"translate("+U+"px, "+H+"px)",...OS(F.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:U,top:H}},[n,a,F.floating,u.x,u.y]);return E.useMemo(()=>({...u,update:O,refs:B,elements:F,floatingStyles:q}),[u,O,B,F,q])}function zS(t){const[e,n]=E.useState(void 0);return an(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}const FS="Popper",[kS,BS]=Ir(FS),[jL,$S]=kS(FS),YL=t=>{const{__scopePopper:e,children:n}=t,[r,i]=E.useState(null);return E.createElement(jL,{scope:e,anchor:r,onAnchorChange:i},n)},qL="PopperAnchor",KL=E.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...i}=t,o=$S(qL,n),s=E.useRef(null),a=ft(e,s);return E.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:E.createElement(Ke.div,de({},i,{ref:a}))}),VS="PopperContent",[ZL,Y5]=kS(VS),JL=E.forwardRef((t,e)=>{var n,r,i,o,s,a,l,c;const{__scopePopper:u,side:d="bottom",sideOffset:f=0,align:p="center",alignOffset:_=0,arrowPadding:v=0,avoidCollisions:m=!0,collisionBoundary:h=[],collisionPadding:g=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:w="optimized",onPlaced:T,...b}=t,C=$S(VS,u),[M,S]=E.useState(null),L=ft(e,Ce=>S(Ce)),[O,N]=E.useState(null),B=zS(O),F=(n=B==null?void 0:B.width)!==null&&n!==void 0?n:0,q=(r=B==null?void 0:B.height)!==null&&r!==void 0?r:0,W=d+(p!=="center"?"-"+p:""),U=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},H=Array.isArray(h)?h:[h],X=H.length>0,re={padding:U,boundary:H.filter(QL),altBoundary:X},{refs:Z,floatingStyles:fe,placement:$,isPositioned:K,middlewareData:te}=XL({strategy:"fixed",placement:W,whileElementsMounted:(...Ce)=>zL(...Ce,{animationFrame:w==="always"}),elements:{reference:C.anchor},middleware:[FL({mainAxis:f+q,alignmentAxis:_}),m&&kL({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?GL():void 0,...re}),m&&BL({...re}),$L({...re,apply:({elements:Ce,rects:Ne,availableWidth:Le,availableHeight:at})=>{const{width:D,height:A}=Ne.reference,Q=Ce.floating.style;Q.setProperty("--radix-popper-available-width",`${Le}px`),Q.setProperty("--radix-popper-available-height",`${at}px`),Q.setProperty("--radix-popper-anchor-width",`${D}px`),Q.setProperty("--radix-popper-anchor-height",`${A}px`)}}),O&&WL({element:O,padding:v}),eU({arrowWidth:F,arrowHeight:q}),y&&VL({strategy:"referenceHidden",...re})]}),[P,ee]=GS($),le=Xt(T);an(()=>{K&&(le==null||le())},[K,le]);const z=(i=te.arrow)===null||i===void 0?void 0:i.x,pe=(o=te.arrow)===null||o===void 0?void 0:o.y,ie=((s=te.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[Pe,ye]=E.useState();return an(()=>{M&&ye(window.getComputedStyle(M).zIndex)},[M]),E.createElement("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...fe,transform:K?fe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Pe,"--radix-popper-transform-origin":[(a=te.transformOrigin)===null||a===void 0?void 0:a.x,(l=te.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:t.dir},E.createElement(ZL,{scope:u,placedSide:P,onArrowChange:N,arrowX:z,arrowY:pe,shouldHideArrow:ie},E.createElement(Ke.div,de({"data-side":P,"data-align":ee},b,{ref:L,style:{...b.style,animation:K?void 0:"none",opacity:(c=te.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function QL(t){return t!==null}const eU=t=>({name:"transformOrigin",options:t,fn(e){var n,r,i,o,s;const{placement:a,rects:l,middlewareData:c}=e,d=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,f=d?0:t.arrowWidth,p=d?0:t.arrowHeight,[_,v]=GS(a),m={start:"0%",center:"50%",end:"100%"}[v],h=((r=(i=c.arrow)===null||i===void 0?void 0:i.x)!==null&&r!==void 0?r:0)+f/2,g=((o=(s=c.arrow)===null||s===void 0?void 0:s.y)!==null&&o!==void 0?o:0)+p/2;let x="",y="";return _==="bottom"?(x=d?m:`${h}px`,y=`${-p}px`):_==="top"?(x=d?m:`${h}px`,y=`${l.floating.height+p}px`):_==="right"?(x=`${-p}px`,y=d?m:`${g}px`):_==="left"&&(x=`${l.floating.width+p}px`,y=d?m:`${g}px`),{data:{x,y}}}});function GS(t){const[e,n="center"]=t.split("-");return[e,n]}const tU=YL,nU=KL,rU=JL,iU=E.forwardRef((t,e)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=t;return r?WM.createPortal(E.createElement(Ke.div,de({},i,{ref:e})),r):null});function HS(t){const e=E.useRef({value:t,previous:t});return E.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}const oU=E.forwardRef((t,e)=>E.createElement(Ke.span,de({},t,{ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}})));var sU=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},cs=new WeakMap,Lc=new WeakMap,Uc={},ch=0,WS=function(t){return t&&(t.host||WS(t.parentNode))},aU=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=WS(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},lU=function(t,e,n,r){var i=aU(e,Array.isArray(t)?t:[t]);Uc[n]||(Uc[n]=new WeakMap);var o=Uc[n],s=[],a=new Set,l=new Set(i),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};i.forEach(c);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))u(f);else try{var p=f.getAttribute(r),_=p!==null&&p!=="false",v=(cs.get(f)||0)+1,m=(o.get(f)||0)+1;cs.set(f,v),o.set(f,m),s.push(f),v===1&&_&&Lc.set(f,!0),m===1&&f.setAttribute(n,"true"),_||f.setAttribute(r,"true")}catch(h){console.error("aria-hidden: cannot operate on ",f,h)}})};return u(e),a.clear(),ch++,function(){s.forEach(function(d){var f=cs.get(d)-1,p=o.get(d)-1;cs.set(d,f),o.set(d,p),f||(Lc.has(d)||d.removeAttribute(r),Lc.delete(d)),p||d.removeAttribute(n)}),ch--,ch||(cs=new WeakMap,cs=new WeakMap,Lc=new WeakMap,Uc={})}},cU=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=sU(t);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),lU(r,i,n,"aria-hidden")):function(){return null}},Sr=function(){return Sr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Sr.apply(this,arguments)};function XS(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uU(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var ru="right-scroll-bar-position",iu="width-before-scroll-bar",dU="with-scroll-bars-hidden",fU="--removed-body-scroll-bar-size";function uh(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function hU(t,e){var n=E.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=e,n.facade}var pU=typeof window<"u"?E.useLayoutEffect:E.useEffect,tx=new WeakMap;function mU(t,e){var n=hU(null,function(r){return t.forEach(function(i){return uh(i,r)})});return pU(function(){var r=tx.get(n);if(r){var i=new Set(r),o=new Set(t),s=n.current;i.forEach(function(a){o.has(a)||uh(a,null)}),o.forEach(function(a){i.has(a)||uh(a,s)})}tx.set(n,t)},[t]),n}function _U(t){return t}function vU(t,e){e===void 0&&(e=_U);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(o){var s=e(o,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var u=s;s=[],u.forEach(o)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){s.push(u),c()},filter:function(u){return s=s.filter(u),n}}}};return i}function gU(t){t===void 0&&(t={});var e=vU(null);return e.options=Sr({async:!0,ssr:!1},t),e}var jS=function(t){var e=t.sideCar,n=XS(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return E.createElement(r,Sr({},n))};jS.isSideCarExport=!0;function xU(t,e){return t.useMedium(e),jS}var YS=gU(),dh=function(){},Md=E.forwardRef(function(t,e){var n=E.useRef(null),r=E.useState({onScrollCapture:dh,onWheelCapture:dh,onTouchMoveCapture:dh}),i=r[0],o=r[1],s=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,u=t.enabled,d=t.shards,f=t.sideCar,p=t.noIsolation,_=t.inert,v=t.allowPinchZoom,m=t.as,h=m===void 0?"div":m,g=XS(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=f,y=mU([n,e]),w=Sr(Sr({},g),i);return E.createElement(E.Fragment,null,u&&E.createElement(x,{sideCar:YS,removeScrollBar:c,shards:d,noIsolation:p,inert:_,setCallbacks:o,allowPinchZoom:!!v,lockRef:n}),s?E.cloneElement(E.Children.only(a),Sr(Sr({},w),{ref:y})):E.createElement(h,Sr({},w,{className:l,ref:y}),a))});Md.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Md.classNames={fullWidth:iu,zeroRight:ru};var yU=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function EU(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=yU();return e&&t.setAttribute("nonce",e),t}function SU(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function TU(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var wU=function(){var t=0,e=null;return{add:function(n){t==0&&(e=EU())&&(SU(e,n),TU(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},MU=function(){var t=wU();return function(e,n){E.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},qS=function(){var t=MU(),e=function(n){var r=n.styles,i=n.dynamic;return t(r,i),null};return e},bU={left:0,top:0,right:0,gap:0},fh=function(t){return parseInt(t||"",10)||0},AU=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],i=e[t==="padding"?"paddingRight":"marginRight"];return[fh(n),fh(r),fh(i)]},RU=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return bU;var e=AU(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},CU=qS(),$s="data-scroll-locked",PU=function(t,e,n,r){var i=t.left,o=t.top,s=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(dU,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat($s,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ru,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(iu,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(ru," .").concat(ru,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(iu," .").concat(iu,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat($s,`] {
    `).concat(fU,": ").concat(a,`px;
  }
`)},nx=function(){var t=parseInt(document.body.getAttribute($s)||"0",10);return isFinite(t)?t:0},IU=function(){E.useEffect(function(){return document.body.setAttribute($s,(nx()+1).toString()),function(){var t=nx()-1;t<=0?document.body.removeAttribute($s):document.body.setAttribute($s,t.toString())}},[])},DU=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,i=r===void 0?"margin":r;IU();var o=E.useMemo(function(){return RU(i)},[i]);return E.createElement(CU,{styles:PU(o,!e,i,n?"":"!important")})},Ip=!1;if(typeof window<"u")try{var Oc=Object.defineProperty({},"passive",{get:function(){return Ip=!0,!0}});window.addEventListener("test",Oc,Oc),window.removeEventListener("test",Oc,Oc)}catch{Ip=!1}var us=Ip?{passive:!1}:!1,NU=function(t){return t.tagName==="TEXTAREA"},KS=function(t,e){var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!NU(t)&&n[e]==="visible")},LU=function(t){return KS(t,"overflowY")},UU=function(t){return KS(t,"overflowX")},rx=function(t,e){var n=e;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=ZS(t,n);if(r){var i=JS(t,n),o=i[1],s=i[2];if(o>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},OU=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},zU=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},ZS=function(t,e){return t==="v"?LU(e):UU(e)},JS=function(t,e){return t==="v"?OU(e):zU(e)},FU=function(t,e){return t==="h"&&e==="rtl"?-1:1},kU=function(t,e,n,r,i){var o=FU(t,window.getComputedStyle(e).direction),s=o*r,a=n.target,l=e.contains(a),c=!1,u=s>0,d=0,f=0;do{var p=JS(t,a),_=p[0],v=p[1],m=p[2],h=v-m-o*_;(_||h)&&ZS(t,a)&&(d+=h,f+=_),a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(u&&(d===0||!i)||!u&&(f===0||!i))&&(c=!0),c},zc=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},ix=function(t){return[t.deltaX,t.deltaY]},ox=function(t){return t&&"current"in t?t.current:t},BU=function(t,e){return t[0]===e[0]&&t[1]===e[1]},$U=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},VU=0,ds=[];function GU(t){var e=E.useRef([]),n=E.useRef([0,0]),r=E.useRef(),i=E.useState(VU++)[0],o=E.useState(function(){return qS()})[0],s=E.useRef(t);E.useEffect(function(){s.current=t},[t]),E.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(i));var v=uU([t.lockRef.current],(t.shards||[]).map(ox),!0).filter(Boolean);return v.forEach(function(m){return m.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),v.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(i))})}}},[t.inert,t.lockRef.current,t.shards]);var a=E.useCallback(function(v,m){if("touches"in v&&v.touches.length===2)return!s.current.allowPinchZoom;var h=zc(v),g=n.current,x="deltaX"in v?v.deltaX:g[0]-h[0],y="deltaY"in v?v.deltaY:g[1]-h[1],w,T=v.target,b=Math.abs(x)>Math.abs(y)?"h":"v";if("touches"in v&&b==="h"&&T.type==="range")return!1;var C=rx(b,T);if(!C)return!0;if(C?w=b:(w=b==="v"?"h":"v",C=rx(b,T)),!C)return!1;if(!r.current&&"changedTouches"in v&&(x||y)&&(r.current=w),!w)return!0;var M=r.current||w;return kU(M,m,v,M==="h"?x:y,!0)},[]),l=E.useCallback(function(v){var m=v;if(!(!ds.length||ds[ds.length-1]!==o)){var h="deltaY"in m?ix(m):zc(m),g=e.current.filter(function(w){return w.name===m.type&&w.target===m.target&&BU(w.delta,h)})[0];if(g&&g.should){m.cancelable&&m.preventDefault();return}if(!g){var x=(s.current.shards||[]).map(ox).filter(Boolean).filter(function(w){return w.contains(m.target)}),y=x.length>0?a(m,x[0]):!s.current.noIsolation;y&&m.cancelable&&m.preventDefault()}}},[]),c=E.useCallback(function(v,m,h,g){var x={name:v,delta:m,target:h,should:g};e.current.push(x),setTimeout(function(){e.current=e.current.filter(function(y){return y!==x})},1)},[]),u=E.useCallback(function(v){n.current=zc(v),r.current=void 0},[]),d=E.useCallback(function(v){c(v.type,ix(v),v.target,a(v,t.lockRef.current))},[]),f=E.useCallback(function(v){c(v.type,zc(v),v.target,a(v,t.lockRef.current))},[]);E.useEffect(function(){return ds.push(o),t.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,us),document.addEventListener("touchmove",l,us),document.addEventListener("touchstart",u,us),function(){ds=ds.filter(function(v){return v!==o}),document.removeEventListener("wheel",l,us),document.removeEventListener("touchmove",l,us),document.removeEventListener("touchstart",u,us)}},[]);var p=t.removeScrollBar,_=t.inert;return E.createElement(E.Fragment,null,_?E.createElement(o,{styles:$U(i)}):null,p?E.createElement(DU,{gapMode:"margin"}):null)}const HU=xU(YS,GU);var QS=E.forwardRef(function(t,e){return E.createElement(Md,Sr({},t,{ref:e,sideCar:HU}))});QS.classNames=Md.classNames;const WU=[" ","Enter","ArrowUp","ArrowDown"],XU=[" ","Enter"],bd="Select",[Ad,Rd,jU]=lm(bd),[va,q5]=Ir(bd,[jU,BS]),Cm=BS(),[YU,Go]=va(bd),[qU,KU]=va(bd),ZU=t=>{const{__scopeSelect:e,children:n,open:r,defaultOpen:i,onOpenChange:o,value:s,defaultValue:a,onValueChange:l,dir:c,name:u,autoComplete:d,disabled:f,required:p}=t,_=Cm(e),[v,m]=E.useState(null),[h,g]=E.useState(null),[x,y]=E.useState(!1),w=fa(c),[T=!1,b]=dr({prop:r,defaultProp:i,onChange:o}),[C,M]=dr({prop:s,defaultProp:a,onChange:l}),S=E.useRef(null),L=v?!!v.closest("form"):!0,[O,N]=E.useState(new Set),B=Array.from(O).map(F=>F.props.value).join(";");return E.createElement(tU,_,E.createElement(YU,{required:p,scope:e,trigger:v,onTriggerChange:m,valueNode:h,onValueNodeChange:g,valueNodeHasChildren:x,onValueNodeHasChildrenChange:y,contentId:da(),value:C,onValueChange:M,open:T,onOpenChange:b,dir:w,triggerPointerDownPosRef:S,disabled:f},E.createElement(Ad.Provider,{scope:e},E.createElement(qU,{scope:t.__scopeSelect,onNativeOptionAdd:E.useCallback(F=>{N(q=>new Set(q).add(F))},[]),onNativeOptionRemove:E.useCallback(F=>{N(q=>{const W=new Set(q);return W.delete(F),W})},[])},n)),L?E.createElement(i1,{key:B,"aria-hidden":!0,required:p,tabIndex:-1,name:u,autoComplete:d,value:C,onChange:F=>M(F.target.value),disabled:f},C===void 0?E.createElement("option",{value:""}):null,Array.from(O)):null))},JU="SelectTrigger",QU=E.forwardRef((t,e)=>{const{__scopeSelect:n,disabled:r=!1,...i}=t,o=Cm(n),s=Go(JU,n),a=s.disabled||r,l=ft(e,s.onTriggerChange),c=Rd(n),[u,d,f]=o1(_=>{const v=c().filter(g=>!g.disabled),m=v.find(g=>g.value===s.value),h=s1(v,_,m);h!==void 0&&s.onValueChange(h.value)}),p=()=>{a||(s.onOpenChange(!0),f())};return E.createElement(nU,de({asChild:!0},o),E.createElement(Ke.button,de({type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":r1(s.value)?"":void 0},i,{ref:l,onClick:qe(i.onClick,_=>{_.currentTarget.focus()}),onPointerDown:qe(i.onPointerDown,_=>{const v=_.target;v.hasPointerCapture(_.pointerId)&&v.releasePointerCapture(_.pointerId),_.button===0&&_.ctrlKey===!1&&(p(),s.triggerPointerDownPosRef.current={x:Math.round(_.pageX),y:Math.round(_.pageY)},_.preventDefault())}),onKeyDown:qe(i.onKeyDown,_=>{const v=u.current!=="";!(_.ctrlKey||_.altKey||_.metaKey)&&_.key.length===1&&d(_.key),!(v&&_.key===" ")&&WU.includes(_.key)&&(p(),_.preventDefault())})})))}),eO="SelectValue",tO=E.forwardRef((t,e)=>{const{__scopeSelect:n,className:r,style:i,children:o,placeholder:s="",...a}=t,l=Go(eO,n),{onValueNodeHasChildrenChange:c}=l,u=o!==void 0,d=ft(e,l.onValueNodeChange);return an(()=>{c(u)},[c,u]),E.createElement(Ke.span,de({},a,{ref:d,style:{pointerEvents:"none"}}),r1(l.value)?E.createElement(E.Fragment,null,s):o)}),nO=E.forwardRef((t,e)=>{const{__scopeSelect:n,children:r,...i}=t;return E.createElement(Ke.span,de({"aria-hidden":!0},i,{ref:e}),r||"▼")}),rO=t=>E.createElement(iU,de({asChild:!0},t)),na="SelectContent",iO=E.forwardRef((t,e)=>{const n=Go(na,t.__scopeSelect),[r,i]=E.useState();if(an(()=>{i(new DocumentFragment)},[]),!n.open){const o=r;return o?Bo.createPortal(E.createElement(e1,{scope:t.__scopeSelect},E.createElement(Ad.Slot,{scope:t.__scopeSelect},E.createElement("div",null,t.children))),o):null}return E.createElement(oO,de({},t,{ref:e}))}),Vr=10,[e1,Ho]=va(na),oO=E.forwardRef((t,e)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:s,side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:_,hideWhenDetached:v,avoidCollisions:m,...h}=t,g=Go(na,n),[x,y]=E.useState(null),[w,T]=E.useState(null),b=ft(e,P=>y(P)),[C,M]=E.useState(null),[S,L]=E.useState(null),O=Rd(n),[N,B]=E.useState(!1),F=E.useRef(!1);E.useEffect(()=>{if(x)return cU(x)},[x]),YN();const q=E.useCallback(P=>{const[ee,...le]=O().map(ie=>ie.ref.current),[z]=le.slice(-1),pe=document.activeElement;for(const ie of P)if(ie===pe||(ie==null||ie.scrollIntoView({block:"nearest"}),ie===ee&&w&&(w.scrollTop=0),ie===z&&w&&(w.scrollTop=w.scrollHeight),ie==null||ie.focus(),document.activeElement!==pe))return},[O,w]),W=E.useCallback(()=>q([C,x]),[q,C,x]);E.useEffect(()=>{N&&W()},[N,W]);const{onOpenChange:U,triggerPointerDownPosRef:H}=g;E.useEffect(()=>{if(x){let P={x:0,y:0};const ee=z=>{var pe,ie,Pe,ye;P={x:Math.abs(Math.round(z.pageX)-((pe=(ie=H.current)===null||ie===void 0?void 0:ie.x)!==null&&pe!==void 0?pe:0)),y:Math.abs(Math.round(z.pageY)-((Pe=(ye=H.current)===null||ye===void 0?void 0:ye.y)!==null&&Pe!==void 0?Pe:0))}},le=z=>{P.x<=10&&P.y<=10?z.preventDefault():x.contains(z.target)||U(!1),document.removeEventListener("pointermove",ee),H.current=null};return H.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",le,{capture:!0})}}},[x,U,H]),E.useEffect(()=>{const P=()=>U(!1);return window.addEventListener("blur",P),window.addEventListener("resize",P),()=>{window.removeEventListener("blur",P),window.removeEventListener("resize",P)}},[U]);const[X,re]=o1(P=>{const ee=O().filter(pe=>!pe.disabled),le=ee.find(pe=>pe.ref.current===document.activeElement),z=s1(ee,P,le);z&&setTimeout(()=>z.ref.current.focus())}),Z=E.useCallback((P,ee,le)=>{const z=!F.current&&!le;(g.value!==void 0&&g.value===ee||z)&&(M(P),z&&(F.current=!0))},[g.value]),fe=E.useCallback(()=>x==null?void 0:x.focus(),[x]),$=E.useCallback((P,ee,le)=>{const z=!F.current&&!le;(g.value!==void 0&&g.value===ee||z)&&L(P)},[g.value]),K=r==="popper"?sx:sO,te=K===sx?{side:a,sideOffset:l,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:_,hideWhenDetached:v,avoidCollisions:m}:{};return E.createElement(e1,{scope:n,content:x,viewport:w,onViewportChange:T,itemRefCallback:Z,selectedItem:C,onItemLeave:fe,itemTextRefCallback:$,focusSelectedItem:W,selectedItemText:S,position:r,isPositioned:N,searchRef:X},E.createElement(QS,{as:Qs,allowPinchZoom:!0},E.createElement(qN,{asChild:!0,trapped:g.open,onMountAutoFocus:P=>{P.preventDefault()},onUnmountAutoFocus:qe(i,P=>{var ee;(ee=g.trigger)===null||ee===void 0||ee.focus({preventScroll:!0}),P.preventDefault()})},E.createElement(WN,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:P=>P.preventDefault(),onDismiss:()=>g.onOpenChange(!1)},E.createElement(K,de({role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:P=>P.preventDefault()},h,te,{onPlaced:()=>B(!0),ref:b,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:qe(h.onKeyDown,P=>{const ee=P.ctrlKey||P.altKey||P.metaKey;if(P.key==="Tab"&&P.preventDefault(),!ee&&P.key.length===1&&re(P.key),["ArrowUp","ArrowDown","Home","End"].includes(P.key)){let z=O().filter(pe=>!pe.disabled).map(pe=>pe.ref.current);if(["ArrowUp","End"].includes(P.key)&&(z=z.slice().reverse()),["ArrowUp","ArrowDown"].includes(P.key)){const pe=P.target,ie=z.indexOf(pe);z=z.slice(ie+1)}setTimeout(()=>q(z)),P.preventDefault()}})}))))))}),sO=E.forwardRef((t,e)=>{const{__scopeSelect:n,onPlaced:r,...i}=t,o=Go(na,n),s=Ho(na,n),[a,l]=E.useState(null),[c,u]=E.useState(null),d=ft(e,b=>u(b)),f=Rd(n),p=E.useRef(!1),_=E.useRef(!0),{viewport:v,selectedItem:m,selectedItemText:h,focusSelectedItem:g}=s,x=E.useCallback(()=>{if(o.trigger&&o.valueNode&&a&&c&&v&&m&&h){const b=o.trigger.getBoundingClientRect(),C=c.getBoundingClientRect(),M=o.valueNode.getBoundingClientRect(),S=h.getBoundingClientRect();if(o.dir!=="rtl"){const pe=S.left-C.left,ie=M.left-pe,Pe=b.left-ie,ye=b.width+Pe,Ce=Math.max(ye,C.width),Ne=window.innerWidth-Vr,Le=bp(ie,[Vr,Ne-Ce]);a.style.minWidth=ye+"px",a.style.left=Le+"px"}else{const pe=C.right-S.right,ie=window.innerWidth-M.right-pe,Pe=window.innerWidth-b.right-ie,ye=b.width+Pe,Ce=Math.max(ye,C.width),Ne=window.innerWidth-Vr,Le=bp(ie,[Vr,Ne-Ce]);a.style.minWidth=ye+"px",a.style.right=Le+"px"}const L=f(),O=window.innerHeight-Vr*2,N=v.scrollHeight,B=window.getComputedStyle(c),F=parseInt(B.borderTopWidth,10),q=parseInt(B.paddingTop,10),W=parseInt(B.borderBottomWidth,10),U=parseInt(B.paddingBottom,10),H=F+q+N+U+W,X=Math.min(m.offsetHeight*5,H),re=window.getComputedStyle(v),Z=parseInt(re.paddingTop,10),fe=parseInt(re.paddingBottom,10),$=b.top+b.height/2-Vr,K=O-$,te=m.offsetHeight/2,P=m.offsetTop+te,ee=F+q+P,le=H-ee;if(ee<=$){const pe=m===L[L.length-1].ref.current;a.style.bottom="0px";const ie=c.clientHeight-v.offsetTop-v.offsetHeight,Pe=Math.max(K,te+(pe?fe:0)+ie+W),ye=ee+Pe;a.style.height=ye+"px"}else{const pe=m===L[0].ref.current;a.style.top="0px";const Pe=Math.max($,F+v.offsetTop+(pe?Z:0)+te)+le;a.style.height=Pe+"px",v.scrollTop=ee-$+v.offsetTop}a.style.margin=`${Vr}px 0`,a.style.minHeight=X+"px",a.style.maxHeight=O+"px",r==null||r(),requestAnimationFrame(()=>p.current=!0)}},[f,o.trigger,o.valueNode,a,c,v,m,h,o.dir,r]);an(()=>x(),[x]);const[y,w]=E.useState();an(()=>{c&&w(window.getComputedStyle(c).zIndex)},[c]);const T=E.useCallback(b=>{b&&_.current===!0&&(x(),g==null||g(),_.current=!1)},[x,g]);return E.createElement(aO,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:p,onScrollButtonChange:T},E.createElement("div",{ref:l,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y}},E.createElement(Ke.div,de({},i,{ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),sx=E.forwardRef((t,e)=>{const{__scopeSelect:n,align:r="start",collisionPadding:i=Vr,...o}=t,s=Cm(n);return E.createElement(rU,de({},s,o,{ref:e,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[aO,Pm]=va(na,{}),ax="SelectViewport",lO=E.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t,i=Ho(ax,n),o=Pm(ax,n),s=ft(e,i.onViewportChange),a=E.useRef(0);return E.createElement(E.Fragment,null,E.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),E.createElement(Ad.Slot,{scope:n},E.createElement(Ke.div,de({"data-radix-select-viewport":"",role:"presentation"},r,{ref:s,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:qe(r.onScroll,l=>{const c=l.currentTarget,{contentWrapper:u,shouldExpandOnScrollRef:d}=o;if(d!=null&&d.current&&u){const f=Math.abs(a.current-c.scrollTop);if(f>0){const p=window.innerHeight-Vr*2,_=parseFloat(u.style.minHeight),v=parseFloat(u.style.height),m=Math.max(_,v);if(m<p){const h=m+f,g=Math.min(p,h),x=h-g;u.style.height=g+"px",u.style.bottom==="0px"&&(c.scrollTop=x>0?x:0,u.style.justifyContent="flex-end")}}}a.current=c.scrollTop})}))))}),cO="SelectGroup",[K5,uO]=va(cO),dO="SelectLabel",fO=E.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t,i=uO(dO,n);return E.createElement(Ke.div,de({id:i.id},r,{ref:e}))}),Dp="SelectItem",[hO,t1]=va(Dp),pO=E.forwardRef((t,e)=>{const{__scopeSelect:n,value:r,disabled:i=!1,textValue:o,...s}=t,a=Go(Dp,n),l=Ho(Dp,n),c=a.value===r,[u,d]=E.useState(o??""),[f,p]=E.useState(!1),_=ft(e,h=>{var g;return(g=l.itemRefCallback)===null||g===void 0?void 0:g.call(l,h,r,i)}),v=da(),m=()=>{i||(a.onValueChange(r),a.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return E.createElement(hO,{scope:n,value:r,disabled:i,textId:v,isSelected:c,onItemTextChange:E.useCallback(h=>{d(g=>{var x;return g||((x=h==null?void 0:h.textContent)!==null&&x!==void 0?x:"").trim()})},[])},E.createElement(Ad.ItemSlot,{scope:n,value:r,disabled:i,textValue:u},E.createElement(Ke.div,de({role:"option","aria-labelledby":v,"data-highlighted":f?"":void 0,"aria-selected":c&&f,"data-state":c?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1},s,{ref:_,onFocus:qe(s.onFocus,()=>p(!0)),onBlur:qe(s.onBlur,()=>p(!1)),onPointerUp:qe(s.onPointerUp,m),onPointerMove:qe(s.onPointerMove,h=>{if(i){var g;(g=l.onItemLeave)===null||g===void 0||g.call(l)}else h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:qe(s.onPointerLeave,h=>{if(h.currentTarget===document.activeElement){var g;(g=l.onItemLeave)===null||g===void 0||g.call(l)}}),onKeyDown:qe(s.onKeyDown,h=>{var g;((g=l.searchRef)===null||g===void 0?void 0:g.current)!==""&&h.key===" "||(XU.includes(h.key)&&m(),h.key===" "&&h.preventDefault())})}))))}),Fc="SelectItemText",mO=E.forwardRef((t,e)=>{const{__scopeSelect:n,className:r,style:i,...o}=t,s=Go(Fc,n),a=Ho(Fc,n),l=t1(Fc,n),c=KU(Fc,n),[u,d]=E.useState(null),f=ft(e,h=>d(h),l.onItemTextChange,h=>{var g;return(g=a.itemTextRefCallback)===null||g===void 0?void 0:g.call(a,h,l.value,l.disabled)}),p=u==null?void 0:u.textContent,_=E.useMemo(()=>E.createElement("option",{key:l.value,value:l.value,disabled:l.disabled},p),[l.disabled,l.value,p]),{onNativeOptionAdd:v,onNativeOptionRemove:m}=c;return an(()=>(v(_),()=>m(_)),[v,m,_]),E.createElement(E.Fragment,null,E.createElement(Ke.span,de({id:l.textId},o,{ref:f})),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Bo.createPortal(o.children,s.valueNode):null)}),_O="SelectItemIndicator",vO=E.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t;return t1(_O,n).isSelected?E.createElement(Ke.span,de({"aria-hidden":!0},r,{ref:e})):null}),lx="SelectScrollUpButton",gO=E.forwardRef((t,e)=>{const n=Ho(lx,t.__scopeSelect),r=Pm(lx,t.__scopeSelect),[i,o]=E.useState(!1),s=ft(e,r.onScrollButtonChange);return an(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=l.scrollTop>0;o(u)};var a=c;const l=n.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),i?E.createElement(n1,de({},t,{ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop-l.offsetHeight)}})):null}),cx="SelectScrollDownButton",xO=E.forwardRef((t,e)=>{const n=Ho(cx,t.__scopeSelect),r=Pm(cx,t.__scopeSelect),[i,o]=E.useState(!1),s=ft(e,r.onScrollButtonChange);return an(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=l.scrollHeight-l.clientHeight,d=Math.ceil(l.scrollTop)<u;o(d)};var a=c;const l=n.viewport;return c(),l.addEventListener("scroll",c),()=>l.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),i?E.createElement(n1,de({},t,{ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:l}=n;a&&l&&(a.scrollTop=a.scrollTop+l.offsetHeight)}})):null}),n1=E.forwardRef((t,e)=>{const{__scopeSelect:n,onAutoScroll:r,...i}=t,o=Ho("SelectScrollButton",n),s=E.useRef(null),a=Rd(n),l=E.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return E.useEffect(()=>()=>l(),[l]),an(()=>{var c;const u=a().find(d=>d.ref.current===document.activeElement);u==null||(c=u.ref.current)===null||c===void 0||c.scrollIntoView({block:"nearest"})},[a]),E.createElement(Ke.div,de({"aria-hidden":!0},i,{ref:e,style:{flexShrink:0,...i.style},onPointerDown:qe(i.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:qe(i.onPointerMove,()=>{var c;(c=o.onItemLeave)===null||c===void 0||c.call(o),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:qe(i.onPointerLeave,()=>{l()})}))}),yO=E.forwardRef((t,e)=>{const{__scopeSelect:n,...r}=t;return E.createElement(Ke.div,de({"aria-hidden":!0},r,{ref:e}))});function r1(t){return t===""||t===void 0}const i1=E.forwardRef((t,e)=>{const{value:n,...r}=t,i=E.useRef(null),o=ft(e,i),s=HS(n);return E.useEffect(()=>{const a=i.current,l=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==n&&u){const d=new Event("change",{bubbles:!0});u.call(a,n),a.dispatchEvent(d)}},[s,n]),E.createElement(oU,{asChild:!0},E.createElement("select",de({},r,{ref:o,defaultValue:n})))});i1.displayName="BubbleSelect";function o1(t){const e=Xt(t),n=E.useRef(""),r=E.useRef(0),i=E.useCallback(s=>{const a=n.current+s;e(a),function l(c){n.current=c,window.clearTimeout(r.current),c!==""&&(r.current=window.setTimeout(()=>l(""),1e3))}(a)},[e]),o=E.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return E.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,o]}function s1(t,e,n){const i=e.length>1&&Array.from(e).every(c=>c===e[0])?e[0]:e,o=n?t.indexOf(n):-1;let s=EO(t,Math.max(o,0));i.length===1&&(s=s.filter(c=>c!==n));const l=s.find(c=>c.textValue.toLowerCase().startsWith(i.toLowerCase()));return l!==n?l:void 0}function EO(t,e){return t.map((n,r)=>t[(e+r)%t.length])}const SO=ZU,a1=QU,TO=tO,wO=nO,MO=rO,l1=iO,bO=lO,c1=fO,u1=pO,AO=mO,RO=vO,d1=gO,f1=xO,h1=yO,CO=SO,PO=TO,p1=E.forwardRef(({className:t,children:e,...n},r)=>I.jsxs(a1,{ref:r,className:pt("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...n,children:[e,I.jsx(wO,{asChild:!0,children:I.jsx(vm,{className:"h-4 w-4 opacity-50"})})]}));p1.displayName=a1.displayName;const m1=E.forwardRef(({className:t,...e},n)=>I.jsx(d1,{ref:n,className:pt("flex cursor-default items-center justify-center py-1",t),...e,children:I.jsx(pN,{className:"h-4 w-4"})}));m1.displayName=d1.displayName;const _1=E.forwardRef(({className:t,...e},n)=>I.jsx(f1,{ref:n,className:pt("flex cursor-default items-center justify-center py-1",t),...e,children:I.jsx(vm,{className:"h-4 w-4"})}));_1.displayName=f1.displayName;const v1=E.forwardRef(({className:t,children:e,position:n="popper",...r},i)=>I.jsx(MO,{children:I.jsxs(l1,{ref:i,className:pt("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...r,children:[I.jsx(m1,{}),I.jsx(bO,{className:pt("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e}),I.jsx(_1,{})]})}));v1.displayName=l1.displayName;const IO=E.forwardRef(({className:t,...e},n)=>I.jsx(c1,{ref:n,className:pt("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...e}));IO.displayName=c1.displayName;const g1=E.forwardRef(({className:t,children:e,...n},r)=>I.jsxs(u1,{ref:r,className:pt("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[I.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:I.jsx(RO,{children:I.jsx(uS,{className:"h-4 w-4"})})}),I.jsx(AO,{children:e})]}));g1.displayName=u1.displayName;const DO=E.forwardRef(({className:t,...e},n)=>I.jsx(h1,{ref:n,className:pt("-mx-1 my-1 h-px bg-muted",t),...e}));DO.displayName=h1.displayName;class Dr extends E.Component{constructor(){super(...arguments);Fe(this,"handleChange",n=>{const{setUiStateKey:r,emit:i}=this.props,{setUiState:o}=this.context;o({[r]:n}),i=="true"&&et.emit(O0,{key:r,value:n})})}render(){const{name:n,labelText:r,setUiStateKey:i,emit:o,options:s}=this.props,{uiState:a}=this.context,l=a[i];return I.jsx("div",{className:"w-full p-2",children:I.jsxs(Em,{className:"w-50",children:[r,I.jsxs(CO,{name:n,value:l,defaultValue:l,onValueChange:this.handleChange,children:[I.jsx(p1,{children:I.jsx(PO,{})}),I.jsx(v1,{children:s.map(c=>I.jsx(g1,{value:c.value,children:c.label},c.value))})]})]})})}}Fe(Dr,"contextType",Kn);const NO=[{value:dd,label:"first return"},{value:YM,label:"second return"},{value:jM,label:"no return limit"}],LO=()=>I.jsx(Dr,{name:"exampleSelect",labelText:"termination method",setUiStateKey:"UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD",emit:"false",options:NO}),UO=[{value:!0,label:"constant velocity"},{value:!1,label:"constant hamiltonian"}],OO=()=>I.jsx(Dr,{name:"selectSeedVelocityType",labelText:"seed velocity",setUiStateKey:"UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY",emit:"false",options:UO});class x1 extends E.Component{constructor(){super(...arguments);Fe(this,"shouldRenderSeedMagnitude",()=>{const{uiState:n}=this.context;return n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY===!0});Fe(this,"shouldRenderSeedHamiltonian",()=>{const{uiState:n}=this.context;return n.UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY===!1})}handleClickDataUpdate(){console.warn("handleClickDataUpdate"),et.emit(N0,{}),et.emit(yl,{})}handleClickDataUpdateStreamline(){console.warn("handleClickDataUpdateStreamline"),et.emit(N9,{}),et.emit(yl,{})}render(){return I.jsxs("div",{className:"flex flex-col h-full",children:[I.jsxs("div",{className:"p-2 bg-secondary grid grid-cols-2",children:[I.jsx(Uo,{className:"w-full",onClick:this.handleClickDataUpdate,children:"update all"}),I.jsx(Uo,{className:"w-full",onClick:this.handleClickDataUpdateStreamline,children:"update streamline"})]}),I.jsx(Td,{className:"flex-1 overflow-y-auto",children:I.jsx("div",{className:"pl-2 pr-4 pb-2",children:I.jsxs(gm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["physics","integration","domain","streamline","ftle","geometry"],children:[I.jsxs(Oi,{value:"physics",children:[I.jsx(zi,{children:"Physics"}),I.jsxs(Fi,{children:[I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_MU",labelText:"mass of secondary: mu"}),I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY",labelText:"angular velocity: n"}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(OO,{}),this.shouldRenderSeedMagnitude()&&I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_ENERGY",labelText:"magnitude"}),this.shouldRenderSeedHamiltonian()&&I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_ENERGY",labelText:"hamiltonian"})]}),I.jsx(Bu,{className:"font-medium",children:"constant seed direction (left view)"}),I.jsxs("div",{className:"grid grid-cols-3",children:[I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X",labelText:"x"}),I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y",labelText:"y"}),I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z",labelText:"z"})]}),I.jsx(Bu,{className:"font-medium",children:"constant seed position (right view)"}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_POSITION_X",labelText:"x"}),I.jsx(ke,{name:"UI_STATE_DATA_PHYSICS_SEED_POSITION_Y",labelText:"y"})]})]})]}),I.jsxs(Oi,{value:"integration",children:[I.jsx(zi,{children:"Integration"}),I.jsxs(Fi,{children:[I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_DATA_INTEGRATION_STEP_SIZE",labelText:"step size"}),I.jsx(ke,{name:"UI_STATE_DATA_INTEGRATION_MAX_STEPS",labelText:"max steps"})]}),I.jsx(LO,{})]})]}),I.jsxs(Oi,{value:"domain",children:[I.jsx(zi,{children:"Domain"}),I.jsxs(Fi,{children:[I.jsxs("div",{className:"grid grid-cols-3",children:[I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_MIN_X",labelText:"min x"}),I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_MAX_X",labelText:"max x"}),I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_PIXELS_X",labelText:"grid nodes x"})]}),I.jsxs("div",{className:"grid grid-cols-3",children:[I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_MIN_Y",labelText:"min y"}),I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_MAX_Y",labelText:"max y"}),I.jsx(ke,{name:"UI_STATE_DATA_DOMAIN_PIXELS_Y",labelText:"grid nodes y"})]}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_DATA_ANGLE_PIXELS_X",labelText:"grid nodes theta"}),I.jsx(ke,{name:"UI_STATE_DATA_ANGLE_PIXELS_Y",labelText:"grid nodes phi"})]})]})]})]})})})]})}}Fe(x1,"contextType",Kn);class zO extends E.Component{handleClickCameraUpdate(){console.log("handleClickCameraUpdate"),et.emit(L9,{}),et.emit(yl,{})}render(){return I.jsxs("div",{className:"flex flex-col h-full",children:[I.jsx("div",{className:"p-2 bg-secondary",children:I.jsx(Uo,{className:"w-full",onClick:this.handleClickCameraUpdate,children:"update"})}),I.jsx(Td,{className:"flex-1 overflow-y-auto",children:I.jsx("div",{className:"pl-2 pr-4 pb-2",children:I.jsx(gm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["controls"],children:I.jsxs(Oi,{value:"controls",children:[I.jsx(zi,{children:"Controls"}),I.jsxs(Fi,{children:[I.jsx(ke,{name:"UI_STATE_CAMERA_CONTROLS_ROTATESPEED",labelText:"rotation speed"}),I.jsx(ke,{name:"UI_STATE_CAMERA_CONTROLS_PANSPEED",labelText:"pan speed"}),I.jsx(ke,{name:"UI_STATE_CAMERA_CONTROLS_ZOOMSPEED",labelText:"zoom speed"}),I.jsx(ke,{name:"UI_STATE_CAMERA_NEAR",labelText:"min distance"}),I.jsx(ke,{name:"UI_STATE_CAMERA_FAR",labelText:"far distance"})]})]})})})})]})}}const y1="Checkbox",[FO,Z5]=Ir(y1),[kO,BO]=FO(y1),$O=E.forwardRef((t,e)=>{const{__scopeCheckbox:n,name:r,checked:i,defaultChecked:o,required:s,disabled:a,value:l="on",onCheckedChange:c,...u}=t,[d,f]=E.useState(null),p=ft(e,x=>f(x)),_=E.useRef(!1),v=d?!!d.closest("form"):!0,[m=!1,h]=dr({prop:i,defaultProp:o,onChange:c}),g=E.useRef(m);return E.useEffect(()=>{const x=d==null?void 0:d.form;if(x){const y=()=>h(g.current);return x.addEventListener("reset",y),()=>x.removeEventListener("reset",y)}},[d,h]),E.createElement(kO,{scope:n,state:m,disabled:a},E.createElement(Ke.button,de({type:"button",role:"checkbox","aria-checked":Ao(m)?"mixed":m,"aria-required":s,"data-state":E1(m),"data-disabled":a?"":void 0,disabled:a,value:l},u,{ref:p,onKeyDown:qe(t.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:qe(t.onClick,x=>{h(y=>Ao(y)?!0:!y),v&&(_.current=x.isPropagationStopped(),_.current||x.stopPropagation())})})),v&&E.createElement(HO,{control:d,bubbles:!_.current,name:r,value:l,checked:m,required:s,disabled:a,style:{transform:"translateX(-100%)"}}))}),VO="CheckboxIndicator",GO=E.forwardRef((t,e)=>{const{__scopeCheckbox:n,forceMount:r,...i}=t,o=BO(VO,n);return E.createElement(Ji,{present:r||Ao(o.state)||o.state===!0},E.createElement(Ke.span,de({"data-state":E1(o.state),"data-disabled":o.disabled?"":void 0},i,{ref:e,style:{pointerEvents:"none",...t.style}})))}),HO=t=>{const{control:e,checked:n,bubbles:r=!0,...i}=t,o=E.useRef(null),s=HS(n),a=zS(e);return E.useEffect(()=>{const l=o.current,c=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(c,"checked").set;if(s!==n&&d){const f=new Event("click",{bubbles:r});l.indeterminate=Ao(n),d.call(l,Ao(n)?!1:n),l.dispatchEvent(f)}},[s,n,r]),E.createElement("input",de({type:"checkbox","aria-hidden":!0,defaultChecked:Ao(n)?!1:n},i,{tabIndex:-1,ref:o,style:{...t.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Ao(t){return t==="indeterminate"}function E1(t){return Ao(t)?"indeterminate":t?"checked":"unchecked"}const S1=$O,WO=GO,T1=E.forwardRef(({className:t,...e},n)=>I.jsx(S1,{ref:n,className:pt("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...e,children:I.jsx(WO,{className:pt("flex items-center justify-center text-current"),children:I.jsx(uS,{className:"h-4 w-4"})})}));T1.displayName=S1.displayName;class Im extends E.Component{constructor(){super(...arguments);Fe(this,"handleChange",n=>{const{uiState:r,setUiState:i}=this.context;console.warn("e",r[n.target.id]),i({[n.target.id]:!r[n.target.id]})})}render(){const{name:n,labelText:r}=this.props,{uiState:i}=this.context,s=!!i[n];return I.jsx("div",{className:"w-full p-2 ",children:I.jsxs("div",{className:"flex items-center space-x-2",children:[I.jsx(T1,{id:n,name:n,checked:s,onClick:this.handleChange}),I.jsx("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:r})]})})}}Fe(Im,"contextType",Kn);const XO=[{value:sr,label:"specialized [default]"},{value:Cu,label:"raw virtual data texture"},{value:F0,label:"raw data texture"}],jO=()=>I.jsx(Dr,{name:"selectTextureMode",labelText:"texture mode",setUiStateKey:"UI_STATE_RENDERING_TEXTURE_MODE",emit:"false",options:XO}),YO=[{value:ld,label:"gravitational force: normal"},{value:F9,label:"gravitational force: magnitude"},{value:k0,label:"return: advection time"},{value:B0,label:"return: arc length"},{value:$0,label:"return: position"},{value:V0,label:"return: relative position (normalized)"},{value:G0,label:"return: relative position (magnitude)"},{value:H0,label:"return: direction"},{value:El,label:"return: FTLE"},{value:Za,label:"return: FTLE (both)"},{value:W0,label:"return: success"},{value:cd,label:"seed: velocity magnitude"},{value:k9,label:"return: hamiltonian error"},{value:X0,label:"return: nearest body"}],qO=()=>I.jsx(Dr,{name:"selectSpecializedMode",labelText:"specialized mode",setUiStateKey:"UI_STATE_RENDERING_SPECIALIZED_MODE",emit:"false",options:YO}),KO=[{value:B9,label:"seeds"},{value:ud,label:"gravitational force"},{value:$9,label:"flow map"},{value:V9,label:"seeds and returns"}],ZO=()=>I.jsx(Dr,{name:"selectRawMode",labelText:"display texture",setUiStateKey:"UI_STATE_RENDERING_RAW_MODE",emit:"false",options:KO}),JO=[{value:G9,label:"forward"},{value:qM,label:"backward"}],QO=()=>I.jsx(Dr,{name:"selectRenderingDirection",labelText:"direction",setUiStateKey:"UI_STATE_RENDERING_DIRECTION",emit:"false",options:JO}),e5=[{value:fd,label:"position and velocity separation"},{value:KM,label:"position separation"},{value:ZM,label:"velocity separation"}],t5=()=>I.jsx(Dr,{name:"selectFtleType",labelText:"FTLE type",setUiStateKey:"UI_STATE_RENDERING_FTLE_TYPE",emit:"false",options:e5});class w1 extends E.Component{constructor(){super(...arguments);Fe(this,"shouldRenderSpecializedMode",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===sr});Fe(this,"shouldRenderReturnNumber",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===sr&&(n.UI_STATE_RENDERING_SPECIALIZED_MODE===k0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===B0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===$0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===V0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===G0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===H0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===El||n.UI_STATE_RENDERING_SPECIALIZED_MODE===Za||n.UI_STATE_RENDERING_SPECIALIZED_MODE===W0||n.UI_STATE_RENDERING_SPECIALIZED_MODE===X0)});Fe(this,"shouldRenderFtleType",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===sr&&(n.UI_STATE_RENDERING_SPECIALIZED_MODE===El||n.UI_STATE_RENDERING_SPECIALIZED_MODE===Za)});Fe(this,"shouldRenderDirection",()=>{const{uiState:n}=this.context;return!(n.UI_STATE_RENDERING_TEXTURE_MODE===sr&&n.UI_STATE_RENDERING_SPECIALIZED_MODE===Za)});Fe(this,"shouldRenderRawMode",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===F0||n.UI_STATE_RENDERING_TEXTURE_MODE===Cu});Fe(this,"shouldRenderRawModeVirtual",()=>{const{uiState:n}=this.context;return n.UI_STATE_RENDERING_TEXTURE_MODE===Cu})}handleClickRenderingUpdate(){console.log("handleClickRenderingUpdate"),et.emit(L0,{}),et.emit(yl,{})}render(){return I.jsxs("div",{className:"flex flex-col h-full",children:[I.jsx("div",{className:"p-2 bg-secondary",children:I.jsx(Uo,{className:"w-full",onClick:this.handleClickRenderingUpdate,children:"update"})}),I.jsx(Td,{className:"flex-1 overflow-y-auto",children:I.jsx("div",{className:"pl-2 pr-4 pb-2",children:I.jsxs(gm,{type:"multiple",className:"w-full",collapsible:"true",defaultValue:["plane","spheres"],children:[I.jsxs(Oi,{value:"plane",children:[I.jsx(zi,{children:"Plane"}),I.jsxs(Fi,{children:[I.jsx(jO,{}),this.shouldRenderSpecializedMode()&&I.jsx(qO,{}),this.shouldRenderRawMode()&&I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ZO,{}),I.jsx(ke,{name:"UI_STATE_RENDERING_RAW_MODE_LAYER",labelText:"layer"})]}),this.shouldRenderFtleType()&&I.jsx(t5,{}),this.shouldRenderDirection()&&I.jsx(QO,{}),this.shouldRenderReturnNumber()&&I.jsx(ke,{name:"UI_STATE_RENDERING_RETURN_NUMBER",labelText:"return number"}),this.shouldRenderRawModeVirtual()&&I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX",labelText:"x texture index"}),I.jsx(ke,{name:"UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX",labelText:"y texture index"})]}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_SCALAR_MIN",labelText:"min scalar"}),I.jsx(ke,{name:"UI_STATE_RENDERING_SCALAR_MAX",labelText:"max scalar"})]}),I.jsx(ke,{name:"UI_STATE_RENDERING_OPACITY",labelText:"opacity"})]})]}),I.jsxs(Oi,{value:"spheres",children:[I.jsx(zi,{children:"Spheres"}),I.jsxs(Fi,{children:[I.jsx(ke,{name:"UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES",labelText:"max radius bodies"}),I.jsx(Bu,{className:"font-medium",children:"radius clicked position"}),I.jsxs("div",{className:"grid grid-cols-3",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS",labelText:"main"}),I.jsx(ke,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX",labelText:"aux (plane)"}),I.jsx(ke,{name:"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE",labelText:"aux (sphere)"})]})]})]}),I.jsxs(Oi,{value:"spheres",children:[I.jsx(zi,{children:"Tubes"}),I.jsxs(Fi,{children:[I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH",labelText:"segment length"}),I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_MAX_SEGMENTS",labelText:"max segments"})]}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_RADIUS",labelText:"tube radius"}),I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_NUM_SIDES",labelText:"number of sides"})]}),I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_COLOR",labelText:"color"}),I.jsxs("div",{className:"grid grid-cols-2",children:[I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_ROUGHNESS",labelText:"roughness"}),I.jsx(ke,{name:"UI_STATE_RENDERING_TUBE_EMISSIVE_INTENSITY",labelText:"emissive intensity"})]}),I.jsx(Im,{name:"UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS",labelText:"only show successful returns"})]})]})]})})})]})}}Fe(w1,"contextType",Kn);class n5 extends E.Component{render(){return I.jsxs(UD,{defaultValue:"data",className:"flex flex-col h-full",children:[I.jsxs(JE,{className:"rounded-none",children:[I.jsx(eu,{value:"data",children:"Data"}),I.jsx(eu,{value:"rendering",children:"Rendering"}),I.jsx(eu,{value:"camera",children:"Camera"})]}),I.jsx(tu,{value:"data",className:"mt-0 flex-1 overflow-hidden",children:I.jsx(x1,{})}),I.jsx(tu,{value:"rendering",className:"mt-0 flex-1 overflow-hidden",children:I.jsx(w1,{})}),I.jsx(tu,{value:"camera",className:"mt-0 flex-1 overflow-hidden",children:I.jsx(zO,{})})]})}}const r5=[{value:Ll,label:"2D grid (default)"},{value:H9,label:"spherical"}],i5=()=>I.jsx(Dr,{name:"selectAuxContent",labelText:"aux view content",setUiStateKey:"UI_STATE_AUX_CONTENT",emit:"true",options:r5}),o5=[{value:Pu,label:"theta right, phi up"},{value:$i,label:"theta down, phi right"}],s5=()=>I.jsx(Dr,{name:"selectAuxGridDirection",labelText:"aux grid direction",setUiStateKey:"UI_STATE_AUX_GRID_DIRECTION",emit:"true",options:o5});class M1 extends E.Component{constructor(){super(...arguments);Fe(this,"shouldRenderCheckboxScaleVertices",()=>{const{uiState:n}=this.context;return n.UI_STATE_AUX_CONTENT===H9&&n.UI_STATE_RENDERING_TEXTURE_MODE===sr&&n.UI_STATE_RENDERING_SPECIALIZED_MODE===cd});Fe(this,"shouldRenderGridDirection",()=>{const{uiState:n}=this.context;return n.UI_STATE_AUX_CONTENT===Ll})}render(){return I.jsxs("div",{children:[I.jsx(i5,{}),this.shouldRenderGridDirection()&&I.jsx(s5,{}),this.shouldRenderCheckboxScaleVertices()&&I.jsx(Im,{name:"UI_STATE_RENDERING_SCALE_VERTICES",labelText:"scale vertices"})]})}}Fe(M1,"contextType",Kn);const{createElement:ra,createContext:a5,createRef:J5,forwardRef:b1,useCallback:Rn,useContext:A1,useEffect:Ro,useImperativeHandle:R1,useLayoutEffect:l5,useMemo:c5,useRef:vn,useState:nl}=$p,ux=$p.useId,u5=l5,Cd=a5(null);Cd.displayName="PanelGroupContext";const Co=u5,d5=typeof ux=="function"?ux:()=>null;let f5=0;function Dm(t=null){const e=d5(),n=vn(t||e||null);return n.current===null&&(n.current=""+f5++),t??n.current}function C1({children:t,className:e="",collapsedSize:n,collapsible:r,defaultSize:i,forwardedRef:o,id:s,maxSize:a,minSize:l,onCollapse:c,onExpand:u,onResize:d,order:f,style:p,tagName:_="div",...v}){const m=A1(Cd);if(m===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:h,expandPanel:g,getPanelSize:x,getPanelStyle:y,groupId:w,isPanelCollapsed:T,reevaluatePanelConstraints:b,registerPanel:C,resizePanel:M,unregisterPanel:S}=m,L=Dm(s),O=vn({callbacks:{onCollapse:c,onExpand:u,onResize:d},constraints:{collapsedSize:n,collapsible:r,defaultSize:i,maxSize:a,minSize:l},id:L,idIsFromProps:s!==void 0,order:f});vn({didLogMissingDefaultSizeWarning:!1}),Co(()=>{const{callbacks:B,constraints:F}=O.current,q={...F};O.current.id=L,O.current.idIsFromProps=s!==void 0,O.current.order=f,B.onCollapse=c,B.onExpand=u,B.onResize=d,F.collapsedSize=n,F.collapsible=r,F.defaultSize=i,F.maxSize=a,F.minSize=l,(q.collapsedSize!==F.collapsedSize||q.collapsible!==F.collapsible||q.maxSize!==F.maxSize||q.minSize!==F.minSize)&&b(O.current,q)}),Co(()=>{const B=O.current;return C(B),()=>{S(B)}},[f,L,C,S]),R1(o,()=>({collapse:()=>{h(O.current)},expand:B=>{g(O.current,B)},getId(){return L},getSize(){return x(O.current)},isCollapsed(){return T(O.current)},isExpanded(){return!T(O.current)},resize:B=>{M(O.current,B)}}),[h,g,x,T,L,M]);const N=y(O.current,i);return ra(_,{...v,children:t,className:e,id:s,style:{...N,...p},"data-panel":"","data-panel-collapsible":r||void 0,"data-panel-group-id":w,"data-panel-id":L,"data-panel-size":parseFloat(""+N.flexGrow).toFixed(1)})}const P1=b1((t,e)=>ra(C1,{...t,forwardedRef:e}));C1.displayName="Panel";P1.displayName="forwardRef(Panel)";let Np=null,To=null;function h5(t,e){if(e){const n=(e&U1)!==0,r=(e&O1)!==0,i=(e&z1)!==0,o=(e&F1)!==0;if(n)return i?"se-resize":o?"ne-resize":"e-resize";if(r)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(t){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function p5(){To!==null&&(document.head.removeChild(To),Np=null,To=null)}function hh(t,e){const n=h5(t,e);Np!==n&&(Np=n,To===null&&(To=document.createElement("style"),document.head.appendChild(To)),To.innerHTML=`*{cursor: ${n}!important;}`)}function I1(t){return t.type==="keydown"}function D1(t){return t.type.startsWith("pointer")}function N1(t){return t.type.startsWith("mouse")}function Pd(t){if(D1(t)){if(t.isPrimary)return{x:t.clientX,y:t.clientY}}else if(N1(t))return{x:t.clientX,y:t.clientY};return{x:1/0,y:1/0}}function m5(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function _5(t,e,n){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function v5(t,e){if(t===e)throw new Error("Cannot compare node with itself");const n={a:hx(t),b:hx(e)};let r;for(;n.a.at(-1)===n.b.at(-1);)t=n.a.pop(),e=n.b.pop(),r=t;Je(r,"Stacking order can only be calculated for elements with a common ancestor");const i={a:fx(dx(n.a)),b:fx(dx(n.b))};if(i.a===i.b){const o=r.childNodes,s={a:n.a.at(-1),b:n.b.at(-1)};let a=o.length;for(;a--;){const l=o[a];if(l===s.a)return 1;if(l===s.b)return-1}}return Math.sign(i.a-i.b)}const g5=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function x5(t){var e;const n=getComputedStyle((e=L1(t))!==null&&e!==void 0?e:t).display;return n==="flex"||n==="inline-flex"}function y5(t){const e=getComputedStyle(t);return!!(e.position==="fixed"||e.zIndex!=="auto"&&(e.position!=="static"||x5(t))||+e.opacity<1||"transform"in e&&e.transform!=="none"||"webkitTransform"in e&&e.webkitTransform!=="none"||"mixBlendMode"in e&&e.mixBlendMode!=="normal"||"filter"in e&&e.filter!=="none"||"webkitFilter"in e&&e.webkitFilter!=="none"||"isolation"in e&&e.isolation==="isolate"||g5.test(e.willChange)||e.webkitOverflowScrolling==="touch")}function dx(t){let e=t.length;for(;e--;){const n=t[e];if(Je(n,"Missing node"),y5(n))return n}return null}function fx(t){return t&&Number(getComputedStyle(t).zIndex)||0}function hx(t){const e=[];for(;t;)e.push(t),t=L1(t);return e}function L1(t){const{parentNode:e}=t;return e&&e instanceof ShadowRoot?e.host:e}const U1=1,O1=2,z1=4,F1=8,E5=m5()==="coarse";let ji=[],Id=!1,Si=new Map,Dd=new Map;const Al=new Set;function S5(t,e,n,r,i){var o;const{ownerDocument:s}=e,a={direction:n,element:e,hitAreaMargins:r,setResizeHandlerState:i},l=(o=Si.get(s))!==null&&o!==void 0?o:0;return Si.set(s,l+1),Al.add(a),Wu(),function(){var u;Dd.delete(t),Al.delete(a);const d=(u=Si.get(s))!==null&&u!==void 0?u:1;Si.set(s,d-1),Wu(),d===1&&Si.delete(s)}}function px(t){const{target:e}=t,{x:n,y:r}=Pd(t);Id=!0,Nm({target:e,x:n,y:r}),Wu(),ji.length>0&&(Lm("down",t),t.preventDefault(),t.stopPropagation())}function La(t){const{x:e,y:n}=Pd(t);if(!Id){const{target:r}=t;Nm({target:r,x:e,y:n})}Lm("move",t),k1(),ji.length>0&&t.preventDefault()}function fs(t){const{target:e}=t,{x:n,y:r}=Pd(t);Dd.clear(),Id=!1,ji.length>0&&t.preventDefault(),Lm("up",t),Nm({target:e,x:n,y:r}),k1(),Wu()}function Nm({target:t,x:e,y:n}){ji.splice(0);let r=null;t instanceof HTMLElement&&(r=t),Al.forEach(i=>{const{element:o,hitAreaMargins:s}=i,a=o.getBoundingClientRect(),{bottom:l,left:c,right:u,top:d}=a,f=E5?s.coarse:s.fine;if(e>=c-f&&e<=u+f&&n>=d-f&&n<=l+f){if(r!==null&&o!==r&&!o.contains(r)&&!r.contains(o)&&v5(r,o)>0){let _=r,v=!1;for(;_&&!_.contains(o);){if(_5(_.getBoundingClientRect(),a)){v=!0;break}_=_.parentElement}if(v)return}ji.push(i)}})}function ph(t,e){Dd.set(t,e)}function k1(){let t=!1,e=!1;ji.forEach(r=>{const{direction:i}=r;i==="horizontal"?t=!0:e=!0});let n=0;Dd.forEach(r=>{n|=r}),t&&e?hh("intersection",n):t?hh("horizontal",n):e?hh("vertical",n):p5()}function Wu(){Si.forEach((t,e)=>{const{body:n}=e;n.removeEventListener("contextmenu",fs),n.removeEventListener("pointerdown",px),n.removeEventListener("pointerleave",La),n.removeEventListener("pointermove",La)}),window.removeEventListener("pointerup",fs),window.removeEventListener("pointercancel",fs),Al.size>0&&(Id?(ji.length>0&&Si.forEach((t,e)=>{const{body:n}=e;t>0&&(n.addEventListener("contextmenu",fs),n.addEventListener("pointerleave",La),n.addEventListener("pointermove",La))}),window.addEventListener("pointerup",fs),window.addEventListener("pointercancel",fs)):Si.forEach((t,e)=>{const{body:n}=e;t>0&&(n.addEventListener("pointerdown",px,{capture:!0}),n.addEventListener("pointermove",La))}))}function Lm(t,e){Al.forEach(n=>{const{setResizeHandlerState:r}=n,i=ji.includes(n);r(t,i,e)})}function Je(t,e){if(!t)throw console.error(e),Error(e)}const Um=10;function zo(t,e,n=Um){return t.toFixed(n)===e.toFixed(n)?0:t>e?1:-1}function Hr(t,e,n=Um){return zo(t,e,n)===0}function Pn(t,e,n){return zo(t,e,n)===0}function T5(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){const i=t[r],o=e[r];if(!Pn(i,o,n))return!1}return!0}function Ps({panelConstraints:t,panelIndex:e,size:n}){const r=t[e];Je(r!=null,`Panel constraints not found for index ${e}`);let{collapsedSize:i=0,collapsible:o,maxSize:s=100,minSize:a=0}=r;if(zo(n,a)<0)if(o){const l=(i+a)/2;zo(n,l)<0?n=i:n=a}else n=a;return n=Math.min(s,n),n=parseFloat(n.toFixed(Um)),n}function Ba({delta:t,initialLayout:e,panelConstraints:n,pivotIndices:r,prevLayout:i,trigger:o}){if(Pn(t,0))return e;const s=[...e],[a,l]=r;Je(a!=null,"Invalid first pivot index"),Je(l!=null,"Invalid second pivot index");let c=0;if(o==="keyboard"){{const d=t<0?l:a,f=n[d];Je(f,`Panel constraints not found for index ${d}`);const{collapsedSize:p=0,collapsible:_,minSize:v=0}=f;if(_){const m=e[d];if(Je(m!=null,`Previous layout not found for panel index ${d}`),Pn(m,p)){const h=v-m;zo(h,Math.abs(t))>0&&(t=t<0?0-h:h)}}}{const d=t<0?a:l,f=n[d];Je(f,`No panel constraints found for index ${d}`);const{collapsedSize:p=0,collapsible:_,minSize:v=0}=f;if(_){const m=e[d];if(Je(m!=null,`Previous layout not found for panel index ${d}`),Pn(m,v)){const h=m-p;zo(h,Math.abs(t))>0&&(t=t<0?0-h:h)}}}}{const d=t<0?1:-1;let f=t<0?l:a,p=0;for(;;){const v=e[f];Je(v!=null,`Previous layout not found for panel index ${f}`);const h=Ps({panelConstraints:n,panelIndex:f,size:100})-v;if(p+=h,f+=d,f<0||f>=n.length)break}const _=Math.min(Math.abs(t),Math.abs(p));t=t<0?0-_:_}{let f=t<0?a:l;for(;f>=0&&f<n.length;){const p=Math.abs(t)-Math.abs(c),_=e[f];Je(_!=null,`Previous layout not found for panel index ${f}`);const v=_-p,m=Ps({panelConstraints:n,panelIndex:f,size:v});if(!Pn(_,m)&&(c+=_-m,s[f]=m,c.toPrecision(3).localeCompare(Math.abs(t).toPrecision(3),void 0,{numeric:!0})>=0))break;t<0?f--:f++}}if(T5(i,s))return i;{const d=t<0?l:a,f=e[d];Je(f!=null,`Previous layout not found for panel index ${d}`);const p=f+c,_=Ps({panelConstraints:n,panelIndex:d,size:p});if(s[d]=_,!Pn(_,p)){let v=p-_,h=t<0?l:a;for(;h>=0&&h<n.length;){const g=s[h];Je(g!=null,`Previous layout not found for panel index ${h}`);const x=g+v,y=Ps({panelConstraints:n,panelIndex:h,size:x});if(Pn(g,y)||(v-=y-g,s[h]=y),Pn(v,0))break;t>0?h--:h++}}}const u=s.reduce((d,f)=>f+d,0);return Pn(u,100)?s:i}function w5({layout:t,panelsArray:e,pivotIndices:n}){let r=0,i=100,o=0,s=0;const a=n[0];Je(a!=null,"No pivot index found"),e.forEach((d,f)=>{const{constraints:p}=d,{maxSize:_=100,minSize:v=0}=p;f===a?(r=v,i=_):(o+=v,s+=_)});const l=Math.min(i,100-o),c=Math.max(r,100-s),u=t[a];return{valueMax:l,valueMin:c,valueNow:u}}function Rl(t,e=document){return Array.from(e.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${t}"]`))}function B1(t,e,n=document){const i=Rl(t,n).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===e);return i??null}function $1(t,e,n){const r=B1(t,e,n);return r!=null?[r,r+1]:[-1,-1]}function V1(t,e=document){var n;if(e instanceof HTMLElement&&(e==null||(n=e.dataset)===null||n===void 0?void 0:n.panelGroupId)==t)return e;const r=e.querySelector(`[data-panel-group][data-panel-group-id="${t}"]`);return r||null}function Nd(t,e=document){const n=e.querySelector(`[data-panel-resize-handle-id="${t}"]`);return n||null}function M5(t,e,n,r=document){var i,o,s,a;const l=Nd(e,r),c=Rl(t,r),u=l?c.indexOf(l):-1,d=(i=(o=n[u])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,f=(s=(a=n[u+1])===null||a===void 0?void 0:a.id)!==null&&s!==void 0?s:null;return[d,f]}function b5({committedValuesRef:t,eagerValuesRef:e,groupId:n,layout:r,panelDataArray:i,panelGroupElement:o,setLayout:s}){vn({didWarnAboutMissingResizeHandle:!1}),Co(()=>{if(!o)return;const a=Rl(n,o);for(let l=0;l<i.length-1;l++){const{valueMax:c,valueMin:u,valueNow:d}=w5({layout:r,panelsArray:i,pivotIndices:[l,l+1]}),f=a[l];if(f!=null){const p=i[l];Je(p,`No panel data found for index "${l}"`),f.setAttribute("aria-controls",p.id),f.setAttribute("aria-valuemax",""+Math.round(c)),f.setAttribute("aria-valuemin",""+Math.round(u)),f.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{a.forEach((l,c)=>{l.removeAttribute("aria-controls"),l.removeAttribute("aria-valuemax"),l.removeAttribute("aria-valuemin"),l.removeAttribute("aria-valuenow")})}},[n,r,i,o]),Ro(()=>{if(!o)return;const a=e.current;Je(a,"Eager values not found");const{panelDataArray:l}=a,c=V1(n,o);Je(c!=null,`No group found for id "${n}"`);const u=Rl(n,o);Je(u,`No resize handles found for group id "${n}"`);const d=u.map(f=>{const p=f.getAttribute("data-panel-resize-handle-id");Je(p,"Resize handle element has no handle id attribute");const[_,v]=M5(n,p,l,o);if(_==null||v==null)return()=>{};const m=h=>{if(!h.defaultPrevented)switch(h.key){case"Enter":{h.preventDefault();const g=l.findIndex(x=>x.id===_);if(g>=0){const x=l[g];Je(x,`No panel data found for index ${g}`);const y=r[g],{collapsedSize:w=0,collapsible:T,minSize:b=0}=x.constraints;if(y!=null&&T){const C=Ba({delta:Pn(y,w)?b-w:w-y,initialLayout:r,panelConstraints:l.map(M=>M.constraints),pivotIndices:$1(n,p,o),prevLayout:r,trigger:"keyboard"});r!==C&&s(C)}}break}}};return f.addEventListener("keydown",m),()=>{f.removeEventListener("keydown",m)}});return()=>{d.forEach(f=>f())}},[o,t,e,n,r,i,s])}function mx(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function G1(t,e){const n=t==="horizontal",{x:r,y:i}=Pd(e);return n?r:i}function A5(t,e,n,r,i){const o=n==="horizontal",s=Nd(e,i);Je(s,`No resize handle element found for id "${e}"`);const a=s.getAttribute("data-panel-group-id");Je(a,"Resize handle element has no group id attribute");let{initialCursorPosition:l}=r;const c=G1(n,t),u=V1(a,i);Je(u,`No group element found for id "${a}"`);const d=u.getBoundingClientRect(),f=o?d.width:d.height;return(c-l)/f*100}function R5(t,e,n,r,i,o){if(I1(t)){const s=n==="horizontal";let a=0;t.shiftKey?a=100:i!=null?a=i:a=10;let l=0;switch(t.key){case"ArrowDown":l=s?0:a;break;case"ArrowLeft":l=s?-a:0;break;case"ArrowRight":l=s?a:0;break;case"ArrowUp":l=s?0:-a;break;case"End":l=100;break;case"Home":l=-100;break}return l}else return r==null?0:A5(t,e,n,r,o)}function C5({panelDataArray:t}){const e=Array(t.length),n=t.map(o=>o.constraints);let r=0,i=100;for(let o=0;o<t.length;o++){const s=n[o];Je(s,`Panel constraints not found for index ${o}`);const{defaultSize:a}=s;a!=null&&(r++,e[o]=a,i-=a)}for(let o=0;o<t.length;o++){const s=n[o];Je(s,`Panel constraints not found for index ${o}`);const{defaultSize:a}=s;if(a!=null)continue;const l=t.length-r,c=i/l;r++,e[o]=c,i-=c}return e}function hs(t,e,n){e.forEach((r,i)=>{const o=t[i];Je(o,`Panel data not found for index ${i}`);const{callbacks:s,constraints:a,id:l}=o,{collapsedSize:c=0,collapsible:u}=a,d=n[l];if(d==null||r!==d){n[l]=r;const{onCollapse:f,onExpand:p,onResize:_}=s;_&&_(r,d),u&&(f||p)&&(p&&(d==null||Hr(d,c))&&!Hr(r,c)&&p(),f&&(d==null||!Hr(d,c))&&Hr(r,c)&&f())}})}function kc(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!=e[n])return!1;return!0}function P5({defaultSize:t,dragState:e,layout:n,panelData:r,panelIndex:i,precision:o=3}){const s=n[i];let a;return s==null?a=t!=null?t.toPrecision(o):"1":r.length===1?a="1":a=s.toPrecision(o),{flexBasis:0,flexGrow:a,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}function I5(t,e=10){let n=null;return(...i)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>{t(...i)},e)}}function _x(t){try{if(typeof localStorage<"u")t.getItem=e=>localStorage.getItem(e),t.setItem=(e,n)=>{localStorage.setItem(e,n)};else throw new Error("localStorage not supported in this environment")}catch(e){console.error(e),t.getItem=()=>null,t.setItem=()=>{}}}function H1(t){return`react-resizable-panels:${t}`}function W1(t){return t.map(e=>{const{constraints:n,id:r,idIsFromProps:i,order:o}=e;return i?r:o?`${o}:${JSON.stringify(n)}`:JSON.stringify(n)}).sort((e,n)=>e.localeCompare(n)).join(",")}function X1(t,e){try{const n=H1(t),r=e.getItem(n);if(r){const i=JSON.parse(r);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function D5(t,e,n){var r,i;const o=(r=X1(t,n))!==null&&r!==void 0?r:{},s=W1(e);return(i=o[s])!==null&&i!==void 0?i:null}function N5(t,e,n,r,i){var o;const s=H1(t),a=W1(e),l=(o=X1(t,i))!==null&&o!==void 0?o:{};l[a]={expandToSizes:Object.fromEntries(n.entries()),layout:r};try{i.setItem(s,JSON.stringify(l))}catch(c){console.error(c)}}function vx({layout:t,panelConstraints:e}){const n=[...t],r=n.reduce((o,s)=>o+s,0);if(n.length!==e.length)throw Error(`Invalid ${e.length} panel layout: ${n.map(o=>`${o}%`).join(", ")}`);if(!Pn(r,100))for(let o=0;o<e.length;o++){const s=n[o];Je(s!=null,`No layout data found for index ${o}`);const a=100/r*s;n[o]=a}let i=0;for(let o=0;o<e.length;o++){const s=n[o];Je(s!=null,`No layout data found for index ${o}`);const a=Ps({panelConstraints:e,panelIndex:o,size:s});s!=a&&(i+=s-a,n[o]=a)}if(!Pn(i,0))for(let o=0;o<e.length;o++){const s=n[o];Je(s!=null,`No layout data found for index ${o}`);const a=s+i,l=Ps({panelConstraints:e,panelIndex:o,size:a});if(s!==l&&(i-=l-s,n[o]=l,Pn(i,0)))break}return n}const L5=100,$a={getItem:t=>(_x($a),$a.getItem(t)),setItem:(t,e)=>{_x($a),$a.setItem(t,e)}},gx={};function j1({autoSaveId:t=null,children:e,className:n="",direction:r,forwardedRef:i,id:o=null,onLayout:s=null,keyboardResizeBy:a=null,storage:l=$a,style:c,tagName:u="div",...d}){const f=Dm(o),p=vn(null),[_,v]=nl(null),[m,h]=nl([]),g=vn({}),x=vn(new Map),y=vn(0),w=vn({autoSaveId:t,direction:r,dragState:_,id:f,keyboardResizeBy:a,onLayout:s,storage:l}),T=vn({layout:m,panelDataArray:[],panelDataArrayChanged:!1});vn({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),R1(i,()=>({getId:()=>w.current.id,getLayout:()=>{const{layout:Z}=T.current;return Z},setLayout:Z=>{const{onLayout:fe}=w.current,{layout:$,panelDataArray:K}=T.current,te=vx({layout:Z,panelConstraints:K.map(P=>P.constraints)});mx($,te)||(h(te),T.current.layout=te,fe&&fe(te),hs(K,te,g.current))}}),[]),Co(()=>{w.current.autoSaveId=t,w.current.direction=r,w.current.dragState=_,w.current.id=f,w.current.onLayout=s,w.current.storage=l}),b5({committedValuesRef:w,eagerValuesRef:T,groupId:f,layout:m,panelDataArray:T.current.panelDataArray,setLayout:h,panelGroupElement:p.current}),Ro(()=>{const{panelDataArray:Z}=T.current;if(t){if(m.length===0||m.length!==Z.length)return;let fe=gx[t];fe==null&&(fe=I5(N5,L5),gx[t]=fe);const $=[...Z],K=new Map(x.current);fe(t,$,K,m,l)}},[t,m,l]),Ro(()=>{});const b=Rn(Z=>{const{onLayout:fe}=w.current,{layout:$,panelDataArray:K}=T.current;if(Z.constraints.collapsible){const te=K.map(z=>z.constraints),{collapsedSize:P=0,panelSize:ee,pivotIndices:le}=ao(K,Z,$);if(Je(ee!=null,`Panel size not found for panel "${Z.id}"`),!Hr(ee,P)){x.current.set(Z.id,ee);const pe=ms(K,Z)===K.length-1?ee-P:P-ee,ie=Ba({delta:pe,initialLayout:$,panelConstraints:te,pivotIndices:le,prevLayout:$,trigger:"imperative-api"});kc($,ie)||(h(ie),T.current.layout=ie,fe&&fe(ie),hs(K,ie,g.current))}}},[]),C=Rn((Z,fe)=>{const{onLayout:$}=w.current,{layout:K,panelDataArray:te}=T.current;if(Z.constraints.collapsible){const P=te.map(Pe=>Pe.constraints),{collapsedSize:ee=0,panelSize:le=0,minSize:z=0,pivotIndices:pe}=ao(te,Z,K),ie=fe??z;if(Hr(le,ee)){const Pe=x.current.get(Z.id),ye=Pe!=null&&Pe>=ie?Pe:ie,Ne=ms(te,Z)===te.length-1?le-ye:ye-le,Le=Ba({delta:Ne,initialLayout:K,panelConstraints:P,pivotIndices:pe,prevLayout:K,trigger:"imperative-api"});kc(K,Le)||(h(Le),T.current.layout=Le,$&&$(Le),hs(te,Le,g.current))}}},[]),M=Rn(Z=>{const{layout:fe,panelDataArray:$}=T.current,{panelSize:K}=ao($,Z,fe);return Je(K!=null,`Panel size not found for panel "${Z.id}"`),K},[]),S=Rn((Z,fe)=>{const{panelDataArray:$}=T.current,K=ms($,Z);return P5({defaultSize:fe,dragState:_,layout:m,panelData:$,panelIndex:K})},[_,m]),L=Rn(Z=>{const{layout:fe,panelDataArray:$}=T.current,{collapsedSize:K=0,collapsible:te,panelSize:P}=ao($,Z,fe);return Je(P!=null,`Panel size not found for panel "${Z.id}"`),te===!0&&Hr(P,K)},[]),O=Rn(Z=>{const{layout:fe,panelDataArray:$}=T.current,{collapsedSize:K=0,collapsible:te,panelSize:P}=ao($,Z,fe);return Je(P!=null,`Panel size not found for panel "${Z.id}"`),!te||zo(P,K)>0},[]),N=Rn(Z=>{const{panelDataArray:fe}=T.current;fe.push(Z),fe.sort(($,K)=>{const te=$.order,P=K.order;return te==null&&P==null?0:te==null?-1:P==null?1:te-P}),T.current.panelDataArrayChanged=!0},[]);Co(()=>{if(T.current.panelDataArrayChanged){T.current.panelDataArrayChanged=!1;const{autoSaveId:Z,onLayout:fe,storage:$}=w.current,{layout:K,panelDataArray:te}=T.current;let P=null;if(Z){const le=D5(Z,te,$);le&&(x.current=new Map(Object.entries(le.expandToSizes)),P=le.layout)}P==null&&(P=C5({panelDataArray:te}));const ee=vx({layout:P,panelConstraints:te.map(le=>le.constraints)});mx(K,ee)||(h(ee),T.current.layout=ee,fe&&fe(ee),hs(te,ee,g.current))}}),Co(()=>{const Z=T.current;return()=>{Z.layout=[]}},[]);const B=Rn(Z=>function($){$.preventDefault();const K=p.current;if(!K)return()=>null;const{direction:te,dragState:P,id:ee,keyboardResizeBy:le,onLayout:z}=w.current,{layout:pe,panelDataArray:ie}=T.current,{initialLayout:Pe}=P??{},ye=$1(ee,Z,K);let Ce=R5($,Z,te,P,le,K);if(Ce===0)return;const Ne=te==="horizontal";document.dir==="rtl"&&Ne&&(Ce=-Ce);const Le=ie.map(A=>A.constraints),at=Ba({delta:Ce,initialLayout:Pe??pe,panelConstraints:Le,pivotIndices:ye,prevLayout:pe,trigger:I1($)?"keyboard":"mouse-or-touch"}),D=!kc(pe,at);(D1($)||N1($))&&y.current!=Ce&&(y.current=Ce,D?ph(Z,0):Ne?ph(Z,Ce<0?U1:O1):ph(Z,Ce<0?z1:F1)),D&&(h(at),T.current.layout=at,z&&z(at),hs(ie,at,g.current))},[]),F=Rn((Z,fe)=>{const{onLayout:$}=w.current,{layout:K,panelDataArray:te}=T.current,P=te.map(Pe=>Pe.constraints),{panelSize:ee,pivotIndices:le}=ao(te,Z,K);Je(ee!=null,`Panel size not found for panel "${Z.id}"`);const pe=ms(te,Z)===te.length-1?ee-fe:fe-ee,ie=Ba({delta:pe,initialLayout:K,panelConstraints:P,pivotIndices:le,prevLayout:K,trigger:"imperative-api"});kc(K,ie)||(h(ie),T.current.layout=ie,$&&$(ie),hs(te,ie,g.current))},[]),q=Rn((Z,fe)=>{const{layout:$,panelDataArray:K}=T.current,{collapsedSize:te=0,collapsible:P}=fe,{collapsedSize:ee=0,collapsible:le,maxSize:z=100,minSize:pe=0}=Z.constraints,{panelSize:ie}=ao(K,Z,$);ie!=null&&(P&&le&&Hr(ie,te)?Hr(te,ee)||F(Z,ee):ie<pe?F(Z,pe):ie>z&&F(Z,z))},[F]),W=Rn((Z,fe)=>{const{direction:$}=w.current,{layout:K}=T.current;if(!p.current)return;const te=Nd(Z,p.current);Je(te,`Drag handle element not found for id "${Z}"`);const P=G1($,fe);v({dragHandleId:Z,dragHandleRect:te.getBoundingClientRect(),initialCursorPosition:P,initialLayout:K})},[]),U=Rn(()=>{v(null)},[]),H=Rn(Z=>{const{panelDataArray:fe}=T.current,$=ms(fe,Z);$>=0&&(fe.splice($,1),delete g.current[Z.id],T.current.panelDataArrayChanged=!0)},[]),X=c5(()=>({collapsePanel:b,direction:r,dragState:_,expandPanel:C,getPanelSize:M,getPanelStyle:S,groupId:f,isPanelCollapsed:L,isPanelExpanded:O,reevaluatePanelConstraints:q,registerPanel:N,registerResizeHandle:B,resizePanel:F,startDragging:W,stopDragging:U,unregisterPanel:H,panelGroupElement:p.current}),[b,_,r,C,M,S,f,L,O,q,N,B,F,W,U,H]),re={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return ra(Cd.Provider,{value:X},ra(u,{...d,children:e,className:n,id:o,ref:p,style:{...re,...c},"data-panel-group":"","data-panel-group-direction":r,"data-panel-group-id":f}))}const Y1=b1((t,e)=>ra(j1,{...t,forwardedRef:e}));j1.displayName="PanelGroup";Y1.displayName="forwardRef(PanelGroup)";function ms(t,e){return t.findIndex(n=>n===e||n.id===e.id)}function ao(t,e,n){const r=ms(t,e),o=r===t.length-1?[r-1,r]:[r,r+1],s=n[r];return{...e.constraints,panelSize:s,pivotIndices:o}}function U5({disabled:t,handleId:e,resizeHandler:n,panelGroupElement:r}){Ro(()=>{if(t||n==null||r==null)return;const i=Nd(e,r);if(i==null)return;const o=s=>{if(!s.defaultPrevented)switch(s.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{s.preventDefault(),n(s);break}case"F6":{s.preventDefault();const a=i.getAttribute("data-panel-group-id");Je(a,`No group element found for id "${a}"`);const l=Rl(a,r),c=B1(a,e,r);Je(c!==null,`No resize element found for id "${e}"`);const u=s.shiftKey?c>0?c-1:l.length-1:c+1<l.length?c+1:0;l[u].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[r,t,e,n])}function q1({children:t=null,className:e="",disabled:n=!1,hitAreaMargins:r,id:i,onDragging:o,style:s={},tabIndex:a=0,tagName:l="div",...c}){var u,d;const f=vn(null),p=vn({onDragging:o});Ro(()=>{p.current.onDragging=o});const _=A1(Cd);if(_===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:v,groupId:m,registerResizeHandle:h,startDragging:g,stopDragging:x,panelGroupElement:y}=_,w=Dm(i),[T,b]=nl("inactive"),[C,M]=nl(!1),[S,L]=nl(null),O=vn({state:T});Co(()=>{O.current.state=T}),Ro(()=>{if(n)L(null);else{const q=h(w);L(()=>q)}},[n,w,h]);const N=(u=r==null?void 0:r.coarse)!==null&&u!==void 0?u:15,B=(d=r==null?void 0:r.fine)!==null&&d!==void 0?d:5;return Ro(()=>{if(n||S==null)return;const q=f.current;return Je(q,"Element ref not attached"),S5(w,q,v,{coarse:N,fine:B},(U,H,X)=>{if(H)switch(U){case"down":{b("drag"),g(w,X);const{onDragging:re}=p.current;re&&re(!0);break}case"move":{const{state:re}=O.current;re!=="drag"&&b("hover"),S(X);break}case"up":{b("hover"),x();const{onDragging:re}=p.current;re&&re(!1);break}}else b("inactive")})},[N,v,n,B,h,w,S,g,x]),U5({disabled:n,handleId:w,resizeHandler:S,panelGroupElement:y}),ra(l,{...c,children:t,className:e,id:i,onBlur:()=>M(!1),onFocus:()=>M(!0),ref:f,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...s},tabIndex:a,"data-panel-group-direction":v,"data-panel-group-id":m,"data-resize-handle":"","data-resize-handle-active":T==="drag"?"pointer":C?"keyboard":void 0,"data-resize-handle-state":T,"data-panel-resize-handle-enabled":!n,"data-panel-resize-handle-id":w})}q1.displayName="PanelResizeHandle";const mh=({className:t,...e})=>I.jsx(Y1,{className:pt("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...e}),lo=P1,Bc=({withHandle:t,className:e,...n})=>I.jsx(q1,{className:pt("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",e),...n,children:t&&I.jsx("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:I.jsx(vN,{className:"h-2.5 w-2.5"})})}),K1=E.forwardRef((t,e)=>{const{pressed:n,defaultPressed:r=!1,onPressedChange:i,...o}=t,[s=!1,a]=dr({prop:n,onChange:i,defaultProp:r});return E.createElement(Ke.button,de({type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":t.disabled?"":void 0},o,{ref:e,onClick:qe(t.onClick,()=>{t.disabled||a(!s)})}))}),Z1=K1,Ld="ToggleGroup",[J1,Q5]=Ir(Ld,[gd]),Q1=gd(),O5=we.forwardRef((t,e)=>{const{type:n,...r}=t;if(n==="single"){const i=r;return we.createElement(z5,de({},i,{ref:e}))}if(n==="multiple"){const i=r;return we.createElement(F5,de({},i,{ref:e}))}throw new Error(`Missing prop \`type\` expected on \`${Ld}\``)}),[eT,tT]=J1(Ld),z5=we.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...o}=t,[s,a]=dr({prop:n,defaultProp:r,onChange:i});return we.createElement(eT,{scope:t.__scopeToggleGroup,type:"single",value:s?[s]:[],onItemActivate:a,onItemDeactivate:we.useCallback(()=>a(""),[a])},we.createElement(nT,de({},o,{ref:e})))}),F5=we.forwardRef((t,e)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...o}=t,[s=[],a]=dr({prop:n,defaultProp:r,onChange:i}),l=we.useCallback(u=>a((d=[])=>[...d,u]),[a]),c=we.useCallback(u=>a((d=[])=>d.filter(f=>f!==u)),[a]);return we.createElement(eT,{scope:t.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:l,onItemDeactivate:c},we.createElement(nT,de({},o,{ref:e})))}),[k5,B5]=J1(Ld),nT=we.forwardRef((t,e)=>{const{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:o,dir:s,loop:a=!0,...l}=t,c=Q1(n),u=fa(s),d={role:"group",dir:u,...l};return we.createElement(k5,{scope:n,rovingFocus:i,disabled:r},i?we.createElement(zE,de({asChild:!0},c,{orientation:o,dir:u,loop:a}),we.createElement(Ke.div,de({},d,{ref:e}))):we.createElement(Ke.div,de({},d,{ref:e})))}),Lp="ToggleGroupItem",$5=we.forwardRef((t,e)=>{const n=tT(Lp,t.__scopeToggleGroup),r=B5(Lp,t.__scopeToggleGroup),i=Q1(t.__scopeToggleGroup),o=n.value.includes(t.value),s=r.disabled||t.disabled,a={...t,pressed:o,disabled:s},l=we.useRef(null);return r.rovingFocus?we.createElement(FE,de({asChild:!0},i,{focusable:!s,active:o,ref:l}),we.createElement(xx,de({},a,{ref:e}))):we.createElement(xx,de({},a,{ref:e}))}),xx=we.forwardRef((t,e)=>{const{__scopeToggleGroup:n,value:r,...i}=t,o=tT(Lp,n),s={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},a=o.type==="single"?s:void 0;return we.createElement(K1,de({},a,i,{ref:e,onPressedChange:l=>{l?o.onItemActivate(r):o.onItemDeactivate(r)}}))}),rT=O5,iT=$5,oT=xm("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),sT=E.forwardRef(({className:t,variant:e,size:n,...r},i)=>I.jsx(Z1,{ref:i,className:pt(oT({variant:e,size:n,className:t})),...r}));sT.displayName=Z1.displayName;const aT=E.createContext({size:"default",variant:"default"}),lT=E.forwardRef(({className:t,variant:e,size:n,children:r,...i},o)=>I.jsx(rT,{ref:o,className:pt("flex items-center justify-center gap-1",t),...i,children:I.jsx(aT.Provider,{value:{variant:e,size:n},children:r})}));lT.displayName=rT.displayName;const Up=E.forwardRef(({className:t,children:e,variant:n,size:r,...i},o)=>{const s=E.useContext(aT);return I.jsx(iT,{ref:o,className:pt(oT({variant:s.variant||n,size:s.size||r}),t),...i,children:e})});Up.displayName=iT.displayName;class cT extends E.Component{constructor(){super(...arguments);Fe(this,"handleChange",n=>{const{uiState:r,setUiState:i}=this.context;console.warn("e",r.UI_STATE_LINKED_VIEWS_ACTIVE),i({UI_STATE_LINKED_VIEWS_ACTIVE:!r.UI_STATE_LINKED_VIEWS_ACTIVE})})}render(){this.props;const{uiState:n}=this.context,r=n.UI_STATE_LINKED_VIEWS_ACTIVE,i=!!r;return I.jsx(sT,{name:"","data-state":i?"on":"off",defaultValue:r,onClick:this.handleChange,children:I.jsx(gN,{className:"h-8 w-8"})})}}Fe(cT,"contextType",Kn);class uT extends E.Component{constructor(){super(...arguments);Fe(this,"handleToggleChange",n=>{if(n){const{setUiState:r}=this.context;r({UI_STATE_ACTIVE_BEHAVIOR:n})}})}render(){const{uiState:n}=this.context,r=n.UI_STATE_ACTIVE_BEHAVIOR;return I.jsxs("div",{className:"flex items-center justify-center space-x-8",children:[I.jsxs(lT,{type:"single",value:r,onValueChange:this.handleToggleChange,children:[I.jsx(Up,{value:bo,children:I.jsx(hN,{className:"h-8 w-8"})}),I.jsx(Up,{value:z9,children:I.jsx(xN,{className:"h-8 w-8"})})]}),I.jsx(cT,{})]})}}Fe(uT,"contextType",Kn);class dT extends E.Component{handleClickAlignCamera(){console.log("handleClickAlignCamera"),et.emit(U0,{})}handleClickDownload(){console.log("handleClickDownload"),et.emit(z0,{})}render(){const{uiState:e}=this.context;return e.UI_STATE_ACTIVE_BEHAVIOR,I.jsxs("div",{className:"flex items-center justify-center space-x-1",children:[I.jsx(Uo,{variant:"outline",size:"icon",onClick:this.handleClickAlignCamera,children:I.jsx(_N,{className:"h-4 w-4"})}),I.jsx(Uo,{variant:"outline",size:"icon",onClick:this.handleClickDownload,children:I.jsx(mN,{className:"h-4 w-4"})})]})}}Fe(dT,"contextType",Kn);class Re{constructor(e,n,r,i){this.input_parameter_wrapper=e,this.ui_state_name=n,this.url_parameter_name=r,this.type=i,this.addToDicts()}addToDicts(){console.log("add InputWrapper: ",this.ui_state_name,this.url_parameter_name);var n=this.url_parameter_name in this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper;if(n){var e=this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper[this.url_parameter_name];throw new Error("Error while trying to add '"+this.ui_state_name+"' with url_parameter_name '"+this.url_parameter_name+"'. The url_parameter_name already exists for wrapper: '"+e.ui_state_name+"'")}var n=this.ui_state_name in this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper;if(n){var e=this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper[this.ui_state_name];throw new Error("Error while trying to add '"+this.ui_state_name+"' with url_parameter_name '"+this.url_parameter_name+"'. The ui_state_name already exists with url_parameter_name: '"+e.url_parameter_name+"'")}this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper[this.url_parameter_name]=this,this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper[this.ui_state_name]=this}}class fT extends E.Component{constructor(n){super(n);Fe(this,"handleEventInitializationCompleted",()=>{console.warn("handleEventInitializationCompleted"),this.waiting_for_completion-=1,this.waiting_for_completion==0&&(console.warn("all elements initialized"),et.emit(D0,{}))});Fe(this,"handleEventWriteFromUItoURL",()=>{console.warn("handleEventWriteFromUItoURL"),this.updateURL()});this.mainRef=n.mainRef,this.auxRef=n.auxRef,console.warn("CONSTRUCTOR: InputParameterWrapper"),this.dict_url_parameter_name_to_input_wrapper={},this.dict_ui_state_name_to_input_wrapper={},et.on(O9,this.handleEventInitializationCompleted),et.on(yl,this.handleEventWriteFromUItoURL),this.waiting_for_completion=XM,new Re(this,"UI_STATE_DATA_PHYSICS_MU","mu",ze),new Re(this,"UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY","n",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_ENERGY","e",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X","dx",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y","dy",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z","dz",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_POSITION_X","qx",ze),new Re(this,"UI_STATE_DATA_PHYSICS_SEED_POSITION_Y","qy",ze),new Re(this,"UI_STATE_DATA_INTEGRATION_STEP_SIZE","ss",ze),new Re(this,"UI_STATE_DATA_INTEGRATION_MAX_STEPS","sn",ze),new Re(this,"UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD","ter",ze),new Re(this,"UI_STATE_DATA_DOMAIN_MIN_X","xmin",ze),new Re(this,"UI_STATE_DATA_DOMAIN_MAX_X","xmax",ze),new Re(this,"UI_STATE_DATA_DOMAIN_PIXELS_X","nx",ze),new Re(this,"UI_STATE_DATA_DOMAIN_MIN_Y","ymin",ze),new Re(this,"UI_STATE_DATA_DOMAIN_MAX_Y","ymax",ze),new Re(this,"UI_STATE_DATA_DOMAIN_PIXELS_Y","ny",ze),new Re(this,"UI_STATE_DATA_ANGLE_PIXELS_X","ax",ze),new Re(this,"UI_STATE_DATA_ANGLE_PIXELS_Y","ay",ze),new Re(this,"UI_STATE_CAMERA_CONTROLS_ROTATESPEED","rot",ze),new Re(this,"UI_STATE_CAMERA_CONTROLS_PANSPEED","pan",ze),new Re(this,"UI_STATE_CAMERA_CONTROLS_ZOOMSPEED","zoom",ze),new Re(this,"UI_STATE_CAMERA_NEAR","near",ze),new Re(this,"UI_STATE_CAMERA_FAR","far",ze),new Re(this,"UI_STATE_RENDERING_FTLE_TYPE","ftype",oc),new Re(this,"UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES","radb",ze),new Re(this,"UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS","radcm",ze),new Re(this,"UI_STATE_RENDERING_SCALAR_MIN","smin",ze),new Re(this,"UI_STATE_RENDERING_SCALAR_MAX","smax",ze),new Re(this,"UI_STATE_RENDERING_OPACITY","opa",ze),new Re(this,"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS","radc",ze),new Re(this,"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX","rada",ze),new Re(this,"UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE","radas",ze),new Re(this,"UI_STATE_RENDERING_TEXTURE_MODE","tm",oc),new Re(this,"UI_STATE_RENDERING_SPECIALIZED_MODE","sm",oc),new Re(this,"UI_STATE_RENDERING_RETURN_NUMBER","rn",ze),new Re(this,"UI_STATE_RENDERING_DIRECTION","dir",df),new Re(this,"UI_STATE_RENDERING_RAW_MODE","raw",ze),new Re(this,"UI_STATE_RENDERING_RAW_MODE_LAYER","rawl",ze),new Re(this,"UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX","rawx",ze),new Re(this,"UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX","rawy",ze),new Re(this,"UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH","tsl",ze),new Re(this,"UI_STATE_RENDERING_TUBE_MAX_SEGMENTS","tsn",ze),new Re(this,"UI_STATE_RENDERING_TUBE_RADIUS","tr",ze),new Re(this,"UI_STATE_RENDERING_TUBE_NUM_SIDES","tns",ze),new Re(this,"UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS","succ",ze),new Re(this,"UI_STATE_RENDERING_TUBE_COLOR","col",ze),new Re(this,"UI_STATE_RENDERING_TUBE_ROUGHNESS","rough",ze),new Re(this,"UI_STATE_RENDERING_TUBE_EMISSIVE_INTENSITY","int",ze),new Re(this,"UI_STATE_ACTIVE_BEHAVIOR","ab",ze),new Re(this,"UI_STATE_LINKED_VIEWS_ACTIVE","link",ze),new Re(this,"UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY","cvel",df),new Re(this,"UI_STATE_AUX_CONTENT","auxc",ff),new Re(this,"UI_STATE_AUX_GRID_DIRECTION","auxgd",ff),new Re(this,"UI_STATE_RENDERING_SCALE_VERTICES","scalev",ze)}componentDidMount(){this.fromURL()}fromURL(){console.warn("fromURL:",window.location.search);const n=new URLSearchParams(window.location.search),r=window.location.search.length<1;n.has("c")||r||window.alert(`Error: Incomplete URL.
If you clicked on a link in a PDF, try using a different PDF viewer.`);var o={};for(var s in this.dict_url_parameter_name_to_input_wrapper){var a=this.dict_url_parameter_name_to_input_wrapper[s];const d=n.get(a.url_parameter_name);if(console.warn("url_parameter_name:",a.url_parameter_name,"value:",d),d!==null)switch(a.type){case df:o[a.ui_state_name]=d==="true";break;case oc:o[a.ui_state_name]=parseInt(d);break;case ff:o[a.ui_state_name]=parseInt(d),et.emit(O0,{key:a.ui_state_name,value:d});break;default:o[a.ui_state_name]=d;break}}const l=n.get("cc1");this.fromStringCameraAndControls(this.mainRef.current.sceneWrapper.camera,this.mainRef.current.sceneWrapper.controls,l);const c=n.get("cc2");this.fromStringCameraAndControls(this.auxRef.current.sceneWrapper.camera,this.auxRef.current.sceneWrapper.controls,c);const u=n.get("cc3");this.fromStringCameraAndControls(this.auxRef.current.sceneWrapper.camera_sphere,this.auxRef.current.sceneWrapper.controls_sphere,u),this.setValues(o)}updateURL(){var n=this.toQueryString();window.history.pushState(null,null,"index.html"+n)}toQueryString(){console.warn("toURL");var n={};for(var r in this.dict_url_parameter_name_to_input_wrapper){var i=this.dict_url_parameter_name_to_input_wrapper[r];console.log("key:",r);const s=this.getValue(i.ui_state_name);console.log("url_parameter_name:",i.url_parameter_name,"value:",s),s!==null&&(n[i.url_parameter_name]=s)}n.cc1=this.toStringCameraAndControls(this.mainRef.current.sceneWrapper.camera,this.mainRef.current.sceneWrapper.controls),n.cc2=this.toStringCameraAndControls(this.auxRef.current.sceneWrapper.camera,this.auxRef.current.sceneWrapper.controls),n.cc3=this.toStringCameraAndControls(this.auxRef.current.sceneWrapper.camera_sphere,this.auxRef.current.sceneWrapper.controls_sphere);var o="?"+Object.entries(n).map(([s,a])=>`${encodeURIComponent(s)}=${encodeURIComponent(a)}`).join("&");return console.log("query_string:",o),o+"&c=1"}setValue(n,r){console.warn("set value of '",n,"' to '",r,"'");const{setUiState:i}=this.context;i({[n]:r})}setValues(n){console.warn("set values",n);const{setUiState:r}=this.context;r(n)}getValue(n){console.warn("get value of '",n,"'");const{uiState:r}=this.context;return r[n]}render(){const{children:n}=this.props;return I.jsx("div",{children:n})}toStringCameraAndControls(n,r){return console.warn(n),n.position.x+"~"+n.position.y+"~"+n.position.z+"~"+n.up.x+"~"+n.up.y+"~"+n.up.z+"~"+n.quaternion.x+"~"+n.quaternion.y+"~"+n.quaternion.z+"~"+n.quaternion.w+"~"+r.target.x+"~"+r.target.y+"~"+r.target.z}fromStringCameraAndControls(n,r,i){if(i!==null){var o=i.split("~");n.position.x=parseFloat(o[0]),n.position.y=parseFloat(o[1]),n.position.z=parseFloat(o[2]),r.target.x=parseFloat(o[10]),r.target.y=parseFloat(o[11]),r.target.z=parseFloat(o[12]),n.up.x=parseFloat(o[3]),n.up.y=parseFloat(o[4]),n.up.z=parseFloat(o[5]),n.quaternion.set(parseFloat(o[6]),parseFloat(o[7]),parseFloat(o[8]),parseFloat(o[9]))}}}Fe(fT,"contextType",Kn);function V5(){const t=E.useRef(null),e=E.useRef(null);function n(){console.log("handleResizePanel"),et.emit(D9,{})}return I.jsx(q3,{children:I.jsx(fT,{mainRef:t,auxRef:e,children:I.jsx("div",{className:"absolute inset-2 flex flex-col",children:I.jsxs(mh,{direction:"horizontal",className:"max-w-md inset-0 min-w-full rounded-lg border",children:[I.jsx(lo,{defaultSize:25,children:I.jsx(n5,{})}),I.jsx(Bc,{}),I.jsx(lo,{onResize:n,defaultSize:50,children:I.jsxs(mh,{direction:"vertical",children:[I.jsx(lo,{onResize:n,defaultSize:85,children:I.jsx(mI,{ref:t,auxRef:e})}),I.jsx(Bc,{}),I.jsx(lo,{defaultSize:15,children:I.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[I.jsx("div",{className:"flex items-center justify-center p-2",children:I.jsx(uT,{})}),I.jsx("div",{className:"flex items-center justify-center p-2",children:I.jsx(dT,{})})]})})]})}),I.jsx(Bc,{}),I.jsx(lo,{defaultSize:25,children:I.jsxs(mh,{direction:"vertical",children:[I.jsx(lo,{onResize:n,defaultSize:50,children:I.jsx(xI,{ref:e,mainRef:t})}),I.jsx(Bc,{}),I.jsx(lo,{defaultSize:50,children:I.jsx(M1,{})})]})})]})})})})}_h.createRoot(document.getElementById("root")).render(I.jsx(V5,{}));
