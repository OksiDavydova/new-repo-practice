(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[10],{102:function(e,t,n){},111:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return a}))},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return Y}));var o=n(0),r=n.n(o);function a(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o},i=n(15);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function l(e){return"number"===typeof e&&!isNaN(e)}function d(e){return"boolean"===typeof e}function f(e){return"string"===typeof e}function p(e){return"function"===typeof e}function m(e){return f(e)||p(e)?e:null}function g(e){return 0===e||e}var v=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e){return Object(o.isValidElement)(e)||f(e)||p(e)||l(e)}var y={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},h={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function O(e){var t=e.enter,n=e.exit,a=e.appendPosition,s=void 0!==a&&a,i=e.collapse,c=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var a=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=s?t+"--"+i:t,g=s?n+"--"+i:n,v=Object(o.useRef)(),b=Object(o.useRef)(0);function y(e){if(e.target===f.current){var t=f.current;t.removeEventListener("animationend",y),0===b.current&&(t.className=v.current)}}function h(){var e=f.current;e.removeEventListener("animationend",h),c?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()}return Object(o.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+m,e.addEventListener("animationend",y)}()}),[]),Object(o.useEffect)((function(){p||(u?h():function(){b.current=1;var e=f.current;e.className+=" "+g,e.addEventListener("animationend",h)}())}),[p]),r.a.createElement(r.a.Fragment,null,a)}}var T={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}};function E(e,t){void 0===t&&(t=!1);var n=Object(o.useRef)(e);return Object(o.useEffect)((function(){t&&(n.current=e)})),n.current}function j(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return g(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}var C=["delay","staleId"];function I(e){var t=Object(o.useReducer)((function(e){return e+1}),0)[1],n=Object(o.useReducer)(j,[]),r=n[0],a=n[1],s=Object(o.useRef)(null),i=E(0),c=E([]),v=E({}),y=E({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:h,getToast:function(e){return v[e]||null}});function h(e){return-1!==r.indexOf(e)}function O(e){var t=e.containerId;!y.props.limit||t&&y.containerId!==t||(i-=c.length,c=[])}function I(e){a({type:1,toastId:e})}function _(){var e=c.shift();w(e.toastContent,e.toastProps,e.staleId)}function L(e,n){var r,a=n.delay,h=n.staleId,O=u(n,C);if(b(e)&&!function(e){var t=e.containerId,n=e.toastId,o=e.updateId;return!!(!s.current||y.props.enableMultiContainer&&t!==y.props.containerId||v[n]&&null==o)}(O)){var T=O.toastId,E=O.updateId,j=O.data,L=y.props,P=function(){return I(T)},N=null==O.updateId;N&&i++;var R,k,D={toastId:T,updateId:E,isLoading:O.isLoading,theme:O.theme||L.theme,icon:null!=(r=O.icon)?r:L.icon,isIn:!1,key:O.key||y.toastKey++,type:O.type,closeToast:P,closeButton:O.closeButton,rtl:L.rtl,position:O.position||L.position,transition:O.transition||L.transition,className:m(O.className||L.toastClassName),bodyClassName:m(O.bodyClassName||L.bodyClassName),style:O.style||L.toastStyle,bodyStyle:O.bodyStyle||L.bodyStyle,onClick:O.onClick||L.onClick,pauseOnHover:d(O.pauseOnHover)?O.pauseOnHover:L.pauseOnHover,pauseOnFocusLoss:d(O.pauseOnFocusLoss)?O.pauseOnFocusLoss:L.pauseOnFocusLoss,draggable:d(O.draggable)?O.draggable:L.draggable,draggablePercent:l(O.draggablePercent)?O.draggablePercent:L.draggablePercent,draggableDirection:O.draggableDirection||L.draggableDirection,closeOnClick:d(O.closeOnClick)?O.closeOnClick:L.closeOnClick,progressClassName:m(O.progressClassName||L.progressClassName),progressStyle:O.progressStyle||L.progressStyle,autoClose:!O.isLoading&&(R=O.autoClose,k=L.autoClose,!1===R||l(R)&&R>0?R:k),hideProgressBar:d(O.hideProgressBar)?O.hideProgressBar:L.hideProgressBar,progress:O.progress,role:f(O.role)?O.role:L.role,deleteToast:function(){!function(e){delete v[e];var n=c.length;(i=g(e)?i-1:i-y.displayedToast)<0&&(i=0);if(n>0){var o=g(e)?1:y.props.limit;if(1===n||1===o)y.displayedToast++,_();else{var r=o>n?n:o;y.displayedToast=r;for(var a=0;a<r;a++)_()}}else t()}(T)}};p(O.onOpen)&&(D.onOpen=O.onOpen),p(O.onClose)&&(D.onClose=O.onClose),"y"===D.draggableDirection&&80===D.draggablePercent&&(D.draggablePercent*=1.5);var B=L.closeButton;!1===O.closeButton||b(O.closeButton)?B=O.closeButton:!0===O.closeButton&&(B=!b(L.closeButton)||L.closeButton),D.closeButton=B;var A=e;Object(o.isValidElement)(e)&&!f(e.type)?A=Object(o.cloneElement)(e,{closeToast:P,toastProps:D,data:j}):p(e)&&(A=e({closeToast:P,toastProps:D,data:j})),L.limit&&L.limit>0&&i>L.limit&&N?c.push({toastContent:A,toastProps:D,staleId:h}):l(a)&&a>0?setTimeout((function(){w(A,D,h)}),a):w(A,D,h)}}function w(e,t,n){var o=t.toastId;n&&delete v[n],v[o]={content:e,props:t},a({type:0,toastId:o,staleId:n})}return Object(o.useEffect)((function(){return y.containerId=e.containerId,T.cancelEmit(3).on(0,L).on(1,(function(e){return s.current&&I(e)})).on(5,O).emit(2,y),function(){return T.emit(3,y)}}),[]),Object(o.useEffect)((function(){y.isToastActive=h,y.displayedToast=r.length,T.emit(4,r.length,e.containerId)}),[r]),Object(o.useEffect)((function(){y.props=e})),{getToastToRender:function(t){for(var n={},o=e.newestOnTop?Object.keys(v).reverse():Object.keys(v),r=0;r<o.length;r++){var a=v[o[r]],s=a.props.position;n[s]||(n[s]=[]),n[s].push(a)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:v,containerRef:s,isToastActive:h}}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function w(e){var t=Object(o.useState)(!0),n=t[0],r=t[1],a=Object(o.useState)(!1),s=a[0],i=a[1],c=Object(o.useRef)(null),u=E({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=E(e,!0),d=e.autoClose,f=e.pauseOnHover,m=e.closeToast,g=e.onClick,v=e.closeOnClick;function b(t){if(e.draggable){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=_(t.nativeEvent),u.y=L(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?O():h()}}function h(){r(!0)}function O(){r(!1)}function T(t){if(u.canDrag){t.preventDefault();var o=c.current;n&&O(),u.x=_(t),u.y=L(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance))}}function j(){var t=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(o.useEffect)((function(){return p(e.onOpen)&&e.onOpen(Object(o.isValidElement)(e.children)&&e.children.props),function(){p(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",T),document.addEventListener("mouseup",j),document.addEventListener("touchmove",T),document.addEventListener("touchend",j)),function(){e.draggable&&(document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",j),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",j))}}),[e.draggable]),Object(o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",h),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:b,onTouchStart:b,onMouseUp:y,onTouchEnd:y};return d&&f&&(C.onMouseEnter=O,C.onMouseLeave=h),v&&(C.onClick=function(e){g&&g(e),u.canCloseOnClick&&m()}),{playToast:h,pauseToast:O,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:C}}function P(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){var t,n,r=e.delay,a=e.isRunning,i=e.closeToast,u=e.type,l=e.hide,d=e.className,f=e.style,m=e.controlledProgress,g=e.progress,v=e.rtl,b=e.isIn,y=e.theme,h=c({},f,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:l?0:1});m&&(h.transform="scaleX("+g+")");var O=s("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),T=p(d)?d({rtl:v,type:u,defaultClassName:O}):s(O,d),E=((n={})[m&&g>=1?"onTransitionEnd":"onAnimationEnd"]=m&&g<1?null:function(){b&&i()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:T,style:h},E))}N.defaultProps={type:h.DEFAULT,hide:!1};var R=["theme","type"],k=function(e){var t=e.theme,n=e.type,o=u(e,R);return r.a.createElement("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var D={info:function(e){return r.a.createElement(k,Object.assign({},e),r.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.a.createElement(k,Object.assign({},e),r.a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.a.createElement(k,Object.assign({},e),r.a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.a.createElement(k,Object.assign({},e),r.a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.a.createElement("div",{className:"Toastify__spinner"})}},B=function(e){var t,n,r=w(e),a=r.isRunning,i=r.preventExitTransition,c=r.toastRef,u=r.eventHandlers,l=e.closeButton,d=e.children,m=e.autoClose,g=e.onClick,v=e.type,b=e.hideProgressBar,y=e.closeToast,h=e.transition,O=e.position,T=e.className,E=e.style,j=e.bodyClassName,C=e.bodyStyle,I=e.progressClassName,_=e.progressStyle,L=e.updateId,P=e.role,R=e.progress,k=e.rtl,B=e.toastId,A=e.deleteToast,S=e.isIn,x=e.isLoading,F=e.icon,M=e.theme,z=s("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+v,((t={})["Toastify__toast--rtl"]=k,t)),H=p(T)?T({rtl:k,position:O,type:v,defaultClassName:z}):s(z,T),U=!!R,Q=D[v],V={theme:M,type:v},G=Q&&Q(V);return!1===F?G=void 0:p(F)?G=F(V):Object(o.isValidElement)(F)?G=Object(o.cloneElement)(F,V):f(F)?G=F:x&&(G=D.spinner()),Object(o.createElement)(h,{isIn:S,done:A,position:O,preventExitTransition:i,nodeRef:c},Object(o.createElement)("div",Object.assign({id:B,onClick:g,className:H},u,{style:E,ref:c}),Object(o.createElement)("div",Object.assign({},S&&{role:P},{className:p(j)?j({type:v}):s("Toastify__toast-body",j),style:C}),G&&Object(o.createElement)("div",{className:s("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!x,n))},G),Object(o.createElement)("div",null,d)),function(e){if(e){var t={closeToast:y,type:v,theme:M};return p(e)?e(t):Object(o.isValidElement)(e)?Object(o.cloneElement)(e,t):void 0}}(l),(m||U)&&Object(o.createElement)(N,Object.assign({},L&&!U?{key:"pb-"+L}:{},{rtl:k,theme:M,delay:m,isRunning:a,isIn:S,closeToast:y,hide:b,type:v,style:_,className:I,controlledProgress:U,progress:R}))))},A=O({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),S=function(e){var t=I(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,i=e.className,u=e.style,l=e.rtl,d=e.containerId;function f(e){var t,n=s("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return p(i)?i({position:e,rtl:l,defaultClassName:n}):s(n,m(i))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(e,t){var n=0===t.length?c({},u,{pointerEvents:"none"}):c({},u);return Object(o.createElement)("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(o.createElement)(B,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?P:n.closeButton}),t)})))})))};S.defaultProps={position:y.TOP_RIGHT,transition:A,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var x,F,M,z=new Map,H=[],U=!1;function Q(){return Math.random().toString(36).substr(2,9)}function V(e){return e&&(f(e.toastId)||l(e.toastId))?e.toastId:Q()}function G(e,t){return z.size>0?T.emit(0,e,t):(H.push({content:e,options:t}),U&&v&&(U=!1,F=document.createElement("div"),document.body.appendChild(F),Object(i.render)(Object(o.createElement)(S,Object.assign({},M)),F))),t.toastId}function W(e,t){return c({},t,{type:t&&t.type||e,toastId:V(t)})}var X=function(e){return function(t,n){return G(t,W(e,n))}},Y=function(e,t){return G(e,W(h.DEFAULT,t))};Y.loading=function(e,t){return G(e,W(h.DEFAULT,c({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var o=t.pending,r=t.error,a=t.success,s=f(o)?Y.loading(o,n):Y.loading(o.render,c({},n,o)),i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,o){var r=f(t)?{render:t}:t;return Y.update(s,c({type:e},i,n,r,{data:o})),o},l=p(e)?e():e;return l.then((function(e){return u("success",a,e)})).catch((function(e){return u("error",r,e)})),l},Y.success=X(h.SUCCESS),Y.info=X(h.INFO),Y.error=X(h.ERROR),Y.warning=X(h.WARNING),Y.warn=Y.warning,Y.dark=function(e,t){return G(e,W(h.DEFAULT,c({theme:"dark"},t)))},Y.dismiss=function(e){return T.emit(1,e)},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},Y.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||x);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=c({},o,t,{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,G(s,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return p(e)&&T.on(4,e),function(){p(e)&&T.off(4,e)}},Y.configure=function(e){void 0===e&&(e={}),U=!0,M=e},Y.POSITION=y,Y.TYPE=h,T.on(2,(function(e){x=e.containerId||e,z.set(x,e),H.forEach((function(e){T.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&T.off(0).off(1).off(5),v&&F&&document.body.removeChild(F)}))},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(59);var r=n(60);function a(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=10.3e9d4c68.chunk.js.map