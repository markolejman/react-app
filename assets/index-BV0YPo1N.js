var hy=Object.defineProperty;var py=(r,e,t)=>e in r?hy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Zt=(r,e,t)=>py(r,typeof e!="symbol"?e+"":e,t);function my(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function av(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bf={exports:{}},ma={},Vf={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function gy(){if(Km)return et;Km=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function y(k,V,re){this.props=k,this.context=V,this.refs=v,this.updater=re||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,V){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,V,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function E(){}E.prototype=y.prototype;function R(k,V,re){this.props=k,this.context=V,this.refs=v,this.updater=re||S}var L=R.prototype=new E;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var T=Array.isArray,A=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function C(k,V,re){var pe,Me={},J=null,Fe=null;if(V!=null)for(pe in V.ref!==void 0&&(Fe=V.ref),V.key!==void 0&&(J=""+V.key),V)A.call(V,pe)&&!O.hasOwnProperty(pe)&&(Me[pe]=V[pe]);var Se=arguments.length-2;if(Se===1)Me.children=re;else if(1<Se){for(var Te=Array(Se),me=0;me<Se;me++)Te[me]=arguments[me+2];Me.children=Te}if(k&&k.defaultProps)for(pe in Se=k.defaultProps,Se)Me[pe]===void 0&&(Me[pe]=Se[pe]);return{$$typeof:r,type:k,key:J,ref:Fe,props:Me,_owner:I.current}}function F(k,V){return{$$typeof:r,type:k.type,key:V,ref:k.ref,props:k.props,_owner:k._owner}}function w(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function G(k){var V={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(re){return V[re]})}var ae=/\/+/g;function X(k,V){return typeof k=="object"&&k!==null&&k.key!=null?G(""+k.key):V.toString(36)}function j(k,V,re,pe,Me){var J=typeof k;(J==="undefined"||J==="boolean")&&(k=null);var Fe=!1;if(k===null)Fe=!0;else switch(J){case"string":case"number":Fe=!0;break;case"object":switch(k.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=k,Me=Me(Fe),k=pe===""?"."+X(Fe,0):pe,T(Me)?(re="",k!=null&&(re=k.replace(ae,"$&/")+"/"),j(Me,V,re,"",function(me){return me})):Me!=null&&(w(Me)&&(Me=F(Me,re+(!Me.key||Fe&&Fe.key===Me.key?"":(""+Me.key).replace(ae,"$&/")+"/")+k)),V.push(Me)),1;if(Fe=0,pe=pe===""?".":pe+":",T(k))for(var Se=0;Se<k.length;Se++){J=k[Se];var Te=pe+X(J,Se);Fe+=j(J,V,re,Te,Me)}else if(Te=_(k),typeof Te=="function")for(k=Te.call(k),Se=0;!(J=k.next()).done;)J=J.value,Te=pe+X(J,Se++),Fe+=j(J,V,re,Te,Me);else if(J==="object")throw V=String(k),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ie(k,V,re){if(k==null)return k;var pe=[],Me=0;return j(k,pe,"","",function(J){return V.call(re,J,Me++)}),pe}function he(k){if(k._status===-1){var V=k._result;V=V(),V.then(function(re){(k._status===0||k._status===-1)&&(k._status=1,k._result=re)},function(re){(k._status===0||k._status===-1)&&(k._status=2,k._result=re)}),k._status===-1&&(k._status=0,k._result=V)}if(k._status===1)return k._result.default;throw k._result}var le={current:null},$={transition:null},B={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function W(){throw Error("act(...) is not supported in production builds of React.")}return et.Children={map:ie,forEach:function(k,V,re){ie(k,function(){V.apply(this,arguments)},re)},count:function(k){var V=0;return ie(k,function(){V++}),V},toArray:function(k){return ie(k,function(V){return V})||[]},only:function(k){if(!w(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},et.Component=y,et.Fragment=t,et.Profiler=o,et.PureComponent=R,et.StrictMode=s,et.Suspense=d,et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,et.act=W,et.cloneElement=function(k,V,re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var pe=M({},k.props),Me=k.key,J=k.ref,Fe=k._owner;if(V!=null){if(V.ref!==void 0&&(J=V.ref,Fe=I.current),V.key!==void 0&&(Me=""+V.key),k.type&&k.type.defaultProps)var Se=k.type.defaultProps;for(Te in V)A.call(V,Te)&&!O.hasOwnProperty(Te)&&(pe[Te]=V[Te]===void 0&&Se!==void 0?Se[Te]:V[Te])}var Te=arguments.length-2;if(Te===1)pe.children=re;else if(1<Te){Se=Array(Te);for(var me=0;me<Te;me++)Se[me]=arguments[me+2];pe.children=Se}return{$$typeof:r,type:k.type,key:Me,ref:J,props:pe,_owner:Fe}},et.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},et.createElement=C,et.createFactory=function(k){var V=C.bind(null,k);return V.type=k,V},et.createRef=function(){return{current:null}},et.forwardRef=function(k){return{$$typeof:u,render:k}},et.isValidElement=w,et.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:he}},et.memo=function(k,V){return{$$typeof:h,type:k,compare:V===void 0?null:V}},et.startTransition=function(k){var V=$.transition;$.transition={};try{k()}finally{$.transition=V}},et.unstable_act=W,et.useCallback=function(k,V){return le.current.useCallback(k,V)},et.useContext=function(k){return le.current.useContext(k)},et.useDebugValue=function(){},et.useDeferredValue=function(k){return le.current.useDeferredValue(k)},et.useEffect=function(k,V){return le.current.useEffect(k,V)},et.useId=function(){return le.current.useId()},et.useImperativeHandle=function(k,V,re){return le.current.useImperativeHandle(k,V,re)},et.useInsertionEffect=function(k,V){return le.current.useInsertionEffect(k,V)},et.useLayoutEffect=function(k,V){return le.current.useLayoutEffect(k,V)},et.useMemo=function(k,V){return le.current.useMemo(k,V)},et.useReducer=function(k,V,re){return le.current.useReducer(k,V,re)},et.useRef=function(k){return le.current.useRef(k)},et.useState=function(k){return le.current.useState(k)},et.useSyncExternalStore=function(k,V,re){return le.current.useSyncExternalStore(k,V,re)},et.useTransition=function(){return le.current.useTransition()},et.version="18.3.1",et}var Zm;function rh(){return Zm||(Zm=1,Vf.exports=gy()),Vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function vy(){if(Qm)return ma;Qm=1;var r=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,d,h){var m,g={},_=null,S=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:S,props:g,_owner:o.current}}return ma.Fragment=t,ma.jsx=f,ma.jsxs=f,ma}var Jm;function _y(){return Jm||(Jm=1,Bf.exports=vy()),Bf.exports}var dt=_y(),ee=rh();const En=av(ee),eg=my({__proto__:null,default:En},[ee]);var Zl={},Gf={exports:{}},On={},Wf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function xy(){return tg||(tg=1,function(r){function e($,B){var W=$.length;$.push(B);e:for(;0<W;){var k=W-1>>>1,V=$[k];if(0<o(V,B))$[k]=B,$[W]=V,W=k;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var B=$[0],W=$.pop();if(W!==B){$[0]=W;e:for(var k=0,V=$.length,re=V>>>1;k<re;){var pe=2*(k+1)-1,Me=$[pe],J=pe+1,Fe=$[J];if(0>o(Me,W))J<V&&0>o(Fe,Me)?($[k]=Fe,$[J]=W,k=J):($[k]=Me,$[pe]=W,k=pe);else if(J<V&&0>o(Fe,W))$[k]=Fe,$[J]=W,k=J;else break e}}return B}function o($,B){var W=$.sortIndex-B.sortIndex;return W!==0?W:$.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();r.unstable_now=function(){return f.now()-u}}var d=[],h=[],m=1,g=null,_=3,S=!1,M=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var B=t(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=$)s(h),B.sortIndex=B.expirationTime,e(d,B);else break;B=t(h)}}function T($){if(v=!1,L($),!M)if(t(d)!==null)M=!0,he(A);else{var B=t(h);B!==null&&le(T,B.startTime-$)}}function A($,B){M=!1,v&&(v=!1,E(C),C=-1),S=!0;var W=_;try{for(L(B),g=t(d);g!==null&&(!(g.expirationTime>B)||$&&!G());){var k=g.callback;if(typeof k=="function"){g.callback=null,_=g.priorityLevel;var V=k(g.expirationTime<=B);B=r.unstable_now(),typeof V=="function"?g.callback=V:g===t(d)&&s(d),L(B)}else s(d);g=t(d)}if(g!==null)var re=!0;else{var pe=t(h);pe!==null&&le(T,pe.startTime-B),re=!1}return re}finally{g=null,_=W,S=!1}}var I=!1,O=null,C=-1,F=5,w=-1;function G(){return!(r.unstable_now()-w<F)}function ae(){if(O!==null){var $=r.unstable_now();w=$;var B=!0;try{B=O(!0,$)}finally{B?X():(I=!1,O=null)}}else I=!1}var X;if(typeof R=="function")X=function(){R(ae)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ie=j.port2;j.port1.onmessage=ae,X=function(){ie.postMessage(null)}}else X=function(){y(ae,0)};function he($){O=$,I||(I=!0,X())}function le($,B){C=y(function(){$(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,he(A))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function($){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var W=_;_=B;try{return $()}finally{_=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,B){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var W=_;_=$;try{return B()}finally{_=W}},r.unstable_scheduleCallback=function($,B,W){var k=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?k+W:k):W=k,$){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=W+V,$={id:m++,callback:B,priorityLevel:$,startTime:W,expirationTime:V,sortIndex:-1},W>k?($.sortIndex=W,e(h,$),t(d)===null&&$===t(h)&&(v?(E(C),C=-1):v=!0,le(T,W-k))):($.sortIndex=V,e(d,$),M||S||(M=!0,he(A))),$},r.unstable_shouldYield=G,r.unstable_wrapCallback=function($){var B=_;return function(){var W=_;_=B;try{return $.apply(this,arguments)}finally{_=W}}}}(Hf)),Hf}var ng;function yy(){return ng||(ng=1,Wf.exports=xy()),Wf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Sy(){if(rg)return On;rg=1;var r=rh(),e=yy();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function v(n,i,a,c,p,x,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new v(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new v(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new v(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new v(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new v(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new v(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new v(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new v(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new v(n,5,!1,n.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(E,R);y[i]=new v(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(E,R);y[i]=new v(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(E,R);y[i]=new v(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new v(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new v(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,p,c)&&(a=null),c||p===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),G=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),$=Symbol.iterator;function B(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,k;function V(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var re=!1;function pe(n,i){if(!n||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){c=te}n.call(i.prototype)}else{try{throw Error()}catch(te){c=te}n()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),x=c.stack.split(`
`),b=p.length-1,N=x.length-1;1<=b&&0<=N&&p[b]!==x[N];)N--;for(;1<=b&&0<=N;b--,N--)if(p[b]!==x[N]){if(b!==1||N!==1)do if(b--,N--,0>N||p[b]!==x[N]){var U=`
`+p[b].replace(" at new "," at ");return n.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",n.displayName)),U}while(1<=b&&0<=N);break}}}finally{re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function Me(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=pe(n.type,!1),n;case 11:return n=pe(n.type.render,!1),n;case 1:return n=pe(n.type,!0),n;default:return""}}function J(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case F:return"Profiler";case C:return"StrictMode";case X:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:J(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return J(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function me(n){var i=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){c=""+b,x.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=me(n))}function je(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Oe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ft(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function fn(n,i){Pt(n,i);var a=Se(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ot(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||Oe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var kt=Array.isArray;function Gt(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function z(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Se(a)}}function fe(n,i){var a=Se(i.value),c=Se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function we(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function be(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?we(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ge,se=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ge=Ge||document.createElement("div"),Ge.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ge.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ze(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function De(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function Ke(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=De(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var rt=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function q(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function ue(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,Ee=null,Ve=null;function at(n){if(n=ea(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=dl(i),Pe(n.stateNode,n.type,i))}}function Qe(n){Ee?Ve?Ve.push(n):Ve=[n]:Ee=n}function Yt(){if(Ee){var n=Ee,i=Ve;if(Ve=Ee=null,at(n),i)for(n=0;n<i.length;n++)at(i[n])}}function Je(n,i){return n(i)}function Tt(){}var Mt=!1;function vr(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Je(n,i,a)}finally{Mt=!1,(Ee!==null||Ve!==null)&&(Tt(),Yt())}}function St(n,i){var a=n.stateNode;if(a===null)return null;var c=dl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Cn=!1;if(u)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{Cn=!1}function Gn(n,i,a,c,p,x,b,N,U){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(ve){this.onError(ve)}}var Wn=!1,D=null,Z=!1,oe=null,K={onError:function(n){Wn=!0,D=n}};function de(n,i,a,c,p,x,b,N,U){Wn=!1,D=null,Gn.apply(K,arguments)}function We(n,i,a,c,p,x,b,N,U){if(de.apply(this,arguments),Wn){if(Wn){var te=D;Wn=!1,D=null}else throw Error(t(198));Z||(Z=!0,oe=te)}}function qe(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ze(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ye(n){if(qe(n)!==n)throw Error(t(188))}function pt(n){var i=n.alternate;if(!i){if(i=qe(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return Ye(p),n;if(x===c)return Ye(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var b=!1,N=p.child;N;){if(N===a){b=!0,a=p,c=x;break}if(N===c){b=!0,c=p,a=x;break}N=N.sibling}if(!b){for(N=x.child;N;){if(N===a){b=!0,a=x,c=p;break}if(N===c){b=!0,c=x,a=p;break}N=N.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function it(n){return n=pt(n),n!==null?st(n):null}function st(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=st(n);if(i!==null)return i;n=n.sibling}return null}var Lt=e.unstable_scheduleCallback,Lr=e.unstable_cancelCallback,hi=e.unstable_shouldYield,pi=e.unstable_requestPaint,ut=e.unstable_now,ct=e.unstable_getCurrentPriorityLevel,Dr=e.unstable_ImmediatePriority,Ut=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Ir=e.unstable_LowPriority,mi=e.unstable_IdlePriority,gi=null,At=null;function jr(n){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(gi,n,void 0,(n.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:sc,An=Math.log,No=Math.LN2;function sc(n){return n>>>=0,n===0?32:31-(An(n)/No|0)|0}var Xi=64,Ya=4194304;function zo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ka(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,b=a&268435455;if(b!==0){var N=b&~p;N!==0?c=zo(N):(x&=b,x!==0&&(c=zo(x)))}else b=a&~p,b!==0?c=zo(b):x!==0&&(c=zo(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Tn(i),p=1<<a,c|=n[a],i&=~p;return c}function D_(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I_(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var b=31-Tn(x),N=1<<b,U=p[b];U===-1?((N&a)===0||(N&c)!==0)&&(p[b]=D_(N,i)):U<=i&&(n.expiredLanes|=N),x&=~N}}function oc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Th(){var n=Xi;return Xi<<=1,(Xi&4194240)===0&&(Xi=64),n}function ac(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fo(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tn(i),n[i]=a}function k_(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Tn(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function lc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Tn(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var xt=0;function Ah(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rh,uc,Ph,Lh,Dh,cc=!1,Za=[],vi=null,_i=null,xi=null,Oo=new Map,Uo=new Map,yi=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(n,i){switch(n){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":Oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Bo(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=ea(i),i!==null&&uc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function z_(n,i,a,c,p){switch(i){case"focusin":return vi=Bo(vi,n,i,a,c,p),!0;case"dragenter":return _i=Bo(_i,n,i,a,c,p),!0;case"mouseover":return xi=Bo(xi,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return Oo.set(x,Bo(Oo.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,Uo.set(x,Bo(Uo.get(x)||null,n,i,a,c,p)),!0}return!1}function kh(n){var i=Yi(n.target);if(i!==null){var a=qe(i);if(a!==null){if(i=a.tag,i===13){if(i=Ze(a),i!==null){n.blockedOn=i,Dh(n.priority,function(){Ph(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Re=c,a.target.dispatchEvent(c),Re=null}else return i=ea(a),i!==null&&uc(i),n.blockedOn=a,!1;i.shift()}return!0}function Nh(n,i,a){Qa(n)&&a.delete(i)}function F_(){cc=!1,vi!==null&&Qa(vi)&&(vi=null),_i!==null&&Qa(_i)&&(_i=null),xi!==null&&Qa(xi)&&(xi=null),Oo.forEach(Nh),Uo.forEach(Nh)}function Vo(n,i){n.blockedOn===i&&(n.blockedOn=null,cc||(cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,F_)))}function Go(n){function i(p){return Vo(p,n)}if(0<Za.length){Vo(Za[0],n);for(var a=1;a<Za.length;a++){var c=Za[a];c.blockedOn===n&&(c.blockedOn=null)}}for(vi!==null&&Vo(vi,n),_i!==null&&Vo(_i,n),xi!==null&&Vo(xi,n),Oo.forEach(i),Uo.forEach(i),a=0;a<yi.length;a++)c=yi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<yi.length&&(a=yi[0],a.blockedOn===null);)kh(a),a.blockedOn===null&&yi.shift()}var bs=T.ReactCurrentBatchConfig,Ja=!0;function O_(n,i,a,c){var p=xt,x=bs.transition;bs.transition=null;try{xt=1,fc(n,i,a,c)}finally{xt=p,bs.transition=x}}function U_(n,i,a,c){var p=xt,x=bs.transition;bs.transition=null;try{xt=4,fc(n,i,a,c)}finally{xt=p,bs.transition=x}}function fc(n,i,a,c){if(Ja){var p=dc(n,i,a,c);if(p===null)Rc(n,i,c,el,a),Ih(n,c);else if(z_(p,n,i,a,c))c.stopPropagation();else if(Ih(n,c),i&4&&-1<N_.indexOf(n)){for(;p!==null;){var x=ea(p);if(x!==null&&Rh(x),x=dc(n,i,a,c),x===null&&Rc(n,i,c,el,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var el=null;function dc(n,i,a,c){if(el=null,n=ue(c),n=Yi(n),n!==null)if(i=qe(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ze(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return el=n,null}function zh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ct()){case Dr:return 1;case Ut:return 4;case dn:case Ir:return 16;case mi:return 536870912;default:return 16}default:return 16}}var Si=null,hc=null,tl=null;function Fh(){if(tl)return tl;var n,i=hc,a=i.length,c,p="value"in Si?Si.value:Si.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===p[x-c];c++);return tl=p.slice(n,1<c?1-c:void 0)}function nl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function Oh(){return!1}function Hn(n){function i(a,c,p,x,b){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(x):x[N]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?rl:Oh,this.isPropagationStopped=Oh,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Hn(Es),Wo=W({},Es,{view:0,detail:0}),B_=Hn(Wo),mc,gc,Ho,il=W({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ho&&(Ho&&n.type==="mousemove"?(mc=n.screenX-Ho.screenX,gc=n.screenY-Ho.screenY):gc=mc=0,Ho=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Uh=Hn(il),V_=W({},il,{dataTransfer:0}),G_=Hn(V_),W_=W({},Wo,{relatedTarget:0}),vc=Hn(W_),H_=W({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Hn(H_),j_=W({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),q_=Hn(j_),X_=W({},Es,{data:0}),Bh=Hn(X_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Z_[n])?!!i[n]:!1}function _c(){return Q_}var J_=W({},Wo,{key:function(n){if(n.key){var i=Y_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?K_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ex=Hn(J_),tx=W({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Hn(tx),nx=W({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),rx=Hn(nx),ix=W({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Hn(ix),ox=W({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Hn(ox),lx=[9,13,27,32],xc=u&&"CompositionEvent"in window,$o=null;u&&"documentMode"in document&&($o=document.documentMode);var ux=u&&"TextEvent"in window&&!$o,Gh=u&&(!xc||$o&&8<$o&&11>=$o),Wh=" ",Hh=!1;function $h(n,i){switch(n){case"keyup":return lx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function cx(n,i){switch(n){case"compositionend":return jh(i);case"keypress":return i.which!==32?null:(Hh=!0,Wh);case"textInput":return n=i.data,n===Wh&&Hh?null:n;default:return null}}function fx(n,i){if(Cs)return n==="compositionend"||!xc&&$h(n,i)?(n=Fh(),tl=hc=Si=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gh&&i.locale!=="ko"?null:i.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!dx[n.type]:i==="textarea"}function Xh(n,i,a,c){Qe(c),i=ul(i,"onChange"),0<i.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var jo=null,qo=null;function hx(n){dp(n,0)}function sl(n){var i=Ls(n);if(je(i))return n}function px(n,i){if(n==="change")return i}var Yh=!1;if(u){var yc;if(u){var Sc="oninput"in document;if(!Sc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Sc=typeof Kh.oninput=="function"}yc=Sc}else yc=!1;Yh=yc&&(!document.documentMode||9<document.documentMode)}function Zh(){jo&&(jo.detachEvent("onpropertychange",Qh),qo=jo=null)}function Qh(n){if(n.propertyName==="value"&&sl(qo)){var i=[];Xh(i,qo,n,ue(n)),vr(hx,i)}}function mx(n,i,a){n==="focusin"?(Zh(),jo=i,qo=a,jo.attachEvent("onpropertychange",Qh)):n==="focusout"&&Zh()}function gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(qo)}function vx(n,i){if(n==="click")return sl(i)}function _x(n,i){if(n==="input"||n==="change")return sl(i)}function xx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _r=typeof Object.is=="function"?Object.is:xx;function Xo(n,i){if(_r(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(i,p)||!_r(n[p],i[p]))return!1}return!0}function Jh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,i){var a=Jh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jh(a)}}function tp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?tp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function np(){for(var n=window,i=Oe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Oe(n.document)}return i}function wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yx(n){var i=np(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=ep(a,x);var b=ep(a,c);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sx=u&&"documentMode"in document&&11>=document.documentMode,Ts=null,Mc=null,Yo=null,bc=!1;function rp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Ts==null||Ts!==Oe(c)||(c=Ts,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Xo(Yo,c)||(Yo=c,c=ul(Mc,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ts)))}function ol(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var As={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Ec={},ip={};u&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function al(n){if(Ec[n])return Ec[n];if(!As[n])return n;var i=As[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ip)return Ec[n]=i[a];return n}var sp=al("animationend"),op=al("animationiteration"),ap=al("animationstart"),lp=al("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(n,i){up.set(n,i),l(i,[n])}for(var Cc=0;Cc<cp.length;Cc++){var Tc=cp[Cc],wx=Tc.toLowerCase(),Mx=Tc[0].toUpperCase()+Tc.slice(1);wi(wx,"on"+Mx)}wi(sp,"onAnimationEnd"),wi(op,"onAnimationIteration"),wi(ap,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(lp,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function fp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,We(c,i,void 0,n),n.currentTarget=null}function dp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var b=c.length-1;0<=b;b--){var N=c[b],U=N.instance,te=N.currentTarget;if(N=N.listener,U!==x&&p.isPropagationStopped())break e;fp(p,N,te),x=U}else for(b=0;b<c.length;b++){if(N=c[b],U=N.instance,te=N.currentTarget,N=N.listener,U!==x&&p.isPropagationStopped())break e;fp(p,N,te),x=U}}}if(Z)throw n=oe,Z=!1,oe=null,n}function Dt(n,i){var a=i[Nc];a===void 0&&(a=i[Nc]=new Set);var c=n+"__bubble";a.has(c)||(hp(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),hp(a,n,c,i)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[ll]){n[ll]=!0,s.forEach(function(a){a!=="selectionchange"&&(bx.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ll]||(i[ll]=!0,Ac("selectionchange",!1,i))}}function hp(n,i,a,c){switch(zh(i)){case 1:var p=O_;break;case 4:p=U_;break;default:p=fc}a=p.bind(null,i,a,n),p=void 0,!Cn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var N=c.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(b===4)for(b=c.return;b!==null;){var U=b.tag;if((U===3||U===4)&&(U=b.stateNode.containerInfo,U===p||U.nodeType===8&&U.parentNode===p))return;b=b.return}for(;N!==null;){if(b=Yi(N),b===null)return;if(U=b.tag,U===5||U===6){c=x=b;continue e}N=N.parentNode}}c=c.return}vr(function(){var te=x,ve=ue(a),_e=[];e:{var ge=up.get(n);if(ge!==void 0){var Le=pc,ke=n;switch(n){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":Le=ex;break;case"focusin":ke="focus",Le=vc;break;case"focusout":ke="blur",Le=vc;break;case"beforeblur":case"afterblur":Le=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=rx;break;case sp:case op:case ap:Le=$_;break;case lp:Le=sx;break;case"scroll":Le=B_;break;case"wheel":Le=ax;break;case"copy":case"cut":case"paste":Le=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Vh}var Ne=(i&4)!==0,qt=!Ne&&n==="scroll",Y=Ne?ge!==null?ge+"Capture":null:ge;Ne=[];for(var H=te,Q;H!==null;){Q=H;var ye=Q.stateNode;if(Q.tag===5&&ye!==null&&(Q=ye,Y!==null&&(ye=St(H,Y),ye!=null&&Ne.push(Qo(H,ye,Q)))),qt)break;H=H.return}0<Ne.length&&(ge=new Le(ge,ke,null,a,ve),_e.push({event:ge,listeners:Ne}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&a!==Re&&(ke=a.relatedTarget||a.fromElement)&&(Yi(ke)||ke[qr]))break e;if((Le||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(ke=a.relatedTarget||a.toElement,Le=te,ke=ke?Yi(ke):null,ke!==null&&(qt=qe(ke),ke!==qt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=te),Le!==ke)){if(Ne=Uh,ye="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ne=Vh,ye="onPointerLeave",Y="onPointerEnter",H="pointer"),qt=Le==null?ge:Ls(Le),Q=ke==null?ge:Ls(ke),ge=new Ne(ye,H+"leave",Le,a,ve),ge.target=qt,ge.relatedTarget=Q,ye=null,Yi(ve)===te&&(Ne=new Ne(Y,H+"enter",ke,a,ve),Ne.target=Q,Ne.relatedTarget=qt,ye=Ne),qt=ye,Le&&ke)t:{for(Ne=Le,Y=ke,H=0,Q=Ne;Q;Q=Rs(Q))H++;for(Q=0,ye=Y;ye;ye=Rs(ye))Q++;for(;0<H-Q;)Ne=Rs(Ne),H--;for(;0<Q-H;)Y=Rs(Y),Q--;for(;H--;){if(Ne===Y||Y!==null&&Ne===Y.alternate)break t;Ne=Rs(Ne),Y=Rs(Y)}Ne=null}else Ne=null;Le!==null&&pp(_e,ge,Le,Ne,!1),ke!==null&&qt!==null&&pp(_e,qt,ke,Ne,!0)}}e:{if(ge=te?Ls(te):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var Ue=px;else if(qh(ge))if(Yh)Ue=_x;else{Ue=gx;var He=mx}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ue=vx);if(Ue&&(Ue=Ue(n,te))){Xh(_e,Ue,a,ve);break e}He&&He(n,ge,te),n==="focusout"&&(He=ge._wrapperState)&&He.controlled&&ge.type==="number"&&ot(ge,"number",ge.value)}switch(He=te?Ls(te):window,n){case"focusin":(qh(He)||He.contentEditable==="true")&&(Ts=He,Mc=te,Yo=null);break;case"focusout":Yo=Mc=Ts=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,rp(_e,a,ve);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":rp(_e,a,ve)}var $e;if(xc)e:{switch(n){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else Cs?$h(n,a)&&(Xe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Xe="onCompositionStart");Xe&&(Gh&&a.locale!=="ko"&&(Cs||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&Cs&&($e=Fh()):(Si=ve,hc="value"in Si?Si.value:Si.textContent,Cs=!0)),He=ul(te,Xe),0<He.length&&(Xe=new Bh(Xe,n,null,a,ve),_e.push({event:Xe,listeners:He}),$e?Xe.data=$e:($e=jh(a),$e!==null&&(Xe.data=$e)))),($e=ux?cx(n,a):fx(n,a))&&(te=ul(te,"onBeforeInput"),0<te.length&&(ve=new Bh("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:te}),ve.data=$e))}dp(_e,i)})}function Qo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ul(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=St(n,a),x!=null&&c.unshift(Qo(n,x,p)),x=St(n,i),x!=null&&c.push(Qo(n,x,p))),n=n.return}return c}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,i,a,c,p){for(var x=i._reactName,b=[];a!==null&&a!==c;){var N=a,U=N.alternate,te=N.stateNode;if(U!==null&&U===c)break;N.tag===5&&te!==null&&(N=te,p?(U=St(a,x),U!=null&&b.unshift(Qo(a,U,N))):p||(U=St(a,x),U!=null&&b.push(Qo(a,U,N)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Ex=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(Ex,`
`).replace(Cx,"")}function cl(n,i,a){if(i=mp(i),mp(n)!==i&&a)throw Error(t(425))}function fl(){}var Pc=null,Lc=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(Rx)}:Ic;function Rx(n){setTimeout(function(){throw n})}function kc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),Go(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Go(i)}function Mi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),kr="__reactFiber$"+Ps,Jo="__reactProps$"+Ps,qr="__reactContainer$"+Ps,Nc="__reactEvents$"+Ps,Px="__reactListeners$"+Ps,Lx="__reactHandles$"+Ps;function Yi(n){var i=n[kr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[qr]||a[kr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=vp(n);n!==null;){if(a=n[kr])return a;n=vp(n)}return i}n=a,a=n.parentNode}return null}function ea(n){return n=n[kr]||n[qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[Jo]||null}var zc=[],Ds=-1;function bi(n){return{current:n}}function It(n){0>Ds||(n.current=zc[Ds],zc[Ds]=null,Ds--)}function Rt(n,i){Ds++,zc[Ds]=n.current,n.current=i}var Ei={},_n=bi(Ei),In=bi(!1),Ki=Ei;function Is(n,i){var a=n.type.contextTypes;if(!a)return Ei;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function hl(){It(In),It(_n)}function _p(n,i,a){if(_n.current!==Ei)throw Error(t(168));Rt(_n,i),Rt(In,a)}function xp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,Fe(n)||"Unknown",p));return W({},a,c)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ei,Ki=_n.current,Rt(_n,n),Rt(In,In.current),!0}function yp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=xp(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,It(In),It(_n),Rt(_n,n)):It(In),Rt(In,a)}var Xr=null,ml=!1,Fc=!1;function Sp(n){Xr===null?Xr=[n]:Xr.push(n)}function Dx(n){ml=!0,Sp(n)}function Ci(){if(!Fc&&Xr!==null){Fc=!0;var n=0,i=xt;try{var a=Xr;for(xt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xr=null,ml=!1}catch(p){throw Xr!==null&&(Xr=Xr.slice(n+1)),Lt(Dr,Ci),p}finally{xt=i,Fc=!1}}return null}var ks=[],Ns=0,gl=null,vl=0,rr=[],ir=0,Zi=null,Yr=1,Kr="";function Qi(n,i){ks[Ns++]=vl,ks[Ns++]=gl,gl=n,vl=i}function wp(n,i,a){rr[ir++]=Yr,rr[ir++]=Kr,rr[ir++]=Zi,Zi=n;var c=Yr;n=Kr;var p=32-Tn(c)-1;c&=~(1<<p),a+=1;var x=32-Tn(i)+p;if(30<x){var b=p-p%5;x=(c&(1<<b)-1).toString(32),c>>=b,p-=b,Yr=1<<32-Tn(i)+p|a<<p|c,Kr=x+n}else Yr=1<<x|a<<p|c,Kr=n}function Oc(n){n.return!==null&&(Qi(n,1),wp(n,1,0))}function Uc(n){for(;n===gl;)gl=ks[--Ns],ks[Ns]=null,vl=ks[--Ns],ks[Ns]=null;for(;n===Zi;)Zi=rr[--ir],rr[ir]=null,Kr=rr[--ir],rr[ir]=null,Yr=rr[--ir],rr[ir]=null}var $n=null,jn=null,Nt=!1,xr=null;function Mp(n,i){var a=lr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function bp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,jn=Mi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Zi!==null?{id:Yr,overflow:Kr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=lr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,jn=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Nt){var i=jn;if(i){var a=i;if(!bp(n,i)){if(Bc(n))throw Error(t(418));i=Mi(a.nextSibling);var c=$n;i&&bp(n,i)?Mp(c,a):(n.flags=n.flags&-4097|2,Nt=!1,$n=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Nt=!1,$n=n}}}function Ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function _l(n){if(n!==$n)return!1;if(!Nt)return Ep(n),Nt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=jn)){if(Bc(n))throw Cp(),Error(t(418));for(;i;)Mp(n,i),i=Mi(i.nextSibling)}if(Ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=Mi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=$n?Mi(n.stateNode.nextSibling):null;return!0}function Cp(){for(var n=jn;n;)n=Mi(n.nextSibling)}function zs(){jn=$n=null,Nt=!1}function Gc(n){xr===null?xr=[n]:xr.push(n)}var Ix=T.ReactCurrentBatchConfig;function ta(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(b){var N=p.refs;b===null?delete N[x]:N[x]=b},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function xl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Tp(n){var i=n._init;return i(n._payload)}function Ap(n){function i(Y,H){if(n){var Q=Y.deletions;Q===null?(Y.deletions=[H],Y.flags|=16):Q.push(H)}}function a(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function c(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function p(Y,H){return Y=ki(Y,H),Y.index=0,Y.sibling=null,Y}function x(Y,H,Q){return Y.index=Q,n?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<H?(Y.flags|=2,H):Q):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function b(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,H,Q,ye){return H===null||H.tag!==6?(H=kf(Q,Y.mode,ye),H.return=Y,H):(H=p(H,Q),H.return=Y,H)}function U(Y,H,Q,ye){var Ue=Q.type;return Ue===O?ve(Y,H,Q.props.children,ye,Q.key):H!==null&&(H.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===he&&Tp(Ue)===H.type)?(ye=p(H,Q.props),ye.ref=ta(Y,H,Q),ye.return=Y,ye):(ye=Wl(Q.type,Q.key,Q.props,null,Y.mode,ye),ye.ref=ta(Y,H,Q),ye.return=Y,ye)}function te(Y,H,Q,ye){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Nf(Q,Y.mode,ye),H.return=Y,H):(H=p(H,Q.children||[]),H.return=Y,H)}function ve(Y,H,Q,ye,Ue){return H===null||H.tag!==7?(H=os(Q,Y.mode,ye,Ue),H.return=Y,H):(H=p(H,Q),H.return=Y,H)}function _e(Y,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=kf(""+H,Y.mode,Q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case A:return Q=Wl(H.type,H.key,H.props,null,Y.mode,Q),Q.ref=ta(Y,null,H),Q.return=Y,Q;case I:return H=Nf(H,Y.mode,Q),H.return=Y,H;case he:var ye=H._init;return _e(Y,ye(H._payload),Q)}if(kt(H)||B(H))return H=os(H,Y.mode,Q,null),H.return=Y,H;xl(Y,H)}return null}function ge(Y,H,Q,ye){var Ue=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ue!==null?null:N(Y,H,""+Q,ye);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return Q.key===Ue?U(Y,H,Q,ye):null;case I:return Q.key===Ue?te(Y,H,Q,ye):null;case he:return Ue=Q._init,ge(Y,H,Ue(Q._payload),ye)}if(kt(Q)||B(Q))return Ue!==null?null:ve(Y,H,Q,ye,null);xl(Y,Q)}return null}function Le(Y,H,Q,ye,Ue){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return Y=Y.get(Q)||null,N(H,Y,""+ye,Ue);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case A:return Y=Y.get(ye.key===null?Q:ye.key)||null,U(H,Y,ye,Ue);case I:return Y=Y.get(ye.key===null?Q:ye.key)||null,te(H,Y,ye,Ue);case he:var He=ye._init;return Le(Y,H,Q,He(ye._payload),Ue)}if(kt(ye)||B(ye))return Y=Y.get(Q)||null,ve(H,Y,ye,Ue,null);xl(H,ye)}return null}function ke(Y,H,Q,ye){for(var Ue=null,He=null,$e=H,Xe=H=0,ln=null;$e!==null&&Xe<Q.length;Xe++){$e.index>Xe?(ln=$e,$e=null):ln=$e.sibling;var ft=ge(Y,$e,Q[Xe],ye);if(ft===null){$e===null&&($e=ln);break}n&&$e&&ft.alternate===null&&i(Y,$e),H=x(ft,H,Xe),He===null?Ue=ft:He.sibling=ft,He=ft,$e=ln}if(Xe===Q.length)return a(Y,$e),Nt&&Qi(Y,Xe),Ue;if($e===null){for(;Xe<Q.length;Xe++)$e=_e(Y,Q[Xe],ye),$e!==null&&(H=x($e,H,Xe),He===null?Ue=$e:He.sibling=$e,He=$e);return Nt&&Qi(Y,Xe),Ue}for($e=c(Y,$e);Xe<Q.length;Xe++)ln=Le($e,Y,Xe,Q[Xe],ye),ln!==null&&(n&&ln.alternate!==null&&$e.delete(ln.key===null?Xe:ln.key),H=x(ln,H,Xe),He===null?Ue=ln:He.sibling=ln,He=ln);return n&&$e.forEach(function(Ni){return i(Y,Ni)}),Nt&&Qi(Y,Xe),Ue}function Ne(Y,H,Q,ye){var Ue=B(Q);if(typeof Ue!="function")throw Error(t(150));if(Q=Ue.call(Q),Q==null)throw Error(t(151));for(var He=Ue=null,$e=H,Xe=H=0,ln=null,ft=Q.next();$e!==null&&!ft.done;Xe++,ft=Q.next()){$e.index>Xe?(ln=$e,$e=null):ln=$e.sibling;var Ni=ge(Y,$e,ft.value,ye);if(Ni===null){$e===null&&($e=ln);break}n&&$e&&Ni.alternate===null&&i(Y,$e),H=x(Ni,H,Xe),He===null?Ue=Ni:He.sibling=Ni,He=Ni,$e=ln}if(ft.done)return a(Y,$e),Nt&&Qi(Y,Xe),Ue;if($e===null){for(;!ft.done;Xe++,ft=Q.next())ft=_e(Y,ft.value,ye),ft!==null&&(H=x(ft,H,Xe),He===null?Ue=ft:He.sibling=ft,He=ft);return Nt&&Qi(Y,Xe),Ue}for($e=c(Y,$e);!ft.done;Xe++,ft=Q.next())ft=Le($e,Y,Xe,ft.value,ye),ft!==null&&(n&&ft.alternate!==null&&$e.delete(ft.key===null?Xe:ft.key),H=x(ft,H,Xe),He===null?Ue=ft:He.sibling=ft,He=ft);return n&&$e.forEach(function(dy){return i(Y,dy)}),Nt&&Qi(Y,Xe),Ue}function qt(Y,H,Q,ye){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:e:{for(var Ue=Q.key,He=H;He!==null;){if(He.key===Ue){if(Ue=Q.type,Ue===O){if(He.tag===7){a(Y,He.sibling),H=p(He,Q.props.children),H.return=Y,Y=H;break e}}else if(He.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===he&&Tp(Ue)===He.type){a(Y,He.sibling),H=p(He,Q.props),H.ref=ta(Y,He,Q),H.return=Y,Y=H;break e}a(Y,He);break}else i(Y,He);He=He.sibling}Q.type===O?(H=os(Q.props.children,Y.mode,ye,Q.key),H.return=Y,Y=H):(ye=Wl(Q.type,Q.key,Q.props,null,Y.mode,ye),ye.ref=ta(Y,H,Q),ye.return=Y,Y=ye)}return b(Y);case I:e:{for(He=Q.key;H!==null;){if(H.key===He)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(Y,H.sibling),H=p(H,Q.children||[]),H.return=Y,Y=H;break e}else{a(Y,H);break}else i(Y,H);H=H.sibling}H=Nf(Q,Y.mode,ye),H.return=Y,Y=H}return b(Y);case he:return He=Q._init,qt(Y,H,He(Q._payload),ye)}if(kt(Q))return ke(Y,H,Q,ye);if(B(Q))return Ne(Y,H,Q,ye);xl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(a(Y,H.sibling),H=p(H,Q),H.return=Y,Y=H):(a(Y,H),H=kf(Q,Y.mode,ye),H.return=Y,Y=H),b(Y)):a(Y,H)}return qt}var Fs=Ap(!0),Rp=Ap(!1),yl=bi(null),Sl=null,Os=null,Wc=null;function Hc(){Wc=Os=Sl=null}function $c(n){var i=yl.current;It(yl),n._currentValue=i}function jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){Sl=n,Wc=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function sr(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Os===null){if(Sl===null)throw Error(t(308));Os=n,Sl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return i}var Ji=null;function qc(n){Ji===null?Ji=[n]:Ji.push(n)}function Pp(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,qc(i)):(a.next=p.next,p.next=a),i.interleaved=a,Zr(n,c)}function Zr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ti=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ai(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(lt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,Zr(n,a)}return p=c.interleaved,p===null?(i.next=i,qc(c)):(i.next=p.next,p.next=i),c.interleaved=i,Zr(n,a)}function wl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,lc(n,a)}}function Dp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=b:x=x.next=b,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ml(n,i,a,c){var p=n.updateQueue;Ti=!1;var x=p.firstBaseUpdate,b=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var U=N,te=U.next;U.next=null,b===null?x=te:b.next=te,b=U;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==b&&(N===null?ve.firstBaseUpdate=te:N.next=te,ve.lastBaseUpdate=U))}if(x!==null){var _e=p.baseState;b=0,ve=te=U=null,N=x;do{var ge=N.lane,Le=N.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Le,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ke=n,Ne=N;switch(ge=i,Le=a,Ne.tag){case 1:if(ke=Ne.payload,typeof ke=="function"){_e=ke.call(Le,_e,ge);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Ne.payload,ge=typeof ke=="function"?ke.call(Le,_e,ge):ke,ge==null)break e;_e=W({},_e,ge);break e;case 2:Ti=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=p.effects,ge===null?p.effects=[N]:ge.push(N))}else Le={eventTime:Le,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(te=ve=Le,U=_e):ve=ve.next=Le,b|=ge;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(ve===null&&(U=_e),p.baseState=U,p.firstBaseUpdate=te,p.lastBaseUpdate=ve,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);ns|=b,n.lanes=b,n.memoizedState=_e}}function Ip(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var na={},Nr=bi(na),ra=bi(na),ia=bi(na);function es(n){if(n===na)throw Error(t(174));return n}function Yc(n,i){switch(Rt(ia,i),Rt(ra,n),Rt(Nr,na),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:be(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=be(i,n)}It(Nr),Rt(Nr,i)}function Bs(){It(Nr),It(ra),It(ia)}function kp(n){es(ia.current);var i=es(Nr.current),a=be(i,n.type);i!==a&&(Rt(ra,n),Rt(Nr,a))}function Kc(n){ra.current===n&&(It(Nr),It(ra))}var Bt=bi(0);function bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Qc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var El=T.ReactCurrentDispatcher,Jc=T.ReactCurrentBatchConfig,ts=0,Vt=null,en=null,on=null,Cl=!1,sa=!1,oa=0,kx=0;function xn(){throw Error(t(321))}function ef(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_r(n[a],i[a]))return!1;return!0}function tf(n,i,a,c,p,x){if(ts=x,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,El.current=n===null||n.memoizedState===null?Ox:Ux,n=a(c,p),sa){x=0;do{if(sa=!1,oa=0,25<=x)throw Error(t(301));x+=1,on=en=null,i.updateQueue=null,El.current=Bx,n=a(c,p)}while(sa)}if(El.current=Rl,i=en!==null&&en.next!==null,ts=0,on=en=Vt=null,Cl=!1,i)throw Error(t(300));return n}function nf(){var n=oa!==0;return oa=0,n}function zr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Vt.memoizedState=on=n:on=on.next=n,on}function or(){if(en===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=on===null?Vt.memoizedState:on.next;if(i!==null)on=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Vt.memoizedState=on=n:on=on.next=n}return on}function aa(n,i){return typeof i=="function"?i(n):i}function rf(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=en,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var b=p.next;p.next=x.next,x.next=b}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var N=b=null,U=null,te=x;do{var ve=te.lane;if((ts&ve)===ve)U!==null&&(U=U.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:n(c,te.action);else{var _e={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};U===null?(N=U=_e,b=c):U=U.next=_e,Vt.lanes|=ve,ns|=ve}te=te.next}while(te!==null&&te!==x);U===null?b=c:U.next=N,_r(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=U,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,Vt.lanes|=x,ns|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function sf(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do x=n(x,b.action),b=b.next;while(b!==p);_r(x,i.memoizedState)||(Nn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Np(){}function zp(n,i){var a=Vt,c=or(),p=i(),x=!_r(c.memoizedState,p);if(x&&(c.memoizedState=p,Nn=!0),c=c.queue,of(Up.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,la(9,Op.bind(null,a,c,p,i),void 0,null),an===null)throw Error(t(349));(ts&30)!==0||Fp(a,i,p)}return p}function Fp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Op(n,i,a,c){i.value=a,i.getSnapshot=c,Bp(i)&&Vp(n)}function Up(n,i,a){return a(function(){Bp(i)&&Vp(n)})}function Bp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_r(n,a)}catch{return!0}}function Vp(n){var i=Zr(n,1);i!==null&&Mr(i,n,1,-1)}function Gp(n){var i=zr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},i.queue=n,n=n.dispatch=Fx.bind(null,Vt,n),[i.memoizedState,n]}function la(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wp(){return or().memoizedState}function Tl(n,i,a,c){var p=zr();Vt.flags|=n,p.memoizedState=la(1|i,a,void 0,c===void 0?null:c)}function Al(n,i,a,c){var p=or();c=c===void 0?null:c;var x=void 0;if(en!==null){var b=en.memoizedState;if(x=b.destroy,c!==null&&ef(c,b.deps)){p.memoizedState=la(i,a,x,c);return}}Vt.flags|=n,p.memoizedState=la(1|i,a,x,c)}function Hp(n,i){return Tl(8390656,8,n,i)}function of(n,i){return Al(2048,8,n,i)}function $p(n,i){return Al(4,2,n,i)}function jp(n,i){return Al(4,4,n,i)}function qp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xp(n,i,a){return a=a!=null?a.concat([n]):null,Al(4,4,qp.bind(null,i,n),a)}function af(){}function Yp(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ef(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Kp(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ef(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Zp(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(_r(a,i)||(a=Th(),Vt.lanes|=a,ns|=a,n.baseState=!0),i)}function Nx(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),i()}finally{xt=a,Jc.transition=c}}function Qp(){return or().memoizedState}function zx(n,i,a){var c=Di(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jp(n))em(i,a);else if(a=Pp(n,i,a,c),a!==null){var p=Pn();Mr(a,n,c,p),tm(a,i,c)}}function Fx(n,i,a){var c=Di(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jp(n))em(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var b=i.lastRenderedState,N=x(b,a);if(p.hasEagerState=!0,p.eagerState=N,_r(N,b)){var U=i.interleaved;U===null?(p.next=p,qc(i)):(p.next=U.next,U.next=p),i.interleaved=p;return}}catch{}finally{}a=Pp(n,i,p,c),a!==null&&(p=Pn(),Mr(a,n,c,p),tm(a,i,c))}}function Jp(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function em(n,i){sa=Cl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function tm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,lc(n,a)}}var Rl={readContext:sr,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Ox={readContext:sr,useCallback:function(n,i){return zr().memoizedState=[n,i===void 0?null:i],n},useContext:sr,useEffect:Hp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Tl(4194308,4,qp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Tl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Tl(4,2,n,i)},useMemo:function(n,i){var a=zr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=zr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=zx.bind(null,Vt,n),[c.memoizedState,n]},useRef:function(n){var i=zr();return n={current:n},i.memoizedState=n},useState:Gp,useDebugValue:af,useDeferredValue:function(n){return zr().memoizedState=n},useTransition:function(){var n=Gp(!1),i=n[0];return n=Nx.bind(null,n[1]),zr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Vt,p=zr();if(Nt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(ts&30)!==0||Fp(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,Hp(Up.bind(null,c,x,n),[n]),c.flags|=2048,la(9,Op.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=zr(),i=an.identifierPrefix;if(Nt){var a=Kr,c=Yr;a=(c&~(1<<32-Tn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=oa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ux={readContext:sr,useCallback:Yp,useContext:sr,useEffect:of,useImperativeHandle:Xp,useInsertionEffect:$p,useLayoutEffect:jp,useMemo:Kp,useReducer:rf,useRef:Wp,useState:function(){return rf(aa)},useDebugValue:af,useDeferredValue:function(n){var i=or();return Zp(i,en.memoizedState,n)},useTransition:function(){var n=rf(aa)[0],i=or().memoizedState;return[n,i]},useMutableSource:Np,useSyncExternalStore:zp,useId:Qp,unstable_isNewReconciler:!1},Bx={readContext:sr,useCallback:Yp,useContext:sr,useEffect:of,useImperativeHandle:Xp,useInsertionEffect:$p,useLayoutEffect:jp,useMemo:Kp,useReducer:sf,useRef:Wp,useState:function(){return sf(aa)},useDebugValue:af,useDeferredValue:function(n){var i=or();return en===null?i.memoizedState=n:Zp(i,en.memoizedState,n)},useTransition:function(){var n=sf(aa)[0],i=or().memoizedState;return[n,i]},useMutableSource:Np,useSyncExternalStore:zp,useId:Qp,unstable_isNewReconciler:!1};function yr(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lf(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:W({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Pl={isMounted:function(n){return(n=n._reactInternals)?qe(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Pn(),p=Di(n),x=Qr(c,p);x.payload=i,a!=null&&(x.callback=a),i=Ai(n,x,p),i!==null&&(Mr(i,n,p,c),wl(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Pn(),p=Di(n),x=Qr(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Ai(n,x,p),i!==null&&(Mr(i,n,p,c),wl(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Pn(),c=Di(n),p=Qr(a,c);p.tag=2,i!=null&&(p.callback=i),i=Ai(n,p,c),i!==null&&(Mr(i,n,c,a),wl(i,n,c))}};function nm(n,i,a,c,p,x,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,b):i.prototype&&i.prototype.isPureReactComponent?!Xo(a,c)||!Xo(p,x):!0}function rm(n,i,a){var c=!1,p=Ei,x=i.contextType;return typeof x=="object"&&x!==null?x=sr(x):(p=kn(i)?Ki:_n.current,c=i.contextTypes,x=(c=c!=null)?Is(n,p):Ei),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function im(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Pl.enqueueReplaceState(i,i.state,null)}function uf(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Xc(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=sr(x):(x=kn(i)?Ki:_n.current,p.context=Is(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(lf(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Pl.enqueueReplaceState(p,p.state,null),Ml(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,i){try{var a="",c=i;do a+=Me(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function cf(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ff(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Vx=typeof WeakMap=="function"?WeakMap:Map;function sm(n,i,a){a=Qr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Fl||(Fl=!0,Cf=c),ff(n,i)},a}function om(n,i,a){a=Qr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){ff(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){ff(n,i),typeof c!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function am(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Vx;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=ty.bind(null,n,i,a),i.then(n,n))}function lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function um(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Qr(-1,1),i.tag=2,Ai(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Gx=T.ReactCurrentOwner,Nn=!1;function Rn(n,i,a,c){i.child=n===null?Rp(i,null,a,c):Fs(i,n.child,a,c)}function cm(n,i,a,c,p){a=a.render;var x=i.ref;return Us(i,p),c=tf(n,i,a,c,x,p),a=nf(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Jr(n,i,p)):(Nt&&a&&Oc(i),i.flags|=1,Rn(n,i,c,p),i.child)}function fm(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!If(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,dm(n,i,x,c,p)):(n=Wl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var b=x.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(b,c)&&n.ref===i.ref)return Jr(n,i,p)}return i.flags|=1,n=ki(x,c),n.ref=i.ref,n.return=i,i.child=n}function dm(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(Xo(x,c)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Jr(n,i,p)}return df(n,i,a,c,p)}function hm(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ws,qn),qn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Rt(Ws,qn),qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Rt(Ws,qn),qn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Rt(Ws,qn),qn|=c;return Rn(n,i,p,a),i.child}function pm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function df(n,i,a,c,p){var x=kn(a)?Ki:_n.current;return x=Is(i,x),Us(i,p),a=tf(n,i,a,c,x,p),c=nf(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Jr(n,i,p)):(Nt&&c&&Oc(i),i.flags|=1,Rn(n,i,a,p),i.child)}function mm(n,i,a,c,p){if(kn(a)){var x=!0;pl(i)}else x=!1;if(Us(i,p),i.stateNode===null)Dl(n,i),rm(i,a,c),uf(i,a,c,p),c=!0;else if(n===null){var b=i.stateNode,N=i.memoizedProps;b.props=N;var U=b.context,te=a.contextType;typeof te=="object"&&te!==null?te=sr(te):(te=kn(a)?Ki:_n.current,te=Is(i,te));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof b.getSnapshotBeforeUpdate=="function";_e||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(N!==c||U!==te)&&im(i,b,c,te),Ti=!1;var ge=i.memoizedState;b.state=ge,Ml(i,c,b,p),U=i.memoizedState,N!==c||ge!==U||In.current||Ti?(typeof ve=="function"&&(lf(i,a,ve,c),U=i.memoizedState),(N=Ti||nm(i,a,N,c,ge,U,te))?(_e||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=U),b.props=c,b.state=U,b.context=te,c=N):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Lp(n,i),N=i.memoizedProps,te=i.type===i.elementType?N:yr(i.type,N),b.props=te,_e=i.pendingProps,ge=b.context,U=a.contextType,typeof U=="object"&&U!==null?U=sr(U):(U=kn(a)?Ki:_n.current,U=Is(i,U));var Le=a.getDerivedStateFromProps;(ve=typeof Le=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(N!==_e||ge!==U)&&im(i,b,c,U),Ti=!1,ge=i.memoizedState,b.state=ge,Ml(i,c,b,p);var ke=i.memoizedState;N!==_e||ge!==ke||In.current||Ti?(typeof Le=="function"&&(lf(i,a,Le,c),ke=i.memoizedState),(te=Ti||nm(i,a,te,c,ge,ke,U)||!1)?(ve||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,ke,U),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,ke,U)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ke),b.props=c,b.state=ke,b.context=U,c=te):(typeof b.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return hf(n,i,a,c,x,p)}function hf(n,i,a,c,p,x){pm(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return p&&yp(i,a,!1),Jr(n,i,x);c=i.stateNode,Gx.current=i;var N=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Fs(i,n.child,null,x),i.child=Fs(i,null,N,x)):Rn(n,i,N,x),i.memoizedState=c.state,p&&yp(i,a,!0),i.child}function gm(n){var i=n.stateNode;i.pendingContext?_p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_p(n,i.context,!1),Yc(n,i.containerInfo)}function vm(n,i,a,c,p){return zs(),Gc(p),i.flags|=256,Rn(n,i,a,c),i.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,i,a){var c=i.pendingProps,p=Bt.current,x=!1,b=(i.flags&128)!==0,N;if((N=b)||(N=n!==null&&n.memoizedState===null?!1:(p&2)!==0),N?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Rt(Bt,p&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,x?(c=i.mode,x=i.child,b={mode:"hidden",children:b},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=Hl(b,c,0,null),n=os(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=mf(a),i.memoizedState=pf,n):gf(i,b));if(p=n.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return Wx(n,i,b,c,N,p,a);if(x){x=c.fallback,b=i.mode,p=n.child,N=p.sibling;var U={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=U,i.deletions=null):(c=ki(p,U),c.subtreeFlags=p.subtreeFlags&14680064),N!==null?x=ki(N,x):(x=os(x,b,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,b=n.child.memoizedState,b=b===null?mf(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=n.childLanes&~a,i.memoizedState=pf,c}return x=n.child,n=x.sibling,c=ki(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function gf(n,i){return i=Hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ll(n,i,a,c){return c!==null&&Gc(c),Fs(i,n.child,null,a),n=gf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Wx(n,i,a,c,p,x,b){if(a)return i.flags&256?(i.flags&=-257,c=cf(Error(t(422))),Ll(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=Hl({mode:"visible",children:c.children},p,0,null),x=os(x,p,b,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Fs(i,n.child,null,b),i.child.memoizedState=mf(b),i.memoizedState=pf,x);if((i.mode&1)===0)return Ll(n,i,b,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var N=c.dgst;return c=N,x=Error(t(419)),c=cf(x,c,void 0),Ll(n,i,b,c)}if(N=(b&n.childLanes)!==0,Nn||N){if(c=an,c!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|b))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Zr(n,p),Mr(c,n,p,-1))}return Df(),c=cf(Error(t(421))),Ll(n,i,b,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=ny.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,jn=Mi(p.nextSibling),$n=i,Nt=!0,xr=null,n!==null&&(rr[ir++]=Yr,rr[ir++]=Kr,rr[ir++]=Zi,Yr=n.id,Kr=n.overflow,Zi=i),i=gf(i,c.children),i.flags|=4096,i)}function xm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,a)}function vf(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function ym(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(Rn(n,i,c.children,a),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,a,i);else if(n.tag===19)xm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Rt(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&bl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),vf(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&bl(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}vf(i,!0,a,null,x);break;case"together":vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Jr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ki(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ki(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Hx(n,i,a){switch(i.tag){case 3:gm(i),zs();break;case 5:kp(i);break;case 1:kn(i.type)&&pl(i);break;case 4:Yc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;Rt(yl,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Rt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?_m(n,i,a):(Rt(Bt,Bt.current&1),n=Jr(n,i,a),n!==null?n.sibling:null);Rt(Bt,Bt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return ym(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Rt(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,hm(n,i,a)}return Jr(n,i,a)}var Sm,_f,wm,Mm;Sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_f=function(){},wm=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,es(Nr.current);var x=null;switch(a){case"input":p=ht(n,p),c=ht(n,c),x=[];break;case"select":p=W({},p,{value:void 0}),c=W({},c,{value:void 0}),x=[];break;case"textarea":p=z(n,p),c=z(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=fl)}yt(a,c);var b;a=null;for(te in p)if(!c.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var N=p[te];for(b in N)N.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in c){var U=c[te];if(N=p!=null?p[te]:void 0,c.hasOwnProperty(te)&&U!==N&&(U!=null||N!=null))if(te==="style")if(N){for(b in N)!N.hasOwnProperty(b)||U&&U.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in U)U.hasOwnProperty(b)&&N[b]!==U[b]&&(a||(a={}),a[b]=U[b])}else a||(x||(x=[]),x.push(te,a)),a=U;else te==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,N=N?N.__html:void 0,U!=null&&N!==U&&(x=x||[]).push(te,U)):te==="children"?typeof U!="string"&&typeof U!="number"||(x=x||[]).push(te,""+U):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(U!=null&&te==="onScroll"&&Dt("scroll",n),x||N===U||(x=[])):(x=x||[]).push(te,U))}a&&(x=x||[]).push("style",a);var te=x;(i.updateQueue=te)&&(i.flags|=4)}},Mm=function(n,i,a,c){a!==c&&(i.flags|=4)};function ua(n,i){if(!Nt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $x(n,i,a){var c=i.pendingProps;switch(Uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return kn(i.type)&&hl(),yn(i),null;case 3:return c=i.stateNode,Bs(),It(In),It(_n),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(_l(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xr!==null&&(Rf(xr),xr=null))),_f(n,i),yn(i),null;case 5:Kc(i);var p=es(ia.current);if(a=i.type,n!==null&&i.stateNode!=null)wm(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=es(Nr.current),_l(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[kr]=i,c[Jo]=x,n=(i.mode&1)!==0,a){case"dialog":Dt("cancel",c),Dt("close",c);break;case"iframe":case"object":case"embed":Dt("load",c);break;case"video":case"audio":for(p=0;p<Ko.length;p++)Dt(Ko[p],c);break;case"source":Dt("error",c);break;case"img":case"image":case"link":Dt("error",c),Dt("load",c);break;case"details":Dt("toggle",c);break;case"input":Ft(c,x),Dt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Dt("invalid",c);break;case"textarea":P(c,x),Dt("invalid",c)}yt(a,x),p=null;for(var b in x)if(x.hasOwnProperty(b)){var N=x[b];b==="children"?typeof N=="string"?c.textContent!==N&&(x.suppressHydrationWarning!==!0&&cl(c.textContent,N,n),p=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(x.suppressHydrationWarning!==!0&&cl(c.textContent,N,n),p=["children",""+N]):o.hasOwnProperty(b)&&N!=null&&b==="onScroll"&&Dt("scroll",c)}switch(a){case"input":tt(c),Ot(c,x,!0);break;case"textarea":tt(c),xe(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=fl)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=we(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[kr]=i,n[Jo]=c,Sm(n,i,!1,!1),i.stateNode=n;e:{switch(b=q(a,c),a){case"dialog":Dt("cancel",n),Dt("close",n),p=c;break;case"iframe":case"object":case"embed":Dt("load",n),p=c;break;case"video":case"audio":for(p=0;p<Ko.length;p++)Dt(Ko[p],n);p=c;break;case"source":Dt("error",n),p=c;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),p=c;break;case"details":Dt("toggle",n),p=c;break;case"input":Ft(n,c),p=ht(n,c),Dt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=W({},c,{value:void 0}),Dt("invalid",n);break;case"textarea":P(n,c),p=z(n,c),Dt("invalid",n);break;default:p=c}yt(a,p),N=p;for(x in N)if(N.hasOwnProperty(x)){var U=N[x];x==="style"?Ke(n,U):x==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&se(n,U)):x==="children"?typeof U=="string"?(a!=="textarea"||U!=="")&&ze(n,U):typeof U=="number"&&ze(n,""+U):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?U!=null&&x==="onScroll"&&Dt("scroll",n):U!=null&&L(n,x,U,b))}switch(a){case"input":tt(n),Ot(n,c,!1);break;case"textarea":tt(n),xe(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Gt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Gt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=fl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)Mm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(ia.current),es(Nr.current),_l(i)){if(c=i.stateNode,a=i.memoizedProps,c[kr]=i,(x=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:cl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[kr]=i,i.stateNode=c}return yn(i),null;case 13:if(It(Bt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Nt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Cp(),zs(),i.flags|=98560,x=!1;else if(x=_l(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[kr]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),x=!1}else xr!==null&&(Rf(xr),xr=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?tn===0&&(tn=3):Df())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Bs(),_f(n,i),n===null&&Zo(i.stateNode.containerInfo),yn(i),null;case 10:return $c(i.type._context),yn(i),null;case 17:return kn(i.type)&&hl(),yn(i),null;case 19:if(It(Bt),x=i.memoizedState,x===null)return yn(i),null;if(c=(i.flags&128)!==0,b=x.rendering,b===null)if(c)ua(x,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=bl(n),b!==null){for(i.flags|=128,ua(x,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,n=b.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Rt(Bt,Bt.current&1|2),i.child}n=n.sibling}x.tail!==null&&ut()>Hs&&(i.flags|=128,c=!0,ua(x,!1),i.lanes=4194304)}else{if(!c)if(n=bl(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ua(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!Nt)return yn(i),null}else 2*ut()-x.renderingStartTime>Hs&&a!==1073741824&&(i.flags|=128,c=!0,ua(x,!1),i.lanes=4194304);x.isBackwards?(b.sibling=i.child,i.child=b):(a=x.last,a!==null?a.sibling=b:i.child=b,x.last=b)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=ut(),i.sibling=null,a=Bt.current,Rt(Bt,c?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return Lf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jx(n,i){switch(Uc(i),i.tag){case 1:return kn(i.type)&&hl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Bs(),It(In),It(_n),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(It(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(Bt),null;case 4:return Bs(),null;case 10:return $c(i.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Il=!1,Sn=!1,qx=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Gs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Wt(n,i,c)}else a.current=null}function xf(n,i,a){try{a()}catch(c){Wt(n,i,c)}}var bm=!1;function Xx(n,i){if(Pc=Ja,n=np(),wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var b=0,N=-1,U=-1,te=0,ve=0,_e=n,ge=null;t:for(;;){for(var Le;_e!==a||p!==0&&_e.nodeType!==3||(N=b+p),_e!==x||c!==0&&_e.nodeType!==3||(U=b+c),_e.nodeType===3&&(b+=_e.nodeValue.length),(Le=_e.firstChild)!==null;)ge=_e,_e=Le;for(;;){if(_e===n)break t;if(ge===a&&++te===p&&(N=b),ge===x&&++ve===c&&(U=b),(Le=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Le}a=N===-1||U===-1?null:{start:N,end:U}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},Ja=!1,Ie=i;Ie!==null;)if(i=Ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ie=n;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Ne=ke.memoizedProps,qt=ke.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ne:yr(i.type,Ne),qt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ye){Wt(i,i.return,ye)}if(n=i.sibling,n!==null){n.return=i.return,Ie=n;break}Ie=i.return}return ke=bm,bm=!1,ke}function ca(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&xf(i,a,x)}p=p.next}while(p!==c)}}function kl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Em(n){var i=n.alternate;i!==null&&(n.alternate=null,Em(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[kr],delete i[Jo],delete i[Nc],delete i[Px],delete i[Lx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cm(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=fl));else if(c!==4&&(n=n.child,n!==null))for(Sf(n,i,a),n=n.sibling;n!==null;)Sf(n,i,a),n=n.sibling}function wf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wf(n,i,a),n=n.sibling;n!==null;)wf(n,i,a),n=n.sibling}var hn=null,Sr=!1;function Ri(n,i,a){for(a=a.child;a!==null;)Am(n,i,a),a=a.sibling}function Am(n,i,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(gi,a)}catch{}switch(a.tag){case 5:Sn||Gs(a,i);case 6:var c=hn,p=Sr;hn=null,Ri(n,i,a),hn=c,Sr=p,hn!==null&&(Sr?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(Sr?(n=hn,a=a.stateNode,n.nodeType===8?kc(n.parentNode,a):n.nodeType===1&&kc(n,a),Go(n)):kc(hn,a.stateNode));break;case 4:c=hn,p=Sr,hn=a.stateNode.containerInfo,Sr=!0,Ri(n,i,a),hn=c,Sr=p;break;case 0:case 11:case 14:case 15:if(!Sn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&xf(a,i,b),p=p.next}while(p!==c)}Ri(n,i,a);break;case 1:if(!Sn&&(Gs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(N){Wt(a,i,N)}Ri(n,i,a);break;case 21:Ri(n,i,a);break;case 22:a.mode&1?(Sn=(c=Sn)||a.memoizedState!==null,Ri(n,i,a),Sn=c):Ri(n,i,a);break;default:Ri(n,i,a)}}function Rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new qx),i.forEach(function(c){var p=ry.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function wr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,b=i,N=b;e:for(;N!==null;){switch(N.tag){case 5:hn=N.stateNode,Sr=!1;break e;case 3:hn=N.stateNode.containerInfo,Sr=!0;break e;case 4:hn=N.stateNode.containerInfo,Sr=!0;break e}N=N.return}if(hn===null)throw Error(t(160));Am(x,b,p),hn=null,Sr=!1;var U=p.alternate;U!==null&&(U.return=null),p.return=null}catch(te){Wt(p,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pm(i,n),i=i.sibling}function Pm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wr(i,n),Fr(n),c&4){try{ca(3,n,n.return),kl(3,n)}catch(Ne){Wt(n,n.return,Ne)}try{ca(5,n,n.return)}catch(Ne){Wt(n,n.return,Ne)}}break;case 1:wr(i,n),Fr(n),c&512&&a!==null&&Gs(a,a.return);break;case 5:if(wr(i,n),Fr(n),c&512&&a!==null&&Gs(a,a.return),n.flags&32){var p=n.stateNode;try{ze(p,"")}catch(Ne){Wt(n,n.return,Ne)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,b=a!==null?a.memoizedProps:x,N=n.type,U=n.updateQueue;if(n.updateQueue=null,U!==null)try{N==="input"&&x.type==="radio"&&x.name!=null&&Pt(p,x),q(N,b);var te=q(N,x);for(b=0;b<U.length;b+=2){var ve=U[b],_e=U[b+1];ve==="style"?Ke(p,_e):ve==="dangerouslySetInnerHTML"?se(p,_e):ve==="children"?ze(p,_e):L(p,ve,_e,te)}switch(N){case"input":fn(p,x);break;case"textarea":fe(p,x);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Le=x.value;Le!=null?Gt(p,!!x.multiple,Le,!1):ge!==!!x.multiple&&(x.defaultValue!=null?Gt(p,!!x.multiple,x.defaultValue,!0):Gt(p,!!x.multiple,x.multiple?[]:"",!1))}p[Jo]=x}catch(Ne){Wt(n,n.return,Ne)}}break;case 6:if(wr(i,n),Fr(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(Ne){Wt(n,n.return,Ne)}}break;case 3:if(wr(i,n),Fr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(Ne){Wt(n,n.return,Ne)}break;case 4:wr(i,n),Fr(n);break;case 13:wr(i,n),Fr(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Ef=ut())),c&4&&Rm(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(Sn=(te=Sn)||ve,wr(i,n),Sn=te):wr(i,n),Fr(n),c&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ve&&(n.mode&1)!==0)for(Ie=n,ve=n.child;ve!==null;){for(_e=Ie=ve;Ie!==null;){switch(ge=Ie,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:ca(4,ge,ge.return);break;case 1:Gs(ge,ge.return);var ke=ge.stateNode;if(typeof ke.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(Ne){Wt(c,a,Ne)}}break;case 5:Gs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Im(_e);continue}}Le!==null?(Le.return=ge,Ie=Le):Im(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{p=_e.stateNode,te?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(N=_e.stateNode,U=_e.memoizedProps.style,b=U!=null&&U.hasOwnProperty("display")?U.display:null,N.style.display=De("display",b))}catch(Ne){Wt(n,n.return,Ne)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=te?"":_e.memoizedProps}catch(Ne){Wt(n,n.return,Ne)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:wr(i,n),Fr(n),c&4&&Rm(n);break;case 21:break;default:wr(i,n),Fr(n)}}function Fr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ze(p,""),c.flags&=-33);var x=Tm(n);wf(n,x,p);break;case 3:case 4:var b=c.stateNode.containerInfo,N=Tm(n);Sf(n,N,b);break;default:throw Error(t(161))}}catch(U){Wt(n,n.return,U)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Yx(n,i,a){Ie=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;Ie!==null;){var p=Ie,x=p.child;if(p.tag===22&&c){var b=p.memoizedState!==null||Il;if(!b){var N=p.alternate,U=N!==null&&N.memoizedState!==null||Sn;N=Il;var te=Sn;if(Il=b,(Sn=U)&&!te)for(Ie=p;Ie!==null;)b=Ie,U=b.child,b.tag===22&&b.memoizedState!==null?km(p):U!==null?(U.return=b,Ie=U):km(p);for(;x!==null;)Ie=x,Lm(x),x=x.sibling;Ie=p,Il=N,Sn=te}Dm(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Ie=x):Dm(n)}}function Dm(n){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||kl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Sn)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:yr(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Ip(i,x,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ip(i,b,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var U=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&a.focus();break;case"img":U.src&&(a.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&Go(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||i.flags&512&&yf(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ie=a;break}Ie=i.return}}function Im(n){for(;Ie!==null;){var i=Ie;if(i===n){Ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ie=a;break}Ie=i.return}}function km(n){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{kl(4,i)}catch(U){Wt(i,a,U)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(U){Wt(i,p,U)}}var x=i.return;try{yf(i)}catch(U){Wt(i,x,U)}break;case 5:var b=i.return;try{yf(i)}catch(U){Wt(i,b,U)}}}catch(U){Wt(i,i.return,U)}if(i===n){Ie=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ie=N;break}Ie=i.return}}var Kx=Math.ceil,Nl=T.ReactCurrentDispatcher,Mf=T.ReactCurrentOwner,ar=T.ReactCurrentBatchConfig,lt=0,an=null,Kt=null,pn=0,qn=0,Ws=bi(0),tn=0,fa=null,ns=0,zl=0,bf=0,da=null,zn=null,Ef=0,Hs=1/0,ei=null,Fl=!1,Cf=null,Pi=null,Ol=!1,Li=null,Ul=0,ha=0,Tf=null,Bl=-1,Vl=0;function Pn(){return(lt&6)!==0?ut():Bl!==-1?Bl:Bl=ut()}function Di(n){return(n.mode&1)===0?1:(lt&2)!==0&&pn!==0?pn&-pn:Ix.transition!==null?(Vl===0&&(Vl=Th()),Vl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:zh(n.type)),n)}function Mr(n,i,a,c){if(50<ha)throw ha=0,Tf=null,Error(t(185));Fo(n,a,c),((lt&2)===0||n!==an)&&(n===an&&((lt&2)===0&&(zl|=a),tn===4&&Ii(n,pn)),Fn(n,c),a===1&&lt===0&&(i.mode&1)===0&&(Hs=ut()+500,ml&&Ci()))}function Fn(n,i){var a=n.callbackNode;I_(n,i);var c=Ka(n,n===an?pn:0);if(c===0)a!==null&&Lr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Lr(a),i===1)n.tag===0?Dx(zm.bind(null,n)):Sp(zm.bind(null,n)),Ax(function(){(lt&6)===0&&Ci()}),a=null;else{switch(Ah(c)){case 1:a=Dr;break;case 4:a=Ut;break;case 16:a=dn;break;case 536870912:a=mi;break;default:a=dn}a=Hm(a,Nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Nm(n,i){if(Bl=-1,Vl=0,(lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Ka(n,n===an?pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Gl(n,c);else{i=c;var p=lt;lt|=2;var x=Om();(an!==n||pn!==i)&&(ei=null,Hs=ut()+500,is(n,i));do try{Jx();break}catch(N){Fm(n,N)}while(!0);Hc(),Nl.current=x,lt=p,Kt!==null?i=0:(an=null,pn=0,i=tn)}if(i!==0){if(i===2&&(p=oc(n),p!==0&&(c=p,i=Af(n,p))),i===1)throw a=fa,is(n,0),Ii(n,c),Fn(n,ut()),a;if(i===6)Ii(n,c);else{if(p=n.current.alternate,(c&30)===0&&!Zx(p)&&(i=Gl(n,c),i===2&&(x=oc(n),x!==0&&(c=x,i=Af(n,x))),i===1))throw a=fa,is(n,0),Ii(n,c),Fn(n,ut()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,zn,ei);break;case 3:if(Ii(n,c),(c&130023424)===c&&(i=Ef+500-ut(),10<i)){if(Ka(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Pn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Ic(ss.bind(null,n,zn,ei),i);break}ss(n,zn,ei);break;case 4:if(Ii(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var b=31-Tn(c);x=1<<b,b=i[b],b>p&&(p=b),c&=~x}if(c=p,c=ut()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kx(c/1960))-c,10<c){n.timeoutHandle=Ic(ss.bind(null,n,zn,ei),c);break}ss(n,zn,ei);break;case 5:ss(n,zn,ei);break;default:throw Error(t(329))}}}return Fn(n,ut()),n.callbackNode===a?Nm.bind(null,n):null}function Af(n,i){var a=da;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=Gl(n,i),n!==2&&(i=zn,zn=a,i!==null&&Rf(i)),n}function Rf(n){zn===null?zn=n:zn.push.apply(zn,n)}function Zx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!_r(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ii(n,i){for(i&=~bf,i&=~zl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tn(i),c=1<<a;n[a]=-1,i&=~c}}function zm(n){if((lt&6)!==0)throw Error(t(327));$s();var i=Ka(n,0);if((i&1)===0)return Fn(n,ut()),null;var a=Gl(n,i);if(n.tag!==0&&a===2){var c=oc(n);c!==0&&(i=c,a=Af(n,c))}if(a===1)throw a=fa,is(n,0),Ii(n,i),Fn(n,ut()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,zn,ei),Fn(n,ut()),null}function Pf(n,i){var a=lt;lt|=1;try{return n(i)}finally{lt=a,lt===0&&(Hs=ut()+500,ml&&Ci())}}function rs(n){Li!==null&&Li.tag===0&&(lt&6)===0&&$s();var i=lt;lt|=1;var a=ar.transition,c=xt;try{if(ar.transition=null,xt=1,n)return n()}finally{xt=c,ar.transition=a,lt=i,(lt&6)===0&&Ci()}}function Lf(){qn=Ws.current,It(Ws)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tx(a)),Kt!==null)for(a=Kt.return;a!==null;){var c=a;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&hl();break;case 3:Bs(),It(In),It(_n),Qc();break;case 5:Kc(c);break;case 4:Bs();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:$c(c.type._context);break;case 22:case 23:Lf()}a=a.return}if(an=n,Kt=n=ki(n.current,null),pn=qn=i,tn=0,fa=null,bf=zl=ns=0,zn=da=null,Ji!==null){for(i=0;i<Ji.length;i++)if(a=Ji[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var b=x.next;x.next=p,c.next=b}a.pending=c}Ji=null}return n}function Fm(n,i){do{var a=Kt;try{if(Hc(),El.current=Rl,Cl){for(var c=Vt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Cl=!1}if(ts=0,on=en=Vt=null,sa=!1,oa=0,Mf.current=null,a===null||a.return===null){tn=1,fa=i,Kt=null;break}e:{var x=n,b=a.return,N=a,U=i;if(i=pn,N.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var te=U,ve=N,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Le=lm(b);if(Le!==null){Le.flags&=-257,um(Le,b,N,x,i),Le.mode&1&&am(x,te,i),i=Le,U=te;var ke=i.updateQueue;if(ke===null){var Ne=new Set;Ne.add(U),i.updateQueue=Ne}else ke.add(U);break e}else{if((i&1)===0){am(x,te,i),Df();break e}U=Error(t(426))}}else if(Nt&&N.mode&1){var qt=lm(b);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),um(qt,b,N,x,i),Gc(Vs(U,N));break e}}x=U=Vs(U,N),tn!==4&&(tn=2),da===null?da=[x]:da.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var Y=sm(x,U,i);Dp(x,Y);break e;case 1:N=U;var H=x.type,Q=x.stateNode;if((x.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Pi===null||!Pi.has(Q)))){x.flags|=65536,i&=-i,x.lanes|=i;var ye=om(x,N,i);Dp(x,ye);break e}}x=x.return}while(x!==null)}Bm(a)}catch(Ue){i=Ue,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Om(){var n=Nl.current;return Nl.current=Rl,n===null?Rl:n}function Df(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(ns&268435455)===0&&(zl&268435455)===0||Ii(an,pn)}function Gl(n,i){var a=lt;lt|=2;var c=Om();(an!==n||pn!==i)&&(ei=null,is(n,i));do try{Qx();break}catch(p){Fm(n,p)}while(!0);if(Hc(),lt=a,Nl.current=c,Kt!==null)throw Error(t(261));return an=null,pn=0,tn}function Qx(){for(;Kt!==null;)Um(Kt)}function Jx(){for(;Kt!==null&&!hi();)Um(Kt)}function Um(n){var i=Wm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,i===null?Bm(n):Kt=i,Mf.current=null}function Bm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$x(a,i,qn),a!==null){Kt=a;return}}else{if(a=jx(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);tn===0&&(tn=5)}function ss(n,i,a){var c=xt,p=ar.transition;try{ar.transition=null,xt=1,ey(n,i,a,c)}finally{ar.transition=p,xt=c}return null}function ey(n,i,a,c){do $s();while(Li!==null);if((lt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(k_(n,x),n===an&&(Kt=an=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ol||(Ol=!0,Hm(dn,function(){return $s(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=ar.transition,ar.transition=null;var b=xt;xt=1;var N=lt;lt|=4,Mf.current=null,Xx(n,a),Pm(a,n),yx(Lc),Ja=!!Pc,Lc=Pc=null,n.current=a,Yx(a),pi(),lt=N,xt=b,ar.transition=x}else n.current=a;if(Ol&&(Ol=!1,Li=n,Ul=p),x=n.pendingLanes,x===0&&(Pi=null),jr(a.stateNode),Fn(n,ut()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Fl)throw Fl=!1,n=Cf,Cf=null,n;return(Ul&1)!==0&&n.tag!==0&&$s(),x=n.pendingLanes,(x&1)!==0?n===Tf?ha++:(ha=0,Tf=n):ha=0,Ci(),null}function $s(){if(Li!==null){var n=Ah(Ul),i=ar.transition,a=xt;try{if(ar.transition=null,xt=16>n?16:n,Li===null)var c=!1;else{if(n=Li,Li=null,Ul=0,(lt&6)!==0)throw Error(t(331));var p=lt;for(lt|=4,Ie=n.current;Ie!==null;){var x=Ie,b=x.child;if((Ie.flags&16)!==0){var N=x.deletions;if(N!==null){for(var U=0;U<N.length;U++){var te=N[U];for(Ie=te;Ie!==null;){var ve=Ie;switch(ve.tag){case 0:case 11:case 15:ca(8,ve,x)}var _e=ve.child;if(_e!==null)_e.return=ve,Ie=_e;else for(;Ie!==null;){ve=Ie;var ge=ve.sibling,Le=ve.return;if(Em(ve),ve===te){Ie=null;break}if(ge!==null){ge.return=Le,Ie=ge;break}Ie=Le}}}var ke=x.alternate;if(ke!==null){var Ne=ke.child;if(Ne!==null){ke.child=null;do{var qt=Ne.sibling;Ne.sibling=null,Ne=qt}while(Ne!==null)}}Ie=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,Ie=b;else e:for(;Ie!==null;){if(x=Ie,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ca(9,x,x.return)}var Y=x.sibling;if(Y!==null){Y.return=x.return,Ie=Y;break e}Ie=x.return}}var H=n.current;for(Ie=H;Ie!==null;){b=Ie;var Q=b.child;if((b.subtreeFlags&2064)!==0&&Q!==null)Q.return=b,Ie=Q;else e:for(b=H;Ie!==null;){if(N=Ie,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:kl(9,N)}}catch(Ue){Wt(N,N.return,Ue)}if(N===b){Ie=null;break e}var ye=N.sibling;if(ye!==null){ye.return=N.return,Ie=ye;break e}Ie=N.return}}if(lt=p,Ci(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(gi,n)}catch{}c=!0}return c}finally{xt=a,ar.transition=i}}return!1}function Vm(n,i,a){i=Vs(a,i),i=sm(n,i,1),n=Ai(n,i,1),i=Pn(),n!==null&&(Fo(n,1,i),Fn(n,i))}function Wt(n,i,a){if(n.tag===3)Vm(n,n,a);else for(;i!==null;){if(i.tag===3){Vm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pi===null||!Pi.has(c))){n=Vs(a,n),n=om(i,n,1),i=Ai(i,n,1),n=Pn(),i!==null&&(Fo(i,1,n),Fn(i,n));break}}i=i.return}}function ty(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(pn&a)===a&&(tn===4||tn===3&&(pn&130023424)===pn&&500>ut()-Ef?is(n,0):bf|=a),Fn(n,i)}function Gm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ya,Ya<<=1,(Ya&130023424)===0&&(Ya=4194304)));var a=Pn();n=Zr(n,i),n!==null&&(Fo(n,i,a),Fn(n,a))}function ny(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gm(n,a)}function ry(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gm(n,a)}var Wm;Wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||In.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,Hx(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,Nt&&(i.flags&1048576)!==0&&wp(i,vl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Dl(n,i),n=i.pendingProps;var p=Is(i,_n.current);Us(i,a),p=tf(null,i,c,n,p,a);var x=nf();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(x=!0,pl(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Xc(i),p.updater=Pl,i.stateNode=p,p._reactInternals=i,uf(i,c,n,a),i=hf(null,i,c,!0,x,a)):(i.tag=0,Nt&&x&&Oc(i),Rn(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Dl(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=sy(c),n=yr(c,n),p){case 0:i=df(null,i,c,n,a);break e;case 1:i=mm(null,i,c,n,a);break e;case 11:i=cm(null,i,c,n,a);break e;case 14:i=fm(null,i,c,yr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:yr(c,p),df(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:yr(c,p),mm(n,i,c,p,a);case 3:e:{if(gm(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,Lp(n,i),Ml(i,c,null,a);var b=i.memoizedState;if(c=b.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=Vs(Error(t(423)),i),i=vm(n,i,c,a,p);break e}else if(c!==p){p=Vs(Error(t(424)),i),i=vm(n,i,c,a,p);break e}else for(jn=Mi(i.stateNode.containerInfo.firstChild),$n=i,Nt=!0,xr=null,a=Rp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===p){i=Jr(n,i,a);break e}Rn(n,i,c,a)}i=i.child}return i;case 5:return kp(i),n===null&&Vc(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,b=p.children,Dc(c,p)?b=null:x!==null&&Dc(c,x)&&(i.flags|=32),pm(n,i),Rn(n,i,b,a),i.child;case 6:return n===null&&Vc(i),null;case 13:return _m(n,i,a);case 4:return Yc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Fs(i,null,c,a):Rn(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:yr(c,p),cm(n,i,c,p,a);case 7:return Rn(n,i,i.pendingProps,a),i.child;case 8:return Rn(n,i,i.pendingProps.children,a),i.child;case 12:return Rn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,b=p.value,Rt(yl,c._currentValue),c._currentValue=b,x!==null)if(_r(x.value,b)){if(x.children===p.children&&!In.current){i=Jr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var N=x.dependencies;if(N!==null){b=x.child;for(var U=N.firstContext;U!==null;){if(U.context===c){if(x.tag===1){U=Qr(-1,a&-a),U.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?U.next=U:(U.next=ve.next,ve.next=U),te.pending=U}}x.lanes|=a,U=x.alternate,U!==null&&(U.lanes|=a),jc(x.return,a,i),N.lanes|=a;break}U=U.next}}else if(x.tag===10)b=x.type===i.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=a,N=b.alternate,N!==null&&(N.lanes|=a),jc(b,a,i),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===i){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}Rn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Us(i,a),p=sr(p),c=c(p),i.flags|=1,Rn(n,i,c,a),i.child;case 14:return c=i.type,p=yr(c,i.pendingProps),p=yr(c.type,p),fm(n,i,c,p,a);case 15:return dm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:yr(c,p),Dl(n,i),i.tag=1,kn(c)?(n=!0,pl(i)):n=!1,Us(i,a),rm(i,c,p),uf(i,c,p,a),hf(null,i,c,!0,n,a);case 19:return ym(n,i,a);case 22:return hm(n,i,a)}throw Error(t(156,i.tag))};function Hm(n,i){return Lt(n,i)}function iy(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(n,i,a,c){return new iy(n,i,a,c)}function If(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sy(n){if(typeof n=="function")return If(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===ie)return 14}return 2}function ki(n,i){var a=n.alternate;return a===null?(a=lr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wl(n,i,a,c,p,x){var b=2;if(c=n,typeof n=="function")If(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return os(a.children,p,x,i);case C:b=8,p|=8;break;case F:return n=lr(12,a,i,p|2),n.elementType=F,n.lanes=x,n;case X:return n=lr(13,a,i,p),n.elementType=X,n.lanes=x,n;case j:return n=lr(19,a,i,p),n.elementType=j,n.lanes=x,n;case le:return Hl(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:b=10;break e;case G:b=9;break e;case ae:b=11;break e;case ie:b=14;break e;case he:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=lr(b,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function os(n,i,a,c){return n=lr(7,n,c,i),n.lanes=a,n}function Hl(n,i,a,c){return n=lr(22,n,c,i),n.elementType=le,n.lanes=a,n.stateNode={isHidden:!1},n}function kf(n,i,a){return n=lr(6,n,null,i),n.lanes=a,n}function Nf(n,i,a){return i=lr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function oy(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zf(n,i,a,c,p,x,b,N,U){return n=new oy(n,i,a,N,U),i===1?(i=1,x===!0&&(i|=8)):i=0,x=lr(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(x),n}function ay(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $m(n){if(!n)return Ei;n=n._reactInternals;e:{if(qe(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return xp(n,a,i)}return i}function jm(n,i,a,c,p,x,b,N,U){return n=zf(a,c,!0,n,p,x,b,N,U),n.context=$m(null),a=n.current,c=Pn(),p=Di(a),x=Qr(c,p),x.callback=i??null,Ai(a,x,p),n.current.lanes=p,Fo(n,p,c),Fn(n,c),n}function $l(n,i,a,c){var p=i.current,x=Pn(),b=Di(p);return a=$m(a),i.context===null?i.context=a:i.pendingContext=a,i=Qr(x,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ai(p,i,b),n!==null&&(Mr(n,p,b,x),wl(n,p,b)),b}function jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ff(n,i){qm(n,i),(n=n.alternate)&&qm(n,i)}function ly(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Of(n){this._internalRoot=n}ql.prototype.render=Of.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));$l(n,i,null,null)},ql.prototype.unmount=Of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){$l(null,n,null,null)}),i[qr]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var i=Lh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<yi.length&&i!==0&&i<yi[a].priority;a++);yi.splice(a,0,n),a===0&&kh(n)}};function Uf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function uy(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var te=jl(b);x.call(te)}}var b=jm(i,c,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=b,n[qr]=b.current,Zo(n.nodeType===8?n.parentNode:n),rs(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var N=c;c=function(){var te=jl(U);N.call(te)}}var U=zf(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=U,n[qr]=U.current,Zo(n.nodeType===8?n.parentNode:n),rs(function(){$l(i,U,a,c)}),U}function Yl(n,i,a,c,p){var x=a._reactRootContainer;if(x){var b=x;if(typeof p=="function"){var N=p;p=function(){var U=jl(b);N.call(U)}}$l(i,b,n,p)}else b=uy(a,i,n,p,c);return jl(b)}Rh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zo(i.pendingLanes);a!==0&&(lc(i,a|1),Fn(i,ut()),(lt&6)===0&&(Hs=ut()+500,Ci()))}break;case 13:rs(function(){var c=Zr(n,1);if(c!==null){var p=Pn();Mr(c,n,1,p)}}),Ff(n,1)}},uc=function(n){if(n.tag===13){var i=Zr(n,134217728);if(i!==null){var a=Pn();Mr(i,n,134217728,a)}Ff(n,134217728)}},Ph=function(n){if(n.tag===13){var i=Di(n),a=Zr(n,i);if(a!==null){var c=Pn();Mr(a,n,i,c)}Ff(n,i)}},Lh=function(){return xt},Dh=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Pe=function(n,i,a){switch(i){case"input":if(fn(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=dl(c);if(!p)throw Error(t(90));je(c),fn(c,p)}}}break;case"textarea":fe(n,a);break;case"select":i=a.value,i!=null&&Gt(n,!!a.multiple,i,!1)}},Je=Pf,Tt=rs;var cy={usingClientEntryPoint:!1,Events:[ea,Ls,dl,Qe,Yt,Pf]},pa={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=it(n),n===null?null:n.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{gi=Kl.inject(fy),At=Kl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(i))throw Error(t(200));return ay(n,i,null,a)},On.createRoot=function(n,i){if(!Uf(n))throw Error(t(299));var a=!1,c="",p=Xm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=zf(n,1,!1,null,null,a,!1,c,p),n[qr]=i.current,Zo(n.nodeType===8?n.parentNode:n),new Of(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=it(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return rs(n)},On.hydrate=function(n,i,a){if(!Xl(i))throw Error(t(200));return Yl(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!Uf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",b=Xm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=jm(i,null,n,1,a??null,p,!1,x,b),n[qr]=i.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new ql(i)},On.render=function(n,i,a){if(!Xl(i))throw Error(t(200));return Yl(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Yl(null,null,n,!1,function(){n._reactRootContainer=null,n[qr]=null})}),!0):!1},On.unstable_batchedUpdates=Pf,On.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Yl(n,i,a,!1,c)},On.version="18.3.1-next-f1338f8080-20240426",On}var ig;function lv(){if(ig)return Gf.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gf.exports=Sy(),Gf.exports}var sg;function wy(){if(sg)return Zl;sg=1;var r=lv();return Zl.createRoot=r.createRoot,Zl.hydrateRoot=r.hydrateRoot,Zl}var My=wy(),$f={exports:{}},jf,og;function by(){if(og)return jf;og=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jf=r,jf}var qf,ag;function Ey(){if(ag)return qf;ag=1;var r=by();function e(){}function t(){}return t.resetWarningCache=e,qf=function(){function s(f,u,d,h,m,g){if(g!==r){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},qf}var lg;function Cy(){return lg||(lg=1,$f.exports=Ey()()),$f.exports}var Ty=Cy();const Zn=av(Ty);function uv({onSubmit:r}){const[e,t]=ee.useState(""),s=o=>{o.preventDefault(),e.trim()&&(r(e.trim()),t(""))};return dt.jsxs("form",{onSubmit:s,className:"new-item-form",children:[dt.jsxs("div",{className:"form-row",children:[dt.jsx("label",{htmlFor:"item",children:"New Item"}),dt.jsx("input",{value:e,onChange:o=>t(o.target.value),type:"text",id:"item",autoComplete:"off",placeholder:"What is your next task?"})]}),dt.jsx("button",{className:"btn",children:"Add"})]})}uv.propTypes={onSubmit:Zn.func.isRequired};var Sa=lv();function Ay(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return ee.useMemo(()=>s=>{e.forEach(o=>o(s))},e)}const Uu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ro(r){const e=Object.prototype.toString.call(r);return e==="[object Window]"||e==="[object global]"}function ih(r){return"nodeType"in r}function Vn(r){var e,t;return r?Ro(r)?r:ih(r)&&(e=(t=r.ownerDocument)==null?void 0:t.defaultView)!=null?e:window:window}function sh(r){const{Document:e}=Vn(r);return r instanceof e}function Oa(r){return Ro(r)?!1:r instanceof Vn(r).HTMLElement}function cv(r){return r instanceof Vn(r).SVGElement}function Po(r){return r?Ro(r)?r.document:ih(r)?sh(r)?r:Oa(r)||cv(r)?r.ownerDocument:document:document:document}const $r=Uu?ee.useLayoutEffect:ee.useEffect;function oh(r){const e=ee.useRef(r);return $r(()=>{e.current=r}),ee.useCallback(function(){for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return e.current==null?void 0:e.current(...s)},[])}function Ry(){const r=ee.useRef(null),e=ee.useCallback((s,o)=>{r.current=setInterval(s,o)},[]),t=ee.useCallback(()=>{r.current!==null&&(clearInterval(r.current),r.current=null)},[]);return[e,t]}function Pa(r,e){e===void 0&&(e=[r]);const t=ee.useRef(r);return $r(()=>{t.current!==r&&(t.current=r)},e),t}function Ua(r,e){const t=ee.useRef();return ee.useMemo(()=>{const s=r(t.current);return t.current=s,s},[...e])}function Du(r){const e=oh(r),t=ee.useRef(null),s=ee.useCallback(o=>{o!==t.current&&(e==null||e(o,t.current)),t.current=o},[]);return[t,s]}function zd(r){const e=ee.useRef();return ee.useEffect(()=>{e.current=r},[r]),e.current}let Xf={};function Ba(r,e){return ee.useMemo(()=>{if(e)return e;const t=Xf[r]==null?0:Xf[r]+1;return Xf[r]=t,r+"-"+t},[r,e])}function fv(r){return function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),o=1;o<t;o++)s[o-1]=arguments[o];return s.reduce((l,f)=>{const u=Object.entries(f);for(const[d,h]of u){const m=l[d];m!=null&&(l[d]=m+r*h)}return l},{...e})}}const po=fv(1),Iu=fv(-1);function Py(r){return"clientX"in r&&"clientY"in r}function ah(r){if(!r)return!1;const{KeyboardEvent:e}=Vn(r.target);return e&&r instanceof e}function Ly(r){if(!r)return!1;const{TouchEvent:e}=Vn(r.target);return e&&r instanceof e}function Fd(r){if(Ly(r)){if(r.touches&&r.touches.length){const{clientX:e,clientY:t}=r.touches[0];return{x:e,y:t}}else if(r.changedTouches&&r.changedTouches.length){const{clientX:e,clientY:t}=r.changedTouches[0];return{x:e,y:t}}}return Py(r)?{x:r.clientX,y:r.clientY}:null}const La=Object.freeze({Translate:{toString(r){if(!r)return;const{x:e,y:t}=r;return"translate3d("+(e?Math.round(e):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(r){if(!r)return;const{scaleX:e,scaleY:t}=r;return"scaleX("+e+") scaleY("+t+")"}},Transform:{toString(r){if(r)return[La.Translate.toString(r),La.Scale.toString(r)].join(" ")}},Transition:{toString(r){let{property:e,duration:t,easing:s}=r;return e+" "+t+"ms "+s}}}),ug="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Dy(r){return r.matches(ug)?r:r.querySelector(ug)}const Iy={display:"none"};function ky(r){let{id:e,value:t}=r;return En.createElement("div",{id:e,style:Iy},t)}function Ny(r){let{id:e,announcement:t,ariaLiveType:s="assertive"}=r;const o={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return En.createElement("div",{id:e,style:o,role:"status","aria-live":s,"aria-atomic":!0},t)}function zy(){const[r,e]=ee.useState("");return{announce:ee.useCallback(s=>{s!=null&&e(s)},[]),announcement:r}}const dv=ee.createContext(null);function Fy(r){const e=ee.useContext(dv);ee.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(r)},[r,e])}function Oy(){const[r]=ee.useState(()=>new Set),e=ee.useCallback(s=>(r.add(s),()=>r.delete(s)),[r]);return[ee.useCallback(s=>{let{type:o,event:l}=s;r.forEach(f=>{var u;return(u=f[o])==null?void 0:u.call(f,l)})},[r]),e]}const Uy={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},By={onDragStart(r){let{active:e}=r;return"Picked up draggable item "+e.id+"."},onDragOver(r){let{active:e,over:t}=r;return t?"Draggable item "+e.id+" was moved over droppable area "+t.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(r){let{active:e,over:t}=r;return t?"Draggable item "+e.id+" was dropped over droppable area "+t.id:"Draggable item "+e.id+" was dropped."},onDragCancel(r){let{active:e}=r;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function Vy(r){let{announcements:e=By,container:t,hiddenTextDescribedById:s,screenReaderInstructions:o=Uy}=r;const{announce:l,announcement:f}=zy(),u=Ba("DndLiveRegion"),[d,h]=ee.useState(!1);if(ee.useEffect(()=>{h(!0)},[]),Fy(ee.useMemo(()=>({onDragStart(g){let{active:_}=g;l(e.onDragStart({active:_}))},onDragMove(g){let{active:_,over:S}=g;e.onDragMove&&l(e.onDragMove({active:_,over:S}))},onDragOver(g){let{active:_,over:S}=g;l(e.onDragOver({active:_,over:S}))},onDragEnd(g){let{active:_,over:S}=g;l(e.onDragEnd({active:_,over:S}))},onDragCancel(g){let{active:_,over:S}=g;l(e.onDragCancel({active:_,over:S}))}}),[l,e])),!d)return null;const m=En.createElement(En.Fragment,null,En.createElement(ky,{id:s,value:o.draggable}),En.createElement(Ny,{id:u,announcement:f}));return t?Sa.createPortal(m,t):m}var rn;(function(r){r.DragStart="dragStart",r.DragMove="dragMove",r.DragEnd="dragEnd",r.DragCancel="dragCancel",r.DragOver="dragOver",r.RegisterDroppable="registerDroppable",r.SetDroppableDisabled="setDroppableDisabled",r.UnregisterDroppable="unregisterDroppable"})(rn||(rn={}));function ku(){}const Rr=Object.freeze({x:0,y:0});function Gy(r,e){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function Wy(r,e){let{data:{value:t}}=r,{data:{value:s}}=e;return t-s}function Hy(r,e){let{data:{value:t}}=r,{data:{value:s}}=e;return s-t}function $y(r,e){if(!r||r.length===0)return null;const[t]=r;return t[e]}function cg(r,e,t){return e===void 0&&(e=r.left),t===void 0&&(t=r.top),{x:e+r.width*.5,y:t+r.height*.5}}const jy=r=>{let{collisionRect:e,droppableRects:t,droppableContainers:s}=r;const o=cg(e,e.left,e.top),l=[];for(const f of s){const{id:u}=f,d=t.get(u);if(d){const h=Gy(cg(d),o);l.push({id:u,data:{droppableContainer:f,value:h}})}}return l.sort(Wy)};function qy(r,e){const t=Math.max(e.top,r.top),s=Math.max(e.left,r.left),o=Math.min(e.left+e.width,r.left+r.width),l=Math.min(e.top+e.height,r.top+r.height),f=o-s,u=l-t;if(s<o&&t<l){const d=e.width*e.height,h=r.width*r.height,m=f*u,g=m/(d+h-m);return Number(g.toFixed(4))}return 0}const Xy=r=>{let{collisionRect:e,droppableRects:t,droppableContainers:s}=r;const o=[];for(const l of s){const{id:f}=l,u=t.get(f);if(u){const d=qy(u,e);d>0&&o.push({id:f,data:{droppableContainer:l,value:d}})}}return o.sort(Hy)};function Yy(r,e,t){return{...r,scaleX:e&&t?e.width/t.width:1,scaleY:e&&t?e.height/t.height:1}}function hv(r,e){return r&&e?{x:r.left-e.left,y:r.top-e.top}:Rr}function Ky(r){return function(t){for(var s=arguments.length,o=new Array(s>1?s-1:0),l=1;l<s;l++)o[l-1]=arguments[l];return o.reduce((f,u)=>({...f,top:f.top+r*u.y,bottom:f.bottom+r*u.y,left:f.left+r*u.x,right:f.right+r*u.x}),{...t})}}const Zy=Ky(1);function Qy(r){if(r.startsWith("matrix3d(")){const e=r.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(r.startsWith("matrix(")){const e=r.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function Jy(r,e,t){const s=Qy(e);if(!s)return r;const{scaleX:o,scaleY:l,x:f,y:u}=s,d=r.left-f-(1-o)*parseFloat(t),h=r.top-u-(1-l)*parseFloat(t.slice(t.indexOf(" ")+1)),m=o?r.width/o:r.width,g=l?r.height/l:r.height;return{width:m,height:g,top:h,right:d+m,bottom:h+g,left:d}}const eS={ignoreTransform:!1};function Lo(r,e){e===void 0&&(e=eS);let t=r.getBoundingClientRect();if(e.ignoreTransform){const{transform:h,transformOrigin:m}=Vn(r).getComputedStyle(r);h&&(t=Jy(t,h,m))}const{top:s,left:o,width:l,height:f,bottom:u,right:d}=t;return{top:s,left:o,width:l,height:f,bottom:u,right:d}}function fg(r){return Lo(r,{ignoreTransform:!0})}function tS(r){const e=r.innerWidth,t=r.innerHeight;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}function nS(r,e){return e===void 0&&(e=Vn(r).getComputedStyle(r)),e.position==="fixed"}function rS(r,e){e===void 0&&(e=Vn(r).getComputedStyle(r));const t=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(o=>{const l=e[o];return typeof l=="string"?t.test(l):!1})}function lh(r,e){const t=[];function s(o){if(e!=null&&t.length>=e||!o)return t;if(sh(o)&&o.scrollingElement!=null&&!t.includes(o.scrollingElement))return t.push(o.scrollingElement),t;if(!Oa(o)||cv(o)||t.includes(o))return t;const l=Vn(r).getComputedStyle(o);return o!==r&&rS(o,l)&&t.push(o),nS(o,l)?t:s(o.parentNode)}return r?s(r):t}function pv(r){const[e]=lh(r,1);return e??null}function Yf(r){return!Uu||!r?null:Ro(r)?r:ih(r)?sh(r)||r===Po(r).scrollingElement?window:Oa(r)?r:null:null}function mv(r){return Ro(r)?r.scrollX:r.scrollLeft}function gv(r){return Ro(r)?r.scrollY:r.scrollTop}function Od(r){return{x:mv(r),y:gv(r)}}var cn;(function(r){r[r.Forward=1]="Forward",r[r.Backward=-1]="Backward"})(cn||(cn={}));function vv(r){return!Uu||!r?!1:r===document.scrollingElement}function _v(r){const e={x:0,y:0},t=vv(r)?{height:window.innerHeight,width:window.innerWidth}:{height:r.clientHeight,width:r.clientWidth},s={x:r.scrollWidth-t.width,y:r.scrollHeight-t.height},o=r.scrollTop<=e.y,l=r.scrollLeft<=e.x,f=r.scrollTop>=s.y,u=r.scrollLeft>=s.x;return{isTop:o,isLeft:l,isBottom:f,isRight:u,maxScroll:s,minScroll:e}}const iS={x:.2,y:.2};function sS(r,e,t,s,o){let{top:l,left:f,right:u,bottom:d}=t;s===void 0&&(s=10),o===void 0&&(o=iS);const{isTop:h,isBottom:m,isLeft:g,isRight:_}=_v(r),S={x:0,y:0},M={x:0,y:0},v={height:e.height*o.y,width:e.width*o.x};return!h&&l<=e.top+v.height?(S.y=cn.Backward,M.y=s*Math.abs((e.top+v.height-l)/v.height)):!m&&d>=e.bottom-v.height&&(S.y=cn.Forward,M.y=s*Math.abs((e.bottom-v.height-d)/v.height)),!_&&u>=e.right-v.width?(S.x=cn.Forward,M.x=s*Math.abs((e.right-v.width-u)/v.width)):!g&&f<=e.left+v.width&&(S.x=cn.Backward,M.x=s*Math.abs((e.left+v.width-f)/v.width)),{direction:S,speed:M}}function oS(r){if(r===document.scrollingElement){const{innerWidth:l,innerHeight:f}=window;return{top:0,left:0,right:l,bottom:f,width:l,height:f}}const{top:e,left:t,right:s,bottom:o}=r.getBoundingClientRect();return{top:e,left:t,right:s,bottom:o,width:r.clientWidth,height:r.clientHeight}}function xv(r){return r.reduce((e,t)=>po(e,Od(t)),Rr)}function aS(r){return r.reduce((e,t)=>e+mv(t),0)}function lS(r){return r.reduce((e,t)=>e+gv(t),0)}function uS(r,e){if(e===void 0&&(e=Lo),!r)return;const{top:t,left:s,bottom:o,right:l}=e(r);pv(r)&&(o<=0||l<=0||t>=window.innerHeight||s>=window.innerWidth)&&r.scrollIntoView({block:"center",inline:"center"})}const cS=[["x",["left","right"],aS],["y",["top","bottom"],lS]];class uh{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const s=lh(t),o=xv(s);this.rect={...e},this.width=e.width,this.height=e.height;for(const[l,f,u]of cS)for(const d of f)Object.defineProperty(this,d,{get:()=>{const h=u(s),m=o[l]-h;return this.rect[d]+m},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ca{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(t=>{var s;return(s=this.target)==null?void 0:s.removeEventListener(...t)})},this.target=e}add(e,t,s){var o;(o=this.target)==null||o.addEventListener(e,t,s),this.listeners.push([e,t,s])}}function fS(r){const{EventTarget:e}=Vn(r);return r instanceof e?r:Po(r)}function Kf(r,e){const t=Math.abs(r.x),s=Math.abs(r.y);return typeof e=="number"?Math.sqrt(t**2+s**2)>e:"x"in e&&"y"in e?t>e.x&&s>e.y:"x"in e?t>e.x:"y"in e?s>e.y:!1}var cr;(function(r){r.Click="click",r.DragStart="dragstart",r.Keydown="keydown",r.ContextMenu="contextmenu",r.Resize="resize",r.SelectionChange="selectionchange",r.VisibilityChange="visibilitychange"})(cr||(cr={}));function dg(r){r.preventDefault()}function dS(r){r.stopPropagation()}var vt;(function(r){r.Space="Space",r.Down="ArrowDown",r.Right="ArrowRight",r.Left="ArrowLeft",r.Up="ArrowUp",r.Esc="Escape",r.Enter="Enter",r.Tab="Tab"})(vt||(vt={}));const yv={start:[vt.Space,vt.Enter],cancel:[vt.Esc],end:[vt.Space,vt.Enter,vt.Tab]},hS=(r,e)=>{let{currentCoordinates:t}=e;switch(r.code){case vt.Right:return{...t,x:t.x+25};case vt.Left:return{...t,x:t.x-25};case vt.Down:return{...t,y:t.y+25};case vt.Up:return{...t,y:t.y-25}}};class Sv{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Ca(Po(t)),this.windowListeners=new Ca(Vn(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(cr.Resize,this.handleCancel),this.windowListeners.add(cr.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(cr.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props,s=e.node.current;s&&uS(s),t(Rr)}handleKeyDown(e){if(ah(e)){const{active:t,context:s,options:o}=this.props,{keyboardCodes:l=yv,coordinateGetter:f=hS,scrollBehavior:u="smooth"}=o,{code:d}=e;if(l.end.includes(d)){this.handleEnd(e);return}if(l.cancel.includes(d)){this.handleCancel(e);return}const{collisionRect:h}=s.current,m=h?{x:h.left,y:h.top}:Rr;this.referenceCoordinates||(this.referenceCoordinates=m);const g=f(e,{active:t,context:s.current,currentCoordinates:m});if(g){const _=Iu(g,m),S={x:0,y:0},{scrollableAncestors:M}=s.current;for(const v of M){const y=e.code,{isTop:E,isRight:R,isLeft:L,isBottom:T,maxScroll:A,minScroll:I}=_v(v),O=oS(v),C={x:Math.min(y===vt.Right?O.right-O.width/2:O.right,Math.max(y===vt.Right?O.left:O.left+O.width/2,g.x)),y:Math.min(y===vt.Down?O.bottom-O.height/2:O.bottom,Math.max(y===vt.Down?O.top:O.top+O.height/2,g.y))},F=y===vt.Right&&!R||y===vt.Left&&!L,w=y===vt.Down&&!T||y===vt.Up&&!E;if(F&&C.x!==g.x){const G=v.scrollLeft+_.x,ae=y===vt.Right&&G<=A.x||y===vt.Left&&G>=I.x;if(ae&&!_.y){v.scrollTo({left:G,behavior:u});return}ae?S.x=v.scrollLeft-G:S.x=y===vt.Right?v.scrollLeft-A.x:v.scrollLeft-I.x,S.x&&v.scrollBy({left:-S.x,behavior:u});break}else if(w&&C.y!==g.y){const G=v.scrollTop+_.y,ae=y===vt.Down&&G<=A.y||y===vt.Up&&G>=I.y;if(ae&&!_.x){v.scrollTo({top:G,behavior:u});return}ae?S.y=v.scrollTop-G:S.y=y===vt.Down?v.scrollTop-A.y:v.scrollTop-I.y,S.y&&v.scrollBy({top:-S.y,behavior:u});break}}this.handleMove(e,po(Iu(g,this.referenceCoordinates),S))}}}handleMove(e,t){const{onMove:s}=this.props;e.preventDefault(),s(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Sv.activators=[{eventName:"onKeyDown",handler:(r,e,t)=>{let{keyboardCodes:s=yv,onActivation:o}=e,{active:l}=t;const{code:f}=r.nativeEvent;if(s.start.includes(f)){const u=l.activatorNode.current;return u&&r.target!==u?!1:(r.preventDefault(),o==null||o({event:r.nativeEvent}),!0)}return!1}}];function hg(r){return!!(r&&"distance"in r)}function pg(r){return!!(r&&"delay"in r)}class ch{constructor(e,t,s){var o;s===void 0&&(s=fS(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:l}=e,{target:f}=l;this.props=e,this.events=t,this.document=Po(f),this.documentListeners=new Ca(this.document),this.listeners=new Ca(s),this.windowListeners=new Ca(Vn(f)),this.initialCoordinates=(o=Fd(l))!=null?o:Rr,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:s}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(cr.Resize,this.handleCancel),this.windowListeners.add(cr.DragStart,dg),this.windowListeners.add(cr.VisibilityChange,this.handleCancel),this.windowListeners.add(cr.ContextMenu,dg),this.documentListeners.add(cr.Keydown,this.handleKeydown),t){if(s!=null&&s({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(pg(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(hg(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:s,onPending:o}=this.props;o(s,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(cr.Click,dS,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(cr.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:s,initialCoordinates:o,props:l}=this,{onMove:f,options:{activationConstraint:u}}=l;if(!o)return;const d=(t=Fd(e))!=null?t:Rr,h=Iu(o,d);if(!s&&u){if(hg(u)){if(u.tolerance!=null&&Kf(h,u.tolerance))return this.handleCancel();if(Kf(h,u.distance))return this.handleStart()}if(pg(u)&&Kf(h,u.tolerance))return this.handleCancel();this.handlePending(u,h);return}e.cancelable&&e.preventDefault(),f(d)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===vt.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const pS={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class wv extends ch{constructor(e){const{event:t}=e,s=Po(t.target);super(e,pS,s)}}wv.activators=[{eventName:"onPointerDown",handler:(r,e)=>{let{nativeEvent:t}=r,{onActivation:s}=e;return!t.isPrimary||t.button!==0?!1:(s==null||s({event:t}),!0)}}];const mS={move:{name:"mousemove"},end:{name:"mouseup"}};var Ud;(function(r){r[r.RightClick=2]="RightClick"})(Ud||(Ud={}));class gS extends ch{constructor(e){super(e,mS,Po(e.event.target))}}gS.activators=[{eventName:"onMouseDown",handler:(r,e)=>{let{nativeEvent:t}=r,{onActivation:s}=e;return t.button===Ud.RightClick?!1:(s==null||s({event:t}),!0)}}];const Zf={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class vS extends ch{constructor(e){super(e,Zf)}static setup(){return window.addEventListener(Zf.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Zf.move.name,e)};function e(){}}}vS.activators=[{eventName:"onTouchStart",handler:(r,e)=>{let{nativeEvent:t}=r,{onActivation:s}=e;const{touches:o}=t;return o.length>1?!1:(s==null||s({event:t}),!0)}}];var Ta;(function(r){r[r.Pointer=0]="Pointer",r[r.DraggableRect=1]="DraggableRect"})(Ta||(Ta={}));var Nu;(function(r){r[r.TreeOrder=0]="TreeOrder",r[r.ReversedTreeOrder=1]="ReversedTreeOrder"})(Nu||(Nu={}));function _S(r){let{acceleration:e,activator:t=Ta.Pointer,canScroll:s,draggingRect:o,enabled:l,interval:f=5,order:u=Nu.TreeOrder,pointerCoordinates:d,scrollableAncestors:h,scrollableAncestorRects:m,delta:g,threshold:_}=r;const S=yS({delta:g,disabled:!l}),[M,v]=Ry(),y=ee.useRef({x:0,y:0}),E=ee.useRef({x:0,y:0}),R=ee.useMemo(()=>{switch(t){case Ta.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case Ta.DraggableRect:return o}},[t,o,d]),L=ee.useRef(null),T=ee.useCallback(()=>{const I=L.current;if(!I)return;const O=y.current.x*E.current.x,C=y.current.y*E.current.y;I.scrollBy(O,C)},[]),A=ee.useMemo(()=>u===Nu.TreeOrder?[...h].reverse():h,[u,h]);ee.useEffect(()=>{if(!l||!h.length||!R){v();return}for(const I of A){if((s==null?void 0:s(I))===!1)continue;const O=h.indexOf(I),C=m[O];if(!C)continue;const{direction:F,speed:w}=sS(I,C,R,e,_);for(const G of["x","y"])S[G][F[G]]||(w[G]=0,F[G]=0);if(w.x>0||w.y>0){v(),L.current=I,M(T,f),y.current=w,E.current=F;return}}y.current={x:0,y:0},E.current={x:0,y:0},v()},[e,T,s,v,l,f,JSON.stringify(R),JSON.stringify(S),M,h,A,m,JSON.stringify(_)])}const xS={x:{[cn.Backward]:!1,[cn.Forward]:!1},y:{[cn.Backward]:!1,[cn.Forward]:!1}};function yS(r){let{delta:e,disabled:t}=r;const s=zd(e);return Ua(o=>{if(t||!s||!o)return xS;const l={x:Math.sign(e.x-s.x),y:Math.sign(e.y-s.y)};return{x:{[cn.Backward]:o.x[cn.Backward]||l.x===-1,[cn.Forward]:o.x[cn.Forward]||l.x===1},y:{[cn.Backward]:o.y[cn.Backward]||l.y===-1,[cn.Forward]:o.y[cn.Forward]||l.y===1}}},[t,e,s])}function SS(r,e){const t=e!=null?r.get(e):void 0,s=t?t.node.current:null;return Ua(o=>{var l;return e==null?null:(l=s??o)!=null?l:null},[s,e])}function wS(r,e){return ee.useMemo(()=>r.reduce((t,s)=>{const{sensor:o}=s,l=o.activators.map(f=>({eventName:f.eventName,handler:e(f.handler,s)}));return[...t,...l]},[]),[r,e])}var Da;(function(r){r[r.Always=0]="Always",r[r.BeforeDragging=1]="BeforeDragging",r[r.WhileDragging=2]="WhileDragging"})(Da||(Da={}));var Bd;(function(r){r.Optimized="optimized"})(Bd||(Bd={}));const mg=new Map;function MS(r,e){let{dragging:t,dependencies:s,config:o}=e;const[l,f]=ee.useState(null),{frequency:u,measure:d,strategy:h}=o,m=ee.useRef(r),g=y(),_=Pa(g),S=ee.useCallback(function(E){E===void 0&&(E=[]),!_.current&&f(R=>R===null?E:R.concat(E.filter(L=>!R.includes(L))))},[_]),M=ee.useRef(null),v=Ua(E=>{if(g&&!t)return mg;if(!E||E===mg||m.current!==r||l!=null){const R=new Map;for(let L of r){if(!L)continue;if(l&&l.length>0&&!l.includes(L.id)&&L.rect.current){R.set(L.id,L.rect.current);continue}const T=L.node.current,A=T?new uh(d(T),T):null;L.rect.current=A,A&&R.set(L.id,A)}return R}return E},[r,l,t,g,d]);return ee.useEffect(()=>{m.current=r},[r]),ee.useEffect(()=>{g||S()},[t,g]),ee.useEffect(()=>{l&&l.length>0&&f(null)},[JSON.stringify(l)]),ee.useEffect(()=>{g||typeof u!="number"||M.current!==null||(M.current=setTimeout(()=>{S(),M.current=null},u))},[u,g,S,...s]),{droppableRects:v,measureDroppableContainers:S,measuringScheduled:l!=null};function y(){switch(h){case Da.Always:return!1;case Da.BeforeDragging:return t;default:return!t}}}function Mv(r,e){return Ua(t=>r?t||(typeof e=="function"?e(r):r):null,[e,r])}function bS(r,e){return Mv(r,e)}function ES(r){let{callback:e,disabled:t}=r;const s=oh(e),o=ee.useMemo(()=>{if(t||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:l}=window;return new l(s)},[s,t]);return ee.useEffect(()=>()=>o==null?void 0:o.disconnect(),[o]),o}function Bu(r){let{callback:e,disabled:t}=r;const s=oh(e),o=ee.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:l}=window;return new l(s)},[t]);return ee.useEffect(()=>()=>o==null?void 0:o.disconnect(),[o]),o}function CS(r){return new uh(Lo(r),r)}function gg(r,e,t){e===void 0&&(e=CS);const[s,o]=ee.useState(null);function l(){o(d=>{if(!r)return null;if(r.isConnected===!1){var h;return(h=d??t)!=null?h:null}const m=e(r);return JSON.stringify(d)===JSON.stringify(m)?d:m})}const f=ES({callback(d){if(r)for(const h of d){const{type:m,target:g}=h;if(m==="childList"&&g instanceof HTMLElement&&g.contains(r)){l();break}}}}),u=Bu({callback:l});return $r(()=>{l(),r?(u==null||u.observe(r),f==null||f.observe(document.body,{childList:!0,subtree:!0})):(u==null||u.disconnect(),f==null||f.disconnect())},[r]),s}function TS(r){const e=Mv(r);return hv(r,e)}const vg=[];function AS(r){const e=ee.useRef(r),t=Ua(s=>r?s&&s!==vg&&r&&e.current&&r.parentNode===e.current.parentNode?s:lh(r):vg,[r]);return ee.useEffect(()=>{e.current=r},[r]),t}function RS(r){const[e,t]=ee.useState(null),s=ee.useRef(r),o=ee.useCallback(l=>{const f=Yf(l.target);f&&t(u=>u?(u.set(f,Od(f)),new Map(u)):null)},[]);return ee.useEffect(()=>{const l=s.current;if(r!==l){f(l);const u=r.map(d=>{const h=Yf(d);return h?(h.addEventListener("scroll",o,{passive:!0}),[h,Od(h)]):null}).filter(d=>d!=null);t(u.length?new Map(u):null),s.current=r}return()=>{f(r),f(l)};function f(u){u.forEach(d=>{const h=Yf(d);h==null||h.removeEventListener("scroll",o)})}},[o,r]),ee.useMemo(()=>r.length?e?Array.from(e.values()).reduce((l,f)=>po(l,f),Rr):xv(r):Rr,[r,e])}function _g(r,e){e===void 0&&(e=[]);const t=ee.useRef(null);return ee.useEffect(()=>{t.current=null},e),ee.useEffect(()=>{const s=r!==Rr;s&&!t.current&&(t.current=r),!s&&t.current&&(t.current=null)},[r]),t.current?Iu(r,t.current):Rr}function PS(r){ee.useEffect(()=>{if(!Uu)return;const e=r.map(t=>{let{sensor:s}=t;return s.setup==null?void 0:s.setup()});return()=>{for(const t of e)t==null||t()}},r.map(e=>{let{sensor:t}=e;return t}))}function LS(r,e){return ee.useMemo(()=>r.reduce((t,s)=>{let{eventName:o,handler:l}=s;return t[o]=f=>{l(f,e)},t},{}),[r,e])}function bv(r){return ee.useMemo(()=>r?tS(r):null,[r])}const xg=[];function DS(r,e){e===void 0&&(e=Lo);const[t]=r,s=bv(t?Vn(t):null),[o,l]=ee.useState(xg);function f(){l(()=>r.length?r.map(d=>vv(d)?s:new uh(e(d),d)):xg)}const u=Bu({callback:f});return $r(()=>{u==null||u.disconnect(),f(),r.forEach(d=>u==null?void 0:u.observe(d))},[r]),o}function IS(r){if(!r)return null;if(r.children.length>1)return r;const e=r.children[0];return Oa(e)?e:r}function kS(r){let{measure:e}=r;const[t,s]=ee.useState(null),o=ee.useCallback(h=>{for(const{target:m}of h)if(Oa(m)){s(g=>{const _=e(m);return g?{...g,width:_.width,height:_.height}:_});break}},[e]),l=Bu({callback:o}),f=ee.useCallback(h=>{const m=IS(h);l==null||l.disconnect(),m&&(l==null||l.observe(m)),s(m?e(m):null)},[e,l]),[u,d]=Du(f);return ee.useMemo(()=>({nodeRef:u,rect:t,setRef:d}),[t,u,d])}const NS=[{sensor:wv,options:{}},{sensor:Sv,options:{}}],zS={current:{}},Eu={draggable:{measure:fg},droppable:{measure:fg,strategy:Da.WhileDragging,frequency:Bd.Optimized},dragOverlay:{measure:Lo}};class Aa extends Map{get(e){var t;return e!=null&&(t=super.get(e))!=null?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,s;return(t=(s=this.get(e))==null?void 0:s.node.current)!=null?t:void 0}}const FS={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Aa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ku},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Eu,measureDroppableContainers:ku,windowRect:null,measuringScheduled:!1},OS={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ku,draggableNodes:new Map,over:null,measureDroppableContainers:ku},Vu=ee.createContext(OS),Ev=ee.createContext(FS);function US(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Aa}}}function BS(r,e){switch(e.type){case rn.DragStart:return{...r,draggable:{...r.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case rn.DragMove:return r.draggable.active==null?r:{...r,draggable:{...r.draggable,translate:{x:e.coordinates.x-r.draggable.initialCoordinates.x,y:e.coordinates.y-r.draggable.initialCoordinates.y}}};case rn.DragEnd:case rn.DragCancel:return{...r,draggable:{...r.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case rn.RegisterDroppable:{const{element:t}=e,{id:s}=t,o=new Aa(r.droppable.containers);return o.set(s,t),{...r,droppable:{...r.droppable,containers:o}}}case rn.SetDroppableDisabled:{const{id:t,key:s,disabled:o}=e,l=r.droppable.containers.get(t);if(!l||s!==l.key)return r;const f=new Aa(r.droppable.containers);return f.set(t,{...l,disabled:o}),{...r,droppable:{...r.droppable,containers:f}}}case rn.UnregisterDroppable:{const{id:t,key:s}=e,o=r.droppable.containers.get(t);if(!o||s!==o.key)return r;const l=new Aa(r.droppable.containers);return l.delete(t),{...r,droppable:{...r.droppable,containers:l}}}default:return r}}function VS(r){let{disabled:e}=r;const{active:t,activatorEvent:s,draggableNodes:o}=ee.useContext(Vu),l=zd(s),f=zd(t==null?void 0:t.id);return ee.useEffect(()=>{if(!e&&!s&&l&&f!=null){if(!ah(l)||document.activeElement===l.target)return;const u=o.get(f);if(!u)return;const{activatorNode:d,node:h}=u;if(!d.current&&!h.current)return;requestAnimationFrame(()=>{for(const m of[d.current,h.current]){if(!m)continue;const g=Dy(m);if(g){g.focus();break}}})}},[s,e,o,f,l]),null}function GS(r,e){let{transform:t,...s}=e;return r!=null&&r.length?r.reduce((o,l)=>l({transform:o,...s}),t):t}function WS(r){return ee.useMemo(()=>({draggable:{...Eu.draggable,...r==null?void 0:r.draggable},droppable:{...Eu.droppable,...r==null?void 0:r.droppable},dragOverlay:{...Eu.dragOverlay,...r==null?void 0:r.dragOverlay}}),[r==null?void 0:r.draggable,r==null?void 0:r.droppable,r==null?void 0:r.dragOverlay])}function HS(r){let{activeNode:e,measure:t,initialRect:s,config:o=!0}=r;const l=ee.useRef(!1),{x:f,y:u}=typeof o=="boolean"?{x:o,y:o}:o;$r(()=>{if(!f&&!u||!e){l.current=!1;return}if(l.current||!s)return;const h=e==null?void 0:e.node.current;if(!h||h.isConnected===!1)return;const m=t(h),g=hv(m,s);if(f||(g.x=0),u||(g.y=0),l.current=!0,Math.abs(g.x)>0||Math.abs(g.y)>0){const _=pv(h);_&&_.scrollBy({top:g.y,left:g.x})}},[e,f,u,s,t])}const Cv=ee.createContext({...Rr,scaleX:1,scaleY:1});var Wi;(function(r){r[r.Uninitialized=0]="Uninitialized",r[r.Initializing=1]="Initializing",r[r.Initialized=2]="Initialized"})(Wi||(Wi={}));const $S=ee.memo(function(e){var t,s,o,l;let{id:f,accessibility:u,autoScroll:d=!0,children:h,sensors:m=NS,collisionDetection:g=Xy,measuring:_,modifiers:S,...M}=e;const v=ee.useReducer(BS,void 0,US),[y,E]=v,[R,L]=Oy(),[T,A]=ee.useState(Wi.Uninitialized),I=T===Wi.Initialized,{draggable:{active:O,nodes:C,translate:F},droppable:{containers:w}}=y,G=O!=null?C.get(O):null,ae=ee.useRef({initial:null,translated:null}),X=ee.useMemo(()=>{var Ve;return O!=null?{id:O,data:(Ve=G==null?void 0:G.data)!=null?Ve:zS,rect:ae}:null},[O,G]),j=ee.useRef(null),[ie,he]=ee.useState(null),[le,$]=ee.useState(null),B=Pa(M,Object.values(M)),W=Ba("DndDescribedBy",f),k=ee.useMemo(()=>w.getEnabled(),[w]),V=WS(_),{droppableRects:re,measureDroppableContainers:pe,measuringScheduled:Me}=MS(k,{dragging:I,dependencies:[F.x,F.y],config:V.droppable}),J=SS(C,O),Fe=ee.useMemo(()=>le?Fd(le):null,[le]),Se=Ee(),Te=bS(J,V.draggable.measure);HS({activeNode:O!=null?C.get(O):null,config:Se.layoutShiftCompensation,initialRect:Te,measure:V.draggable.measure});const me=gg(J,V.draggable.measure,Te),tt=gg(J?J.parentElement:null),je=ee.useRef({activatorEvent:null,active:null,activeNode:J,collisionRect:null,collisions:null,droppableRects:re,draggableNodes:C,draggingNode:null,draggingNodeRect:null,droppableContainers:w,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Oe=w.getNodeFor((t=je.current.over)==null?void 0:t.id),ht=kS({measure:V.dragOverlay.measure}),Ft=(s=ht.nodeRef.current)!=null?s:J,Pt=I?(o=ht.rect)!=null?o:me:null,fn=!!(ht.nodeRef.current&&ht.rect),Ot=TS(fn?null:me),ot=bv(Ft?Vn(Ft):null),kt=AS(I?Oe??J:null),Gt=DS(kt),z=GS(S,{transform:{x:F.x-Ot.x,y:F.y-Ot.y,scaleX:1,scaleY:1},activatorEvent:le,active:X,activeNodeRect:me,containerNodeRect:tt,draggingNodeRect:Pt,over:je.current.over,overlayNodeRect:ht.rect,scrollableAncestors:kt,scrollableAncestorRects:Gt,windowRect:ot}),P=Fe?po(Fe,F):null,fe=RS(kt),xe=_g(fe),we=_g(fe,[me]),be=po(z,xe),Ge=Pt?Zy(Pt,z):null,se=X&&Ge?g({active:X,collisionRect:Ge,droppableRects:re,droppableContainers:k,pointerCoordinates:P}):null,ze=$y(se,"id"),[Ae,Be]=ee.useState(null),De=fn?z:po(z,we),Ke=Yy(De,(l=Ae==null?void 0:Ae.rect)!=null?l:null,me),rt=ee.useRef(null),yt=ee.useCallback((Ve,at)=>{let{sensor:Qe,options:Yt}=at;if(j.current==null)return;const Je=C.get(j.current);if(!Je)return;const Tt=Ve.nativeEvent,Mt=new Qe({active:j.current,activeNode:Je,event:Tt,options:Yt,context:je,onAbort(St){if(!C.get(St))return;const{onDragAbort:sn}=B.current,Gn={id:St};sn==null||sn(Gn),R({type:"onDragAbort",event:Gn})},onPending(St,Cn,sn,Gn){if(!C.get(St))return;const{onDragPending:D}=B.current,Z={id:St,constraint:Cn,initialCoordinates:sn,offset:Gn};D==null||D(Z),R({type:"onDragPending",event:Z})},onStart(St){const Cn=j.current;if(Cn==null)return;const sn=C.get(Cn);if(!sn)return;const{onDragStart:Gn}=B.current,Wn={activatorEvent:Tt,active:{id:Cn,data:sn.data,rect:ae}};Sa.unstable_batchedUpdates(()=>{Gn==null||Gn(Wn),A(Wi.Initializing),E({type:rn.DragStart,initialCoordinates:St,active:Cn}),R({type:"onDragStart",event:Wn}),he(rt.current),$(Tt)})},onMove(St){E({type:rn.DragMove,coordinates:St})},onEnd:vr(rn.DragEnd),onCancel:vr(rn.DragCancel)});rt.current=Mt;function vr(St){return async function(){const{active:sn,collisions:Gn,over:Wn,scrollAdjustedTranslate:D}=je.current;let Z=null;if(sn&&D){const{cancelDrop:oe}=B.current;Z={activatorEvent:Tt,active:sn,collisions:Gn,delta:D,over:Wn},St===rn.DragEnd&&typeof oe=="function"&&await Promise.resolve(oe(Z))&&(St=rn.DragCancel)}j.current=null,Sa.unstable_batchedUpdates(()=>{E({type:St}),A(Wi.Uninitialized),Be(null),he(null),$(null),rt.current=null;const oe=St===rn.DragEnd?"onDragEnd":"onDragCancel";if(Z){const K=B.current[oe];K==null||K(Z),R({type:oe,event:Z})}})}}},[C]),q=ee.useCallback((Ve,at)=>(Qe,Yt)=>{const Je=Qe.nativeEvent,Tt=C.get(Yt);if(j.current!==null||!Tt||Je.dndKit||Je.defaultPrevented)return;const Mt={active:Tt};Ve(Qe,at.options,Mt)===!0&&(Je.dndKit={capturedBy:at.sensor},j.current=Yt,yt(Qe,at))},[C,yt]),Re=wS(m,q);PS(m),$r(()=>{me&&T===Wi.Initializing&&A(Wi.Initialized)},[me,T]),ee.useEffect(()=>{const{onDragMove:Ve}=B.current,{active:at,activatorEvent:Qe,collisions:Yt,over:Je}=je.current;if(!at||!Qe)return;const Tt={active:at,activatorEvent:Qe,collisions:Yt,delta:{x:be.x,y:be.y},over:Je};Sa.unstable_batchedUpdates(()=>{Ve==null||Ve(Tt),R({type:"onDragMove",event:Tt})})},[be.x,be.y]),ee.useEffect(()=>{const{active:Ve,activatorEvent:at,collisions:Qe,droppableContainers:Yt,scrollAdjustedTranslate:Je}=je.current;if(!Ve||j.current==null||!at||!Je)return;const{onDragOver:Tt}=B.current,Mt=Yt.get(ze),vr=Mt&&Mt.rect.current?{id:Mt.id,rect:Mt.rect.current,data:Mt.data,disabled:Mt.disabled}:null,St={active:Ve,activatorEvent:at,collisions:Qe,delta:{x:Je.x,y:Je.y},over:vr};Sa.unstable_batchedUpdates(()=>{Be(vr),Tt==null||Tt(St),R({type:"onDragOver",event:St})})},[ze]),$r(()=>{je.current={activatorEvent:le,active:X,activeNode:J,collisionRect:Ge,collisions:se,droppableRects:re,draggableNodes:C,draggingNode:Ft,draggingNodeRect:Pt,droppableContainers:w,over:Ae,scrollableAncestors:kt,scrollAdjustedTranslate:be},ae.current={initial:Pt,translated:Ge}},[X,J,se,Ge,C,Ft,Pt,re,w,Ae,kt,be]),_S({...Se,delta:F,draggingRect:Ge,pointerCoordinates:P,scrollableAncestors:kt,scrollableAncestorRects:Gt});const ue=ee.useMemo(()=>({active:X,activeNode:J,activeNodeRect:me,activatorEvent:le,collisions:se,containerNodeRect:tt,dragOverlay:ht,draggableNodes:C,droppableContainers:w,droppableRects:re,over:Ae,measureDroppableContainers:pe,scrollableAncestors:kt,scrollableAncestorRects:Gt,measuringConfiguration:V,measuringScheduled:Me,windowRect:ot}),[X,J,me,le,se,tt,ht,C,w,re,Ae,pe,kt,Gt,V,Me,ot]),Pe=ee.useMemo(()=>({activatorEvent:le,activators:Re,active:X,activeNodeRect:me,ariaDescribedById:{draggable:W},dispatch:E,draggableNodes:C,over:Ae,measureDroppableContainers:pe}),[le,Re,X,me,E,W,C,Ae,pe]);return En.createElement(dv.Provider,{value:L},En.createElement(Vu.Provider,{value:Pe},En.createElement(Ev.Provider,{value:ue},En.createElement(Cv.Provider,{value:Ke},h)),En.createElement(VS,{disabled:(u==null?void 0:u.restoreFocus)===!1})),En.createElement(Vy,{...u,hiddenTextDescribedById:W}));function Ee(){const Ve=(ie==null?void 0:ie.autoScrollEnabled)===!1,at=typeof d=="object"?d.enabled===!1:d===!1,Qe=I&&!Ve&&!at;return typeof d=="object"?{...d,enabled:Qe}:{enabled:Qe}}}),jS=ee.createContext(null),yg="button",qS="Draggable";function XS(r){let{id:e,data:t,disabled:s=!1,attributes:o}=r;const l=Ba(qS),{activators:f,activatorEvent:u,active:d,activeNodeRect:h,ariaDescribedById:m,draggableNodes:g,over:_}=ee.useContext(Vu),{role:S=yg,roleDescription:M="draggable",tabIndex:v=0}=o??{},y=(d==null?void 0:d.id)===e,E=ee.useContext(y?Cv:jS),[R,L]=Du(),[T,A]=Du(),I=LS(f,e),O=Pa(t);$r(()=>(g.set(e,{id:e,key:l,node:R,activatorNode:T,data:O}),()=>{const F=g.get(e);F&&F.key===l&&g.delete(e)}),[g,e]);const C=ee.useMemo(()=>({role:S,tabIndex:v,"aria-disabled":s,"aria-pressed":y&&S===yg?!0:void 0,"aria-roledescription":M,"aria-describedby":m.draggable}),[s,S,v,y,M,m.draggable]);return{active:d,activatorEvent:u,activeNodeRect:h,attributes:C,isDragging:y,listeners:s?void 0:I,node:R,over:_,setNodeRef:L,setActivatorNodeRef:A,transform:E}}function YS(){return ee.useContext(Ev)}const KS="Droppable",ZS={timeout:25};function QS(r){let{data:e,disabled:t=!1,id:s,resizeObserverConfig:o}=r;const l=Ba(KS),{active:f,dispatch:u,over:d,measureDroppableContainers:h}=ee.useContext(Vu),m=ee.useRef({disabled:t}),g=ee.useRef(!1),_=ee.useRef(null),S=ee.useRef(null),{disabled:M,updateMeasurementsFor:v,timeout:y}={...ZS,...o},E=Pa(v??s),R=ee.useCallback(()=>{if(!g.current){g.current=!0;return}S.current!=null&&clearTimeout(S.current),S.current=setTimeout(()=>{h(Array.isArray(E.current)?E.current:[E.current]),S.current=null},y)},[y]),L=Bu({callback:R,disabled:M||!f}),T=ee.useCallback((C,F)=>{L&&(F&&(L.unobserve(F),g.current=!1),C&&L.observe(C))},[L]),[A,I]=Du(T),O=Pa(e);return ee.useEffect(()=>{!L||!A.current||(L.disconnect(),g.current=!1,L.observe(A.current))},[A,L]),ee.useEffect(()=>(u({type:rn.RegisterDroppable,element:{id:s,key:l,disabled:t,node:A,rect:_,data:O}}),()=>u({type:rn.UnregisterDroppable,key:l,id:s})),[s]),ee.useEffect(()=>{t!==m.current.disabled&&(u({type:rn.SetDroppableDisabled,id:s,key:l,disabled:t}),m.current.disabled=t)},[s,l,t,u]),{active:f,rect:_,isOver:(d==null?void 0:d.id)===s,node:A,over:d,setNodeRef:I}}function fh(r,e,t){const s=r.slice();return s.splice(t<0?s.length+t:t,0,s.splice(e,1)[0]),s}function JS(r,e){return r.reduce((t,s,o)=>{const l=e.get(s);return l&&(t[o]=l),t},Array(r.length))}function Ql(r){return r!==null&&r>=0}function e1(r,e){if(r===e)return!0;if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function t1(r){return typeof r=="boolean"?{draggable:r,droppable:r}:r}const Tv=r=>{let{rects:e,activeIndex:t,overIndex:s,index:o}=r;const l=fh(e,s,t),f=e[o],u=l[o];return!u||!f?null:{x:u.left-f.left,y:u.top-f.top,scaleX:u.width/f.width,scaleY:u.height/f.height}},Jl={scaleX:1,scaleY:1},n1=r=>{var e;let{activeIndex:t,activeNodeRect:s,index:o,rects:l,overIndex:f}=r;const u=(e=l[t])!=null?e:s;if(!u)return null;if(o===t){const h=l[f];return h?{x:0,y:t<f?h.top+h.height-(u.top+u.height):h.top-u.top,...Jl}:null}const d=r1(l,o,t);return o>t&&o<=f?{x:0,y:-u.height-d,...Jl}:o<t&&o>=f?{x:0,y:u.height+d,...Jl}:{x:0,y:0,...Jl}};function r1(r,e,t){const s=r[e],o=r[e-1],l=r[e+1];return s?t<e?o?s.top-(o.top+o.height):l?l.top-(s.top+s.height):0:l?l.top-(s.top+s.height):o?s.top-(o.top+o.height):0:0}const Av="Sortable",Rv=En.createContext({activeIndex:-1,containerId:Av,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Tv,disabled:{draggable:!1,droppable:!1}});function i1(r){let{children:e,id:t,items:s,strategy:o=Tv,disabled:l=!1}=r;const{active:f,dragOverlay:u,droppableRects:d,over:h,measureDroppableContainers:m}=YS(),g=Ba(Av,t),_=u.rect!==null,S=ee.useMemo(()=>s.map(I=>typeof I=="object"&&"id"in I?I.id:I),[s]),M=f!=null,v=f?S.indexOf(f.id):-1,y=h?S.indexOf(h.id):-1,E=ee.useRef(S),R=!e1(S,E.current),L=y!==-1&&v===-1||R,T=t1(l);$r(()=>{R&&M&&m(S)},[R,S,M,m]),ee.useEffect(()=>{E.current=S},[S]);const A=ee.useMemo(()=>({activeIndex:v,containerId:g,disabled:T,disableTransforms:L,items:S,overIndex:y,useDragOverlay:_,sortedRects:JS(S,d),strategy:o}),[v,g,T.draggable,T.droppable,L,S,y,d,_,o]);return En.createElement(Rv.Provider,{value:A},e)}const s1=r=>{let{id:e,items:t,activeIndex:s,overIndex:o}=r;return fh(t,s,o).indexOf(e)},o1=r=>{let{containerId:e,isSorting:t,wasDragging:s,index:o,items:l,newIndex:f,previousItems:u,previousContainerId:d,transition:h}=r;return!h||!s||u!==l&&o===f?!1:t?!0:f!==o&&e===d},a1={duration:200,easing:"ease"},Pv="transform",l1=La.Transition.toString({property:Pv,duration:0,easing:"linear"}),u1={roleDescription:"sortable"};function c1(r){let{disabled:e,index:t,node:s,rect:o}=r;const[l,f]=ee.useState(null),u=ee.useRef(t);return $r(()=>{if(!e&&t!==u.current&&s.current){const d=o.current;if(d){const h=Lo(s.current,{ignoreTransform:!0}),m={x:d.left-h.left,y:d.top-h.top,scaleX:d.width/h.width,scaleY:d.height/h.height};(m.x||m.y)&&f(m)}}t!==u.current&&(u.current=t)},[e,t,s,o]),ee.useEffect(()=>{l&&f(null)},[l]),l}function f1(r){let{animateLayoutChanges:e=o1,attributes:t,disabled:s,data:o,getNewIndex:l=s1,id:f,strategy:u,resizeObserverConfig:d,transition:h=a1}=r;const{items:m,containerId:g,activeIndex:_,disabled:S,disableTransforms:M,sortedRects:v,overIndex:y,useDragOverlay:E,strategy:R}=ee.useContext(Rv),L=d1(s,S),T=m.indexOf(f),A=ee.useMemo(()=>({sortable:{containerId:g,index:T,items:m},...o}),[g,o,T,m]),I=ee.useMemo(()=>m.slice(m.indexOf(f)),[m,f]),{rect:O,node:C,isOver:F,setNodeRef:w}=QS({id:f,data:A,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...d}}),{active:G,activatorEvent:ae,activeNodeRect:X,attributes:j,setNodeRef:ie,listeners:he,isDragging:le,over:$,setActivatorNodeRef:B,transform:W}=XS({id:f,data:A,attributes:{...u1,...t},disabled:L.draggable}),k=Ay(w,ie),V=!!G,re=V&&!M&&Ql(_)&&Ql(y),pe=!E&&le,Me=pe&&re?W:null,Fe=re?Me??(u??R)({rects:v,activeNodeRect:X,activeIndex:_,overIndex:y,index:T}):null,Se=Ql(_)&&Ql(y)?l({id:f,items:m,activeIndex:_,overIndex:y}):T,Te=G==null?void 0:G.id,me=ee.useRef({activeId:Te,items:m,newIndex:Se,containerId:g}),tt=m!==me.current.items,je=e({active:G,containerId:g,isDragging:le,isSorting:V,id:f,index:T,items:m,newIndex:me.current.newIndex,previousItems:me.current.items,previousContainerId:me.current.containerId,transition:h,wasDragging:me.current.activeId!=null}),Oe=c1({disabled:!je,index:T,node:C,rect:O});return ee.useEffect(()=>{V&&me.current.newIndex!==Se&&(me.current.newIndex=Se),g!==me.current.containerId&&(me.current.containerId=g),m!==me.current.items&&(me.current.items=m)},[V,Se,g,m]),ee.useEffect(()=>{if(Te===me.current.activeId)return;if(Te!=null&&me.current.activeId==null){me.current.activeId=Te;return}const Ft=setTimeout(()=>{me.current.activeId=Te},50);return()=>clearTimeout(Ft)},[Te]),{active:G,activeIndex:_,attributes:j,data:A,rect:O,index:T,newIndex:Se,items:m,isOver:F,isSorting:V,isDragging:le,listeners:he,node:C,overIndex:y,over:$,setNodeRef:k,setActivatorNodeRef:B,setDroppableNodeRef:w,setDraggableNodeRef:ie,transform:Oe??Fe,transition:ht()};function ht(){if(Oe||tt&&me.current.newIndex===T)return l1;if(!(pe&&!ah(ae)||!h)&&(V||je))return La.Transition.toString({...h,property:Pv})}}function d1(r,e){var t,s;return typeof r=="boolean"?{draggable:r,droppable:!1}:{draggable:(t=r==null?void 0:r.draggable)!=null?t:e.draggable,droppable:(s=r==null?void 0:r.droppable)!=null?s:e.droppable}}vt.Down,vt.Right,vt.Up,vt.Left;const Sg=r=>r,h1=()=>{let r=Sg;return{configure(e){r=e},generate(e){return r(e)},reset(){r=Sg}}},p1=h1();function xs(r,...e){const t=new URL(`https://mui.com/production-error/?code=${r}`);return e.forEach(s=>t.searchParams.append("args[]",s)),`Minified MUI error #${r}; visit ${t} for the full message.`}function So(r){if(typeof r!="string")throw new Error(xs(7));return r.charAt(0).toUpperCase()+r.slice(1)}function Lv(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=Lv(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function m1(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=Lv(r))&&(s&&(s+=" "),s+=e);return s}function g1(r,e,t=void 0){const s={};for(const o in r){const l=r[o];let f="",u=!0;for(let d=0;d<l.length;d+=1){const h=l[d];h&&(f+=(u===!0?"":" ")+e(h),u=!1,t&&t[h]&&(f+=" "+t[h]))}s[o]=f}return s}var Qf={exports:{}},wt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function v1(){if(wg)return wt;wg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.view_transition"),S=Symbol.for("react.client.reference");function M(v){if(typeof v=="object"&&v!==null){var y=v.$$typeof;switch(y){case r:switch(v=v.type,v){case t:case o:case s:case d:case h:case _:return v;default:switch(v=v&&v.$$typeof,v){case f:case u:case g:case m:return v;case l:return v;default:return y}}case e:return y}}}return wt.ContextConsumer=l,wt.ContextProvider=f,wt.Element=r,wt.ForwardRef=u,wt.Fragment=t,wt.Lazy=g,wt.Memo=m,wt.Portal=e,wt.Profiler=o,wt.StrictMode=s,wt.Suspense=d,wt.SuspenseList=h,wt.isContextConsumer=function(v){return M(v)===l},wt.isContextProvider=function(v){return M(v)===f},wt.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===r},wt.isForwardRef=function(v){return M(v)===u},wt.isFragment=function(v){return M(v)===t},wt.isLazy=function(v){return M(v)===g},wt.isMemo=function(v){return M(v)===m},wt.isPortal=function(v){return M(v)===e},wt.isProfiler=function(v){return M(v)===o},wt.isStrictMode=function(v){return M(v)===s},wt.isSuspense=function(v){return M(v)===d},wt.isSuspenseList=function(v){return M(v)===h},wt.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===t||v===o||v===s||v===d||v===h||typeof v=="object"&&v!==null&&(v.$$typeof===g||v.$$typeof===m||v.$$typeof===f||v.$$typeof===l||v.$$typeof===u||v.$$typeof===S||v.getModuleId!==void 0)},wt.typeOf=M,wt}var Mg;function _1(){return Mg||(Mg=1,Qf.exports=v1()),Qf.exports}var Dv=_1();function li(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}function Iv(r){if(ee.isValidElement(r)||Dv.isValidElementType(r)||!li(r))return r;const e={};return Object.keys(r).forEach(t=>{e[t]=Iv(r[t])}),e}function er(r,e,t={clone:!0}){const s=t.clone?{...r}:r;return li(r)&&li(e)&&Object.keys(e).forEach(o=>{ee.isValidElement(e[o])||Dv.isValidElementType(e[o])?s[o]=e[o]:li(e[o])&&Object.prototype.hasOwnProperty.call(r,o)&&li(r[o])?s[o]=er(r[o],e[o],t):t.clone?s[o]=li(e[o])?Iv(e[o]):e[o]:s[o]=e[o]}),s}function Ra(r,e){return e?er(r,e,{clone:!1}):r}function x1(r,e){if(!r.containerQueries)return e;const t=Object.keys(e).filter(s=>s.startsWith("@container")).sort((s,o)=>{var f,u;const l=/min-width:\s*([0-9.]+)/;return+(((f=s.match(l))==null?void 0:f[1])||0)-+(((u=o.match(l))==null?void 0:u[1])||0)});return t.length?t.reduce((s,o)=>{const l=e[o];return delete s[o],s[o]=l,s},{...e}):e}function y1(r,e){return e==="@"||e.startsWith("@")&&(r.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function S1(r,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t)return null;const[,s,o]=t,l=Number.isNaN(+s)?s||0:+s;return r.containerQueries(o).up(l)}function w1(r){const e=(l,f)=>l.replace("@media",f?`@container ${f}`:"@container");function t(l,f){l.up=(...u)=>e(r.breakpoints.up(...u),f),l.down=(...u)=>e(r.breakpoints.down(...u),f),l.between=(...u)=>e(r.breakpoints.between(...u),f),l.only=(...u)=>e(r.breakpoints.only(...u),f),l.not=(...u)=>{const d=e(r.breakpoints.not(...u),f);return d.includes("not all and")?d.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):d}}const s={},o=l=>(t(s,l),s);return t(o),{...r,containerQueries:o}}const Gu={xs:0,sm:600,md:900,lg:1200,xl:1536},bg={keys:["xs","sm","md","lg","xl"],up:r=>`@media (min-width:${Gu[r]}px)`},M1={containerQueries:r=>({up:e=>{let t=typeof e=="number"?e:Gu[e]||e;return typeof t=="number"&&(t=`${t}px`),r?`@container ${r} (min-width:${t})`:`@container (min-width:${t})`}})};function di(r,e,t){const s=r.theme||{};if(Array.isArray(e)){const l=s.breakpoints||bg;return e.reduce((f,u,d)=>(f[l.up(l.keys[d])]=t(e[d]),f),{})}if(typeof e=="object"){const l=s.breakpoints||bg;return Object.keys(e).reduce((f,u)=>{if(y1(l.keys,u)){const d=S1(s.containerQueries?s:M1,u);d&&(f[d]=t(e[u],u))}else if(Object.keys(l.values||Gu).includes(u)){const d=l.up(u);f[d]=t(e[u],u)}else{const d=u;f[d]=e[d]}return f},{})}return t(e)}function b1(r={}){var t;return((t=r.keys)==null?void 0:t.reduce((s,o)=>{const l=r.up(o);return s[l]={},s},{}))||{}}function E1(r,e){return r.reduce((t,s)=>{const o=t[s];return(!o||Object.keys(o).length===0)&&delete t[s],t},e)}function Wu(r,e,t=!0){if(!e||typeof e!="string")return null;if(r&&r.vars&&t){const s=`vars.${e}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,r);if(s!=null)return s}return e.split(".").reduce((s,o)=>s&&s[o]!=null?s[o]:null,r)}function zu(r,e,t,s=t){let o;return typeof r=="function"?o=r(t):Array.isArray(r)?o=r[t]||s:o=Wu(r,t)||s,e&&(o=e(o,s,r)),o}function Xt(r){const{prop:e,cssProperty:t=r.prop,themeKey:s,transform:o}=r,l=f=>{if(f[e]==null)return null;const u=f[e],d=f.theme,h=Wu(d,s)||{};return di(f,u,g=>{let _=zu(h,o,g);return g===_&&typeof g=="string"&&(_=zu(h,o,`${e}${g==="default"?"":So(g)}`,g)),t===!1?_:{[t]:_}})};return l.propTypes={},l.filterProps=[e],l}function C1(r){const e={};return t=>(e[t]===void 0&&(e[t]=r(t)),e[t])}const T1={m:"margin",p:"padding"},A1={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Eg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},R1=C1(r=>{if(r.length>2)if(Eg[r])r=Eg[r];else return[r];const[e,t]=r.split(""),s=T1[e],o=A1[t]||"";return Array.isArray(o)?o.map(l=>s+l):[s+o]}),dh=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],hh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...dh,...hh];function Va(r,e,t,s){const o=Wu(r,e,!0)??t;return typeof o=="number"||typeof o=="string"?l=>typeof l=="string"?l:typeof o=="string"?o.startsWith("var(")&&l===0?0:o.startsWith("var(")&&l===1?o:`calc(${l} * ${o})`:o*l:Array.isArray(o)?l=>{if(typeof l=="string")return l;const f=Math.abs(l),u=o[f];return l>=0?u:typeof u=="number"?-u:typeof u=="string"&&u.startsWith("var(")?`calc(-1 * ${u})`:`-${u}`}:typeof o=="function"?o:()=>{}}function ph(r){return Va(r,"spacing",8)}function Ga(r,e){return typeof e=="string"||e==null?e:r(e)}function P1(r,e){return t=>r.reduce((s,o)=>(s[o]=Ga(e,t),s),{})}function L1(r,e,t,s){if(!e.includes(t))return null;const o=R1(t),l=P1(o,s),f=r[t];return di(r,f,l)}function kv(r,e){const t=ph(r.theme);return Object.keys(r).map(s=>L1(r,e,s,t)).reduce(Ra,{})}function Ht(r){return kv(r,dh)}Ht.propTypes={};Ht.filterProps=dh;function $t(r){return kv(r,hh)}$t.propTypes={};$t.filterProps=hh;function Hu(...r){const e=r.reduce((s,o)=>(o.filterProps.forEach(l=>{s[l]=o}),s),{}),t=s=>Object.keys(s).reduce((o,l)=>e[l]?Ra(o,e[l](s)):o,{});return t.propTypes={},t.filterProps=r.reduce((s,o)=>s.concat(o.filterProps),[]),t}function fr(r){return typeof r!="number"?r:`${r}px solid`}function gr(r,e){return Xt({prop:r,themeKey:"borders",transform:e})}const D1=gr("border",fr),I1=gr("borderTop",fr),k1=gr("borderRight",fr),N1=gr("borderBottom",fr),z1=gr("borderLeft",fr),F1=gr("borderColor"),O1=gr("borderTopColor"),U1=gr("borderRightColor"),B1=gr("borderBottomColor"),V1=gr("borderLeftColor"),G1=gr("outline",fr),W1=gr("outlineColor"),$u=r=>{if(r.borderRadius!==void 0&&r.borderRadius!==null){const e=Va(r.theme,"shape.borderRadius",4),t=s=>({borderRadius:Ga(e,s)});return di(r,r.borderRadius,t)}return null};$u.propTypes={};$u.filterProps=["borderRadius"];Hu(D1,I1,k1,N1,z1,F1,O1,U1,B1,V1,$u,G1,W1);const ju=r=>{if(r.gap!==void 0&&r.gap!==null){const e=Va(r.theme,"spacing",8),t=s=>({gap:Ga(e,s)});return di(r,r.gap,t)}return null};ju.propTypes={};ju.filterProps=["gap"];const qu=r=>{if(r.columnGap!==void 0&&r.columnGap!==null){const e=Va(r.theme,"spacing",8),t=s=>({columnGap:Ga(e,s)});return di(r,r.columnGap,t)}return null};qu.propTypes={};qu.filterProps=["columnGap"];const Xu=r=>{if(r.rowGap!==void 0&&r.rowGap!==null){const e=Va(r.theme,"spacing",8),t=s=>({rowGap:Ga(e,s)});return di(r,r.rowGap,t)}return null};Xu.propTypes={};Xu.filterProps=["rowGap"];const H1=Xt({prop:"gridColumn"}),$1=Xt({prop:"gridRow"}),j1=Xt({prop:"gridAutoFlow"}),q1=Xt({prop:"gridAutoColumns"}),X1=Xt({prop:"gridAutoRows"}),Y1=Xt({prop:"gridTemplateColumns"}),K1=Xt({prop:"gridTemplateRows"}),Z1=Xt({prop:"gridTemplateAreas"}),Q1=Xt({prop:"gridArea"});Hu(ju,qu,Xu,H1,$1,j1,q1,X1,Y1,K1,Z1,Q1);function mo(r,e){return e==="grey"?e:r}const J1=Xt({prop:"color",themeKey:"palette",transform:mo}),ew=Xt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:mo}),tw=Xt({prop:"backgroundColor",themeKey:"palette",transform:mo});Hu(J1,ew,tw);function Jn(r){return r<=1&&r!==0?`${r*100}%`:r}const nw=Xt({prop:"width",transform:Jn}),mh=r=>{if(r.maxWidth!==void 0&&r.maxWidth!==null){const e=t=>{var o,l,f,u,d;const s=((f=(l=(o=r.theme)==null?void 0:o.breakpoints)==null?void 0:l.values)==null?void 0:f[t])||Gu[t];return s?((d=(u=r.theme)==null?void 0:u.breakpoints)==null?void 0:d.unit)!=="px"?{maxWidth:`${s}${r.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:Jn(t)}};return di(r,r.maxWidth,e)}return null};mh.filterProps=["maxWidth"];const rw=Xt({prop:"minWidth",transform:Jn}),iw=Xt({prop:"height",transform:Jn}),sw=Xt({prop:"maxHeight",transform:Jn}),ow=Xt({prop:"minHeight",transform:Jn});Xt({prop:"size",cssProperty:"width",transform:Jn});Xt({prop:"size",cssProperty:"height",transform:Jn});const aw=Xt({prop:"boxSizing"});Hu(nw,mh,rw,iw,sw,ow,aw);const Yu={border:{themeKey:"borders",transform:fr},borderTop:{themeKey:"borders",transform:fr},borderRight:{themeKey:"borders",transform:fr},borderBottom:{themeKey:"borders",transform:fr},borderLeft:{themeKey:"borders",transform:fr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:fr},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:$u},color:{themeKey:"palette",transform:mo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:mo},backgroundColor:{themeKey:"palette",transform:mo},p:{style:$t},pt:{style:$t},pr:{style:$t},pb:{style:$t},pl:{style:$t},px:{style:$t},py:{style:$t},padding:{style:$t},paddingTop:{style:$t},paddingRight:{style:$t},paddingBottom:{style:$t},paddingLeft:{style:$t},paddingX:{style:$t},paddingY:{style:$t},paddingInline:{style:$t},paddingInlineStart:{style:$t},paddingInlineEnd:{style:$t},paddingBlock:{style:$t},paddingBlockStart:{style:$t},paddingBlockEnd:{style:$t},m:{style:Ht},mt:{style:Ht},mr:{style:Ht},mb:{style:Ht},ml:{style:Ht},mx:{style:Ht},my:{style:Ht},margin:{style:Ht},marginTop:{style:Ht},marginRight:{style:Ht},marginBottom:{style:Ht},marginLeft:{style:Ht},marginX:{style:Ht},marginY:{style:Ht},marginInline:{style:Ht},marginInlineStart:{style:Ht},marginInlineEnd:{style:Ht},marginBlock:{style:Ht},marginBlockStart:{style:Ht},marginBlockEnd:{style:Ht},displayPrint:{cssProperty:!1,transform:r=>({"@media print":{display:r}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ju},rowGap:{style:Xu},columnGap:{style:qu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Jn},maxWidth:{style:mh},minWidth:{transform:Jn},height:{transform:Jn},maxHeight:{transform:Jn},minHeight:{transform:Jn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function lw(...r){const e=r.reduce((s,o)=>s.concat(Object.keys(o)),[]),t=new Set(e);return r.every(s=>t.size===Object.keys(s).length)}function uw(r,e){return typeof r=="function"?r(e):r}function cw(){function r(t,s,o,l){const f={[t]:s,theme:o},u=l[t];if(!u)return{[t]:s};const{cssProperty:d=t,themeKey:h,transform:m,style:g}=u;if(s==null)return null;if(h==="typography"&&s==="inherit")return{[t]:s};const _=Wu(o,h)||{};return g?g(f):di(f,s,M=>{let v=zu(_,m,M);return M===v&&typeof M=="string"&&(v=zu(_,m,`${t}${M==="default"?"":So(M)}`,M)),d===!1?v:{[d]:v}})}function e(t){const{sx:s,theme:o={}}=t||{};if(!s)return null;const l=o.unstable_sxConfig??Yu;function f(u){let d=u;if(typeof u=="function")d=u(o);else if(typeof u!="object")return u;if(!d)return null;const h=b1(o.breakpoints),m=Object.keys(h);let g=h;return Object.keys(d).forEach(_=>{const S=uw(d[_],o);if(S!=null)if(typeof S=="object")if(l[_])g=Ra(g,r(_,S,o,l));else{const M=di({theme:o},S,v=>({[_]:v}));lw(M,S)?g[_]=e({sx:S,theme:o}):g=Ra(g,M)}else g=Ra(g,r(_,S,o,l))}),x1(o,E1(m,g))}return Array.isArray(s)?s.map(f):f(s)}return e}const wo=cw();wo.filterProps=["sx"];function Vd(){return Vd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Vd.apply(null,arguments)}function fw(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function dw(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var hw=function(){function r(t){var s=this;this._insertTag=function(o){var l;s.tags.length===0?s.insertionPoint?l=s.insertionPoint.nextSibling:s.prepend?l=s.container.firstChild:l=s.before:l=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(o,l),s.tags.push(o)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(s){s.forEach(this._insertTag)},e.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dw(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=fw(o);try{l.insertRule(s,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(s));this.ctr++},e.flush=function(){this.tags.forEach(function(s){var o;return(o=s.parentNode)==null?void 0:o.removeChild(s)}),this.tags=[],this.ctr=0},r}(),Mn="-ms-",Fu="-moz-",mt="-webkit-",Nv="comm",gh="rule",vh="decl",pw="@import",zv="@keyframes",mw="@layer",gw=Math.abs,Ku=String.fromCharCode,vw=Object.assign;function _w(r,e){return mn(r,0)^45?(((e<<2^mn(r,0))<<2^mn(r,1))<<2^mn(r,2))<<2^mn(r,3):0}function Fv(r){return r.trim()}function xw(r,e){return(r=e.exec(r))?r[0]:r}function gt(r,e,t){return r.replace(e,t)}function Gd(r,e){return r.indexOf(e)}function mn(r,e){return r.charCodeAt(e)|0}function Ia(r,e,t){return r.slice(e,t)}function Ur(r){return r.length}function _h(r){return r.length}function eu(r,e){return e.push(r),r}function yw(r,e){return r.map(e).join("")}var Zu=1,Mo=1,Ov=0,Bn=0,Jt=0,Do="";function Qu(r,e,t,s,o,l,f){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:Zu,column:Mo,length:f,return:""}}function ga(r,e){return vw(Qu("",null,null,"",null,null,0),r,{length:-r.length},e)}function Sw(){return Jt}function ww(){return Jt=Bn>0?mn(Do,--Bn):0,Mo--,Jt===10&&(Mo=1,Zu--),Jt}function tr(){return Jt=Bn<Ov?mn(Do,Bn++):0,Mo++,Jt===10&&(Mo=1,Zu++),Jt}function Wr(){return mn(Do,Bn)}function Cu(){return Bn}function Wa(r,e){return Ia(Do,r,e)}function ka(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uv(r){return Zu=Mo=1,Ov=Ur(Do=r),Bn=0,[]}function Bv(r){return Do="",r}function Tu(r){return Fv(Wa(Bn-1,Wd(r===91?r+2:r===40?r+1:r)))}function Mw(r){for(;(Jt=Wr())&&Jt<33;)tr();return ka(r)>2||ka(Jt)>3?"":" "}function bw(r,e){for(;--e&&tr()&&!(Jt<48||Jt>102||Jt>57&&Jt<65||Jt>70&&Jt<97););return Wa(r,Cu()+(e<6&&Wr()==32&&tr()==32))}function Wd(r){for(;tr();)switch(Jt){case r:return Bn;case 34:case 39:r!==34&&r!==39&&Wd(Jt);break;case 40:r===41&&Wd(r);break;case 92:tr();break}return Bn}function Ew(r,e){for(;tr()&&r+Jt!==57;)if(r+Jt===84&&Wr()===47)break;return"/*"+Wa(e,Bn-1)+"*"+Ku(r===47?r:tr())}function Cw(r){for(;!ka(Wr());)tr();return Wa(r,Bn)}function Tw(r){return Bv(Au("",null,null,null,[""],r=Uv(r),0,[0],r))}function Au(r,e,t,s,o,l,f,u,d){for(var h=0,m=0,g=f,_=0,S=0,M=0,v=1,y=1,E=1,R=0,L="",T=o,A=l,I=s,O=L;y;)switch(M=R,R=tr()){case 40:if(M!=108&&mn(O,g-1)==58){Gd(O+=gt(Tu(R),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:O+=Tu(R);break;case 9:case 10:case 13:case 32:O+=Mw(M);break;case 92:O+=bw(Cu()-1,7);continue;case 47:switch(Wr()){case 42:case 47:eu(Aw(Ew(tr(),Cu()),e,t),d);break;default:O+="/"}break;case 123*v:u[h++]=Ur(O)*E;case 125*v:case 59:case 0:switch(R){case 0:case 125:y=0;case 59+m:E==-1&&(O=gt(O,/\f/g,"")),S>0&&Ur(O)-g&&eu(S>32?Tg(O+";",s,t,g-1):Tg(gt(O," ","")+";",s,t,g-2),d);break;case 59:O+=";";default:if(eu(I=Cg(O,e,t,h,m,o,u,L,T=[],A=[],g),l),R===123)if(m===0)Au(O,e,I,I,T,l,g,u,A);else switch(_===99&&mn(O,3)===110?100:_){case 100:case 108:case 109:case 115:Au(r,I,I,s&&eu(Cg(r,I,I,0,0,o,u,L,o,T=[],g),A),o,A,g,u,s?T:A);break;default:Au(O,I,I,I,[""],A,0,u,A)}}h=m=S=0,v=E=1,L=O="",g=f;break;case 58:g=1+Ur(O),S=M;default:if(v<1){if(R==123)--v;else if(R==125&&v++==0&&ww()==125)continue}switch(O+=Ku(R),R*v){case 38:E=m>0?1:(O+="\f",-1);break;case 44:u[h++]=(Ur(O)-1)*E,E=1;break;case 64:Wr()===45&&(O+=Tu(tr())),_=Wr(),m=g=Ur(L=O+=Cw(Cu())),R++;break;case 45:M===45&&Ur(O)==2&&(v=0)}}return l}function Cg(r,e,t,s,o,l,f,u,d,h,m){for(var g=o-1,_=o===0?l:[""],S=_h(_),M=0,v=0,y=0;M<s;++M)for(var E=0,R=Ia(r,g+1,g=gw(v=f[M])),L=r;E<S;++E)(L=Fv(v>0?_[E]+" "+R:gt(R,/&\f/g,_[E])))&&(d[y++]=L);return Qu(r,e,t,o===0?gh:u,d,h,m)}function Aw(r,e,t){return Qu(r,e,t,Nv,Ku(Sw()),Ia(r,2,-2),0)}function Tg(r,e,t,s){return Qu(r,e,t,vh,Ia(r,0,s),Ia(r,s+1,-1),s)}function go(r,e){for(var t="",s=_h(r),o=0;o<s;o++)t+=e(r[o],o,r,e)||"";return t}function Rw(r,e,t,s){switch(r.type){case mw:if(r.children.length)break;case pw:case vh:return r.return=r.return||r.value;case Nv:return"";case zv:return r.return=r.value+"{"+go(r.children,s)+"}";case gh:r.value=r.props.join(",")}return Ur(t=go(r.children,s))?r.return=r.value+"{"+t+"}":""}function Pw(r){var e=_h(r);return function(t,s,o,l){for(var f="",u=0;u<e;u++)f+=r[u](t,s,o,l)||"";return f}}function Lw(r){return function(e){e.root||(e=e.return)&&r(e)}}function Vv(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var Dw=function(e,t,s){for(var o=0,l=0;o=l,l=Wr(),o===38&&l===12&&(t[s]=1),!ka(l);)tr();return Wa(e,Bn)},Iw=function(e,t){var s=-1,o=44;do switch(ka(o)){case 0:o===38&&Wr()===12&&(t[s]=1),e[s]+=Dw(Bn-1,t,s);break;case 2:e[s]+=Tu(o);break;case 4:if(o===44){e[++s]=Wr()===58?"&\f":"",t[s]=e[s].length;break}default:e[s]+=Ku(o)}while(o=tr());return e},kw=function(e,t){return Bv(Iw(Uv(e),t))},Ag=new WeakMap,Nw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,s=e.parent,o=e.column===s.column&&e.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Ag.get(s))&&!o){Ag.set(e,!0);for(var l=[],f=kw(t,l),u=s.props,d=0,h=0;d<f.length;d++)for(var m=0;m<u.length;m++,h++)e.props[h]=l[d]?f[d].replace(/&\f/g,u[m]):u[m]+" "+f[d]}}},zw=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function Gv(r,e){switch(_w(r,e)){case 5103:return mt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+r+Fu+r+Mn+r+r;case 6828:case 4268:return mt+r+Mn+r+r;case 6165:return mt+r+Mn+"flex-"+r+r;case 5187:return mt+r+gt(r,/(\w+).+(:[^]+)/,mt+"box-$1$2"+Mn+"flex-$1$2")+r;case 5443:return mt+r+Mn+"flex-item-"+gt(r,/flex-|-self/,"")+r;case 4675:return mt+r+Mn+"flex-line-pack"+gt(r,/align-content|flex-|-self/,"")+r;case 5548:return mt+r+Mn+gt(r,"shrink","negative")+r;case 5292:return mt+r+Mn+gt(r,"basis","preferred-size")+r;case 6060:return mt+"box-"+gt(r,"-grow","")+mt+r+Mn+gt(r,"grow","positive")+r;case 4554:return mt+gt(r,/([^-])(transform)/g,"$1"+mt+"$2")+r;case 6187:return gt(gt(gt(r,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),r,"")+r;case 5495:case 3959:return gt(r,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return gt(gt(r,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+Mn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+r+r;case 4095:case 3583:case 4068:case 2532:return gt(r,/(.+)-inline(.+)/,mt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ur(r)-1-e>6)switch(mn(r,e+1)){case 109:if(mn(r,e+4)!==45)break;case 102:return gt(r,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+Fu+(mn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Gd(r,"stretch")?Gv(gt(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(mn(r,e+1)!==115)break;case 6444:switch(mn(r,Ur(r)-3-(~Gd(r,"!important")&&10))){case 107:return gt(r,":",":"+mt)+r;case 101:return gt(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+mt+(mn(r,14)===45?"inline-":"")+"box$3$1"+mt+"$2$3$1"+Mn+"$2box$3")+r}break;case 5936:switch(mn(r,e+11)){case 114:return mt+r+Mn+gt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return mt+r+Mn+gt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return mt+r+Mn+gt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return mt+r+Mn+r+r}return r}var Fw=function(e,t,s,o){if(e.length>-1&&!e.return)switch(e.type){case vh:e.return=Gv(e.value,e.length);break;case zv:return go([ga(e,{value:gt(e.value,"@","@"+mt)})],o);case gh:if(e.length)return yw(e.props,function(l){switch(xw(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return go([ga(e,{props:[gt(l,/:(read-\w+)/,":"+Fu+"$1")]})],o);case"::placeholder":return go([ga(e,{props:[gt(l,/:(plac\w+)/,":"+mt+"input-$1")]}),ga(e,{props:[gt(l,/:(plac\w+)/,":"+Fu+"$1")]}),ga(e,{props:[gt(l,/:(plac\w+)/,Mn+"input-$1")]})],o)}return""})}},Ow=[Fw],Uw=function(e){var t=e.key;if(t==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(v){var y=v.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=e.stylisPlugins||Ow,l={},f,u=[];f=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var y=v.getAttribute("data-emotion").split(" "),E=1;E<y.length;E++)l[y[E]]=!0;u.push(v)});var d,h=[Nw,zw];{var m,g=[Rw,Lw(function(v){m.insert(v)})],_=Pw(h.concat(o,g)),S=function(y){return go(Tw(y),_)};d=function(y,E,R,L){m=R,S(y?y+"{"+E.styles+"}":E.styles),L&&(M.inserted[E.name]=!0)}}var M={key:t,sheet:new hw({key:t,container:f,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:d};return M.sheet.hydrate(u),M},Bw=!0;function Vw(r,e,t){var s="";return t.split(" ").forEach(function(o){r[o]!==void 0?e.push(r[o]+";"):o&&(s+=o+" ")}),s}var Wv=function(e,t,s){var o=e.key+"-"+t.name;(s===!1||Bw===!1)&&e.registered[o]===void 0&&(e.registered[o]=t.styles)},Gw=function(e,t,s){Wv(e,t,s);var o=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var l=t;do e.insert(t===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Ww(r){for(var e=0,t,s=0,o=r.length;o>=4;++s,o-=4)t=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(s+2)&255)<<16;case 2:e^=(r.charCodeAt(s+1)&255)<<8;case 1:e^=r.charCodeAt(s)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Hw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$w=/[A-Z]|^ms/g,jw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Hv=function(e){return e.charCodeAt(1)===45},Rg=function(e){return e!=null&&typeof e!="boolean"},Jf=Vv(function(r){return Hv(r)?r:r.replace($w,"-$&").toLowerCase()}),Pg=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(jw,function(s,o,l){return Br={name:o,styles:l,next:Br},o})}return Hw[e]!==1&&!Hv(e)&&typeof t=="number"&&t!==0?t+"px":t};function Na(r,e,t){if(t==null)return"";var s=t;if(s.__emotion_styles!==void 0)return s;switch(typeof t){case"boolean":return"";case"object":{var o=t;if(o.anim===1)return Br={name:o.name,styles:o.styles,next:Br},o.name;var l=t;if(l.styles!==void 0){var f=l.next;if(f!==void 0)for(;f!==void 0;)Br={name:f.name,styles:f.styles,next:Br},f=f.next;var u=l.styles+";";return u}return qw(r,e,t)}case"function":{if(r!==void 0){var d=Br,h=t(r);return Br=d,Na(r,e,h)}break}}var m=t;if(e==null)return m;var g=e[m];return g!==void 0?g:m}function qw(r,e,t){var s="";if(Array.isArray(t))for(var o=0;o<t.length;o++)s+=Na(r,e,t[o])+";";else for(var l in t){var f=t[l];if(typeof f!="object"){var u=f;e!=null&&e[u]!==void 0?s+=l+"{"+e[u]+"}":Rg(u)&&(s+=Jf(l)+":"+Pg(l,u)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(e==null||e[f[0]]===void 0))for(var d=0;d<f.length;d++)Rg(f[d])&&(s+=Jf(l)+":"+Pg(l,f[d])+";");else{var h=Na(r,e,f);switch(l){case"animation":case"animationName":{s+=Jf(l)+":"+h+";";break}default:s+=l+"{"+h+"}"}}}return s}var Lg=/label:\s*([^\s;{]+)\s*(;|$)/g,Br;function $v(r,e,t){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,o="";Br=void 0;var l=r[0];if(l==null||l.raw===void 0)s=!1,o+=Na(t,e,l);else{var f=l;o+=f[0]}for(var u=1;u<r.length;u++)if(o+=Na(t,e,r[u]),s){var d=l;o+=d[u]}Lg.lastIndex=0;for(var h="",m;(m=Lg.exec(o))!==null;)h+="-"+m[1];var g=Ww(o)+h;return{name:g,styles:o,next:Br}}var Xw=function(e){return e()},Yw=eg.useInsertionEffect?eg.useInsertionEffect:!1,Kw=Yw||Xw,jv=ee.createContext(typeof HTMLElement<"u"?Uw({key:"css"}):null);jv.Provider;var Zw=function(e){return ee.forwardRef(function(t,s){var o=ee.useContext(jv);return e(t,o,s)})},Qw=ee.createContext({}),Jw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,eM=Vv(function(r){return Jw.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),tM=eM,nM=function(e){return e!=="theme"},Dg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?tM:nM},Ig=function(e,t,s){var o;if(t){var l=t.shouldForwardProp;o=e.__emotion_forwardProp&&l?function(f){return e.__emotion_forwardProp(f)&&l(f)}:l}return typeof o!="function"&&s&&(o=e.__emotion_forwardProp),o},rM=function(e){var t=e.cache,s=e.serialized,o=e.isStringTag;return Wv(t,s,o),Kw(function(){return Gw(t,s,o)}),null},iM=function r(e,t){var s=e.__emotion_real===e,o=s&&e.__emotion_base||e,l,f;t!==void 0&&(l=t.label,f=t.target);var u=Ig(e,t,s),d=u||Dg(o),h=!d("as");return function(){var m=arguments,g=s&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&g.push("label:"+l+";"),m[0]==null||m[0].raw===void 0)g.push.apply(g,m);else{var _=m[0];g.push(_[0]);for(var S=m.length,M=1;M<S;M++)g.push(m[M],_[M])}var v=Zw(function(y,E,R){var L=h&&y.as||o,T="",A=[],I=y;if(y.theme==null){I={};for(var O in y)I[O]=y[O];I.theme=ee.useContext(Qw)}typeof y.className=="string"?T=Vw(E.registered,A,y.className):y.className!=null&&(T=y.className+" ");var C=$v(g.concat(A),E.registered,I);T+=E.key+"-"+C.name,f!==void 0&&(T+=" "+f);var F=h&&u===void 0?Dg(L):d,w={};for(var G in y)h&&G==="as"||F(G)&&(w[G]=y[G]);return w.className=T,R&&(w.ref=R),ee.createElement(ee.Fragment,null,ee.createElement(rM,{cache:E,serialized:C,isStringTag:typeof L=="string"}),ee.createElement(L,w))});return v.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=o,v.__emotion_styles=g,v.__emotion_forwardProp=u,Object.defineProperty(v,"toString",{value:function(){return"."+f}}),v.withComponent=function(y,E){var R=r(y,Vd({},t,E,{shouldForwardProp:Ig(v,E,!0)}));return R.apply(void 0,g)},v}},sM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Hd=iM.bind(null);sM.forEach(function(r){Hd[r]=Hd(r)});function oM(r,e){return Hd(r,e)}function aM(r,e){Array.isArray(r.__emotion_styles)&&(r.__emotion_styles=e(r.__emotion_styles))}const kg=[];function Ng(r){return kg[0]=r,$v(kg)}const lM=r=>{const e=Object.keys(r).map(t=>({key:t,val:r[t]}))||[];return e.sort((t,s)=>t.val-s.val),e.reduce((t,s)=>({...t,[s.key]:s.val}),{})};function uM(r){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:s=5,...o}=r,l=lM(e),f=Object.keys(l);function u(_){return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t})`}function d(_){return`@media (max-width:${(typeof e[_]=="number"?e[_]:_)-s/100}${t})`}function h(_,S){const M=f.indexOf(S);return`@media (min-width:${typeof e[_]=="number"?e[_]:_}${t}) and (max-width:${(M!==-1&&typeof e[f[M]]=="number"?e[f[M]]:S)-s/100}${t})`}function m(_){return f.indexOf(_)+1<f.length?h(_,f[f.indexOf(_)+1]):u(_)}function g(_){const S=f.indexOf(_);return S===0?u(f[1]):S===f.length-1?d(f[S]):h(_,f[f.indexOf(_)+1]).replace("@media","@media not all and")}return{keys:f,values:l,up:u,down:d,between:h,only:m,not:g,unit:t,...o}}const cM={borderRadius:4};function qv(r=8,e=ph({spacing:r})){if(r.mui)return r;const t=(...s)=>(s.length===0?[1]:s).map(l=>{const f=e(l);return typeof f=="number"?`${f}px`:f}).join(" ");return t.mui=!0,t}function fM(r,e){var s;const t=this;if(t.vars){if(!((s=t.colorSchemes)!=null&&s[r])||typeof t.getColorSchemeSelector!="function")return{};let o=t.getColorSchemeSelector(r);return o==="&"?e:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:e})}return t.palette.mode===r?e:{}}function Xv(r={},...e){const{breakpoints:t={},palette:s={},spacing:o,shape:l={},...f}=r,u=uM(t),d=qv(o);let h=er({breakpoints:u,direction:"ltr",components:{},palette:{mode:"light",...s},spacing:d,shape:{...cM,...l}},f);return h=w1(h),h.applyStyles=fM,h=e.reduce((m,g)=>er(m,g),h),h.unstable_sxConfig={...Yu,...f==null?void 0:f.unstable_sxConfig},h.unstable_sx=function(g){return wo({sx:g,theme:this})},h}const dM={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Yv(r,e,t="Mui"){const s=dM[e];return s?`${t}-${s}`:`${p1.generate(r)}-${e}`}function hM(r,e,t="Mui"){const s={};return e.forEach(o=>{s[o]=Yv(r,o,t)}),s}function Kv(r){const{variants:e,...t}=r,s={variants:e,style:Ng(t),isProcessed:!0};return s.style===t||e&&e.forEach(o=>{typeof o.style!="function"&&(o.style=Ng(o.style))}),s}const pM=Xv();function ed(r){return r!=="ownerState"&&r!=="theme"&&r!=="sx"&&r!=="as"}function mM(r){return r?(e,t)=>t[r]:null}function gM(r,e,t){r.theme=xM(r.theme)?t:r.theme[e]||r.theme}function Ru(r,e){const t=typeof e=="function"?e(r):e;if(Array.isArray(t))return t.flatMap(s=>Ru(r,s));if(Array.isArray(t==null?void 0:t.variants)){let s;if(t.isProcessed)s=t.style;else{const{variants:o,...l}=t;s=l}return Zv(r,t.variants,[s])}return t!=null&&t.isProcessed?t.style:t}function Zv(r,e,t=[]){var o;let s;e:for(let l=0;l<e.length;l+=1){const f=e[l];if(typeof f.props=="function"){if(s??(s={...r,...r.ownerState,ownerState:r.ownerState}),!f.props(s))continue}else for(const u in f.props)if(r[u]!==f.props[u]&&((o=r.ownerState)==null?void 0:o[u])!==f.props[u])continue e;typeof f.style=="function"?(s??(s={...r,...r.ownerState,ownerState:r.ownerState}),t.push(f.style(s))):t.push(f.style)}return t}function vM(r={}){const{themeId:e,defaultTheme:t=pM,rootShouldForwardProp:s=ed,slotShouldForwardProp:o=ed}=r;function l(u){gM(u,e,t)}return(u,d={})=>{aM(u,A=>A.filter(I=>I!==wo));const{name:h,slot:m,skipVariantsResolver:g,skipSx:_,overridesResolver:S=mM(SM(m)),...M}=d,v=g!==void 0?g:m&&m!=="Root"&&m!=="root"||!1,y=_||!1;let E=ed;m==="Root"||m==="root"?E=s:m?E=o:yM(u)&&(E=void 0);const R=oM(u,{shouldForwardProp:E,label:_M(),...M}),L=A=>{if(A.__emotion_real===A)return A;if(typeof A=="function")return function(O){return Ru(O,A)};if(li(A)){const I=Kv(A);return I.variants?function(C){return Ru(C,I)}:I.style}return A},T=(...A)=>{const I=[],O=A.map(L),C=[];if(I.push(l),h&&S&&C.push(function(ae){var he,le;const j=(le=(he=ae.theme.components)==null?void 0:he[h])==null?void 0:le.styleOverrides;if(!j)return null;const ie={};for(const $ in j)ie[$]=Ru(ae,j[$]);return S(ae,ie)}),h&&!v&&C.push(function(ae){var ie,he;const X=ae.theme,j=(he=(ie=X==null?void 0:X.components)==null?void 0:ie[h])==null?void 0:he.variants;return j?Zv(ae,j):null}),y||C.push(wo),Array.isArray(O[0])){const G=O.shift(),ae=new Array(I.length).fill(""),X=new Array(C.length).fill("");let j;j=[...ae,...G,...X],j.raw=[...ae,...G.raw,...X],I.unshift(j)}const F=[...I,...O,...C],w=R(...F);return u.muiName&&(w.muiName=u.muiName),w};return R.withConfig&&(T.withConfig=R.withConfig),T}}function _M(r,e){return void 0}function xM(r){for(const e in r)return!1;return!0}function yM(r){return typeof r=="string"&&r.charCodeAt(0)>96}function SM(r){return r&&r.charAt(0).toLowerCase()+r.slice(1)}function $d(r,e){const t={...e};for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s)){const o=s;if(o==="components"||o==="slots")t[o]={...r[o],...t[o]};else if(o==="componentsProps"||o==="slotProps"){const l=r[o],f=e[o];if(!f)t[o]=l||{};else if(!l)t[o]=f;else{t[o]={...f};for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u)){const d=u;t[o][d]=$d(l[d],f[d])}}}else t[o]===void 0&&(t[o]=r[o])}return t}function wM(r,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(r,t))}function xh(r,e=0,t=1){return wM(r,e,t)}function MM(r){r=r.slice(1);const e=new RegExp(`.{1,${r.length>=6?2:1}}`,"g");let t=r.match(e);return t&&t[0].length===1&&(t=t.map(s=>s+s)),t?`rgb${t.length===4?"a":""}(${t.map((s,o)=>o<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function ji(r){if(r.type)return r;if(r.charAt(0)==="#")return ji(MM(r));const e=r.indexOf("("),t=r.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(xs(9,r));let s=r.substring(e+1,r.length-1),o;if(t==="color"){if(s=s.split(" "),o=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(xs(10,o))}else s=s.split(",");return s=s.map(l=>parseFloat(l)),{type:t,values:s,colorSpace:o}}const bM=r=>{const e=ji(r);return e.values.slice(0,3).map((t,s)=>e.type.includes("hsl")&&s!==0?`${t}%`:t).join(" ")},wa=(r,e)=>{try{return bM(r)}catch{return r}};function Ju(r){const{type:e,colorSpace:t}=r;let{values:s}=r;return e.includes("rgb")?s=s.map((o,l)=>l<3?parseInt(o,10):o):e.includes("hsl")&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),e.includes("color")?s=`${t} ${s.join(" ")}`:s=`${s.join(", ")}`,`${e}(${s})`}function Qv(r){r=ji(r);const{values:e}=r,t=e[0],s=e[1]/100,o=e[2]/100,l=s*Math.min(o,1-o),f=(h,m=(h+t/30)%12)=>o-l*Math.max(Math.min(m-3,9-m,1),-1);let u="rgb";const d=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return r.type==="hsla"&&(u+="a",d.push(e[3])),Ju({type:u,values:d})}function jd(r){r=ji(r);let e=r.type==="hsl"||r.type==="hsla"?ji(Qv(r)).values:r.values;return e=e.map(t=>(r.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function EM(r,e){const t=jd(r),s=jd(e);return(Math.max(t,s)+.05)/(Math.min(t,s)+.05)}function CM(r,e){return r=ji(r),e=xh(e),(r.type==="rgb"||r.type==="hsl")&&(r.type+="a"),r.type==="color"?r.values[3]=`/${e}`:r.values[3]=e,Ju(r)}function tu(r,e,t){try{return CM(r,e)}catch{return r}}function yh(r,e){if(r=ji(r),e=xh(e),r.type.includes("hsl"))r.values[2]*=1-e;else if(r.type.includes("rgb")||r.type.includes("color"))for(let t=0;t<3;t+=1)r.values[t]*=1-e;return Ju(r)}function bt(r,e,t){try{return yh(r,e)}catch{return r}}function Sh(r,e){if(r=ji(r),e=xh(e),r.type.includes("hsl"))r.values[2]+=(100-r.values[2])*e;else if(r.type.includes("rgb"))for(let t=0;t<3;t+=1)r.values[t]+=(255-r.values[t])*e;else if(r.type.includes("color"))for(let t=0;t<3;t+=1)r.values[t]+=(1-r.values[t])*e;return Ju(r)}function Et(r,e,t){try{return Sh(r,e)}catch{return r}}function TM(r,e=.15){return jd(r)>.5?yh(r,e):Sh(r,e)}function nu(r,e,t){try{return TM(r,e)}catch{return r}}const AM=ee.createContext(void 0);function RM(r){const{theme:e,name:t,props:s}=r;if(!e||!e.components||!e.components[t])return s;const o=e.components[t];return o.defaultProps?$d(o.defaultProps,s):!o.styleOverrides&&!o.variants?$d(o,s):s}function PM({props:r,name:e}){const t=ee.useContext(AM);return RM({props:r,name:e,theme:{components:t}})}const zg={theme:void 0};function LM(r){let e,t;return function(o){let l=e;return(l===void 0||o.theme!==t)&&(zg.theme=o.theme,l=Kv(r(zg)),e=l,t=o.theme),l}}function DM(r=""){function e(...s){if(!s.length)return"";const o=s[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${r?`${r}-`:""}${o}${e(...s.slice(1))})`:`, ${o}`}return(s,...o)=>`var(--${r?`${r}-`:""}${s}${e(...o)})`}const Fg=(r,e,t,s=[])=>{let o=r;e.forEach((l,f)=>{f===e.length-1?Array.isArray(o)?o[Number(l)]=t:o&&typeof o=="object"&&(o[l]=t):o&&typeof o=="object"&&(o[l]||(o[l]=s.includes(l)?[]:{}),o=o[l])})},IM=(r,e,t)=>{function s(o,l=[],f=[]){Object.entries(o).forEach(([u,d])=>{(!t||t&&!t([...l,u]))&&d!=null&&(typeof d=="object"&&Object.keys(d).length>0?s(d,[...l,u],Array.isArray(d)?[...f,u]:f):e([...l,u],d,f))})}s(r)},kM=(r,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(s=>r.includes(s))||r[r.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function td(r,e){const{prefix:t,shouldSkipGeneratingVar:s}=e||{},o={},l={},f={};return IM(r,(u,d,h)=>{if((typeof d=="string"||typeof d=="number")&&(!s||!s(u,d))){const m=`--${t?`${t}-`:""}${u.join("-")}`,g=kM(u,d);Object.assign(o,{[m]:g}),Fg(l,u,`var(${m})`,h),Fg(f,u,`var(${m}, ${g})`,h)}},u=>u[0]==="vars"),{css:o,vars:l,varsWithDefaults:f}}function NM(r,e={}){const{getSelector:t=y,disableCssColorScheme:s,colorSchemeSelector:o}=e,{colorSchemes:l={},components:f,defaultColorScheme:u="light",...d}=r,{vars:h,css:m,varsWithDefaults:g}=td(d,e);let _=g;const S={},{[u]:M,...v}=l;if(Object.entries(v||{}).forEach(([L,T])=>{const{vars:A,css:I,varsWithDefaults:O}=td(T,e);_=er(_,O),S[L]={css:I,vars:A}}),M){const{css:L,vars:T,varsWithDefaults:A}=td(M,e);_=er(_,A),S[u]={css:L,vars:T}}function y(L,T){var I,O;let A=o;if(o==="class"&&(A=".%s"),o==="data"&&(A="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(A=`[${o}="%s"]`),L){if(A==="media")return r.defaultColorScheme===L?":root":{[`@media (prefers-color-scheme: ${((O=(I=l[L])==null?void 0:I.palette)==null?void 0:O.mode)||L})`]:{":root":T}};if(A)return r.defaultColorScheme===L?`:root, ${A.replace("%s",String(L))}`:A.replace("%s",String(L))}return":root"}return{vars:_,generateThemeVars:()=>{let L={...h};return Object.entries(S).forEach(([,{vars:T}])=>{L=er(L,T)}),L},generateStyleSheets:()=>{var C,F;const L=[],T=r.defaultColorScheme||"light";function A(w,G){Object.keys(G).length&&L.push(typeof w=="string"?{[w]:{...G}}:w)}A(t(void 0,{...m}),m);const{[T]:I,...O}=S;if(I){const{css:w}=I,G=(F=(C=l[T])==null?void 0:C.palette)==null?void 0:F.mode,ae=!s&&G?{colorScheme:G,...w}:{...w};A(t(T,{...ae}),ae)}return Object.entries(O).forEach(([w,{css:G}])=>{var j,ie;const ae=(ie=(j=l[w])==null?void 0:j.palette)==null?void 0:ie.mode,X=!s&&ae?{colorScheme:ae,...G}:{...G};A(t(w,{...X}),X)}),L}}}function zM(r){return function(t){return r==="media"?`@media (prefers-color-scheme: ${t})`:r?r.startsWith("data-")&&!r.includes("%s")?`[${r}="${t}"] &`:r==="class"?`.${t} &`:r==="data"?`[data-${t}] &`:`${r.replace("%s",t)} &`:"&"}}const za={black:"#000",white:"#fff"},FM={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},js={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},qs={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},va={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Xs={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Ys={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Ks={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function Jv(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:za.white,default:za.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const OM=Jv();function e_(){return{text:{primary:za.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:za.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Og=e_();function Ug(r,e,t,s){const o=s.light||s,l=s.dark||s*1.5;r[e]||(r.hasOwnProperty(t)?r[e]=r[t]:e==="light"?r.light=Sh(r.main,o):e==="dark"&&(r.dark=yh(r.main,l)))}function UM(r="light"){return r==="dark"?{main:Xs[200],light:Xs[50],dark:Xs[400]}:{main:Xs[700],light:Xs[400],dark:Xs[800]}}function BM(r="light"){return r==="dark"?{main:js[200],light:js[50],dark:js[400]}:{main:js[500],light:js[300],dark:js[700]}}function VM(r="light"){return r==="dark"?{main:qs[500],light:qs[300],dark:qs[700]}:{main:qs[700],light:qs[400],dark:qs[800]}}function GM(r="light"){return r==="dark"?{main:Ys[400],light:Ys[300],dark:Ys[700]}:{main:Ys[700],light:Ys[500],dark:Ys[900]}}function WM(r="light"){return r==="dark"?{main:Ks[400],light:Ks[300],dark:Ks[700]}:{main:Ks[800],light:Ks[500],dark:Ks[900]}}function HM(r="light"){return r==="dark"?{main:va[400],light:va[300],dark:va[700]}:{main:"#ed6c02",light:va[500],dark:va[900]}}function wh(r){const{mode:e="light",contrastThreshold:t=3,tonalOffset:s=.2,...o}=r,l=r.primary||UM(e),f=r.secondary||BM(e),u=r.error||VM(e),d=r.info||GM(e),h=r.success||WM(e),m=r.warning||HM(e);function g(v){return EM(v,Og.text.primary)>=t?Og.text.primary:OM.text.primary}const _=({color:v,name:y,mainShade:E=500,lightShade:R=300,darkShade:L=700})=>{if(v={...v},!v.main&&v[E]&&(v.main=v[E]),!v.hasOwnProperty("main"))throw new Error(xs(11,y?` (${y})`:"",E));if(typeof v.main!="string")throw new Error(xs(12,y?` (${y})`:"",JSON.stringify(v.main)));return Ug(v,"light",R,s),Ug(v,"dark",L,s),v.contrastText||(v.contrastText=g(v.main)),v};let S;return e==="light"?S=Jv():e==="dark"&&(S=e_()),er({common:{...za},mode:e,primary:_({color:l,name:"primary"}),secondary:_({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:_({color:u,name:"error"}),warning:_({color:m,name:"warning"}),info:_({color:d,name:"info"}),success:_({color:h,name:"success"}),grey:FM,contrastThreshold:t,getContrastText:g,augmentColor:_,tonalOffset:s,...S},o)}function $M(r){const e={};return Object.entries(r).forEach(s=>{const[o,l]=s;typeof l=="object"&&(e[o]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),e}function jM(r,e){return{toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}},...e}}function qM(r){return Math.round(r*1e5)/1e5}const Bg={textTransform:"uppercase"},Vg='"Roboto", "Helvetica", "Arial", sans-serif';function XM(r,e){const{fontFamily:t=Vg,fontSize:s=14,fontWeightLight:o=300,fontWeightRegular:l=400,fontWeightMedium:f=500,fontWeightBold:u=700,htmlFontSize:d=16,allVariants:h,pxToRem:m,...g}=typeof e=="function"?e(r):e,_=s/14,S=m||(y=>`${y/d*_}rem`),M=(y,E,R,L,T)=>({fontFamily:t,fontWeight:y,fontSize:S(E),lineHeight:R,...t===Vg?{letterSpacing:`${qM(L/E)}em`}:{},...T,...h}),v={h1:M(o,96,1.167,-1.5),h2:M(o,60,1.2,-.5),h3:M(l,48,1.167,0),h4:M(l,34,1.235,.25),h5:M(l,24,1.334,0),h6:M(f,20,1.6,.15),subtitle1:M(l,16,1.75,.15),subtitle2:M(f,14,1.57,.1),body1:M(l,16,1.5,.15),body2:M(l,14,1.43,.15),button:M(f,14,1.75,.4,Bg),caption:M(l,12,1.66,.4),overline:M(l,12,2.66,1,Bg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return er({htmlFontSize:d,pxToRem:S,fontFamily:t,fontSize:s,fontWeightLight:o,fontWeightRegular:l,fontWeightMedium:f,fontWeightBold:u,...v},g,{clone:!1})}const YM=.2,KM=.14,ZM=.12;function zt(...r){return[`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${YM})`,`${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${KM})`,`${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${ZM})`].join(",")}const QM=["none",zt(0,2,1,-1,0,1,1,0,0,1,3,0),zt(0,3,1,-2,0,2,2,0,0,1,5,0),zt(0,3,3,-2,0,3,4,0,0,1,8,0),zt(0,2,4,-1,0,4,5,0,0,1,10,0),zt(0,3,5,-1,0,5,8,0,0,1,14,0),zt(0,3,5,-1,0,6,10,0,0,1,18,0),zt(0,4,5,-2,0,7,10,1,0,2,16,1),zt(0,5,5,-3,0,8,10,1,0,3,14,2),zt(0,5,6,-3,0,9,12,1,0,3,16,2),zt(0,6,6,-3,0,10,14,1,0,4,18,3),zt(0,6,7,-4,0,11,15,1,0,4,20,3),zt(0,7,8,-4,0,12,17,2,0,5,22,4),zt(0,7,8,-4,0,13,19,2,0,5,24,4),zt(0,7,9,-4,0,14,21,2,0,5,26,4),zt(0,8,9,-5,0,15,22,2,0,6,28,5),zt(0,8,10,-5,0,16,24,2,0,6,30,5),zt(0,8,11,-5,0,17,26,2,0,6,32,5),zt(0,9,11,-5,0,18,28,2,0,7,34,6),zt(0,9,12,-6,0,19,29,2,0,7,36,6),zt(0,10,13,-6,0,20,31,3,0,8,38,7),zt(0,10,13,-6,0,21,33,3,0,8,40,7),zt(0,10,14,-6,0,22,35,3,0,8,42,7),zt(0,11,14,-7,0,23,36,3,0,9,44,8),zt(0,11,15,-7,0,24,38,3,0,9,46,8)],JM={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},eb={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Gg(r){return`${Math.round(r)}ms`}function tb(r){if(!r)return 0;const e=r/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function nb(r){const e={...JM,...r.easing},t={...eb,...r.duration};return{getAutoHeightDuration:tb,create:(o=["all"],l={})=>{const{duration:f=t.standard,easing:u=e.easeInOut,delay:d=0,...h}=l;return(Array.isArray(o)?o:[o]).map(m=>`${m} ${typeof f=="string"?f:Gg(f)} ${u} ${typeof d=="string"?d:Gg(d)}`).join(",")},...r,easing:e,duration:t}}const rb={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function ib(r){return li(r)||typeof r>"u"||typeof r=="string"||typeof r=="boolean"||typeof r=="number"||Array.isArray(r)}function t_(r={}){const e={...r};function t(s){const o=Object.entries(s);for(let l=0;l<o.length;l++){const[f,u]=o[l];!ib(u)||f.startsWith("unstable_")?delete s[f]:li(u)&&(s[f]={...u},t(s[f]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function qd(r={},...e){const{breakpoints:t,mixins:s={},spacing:o,palette:l={},transitions:f={},typography:u={},shape:d,...h}=r;if(r.vars&&r.generateThemeVars===void 0)throw new Error(xs(20));const m=wh(l),g=Xv(r);let _=er(g,{mixins:jM(g.breakpoints,s),palette:m,shadows:QM.slice(),typography:XM(m,u),transitions:nb(f),zIndex:{...rb}});return _=er(_,h),_=e.reduce((S,M)=>er(S,M),_),_.unstable_sxConfig={...Yu,...h==null?void 0:h.unstable_sxConfig},_.unstable_sx=function(M){return wo({sx:M,theme:this})},_.toRuntimeSource=t_,_}function sb(r){let e;return r<1?e=5.11916*r**2:e=4.5*Math.log(r+1)+2,Math.round(e*10)/1e3}const ob=[...Array(25)].map((r,e)=>{if(e===0)return"none";const t=sb(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function n_(r){return{inputPlaceholder:r==="dark"?.5:.42,inputUnderline:r==="dark"?.7:.42,switchTrackDisabled:r==="dark"?.2:.12,switchTrack:r==="dark"?.3:.38}}function r_(r){return r==="dark"?ob:[]}function ab(r){const{palette:e={mode:"light"},opacity:t,overlays:s,...o}=r,l=wh(e);return{palette:l,opacity:{...n_(l.mode),...t},overlays:s||r_(l.mode),...o}}function lb(r){var e;return!!r[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!r[0].match(/sxConfig$/)||r[0]==="palette"&&!!((e=r[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const ub=r=>[...[...Array(25)].map((e,t)=>`--${r?`${r}-`:""}overlays-${t}`),`--${r?`${r}-`:""}palette-AppBar-darkBg`,`--${r?`${r}-`:""}palette-AppBar-darkColor`],cb=r=>(e,t)=>{const s=r.rootSelector||":root",o=r.colorSchemeSelector;let l=o;if(o==="class"&&(l=".%s"),o==="data"&&(l="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(l=`[${o}="%s"]`),r.defaultColorScheme===e){if(e==="dark"){const f={};return ub(r.cssVarPrefix).forEach(u=>{f[u]=t[u],delete t[u]}),l==="media"?{[s]:t,"@media (prefers-color-scheme: dark)":{[s]:f}}:l?{[l.replace("%s",e)]:f,[`${s}, ${l.replace("%s",e)}`]:t}:{[s]:{...t,...f}}}if(l&&l!=="media")return`${s}, ${l.replace("%s",String(e))}`}else if(e){if(l==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[s]:t}};if(l)return l.replace("%s",String(e))}return s};function fb(r,e){e.forEach(t=>{r[t]||(r[t]={})})}function ce(r,e,t){!r[e]&&t&&(r[e]=t)}function Ma(r){return typeof r!="string"||!r.startsWith("hsl")?r:Qv(r)}function ti(r,e){`${e}Channel`in r||(r[`${e}Channel`]=wa(Ma(r[e])))}function db(r){return typeof r=="number"?`${r}px`:typeof r=="string"||typeof r=="function"||Array.isArray(r)?r:"8px"}const Or=r=>{try{return r()}catch{}},hb=(r="mui")=>DM(r);function nd(r,e,t,s){if(!e)return;e=e===!0?{}:e;const o=s==="dark"?"dark":"light";if(!t){r[s]=ab({...e,palette:{mode:o,...e==null?void 0:e.palette}});return}const{palette:l,...f}=qd({...t,palette:{mode:o,...e==null?void 0:e.palette}});return r[s]={...e,palette:l,opacity:{...n_(o),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||r_(o)},f}function pb(r={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:s,disableCssColorScheme:o=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:f=lb,colorSchemeSelector:u=t.light&&t.dark?"media":void 0,rootSelector:d=":root",...h}=r,m=Object.keys(t)[0],g=s||(t.light&&m!=="light"?"light":m),_=hb(l),{[g]:S,light:M,dark:v,...y}=t,E={...y};let R=S;if((g==="dark"&&!("dark"in t)||g==="light"&&!("light"in t))&&(R=!0),!R)throw new Error(xs(21,g));const L=nd(E,R,h,g);M&&!E.light&&nd(E,M,void 0,"light"),v&&!E.dark&&nd(E,v,void 0,"dark");let T={defaultColorScheme:g,...L,cssVarPrefix:l,colorSchemeSelector:u,rootSelector:d,getCssVar:_,colorSchemes:E,font:{...$M(L.typography),...L.font},spacing:db(h.spacing)};Object.keys(T.colorSchemes).forEach(F=>{const w=T.colorSchemes[F].palette,G=ae=>{const X=ae.split("-"),j=X[1],ie=X[2];return _(ae,w[j][ie])};if(w.mode==="light"&&(ce(w.common,"background","#fff"),ce(w.common,"onBackground","#000")),w.mode==="dark"&&(ce(w.common,"background","#000"),ce(w.common,"onBackground","#fff")),fb(w,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),w.mode==="light"){ce(w.Alert,"errorColor",bt(w.error.light,.6)),ce(w.Alert,"infoColor",bt(w.info.light,.6)),ce(w.Alert,"successColor",bt(w.success.light,.6)),ce(w.Alert,"warningColor",bt(w.warning.light,.6)),ce(w.Alert,"errorFilledBg",G("palette-error-main")),ce(w.Alert,"infoFilledBg",G("palette-info-main")),ce(w.Alert,"successFilledBg",G("palette-success-main")),ce(w.Alert,"warningFilledBg",G("palette-warning-main")),ce(w.Alert,"errorFilledColor",Or(()=>w.getContrastText(w.error.main))),ce(w.Alert,"infoFilledColor",Or(()=>w.getContrastText(w.info.main))),ce(w.Alert,"successFilledColor",Or(()=>w.getContrastText(w.success.main))),ce(w.Alert,"warningFilledColor",Or(()=>w.getContrastText(w.warning.main))),ce(w.Alert,"errorStandardBg",Et(w.error.light,.9)),ce(w.Alert,"infoStandardBg",Et(w.info.light,.9)),ce(w.Alert,"successStandardBg",Et(w.success.light,.9)),ce(w.Alert,"warningStandardBg",Et(w.warning.light,.9)),ce(w.Alert,"errorIconColor",G("palette-error-main")),ce(w.Alert,"infoIconColor",G("palette-info-main")),ce(w.Alert,"successIconColor",G("palette-success-main")),ce(w.Alert,"warningIconColor",G("palette-warning-main")),ce(w.AppBar,"defaultBg",G("palette-grey-100")),ce(w.Avatar,"defaultBg",G("palette-grey-400")),ce(w.Button,"inheritContainedBg",G("palette-grey-300")),ce(w.Button,"inheritContainedHoverBg",G("palette-grey-A100")),ce(w.Chip,"defaultBorder",G("palette-grey-400")),ce(w.Chip,"defaultAvatarColor",G("palette-grey-700")),ce(w.Chip,"defaultIconColor",G("palette-grey-700")),ce(w.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),ce(w.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),ce(w.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),ce(w.LinearProgress,"primaryBg",Et(w.primary.main,.62)),ce(w.LinearProgress,"secondaryBg",Et(w.secondary.main,.62)),ce(w.LinearProgress,"errorBg",Et(w.error.main,.62)),ce(w.LinearProgress,"infoBg",Et(w.info.main,.62)),ce(w.LinearProgress,"successBg",Et(w.success.main,.62)),ce(w.LinearProgress,"warningBg",Et(w.warning.main,.62)),ce(w.Skeleton,"bg",`rgba(${G("palette-text-primaryChannel")} / 0.11)`),ce(w.Slider,"primaryTrack",Et(w.primary.main,.62)),ce(w.Slider,"secondaryTrack",Et(w.secondary.main,.62)),ce(w.Slider,"errorTrack",Et(w.error.main,.62)),ce(w.Slider,"infoTrack",Et(w.info.main,.62)),ce(w.Slider,"successTrack",Et(w.success.main,.62)),ce(w.Slider,"warningTrack",Et(w.warning.main,.62));const ae=nu(w.background.default,.8);ce(w.SnackbarContent,"bg",ae),ce(w.SnackbarContent,"color",Or(()=>w.getContrastText(ae))),ce(w.SpeedDialAction,"fabHoverBg",nu(w.background.paper,.15)),ce(w.StepConnector,"border",G("palette-grey-400")),ce(w.StepContent,"border",G("palette-grey-400")),ce(w.Switch,"defaultColor",G("palette-common-white")),ce(w.Switch,"defaultDisabledColor",G("palette-grey-100")),ce(w.Switch,"primaryDisabledColor",Et(w.primary.main,.62)),ce(w.Switch,"secondaryDisabledColor",Et(w.secondary.main,.62)),ce(w.Switch,"errorDisabledColor",Et(w.error.main,.62)),ce(w.Switch,"infoDisabledColor",Et(w.info.main,.62)),ce(w.Switch,"successDisabledColor",Et(w.success.main,.62)),ce(w.Switch,"warningDisabledColor",Et(w.warning.main,.62)),ce(w.TableCell,"border",Et(tu(w.divider,1),.88)),ce(w.Tooltip,"bg",tu(w.grey[700],.92))}if(w.mode==="dark"){ce(w.Alert,"errorColor",Et(w.error.light,.6)),ce(w.Alert,"infoColor",Et(w.info.light,.6)),ce(w.Alert,"successColor",Et(w.success.light,.6)),ce(w.Alert,"warningColor",Et(w.warning.light,.6)),ce(w.Alert,"errorFilledBg",G("palette-error-dark")),ce(w.Alert,"infoFilledBg",G("palette-info-dark")),ce(w.Alert,"successFilledBg",G("palette-success-dark")),ce(w.Alert,"warningFilledBg",G("palette-warning-dark")),ce(w.Alert,"errorFilledColor",Or(()=>w.getContrastText(w.error.dark))),ce(w.Alert,"infoFilledColor",Or(()=>w.getContrastText(w.info.dark))),ce(w.Alert,"successFilledColor",Or(()=>w.getContrastText(w.success.dark))),ce(w.Alert,"warningFilledColor",Or(()=>w.getContrastText(w.warning.dark))),ce(w.Alert,"errorStandardBg",bt(w.error.light,.9)),ce(w.Alert,"infoStandardBg",bt(w.info.light,.9)),ce(w.Alert,"successStandardBg",bt(w.success.light,.9)),ce(w.Alert,"warningStandardBg",bt(w.warning.light,.9)),ce(w.Alert,"errorIconColor",G("palette-error-main")),ce(w.Alert,"infoIconColor",G("palette-info-main")),ce(w.Alert,"successIconColor",G("palette-success-main")),ce(w.Alert,"warningIconColor",G("palette-warning-main")),ce(w.AppBar,"defaultBg",G("palette-grey-900")),ce(w.AppBar,"darkBg",G("palette-background-paper")),ce(w.AppBar,"darkColor",G("palette-text-primary")),ce(w.Avatar,"defaultBg",G("palette-grey-600")),ce(w.Button,"inheritContainedBg",G("palette-grey-800")),ce(w.Button,"inheritContainedHoverBg",G("palette-grey-700")),ce(w.Chip,"defaultBorder",G("palette-grey-700")),ce(w.Chip,"defaultAvatarColor",G("palette-grey-300")),ce(w.Chip,"defaultIconColor",G("palette-grey-300")),ce(w.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),ce(w.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),ce(w.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),ce(w.LinearProgress,"primaryBg",bt(w.primary.main,.5)),ce(w.LinearProgress,"secondaryBg",bt(w.secondary.main,.5)),ce(w.LinearProgress,"errorBg",bt(w.error.main,.5)),ce(w.LinearProgress,"infoBg",bt(w.info.main,.5)),ce(w.LinearProgress,"successBg",bt(w.success.main,.5)),ce(w.LinearProgress,"warningBg",bt(w.warning.main,.5)),ce(w.Skeleton,"bg",`rgba(${G("palette-text-primaryChannel")} / 0.13)`),ce(w.Slider,"primaryTrack",bt(w.primary.main,.5)),ce(w.Slider,"secondaryTrack",bt(w.secondary.main,.5)),ce(w.Slider,"errorTrack",bt(w.error.main,.5)),ce(w.Slider,"infoTrack",bt(w.info.main,.5)),ce(w.Slider,"successTrack",bt(w.success.main,.5)),ce(w.Slider,"warningTrack",bt(w.warning.main,.5));const ae=nu(w.background.default,.98);ce(w.SnackbarContent,"bg",ae),ce(w.SnackbarContent,"color",Or(()=>w.getContrastText(ae))),ce(w.SpeedDialAction,"fabHoverBg",nu(w.background.paper,.15)),ce(w.StepConnector,"border",G("palette-grey-600")),ce(w.StepContent,"border",G("palette-grey-600")),ce(w.Switch,"defaultColor",G("palette-grey-300")),ce(w.Switch,"defaultDisabledColor",G("palette-grey-600")),ce(w.Switch,"primaryDisabledColor",bt(w.primary.main,.55)),ce(w.Switch,"secondaryDisabledColor",bt(w.secondary.main,.55)),ce(w.Switch,"errorDisabledColor",bt(w.error.main,.55)),ce(w.Switch,"infoDisabledColor",bt(w.info.main,.55)),ce(w.Switch,"successDisabledColor",bt(w.success.main,.55)),ce(w.Switch,"warningDisabledColor",bt(w.warning.main,.55)),ce(w.TableCell,"border",bt(tu(w.divider,1),.68)),ce(w.Tooltip,"bg",tu(w.grey[700],.92))}ti(w.background,"default"),ti(w.background,"paper"),ti(w.common,"background"),ti(w.common,"onBackground"),ti(w,"divider"),Object.keys(w).forEach(ae=>{const X=w[ae];ae!=="tonalOffset"&&X&&typeof X=="object"&&(X.main&&ce(w[ae],"mainChannel",wa(Ma(X.main))),X.light&&ce(w[ae],"lightChannel",wa(Ma(X.light))),X.dark&&ce(w[ae],"darkChannel",wa(Ma(X.dark))),X.contrastText&&ce(w[ae],"contrastTextChannel",wa(Ma(X.contrastText))),ae==="text"&&(ti(w[ae],"primary"),ti(w[ae],"secondary")),ae==="action"&&(X.active&&ti(w[ae],"active"),X.selected&&ti(w[ae],"selected")))})}),T=e.reduce((F,w)=>er(F,w),T);const A={prefix:l,disableCssColorScheme:o,shouldSkipGeneratingVar:f,getSelector:cb(T)},{vars:I,generateThemeVars:O,generateStyleSheets:C}=NM(T,A);return T.vars=I,Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([F,w])=>{T[F]=w}),T.generateThemeVars=O,T.generateStyleSheets=C,T.generateSpacing=function(){return qv(h.spacing,ph(this))},T.getColorSchemeSelector=zM(u),T.spacing=T.generateSpacing(),T.shouldSkipGeneratingVar=f,T.unstable_sxConfig={...Yu,...h==null?void 0:h.unstable_sxConfig},T.unstable_sx=function(w){return wo({sx:w,theme:this})},T.toRuntimeSource=t_,T}function Wg(r,e,t){r.colorSchemes&&t&&(r.colorSchemes[e]={...t!==!0&&t,palette:wh({...t===!0?{}:t.palette,mode:e})})}function mb(r={},...e){const{palette:t,cssVariables:s=!1,colorSchemes:o=t?void 0:{light:!0},defaultColorScheme:l=t==null?void 0:t.mode,...f}=r,u=l||"light",d=o==null?void 0:o[u],h={...o,...t?{[u]:{...typeof d!="boolean"&&d,palette:t}}:void 0};if(s===!1){if(!("colorSchemes"in r))return qd(r,...e);let m=t;"palette"in r||h[u]&&(h[u]!==!0?m=h[u].palette:u==="dark"&&(m={mode:"dark"}));const g=qd({...r,palette:m},...e);return g.defaultColorScheme=u,g.colorSchemes=h,g.palette.mode==="light"&&(g.colorSchemes.light={...h.light!==!0&&h.light,palette:g.palette},Wg(g,"dark",h.dark)),g.palette.mode==="dark"&&(g.colorSchemes.dark={...h.dark!==!0&&h.dark,palette:g.palette},Wg(g,"light",h.light)),g}return!t&&!("light"in h)&&u==="light"&&(h.light=!0),pb({...f,colorSchemes:h,defaultColorScheme:u,...typeof s!="boolean"&&s},...e)}const gb=mb(),vb="$$material";function _b(r){return r!=="ownerState"&&r!=="theme"&&r!=="sx"&&r!=="as"}const xb=r=>_b(r)&&r!=="classes",yb=vM({themeId:vb,defaultTheme:gb,rootShouldForwardProp:xb}),Sb=LM;function wb(r){return PM(r)}function Mb(r){return Yv("MuiSvgIcon",r)}hM("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const bb=r=>{const{color:e,fontSize:t,classes:s}=r,o={root:["root",e!=="inherit"&&`color${So(e)}`,`fontSize${So(t)}`]};return g1(o,Mb,s)},Eb=yb("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,t.color!=="inherit"&&e[`color${So(t.color)}`],e[`fontSize${So(t.fontSize)}`]]}})(Sb(({theme:r})=>{var e,t,s,o,l,f,u,d,h,m,g,_,S,M;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(o=(e=r.transitions)==null?void 0:e.create)==null?void 0:o.call(e,"fill",{duration:(s=(t=(r.vars??r).transitions)==null?void 0:t.duration)==null?void 0:s.shorter}),variants:[{props:v=>!v.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((f=(l=r.typography)==null?void 0:l.pxToRem)==null?void 0:f.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((d=(u=r.typography)==null?void 0:u.pxToRem)==null?void 0:d.call(u,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((m=(h=r.typography)==null?void 0:h.pxToRem)==null?void 0:m.call(h,35))||"2.1875rem"}},...Object.entries((r.vars??r).palette).filter(([,v])=>v&&v.main).map(([v])=>{var y,E;return{props:{color:v},style:{color:(E=(y=(r.vars??r).palette)==null?void 0:y[v])==null?void 0:E.main}}}),{props:{color:"action"},style:{color:(_=(g=(r.vars??r).palette)==null?void 0:g.action)==null?void 0:_.active}},{props:{color:"disabled"},style:{color:(M=(S=(r.vars??r).palette)==null?void 0:S.action)==null?void 0:M.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Xd=ee.forwardRef(function(e,t){const s=wb({props:e,name:"MuiSvgIcon"}),{children:o,className:l,color:f="inherit",component:u="svg",fontSize:d="medium",htmlColor:h,inheritViewBox:m=!1,titleAccess:g,viewBox:_="0 0 24 24",...S}=s,M=ee.isValidElement(o)&&o.type==="svg",v={...s,color:f,component:u,fontSize:d,instanceFontSize:e.fontSize,inheritViewBox:m,viewBox:_,hasSvgAsChild:M},y={};m||(y.viewBox=_);const E=bb(v);return dt.jsxs(Eb,{as:u,className:m1(E.root,l),focusable:"false",color:h,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:t,...y,...S,...M&&o.props,ownerState:v,children:[M?o.props.children:o,g?dt.jsx("title",{children:g}):null]})});Xd.muiName="SvgIcon";function Cb(r,e){function t(s,o){return dt.jsx(Xd,{"data-testid":void 0,ref:o,...s,children:r})}return t.muiName=Xd.muiName,ee.memo(ee.forwardRef(t))}const Tb=Cb(dt.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}));function i_({completed:r,id:e,title:t,toggleTodo:s,deleteTodo:o,dragHandleProps:l}){return dt.jsxs("div",{className:r?"completed":"",style:{display:"flex",alignItems:"center",gap:"10px"},children:[dt.jsx("span",{...l,className:"drag-handle",style:{cursor:"grab"},children:"☰"}),dt.jsxs("label",{style:{flex:1},children:[dt.jsxs("span",{className:"custom-checkbox",children:[dt.jsx("input",{type:"checkbox",checked:r,onChange:f=>s(e,f.target.checked)}),r&&dt.jsx(Tb,{fontSize:"large"})]}),t]}),dt.jsx("button",{onClick:()=>o(e),className:"btn btn-danger",children:"Delete"})]})}i_.propTypes={completed:Zn.bool.isRequired,id:Zn.oneOfType([Zn.string,Zn.number]).isRequired,title:Zn.string.isRequired,toggleTodo:Zn.func.isRequired,deleteTodo:Zn.func.isRequired,dragHandleProps:Zn.object};function s_({todos:r,setTodos:e,toggleTodo:t,deleteTodo:s}){const o=l=>{const{active:f,over:u}=l;if(!u||f.id===u.id)return;const d=r.findIndex(m=>m.id===f.id),h=r.findIndex(m=>m.id===u.id);e(fh(r,d,h))};return dt.jsx($S,{collisionDetection:jy,onDragEnd:o,children:dt.jsx(i1,{items:r.map(l=>l.id),strategy:n1,children:dt.jsxs("ul",{className:"list",children:[r.length===0&&"No Todos",r.map(l=>dt.jsx(Ab,{...l,toggleTodo:t,deleteTodo:s},l.id))]})})})}function Ab(r){const e=typeof window<"u"&&"ontouchstart"in window,{attributes:t,listeners:s,setNodeRef:o,transform:l,transition:f}=f1({id:r.id}),u={transform:La.Transform.toString(l),transition:f,cursor:e?"grab":"default"},d=e?{...t,...s}:s;return dt.jsx("li",{ref:o,style:u,...e?{}:t,children:dt.jsx(i_,{...r,dragHandleProps:d})})}s_.propTypes={todos:Zn.array.isRequired,setTodos:Zn.func.isRequired,toggleTodo:Zn.func.isRequired,deleteTodo:Zn.func.isRequired};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="144",Rb=0,Hg=1,Pb=2,o_=1,Lb=2,ba=3,bo=0,mr=1,Hi=2,$i=0,vo=1,$g=2,jg=3,qg=4,Db=5,fo=100,Ib=101,kb=102,Xg=103,Yg=104,Nb=200,zb=201,Fb=202,Ob=203,a_=204,l_=205,Ub=206,Bb=207,Vb=208,Gb=209,Wb=210,Hb=0,$b=1,jb=2,Yd=3,qb=4,Xb=5,Yb=6,Kb=7,u_=0,Zb=1,Qb=2,fi=0,Jb=1,e2=2,t2=3,n2=4,r2=5,c_=300,Eo=301,Co=302,Kd=303,Zd=304,ec=306,Qd=1e3,Ar=1001,Jd=1002,Un=1003,Kg=1004,Zg=1005,dr=1006,i2=1007,tc=1008,ys=1009,s2=1010,o2=1011,f_=1012,a2=1013,hs=1014,ps=1015,Fa=1016,l2=1017,u2=1018,_o=1020,c2=1021,f2=1022,Gr=1023,d2=1024,h2=1025,gs=1026,To=1027,p2=1028,m2=1029,g2=1030,v2=1031,_2=1033,rd=33776,id=33777,sd=33778,od=33779,Qg=35840,Jg=35841,e0=35842,t0=35843,x2=36196,n0=37492,r0=37496,i0=37808,s0=37809,o0=37810,a0=37811,l0=37812,u0=37813,c0=37814,f0=37815,d0=37816,h0=37817,p0=37818,m0=37819,g0=37820,v0=37821,_0=36492,Ss=3e3,jt=3001,y2=3200,S2=3201,w2=0,M2=1,ai="srgb",ms="srgb-linear",ad=7680,b2=519,x0=35044,y0="300 es",eh=1035;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,S0=180/Math.PI;function Ha(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Qn(r,e,t){return Math.max(e,Math.min(t,r))}function E2(r,e){return(r%e+e)%e}function ud(r,e,t){return(1-t)*r+t*e}function w0(r){return(r&r-1)===0&&r!==0}function th(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ru(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*s-f*o+e.x,this.y=l*o+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pr{constructor(){pr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,s,o,l,f,u,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=f,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,f=s[0],u=s[3],d=s[6],h=s[1],m=s[4],g=s[7],_=s[2],S=s[5],M=s[8],v=o[0],y=o[3],E=o[6],R=o[1],L=o[4],T=o[7],A=o[2],I=o[5],O=o[8];return l[0]=f*v+u*R+d*A,l[3]=f*y+u*L+d*I,l[6]=f*E+u*T+d*O,l[1]=h*v+m*R+g*A,l[4]=h*y+m*L+g*I,l[7]=h*E+m*T+g*O,l[2]=_*v+S*R+M*A,l[5]=_*y+S*L+M*I,l[8]=_*E+S*T+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*f*m-t*u*h-s*l*m+s*u*d+o*l*h-o*f*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=m*f-u*h,_=u*d-m*l,S=h*l-f*d,M=t*g+s*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return e[0]=g*v,e[1]=(o*h-m*s)*v,e[2]=(u*s-o*f)*v,e[3]=_*v,e[4]=(m*t-o*d)*v,e[5]=(o*l-u*t)*v,e[6]=S*v,e[7]=(s*d-h*t)*v,e[8]=(f*t-s*l)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,f,u){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*f+h*u)+f+e,-o*h,o*d,-o*(-h*f+d*u)+u+t,0,0,1),this}scale(e,t){const s=this.elements;return s[0]*=e,s[3]*=e,s[6]*=e,s[1]*=t,s[4]*=t,s[7]*=t,this}rotate(e){const t=Math.cos(e),s=Math.sin(e),o=this.elements,l=o[0],f=o[3],u=o[6],d=o[1],h=o[4],m=o[7];return o[0]=t*l+s*d,o[3]=t*f+s*h,o[6]=t*u+s*m,o[1]=-s*l+t*d,o[4]=-s*f+t*h,o[7]=-s*u+t*m,this}translate(e,t){const s=this.elements;return s[0]+=e*s[2],s[3]+=e*s[5],s[6]+=e*s[8],s[1]+=t*s[2],s[4]+=t*s[5],s[7]+=t*s[8],this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function d_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const cd={[ai]:{[ms]:vs},[ms]:{[ai]:Pu}},br={legacyMode:!0,get workingColorSpace(){return ms},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(cd[e]&&cd[e][t]!==void 0){const s=cd[e][t];return r.r=s(r.r),r.g=s(r.g),r.b=s(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={r:0,g:0,b:0},Er={h:0,s:0,l:0},iu={h:0,s:0,l:0};function fd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function su(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ct{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&s===void 0?this.set(e):this.setRGB(e,t,s)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,br.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=ms){return this.r=e,this.g=t,this.b=s,br.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=ms){if(e=E2(e,1),t=Qn(t,0,1),s=Qn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,f=2*s-l;this.r=fd(f,l,e+1/3),this.g=fd(f,l,e),this.b=fd(f,l,e-1/3)}return br.toWorkingColorSpace(this,o),this}setStyle(e,t=ai){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],u=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(255,parseInt(l[1],10))/255,this.g=Math.min(255,parseInt(l[2],10))/255,this.b=Math.min(255,parseInt(l[3],10))/255,br.toWorkingColorSpace(this,t),s(l[4]),this;if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(100,parseInt(l[1],10))/100,this.g=Math.min(100,parseInt(l[2],10))/100,this.b=Math.min(100,parseInt(l[3],10))/100,br.toWorkingColorSpace(this,t),s(l[4]),this;break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u)){const d=parseFloat(l[1])/360,h=parseFloat(l[2])/100,m=parseFloat(l[3])/100;return s(l[4]),this.setHSL(d,h,m,t)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,br.toWorkingColorSpace(this,t),this;if(f===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,br.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ai){const s=h_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return br.fromWorkingColorSpace(su(this,nn),e),Qn(nn.r*255,0,255)<<16^Qn(nn.g*255,0,255)<<8^Qn(nn.b*255,0,255)<<0}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ms){br.fromWorkingColorSpace(su(this,nn),t);const s=nn.r,o=nn.g,l=nn.b,f=Math.max(s,o,l),u=Math.min(s,o,l);let d,h;const m=(u+f)/2;if(u===f)d=0,h=0;else{const g=f-u;switch(h=m<=.5?g/(f+u):g/(2-f-u),f){case s:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-s)/g+2;break;case l:d=(s-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=ms){return br.fromWorkingColorSpace(su(this,nn),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=ai){return br.fromWorkingColorSpace(su(this,nn),e),e!==ai?`color(${e} ${nn.r} ${nn.g} ${nn.b})`:`rgb(${nn.r*255|0},${nn.g*255|0},${nn.b*255|0})`}offsetHSL(e,t,s){return this.getHSL(Er),Er.h+=e,Er.s+=t,Er.l+=s,this.setHSL(Er.h,Er.s,Er.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(iu);const s=ud(Er.h,iu.h,t),o=ud(Er.s,iu.s,t),l=ud(Er.l,iu.l,t);return this.setHSL(s,o,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ct.NAMES=h_;let Zs;class p_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Ou("canvas")),Zs.width=e.width,Zs.height=e.height;const s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ou("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=vs(l[f]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(vs(t[s]/255)*255):t[s]=vs(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class m_{constructor(e=null){this.isSource=!0,this.uuid=Ha(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,u=o.length;f<u;f++)o[f].isDataTexture?l.push(dd(o[f].image)):l.push(dd(o[f]))}else l=dd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?p_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C2=0;class Pr extends Io{constructor(e=Pr.DEFAULT_IMAGE,t=Pr.DEFAULT_MAPPING,s=Ar,o=Ar,l=dr,f=tc,u=Gr,d=ys,h=1,m=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=Ha(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=t,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pr,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pr.DEFAULT_IMAGE=null;Pr.DEFAULT_MAPPING=c_;class gn{constructor(e=0,t=0,s=0,o=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*s+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*s+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*s+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*s+f[11]*o+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],S=d[5],M=d[9],v=d[2],y=d[6],E=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-v)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+v)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,T=(S+1)/2,A=(E+1)/2,I=(m+_)/4,O=(g+v)/4,C=(M+y)/4;return L>T&&L>A?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=I/s,l=O/s):T>A?T<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),s=I/o,l=C/o):A<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(A),s=O/l,o=C/l),this.set(s,o,l,t),this}let R=Math.sqrt((y-M)*(y-M)+(g-v)*(g-v)+(_-m)*(_-m));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(g-v)/R,this.z=(_-m)/R,this.w=Math.acos((h+S+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ws extends Io{constructor(e,t,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new Pr(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:dr,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class g_ extends Pr{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T2 extends Pr{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,f,u){let d=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];const _=l[f+0],S=l[f+1],M=l[f+2],v=l[f+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=v;return}if(g!==v||d!==_||h!==S||m!==M){let y=1-u;const E=d*_+h*S+m*M+g*v,R=E>=0?1:-1,L=1-E*E;if(L>Number.EPSILON){const A=Math.sqrt(L),I=Math.atan2(A,E*R);y=Math.sin(y*I)/A,u=Math.sin(u*I)/A}const T=u*R;if(d=d*y+_*T,h=h*y+S*T,m=m*y+M*T,g=g*y+v*T,y===1-u){const A=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=A,h*=A,m*=A,g*=A}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,f){const u=s[o],d=s[o+1],h=s[o+2],m=s[o+3],g=l[f],_=l[f+1],S=l[f+2],M=l[f+3];return e[t]=u*M+m*g+d*S-h*_,e[t+1]=d*M+m*_+h*g-u*S,e[t+2]=h*M+m*S+u*_-d*g,e[t+3]=m*M-u*g-d*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const s=e._x,o=e._y,l=e._z,f=e._order,u=Math.cos,d=Math.sin,h=u(s/2),m=u(o/2),g=u(l/2),_=d(s/2),S=d(o/2),M=d(l/2);switch(f){case"XYZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"YXZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"ZXY":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"ZYX":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"YZX":this._x=_*m*g+h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g-_*S*M;break;case"XZY":this._x=_*m*g-h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],f=t[1],u=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=s+u+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(f-o)*S}else if(s>u&&s>g){const S=2*Math.sqrt(1+s-u-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(l+h)/S}else if(u>g){const S=2*Math.sqrt(1+u-s-g);this._w=(l-h)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-s-u);this._w=(f-o)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,f=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=s*m+f*u+o*h-l*d,this._y=o*m+f*d+l*u-s*h,this._z=l*m+f*h+s*d-o*u,this._w=f*m-s*u-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,f=this._w;let u=f*e._w+s*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=s,this._y=o,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=f*g+this._w*_,this._x=s*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(M0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(M0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,f=e.y,u=e.z,d=e.w,h=d*t+f*o-u*s,m=d*s+u*t-l*o,g=d*o+l*s-f*t,_=-l*t-f*s-u*o;return this.x=h*d+_*-l+m*-u-g*-f,this.y=m*d+_*-f+g*-l-h*-u,this.z=g*d+_*-u+h*-f-m*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,f=t.x,u=t.y,d=t.z;return this.x=o*d-l*u,this.y=l*f-s*d,this.z=s*u-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Qn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new ne,M0=new $a;class ja{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,s=1/0,o=1/0,l=-1/0,f=-1/0,u=-1/0;for(let d=0,h=e.length;d<h;d+=3){const m=e[d],g=e[d+1],_=e[d+2];m<t&&(t=m),g<s&&(s=g),_<o&&(o=_),m>l&&(l=m),g>f&&(f=g),_>u&&(u=_)}return this.min.set(t,s,o),this.max.set(l,f,u),this}setFromBufferAttribute(e){let t=1/0,s=1/0,o=1/0,l=-1/0,f=-1/0,u=-1/0;for(let d=0,h=e.count;d<h;d++){const m=e.getX(d),g=e.getY(d),_=e.getZ(d);m<t&&(t=m),g<s&&(s=g),_<o&&(o=_),m>l&&(l=m),g>f&&(f=g),_>u&&(u=_)}return this.min.set(t,s,o),this.max.set(l,f,u),this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=as.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0)if(t&&s.attributes!=null&&s.attributes.position!==void 0){const l=s.attributes.position;for(let f=0,u=l.count;f<u;f++)as.fromBufferAttribute(l,f).applyMatrix4(e.matrixWorld),this.expandByPoint(as)}else s.boundingBox===null&&s.computeBoundingBox(),pd.copy(s.boundingBox),pd.applyMatrix4(e.matrixWorld),this.union(pd);const o=e.children;for(let l=0,f=o.length;l<f;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,as),as.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),ou.subVectors(this.max,_a),Qs.subVectors(e.a,_a),Js.subVectors(e.b,_a),eo.subVectors(e.c,_a),zi.subVectors(Js,Qs),Fi.subVectors(eo,Js),ls.subVectors(Qs,eo);let t=[0,-zi.z,zi.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,zi.z,0,-zi.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-zi.y,zi.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!md(t,Qs,Js,eo,ou)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Qs,Js,eo,ou))?!1:(au.crossVectors(zi,Fi),t=[au.x,au.y,au.z],md(t,Qs,Js,eo,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return as.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(as).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],as=new ne,pd=new ja,Qs=new ne,Js=new ne,eo=new ne,zi=new ne,Fi=new ne,ls=new ne,_a=new ne,ou=new ne,au=new ne,us=new ne;function md(r,e,t,s,o){for(let l=0,f=r.length-3;l<=f;l+=3){us.fromArray(r,l);const u=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),d=e.dot(us),h=t.dot(us),m=s.dot(us);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const A2=new ja,b0=new ne,lu=new ne,gd=new ne;class bh{constructor(e=new ne,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):A2.setFromPoints(e).getCenter(s);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){gd.subVectors(e,this.center);const t=gd.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.add(gd.multiplyScalar(o/s)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?lu.set(0,0,1).multiplyScalar(e.radius):lu.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(b0.copy(e.center).add(lu)),this.expandByPoint(b0.copy(e.center).sub(lu)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new ne,vd=new ne,uu=new ne,Oi=new ne,_d=new ne,cu=new ne,xd=new ne;class R2{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.direction).multiplyScalar(t).add(this.origin),ri.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){vd.copy(e).add(t).multiplyScalar(.5),uu.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(vd);const l=e.distanceTo(t)*.5,f=-this.direction.dot(uu),u=Oi.dot(this.direction),d=-Oi.dot(uu),h=Oi.lengthSq(),m=Math.abs(1-f*f);let g,_,S,M;if(m>0)if(g=f*d-u,_=f*u-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const v=1/m;g*=v,_*=v,S=g*(g+f*_+2*u)+_*(f*g+_+2*d)+h}else _=l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+h;else _=-l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-f*l+u)),_=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+h):(g=Math.max(0,-(f*l+u)),_=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+_*(_+2*d)+h);else _=f>0?-l:l,g=Math.max(0,-(f*_+u)),S=-g*g+_*(_+2*d)+h;return s&&s.copy(this.direction).multiplyScalar(g).add(this.origin),o&&o.copy(uu).multiplyScalar(_).add(vd),S}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const s=ri.dot(this.direction),o=ri.dot(ri)-s*s,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),u=s-f,d=s+f;return u<0&&d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,f,u,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,f=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,f=(e.min.y-_.y)*m),s>f||l>o||((l>s||s!==s)&&(s=l),(f<o||o!==o)&&(o=f),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),s>d||u>o)||((u>s||s!==s)&&(s=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,s,o,l){_d.subVectors(t,e),cu.subVectors(s,e),xd.crossVectors(_d,cu);let f=this.direction.dot(xd),u;if(f>0){if(o)return null;u=1}else if(f<0)u=-1,f=-f;else return null;Oi.subVectors(this.origin,e);const d=u*this.direction.dot(cu.crossVectors(Oi,cu));if(d<0)return null;const h=u*this.direction.dot(_d.cross(Oi));if(h<0||d+h>f)return null;const m=-u*Oi.dot(xd);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn{constructor(){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,s,o,l,f,u,d,h,m,g,_,S,M,v,y){const E=this.elements;return E[0]=e,E[4]=t,E[8]=s,E[12]=o,E[1]=l,E[5]=f,E[9]=u,E[13]=d,E[2]=h,E[6]=m,E[10]=g,E[14]=_,E[3]=S,E[7]=M,E[11]=v,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/to.setFromMatrixColumn(e,0).length(),l=1/to.setFromMatrixColumn(e,1).length(),f=1/to.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*f,t[9]=s[9]*f,t[10]=s[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,f=Math.cos(s),u=Math.sin(s),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=f*m,S=f*g,M=u*m,v=u*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=_-v*h,t[9]=-u*d,t[2]=v-_*h,t[6]=M+S*h,t[10]=f*d}else if(e.order==="YXZ"){const _=d*m,S=d*g,M=h*m,v=h*g;t[0]=_+v*u,t[4]=M*u-S,t[8]=f*h,t[1]=f*g,t[5]=f*m,t[9]=-u,t[2]=S*u-M,t[6]=v+_*u,t[10]=f*d}else if(e.order==="ZXY"){const _=d*m,S=d*g,M=h*m,v=h*g;t[0]=_-v*u,t[4]=-f*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=f*m,t[9]=v-_*u,t[2]=-f*h,t[6]=u,t[10]=f*d}else if(e.order==="ZYX"){const _=f*m,S=f*g,M=u*m,v=u*g;t[0]=d*m,t[4]=M*h-S,t[8]=_*h+v,t[1]=d*g,t[5]=v*h+_,t[9]=S*h-M,t[2]=-h,t[6]=u*d,t[10]=f*d}else if(e.order==="YZX"){const _=f*d,S=f*h,M=u*d,v=u*h;t[0]=d*m,t[4]=v-_*g,t[8]=M*g+S,t[1]=g,t[5]=f*m,t[9]=-u*m,t[2]=-h*m,t[6]=S*g+M,t[10]=_-v*g}else if(e.order==="XZY"){const _=f*d,S=f*h,M=u*d,v=u*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+v,t[5]=f*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=v*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P2,e,L2)}lookAt(e,t,s){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ui.crossVectors(s,Yn),Ui.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ui.crossVectors(s,Yn)),Ui.normalize(),fu.crossVectors(Yn,Ui),o[0]=Ui.x,o[4]=fu.x,o[8]=Yn.x,o[1]=Ui.y,o[5]=fu.y,o[9]=Yn.y,o[2]=Ui.z,o[6]=fu.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,f=s[0],u=s[4],d=s[8],h=s[12],m=s[1],g=s[5],_=s[9],S=s[13],M=s[2],v=s[6],y=s[10],E=s[14],R=s[3],L=s[7],T=s[11],A=s[15],I=o[0],O=o[4],C=o[8],F=o[12],w=o[1],G=o[5],ae=o[9],X=o[13],j=o[2],ie=o[6],he=o[10],le=o[14],$=o[3],B=o[7],W=o[11],k=o[15];return l[0]=f*I+u*w+d*j+h*$,l[4]=f*O+u*G+d*ie+h*B,l[8]=f*C+u*ae+d*he+h*W,l[12]=f*F+u*X+d*le+h*k,l[1]=m*I+g*w+_*j+S*$,l[5]=m*O+g*G+_*ie+S*B,l[9]=m*C+g*ae+_*he+S*W,l[13]=m*F+g*X+_*le+S*k,l[2]=M*I+v*w+y*j+E*$,l[6]=M*O+v*G+y*ie+E*B,l[10]=M*C+v*ae+y*he+E*W,l[14]=M*F+v*X+y*le+E*k,l[3]=R*I+L*w+T*j+A*$,l[7]=R*O+L*G+T*ie+A*B,l[11]=R*C+L*ae+T*he+A*W,l[15]=R*F+L*X+T*le+A*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],f=e[1],u=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],S=e[14],M=e[3],v=e[7],y=e[11],E=e[15];return M*(+l*d*g-o*h*g-l*u*_+s*h*_+o*u*S-s*d*S)+v*(+t*d*S-t*h*_+l*f*_-o*f*S+o*h*m-l*d*m)+y*(+t*h*g-t*u*S-l*f*g+s*f*S+l*u*m-s*h*m)+E*(-o*u*m-t*d*g+t*u*_+o*f*g-s*f*_+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],f=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],S=e[11],M=e[12],v=e[13],y=e[14],E=e[15],R=g*y*h-v*_*h+v*d*S-u*y*S-g*d*E+u*_*E,L=M*_*h-m*y*h-M*d*S+f*y*S+m*d*E-f*_*E,T=m*v*h-M*g*h+M*u*S-f*v*S-m*u*E+f*g*E,A=M*g*d-m*v*d-M*u*_+f*v*_+m*u*y-f*g*y,I=t*R+s*L+o*T+l*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=R*O,e[1]=(v*_*l-g*y*l-v*o*S+s*y*S+g*o*E-s*_*E)*O,e[2]=(u*y*l-v*d*l+v*o*h-s*y*h-u*o*E+s*d*E)*O,e[3]=(g*d*l-u*_*l-g*o*h+s*_*h+u*o*S-s*d*S)*O,e[4]=L*O,e[5]=(m*y*l-M*_*l+M*o*S-t*y*S-m*o*E+t*_*E)*O,e[6]=(M*d*l-f*y*l-M*o*h+t*y*h+f*o*E-t*d*E)*O,e[7]=(f*_*l-m*d*l+m*o*h-t*_*h-f*o*S+t*d*S)*O,e[8]=T*O,e[9]=(M*g*l-m*v*l-M*s*S+t*v*S+m*s*E-t*g*E)*O,e[10]=(f*v*l-M*u*l+M*s*h-t*v*h-f*s*E+t*u*E)*O,e[11]=(m*u*l-f*g*l-m*s*h+t*g*h+f*s*S-t*u*S)*O,e[12]=A*O,e[13]=(m*v*o-M*g*o+M*s*_-t*v*_-m*s*y+t*g*y)*O,e[14]=(M*u*o-f*v*o-M*s*d+t*v*d+f*s*y-t*u*y)*O,e[15]=(f*g*o-m*u*o+m*s*d-t*g*d-f*s*_+t*u*_)*O,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,f=e.x,u=e.y,d=e.z,h=l*f,m=l*u;return this.set(h*f+s,h*u-o*d,h*d+o*u,0,h*u+o*d,m*u+s,m*d-o*f,0,h*d-o*u,m*d+o*f,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,f){return this.set(1,s,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,f=t._y,u=t._z,d=t._w,h=l+l,m=f+f,g=u+u,_=l*h,S=l*m,M=l*g,v=f*m,y=f*g,E=u*g,R=d*h,L=d*m,T=d*g,A=s.x,I=s.y,O=s.z;return o[0]=(1-(v+E))*A,o[1]=(S+T)*A,o[2]=(M-L)*A,o[3]=0,o[4]=(S-T)*I,o[5]=(1-(_+E))*I,o[6]=(y+R)*I,o[7]=0,o[8]=(M+L)*O,o[9]=(y-R)*O,o[10]=(1-(_+v))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=to.set(o[0],o[1],o[2]).length();const f=to.set(o[4],o[5],o[6]).length(),u=to.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Cr.copy(this);const h=1/l,m=1/f,g=1/u;return Cr.elements[0]*=h,Cr.elements[1]*=h,Cr.elements[2]*=h,Cr.elements[4]*=m,Cr.elements[5]*=m,Cr.elements[6]*=m,Cr.elements[8]*=g,Cr.elements[9]*=g,Cr.elements[10]*=g,t.setFromRotationMatrix(Cr),s.x=l,s.y=f,s.z=u,this}makePerspective(e,t,s,o,l,f){const u=this.elements,d=2*l/(t-e),h=2*l/(s-o),m=(t+e)/(t-e),g=(s+o)/(s-o),_=-(f+l)/(f-l),S=-2*f*l/(f-l);return u[0]=d,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,s,o,l,f){const u=this.elements,d=1/(t-e),h=1/(s-o),m=1/(f-l),g=(t+e)*d,_=(s+o)*h,S=(f+l)*m;return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-g,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=-2*m,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const to=new ne,Cr=new vn,P2=new ne(0,0,0),L2=new ne(1,1,1),Ui=new ne,fu=new ne,Yn=new ne,E0=new vn,C0=new $a;class qa{constructor(e=0,t=0,s=0,o=qa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],f=o[4],u=o[8],d=o[1],h=o[5],m=o[9],g=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Qn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Qn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Qn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}qa.DefaultOrder="XYZ";qa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D2=0;const T0=new ne,no=new $a,ii=new vn,du=new ne,xa=new ne,I2=new ne,k2=new $a,A0=new ne(1,0,0),R0=new ne(0,1,0),P0=new ne(0,0,1),N2={type:"added"},L0={type:"removed"};class nr extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D2++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nr.DefaultUp.clone();const e=new ne,t=new qa,s=new $a,o=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function f(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new pr}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=nr.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nr.DefaultMatrixWorldAutoUpdate,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(A0,e)}rotateY(e){return this.rotateOnAxis(R0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,t){return T0.copy(e).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(A0,e)}translateY(e){return this.translateOnAxis(R0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?du.copy(e):du.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xa,du,this.up):ii.lookAt(du,xa,this.up),this.quaternion.setFromRotationMatrix(ii),o&&(ii.extractRotation(o.matrixWorld),no.setFromRotationMatrix(ii),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(L0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const f=this.children[s].getObjectByProperty(e,t);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,I2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,k2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++){const u=o[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(l(e.materials,this.material[d]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(l(e.animations,d))}}if(t){const u=f(e.geometries),d=f(e.materials),h=f(e.textures),m=f(e.images),g=f(e.shapes),_=f(e.skeletons),S=f(e.animations),M=f(e.nodes);u.length>0&&(s.geometries=u),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=o,s;function f(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}nr.DefaultUp=new ne(0,1,0);nr.DefaultMatrixAutoUpdate=!0;nr.DefaultMatrixWorldAutoUpdate=!0;const Tr=new ne,si=new ne,yd=new ne,oi=new ne,ro=new ne,io=new ne,D0=new ne,Sd=new ne,wd=new ne,Md=new ne;class ui{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Tr.subVectors(e,t),o.cross(Tr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Tr.subVectors(o,t),si.subVectors(s,t),yd.subVectors(e,t);const f=Tr.dot(Tr),u=Tr.dot(si),d=Tr.dot(yd),h=si.dot(si),m=si.dot(yd),g=f*h-u*u;if(g===0)return l.set(-2,-1,-1);const _=1/g,S=(h*d-u*m)*_,M=(f*m-u*d)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,s,o,l,f,u,d){return this.getBarycoord(e,t,s,o,oi),d.set(0,0),d.addScaledVector(l,oi.x),d.addScaledVector(f,oi.y),d.addScaledVector(u,oi.z),d}static isFrontFacing(e,t,s,o){return Tr.subVectors(s,t),si.subVectors(e,t),Tr.cross(si).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tr.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Tr.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,o,l){return ui.getUV(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let f,u;ro.subVectors(o,s),io.subVectors(l,s),Sd.subVectors(e,s);const d=ro.dot(Sd),h=io.dot(Sd);if(d<=0&&h<=0)return t.copy(s);wd.subVectors(e,o);const m=ro.dot(wd),g=io.dot(wd);if(m>=0&&g<=m)return t.copy(o);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return f=d/(d-m),t.copy(s).addScaledVector(ro,f);Md.subVectors(e,l);const S=ro.dot(Md),M=io.dot(Md);if(M>=0&&S<=M)return t.copy(l);const v=S*h-d*M;if(v<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(s).addScaledVector(io,u);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return D0.subVectors(l,o),u=(g-m)/(g-m+(S-M)),t.copy(o).addScaledVector(D0,u);const E=1/(y+v+_);return f=v*E,u=_*E,t.copy(s).addScaledVector(ro,f).addScaledVector(io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let z2=0;class nc extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=vo,this.side=bo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=a_,this.blendDst=l_,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ad,this.stencilZFail=ad,this.stencilZPass=ad,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(s.blending=this.blending),this.side!==bo&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData);function o(l){const f=[];for(const u in l){const d=l[u];delete d.metadata,f.push(d)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(s.textures=l),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class __ extends nc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ne,hu=new _t;class Hr{constructor(e,t,s){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s===!0,this.usage=x0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)hu.fromBufferAttribute(this,t),hu.applyMatrix3(e),this.setXY(t,hu.x,hu.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ru(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ru(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ru(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ru(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array),o=Xn(o,this.array),l=Xn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class x_ extends Hr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class y_ extends Hr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class _s extends Hr{constructor(e,t,s){super(new Float32Array(e),t,s)}}let F2=0;const ur=new vn,bd=new nr,so=new ne,Kn=new ja,ya=new ja,un=new ne;class Ms extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?y_:x_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pr().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,s){return ur.makeTranslation(e,t,s),this.applyMatrix4(ur),this}scale(e,t,s){return ur.makeScale(e,t,s),this.applyMatrix4(ur),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new _s(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];ya.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(Kn.min,ya.min),Kn.expandByPoint(un),un.addVectors(Kn.max,ya.max),Kn.expandByPoint(un)):(Kn.expandByPoint(ya.min),Kn.expandByPoint(ya.max))}Kn.getCenter(s);let o=0;for(let l=0,f=e.count;l<f;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)un.fromBufferAttribute(u,h),d&&(so.fromBufferAttribute(e,h),un.add(so)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,f=t.uv.array,u=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hr(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],m=[];for(let w=0;w<u;w++)h[w]=new ne,m[w]=new ne;const g=new ne,_=new ne,S=new ne,M=new _t,v=new _t,y=new _t,E=new ne,R=new ne;function L(w,G,ae){g.fromArray(o,w*3),_.fromArray(o,G*3),S.fromArray(o,ae*3),M.fromArray(f,w*2),v.fromArray(f,G*2),y.fromArray(f,ae*2),_.sub(g),S.sub(g),v.sub(M),y.sub(M);const X=1/(v.x*y.y-y.x*v.y);isFinite(X)&&(E.copy(_).multiplyScalar(y.y).addScaledVector(S,-v.y).multiplyScalar(X),R.copy(S).multiplyScalar(v.x).addScaledVector(_,-y.x).multiplyScalar(X),h[w].add(E),h[G].add(E),h[ae].add(E),m[w].add(R),m[G].add(R),m[ae].add(R))}let T=this.groups;T.length===0&&(T=[{start:0,count:s.length}]);for(let w=0,G=T.length;w<G;++w){const ae=T[w],X=ae.start,j=ae.count;for(let ie=X,he=X+j;ie<he;ie+=3)L(s[ie+0],s[ie+1],s[ie+2])}const A=new ne,I=new ne,O=new ne,C=new ne;function F(w){O.fromArray(l,w*3),C.copy(O);const G=h[w];A.copy(G),A.sub(O.multiplyScalar(O.dot(G))).normalize(),I.crossVectors(C,G);const X=I.dot(m[w])<0?-1:1;d[w*4]=A.x,d[w*4+1]=A.y,d[w*4+2]=A.z,d[w*4+3]=X}for(let w=0,G=T.length;w<G;++w){const ae=T[w],X=ae.start,j=ae.count;for(let ie=X,he=X+j;ie<he;ie+=3)F(s[ie+0]),F(s[ie+1]),F(s[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new ne,l=new ne,f=new ne,u=new ne,d=new ne,h=new ne,m=new ne,g=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),v=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,v),f.fromBufferAttribute(t,y),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),u.fromBufferAttribute(s,M),d.fromBufferAttribute(s,v),h.fromBufferAttribute(s,y),u.add(m),d.add(m),h.add(m),s.setXYZ(M,u.x,u.y,u.z),s.setXYZ(v,d.x,d.y,d.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),m.subVectors(f,l),g.subVectors(o,l),m.cross(g),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(d.length*m);let S=0,M=0;for(let v=0,y=d.length;v<y;v++){u.isInterleavedBufferAttribute?S=d[v]*u.data.stride+u.offset:S=d[v]*m;for(let E=0;E<m;E++)_[M++]=h[S++]}return new Hr(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ms,s=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,s);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const d=[],h=l[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],S=e(_,s);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,d=f.length;u<d;u++){const h=f[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,m=f.length;h<m;h++){const g=f[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const I0=new vn,oo=new R2,Ed=new bh,Bi=new ne,Vi=new ne,Gi=new ne,Cd=new ne,Td=new ne,Ad=new ne,pu=new ne,mu=new ne,gu=new ne,vu=new _t,_u=new _t,xu=new _t,Rd=new ne,yu=new ne;class ci extends nr{constructor(e=new Ms,t=new __){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;if(o===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),Ed.copy(s.boundingSphere),Ed.applyMatrix4(l),e.ray.intersectsSphere(Ed)===!1)||(I0.copy(l).invert(),oo.copy(e.ray).applyMatrix4(I0),s.boundingBox!==null&&oo.intersectsBox(s.boundingBox)===!1))return;let f;const u=s.index,d=s.attributes.position,h=s.morphAttributes.position,m=s.morphTargetsRelative,g=s.attributes.uv,_=s.attributes.uv2,S=s.groups,M=s.drawRange;if(u!==null)if(Array.isArray(o))for(let v=0,y=S.length;v<y;v++){const E=S[v],R=o[E.materialIndex],L=Math.max(E.start,M.start),T=Math.min(u.count,Math.min(E.start+E.count,M.start+M.count));for(let A=L,I=T;A<I;A+=3){const O=u.getX(A),C=u.getX(A+1),F=u.getX(A+2);f=Su(this,R,e,oo,d,h,m,g,_,O,C,F),f&&(f.faceIndex=Math.floor(A/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const v=Math.max(0,M.start),y=Math.min(u.count,M.start+M.count);for(let E=v,R=y;E<R;E+=3){const L=u.getX(E),T=u.getX(E+1),A=u.getX(E+2);f=Su(this,o,e,oo,d,h,m,g,_,L,T,A),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}else if(d!==void 0)if(Array.isArray(o))for(let v=0,y=S.length;v<y;v++){const E=S[v],R=o[E.materialIndex],L=Math.max(E.start,M.start),T=Math.min(d.count,Math.min(E.start+E.count,M.start+M.count));for(let A=L,I=T;A<I;A+=3){const O=A,C=A+1,F=A+2;f=Su(this,R,e,oo,d,h,m,g,_,O,C,F),f&&(f.faceIndex=Math.floor(A/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const v=Math.max(0,M.start),y=Math.min(d.count,M.start+M.count);for(let E=v,R=y;E<R;E+=3){const L=E,T=E+1,A=E+2;f=Su(this,o,e,oo,d,h,m,g,_,L,T,A),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}}}function O2(r,e,t,s,o,l,f,u){let d;if(e.side===mr?d=s.intersectTriangle(f,l,o,!0,u):d=s.intersectTriangle(o,l,f,e.side!==Hi,u),d===null)return null;yu.copy(u),yu.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(yu);return h<t.near||h>t.far?null:{distance:h,point:yu.clone(),object:r}}function Su(r,e,t,s,o,l,f,u,d,h,m,g){Bi.fromBufferAttribute(o,h),Vi.fromBufferAttribute(o,m),Gi.fromBufferAttribute(o,g);const _=r.morphTargetInfluences;if(l&&_){pu.set(0,0,0),mu.set(0,0,0),gu.set(0,0,0);for(let M=0,v=l.length;M<v;M++){const y=_[M],E=l[M];y!==0&&(Cd.fromBufferAttribute(E,h),Td.fromBufferAttribute(E,m),Ad.fromBufferAttribute(E,g),f?(pu.addScaledVector(Cd,y),mu.addScaledVector(Td,y),gu.addScaledVector(Ad,y)):(pu.addScaledVector(Cd.sub(Bi),y),mu.addScaledVector(Td.sub(Vi),y),gu.addScaledVector(Ad.sub(Gi),y)))}Bi.add(pu),Vi.add(mu),Gi.add(gu)}r.isSkinnedMesh&&(r.boneTransform(h,Bi),r.boneTransform(m,Vi),r.boneTransform(g,Gi));const S=O2(r,e,t,s,Bi,Vi,Gi,Rd);if(S){u&&(vu.fromBufferAttribute(u,h),_u.fromBufferAttribute(u,m),xu.fromBufferAttribute(u,g),S.uv=ui.getUV(Rd,Bi,Vi,Gi,vu,_u,xu,new _t)),d&&(vu.fromBufferAttribute(d,h),_u.fromBufferAttribute(d,m),xu.fromBufferAttribute(d,g),S.uv2=ui.getUV(Rd,Bi,Vi,Gi,vu,_u,xu,new _t));const M={a:h,b:m,c:g,normal:new ne,materialIndex:0};ui.getNormal(Bi,Vi,Gi,M.normal),S.face=M}return S}class Xa extends Ms{constructor(e=1,t=1,s=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:f};const u=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const d=[],h=[],m=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,s,t,e,f,l,0),M("z","y","x",1,-1,s,t,-e,f,l,1),M("x","z","y",1,1,e,s,t,o,f,2),M("x","z","y",1,-1,e,s,-t,o,f,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new _s(h,3)),this.setAttribute("normal",new _s(m,3)),this.setAttribute("uv",new _s(g,2));function M(v,y,E,R,L,T,A,I,O,C,F){const w=T/O,G=A/C,ae=T/2,X=A/2,j=I/2,ie=O+1,he=C+1;let le=0,$=0;const B=new ne;for(let W=0;W<he;W++){const k=W*G-X;for(let V=0;V<ie;V++){const re=V*w-ae;B[v]=re*R,B[y]=k*L,B[E]=j,h.push(B.x,B.y,B.z),B[v]=0,B[y]=0,B[E]=I>0?1:-1,m.push(B.x,B.y,B.z),g.push(V/O),g.push(1-W/C),le+=1}}for(let W=0;W<C;W++)for(let k=0;k<O;k++){const V=_+k+ie*W,re=_+k+ie*(W+1),pe=_+(k+1)+ie*(W+1),Me=_+(k+1)+ie*W;d.push(V,re,Me),d.push(re,pe,Me),$+=6}u.addGroup(S,$,F),S+=$,_+=le}}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const s=Ao(r[t]);for(const o in s)e[o]=s[o]}return e}function U2(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const B2={clone:Ao,merge:bn};var V2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends nc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V2,this.fragmentShader=G2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=U2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class S_ extends nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hr extends S_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=S0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return S0*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ld*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,h=f.fullHeight;l+=f.offsetX*o/d,t-=f.offsetY*s/h,o*=f.width/d,s*=f.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ao=90,lo=1;class W2 extends nr{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s;const o=new hr(ao,lo,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new ne(1,0,0)),this.add(o);const l=new hr(ao,lo,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new ne(-1,0,0)),this.add(l);const f=new hr(ao,lo,e,t);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new ne(0,1,0)),this.add(f);const u=new hr(ao,lo,e,t);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(new ne(0,-1,0)),this.add(u);const d=new hr(ao,lo,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new ne(0,0,1)),this.add(d);const h=new hr(ao,lo,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new ne(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[o,l,f,u,d,h]=this.children,m=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=fi,e.xr.enabled=!1;const S=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(t,o),e.setRenderTarget(s,1),e.render(t,l),e.setRenderTarget(s,2),e.render(t,f),e.setRenderTarget(s,3),e.render(t,u),e.setRenderTarget(s,4),e.render(t,d),s.texture.generateMipmaps=S,e.setRenderTarget(s,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=g,e.xr.enabled=_,s.texture.needsPMREMUpdate=!0}}class w_ extends Pr{constructor(e,t,s,o,l,f,u,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,s,o,l,f,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H2 extends ws{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new w_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:Ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:mr,blending:$i});l.uniforms.tEquirect.value=t;const f=new ci(o,l),u=t.minFilter;return t.minFilter===tc&&(t.minFilter=dr),new W2(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,s,o);e.setRenderTarget(l)}}const Pd=new ne,$2=new ne,j2=new pr;class cs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Pd.subVectors(s,t).cross($2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const s=e.delta(Pd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(s).multiplyScalar(l).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||j2.getNormalMatrix(e),o=this.coplanarPoint(Pd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const uo=new bh,wu=new ne;class M_{constructor(e=new cs,t=new cs,s=new cs,o=new cs,l=new cs,f=new cs){this.planes=[e,t,s,o,l,f]}set(e,t,s,o,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(s),u[3].copy(o),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e){const t=this.planes,s=e.elements,o=s[0],l=s[1],f=s[2],u=s[3],d=s[4],h=s[5],m=s[6],g=s[7],_=s[8],S=s[9],M=s[10],v=s[11],y=s[12],E=s[13],R=s[14],L=s[15];return t[0].setComponents(u-o,g-d,v-_,L-y).normalize(),t[1].setComponents(u+o,g+d,v+_,L+y).normalize(),t[2].setComponents(u+l,g+h,v+S,L+E).normalize(),t[3].setComponents(u-l,g-h,v-S,L-E).normalize(),t[4].setComponents(u-f,g-m,v-M,L-R).normalize(),t[5].setComponents(u+f,g+m,v+M,L+R).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(uo)}intersectsSprite(e){return uo.center.set(0,0,0),uo.radius=.7071067811865476,uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(uo)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(wu.x=o.normal.x>0?e.max.x:e.min.x,wu.y=o.normal.y>0?e.max.y:e.min.y,wu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b_(){let r=null,e=!1,t=null,s=null;function o(l,f){t(l,f),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function q2(r,e){const t=e.isWebGL2,s=new WeakMap;function o(h,m){const g=h.array,_=h.usage,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,g,_),h.onUploadCallback();let M;if(g instanceof Float32Array)M=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(g instanceof Int16Array)M=5122;else if(g instanceof Uint32Array)M=5125;else if(g instanceof Int32Array)M=5124;else if(g instanceof Int8Array)M=5120;else if(g instanceof Uint8Array)M=5121;else if(g instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function l(h,m,g){const _=m.array,S=m.updateRange;r.bindBuffer(g,h),S.count===-1?r.bufferSubData(g,0,_):(t?r.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):r.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(h){return h.isInterleavedBufferAttribute&&(h=h.data),s.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=s.get(h);m&&(r.deleteBuffer(m.buffer),s.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const _=s.get(h);(!_||_.version<h.version)&&s.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=s.get(h);g===void 0?s.set(h,o(h,m)):g.version<h.version&&(l(g.buffer,h,m),g.version=h.version)}return{get:f,remove:u,update:d}}class rc extends Ms{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,f=t/2,u=Math.floor(s),d=Math.floor(o),h=u+1,m=d+1,g=e/u,_=t/d,S=[],M=[],v=[],y=[];for(let E=0;E<m;E++){const R=E*_-f;for(let L=0;L<h;L++){const T=L*g-l;M.push(T,-R,0),v.push(0,0,1),y.push(L/u),y.push(1-E/d)}}for(let E=0;E<d;E++)for(let R=0;R<u;R++){const L=R+h*E,T=R+h*(E+1),A=R+1+h*(E+1),I=R+1+h*E;S.push(L,T,I),S.push(T,A,I)}this.setIndex(S),this.setAttribute("position",new _s(M,3)),this.setAttribute("normal",new _s(v,3)),this.setAttribute("uv",new _s(y,2))}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var X2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e3="vec3 transformed = vec3( position );",t3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n3=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,r3=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,i3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h3=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,p3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,m3=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y3="gl_FragColor = linearToOutputTexel( gl_FragColor );",S3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,M3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b3=`#ifdef USE_ENVMAP
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
#endif`,E3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C3=`#ifdef USE_ENVMAP
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
#endif`,T3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L3=`#ifdef USE_GRADIENTMAP
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
}`,D3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,z3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,F3=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,O3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,B3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,G3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,W3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,H3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,q3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Z3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,oE=`#ifdef USE_MORPHTARGETS
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
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lE=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,AE=`float getShadowMask() {
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
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
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
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,OE=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,UE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,BE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,VE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,GE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,WE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,HE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,JE=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iC=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,aC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,uC=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hC=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,mC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,vC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wC=`uniform float rotation;
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
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:X2,alphamap_pars_fragment:Y2,alphatest_fragment:K2,alphatest_pars_fragment:Z2,aomap_fragment:Q2,aomap_pars_fragment:J2,begin_vertex:e3,beginnormal_vertex:t3,bsdfs:n3,iridescence_fragment:r3,bumpmap_pars_fragment:i3,clipping_planes_fragment:s3,clipping_planes_pars_fragment:o3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:l3,color_fragment:u3,color_pars_fragment:c3,color_pars_vertex:f3,color_vertex:d3,common:h3,cube_uv_reflection_fragment:p3,defaultnormal_vertex:m3,displacementmap_pars_vertex:g3,displacementmap_vertex:v3,emissivemap_fragment:_3,emissivemap_pars_fragment:x3,encodings_fragment:y3,encodings_pars_fragment:S3,envmap_fragment:w3,envmap_common_pars_fragment:M3,envmap_pars_fragment:b3,envmap_pars_vertex:E3,envmap_physical_pars_fragment:F3,envmap_vertex:C3,fog_vertex:T3,fog_pars_vertex:A3,fog_fragment:R3,fog_pars_fragment:P3,gradientmap_pars_fragment:L3,lightmap_fragment:D3,lightmap_pars_fragment:I3,lights_lambert_fragment:k3,lights_lambert_pars_fragment:N3,lights_pars_begin:z3,lights_toon_fragment:O3,lights_toon_pars_fragment:U3,lights_phong_fragment:B3,lights_phong_pars_fragment:V3,lights_physical_fragment:G3,lights_physical_pars_fragment:W3,lights_fragment_begin:H3,lights_fragment_maps:$3,lights_fragment_end:j3,logdepthbuf_fragment:q3,logdepthbuf_pars_fragment:X3,logdepthbuf_pars_vertex:Y3,logdepthbuf_vertex:K3,map_fragment:Z3,map_pars_fragment:Q3,map_particle_fragment:J3,map_particle_pars_fragment:eE,metalnessmap_fragment:tE,metalnessmap_pars_fragment:nE,morphcolor_vertex:rE,morphnormal_vertex:iE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:aE,normal_fragment_maps:lE,normal_pars_fragment:uE,normal_pars_vertex:cE,normal_vertex:fE,normalmap_pars_fragment:dE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,output_fragment:vE,packing:_E,premultiplied_alpha_fragment:xE,project_vertex:yE,dithering_fragment:SE,dithering_pars_fragment:wE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:CE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:PE,skinning_vertex:LE,skinnormal_vertex:DE,specularmap_fragment:IE,specularmap_pars_fragment:kE,tonemapping_fragment:NE,tonemapping_pars_fragment:zE,transmission_fragment:FE,transmission_pars_fragment:OE,uv_pars_fragment:UE,uv_pars_vertex:BE,uv_vertex:VE,uv2_pars_fragment:GE,uv2_pars_vertex:WE,uv2_vertex:HE,worldpos_vertex:$E,background_vert:jE,background_frag:qE,cube_vert:XE,cube_frag:YE,depth_vert:KE,depth_frag:ZE,distanceRGBA_vert:QE,distanceRGBA_frag:JE,equirect_vert:eC,equirect_frag:tC,linedashed_vert:nC,linedashed_frag:rC,meshbasic_vert:iC,meshbasic_frag:sC,meshlambert_vert:oC,meshlambert_frag:aC,meshmatcap_vert:lC,meshmatcap_frag:uC,meshnormal_vert:cC,meshnormal_frag:fC,meshphong_vert:dC,meshphong_frag:hC,meshphysical_vert:pC,meshphysical_frag:mC,meshtoon_vert:gC,meshtoon_frag:vC,points_vert:_C,points_frag:xC,shadow_vert:yC,shadow_frag:SC,sprite_vert:wC,sprite_frag:MC},Ce={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pr},uv2Transform:{value:new pr},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pr}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pr}}},Vr={basic:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:bn([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:bn([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:bn([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new pr},t2D:{value:null}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},cube:{uniforms:bn([Ce.envmap,{opacity:{value:1}}]),vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:bn([Ce.lights,Ce.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Vr.physical={uniforms:bn([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};function bC(r,e,t,s,o,l){const f=new Ct(0);let u=o===!0?0:1,d,h,m=null,g=0,_=null;function S(v,y){let E=!1,R=y.isScene===!0?y.background:null;R&&R.isTexture&&(R=e.get(R));const L=r.xr,T=L.getSession&&L.getSession();T&&T.environmentBlendMode==="additive"&&(R=null),R===null?M(f,u):R&&R.isColor&&(M(R,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ec)?(h===void 0&&(h=new ci(new Xa(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ao(Vr.cube.uniforms),vertexShader:Vr.cube.vertexShader,fragmentShader:Vr.cube.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,(m!==R||g!==R.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,m=R,g=R.version,_=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new ci(new rc(2,2),new qi({name:"BackgroundMaterial",uniforms:Ao(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:bo,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=R,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||g!==R.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,m=R,g=R.version,_=r.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function M(v,y){t.buffers.color.setClear(v.r,v.g,v.b,y,l)}return{getClearColor:function(){return f},setClearColor:function(v,y=1){f.set(v),u=y,M(f,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,M(f,u)},render:S}}function EC(r,e,t,s){const o=r.getParameter(34921),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),f=s.isWebGL2||l!==null,u={},d=y(null);let h=d,m=!1;function g(j,ie,he,le,$){let B=!1;if(f){const W=v(le,he,ie);h!==W&&(h=W,S(h.object)),B=E(j,le,he,$),B&&R(j,le,he,$)}else{const W=ie.wireframe===!0;(h.geometry!==le.id||h.program!==he.id||h.wireframe!==W)&&(h.geometry=le.id,h.program=he.id,h.wireframe=W,B=!0)}$!==null&&t.update($,34963),(B||m)&&(m=!1,C(j,ie,he,le),$!==null&&r.bindBuffer(34963,t.get($).buffer))}function _(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function S(j){return s.isWebGL2?r.bindVertexArray(j):l.bindVertexArrayOES(j)}function M(j){return s.isWebGL2?r.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function v(j,ie,he){const le=he.wireframe===!0;let $=u[j.id];$===void 0&&($={},u[j.id]=$);let B=$[ie.id];B===void 0&&(B={},$[ie.id]=B);let W=B[le];return W===void 0&&(W=y(_()),B[le]=W),W}function y(j){const ie=[],he=[],le=[];for(let $=0;$<o;$++)ie[$]=0,he[$]=0,le[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:he,attributeDivisors:le,object:j,attributes:{},index:null}}function E(j,ie,he,le){const $=h.attributes,B=ie.attributes;let W=0;const k=he.getAttributes();for(const V in k)if(k[V].location>=0){const pe=$[V];let Me=B[V];if(Me===void 0&&(V==="instanceMatrix"&&j.instanceMatrix&&(Me=j.instanceMatrix),V==="instanceColor"&&j.instanceColor&&(Me=j.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;W++}return h.attributesNum!==W||h.index!==le}function R(j,ie,he,le){const $={},B=ie.attributes;let W=0;const k=he.getAttributes();for(const V in k)if(k[V].location>=0){let pe=B[V];pe===void 0&&(V==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),V==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),$[V]=Me,W++}h.attributes=$,h.attributesNum=W,h.index=le}function L(){const j=h.newAttributes;for(let ie=0,he=j.length;ie<he;ie++)j[ie]=0}function T(j){A(j,0)}function A(j,ie){const he=h.newAttributes,le=h.enabledAttributes,$=h.attributeDivisors;he[j]=1,le[j]===0&&(r.enableVertexAttribArray(j),le[j]=1),$[j]!==ie&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ie),$[j]=ie)}function I(){const j=h.newAttributes,ie=h.enabledAttributes;for(let he=0,le=ie.length;he<le;he++)ie[he]!==j[he]&&(r.disableVertexAttribArray(he),ie[he]=0)}function O(j,ie,he,le,$,B){s.isWebGL2===!0&&(he===5124||he===5125)?r.vertexAttribIPointer(j,ie,he,$,B):r.vertexAttribPointer(j,ie,he,le,$,B)}function C(j,ie,he,le){if(s.isWebGL2===!1&&(j.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const $=le.attributes,B=he.getAttributes(),W=ie.defaultAttributeValues;for(const k in B){const V=B[k];if(V.location>=0){let re=$[k];if(re===void 0&&(k==="instanceMatrix"&&j.instanceMatrix&&(re=j.instanceMatrix),k==="instanceColor"&&j.instanceColor&&(re=j.instanceColor)),re!==void 0){const pe=re.normalized,Me=re.itemSize,J=t.get(re);if(J===void 0)continue;const Fe=J.buffer,Se=J.type,Te=J.bytesPerElement;if(re.isInterleavedBufferAttribute){const me=re.data,tt=me.stride,je=re.offset;if(me.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)A(V.location+Oe,me.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)T(V.location+Oe);r.bindBuffer(34962,Fe);for(let Oe=0;Oe<V.locationSize;Oe++)O(V.location+Oe,Me/V.locationSize,Se,pe,tt*Te,(je+Me/V.locationSize*Oe)*Te)}else{if(re.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)A(V.location+me,re.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<V.locationSize;me++)T(V.location+me);r.bindBuffer(34962,Fe);for(let me=0;me<V.locationSize;me++)O(V.location+me,Me/V.locationSize,Se,pe,Me*Te,Me/V.locationSize*me*Te)}}else if(W!==void 0){const pe=W[k];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(V.location,pe);break;case 3:r.vertexAttrib3fv(V.location,pe);break;case 4:r.vertexAttrib4fv(V.location,pe);break;default:r.vertexAttrib1fv(V.location,pe)}}}}I()}function F(){ae();for(const j in u){const ie=u[j];for(const he in ie){const le=ie[he];for(const $ in le)M(le[$].object),delete le[$];delete ie[he]}delete u[j]}}function w(j){if(u[j.id]===void 0)return;const ie=u[j.id];for(const he in ie){const le=ie[he];for(const $ in le)M(le[$].object),delete le[$];delete ie[he]}delete u[j.id]}function G(j){for(const ie in u){const he=u[ie];if(he[j.id]===void 0)continue;const le=he[j.id];for(const $ in le)M(le[$].object),delete le[$];delete he[j.id]}}function ae(){X(),m=!0,h!==d&&(h=d,S(h.object))}function X(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ae,resetDefaultState:X,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:L,enableAttribute:T,disableUnusedAttributes:I}}function CC(r,e,t,s){const o=s.isWebGL2;let l;function f(h){l=h}function u(h,m){r.drawArrays(l,h,m),t.update(m,l,1)}function d(h,m,g){if(g===0)return;let _,S;if(o)_=r,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](l,h,m,g),t.update(m,l,g)}this.setMode=f,this.render=u,this.renderInstances=d}function TC(r,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=r.getParameter(34930),_=r.getParameter(35660),S=r.getParameter(3379),M=r.getParameter(34076),v=r.getParameter(34921),y=r.getParameter(36347),E=r.getParameter(36348),R=r.getParameter(36349),L=_>0,T=f||e.has("OES_texture_float"),A=L&&T,I=f?r.getParameter(36183):0;return{isWebGL2:f,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:R,vertexTextures:L,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:I}}function AC(r){const e=this;let t=null,s=0,o=!1,l=!1;const f=new cs,u=new pr,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_,S){const M=g.length!==0||_||s!==0||o;return o=_,t=m(g,S,0),s=g.length,M},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1,h()},this.setState=function(g,_,S){const M=g.clippingPlanes,v=g.clipIntersection,y=g.clipShadows,E=r.get(g);if(!o||M===null||M.length===0||l&&!y)l?m(null):h();else{const R=l?0:s,L=R*4;let T=E.clippingState||null;d.value=T,T=m(M,_,L,S);for(let A=0;A!==L;++A)T[A]=t[A];E.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,_,S,M){const v=g!==null?g.length:0;let y=null;if(v!==0){if(y=d.value,M!==!0||y===null){const E=S+v*4,R=_.matrixWorldInverse;u.getNormalMatrix(R),(y===null||y.length<E)&&(y=new Float32Array(E));for(let L=0,T=S;L!==v;++L,T+=4)f.copy(g[L]).applyMatrix4(R,u),f.normal.toArray(y,T),y[T+3]=f.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function RC(r){let e=new WeakMap;function t(f,u){return u===Kd?f.mapping=Eo:u===Zd&&(f.mapping=Co),f}function s(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const u=f.mapping;if(u===Kd||u===Zd)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const h=new H2(d.height/2);return h.fromEquirectangularTexture(r,f),e.set(f,h),f.addEventListener("dispose",o),t(h.texture,f.mapping)}else return null}}return f}function o(f){const u=f.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Eh extends S_{constructor(e=-1,t=1,s=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,f=s+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,f=l+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ho=4,k0=[.125,.215,.35,.446,.526,.582],ds=20,Ld=new Eh,N0=new Ct;let Dd=null;const fs=(1+Math.sqrt(5))/2,co=1/fs,z0=[new ne(1,1,1),new ne(-1,1,1),new ne(1,1,-1),new ne(-1,1,-1),new ne(0,fs,co),new ne(0,fs,-co),new ne(co,0,fs),new ne(-co,0,fs),new ne(fs,co,0),new ne(-fs,co,0)];class F0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Dd=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd),e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:dr,minFilter:dr,generateMipmaps:!1,type:Fa,format:Gr,encoding:Ss,depthBuffer:!1},o=O0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PC(l)),this._blurMaterial=LC(l,e,t)}return o}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,Ld)}_sceneToCubeUV(e,t,s,o){const u=new hr(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(N0),m.toneMapping=fi,m.autoClear=!1;const S=new __({name:"PMREM.Background",side:mr,depthWrite:!1,depthTest:!1}),M=new ci(new Xa,S);let v=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,v=!0):(S.color.copy(N0),v=!0);for(let E=0;E<6;E++){const R=E%3;R===0?(u.up.set(0,d[E],0),u.lookAt(h[E],0,0)):R===1?(u.up.set(0,0,d[E]),u.lookAt(0,h[E],0)):(u.up.set(0,d[E],0),u.lookAt(0,0,h[E]));const L=this._cubeSize;Mu(o,R*L,E>2?L:0,L,L),m.setRenderTarget(o),v&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Eo||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new ci(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const d=this._cubeSize;Mu(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(f,Ld)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=z0[(o-1)%z0.length];this._blur(e,o-1,o,l,f)}t.autoClear=s}_blur(e,t,s,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,s,o,"latitudinal",l),this._halfBlur(f,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,f,u){const d=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ci(this._lodPlanes[o],h),_=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),v=l/M,y=isFinite(l)?1+Math.floor(m*v):ds;y>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const E=[];let R=0;for(let O=0;O<ds;++O){const C=O/v,F=Math.exp(-C*C/2);E.push(F),O===0?R+=F:O<y&&(R+=2*F)}for(let O=0;O<E.length;O++)E[O]=E[O]/R;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=E,_.latitudinal.value=f==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-s;const T=this._sizeLods[o],A=3*T*(o>L-ho?o-L+ho:0),I=4*(this._cubeSize-T);Mu(t,A,I,3*T,2*T),d.setRenderTarget(t),d.render(g,Ld)}}function PC(r){const e=[],t=[],s=[];let o=r;const l=r-ho+1+k0.length;for(let f=0;f<l;f++){const u=Math.pow(2,o);t.push(u);let d=1/u;f>r-ho?d=k0[f-r+ho-1]:f===0&&(d=0),s.push(d);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,v=3,y=2,E=1,R=new Float32Array(v*M*S),L=new Float32Array(y*M*S),T=new Float32Array(E*M*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,C=I>2?0:-1,F=[O,C,0,O+2/3,C,0,O+2/3,C+1,0,O,C,0,O+2/3,C+1,0,O,C+1,0];R.set(F,v*M*I),L.set(_,y*M*I);const w=[I,I,I,I,I,I];T.set(w,E*M*I)}const A=new Ms;A.setAttribute("position",new Hr(R,v)),A.setAttribute("uv",new Hr(L,y)),A.setAttribute("faceIndex",new Hr(T,E)),e.push(A),o>ho&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function O0(r,e,t){const s=new ws(r,e,t);return s.texture.mapping=ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mu(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function LC(r,e,t){const s=new Float32Array(ds),o=new ne(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function U0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function B0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function DC(r){let e=new WeakMap,t=null;function s(u){if(u&&u.isTexture){const d=u.mapping,h=d===Kd||d===Zd,m=d===Eo||d===Co;if(h||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new F0(r)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(h&&g&&g.height>0||m&&g&&o(g)){t===null&&(t=new F0(r));const _=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",l),_.texture}else return null}}}return u}function o(u){let d=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&d++;return d===h}function l(u){const d=u.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:f}}function IC(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function kC(r,e,t,s){const o={},l=new WeakMap;function f(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",f),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],34962);const S=g.morphAttributes;for(const M in S){const v=S[M];for(let y=0,E=v.length;y<E;y++)e.update(v[y],34962)}}function h(g){const _=[],S=g.index,M=g.attributes.position;let v=0;if(S!==null){const R=S.array;v=S.version;for(let L=0,T=R.length;L<T;L+=3){const A=R[L+0],I=R[L+1],O=R[L+2];_.push(A,I,I,O,O,A)}}else{const R=M.array;v=M.version;for(let L=0,T=R.length/3-1;L<T;L+=3){const A=L+0,I=L+1,O=L+2;_.push(A,I,I,O,O,A)}}const y=new(d_(_)?y_:x_)(_,1);y.version=v;const E=l.get(g);E&&e.remove(E),l.set(g,y)}function m(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function NC(r,e,t,s){const o=s.isWebGL2;let l;function f(_){l=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function m(_,S){r.drawElements(l,S,u,_*d),t.update(S,l,1)}function g(_,S,M){if(M===0)return;let v,y;if(o)v=r,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](l,S,u,_*d,M),t.update(S,l,M)}this.setMode=f,this.setIndex=h,this.render=m,this.renderInstances=g}function zC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,f,u){switch(t.calls++,f){case 4:t.triangles+=u*(l/3);break;case 1:t.lines+=u*(l/2);break;case 3:t.lines+=u*(l-1);break;case 2:t.lines+=u*l;break;case 0:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function FC(r,e){return r[0]-e[0]}function OC(r,e){return Math.abs(e[1])-Math.abs(r[1])}function UC(r,e,t){const s={},o=new Float32Array(8),l=new WeakMap,f=new gn,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,m,g,_){const S=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=v!==void 0?v.length:0;let E=l.get(m);if(E===void 0||E.count!==y){let he=function(){j.dispose(),l.delete(m),m.removeEventListener("dispose",he)};var M=he;E!==void 0&&E.texture.dispose();const T=m.morphAttributes.position!==void 0,A=m.morphAttributes.normal!==void 0,I=m.morphAttributes.color!==void 0,O=m.morphAttributes.position||[],C=m.morphAttributes.normal||[],F=m.morphAttributes.color||[];let w=0;T===!0&&(w=1),A===!0&&(w=2),I===!0&&(w=3);let G=m.attributes.position.count*w,ae=1;G>e.maxTextureSize&&(ae=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const X=new Float32Array(G*ae*4*y),j=new g_(X,G,ae,y);j.type=ps,j.needsUpdate=!0;const ie=w*4;for(let le=0;le<y;le++){const $=O[le],B=C[le],W=F[le],k=G*ae*4*le;for(let V=0;V<$.count;V++){const re=V*ie;T===!0&&(f.fromBufferAttribute($,V),X[k+re+0]=f.x,X[k+re+1]=f.y,X[k+re+2]=f.z,X[k+re+3]=0),A===!0&&(f.fromBufferAttribute(B,V),X[k+re+4]=f.x,X[k+re+5]=f.y,X[k+re+6]=f.z,X[k+re+7]=0),I===!0&&(f.fromBufferAttribute(W,V),X[k+re+8]=f.x,X[k+re+9]=f.y,X[k+re+10]=f.z,X[k+re+11]=W.itemSize===4?f.w:1)}}E={count:y,texture:j,size:new _t(G,ae)},l.set(m,E),m.addEventListener("dispose",he)}let R=0;for(let T=0;T<S.length;T++)R+=S[T];const L=m.morphTargetsRelative?1:1-R;_.getUniforms().setValue(r,"morphTargetBaseInfluence",L),_.getUniforms().setValue(r,"morphTargetInfluences",S),_.getUniforms().setValue(r,"morphTargetsTexture",E.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",E.size)}else{const v=S===void 0?0:S.length;let y=s[m.id];if(y===void 0||y.length!==v){y=[];for(let A=0;A<v;A++)y[A]=[A,0];s[m.id]=y}for(let A=0;A<v;A++){const I=y[A];I[0]=A,I[1]=S[A]}y.sort(OC);for(let A=0;A<8;A++)A<v&&y[A][1]?(u[A][0]=y[A][0],u[A][1]=y[A][1]):(u[A][0]=Number.MAX_SAFE_INTEGER,u[A][1]=0);u.sort(FC);const E=m.morphAttributes.position,R=m.morphAttributes.normal;let L=0;for(let A=0;A<8;A++){const I=u[A],O=I[0],C=I[1];O!==Number.MAX_SAFE_INTEGER&&C?(E&&m.getAttribute("morphTarget"+A)!==E[O]&&m.setAttribute("morphTarget"+A,E[O]),R&&m.getAttribute("morphNormal"+A)!==R[O]&&m.setAttribute("morphNormal"+A,R[O]),o[A]=C,L+=C):(E&&m.hasAttribute("morphTarget"+A)===!0&&m.deleteAttribute("morphTarget"+A),R&&m.hasAttribute("morphNormal"+A)===!0&&m.deleteAttribute("morphNormal"+A),o[A]=0)}const T=m.morphTargetsRelative?1:1-L;_.getUniforms().setValue(r,"morphTargetBaseInfluence",T),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:d}}function BC(r,e,t,s){let o=new WeakMap;function l(d){const h=s.render.frame,m=d.geometry,g=e.get(d,m);return o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),g}function f(){o=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:f}}const E_=new Pr,C_=new g_,T_=new T2,A_=new w_,V0=[],G0=[],W0=new Float32Array(16),H0=new Float32Array(9),$0=new Float32Array(4);function ko(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=V0[o];if(l===void 0&&(l=new Float32Array(o),V0[o]=l),e!==0){s.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,r[f].toArray(l,u)}return l}function Ln(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Dn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function ic(r,e){let t=G0[e];t===void 0&&(t=new Int32Array(e),G0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function VC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;r.uniform2fv(this.addr,e),Dn(t,e)}}function WC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;r.uniform3fv(this.addr,e),Dn(t,e)}}function HC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;r.uniform4fv(this.addr,e),Dn(t,e)}}function $C(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,s))return;$0.set(s),r.uniformMatrix2fv(this.addr,!1,$0),Dn(t,s)}}function jC(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,s))return;H0.set(s),r.uniformMatrix3fv(this.addr,!1,H0),Dn(t,s)}}function qC(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,s))return;W0.set(s),r.uniformMatrix4fv(this.addr,!1,W0),Dn(t,s)}}function XC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YC(r,e){const t=this.cache;Ln(t,e)||(r.uniform2iv(this.addr,e),Dn(t,e))}function KC(r,e){const t=this.cache;Ln(t,e)||(r.uniform3iv(this.addr,e),Dn(t,e))}function ZC(r,e){const t=this.cache;Ln(t,e)||(r.uniform4iv(this.addr,e),Dn(t,e))}function QC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function JC(r,e){const t=this.cache;Ln(t,e)||(r.uniform2uiv(this.addr,e),Dn(t,e))}function eT(r,e){const t=this.cache;Ln(t,e)||(r.uniform3uiv(this.addr,e),Dn(t,e))}function tT(r,e){const t=this.cache;Ln(t,e)||(r.uniform4uiv(this.addr,e),Dn(t,e))}function nT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2D(e||E_,o)}function rT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||T_,o)}function iT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||A_,o)}function sT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||C_,o)}function oT(r){switch(r){case 5126:return VC;case 35664:return GC;case 35665:return WC;case 35666:return HC;case 35674:return $C;case 35675:return jC;case 35676:return qC;case 5124:case 35670:return XC;case 35667:case 35671:return YC;case 35668:case 35672:return KC;case 35669:case 35673:return ZC;case 5125:return QC;case 36294:return JC;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(r,e){r.uniform1fv(this.addr,e)}function lT(r,e){const t=ko(e,this.size,2);r.uniform2fv(this.addr,t)}function uT(r,e){const t=ko(e,this.size,3);r.uniform3fv(this.addr,t)}function cT(r,e){const t=ko(e,this.size,4);r.uniform4fv(this.addr,t)}function fT(r,e){const t=ko(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dT(r,e){const t=ko(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hT(r,e){const t=ko(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pT(r,e){r.uniform1iv(this.addr,e)}function mT(r,e){r.uniform2iv(this.addr,e)}function gT(r,e){r.uniform3iv(this.addr,e)}function vT(r,e){r.uniform4iv(this.addr,e)}function _T(r,e){r.uniform1uiv(this.addr,e)}function xT(r,e){r.uniform2uiv(this.addr,e)}function yT(r,e){r.uniform3uiv(this.addr,e)}function ST(r,e){r.uniform4uiv(this.addr,e)}function wT(r,e,t){const s=e.length,o=ic(t,s);r.uniform1iv(this.addr,o);for(let l=0;l!==s;++l)t.setTexture2D(e[l]||E_,o[l])}function MT(r,e,t){const s=e.length,o=ic(t,s);r.uniform1iv(this.addr,o);for(let l=0;l!==s;++l)t.setTexture3D(e[l]||T_,o[l])}function bT(r,e,t){const s=e.length,o=ic(t,s);r.uniform1iv(this.addr,o);for(let l=0;l!==s;++l)t.setTextureCube(e[l]||A_,o[l])}function ET(r,e,t){const s=e.length,o=ic(t,s);r.uniform1iv(this.addr,o);for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||C_,o[l])}function CT(r){switch(r){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return ET}}class TT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.setValue=oT(t.type)}}class AT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.size=t.size,this.setValue=CT(t.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const u=o[l];u.setValue(e,t[u.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function j0(r,e){r.seq.push(e),r.map[e.id]=e}function PT(r,e,t){const s=r.name,o=s.length;for(Id.lastIndex=0;;){const l=Id.exec(s),f=Id.lastIndex;let u=l[1];const d=l[2]==="]",h=l[3];if(d&&(u=u|0),h===void 0||h==="["&&f+2===o){j0(t,h===void 0?new TT(u,r,e):new AT(u,r,e));break}else{let g=t.map[u];g===void 0&&(g=new RT(u),j0(t,g)),t=g}}}class Lu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,35718);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);PT(l,f,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,f=t.length;l!==f;++l){const u=t[l],d=s[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&s.push(f)}return s}}function q0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}let LT=0;function DT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const u=f+1;s.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return s.join(`
`)}function IT(r){switch(r){case Ss:return["Linear","( value )"];case jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function X0(r,e,t){const s=r.getShaderParameter(e,35713),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+DT(r.getShaderSource(e),f)}else return o}function kT(r,e){const t=IT(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function NT(r,e){let t;switch(e){case Jb:t="Linear";break;case e2:t="Reinhard";break;case t2:t="OptimizedCineon";break;case n2:t="ACESFilmic";break;case r2:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ea).join(`
`)}function FT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function OT(r,e){const t={},s=r.getProgramParameter(e,35721);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),f=l.name;let u=1;l.type===35674&&(u=2),l.type===35675&&(u=3),l.type===35676&&(u=4),t[f]={type:l.type,location:r.getAttribLocation(e,f),locationSize:u}}return t}function Ea(r){return r!==""}function Y0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(r){return r.replace(UT,BT)}function BT(r,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nh(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(r){return r.replace(VT,GT)}function GT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Q0(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Eo:case Co:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $T(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case u_:e="ENVMAP_BLENDING_MULTIPLY";break;case Zb:e="ENVMAP_BLENDING_MIX";break;case Qb:e="ENVMAP_BLENDING_ADD";break}return e}function qT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function XT(r,e,t,s){const o=r.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const d=WT(t),h=HT(t),m=$T(t),g=jT(t),_=qT(t),S=t.isWebGL2?"":zT(t),M=FT(l),v=o.createProgram();let y,E,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[M].filter(Ea).join(`
`),y.length>0&&(y+=`
`),E=[S,M].filter(Ea).join(`
`),E.length>0&&(E+=`
`)):(y=[Q0(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),E=[S,Q0(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?nt.tonemapping_pars_fragment:"",t.toneMapping!==fi?NT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,kT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),f=nh(f),f=Y0(f,t),f=K0(f,t),u=nh(u),u=Y0(u,t),u=K0(u,t),f=Z0(f),u=Z0(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",t.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const L=R+y+f,T=R+E+u,A=q0(o,35633,L),I=q0(o,35632,T);if(o.attachShader(v,A),o.attachShader(v,I),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v),r.debug.checkShaderErrors){const F=o.getProgramInfoLog(v).trim(),w=o.getShaderInfoLog(A).trim(),G=o.getShaderInfoLog(I).trim();let ae=!0,X=!0;if(o.getProgramParameter(v,35714)===!1){ae=!1;const j=X0(o,A,"vertex"),ie=X0(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,35715)+`

Program Info Log: `+F+`
`+j+`
`+ie)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(w===""||G==="")&&(X=!1);X&&(this.diagnostics={runnable:ae,programLog:F,vertexShader:{log:w,prefix:y},fragmentShader:{log:G,prefix:E}})}o.deleteShader(A),o.deleteShader(I);let O;this.getUniforms=function(){return O===void 0&&(O=new Lu(o,v)),O};let C;return this.getAttributes=function(){return C===void 0&&(C=OT(o,v)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=I,this}let YT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new ZT(e),t.set(e,s)),s}}class ZT{constructor(e){this.id=YT++,this.code=e,this.usedTimes=0}}function QT(r,e,t,s,o,l,f){const u=new v_,d=new KT,h=[],m=o.isWebGL2,g=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C,F,w,G,ae){const X=G.fog,j=ae.geometry,ie=C.isMeshStandardMaterial?G.environment:null,he=(C.isMeshStandardMaterial?t:e).get(C.envMap||ie),le=he&&he.mapping===ec?he.image.height:null,$=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,W=B!==void 0?B.length:0;let k=0;j.morphAttributes.position!==void 0&&(k=1),j.morphAttributes.normal!==void 0&&(k=2),j.morphAttributes.color!==void 0&&(k=3);let V,re,pe,Me;if($){const tt=Vr[$];V=tt.vertexShader,re=tt.fragmentShader}else V=C.vertexShader,re=C.fragmentShader,d.update(C),pe=d.getVertexShaderID(C),Me=d.getFragmentShaderID(C);const J=r.getRenderTarget(),Fe=C.alphaTest>0,Se=C.clearcoat>0,Te=C.iridescence>0;return{isWebGL2:m,shaderID:$,shaderName:C.type,vertexShader:V,fragmentShader:re,defines:C.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:_,outputEncoding:J===null?r.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:Ss,map:!!C.map,matcap:!!C.matcap,envMap:!!he,envMapMode:he&&he.mapping,envMapCubeUVHeight:le,lightMap:!!C.lightMap,aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===M2,tangentSpaceNormalMap:C.normalMapType===w2,decodeVideoTexture:!!C.map&&C.map.isVideoTexture===!0&&C.map.encoding===jt,clearcoat:Se,clearcoatMap:Se&&!!C.clearcoatMap,clearcoatRoughnessMap:Se&&!!C.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!C.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!C.iridescenceMap,iridescenceThicknessMap:Te&&!!C.iridescenceThicknessMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,specularIntensityMap:!!C.specularIntensityMap,specularColorMap:!!C.specularColorMap,opaque:C.transparent===!1&&C.blending===vo,alphaMap:!!C.alphaMap,alphaTest:Fe,gradientMap:!!C.gradientMap,sheen:C.sheen>0,sheenColorMap:!!C.sheenColorMap,sheenRoughnessMap:!!C.sheenRoughnessMap,transmission:C.transmission>0,transmissionMap:!!C.transmissionMap,thicknessMap:!!C.thicknessMap,combine:C.combine,vertexTangents:!!C.normalMap&&!!j.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.iridescenceMap||!!C.iridescenceThicknessMap||!!C.displacementMap||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||!!C.sheenColorMap||!!C.sheenRoughnessMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.iridescenceMap||C.iridescenceThicknessMap||C.transmission>0||C.transmissionMap||C.thicknessMap||C.specularIntensityMap||C.specularColorMap||C.sheen>0||C.sheenColorMap||C.sheenRoughnessMap)&&!!C.displacementMap,fog:!!X,useFog:C.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ae.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:k,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:C.toneMapped?r.toneMapping:fi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===mr,useDepthPacking:!!C.depthPacking,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||s.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function y(C){const F=[];if(C.shaderID?F.push(C.shaderID):(F.push(C.customVertexShaderID),F.push(C.customFragmentShaderID)),C.defines!==void 0)for(const w in C.defines)F.push(w),F.push(C.defines[w]);return C.isRawShaderMaterial===!1&&(E(F,C),R(F,C),F.push(r.outputEncoding)),F.push(C.customProgramCacheKey),F.join()}function E(C,F){C.push(F.precision),C.push(F.outputEncoding),C.push(F.envMapMode),C.push(F.envMapCubeUVHeight),C.push(F.combine),C.push(F.vertexUvs),C.push(F.fogExp2),C.push(F.sizeAttenuation),C.push(F.morphTargetsCount),C.push(F.morphAttributeCount),C.push(F.numDirLights),C.push(F.numPointLights),C.push(F.numSpotLights),C.push(F.numSpotLightMaps),C.push(F.numHemiLights),C.push(F.numRectAreaLights),C.push(F.numDirLightShadows),C.push(F.numPointLightShadows),C.push(F.numSpotLightShadows),C.push(F.numSpotLightShadowsWithMaps),C.push(F.shadowMapType),C.push(F.toneMapping),C.push(F.numClippingPlanes),C.push(F.numClipIntersection),C.push(F.depthPacking)}function R(C,F){u.disableAll(),F.isWebGL2&&u.enable(0),F.supportsVertexTextures&&u.enable(1),F.instancing&&u.enable(2),F.instancingColor&&u.enable(3),F.map&&u.enable(4),F.matcap&&u.enable(5),F.envMap&&u.enable(6),F.lightMap&&u.enable(7),F.aoMap&&u.enable(8),F.emissiveMap&&u.enable(9),F.bumpMap&&u.enable(10),F.normalMap&&u.enable(11),F.objectSpaceNormalMap&&u.enable(12),F.tangentSpaceNormalMap&&u.enable(13),F.clearcoat&&u.enable(14),F.clearcoatMap&&u.enable(15),F.clearcoatRoughnessMap&&u.enable(16),F.clearcoatNormalMap&&u.enable(17),F.iridescence&&u.enable(18),F.iridescenceMap&&u.enable(19),F.iridescenceThicknessMap&&u.enable(20),F.displacementMap&&u.enable(21),F.specularMap&&u.enable(22),F.roughnessMap&&u.enable(23),F.metalnessMap&&u.enable(24),F.gradientMap&&u.enable(25),F.alphaMap&&u.enable(26),F.alphaTest&&u.enable(27),F.vertexColors&&u.enable(28),F.vertexAlphas&&u.enable(29),F.vertexUvs&&u.enable(30),F.vertexTangents&&u.enable(31),F.uvsVertexOnly&&u.enable(32),C.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.skinning&&u.enable(4),F.morphTargets&&u.enable(5),F.morphNormals&&u.enable(6),F.morphColors&&u.enable(7),F.premultipliedAlpha&&u.enable(8),F.shadowMapEnabled&&u.enable(9),F.physicallyCorrectLights&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.specularIntensityMap&&u.enable(15),F.specularColorMap&&u.enable(16),F.transmission&&u.enable(17),F.transmissionMap&&u.enable(18),F.thicknessMap&&u.enable(19),F.sheen&&u.enable(20),F.sheenColorMap&&u.enable(21),F.sheenRoughnessMap&&u.enable(22),F.decodeVideoTexture&&u.enable(23),F.opaque&&u.enable(24),C.push(u.mask)}function L(C){const F=M[C.type];let w;if(F){const G=Vr[F];w=B2.clone(G.uniforms)}else w=C.uniforms;return w}function T(C,F){let w;for(let G=0,ae=h.length;G<ae;G++){const X=h[G];if(X.cacheKey===F){w=X,++w.usedTimes;break}}return w===void 0&&(w=new XT(r,F,C,l),h.push(w)),w}function A(C){if(--C.usedTimes===0){const F=h.indexOf(C);h[F]=h[h.length-1],h.pop(),C.destroy()}}function I(C){d.remove(C)}function O(){d.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:L,acquireProgram:T,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:O}}function JT(){let r=new WeakMap;function e(l){let f=r.get(l);return f===void 0&&(f={},r.set(l,f)),f}function t(l){r.delete(l)}function s(l,f,u){r.get(l)[f]=u}function o(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function eA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function J0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ev(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function f(g,_,S,M,v,y){let E=r[e];return E===void 0?(E={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:v,group:y},r[e]=E):(E.id=g.id,E.object=g,E.geometry=_,E.material=S,E.groupOrder=M,E.renderOrder=g.renderOrder,E.z=v,E.group=y),e++,E}function u(g,_,S,M,v,y){const E=f(g,_,S,M,v,y);S.transmission>0?s.push(E):S.transparent===!0?o.push(E):t.push(E)}function d(g,_,S,M,v,y){const E=f(g,_,S,M,v,y);S.transmission>0?s.unshift(E):S.transparent===!0?o.unshift(E):t.unshift(E)}function h(g,_){t.length>1&&t.sort(g||eA),s.length>1&&s.sort(_||J0),o.length>1&&o.sort(_||J0)}function m(){for(let g=e,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:u,unshift:d,finish:m,sort:h}}function tA(){let r=new WeakMap;function e(s,o){const l=r.get(s);let f;return l===void 0?(f=new ev,r.set(s,[f])):o>=l.length?(f=new ev,l.push(f)):f=l[o],f}function t(){r=new WeakMap}return{get:e,dispose:t}}function nA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ct};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function rA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iA=0;function sA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oA(r,e){const t=new nA,s=rA(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)o.probe.push(new ne);const l=new ne,f=new vn,u=new vn;function d(m,g){let _=0,S=0,M=0;for(let G=0;G<9;G++)o.probe[G].set(0,0,0);let v=0,y=0,E=0,R=0,L=0,T=0,A=0,I=0,O=0,C=0;m.sort(sA);const F=g!==!0?Math.PI:1;for(let G=0,ae=m.length;G<ae;G++){const X=m[G],j=X.color,ie=X.intensity,he=X.distance,le=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)_+=j.r*ie*F,S+=j.g*ie*F,M+=j.b*ie*F;else if(X.isLightProbe)for(let $=0;$<9;$++)o.probe[$].addScaledVector(X.sh.coefficients[$],ie);else if(X.isDirectionalLight){const $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity*F),X.castShadow){const B=X.shadow,W=s.get(X);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,o.directionalShadow[v]=W,o.directionalShadowMap[v]=le,o.directionalShadowMatrix[v]=X.shadow.matrix,T++}o.directional[v]=$,v++}else if(X.isSpotLight){const $=t.get(X);$.position.setFromMatrixPosition(X.matrixWorld),$.color.copy(j).multiplyScalar(ie*F),$.distance=he,$.coneCos=Math.cos(X.angle),$.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),$.decay=X.decay,o.spot[E]=$;const B=X.shadow;if(X.map&&(o.spotLightMap[O]=X.map,O++,B.updateMatrices(X),X.castShadow&&C++),o.spotLightMatrix[E]=B.matrix,X.castShadow){const W=s.get(X);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,o.spotShadow[E]=W,o.spotShadowMap[E]=le,I++}E++}else if(X.isRectAreaLight){const $=t.get(X);$.color.copy(j).multiplyScalar(ie),$.halfWidth.set(X.width*.5,0,0),$.halfHeight.set(0,X.height*.5,0),o.rectArea[R]=$,R++}else if(X.isPointLight){const $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity*F),$.distance=X.distance,$.decay=X.decay,X.castShadow){const B=X.shadow,W=s.get(X);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,o.pointShadow[y]=W,o.pointShadowMap[y]=le,o.pointShadowMatrix[y]=X.shadow.matrix,A++}o.point[y]=$,y++}else if(X.isHemisphereLight){const $=t.get(X);$.skyColor.copy(X.color).multiplyScalar(ie*F),$.groundColor.copy(X.groundColor).multiplyScalar(ie*F),o.hemi[L]=$,L++}}R>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_FLOAT_1,o.rectAreaLTC2=Ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ce.LTC_HALF_1,o.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=M;const w=o.hash;(w.directionalLength!==v||w.pointLength!==y||w.spotLength!==E||w.rectAreaLength!==R||w.hemiLength!==L||w.numDirectionalShadows!==T||w.numPointShadows!==A||w.numSpotShadows!==I||w.numSpotMaps!==O)&&(o.directional.length=v,o.spot.length=E,o.rectArea.length=R,o.point.length=y,o.hemi.length=L,o.directionalShadow.length=T,o.directionalShadowMap.length=T,o.pointShadow.length=A,o.pointShadowMap.length=A,o.spotShadow.length=I,o.spotShadowMap.length=I,o.directionalShadowMatrix.length=T,o.pointShadowMatrix.length=A,o.spotLightMatrix.length=I+O-C,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=C,w.directionalLength=v,w.pointLength=y,w.spotLength=E,w.rectAreaLength=R,w.hemiLength=L,w.numDirectionalShadows=T,w.numPointShadows=A,w.numSpotShadows=I,w.numSpotMaps=O,o.version=iA++)}function h(m,g){let _=0,S=0,M=0,v=0,y=0;const E=g.matrixWorldInverse;for(let R=0,L=m.length;R<L;R++){const T=m[R];if(T.isDirectionalLight){const A=o.directional[_];A.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(E),_++}else if(T.isSpotLight){const A=o.spot[M];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(E),M++}else if(T.isRectAreaLight){const A=o.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(E),u.identity(),f.copy(T.matrixWorld),f.premultiply(E),u.extractRotation(f),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),v++}else if(T.isPointLight){const A=o.point[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(E),S++}else if(T.isHemisphereLight){const A=o.hemi[y];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(E),y++}}}return{setup:d,setupView:h,state:o}}function tv(r,e){const t=new oA(r,e),s=[],o=[];function l(){s.length=0,o.length=0}function f(g){s.push(g)}function u(g){o.push(g)}function d(g){t.setup(s,g)}function h(g){t.setupView(s,g)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:d,setupLightsView:h,pushLight:f,pushShadow:u}}function aA(r,e){let t=new WeakMap;function s(l,f=0){const u=t.get(l);let d;return u===void 0?(d=new tv(r,e),t.set(l,[d])):f>=u.length?(d=new tv(r,e),u.push(d)):d=u[f],d}function o(){t=new WeakMap}return{get:s,dispose:o}}class lA extends nc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uA extends nc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new ne,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
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
}`;function dA(r,e,t){let s=new M_;const o=new _t,l=new _t,f=new gn,u=new lA({depthPacking:S2}),d=new uA,h={},m=t.maxTextureSize,g={0:mr,1:bo,2:Hi},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:cA,fragmentShader:fA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ms;M.setAttribute("position",new Hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ci(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o_,this.render=function(T,A,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||T.length===0)return;const O=r.getRenderTarget(),C=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),w=r.state;w.setBlending($i),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let G=0,ae=T.length;G<ae;G++){const X=T[G],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const ie=j.getFrameExtents();if(o.multiply(ie),l.copy(j.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ie.x),o.x=l.x*ie.x,j.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ie.y),o.y=l.y*ie.y,j.mapSize.y=l.y)),j.map===null){const le=this.type!==ba?{minFilter:Un,magFilter:Un}:{};j.map=new ws(o.x,o.y,le),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const he=j.getViewportCount();for(let le=0;le<he;le++){const $=j.getViewport(le);f.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),w.viewport(f),j.updateMatrices(X,le),s=j.getFrustum(),L(A,I,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===ba&&E(j,I),j.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(O,C,F)};function E(T,A){const I=e.update(v);_.defines.VSM_SAMPLES!==T.blurSamples&&(_.defines.VSM_SAMPLES=T.blurSamples,S.defines.VSM_SAMPLES=T.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ws(o.x,o.y)),_.uniforms.shadow_pass.value=T.map.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,_,v,null),S.uniforms.shadow_pass.value=T.mapPass.texture,S.uniforms.resolution.value=T.mapSize,S.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,S,v,null)}function R(T,A,I,O,C,F){let w=null;const G=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0?w=G:w=I.isPointLight===!0?d:u,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const ae=w.uuid,X=A.uuid;let j=h[ae];j===void 0&&(j={},h[ae]=j);let ie=j[X];ie===void 0&&(ie=w.clone(),j[X]=ie),w=ie}return w.visible=A.visible,w.wireframe=A.wireframe,F===ba?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:g[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(I.matrixWorld),w.nearDistance=O,w.farDistance=C),w}function L(T,A,I,O,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ba)&&(!T.frustumCulled||s.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const G=e.update(T),ae=T.material;if(Array.isArray(ae)){const X=G.groups;for(let j=0,ie=X.length;j<ie;j++){const he=X[j],le=ae[he.materialIndex];if(le&&le.visible){const $=R(T,le,O,I.near,I.far,C);r.renderBufferDirect(I,null,G,$,T,he)}}}else if(ae.visible){const X=R(T,ae,O,I.near,I.far,C);r.renderBufferDirect(I,null,G,X,T,null)}}const w=T.children;for(let G=0,ae=w.length;G<ae;G++)L(w[G],A,I,O,C)}}function hA(r,e,t){const s=t.isWebGL2;function o(){let q=!1;const Re=new gn;let ue=null;const Pe=new gn(0,0,0,0);return{setMask:function(Ee){ue!==Ee&&!q&&(r.colorMask(Ee,Ee,Ee,Ee),ue=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,Ve,at,Qe,Yt){Yt===!0&&(Ee*=Qe,Ve*=Qe,at*=Qe),Re.set(Ee,Ve,at,Qe),Pe.equals(Re)===!1&&(r.clearColor(Ee,Ve,at,Qe),Pe.copy(Re))},reset:function(){q=!1,ue=null,Pe.set(-1,0,0,0)}}}function l(){let q=!1,Re=null,ue=null,Pe=null;return{setTest:function(Ee){Ee?Fe(2929):Se(2929)},setMask:function(Ee){Re!==Ee&&!q&&(r.depthMask(Ee),Re=Ee)},setFunc:function(Ee){if(ue!==Ee){if(Ee)switch(Ee){case Hb:r.depthFunc(512);break;case $b:r.depthFunc(519);break;case jb:r.depthFunc(513);break;case Yd:r.depthFunc(515);break;case qb:r.depthFunc(514);break;case Xb:r.depthFunc(518);break;case Yb:r.depthFunc(516);break;case Kb:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ue=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){Pe!==Ee&&(r.clearDepth(Ee),Pe=Ee)},reset:function(){q=!1,Re=null,ue=null,Pe=null}}}function f(){let q=!1,Re=null,ue=null,Pe=null,Ee=null,Ve=null,at=null,Qe=null,Yt=null;return{setTest:function(Je){q||(Je?Fe(2960):Se(2960))},setMask:function(Je){Re!==Je&&!q&&(r.stencilMask(Je),Re=Je)},setFunc:function(Je,Tt,Mt){(ue!==Je||Pe!==Tt||Ee!==Mt)&&(r.stencilFunc(Je,Tt,Mt),ue=Je,Pe=Tt,Ee=Mt)},setOp:function(Je,Tt,Mt){(Ve!==Je||at!==Tt||Qe!==Mt)&&(r.stencilOp(Je,Tt,Mt),Ve=Je,at=Tt,Qe=Mt)},setLocked:function(Je){q=Je},setClear:function(Je){Yt!==Je&&(r.clearStencil(Je),Yt=Je)},reset:function(){q=!1,Re=null,ue=null,Pe=null,Ee=null,Ve=null,at=null,Qe=null,Yt=null}}}const u=new o,d=new l,h=new f,m=new WeakMap,g=new WeakMap;let _={},S={},M=new WeakMap,v=[],y=null,E=!1,R=null,L=null,T=null,A=null,I=null,O=null,C=null,F=!1,w=null,G=null,ae=null,X=null,j=null;const ie=r.getParameter(35661);let he=!1,le=0;const $=r.getParameter(7938);$.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec($)[1]),he=le>=1):$.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),he=le>=2);let B=null,W={};const k=r.getParameter(3088),V=r.getParameter(2978),re=new gn().fromArray(k),pe=new gn().fromArray(V);function Me(q,Re,ue){const Pe=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(q,Ee),r.texParameteri(q,10241,9728),r.texParameteri(q,10240,9728);for(let Ve=0;Ve<ue;Ve++)r.texImage2D(Re+Ve,0,6408,1,1,0,6408,5121,Pe);return Ee}const J={};J[3553]=Me(3553,3553,1),J[34067]=Me(34067,34069,6),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Fe(2929),d.setFunc(Yd),Pt(!1),fn(Hg),Fe(2884),ht($i);function Fe(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Se(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function Te(q,Re){return S[q]!==Re?(r.bindFramebuffer(q,Re),S[q]=Re,s&&(q===36009&&(S[36160]=Re),q===36160&&(S[36009]=Re)),!0):!1}function me(q,Re){let ue=v,Pe=!1;if(q)if(ue=M.get(Re),ue===void 0&&(ue=[],M.set(Re,ue)),q.isWebGLMultipleRenderTargets){const Ee=q.texture;if(ue.length!==Ee.length||ue[0]!==36064){for(let Ve=0,at=Ee.length;Ve<at;Ve++)ue[Ve]=36064+Ve;ue.length=Ee.length,Pe=!0}}else ue[0]!==36064&&(ue[0]=36064,Pe=!0);else ue[0]!==1029&&(ue[0]=1029,Pe=!0);Pe&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function tt(q){return y!==q?(r.useProgram(q),y=q,!0):!1}const je={[fo]:32774,[Ib]:32778,[kb]:32779};if(s)je[Xg]=32775,je[Yg]=32776;else{const q=e.get("EXT_blend_minmax");q!==null&&(je[Xg]=q.MIN_EXT,je[Yg]=q.MAX_EXT)}const Oe={[Nb]:0,[zb]:1,[Fb]:768,[a_]:770,[Wb]:776,[Vb]:774,[Ub]:772,[Ob]:769,[l_]:771,[Gb]:775,[Bb]:773};function ht(q,Re,ue,Pe,Ee,Ve,at,Qe){if(q===$i){E===!0&&(Se(3042),E=!1);return}if(E===!1&&(Fe(3042),E=!0),q!==Db){if(q!==R||Qe!==F){if((L!==fo||I!==fo)&&(r.blendEquation(32774),L=fo,I=fo),Qe)switch(q){case vo:r.blendFuncSeparate(1,771,1,771);break;case $g:r.blendFunc(1,1);break;case jg:r.blendFuncSeparate(0,769,0,1);break;case qg:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case vo:r.blendFuncSeparate(770,771,1,771);break;case $g:r.blendFunc(770,1);break;case jg:r.blendFuncSeparate(0,769,0,1);break;case qg:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}T=null,A=null,O=null,C=null,R=q,F=Qe}return}Ee=Ee||Re,Ve=Ve||ue,at=at||Pe,(Re!==L||Ee!==I)&&(r.blendEquationSeparate(je[Re],je[Ee]),L=Re,I=Ee),(ue!==T||Pe!==A||Ve!==O||at!==C)&&(r.blendFuncSeparate(Oe[ue],Oe[Pe],Oe[Ve],Oe[at]),T=ue,A=Pe,O=Ve,C=at),R=q,F=null}function Ft(q,Re){q.side===Hi?Se(2884):Fe(2884);let ue=q.side===mr;Re&&(ue=!ue),Pt(ue),q.blending===vo&&q.transparent===!1?ht($i):ht(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const Pe=q.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ot(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Fe(32926):Se(32926)}function Pt(q){w!==q&&(q?r.frontFace(2304):r.frontFace(2305),w=q)}function fn(q){q!==Rb?(Fe(2884),q!==G&&(q===Hg?r.cullFace(1029):q===Pb?r.cullFace(1028):r.cullFace(1032))):Se(2884),G=q}function Ot(q){q!==ae&&(he&&r.lineWidth(q),ae=q)}function ot(q,Re,ue){q?(Fe(32823),(X!==Re||j!==ue)&&(r.polygonOffset(Re,ue),X=Re,j=ue)):Se(32823)}function kt(q){q?Fe(3089):Se(3089)}function Gt(q){q===void 0&&(q=33984+ie-1),B!==q&&(r.activeTexture(q),B=q)}function z(q,Re){B===null&&Gt();let ue=W[B];ue===void 0&&(ue={type:void 0,texture:void 0},W[B]=ue),(ue.type!==q||ue.texture!==Re)&&(r.bindTexture(q,Re||J[q]),ue.type=q,ue.texture=Re)}function P(){const q=W[B];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function fe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(q){re.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),re.copy(q))}function De(q){pe.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),pe.copy(q))}function Ke(q,Re){let ue=g.get(Re);ue===void 0&&(ue=new WeakMap,g.set(Re,ue));let Pe=ue.get(q);Pe===void 0&&(Pe=r.getUniformBlockIndex(Re,q.name),ue.set(q,Pe))}function rt(q,Re){const Pe=g.get(Re).get(q);m.get(q)!==Pe&&(r.uniformBlockBinding(Re,Pe,q.__bindingPointIndex),m.set(q,Pe))}function yt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),s===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},B=null,W={},S={},M=new WeakMap,v=[],y=null,E=!1,R=null,L=null,T=null,A=null,I=null,O=null,C=null,F=!1,w=null,G=null,ae=null,X=null,j=null,re.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Fe,disable:Se,bindFramebuffer:Te,drawBuffers:me,useProgram:tt,setBlending:ht,setMaterial:Ft,setFlipSided:Pt,setCullFace:fn,setLineWidth:Ot,setPolygonOffset:ot,setScissorTest:kt,activeTexture:Gt,bindTexture:z,unbindTexture:P,compressedTexImage2D:fe,texImage2D:ze,texImage3D:Ae,updateUBOMapping:Ke,uniformBlockBinding:rt,texStorage2D:Ge,texStorage3D:se,texSubImage2D:xe,texSubImage3D:we,compressedTexSubImage2D:be,scissor:Be,viewport:De,reset:yt}}function pA(r,e,t,s,o,l,f){const u=o.isWebGL2,d=o.maxTextures,h=o.maxCubemapSize,m=o.maxTextureSize,g=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(z,P){return E?new OffscreenCanvas(z,P):Ou("canvas")}function L(z,P,fe,xe){let we=1;if((z.width>xe||z.height>xe)&&(we=xe/Math.max(z.width,z.height)),we<1||P===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const be=P?th:Math.floor,Ge=be(we*z.width),se=be(we*z.height);v===void 0&&(v=R(Ge,se));const ze=fe?R(Ge,se):v;return ze.width=Ge,ze.height=se,ze.getContext("2d").drawImage(z,0,0,Ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Ge+"x"+se+")."),ze}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function T(z){return w0(z.width)&&w0(z.height)}function A(z){return u?!1:z.wrapS!==Ar||z.wrapT!==Ar||z.minFilter!==Un&&z.minFilter!==dr}function I(z,P){return z.generateMipmaps&&P&&z.minFilter!==Un&&z.minFilter!==dr}function O(z){r.generateMipmap(z)}function C(z,P,fe,xe,we=!1){if(u===!1)return P;if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let be=P;return P===6403&&(fe===5126&&(be=33326),fe===5131&&(be=33325),fe===5121&&(be=33321)),P===33319&&(fe===5126&&(be=33328),fe===5131&&(be=33327),fe===5121&&(be=33323)),P===6408&&(fe===5126&&(be=34836),fe===5131&&(be=34842),fe===5121&&(be=xe===jt&&we===!1?35907:32856),fe===32819&&(be=32854),fe===32820&&(be=32855)),(be===33325||be===33326||be===33327||be===33328||be===34842||be===34836)&&e.get("EXT_color_buffer_float"),be}function F(z,P,fe){return I(z,fe)===!0||z.isFramebufferTexture&&z.minFilter!==Un&&z.minFilter!==dr?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function w(z){return z===Un||z===Kg||z===Zg?9728:9729}function G(z){const P=z.target;P.removeEventListener("dispose",G),X(P),P.isVideoTexture&&M.delete(P)}function ae(z){const P=z.target;P.removeEventListener("dispose",ae),ie(P)}function X(z){const P=s.get(z);if(P.__webglInit===void 0)return;const fe=z.source,xe=y.get(fe);if(xe){const we=xe[P.__cacheKey];we.usedTimes--,we.usedTimes===0&&j(z),Object.keys(xe).length===0&&y.delete(fe)}s.remove(z)}function j(z){const P=s.get(z);r.deleteTexture(P.__webglTexture);const fe=z.source,xe=y.get(fe);delete xe[P.__cacheKey],f.memory.textures--}function ie(z){const P=z.texture,fe=s.get(z),xe=s.get(P);if(xe.__webglTexture!==void 0&&(r.deleteTexture(xe.__webglTexture),f.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let we=0;we<6;we++)r.deleteFramebuffer(fe.__webglFramebuffer[we]),fe.__webglDepthbuffer&&r.deleteRenderbuffer(fe.__webglDepthbuffer[we]);else{if(r.deleteFramebuffer(fe.__webglFramebuffer),fe.__webglDepthbuffer&&r.deleteRenderbuffer(fe.__webglDepthbuffer),fe.__webglMultisampledFramebuffer&&r.deleteFramebuffer(fe.__webglMultisampledFramebuffer),fe.__webglColorRenderbuffer)for(let we=0;we<fe.__webglColorRenderbuffer.length;we++)fe.__webglColorRenderbuffer[we]&&r.deleteRenderbuffer(fe.__webglColorRenderbuffer[we]);fe.__webglDepthRenderbuffer&&r.deleteRenderbuffer(fe.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let we=0,be=P.length;we<be;we++){const Ge=s.get(P[we]);Ge.__webglTexture&&(r.deleteTexture(Ge.__webglTexture),f.memory.textures--),s.remove(P[we])}s.remove(P),s.remove(z)}let he=0;function le(){he=0}function $(){const z=he;return z>=d&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+d),he+=1,z}function B(z){const P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.encoding),P.join()}function W(z,P){const fe=s.get(z);if(z.isVideoTexture&&kt(z),z.isRenderTargetTexture===!1&&z.version>0&&fe.__version!==z.version){const xe=z.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(fe,z,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,fe.__webglTexture)}function k(z,P){const fe=s.get(z);if(z.version>0&&fe.__version!==z.version){Se(fe,z,P);return}t.activeTexture(33984+P),t.bindTexture(35866,fe.__webglTexture)}function V(z,P){const fe=s.get(z);if(z.version>0&&fe.__version!==z.version){Se(fe,z,P);return}t.activeTexture(33984+P),t.bindTexture(32879,fe.__webglTexture)}function re(z,P){const fe=s.get(z);if(z.version>0&&fe.__version!==z.version){Te(fe,z,P);return}t.activeTexture(33984+P),t.bindTexture(34067,fe.__webglTexture)}const pe={[Qd]:10497,[Ar]:33071,[Jd]:33648},Me={[Un]:9728,[Kg]:9984,[Zg]:9986,[dr]:9729,[i2]:9985,[tc]:9987};function J(z,P,fe){if(fe?(r.texParameteri(z,10242,pe[P.wrapS]),r.texParameteri(z,10243,pe[P.wrapT]),(z===32879||z===35866)&&r.texParameteri(z,32882,pe[P.wrapR]),r.texParameteri(z,10240,Me[P.magFilter]),r.texParameteri(z,10241,Me[P.minFilter])):(r.texParameteri(z,10242,33071),r.texParameteri(z,10243,33071),(z===32879||z===35866)&&r.texParameteri(z,32882,33071),(P.wrapS!==Ar||P.wrapT!==Ar)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(z,10240,w(P.magFilter)),r.texParameteri(z,10241,w(P.minFilter)),P.minFilter!==Un&&P.minFilter!==dr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(P.type===ps&&e.has("OES_texture_float_linear")===!1||u===!1&&P.type===Fa&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||s.get(P).__currentAnisotropy)&&(r.texParameterf(z,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,o.getMaxAnisotropy())),s.get(P).__currentAnisotropy=P.anisotropy)}}function Fe(z,P){let fe=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",G));const xe=P.source;let we=y.get(xe);we===void 0&&(we={},y.set(xe,we));const be=B(P);if(be!==z.__cacheKey){we[be]===void 0&&(we[be]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,fe=!0),we[be].usedTimes++;const Ge=we[z.__cacheKey];Ge!==void 0&&(we[z.__cacheKey].usedTimes--,Ge.usedTimes===0&&j(P)),z.__cacheKey=be,z.__webglTexture=we[be].texture}return fe}function Se(z,P,fe){let xe=3553;P.isDataArrayTexture&&(xe=35866),P.isData3DTexture&&(xe=32879);const we=Fe(z,P),be=P.source;if(t.activeTexture(33984+fe),t.bindTexture(xe,z.__webglTexture),be.version!==be.__currentVersion||we===!0){r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const Ge=A(P)&&T(P.image)===!1;let se=L(P.image,Ge,!1,m);se=Gt(P,se);const ze=T(se)||u,Ae=l.convert(P.format,P.encoding);let Be=l.convert(P.type),De=C(P.internalFormat,Ae,Be,P.encoding,P.isVideoTexture);J(xe,P,ze);let Ke;const rt=P.mipmaps,yt=u&&P.isVideoTexture!==!0,q=be.__currentVersion===void 0||we===!0,Re=F(P,se,ze);if(P.isDepthTexture)De=6402,u?P.type===ps?De=36012:P.type===hs?De=33190:P.type===_o?De=35056:De=33189:P.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===gs&&De===6402&&P.type!==f_&&P.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=hs,Be=l.convert(P.type)),P.format===To&&De===6402&&(De=34041,P.type!==_o&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=_o,Be=l.convert(P.type))),q&&(yt?t.texStorage2D(3553,1,De,se.width,se.height):t.texImage2D(3553,0,De,se.width,se.height,0,Ae,Be,null));else if(P.isDataTexture)if(rt.length>0&&ze){yt&&q&&t.texStorage2D(3553,Re,De,rt[0].width,rt[0].height);for(let ue=0,Pe=rt.length;ue<Pe;ue++)Ke=rt[ue],yt?t.texSubImage2D(3553,ue,0,0,Ke.width,Ke.height,Ae,Be,Ke.data):t.texImage2D(3553,ue,De,Ke.width,Ke.height,0,Ae,Be,Ke.data);P.generateMipmaps=!1}else yt?(q&&t.texStorage2D(3553,Re,De,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Ae,Be,se.data)):t.texImage2D(3553,0,De,se.width,se.height,0,Ae,Be,se.data);else if(P.isCompressedTexture){yt&&q&&t.texStorage2D(3553,Re,De,rt[0].width,rt[0].height);for(let ue=0,Pe=rt.length;ue<Pe;ue++)Ke=rt[ue],P.format!==Gr?Ae!==null?yt?t.compressedTexSubImage2D(3553,ue,0,0,Ke.width,Ke.height,Ae,Ke.data):t.compressedTexImage2D(3553,ue,De,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(3553,ue,0,0,Ke.width,Ke.height,Ae,Be,Ke.data):t.texImage2D(3553,ue,De,Ke.width,Ke.height,0,Ae,Be,Ke.data)}else if(P.isDataArrayTexture)yt?(q&&t.texStorage3D(35866,Re,De,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Ae,Be,se.data)):t.texImage3D(35866,0,De,se.width,se.height,se.depth,0,Ae,Be,se.data);else if(P.isData3DTexture)yt?(q&&t.texStorage3D(32879,Re,De,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Ae,Be,se.data)):t.texImage3D(32879,0,De,se.width,se.height,se.depth,0,Ae,Be,se.data);else if(P.isFramebufferTexture){if(q)if(yt)t.texStorage2D(3553,Re,De,se.width,se.height);else{let ue=se.width,Pe=se.height;for(let Ee=0;Ee<Re;Ee++)t.texImage2D(3553,Ee,De,ue,Pe,0,Ae,Be,null),ue>>=1,Pe>>=1}}else if(rt.length>0&&ze){yt&&q&&t.texStorage2D(3553,Re,De,rt[0].width,rt[0].height);for(let ue=0,Pe=rt.length;ue<Pe;ue++)Ke=rt[ue],yt?t.texSubImage2D(3553,ue,0,0,Ae,Be,Ke):t.texImage2D(3553,ue,De,Ae,Be,Ke);P.generateMipmaps=!1}else yt?(q&&t.texStorage2D(3553,Re,De,se.width,se.height),t.texSubImage2D(3553,0,0,0,Ae,Be,se)):t.texImage2D(3553,0,De,Ae,Be,se);I(P,ze)&&O(xe),be.__currentVersion=be.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function Te(z,P,fe){if(P.image.length!==6)return;const xe=Fe(z,P),we=P.source;if(t.activeTexture(33984+fe),t.bindTexture(34067,z.__webglTexture),we.version!==we.__currentVersion||xe===!0){r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const be=P.isCompressedTexture||P.image[0].isCompressedTexture,Ge=P.image[0]&&P.image[0].isDataTexture,se=[];for(let ue=0;ue<6;ue++)!be&&!Ge?se[ue]=L(P.image[ue],!1,!0,h):se[ue]=Ge?P.image[ue].image:P.image[ue],se[ue]=Gt(P,se[ue]);const ze=se[0],Ae=T(ze)||u,Be=l.convert(P.format,P.encoding),De=l.convert(P.type),Ke=C(P.internalFormat,Be,De,P.encoding),rt=u&&P.isVideoTexture!==!0,yt=we.__currentVersion===void 0||xe===!0;let q=F(P,ze,Ae);J(34067,P,Ae);let Re;if(be){rt&&yt&&t.texStorage2D(34067,q,Ke,ze.width,ze.height);for(let ue=0;ue<6;ue++){Re=se[ue].mipmaps;for(let Pe=0;Pe<Re.length;Pe++){const Ee=Re[Pe];P.format!==Gr?Be!==null?rt?t.compressedTexSubImage2D(34069+ue,Pe,0,0,Ee.width,Ee.height,Be,Ee.data):t.compressedTexImage2D(34069+ue,Pe,Ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(34069+ue,Pe,0,0,Ee.width,Ee.height,Be,De,Ee.data):t.texImage2D(34069+ue,Pe,Ke,Ee.width,Ee.height,0,Be,De,Ee.data)}}}else{Re=P.mipmaps,rt&&yt&&(Re.length>0&&q++,t.texStorage2D(34067,q,Ke,se[0].width,se[0].height));for(let ue=0;ue<6;ue++)if(Ge){rt?t.texSubImage2D(34069+ue,0,0,0,se[ue].width,se[ue].height,Be,De,se[ue].data):t.texImage2D(34069+ue,0,Ke,se[ue].width,se[ue].height,0,Be,De,se[ue].data);for(let Pe=0;Pe<Re.length;Pe++){const Ve=Re[Pe].image[ue].image;rt?t.texSubImage2D(34069+ue,Pe+1,0,0,Ve.width,Ve.height,Be,De,Ve.data):t.texImage2D(34069+ue,Pe+1,Ke,Ve.width,Ve.height,0,Be,De,Ve.data)}}else{rt?t.texSubImage2D(34069+ue,0,0,0,Be,De,se[ue]):t.texImage2D(34069+ue,0,Ke,Be,De,se[ue]);for(let Pe=0;Pe<Re.length;Pe++){const Ee=Re[Pe];rt?t.texSubImage2D(34069+ue,Pe+1,0,0,Be,De,Ee.image[ue]):t.texImage2D(34069+ue,Pe+1,Ke,Be,De,Ee.image[ue])}}}I(P,Ae)&&O(34067),we.__currentVersion=we.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function me(z,P,fe,xe,we){const be=l.convert(fe.format,fe.encoding),Ge=l.convert(fe.type),se=C(fe.internalFormat,be,Ge,fe.encoding);s.get(P).__hasExternalTextures||(we===32879||we===35866?t.texImage3D(we,0,se,P.width,P.height,P.depth,0,be,Ge,null):t.texImage2D(we,0,se,P.width,P.height,0,be,Ge,null)),t.bindFramebuffer(36160,z),ot(P)?_.framebufferTexture2DMultisampleEXT(36160,xe,we,s.get(fe).__webglTexture,0,Ot(P)):r.framebufferTexture2D(36160,xe,we,s.get(fe).__webglTexture,0),t.bindFramebuffer(36160,null)}function tt(z,P,fe){if(r.bindRenderbuffer(36161,z),P.depthBuffer&&!P.stencilBuffer){let xe=33189;if(fe||ot(P)){const we=P.depthTexture;we&&we.isDepthTexture&&(we.type===ps?xe=36012:we.type===hs&&(xe=33190));const be=Ot(P);ot(P)?_.renderbufferStorageMultisampleEXT(36161,be,xe,P.width,P.height):r.renderbufferStorageMultisample(36161,be,xe,P.width,P.height)}else r.renderbufferStorage(36161,xe,P.width,P.height);r.framebufferRenderbuffer(36160,36096,36161,z)}else if(P.depthBuffer&&P.stencilBuffer){const xe=Ot(P);fe&&ot(P)===!1?r.renderbufferStorageMultisample(36161,xe,35056,P.width,P.height):ot(P)?_.renderbufferStorageMultisampleEXT(36161,xe,35056,P.width,P.height):r.renderbufferStorage(36161,34041,P.width,P.height),r.framebufferRenderbuffer(36160,33306,36161,z)}else{const xe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let we=0;we<xe.length;we++){const be=xe[we],Ge=l.convert(be.format,be.encoding),se=l.convert(be.type),ze=C(be.internalFormat,Ge,se,be.encoding),Ae=Ot(P);fe&&ot(P)===!1?r.renderbufferStorageMultisample(36161,Ae,ze,P.width,P.height):ot(P)?_.renderbufferStorageMultisampleEXT(36161,Ae,ze,P.width,P.height):r.renderbufferStorage(36161,ze,P.width,P.height)}}r.bindRenderbuffer(36161,null)}function je(z,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);const xe=s.get(P.depthTexture).__webglTexture,we=Ot(P);if(P.depthTexture.format===gs)ot(P)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,xe,0,we):r.framebufferTexture2D(36160,36096,3553,xe,0);else if(P.depthTexture.format===To)ot(P)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,xe,0,we):r.framebufferTexture2D(36160,33306,3553,xe,0);else throw new Error("Unknown depthTexture format")}function Oe(z){const P=s.get(z),fe=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!P.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");je(P.__webglFramebuffer,z)}else if(fe){P.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(36160,P.__webglFramebuffer[xe]),P.__webglDepthbuffer[xe]=r.createRenderbuffer(),tt(P.__webglDepthbuffer[xe],z,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),tt(P.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function ht(z,P,fe){const xe=s.get(z);P!==void 0&&me(xe.__webglFramebuffer,z,z.texture,36064,3553),fe!==void 0&&Oe(z)}function Ft(z){const P=z.texture,fe=s.get(z),xe=s.get(P);z.addEventListener("dispose",ae),z.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=P.version,f.memory.textures++);const we=z.isWebGLCubeRenderTarget===!0,be=z.isWebGLMultipleRenderTargets===!0,Ge=T(z)||u;if(we){fe.__webglFramebuffer=[];for(let se=0;se<6;se++)fe.__webglFramebuffer[se]=r.createFramebuffer()}else{if(fe.__webglFramebuffer=r.createFramebuffer(),be)if(o.drawBuffers){const se=z.texture;for(let ze=0,Ae=se.length;ze<Ae;ze++){const Be=s.get(se[ze]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&z.samples>0&&ot(z)===!1){const se=be?P:[P];fe.__webglMultisampledFramebuffer=r.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer);for(let ze=0;ze<se.length;ze++){const Ae=se[ze];fe.__webglColorRenderbuffer[ze]=r.createRenderbuffer(),r.bindRenderbuffer(36161,fe.__webglColorRenderbuffer[ze]);const Be=l.convert(Ae.format,Ae.encoding),De=l.convert(Ae.type),Ke=C(Ae.internalFormat,Be,De,Ae.encoding),rt=Ot(z);r.renderbufferStorageMultisample(36161,rt,Ke,z.width,z.height),r.framebufferRenderbuffer(36160,36064+ze,36161,fe.__webglColorRenderbuffer[ze])}r.bindRenderbuffer(36161,null),z.depthBuffer&&(fe.__webglDepthRenderbuffer=r.createRenderbuffer(),tt(fe.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(we){t.bindTexture(34067,xe.__webglTexture),J(34067,P,Ge);for(let se=0;se<6;se++)me(fe.__webglFramebuffer[se],z,P,36064,34069+se);I(P,Ge)&&O(34067),t.unbindTexture()}else if(be){const se=z.texture;for(let ze=0,Ae=se.length;ze<Ae;ze++){const Be=se[ze],De=s.get(Be);t.bindTexture(3553,De.__webglTexture),J(3553,Be,Ge),me(fe.__webglFramebuffer,z,Be,36064+ze,3553),I(Be,Ge)&&O(3553)}t.unbindTexture()}else{let se=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(u?se=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,xe.__webglTexture),J(se,P,Ge),me(fe.__webglFramebuffer,z,P,36064,se),I(P,Ge)&&O(se),t.unbindTexture()}z.depthBuffer&&Oe(z)}function Pt(z){const P=T(z)||u,fe=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let xe=0,we=fe.length;xe<we;xe++){const be=fe[xe];if(I(be,P)){const Ge=z.isWebGLCubeRenderTarget?34067:3553,se=s.get(be).__webglTexture;t.bindTexture(Ge,se),O(Ge),t.unbindTexture()}}}function fn(z){if(u&&z.samples>0&&ot(z)===!1){const P=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],fe=z.width,xe=z.height;let we=16384;const be=[],Ge=z.stencilBuffer?33306:36096,se=s.get(z),ze=z.isWebGLMultipleRenderTargets===!0;if(ze)for(let Ae=0;Ae<P.length;Ae++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let Ae=0;Ae<P.length;Ae++){be.push(36064+Ae),z.depthBuffer&&be.push(Ge);const Be=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Be===!1&&(z.depthBuffer&&(we|=256),z.stencilBuffer&&(we|=1024)),ze&&r.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[Ae]),Be===!0&&(r.invalidateFramebuffer(36008,[Ge]),r.invalidateFramebuffer(36009,[Ge])),ze){const De=s.get(P[Ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,De,0)}r.blitFramebuffer(0,0,fe,xe,0,0,fe,xe,we,9728),S&&r.invalidateFramebuffer(36008,be)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ze)for(let Ae=0;Ae<P.length;Ae++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,se.__webglColorRenderbuffer[Ae]);const Be=s.get(P[Ae]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,Be,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function Ot(z){return Math.min(g,z.samples)}function ot(z){const P=s.get(z);return u&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function kt(z){const P=f.render.frame;M.get(z)!==P&&(M.set(z,P),z.update())}function Gt(z,P){const fe=z.encoding,xe=z.format,we=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===eh||fe!==Ss&&(fe===jt?u===!1?e.has("EXT_sRGB")===!0&&xe===Gr?(z.format=eh,z.minFilter=dr,z.generateMipmaps=!1):P=p_.sRGBToLinear(P):(xe!==Gr||we!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",fe)),P}this.allocateTextureUnit=$,this.resetTextureUnits=le,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=ht,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ot}function mA(r,e,t){const s=t.isWebGL2;function o(l,f=null){let u;if(l===ys)return 5121;if(l===l2)return 32819;if(l===u2)return 32820;if(l===s2)return 5120;if(l===o2)return 5122;if(l===f_)return 5123;if(l===a2)return 5124;if(l===hs)return 5125;if(l===ps)return 5126;if(l===Fa)return s?5131:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===c2)return 6406;if(l===Gr)return 6408;if(l===d2)return 6409;if(l===h2)return 6410;if(l===gs)return 6402;if(l===To)return 34041;if(l===p2)return 6403;if(l===f2)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(l===eh)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===m2)return 36244;if(l===g2)return 33319;if(l===v2)return 33320;if(l===_2)return 36249;if(l===rd||l===id||l===sd||l===od)if(f===jt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===rd)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===id)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===sd)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===od)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===rd)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===id)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===sd)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===od)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Qg||l===Jg||l===e0||l===t0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Qg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Jg)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===e0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===t0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===x2)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===n0||l===r0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===n0)return f===jt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===r0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===i0||l===s0||l===o0||l===a0||l===l0||l===u0||l===c0||l===f0||l===d0||l===h0||l===p0||l===m0||l===g0||l===v0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===i0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===s0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===o0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===a0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===l0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===u0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===c0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===f0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===d0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===h0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===p0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===m0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===g0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===v0)return f===jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===_0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===_0)return f===jt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return l===_o?s?34042:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class gA extends hr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bu extends nr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,f=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const v of e.hand.values()){const y=t.getJointPose(v,s);if(h.joints[v.jointName]===void 0){const R=new bu;R.matrixAutoUpdate=!1,R.visible=!1,h.joints[v.jointName]=R,h.add(R)}const E=h.joints[v.jointName];y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=y.radius),E.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&_>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=f!==null),this}}class _A extends Pr{constructor(e,t,s,o,l,f,u,d,h,m){if(m=m!==void 0?m:gs,m!==gs&&m!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===gs&&(s=hs),s===void 0&&m===To&&(s=_o),super(null,o,l,f,u,d,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Un,this.minFilter=d!==void 0?d:Un,this.flipY=!1,this.generateMipmaps=!1}}class xA extends Io{constructor(e,t){super();const s=this;let o=null,l=1,f=null,u="local-floor",d=null,h=null,m=null,g=null,_=null,S=null;const M=t.getContextAttributes();let v=null,y=null;const E=[],R=[],L=new hr;L.layers.enable(1),L.viewport=new gn;const T=new hr;T.layers.enable(2),T.viewport=new gn;const A=[L,T],I=new gA;I.layers.enable(1),I.layers.enable(2);let O=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=E[B];return W===void 0&&(W=new kd,E[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=E[B];return W===void 0&&(W=new kd,E[B]=W),W.getGripSpace()},this.getHand=function(B){let W=E[B];return W===void 0&&(W=new kd,E[B]=W),W.getHandSpace()};function F(B){const W=R.indexOf(B.inputSource);if(W===-1)return;const k=E[W];k!==void 0&&k.dispatchEvent({type:B.type,data:B.inputSource})}function w(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",w),o.removeEventListener("inputsourceschange",G);for(let B=0;B<E.length;B++){const W=R[B];W!==null&&(R[B]=null,E[B].disconnect(W))}O=null,C=null,e.setRenderTarget(v),_=null,g=null,m=null,o=null,y=null,$.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){l=B,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){u=B,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(B){d=B},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(B){if(o=B,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",w),o.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,W),o.updateRenderState({baseLayer:_}),y=new ws(_.framebufferWidth,_.framebufferHeight,{format:Gr,type:ys,encoding:e.outputEncoding,stencilBuffer:M.stencil})}else{let W=null,k=null,V=null;M.depth&&(V=M.stencil?35056:33190,W=M.stencil?To:gs,k=M.stencil?_o:hs);const re={colorFormat:32856,depthFormat:V,scaleFactor:l};m=new XRWebGLBinding(o,t),g=m.createProjectionLayer(re),o.updateRenderState({layers:[g]}),y=new ws(g.textureWidth,g.textureHeight,{format:Gr,type:ys,depthTexture:new _A(g.textureWidth,g.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const pe=e.properties.get(y);pe.__ignoreDepthValues=g.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(1),d=null,f=await o.requestReferenceSpace(u),$.setContext(o),$.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function G(B){for(let W=0;W<B.removed.length;W++){const k=B.removed[W],V=R.indexOf(k);V>=0&&(R[V]=null,E[V].dispatchEvent({type:"disconnected",data:k}))}for(let W=0;W<B.added.length;W++){const k=B.added[W];let V=R.indexOf(k);if(V===-1){for(let pe=0;pe<E.length;pe++)if(pe>=R.length){R.push(k),V=pe;break}else if(R[pe]===null){R[pe]=k,V=pe;break}if(V===-1)break}const re=E[V];re&&re.dispatchEvent({type:"connected",data:k})}}const ae=new ne,X=new ne;function j(B,W,k){ae.setFromMatrixPosition(W.matrixWorld),X.setFromMatrixPosition(k.matrixWorld);const V=ae.distanceTo(X),re=W.projectionMatrix.elements,pe=k.projectionMatrix.elements,Me=re[14]/(re[10]-1),J=re[14]/(re[10]+1),Fe=(re[9]+1)/re[5],Se=(re[9]-1)/re[5],Te=(re[8]-1)/re[0],me=(pe[8]+1)/pe[0],tt=Me*Te,je=Me*me,Oe=V/(-Te+me),ht=Oe*-Te;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ht),B.translateZ(Oe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ft=Me+Oe,Pt=J+Oe,fn=tt-ht,Ot=je+(V-ht),ot=Fe*J/Pt*Ft,kt=Se*J/Pt*Ft;B.projectionMatrix.makePerspective(fn,Ot,ot,kt,Ft,Pt)}function ie(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(o===null)return;I.near=T.near=L.near=B.near,I.far=T.far=L.far=B.far,(O!==I.near||C!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,C=I.far);const W=B.parent,k=I.cameras;ie(I,W);for(let re=0;re<k.length;re++)ie(k[re],W);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),B.matrix.copy(I.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const V=B.children;for(let re=0,pe=V.length;re<pe;re++)V[re].updateMatrixWorld(!0);k.length===2?j(I,L,T):I.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function(B){g!==null&&(g.fixedFoveation=B),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=B)};let he=null;function le(B,W){if(h=W.getViewerPose(d||f),S=W,h!==null){const k=h.views;_!==null&&(e.setRenderTargetFramebuffer(y,_.framebuffer),e.setRenderTarget(y));let V=!1;k.length!==I.cameras.length&&(I.cameras.length=0,V=!0);for(let re=0;re<k.length;re++){const pe=k[re];let Me=null;if(_!==null)Me=_.getViewport(pe);else{const Fe=m.getViewSubImage(g,pe);Me=Fe.viewport,re===0&&(e.setRenderTargetTextures(y,Fe.colorTexture,g.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(y))}let J=A[re];J===void 0&&(J=new hr,J.layers.enable(re),J.viewport=new gn,A[re]=J),J.matrix.fromArray(pe.transform.matrix),J.projectionMatrix.fromArray(pe.projectionMatrix),J.viewport.set(Me.x,Me.y,Me.width,Me.height),re===0&&I.matrix.copy(J.matrix),V===!0&&I.cameras.push(J)}}for(let k=0;k<E.length;k++){const V=R[k],re=E[k];V!==null&&re!==void 0&&re.update(V,W,d||f)}he&&he(B,W),S=null}const $=new b_;$.setAnimationLoop(le),this.setAnimationLoop=function(B){he=B},this.dispose=function(){}}}function yA(r,e){function t(v,y){v.fogColor.value.copy(y.color),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function s(v,y,E,R,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(v,y):y.isMeshToonMaterial?(o(v,y),m(v,y)):y.isMeshPhongMaterial?(o(v,y),h(v,y)):y.isMeshStandardMaterial?(o(v,y),g(v,y),y.isMeshPhysicalMaterial&&_(v,y,L)):y.isMeshMatcapMaterial?(o(v,y),S(v,y)):y.isMeshDepthMaterial?o(v,y):y.isMeshDistanceMaterial?(o(v,y),M(v,y)):y.isMeshNormalMaterial?o(v,y):y.isLineBasicMaterial?(l(v,y),y.isLineDashedMaterial&&f(v,y)):y.isPointsMaterial?u(v,y,E,R):y.isSpriteMaterial?d(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.bumpMap&&(v.bumpMap.value=y.bumpMap,v.bumpScale.value=y.bumpScale,y.side===mr&&(v.bumpScale.value*=-1)),y.displacementMap&&(v.displacementMap.value=y.displacementMap,v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap),y.normalMap&&(v.normalMap.value=y.normalMap,v.normalScale.value.copy(y.normalScale),y.side===mr&&v.normalScale.value.negate()),y.specularMap&&(v.specularMap.value=y.specularMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const E=e.get(y).envMap;if(E&&(v.envMap.value=E,v.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap){v.lightMap.value=y.lightMap;const T=r.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=y.lightMapIntensity*T}y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity);let R;y.map?R=y.map:y.specularMap?R=y.specularMap:y.displacementMap?R=y.displacementMap:y.normalMap?R=y.normalMap:y.bumpMap?R=y.bumpMap:y.roughnessMap?R=y.roughnessMap:y.metalnessMap?R=y.metalnessMap:y.alphaMap?R=y.alphaMap:y.emissiveMap?R=y.emissiveMap:y.clearcoatMap?R=y.clearcoatMap:y.clearcoatNormalMap?R=y.clearcoatNormalMap:y.clearcoatRoughnessMap?R=y.clearcoatRoughnessMap:y.iridescenceMap?R=y.iridescenceMap:y.iridescenceThicknessMap?R=y.iridescenceThicknessMap:y.specularIntensityMap?R=y.specularIntensityMap:y.specularColorMap?R=y.specularColorMap:y.transmissionMap?R=y.transmissionMap:y.thicknessMap?R=y.thicknessMap:y.sheenColorMap?R=y.sheenColorMap:y.sheenRoughnessMap&&(R=y.sheenRoughnessMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),v.uvTransform.value.copy(R.matrix));let L;y.aoMap?L=y.aoMap:y.lightMap&&(L=y.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),v.uv2Transform.value.copy(L.matrix))}function l(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity}function f(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function u(v,y,E,R){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*E,v.scale.value=R*.5,y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);let L;y.map?L=y.map:y.alphaMap&&(L=y.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),v.uvTransform.value.copy(L.matrix))}function d(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);let E;y.map?E=y.map:y.alphaMap&&(E=y.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),v.uvTransform.value.copy(E.matrix))}function h(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function m(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function g(v,y){v.roughness.value=y.roughness,v.metalness.value=y.metalness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap),y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap),e.get(y).envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function _(v,y,E){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap)),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap),y.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),v.clearcoatNormalMap.value=y.clearcoatNormalMap,y.side===mr&&v.clearcoatNormalScale.value.negate())),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap)),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap)}function S(v,y){y.matcap&&(v.matcap.value=y.matcap)}function M(v,y){v.referencePosition.value.copy(y.referencePosition),v.nearDistance.value=y.nearDistance,v.farDistance.value=y.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:s}}function SA(r,e,t,s){let o={},l={},f=[];const u=t.isWebGL2?r.getParameter(35375):0;function d(R,L){const T=L.program;s.uniformBlockBinding(R,T)}function h(R,L){let T=o[R.id];T===void 0&&(M(R),T=m(R),o[R.id]=T,R.addEventListener("dispose",y));const A=L.program;s.updateUBOMapping(R,A);const I=e.render.frame;l[R.id]!==I&&(_(R),l[R.id]=I)}function m(R){const L=g();R.__bindingPointIndex=L;const T=r.createBuffer(),A=R.__size,I=R.usage;return r.bindBuffer(35345,T),r.bufferData(35345,A,I),r.bindBuffer(35345,null),r.bindBufferBase(35345,L,T),T}function g(){for(let R=0;R<u;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=o[R.id],T=R.uniforms,A=R.__cache;r.bindBuffer(35345,L);for(let I=0,O=T.length;I<O;I++){const C=T[I];if(S(C,I,A)===!0){const F=C.value,w=C.__offset;typeof F=="number"?(C.__data[0]=F,r.bufferSubData(35345,w,C.__data)):(C.value.isMatrix3?(C.__data[0]=C.value.elements[0],C.__data[1]=C.value.elements[1],C.__data[2]=C.value.elements[2],C.__data[3]=C.value.elements[0],C.__data[4]=C.value.elements[3],C.__data[5]=C.value.elements[4],C.__data[6]=C.value.elements[5],C.__data[7]=C.value.elements[0],C.__data[8]=C.value.elements[6],C.__data[9]=C.value.elements[7],C.__data[10]=C.value.elements[8],C.__data[11]=C.value.elements[0]):F.toArray(C.__data),r.bufferSubData(35345,w,C.__data))}}r.bindBuffer(35345,null)}function S(R,L,T){const A=R.value;if(T[L]===void 0)return typeof A=="number"?T[L]=A:T[L]=A.clone(),!0;if(typeof A=="number"){if(T[L]!==A)return T[L]=A,!0}else{const I=T[L];if(I.equals(A)===!1)return I.copy(A),!0}return!1}function M(R){const L=R.uniforms;let T=0;const A=16;let I=0;for(let O=0,C=L.length;O<C;O++){const F=L[O],w=v(F);if(F.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,O>0){I=T%A;const G=A-I;I!==0&&G-w.boundary<0&&(T+=A-I,F.__offset=T)}T+=w.storage}return I=T%A,I>0&&(T+=A-I),R.__size=T,R.__cache={},this}function v(R){const L=R.value,T={boundary:0,storage:0};return typeof L=="number"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),T}function y(R){const L=R.target;L.removeEventListener("dispose",y);const T=f.indexOf(L.__bindingPointIndex);f.splice(T,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function E(){for(const R in o)r.deleteBuffer(o[R]);f=[],o={},l={}}return{bind:d,update:h,dispose:E}}function wA(){const r=Ou("canvas");return r.style.display="block",r}function R_(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:wA(),t=r.context!==void 0?r.context:null,s=r.depth!==void 0?r.depth:!0,o=r.stencil!==void 0?r.stencil:!0,l=r.antialias!==void 0?r.antialias:!1,f=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,u=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,d=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=r.alpha!==void 0?r.alpha:!1;let g=null,_=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ss,this.physicallyCorrectLights=!1,this.toneMapping=fi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let y=!1,E=0,R=0,L=null,T=-1,A=null;const I=new gn,O=new gn;let C=null,F=e.width,w=e.height,G=1,ae=null,X=null;const j=new gn(0,0,F,w),ie=new gn(0,0,F,w);let he=!1;const le=new M_;let $=!1,B=!1,W=null;const k=new vn,V=new _t,re=new ne,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return L===null?G:1}let J=t;function Fe(D,Z){for(let oe=0;oe<D.length;oe++){const K=D[oe],de=e.getContext(K,Z);if(de!==null)return de}return null}try{const D={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mh}`),e.addEventListener("webglcontextlost",Ke,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),J===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),J=Fe(Z,D),J===null)throw Fe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Se,Te,me,tt,je,Oe,ht,Ft,Pt,fn,Ot,ot,kt,Gt,z,P,fe,xe,we,be,Ge,se,ze,Ae;function Be(){Se=new IC(J),Te=new TC(J,Se,r),Se.init(Te),se=new mA(J,Se,Te),me=new hA(J,Se,Te),tt=new zC,je=new JT,Oe=new pA(J,Se,me,je,Te,se,tt),ht=new RC(v),Ft=new DC(v),Pt=new q2(J,Te),ze=new EC(J,Se,Pt,Te),fn=new kC(J,Pt,tt,ze),Ot=new BC(J,fn,Pt,tt),we=new UC(J,Te,Oe),P=new AC(je),ot=new QT(v,ht,Ft,Se,Te,ze,P),kt=new yA(v,je),Gt=new tA,z=new aA(Se,Te),xe=new bC(v,ht,me,Ot,m,f),fe=new dA(v,Ot,Te),Ae=new SA(J,tt,Te,me),be=new CC(J,Se,tt,Te),Ge=new NC(J,Se,tt,Te),tt.programs=ot.programs,v.capabilities=Te,v.extensions=Se,v.properties=je,v.renderLists=Gt,v.shadowMap=fe,v.state=me,v.info=tt}Be();const De=new xA(v,J);this.xr=De,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const D=Se.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Se.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(F,w,!1))},this.getSize=function(D){return D.set(F,w)},this.setSize=function(D,Z,oe){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,w=Z,e.width=Math.floor(D*G),e.height=Math.floor(Z*G),oe!==!1&&(e.style.width=D+"px",e.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(F*G,w*G).floor()},this.setDrawingBufferSize=function(D,Z,oe){F=D,w=Z,G=oe,e.width=Math.floor(D*oe),e.height=Math.floor(Z*oe),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,Z,oe,K){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,Z,oe,K),me.viewport(I.copy(j).multiplyScalar(G).floor())},this.getScissor=function(D){return D.copy(ie)},this.setScissor=function(D,Z,oe,K){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,Z,oe,K),me.scissor(O.copy(ie).multiplyScalar(G).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(D){me.setScissorTest(he=D)},this.setOpaqueSort=function(D){ae=D},this.setTransparentSort=function(D){X=D},this.getClearColor=function(D){return D.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(D=!0,Z=!0,oe=!0){let K=0;D&&(K|=16384),Z&&(K|=256),oe&&(K|=1024),J.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ke,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Gt.dispose(),z.dispose(),je.dispose(),ht.dispose(),Ft.dispose(),Ot.dispose(),ze.dispose(),Ae.dispose(),ot.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ve),De.removeEventListener("sessionend",at),W&&(W.dispose(),W=null),Qe.stop()};function Ke(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const D=tt.autoReset,Z=fe.enabled,oe=fe.autoUpdate,K=fe.needsUpdate,de=fe.type;Be(),tt.autoReset=D,fe.enabled=Z,fe.autoUpdate=oe,fe.needsUpdate=K,fe.type=de}function yt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function q(D){const Z=D.target;Z.removeEventListener("dispose",q),Re(Z)}function Re(D){ue(D),je.remove(D)}function ue(D){const Z=je.get(D).programs;Z!==void 0&&(Z.forEach(function(oe){ot.releaseProgram(oe)}),D.isShaderMaterial&&ot.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,oe,K,de,We){Z===null&&(Z=pe);const qe=de.isMesh&&de.matrixWorld.determinant()<0,Ze=sn(D,Z,oe,K,de);me.setMaterial(K,qe);let Ye=oe.index;const pt=oe.attributes.position;if(Ye===null){if(pt===void 0||pt.count===0)return}else if(Ye.count===0)return;let it=1;K.wireframe===!0&&(Ye=fn.getWireframeAttribute(oe),it=2),ze.setup(de,K,Ze,oe,Ye);let st,Lt=be;Ye!==null&&(st=Pt.get(Ye),Lt=Ge,Lt.setIndex(st));const Lr=Ye!==null?Ye.count:pt.count,hi=oe.drawRange.start*it,pi=oe.drawRange.count*it,ut=We!==null?We.start*it:0,ct=We!==null?We.count*it:1/0,Dr=Math.max(hi,ut),Ut=Math.min(Lr,hi+pi,ut+ct)-1,dn=Math.max(0,Ut-Dr+1);if(dn!==0){if(de.isMesh)K.wireframe===!0?(me.setLineWidth(K.wireframeLinewidth*Me()),Lt.setMode(1)):Lt.setMode(4);else if(de.isLine){let Ir=K.linewidth;Ir===void 0&&(Ir=1),me.setLineWidth(Ir*Me()),de.isLineSegments?Lt.setMode(1):de.isLineLoop?Lt.setMode(2):Lt.setMode(3)}else de.isPoints?Lt.setMode(0):de.isSprite&&Lt.setMode(4);if(de.isInstancedMesh)Lt.renderInstances(Dr,dn,de.count);else if(oe.isInstancedBufferGeometry){const Ir=Math.min(oe.instanceCount,oe._maxInstanceCount);Lt.renderInstances(Dr,dn,Ir)}else Lt.render(Dr,dn)}},this.compile=function(D,Z){function oe(K,de,We){K.transparent===!0&&K.side===Hi?(K.side=mr,K.needsUpdate=!0,St(K,de,We),K.side=bo,K.needsUpdate=!0,St(K,de,We),K.side=Hi):St(K,de,We)}_=z.get(D),_.init(),M.push(_),D.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(v.physicallyCorrectLights),D.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let We=0;We<de.length;We++){const qe=de[We];oe(qe,D,K)}else oe(de,D,K)}),M.pop(),_=null};let Pe=null;function Ee(D){Pe&&Pe(D)}function Ve(){Qe.stop()}function at(){Qe.start()}const Qe=new b_;Qe.setAnimationLoop(Ee),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(D){Pe=D,De.setAnimationLoop(D),D===null?Qe.stop():Qe.start()},De.addEventListener("sessionstart",Ve),De.addEventListener("sessionend",at),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Z),Z=De.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Z,L),_=z.get(D,M.length),_.init(),M.push(_),k.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(k),B=this.localClippingEnabled,$=P.init(this.clippingPlanes,B,Z),g=Gt.get(D,S.length),g.init(),S.push(g),Yt(D,Z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ae,X),$===!0&&P.beginShadows();const oe=_.state.shadowsArray;if(fe.render(oe,D,Z),$===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(g,D),_.setupLights(v.physicallyCorrectLights),Z.isArrayCamera){const K=Z.cameras;for(let de=0,We=K.length;de<We;de++){const qe=K[de];Je(g,D,qe,qe.viewport)}}else Je(g,D,Z);L!==null&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),D.isScene===!0&&D.onAfterRender(v,D,Z),ze.resetDefaultState(),T=-1,A=null,M.pop(),M.length>0?_=M[M.length-1]:_=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Yt(D,Z,oe,K){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||le.intersectsSprite(D)){K&&re.setFromMatrixPosition(D.matrixWorld).applyMatrix4(k);const qe=Ot.update(D),Ze=D.material;Ze.visible&&g.push(D,qe,Ze,oe,re.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==tt.render.frame&&(D.skeleton.update(),D.skeleton.frame=tt.render.frame),!D.frustumCulled||le.intersectsObject(D))){K&&re.setFromMatrixPosition(D.matrixWorld).applyMatrix4(k);const qe=Ot.update(D),Ze=D.material;if(Array.isArray(Ze)){const Ye=qe.groups;for(let pt=0,it=Ye.length;pt<it;pt++){const st=Ye[pt],Lt=Ze[st.materialIndex];Lt&&Lt.visible&&g.push(D,qe,Lt,oe,re.z,st)}}else Ze.visible&&g.push(D,qe,Ze,oe,re.z,null)}}const We=D.children;for(let qe=0,Ze=We.length;qe<Ze;qe++)Yt(We[qe],Z,oe,K)}function Je(D,Z,oe,K){const de=D.opaque,We=D.transmissive,qe=D.transparent;_.setupLightsView(oe),We.length>0&&Tt(de,Z,oe),K&&me.viewport(I.copy(K)),de.length>0&&Mt(de,Z,oe),We.length>0&&Mt(We,Z,oe),qe.length>0&&Mt(qe,Z,oe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Tt(D,Z,oe){const K=Te.isWebGL2;W===null&&(W=new ws(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Fa:ys,minFilter:tc,samples:K&&l===!0?4:0})),v.getDrawingBufferSize(V),K?W.setSize(V.x,V.y):W.setSize(th(V.x),th(V.y));const de=v.getRenderTarget();v.setRenderTarget(W),v.clear();const We=v.toneMapping;v.toneMapping=fi,Mt(D,Z,oe),v.toneMapping=We,Oe.updateMultisampleRenderTarget(W),Oe.updateRenderTargetMipmap(W),v.setRenderTarget(de)}function Mt(D,Z,oe){const K=Z.isScene===!0?Z.overrideMaterial:null;for(let de=0,We=D.length;de<We;de++){const qe=D[de],Ze=qe.object,Ye=qe.geometry,pt=K===null?qe.material:K,it=qe.group;Ze.layers.test(oe.layers)&&vr(Ze,Z,oe,Ye,pt,it)}}function vr(D,Z,oe,K,de,We){D.onBeforeRender(v,Z,oe,K,de,We),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),de.onBeforeRender(v,Z,oe,K,D,We),de.transparent===!0&&de.side===Hi?(de.side=mr,de.needsUpdate=!0,v.renderBufferDirect(oe,Z,K,de,D,We),de.side=bo,de.needsUpdate=!0,v.renderBufferDirect(oe,Z,K,de,D,We),de.side=Hi):v.renderBufferDirect(oe,Z,K,de,D,We),D.onAfterRender(v,Z,oe,K,de,We)}function St(D,Z,oe){Z.isScene!==!0&&(Z=pe);const K=je.get(D),de=_.state.lights,We=_.state.shadowsArray,qe=de.state.version,Ze=ot.getParameters(D,de.state,We,Z,oe),Ye=ot.getProgramCacheKey(Ze);let pt=K.programs;K.environment=D.isMeshStandardMaterial?Z.environment:null,K.fog=Z.fog,K.envMap=(D.isMeshStandardMaterial?Ft:ht).get(D.envMap||K.environment),pt===void 0&&(D.addEventListener("dispose",q),pt=new Map,K.programs=pt);let it=pt.get(Ye);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===qe)return Cn(D,Ze),it}else Ze.uniforms=ot.getUniforms(D),D.onBuild(oe,Ze,v),D.onBeforeCompile(Ze,v),it=ot.acquireProgram(Ze,Ye),pt.set(Ye,it),K.uniforms=Ze.uniforms;const st=K.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(st.clippingPlanes=P.uniform),Cn(D,Ze),K.needsLights=Wn(D),K.lightsStateVersion=qe,K.needsLights&&(st.ambientLightColor.value=de.state.ambient,st.lightProbe.value=de.state.probe,st.directionalLights.value=de.state.directional,st.directionalLightShadows.value=de.state.directionalShadow,st.spotLights.value=de.state.spot,st.spotLightShadows.value=de.state.spotShadow,st.rectAreaLights.value=de.state.rectArea,st.ltc_1.value=de.state.rectAreaLTC1,st.ltc_2.value=de.state.rectAreaLTC2,st.pointLights.value=de.state.point,st.pointLightShadows.value=de.state.pointShadow,st.hemisphereLights.value=de.state.hemi,st.directionalShadowMap.value=de.state.directionalShadowMap,st.directionalShadowMatrix.value=de.state.directionalShadowMatrix,st.spotShadowMap.value=de.state.spotShadowMap,st.spotLightMatrix.value=de.state.spotLightMatrix,st.spotLightMap.value=de.state.spotLightMap,st.pointShadowMap.value=de.state.pointShadowMap,st.pointShadowMatrix.value=de.state.pointShadowMatrix);const Lt=it.getUniforms(),Lr=Lu.seqWithValue(Lt.seq,st);return K.currentProgram=it,K.uniformsList=Lr,it}function Cn(D,Z){const oe=je.get(D);oe.outputEncoding=Z.outputEncoding,oe.instancing=Z.instancing,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function sn(D,Z,oe,K,de){Z.isScene!==!0&&(Z=pe),Oe.resetTextureUnits();const We=Z.fog,qe=K.isMeshStandardMaterial?Z.environment:null,Ze=L===null?v.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:Ss,Ye=(K.isMeshStandardMaterial?Ft:ht).get(K.envMap||qe),pt=K.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!K.normalMap&&!!oe.attributes.tangent,st=!!oe.morphAttributes.position,Lt=!!oe.morphAttributes.normal,Lr=!!oe.morphAttributes.color,hi=K.toneMapped?v.toneMapping:fi,pi=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ut=pi!==void 0?pi.length:0,ct=je.get(K),Dr=_.state.lights;if($===!0&&(B===!0||D!==A)){const An=D===A&&K.id===T;P.setState(K,D,An)}let Ut=!1;K.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Dr.state.version||ct.outputEncoding!==Ze||de.isInstancedMesh&&ct.instancing===!1||!de.isInstancedMesh&&ct.instancing===!0||de.isSkinnedMesh&&ct.skinning===!1||!de.isSkinnedMesh&&ct.skinning===!0||ct.envMap!==Ye||K.fog===!0&&ct.fog!==We||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==P.numPlanes||ct.numIntersection!==P.numIntersection)||ct.vertexAlphas!==pt||ct.vertexTangents!==it||ct.morphTargets!==st||ct.morphNormals!==Lt||ct.morphColors!==Lr||ct.toneMapping!==hi||Te.isWebGL2===!0&&ct.morphTargetsCount!==ut)&&(Ut=!0):(Ut=!0,ct.__version=K.version);let dn=ct.currentProgram;Ut===!0&&(dn=St(K,Z,de));let Ir=!1,mi=!1,gi=!1;const At=dn.getUniforms(),jr=ct.uniforms;if(me.useProgram(dn.program)&&(Ir=!0,mi=!0,gi=!0),K.id!==T&&(T=K.id,mi=!0),Ir||A!==D){if(At.setValue(J,"projectionMatrix",D.projectionMatrix),Te.logarithmicDepthBuffer&&At.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),A!==D&&(A=D,mi=!0,gi=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const An=At.map.cameraPosition;An!==void 0&&An.setValue(J,re.setFromMatrixPosition(D.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&At.setValue(J,"viewMatrix",D.matrixWorldInverse)}if(de.isSkinnedMesh){At.setOptional(J,de,"bindMatrix"),At.setOptional(J,de,"bindMatrixInverse");const An=de.skeleton;An&&(Te.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),At.setValue(J,"boneTexture",An.boneTexture,Oe),At.setValue(J,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tn=oe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0&&Te.isWebGL2===!0)&&we.update(de,oe,K,dn),(mi||ct.receiveShadow!==de.receiveShadow)&&(ct.receiveShadow=de.receiveShadow,At.setValue(J,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(jr.envMap.value=Ye,jr.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),mi&&(At.setValue(J,"toneMappingExposure",v.toneMappingExposure),ct.needsLights&&Gn(jr,gi),We&&K.fog===!0&&kt.refreshFogUniforms(jr,We),kt.refreshMaterialUniforms(jr,K,G,w,W),Lu.upload(J,ct.uniformsList,jr,Oe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Lu.upload(J,ct.uniformsList,jr,Oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(J,"center",de.center),At.setValue(J,"modelViewMatrix",de.modelViewMatrix),At.setValue(J,"normalMatrix",de.normalMatrix),At.setValue(J,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let No=0,sc=An.length;No<sc;No++)if(Te.isWebGL2){const Xi=An[No];Ae.update(Xi,dn),Ae.bind(Xi,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function Gn(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Wn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(D,Z,oe){je.get(D.texture).__webglTexture=Z,je.get(D.depthTexture).__webglTexture=oe;const K=je.get(D);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=oe===void 0,K.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Z){const oe=je.get(D);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,oe=0){L=D,E=Z,R=oe;let K=!0;if(D){const Ye=je.get(D);Ye.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),K=!1):Ye.__webglFramebuffer===void 0?Oe.setupRenderTarget(D):Ye.__hasExternalTextures&&Oe.rebindTextures(D,je.get(D.texture).__webglTexture,je.get(D.depthTexture).__webglTexture)}let de=null,We=!1,qe=!1;if(D){const Ye=D.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture)&&(qe=!0);const pt=je.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(de=pt[Z],We=!0):Te.isWebGL2&&D.samples>0&&Oe.useMultisampledRTT(D)===!1?de=je.get(D).__webglMultisampledFramebuffer:de=pt,I.copy(D.viewport),O.copy(D.scissor),C=D.scissorTest}else I.copy(j).multiplyScalar(G).floor(),O.copy(ie).multiplyScalar(G).floor(),C=he;if(me.bindFramebuffer(36160,de)&&Te.drawBuffers&&K&&me.drawBuffers(D,de),me.viewport(I),me.scissor(O),me.setScissorTest(C),We){const Ye=je.get(D.texture);J.framebufferTexture2D(36160,36064,34069+Z,Ye.__webglTexture,oe)}else if(qe){const Ye=je.get(D.texture),pt=Z||0;J.framebufferTextureLayer(36160,36064,Ye.__webglTexture,oe||0,pt)}T=-1},this.readRenderTargetPixels=function(D,Z,oe,K,de,We,qe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=je.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){me.bindFramebuffer(36160,Ze);try{const Ye=D.texture,pt=Ye.format,it=Ye.type;if(pt!==Gr&&se.convert(pt)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=it===Fa&&(Se.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Se.has("EXT_color_buffer_float"));if(it!==ys&&se.convert(it)!==J.getParameter(35738)&&!(it===ps&&(Te.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-K&&oe>=0&&oe<=D.height-de&&J.readPixels(Z,oe,K,de,se.convert(pt),se.convert(it),We)}finally{const Ye=L!==null?je.get(L).__webglFramebuffer:null;me.bindFramebuffer(36160,Ye)}}},this.copyFramebufferToTexture=function(D,Z,oe=0){const K=Math.pow(2,-oe),de=Math.floor(Z.image.width*K),We=Math.floor(Z.image.height*K);Oe.setTexture2D(Z,0),J.copyTexSubImage2D(3553,oe,0,0,D.x,D.y,de,We),me.unbindTexture()},this.copyTextureToTexture=function(D,Z,oe,K=0){const de=Z.image.width,We=Z.image.height,qe=se.convert(oe.format),Ze=se.convert(oe.type);Oe.setTexture2D(oe,0),J.pixelStorei(37440,oe.flipY),J.pixelStorei(37441,oe.premultiplyAlpha),J.pixelStorei(3317,oe.unpackAlignment),Z.isDataTexture?J.texSubImage2D(3553,K,D.x,D.y,de,We,qe,Ze,Z.image.data):Z.isCompressedTexture?J.compressedTexSubImage2D(3553,K,D.x,D.y,Z.mipmaps[0].width,Z.mipmaps[0].height,qe,Z.mipmaps[0].data):J.texSubImage2D(3553,K,D.x,D.y,qe,Ze,Z.image),K===0&&oe.generateMipmaps&&J.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,oe,K,de=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const We=D.max.x-D.min.x+1,qe=D.max.y-D.min.y+1,Ze=D.max.z-D.min.z+1,Ye=se.convert(K.format),pt=se.convert(K.type);let it;if(K.isData3DTexture)Oe.setTexture3D(K,0),it=32879;else if(K.isDataArrayTexture)Oe.setTexture2DArray(K,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,K.flipY),J.pixelStorei(37441,K.premultiplyAlpha),J.pixelStorei(3317,K.unpackAlignment);const st=J.getParameter(3314),Lt=J.getParameter(32878),Lr=J.getParameter(3316),hi=J.getParameter(3315),pi=J.getParameter(32877),ut=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;J.pixelStorei(3314,ut.width),J.pixelStorei(32878,ut.height),J.pixelStorei(3316,D.min.x),J.pixelStorei(3315,D.min.y),J.pixelStorei(32877,D.min.z),oe.isDataTexture||oe.isData3DTexture?J.texSubImage3D(it,de,Z.x,Z.y,Z.z,We,qe,Ze,Ye,pt,ut.data):oe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(it,de,Z.x,Z.y,Z.z,We,qe,Ze,Ye,ut.data)):J.texSubImage3D(it,de,Z.x,Z.y,Z.z,We,qe,Ze,Ye,pt,ut),J.pixelStorei(3314,st),J.pixelStorei(32878,Lt),J.pixelStorei(3316,Lr),J.pixelStorei(3315,hi),J.pixelStorei(32877,pi),de===0&&K.generateMipmaps&&J.generateMipmap(it),me.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Oe.setTextureCube(D,0):D.isData3DTexture?Oe.setTexture3D(D,0):D.isDataArrayTexture?Oe.setTexture2DArray(D,0):Oe.setTexture2D(D,0),me.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,me.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class MA extends R_{}MA.prototype.isWebGL1Renderer=!0;class bA extends nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class EA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);const xo=50,yo=80,CA=!0,Nd=5,TA=new EA,P_=kA();class AA{constructor(e){Zt(this,"_ref");Zt(this,"_speed",-1);Zt(this,"_horizontalPressure",-1);Zt(this,"_verticalPressure",-1);Zt(this,"_waveFrequencyX",-1);Zt(this,"_waveFrequencyY",-1);Zt(this,"_waveAmplitude",-1);Zt(this,"_shadows",-1);Zt(this,"_highlights",-1);Zt(this,"_saturation",-1);Zt(this,"_brightness",-1);Zt(this,"_colorBlending",-1);Zt(this,"_colors",[]);Zt(this,"_wireframe",!1);Zt(this,"_backgroundColor","#FFFFFF");Zt(this,"_backgroundAlpha",1);Zt(this,"requestRef",-1);Zt(this,"sizeObserver");Zt(this,"sceneState");const{ref:t,speed:s=4,horizontalPressure:o=3,verticalPressure:l=3,waveFrequencyX:f=5,waveFrequencyY:u=5,waveAmplitude:d=3,colors:h,highlights:m=4,shadows:g=4,colorSaturation:_=0,colorBrightness:S=1,colorBlending:M=5,wireframe:v=!1,backgroundColor:y="#FFFFFF",backgroundAlpha:E=1,resolution:R=1,seed:L}=e;this._ref=t,this.destroy=this.destroy.bind(this),this._initScene=this._initScene.bind(this),this._buildMaterial=this._buildMaterial.bind(this),this.speed=s,this.horizontalPressure=o,this.verticalPressure=l,this.waveFrequencyX=f,this.waveFrequencyY=u,this.waveAmplitude=d,this.colorBlending=M,this.colors=h,this.shadows=g,this.highlights=m,this.colorSaturation=_,this.colorBrightness=S,this.wireframe=v,this.backgroundColor=y,this.backgroundAlpha=E,this.sceneState=this._initScene(R);let T=L!==void 0?L:IA();const A=()=>{const{renderer:O,camera:C,scene:F,meshes:w}=this.sceneState;Math.floor(T*10)%5===0&&DA(t),O.setClearColor(this._backgroundColor,this._backgroundAlpha),w.forEach(G=>{const ae=this._ref.width,X=this._ref.height,j=[...this._colors.map(ie=>({is_active:ie.enabled,color:new Ct(ie.color),influence:ie.influence})),...Array.from({length:Nd-this._colors.length}).map(()=>({is_active:!1,color:new Ct(0)}))];T+=TA.getDelta()*this._speed,G.material.uniforms.u_time.value=T,G.material.uniforms.u_resolution={value:new _t(ae,X)},G.material.uniforms.u_color_pressure={value:new _t(this._horizontalPressure,this._verticalPressure)},G.material.uniforms.u_wave_frequency_x={value:this._waveFrequencyX},G.material.uniforms.u_wave_frequency_y={value:this._waveFrequencyY},G.material.uniforms.u_wave_amplitude={value:this._waveAmplitude},G.material.uniforms.u_plane_width={value:xo},G.material.uniforms.u_plane_height={value:yo},G.material.uniforms.u_color_blending={value:this._colorBlending},G.material.uniforms.u_colors={value:j},G.material.uniforms.u_colors_count={value:Nd},G.material.uniforms.u_shadows={value:this._shadows},G.material.uniforms.u_highlights={value:this._highlights},G.material.uniforms.u_saturation={value:this._saturation},G.material.uniforms.u_brightness={value:this._brightness},G.material.wireframe=this._wireframe}),O.render(F,C),this.requestRef=requestAnimationFrame(A)},I=()=>{const{renderer:O}=this.sceneState,C=O.domElement,F=C.clientWidth,w=C.clientHeight;this.sceneState.renderer.setSize(F,w,!1),rv(this.sceneState.camera,F,w)};this.sizeObserver=new ResizeObserver(O=>{I()}),this.sizeObserver.observe(t),A()}destroy(){this&&(cancelAnimationFrame(this.requestRef),this.sizeObserver.disconnect())}set speed(e){this._speed=e/20}set horizontalPressure(e){this._horizontalPressure=e/4}set verticalPressure(e){this._verticalPressure=e/4}set waveFrequencyX(e){this._waveFrequencyX=e*.04}set waveFrequencyY(e){this._waveFrequencyY=e*.04}set waveAmplitude(e){this._waveAmplitude=e*.75}set colors(e){this._colors=e}set highlights(e){this._highlights=e/100}set shadows(e){this._shadows=e/100}set colorSaturation(e){this._saturation=e/10}set colorBrightness(e){this._brightness=e}set colorBlending(e){this._colorBlending=e/10}set wireframe(e){this._wireframe=e}set resolution(e){this.sceneState=this._initScene(e)}set backgroundColor(e){this._backgroundColor=e}set backgroundAlpha(e){this._backgroundAlpha=e}_initScene(e){const t=this._ref.width,s=this._ref.height,o=new R_({alpha:!0,canvas:this._ref});o.setClearColor(16711680,.5),o.setSize(t,s,!1);const l=[],f=new bA,u=this._buildMaterial(t,s),d=new rc(xo,yo,240*e,240*e),h=new ci(d,u);h.rotation.x=-Math.PI/3.5,h.position.z=-1,l.push(h),f.add(h);const m=new Eh(0,0,0,0,0,0);return m.position.z=5,rv(m,t,s),{renderer:o,camera:m,scene:f,meshes:l,resolution:e}}_buildMaterial(e,t){const s=[...this._colors.map(f=>({is_active:f.enabled,color:new Ct(f.color),influence:f.influence})),...Array.from({length:Nd-this._colors.length}).map(()=>({is_active:!1,color:new Ct(0)}))],o={u_time:{value:0},u_color_pressure:{value:new _t(this._horizontalPressure,this._verticalPressure)},u_wave_frequency_x:{value:this._waveFrequencyX},u_wave_frequency_y:{value:this._waveFrequencyY},u_wave_amplitude:{value:this._waveAmplitude},u_resolution:{value:new _t(e,t)},u_colors:{value:s},u_colors_count:{value:this._colors.length},u_plane_width:{value:xo},u_plane_height:{value:yo},u_shadows:{value:this._shadows},u_highlights:{value:this._highlights}},l=new qi({uniforms:o,vertexShader:iv()+LA()+sv()+RA(),fragmentShader:iv()+sv()+PA()});return l.wireframe=CA,l}}function rv(r,e,t){const s=e*t/1e6*xo*yo/1.5,o=e/t,l=Math.sqrt(s*o),f=s/l,u=-xo/2,d=Math.min((u+l)/1.5,xo/2),h=yo/4,m=Math.max((h-f)/2,-yo/4),g=-100,_=1e3;r instanceof Eh?(r.left=u,r.right=d,r.top=h,r.bottom=m,r.near=g,r.far=_,r.updateProjectionMatrix()):r instanceof hr&&(r.aspect=e/t,r.updateProjectionMatrix())}function RA(){return`

void main() {

    vUv = uv;

    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * position.y + u_time,
        u_time
    ));
    
    vec3 color;

    // float t = mod(u_base_color, 100.0);
    color = u_colors[0].color;
    
    vec2 noise_cord = vUv * u_color_pressure;
    
    const float minNoise = .0;
    const float maxNoise = .9;
    
    for (int i = 1; i < u_colors_count; i++) {
    
        if(u_colors[i].is_active == 1.0){
            float noiseFlow = (1. + float(i)) / 30.;
            float noiseSpeed = (1. + float(i)) * 0.11;
            float noiseSeed = 13. + float(i) * 7.;
            
            float noise = snoise(
                vec3(
                    noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                    noise_cord.y * u_color_pressure.y,
                    u_time * noiseSpeed
                ) + noiseSeed
            );
            
            noise = clamp(minNoise, maxNoise + float(i) * 0.02, noise);
            vec3 nextColor = u_colors[i].color;
            
            // vec3 colorOklab = oklab2rgb(color);
            // vec3 nextColorOklab = oklab2rgb(nextColor);
            // vec3 mixColor = mix(colorOklab, nextColorOklab, smoothstep(0.0, u_color_blending, noise));
            //
            // color = rgb2oklab(mixColor);
            
            color = mix(color, nextColor, smoothstep(0.0, u_color_blending, noise));
        }
        
    }
    
    v_color = color;
    
    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
    
    v_new_position = gl_Position;
}
`}function PA(){return`

void main(){
    vec3 color = v_color;
    
    color.rgb += pow(v_displacement_amount, 1.0) * u_highlights;
    color.rgb -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;
    
    gl_FragColor = vec4(color,1.0);
}
`}const iv=()=>`
precision highp float;

struct Color {
    float is_active;
    vec3 color;
    float value;
};

uniform float u_time;

uniform float u_wave_amplitude;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;

uniform vec2 u_color_pressure;

uniform float u_plane_width;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;

uniform float u_color_blending;

uniform int u_colors_count;
uniform Color u_colors[5];
uniform vec2 u_resolution;

varying vec2 vUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

    `,LA=()=>`

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);
                    
vec3 oklab2rgb(vec3 linear)
{
    const mat3 im1 = mat3(0.4121656120, 0.2118591070, 0.0883097947,
                          0.5362752080, 0.6807189584, 0.2818474174,
                          0.0514575653, 0.1074065790, 0.6302613616);
                       
    const mat3 im2 = mat3(+0.2104542553, +1.9779984951, +0.0259040371,
                          +0.7936177850, -2.4285922050, +0.7827717662,
                          -0.0040720468, +0.4505937099, -0.8086757660);
                       
    vec3 lms = im1 * linear;
            
    return im2 * (sign(lms) * pow(abs(lms), vec3(1.0/3.0)));
}

vec3 rgb2oklab(vec3 oklab)
{
    const mat3 m1 = mat3(+1.000000000, +1.000000000, +1.000000000,
                         +0.396337777, -0.105561346, -0.089484178,
                         +0.215803757, -0.063854173, -1.291485548);
                       
    const mat3 m2 = mat3(+4.076724529, -1.268143773, -0.004111989,
                         -3.307216883, +2.609332323, -0.703476310,
                         +0.230759054, -0.341134429, +1.706862569);
    vec3 lms = m1 * oklab;
    
    return m2 * (lms * lms * lms);
}

    `,sv=()=>`

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

float saturation(vec3 rgb)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return abs(6.0 * d + e);
}

// get saturation of a color in values between 0 and 1
float getSaturation(vec3 color) {
    float max = max(color.r, max(color.g, color.b));
    float min = min(color.r, min(color.g, color.b));
    return (max - min) / max;
}
    
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`,ov=r=>{r.id=P_,r.href="https://neat.firecms.co",r.target="_blank",r.style.position="absolute",r.style.display="block",r.style.bottom="0",r.style.right="0",r.style.padding="10px",r.style.color="#dcdcdc",r.style.opacity="0.8",r.style.fontFamily="sans-serif",r.style.fontSize="16px",r.style.fontWeight="bold",r.style.textDecoration="none",r.style.zIndex="10000",r.innerHTML="NEAT"},DA=r=>{var s,o;const e=(s=r.parentElement)==null?void 0:s.getElementsByTagName("a");if(e){for(let l=0;l<e.length;l++)if(e[l].id===P_){ov(e[l]);return}}const t=document.createElement("a");ov(t),(o=r.parentElement)==null||o.appendChild(t)};function IA(){const r=new Date,e=r.getMinutes(),t=r.getSeconds();return e*60+t}function kA(r=6){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let s=0;s<r;s++){const o=Math.floor(Math.random()*e.length);t+=e.charAt(o)}return t}const NA=()=>{const r=ee.useRef(null),e=ee.useRef(null);return ee.useEffect(()=>{const t=document.createElement("style");return t.textContent="a { display: none !important; }",document.head.appendChild(t),()=>document.head.removeChild(t)},[]),ee.useEffect(()=>{if(!r.current)return;const t={colors:[{color:"#FFFFFF",enabled:!0},{color:"#F9FAFB",enabled:!0},{color:"#F7F7FF",enabled:!0},{color:"#F8F9F9",enabled:!0},{color:"#F5F6FA",enabled:!0}],speed:5,horizontalPressure:3,verticalPressure:5,waveFrequencyX:1,waveFrequencyY:3,waveAmplitude:8,shadows:4,highlights:5,colorBrightness:1,colorSaturation:2,wireframe:!1,colorBlending:7,backgroundColor:"#FFFFFF",backgroundAlpha:1,grainScale:1,grainSparsity:0,grainIntensity:.175,grainSpeed:1,resolution:2,yOffset:0};return e.current=new AA({ref:r.current,...t}),()=>{var s;(s=e.current)==null||s.destroy()}},[]),dt.jsx("canvas",{id:"gradientCanvas",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1},ref:r})};function zA(){const[r,e]=ee.useState(()=>{const u=localStorage.getItem("ITEMS");return u?JSON.parse(u):[]}),[t,s]=ee.useState("#0b3954");ee.useEffect(()=>{localStorage.setItem("ITEMS",JSON.stringify(r))},[r]);const o=u=>{e(d=>[...d,{id:crypto.randomUUID(),title:u,completed:!1}])},l=(u,d)=>{e(h=>h.map(m=>m.id===u?{...m,completed:d}:m))},f=u=>{e(d=>d.filter(h=>h.id!==u))};return ee.useEffect(()=>{document.body.style.backgroundColor=t},[t]),dt.jsxs(dt.Fragment,{children:[dt.jsx(NA,{onBackgroundColorChange:s}),dt.jsxs("div",{className:"app-container",children:[dt.jsx(uv,{onSubmit:o}),dt.jsx("h1",{className:"header",children:"Todo List:"}),dt.jsx(s_,{todos:r,setTodos:e,toggleTodo:l,deleteTodo:f})]})]})}const L_=document.getElementById("root");if(!L_)throw new Error("Root container not found");My.createRoot(L_).render(dt.jsx(En.StrictMode,{children:dt.jsx(zA,{})}));
