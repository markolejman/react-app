var O_=Object.defineProperty;var U_=(s,e,t)=>e in s?O_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Gt=(s,e,t)=>U_(s,typeof e!="symbol"?e+"":e,t);function B_(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in s)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(s,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Jg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var af={exports:{}},ea={},lf={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function V_(){if(em)return Ze;em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(I,W,re){this.props=I,this.context=W,this.refs=v,this.updater=re||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function E(){}E.prototype=y.prototype;function L(I,W,re){this.props=I,this.context=W,this.refs=v,this.updater=re||S}var D=L.prototype=new E;D.constructor=L,b(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,A=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function T(I,W,re){var me,we={},te=null,Ne=null;if(W!=null)for(me in W.ref!==void 0&&(Ne=W.ref),W.key!==void 0&&(te=""+W.key),W)A.call(W,me)&&!U.hasOwnProperty(me)&&(we[me]=W[me]);var be=arguments.length-2;if(be===1)we.children=re;else if(1<be){for(var Le=Array(be),Me=0;Me<be;Me++)Le[Me]=arguments[Me+2];we.children=Le}if(I&&I.defaultProps)for(me in be=I.defaultProps,be)we[me]===void 0&&(we[me]=be[me]);return{$$typeof:s,type:I,key:te,ref:Ne,props:we,_owner:F.current}}function N(I,W){return{$$typeof:s,type:I.type,key:W,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function $(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(re){return W[re]})}var ce=/\/+/g;function X(I,W){return typeof I=="object"&&I!==null&&I.key!=null?$(""+I.key):W.toString(36)}function q(I,W,re,me,we){var te=typeof I;(te==="undefined"||te==="boolean")&&(I=null);var Ne=!1;if(I===null)Ne=!0;else switch(te){case"string":case"number":Ne=!0;break;case"object":switch(I.$$typeof){case s:case e:Ne=!0}}if(Ne)return Ne=I,we=we(Ne),I=me===""?"."+X(Ne,0):me,C(we)?(re="",I!=null&&(re=I.replace(ce,"$&/")+"/"),q(we,W,re,"",function(Me){return Me})):we!=null&&(w(we)&&(we=N(we,re+(!we.key||Ne&&Ne.key===we.key?"":(""+we.key).replace(ce,"$&/")+"/")+I)),W.push(we)),1;if(Ne=0,me=me===""?".":me+":",C(I))for(var be=0;be<I.length;be++){te=I[be];var Le=me+X(te,be);Ne+=q(te,W,re,Le,we)}else if(Le=x(I),typeof Le=="function")for(I=Le.call(I),be=0;!(te=I.next()).done;)te=te.value,Le=me+X(te,be++),Ne+=q(te,W,re,Le,we);else if(te==="object")throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Ne}function ne(I,W,re){if(I==null)return I;var me=[],we=0;return q(I,me,"","",function(te){return W.call(re,te,we++)}),me}function de(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(re){(I._status===0||I._status===-1)&&(I._status=1,I._result=re)},function(re){(I._status===0||I._status===-1)&&(I._status=2,I._result=re)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var fe={current:null},H={transition:null},B={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function V(){throw Error("act(...) is not supported in production builds of React.")}return Ze.Children={map:ne,forEach:function(I,W,re){ne(I,function(){W.apply(this,arguments)},re)},count:function(I){var W=0;return ne(I,function(){W++}),W},toArray:function(I){return ne(I,function(W){return W})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ze.Component=y,Ze.Fragment=t,Ze.Profiler=a,Ze.PureComponent=L,Ze.StrictMode=r,Ze.Suspense=h,Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Ze.act=V,Ze.cloneElement=function(I,W,re){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var me=b({},I.props),we=I.key,te=I.ref,Ne=I._owner;if(W!=null){if(W.ref!==void 0&&(te=W.ref,Ne=F.current),W.key!==void 0&&(we=""+W.key),I.type&&I.type.defaultProps)var be=I.type.defaultProps;for(Le in W)A.call(W,Le)&&!U.hasOwnProperty(Le)&&(me[Le]=W[Le]===void 0&&be!==void 0?be[Le]:W[Le])}var Le=arguments.length-2;if(Le===1)me.children=re;else if(1<Le){be=Array(Le);for(var Me=0;Me<Le;Me++)be[Me]=arguments[Me+2];me.children=be}return{$$typeof:s,type:I.type,key:we,ref:te,props:me,_owner:Ne}},Ze.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Ze.createElement=T,Ze.createFactory=function(I){var W=T.bind(null,I);return W.type=I,W},Ze.createRef=function(){return{current:null}},Ze.forwardRef=function(I){return{$$typeof:c,render:I}},Ze.isValidElement=w,Ze.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:de}},Ze.memo=function(I,W){return{$$typeof:p,type:I,compare:W===void 0?null:W}},Ze.startTransition=function(I){var W=H.transition;H.transition={};try{I()}finally{H.transition=W}},Ze.unstable_act=V,Ze.useCallback=function(I,W){return fe.current.useCallback(I,W)},Ze.useContext=function(I){return fe.current.useContext(I)},Ze.useDebugValue=function(){},Ze.useDeferredValue=function(I){return fe.current.useDeferredValue(I)},Ze.useEffect=function(I,W){return fe.current.useEffect(I,W)},Ze.useId=function(){return fe.current.useId()},Ze.useImperativeHandle=function(I,W,re){return fe.current.useImperativeHandle(I,W,re)},Ze.useInsertionEffect=function(I,W){return fe.current.useInsertionEffect(I,W)},Ze.useLayoutEffect=function(I,W){return fe.current.useLayoutEffect(I,W)},Ze.useMemo=function(I,W){return fe.current.useMemo(I,W)},Ze.useReducer=function(I,W,re){return fe.current.useReducer(I,W,re)},Ze.useRef=function(I){return fe.current.useRef(I)},Ze.useState=function(I){return fe.current.useState(I)},Ze.useSyncExternalStore=function(I,W,re){return fe.current.useSyncExternalStore(I,W,re)},Ze.useTransition=function(){return fe.current.useTransition()},Ze.version="18.3.1",Ze}var tm;function md(){return tm||(tm=1,lf.exports=V_()),lf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function G_(){if(nm)return ea;nm=1;var s=md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:c,key:x,ref:S,props:g,_owner:a.current}}return ea.Fragment=t,ea.jsx=f,ea.jsxs=f,ea}var im;function W_(){return im||(im=1,af.exports=G_()),af.exports}var vt=W_(),pt=md();const e0=Jg(pt),rm=B_({__proto__:null,default:e0},[pt]);var Cl={},uf={exports:{}},Ln={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function H_(){return sm||(sm=1,function(s){function e(H,B){var V=H.length;H.push(B);e:for(;0<V;){var I=V-1>>>1,W=H[I];if(0<a(W,B))H[I]=B,H[V]=W,V=I;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var B=H[0],V=H.pop();if(V!==B){H[0]=V;e:for(var I=0,W=H.length,re=W>>>1;I<re;){var me=2*(I+1)-1,we=H[me],te=me+1,Ne=H[te];if(0>a(we,V))te<W&&0>a(Ne,we)?(H[I]=Ne,H[te]=V,I=te):(H[I]=we,H[me]=V,I=me);else if(te<W&&0>a(Ne,V))H[I]=Ne,H[te]=V,I=te;else break e}}return B}function a(H,B){var V=H.sortIndex-B.sortIndex;return V!==0?V:H.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],p=[],_=1,g=null,x=3,S=!1,b=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var B=t(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=H)r(p),B.sortIndex=B.expirationTime,e(h,B);else break;B=t(p)}}function C(H){if(v=!1,D(H),!b)if(t(h)!==null)b=!0,de(A);else{var B=t(p);B!==null&&fe(C,B.startTime-H)}}function A(H,B){b=!1,v&&(v=!1,E(T),T=-1),S=!0;var V=x;try{for(D(B),g=t(h);g!==null&&(!(g.expirationTime>B)||H&&!$());){var I=g.callback;if(typeof I=="function"){g.callback=null,x=g.priorityLevel;var W=I(g.expirationTime<=B);B=s.unstable_now(),typeof W=="function"?g.callback=W:g===t(h)&&r(h),D(B)}else r(h);g=t(h)}if(g!==null)var re=!0;else{var me=t(p);me!==null&&fe(C,me.startTime-B),re=!1}return re}finally{g=null,x=V,S=!1}}var F=!1,U=null,T=-1,N=5,w=-1;function $(){return!(s.unstable_now()-w<N)}function ce(){if(U!==null){var H=s.unstable_now();w=H;var B=!0;try{B=U(!0,H)}finally{B?X():(F=!1,U=null)}}else F=!1}var X;if(typeof L=="function")X=function(){L(ce)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ne=q.port2;q.port1.onmessage=ce,X=function(){ne.postMessage(null)}}else X=function(){y(ce,0)};function de(H){U=H,F||(F=!0,X())}function fe(H,B){T=y(function(){H(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){b||S||(b=!0,de(A))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var V=x;x=B;try{return H()}finally{x=V}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,B){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var V=x;x=H;try{return B()}finally{x=V}},s.unstable_scheduleCallback=function(H,B,V){var I=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?I+V:I):V=I,H){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=V+W,H={id:_++,callback:B,priorityLevel:H,startTime:V,expirationTime:W,sortIndex:-1},V>I?(H.sortIndex=V,e(p,H),t(h)===null&&H===t(p)&&(v?(E(T),T=-1):v=!0,fe(C,V-I))):(H.sortIndex=W,e(h,H),b||S||(b=!0,de(A))),H},s.unstable_shouldYield=$,s.unstable_wrapCallback=function(H){var B=x;return function(){var V=x;x=B;try{return H.apply(this,arguments)}finally{x=V}}}}(ff)),ff}var om;function $_(){return om||(om=1,cf.exports=H_()),cf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function j_(){if(am)return Ln;am=1;var s=md(),e=$_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function v(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new v(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new v(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new v(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new v(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new v(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new v(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new v(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new v(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new v(n,5,!1,n.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(E,L);y[i]=new v(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(E,L);y[i]=new v(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(E,L);y[i]=new v(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new v(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new v(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),$=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function B(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var V=Object.assign,I;function W(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var re=!1;function me(n,i){if(!n||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,k=m.length-1;1<=M&&0<=k&&d[M]!==m[k];)k--;for(;1<=M&&0<=k;M--,k--)if(d[M]!==m[k]){if(M!==1||k!==1)do if(M--,k--,0>k||d[M]!==m[k]){var O=`
`+d[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=k);break}}}finally{re=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?W(n):""}function we(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=me(n.type,!1),n;case 11:return n=me(n.type.render,!1),n;case 1:return n=me(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case N:return"Profiler";case T:return"StrictMode";case X:return"Suspense";case q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function Ne(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ot(n){n._valueTracker||(n._valueTracker=Me(n))}function Ye(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Ue(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ft(n,i){var o=i.checked;return V({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function an(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function bn(n,i){Xt(n,i);var o=be(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?at(n,i.type,o):i.hasOwnProperty("defaultValue")&&at(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function at(n,i,o){(i!=="number"||Ue(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var gn=Array.isArray;function Jt(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function z(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return V({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(gn(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:be(o)}}function le(n,i){var o=be(i.value),u=be(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function xe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?xe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var He,ie=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(He=He||document.createElement("div"),He.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=He.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Fe(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pe[i]=Pe[n]})});function De(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Pe.hasOwnProperty(n)&&Pe[n]?(""+i).trim():i+"px"}function qe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=De(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var nt=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(n,i){if(i){if(nt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function j(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function oe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,Se=null,Ke=null;function Nt(n){if(n=Uo(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ga(i),Te(n.stateNode,n.type,i))}}function Tt(n){Se?Ke?Ke.push(n):Ke=[n]:Se=n}function si(){if(Se){var n=Se,i=Ke;if(Ke=Se=null,Nt(n),i)for(n=0;n<i.length;n++)Nt(i[n])}}function wt(n,i){return n(i)}function $n(){}var ln=!1;function ba(n,i,o){if(ln)return n(i,o);ln=!0;try{return wt(n,i,o)}finally{ln=!1,(Se!==null||Ke!==null)&&($n(),si())}}function _i(n,i){var o=n.stateNode;if(o===null)return null;var u=Ga(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ds=!1;if(c)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{ds=!1}function Eu(n,i,o,u,d,m,M,k,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(pe){this.onError(pe)}}var zr=!1,R=null,Q=!1,ae=null,K={onError:function(n){zr=!0,R=n}};function ue(n,i,o,u,d,m,M,k,O){zr=!1,R=null,Eu.apply(K,arguments)}function Be(n,i,o,u,d,m,M,k,O){if(ue.apply(this,arguments),zr){if(zr){var J=R;zr=!1,R=null}else throw Error(t(198));Q||(Q=!0,ae=J)}}function We(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Xe(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function je(n){if(We(n)!==n)throw Error(t(188))}function lt(n){var i=n.alternate;if(!i){if(i=We(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return je(d),n;if(m===u)return je(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,k=d.child;k;){if(k===o){M=!0,o=d,u=m;break}if(k===u){M=!0,u=d,o=m;break}k=k.sibling}if(!M){for(k=m.child;k;){if(k===o){M=!0,o=m,u=d;break}if(k===u){M=!0,u=m,o=d;break}k=k.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Je(n){return n=lt(n),n!==null?et(n):null}function et(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=et(n);if(i!==null)return i;n=n.sibling}return null}var Mt=e.unstable_scheduleCallback,xi=e.unstable_cancelCallback,er=e.unstable_shouldYield,tr=e.unstable_requestPaint,it=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,yi=e.unstable_ImmediatePriority,Pt=e.unstable_UserBlockingPriority,en=e.unstable_NormalPriority,Si=e.unstable_LowPriority,nr=e.unstable_IdlePriority,ir=null,xt=null;function Ii(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ir,n,void 0,(n.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Tu,_n=Math.log,yo=Math.LN2;function Tu(n){return n>>>=0,n===0?32:31-(_n(n)/yo|0)|0}var Fr=64,Ea=4194304;function So(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ta(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var k=M&~d;k!==0?u=So(k):(m&=M,m!==0&&(u=So(m)))}else M=o&~d,M!==0?u=So(M):m!==0&&(u=So(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-vn(i),d=1<<o,u|=n[o],i&=~d;return u}function iv(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rv(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-vn(m),k=1<<M,O=d[M];O===-1?((k&o)===0||(k&u)!==0)&&(d[M]=iv(k,i)):O<=i&&(n.expiredLanes|=k),m&=~k}}function Cu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rd(){var n=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),n}function Au(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function wo(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-vn(i),n[i]=o}function sv(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-vn(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Pu(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-vn(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var dt=0;function Dd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Id,Lu,kd,zd,Fd,Ru=!1,Ca=[],rr=null,sr=null,or=null,Mo=new Map,bo=new Map,ar=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nd(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Mo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(i.pointerId)}}function Eo(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&Lu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function av(n,i,o,u,d){switch(i){case"focusin":return rr=Eo(rr,n,i,o,u,d),!0;case"dragenter":return sr=Eo(sr,n,i,o,u,d),!0;case"mouseover":return or=Eo(or,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return Mo.set(m,Eo(Mo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,bo.set(m,Eo(bo.get(m)||null,n,i,o,u,d)),!0}return!1}function Od(n){var i=Nr(n.target);if(i!==null){var o=We(i);if(o!==null){if(i=o.tag,i===13){if(i=Xe(o),i!==null){n.blockedOn=i,Fd(n.priority,function(){kd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Iu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ce=u,o.target.dispatchEvent(u),Ce=null}else return i=Uo(o),i!==null&&Lu(i),n.blockedOn=o,!1;i.shift()}return!0}function Ud(n,i,o){Aa(n)&&o.delete(i)}function lv(){Ru=!1,rr!==null&&Aa(rr)&&(rr=null),sr!==null&&Aa(sr)&&(sr=null),or!==null&&Aa(or)&&(or=null),Mo.forEach(Ud),bo.forEach(Ud)}function To(n,i){n.blockedOn===i&&(n.blockedOn=null,Ru||(Ru=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function Co(n){function i(d){return To(d,n)}if(0<Ca.length){To(Ca[0],n);for(var o=1;o<Ca.length;o++){var u=Ca[o];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&To(rr,n),sr!==null&&To(sr,n),or!==null&&To(or,n),Mo.forEach(i),bo.forEach(i),o=0;o<ar.length;o++)u=ar[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)Od(o),o.blockedOn===null&&ar.shift()}var hs=C.ReactCurrentBatchConfig,Pa=!0;function uv(n,i,o,u){var d=dt,m=hs.transition;hs.transition=null;try{dt=1,Du(n,i,o,u)}finally{dt=d,hs.transition=m}}function cv(n,i,o,u){var d=dt,m=hs.transition;hs.transition=null;try{dt=4,Du(n,i,o,u)}finally{dt=d,hs.transition=m}}function Du(n,i,o,u){if(Pa){var d=Iu(n,i,o,u);if(d===null)Ku(n,i,u,La,o),Nd(n,u);else if(av(d,n,i,o,u))u.stopPropagation();else if(Nd(n,u),i&4&&-1<ov.indexOf(n)){for(;d!==null;){var m=Uo(d);if(m!==null&&Id(m),m=Iu(n,i,o,u),m===null&&Ku(n,i,u,La,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ku(n,i,u,null,o)}}var La=null;function Iu(n,i,o,u){if(La=null,n=oe(u),n=Nr(n),n!==null)if(i=We(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Xe(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return La=n,null}function Bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case yi:return 1;case Pt:return 4;case en:case Si:return 16;case nr:return 536870912;default:return 16}default:return 16}}var lr=null,ku=null,Ra=null;function Vd(){if(Ra)return Ra;var n,i=ku,o=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return Ra=d.slice(n,1<u?1-u:void 0)}function Da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function Gd(){return!1}function In(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ia:Gd,this.isPropagationStopped=Gd,this}return V(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=In(ps),Ao=V({},ps,{view:0,detail:0}),fv=In(Ao),Fu,Nu,Po,ka=V({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(Fu=n.screenX-Po.screenX,Nu=n.screenY-Po.screenY):Nu=Fu=0,Po=n),Fu)},movementY:function(n){return"movementY"in n?n.movementY:Nu}}),Wd=In(ka),dv=V({},ka,{dataTransfer:0}),hv=In(dv),pv=V({},Ao,{relatedTarget:0}),Ou=In(pv),mv=V({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=In(mv),vv=V({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_v=In(vv),xv=V({},ps,{data:0}),Hd=In(xv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wv[n])?!!i[n]:!1}function Uu(){return Mv}var bv=V({},Ao,{key:function(n){if(n.key){var i=yv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(n){return n.type==="keypress"?Da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ev=In(bv),Tv=V({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=In(Tv),Cv=V({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Av=In(Cv),Pv=V({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=In(Pv),Rv=V({},ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=In(Rv),Iv=[9,13,27,32],Bu=c&&"CompositionEvent"in window,Lo=null;c&&"documentMode"in document&&(Lo=document.documentMode);var kv=c&&"TextEvent"in window&&!Lo,jd=c&&(!Bu||Lo&&8<Lo&&11>=Lo),qd=" ",Xd=!1;function Yd(n,i){switch(n){case"keyup":return Iv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function zv(n,i){switch(n){case"compositionend":return Kd(i);case"keypress":return i.which!==32?null:(Xd=!0,qd);case"textInput":return n=i.data,n===qd&&Xd?null:n;default:return null}}function Fv(n,i){if(ms)return n==="compositionend"||!Bu&&Yd(n,i)?(n=Vd(),Ra=ku=lr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return jd&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Nv[n.type]:i==="textarea"}function Qd(n,i,o,u){Tt(u),i=Ua(i,"onChange"),0<i.length&&(o=new zu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Ro=null,Do=null;function Ov(n){gh(n,0)}function za(n){var i=ys(n);if(Ye(i))return n}function Uv(n,i){if(n==="change")return i}var Jd=!1;if(c){var Vu;if(c){var Gu="oninput"in document;if(!Gu){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Gu=typeof eh.oninput=="function"}Vu=Gu}else Vu=!1;Jd=Vu&&(!document.documentMode||9<document.documentMode)}function th(){Ro&&(Ro.detachEvent("onpropertychange",nh),Do=Ro=null)}function nh(n){if(n.propertyName==="value"&&za(Do)){var i=[];Qd(i,Do,n,oe(n)),ba(Ov,i)}}function Bv(n,i,o){n==="focusin"?(th(),Ro=i,Do=o,Ro.attachEvent("onpropertychange",nh)):n==="focusout"&&th()}function Vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Do)}function Gv(n,i){if(n==="click")return za(i)}function Wv(n,i){if(n==="input"||n==="change")return za(i)}function Hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:Hv;function Io(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!oi(n[d],i[d]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,i){var o=ih(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ih(o)}}function sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Ue();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ue(n.document)}return i}function Wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function $v(n){var i=oh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&sh(o.ownerDocument.documentElement,o)){if(u!==null&&Wu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=rh(o,m);var M=rh(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jv=c&&"documentMode"in document&&11>=document.documentMode,gs=null,Hu=null,ko=null,$u=!1;function ah(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$u||gs==null||gs!==Ue(u)||(u=gs,"selectionStart"in u&&Wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ko&&Io(ko,u)||(ko=u,u=Ua(Hu,"onSelect"),0<u.length&&(i=new zu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=gs)))}function Fa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},ju={},lh={};c&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Na(n){if(ju[n])return ju[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in lh)return ju[n]=i[o];return n}var uh=Na("animationend"),ch=Na("animationiteration"),fh=Na("animationstart"),dh=Na("transitionend"),hh=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){hh.set(n,i),l(i,[n])}for(var qu=0;qu<ph.length;qu++){var Xu=ph[qu],qv=Xu.toLowerCase(),Xv=Xu[0].toUpperCase()+Xu.slice(1);ur(qv,"on"+Xv)}ur(uh,"onAnimationEnd"),ur(ch,"onAnimationIteration"),ur(fh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(dh,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function mh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Be(u,i,void 0,n),n.currentTarget=null}function gh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var k=u[M],O=k.instance,J=k.currentTarget;if(k=k.listener,O!==m&&d.isPropagationStopped())break e;mh(d,k,J),m=O}else for(M=0;M<u.length;M++){if(k=u[M],O=k.instance,J=k.currentTarget,k=k.listener,O!==m&&d.isPropagationStopped())break e;mh(d,k,J),m=O}}}if(Q)throw n=ae,Q=!1,ae=null,n}function bt(n,i){var o=i[nc];o===void 0&&(o=i[nc]=new Set);var u=n+"__bubble";o.has(u)||(vh(i,n,2,!1),o.add(u))}function Yu(n,i,o){var u=0;i&&(u|=4),vh(o,n,u,i)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Oa]){n[Oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||Yu(o,!1,n),Yu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Oa]||(i[Oa]=!0,Yu("selectionchange",!1,i))}}function vh(n,i,o,u){switch(Bd(i)){case 1:var d=uv;break;case 4:d=cv;break;default:d=Du}o=d.bind(null,i,o,n),d=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Ku(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var k=u.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;M=M.return}for(;k!==null;){if(M=Nr(k),M===null)return;if(O=M.tag,O===5||O===6){u=m=M;continue e}k=k.parentNode}}u=u.return}ba(function(){var J=m,pe=oe(o),ge=[];e:{var he=hh.get(n);if(he!==void 0){var Ae=zu,Ie=n;switch(n){case"keypress":if(Da(o)===0)break e;case"keydown":case"keyup":Ae=Ev;break;case"focusin":Ie="focus",Ae=Ou;break;case"focusout":Ie="blur",Ae=Ou;break;case"beforeblur":case"afterblur":Ae=Ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=Av;break;case uh:case ch:case fh:Ae=gv;break;case dh:Ae=Lv;break;case"scroll":Ae=fv;break;case"wheel":Ae=Dv;break;case"copy":case"cut":case"paste":Ae=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=$d}var ke=(i&4)!==0,Ot=!ke&&n==="scroll",Y=ke?he!==null?he+"Capture":null:he;ke=[];for(var G=J,Z;G!==null;){Z=G;var _e=Z.stateNode;if(Z.tag===5&&_e!==null&&(Z=_e,Y!==null&&(_e=_i(G,Y),_e!=null&&ke.push(No(G,_e,Z)))),Ot)break;G=G.return}0<ke.length&&(he=new Ae(he,Ie,null,o,pe),ge.push({event:he,listeners:ke}))}}if((i&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Ae=n==="mouseout"||n==="pointerout",he&&o!==Ce&&(Ie=o.relatedTarget||o.fromElement)&&(Nr(Ie)||Ie[ki]))break e;if((Ae||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Ae?(Ie=o.relatedTarget||o.toElement,Ae=J,Ie=Ie?Nr(Ie):null,Ie!==null&&(Ot=We(Ie),Ie!==Ot||Ie.tag!==5&&Ie.tag!==6)&&(Ie=null)):(Ae=null,Ie=J),Ae!==Ie)){if(ke=Wd,_e="onMouseLeave",Y="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(ke=$d,_e="onPointerLeave",Y="onPointerEnter",G="pointer"),Ot=Ae==null?he:ys(Ae),Z=Ie==null?he:ys(Ie),he=new ke(_e,G+"leave",Ae,o,pe),he.target=Ot,he.relatedTarget=Z,_e=null,Nr(pe)===J&&(ke=new ke(Y,G+"enter",Ie,o,pe),ke.target=Z,ke.relatedTarget=Ot,_e=ke),Ot=_e,Ae&&Ie)t:{for(ke=Ae,Y=Ie,G=0,Z=ke;Z;Z=_s(Z))G++;for(Z=0,_e=Y;_e;_e=_s(_e))Z++;for(;0<G-Z;)ke=_s(ke),G--;for(;0<Z-G;)Y=_s(Y),Z--;for(;G--;){if(ke===Y||Y!==null&&ke===Y.alternate)break t;ke=_s(ke),Y=_s(Y)}ke=null}else ke=null;Ae!==null&&_h(ge,he,Ae,ke,!1),Ie!==null&&Ot!==null&&_h(ge,Ot,Ie,ke,!0)}}e:{if(he=J?ys(J):window,Ae=he.nodeName&&he.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&he.type==="file")var ze=Uv;else if(Zd(he))if(Jd)ze=Wv;else{ze=Vv;var Ve=Bv}else(Ae=he.nodeName)&&Ae.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(ze=Gv);if(ze&&(ze=ze(n,J))){Qd(ge,ze,o,pe);break e}Ve&&Ve(n,he,J),n==="focusout"&&(Ve=he._wrapperState)&&Ve.controlled&&he.type==="number"&&at(he,"number",he.value)}switch(Ve=J?ys(J):window,n){case"focusin":(Zd(Ve)||Ve.contentEditable==="true")&&(gs=Ve,Hu=J,ko=null);break;case"focusout":ko=Hu=gs=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,ah(ge,o,pe);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":ah(ge,o,pe)}var Ge;if(Bu)e:{switch(n){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else ms?Yd(n,o)&&($e="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&($e="onCompositionStart");$e&&(jd&&o.locale!=="ko"&&(ms||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&ms&&(Ge=Vd()):(lr=pe,ku="value"in lr?lr.value:lr.textContent,ms=!0)),Ve=Ua(J,$e),0<Ve.length&&($e=new Hd($e,n,null,o,pe),ge.push({event:$e,listeners:Ve}),Ge?$e.data=Ge:(Ge=Kd(o),Ge!==null&&($e.data=Ge)))),(Ge=kv?zv(n,o):Fv(n,o))&&(J=Ua(J,"onBeforeInput"),0<J.length&&(pe=new Hd("onBeforeInput","beforeinput",null,o,pe),ge.push({event:pe,listeners:J}),pe.data=Ge))}gh(ge,i)})}function No(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ua(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_i(n,o),m!=null&&u.unshift(No(n,m,d)),m=_i(n,i),m!=null&&u.push(No(n,m,d))),n=n.return}return u}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var k=o,O=k.alternate,J=k.stateNode;if(O!==null&&O===u)break;k.tag===5&&J!==null&&(k=J,d?(O=_i(o,m),O!=null&&M.unshift(No(o,O,k))):d||(O=_i(o,m),O!=null&&M.push(No(o,O,k)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Zv,"")}function Ba(n,i,o){if(i=xh(i),xh(n)!==i&&o)throw Error(t(425))}function Va(){}var Zu=null,Qu=null;function Ju(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ec=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(e_)}:ec;function e_(n){setTimeout(function(){throw n})}function tc(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Co(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Co(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),wi="__reactFiber$"+xs,Oo="__reactProps$"+xs,ki="__reactContainer$"+xs,nc="__reactEvents$"+xs,t_="__reactListeners$"+xs,n_="__reactHandles$"+xs;function Nr(n){var i=n[wi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ki]||o[wi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Sh(n);n!==null;){if(o=n[wi])return o;n=Sh(n)}return i}n=o,o=n.parentNode}return null}function Uo(n){return n=n[wi]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ga(n){return n[Oo]||null}var ic=[],Ss=-1;function fr(n){return{current:n}}function Et(n){0>Ss||(n.current=ic[Ss],ic[Ss]=null,Ss--)}function yt(n,i){Ss++,ic[Ss]=n.current,n.current=i}var dr={},un=fr(dr),En=fr(!1),Or=dr;function ws(n,i){var o=n.type.contextTypes;if(!o)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(n){return n=n.childContextTypes,n!=null}function Wa(){Et(En),Et(un)}function wh(n,i,o){if(un.current!==dr)throw Error(t(168));yt(un,i),yt(En,o)}function Mh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ne(n)||"Unknown",d));return V({},o,u)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Or=un.current,yt(un,n),yt(En,En.current),!0}function bh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Mh(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Et(En),Et(un),yt(un,n)):Et(En),yt(En,o)}var zi=null,$a=!1,rc=!1;function Eh(n){zi===null?zi=[n]:zi.push(n)}function i_(n){$a=!0,Eh(n)}function hr(){if(!rc&&zi!==null){rc=!0;var n=0,i=dt;try{var o=zi;for(dt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}zi=null,$a=!1}catch(d){throw zi!==null&&(zi=zi.slice(n+1)),Mt(yi,hr),d}finally{dt=i,rc=!1}}return null}var Ms=[],bs=0,ja=null,qa=0,jn=[],qn=0,Ur=null,Fi=1,Ni="";function Br(n,i){Ms[bs++]=qa,Ms[bs++]=ja,ja=n,qa=i}function Th(n,i,o){jn[qn++]=Fi,jn[qn++]=Ni,jn[qn++]=Ur,Ur=n;var u=Fi;n=Ni;var d=32-vn(u)-1;u&=~(1<<d),o+=1;var m=32-vn(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Fi=1<<32-vn(i)+d|o<<d|u,Ni=m+n}else Fi=1<<m|o<<d|u,Ni=n}function sc(n){n.return!==null&&(Br(n,1),Th(n,1,0))}function oc(n){for(;n===ja;)ja=Ms[--bs],Ms[bs]=null,qa=Ms[--bs],Ms[bs]=null;for(;n===Ur;)Ur=jn[--qn],jn[qn]=null,Ni=jn[--qn],jn[qn]=null,Fi=jn[--qn],jn[qn]=null}var kn=null,zn=null,Ct=!1,ai=null;function Ch(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Ah(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,zn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Fi,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,zn=null,!0):!1;default:return!1}}function ac(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lc(n){if(Ct){var i=zn;if(i){var o=i;if(!Ah(n,i)){if(ac(n))throw Error(t(418));i=cr(o.nextSibling);var u=kn;i&&Ah(n,i)?Ch(u,o):(n.flags=n.flags&-4097|2,Ct=!1,kn=n)}}else{if(ac(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ct=!1,kn=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Xa(n){if(n!==kn)return!1;if(!Ct)return Ph(n),Ct=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ju(n.type,n.memoizedProps)),i&&(i=zn)){if(ac(n))throw Lh(),Error(t(418));for(;i;)Ch(n,i),i=cr(i.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){zn=cr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=kn?cr(n.stateNode.nextSibling):null;return!0}function Lh(){for(var n=zn;n;)n=cr(n.nextSibling)}function Es(){zn=kn=null,Ct=!1}function uc(n){ai===null?ai=[n]:ai.push(n)}var r_=C.ReactCurrentBatchConfig;function Bo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var k=d.refs;M===null?delete k[m]:k[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(Y,G){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[G],Y.flags|=16):Z.push(G)}}function o(Y,G){if(!n)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function u(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function d(Y,G){return Y=Sr(Y,G),Y.index=0,Y.sibling=null,Y}function m(Y,G,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<G?(Y.flags|=2,G):Z):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function k(Y,G,Z,_e){return G===null||G.tag!==6?(G=ef(Z,Y.mode,_e),G.return=Y,G):(G=d(G,Z),G.return=Y,G)}function O(Y,G,Z,_e){var ze=Z.type;return ze===U?pe(Y,G,Z.props.children,_e,Z.key):G!==null&&(G.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===de&&Rh(ze)===G.type)?(_e=d(G,Z.props),_e.ref=Bo(Y,G,Z),_e.return=Y,_e):(_e=xl(Z.type,Z.key,Z.props,null,Y.mode,_e),_e.ref=Bo(Y,G,Z),_e.return=Y,_e)}function J(Y,G,Z,_e){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=tf(Z,Y.mode,_e),G.return=Y,G):(G=d(G,Z.children||[]),G.return=Y,G)}function pe(Y,G,Z,_e,ze){return G===null||G.tag!==7?(G=Xr(Z,Y.mode,_e,ze),G.return=Y,G):(G=d(G,Z),G.return=Y,G)}function ge(Y,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ef(""+G,Y.mode,Z),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return Z=xl(G.type,G.key,G.props,null,Y.mode,Z),Z.ref=Bo(Y,null,G),Z.return=Y,Z;case F:return G=tf(G,Y.mode,Z),G.return=Y,G;case de:var _e=G._init;return ge(Y,_e(G._payload),Z)}if(gn(G)||B(G))return G=Xr(G,Y.mode,Z,null),G.return=Y,G;Ya(Y,G)}return null}function he(Y,G,Z,_e){var ze=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return ze!==null?null:k(Y,G,""+Z,_e);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:return Z.key===ze?O(Y,G,Z,_e):null;case F:return Z.key===ze?J(Y,G,Z,_e):null;case de:return ze=Z._init,he(Y,G,ze(Z._payload),_e)}if(gn(Z)||B(Z))return ze!==null?null:pe(Y,G,Z,_e,null);Ya(Y,Z)}return null}function Ae(Y,G,Z,_e,ze){if(typeof _e=="string"&&_e!==""||typeof _e=="number")return Y=Y.get(Z)||null,k(G,Y,""+_e,ze);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case A:return Y=Y.get(_e.key===null?Z:_e.key)||null,O(G,Y,_e,ze);case F:return Y=Y.get(_e.key===null?Z:_e.key)||null,J(G,Y,_e,ze);case de:var Ve=_e._init;return Ae(Y,G,Z,Ve(_e._payload),ze)}if(gn(_e)||B(_e))return Y=Y.get(Z)||null,pe(G,Y,_e,ze,null);Ya(G,_e)}return null}function Ie(Y,G,Z,_e){for(var ze=null,Ve=null,Ge=G,$e=G=0,Zt=null;Ge!==null&&$e<Z.length;$e++){Ge.index>$e?(Zt=Ge,Ge=null):Zt=Ge.sibling;var st=he(Y,Ge,Z[$e],_e);if(st===null){Ge===null&&(Ge=Zt);break}n&&Ge&&st.alternate===null&&i(Y,Ge),G=m(st,G,$e),Ve===null?ze=st:Ve.sibling=st,Ve=st,Ge=Zt}if($e===Z.length)return o(Y,Ge),Ct&&Br(Y,$e),ze;if(Ge===null){for(;$e<Z.length;$e++)Ge=ge(Y,Z[$e],_e),Ge!==null&&(G=m(Ge,G,$e),Ve===null?ze=Ge:Ve.sibling=Ge,Ve=Ge);return Ct&&Br(Y,$e),ze}for(Ge=u(Y,Ge);$e<Z.length;$e++)Zt=Ae(Ge,Y,$e,Z[$e],_e),Zt!==null&&(n&&Zt.alternate!==null&&Ge.delete(Zt.key===null?$e:Zt.key),G=m(Zt,G,$e),Ve===null?ze=Zt:Ve.sibling=Zt,Ve=Zt);return n&&Ge.forEach(function(wr){return i(Y,wr)}),Ct&&Br(Y,$e),ze}function ke(Y,G,Z,_e){var ze=B(Z);if(typeof ze!="function")throw Error(t(150));if(Z=ze.call(Z),Z==null)throw Error(t(151));for(var Ve=ze=null,Ge=G,$e=G=0,Zt=null,st=Z.next();Ge!==null&&!st.done;$e++,st=Z.next()){Ge.index>$e?(Zt=Ge,Ge=null):Zt=Ge.sibling;var wr=he(Y,Ge,st.value,_e);if(wr===null){Ge===null&&(Ge=Zt);break}n&&Ge&&wr.alternate===null&&i(Y,Ge),G=m(wr,G,$e),Ve===null?ze=wr:Ve.sibling=wr,Ve=wr,Ge=Zt}if(st.done)return o(Y,Ge),Ct&&Br(Y,$e),ze;if(Ge===null){for(;!st.done;$e++,st=Z.next())st=ge(Y,st.value,_e),st!==null&&(G=m(st,G,$e),Ve===null?ze=st:Ve.sibling=st,Ve=st);return Ct&&Br(Y,$e),ze}for(Ge=u(Y,Ge);!st.done;$e++,st=Z.next())st=Ae(Ge,Y,$e,st.value,_e),st!==null&&(n&&st.alternate!==null&&Ge.delete(st.key===null?$e:st.key),G=m(st,G,$e),Ve===null?ze=st:Ve.sibling=st,Ve=st);return n&&Ge.forEach(function(N_){return i(Y,N_)}),Ct&&Br(Y,$e),ze}function Ot(Y,G,Z,_e){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:e:{for(var ze=Z.key,Ve=G;Ve!==null;){if(Ve.key===ze){if(ze=Z.type,ze===U){if(Ve.tag===7){o(Y,Ve.sibling),G=d(Ve,Z.props.children),G.return=Y,Y=G;break e}}else if(Ve.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===de&&Rh(ze)===Ve.type){o(Y,Ve.sibling),G=d(Ve,Z.props),G.ref=Bo(Y,Ve,Z),G.return=Y,Y=G;break e}o(Y,Ve);break}else i(Y,Ve);Ve=Ve.sibling}Z.type===U?(G=Xr(Z.props.children,Y.mode,_e,Z.key),G.return=Y,Y=G):(_e=xl(Z.type,Z.key,Z.props,null,Y.mode,_e),_e.ref=Bo(Y,G,Z),_e.return=Y,Y=_e)}return M(Y);case F:e:{for(Ve=Z.key;G!==null;){if(G.key===Ve)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){o(Y,G.sibling),G=d(G,Z.children||[]),G.return=Y,Y=G;break e}else{o(Y,G);break}else i(Y,G);G=G.sibling}G=tf(Z,Y.mode,_e),G.return=Y,Y=G}return M(Y);case de:return Ve=Z._init,Ot(Y,G,Ve(Z._payload),_e)}if(gn(Z))return Ie(Y,G,Z,_e);if(B(Z))return ke(Y,G,Z,_e);Ya(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(o(Y,G.sibling),G=d(G,Z),G.return=Y,Y=G):(o(Y,G),G=ef(Z,Y.mode,_e),G.return=Y,Y=G),M(Y)):o(Y,G)}return Ot}var Ts=Dh(!0),Ih=Dh(!1),Ka=fr(null),Za=null,Cs=null,cc=null;function fc(){cc=Cs=Za=null}function dc(n){var i=Ka.current;Et(Ka),n._currentValue=i}function hc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function As(n,i){Za=n,cc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(cc!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Za===null)throw Error(t(308));Cs=n,Za.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Vr=null;function pc(n){Vr===null?Vr=[n]:Vr.push(n)}function kh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,pc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Oi(n,u)}function Oi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var pr=!1;function mc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(tt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Oi(n,o)}return d=u.interleaved,d===null?(i.next=i,pc(u)):(i.next=d.next,d.next=i),u.interleaved=i,Oi(n,o)}function Qa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Pu(n,o)}}function Fh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ja(n,i,o,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var O=k,J=O.next;O.next=null,M===null?m=J:M.next=J,M=O;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,k=pe.lastBaseUpdate,k!==M&&(k===null?pe.firstBaseUpdate=J:k.next=J,pe.lastBaseUpdate=O))}if(m!==null){var ge=d.baseState;M=0,pe=J=O=null,k=m;do{var he=k.lane,Ae=k.eventTime;if((u&he)===he){pe!==null&&(pe=pe.next={eventTime:Ae,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ie=n,ke=k;switch(he=i,Ae=o,ke.tag){case 1:if(Ie=ke.payload,typeof Ie=="function"){ge=Ie.call(Ae,ge,he);break e}ge=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=ke.payload,he=typeof Ie=="function"?Ie.call(Ae,ge,he):Ie,he==null)break e;ge=V({},ge,he);break e;case 2:pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,he=d.effects,he===null?d.effects=[k]:he.push(k))}else Ae={eventTime:Ae,lane:he,tag:k.tag,payload:k.payload,callback:k.callback,next:null},pe===null?(J=pe=Ae,O=ge):pe=pe.next=Ae,M|=he;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;he=k,k=he.next,he.next=null,d.lastBaseUpdate=he,d.shared.pending=null}}while(!0);if(pe===null&&(O=ge),d.baseState=O,d.firstBaseUpdate=J,d.lastBaseUpdate=pe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hr|=M,n.lanes=M,n.memoizedState=ge}}function Nh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Vo={},Mi=fr(Vo),Go=fr(Vo),Wo=fr(Vo);function Gr(n){if(n===Vo)throw Error(t(174));return n}function gc(n,i){switch(yt(Wo,i),yt(Go,n),yt(Mi,Vo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ee(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ee(i,n)}Et(Mi),yt(Mi,i)}function Ps(){Et(Mi),Et(Go),Et(Wo)}function Oh(n){Gr(Wo.current);var i=Gr(Mi.current),o=Ee(i,n.type);i!==o&&(yt(Go,n),yt(Mi,o))}function vc(n){Go.current===n&&(Et(Mi),Et(Go))}var Lt=fr(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _c=[];function xc(){for(var n=0;n<_c.length;n++)_c[n]._workInProgressVersionPrimary=null;_c.length=0}var tl=C.ReactCurrentDispatcher,yc=C.ReactCurrentBatchConfig,Wr=0,Rt=null,$t=null,Yt=null,nl=!1,Ho=!1,$o=0,s_=0;function cn(){throw Error(t(321))}function Sc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!oi(n[o],i[o]))return!1;return!0}function wc(n,i,o,u,d,m){if(Wr=m,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?u_:c_,n=o(u,d),Ho){m=0;do{if(Ho=!1,$o=0,25<=m)throw Error(t(301));m+=1,Yt=$t=null,i.updateQueue=null,tl.current=f_,n=o(u,d)}while(Ho)}if(tl.current=sl,i=$t!==null&&$t.next!==null,Wr=0,Yt=$t=Rt=null,nl=!1,i)throw Error(t(300));return n}function Mc(){var n=$o!==0;return $o=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Rt.memoizedState=Yt=n:Yt=Yt.next=n,Yt}function Yn(){if($t===null){var n=Rt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Yt===null?Rt.memoizedState:Yt.next;if(i!==null)Yt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Yt===null?Rt.memoizedState=Yt=n:Yt=Yt.next=n}return Yt}function jo(n,i){return typeof i=="function"?i(n):i}function bc(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=$t,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var k=M=null,O=null,J=m;do{var pe=J.lane;if((Wr&pe)===pe)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var ge={lane:pe,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(k=O=ge,M=u):O=O.next=ge,Rt.lanes|=pe,Hr|=pe}J=J.next}while(J!==null&&J!==m);O===null?M=u:O.next=k,oi(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=O,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Rt.lanes|=m,Hr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ec(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);oi(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Uh(){}function Bh(n,i){var o=Rt,u=Yn(),d=i(),m=!oi(u.memoizedState,d);if(m&&(u.memoizedState=d,Cn=!0),u=u.queue,Tc(Wh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||Yt!==null&&Yt.memoizedState.tag&1){if(o.flags|=2048,qo(9,Gh.bind(null,o,u,d,i),void 0,null),Kt===null)throw Error(t(349));(Wr&30)!==0||Vh(o,i,d)}return d}function Vh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Gh(n,i,o,u){i.value=o,i.getSnapshot=u,Hh(i)&&$h(n)}function Wh(n,i,o){return o(function(){Hh(i)&&$h(n)})}function Hh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!oi(n,o)}catch{return!0}}function $h(n){var i=Oi(n,1);i!==null&&fi(i,n,1,-1)}function jh(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},i.queue=n,n=n.dispatch=l_.bind(null,Rt,n),[i.memoizedState,n]}function qo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Rt.updateQueue,i===null?(i={lastEffect:null,stores:null},Rt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function qh(){return Yn().memoizedState}function il(n,i,o,u){var d=bi();Rt.flags|=n,d.memoizedState=qo(1|i,o,void 0,u===void 0?null:u)}function rl(n,i,o,u){var d=Yn();u=u===void 0?null:u;var m=void 0;if($t!==null){var M=$t.memoizedState;if(m=M.destroy,u!==null&&Sc(u,M.deps)){d.memoizedState=qo(i,o,m,u);return}}Rt.flags|=n,d.memoizedState=qo(1|i,o,m,u)}function Xh(n,i){return il(8390656,8,n,i)}function Tc(n,i){return rl(2048,8,n,i)}function Yh(n,i){return rl(4,2,n,i)}function Kh(n,i){return rl(4,4,n,i)}function Zh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,o){return o=o!=null?o.concat([n]):null,rl(4,4,Zh.bind(null,i,n),o)}function Cc(){}function Jh(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Sc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function ep(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Sc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function tp(n,i,o){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=o):(oi(o,i)||(o=Rd(),Rt.lanes|=o,Hr|=o,n.baseState=!0),i)}function o_(n,i){var o=dt;dt=o!==0&&4>o?o:4,n(!0);var u=yc.transition;yc.transition={};try{n(!1),i()}finally{dt=o,yc.transition=u}}function np(){return Yn().memoizedState}function a_(n,i,o){var u=xr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,o);else if(o=kh(n,i,o,u),o!==null){var d=yn();fi(o,n,u,d),sp(o,i,u)}}function l_(n,i,o){var u=xr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,k=m(M,o);if(d.hasEagerState=!0,d.eagerState=k,oi(k,M)){var O=i.interleaved;O===null?(d.next=d,pc(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}o=kh(n,i,d,u),o!==null&&(d=yn(),fi(o,n,u,d),sp(o,i,u))}}function ip(n){var i=n.alternate;return n===Rt||i!==null&&i===Rt}function rp(n,i){Ho=nl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function sp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Pu(n,o)}}var sl={readContext:Xn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},u_={readContext:Xn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:Xh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,il(4194308,4,Zh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=bi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=a_.bind(null,Rt,n),[u.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:jh,useDebugValue:Cc,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=jh(!1),i=n[0];return n=o_.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Rt,d=bi();if(Ct){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Kt===null)throw Error(t(349));(Wr&30)!==0||Vh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Xh(Wh.bind(null,u,m,n),[n]),u.flags|=2048,qo(9,Gh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=bi(),i=Kt.identifierPrefix;if(Ct){var o=Ni,u=Fi;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=$o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:Xn,useCallback:Jh,useContext:Xn,useEffect:Tc,useImperativeHandle:Qh,useInsertionEffect:Yh,useLayoutEffect:Kh,useMemo:ep,useReducer:bc,useRef:qh,useState:function(){return bc(jo)},useDebugValue:Cc,useDeferredValue:function(n){var i=Yn();return tp(i,$t.memoizedState,n)},useTransition:function(){var n=bc(jo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1},f_={readContext:Xn,useCallback:Jh,useContext:Xn,useEffect:Tc,useImperativeHandle:Qh,useInsertionEffect:Yh,useLayoutEffect:Kh,useMemo:ep,useReducer:Ec,useRef:qh,useState:function(){return Ec(jo)},useDebugValue:Cc,useDeferredValue:function(n){var i=Yn();return $t===null?i.memoizedState=n:tp(i,$t.memoizedState,n)},useTransition:function(){var n=Ec(jo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=V({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ac(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:V({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ol={isMounted:function(n){return(n=n._reactInternals)?We(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=yn(),d=xr(n),m=Ui(u,d);m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(fi(i,n,d,u),Qa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=yn(),d=xr(n),m=Ui(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(fi(i,n,d,u),Qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=yn(),u=xr(n),d=Ui(o,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(fi(i,n,u,o),Qa(i,n,u))}};function op(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!Io(o,u)||!Io(d,m):!0}function ap(n,i,o){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=Xn(m):(d=Tn(i)?Or:un.current,u=i.contextTypes,m=(u=u!=null)?ws(n,d):dr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function lp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Pc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},mc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Xn(m):(m=Tn(i)?Or:un.current,d.context=ws(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ac(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ol.enqueueReplaceState(d,d.state,null),Ja(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var o="",u=i;do o+=we(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Lc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Rc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){hl||(hl=!0,jc=u),Rc(n,i)},o}function cp(n,i,o){o=Ui(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Rc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Rc(n,i),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function fp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new d_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=T_.bind(null,n,i,o),i.then(n,n))}function dp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var h_=C.ReactCurrentOwner,Cn=!1;function xn(n,i,o,u){i.child=n===null?Ih(i,null,o,u):Ts(i,n.child,o,u)}function pp(n,i,o,u,d){o=o.render;var m=i.ref;return As(i,d),u=wc(n,i,o,u,m,d),o=Mc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Bi(n,i,d)):(Ct&&o&&sc(i),i.flags|=1,xn(n,i,u,d),i.child)}function mp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Jc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,gp(n,i,m,u,d)):(n=xl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Io,o(M,u)&&n.ref===i.ref)return Bi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function gp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Io(m,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Bi(n,i,d)}return Dc(n,i,o,u,d)}function vp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Ds,Fn),Fn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,yt(Ds,Fn),Fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,yt(Ds,Fn),Fn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,yt(Ds,Fn),Fn|=u;return xn(n,i,d,o),i.child}function _p(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Dc(n,i,o,u,d){var m=Tn(o)?Or:un.current;return m=ws(i,m),As(i,d),o=wc(n,i,o,u,m,d),u=Mc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Bi(n,i,d)):(Ct&&u&&sc(i),i.flags|=1,xn(n,i,o,d),i.child)}function xp(n,i,o,u,d){if(Tn(o)){var m=!0;Ha(i)}else m=!1;if(As(i,d),i.stateNode===null)ll(n,i),ap(i,o,u),Pc(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,k=i.memoizedProps;M.props=k;var O=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Xn(J):(J=Tn(o)?Or:un.current,J=ws(i,J));var pe=o.getDerivedStateFromProps,ge=typeof pe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ge||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(k!==u||O!==J)&&lp(i,M,u,J),pr=!1;var he=i.memoizedState;M.state=he,Ja(i,u,M,d),O=i.memoizedState,k!==u||he!==O||En.current||pr?(typeof pe=="function"&&(Ac(i,o,pe,u),O=i.memoizedState),(k=pr||op(i,o,k,u,he,O,J))?(ge||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),M.props=u,M.state=O,M.context=J,u=k):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,zh(n,i),k=i.memoizedProps,J=i.type===i.elementType?k:li(i.type,k),M.props=J,ge=i.pendingProps,he=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Xn(O):(O=Tn(o)?Or:un.current,O=ws(i,O));var Ae=o.getDerivedStateFromProps;(pe=typeof Ae=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(k!==ge||he!==O)&&lp(i,M,u,O),pr=!1,he=i.memoizedState,M.state=he,Ja(i,u,M,d);var Ie=i.memoizedState;k!==ge||he!==Ie||En.current||pr?(typeof Ae=="function"&&(Ac(i,o,Ae,u),Ie=i.memoizedState),(J=pr||op(i,o,J,u,he,Ie,O)||!1)?(pe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ie,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ie,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||k===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ie),M.props=u,M.state=Ie,M.context=O,u=J):(typeof M.componentDidUpdate!="function"||k===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),u=!1)}return Ic(n,i,o,u,m,d)}function Ic(n,i,o,u,d,m){_p(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&bh(i,o,!1),Bi(n,i,m);u=i.stateNode,h_.current=i;var k=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ts(i,n.child,null,m),i.child=Ts(i,null,k,m)):xn(n,i,k,m),i.memoizedState=u.state,d&&bh(i,o,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),gc(n,i.containerInfo)}function Sp(n,i,o,u,d){return Es(),uc(d),i.flags|=256,xn(n,i,o,u),i.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,o){var u=i.pendingProps,d=Lt.current,m=!1,M=(i.flags&128)!==0,k;if((k=M)||(k=n!==null&&n.memoizedState===null?!1:(d&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),yt(Lt,d&1),n===null)return lc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=yl(M,u,0,null),n=Xr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=zc(o),i.memoizedState=kc,n):Fc(i,M));if(d=n.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return p_(n,i,M,u,k,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,k=d.sibling;var O={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=Sr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),k!==null?m=Sr(k,m):(m=Xr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=kc,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Fc(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,o,u){return u!==null&&uc(u),Ts(i,n.child,null,o),n=Fc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function p_(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=Lc(Error(t(422))),al(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=yl({mode:"visible",children:u.children},d,0,null),m=Xr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ts(i,n.child,null,M),i.child.memoizedState=zc(M),i.memoizedState=kc,m);if((i.mode&1)===0)return al(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var k=u.dgst;return u=k,m=Error(t(419)),u=Lc(m,u,void 0),al(n,i,M,u)}if(k=(M&n.childLanes)!==0,Cn||k){if(u=Kt,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Oi(n,d),fi(u,n,d,-1))}return Qc(),u=Lc(Error(t(421))),al(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=C_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,zn=cr(d.nextSibling),kn=i,Ct=!0,ai=null,n!==null&&(jn[qn++]=Fi,jn[qn++]=Ni,jn[qn++]=Ur,Fi=n.id,Ni=n.overflow,Ur=i),i=Fc(i,u.children),i.flags|=4096,i)}function Mp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),hc(n.return,i,o)}function Nc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function bp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(xn(n,i,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mp(n,o,i);else if(n.tag===19)Mp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(yt(Lt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&el(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Nc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&el(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Nc(i,!0,o,null,m);break;case"together":Nc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Sr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Sr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function m_(n,i,o){switch(i.tag){case 3:yp(i),Es();break;case 5:Oh(i);break;case 1:Tn(i.type)&&Ha(i);break;case 4:gc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;yt(Ka,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(yt(Lt,Lt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?wp(n,i,o):(yt(Lt,Lt.current&1),n=Bi(n,i,o),n!==null?n.sibling:null);yt(Lt,Lt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return bp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),yt(Lt,Lt.current),u)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,o)}return Bi(n,i,o)}var Ep,Oc,Tp,Cp;Ep=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Oc=function(){},Tp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Gr(Mi.current);var m=null;switch(o){case"input":d=Ft(n,d),u=Ft(n,u),m=[];break;case"select":d=V({},d,{value:void 0}),u=V({},u,{value:void 0}),m=[];break;case"textarea":d=z(n,d),u=z(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Va)}St(o,u);var M;o=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var k=d[J];for(M in k)k.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var O=u[J];if(k=d!=null?d[J]:void 0,u.hasOwnProperty(J)&&O!==k&&(O!=null||k!=null))if(J==="style")if(k){for(M in k)!k.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&k[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(m||(m=[]),m.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,k=k?k.__html:void 0,O!=null&&k!==O&&(m=m||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&bt("scroll",n),m||k===O||(m=[])):(m=m||[]).push(J,O))}o&&(m=m||[]).push("style",o);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},Cp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Xo(n,i){if(!Ct)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function g_(n,i,o){var u=i.pendingProps;switch(oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Tn(i.type)&&Wa(),fn(i),null;case 3:return u=i.stateNode,Ps(),Et(En),Et(un),xc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Yc(ai),ai=null))),Oc(n,i),fn(i),null;case 5:vc(i);var d=Gr(Wo.current);if(o=i.type,n!==null&&i.stateNode!=null)Tp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Gr(Mi.current),Xa(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[wi]=i,u[Oo]=m,n=(i.mode&1)!==0,o){case"dialog":bt("cancel",u),bt("close",u);break;case"iframe":case"object":case"embed":bt("load",u);break;case"video":case"audio":for(d=0;d<zo.length;d++)bt(zo[d],u);break;case"source":bt("error",u);break;case"img":case"image":case"link":bt("error",u),bt("load",u);break;case"details":bt("toggle",u);break;case"input":an(u,m),bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},bt("invalid",u);break;case"textarea":P(u,m),bt("invalid",u)}St(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var k=m[M];M==="children"?typeof k=="string"?u.textContent!==k&&(m.suppressHydrationWarning!==!0&&Ba(u.textContent,k,n),d=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Ba(u.textContent,k,n),d=["children",""+k]):a.hasOwnProperty(M)&&k!=null&&M==="onScroll"&&bt("scroll",u)}switch(o){case"input":ot(u),Bt(u,m,!0);break;case"textarea":ot(u),ve(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Va)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[wi]=i,n[Oo]=u,Ep(n,i,!1,!1),i.stateNode=n;e:{switch(M=j(o,u),o){case"dialog":bt("cancel",n),bt("close",n),d=u;break;case"iframe":case"object":case"embed":bt("load",n),d=u;break;case"video":case"audio":for(d=0;d<zo.length;d++)bt(zo[d],n);d=u;break;case"source":bt("error",n),d=u;break;case"img":case"image":case"link":bt("error",n),bt("load",n),d=u;break;case"details":bt("toggle",n),d=u;break;case"input":an(n,u),d=Ft(n,u),bt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=V({},u,{value:void 0}),bt("invalid",n);break;case"textarea":P(n,u),d=z(n,u),bt("invalid",n);break;default:d=u}St(o,d),k=d;for(m in k)if(k.hasOwnProperty(m)){var O=k[m];m==="style"?qe(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ie(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Fe(n,O):typeof O=="number"&&Fe(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&bt("scroll",n):O!=null&&D(n,m,O,M))}switch(o){case"input":ot(n),Bt(n,u,!1);break;case"textarea":ot(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+be(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?Jt(n,!!u.multiple,m,!1):u.defaultValue!=null&&Jt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Va)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Gr(Wo.current),Gr(Mi.current),Xa(i)){if(u=i.stateNode,o=i.memoizedProps,u[wi]=i,(m=u.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:Ba(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[wi]=i,i.stateNode=u}return fn(i),null;case 13:if(Et(Lt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ct&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),Es(),i.flags|=98560,m=!1;else if(m=Xa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[wi]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),m=!1}else ai!==null&&(Yc(ai),ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Lt.current&1)!==0?jt===0&&(jt=3):Qc())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return Ps(),Oc(n,i),n===null&&Fo(i.stateNode.containerInfo),fn(i),null;case 10:return dc(i.type._context),fn(i),null;case 17:return Tn(i.type)&&Wa(),fn(i),null;case 19:if(Et(Lt),m=i.memoizedState,m===null)return fn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Xo(m,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=el(n),M!==null){for(i.flags|=128,Xo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return yt(Lt,Lt.current&1|2),i.child}n=n.sibling}m.tail!==null&&it()>Is&&(i.flags|=128,u=!0,Xo(m,!1),i.lanes=4194304)}else{if(!u)if(n=el(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Xo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ct)return fn(i),null}else 2*it()-m.renderingStartTime>Is&&o!==1073741824&&(i.flags|=128,u=!0,Xo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=it(),i.sibling=null,o=Lt.current,yt(Lt,u?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return Zc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function v_(n,i){switch(oc(i),i.tag){case 1:return Tn(i.type)&&Wa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Et(En),Et(un),xc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return vc(i),null;case 13:if(Et(Lt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Et(Lt),null;case 4:return Ps(),null;case 10:return dc(i.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var ul=!1,dn=!1,__=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Dt(n,i,u)}else o.current=null}function Uc(n,i,o){try{o()}catch(u){Dt(n,i,u)}}var Ap=!1;function x_(n,i){if(Zu=Pa,n=oh(),Wu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,k=-1,O=-1,J=0,pe=0,ge=n,he=null;t:for(;;){for(var Ae;ge!==o||d!==0&&ge.nodeType!==3||(k=M+d),ge!==m||u!==0&&ge.nodeType!==3||(O=M+u),ge.nodeType===3&&(M+=ge.nodeValue.length),(Ae=ge.firstChild)!==null;)he=ge,ge=Ae;for(;;){if(ge===n)break t;if(he===o&&++J===d&&(k=M),he===m&&++pe===u&&(O=M),(Ae=ge.nextSibling)!==null)break;ge=he,he=ge.parentNode}ge=Ae}o=k===-1||O===-1?null:{start:k,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Qu={focusedElem:n,selectionRange:o},Pa=!1,Re=i;Re!==null;)if(i=Re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Re=n;else for(;Re!==null;){i=Re;try{var Ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ie!==null){var ke=Ie.memoizedProps,Ot=Ie.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?ke:li(i.type,ke),Ot);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(_e){Dt(i,i.return,_e)}if(n=i.sibling,n!==null){n.return=i.return,Re=n;break}Re=i.return}return Ie=Ap,Ap=!1,Ie}function Yo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Uc(i,o,m)}d=d.next}while(d!==u)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Bc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Pp(n){var i=n.alternate;i!==null&&(n.alternate=null,Pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[wi],delete i[Oo],delete i[nc],delete i[t_],delete i[n_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Va));else if(u!==4&&(n=n.child,n!==null))for(Vc(n,i,o),n=n.sibling;n!==null;)Vc(n,i,o),n=n.sibling}function Gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Gc(n,i,o),n=n.sibling;n!==null;)Gc(n,i,o),n=n.sibling}var tn=null,ui=!1;function gr(n,i,o){for(o=o.child;o!==null;)Dp(n,i,o),o=o.sibling}function Dp(n,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ir,o)}catch{}switch(o.tag){case 5:dn||Rs(o,i);case 6:var u=tn,d=ui;tn=null,gr(n,i,o),tn=u,ui=d,tn!==null&&(ui?(n=tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ui?(n=tn,o=o.stateNode,n.nodeType===8?tc(n.parentNode,o):n.nodeType===1&&tc(n,o),Co(n)):tc(tn,o.stateNode));break;case 4:u=tn,d=ui,tn=o.stateNode.containerInfo,ui=!0,gr(n,i,o),tn=u,ui=d;break;case 0:case 11:case 14:case 15:if(!dn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&Uc(o,i,M),d=d.next}while(d!==u)}gr(n,i,o);break;case 1:if(!dn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(k){Dt(o,i,k)}gr(n,i,o);break;case 21:gr(n,i,o);break;case 22:o.mode&1?(dn=(u=dn)||o.memoizedState!==null,gr(n,i,o),dn=u):gr(n,i,o);break;default:gr(n,i,o)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new __),i.forEach(function(u){var d=A_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ci(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,k=M;e:for(;k!==null;){switch(k.tag){case 5:tn=k.stateNode,ui=!1;break e;case 3:tn=k.stateNode.containerInfo,ui=!0;break e;case 4:tn=k.stateNode.containerInfo,ui=!0;break e}k=k.return}if(tn===null)throw Error(t(160));Dp(m,M,d),tn=null,ui=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(J){Dt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Ei(n),u&4){try{Yo(3,n,n.return),cl(3,n)}catch(ke){Dt(n,n.return,ke)}try{Yo(5,n,n.return)}catch(ke){Dt(n,n.return,ke)}}break;case 1:ci(i,n),Ei(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(ci(i,n),Ei(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var d=n.stateNode;try{Fe(d,"")}catch(ke){Dt(n,n.return,ke)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,k=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Xt(d,m),j(k,M);var J=j(k,m);for(M=0;M<O.length;M+=2){var pe=O[M],ge=O[M+1];pe==="style"?qe(d,ge):pe==="dangerouslySetInnerHTML"?ie(d,ge):pe==="children"?Fe(d,ge):D(d,pe,ge,J)}switch(k){case"input":bn(d,m);break;case"textarea":le(d,m);break;case"select":var he=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ae=m.value;Ae!=null?Jt(d,!!m.multiple,Ae,!1):he!==!!m.multiple&&(m.defaultValue!=null?Jt(d,!!m.multiple,m.defaultValue,!0):Jt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Oo]=m}catch(ke){Dt(n,n.return,ke)}}break;case 6:if(ci(i,n),Ei(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ke){Dt(n,n.return,ke)}}break;case 3:if(ci(i,n),Ei(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Co(i.containerInfo)}catch(ke){Dt(n,n.return,ke)}break;case 4:ci(i,n),Ei(n);break;case 13:ci(i,n),Ei(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||($c=it())),u&4&&Ip(n);break;case 22:if(pe=o!==null&&o.memoizedState!==null,n.mode&1?(dn=(J=dn)||pe,ci(i,n),dn=J):ci(i,n),Ei(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!pe&&(n.mode&1)!==0)for(Re=n,pe=n.child;pe!==null;){for(ge=Re=pe;Re!==null;){switch(he=Re,Ae=he.child,he.tag){case 0:case 11:case 14:case 15:Yo(4,he,he.return);break;case 1:Rs(he,he.return);var Ie=he.stateNode;if(typeof Ie.componentWillUnmount=="function"){u=he,o=he.return;try{i=u,Ie.props=i.memoizedProps,Ie.state=i.memoizedState,Ie.componentWillUnmount()}catch(ke){Dt(u,o,ke)}}break;case 5:Rs(he,he.return);break;case 22:if(he.memoizedState!==null){Np(ge);continue}}Ae!==null?(Ae.return=he,Re=Ae):Np(ge)}pe=pe.sibling}e:for(pe=null,ge=n;;){if(ge.tag===5){if(pe===null){pe=ge;try{d=ge.stateNode,J?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=ge.stateNode,O=ge.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,k.style.display=De("display",M))}catch(ke){Dt(n,n.return,ke)}}}else if(ge.tag===6){if(pe===null)try{ge.stateNode.nodeValue=J?"":ge.memoizedProps}catch(ke){Dt(n,n.return,ke)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===n)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===n)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===n)break e;pe===ge&&(pe=null),ge=ge.return}pe===ge&&(pe=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:ci(i,n),Ei(n),u&4&&Ip(n);break;case 21:break;default:ci(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Lp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Fe(d,""),u.flags&=-33);var m=Rp(n);Gc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,k=Rp(n);Vc(n,k,M);break;default:throw Error(t(161))}}catch(O){Dt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function y_(n,i,o){Re=n,zp(n)}function zp(n,i,o){for(var u=(n.mode&1)!==0;Re!==null;){var d=Re,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||ul;if(!M){var k=d.alternate,O=k!==null&&k.memoizedState!==null||dn;k=ul;var J=dn;if(ul=M,(dn=O)&&!J)for(Re=d;Re!==null;)M=Re,O=M.child,M.tag===22&&M.memoizedState!==null?Op(d):O!==null?(O.return=M,Re=O):Op(d);for(;m!==null;)Re=m,zp(m),m=m.sibling;Re=d,ul=k,dn=J}Fp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Re=m):Fp(n)}}function Fp(n){for(;Re!==null;){var i=Re;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||cl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!dn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:li(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Nh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,M,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var pe=J.memoizedState;if(pe!==null){var ge=pe.dehydrated;ge!==null&&Co(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||i.flags&512&&Bc(i)}catch(he){Dt(i,i.return,he)}}if(i===n){Re=null;break}if(o=i.sibling,o!==null){o.return=i.return,Re=o;break}Re=i.return}}function Np(n){for(;Re!==null;){var i=Re;if(i===n){Re=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Re=o;break}Re=i.return}}function Op(n){for(;Re!==null;){var i=Re;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{cl(4,i)}catch(O){Dt(i,o,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Dt(i,d,O)}}var m=i.return;try{Bc(i)}catch(O){Dt(i,m,O)}break;case 5:var M=i.return;try{Bc(i)}catch(O){Dt(i,M,O)}}}catch(O){Dt(i,i.return,O)}if(i===n){Re=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Re=k;break}Re=i.return}}var S_=Math.ceil,fl=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Kn=C.ReactCurrentBatchConfig,tt=0,Kt=null,Vt=null,nn=0,Fn=0,Ds=fr(0),jt=0,Ko=null,Hr=0,dl=0,Hc=0,Zo=null,An=null,$c=0,Is=1/0,Vi=null,hl=!1,jc=null,vr=null,pl=!1,_r=null,ml=0,Qo=0,qc=null,gl=-1,vl=0;function yn(){return(tt&6)!==0?it():gl!==-1?gl:gl=it()}function xr(n){return(n.mode&1)===0?1:(tt&2)!==0&&nn!==0?nn&-nn:r_.transition!==null?(vl===0&&(vl=Rd()),vl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:Bd(n.type)),n)}function fi(n,i,o,u){if(50<Qo)throw Qo=0,qc=null,Error(t(185));wo(n,o,u),((tt&2)===0||n!==Kt)&&(n===Kt&&((tt&2)===0&&(dl|=o),jt===4&&yr(n,nn)),Pn(n,u),o===1&&tt===0&&(i.mode&1)===0&&(Is=it()+500,$a&&hr()))}function Pn(n,i){var o=n.callbackNode;rv(n,i);var u=Ta(n,n===Kt?nn:0);if(u===0)o!==null&&xi(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&xi(o),i===1)n.tag===0?i_(Bp.bind(null,n)):Eh(Bp.bind(null,n)),Jv(function(){(tt&6)===0&&hr()}),o=null;else{switch(Dd(u)){case 1:o=yi;break;case 4:o=Pt;break;case 16:o=en;break;case 536870912:o=nr;break;default:o=en}o=Xp(o,Up.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Up(n,i){if(gl=-1,vl=0,(tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var u=Ta(n,n===Kt?nn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=_l(n,u);else{i=u;var d=tt;tt|=2;var m=Gp();(Kt!==n||nn!==i)&&(Vi=null,Is=it()+500,jr(n,i));do try{b_();break}catch(k){Vp(n,k)}while(!0);fc(),fl.current=m,tt=d,Vt!==null?i=0:(Kt=null,nn=0,i=jt)}if(i!==0){if(i===2&&(d=Cu(n),d!==0&&(u=d,i=Xc(n,d))),i===1)throw o=Ko,jr(n,0),yr(n,u),Pn(n,it()),o;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!w_(d)&&(i=_l(n,u),i===2&&(m=Cu(n),m!==0&&(u=m,i=Xc(n,m))),i===1))throw o=Ko,jr(n,0),yr(n,u),Pn(n,it()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:qr(n,An,Vi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=$c+500-it(),10<i)){if(Ta(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){yn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ec(qr.bind(null,n,An,Vi),i);break}qr(n,An,Vi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-vn(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=it()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*S_(u/1960))-u,10<u){n.timeoutHandle=ec(qr.bind(null,n,An,Vi),u);break}qr(n,An,Vi);break;case 5:qr(n,An,Vi);break;default:throw Error(t(329))}}}return Pn(n,it()),n.callbackNode===o?Up.bind(null,n):null}function Xc(n,i){var o=Zo;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=_l(n,i),n!==2&&(i=An,An=o,i!==null&&Yc(i)),n}function Yc(n){An===null?An=n:An.push.apply(An,n)}function w_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Hc,i&=~dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-vn(i),u=1<<o;n[o]=-1,i&=~u}}function Bp(n){if((tt&6)!==0)throw Error(t(327));ks();var i=Ta(n,0);if((i&1)===0)return Pn(n,it()),null;var o=_l(n,i);if(n.tag!==0&&o===2){var u=Cu(n);u!==0&&(i=u,o=Xc(n,u))}if(o===1)throw o=Ko,jr(n,0),yr(n,i),Pn(n,it()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qr(n,An,Vi),Pn(n,it()),null}function Kc(n,i){var o=tt;tt|=1;try{return n(i)}finally{tt=o,tt===0&&(Is=it()+500,$a&&hr())}}function $r(n){_r!==null&&_r.tag===0&&(tt&6)===0&&ks();var i=tt;tt|=1;var o=Kn.transition,u=dt;try{if(Kn.transition=null,dt=1,n)return n()}finally{dt=u,Kn.transition=o,tt=i,(tt&6)===0&&hr()}}function Zc(){Fn=Ds.current,Et(Ds)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),Vt!==null)for(o=Vt.return;o!==null;){var u=o;switch(oc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wa();break;case 3:Ps(),Et(En),Et(un),xc();break;case 5:vc(u);break;case 4:Ps();break;case 13:Et(Lt);break;case 19:Et(Lt);break;case 10:dc(u.type._context);break;case 22:case 23:Zc()}o=o.return}if(Kt=n,Vt=n=Sr(n.current,null),nn=Fn=i,jt=0,Ko=null,Hc=dl=Hr=0,An=Zo=null,Vr!==null){for(i=0;i<Vr.length;i++)if(o=Vr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Vr=null}return n}function Vp(n,i){do{var o=Vt;try{if(fc(),tl.current=sl,nl){for(var u=Rt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}nl=!1}if(Wr=0,Yt=$t=Rt=null,Ho=!1,$o=0,Wc.current=null,o===null||o.return===null){jt=1,Ko=i,Vt=null;break}e:{var m=n,M=o.return,k=o,O=i;if(i=nn,k.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,pe=k,ge=pe.tag;if((pe.mode&1)===0&&(ge===0||ge===11||ge===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Ae=dp(M);if(Ae!==null){Ae.flags&=-257,hp(Ae,M,k,m,i),Ae.mode&1&&fp(m,J,i),i=Ae,O=J;var Ie=i.updateQueue;if(Ie===null){var ke=new Set;ke.add(O),i.updateQueue=ke}else Ie.add(O);break e}else{if((i&1)===0){fp(m,J,i),Qc();break e}O=Error(t(426))}}else if(Ct&&k.mode&1){var Ot=dp(M);if(Ot!==null){(Ot.flags&65536)===0&&(Ot.flags|=256),hp(Ot,M,k,m,i),uc(Ls(O,k));break e}}m=O=Ls(O,k),jt!==4&&(jt=2),Zo===null?Zo=[m]:Zo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=up(m,O,i);Fh(m,Y);break e;case 1:k=O;var G=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(vr===null||!vr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var _e=cp(m,k,i);Fh(m,_e);break e}}m=m.return}while(m!==null)}Hp(o)}catch(ze){i=ze,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Gp(){var n=fl.current;return fl.current=sl,n===null?sl:n}function Qc(){(jt===0||jt===3||jt===2)&&(jt=4),Kt===null||(Hr&268435455)===0&&(dl&268435455)===0||yr(Kt,nn)}function _l(n,i){var o=tt;tt|=2;var u=Gp();(Kt!==n||nn!==i)&&(Vi=null,jr(n,i));do try{M_();break}catch(d){Vp(n,d)}while(!0);if(fc(),tt=o,fl.current=u,Vt!==null)throw Error(t(261));return Kt=null,nn=0,jt}function M_(){for(;Vt!==null;)Wp(Vt)}function b_(){for(;Vt!==null&&!er();)Wp(Vt)}function Wp(n){var i=qp(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,i===null?Hp(n):Vt=i,Wc.current=null}function Hp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=g_(o,i,Fn),o!==null){Vt=o;return}}else{if(o=v_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=n}while(i!==null);jt===0&&(jt=5)}function qr(n,i,o){var u=dt,d=Kn.transition;try{Kn.transition=null,dt=1,E_(n,i,o,u)}finally{Kn.transition=d,dt=u}return null}function E_(n,i,o,u){do ks();while(_r!==null);if((tt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(sv(n,m),n===Kt&&(Vt=Kt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pl||(pl=!0,Xp(en,function(){return ks(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Kn.transition,Kn.transition=null;var M=dt;dt=1;var k=tt;tt|=4,Wc.current=null,x_(n,o),kp(o,n),$v(Qu),Pa=!!Zu,Qu=Zu=null,n.current=o,y_(o),tr(),tt=k,dt=M,Kn.transition=m}else n.current=o;if(pl&&(pl=!1,_r=n,ml=d),m=n.pendingLanes,m===0&&(vr=null),Ii(o.stateNode),Pn(n,it()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(hl)throw hl=!1,n=jc,jc=null,n;return(ml&1)!==0&&n.tag!==0&&ks(),m=n.pendingLanes,(m&1)!==0?n===qc?Qo++:(Qo=0,qc=n):Qo=0,hr(),null}function ks(){if(_r!==null){var n=Dd(ml),i=Kn.transition,o=dt;try{if(Kn.transition=null,dt=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,ml=0,(tt&6)!==0)throw Error(t(331));var d=tt;for(tt|=4,Re=n.current;Re!==null;){var m=Re,M=m.child;if((Re.flags&16)!==0){var k=m.deletions;if(k!==null){for(var O=0;O<k.length;O++){var J=k[O];for(Re=J;Re!==null;){var pe=Re;switch(pe.tag){case 0:case 11:case 15:Yo(8,pe,m)}var ge=pe.child;if(ge!==null)ge.return=pe,Re=ge;else for(;Re!==null;){pe=Re;var he=pe.sibling,Ae=pe.return;if(Pp(pe),pe===J){Re=null;break}if(he!==null){he.return=Ae,Re=he;break}Re=Ae}}}var Ie=m.alternate;if(Ie!==null){var ke=Ie.child;if(ke!==null){Ie.child=null;do{var Ot=ke.sibling;ke.sibling=null,ke=Ot}while(ke!==null)}}Re=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Re=M;else e:for(;Re!==null;){if(m=Re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Yo(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Re=Y;break e}Re=m.return}}var G=n.current;for(Re=G;Re!==null;){M=Re;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Re=Z;else e:for(M=G;Re!==null;){if(k=Re,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:cl(9,k)}}catch(ze){Dt(k,k.return,ze)}if(k===M){Re=null;break e}var _e=k.sibling;if(_e!==null){_e.return=k.return,Re=_e;break e}Re=k.return}}if(tt=d,hr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ir,n)}catch{}u=!0}return u}finally{dt=o,Kn.transition=i}}return!1}function $p(n,i,o){i=Ls(o,i),i=up(n,i,1),n=mr(n,i,1),i=yn(),n!==null&&(wo(n,1,i),Pn(n,i))}function Dt(n,i,o){if(n.tag===3)$p(n,n,o);else for(;i!==null;){if(i.tag===3){$p(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Ls(o,n),n=cp(i,n,1),i=mr(i,n,1),n=yn(),i!==null&&(wo(i,1,n),Pn(i,n));break}}i=i.return}}function T_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=yn(),n.pingedLanes|=n.suspendedLanes&o,Kt===n&&(nn&o)===o&&(jt===4||jt===3&&(nn&130023424)===nn&&500>it()-$c?jr(n,0):Hc|=o),Pn(n,i)}function jp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ea,Ea<<=1,(Ea&130023424)===0&&(Ea=4194304)));var o=yn();n=Oi(n,i),n!==null&&(wo(n,i,o),Pn(n,o))}function C_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),jp(n,o)}function A_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),jp(n,o)}var qp;qp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||En.current)Cn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Cn=!1,m_(n,i,o);Cn=(n.flags&131072)!==0}else Cn=!1,Ct&&(i.flags&1048576)!==0&&Th(i,qa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ll(n,i),n=i.pendingProps;var d=ws(i,un.current);As(i,o),d=wc(null,i,u,n,d,o);var m=Mc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(u)?(m=!0,Ha(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mc(i),d.updater=ol,i.stateNode=d,d._reactInternals=i,Pc(i,u,n,o),i=Ic(null,i,u,!0,m,o)):(i.tag=0,Ct&&m&&sc(i),xn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=L_(u),n=li(u,n),d){case 0:i=Dc(null,i,u,n,o);break e;case 1:i=xp(null,i,u,n,o);break e;case 11:i=pp(null,i,u,n,o);break e;case 14:i=mp(null,i,u,li(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),Dc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),xp(n,i,u,d,o);case 3:e:{if(yp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,zh(n,i),Ja(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Sp(n,i,u,o,d);break e}else if(u!==d){d=Ls(Error(t(424)),i),i=Sp(n,i,u,o,d);break e}else for(zn=cr(i.stateNode.containerInfo.firstChild),kn=i,Ct=!0,ai=null,o=Ih(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),u===d){i=Bi(n,i,o);break e}xn(n,i,u,o)}i=i.child}return i;case 5:return Oh(i),n===null&&lc(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Ju(u,d)?M=null:m!==null&&Ju(u,m)&&(i.flags|=32),_p(n,i),xn(n,i,M,o),i.child;case 6:return n===null&&lc(i),null;case 13:return wp(n,i,o);case 4:return gc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ts(i,null,u,o):xn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),pp(n,i,u,d,o);case 7:return xn(n,i,i.pendingProps,o),i.child;case 8:return xn(n,i,i.pendingProps.children,o),i.child;case 12:return xn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,yt(Ka,u._currentValue),u._currentValue=M,m!==null)if(oi(m.value,M)){if(m.children===d.children&&!En.current){i=Bi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){M=m.child;for(var O=k.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ui(-1,o&-o),O.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var pe=J.pending;pe===null?O.next=O:(O.next=pe.next,pe.next=O),J.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),hc(m.return,o,i),k.lanes|=o;break}O=O.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,k=M.alternate,k!==null&&(k.lanes|=o),hc(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}xn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,As(i,o),d=Xn(d),u=u(d),i.flags|=1,xn(n,i,u,o),i.child;case 14:return u=i.type,d=li(u,i.pendingProps),d=li(u.type,d),mp(n,i,u,d,o);case 15:return gp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),ll(n,i),i.tag=1,Tn(u)?(n=!0,Ha(i)):n=!1,As(i,o),ap(i,u,d),Pc(i,u,d,o),Ic(null,i,u,!0,n,o);case 19:return bp(n,i,o);case 22:return vp(n,i,o)}throw Error(t(156,i.tag))};function Xp(n,i){return Mt(n,i)}function P_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new P_(n,i,o,u)}function Jc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L_(n){if(typeof n=="function")return Jc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===ne)return 14}return 2}function Sr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xl(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")Jc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case U:return Xr(o.children,d,m,i);case T:M=8,d|=8;break;case N:return n=Zn(12,o,i,d|2),n.elementType=N,n.lanes=m,n;case X:return n=Zn(13,o,i,d),n.elementType=X,n.lanes=m,n;case q:return n=Zn(19,o,i,d),n.elementType=q,n.lanes=m,n;case fe:return yl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:M=10;break e;case $:M=9;break e;case ce:M=11;break e;case ne:M=14;break e;case de:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Xr(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function yl(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=fe,n.lanes=o,n.stateNode={isHidden:!1},n}function ef(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function tf(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function R_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nf(n,i,o,u,d,m,M,k,O){return n=new R_(n,i,o,k,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mc(m),n}function D_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Yp(n){if(!n)return dr;n=n._reactInternals;e:{if(We(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Tn(o))return Mh(n,o,i)}return i}function Kp(n,i,o,u,d,m,M,k,O){return n=nf(o,u,!0,n,d,m,M,k,O),n.context=Yp(null),o=n.current,u=yn(),d=xr(o),m=Ui(u,d),m.callback=i??null,mr(o,m,d),n.current.lanes=d,wo(n,d,u),Pn(n,u),n}function Sl(n,i,o,u){var d=i.current,m=yn(),M=xr(d);return o=Yp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,M),n!==null&&(fi(n,d,M,m),Qa(n,d,M)),M}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function rf(n,i){Zp(n,i),(n=n.alternate)&&Zp(n,i)}function I_(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function sf(n){this._internalRoot=n}Ml.prototype.render=sf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},Ml.prototype.unmount=sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;$r(function(){Sl(null,n,null,null)}),i[ki]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=zd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ar.length&&i!==0&&i<ar[o].priority;o++);ar.splice(o,0,n),o===0&&Od(n)}};function of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function k_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var J=wl(M);m.call(J)}}var M=Kp(i,u,n,0,null,!1,!1,"",Jp);return n._reactRootContainer=M,n[ki]=M.current,Fo(n.nodeType===8?n.parentNode:n),$r(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var k=u;u=function(){var J=wl(O);k.call(J)}}var O=nf(n,0,!1,null,null,!1,!1,"",Jp);return n._reactRootContainer=O,n[ki]=O.current,Fo(n.nodeType===8?n.parentNode:n),$r(function(){Sl(i,O,o,u)}),O}function El(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var k=d;d=function(){var O=wl(M);k.call(O)}}Sl(i,M,n,d)}else M=k_(o,i,n,d,u);return wl(M)}Id=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=So(i.pendingLanes);o!==0&&(Pu(i,o|1),Pn(i,it()),(tt&6)===0&&(Is=it()+500,hr()))}break;case 13:$r(function(){var u=Oi(n,1);if(u!==null){var d=yn();fi(u,n,1,d)}}),rf(n,1)}},Lu=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var o=yn();fi(i,n,134217728,o)}rf(n,134217728)}},kd=function(n){if(n.tag===13){var i=xr(n),o=Oi(n,i);if(o!==null){var u=yn();fi(o,n,i,u)}rf(n,i)}},zd=function(){return dt},Fd=function(n,i){var o=dt;try{return dt=n,i()}finally{dt=o}},Te=function(n,i,o){switch(i){case"input":if(bn(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ga(u);if(!d)throw Error(t(90));Ye(u),bn(u,d)}}}break;case"textarea":le(n,o);break;case"select":i=o.value,i!=null&&Jt(n,!!o.multiple,i,!1)}},wt=Kc,$n=$r;var z_={usingClientEntryPoint:!1,Events:[Uo,ys,Ga,Tt,si,Kc]},Jo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Je(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||I_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{ir=Tl.inject(F_),xt=Tl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_,Ln.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(i))throw Error(t(200));return D_(n,i,null,o)},Ln.createRoot=function(n,i){if(!of(n))throw Error(t(299));var o=!1,u="",d=Qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nf(n,1,!1,null,null,o,!1,u,d),n[ki]=i.current,Fo(n.nodeType===8?n.parentNode:n),new sf(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Je(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return $r(n)},Ln.hydrate=function(n,i,o){if(!bl(i))throw Error(t(200));return El(null,n,i,!0,o)},Ln.hydrateRoot=function(n,i,o){if(!of(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=Qp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Kp(i,null,n,1,o??null,d,!1,m,M),n[ki]=i.current,Fo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ml(i)},Ln.render=function(n,i,o){if(!bl(i))throw Error(t(200));return El(null,n,i,!1,o)},Ln.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?($r(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Ln.unstable_batchedUpdates=Kc,Ln.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!bl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,i,o,!1,u)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var lm;function q_(){if(lm)return uf.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uf.exports=j_(),uf.exports}var um;function X_(){if(um)return Cl;um=1;var s=q_();return Cl.createRoot=s.createRoot,Cl.hydrateRoot=s.hydrateRoot,Cl}var Y_=X_(),df={exports:{}},hf,cm;function K_(){if(cm)return hf;cm=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hf=s,hf}var pf,fm;function Z_(){if(fm)return pf;fm=1;var s=K_();function e(){}function t(){}return t.resetWarningCache=e,pf=function(){function r(f,c,h,p,_,g){if(g!==s){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},pf}var dm;function Q_(){return dm||(dm=1,df.exports=Z_()()),df.exports}var J_=Q_();const Sn=Jg(J_);function t0({onSubmit:s}){const[e,t]=pt.useState(""),r=a=>{a.preventDefault(),e.trim()&&(s(e.trim()),t(""))};return vt.jsxs("form",{onSubmit:r,className:"new-item-form",children:[vt.jsxs("div",{className:"form-row",children:[vt.jsx("label",{htmlFor:"item",children:"New Item"}),vt.jsx("input",{value:e,onChange:a=>t(a.target.value),type:"text",id:"item",placeholder:"What is your next task?"})]}),vt.jsx("button",{className:"btn",children:"Add"})]})}t0.propTypes={onSubmit:Sn.func.isRequired};const hm=s=>s,ex=()=>{let s=hm;return{configure(e){s=e},generate(e){return s(e)},reset(){s=hm}}},tx=ex();function as(s,...e){const t=new URL(`https://mui.com/production-error/?code=${s}`);return e.forEach(r=>t.searchParams.append("args[]",r)),`Minified MUI error #${s}; visit ${t} for the full message.`}function lo(s){if(typeof s!="string")throw new Error(as(7));return s.charAt(0).toUpperCase()+s.slice(1)}function n0(s){var e,t,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(t=n0(s[e]))&&(r&&(r+=" "),r+=t)}else for(t in s)s[t]&&(r&&(r+=" "),r+=t);return r}function nx(){for(var s,e,t=0,r="",a=arguments.length;t<a;t++)(s=arguments[t])&&(e=n0(s))&&(r&&(r+=" "),r+=e);return r}function ix(s,e,t=void 0){const r={};for(const a in s){const l=s[a];let f="",c=!0;for(let h=0;h<l.length;h+=1){const p=l[h];p&&(f+=(c===!0?"":" ")+e(p),c=!1,t&&t[p]&&(f+=" "+t[p]))}r[a]=f}return r}var mf={exports:{}},ht={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function rx(){if(pm)return ht;pm=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.view_transition"),S=Symbol.for("react.client.reference");function b(v){if(typeof v=="object"&&v!==null){var y=v.$$typeof;switch(y){case s:switch(v=v.type,v){case t:case a:case r:case h:case p:case x:return v;default:switch(v=v&&v.$$typeof,v){case f:case c:case g:case _:return v;case l:return v;default:return y}}case e:return y}}}return ht.ContextConsumer=l,ht.ContextProvider=f,ht.Element=s,ht.ForwardRef=c,ht.Fragment=t,ht.Lazy=g,ht.Memo=_,ht.Portal=e,ht.Profiler=a,ht.StrictMode=r,ht.Suspense=h,ht.SuspenseList=p,ht.isContextConsumer=function(v){return b(v)===l},ht.isContextProvider=function(v){return b(v)===f},ht.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===s},ht.isForwardRef=function(v){return b(v)===c},ht.isFragment=function(v){return b(v)===t},ht.isLazy=function(v){return b(v)===g},ht.isMemo=function(v){return b(v)===_},ht.isPortal=function(v){return b(v)===e},ht.isProfiler=function(v){return b(v)===a},ht.isStrictMode=function(v){return b(v)===r},ht.isSuspense=function(v){return b(v)===h},ht.isSuspenseList=function(v){return b(v)===p},ht.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===t||v===a||v===r||v===h||v===p||typeof v=="object"&&v!==null&&(v.$$typeof===g||v.$$typeof===_||v.$$typeof===f||v.$$typeof===l||v.$$typeof===c||v.$$typeof===S||v.getModuleId!==void 0)},ht.typeOf=b,ht}var mm;function sx(){return mm||(mm=1,mf.exports=rx()),mf.exports}var i0=sx();function Yi(s){if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)}function r0(s){if(pt.isValidElement(s)||i0.isValidElementType(s)||!Yi(s))return s;const e={};return Object.keys(s).forEach(t=>{e[t]=r0(s[t])}),e}function Gn(s,e,t={clone:!0}){const r=t.clone?{...s}:s;return Yi(s)&&Yi(e)&&Object.keys(e).forEach(a=>{pt.isValidElement(e[a])||i0.isValidElementType(e[a])?r[a]=e[a]:Yi(e[a])&&Object.prototype.hasOwnProperty.call(s,a)&&Yi(s[a])?r[a]=Gn(s[a],e[a],t):t.clone?r[a]=Yi(e[a])?r0(e[a]):e[a]:r[a]=e[a]}),r}function ca(s,e){return e?Gn(s,e,{clone:!1}):s}function ox(s,e){if(!s.containerQueries)return e;const t=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,a)=>{var f,c;const l=/min-width:\s*([0-9.]+)/;return+(((f=r.match(l))==null?void 0:f[1])||0)-+(((c=a.match(l))==null?void 0:c[1])||0)});return t.length?t.reduce((r,a)=>{const l=e[a];return delete r[a],r[a]=l,r},{...e}):e}function ax(s,e){return e==="@"||e.startsWith("@")&&(s.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function lx(s,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t)return null;const[,r,a]=t,l=Number.isNaN(+r)?r||0:+r;return s.containerQueries(a).up(l)}function ux(s){const e=(l,f)=>l.replace("@media",f?`@container ${f}`:"@container");function t(l,f){l.up=(...c)=>e(s.breakpoints.up(...c),f),l.down=(...c)=>e(s.breakpoints.down(...c),f),l.between=(...c)=>e(s.breakpoints.between(...c),f),l.only=(...c)=>e(s.breakpoints.only(...c),f),l.not=(...c)=>{const h=e(s.breakpoints.not(...c),f);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const r={},a=l=>(t(r,l),r);return t(a),{...s,containerQueries:a}}const lu={xs:0,sm:600,md:900,lg:1200,xl:1536},gm={keys:["xs","sm","md","lg","xl"],up:s=>`@media (min-width:${lu[s]}px)`},cx={containerQueries:s=>({up:e=>{let t=typeof e=="number"?e:lu[e]||e;return typeof t=="number"&&(t=`${t}px`),s?`@container ${s} (min-width:${t})`:`@container (min-width:${t})`}})};function Ji(s,e,t){const r=s.theme||{};if(Array.isArray(e)){const l=r.breakpoints||gm;return e.reduce((f,c,h)=>(f[l.up(l.keys[h])]=t(e[h]),f),{})}if(typeof e=="object"){const l=r.breakpoints||gm;return Object.keys(e).reduce((f,c)=>{if(ax(l.keys,c)){const h=lx(r.containerQueries?r:cx,c);h&&(f[h]=t(e[c],c))}else if(Object.keys(l.values||lu).includes(c)){const h=l.up(c);f[h]=t(e[c],c)}else{const h=c;f[h]=e[h]}return f},{})}return t(e)}function fx(s={}){var t;return((t=s.keys)==null?void 0:t.reduce((r,a)=>{const l=s.up(a);return r[l]={},r},{}))||{}}function dx(s,e){return s.reduce((t,r)=>{const a=t[r];return(!a||Object.keys(a).length===0)&&delete t[r],t},e)}function uu(s,e,t=!0){if(!e||typeof e!="string")return null;if(s&&s.vars&&t){const r=`vars.${e}`.split(".").reduce((a,l)=>a&&a[l]?a[l]:null,s);if(r!=null)return r}return e.split(".").reduce((r,a)=>r&&r[a]!=null?r[a]:null,s)}function su(s,e,t,r=t){let a;return typeof s=="function"?a=s(t):Array.isArray(s)?a=s[t]||r:a=uu(s,t)||r,e&&(a=e(a,r,s)),a}function Ut(s){const{prop:e,cssProperty:t=s.prop,themeKey:r,transform:a}=s,l=f=>{if(f[e]==null)return null;const c=f[e],h=f.theme,p=uu(h,r)||{};return Ji(f,c,g=>{let x=su(p,a,g);return g===x&&typeof g=="string"&&(x=su(p,a,`${e}${g==="default"?"":lo(g)}`,g)),t===!1?x:{[t]:x}})};return l.propTypes={},l.filterProps=[e],l}function hx(s){const e={};return t=>(e[t]===void 0&&(e[t]=s(t)),e[t])}const px={m:"margin",p:"padding"},mx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},vm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},gx=hx(s=>{if(s.length>2)if(vm[s])s=vm[s];else return[s];const[e,t]=s.split(""),r=px[e],a=mx[t]||"";return Array.isArray(a)?a.map(l=>r+l):[r+a]}),gd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],vd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...gd,...vd];function ga(s,e,t,r){const a=uu(s,e,!0)??t;return typeof a=="number"||typeof a=="string"?l=>typeof l=="string"?l:typeof a=="string"?a.startsWith("var(")&&l===0?0:a.startsWith("var(")&&l===1?a:`calc(${l} * ${a})`:a*l:Array.isArray(a)?l=>{if(typeof l=="string")return l;const f=Math.abs(l),c=a[f];return l>=0?c:typeof c=="number"?-c:typeof c=="string"&&c.startsWith("var(")?`calc(-1 * ${c})`:`-${c}`}:typeof a=="function"?a:()=>{}}function _d(s){return ga(s,"spacing",8)}function va(s,e){return typeof e=="string"||e==null?e:s(e)}function vx(s,e){return t=>s.reduce((r,a)=>(r[a]=va(e,t),r),{})}function _x(s,e,t,r){if(!e.includes(t))return null;const a=gx(t),l=vx(a,r),f=s[t];return Ji(s,f,l)}function s0(s,e){const t=_d(s.theme);return Object.keys(s).map(r=>_x(s,e,r,t)).reduce(ca,{})}function It(s){return s0(s,gd)}It.propTypes={};It.filterProps=gd;function kt(s){return s0(s,vd)}kt.propTypes={};kt.filterProps=vd;function cu(...s){const e=s.reduce((r,a)=>(a.filterProps.forEach(l=>{r[l]=a}),r),{}),t=r=>Object.keys(r).reduce((a,l)=>e[l]?ca(a,e[l](r)):a,{});return t.propTypes={},t.filterProps=s.reduce((r,a)=>r.concat(a.filterProps),[]),t}function Jn(s){return typeof s!="number"?s:`${s}px solid`}function ri(s,e){return Ut({prop:s,themeKey:"borders",transform:e})}const xx=ri("border",Jn),yx=ri("borderTop",Jn),Sx=ri("borderRight",Jn),wx=ri("borderBottom",Jn),Mx=ri("borderLeft",Jn),bx=ri("borderColor"),Ex=ri("borderTopColor"),Tx=ri("borderRightColor"),Cx=ri("borderBottomColor"),Ax=ri("borderLeftColor"),Px=ri("outline",Jn),Lx=ri("outlineColor"),fu=s=>{if(s.borderRadius!==void 0&&s.borderRadius!==null){const e=ga(s.theme,"shape.borderRadius",4),t=r=>({borderRadius:va(e,r)});return Ji(s,s.borderRadius,t)}return null};fu.propTypes={};fu.filterProps=["borderRadius"];cu(xx,yx,Sx,wx,Mx,bx,Ex,Tx,Cx,Ax,fu,Px,Lx);const du=s=>{if(s.gap!==void 0&&s.gap!==null){const e=ga(s.theme,"spacing",8),t=r=>({gap:va(e,r)});return Ji(s,s.gap,t)}return null};du.propTypes={};du.filterProps=["gap"];const hu=s=>{if(s.columnGap!==void 0&&s.columnGap!==null){const e=ga(s.theme,"spacing",8),t=r=>({columnGap:va(e,r)});return Ji(s,s.columnGap,t)}return null};hu.propTypes={};hu.filterProps=["columnGap"];const pu=s=>{if(s.rowGap!==void 0&&s.rowGap!==null){const e=ga(s.theme,"spacing",8),t=r=>({rowGap:va(e,r)});return Ji(s,s.rowGap,t)}return null};pu.propTypes={};pu.filterProps=["rowGap"];const Rx=Ut({prop:"gridColumn"}),Dx=Ut({prop:"gridRow"}),Ix=Ut({prop:"gridAutoFlow"}),kx=Ut({prop:"gridAutoColumns"}),zx=Ut({prop:"gridAutoRows"}),Fx=Ut({prop:"gridTemplateColumns"}),Nx=Ut({prop:"gridTemplateRows"}),Ox=Ut({prop:"gridTemplateAreas"}),Ux=Ut({prop:"gridArea"});cu(du,hu,pu,Rx,Dx,Ix,kx,zx,Fx,Nx,Ox,Ux);function no(s,e){return e==="grey"?e:s}const Bx=Ut({prop:"color",themeKey:"palette",transform:no}),Vx=Ut({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:no}),Gx=Ut({prop:"backgroundColor",themeKey:"palette",transform:no});cu(Bx,Vx,Gx);function Vn(s){return s<=1&&s!==0?`${s*100}%`:s}const Wx=Ut({prop:"width",transform:Vn}),xd=s=>{if(s.maxWidth!==void 0&&s.maxWidth!==null){const e=t=>{var a,l,f,c,h;const r=((f=(l=(a=s.theme)==null?void 0:a.breakpoints)==null?void 0:l.values)==null?void 0:f[t])||lu[t];return r?((h=(c=s.theme)==null?void 0:c.breakpoints)==null?void 0:h.unit)!=="px"?{maxWidth:`${r}${s.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:Vn(t)}};return Ji(s,s.maxWidth,e)}return null};xd.filterProps=["maxWidth"];const Hx=Ut({prop:"minWidth",transform:Vn}),$x=Ut({prop:"height",transform:Vn}),jx=Ut({prop:"maxHeight",transform:Vn}),qx=Ut({prop:"minHeight",transform:Vn});Ut({prop:"size",cssProperty:"width",transform:Vn});Ut({prop:"size",cssProperty:"height",transform:Vn});const Xx=Ut({prop:"boxSizing"});cu(Wx,xd,Hx,$x,jx,qx,Xx);const mu={border:{themeKey:"borders",transform:Jn},borderTop:{themeKey:"borders",transform:Jn},borderRight:{themeKey:"borders",transform:Jn},borderBottom:{themeKey:"borders",transform:Jn},borderLeft:{themeKey:"borders",transform:Jn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Jn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:fu},color:{themeKey:"palette",transform:no},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:no},backgroundColor:{themeKey:"palette",transform:no},p:{style:kt},pt:{style:kt},pr:{style:kt},pb:{style:kt},pl:{style:kt},px:{style:kt},py:{style:kt},padding:{style:kt},paddingTop:{style:kt},paddingRight:{style:kt},paddingBottom:{style:kt},paddingLeft:{style:kt},paddingX:{style:kt},paddingY:{style:kt},paddingInline:{style:kt},paddingInlineStart:{style:kt},paddingInlineEnd:{style:kt},paddingBlock:{style:kt},paddingBlockStart:{style:kt},paddingBlockEnd:{style:kt},m:{style:It},mt:{style:It},mr:{style:It},mb:{style:It},ml:{style:It},mx:{style:It},my:{style:It},margin:{style:It},marginTop:{style:It},marginRight:{style:It},marginBottom:{style:It},marginLeft:{style:It},marginX:{style:It},marginY:{style:It},marginInline:{style:It},marginInlineStart:{style:It},marginInlineEnd:{style:It},marginBlock:{style:It},marginBlockStart:{style:It},marginBlockEnd:{style:It},displayPrint:{cssProperty:!1,transform:s=>({"@media print":{display:s}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:du},rowGap:{style:pu},columnGap:{style:hu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vn},maxWidth:{style:xd},minWidth:{transform:Vn},height:{transform:Vn},maxHeight:{transform:Vn},minHeight:{transform:Vn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Yx(...s){const e=s.reduce((r,a)=>r.concat(Object.keys(a)),[]),t=new Set(e);return s.every(r=>t.size===Object.keys(r).length)}function Kx(s,e){return typeof s=="function"?s(e):s}function Zx(){function s(t,r,a,l){const f={[t]:r,theme:a},c=l[t];if(!c)return{[t]:r};const{cssProperty:h=t,themeKey:p,transform:_,style:g}=c;if(r==null)return null;if(p==="typography"&&r==="inherit")return{[t]:r};const x=uu(a,p)||{};return g?g(f):Ji(f,r,b=>{let v=su(x,_,b);return b===v&&typeof b=="string"&&(v=su(x,_,`${t}${b==="default"?"":lo(b)}`,b)),h===!1?v:{[h]:v}})}function e(t){const{sx:r,theme:a={}}=t||{};if(!r)return null;const l=a.unstable_sxConfig??mu;function f(c){let h=c;if(typeof c=="function")h=c(a);else if(typeof c!="object")return c;if(!h)return null;const p=fx(a.breakpoints),_=Object.keys(p);let g=p;return Object.keys(h).forEach(x=>{const S=Kx(h[x],a);if(S!=null)if(typeof S=="object")if(l[x])g=ca(g,s(x,S,a,l));else{const b=Ji({theme:a},S,v=>({[x]:v}));Yx(b,S)?g[x]=e({sx:S,theme:a}):g=ca(g,b)}else g=ca(g,s(x,S,a,l))}),ox(a,dx(_,g))}return Array.isArray(r)?r.map(f):f(r)}return e}const uo=Zx();uo.filterProps=["sx"];function Jf(){return Jf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Jf.apply(null,arguments)}function Qx(s){if(s.sheet)return s.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===s)return document.styleSheets[e]}function Jx(s){var e=document.createElement("style");return e.setAttribute("data-emotion",s.key),s.nonce!==void 0&&e.setAttribute("nonce",s.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ey=function(){function s(t){var r=this;this._insertTag=function(a){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,l),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=s.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jx(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Qx(a);try{l.insertRule(r,l.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},s}(),pn="-ms-",ou="-moz-",ut="-webkit-",o0="comm",yd="rule",Sd="decl",ty="@import",a0="@keyframes",ny="@layer",iy=Math.abs,gu=String.fromCharCode,ry=Object.assign;function sy(s,e){return rn(s,0)^45?(((e<<2^rn(s,0))<<2^rn(s,1))<<2^rn(s,2))<<2^rn(s,3):0}function l0(s){return s.trim()}function oy(s,e){return(s=e.exec(s))?s[0]:s}function ct(s,e,t){return s.replace(e,t)}function ed(s,e){return s.indexOf(e)}function rn(s,e){return s.charCodeAt(e)|0}function fa(s,e,t){return s.slice(e,t)}function Ci(s){return s.length}function wd(s){return s.length}function Al(s,e){return e.push(s),s}function ay(s,e){return s.map(e).join("")}var vu=1,co=1,u0=0,Dn=0,Ht=0,vo="";function _u(s,e,t,r,a,l,f){return{value:s,root:e,parent:t,type:r,props:a,children:l,line:vu,column:co,length:f,return:""}}function ta(s,e){return ry(_u("",null,null,"",null,null,0),s,{length:-s.length},e)}function ly(){return Ht}function uy(){return Ht=Dn>0?rn(vo,--Dn):0,co--,Ht===10&&(co=1,vu--),Ht}function Wn(){return Ht=Dn<u0?rn(vo,Dn++):0,co++,Ht===10&&(co=1,vu++),Ht}function Ri(){return rn(vo,Dn)}function Jl(){return Dn}function _a(s,e){return fa(vo,s,e)}function da(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function c0(s){return vu=co=1,u0=Ci(vo=s),Dn=0,[]}function f0(s){return vo="",s}function eu(s){return l0(_a(Dn-1,td(s===91?s+2:s===40?s+1:s)))}function cy(s){for(;(Ht=Ri())&&Ht<33;)Wn();return da(s)>2||da(Ht)>3?"":" "}function fy(s,e){for(;--e&&Wn()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return _a(s,Jl()+(e<6&&Ri()==32&&Wn()==32))}function td(s){for(;Wn();)switch(Ht){case s:return Dn;case 34:case 39:s!==34&&s!==39&&td(Ht);break;case 40:s===41&&td(s);break;case 92:Wn();break}return Dn}function dy(s,e){for(;Wn()&&s+Ht!==57;)if(s+Ht===84&&Ri()===47)break;return"/*"+_a(e,Dn-1)+"*"+gu(s===47?s:Wn())}function hy(s){for(;!da(Ri());)Wn();return _a(s,Dn)}function py(s){return f0(tu("",null,null,null,[""],s=c0(s),0,[0],s))}function tu(s,e,t,r,a,l,f,c,h){for(var p=0,_=0,g=f,x=0,S=0,b=0,v=1,y=1,E=1,L=0,D="",C=a,A=l,F=r,U=D;y;)switch(b=L,L=Wn()){case 40:if(b!=108&&rn(U,g-1)==58){ed(U+=ct(eu(L),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:U+=eu(L);break;case 9:case 10:case 13:case 32:U+=cy(b);break;case 92:U+=fy(Jl()-1,7);continue;case 47:switch(Ri()){case 42:case 47:Al(my(dy(Wn(),Jl()),e,t),h);break;default:U+="/"}break;case 123*v:c[p++]=Ci(U)*E;case 125*v:case 59:case 0:switch(L){case 0:case 125:y=0;case 59+_:E==-1&&(U=ct(U,/\f/g,"")),S>0&&Ci(U)-g&&Al(S>32?xm(U+";",r,t,g-1):xm(ct(U," ","")+";",r,t,g-2),h);break;case 59:U+=";";default:if(Al(F=_m(U,e,t,p,_,a,c,D,C=[],A=[],g),l),L===123)if(_===0)tu(U,e,F,F,C,l,g,c,A);else switch(x===99&&rn(U,3)===110?100:x){case 100:case 108:case 109:case 115:tu(s,F,F,r&&Al(_m(s,F,F,0,0,a,c,D,a,C=[],g),A),a,A,g,c,r?C:A);break;default:tu(U,F,F,F,[""],A,0,c,A)}}p=_=S=0,v=E=1,D=U="",g=f;break;case 58:g=1+Ci(U),S=b;default:if(v<1){if(L==123)--v;else if(L==125&&v++==0&&uy()==125)continue}switch(U+=gu(L),L*v){case 38:E=_>0?1:(U+="\f",-1);break;case 44:c[p++]=(Ci(U)-1)*E,E=1;break;case 64:Ri()===45&&(U+=eu(Wn())),x=Ri(),_=g=Ci(D=U+=hy(Jl())),L++;break;case 45:b===45&&Ci(U)==2&&(v=0)}}return l}function _m(s,e,t,r,a,l,f,c,h,p,_){for(var g=a-1,x=a===0?l:[""],S=wd(x),b=0,v=0,y=0;b<r;++b)for(var E=0,L=fa(s,g+1,g=iy(v=f[b])),D=s;E<S;++E)(D=l0(v>0?x[E]+" "+L:ct(L,/&\f/g,x[E])))&&(h[y++]=D);return _u(s,e,t,a===0?yd:c,h,p,_)}function my(s,e,t){return _u(s,e,t,o0,gu(ly()),fa(s,2,-2),0)}function xm(s,e,t,r){return _u(s,e,t,Sd,fa(s,0,r),fa(s,r+1,-1),r)}function io(s,e){for(var t="",r=wd(s),a=0;a<r;a++)t+=e(s[a],a,s,e)||"";return t}function gy(s,e,t,r){switch(s.type){case ny:if(s.children.length)break;case ty:case Sd:return s.return=s.return||s.value;case o0:return"";case a0:return s.return=s.value+"{"+io(s.children,r)+"}";case yd:s.value=s.props.join(",")}return Ci(t=io(s.children,r))?s.return=s.value+"{"+t+"}":""}function vy(s){var e=wd(s);return function(t,r,a,l){for(var f="",c=0;c<e;c++)f+=s[c](t,r,a,l)||"";return f}}function _y(s){return function(e){e.root||(e=e.return)&&s(e)}}function d0(s){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=s(t)),e[t]}}var xy=function(e,t,r){for(var a=0,l=0;a=l,l=Ri(),a===38&&l===12&&(t[r]=1),!da(l);)Wn();return _a(e,Dn)},yy=function(e,t){var r=-1,a=44;do switch(da(a)){case 0:a===38&&Ri()===12&&(t[r]=1),e[r]+=xy(Dn-1,t,r);break;case 2:e[r]+=eu(a);break;case 4:if(a===44){e[++r]=Ri()===58?"&\f":"",t[r]=e[r].length;break}default:e[r]+=gu(a)}while(a=Wn());return e},Sy=function(e,t){return f0(yy(c0(e),t))},ym=new WeakMap,wy=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!ym.get(r))&&!a){ym.set(e,!0);for(var l=[],f=Sy(t,l),c=r.props,h=0,p=0;h<f.length;h++)for(var _=0;_<c.length;_++,p++)e.props[p]=l[h]?f[h].replace(/&\f/g,c[_]):c[_]+" "+f[h]}}},My=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function h0(s,e){switch(sy(s,e)){case 5103:return ut+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ut+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return ut+s+ou+s+pn+s+s;case 6828:case 4268:return ut+s+pn+s+s;case 6165:return ut+s+pn+"flex-"+s+s;case 5187:return ut+s+ct(s,/(\w+).+(:[^]+)/,ut+"box-$1$2"+pn+"flex-$1$2")+s;case 5443:return ut+s+pn+"flex-item-"+ct(s,/flex-|-self/,"")+s;case 4675:return ut+s+pn+"flex-line-pack"+ct(s,/align-content|flex-|-self/,"")+s;case 5548:return ut+s+pn+ct(s,"shrink","negative")+s;case 5292:return ut+s+pn+ct(s,"basis","preferred-size")+s;case 6060:return ut+"box-"+ct(s,"-grow","")+ut+s+pn+ct(s,"grow","positive")+s;case 4554:return ut+ct(s,/([^-])(transform)/g,"$1"+ut+"$2")+s;case 6187:return ct(ct(ct(s,/(zoom-|grab)/,ut+"$1"),/(image-set)/,ut+"$1"),s,"")+s;case 5495:case 3959:return ct(s,/(image-set\([^]*)/,ut+"$1$`$1");case 4968:return ct(ct(s,/(.+:)(flex-)?(.*)/,ut+"box-pack:$3"+pn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ut+s+s;case 4095:case 3583:case 4068:case 2532:return ct(s,/(.+)-inline(.+)/,ut+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ci(s)-1-e>6)switch(rn(s,e+1)){case 109:if(rn(s,e+4)!==45)break;case 102:return ct(s,/(.+:)(.+)-([^]+)/,"$1"+ut+"$2-$3$1"+ou+(rn(s,e+3)==108?"$3":"$2-$3"))+s;case 115:return~ed(s,"stretch")?h0(ct(s,"stretch","fill-available"),e)+s:s}break;case 4949:if(rn(s,e+1)!==115)break;case 6444:switch(rn(s,Ci(s)-3-(~ed(s,"!important")&&10))){case 107:return ct(s,":",":"+ut)+s;case 101:return ct(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ut+(rn(s,14)===45?"inline-":"")+"box$3$1"+ut+"$2$3$1"+pn+"$2box$3")+s}break;case 5936:switch(rn(s,e+11)){case 114:return ut+s+pn+ct(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return ut+s+pn+ct(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return ut+s+pn+ct(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return ut+s+pn+s+s}return s}var by=function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case Sd:e.return=h0(e.value,e.length);break;case a0:return io([ta(e,{value:ct(e.value,"@","@"+ut)})],a);case yd:if(e.length)return ay(e.props,function(l){switch(oy(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return io([ta(e,{props:[ct(l,/:(read-\w+)/,":"+ou+"$1")]})],a);case"::placeholder":return io([ta(e,{props:[ct(l,/:(plac\w+)/,":"+ut+"input-$1")]}),ta(e,{props:[ct(l,/:(plac\w+)/,":"+ou+"$1")]}),ta(e,{props:[ct(l,/:(plac\w+)/,pn+"input-$1")]})],a)}return""})}},Ey=[by],Ty=function(e){var t=e.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var y=v.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=e.stylisPlugins||Ey,l={},f,c=[];f=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var y=v.getAttribute("data-emotion").split(" "),E=1;E<y.length;E++)l[y[E]]=!0;c.push(v)});var h,p=[wy,My];{var _,g=[gy,_y(function(v){_.insert(v)})],x=vy(p.concat(a,g)),S=function(y){return io(py(y),x)};h=function(y,E,L,D){_=L,S(y?y+"{"+E.styles+"}":E.styles),D&&(b.inserted[E.name]=!0)}}var b={key:t,sheet:new ey({key:t,container:f,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:h};return b.sheet.hydrate(c),b},Cy=!0;function Ay(s,e,t){var r="";return t.split(" ").forEach(function(a){s[a]!==void 0?e.push(s[a]+";"):a&&(r+=a+" ")}),r}var p0=function(e,t,r){var a=e.key+"-"+t.name;(r===!1||Cy===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},Py=function(e,t,r){p0(e,t,r);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var l=t;do e.insert(t===l?"."+a:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Ly(s){for(var e=0,t,r=0,a=s.length;a>=4;++r,a-=4)t=s.charCodeAt(r)&255|(s.charCodeAt(++r)&255)<<8|(s.charCodeAt(++r)&255)<<16|(s.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(s.charCodeAt(r+2)&255)<<16;case 2:e^=(s.charCodeAt(r+1)&255)<<8;case 1:e^=s.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ry={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dy=/[A-Z]|^ms/g,Iy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,m0=function(e){return e.charCodeAt(1)===45},Sm=function(e){return e!=null&&typeof e!="boolean"},gf=d0(function(s){return m0(s)?s:s.replace(Dy,"-$&").toLowerCase()}),wm=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Iy,function(r,a,l){return Ai={name:a,styles:l,next:Ai},a})}return Ry[e]!==1&&!m0(e)&&typeof t=="number"&&t!==0?t+"px":t};function ha(s,e,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return Ai={name:a.name,styles:a.styles,next:Ai},a.name;var l=t;if(l.styles!==void 0){var f=l.next;if(f!==void 0)for(;f!==void 0;)Ai={name:f.name,styles:f.styles,next:Ai},f=f.next;var c=l.styles+";";return c}return ky(s,e,t)}case"function":{if(s!==void 0){var h=Ai,p=t(s);return Ai=h,ha(s,e,p)}break}}var _=t;if(e==null)return _;var g=e[_];return g!==void 0?g:_}function ky(s,e,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=ha(s,e,t[a])+";";else for(var l in t){var f=t[l];if(typeof f!="object"){var c=f;e!=null&&e[c]!==void 0?r+=l+"{"+e[c]+"}":Sm(c)&&(r+=gf(l)+":"+wm(l,c)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(e==null||e[f[0]]===void 0))for(var h=0;h<f.length;h++)Sm(f[h])&&(r+=gf(l)+":"+wm(l,f[h])+";");else{var p=ha(s,e,f);switch(l){case"animation":case"animationName":{r+=gf(l)+":"+p+";";break}default:r+=l+"{"+p+"}"}}}return r}var Mm=/label:\s*([^\s;{]+)\s*(;|$)/g,Ai;function g0(s,e,t){if(s.length===1&&typeof s[0]=="object"&&s[0]!==null&&s[0].styles!==void 0)return s[0];var r=!0,a="";Ai=void 0;var l=s[0];if(l==null||l.raw===void 0)r=!1,a+=ha(t,e,l);else{var f=l;a+=f[0]}for(var c=1;c<s.length;c++)if(a+=ha(t,e,s[c]),r){var h=l;a+=h[c]}Mm.lastIndex=0;for(var p="",_;(_=Mm.exec(a))!==null;)p+="-"+_[1];var g=Ly(a)+p;return{name:g,styles:a,next:Ai}}var zy=function(e){return e()},Fy=rm.useInsertionEffect?rm.useInsertionEffect:!1,Ny=Fy||zy,v0=pt.createContext(typeof HTMLElement<"u"?Ty({key:"css"}):null);v0.Provider;var Oy=function(e){return pt.forwardRef(function(t,r){var a=pt.useContext(v0);return e(t,a,r)})},Uy=pt.createContext({}),By=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Vy=d0(function(s){return By.test(s)||s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)<91}),Gy=Vy,Wy=function(e){return e!=="theme"},bm=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Gy:Wy},Em=function(e,t,r){var a;if(t){var l=t.shouldForwardProp;a=e.__emotion_forwardProp&&l?function(f){return e.__emotion_forwardProp(f)&&l(f)}:l}return typeof a!="function"&&r&&(a=e.__emotion_forwardProp),a},Hy=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return p0(t,r,a),Ny(function(){return Py(t,r,a)}),null},$y=function s(e,t){var r=e.__emotion_real===e,a=r&&e.__emotion_base||e,l,f;t!==void 0&&(l=t.label,f=t.target);var c=Em(e,t,r),h=c||bm(a),p=!h("as");return function(){var _=arguments,g=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&g.push("label:"+l+";"),_[0]==null||_[0].raw===void 0)g.push.apply(g,_);else{var x=_[0];g.push(x[0]);for(var S=_.length,b=1;b<S;b++)g.push(_[b],x[b])}var v=Oy(function(y,E,L){var D=p&&y.as||a,C="",A=[],F=y;if(y.theme==null){F={};for(var U in y)F[U]=y[U];F.theme=pt.useContext(Uy)}typeof y.className=="string"?C=Ay(E.registered,A,y.className):y.className!=null&&(C=y.className+" ");var T=g0(g.concat(A),E.registered,F);C+=E.key+"-"+T.name,f!==void 0&&(C+=" "+f);var N=p&&c===void 0?bm(D):h,w={};for(var $ in y)p&&$==="as"||N($)&&(w[$]=y[$]);return w.className=C,L&&(w.ref=L),pt.createElement(pt.Fragment,null,pt.createElement(Hy,{cache:E,serialized:T,isStringTag:typeof D=="string"}),pt.createElement(D,w))});return v.displayName=l!==void 0?l:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=a,v.__emotion_styles=g,v.__emotion_forwardProp=c,Object.defineProperty(v,"toString",{value:function(){return"."+f}}),v.withComponent=function(y,E){var L=s(y,Jf({},t,E,{shouldForwardProp:Em(v,E,!0)}));return L.apply(void 0,g)},v}},jy=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],nd=$y.bind(null);jy.forEach(function(s){nd[s]=nd(s)});function qy(s,e){return nd(s,e)}function Xy(s,e){Array.isArray(s.__emotion_styles)&&(s.__emotion_styles=e(s.__emotion_styles))}const Tm=[];function Cm(s){return Tm[0]=s,g0(Tm)}const Yy=s=>{const e=Object.keys(s).map(t=>({key:t,val:s[t]}))||[];return e.sort((t,r)=>t.val-r.val),e.reduce((t,r)=>({...t,[r.key]:r.val}),{})};function Ky(s){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:r=5,...a}=s,l=Yy(e),f=Object.keys(l);function c(x){return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${t})`}function h(x){return`@media (max-width:${(typeof e[x]=="number"?e[x]:x)-r/100}${t})`}function p(x,S){const b=f.indexOf(S);return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${t}) and (max-width:${(b!==-1&&typeof e[f[b]]=="number"?e[f[b]]:S)-r/100}${t})`}function _(x){return f.indexOf(x)+1<f.length?p(x,f[f.indexOf(x)+1]):c(x)}function g(x){const S=f.indexOf(x);return S===0?c(f[1]):S===f.length-1?h(f[S]):p(x,f[f.indexOf(x)+1]).replace("@media","@media not all and")}return{keys:f,values:l,up:c,down:h,between:p,only:_,not:g,unit:t,...a}}const Zy={borderRadius:4};function _0(s=8,e=_d({spacing:s})){if(s.mui)return s;const t=(...r)=>(r.length===0?[1]:r).map(l=>{const f=e(l);return typeof f=="number"?`${f}px`:f}).join(" ");return t.mui=!0,t}function Qy(s,e){var r;const t=this;if(t.vars){if(!((r=t.colorSchemes)!=null&&r[s])||typeof t.getColorSchemeSelector!="function")return{};let a=t.getColorSchemeSelector(s);return a==="&"?e:((a.includes("data-")||a.includes("."))&&(a=`*:where(${a.replace(/\s*&$/,"")}) &`),{[a]:e})}return t.palette.mode===s?e:{}}function x0(s={},...e){const{breakpoints:t={},palette:r={},spacing:a,shape:l={},...f}=s,c=Ky(t),h=_0(a);let p=Gn({breakpoints:c,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:h,shape:{...Zy,...l}},f);return p=ux(p),p.applyStyles=Qy,p=e.reduce((_,g)=>Gn(_,g),p),p.unstable_sxConfig={...mu,...f==null?void 0:f.unstable_sxConfig},p.unstable_sx=function(g){return uo({sx:g,theme:this})},p}const Jy={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function y0(s,e,t="Mui"){const r=Jy[e];return r?`${t}-${r}`:`${tx.generate(s)}-${e}`}function e1(s,e,t="Mui"){const r={};return e.forEach(a=>{r[a]=y0(s,a,t)}),r}function S0(s){const{variants:e,...t}=s,r={variants:e,style:Cm(t),isProcessed:!0};return r.style===t||e&&e.forEach(a=>{typeof a.style!="function"&&(a.style=Cm(a.style))}),r}const t1=x0();function vf(s){return s!=="ownerState"&&s!=="theme"&&s!=="sx"&&s!=="as"}function n1(s){return s?(e,t)=>t[s]:null}function i1(s,e,t){s.theme=o1(s.theme)?t:s.theme[e]||s.theme}function nu(s,e){const t=typeof e=="function"?e(s):e;if(Array.isArray(t))return t.flatMap(r=>nu(s,r));if(Array.isArray(t==null?void 0:t.variants)){let r;if(t.isProcessed)r=t.style;else{const{variants:a,...l}=t;r=l}return w0(s,t.variants,[r])}return t!=null&&t.isProcessed?t.style:t}function w0(s,e,t=[]){var a;let r;e:for(let l=0;l<e.length;l+=1){const f=e[l];if(typeof f.props=="function"){if(r??(r={...s,...s.ownerState,ownerState:s.ownerState}),!f.props(r))continue}else for(const c in f.props)if(s[c]!==f.props[c]&&((a=s.ownerState)==null?void 0:a[c])!==f.props[c])continue e;typeof f.style=="function"?(r??(r={...s,...s.ownerState,ownerState:s.ownerState}),t.push(f.style(r))):t.push(f.style)}return t}function r1(s={}){const{themeId:e,defaultTheme:t=t1,rootShouldForwardProp:r=vf,slotShouldForwardProp:a=vf}=s;function l(c){i1(c,e,t)}return(c,h={})=>{Xy(c,A=>A.filter(F=>F!==uo));const{name:p,slot:_,skipVariantsResolver:g,skipSx:x,overridesResolver:S=n1(l1(_)),...b}=h,v=g!==void 0?g:_&&_!=="Root"&&_!=="root"||!1,y=x||!1;let E=vf;_==="Root"||_==="root"?E=r:_?E=a:a1(c)&&(E=void 0);const L=qy(c,{shouldForwardProp:E,label:s1(),...b}),D=A=>{if(A.__emotion_real===A)return A;if(typeof A=="function")return function(U){return nu(U,A)};if(Yi(A)){const F=S0(A);return F.variants?function(T){return nu(T,F)}:F.style}return A},C=(...A)=>{const F=[],U=A.map(D),T=[];if(F.push(l),p&&S&&T.push(function(ce){var de,fe;const q=(fe=(de=ce.theme.components)==null?void 0:de[p])==null?void 0:fe.styleOverrides;if(!q)return null;const ne={};for(const H in q)ne[H]=nu(ce,q[H]);return S(ce,ne)}),p&&!v&&T.push(function(ce){var ne,de;const X=ce.theme,q=(de=(ne=X==null?void 0:X.components)==null?void 0:ne[p])==null?void 0:de.variants;return q?w0(ce,q):null}),y||T.push(uo),Array.isArray(U[0])){const $=U.shift(),ce=new Array(F.length).fill(""),X=new Array(T.length).fill("");let q;q=[...ce,...$,...X],q.raw=[...ce,...$.raw,...X],F.unshift(q)}const N=[...F,...U,...T],w=L(...N);return c.muiName&&(w.muiName=c.muiName),w};return L.withConfig&&(C.withConfig=L.withConfig),C}}function s1(s,e){return void 0}function o1(s){for(const e in s)return!1;return!0}function a1(s){return typeof s=="string"&&s.charCodeAt(0)>96}function l1(s){return s&&s.charAt(0).toLowerCase()+s.slice(1)}function id(s,e){const t={...e};for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r)){const a=r;if(a==="components"||a==="slots")t[a]={...s[a],...t[a]};else if(a==="componentsProps"||a==="slotProps"){const l=s[a],f=e[a];if(!f)t[a]=l||{};else if(!l)t[a]=f;else{t[a]={...f};for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c)){const h=c;t[a][h]=id(l[h],f[h])}}}else t[a]===void 0&&(t[a]=s[a])}return t}function u1(s,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(s,t))}function Md(s,e=0,t=1){return u1(s,e,t)}function c1(s){s=s.slice(1);const e=new RegExp(`.{1,${s.length>=6?2:1}}`,"g");let t=s.match(e);return t&&t[0].length===1&&(t=t.map(r=>r+r)),t?`rgb${t.length===4?"a":""}(${t.map((r,a)=>a<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Dr(s){if(s.type)return s;if(s.charAt(0)==="#")return Dr(c1(s));const e=s.indexOf("("),t=s.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(as(9,s));let r=s.substring(e+1,s.length-1),a;if(t==="color"){if(r=r.split(" "),a=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(a))throw new Error(as(10,a))}else r=r.split(",");return r=r.map(l=>parseFloat(l)),{type:t,values:r,colorSpace:a}}const f1=s=>{const e=Dr(s);return e.values.slice(0,3).map((t,r)=>e.type.includes("hsl")&&r!==0?`${t}%`:t).join(" ")},oa=(s,e)=>{try{return f1(s)}catch{return s}};function xu(s){const{type:e,colorSpace:t}=s;let{values:r}=s;return e.includes("rgb")?r=r.map((a,l)=>l<3?parseInt(a,10):a):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${t} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function M0(s){s=Dr(s);const{values:e}=s,t=e[0],r=e[1]/100,a=e[2]/100,l=r*Math.min(a,1-a),f=(p,_=(p+t/30)%12)=>a-l*Math.max(Math.min(_-3,9-_,1),-1);let c="rgb";const h=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return s.type==="hsla"&&(c+="a",h.push(e[3])),xu({type:c,values:h})}function rd(s){s=Dr(s);let e=s.type==="hsl"||s.type==="hsla"?Dr(M0(s)).values:s.values;return e=e.map(t=>(s.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function d1(s,e){const t=rd(s),r=rd(e);return(Math.max(t,r)+.05)/(Math.min(t,r)+.05)}function h1(s,e){return s=Dr(s),e=Md(e),(s.type==="rgb"||s.type==="hsl")&&(s.type+="a"),s.type==="color"?s.values[3]=`/${e}`:s.values[3]=e,xu(s)}function Pl(s,e,t){try{return h1(s,e)}catch{return s}}function bd(s,e){if(s=Dr(s),e=Md(e),s.type.includes("hsl"))s.values[2]*=1-e;else if(s.type.includes("rgb")||s.type.includes("color"))for(let t=0;t<3;t+=1)s.values[t]*=1-e;return xu(s)}function mt(s,e,t){try{return bd(s,e)}catch{return s}}function Ed(s,e){if(s=Dr(s),e=Md(e),s.type.includes("hsl"))s.values[2]+=(100-s.values[2])*e;else if(s.type.includes("rgb"))for(let t=0;t<3;t+=1)s.values[t]+=(255-s.values[t])*e;else if(s.type.includes("color"))for(let t=0;t<3;t+=1)s.values[t]+=(1-s.values[t])*e;return xu(s)}function gt(s,e,t){try{return Ed(s,e)}catch{return s}}function p1(s,e=.15){return rd(s)>.5?bd(s,e):Ed(s,e)}function Ll(s,e,t){try{return p1(s,e)}catch{return s}}const m1=pt.createContext(void 0);function g1(s){const{theme:e,name:t,props:r}=s;if(!e||!e.components||!e.components[t])return r;const a=e.components[t];return a.defaultProps?id(a.defaultProps,r):!a.styleOverrides&&!a.variants?id(a,r):r}function v1({props:s,name:e}){const t=pt.useContext(m1);return g1({props:s,name:e,theme:{components:t}})}const Am={theme:void 0};function _1(s){let e,t;return function(a){let l=e;return(l===void 0||a.theme!==t)&&(Am.theme=a.theme,l=S0(s(Am)),e=l,t=a.theme),l}}function x1(s=""){function e(...r){if(!r.length)return"";const a=r[0];return typeof a=="string"&&!a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${s?`${s}-`:""}${a}${e(...r.slice(1))})`:`, ${a}`}return(r,...a)=>`var(--${s?`${s}-`:""}${r}${e(...a)})`}const Pm=(s,e,t,r=[])=>{let a=s;e.forEach((l,f)=>{f===e.length-1?Array.isArray(a)?a[Number(l)]=t:a&&typeof a=="object"&&(a[l]=t):a&&typeof a=="object"&&(a[l]||(a[l]=r.includes(l)?[]:{}),a=a[l])})},y1=(s,e,t)=>{function r(a,l=[],f=[]){Object.entries(a).forEach(([c,h])=>{(!t||t&&!t([...l,c]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?r(h,[...l,c],Array.isArray(h)?[...f,c]:f):e([...l,c],h,f))})}r(s)},S1=(s,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>s.includes(r))||s[s.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function _f(s,e){const{prefix:t,shouldSkipGeneratingVar:r}=e||{},a={},l={},f={};return y1(s,(c,h,p)=>{if((typeof h=="string"||typeof h=="number")&&(!r||!r(c,h))){const _=`--${t?`${t}-`:""}${c.join("-")}`,g=S1(c,h);Object.assign(a,{[_]:g}),Pm(l,c,`var(${_})`,p),Pm(f,c,`var(${_}, ${g})`,p)}},c=>c[0]==="vars"),{css:a,vars:l,varsWithDefaults:f}}function w1(s,e={}){const{getSelector:t=y,disableCssColorScheme:r,colorSchemeSelector:a}=e,{colorSchemes:l={},components:f,defaultColorScheme:c="light",...h}=s,{vars:p,css:_,varsWithDefaults:g}=_f(h,e);let x=g;const S={},{[c]:b,...v}=l;if(Object.entries(v||{}).forEach(([D,C])=>{const{vars:A,css:F,varsWithDefaults:U}=_f(C,e);x=Gn(x,U),S[D]={css:F,vars:A}}),b){const{css:D,vars:C,varsWithDefaults:A}=_f(b,e);x=Gn(x,A),S[c]={css:D,vars:C}}function y(D,C){var F,U;let A=a;if(a==="class"&&(A=".%s"),a==="data"&&(A="[data-%s]"),a!=null&&a.startsWith("data-")&&!a.includes("%s")&&(A=`[${a}="%s"]`),D){if(A==="media")return s.defaultColorScheme===D?":root":{[`@media (prefers-color-scheme: ${((U=(F=l[D])==null?void 0:F.palette)==null?void 0:U.mode)||D})`]:{":root":C}};if(A)return s.defaultColorScheme===D?`:root, ${A.replace("%s",String(D))}`:A.replace("%s",String(D))}return":root"}return{vars:x,generateThemeVars:()=>{let D={...p};return Object.entries(S).forEach(([,{vars:C}])=>{D=Gn(D,C)}),D},generateStyleSheets:()=>{var T,N;const D=[],C=s.defaultColorScheme||"light";function A(w,$){Object.keys($).length&&D.push(typeof w=="string"?{[w]:{...$}}:w)}A(t(void 0,{..._}),_);const{[C]:F,...U}=S;if(F){const{css:w}=F,$=(N=(T=l[C])==null?void 0:T.palette)==null?void 0:N.mode,ce=!r&&$?{colorScheme:$,...w}:{...w};A(t(C,{...ce}),ce)}return Object.entries(U).forEach(([w,{css:$}])=>{var q,ne;const ce=(ne=(q=l[w])==null?void 0:q.palette)==null?void 0:ne.mode,X=!r&&ce?{colorScheme:ce,...$}:{...$};A(t(w,{...X}),X)}),D}}}function M1(s){return function(t){return s==="media"?`@media (prefers-color-scheme: ${t})`:s?s.startsWith("data-")&&!s.includes("%s")?`[${s}="${t}"] &`:s==="class"?`.${t} &`:s==="data"?`[data-${t}] &`:`${s.replace("%s",t)} &`:"&"}}const pa={black:"#000",white:"#fff"},b1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},zs={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Fs={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},na={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Ns={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Os={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Us={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function b0(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:pa.white,default:pa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const E1=b0();function E0(){return{text:{primary:pa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:pa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Lm=E0();function Rm(s,e,t,r){const a=r.light||r,l=r.dark||r*1.5;s[e]||(s.hasOwnProperty(t)?s[e]=s[t]:e==="light"?s.light=Ed(s.main,a):e==="dark"&&(s.dark=bd(s.main,l)))}function T1(s="light"){return s==="dark"?{main:Ns[200],light:Ns[50],dark:Ns[400]}:{main:Ns[700],light:Ns[400],dark:Ns[800]}}function C1(s="light"){return s==="dark"?{main:zs[200],light:zs[50],dark:zs[400]}:{main:zs[500],light:zs[300],dark:zs[700]}}function A1(s="light"){return s==="dark"?{main:Fs[500],light:Fs[300],dark:Fs[700]}:{main:Fs[700],light:Fs[400],dark:Fs[800]}}function P1(s="light"){return s==="dark"?{main:Os[400],light:Os[300],dark:Os[700]}:{main:Os[700],light:Os[500],dark:Os[900]}}function L1(s="light"){return s==="dark"?{main:Us[400],light:Us[300],dark:Us[700]}:{main:Us[800],light:Us[500],dark:Us[900]}}function R1(s="light"){return s==="dark"?{main:na[400],light:na[300],dark:na[700]}:{main:"#ed6c02",light:na[500],dark:na[900]}}function Td(s){const{mode:e="light",contrastThreshold:t=3,tonalOffset:r=.2,...a}=s,l=s.primary||T1(e),f=s.secondary||C1(e),c=s.error||A1(e),h=s.info||P1(e),p=s.success||L1(e),_=s.warning||R1(e);function g(v){return d1(v,Lm.text.primary)>=t?Lm.text.primary:E1.text.primary}const x=({color:v,name:y,mainShade:E=500,lightShade:L=300,darkShade:D=700})=>{if(v={...v},!v.main&&v[E]&&(v.main=v[E]),!v.hasOwnProperty("main"))throw new Error(as(11,y?` (${y})`:"",E));if(typeof v.main!="string")throw new Error(as(12,y?` (${y})`:"",JSON.stringify(v.main)));return Rm(v,"light",L,r),Rm(v,"dark",D,r),v.contrastText||(v.contrastText=g(v.main)),v};let S;return e==="light"?S=b0():e==="dark"&&(S=E0()),Gn({common:{...pa},mode:e,primary:x({color:l,name:"primary"}),secondary:x({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:x({color:c,name:"error"}),warning:x({color:_,name:"warning"}),info:x({color:h,name:"info"}),success:x({color:p,name:"success"}),grey:b1,contrastThreshold:t,getContrastText:g,augmentColor:x,tonalOffset:r,...S},a)}function D1(s){const e={};return Object.entries(s).forEach(r=>{const[a,l]=r;typeof l=="object"&&(e[a]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),e}function I1(s,e){return{toolbar:{minHeight:56,[s.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[s.up("sm")]:{minHeight:64}},...e}}function k1(s){return Math.round(s*1e5)/1e5}const Dm={textTransform:"uppercase"},Im='"Roboto", "Helvetica", "Arial", sans-serif';function z1(s,e){const{fontFamily:t=Im,fontSize:r=14,fontWeightLight:a=300,fontWeightRegular:l=400,fontWeightMedium:f=500,fontWeightBold:c=700,htmlFontSize:h=16,allVariants:p,pxToRem:_,...g}=typeof e=="function"?e(s):e,x=r/14,S=_||(y=>`${y/h*x}rem`),b=(y,E,L,D,C)=>({fontFamily:t,fontWeight:y,fontSize:S(E),lineHeight:L,...t===Im?{letterSpacing:`${k1(D/E)}em`}:{},...C,...p}),v={h1:b(a,96,1.167,-1.5),h2:b(a,60,1.2,-.5),h3:b(l,48,1.167,0),h4:b(l,34,1.235,.25),h5:b(l,24,1.334,0),h6:b(f,20,1.6,.15),subtitle1:b(l,16,1.75,.15),subtitle2:b(f,14,1.57,.1),body1:b(l,16,1.5,.15),body2:b(l,14,1.43,.15),button:b(f,14,1.75,.4,Dm),caption:b(l,12,1.66,.4),overline:b(l,12,2.66,1,Dm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Gn({htmlFontSize:h,pxToRem:S,fontFamily:t,fontSize:r,fontWeightLight:a,fontWeightRegular:l,fontWeightMedium:f,fontWeightBold:c,...v},g,{clone:!1})}const F1=.2,N1=.14,O1=.12;function At(...s){return[`${s[0]}px ${s[1]}px ${s[2]}px ${s[3]}px rgba(0,0,0,${F1})`,`${s[4]}px ${s[5]}px ${s[6]}px ${s[7]}px rgba(0,0,0,${N1})`,`${s[8]}px ${s[9]}px ${s[10]}px ${s[11]}px rgba(0,0,0,${O1})`].join(",")}const U1=["none",At(0,2,1,-1,0,1,1,0,0,1,3,0),At(0,3,1,-2,0,2,2,0,0,1,5,0),At(0,3,3,-2,0,3,4,0,0,1,8,0),At(0,2,4,-1,0,4,5,0,0,1,10,0),At(0,3,5,-1,0,5,8,0,0,1,14,0),At(0,3,5,-1,0,6,10,0,0,1,18,0),At(0,4,5,-2,0,7,10,1,0,2,16,1),At(0,5,5,-3,0,8,10,1,0,3,14,2),At(0,5,6,-3,0,9,12,1,0,3,16,2),At(0,6,6,-3,0,10,14,1,0,4,18,3),At(0,6,7,-4,0,11,15,1,0,4,20,3),At(0,7,8,-4,0,12,17,2,0,5,22,4),At(0,7,8,-4,0,13,19,2,0,5,24,4),At(0,7,9,-4,0,14,21,2,0,5,26,4),At(0,8,9,-5,0,15,22,2,0,6,28,5),At(0,8,10,-5,0,16,24,2,0,6,30,5),At(0,8,11,-5,0,17,26,2,0,6,32,5),At(0,9,11,-5,0,18,28,2,0,7,34,6),At(0,9,12,-6,0,19,29,2,0,7,36,6),At(0,10,13,-6,0,20,31,3,0,8,38,7),At(0,10,13,-6,0,21,33,3,0,8,40,7),At(0,10,14,-6,0,22,35,3,0,8,42,7),At(0,11,14,-7,0,23,36,3,0,9,44,8),At(0,11,15,-7,0,24,38,3,0,9,46,8)],B1={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},V1={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function km(s){return`${Math.round(s)}ms`}function G1(s){if(!s)return 0;const e=s/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function W1(s){const e={...B1,...s.easing},t={...V1,...s.duration};return{getAutoHeightDuration:G1,create:(a=["all"],l={})=>{const{duration:f=t.standard,easing:c=e.easeInOut,delay:h=0,...p}=l;return(Array.isArray(a)?a:[a]).map(_=>`${_} ${typeof f=="string"?f:km(f)} ${c} ${typeof h=="string"?h:km(h)}`).join(",")},...s,easing:e,duration:t}}const H1={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function $1(s){return Yi(s)||typeof s>"u"||typeof s=="string"||typeof s=="boolean"||typeof s=="number"||Array.isArray(s)}function T0(s={}){const e={...s};function t(r){const a=Object.entries(r);for(let l=0;l<a.length;l++){const[f,c]=a[l];!$1(c)||f.startsWith("unstable_")?delete r[f]:Yi(c)&&(r[f]={...c},t(r[f]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function sd(s={},...e){const{breakpoints:t,mixins:r={},spacing:a,palette:l={},transitions:f={},typography:c={},shape:h,...p}=s;if(s.vars&&s.generateThemeVars===void 0)throw new Error(as(20));const _=Td(l),g=x0(s);let x=Gn(g,{mixins:I1(g.breakpoints,r),palette:_,shadows:U1.slice(),typography:z1(_,c),transitions:W1(f),zIndex:{...H1}});return x=Gn(x,p),x=e.reduce((S,b)=>Gn(S,b),x),x.unstable_sxConfig={...mu,...p==null?void 0:p.unstable_sxConfig},x.unstable_sx=function(b){return uo({sx:b,theme:this})},x.toRuntimeSource=T0,x}function j1(s){let e;return s<1?e=5.11916*s**2:e=4.5*Math.log(s+1)+2,Math.round(e*10)/1e3}const q1=[...Array(25)].map((s,e)=>{if(e===0)return"none";const t=j1(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function C0(s){return{inputPlaceholder:s==="dark"?.5:.42,inputUnderline:s==="dark"?.7:.42,switchTrackDisabled:s==="dark"?.2:.12,switchTrack:s==="dark"?.3:.38}}function A0(s){return s==="dark"?q1:[]}function X1(s){const{palette:e={mode:"light"},opacity:t,overlays:r,...a}=s,l=Td(e);return{palette:l,opacity:{...C0(l.mode),...t},overlays:r||A0(l.mode),...a}}function Y1(s){var e;return!!s[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!s[0].match(/sxConfig$/)||s[0]==="palette"&&!!((e=s[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const K1=s=>[...[...Array(25)].map((e,t)=>`--${s?`${s}-`:""}overlays-${t}`),`--${s?`${s}-`:""}palette-AppBar-darkBg`,`--${s?`${s}-`:""}palette-AppBar-darkColor`],Z1=s=>(e,t)=>{const r=s.rootSelector||":root",a=s.colorSchemeSelector;let l=a;if(a==="class"&&(l=".%s"),a==="data"&&(l="[data-%s]"),a!=null&&a.startsWith("data-")&&!a.includes("%s")&&(l=`[${a}="%s"]`),s.defaultColorScheme===e){if(e==="dark"){const f={};return K1(s.cssVarPrefix).forEach(c=>{f[c]=t[c],delete t[c]}),l==="media"?{[r]:t,"@media (prefers-color-scheme: dark)":{[r]:f}}:l?{[l.replace("%s",e)]:f,[`${r}, ${l.replace("%s",e)}`]:t}:{[r]:{...t,...f}}}if(l&&l!=="media")return`${r}, ${l.replace("%s",String(e))}`}else if(e){if(l==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:t}};if(l)return l.replace("%s",String(e))}return r};function Q1(s,e){e.forEach(t=>{s[t]||(s[t]={})})}function se(s,e,t){!s[e]&&t&&(s[e]=t)}function aa(s){return typeof s!="string"||!s.startsWith("hsl")?s:M0(s)}function Gi(s,e){`${e}Channel`in s||(s[`${e}Channel`]=oa(aa(s[e])))}function J1(s){return typeof s=="number"?`${s}px`:typeof s=="string"||typeof s=="function"||Array.isArray(s)?s:"8px"}const Ti=s=>{try{return s()}catch{}},eS=(s="mui")=>x1(s);function xf(s,e,t,r){if(!e)return;e=e===!0?{}:e;const a=r==="dark"?"dark":"light";if(!t){s[r]=X1({...e,palette:{mode:a,...e==null?void 0:e.palette}});return}const{palette:l,...f}=sd({...t,palette:{mode:a,...e==null?void 0:e.palette}});return s[r]={...e,palette:l,opacity:{...C0(a),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||A0(a)},f}function tS(s={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:r,disableCssColorScheme:a=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:f=Y1,colorSchemeSelector:c=t.light&&t.dark?"media":void 0,rootSelector:h=":root",...p}=s,_=Object.keys(t)[0],g=r||(t.light&&_!=="light"?"light":_),x=eS(l),{[g]:S,light:b,dark:v,...y}=t,E={...y};let L=S;if((g==="dark"&&!("dark"in t)||g==="light"&&!("light"in t))&&(L=!0),!L)throw new Error(as(21,g));const D=xf(E,L,p,g);b&&!E.light&&xf(E,b,void 0,"light"),v&&!E.dark&&xf(E,v,void 0,"dark");let C={defaultColorScheme:g,...D,cssVarPrefix:l,colorSchemeSelector:c,rootSelector:h,getCssVar:x,colorSchemes:E,font:{...D1(D.typography),...D.font},spacing:J1(p.spacing)};Object.keys(C.colorSchemes).forEach(N=>{const w=C.colorSchemes[N].palette,$=ce=>{const X=ce.split("-"),q=X[1],ne=X[2];return x(ce,w[q][ne])};if(w.mode==="light"&&(se(w.common,"background","#fff"),se(w.common,"onBackground","#000")),w.mode==="dark"&&(se(w.common,"background","#000"),se(w.common,"onBackground","#fff")),Q1(w,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),w.mode==="light"){se(w.Alert,"errorColor",mt(w.error.light,.6)),se(w.Alert,"infoColor",mt(w.info.light,.6)),se(w.Alert,"successColor",mt(w.success.light,.6)),se(w.Alert,"warningColor",mt(w.warning.light,.6)),se(w.Alert,"errorFilledBg",$("palette-error-main")),se(w.Alert,"infoFilledBg",$("palette-info-main")),se(w.Alert,"successFilledBg",$("palette-success-main")),se(w.Alert,"warningFilledBg",$("palette-warning-main")),se(w.Alert,"errorFilledColor",Ti(()=>w.getContrastText(w.error.main))),se(w.Alert,"infoFilledColor",Ti(()=>w.getContrastText(w.info.main))),se(w.Alert,"successFilledColor",Ti(()=>w.getContrastText(w.success.main))),se(w.Alert,"warningFilledColor",Ti(()=>w.getContrastText(w.warning.main))),se(w.Alert,"errorStandardBg",gt(w.error.light,.9)),se(w.Alert,"infoStandardBg",gt(w.info.light,.9)),se(w.Alert,"successStandardBg",gt(w.success.light,.9)),se(w.Alert,"warningStandardBg",gt(w.warning.light,.9)),se(w.Alert,"errorIconColor",$("palette-error-main")),se(w.Alert,"infoIconColor",$("palette-info-main")),se(w.Alert,"successIconColor",$("palette-success-main")),se(w.Alert,"warningIconColor",$("palette-warning-main")),se(w.AppBar,"defaultBg",$("palette-grey-100")),se(w.Avatar,"defaultBg",$("palette-grey-400")),se(w.Button,"inheritContainedBg",$("palette-grey-300")),se(w.Button,"inheritContainedHoverBg",$("palette-grey-A100")),se(w.Chip,"defaultBorder",$("palette-grey-400")),se(w.Chip,"defaultAvatarColor",$("palette-grey-700")),se(w.Chip,"defaultIconColor",$("palette-grey-700")),se(w.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),se(w.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),se(w.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),se(w.LinearProgress,"primaryBg",gt(w.primary.main,.62)),se(w.LinearProgress,"secondaryBg",gt(w.secondary.main,.62)),se(w.LinearProgress,"errorBg",gt(w.error.main,.62)),se(w.LinearProgress,"infoBg",gt(w.info.main,.62)),se(w.LinearProgress,"successBg",gt(w.success.main,.62)),se(w.LinearProgress,"warningBg",gt(w.warning.main,.62)),se(w.Skeleton,"bg",`rgba(${$("palette-text-primaryChannel")} / 0.11)`),se(w.Slider,"primaryTrack",gt(w.primary.main,.62)),se(w.Slider,"secondaryTrack",gt(w.secondary.main,.62)),se(w.Slider,"errorTrack",gt(w.error.main,.62)),se(w.Slider,"infoTrack",gt(w.info.main,.62)),se(w.Slider,"successTrack",gt(w.success.main,.62)),se(w.Slider,"warningTrack",gt(w.warning.main,.62));const ce=Ll(w.background.default,.8);se(w.SnackbarContent,"bg",ce),se(w.SnackbarContent,"color",Ti(()=>w.getContrastText(ce))),se(w.SpeedDialAction,"fabHoverBg",Ll(w.background.paper,.15)),se(w.StepConnector,"border",$("palette-grey-400")),se(w.StepContent,"border",$("palette-grey-400")),se(w.Switch,"defaultColor",$("palette-common-white")),se(w.Switch,"defaultDisabledColor",$("palette-grey-100")),se(w.Switch,"primaryDisabledColor",gt(w.primary.main,.62)),se(w.Switch,"secondaryDisabledColor",gt(w.secondary.main,.62)),se(w.Switch,"errorDisabledColor",gt(w.error.main,.62)),se(w.Switch,"infoDisabledColor",gt(w.info.main,.62)),se(w.Switch,"successDisabledColor",gt(w.success.main,.62)),se(w.Switch,"warningDisabledColor",gt(w.warning.main,.62)),se(w.TableCell,"border",gt(Pl(w.divider,1),.88)),se(w.Tooltip,"bg",Pl(w.grey[700],.92))}if(w.mode==="dark"){se(w.Alert,"errorColor",gt(w.error.light,.6)),se(w.Alert,"infoColor",gt(w.info.light,.6)),se(w.Alert,"successColor",gt(w.success.light,.6)),se(w.Alert,"warningColor",gt(w.warning.light,.6)),se(w.Alert,"errorFilledBg",$("palette-error-dark")),se(w.Alert,"infoFilledBg",$("palette-info-dark")),se(w.Alert,"successFilledBg",$("palette-success-dark")),se(w.Alert,"warningFilledBg",$("palette-warning-dark")),se(w.Alert,"errorFilledColor",Ti(()=>w.getContrastText(w.error.dark))),se(w.Alert,"infoFilledColor",Ti(()=>w.getContrastText(w.info.dark))),se(w.Alert,"successFilledColor",Ti(()=>w.getContrastText(w.success.dark))),se(w.Alert,"warningFilledColor",Ti(()=>w.getContrastText(w.warning.dark))),se(w.Alert,"errorStandardBg",mt(w.error.light,.9)),se(w.Alert,"infoStandardBg",mt(w.info.light,.9)),se(w.Alert,"successStandardBg",mt(w.success.light,.9)),se(w.Alert,"warningStandardBg",mt(w.warning.light,.9)),se(w.Alert,"errorIconColor",$("palette-error-main")),se(w.Alert,"infoIconColor",$("palette-info-main")),se(w.Alert,"successIconColor",$("palette-success-main")),se(w.Alert,"warningIconColor",$("palette-warning-main")),se(w.AppBar,"defaultBg",$("palette-grey-900")),se(w.AppBar,"darkBg",$("palette-background-paper")),se(w.AppBar,"darkColor",$("palette-text-primary")),se(w.Avatar,"defaultBg",$("palette-grey-600")),se(w.Button,"inheritContainedBg",$("palette-grey-800")),se(w.Button,"inheritContainedHoverBg",$("palette-grey-700")),se(w.Chip,"defaultBorder",$("palette-grey-700")),se(w.Chip,"defaultAvatarColor",$("palette-grey-300")),se(w.Chip,"defaultIconColor",$("palette-grey-300")),se(w.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),se(w.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),se(w.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),se(w.LinearProgress,"primaryBg",mt(w.primary.main,.5)),se(w.LinearProgress,"secondaryBg",mt(w.secondary.main,.5)),se(w.LinearProgress,"errorBg",mt(w.error.main,.5)),se(w.LinearProgress,"infoBg",mt(w.info.main,.5)),se(w.LinearProgress,"successBg",mt(w.success.main,.5)),se(w.LinearProgress,"warningBg",mt(w.warning.main,.5)),se(w.Skeleton,"bg",`rgba(${$("palette-text-primaryChannel")} / 0.13)`),se(w.Slider,"primaryTrack",mt(w.primary.main,.5)),se(w.Slider,"secondaryTrack",mt(w.secondary.main,.5)),se(w.Slider,"errorTrack",mt(w.error.main,.5)),se(w.Slider,"infoTrack",mt(w.info.main,.5)),se(w.Slider,"successTrack",mt(w.success.main,.5)),se(w.Slider,"warningTrack",mt(w.warning.main,.5));const ce=Ll(w.background.default,.98);se(w.SnackbarContent,"bg",ce),se(w.SnackbarContent,"color",Ti(()=>w.getContrastText(ce))),se(w.SpeedDialAction,"fabHoverBg",Ll(w.background.paper,.15)),se(w.StepConnector,"border",$("palette-grey-600")),se(w.StepContent,"border",$("palette-grey-600")),se(w.Switch,"defaultColor",$("palette-grey-300")),se(w.Switch,"defaultDisabledColor",$("palette-grey-600")),se(w.Switch,"primaryDisabledColor",mt(w.primary.main,.55)),se(w.Switch,"secondaryDisabledColor",mt(w.secondary.main,.55)),se(w.Switch,"errorDisabledColor",mt(w.error.main,.55)),se(w.Switch,"infoDisabledColor",mt(w.info.main,.55)),se(w.Switch,"successDisabledColor",mt(w.success.main,.55)),se(w.Switch,"warningDisabledColor",mt(w.warning.main,.55)),se(w.TableCell,"border",mt(Pl(w.divider,1),.68)),se(w.Tooltip,"bg",Pl(w.grey[700],.92))}Gi(w.background,"default"),Gi(w.background,"paper"),Gi(w.common,"background"),Gi(w.common,"onBackground"),Gi(w,"divider"),Object.keys(w).forEach(ce=>{const X=w[ce];ce!=="tonalOffset"&&X&&typeof X=="object"&&(X.main&&se(w[ce],"mainChannel",oa(aa(X.main))),X.light&&se(w[ce],"lightChannel",oa(aa(X.light))),X.dark&&se(w[ce],"darkChannel",oa(aa(X.dark))),X.contrastText&&se(w[ce],"contrastTextChannel",oa(aa(X.contrastText))),ce==="text"&&(Gi(w[ce],"primary"),Gi(w[ce],"secondary")),ce==="action"&&(X.active&&Gi(w[ce],"active"),X.selected&&Gi(w[ce],"selected")))})}),C=e.reduce((N,w)=>Gn(N,w),C);const A={prefix:l,disableCssColorScheme:a,shouldSkipGeneratingVar:f,getSelector:Z1(C)},{vars:F,generateThemeVars:U,generateStyleSheets:T}=w1(C,A);return C.vars=F,Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([N,w])=>{C[N]=w}),C.generateThemeVars=U,C.generateStyleSheets=T,C.generateSpacing=function(){return _0(p.spacing,_d(this))},C.getColorSchemeSelector=M1(c),C.spacing=C.generateSpacing(),C.shouldSkipGeneratingVar=f,C.unstable_sxConfig={...mu,...p==null?void 0:p.unstable_sxConfig},C.unstable_sx=function(w){return uo({sx:w,theme:this})},C.toRuntimeSource=T0,C}function zm(s,e,t){s.colorSchemes&&t&&(s.colorSchemes[e]={...t!==!0&&t,palette:Td({...t===!0?{}:t.palette,mode:e})})}function nS(s={},...e){const{palette:t,cssVariables:r=!1,colorSchemes:a=t?void 0:{light:!0},defaultColorScheme:l=t==null?void 0:t.mode,...f}=s,c=l||"light",h=a==null?void 0:a[c],p={...a,...t?{[c]:{...typeof h!="boolean"&&h,palette:t}}:void 0};if(r===!1){if(!("colorSchemes"in s))return sd(s,...e);let _=t;"palette"in s||p[c]&&(p[c]!==!0?_=p[c].palette:c==="dark"&&(_={mode:"dark"}));const g=sd({...s,palette:_},...e);return g.defaultColorScheme=c,g.colorSchemes=p,g.palette.mode==="light"&&(g.colorSchemes.light={...p.light!==!0&&p.light,palette:g.palette},zm(g,"dark",p.dark)),g.palette.mode==="dark"&&(g.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:g.palette},zm(g,"light",p.light)),g}return!t&&!("light"in p)&&c==="light"&&(p.light=!0),tS({...f,colorSchemes:p,defaultColorScheme:c,...typeof r!="boolean"&&r},...e)}const iS=nS(),rS="$$material";function sS(s){return s!=="ownerState"&&s!=="theme"&&s!=="sx"&&s!=="as"}const oS=s=>sS(s)&&s!=="classes",aS=r1({themeId:rS,defaultTheme:iS,rootShouldForwardProp:oS}),lS=_1;function uS(s){return v1(s)}function cS(s){return y0("MuiSvgIcon",s)}e1("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const fS=s=>{const{color:e,fontSize:t,classes:r}=s,a={root:["root",e!=="inherit"&&`color${lo(e)}`,`fontSize${lo(t)}`]};return ix(a,cS,r)},dS=aS("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,t.color!=="inherit"&&e[`color${lo(t.color)}`],e[`fontSize${lo(t.fontSize)}`]]}})(lS(({theme:s})=>{var e,t,r,a,l,f,c,h,p,_,g,x,S,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(a=(e=s.transitions)==null?void 0:e.create)==null?void 0:a.call(e,"fill",{duration:(r=(t=(s.vars??s).transitions)==null?void 0:t.duration)==null?void 0:r.shorter}),variants:[{props:v=>!v.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((f=(l=s.typography)==null?void 0:l.pxToRem)==null?void 0:f.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((h=(c=s.typography)==null?void 0:c.pxToRem)==null?void 0:h.call(c,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((_=(p=s.typography)==null?void 0:p.pxToRem)==null?void 0:_.call(p,35))||"2.1875rem"}},...Object.entries((s.vars??s).palette).filter(([,v])=>v&&v.main).map(([v])=>{var y,E;return{props:{color:v},style:{color:(E=(y=(s.vars??s).palette)==null?void 0:y[v])==null?void 0:E.main}}}),{props:{color:"action"},style:{color:(x=(g=(s.vars??s).palette)==null?void 0:g.action)==null?void 0:x.active}},{props:{color:"disabled"},style:{color:(b=(S=(s.vars??s).palette)==null?void 0:S.action)==null?void 0:b.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),od=pt.forwardRef(function(e,t){const r=uS({props:e,name:"MuiSvgIcon"}),{children:a,className:l,color:f="inherit",component:c="svg",fontSize:h="medium",htmlColor:p,inheritViewBox:_=!1,titleAccess:g,viewBox:x="0 0 24 24",...S}=r,b=pt.isValidElement(a)&&a.type==="svg",v={...r,color:f,component:c,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:_,viewBox:x,hasSvgAsChild:b},y={};_||(y.viewBox=x);const E=fS(v);return vt.jsxs(dS,{as:c,className:nx(E.root,l),focusable:"false",color:p,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:t,...y,...S,...b&&a.props,ownerState:v,children:[b?a.props.children:a,g?vt.jsx("title",{children:g}):null]})});od.muiName="SvgIcon";function hS(s,e){function t(r,a){return vt.jsx(od,{"data-testid":void 0,ref:a,...r,children:s})}return t.muiName=od.muiName,pt.memo(pt.forwardRef(t))}const pS=hS(vt.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}));function P0({completed:s,id:e,title:t,toggleTodo:r,deleteTodo:a}){return vt.jsxs("li",{className:s?"completed":"",children:[vt.jsxs("label",{children:[vt.jsxs("span",{className:"custom-checkbox",children:[vt.jsx("input",{type:"checkbox",checked:s,onChange:l=>r(e,l.target.checked)}),s&&vt.jsx(pS,{fontSize:"large"})]}),t]}),vt.jsx("button",{onClick:()=>a(e),className:"btn btn-danger",children:"Delete"})]})}P0.propTypes={completed:Sn.bool.isRequired,id:Sn.oneOfType([Sn.string,Sn.number]).isRequired,title:Sn.string.isRequired,toggleTodo:Sn.func.isRequired,deleteTodo:Sn.func.isRequired};function L0({todos:s,toggleTodo:e,deleteTodo:t}){return vt.jsxs("ul",{className:"list",children:[s.length===0&&"No Todos",s.map(r=>vt.jsx(P0,{...r,toggleTodo:e,deleteTodo:t},r.id))]})}L0.propTypes={todos:Sn.arrayOf(Sn.shape({id:Sn.string.isRequired,title:Sn.string.isRequired,completed:Sn.bool.isRequired})).isRequired,toggleTodo:Sn.func.isRequired,deleteTodo:Sn.func.isRequired};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="144",mS=0,Fm=1,gS=2,R0=1,vS=2,la=3,fo=0,ii=1,Lr=2,Rr=0,ro=1,Nm=2,Om=3,Um=4,_S=5,eo=100,xS=101,yS=102,Bm=103,Vm=104,SS=200,wS=201,MS=202,bS=203,D0=204,I0=205,ES=206,TS=207,CS=208,AS=209,PS=210,LS=0,RS=1,DS=2,ad=3,IS=4,kS=5,zS=6,FS=7,k0=0,NS=1,OS=2,Qi=0,US=1,BS=2,VS=3,GS=4,WS=5,z0=300,ho=301,po=302,ld=303,ud=304,yu=306,cd=1e3,gi=1001,fd=1002,Rn=1003,Gm=1004,Wm=1005,ei=1006,HS=1007,Su=1008,ls=1009,$S=1010,jS=1011,F0=1012,qS=1013,ts=1014,ns=1015,ma=1016,XS=1017,YS=1018,so=1020,KS=1021,ZS=1022,Li=1023,QS=1024,JS=1025,rs=1026,mo=1027,ew=1028,tw=1029,nw=1030,iw=1031,rw=1033,yf=33776,Sf=33777,wf=33778,Mf=33779,Hm=35840,$m=35841,jm=35842,qm=35843,sw=36196,Xm=37492,Ym=37496,Km=37808,Zm=37809,Qm=37810,Jm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,ug=37821,cg=36492,us=3e3,zt=3001,ow=3200,aw=3201,lw=0,uw=1,Xi="srgb",is="srgb-linear",bf=7680,cw=519,fg=35044,dg="300 es",dd=1035;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ef=Math.PI/180,hg=180/Math.PI;function xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Bn(s,e,t){return Math.max(e,Math.min(t,s))}function fw(s,e){return(s%e+e)%e}function Tf(s,e,t){return(1-t)*s+t*e}function pg(s){return(s&s-1)===0&&s!==0}function hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rl(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(){ni.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,a,l,f,c,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],p=r[1],_=r[4],g=r[7],x=r[2],S=r[5],b=r[8],v=a[0],y=a[3],E=a[6],L=a[1],D=a[4],C=a[7],A=a[2],F=a[5],U=a[8];return l[0]=f*v+c*L+h*A,l[3]=f*y+c*D+h*F,l[6]=f*E+c*C+h*U,l[1]=p*v+_*L+g*A,l[4]=p*y+_*D+g*F,l[7]=p*E+_*C+g*U,l[2]=x*v+S*L+b*A,l[5]=x*y+S*D+b*F,l[8]=x*E+S*C+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8];return t*f*_-t*c*p-r*l*_+r*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=_*f-c*p,x=c*h-_*l,S=p*l-f*h,b=t*g+r*x+a*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/b;return e[0]=g*v,e[1]=(a*p-_*r)*v,e[2]=(c*r-a*f)*v,e[3]=x*v,e[4]=(_*t-a*h)*v,e[5]=(a*l-c*t)*v,e[6]=S*v,e[7]=(r*h-p*t)*v,e[8]=(f*t-r*l)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),a=this.elements,l=a[0],f=a[3],c=a[6],h=a[1],p=a[4],_=a[7];return a[0]=t*l+r*h,a[3]=t*f+r*p,a[6]=t*c+r*_,a[1]=-r*l+t*h,a[4]=-r*f+t*p,a[7]=-r*c+t*_,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function N0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function iu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Cf={[Xi]:{[is]:ss},[is]:{[Xi]:iu}},di={legacyMode:!0,get workingColorSpace(){return is},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Cf[e]&&Cf[e][t]!==void 0){const r=Cf[e][t];return s.r=r(s.r),s.g=r(s.g),s.b=r(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={r:0,g:0,b:0},hi={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Af(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Il(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,di.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=is){return this.r=e,this.g=t,this.b=r,di.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=is){if(e=fw(e,1),t=Bn(t,0,1),r=Bn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Af(f,l,e+1/3),this.g=Af(f,l,e),this.b=Af(f,l,e-1/3)}return di.toWorkingColorSpace(this,a),this}setStyle(e,t=Xi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(l[1],10))/255,this.g=Math.min(255,parseInt(l[2],10))/255,this.b=Math.min(255,parseInt(l[3],10))/255,di.toWorkingColorSpace(this,t),r(l[4]),this;if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(l[1],10))/100,this.g=Math.min(100,parseInt(l[2],10))/100,this.b=Math.min(100,parseInt(l[3],10))/100,di.toWorkingColorSpace(this,t),r(l[4]),this;break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const h=parseFloat(l[1])/360,p=parseFloat(l[2])/100,_=parseFloat(l[3])/100;return r(l[4]),this.setHSL(h,p,_,t)}break}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,di.toWorkingColorSpace(this,t),this;if(f===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,di.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xi){const r=O0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return di.fromWorkingColorSpace(Il(this,qt),e),Bn(qt.r*255,0,255)<<16^Bn(qt.g*255,0,255)<<8^Bn(qt.b*255,0,255)<<0}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=is){di.fromWorkingColorSpace(Il(this,qt),t);const r=qt.r,a=qt.g,l=qt.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,p;const _=(c+f)/2;if(c===f)h=0,p=0;else{const g=f-c;switch(p=_<=.5?g/(f+c):g/(2-f-c),f){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=is){return di.fromWorkingColorSpace(Il(this,qt),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Xi){return di.fromWorkingColorSpace(Il(this,qt),e),e!==Xi?`color(${e} ${qt.r} ${qt.g} ${qt.b})`:`rgb(${qt.r*255|0},${qt.g*255|0},${qt.b*255|0})`}offsetHSL(e,t,r){return this.getHSL(hi),hi.h+=e,hi.s+=t,hi.l+=r,this.setHSL(hi.h,hi.s,hi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Dl);const r=Tf(hi.h,Dl.h,t),a=Tf(hi.s,Dl.s,t),l=Tf(hi.l,Dl.l,t);return this.setHSL(r,a,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}_t.NAMES=O0;let Bs;class U0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=au("canvas")),Bs.width=e.width,Bs.height=e.height;const r=Bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=au("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ss(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ss(t[r]/255)*255):t[r]=ss(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class B0{constructor(e=null){this.isSource=!0,this.uuid=xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(Pf(a[f].image)):l.push(Pf(a[f]))}else l=Pf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Pf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?U0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dw=0;class vi extends _o{constructor(e=vi.DEFAULT_IMAGE,t=vi.DEFAULT_MAPPING,r=gi,a=gi,l=ei,f=Su,c=Li,h=ls,p=1,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=xa(),this.name="",this.source=new B0(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ni,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=z0;class sn{constructor(e=0,t=0,r=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],x=h[1],S=h[5],b=h[9],v=h[2],y=h[6],E=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-v)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+v)<.1&&Math.abs(b+y)<.1&&Math.abs(p+S+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,C=(S+1)/2,A=(E+1)/2,F=(_+x)/4,U=(g+v)/4,T=(b+y)/4;return D>C&&D>A?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=F/r,l=U/r):C>A?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=F/a,l=T/a):A<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(A),r=U/l,a=T/l),this.set(r,a,l,t),this}let L=Math.sqrt((y-b)*(y-b)+(g-v)*(g-v)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(g-v)/L,this.z=(x-_)/L,this.w=Math.acos((p+S+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cs extends _o{constructor(e,t,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const a={width:e,height:t,depth:1};this.texture=new vi(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:ei,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V0 extends vi{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hw extends vi{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const x=l[f+0],S=l[f+1],b=l[f+2],v=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(c===1){e[t+0]=x,e[t+1]=S,e[t+2]=b,e[t+3]=v;return}if(g!==v||h!==x||p!==S||_!==b){let y=1-c;const E=h*x+p*S+_*b+g*v,L=E>=0?1:-1,D=1-E*E;if(D>Number.EPSILON){const A=Math.sqrt(D),F=Math.atan2(A,E*L);y=Math.sin(y*F)/A,c=Math.sin(c*F)/A}const C=c*L;if(h=h*y+x*C,p=p*y+S*C,_=_*y+b*C,g=g*y+v*C,y===1-c){const A=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=A,p*=A,_*=A,g*=A}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[f],x=l[f+1],S=l[f+2],b=l[f+3];return e[t]=c*b+_*g+h*S-p*x,e[t+1]=h*b+_*x+p*g-c*S,e[t+2]=p*b+_*S+c*x-h*g,e[t+3]=_*b-c*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(r/2),_=c(a/2),g=c(l/2),x=h(r/2),S=h(a/2),b=h(l/2);switch(f){case"XYZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"YXZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"ZXY":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"ZYX":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"YZX":this._x=x*_*g+p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g-x*S*b;break;case"XZY":this._x=x*_*g-p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g+x*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],_=t[6],g=t[10],x=r+c+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+f*c+a*p-l*h,this._y=a*_+f*h+l*c-r*p,this._z=l*_+f*p+r*h-a*c,this._w=f*_-r*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(h),_=Math.atan2(p,c),g=Math.sin((1-t)*_)/p,x=Math.sin(t*_)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(l),r*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=h*t+f*a-c*r,_=h*r+c*t-l*a,g=h*a+l*r-f*t,x=-l*t-f*r-c*a;return this.x=p*h+x*-l+_*-c-g*-f,this.y=_*h+x*-f+g*-l-p*-c,this.z=g*h+x*-c+p*-f-_*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new ee,mg=new ya;class Sa{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,a=1/0,l=-1/0,f=-1/0,c=-1/0;for(let h=0,p=e.length;h<p;h+=3){const _=e[h],g=e[h+1],x=e[h+2];_<t&&(t=_),g<r&&(r=g),x<a&&(a=x),_>l&&(l=_),g>f&&(f=g),x>c&&(c=x)}return this.min.set(t,r,a),this.max.set(l,f,c),this}setFromBufferAttribute(e){let t=1/0,r=1/0,a=1/0,l=-1/0,f=-1/0,c=-1/0;for(let h=0,p=e.count;h<p;h++){const _=e.getX(h),g=e.getY(h),x=e.getZ(h);_<t&&(t=_),g<r&&(r=g),x<a&&(a=x),_>l&&(l=_),g>f&&(f=g),x>c&&(c=x)}return this.min.set(t,r,a),this.max.set(l,f,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const l=r.attributes.position;for(let f=0,c=l.count;f<c;f++)Yr.fromBufferAttribute(l,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Yr)}else r.boundingBox===null&&r.computeBoundingBox(),Rf.copy(r.boundingBox),Rf.applyMatrix4(e.matrixWorld),this.union(Rf);const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yr),Yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),kl.subVectors(this.max,ia),Vs.subVectors(e.a,ia),Gs.subVectors(e.b,ia),Ws.subVectors(e.c,ia),Mr.subVectors(Gs,Vs),br.subVectors(Ws,Gs),Kr.subVectors(Vs,Ws);let t=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-Kr.z,Kr.y,Mr.z,0,-Mr.x,br.z,0,-br.x,Kr.z,0,-Kr.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-Kr.y,Kr.x,0];return!Df(t,Vs,Gs,Ws,kl)||(t=[1,0,0,0,1,0,0,0,1],!Df(t,Vs,Gs,Ws,kl))?!1:(zl.crossVectors(Mr,br),t=[zl.x,zl.y,zl.z],Df(t,Vs,Gs,Ws,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Yr=new ee,Rf=new Sa,Vs=new ee,Gs=new ee,Ws=new ee,Mr=new ee,br=new ee,Kr=new ee,ia=new ee,kl=new ee,zl=new ee,Zr=new ee;function Df(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Zr.fromArray(s,l);const c=a.x*Math.abs(Zr.x)+a.y*Math.abs(Zr.y)+a.z*Math.abs(Zr.z),h=e.dot(Zr),p=t.dot(Zr),_=r.dot(Zr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>c)return!1}return!0}const pw=new Sa,gg=new ee,Fl=new ee,If=new ee;class Ad{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):pw.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){If.subVectors(e,this.center);const t=If.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.add(If.multiplyScalar(a/r)),this.radius+=a}return this}union(e){return this.center.equals(e.center)===!0?Fl.set(0,0,1).multiplyScalar(e.radius):Fl.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gg.copy(e.center).add(Fl)),this.expandByPoint(gg.copy(e.center).sub(Fl)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new ee,kf=new ee,Nl=new ee,Er=new ee,zf=new ee,Ol=new ee,Ff=new ee;class mw{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.direction).multiplyScalar(t).add(this.origin),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){kf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(kf);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Nl),c=Er.dot(this.direction),h=-Er.dot(Nl),p=Er.lengthSq(),_=Math.abs(1-f*f);let g,x,S,b;if(_>0)if(g=f*h-c,x=f*c-h,b=l*_,g>=0)if(x>=-b)if(x<=b){const v=1/_;g*=v,x*=v,S=g*(g+f*x+2*c)+x*(f*g+x+2*h)+p}else x=l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;else x<=-b?(g=Math.max(0,-(-f*l+c)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=b?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(f*l+c)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=f>0?-l:l,g=Math.max(0,-(f*x+c)),S=-g*g+x*(x+2*h)+p;return r&&r.copy(this.direction).multiplyScalar(g).add(this.origin),a&&a.copy(Nl).multiplyScalar(x).add(kf),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return c<0&&h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||l>a||((l>r||r!==r)&&(r=l),(f<a||a!==a)&&(a=f),g>=0?(c=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(c=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){zf.subVectors(t,e),Ol.subVectors(r,e),Ff.crossVectors(zf,Ol);let f=this.direction.dot(Ff),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;Er.subVectors(this.origin,e);const h=c*this.direction.dot(Ol.crossVectors(Er,Ol));if(h<0)return null;const p=c*this.direction.dot(zf.cross(Er));if(p<0||h+p>f)return null;const _=-c*Er.dot(Ff);return _<0?null:this.at(_/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,a,l,f,c,h,p,_,g,x,S,b,v,y){const E=this.elements;return E[0]=e,E[4]=t,E[8]=r,E[12]=a,E[1]=l,E[5]=f,E[9]=c,E[13]=h,E[2]=p,E[6]=_,E[10]=g,E[14]=x,E[3]=S,E[7]=b,E[11]=v,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),f=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=f*_,S=f*g,b=c*_,v=c*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+b*p,t[5]=x-v*p,t[9]=-c*h,t[2]=v-x*p,t[6]=b+S*p,t[10]=f*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,b=p*_,v=p*g;t[0]=x+v*c,t[4]=b*c-S,t[8]=f*p,t[1]=f*g,t[5]=f*_,t[9]=-c,t[2]=S*c-b,t[6]=v+x*c,t[10]=f*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,b=p*_,v=p*g;t[0]=x-v*c,t[4]=-f*g,t[8]=b+S*c,t[1]=S+b*c,t[5]=f*_,t[9]=v-x*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const x=f*_,S=f*g,b=c*_,v=c*g;t[0]=h*_,t[4]=b*p-S,t[8]=x*p+v,t[1]=h*g,t[5]=v*p+x,t[9]=S*p-b,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*p,b=c*h,v=c*p;t[0]=h*_,t[4]=v-x*g,t[8]=b*g+S,t[1]=g,t[5]=f*_,t[9]=-c*_,t[2]=-p*_,t[6]=S*g+b,t[10]=x-v*g}else if(e.order==="XZY"){const x=f*h,S=f*p,b=c*h,v=c*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=x*g+v,t[5]=f*_,t[9]=S*g-b,t[2]=b*g-S,t[6]=c*_,t[10]=v*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gw,e,vw)}lookAt(e,t,r){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Tr.crossVectors(r,On),Tr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Tr.crossVectors(r,On)),Tr.normalize(),Ul.crossVectors(On,Tr),a[0]=Tr.x,a[4]=Ul.x,a[8]=On.x,a[1]=Tr.y,a[5]=Ul.y,a[9]=On.y,a[2]=Tr.z,a[6]=Ul.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],p=r[12],_=r[1],g=r[5],x=r[9],S=r[13],b=r[2],v=r[6],y=r[10],E=r[14],L=r[3],D=r[7],C=r[11],A=r[15],F=a[0],U=a[4],T=a[8],N=a[12],w=a[1],$=a[5],ce=a[9],X=a[13],q=a[2],ne=a[6],de=a[10],fe=a[14],H=a[3],B=a[7],V=a[11],I=a[15];return l[0]=f*F+c*w+h*q+p*H,l[4]=f*U+c*$+h*ne+p*B,l[8]=f*T+c*ce+h*de+p*V,l[12]=f*N+c*X+h*fe+p*I,l[1]=_*F+g*w+x*q+S*H,l[5]=_*U+g*$+x*ne+S*B,l[9]=_*T+g*ce+x*de+S*V,l[13]=_*N+g*X+x*fe+S*I,l[2]=b*F+v*w+y*q+E*H,l[6]=b*U+v*$+y*ne+E*B,l[10]=b*T+v*ce+y*de+E*V,l[14]=b*N+v*X+y*fe+E*I,l[3]=L*F+D*w+C*q+A*H,l[7]=L*U+D*$+C*ne+A*B,l[11]=L*T+D*ce+C*de+A*V,l[15]=L*N+D*X+C*fe+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],b=e[3],v=e[7],y=e[11],E=e[15];return b*(+l*h*g-a*p*g-l*c*x+r*p*x+a*c*S-r*h*S)+v*(+t*h*S-t*p*x+l*f*x-a*f*S+a*p*_-l*h*_)+y*(+t*p*g-t*c*S-l*f*g+r*f*S+l*c*_-r*p*_)+E*(-a*c*_-t*h*g+t*c*x+a*f*g-r*f*x+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],b=e[12],v=e[13],y=e[14],E=e[15],L=g*y*p-v*x*p+v*h*S-c*y*S-g*h*E+c*x*E,D=b*x*p-_*y*p-b*h*S+f*y*S+_*h*E-f*x*E,C=_*v*p-b*g*p+b*c*S-f*v*S-_*c*E+f*g*E,A=b*g*h-_*v*h-b*c*x+f*v*x+_*c*y-f*g*y,F=t*L+r*D+a*C+l*A;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=L*U,e[1]=(v*x*l-g*y*l-v*a*S+r*y*S+g*a*E-r*x*E)*U,e[2]=(c*y*l-v*h*l+v*a*p-r*y*p-c*a*E+r*h*E)*U,e[3]=(g*h*l-c*x*l-g*a*p+r*x*p+c*a*S-r*h*S)*U,e[4]=D*U,e[5]=(_*y*l-b*x*l+b*a*S-t*y*S-_*a*E+t*x*E)*U,e[6]=(b*h*l-f*y*l-b*a*p+t*y*p+f*a*E-t*h*E)*U,e[7]=(f*x*l-_*h*l+_*a*p-t*x*p-f*a*S+t*h*S)*U,e[8]=C*U,e[9]=(b*g*l-_*v*l-b*r*S+t*v*S+_*r*E-t*g*E)*U,e[10]=(f*v*l-b*c*l+b*r*p-t*v*p-f*r*E+t*c*E)*U,e[11]=(_*c*l-f*g*l-_*r*p+t*g*p+f*r*S-t*c*S)*U,e[12]=A*U,e[13]=(_*v*a-b*g*a+b*r*x-t*v*x-_*r*y+t*g*y)*U,e[14]=(b*c*a-f*v*a-b*r*h+t*v*h+f*r*y-t*c*y)*U,e[15]=(f*g*a-_*c*a+_*r*h-t*g*h-f*r*x+t*c*x)*U,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,p=l*f,_=l*c;return this.set(p*f+r,p*c-a*h,p*h+a*c,0,p*c+a*h,_*c+r,_*h-a*f,0,p*h-a*c,_*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,_=f+f,g=c+c,x=l*p,S=l*_,b=l*g,v=f*_,y=f*g,E=c*g,L=h*p,D=h*_,C=h*g,A=r.x,F=r.y,U=r.z;return a[0]=(1-(v+E))*A,a[1]=(S+C)*A,a[2]=(b-D)*A,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+E))*F,a[6]=(y+L)*F,a[7]=0,a[8]=(b+D)*U,a[9]=(y-L)*U,a[10]=(1-(x+v))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Hs.set(a[0],a[1],a[2]).length();const f=Hs.set(a[4],a[5],a[6]).length(),c=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],pi.copy(this);const p=1/l,_=1/f,g=1/c;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=g,pi.elements[9]*=g,pi.elements[10]*=g,t.setFromRotationMatrix(pi),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f){const c=this.elements,h=2*l/(t-e),p=2*l/(r-a),_=(t+e)/(t-e),g=(r+a)/(r-a),x=-(f+l)/(f-l),S=-2*f*l/(f-l);return c[0]=h,c[4]=0,c[8]=_,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,a,l,f){const c=this.elements,h=1/(t-e),p=1/(r-a),_=1/(f-l),g=(t+e)*h,x=(r+a)*p,S=(f+l)*_;return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=-2*_,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hs=new ee,pi=new on,gw=new ee(0,0,0),vw=new ee(1,1,1),Tr=new ee,Ul=new ee,On=new ee,vg=new on,_g=new ya;class wa{constructor(e=0,t=0,r=0,a=wa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Bn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wa.DefaultOrder="XYZ";wa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _w=0;const xg=new ee,$s=new ya,$i=new on,Bl=new ee,ra=new ee,xw=new ee,yw=new ya,yg=new ee(1,0,0),Sg=new ee(0,1,0),wg=new ee(0,0,1),Sw={type:"added"},Mg={type:"removed"};class Hn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DefaultUp.clone();const e=new ee,t=new wa,r=new ya,a=new ee(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new ni}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Hn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Hn.DefaultMatrixWorldAutoUpdate,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,t){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Bl.copy(e):Bl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ra,Bl,this.up):$i.lookAt(Bl,ra,this.up),this.quaternion.setFromRotationMatrix($i),a&&($i.extractRotation(a.matrixWorld),$s.setFromRotationMatrix($i),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,xw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,yw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),b=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=a,r;function f(c){const h=[];for(const p in c){const _=c[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Hn.DefaultUp=new ee(0,1,0);Hn.DefaultMatrixAutoUpdate=!0;Hn.DefaultMatrixWorldAutoUpdate=!0;const mi=new ee,ji=new ee,Nf=new ee,qi=new ee,js=new ee,qs=new ee,bg=new ee,Of=new ee,Uf=new ee,Bf=new ee;class Ki{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),mi.subVectors(e,t),a.cross(mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){mi.subVectors(a,t),ji.subVectors(r,t),Nf.subVectors(e,t);const f=mi.dot(mi),c=mi.dot(ji),h=mi.dot(Nf),p=ji.dot(ji),_=ji.dot(Nf),g=f*p-c*c;if(g===0)return l.set(-2,-1,-1);const x=1/g,S=(p*h-c*_)*x,b=(f*_-c*h)*x;return l.set(1-S-b,b,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,qi),qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,qi),h.set(0,0),h.addScaledVector(l,qi.x),h.addScaledVector(f,qi.y),h.addScaledVector(c,qi.z),h}static isFrontFacing(e,t,r,a){return mi.subVectors(r,t),ji.subVectors(e,t),mi.cross(ji).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,a,l){return Ki.getUV(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;js.subVectors(a,r),qs.subVectors(l,r),Of.subVectors(e,r);const h=js.dot(Of),p=qs.dot(Of);if(h<=0&&p<=0)return t.copy(r);Uf.subVectors(e,a);const _=js.dot(Uf),g=qs.dot(Uf);if(_>=0&&g<=_)return t.copy(a);const x=h*g-_*p;if(x<=0&&h>=0&&_<=0)return f=h/(h-_),t.copy(r).addScaledVector(js,f);Bf.subVectors(e,l);const S=js.dot(Bf),b=qs.dot(Bf);if(b>=0&&S<=b)return t.copy(l);const v=S*p-h*b;if(v<=0&&p>=0&&b<=0)return c=p/(p-b),t.copy(r).addScaledVector(qs,c);const y=_*b-S*g;if(y<=0&&g-_>=0&&S-b>=0)return bg.subVectors(l,a),c=(g-_)/(g-_+(S-b)),t.copy(a).addScaledVector(bg,c);const E=1/(y+v+x);return f=v*E,c=x*E,t.copy(r).addScaledVector(js,f).addScaledVector(qs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ww=0;class wu extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=ro,this.side=fo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=D0,this.blendDst=I0,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ad,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bf,this.stencilZFail=bf,this.stencilZPass=bf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const a=this[t];if(a===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==fo&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class W0 extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ee,Vl=new ft;class Di{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=fg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class H0 extends Di{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $0 extends Di{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class os extends Di{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Mw=0;const Qn=new on,Vf=new Hn,Xs=new ee,Un=new Sa,sa=new Sa,Qt=new ee;class fs extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?$0:H0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ni().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return Vf.lookAt(e),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new os(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Un.setFromBufferAttribute(l),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];sa.setFromBufferAttribute(c),this.morphTargetsRelative?(Qt.addVectors(Un.min,sa.min),Un.expandByPoint(Qt),Qt.addVectors(Un.max,sa.max),Un.expandByPoint(Qt)):(Un.expandByPoint(sa.min),Un.expandByPoint(sa.max))}Un.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)Qt.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Qt));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)Qt.fromBufferAttribute(c,p),h&&(Xs.fromBufferAttribute(e,p),Qt.add(Xs)),a=Math.max(a,r.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,l=t.normal.array,f=t.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,p=[],_=[];for(let w=0;w<c;w++)p[w]=new ee,_[w]=new ee;const g=new ee,x=new ee,S=new ee,b=new ft,v=new ft,y=new ft,E=new ee,L=new ee;function D(w,$,ce){g.fromArray(a,w*3),x.fromArray(a,$*3),S.fromArray(a,ce*3),b.fromArray(f,w*2),v.fromArray(f,$*2),y.fromArray(f,ce*2),x.sub(g),S.sub(g),v.sub(b),y.sub(b);const X=1/(v.x*y.y-y.x*v.y);isFinite(X)&&(E.copy(x).multiplyScalar(y.y).addScaledVector(S,-v.y).multiplyScalar(X),L.copy(S).multiplyScalar(v.x).addScaledVector(x,-y.x).multiplyScalar(X),p[w].add(E),p[$].add(E),p[ce].add(E),_[w].add(L),_[$].add(L),_[ce].add(L))}let C=this.groups;C.length===0&&(C=[{start:0,count:r.length}]);for(let w=0,$=C.length;w<$;++w){const ce=C[w],X=ce.start,q=ce.count;for(let ne=X,de=X+q;ne<de;ne+=3)D(r[ne+0],r[ne+1],r[ne+2])}const A=new ee,F=new ee,U=new ee,T=new ee;function N(w){U.fromArray(l,w*3),T.copy(U);const $=p[w];A.copy($),A.sub(U.multiplyScalar(U.dot($))).normalize(),F.crossVectors(T,$);const X=F.dot(_[w])<0?-1:1;h[w*4]=A.x,h[w*4+1]=A.y,h[w*4+2]=A.z,h[w*4+3]=X}for(let w=0,$=C.length;w<$;++w){const ce=C[w],X=ce.start,q=ce.count;for(let ne=X,de=X+q;ne<de;ne+=3)N(r[ne+0]),N(r[ne+1]),N(r[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ee,l=new ee,f=new ee,c=new ee,h=new ee,p=new ee,_=new ee,g=new ee;if(e)for(let x=0,S=e.count;x<S;x+=3){const b=e.getX(x+0),v=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,b),l.fromBufferAttribute(t,v),f.fromBufferAttribute(t,y),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),c.fromBufferAttribute(r,b),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,y),c.add(_),h.add(_),p.add(_),r.setXYZ(b,c.x,c.y,c.z),r.setXYZ(v,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),f.fromBufferAttribute(t,x+2),_.subVectors(f,l),g.subVectors(a,l),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(c,h){const p=c.array,_=c.itemSize,g=c.normalized,x=new p.constructor(h.length*_);let S=0,b=0;for(let v=0,y=h.length;v<y;v++){c.isInterleavedBufferAttribute?S=h[v]*c.data.stride+c.offset:S=h[v]*_;for(let E=0;E<_;E++)x[b++]=p[S++]}return new Di(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,r);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eg=new on,Ys=new mw,Gf=new Ad,Cr=new ee,Ar=new ee,Pr=new ee,Wf=new ee,Hf=new ee,$f=new ee,Gl=new ee,Wl=new ee,Hl=new ee,$l=new ft,jl=new ft,ql=new ft,jf=new ee,Xl=new ee;class Zi extends Hn{constructor(e=new fs,t=new W0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;if(a===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Gf.copy(r.boundingSphere),Gf.applyMatrix4(l),e.ray.intersectsSphere(Gf)===!1)||(Eg.copy(l).invert(),Ys.copy(e.ray).applyMatrix4(Eg),r.boundingBox!==null&&Ys.intersectsBox(r.boundingBox)===!1))return;let f;const c=r.index,h=r.attributes.position,p=r.morphAttributes.position,_=r.morphTargetsRelative,g=r.attributes.uv,x=r.attributes.uv2,S=r.groups,b=r.drawRange;if(c!==null)if(Array.isArray(a))for(let v=0,y=S.length;v<y;v++){const E=S[v],L=a[E.materialIndex],D=Math.max(E.start,b.start),C=Math.min(c.count,Math.min(E.start+E.count,b.start+b.count));for(let A=D,F=C;A<F;A+=3){const U=c.getX(A),T=c.getX(A+1),N=c.getX(A+2);f=Yl(this,L,e,Ys,h,p,_,g,x,U,T,N),f&&(f.faceIndex=Math.floor(A/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const v=Math.max(0,b.start),y=Math.min(c.count,b.start+b.count);for(let E=v,L=y;E<L;E+=3){const D=c.getX(E),C=c.getX(E+1),A=c.getX(E+2);f=Yl(this,a,e,Ys,h,p,_,g,x,D,C,A),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}else if(h!==void 0)if(Array.isArray(a))for(let v=0,y=S.length;v<y;v++){const E=S[v],L=a[E.materialIndex],D=Math.max(E.start,b.start),C=Math.min(h.count,Math.min(E.start+E.count,b.start+b.count));for(let A=D,F=C;A<F;A+=3){const U=A,T=A+1,N=A+2;f=Yl(this,L,e,Ys,h,p,_,g,x,U,T,N),f&&(f.faceIndex=Math.floor(A/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const v=Math.max(0,b.start),y=Math.min(h.count,b.start+b.count);for(let E=v,L=y;E<L;E+=3){const D=E,C=E+1,A=E+2;f=Yl(this,a,e,Ys,h,p,_,g,x,D,C,A),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}}}function bw(s,e,t,r,a,l,f,c){let h;if(e.side===ii?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side!==Lr,c),h===null)return null;Xl.copy(c),Xl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Xl);return p<t.near||p>t.far?null:{distance:p,point:Xl.clone(),object:s}}function Yl(s,e,t,r,a,l,f,c,h,p,_,g){Cr.fromBufferAttribute(a,p),Ar.fromBufferAttribute(a,_),Pr.fromBufferAttribute(a,g);const x=s.morphTargetInfluences;if(l&&x){Gl.set(0,0,0),Wl.set(0,0,0),Hl.set(0,0,0);for(let b=0,v=l.length;b<v;b++){const y=x[b],E=l[b];y!==0&&(Wf.fromBufferAttribute(E,p),Hf.fromBufferAttribute(E,_),$f.fromBufferAttribute(E,g),f?(Gl.addScaledVector(Wf,y),Wl.addScaledVector(Hf,y),Hl.addScaledVector($f,y)):(Gl.addScaledVector(Wf.sub(Cr),y),Wl.addScaledVector(Hf.sub(Ar),y),Hl.addScaledVector($f.sub(Pr),y)))}Cr.add(Gl),Ar.add(Wl),Pr.add(Hl)}s.isSkinnedMesh&&(s.boneTransform(p,Cr),s.boneTransform(_,Ar),s.boneTransform(g,Pr));const S=bw(s,e,t,r,Cr,Ar,Pr,jf);if(S){c&&($l.fromBufferAttribute(c,p),jl.fromBufferAttribute(c,_),ql.fromBufferAttribute(c,g),S.uv=Ki.getUV(jf,Cr,Ar,Pr,$l,jl,ql,new ft)),h&&($l.fromBufferAttribute(h,p),jl.fromBufferAttribute(h,_),ql.fromBufferAttribute(h,g),S.uv2=Ki.getUV(jf,Cr,Ar,Pr,$l,jl,ql,new ft));const b={a:p,b:_,c:g,normal:new ee,materialIndex:0};Ki.getNormal(Cr,Ar,Pr,b.normal),S.face=b}return S}class Ma extends fs{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],_=[],g=[];let x=0,S=0;b("z","y","x",-1,-1,r,t,e,f,l,0),b("z","y","x",1,-1,r,t,-e,f,l,1),b("x","z","y",1,1,e,r,t,a,f,2),b("x","z","y",1,-1,e,r,-t,a,f,3),b("x","y","z",1,-1,e,t,r,a,l,4),b("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new os(p,3)),this.setAttribute("normal",new os(_,3)),this.setAttribute("uv",new os(g,2));function b(v,y,E,L,D,C,A,F,U,T,N){const w=C/U,$=A/T,ce=C/2,X=A/2,q=F/2,ne=U+1,de=T+1;let fe=0,H=0;const B=new ee;for(let V=0;V<de;V++){const I=V*$-X;for(let W=0;W<ne;W++){const re=W*w-ce;B[v]=re*L,B[y]=I*D,B[E]=q,p.push(B.x,B.y,B.z),B[v]=0,B[y]=0,B[E]=F>0?1:-1,_.push(B.x,B.y,B.z),g.push(W/U),g.push(1-V/T),fe+=1}}for(let V=0;V<T;V++)for(let I=0;I<U;I++){const W=x+I+ne*V,re=x+I+ne*(V+1),me=x+(I+1)+ne*(V+1),we=x+(I+1)+ne*V;h.push(W,re,we),h.push(re,me,we),H+=6}c.addGroup(S,H,N),S+=H,x+=fe}}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function mn(s){const e={};for(let t=0;t<s.length;t++){const r=go(s[t]);for(const a in r)e[a]=r[a]}return e}function Ew(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const Tw={clone:go,merge:mn};var Cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cw,this.fragmentShader=Aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Ew(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class j0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ti extends j0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hg*2*Math.atan(Math.tan(Ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ef*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=90,Zs=1;class Pw extends Hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const a=new ti(Ks,Zs,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new ee(1,0,0)),this.add(a);const l=new ti(Ks,Zs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new ee(-1,0,0)),this.add(l);const f=new ti(Ks,Zs,e,t);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new ee(0,1,0)),this.add(f);const c=new ti(Ks,Zs,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new ee(0,-1,0)),this.add(c);const h=new ti(Ks,Zs,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new ee(0,0,1)),this.add(h);const p=new ti(Ks,Zs,e,t);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new ee(0,0,-1)),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[a,l,f,c,h,p]=this.children,_=e.getRenderTarget(),g=e.toneMapping,x=e.xr.enabled;e.toneMapping=Qi,e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,a),e.setRenderTarget(r,1),e.render(t,l),e.setRenderTarget(r,2),e.render(t,f),e.setRenderTarget(r,3),e.render(t,c),e.setRenderTarget(r,4),e.render(t,h),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(t,p),e.setRenderTarget(_),e.toneMapping=g,e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class q0 extends vi{constructor(e,t,r,a,l,f,c,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:ho,super(e,t,r,a,l,f,c,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lw extends cs{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new q0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ma(5,5,5),l=new Ir({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Rr});l.uniforms.tEquirect.value=t;const f=new Zi(a,l),c=t.minFilter;return t.minFilter===Su&&(t.minFilter=ei),new Pw(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const qf=new ee,Rw=new ee,Dw=new ni;class Qr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=qf.subVectors(r,t).cross(Rw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(qf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(r).multiplyScalar(l).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Dw.getNormalMatrix(e),a=this.coplanarPoint(qf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new Ad,Kl=new ee;class X0{constructor(e=new Qr,t=new Qr,r=new Qr,a=new Qr,l=new Qr,f=new Qr){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,a=r[0],l=r[1],f=r[2],c=r[3],h=r[4],p=r[5],_=r[6],g=r[7],x=r[8],S=r[9],b=r[10],v=r[11],y=r[12],E=r[13],L=r[14],D=r[15];return t[0].setComponents(c-a,g-h,v-x,D-y).normalize(),t[1].setComponents(c+a,g+h,v+x,D+y).normalize(),t[2].setComponents(c+l,g+p,v+S,D+E).normalize(),t[3].setComponents(c-l,g-p,v-S,D-E).normalize(),t[4].setComponents(c-f,g-_,v-b,D-L).normalize(),t[5].setComponents(c+f,g+_,v+b,D+L).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Kl.x=a.normal.x>0?e.max.x:e.min.x,Kl.y=a.normal.y>0?e.max.y:e.min.y,Kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y0(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Iw(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,_){const g=p.array,x=p.usage,S=s.createBuffer();s.bindBuffer(_,S),s.bufferData(_,g,x),p.onUploadCallback();let b;if(g instanceof Float32Array)b=5126;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(g instanceof Int16Array)b=5122;else if(g instanceof Uint32Array)b=5125;else if(g instanceof Int32Array)b=5124;else if(g instanceof Int8Array)b=5120;else if(g instanceof Uint8Array)b=5121;else if(g instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version}}function l(p,_,g){const x=_.array,S=_.updateRange;s.bindBuffer(g,p),S.count===-1?s.bufferSubData(g,0,x):(t?s.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):s.bufferSubData(g,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);_&&(s.deleteBuffer(_.buffer),r.delete(p))}function h(p,_){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g===void 0?r.set(p,a(p,_)):g.version<p.version&&(l(g.buffer,p,_),g.version=p.version)}return{get:f,remove:c,update:h}}class Mu extends fs{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),p=c+1,_=h+1,g=e/c,x=t/h,S=[],b=[],v=[],y=[];for(let E=0;E<_;E++){const L=E*x-f;for(let D=0;D<p;D++){const C=D*g-l;b.push(C,-L,0),v.push(0,0,1),y.push(D/c),y.push(1-E/h)}}for(let E=0;E<h;E++)for(let L=0;L<c;L++){const D=L+p*E,C=L+p*(E+1),A=L+1+p*(E+1),F=L+1+p*E;S.push(D,C,F),S.push(C,A,F)}this.setIndex(S),this.setAttribute("position",new os(b,3)),this.setAttribute("normal",new os(v,3)),this.setAttribute("uv",new os(y,2))}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ow=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bw="vec3 transformed = vec3( position );",Vw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ww=`#ifdef USE_IRIDESCENCE
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
#endif`,Hw=`#ifdef USE_BUMPMAP
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
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jw=`#define PI 3.141592653589793
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
}`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tM=`vec3 transformedNormal = objectNormal;
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
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",aM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,wM=`uniform bool receiveShadow;
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
#endif`,MM=`#if defined( USE_ENVMAP )
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
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,AM=`PhysicalMaterial material;
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
#endif`,PM=`struct PhysicalMaterial {
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
}`,LM=`
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
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
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
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
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,XM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
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
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,e2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,t2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,n2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h2=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p2=`float getShadowMask() {
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
}`,m2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g2=`#ifdef USE_SKINNING
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
#endif`,v2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,x2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#ifdef USE_TRANSMISSION
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
#endif`,E2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,T2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,C2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,A2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,P2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,L2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,R2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`#include <envmap_common_pars_fragment>
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
}`,F2=`#include <common>
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
}`,N2=`#if DEPTH_PACKING == 3200
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
}`,O2=`#define DISTANCE
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
}`,U2=`#define DISTANCE
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,G2=`uniform float scale;
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
}`,W2=`uniform vec3 diffuse;
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
}`,H2=`#include <common>
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
}`,$2=`uniform vec3 diffuse;
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
}`,j2=`#define LAMBERT
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
}`,q2=`#define LAMBERT
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
}`,X2=`#define MATCAP
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
}`,Y2=`#define MATCAP
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
}`,K2=`#define NORMAL
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
}`,Z2=`#define NORMAL
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
}`,Q2=`#define PHONG
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
}`,J2=`#define PHONG
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
}`,e3=`#define STANDARD
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
}`,t3=`#define STANDARD
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
}`,n3=`#define TOON
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
}`,i3=`#define TOON
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
}`,r3=`uniform float size;
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
}`,s3=`uniform vec3 diffuse;
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
}`,o3=`#include <common>
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
}`,a3=`uniform vec3 color;
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
}`,l3=`uniform float rotation;
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
}`,u3=`uniform vec3 diffuse;
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
}`,Qe={alphamap_fragment:kw,alphamap_pars_fragment:zw,alphatest_fragment:Fw,alphatest_pars_fragment:Nw,aomap_fragment:Ow,aomap_pars_fragment:Uw,begin_vertex:Bw,beginnormal_vertex:Vw,bsdfs:Gw,iridescence_fragment:Ww,bumpmap_pars_fragment:Hw,clipping_planes_fragment:$w,clipping_planes_pars_fragment:jw,clipping_planes_pars_vertex:qw,clipping_planes_vertex:Xw,color_fragment:Yw,color_pars_fragment:Kw,color_pars_vertex:Zw,color_vertex:Qw,common:Jw,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:sM,encodings_fragment:oM,encodings_pars_fragment:aM,envmap_fragment:lM,envmap_common_pars_fragment:uM,envmap_pars_fragment:cM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:MM,envmap_vertex:dM,fog_vertex:hM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_fragment:_M,lightmap_pars_fragment:xM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:SM,lights_pars_begin:wM,lights_toon_fragment:bM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:CM,lights_physical_fragment:AM,lights_physical_pars_fragment:PM,lights_fragment_begin:LM,lights_fragment_maps:RM,lights_fragment_end:DM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:FM,map_fragment:NM,map_pars_fragment:OM,map_particle_fragment:UM,map_particle_pars_fragment:BM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:GM,morphcolor_vertex:WM,morphnormal_vertex:HM,morphtarget_pars_vertex:$M,morphtarget_vertex:jM,normal_fragment_begin:qM,normal_fragment_maps:XM,normal_pars_fragment:YM,normal_pars_vertex:KM,normal_vertex:ZM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:e2,clearcoat_pars_fragment:t2,iridescence_pars_fragment:n2,output_fragment:i2,packing:r2,premultiplied_alpha_fragment:s2,project_vertex:o2,dithering_fragment:a2,dithering_pars_fragment:l2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:c2,shadowmap_pars_fragment:f2,shadowmap_pars_vertex:d2,shadowmap_vertex:h2,shadowmask_pars_fragment:p2,skinbase_vertex:m2,skinning_pars_vertex:g2,skinning_vertex:v2,skinnormal_vertex:_2,specularmap_fragment:x2,specularmap_pars_fragment:y2,tonemapping_fragment:S2,tonemapping_pars_fragment:w2,transmission_fragment:M2,transmission_pars_fragment:b2,uv_pars_fragment:E2,uv_pars_vertex:T2,uv_vertex:C2,uv2_pars_fragment:A2,uv2_pars_vertex:P2,uv2_vertex:L2,worldpos_vertex:R2,background_vert:D2,background_frag:I2,cube_vert:k2,cube_frag:z2,depth_vert:F2,depth_frag:N2,distanceRGBA_vert:O2,distanceRGBA_frag:U2,equirect_vert:B2,equirect_frag:V2,linedashed_vert:G2,linedashed_frag:W2,meshbasic_vert:H2,meshbasic_frag:$2,meshlambert_vert:j2,meshlambert_frag:q2,meshmatcap_vert:X2,meshmatcap_frag:Y2,meshnormal_vert:K2,meshnormal_frag:Z2,meshphong_vert:Q2,meshphong_frag:J2,meshphysical_vert:e3,meshphysical_frag:t3,meshtoon_vert:n3,meshtoon_frag:i3,points_vert:r3,points_frag:s3,shadow_vert:o3,shadow_frag:a3,sprite_vert:l3,sprite_frag:u3},ye={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ni},uv2Transform:{value:new ni},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ni}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ni}}},Pi={basic:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ni},t2D:{value:null}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},cube:{uniforms:mn([ye.envmap,{opacity:{value:1}}]),vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:mn([ye.common,ye.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:mn([ye.lights,ye.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Pi.physical={uniforms:mn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ft(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};function c3(s,e,t,r,a,l){const f=new _t(0);let c=a===!0?0:1,h,p,_=null,g=0,x=null;function S(v,y){let E=!1,L=y.isScene===!0?y.background:null;L&&L.isTexture&&(L=e.get(L));const D=s.xr,C=D.getSession&&D.getSession();C&&C.environmentBlendMode==="additive"&&(L=null),L===null?b(f,c):L&&L.isColor&&(b(L,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),L&&(L.isCubeTexture||L.mapping===yu)?(p===void 0&&(p=new Zi(new Ma(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:go(Pi.cube.uniforms),vertexShader:Pi.cube.vertexShader,fragmentShader:Pi.cube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(A,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,(_!==L||g!==L.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,g=L.version,x=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Zi(new Mu(2,2),new Ir({name:"BackgroundMaterial",uniforms:go(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:fo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,_=L,g=L.version,x=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function b(v,y){t.buffers.color.setClear(v.r,v.g,v.b,y,l)}return{getClearColor:function(){return f},setClearColor:function(v,y=1){f.set(v),c=y,b(f,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,b(f,c)},render:S}}function f3(s,e,t,r){const a=s.getParameter(34921),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=y(null);let p=h,_=!1;function g(q,ne,de,fe,H){let B=!1;if(f){const V=v(fe,de,ne);p!==V&&(p=V,S(p.object)),B=E(q,fe,de,H),B&&L(q,fe,de,H)}else{const V=ne.wireframe===!0;(p.geometry!==fe.id||p.program!==de.id||p.wireframe!==V)&&(p.geometry=fe.id,p.program=de.id,p.wireframe=V,B=!0)}H!==null&&t.update(H,34963),(B||_)&&(_=!1,T(q,ne,de,fe),H!==null&&s.bindBuffer(34963,t.get(H).buffer))}function x(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(q){return r.isWebGL2?s.bindVertexArray(q):l.bindVertexArrayOES(q)}function b(q){return r.isWebGL2?s.deleteVertexArray(q):l.deleteVertexArrayOES(q)}function v(q,ne,de){const fe=de.wireframe===!0;let H=c[q.id];H===void 0&&(H={},c[q.id]=H);let B=H[ne.id];B===void 0&&(B={},H[ne.id]=B);let V=B[fe];return V===void 0&&(V=y(x()),B[fe]=V),V}function y(q){const ne=[],de=[],fe=[];for(let H=0;H<a;H++)ne[H]=0,de[H]=0,fe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:de,attributeDivisors:fe,object:q,attributes:{},index:null}}function E(q,ne,de,fe){const H=p.attributes,B=ne.attributes;let V=0;const I=de.getAttributes();for(const W in I)if(I[W].location>=0){const me=H[W];let we=B[W];if(we===void 0&&(W==="instanceMatrix"&&q.instanceMatrix&&(we=q.instanceMatrix),W==="instanceColor"&&q.instanceColor&&(we=q.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;V++}return p.attributesNum!==V||p.index!==fe}function L(q,ne,de,fe){const H={},B=ne.attributes;let V=0;const I=de.getAttributes();for(const W in I)if(I[W].location>=0){let me=B[W];me===void 0&&(W==="instanceMatrix"&&q.instanceMatrix&&(me=q.instanceMatrix),W==="instanceColor"&&q.instanceColor&&(me=q.instanceColor));const we={};we.attribute=me,me&&me.data&&(we.data=me.data),H[W]=we,V++}p.attributes=H,p.attributesNum=V,p.index=fe}function D(){const q=p.newAttributes;for(let ne=0,de=q.length;ne<de;ne++)q[ne]=0}function C(q){A(q,0)}function A(q,ne){const de=p.newAttributes,fe=p.enabledAttributes,H=p.attributeDivisors;de[q]=1,fe[q]===0&&(s.enableVertexAttribArray(q),fe[q]=1),H[q]!==ne&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,ne),H[q]=ne)}function F(){const q=p.newAttributes,ne=p.enabledAttributes;for(let de=0,fe=ne.length;de<fe;de++)ne[de]!==q[de]&&(s.disableVertexAttribArray(de),ne[de]=0)}function U(q,ne,de,fe,H,B){r.isWebGL2===!0&&(de===5124||de===5125)?s.vertexAttribIPointer(q,ne,de,H,B):s.vertexAttribPointer(q,ne,de,fe,H,B)}function T(q,ne,de,fe){if(r.isWebGL2===!1&&(q.isInstancedMesh||fe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const H=fe.attributes,B=de.getAttributes(),V=ne.defaultAttributeValues;for(const I in B){const W=B[I];if(W.location>=0){let re=H[I];if(re===void 0&&(I==="instanceMatrix"&&q.instanceMatrix&&(re=q.instanceMatrix),I==="instanceColor"&&q.instanceColor&&(re=q.instanceColor)),re!==void 0){const me=re.normalized,we=re.itemSize,te=t.get(re);if(te===void 0)continue;const Ne=te.buffer,be=te.type,Le=te.bytesPerElement;if(re.isInterleavedBufferAttribute){const Me=re.data,ot=Me.stride,Ye=re.offset;if(Me.isInstancedInterleavedBuffer){for(let Ue=0;Ue<W.locationSize;Ue++)A(W.location+Ue,Me.meshPerAttribute);q.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ue=0;Ue<W.locationSize;Ue++)C(W.location+Ue);s.bindBuffer(34962,Ne);for(let Ue=0;Ue<W.locationSize;Ue++)U(W.location+Ue,we/W.locationSize,be,me,ot*Le,(Ye+we/W.locationSize*Ue)*Le)}else{if(re.isInstancedBufferAttribute){for(let Me=0;Me<W.locationSize;Me++)A(W.location+Me,re.meshPerAttribute);q.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<W.locationSize;Me++)C(W.location+Me);s.bindBuffer(34962,Ne);for(let Me=0;Me<W.locationSize;Me++)U(W.location+Me,we/W.locationSize,be,me,we*Le,we/W.locationSize*Me*Le)}}else if(V!==void 0){const me=V[I];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(W.location,me);break;case 3:s.vertexAttrib3fv(W.location,me);break;case 4:s.vertexAttrib4fv(W.location,me);break;default:s.vertexAttrib1fv(W.location,me)}}}}F()}function N(){ce();for(const q in c){const ne=c[q];for(const de in ne){const fe=ne[de];for(const H in fe)b(fe[H].object),delete fe[H];delete ne[de]}delete c[q]}}function w(q){if(c[q.id]===void 0)return;const ne=c[q.id];for(const de in ne){const fe=ne[de];for(const H in fe)b(fe[H].object),delete fe[H];delete ne[de]}delete c[q.id]}function $(q){for(const ne in c){const de=c[ne];if(de[q.id]===void 0)continue;const fe=de[q.id];for(const H in fe)b(fe[H].object),delete fe[H];delete de[q.id]}}function ce(){X(),_=!0,p!==h&&(p=h,S(p.object))}function X(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:ce,resetDefaultState:X,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:$,initAttributes:D,enableAttribute:C,disableUnusedAttributes:F}}function d3(s,e,t,r){const a=r.isWebGL2;let l;function f(p){l=p}function c(p,_){s.drawArrays(l,p,_),t.update(_,l,1)}function h(p,_,g){if(g===0)return;let x,S;if(a)x=s,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](l,p,_,g),t.update(_,l,g)}this.setMode=f,this.render=c,this.renderInstances=h}function h3(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),_=t.logarithmicDepthBuffer===!0,g=s.getParameter(34930),x=s.getParameter(35660),S=s.getParameter(3379),b=s.getParameter(34076),v=s.getParameter(34921),y=s.getParameter(36347),E=s.getParameter(36348),L=s.getParameter(36349),D=x>0,C=f||e.has("OES_texture_float"),A=D&&C,F=f?s.getParameter(36183):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:L,vertexTextures:D,floatFragmentTextures:C,floatVertexTextures:A,maxSamples:F}}function p3(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new Qr,c=new ni,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x,S){const b=g.length!==0||x||r!==0||a;return a=x,t=_(g,S,0),r=g.length,b},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1,p()},this.setState=function(g,x,S){const b=g.clippingPlanes,v=g.clipIntersection,y=g.clipShadows,E=s.get(g);if(!a||b===null||b.length===0||l&&!y)l?_(null):p();else{const L=l?0:r,D=L*4;let C=E.clippingState||null;h.value=C,C=_(b,x,D,S);for(let A=0;A!==D;++A)C[A]=t[A];E.clippingState=C,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,S,b){const v=g!==null?g.length:0;let y=null;if(v!==0){if(y=h.value,b!==!0||y===null){const E=S+v*4,L=x.matrixWorldInverse;c.getNormalMatrix(L),(y===null||y.length<E)&&(y=new Float32Array(E));for(let D=0,C=S;D!==v;++D,C+=4)f.copy(g[D]).applyMatrix4(L,c),f.normal.toArray(y,C),y[C+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function m3(s){let e=new WeakMap;function t(f,c){return c===ld?f.mapping=ho:c===ud&&(f.mapping=po),f}function r(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===ld||c===ud)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new Lw(h.height/2);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Pd extends j0{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=_*this.view.offsetY,h=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,Tg=[.125,.215,.35,.446,.526,.582],es=20,Xf=new Pd,Cg=new _t;let Yf=null;const Jr=(1+Math.sqrt(5))/2,Js=1/Jr,Ag=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Jr,Js),new ee(0,Jr,-Js),new ee(Js,0,Jr),new ee(-Js,0,Jr),new ee(Jr,Js,0),new ee(-Jr,Js,0)];class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Yf=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yf),e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yf=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:ma,format:Li,encoding:us,depthBuffer:!1},a=Lg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g3(l)),this._blurMaterial=v3(l,e,t)}return a}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,Xf)}_sceneToCubeUV(e,t,r,a){const c=new ti(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Cg),_.toneMapping=Qi,_.autoClear=!1;const S=new W0({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),b=new Zi(new Ma,S);let v=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,v=!0):(S.color.copy(Cg),v=!0);for(let E=0;E<6;E++){const L=E%3;L===0?(c.up.set(0,h[E],0),c.lookAt(p[E],0,0)):L===1?(c.up.set(0,0,h[E]),c.lookAt(0,p[E],0)):(c.up.set(0,h[E],0),c.lookAt(0,0,p[E]));const D=this._cubeSize;Zl(a,L*D,E>2?D:0,D,D),_.setRenderTarget(a),v&&_.render(b,c),_.render(e,c)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ho||e.mapping===po;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Zi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Zl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,Xf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Ag[(a-1)%Ag.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Zi(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*es-1),v=l/b,y=isFinite(l)?1+Math.floor(_*v):es;y>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const E=[];let L=0;for(let U=0;U<es;++U){const T=U/v,N=Math.exp(-T*T/2);E.push(N),U===0?L+=N:U<y&&(L+=2*N)}for(let U=0;U<E.length;U++)E[U]=E[U]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=E,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const C=this._sizeLods[a],A=3*C*(a>D-to?a-D+to:0),F=4*(this._cubeSize-C);Zl(t,A,F,3*C,2*C),h.setRenderTarget(t),h.render(g,Xf)}}function g3(s){const e=[],t=[],r=[];let a=s;const l=s-to+1+Tg.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-to?h=Tg[f-s+to-1]:f===0&&(h=0),r.push(h);const p=1/(c-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,b=6,v=3,y=2,E=1,L=new Float32Array(v*b*S),D=new Float32Array(y*b*S),C=new Float32Array(E*b*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,T=F>2?0:-1,N=[U,T,0,U+2/3,T,0,U+2/3,T+1,0,U,T,0,U+2/3,T+1,0,U,T+1,0];L.set(N,v*b*F),D.set(x,y*b*F);const w=[F,F,F,F,F,F];C.set(w,E*b*F)}const A=new fs;A.setAttribute("position",new Di(L,v)),A.setAttribute("uv",new Di(D,y)),A.setAttribute("faceIndex",new Di(C,E)),e.push(A),a>to&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Lg(s,e,t){const r=new cs(s,e,t);return r.texture.mapping=yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function v3(s,e,t){const r=new Float32Array(es),a=new ee(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Rg(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Dg(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function _3(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,p=h===ld||h===ud,_=h===ho||h===po;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new Pg(s)),g=p?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(p&&g&&g.height>0||_&&g&&a(g)){t===null&&(t=new Pg(s));const x=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",l),x.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function x3(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function y3(s,e,t,r){const a={},l=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const b in x)e.update(x[b],34962);const S=g.morphAttributes;for(const b in S){const v=S[b];for(let y=0,E=v.length;y<E;y++)e.update(v[y],34962)}}function p(g){const x=[],S=g.index,b=g.attributes.position;let v=0;if(S!==null){const L=S.array;v=S.version;for(let D=0,C=L.length;D<C;D+=3){const A=L[D+0],F=L[D+1],U=L[D+2];x.push(A,F,F,U,U,A)}}else{const L=b.array;v=b.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const A=D+0,F=D+1,U=D+2;x.push(A,F,F,U,U,A)}}const y=new(N0(x)?$0:H0)(x,1);y.version=v;const E=l.get(g);E&&e.remove(E),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:c,update:h,getWireframeAttribute:_}}function S3(s,e,t,r){const a=r.isWebGL2;let l;function f(x){l=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function _(x,S){s.drawElements(l,S,c,x*h),t.update(S,l,1)}function g(x,S,b){if(b===0)return;let v,y;if(a)v=s,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](l,S,c,x*h,b),t.update(S,l,b)}this.setMode=f,this.setIndex=p,this.render=_,this.renderInstances=g}function w3(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case 4:t.triangles+=c*(l/3);break;case 1:t.lines+=c*(l/2);break;case 3:t.lines+=c*(l-1);break;case 2:t.lines+=c*l;break;case 0:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function M3(s,e){return s[0]-e[0]}function b3(s,e){return Math.abs(e[1])-Math.abs(s[1])}function E3(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new sn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,_,g,x){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const v=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,y=v!==void 0?v.length:0;let E=l.get(_);if(E===void 0||E.count!==y){let de=function(){q.dispose(),l.delete(_),_.removeEventListener("dispose",de)};var b=de;E!==void 0&&E.texture.dispose();const C=_.morphAttributes.position!==void 0,A=_.morphAttributes.normal!==void 0,F=_.morphAttributes.color!==void 0,U=_.morphAttributes.position||[],T=_.morphAttributes.normal||[],N=_.morphAttributes.color||[];let w=0;C===!0&&(w=1),A===!0&&(w=2),F===!0&&(w=3);let $=_.attributes.position.count*w,ce=1;$>e.maxTextureSize&&(ce=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const X=new Float32Array($*ce*4*y),q=new V0(X,$,ce,y);q.type=ns,q.needsUpdate=!0;const ne=w*4;for(let fe=0;fe<y;fe++){const H=U[fe],B=T[fe],V=N[fe],I=$*ce*4*fe;for(let W=0;W<H.count;W++){const re=W*ne;C===!0&&(f.fromBufferAttribute(H,W),X[I+re+0]=f.x,X[I+re+1]=f.y,X[I+re+2]=f.z,X[I+re+3]=0),A===!0&&(f.fromBufferAttribute(B,W),X[I+re+4]=f.x,X[I+re+5]=f.y,X[I+re+6]=f.z,X[I+re+7]=0),F===!0&&(f.fromBufferAttribute(V,W),X[I+re+8]=f.x,X[I+re+9]=f.y,X[I+re+10]=f.z,X[I+re+11]=V.itemSize===4?f.w:1)}}E={count:y,texture:q,size:new ft($,ce)},l.set(_,E),_.addEventListener("dispose",de)}let L=0;for(let C=0;C<S.length;C++)L+=S[C];const D=_.morphTargetsRelative?1:1-L;x.getUniforms().setValue(s,"morphTargetBaseInfluence",D),x.getUniforms().setValue(s,"morphTargetInfluences",S),x.getUniforms().setValue(s,"morphTargetsTexture",E.texture,t),x.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}else{const v=S===void 0?0:S.length;let y=r[_.id];if(y===void 0||y.length!==v){y=[];for(let A=0;A<v;A++)y[A]=[A,0];r[_.id]=y}for(let A=0;A<v;A++){const F=y[A];F[0]=A,F[1]=S[A]}y.sort(b3);for(let A=0;A<8;A++)A<v&&y[A][1]?(c[A][0]=y[A][0],c[A][1]=y[A][1]):(c[A][0]=Number.MAX_SAFE_INTEGER,c[A][1]=0);c.sort(M3);const E=_.morphAttributes.position,L=_.morphAttributes.normal;let D=0;for(let A=0;A<8;A++){const F=c[A],U=F[0],T=F[1];U!==Number.MAX_SAFE_INTEGER&&T?(E&&_.getAttribute("morphTarget"+A)!==E[U]&&_.setAttribute("morphTarget"+A,E[U]),L&&_.getAttribute("morphNormal"+A)!==L[U]&&_.setAttribute("morphNormal"+A,L[U]),a[A]=T,D+=T):(E&&_.hasAttribute("morphTarget"+A)===!0&&_.deleteAttribute("morphTarget"+A),L&&_.hasAttribute("morphNormal"+A)===!0&&_.deleteAttribute("morphNormal"+A),a[A]=0)}const C=_.morphTargetsRelative?1:1-D;x.getUniforms().setValue(s,"morphTargetBaseInfluence",C),x.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function T3(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);return a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),g}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}const K0=new vi,Z0=new V0,Q0=new hw,J0=new q0,Ig=[],kg=[],zg=new Float32Array(16),Fg=new Float32Array(9),Ng=new Float32Array(4);function xo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Ig[a];if(l===void 0&&(l=new Float32Array(a),Ig[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function wn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function bu(s,e){let t=kg[e];t===void 0&&(t=new Int32Array(e),kg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function C3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function A3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function P3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function L3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function R3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;Ng.set(r),s.uniformMatrix2fv(this.addr,!1,Ng),Mn(t,r)}}function D3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;Fg.set(r),s.uniformMatrix3fv(this.addr,!1,Fg),Mn(t,r)}}function I3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;zg.set(r),s.uniformMatrix4fv(this.addr,!1,zg),Mn(t,r)}}function k3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function z3(s,e){const t=this.cache;wn(t,e)||(s.uniform2iv(this.addr,e),Mn(t,e))}function F3(s,e){const t=this.cache;wn(t,e)||(s.uniform3iv(this.addr,e),Mn(t,e))}function N3(s,e){const t=this.cache;wn(t,e)||(s.uniform4iv(this.addr,e),Mn(t,e))}function O3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function U3(s,e){const t=this.cache;wn(t,e)||(s.uniform2uiv(this.addr,e),Mn(t,e))}function B3(s,e){const t=this.cache;wn(t,e)||(s.uniform3uiv(this.addr,e),Mn(t,e))}function V3(s,e){const t=this.cache;wn(t,e)||(s.uniform4uiv(this.addr,e),Mn(t,e))}function G3(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2D(e||K0,a)}function W3(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Q0,a)}function H3(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||J0,a)}function $3(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Z0,a)}function j3(s){switch(s){case 5126:return C3;case 35664:return A3;case 35665:return P3;case 35666:return L3;case 35674:return R3;case 35675:return D3;case 35676:return I3;case 5124:case 35670:return k3;case 35667:case 35671:return z3;case 35668:case 35672:return F3;case 35669:case 35673:return N3;case 5125:return O3;case 36294:return U3;case 36295:return B3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return G3;case 35679:case 36299:case 36307:return W3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return $3}}function q3(s,e){s.uniform1fv(this.addr,e)}function X3(s,e){const t=xo(e,this.size,2);s.uniform2fv(this.addr,t)}function Y3(s,e){const t=xo(e,this.size,3);s.uniform3fv(this.addr,t)}function K3(s,e){const t=xo(e,this.size,4);s.uniform4fv(this.addr,t)}function Z3(s,e){const t=xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q3(s,e){const t=xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function J3(s,e){const t=xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eb(s,e){s.uniform1iv(this.addr,e)}function tb(s,e){s.uniform2iv(this.addr,e)}function nb(s,e){s.uniform3iv(this.addr,e)}function ib(s,e){s.uniform4iv(this.addr,e)}function rb(s,e){s.uniform1uiv(this.addr,e)}function sb(s,e){s.uniform2uiv(this.addr,e)}function ob(s,e){s.uniform3uiv(this.addr,e)}function ab(s,e){s.uniform4uiv(this.addr,e)}function lb(s,e,t){const r=e.length,a=bu(t,r);s.uniform1iv(this.addr,a);for(let l=0;l!==r;++l)t.setTexture2D(e[l]||K0,a[l])}function ub(s,e,t){const r=e.length,a=bu(t,r);s.uniform1iv(this.addr,a);for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Q0,a[l])}function cb(s,e,t){const r=e.length,a=bu(t,r);s.uniform1iv(this.addr,a);for(let l=0;l!==r;++l)t.setTextureCube(e[l]||J0,a[l])}function fb(s,e,t){const r=e.length,a=bu(t,r);s.uniform1iv(this.addr,a);for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Z0,a[l])}function db(s){switch(s){case 5126:return q3;case 35664:return X3;case 35665:return Y3;case 35666:return K3;case 35674:return Z3;case 35675:return Q3;case 35676:return J3;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return fb}}class hb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=j3(t.type)}}class pb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=db(t.type)}}class mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const Kf=/(\w+)(\])?(\[|\.)?/g;function Og(s,e){s.seq.push(e),s.map[e.id]=e}function gb(s,e,t){const r=s.name,a=r.length;for(Kf.lastIndex=0;;){const l=Kf.exec(r),f=Kf.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){Og(t,p===void 0?new hb(c,s,e):new pb(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new mb(c),Og(t,g)),t=g}}}class ru{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);gb(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Ug(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let vb=0;function _b(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function xb(s){switch(s){case us:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Bg(s,e,t){const r=s.getShaderParameter(e,35713),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+_b(s.getShaderSource(e),f)}else return a}function yb(s,e){const t=xb(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sb(s,e){let t;switch(e){case US:t="Linear";break;case BS:t="Reinhard";break;case VS:t="OptimizedCineon";break;case GS:t="ACESFilmic";break;case WS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ua).join(`
`)}function Mb(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function bb(s,e){const t={},r=s.getProgramParameter(e,35721);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===35674&&(c=2),l.type===35675&&(c=3),l.type===35676&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function ua(s){return s!==""}function Vg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(s){return s.replace(Eb,Tb)}function Tb(s,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pd(t)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(s){return s.replace(Cb,Ab)}function Ab(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Hg(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function Lb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function Db(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case k0:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function kb(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=Pb(t),p=Lb(t),_=Rb(t),g=Db(t),x=Ib(t),S=t.isWebGL2?"":wb(t),b=Mb(l),v=a.createProgram();let y,E,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[b].filter(ua).join(`
`),y.length>0&&(y+=`
`),E=[S,b].filter(ua).join(`
`),E.length>0&&(E+=`
`)):(y=[Hg(t),"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),E=[S,Hg(t),"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.encodings_pars_fragment,yb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),f=pd(f),f=Vg(f,t),f=Gg(f,t),c=pd(c),c=Vg(c,t),c=Gg(c,t),f=Wg(f),c=Wg(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",t.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const D=L+y+f,C=L+E+c,A=Ug(a,35633,D),F=Ug(a,35632,C);if(a.attachShader(v,A),a.attachShader(v,F),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v),s.debug.checkShaderErrors){const N=a.getProgramInfoLog(v).trim(),w=a.getShaderInfoLog(A).trim(),$=a.getShaderInfoLog(F).trim();let ce=!0,X=!0;if(a.getProgramParameter(v,35714)===!1){ce=!1;const q=Bg(a,A,"vertex"),ne=Bg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,35715)+`

Program Info Log: `+N+`
`+q+`
`+ne)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(w===""||$==="")&&(X=!1);X&&(this.diagnostics={runnable:ce,programLog:N,vertexShader:{log:w,prefix:y},fragmentShader:{log:$,prefix:E}})}a.deleteShader(A),a.deleteShader(F);let U;this.getUniforms=function(){return U===void 0&&(U=new ru(a,v)),U};let T;return this.getAttributes=function(){return T===void 0&&(T=bb(a,v)),T},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=vb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=F,this}let zb=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Nb(e),t.set(e,r)),r}}class Nb{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}}function Ob(s,e,t,r,a,l,f){const c=new G0,h=new Fb,p=[],_=a.isWebGL2,g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,N,w,$,ce){const X=$.fog,q=ce.geometry,ne=T.isMeshStandardMaterial?$.environment:null,de=(T.isMeshStandardMaterial?t:e).get(T.envMap||ne),fe=de&&de.mapping===yu?de.image.height:null,H=b[T.type];T.precision!==null&&(S=a.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const B=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,V=B!==void 0?B.length:0;let I=0;q.morphAttributes.position!==void 0&&(I=1),q.morphAttributes.normal!==void 0&&(I=2),q.morphAttributes.color!==void 0&&(I=3);let W,re,me,we;if(H){const ot=Pi[H];W=ot.vertexShader,re=ot.fragmentShader}else W=T.vertexShader,re=T.fragmentShader,h.update(T),me=h.getVertexShaderID(T),we=h.getFragmentShaderID(T);const te=s.getRenderTarget(),Ne=T.alphaTest>0,be=T.clearcoat>0,Le=T.iridescence>0;return{isWebGL2:_,shaderID:H,shaderName:T.type,vertexShader:W,fragmentShader:re,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:x,outputEncoding:te===null?s.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:us,map:!!T.map,matcap:!!T.matcap,envMap:!!de,envMapMode:de&&de.mapping,envMapCubeUVHeight:fe,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===uw,tangentSpaceNormalMap:T.normalMapType===lw,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===zt,clearcoat:be,clearcoatMap:be&&!!T.clearcoatMap,clearcoatRoughnessMap:be&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!T.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!T.iridescenceMap,iridescenceThicknessMap:Le&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===ro,alphaMap:!!T.alphaMap,alphaTest:Ne,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!q.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!X,useFog:T.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ce.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:I,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:T.toneMapped?s.toneMapping:Qi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Lr,flipSided:T.side===ii,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)N.push(w),N.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(E(N,T),L(N,T),N.push(s.outputEncoding)),N.push(T.customProgramCacheKey),N.join()}function E(T,N){T.push(N.precision),T.push(N.outputEncoding),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.combine),T.push(N.vertexUvs),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function L(T,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.map&&c.enable(4),N.matcap&&c.enable(5),N.envMap&&c.enable(6),N.lightMap&&c.enable(7),N.aoMap&&c.enable(8),N.emissiveMap&&c.enable(9),N.bumpMap&&c.enable(10),N.normalMap&&c.enable(11),N.objectSpaceNormalMap&&c.enable(12),N.tangentSpaceNormalMap&&c.enable(13),N.clearcoat&&c.enable(14),N.clearcoatMap&&c.enable(15),N.clearcoatRoughnessMap&&c.enable(16),N.clearcoatNormalMap&&c.enable(17),N.iridescence&&c.enable(18),N.iridescenceMap&&c.enable(19),N.iridescenceThicknessMap&&c.enable(20),N.displacementMap&&c.enable(21),N.specularMap&&c.enable(22),N.roughnessMap&&c.enable(23),N.metalnessMap&&c.enable(24),N.gradientMap&&c.enable(25),N.alphaMap&&c.enable(26),N.alphaTest&&c.enable(27),N.vertexColors&&c.enable(28),N.vertexAlphas&&c.enable(29),N.vertexUvs&&c.enable(30),N.vertexTangents&&c.enable(31),N.uvsVertexOnly&&c.enable(32),T.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.physicallyCorrectLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.specularIntensityMap&&c.enable(15),N.specularColorMap&&c.enable(16),N.transmission&&c.enable(17),N.transmissionMap&&c.enable(18),N.thicknessMap&&c.enable(19),N.sheen&&c.enable(20),N.sheenColorMap&&c.enable(21),N.sheenRoughnessMap&&c.enable(22),N.decodeVideoTexture&&c.enable(23),N.opaque&&c.enable(24),T.push(c.mask)}function D(T){const N=b[T.type];let w;if(N){const $=Pi[N];w=Tw.clone($.uniforms)}else w=T.uniforms;return w}function C(T,N){let w;for(let $=0,ce=p.length;$<ce;$++){const X=p[$];if(X.cacheKey===N){w=X,++w.usedTimes;break}}return w===void 0&&(w=new kb(s,N,T,l),p.push(w)),w}function A(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),T.destroy()}}function F(T){h.remove(T)}function U(){h.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:D,acquireProgram:C,releaseProgram:A,releaseShaderCache:F,programs:p,dispose:U}}function Ub(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function Bb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $g(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(g,x,S,b,v,y){let E=s[e];return E===void 0?(E={id:g.id,object:g,geometry:x,material:S,groupOrder:b,renderOrder:g.renderOrder,z:v,group:y},s[e]=E):(E.id=g.id,E.object=g,E.geometry=x,E.material=S,E.groupOrder=b,E.renderOrder=g.renderOrder,E.z=v,E.group=y),e++,E}function c(g,x,S,b,v,y){const E=f(g,x,S,b,v,y);S.transmission>0?r.push(E):S.transparent===!0?a.push(E):t.push(E)}function h(g,x,S,b,v,y){const E=f(g,x,S,b,v,y);S.transmission>0?r.unshift(E):S.transparent===!0?a.unshift(E):t.unshift(E)}function p(g,x){t.length>1&&t.sort(g||Bb),r.length>1&&r.sort(x||$g),a.length>1&&a.sort(x||$g)}function _(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:_,sort:p}}function Vb(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new jg,s.set(r,[f])):a>=l.length?(f=new jg,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new _t};break;case"SpotLight":t={position:new ee,direction:new ee,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=t,t}}}function Wb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hb=0;function $b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jb(s,e){const t=new Gb,r=Wb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)a.probe.push(new ee);const l=new ee,f=new on,c=new on;function h(_,g){let x=0,S=0,b=0;for(let $=0;$<9;$++)a.probe[$].set(0,0,0);let v=0,y=0,E=0,L=0,D=0,C=0,A=0,F=0,U=0,T=0;_.sort($b);const N=g!==!0?Math.PI:1;for(let $=0,ce=_.length;$<ce;$++){const X=_[$],q=X.color,ne=X.intensity,de=X.distance,fe=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)x+=q.r*ne*N,S+=q.g*ne*N,b+=q.b*ne*N;else if(X.isLightProbe)for(let H=0;H<9;H++)a.probe[H].addScaledVector(X.sh.coefficients[H],ne);else if(X.isDirectionalLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity*N),X.castShadow){const B=X.shadow,V=r.get(X);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,a.directionalShadow[v]=V,a.directionalShadowMap[v]=fe,a.directionalShadowMatrix[v]=X.shadow.matrix,C++}a.directional[v]=H,v++}else if(X.isSpotLight){const H=t.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy(q).multiplyScalar(ne*N),H.distance=de,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,a.spot[E]=H;const B=X.shadow;if(X.map&&(a.spotLightMap[U]=X.map,U++,B.updateMatrices(X),X.castShadow&&T++),a.spotLightMatrix[E]=B.matrix,X.castShadow){const V=r.get(X);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,a.spotShadow[E]=V,a.spotShadowMap[E]=fe,F++}E++}else if(X.isRectAreaLight){const H=t.get(X);H.color.copy(q).multiplyScalar(ne),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),a.rectArea[L]=H,L++}else if(X.isPointLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity*N),H.distance=X.distance,H.decay=X.decay,X.castShadow){const B=X.shadow,V=r.get(X);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,a.pointShadow[y]=V,a.pointShadowMap[y]=fe,a.pointShadowMatrix[y]=X.shadow.matrix,A++}a.point[y]=H,y++}else if(X.isHemisphereLight){const H=t.get(X);H.skyColor.copy(X.color).multiplyScalar(ne*N),H.groundColor.copy(X.groundColor).multiplyScalar(ne*N),a.hemi[D]=H,D++}}L>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_FLOAT_1,a.rectAreaLTC2=ye.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_HALF_1,a.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=x,a.ambient[1]=S,a.ambient[2]=b;const w=a.hash;(w.directionalLength!==v||w.pointLength!==y||w.spotLength!==E||w.rectAreaLength!==L||w.hemiLength!==D||w.numDirectionalShadows!==C||w.numPointShadows!==A||w.numSpotShadows!==F||w.numSpotMaps!==U)&&(a.directional.length=v,a.spot.length=E,a.rectArea.length=L,a.point.length=y,a.hemi.length=D,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=F+U-T,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=T,w.directionalLength=v,w.pointLength=y,w.spotLength=E,w.rectAreaLength=L,w.hemiLength=D,w.numDirectionalShadows=C,w.numPointShadows=A,w.numSpotShadows=F,w.numSpotMaps=U,a.version=Hb++)}function p(_,g){let x=0,S=0,b=0,v=0,y=0;const E=g.matrixWorldInverse;for(let L=0,D=_.length;L<D;L++){const C=_[L];if(C.isDirectionalLight){const A=a.directional[x];A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(E),x++}else if(C.isSpotLight){const A=a.spot[b];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(E),b++}else if(C.isRectAreaLight){const A=a.rectArea[v];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(E),c.identity(),f.copy(C.matrixWorld),f.premultiply(E),c.extractRotation(f),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),v++}else if(C.isPointLight){const A=a.point[S];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(E),S++}else if(C.isHemisphereLight){const A=a.hemi[y];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(E),y++}}}return{setup:h,setupView:p,state:a}}function qg(s,e){const t=new jb(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(g){r.push(g)}function c(g){a.push(g)}function h(g){t.setup(r,g)}function p(g){t.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function qb(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new qg(s,e),t.set(l,[h])):f>=c.length?(h=new qg(s,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class Xb extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ow,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new ee,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`;function Qb(s,e,t){let r=new X0;const a=new ft,l=new ft,f=new sn,c=new Xb({depthPacking:aw}),h=new Yb,p={},_=t.maxTextureSize,g={0:ii,1:fo,2:Lr},x=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new fs;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0,this.render=function(C,A,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;const U=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),w=s.state;w.setBlending(Rr),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let $=0,ce=C.length;$<ce;$++){const X=C[$],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const ne=q.getFrameExtents();if(a.multiply(ne),l.copy(q.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ne.x),a.x=l.x*ne.x,q.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ne.y),a.y=l.y*ne.y,q.mapSize.y=l.y)),q.map===null){const fe=this.type!==la?{minFilter:Rn,magFilter:Rn}:{};q.map=new cs(a.x,a.y,fe),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const de=q.getViewportCount();for(let fe=0;fe<de;fe++){const H=q.getViewport(fe);f.set(l.x*H.x,l.y*H.y,l.x*H.z,l.y*H.w),w.viewport(f),q.updateMatrices(X,fe),r=q.getFrustum(),D(A,F,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===la&&E(q,F),q.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(U,T,N)};function E(C,A){const F=e.update(v);x.defines.VSM_SAMPLES!==C.blurSamples&&(x.defines.VSM_SAMPLES=C.blurSamples,S.defines.VSM_SAMPLES=C.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new cs(a.x,a.y)),x.uniforms.shadow_pass.value=C.map.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,F,x,v,null),S.uniforms.shadow_pass.value=C.mapPass.texture,S.uniforms.resolution.value=C.mapSize,S.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,F,S,v,null)}function L(C,A,F,U,T,N){let w=null;const $=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if($!==void 0?w=$:w=F.isPointLight===!0?h:c,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const ce=w.uuid,X=A.uuid;let q=p[ce];q===void 0&&(q={},p[ce]=q);let ne=q[X];ne===void 0&&(ne=w.clone(),q[X]=ne),w=ne}return w.visible=A.visible,w.wireframe=A.wireframe,N===la?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:g[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(F.matrixWorld),w.nearDistance=U,w.farDistance=T),w}function D(C,A,F,U,T){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===la)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const $=e.update(C),ce=C.material;if(Array.isArray(ce)){const X=$.groups;for(let q=0,ne=X.length;q<ne;q++){const de=X[q],fe=ce[de.materialIndex];if(fe&&fe.visible){const H=L(C,fe,U,F.near,F.far,T);s.renderBufferDirect(F,null,$,H,C,de)}}}else if(ce.visible){const X=L(C,ce,U,F.near,F.far,T);s.renderBufferDirect(F,null,$,X,C,null)}}const w=C.children;for(let $=0,ce=w.length;$<ce;$++)D(w[$],A,F,U,T)}}function Jb(s,e,t){const r=t.isWebGL2;function a(){let j=!1;const Ce=new sn;let oe=null;const Te=new sn(0,0,0,0);return{setMask:function(Se){oe!==Se&&!j&&(s.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){j=Se},setClear:function(Se,Ke,Nt,Tt,si){si===!0&&(Se*=Tt,Ke*=Tt,Nt*=Tt),Ce.set(Se,Ke,Nt,Tt),Te.equals(Ce)===!1&&(s.clearColor(Se,Ke,Nt,Tt),Te.copy(Ce))},reset:function(){j=!1,oe=null,Te.set(-1,0,0,0)}}}function l(){let j=!1,Ce=null,oe=null,Te=null;return{setTest:function(Se){Se?Ne(2929):be(2929)},setMask:function(Se){Ce!==Se&&!j&&(s.depthMask(Se),Ce=Se)},setFunc:function(Se){if(oe!==Se){if(Se)switch(Se){case LS:s.depthFunc(512);break;case RS:s.depthFunc(519);break;case DS:s.depthFunc(513);break;case ad:s.depthFunc(515);break;case IS:s.depthFunc(514);break;case kS:s.depthFunc(518);break;case zS:s.depthFunc(516);break;case FS:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);oe=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Te!==Se&&(s.clearDepth(Se),Te=Se)},reset:function(){j=!1,Ce=null,oe=null,Te=null}}}function f(){let j=!1,Ce=null,oe=null,Te=null,Se=null,Ke=null,Nt=null,Tt=null,si=null;return{setTest:function(wt){j||(wt?Ne(2960):be(2960))},setMask:function(wt){Ce!==wt&&!j&&(s.stencilMask(wt),Ce=wt)},setFunc:function(wt,$n,ln){(oe!==wt||Te!==$n||Se!==ln)&&(s.stencilFunc(wt,$n,ln),oe=wt,Te=$n,Se=ln)},setOp:function(wt,$n,ln){(Ke!==wt||Nt!==$n||Tt!==ln)&&(s.stencilOp(wt,$n,ln),Ke=wt,Nt=$n,Tt=ln)},setLocked:function(wt){j=wt},setClear:function(wt){si!==wt&&(s.clearStencil(wt),si=wt)},reset:function(){j=!1,Ce=null,oe=null,Te=null,Se=null,Ke=null,Nt=null,Tt=null,si=null}}}const c=new a,h=new l,p=new f,_=new WeakMap,g=new WeakMap;let x={},S={},b=new WeakMap,v=[],y=null,E=!1,L=null,D=null,C=null,A=null,F=null,U=null,T=null,N=!1,w=null,$=null,ce=null,X=null,q=null;const ne=s.getParameter(35661);let de=!1,fe=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),de=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),de=fe>=2);let B=null,V={};const I=s.getParameter(3088),W=s.getParameter(2978),re=new sn().fromArray(I),me=new sn().fromArray(W);function we(j,Ce,oe){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(j,Se),s.texParameteri(j,10241,9728),s.texParameteri(j,10240,9728);for(let Ke=0;Ke<oe;Ke++)s.texImage2D(Ce+Ke,0,6408,1,1,0,6408,5121,Te);return Se}const te={};te[3553]=we(3553,3553,1),te[34067]=we(34067,34069,6),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ne(2929),h.setFunc(ad),Xt(!1),bn(Fm),Ne(2884),Ft(Rr);function Ne(j){x[j]!==!0&&(s.enable(j),x[j]=!0)}function be(j){x[j]!==!1&&(s.disable(j),x[j]=!1)}function Le(j,Ce){return S[j]!==Ce?(s.bindFramebuffer(j,Ce),S[j]=Ce,r&&(j===36009&&(S[36160]=Ce),j===36160&&(S[36009]=Ce)),!0):!1}function Me(j,Ce){let oe=v,Te=!1;if(j)if(oe=b.get(Ce),oe===void 0&&(oe=[],b.set(Ce,oe)),j.isWebGLMultipleRenderTargets){const Se=j.texture;if(oe.length!==Se.length||oe[0]!==36064){for(let Ke=0,Nt=Se.length;Ke<Nt;Ke++)oe[Ke]=36064+Ke;oe.length=Se.length,Te=!0}}else oe[0]!==36064&&(oe[0]=36064,Te=!0);else oe[0]!==1029&&(oe[0]=1029,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ot(j){return y!==j?(s.useProgram(j),y=j,!0):!1}const Ye={[eo]:32774,[xS]:32778,[yS]:32779};if(r)Ye[Bm]=32775,Ye[Vm]=32776;else{const j=e.get("EXT_blend_minmax");j!==null&&(Ye[Bm]=j.MIN_EXT,Ye[Vm]=j.MAX_EXT)}const Ue={[SS]:0,[wS]:1,[MS]:768,[D0]:770,[PS]:776,[CS]:774,[ES]:772,[bS]:769,[I0]:771,[AS]:775,[TS]:773};function Ft(j,Ce,oe,Te,Se,Ke,Nt,Tt){if(j===Rr){E===!0&&(be(3042),E=!1);return}if(E===!1&&(Ne(3042),E=!0),j!==_S){if(j!==L||Tt!==N){if((D!==eo||F!==eo)&&(s.blendEquation(32774),D=eo,F=eo),Tt)switch(j){case ro:s.blendFuncSeparate(1,771,1,771);break;case Nm:s.blendFunc(1,1);break;case Om:s.blendFuncSeparate(0,769,0,1);break;case Um:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ro:s.blendFuncSeparate(770,771,1,771);break;case Nm:s.blendFunc(770,1);break;case Om:s.blendFuncSeparate(0,769,0,1);break;case Um:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}C=null,A=null,U=null,T=null,L=j,N=Tt}return}Se=Se||Ce,Ke=Ke||oe,Nt=Nt||Te,(Ce!==D||Se!==F)&&(s.blendEquationSeparate(Ye[Ce],Ye[Se]),D=Ce,F=Se),(oe!==C||Te!==A||Ke!==U||Nt!==T)&&(s.blendFuncSeparate(Ue[oe],Ue[Te],Ue[Ke],Ue[Nt]),C=oe,A=Te,U=Ke,T=Nt),L=j,N=null}function an(j,Ce){j.side===Lr?be(2884):Ne(2884);let oe=j.side===ii;Ce&&(oe=!oe),Xt(oe),j.blending===ro&&j.transparent===!1?Ft(Rr):Ft(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),c.setMask(j.colorWrite);const Te=j.stencilWrite;p.setTest(Te),Te&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),at(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Ne(32926):be(32926)}function Xt(j){w!==j&&(j?s.frontFace(2304):s.frontFace(2305),w=j)}function bn(j){j!==mS?(Ne(2884),j!==$&&(j===Fm?s.cullFace(1029):j===gS?s.cullFace(1028):s.cullFace(1032))):be(2884),$=j}function Bt(j){j!==ce&&(de&&s.lineWidth(j),ce=j)}function at(j,Ce,oe){j?(Ne(32823),(X!==Ce||q!==oe)&&(s.polygonOffset(Ce,oe),X=Ce,q=oe)):be(32823)}function gn(j){j?Ne(3089):be(3089)}function Jt(j){j===void 0&&(j=33984+ne-1),B!==j&&(s.activeTexture(j),B=j)}function z(j,Ce){B===null&&Jt();let oe=V[B];oe===void 0&&(oe={type:void 0,texture:void 0},V[B]=oe),(oe.type!==j||oe.texture!==Ce)&&(s.bindTexture(j,Ce||te[j]),oe.type=j,oe.texture=Ce)}function P(){const j=V[B];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(j){re.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),re.copy(j))}function De(j){me.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),me.copy(j))}function qe(j,Ce){let oe=g.get(Ce);oe===void 0&&(oe=new WeakMap,g.set(Ce,oe));let Te=oe.get(j);Te===void 0&&(Te=s.getUniformBlockIndex(Ce,j.name),oe.set(j,Te))}function nt(j,Ce){const Te=g.get(Ce).get(j);_.get(j)!==Te&&(s.uniformBlockBinding(Ce,Te,j.__bindingPointIndex),_.set(j,Te))}function St(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),r===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},B=null,V={},S={},b=new WeakMap,v=[],y=null,E=!1,L=null,D=null,C=null,A=null,F=null,U=null,T=null,N=!1,w=null,$=null,ce=null,X=null,q=null,re.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Ne,disable:be,bindFramebuffer:Le,drawBuffers:Me,useProgram:ot,setBlending:Ft,setMaterial:an,setFlipSided:Xt,setCullFace:bn,setLineWidth:Bt,setPolygonOffset:at,setScissorTest:gn,activeTexture:Jt,bindTexture:z,unbindTexture:P,compressedTexImage2D:le,texImage2D:Fe,texImage3D:Pe,updateUBOMapping:qe,uniformBlockBinding:nt,texStorage2D:He,texStorage3D:ie,texSubImage2D:ve,texSubImage3D:xe,compressedTexSubImage2D:Ee,scissor:Oe,viewport:De,reset:St}}function eE(s,e,t,r,a,l,f){const c=a.isWebGL2,h=a.maxTextures,p=a.maxCubemapSize,_=a.maxTextureSize,g=a.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(z,P){return E?new OffscreenCanvas(z,P):au("canvas")}function D(z,P,le,ve){let xe=1;if((z.width>ve||z.height>ve)&&(xe=ve/Math.max(z.width,z.height)),xe<1||P===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Ee=P?hd:Math.floor,He=Ee(xe*z.width),ie=Ee(xe*z.height);v===void 0&&(v=L(He,ie));const Fe=le?L(He,ie):v;return Fe.width=He,Fe.height=ie,Fe.getContext("2d").drawImage(z,0,0,He,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+He+"x"+ie+")."),Fe}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function C(z){return pg(z.width)&&pg(z.height)}function A(z){return c?!1:z.wrapS!==gi||z.wrapT!==gi||z.minFilter!==Rn&&z.minFilter!==ei}function F(z,P){return z.generateMipmaps&&P&&z.minFilter!==Rn&&z.minFilter!==ei}function U(z){s.generateMipmap(z)}function T(z,P,le,ve,xe=!1){if(c===!1)return P;if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ee=P;return P===6403&&(le===5126&&(Ee=33326),le===5131&&(Ee=33325),le===5121&&(Ee=33321)),P===33319&&(le===5126&&(Ee=33328),le===5131&&(Ee=33327),le===5121&&(Ee=33323)),P===6408&&(le===5126&&(Ee=34836),le===5131&&(Ee=34842),le===5121&&(Ee=ve===zt&&xe===!1?35907:32856),le===32819&&(Ee=32854),le===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function N(z,P,le){return F(z,le)===!0||z.isFramebufferTexture&&z.minFilter!==Rn&&z.minFilter!==ei?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function w(z){return z===Rn||z===Gm||z===Wm?9728:9729}function $(z){const P=z.target;P.removeEventListener("dispose",$),X(P),P.isVideoTexture&&b.delete(P)}function ce(z){const P=z.target;P.removeEventListener("dispose",ce),ne(P)}function X(z){const P=r.get(z);if(P.__webglInit===void 0)return;const le=z.source,ve=y.get(le);if(ve){const xe=ve[P.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&q(z),Object.keys(ve).length===0&&y.delete(le)}r.remove(z)}function q(z){const P=r.get(z);s.deleteTexture(P.__webglTexture);const le=z.source,ve=y.get(le);delete ve[P.__cacheKey],f.memory.textures--}function ne(z){const P=z.texture,le=r.get(z),ve=r.get(P);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),f.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)s.deleteFramebuffer(le.__webglFramebuffer[xe]),le.__webglDepthbuffer&&s.deleteRenderbuffer(le.__webglDepthbuffer[xe]);else{if(s.deleteFramebuffer(le.__webglFramebuffer),le.__webglDepthbuffer&&s.deleteRenderbuffer(le.__webglDepthbuffer),le.__webglMultisampledFramebuffer&&s.deleteFramebuffer(le.__webglMultisampledFramebuffer),le.__webglColorRenderbuffer)for(let xe=0;xe<le.__webglColorRenderbuffer.length;xe++)le.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(le.__webglColorRenderbuffer[xe]);le.__webglDepthRenderbuffer&&s.deleteRenderbuffer(le.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let xe=0,Ee=P.length;xe<Ee;xe++){const He=r.get(P[xe]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),f.memory.textures--),r.remove(P[xe])}r.remove(P),r.remove(z)}let de=0;function fe(){de=0}function H(){const z=de;return z>=h&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+h),de+=1,z}function B(z){const P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.encoding),P.join()}function V(z,P){const le=r.get(z);if(z.isVideoTexture&&gn(z),z.isRenderTargetTexture===!1&&z.version>0&&le.__version!==z.version){const ve=z.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(le,z,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,le.__webglTexture)}function I(z,P){const le=r.get(z);if(z.version>0&&le.__version!==z.version){be(le,z,P);return}t.activeTexture(33984+P),t.bindTexture(35866,le.__webglTexture)}function W(z,P){const le=r.get(z);if(z.version>0&&le.__version!==z.version){be(le,z,P);return}t.activeTexture(33984+P),t.bindTexture(32879,le.__webglTexture)}function re(z,P){const le=r.get(z);if(z.version>0&&le.__version!==z.version){Le(le,z,P);return}t.activeTexture(33984+P),t.bindTexture(34067,le.__webglTexture)}const me={[cd]:10497,[gi]:33071,[fd]:33648},we={[Rn]:9728,[Gm]:9984,[Wm]:9986,[ei]:9729,[HS]:9985,[Su]:9987};function te(z,P,le){if(le?(s.texParameteri(z,10242,me[P.wrapS]),s.texParameteri(z,10243,me[P.wrapT]),(z===32879||z===35866)&&s.texParameteri(z,32882,me[P.wrapR]),s.texParameteri(z,10240,we[P.magFilter]),s.texParameteri(z,10241,we[P.minFilter])):(s.texParameteri(z,10242,33071),s.texParameteri(z,10243,33071),(z===32879||z===35866)&&s.texParameteri(z,32882,33071),(P.wrapS!==gi||P.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(z,10240,w(P.magFilter)),s.texParameteri(z,10241,w(P.minFilter)),P.minFilter!==Rn&&P.minFilter!==ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(P.type===ns&&e.has("OES_texture_float_linear")===!1||c===!1&&P.type===ma&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||r.get(P).__currentAnisotropy)&&(s.texParameterf(z,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,a.getMaxAnisotropy())),r.get(P).__currentAnisotropy=P.anisotropy)}}function Ne(z,P){let le=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",$));const ve=P.source;let xe=y.get(ve);xe===void 0&&(xe={},y.set(ve,xe));const Ee=B(P);if(Ee!==z.__cacheKey){xe[Ee]===void 0&&(xe[Ee]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,le=!0),xe[Ee].usedTimes++;const He=xe[z.__cacheKey];He!==void 0&&(xe[z.__cacheKey].usedTimes--,He.usedTimes===0&&q(P)),z.__cacheKey=Ee,z.__webglTexture=xe[Ee].texture}return le}function be(z,P,le){let ve=3553;P.isDataArrayTexture&&(ve=35866),P.isData3DTexture&&(ve=32879);const xe=Ne(z,P),Ee=P.source;if(t.activeTexture(33984+le),t.bindTexture(ve,z.__webglTexture),Ee.version!==Ee.__currentVersion||xe===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const He=A(P)&&C(P.image)===!1;let ie=D(P.image,He,!1,_);ie=Jt(P,ie);const Fe=C(ie)||c,Pe=l.convert(P.format,P.encoding);let Oe=l.convert(P.type),De=T(P.internalFormat,Pe,Oe,P.encoding,P.isVideoTexture);te(ve,P,Fe);let qe;const nt=P.mipmaps,St=c&&P.isVideoTexture!==!0,j=Ee.__currentVersion===void 0||xe===!0,Ce=N(P,ie,Fe);if(P.isDepthTexture)De=6402,c?P.type===ns?De=36012:P.type===ts?De=33190:P.type===so?De=35056:De=33189:P.type===ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===rs&&De===6402&&P.type!==F0&&P.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=ts,Oe=l.convert(P.type)),P.format===mo&&De===6402&&(De=34041,P.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=so,Oe=l.convert(P.type))),j&&(St?t.texStorage2D(3553,1,De,ie.width,ie.height):t.texImage2D(3553,0,De,ie.width,ie.height,0,Pe,Oe,null));else if(P.isDataTexture)if(nt.length>0&&Fe){St&&j&&t.texStorage2D(3553,Ce,De,nt[0].width,nt[0].height);for(let oe=0,Te=nt.length;oe<Te;oe++)qe=nt[oe],St?t.texSubImage2D(3553,oe,0,0,qe.width,qe.height,Pe,Oe,qe.data):t.texImage2D(3553,oe,De,qe.width,qe.height,0,Pe,Oe,qe.data);P.generateMipmaps=!1}else St?(j&&t.texStorage2D(3553,Ce,De,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,ie.width,ie.height,Pe,Oe,ie.data)):t.texImage2D(3553,0,De,ie.width,ie.height,0,Pe,Oe,ie.data);else if(P.isCompressedTexture){St&&j&&t.texStorage2D(3553,Ce,De,nt[0].width,nt[0].height);for(let oe=0,Te=nt.length;oe<Te;oe++)qe=nt[oe],P.format!==Li?Pe!==null?St?t.compressedTexSubImage2D(3553,oe,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(3553,oe,De,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(3553,oe,0,0,qe.width,qe.height,Pe,Oe,qe.data):t.texImage2D(3553,oe,De,qe.width,qe.height,0,Pe,Oe,qe.data)}else if(P.isDataArrayTexture)St?(j&&t.texStorage3D(35866,Ce,De,ie.width,ie.height,ie.depth),t.texSubImage3D(35866,0,0,0,0,ie.width,ie.height,ie.depth,Pe,Oe,ie.data)):t.texImage3D(35866,0,De,ie.width,ie.height,ie.depth,0,Pe,Oe,ie.data);else if(P.isData3DTexture)St?(j&&t.texStorage3D(32879,Ce,De,ie.width,ie.height,ie.depth),t.texSubImage3D(32879,0,0,0,0,ie.width,ie.height,ie.depth,Pe,Oe,ie.data)):t.texImage3D(32879,0,De,ie.width,ie.height,ie.depth,0,Pe,Oe,ie.data);else if(P.isFramebufferTexture){if(j)if(St)t.texStorage2D(3553,Ce,De,ie.width,ie.height);else{let oe=ie.width,Te=ie.height;for(let Se=0;Se<Ce;Se++)t.texImage2D(3553,Se,De,oe,Te,0,Pe,Oe,null),oe>>=1,Te>>=1}}else if(nt.length>0&&Fe){St&&j&&t.texStorage2D(3553,Ce,De,nt[0].width,nt[0].height);for(let oe=0,Te=nt.length;oe<Te;oe++)qe=nt[oe],St?t.texSubImage2D(3553,oe,0,0,Pe,Oe,qe):t.texImage2D(3553,oe,De,Pe,Oe,qe);P.generateMipmaps=!1}else St?(j&&t.texStorage2D(3553,Ce,De,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,Pe,Oe,ie)):t.texImage2D(3553,0,De,Pe,Oe,ie);F(P,Fe)&&U(ve),Ee.__currentVersion=Ee.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function Le(z,P,le){if(P.image.length!==6)return;const ve=Ne(z,P),xe=P.source;if(t.activeTexture(33984+le),t.bindTexture(34067,z.__webglTexture),xe.version!==xe.__currentVersion||ve===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const Ee=P.isCompressedTexture||P.image[0].isCompressedTexture,He=P.image[0]&&P.image[0].isDataTexture,ie=[];for(let oe=0;oe<6;oe++)!Ee&&!He?ie[oe]=D(P.image[oe],!1,!0,p):ie[oe]=He?P.image[oe].image:P.image[oe],ie[oe]=Jt(P,ie[oe]);const Fe=ie[0],Pe=C(Fe)||c,Oe=l.convert(P.format,P.encoding),De=l.convert(P.type),qe=T(P.internalFormat,Oe,De,P.encoding),nt=c&&P.isVideoTexture!==!0,St=xe.__currentVersion===void 0||ve===!0;let j=N(P,Fe,Pe);te(34067,P,Pe);let Ce;if(Ee){nt&&St&&t.texStorage2D(34067,j,qe,Fe.width,Fe.height);for(let oe=0;oe<6;oe++){Ce=ie[oe].mipmaps;for(let Te=0;Te<Ce.length;Te++){const Se=Ce[Te];P.format!==Li?Oe!==null?nt?t.compressedTexSubImage2D(34069+oe,Te,0,0,Se.width,Se.height,Oe,Se.data):t.compressedTexImage2D(34069+oe,Te,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(34069+oe,Te,0,0,Se.width,Se.height,Oe,De,Se.data):t.texImage2D(34069+oe,Te,qe,Se.width,Se.height,0,Oe,De,Se.data)}}}else{Ce=P.mipmaps,nt&&St&&(Ce.length>0&&j++,t.texStorage2D(34067,j,qe,ie[0].width,ie[0].height));for(let oe=0;oe<6;oe++)if(He){nt?t.texSubImage2D(34069+oe,0,0,0,ie[oe].width,ie[oe].height,Oe,De,ie[oe].data):t.texImage2D(34069+oe,0,qe,ie[oe].width,ie[oe].height,0,Oe,De,ie[oe].data);for(let Te=0;Te<Ce.length;Te++){const Ke=Ce[Te].image[oe].image;nt?t.texSubImage2D(34069+oe,Te+1,0,0,Ke.width,Ke.height,Oe,De,Ke.data):t.texImage2D(34069+oe,Te+1,qe,Ke.width,Ke.height,0,Oe,De,Ke.data)}}else{nt?t.texSubImage2D(34069+oe,0,0,0,Oe,De,ie[oe]):t.texImage2D(34069+oe,0,qe,Oe,De,ie[oe]);for(let Te=0;Te<Ce.length;Te++){const Se=Ce[Te];nt?t.texSubImage2D(34069+oe,Te+1,0,0,Oe,De,Se.image[oe]):t.texImage2D(34069+oe,Te+1,qe,Oe,De,Se.image[oe])}}}F(P,Pe)&&U(34067),xe.__currentVersion=xe.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function Me(z,P,le,ve,xe){const Ee=l.convert(le.format,le.encoding),He=l.convert(le.type),ie=T(le.internalFormat,Ee,He,le.encoding);r.get(P).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,ie,P.width,P.height,P.depth,0,Ee,He,null):t.texImage2D(xe,0,ie,P.width,P.height,0,Ee,He,null)),t.bindFramebuffer(36160,z),at(P)?x.framebufferTexture2DMultisampleEXT(36160,ve,xe,r.get(le).__webglTexture,0,Bt(P)):s.framebufferTexture2D(36160,ve,xe,r.get(le).__webglTexture,0),t.bindFramebuffer(36160,null)}function ot(z,P,le){if(s.bindRenderbuffer(36161,z),P.depthBuffer&&!P.stencilBuffer){let ve=33189;if(le||at(P)){const xe=P.depthTexture;xe&&xe.isDepthTexture&&(xe.type===ns?ve=36012:xe.type===ts&&(ve=33190));const Ee=Bt(P);at(P)?x.renderbufferStorageMultisampleEXT(36161,Ee,ve,P.width,P.height):s.renderbufferStorageMultisample(36161,Ee,ve,P.width,P.height)}else s.renderbufferStorage(36161,ve,P.width,P.height);s.framebufferRenderbuffer(36160,36096,36161,z)}else if(P.depthBuffer&&P.stencilBuffer){const ve=Bt(P);le&&at(P)===!1?s.renderbufferStorageMultisample(36161,ve,35056,P.width,P.height):at(P)?x.renderbufferStorageMultisampleEXT(36161,ve,35056,P.width,P.height):s.renderbufferStorage(36161,34041,P.width,P.height),s.framebufferRenderbuffer(36160,33306,36161,z)}else{const ve=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let xe=0;xe<ve.length;xe++){const Ee=ve[xe],He=l.convert(Ee.format,Ee.encoding),ie=l.convert(Ee.type),Fe=T(Ee.internalFormat,He,ie,Ee.encoding),Pe=Bt(P);le&&at(P)===!1?s.renderbufferStorageMultisample(36161,Pe,Fe,P.width,P.height):at(P)?x.renderbufferStorageMultisampleEXT(36161,Pe,Fe,P.width,P.height):s.renderbufferStorage(36161,Fe,P.width,P.height)}}s.bindRenderbuffer(36161,null)}function Ye(z,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),V(P.depthTexture,0);const ve=r.get(P.depthTexture).__webglTexture,xe=Bt(P);if(P.depthTexture.format===rs)at(P)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,xe):s.framebufferTexture2D(36160,36096,3553,ve,0);else if(P.depthTexture.format===mo)at(P)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,xe):s.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(z){const P=r.get(z),le=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!P.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");Ye(P.__webglFramebuffer,z)}else if(le){P.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,P.__webglFramebuffer[ve]),P.__webglDepthbuffer[ve]=s.createRenderbuffer(),ot(P.__webglDepthbuffer[ve],z,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),ot(P.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function Ft(z,P,le){const ve=r.get(z);P!==void 0&&Me(ve.__webglFramebuffer,z,z.texture,36064,3553),le!==void 0&&Ue(z)}function an(z){const P=z.texture,le=r.get(z),ve=r.get(P);z.addEventListener("dispose",ce),z.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=P.version,f.memory.textures++);const xe=z.isWebGLCubeRenderTarget===!0,Ee=z.isWebGLMultipleRenderTargets===!0,He=C(z)||c;if(xe){le.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)le.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(le.__webglFramebuffer=s.createFramebuffer(),Ee)if(a.drawBuffers){const ie=z.texture;for(let Fe=0,Pe=ie.length;Fe<Pe;Fe++){const Oe=r.get(ie[Fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&z.samples>0&&at(z)===!1){const ie=Ee?P:[P];le.__webglMultisampledFramebuffer=s.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer);for(let Fe=0;Fe<ie.length;Fe++){const Pe=ie[Fe];le.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(36161,le.__webglColorRenderbuffer[Fe]);const Oe=l.convert(Pe.format,Pe.encoding),De=l.convert(Pe.type),qe=T(Pe.internalFormat,Oe,De,Pe.encoding),nt=Bt(z);s.renderbufferStorageMultisample(36161,nt,qe,z.width,z.height),s.framebufferRenderbuffer(36160,36064+Fe,36161,le.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(36161,null),z.depthBuffer&&(le.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(le.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ve.__webglTexture),te(34067,P,He);for(let ie=0;ie<6;ie++)Me(le.__webglFramebuffer[ie],z,P,36064,34069+ie);F(P,He)&&U(34067),t.unbindTexture()}else if(Ee){const ie=z.texture;for(let Fe=0,Pe=ie.length;Fe<Pe;Fe++){const Oe=ie[Fe],De=r.get(Oe);t.bindTexture(3553,De.__webglTexture),te(3553,Oe,He),Me(le.__webglFramebuffer,z,Oe,36064+Fe,3553),F(Oe,He)&&U(3553)}t.unbindTexture()}else{let ie=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(c?ie=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,ve.__webglTexture),te(ie,P,He),Me(le.__webglFramebuffer,z,P,36064,ie),F(P,He)&&U(ie),t.unbindTexture()}z.depthBuffer&&Ue(z)}function Xt(z){const P=C(z)||c,le=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let ve=0,xe=le.length;ve<xe;ve++){const Ee=le[ve];if(F(Ee,P)){const He=z.isWebGLCubeRenderTarget?34067:3553,ie=r.get(Ee).__webglTexture;t.bindTexture(He,ie),U(He),t.unbindTexture()}}}function bn(z){if(c&&z.samples>0&&at(z)===!1){const P=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],le=z.width,ve=z.height;let xe=16384;const Ee=[],He=z.stencilBuffer?33306:36096,ie=r.get(z),Fe=z.isWebGLMultipleRenderTargets===!0;if(Fe)for(let Pe=0;Pe<P.length;Pe++)t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Pe,36161,null),t.bindFramebuffer(36160,ie.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Pe,3553,null,0);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer);for(let Pe=0;Pe<P.length;Pe++){Ee.push(36064+Pe),z.depthBuffer&&Ee.push(He);const Oe=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Oe===!1&&(z.depthBuffer&&(xe|=256),z.stencilBuffer&&(xe|=1024)),Fe&&s.framebufferRenderbuffer(36008,36064,36161,ie.__webglColorRenderbuffer[Pe]),Oe===!0&&(s.invalidateFramebuffer(36008,[He]),s.invalidateFramebuffer(36009,[He])),Fe){const De=r.get(P[Pe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,De,0)}s.blitFramebuffer(0,0,le,ve,0,0,le,ve,xe,9728),S&&s.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Fe)for(let Pe=0;Pe<P.length;Pe++){t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Pe,36161,ie.__webglColorRenderbuffer[Pe]);const Oe=r.get(P[Pe]).__webglTexture;t.bindFramebuffer(36160,ie.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Pe,3553,Oe,0)}t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}}function Bt(z){return Math.min(g,z.samples)}function at(z){const P=r.get(z);return c&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function gn(z){const P=f.render.frame;b.get(z)!==P&&(b.set(z,P),z.update())}function Jt(z,P){const le=z.encoding,ve=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===dd||le!==us&&(le===zt?c===!1?e.has("EXT_sRGB")===!0&&ve===Li?(z.format=dd,z.minFilter=ei,z.generateMipmaps=!1):P=U0.sRGBToLinear(P):(ve!==Li||xe!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",le)),P}this.allocateTextureUnit=H,this.resetTextureUnits=fe,this.setTexture2D=V,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=re,this.rebindTextures=Ft,this.setupRenderTarget=an,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=at}function tE(s,e,t){const r=t.isWebGL2;function a(l,f=null){let c;if(l===ls)return 5121;if(l===XS)return 32819;if(l===YS)return 32820;if(l===$S)return 5120;if(l===jS)return 5122;if(l===F0)return 5123;if(l===qS)return 5124;if(l===ts)return 5125;if(l===ns)return 5126;if(l===ma)return r?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===KS)return 6406;if(l===Li)return 6408;if(l===QS)return 6409;if(l===JS)return 6410;if(l===rs)return 6402;if(l===mo)return 34041;if(l===ew)return 6403;if(l===ZS)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(l===dd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===tw)return 36244;if(l===nw)return 33319;if(l===iw)return 33320;if(l===rw)return 36249;if(l===yf||l===Sf||l===wf||l===Mf)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===yf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===wf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Mf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===yf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Sf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===wf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Mf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Hm||l===$m||l===jm||l===qm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Hm)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===$m)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===jm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===qm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===sw)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Xm||l===Ym)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Xm)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Ym)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Km||l===Zm||l===Qm||l===Jm||l===eg||l===tg||l===ng||l===ig||l===rg||l===sg||l===og||l===ag||l===lg||l===ug)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Km)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Zm)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Qm)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Jm)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===eg)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===tg)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===ng)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===ig)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===rg)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===sg)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===og)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===ag)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===lg)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===ug)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===cg)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===cg)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return l===so?r?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class nE extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ql extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Zf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const v of e.hand.values()){const y=t.getJointPose(v,r);if(p.joints[v.jointName]===void 0){const L=new Ql;L.matrixAutoUpdate=!1,L.visible=!1,p.joints[v.jointName]=L,p.add(L)}const E=p.joints[v.jointName];y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=y.radius),E.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}}class rE extends vi{constructor(e,t,r,a,l,f,c,h,p,_){if(_=_!==void 0?_:rs,_!==rs&&_!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===rs&&(r=ts),r===void 0&&_===mo&&(r=so),super(null,a,l,f,c,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Rn,this.minFilter=h!==void 0?h:Rn,this.flipY=!1,this.generateMipmaps=!1}}class sE extends _o{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=null,p=null,_=null,g=null,x=null,S=null;const b=t.getContextAttributes();let v=null,y=null;const E=[],L=[],D=new ti;D.layers.enable(1),D.viewport=new sn;const C=new ti;C.layers.enable(2),C.viewport=new sn;const A=[D,C],F=new nE;F.layers.enable(1),F.layers.enable(2);let U=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=E[B];return V===void 0&&(V=new Zf,E[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=E[B];return V===void 0&&(V=new Zf,E[B]=V),V.getGripSpace()},this.getHand=function(B){let V=E[B];return V===void 0&&(V=new Zf,E[B]=V),V.getHandSpace()};function N(B){const V=L.indexOf(B.inputSource);if(V===-1)return;const I=E[V];I!==void 0&&I.dispatchEvent({type:B.type,data:B.inputSource})}function w(){a.removeEventListener("select",N),a.removeEventListener("selectstart",N),a.removeEventListener("selectend",N),a.removeEventListener("squeeze",N),a.removeEventListener("squeezestart",N),a.removeEventListener("squeezeend",N),a.removeEventListener("end",w),a.removeEventListener("inputsourceschange",$);for(let B=0;B<E.length;B++){const V=L[B];V!==null&&(L[B]=null,E[B].disconnect(V))}U=null,T=null,e.setRenderTarget(v),x=null,g=null,_=null,a=null,y=null,H.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){l=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){c=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(B){if(a=B,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",N),a.addEventListener("selectstart",N),a.addEventListener("selectend",N),a.addEventListener("squeeze",N),a.addEventListener("squeezestart",N),a.addEventListener("squeezeend",N),a.addEventListener("end",w),a.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:a.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,V),a.updateRenderState({baseLayer:x}),y=new cs(x.framebufferWidth,x.framebufferHeight,{format:Li,type:ls,encoding:e.outputEncoding,stencilBuffer:b.stencil})}else{let V=null,I=null,W=null;b.depth&&(W=b.stencil?35056:33190,V=b.stencil?mo:rs,I=b.stencil?so:ts);const re={colorFormat:32856,depthFormat:W,scaleFactor:l};_=new XRWebGLBinding(a,t),g=_.createProjectionLayer(re),a.updateRenderState({layers:[g]}),y=new cs(g.textureWidth,g.textureHeight,{format:Li,type:ls,depthTexture:new rE(g.textureWidth,g.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:b.stencil,encoding:e.outputEncoding,samples:b.antialias?4:0});const me=e.properties.get(y);me.__ignoreDepthValues=g.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(1),h=null,f=await a.requestReferenceSpace(c),H.setContext(a),H.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function $(B){for(let V=0;V<B.removed.length;V++){const I=B.removed[V],W=L.indexOf(I);W>=0&&(L[W]=null,E[W].dispatchEvent({type:"disconnected",data:I}))}for(let V=0;V<B.added.length;V++){const I=B.added[V];let W=L.indexOf(I);if(W===-1){for(let me=0;me<E.length;me++)if(me>=L.length){L.push(I),W=me;break}else if(L[me]===null){L[me]=I,W=me;break}if(W===-1)break}const re=E[W];re&&re.dispatchEvent({type:"connected",data:I})}}const ce=new ee,X=new ee;function q(B,V,I){ce.setFromMatrixPosition(V.matrixWorld),X.setFromMatrixPosition(I.matrixWorld);const W=ce.distanceTo(X),re=V.projectionMatrix.elements,me=I.projectionMatrix.elements,we=re[14]/(re[10]-1),te=re[14]/(re[10]+1),Ne=(re[9]+1)/re[5],be=(re[9]-1)/re[5],Le=(re[8]-1)/re[0],Me=(me[8]+1)/me[0],ot=we*Le,Ye=we*Me,Ue=W/(-Le+Me),Ft=Ue*-Le;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ft),B.translateZ(Ue),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const an=we+Ue,Xt=te+Ue,bn=ot-Ft,Bt=Ye+(W-Ft),at=Ne*te/Xt*an,gn=be*te/Xt*an;B.projectionMatrix.makePerspective(bn,Bt,at,gn,an,Xt)}function ne(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(a===null)return;F.near=C.near=D.near=B.near,F.far=C.far=D.far=B.far,(U!==F.near||T!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,T=F.far);const V=B.parent,I=F.cameras;ne(F,V);for(let re=0;re<I.length;re++)ne(I[re],V);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),B.matrix.copy(F.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const W=B.children;for(let re=0,me=W.length;re<me;re++)W[re].updateMatrixWorld(!0);I.length===2?q(F,D,C):F.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(g!==null)return g.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(B){g!==null&&(g.fixedFoveation=B),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=B)};let de=null;function fe(B,V){if(p=V.getViewerPose(h||f),S=V,p!==null){const I=p.views;x!==null&&(e.setRenderTargetFramebuffer(y,x.framebuffer),e.setRenderTarget(y));let W=!1;I.length!==F.cameras.length&&(F.cameras.length=0,W=!0);for(let re=0;re<I.length;re++){const me=I[re];let we=null;if(x!==null)we=x.getViewport(me);else{const Ne=_.getViewSubImage(g,me);we=Ne.viewport,re===0&&(e.setRenderTargetTextures(y,Ne.colorTexture,g.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(y))}let te=A[re];te===void 0&&(te=new ti,te.layers.enable(re),te.viewport=new sn,A[re]=te),te.matrix.fromArray(me.transform.matrix),te.projectionMatrix.fromArray(me.projectionMatrix),te.viewport.set(we.x,we.y,we.width,we.height),re===0&&F.matrix.copy(te.matrix),W===!0&&F.cameras.push(te)}}for(let I=0;I<E.length;I++){const W=L[I],re=E[I];W!==null&&re!==void 0&&re.update(W,V,h||f)}de&&de(B,V),S=null}const H=new Y0;H.setAnimationLoop(fe),this.setAnimationLoop=function(B){de=B},this.dispose=function(){}}}function oE(s,e){function t(v,y){v.fogColor.value.copy(y.color),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function r(v,y,E,L,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(v,y):y.isMeshToonMaterial?(a(v,y),_(v,y)):y.isMeshPhongMaterial?(a(v,y),p(v,y)):y.isMeshStandardMaterial?(a(v,y),g(v,y),y.isMeshPhysicalMaterial&&x(v,y,D)):y.isMeshMatcapMaterial?(a(v,y),S(v,y)):y.isMeshDepthMaterial?a(v,y):y.isMeshDistanceMaterial?(a(v,y),b(v,y)):y.isMeshNormalMaterial?a(v,y):y.isLineBasicMaterial?(l(v,y),y.isLineDashedMaterial&&f(v,y)):y.isPointsMaterial?c(v,y,E,L):y.isSpriteMaterial?h(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.bumpMap&&(v.bumpMap.value=y.bumpMap,v.bumpScale.value=y.bumpScale,y.side===ii&&(v.bumpScale.value*=-1)),y.displacementMap&&(v.displacementMap.value=y.displacementMap,v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap),y.normalMap&&(v.normalMap.value=y.normalMap,v.normalScale.value.copy(y.normalScale),y.side===ii&&v.normalScale.value.negate()),y.specularMap&&(v.specularMap.value=y.specularMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const E=e.get(y).envMap;if(E&&(v.envMap.value=E,v.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap){v.lightMap.value=y.lightMap;const C=s.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=y.lightMapIntensity*C}y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity);let L;y.map?L=y.map:y.specularMap?L=y.specularMap:y.displacementMap?L=y.displacementMap:y.normalMap?L=y.normalMap:y.bumpMap?L=y.bumpMap:y.roughnessMap?L=y.roughnessMap:y.metalnessMap?L=y.metalnessMap:y.alphaMap?L=y.alphaMap:y.emissiveMap?L=y.emissiveMap:y.clearcoatMap?L=y.clearcoatMap:y.clearcoatNormalMap?L=y.clearcoatNormalMap:y.clearcoatRoughnessMap?L=y.clearcoatRoughnessMap:y.iridescenceMap?L=y.iridescenceMap:y.iridescenceThicknessMap?L=y.iridescenceThicknessMap:y.specularIntensityMap?L=y.specularIntensityMap:y.specularColorMap?L=y.specularColorMap:y.transmissionMap?L=y.transmissionMap:y.thicknessMap?L=y.thicknessMap:y.sheenColorMap?L=y.sheenColorMap:y.sheenRoughnessMap&&(L=y.sheenRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),v.uvTransform.value.copy(L.matrix));let D;y.aoMap?D=y.aoMap:y.lightMap&&(D=y.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),v.uv2Transform.value.copy(D.matrix))}function l(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity}function f(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function c(v,y,E,L){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*E,v.scale.value=L*.5,y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);let D;y.map?D=y.map:y.alphaMap&&(D=y.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),v.uvTransform.value.copy(D.matrix))}function h(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map),y.alphaMap&&(v.alphaMap.value=y.alphaMap),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);let E;y.map?E=y.map:y.alphaMap&&(E=y.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),v.uvTransform.value.copy(E.matrix))}function p(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function _(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function g(v,y){v.roughness.value=y.roughness,v.metalness.value=y.metalness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap),y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap),e.get(y).envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function x(v,y,E){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap)),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap),y.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),v.clearcoatNormalMap.value=y.clearcoatNormalMap,y.side===ii&&v.clearcoatNormalScale.value.negate())),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap)),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap)}function S(v,y){y.matcap&&(v.matcap.value=y.matcap)}function b(v,y){v.referencePosition.value.copy(y.referencePosition),v.nearDistance.value=y.nearDistance,v.farDistance.value=y.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:r}}function aE(s,e,t,r){let a={},l={},f=[];const c=t.isWebGL2?s.getParameter(35375):0;function h(L,D){const C=D.program;r.uniformBlockBinding(L,C)}function p(L,D){let C=a[L.id];C===void 0&&(b(L),C=_(L),a[L.id]=C,L.addEventListener("dispose",y));const A=D.program;r.updateUBOMapping(L,A);const F=e.render.frame;l[L.id]!==F&&(x(L),l[L.id]=F)}function _(L){const D=g();L.__bindingPointIndex=D;const C=s.createBuffer(),A=L.__size,F=L.usage;return s.bindBuffer(35345,C),s.bufferData(35345,A,F),s.bindBuffer(35345,null),s.bindBufferBase(35345,D,C),C}function g(){for(let L=0;L<c;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=a[L.id],C=L.uniforms,A=L.__cache;s.bindBuffer(35345,D);for(let F=0,U=C.length;F<U;F++){const T=C[F];if(S(T,F,A)===!0){const N=T.value,w=T.__offset;typeof N=="number"?(T.__data[0]=N,s.bufferSubData(35345,w,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):N.toArray(T.__data),s.bufferSubData(35345,w,T.__data))}}s.bindBuffer(35345,null)}function S(L,D,C){const A=L.value;if(C[D]===void 0)return typeof A=="number"?C[D]=A:C[D]=A.clone(),!0;if(typeof A=="number"){if(C[D]!==A)return C[D]=A,!0}else{const F=C[D];if(F.equals(A)===!1)return F.copy(A),!0}return!1}function b(L){const D=L.uniforms;let C=0;const A=16;let F=0;for(let U=0,T=D.length;U<T;U++){const N=D[U],w=v(N);if(N.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=C,U>0){F=C%A;const $=A-F;F!==0&&$-w.boundary<0&&(C+=A-F,N.__offset=C)}C+=w.storage}return F=C%A,F>0&&(C+=A-F),L.__size=C,L.__cache={},this}function v(L){const D=L.value,C={boundary:0,storage:0};return typeof D=="number"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),C}function y(L){const D=L.target;D.removeEventListener("dispose",y);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function E(){for(const L in a)s.deleteBuffer(a[L]);f=[],a={},l={}}return{bind:h,update:p,dispose:E}}function lE(){const s=au("canvas");return s.style.display="block",s}function ev(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:lE(),t=s.context!==void 0?s.context:null,r=s.depth!==void 0?s.depth:!0,a=s.stencil!==void 0?s.stencil:!0,l=s.antialias!==void 0?s.antialias:!1,f=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,h=s.powerPreference!==void 0?s.powerPreference:"default",p=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let _;t!==null?_=t.getContextAttributes().alpha:_=s.alpha!==void 0?s.alpha:!1;let g=null,x=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=us,this.physicallyCorrectLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let y=!1,E=0,L=0,D=null,C=-1,A=null;const F=new sn,U=new sn;let T=null,N=e.width,w=e.height,$=1,ce=null,X=null;const q=new sn(0,0,N,w),ne=new sn(0,0,N,w);let de=!1;const fe=new X0;let H=!1,B=!1,V=null;const I=new on,W=new ft,re=new ee,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return D===null?$:1}let te=t;function Ne(R,Q){for(let ae=0;ae<R.length;ae++){const K=R[ae],ue=e.getContext(K,Q);if(ue!==null)return ue}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cd}`),e.addEventListener("webglcontextlost",qe,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",St,!1),te===null){const Q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Q.shift(),te=Ne(Q,R),te===null)throw Ne(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let be,Le,Me,ot,Ye,Ue,Ft,an,Xt,bn,Bt,at,gn,Jt,z,P,le,ve,xe,Ee,He,ie,Fe,Pe;function Oe(){be=new x3(te),Le=new h3(te,be,s),be.init(Le),ie=new tE(te,be,Le),Me=new Jb(te,be,Le),ot=new w3,Ye=new Ub,Ue=new eE(te,be,Me,Ye,Le,ie,ot),Ft=new m3(v),an=new _3(v),Xt=new Iw(te,Le),Fe=new f3(te,be,Xt,Le),bn=new y3(te,Xt,ot,Fe),Bt=new T3(te,bn,Xt,ot),xe=new E3(te,Le,Ue),P=new p3(Ye),at=new Ob(v,Ft,an,be,Le,Fe,P),gn=new oE(v,Ye),Jt=new Vb,z=new qb(be,Le),ve=new c3(v,Ft,Me,Bt,_,f),le=new Qb(v,Bt,Le),Pe=new aE(te,ot,Le,Me),Ee=new d3(te,be,ot,Le),He=new S3(te,be,ot,Le),ot.programs=at.programs,v.capabilities=Le,v.extensions=be,v.properties=Ye,v.renderLists=Jt,v.shadowMap=le,v.state=Me,v.info=ot}Oe();const De=new sE(v,te);this.xr=De,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(N,w,!1))},this.getSize=function(R){return R.set(N,w)},this.setSize=function(R,Q,ae){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,w=Q,e.width=Math.floor(R*$),e.height=Math.floor(Q*$),ae!==!1&&(e.style.width=R+"px",e.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(N*$,w*$).floor()},this.setDrawingBufferSize=function(R,Q,ae){N=R,w=Q,$=ae,e.width=Math.floor(R*ae),e.height=Math.floor(Q*ae),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,Q,ae,K){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,Q,ae,K),Me.viewport(F.copy(q).multiplyScalar($).floor())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,Q,ae,K){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,Q,ae,K),Me.scissor(U.copy(ne).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){Me.setScissorTest(de=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,Q=!0,ae=!0){let K=0;R&&(K|=16384),Q&&(K|=256),ae&&(K|=1024),te.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Jt.dispose(),z.dispose(),Ye.dispose(),Ft.dispose(),an.dispose(),Bt.dispose(),Fe.dispose(),Pe.dispose(),at.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ke),De.removeEventListener("sessionend",Nt),V&&(V.dispose(),V=null),Tt.stop()};function qe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ot.autoReset,Q=le.enabled,ae=le.autoUpdate,K=le.needsUpdate,ue=le.type;Oe(),ot.autoReset=R,le.enabled=Q,le.autoUpdate=ae,le.needsUpdate=K,le.type=ue}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function j(R){const Q=R.target;Q.removeEventListener("dispose",j),Ce(Q)}function Ce(R){oe(R),Ye.remove(R)}function oe(R){const Q=Ye.get(R).programs;Q!==void 0&&(Q.forEach(function(ae){at.releaseProgram(ae)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ae,K,ue,Be){Q===null&&(Q=me);const We=ue.isMesh&&ue.matrixWorld.determinant()<0,Xe=kr(R,Q,ae,K,ue);Me.setMaterial(K,We);let je=ae.index;const lt=ae.attributes.position;if(je===null){if(lt===void 0||lt.count===0)return}else if(je.count===0)return;let Je=1;K.wireframe===!0&&(je=bn.getWireframeAttribute(ae),Je=2),Fe.setup(ue,K,Xe,ae,je);let et,Mt=Ee;je!==null&&(et=Xt.get(je),Mt=He,Mt.setIndex(et));const xi=je!==null?je.count:lt.count,er=ae.drawRange.start*Je,tr=ae.drawRange.count*Je,it=Be!==null?Be.start*Je:0,rt=Be!==null?Be.count*Je:1/0,yi=Math.max(er,it),Pt=Math.min(xi,er+tr,it+rt)-1,en=Math.max(0,Pt-yi+1);if(en!==0){if(ue.isMesh)K.wireframe===!0?(Me.setLineWidth(K.wireframeLinewidth*we()),Mt.setMode(1)):Mt.setMode(4);else if(ue.isLine){let Si=K.linewidth;Si===void 0&&(Si=1),Me.setLineWidth(Si*we()),ue.isLineSegments?Mt.setMode(1):ue.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else ue.isPoints?Mt.setMode(0):ue.isSprite&&Mt.setMode(4);if(ue.isInstancedMesh)Mt.renderInstances(yi,en,ue.count);else if(ae.isInstancedBufferGeometry){const Si=Math.min(ae.instanceCount,ae._maxInstanceCount);Mt.renderInstances(yi,en,Si)}else Mt.render(yi,en)}},this.compile=function(R,Q){function ae(K,ue,Be){K.transparent===!0&&K.side===Lr?(K.side=ii,K.needsUpdate=!0,_i(K,ue,Be),K.side=fo,K.needsUpdate=!0,_i(K,ue,Be),K.side=Lr):_i(K,ue,Be)}x=z.get(R),x.init(),b.push(x),R.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(v.physicallyCorrectLights),R.traverse(function(K){const ue=K.material;if(ue)if(Array.isArray(ue))for(let Be=0;Be<ue.length;Be++){const We=ue[Be];ae(We,R,K)}else ae(ue,R,K)}),b.pop(),x=null};let Te=null;function Se(R){Te&&Te(R)}function Ke(){Tt.stop()}function Nt(){Tt.start()}const Tt=new Y0;Tt.setAnimationLoop(Se),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(R){Te=R,De.setAnimationLoop(R),R===null?Tt.stop():Tt.start()},De.addEventListener("sessionstart",Ke),De.addEventListener("sessionend",Nt),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(Q),Q=De.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Q,D),x=z.get(R,b.length),x.init(),b.push(x),I.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),fe.setFromProjectionMatrix(I),B=this.localClippingEnabled,H=P.init(this.clippingPlanes,B,Q),g=Jt.get(R,S.length),g.init(),S.push(g),si(R,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,X),H===!0&&P.beginShadows();const ae=x.state.shadowsArray;if(le.render(ae,R,Q),H===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(g,R),x.setupLights(v.physicallyCorrectLights),Q.isArrayCamera){const K=Q.cameras;for(let ue=0,Be=K.length;ue<Be;ue++){const We=K[ue];wt(g,R,We,We.viewport)}}else wt(g,R,Q);D!==null&&(Ue.updateMultisampleRenderTarget(D),Ue.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(v,R,Q),Fe.resetDefaultState(),C=-1,A=null,b.pop(),b.length>0?x=b[b.length-1]:x=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function si(R,Q,ae,K){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){K&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(I);const We=Bt.update(R),Xe=R.material;Xe.visible&&g.push(R,We,Xe,ae,re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==ot.render.frame&&(R.skeleton.update(),R.skeleton.frame=ot.render.frame),!R.frustumCulled||fe.intersectsObject(R))){K&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(I);const We=Bt.update(R),Xe=R.material;if(Array.isArray(Xe)){const je=We.groups;for(let lt=0,Je=je.length;lt<Je;lt++){const et=je[lt],Mt=Xe[et.materialIndex];Mt&&Mt.visible&&g.push(R,We,Mt,ae,re.z,et)}}else Xe.visible&&g.push(R,We,Xe,ae,re.z,null)}}const Be=R.children;for(let We=0,Xe=Be.length;We<Xe;We++)si(Be[We],Q,ae,K)}function wt(R,Q,ae,K){const ue=R.opaque,Be=R.transmissive,We=R.transparent;x.setupLightsView(ae),Be.length>0&&$n(ue,Q,ae),K&&Me.viewport(F.copy(K)),ue.length>0&&ln(ue,Q,ae),Be.length>0&&ln(Be,Q,ae),We.length>0&&ln(We,Q,ae),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function $n(R,Q,ae){const K=Le.isWebGL2;V===null&&(V=new cs(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ma:ls,minFilter:Su,samples:K&&l===!0?4:0})),v.getDrawingBufferSize(W),K?V.setSize(W.x,W.y):V.setSize(hd(W.x),hd(W.y));const ue=v.getRenderTarget();v.setRenderTarget(V),v.clear();const Be=v.toneMapping;v.toneMapping=Qi,ln(R,Q,ae),v.toneMapping=Be,Ue.updateMultisampleRenderTarget(V),Ue.updateRenderTargetMipmap(V),v.setRenderTarget(ue)}function ln(R,Q,ae){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let ue=0,Be=R.length;ue<Be;ue++){const We=R[ue],Xe=We.object,je=We.geometry,lt=K===null?We.material:K,Je=We.group;Xe.layers.test(ae.layers)&&ba(Xe,Q,ae,je,lt,Je)}}function ba(R,Q,ae,K,ue,Be){R.onBeforeRender(v,Q,ae,K,ue,Be),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ue.onBeforeRender(v,Q,ae,K,R,Be),ue.transparent===!0&&ue.side===Lr?(ue.side=ii,ue.needsUpdate=!0,v.renderBufferDirect(ae,Q,K,ue,R,Be),ue.side=fo,ue.needsUpdate=!0,v.renderBufferDirect(ae,Q,K,ue,R,Be),ue.side=Lr):v.renderBufferDirect(ae,Q,K,ue,R,Be),R.onAfterRender(v,Q,ae,K,ue,Be)}function _i(R,Q,ae){Q.isScene!==!0&&(Q=me);const K=Ye.get(R),ue=x.state.lights,Be=x.state.shadowsArray,We=ue.state.version,Xe=at.getParameters(R,ue.state,Be,Q,ae),je=at.getProgramCacheKey(Xe);let lt=K.programs;K.environment=R.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(R.isMeshStandardMaterial?an:Ft).get(R.envMap||K.environment),lt===void 0&&(R.addEventListener("dispose",j),lt=new Map,K.programs=lt);let Je=lt.get(je);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===We)return ds(R,Xe),Je}else Xe.uniforms=at.getUniforms(R),R.onBuild(ae,Xe,v),R.onBeforeCompile(Xe,v),Je=at.acquireProgram(Xe,je),lt.set(je,Je),K.uniforms=Xe.uniforms;const et=K.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=P.uniform),ds(R,Xe),K.needsLights=zr(R),K.lightsStateVersion=We,K.needsLights&&(et.ambientLightColor.value=ue.state.ambient,et.lightProbe.value=ue.state.probe,et.directionalLights.value=ue.state.directional,et.directionalLightShadows.value=ue.state.directionalShadow,et.spotLights.value=ue.state.spot,et.spotLightShadows.value=ue.state.spotShadow,et.rectAreaLights.value=ue.state.rectArea,et.ltc_1.value=ue.state.rectAreaLTC1,et.ltc_2.value=ue.state.rectAreaLTC2,et.pointLights.value=ue.state.point,et.pointLightShadows.value=ue.state.pointShadow,et.hemisphereLights.value=ue.state.hemi,et.directionalShadowMap.value=ue.state.directionalShadowMap,et.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,et.spotShadowMap.value=ue.state.spotShadowMap,et.spotLightMatrix.value=ue.state.spotLightMatrix,et.spotLightMap.value=ue.state.spotLightMap,et.pointShadowMap.value=ue.state.pointShadowMap,et.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Mt=Je.getUniforms(),xi=ru.seqWithValue(Mt.seq,et);return K.currentProgram=Je,K.uniformsList=xi,Je}function ds(R,Q){const ae=Ye.get(R);ae.outputEncoding=Q.outputEncoding,ae.instancing=Q.instancing,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function kr(R,Q,ae,K,ue){Q.isScene!==!0&&(Q=me),Ue.resetTextureUnits();const Be=Q.fog,We=K.isMeshStandardMaterial?Q.environment:null,Xe=D===null?v.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:us,je=(K.isMeshStandardMaterial?an:Ft).get(K.envMap||We),lt=K.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Je=!!K.normalMap&&!!ae.attributes.tangent,et=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,xi=!!ae.morphAttributes.color,er=K.toneMapped?v.toneMapping:Qi,tr=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,it=tr!==void 0?tr.length:0,rt=Ye.get(K),yi=x.state.lights;if(H===!0&&(B===!0||R!==A)){const _n=R===A&&K.id===C;P.setState(K,R,_n)}let Pt=!1;K.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==yi.state.version||rt.outputEncoding!==Xe||ue.isInstancedMesh&&rt.instancing===!1||!ue.isInstancedMesh&&rt.instancing===!0||ue.isSkinnedMesh&&rt.skinning===!1||!ue.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==je||K.fog===!0&&rt.fog!==Be||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==P.numPlanes||rt.numIntersection!==P.numIntersection)||rt.vertexAlphas!==lt||rt.vertexTangents!==Je||rt.morphTargets!==et||rt.morphNormals!==Mt||rt.morphColors!==xi||rt.toneMapping!==er||Le.isWebGL2===!0&&rt.morphTargetsCount!==it)&&(Pt=!0):(Pt=!0,rt.__version=K.version);let en=rt.currentProgram;Pt===!0&&(en=_i(K,Q,ue));let Si=!1,nr=!1,ir=!1;const xt=en.getUniforms(),Ii=rt.uniforms;if(Me.useProgram(en.program)&&(Si=!0,nr=!0,ir=!0),K.id!==C&&(C=K.id,nr=!0),Si||A!==R){if(xt.setValue(te,"projectionMatrix",R.projectionMatrix),Le.logarithmicDepthBuffer&&xt.setValue(te,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),A!==R&&(A=R,nr=!0,ir=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const _n=xt.map.cameraPosition;_n!==void 0&&_n.setValue(te,re.setFromMatrixPosition(R.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(te,"isOrthographic",R.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ue.isSkinnedMesh)&&xt.setValue(te,"viewMatrix",R.matrixWorldInverse)}if(ue.isSkinnedMesh){xt.setOptional(te,ue,"bindMatrix"),xt.setOptional(te,ue,"bindMatrixInverse");const _n=ue.skeleton;_n&&(Le.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),xt.setValue(te,"boneTexture",_n.boneTexture,Ue),xt.setValue(te,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vn=ae.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0&&Le.isWebGL2===!0)&&xe.update(ue,ae,K,en),(nr||rt.receiveShadow!==ue.receiveShadow)&&(rt.receiveShadow=ue.receiveShadow,xt.setValue(te,"receiveShadow",ue.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ii.envMap.value=je,Ii.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),nr&&(xt.setValue(te,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&Eu(Ii,ir),Be&&K.fog===!0&&gn.refreshFogUniforms(Ii,Be),gn.refreshMaterialUniforms(Ii,K,$,w,V),ru.upload(te,rt.uniformsList,Ii,Ue)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ru.upload(te,rt.uniformsList,Ii,Ue),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(te,"center",ue.center),xt.setValue(te,"modelViewMatrix",ue.modelViewMatrix),xt.setValue(te,"normalMatrix",ue.normalMatrix),xt.setValue(te,"modelMatrix",ue.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const _n=K.uniformsGroups;for(let yo=0,Tu=_n.length;yo<Tu;yo++)if(Le.isWebGL2){const Fr=_n[yo];Pe.update(Fr,en),Pe.bind(Fr,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Eu(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function zr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,Q,ae){Ye.get(R.texture).__webglTexture=Q,Ye.get(R.depthTexture).__webglTexture=ae;const K=Ye.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ae===void 0,K.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Q){const ae=Ye.get(R);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,ae=0){D=R,E=Q,L=ae;let K=!0;if(R){const je=Ye.get(R);je.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),K=!1):je.__webglFramebuffer===void 0?Ue.setupRenderTarget(R):je.__hasExternalTextures&&Ue.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture)}let ue=null,Be=!1,We=!1;if(R){const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture)&&(We=!0);const lt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ue=lt[Q],Be=!0):Le.isWebGL2&&R.samples>0&&Ue.useMultisampledRTT(R)===!1?ue=Ye.get(R).__webglMultisampledFramebuffer:ue=lt,F.copy(R.viewport),U.copy(R.scissor),T=R.scissorTest}else F.copy(q).multiplyScalar($).floor(),U.copy(ne).multiplyScalar($).floor(),T=de;if(Me.bindFramebuffer(36160,ue)&&Le.drawBuffers&&K&&Me.drawBuffers(R,ue),Me.viewport(F),Me.scissor(U),Me.setScissorTest(T),Be){const je=Ye.get(R.texture);te.framebufferTexture2D(36160,36064,34069+Q,je.__webglTexture,ae)}else if(We){const je=Ye.get(R.texture),lt=Q||0;te.framebufferTextureLayer(36160,36064,je.__webglTexture,ae||0,lt)}C=-1},this.readRenderTargetPixels=function(R,Q,ae,K,ue,Be,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Xe=Xe[We]),Xe){Me.bindFramebuffer(36160,Xe);try{const je=R.texture,lt=je.format,Je=je.type;if(lt!==Li&&ie.convert(lt)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===ma&&(be.has("EXT_color_buffer_half_float")||Le.isWebGL2&&be.has("EXT_color_buffer_float"));if(Je!==ls&&ie.convert(Je)!==te.getParameter(35738)&&!(Je===ns&&(Le.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-K&&ae>=0&&ae<=R.height-ue&&te.readPixels(Q,ae,K,ue,ie.convert(lt),ie.convert(Je),Be)}finally{const je=D!==null?Ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(R,Q,ae=0){const K=Math.pow(2,-ae),ue=Math.floor(Q.image.width*K),Be=Math.floor(Q.image.height*K);Ue.setTexture2D(Q,0),te.copyTexSubImage2D(3553,ae,0,0,R.x,R.y,ue,Be),Me.unbindTexture()},this.copyTextureToTexture=function(R,Q,ae,K=0){const ue=Q.image.width,Be=Q.image.height,We=ie.convert(ae.format),Xe=ie.convert(ae.type);Ue.setTexture2D(ae,0),te.pixelStorei(37440,ae.flipY),te.pixelStorei(37441,ae.premultiplyAlpha),te.pixelStorei(3317,ae.unpackAlignment),Q.isDataTexture?te.texSubImage2D(3553,K,R.x,R.y,ue,Be,We,Xe,Q.image.data):Q.isCompressedTexture?te.compressedTexSubImage2D(3553,K,R.x,R.y,Q.mipmaps[0].width,Q.mipmaps[0].height,We,Q.mipmaps[0].data):te.texSubImage2D(3553,K,R.x,R.y,We,Xe,Q.image),K===0&&ae.generateMipmaps&&te.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ae,K,ue=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,Xe=R.max.z-R.min.z+1,je=ie.convert(K.format),lt=ie.convert(K.type);let Je;if(K.isData3DTexture)Ue.setTexture3D(K,0),Je=32879;else if(K.isDataArrayTexture)Ue.setTexture2DArray(K,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,K.flipY),te.pixelStorei(37441,K.premultiplyAlpha),te.pixelStorei(3317,K.unpackAlignment);const et=te.getParameter(3314),Mt=te.getParameter(32878),xi=te.getParameter(3316),er=te.getParameter(3315),tr=te.getParameter(32877),it=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;te.pixelStorei(3314,it.width),te.pixelStorei(32878,it.height),te.pixelStorei(3316,R.min.x),te.pixelStorei(3315,R.min.y),te.pixelStorei(32877,R.min.z),ae.isDataTexture||ae.isData3DTexture?te.texSubImage3D(Je,ue,Q.x,Q.y,Q.z,Be,We,Xe,je,lt,it.data):ae.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(Je,ue,Q.x,Q.y,Q.z,Be,We,Xe,je,it.data)):te.texSubImage3D(Je,ue,Q.x,Q.y,Q.z,Be,We,Xe,je,lt,it),te.pixelStorei(3314,et),te.pixelStorei(32878,Mt),te.pixelStorei(3316,xi),te.pixelStorei(3315,er),te.pixelStorei(32877,tr),ue===0&&K.generateMipmaps&&te.generateMipmap(Je),Me.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ue.setTextureCube(R,0):R.isData3DTexture?Ue.setTexture3D(R,0):R.isDataArrayTexture?Ue.setTexture2DArray(R,0):Ue.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){E=0,L=0,D=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uE extends ev{}uE.prototype.isWebGL1Renderer=!0;class cE extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);const oo=50,ao=80,dE=!0,Qf=5,hE=new fE,tv=yE();class pE{constructor(e){Gt(this,"_ref");Gt(this,"_speed",-1);Gt(this,"_horizontalPressure",-1);Gt(this,"_verticalPressure",-1);Gt(this,"_waveFrequencyX",-1);Gt(this,"_waveFrequencyY",-1);Gt(this,"_waveAmplitude",-1);Gt(this,"_shadows",-1);Gt(this,"_highlights",-1);Gt(this,"_saturation",-1);Gt(this,"_brightness",-1);Gt(this,"_colorBlending",-1);Gt(this,"_colors",[]);Gt(this,"_wireframe",!1);Gt(this,"_backgroundColor","#FFFFFF");Gt(this,"_backgroundAlpha",1);Gt(this,"requestRef",-1);Gt(this,"sizeObserver");Gt(this,"sceneState");const{ref:t,speed:r=4,horizontalPressure:a=3,verticalPressure:l=3,waveFrequencyX:f=5,waveFrequencyY:c=5,waveAmplitude:h=3,colors:p,highlights:_=4,shadows:g=4,colorSaturation:x=0,colorBrightness:S=1,colorBlending:b=5,wireframe:v=!1,backgroundColor:y="#FFFFFF",backgroundAlpha:E=1,resolution:L=1,seed:D}=e;this._ref=t,this.destroy=this.destroy.bind(this),this._initScene=this._initScene.bind(this),this._buildMaterial=this._buildMaterial.bind(this),this.speed=r,this.horizontalPressure=a,this.verticalPressure=l,this.waveFrequencyX=f,this.waveFrequencyY=c,this.waveAmplitude=h,this.colorBlending=b,this.colors=p,this.shadows=g,this.highlights=_,this.colorSaturation=x,this.colorBrightness=S,this.wireframe=v,this.backgroundColor=y,this.backgroundAlpha=E,this.sceneState=this._initScene(L);let C=D!==void 0?D:xE();const A=()=>{const{renderer:U,camera:T,scene:N,meshes:w}=this.sceneState;Math.floor(C*10)%5===0&&_E(t),U.setClearColor(this._backgroundColor,this._backgroundAlpha),w.forEach($=>{const ce=this._ref.width,X=this._ref.height,q=[...this._colors.map(ne=>({is_active:ne.enabled,color:new _t(ne.color),influence:ne.influence})),...Array.from({length:Qf-this._colors.length}).map(()=>({is_active:!1,color:new _t(0)}))];C+=hE.getDelta()*this._speed,$.material.uniforms.u_time.value=C,$.material.uniforms.u_resolution={value:new ft(ce,X)},$.material.uniforms.u_color_pressure={value:new ft(this._horizontalPressure,this._verticalPressure)},$.material.uniforms.u_wave_frequency_x={value:this._waveFrequencyX},$.material.uniforms.u_wave_frequency_y={value:this._waveFrequencyY},$.material.uniforms.u_wave_amplitude={value:this._waveAmplitude},$.material.uniforms.u_plane_width={value:oo},$.material.uniforms.u_plane_height={value:ao},$.material.uniforms.u_color_blending={value:this._colorBlending},$.material.uniforms.u_colors={value:q},$.material.uniforms.u_colors_count={value:Qf},$.material.uniforms.u_shadows={value:this._shadows},$.material.uniforms.u_highlights={value:this._highlights},$.material.uniforms.u_saturation={value:this._saturation},$.material.uniforms.u_brightness={value:this._brightness},$.material.wireframe=this._wireframe}),U.render(N,T),this.requestRef=requestAnimationFrame(A)},F=()=>{const{renderer:U}=this.sceneState,T=U.domElement,N=T.clientWidth,w=T.clientHeight;this.sceneState.renderer.setSize(N,w,!1),Yg(this.sceneState.camera,N,w)};this.sizeObserver=new ResizeObserver(U=>{F()}),this.sizeObserver.observe(t),A()}destroy(){this&&(cancelAnimationFrame(this.requestRef),this.sizeObserver.disconnect())}set speed(e){this._speed=e/20}set horizontalPressure(e){this._horizontalPressure=e/4}set verticalPressure(e){this._verticalPressure=e/4}set waveFrequencyX(e){this._waveFrequencyX=e*.04}set waveFrequencyY(e){this._waveFrequencyY=e*.04}set waveAmplitude(e){this._waveAmplitude=e*.75}set colors(e){this._colors=e}set highlights(e){this._highlights=e/100}set shadows(e){this._shadows=e/100}set colorSaturation(e){this._saturation=e/10}set colorBrightness(e){this._brightness=e}set colorBlending(e){this._colorBlending=e/10}set wireframe(e){this._wireframe=e}set resolution(e){this.sceneState=this._initScene(e)}set backgroundColor(e){this._backgroundColor=e}set backgroundAlpha(e){this._backgroundAlpha=e}_initScene(e){const t=this._ref.width,r=this._ref.height,a=new ev({alpha:!0,canvas:this._ref});a.setClearColor(16711680,.5),a.setSize(t,r,!1);const l=[],f=new cE,c=this._buildMaterial(t,r),h=new Mu(oo,ao,240*e,240*e),p=new Zi(h,c);p.rotation.x=-Math.PI/3.5,p.position.z=-1,l.push(p),f.add(p);const _=new Pd(0,0,0,0,0,0);return _.position.z=5,Yg(_,t,r),{renderer:a,camera:_,scene:f,meshes:l,resolution:e}}_buildMaterial(e,t){const r=[...this._colors.map(f=>({is_active:f.enabled,color:new _t(f.color),influence:f.influence})),...Array.from({length:Qf-this._colors.length}).map(()=>({is_active:!1,color:new _t(0)}))],a={u_time:{value:0},u_color_pressure:{value:new ft(this._horizontalPressure,this._verticalPressure)},u_wave_frequency_x:{value:this._waveFrequencyX},u_wave_frequency_y:{value:this._waveFrequencyY},u_wave_amplitude:{value:this._waveAmplitude},u_resolution:{value:new ft(e,t)},u_colors:{value:r},u_colors_count:{value:this._colors.length},u_plane_width:{value:oo},u_plane_height:{value:ao},u_shadows:{value:this._shadows},u_highlights:{value:this._highlights}},l=new Ir({uniforms:a,vertexShader:Kg()+vE()+Zg()+mE(),fragmentShader:Kg()+Zg()+gE()});return l.wireframe=dE,l}}function Yg(s,e,t){const r=e*t/1e6*oo*ao/1.5,a=e/t,l=Math.sqrt(r*a),f=r/l,c=-oo/2,h=Math.min((c+l)/1.5,oo/2),p=ao/4,_=Math.max((p-f)/2,-ao/4),g=-100,x=1e3;s instanceof Pd?(s.left=c,s.right=h,s.top=p,s.bottom=_,s.near=g,s.far=x,s.updateProjectionMatrix()):s instanceof ti&&(s.aspect=e/t,s.updateProjectionMatrix())}function mE(){return`

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
`}function gE(){return`

void main(){
    vec3 color = v_color;
    
    color.rgb += pow(v_displacement_amount, 1.0) * u_highlights;
    color.rgb -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;
    
    gl_FragColor = vec4(color,1.0);
}
`}const Kg=()=>`
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

    `,vE=()=>`

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

    `,Zg=()=>`

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
`,Qg=s=>{s.id=tv,s.href="https://neat.firecms.co",s.target="_blank",s.style.position="absolute",s.style.display="block",s.style.bottom="0",s.style.right="0",s.style.padding="10px",s.style.color="#dcdcdc",s.style.opacity="0.8",s.style.fontFamily="sans-serif",s.style.fontSize="16px",s.style.fontWeight="bold",s.style.textDecoration="none",s.style.zIndex="10000",s.innerHTML="NEAT"},_E=s=>{var r,a;const e=(r=s.parentElement)==null?void 0:r.getElementsByTagName("a");if(e){for(let l=0;l<e.length;l++)if(e[l].id===tv){Qg(e[l]);return}}const t=document.createElement("a");Qg(t),(a=s.parentElement)==null||a.appendChild(t)};function xE(){const s=new Date,e=s.getMinutes(),t=s.getSeconds();return e*60+t}function yE(s=6){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let r=0;r<s;r++){const a=Math.floor(Math.random()*e.length);t+=e.charAt(a)}return t}const SE=()=>{const s=pt.useRef(null),e=pt.useRef(null);return pt.useEffect(()=>{const t=document.createElement("style");return t.textContent="a { display: none !important; }",document.head.appendChild(t),()=>document.head.removeChild(t)},[]),pt.useEffect(()=>{if(!s.current)return;const t={colors:[{color:"#FFFFFF",enabled:!0},{color:"#F9FAFB",enabled:!0},{color:"#F7F7FF",enabled:!0},{color:"#F8F9F9",enabled:!0},{color:"#F5F6FA",enabled:!0}],speed:5,horizontalPressure:3,verticalPressure:5,waveFrequencyX:1,waveFrequencyY:3,waveAmplitude:8,shadows:4,highlights:5,colorBrightness:1,colorSaturation:2,wireframe:!1,colorBlending:7,backgroundColor:"#FFFFFF",backgroundAlpha:1,grainScale:1,grainSparsity:0,grainIntensity:.175,grainSpeed:1,resolution:2,yOffset:0};return e.current=new pE({ref:s.current,...t}),()=>{var r;(r=e.current)==null||r.destroy()}},[]),vt.jsx("canvas",{id:"gradientCanvas",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1},ref:s})};function wE(){const[s,e]=pt.useState(()=>{const c=localStorage.getItem("ITEMS");return c?JSON.parse(c):[]}),[t,r]=pt.useState("#0b3954");pt.useEffect(()=>{localStorage.setItem("ITEMS",JSON.stringify(s))},[s]);const a=c=>{e(h=>[...h,{id:crypto.randomUUID(),title:c,completed:!1}])},l=(c,h)=>{e(p=>p.map(_=>_.id===c?{..._,completed:h}:_))},f=c=>{e(h=>h.filter(p=>p.id!==c))};return pt.useEffect(()=>{document.body.style.backgroundColor=t},[t]),vt.jsxs(vt.Fragment,{children:[vt.jsx(SE,{onBackgroundColorChange:r}),vt.jsxs("div",{className:"app-container",children:[vt.jsx(t0,{onSubmit:a}),vt.jsx("h1",{className:"header",children:"Todo List:"}),vt.jsx(L0,{todos:s,toggleTodo:l,deleteTodo:f})]})]})}const nv=document.getElementById("root");if(!nv)throw new Error("Root container not found");Y_.createRoot(nv).render(vt.jsx(e0.StrictMode,{children:vt.jsx(wE,{})}));
