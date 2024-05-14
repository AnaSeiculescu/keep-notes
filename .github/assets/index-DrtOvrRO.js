(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))E(h);new MutationObserver(h=>{for(const s of h)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&E(u)}).observe(document,{childList:!0,subtree:!0});function g(h){const s={};return h.integrity&&(s.integrity=h.integrity),h.referrerPolicy&&(s.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?s.credentials="include":h.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function E(h){if(h.ep)return;h.ep=!0;const s=g(h);fetch(h.href,s)}})();var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j(z){return z&&z.__esModule&&Object.prototype.hasOwnProperty.call(z,"default")?z.default:z}var U={exports:{}},R={exports:{}},k={exports:{}},D;function V(){return D||(D=1,function(z){(function(y,g){z.exports?z.exports=g():y.EvEmitter=g()})(typeof window<"u"?window:Q,function(){function y(){}var g=y.prototype;return g.on=function(E,h){if(!(!E||!h)){var s=this._events=this._events||{},u=s[E]=s[E]||[];return u.indexOf(h)==-1&&u.push(h),this}},g.once=function(E,h){if(!(!E||!h)){this.on(E,h);var s=this._onceEvents=this._onceEvents||{},u=s[E]=s[E]||{};return u[h]=!0,this}},g.off=function(E,h){var s=this._events&&this._events[E];if(!(!s||!s.length)){var u=s.indexOf(h);return u!=-1&&s.splice(u,1),this}},g.emitEvent=function(E,h){var s=this._events&&this._events[E];if(!(!s||!s.length)){s=s.slice(0),h=h||[];for(var u=this._onceEvents&&this._onceEvents[E],r=0;r<s.length;r++){var a=s[r],m=u&&u[a];m&&(this.off(E,a),delete u[a]),a.apply(this,h)}return this}},g.allOff=function(){delete this._events,delete this._onceEvents},y})}(k)),k.exports}var M={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var H;function B(){return H||(H=1,function(z){(function(y,g){z.exports?z.exports=g():y.getSize=g()})(window,function(){function g(n){var _=parseFloat(n),v=n.indexOf("%")==-1&&!isNaN(_);return v&&_}function E(){}var h=typeof console>"u"?E:function(n){console.error(n)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=s.length;function r(){for(var n={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},_=0;_<u;_++){var v=s[_];n[v]=0}return n}function a(n){var _=getComputedStyle(n);return _||h("Style returned "+_+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),_}var m=!1,x;function d(){if(!m){m=!0;var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style.boxSizing="border-box";var _=document.body||document.documentElement;_.appendChild(n);var v=a(n);x=Math.round(g(v.width))==200,C.isBoxSizeOuter=x,_.removeChild(n)}}function C(n){if(d(),typeof n=="string"&&(n=document.querySelector(n)),!(!n||typeof n!="object"||!n.nodeType)){var _=a(n);if(_.display=="none")return r();var v={};v.width=n.offsetWidth,v.height=n.offsetHeight;for(var i=v.isBorderBox=_.boxSizing=="border-box",t=0;t<u;t++){var e=s[t],o=_[e],p=parseFloat(o);v[e]=isNaN(p)?0:p}var b=v.paddingLeft+v.paddingRight,L=v.paddingTop+v.paddingBottom,I=v.marginLeft+v.marginRight,O=v.marginTop+v.marginBottom,l=v.borderLeftWidth+v.borderRightWidth,c=v.borderTopWidth+v.borderBottomWidth,f=i&&x,S=g(_.width);S!==!1&&(v.width=S+(f?0:b+l));var T=g(_.height);return T!==!1&&(v.height=T+(f?0:L+c)),v.innerWidth=v.width-(b+l),v.innerHeight=v.height-(L+c),v.outerWidth=v.width+I,v.outerHeight=v.height+O,v}}return C})}(M)),M.exports}var N={exports:{}},A={exports:{}},F;function $(){return F||(F=1,function(z){(function(y,g){z.exports?z.exports=g():y.matchesSelector=g()})(window,function(){var g=function(){var E=window.Element.prototype;if(E.matches)return"matches";if(E.matchesSelector)return"matchesSelector";for(var h=["webkit","moz","ms","o"],s=0;s<h.length;s++){var u=h[s],r=u+"MatchesSelector";if(E[r])return r}}();return function(h,s){return h[g](s)}})}(A)),A.exports}var q;function Z(){return q||(q=1,function(z){(function(y,g){z.exports?z.exports=g(y,$()):y.fizzyUIUtils=g(y,y.matchesSelector)})(window,function(g,E){var h={};h.extend=function(r,a){for(var m in a)r[m]=a[m];return r},h.modulo=function(r,a){return(r%a+a)%a};var s=Array.prototype.slice;h.makeArray=function(r){if(Array.isArray(r))return r;if(r==null)return[];var a=typeof r=="object"&&typeof r.length=="number";return a?s.call(r):[r]},h.removeFrom=function(r,a){var m=r.indexOf(a);m!=-1&&r.splice(m,1)},h.getParent=function(r,a){for(;r.parentNode&&r!=document.body;)if(r=r.parentNode,E(r,a))return r},h.getQueryElement=function(r){return typeof r=="string"?document.querySelector(r):r},h.handleEvent=function(r){var a="on"+r.type;this[a]&&this[a](r)},h.filterFindElements=function(r,a){r=h.makeArray(r);var m=[];return r.forEach(function(x){if(x instanceof HTMLElement){if(!a){m.push(x);return}E(x,a)&&m.push(x);for(var d=x.querySelectorAll(a),C=0;C<d.length;C++)m.push(d[C])}}),m},h.debounceMethod=function(r,a,m){m=m||100;var x=r.prototype[a],d=a+"Timeout";r.prototype[a]=function(){var C=this[d];clearTimeout(C);var n=arguments,_=this;this[d]=setTimeout(function(){x.apply(_,n),delete _[d]},m)}},h.docReady=function(r){var a=document.readyState;a=="complete"||a=="interactive"?setTimeout(r):document.addEventListener("DOMContentLoaded",r)},h.toDashed=function(r){return r.replace(/(.)([A-Z])/g,function(a,m,x){return m+"-"+x}).toLowerCase()};var u=g.console;return h.htmlInit=function(r,a){h.docReady(function(){var m=h.toDashed(a),x="data-"+m,d=document.querySelectorAll("["+x+"]"),C=document.querySelectorAll(".js-"+m),n=h.makeArray(d).concat(h.makeArray(C)),_=x+"-options",v=g.jQuery;n.forEach(function(i){var t=i.getAttribute(x)||i.getAttribute(_),e;try{e=t&&JSON.parse(t)}catch(p){u&&u.error("Error parsing "+x+" on "+i.className+": "+p);return}var o=new r(i,e);v&&v.data(i,a,o)})})},h})}(N)),N.exports}var w={exports:{}},Y;function X(){return Y||(Y=1,function(z){(function(y,g){z.exports?z.exports=g(V(),B()):(y.Outlayer={},y.Outlayer.Item=g(y.EvEmitter,y.getSize))})(window,function(g,E){function h(i){for(var t in i)return!1;return t=null,!0}var s=document.documentElement.style,u=typeof s.transition=="string"?"transition":"WebkitTransition",r=typeof s.transform=="string"?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[u],m={transform:r,transition:u,transitionDuration:u+"Duration",transitionProperty:u+"Property",transitionDelay:u+"Delay"};function x(i,t){i&&(this.element=i,this.layout=t,this.position={x:0,y:0},this._create())}var d=x.prototype=Object.create(g.prototype);d.constructor=x,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(i){var t="on"+i.type;this[t]&&this[t](i)},d.getSize=function(){this.size=E(this.element)},d.css=function(i){var t=this.element.style;for(var e in i){var o=m[e]||e;t[o]=i[e]}},d.getPosition=function(){var i=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),e=this.layout._getOption("originTop"),o=i[t?"left":"right"],p=i[e?"top":"bottom"],b=parseFloat(o),L=parseFloat(p),I=this.layout.size;o.indexOf("%")!=-1&&(b=b/100*I.width),p.indexOf("%")!=-1&&(L=L/100*I.height),b=isNaN(b)?0:b,L=isNaN(L)?0:L,b-=t?I.paddingLeft:I.paddingRight,L-=e?I.paddingTop:I.paddingBottom,this.position.x=b,this.position.y=L},d.layoutPosition=function(){var i=this.layout.size,t={},e=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),p=e?"paddingLeft":"paddingRight",b=e?"left":"right",L=e?"right":"left",I=this.position.x+i[p];t[b]=this.getXValue(I),t[L]="";var O=o?"paddingTop":"paddingBottom",l=o?"top":"bottom",c=o?"bottom":"top",f=this.position.y+i[O];t[l]=this.getYValue(f),t[c]="",this.css(t),this.emitEvent("layout",[this])},d.getXValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?i/this.layout.size.width*100+"%":i+"px"},d.getYValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?i/this.layout.size.height*100+"%":i+"px"},d._transitionTo=function(i,t){this.getPosition();var e=this.position.x,o=this.position.y,p=i==this.position.x&&t==this.position.y;if(this.setPosition(i,t),p&&!this.isTransitioning){this.layoutPosition();return}var b=i-e,L=t-o,I={};I.transform=this.getTranslate(b,L),this.transition({to:I,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(i,t){var e=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return i=e?i:-i,t=o?t:-t,"translate3d("+i+"px, "+t+"px, 0)"},d.goTo=function(i,t){this.setPosition(i,t),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(i,t){this.position.x=parseFloat(i),this.position.y=parseFloat(t)},d._nonTransition=function(i){this.css(i.to),i.isCleaning&&this._removeStyles(i.to);for(var t in i.onTransitionEnd)i.onTransitionEnd[t].call(this)},d.transition=function(i){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(i);return}var t=this._transn;for(var e in i.onTransitionEnd)t.onEnd[e]=i.onTransitionEnd[e];for(e in i.to)t.ingProperties[e]=!0,i.isCleaning&&(t.clean[e]=!0);i.from&&(this.css(i.from),this.element.offsetHeight),this.enableTransition(i.to),this.css(i.to),this.isTransitioning=!0};function C(i){return i.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var n="opacity,"+C(r);d.enableTransition=function(){if(!this.isTransitioning){var i=this.layout.options.transitionDuration;i=typeof i=="number"?i+"ms":i,this.css({transitionProperty:n,transitionDuration:i,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},d.onwebkitTransitionEnd=function(i){this.ontransitionend(i)},d.onotransitionend=function(i){this.ontransitionend(i)};var _={"-webkit-transform":"transform"};d.ontransitionend=function(i){if(i.target===this.element){var t=this._transn,e=_[i.propertyName]||i.propertyName;if(delete t.ingProperties[e],h(t.ingProperties)&&this.disableTransition(),e in t.clean&&(this.element.style[i.propertyName]="",delete t.clean[e]),e in t.onEnd){var o=t.onEnd[e];o.call(this),delete t.onEnd[e]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},d._removeStyles=function(i){var t={};for(var e in i)t[e]="";this.css(t)};var v={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(v)},d.stagger=function(i){i=isNaN(i)?0:i,this.staggerDelay=i+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},d.reveal=function(){delete this.isHidden,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("visibleStyle");t[e]=this.onRevealTransitionEnd,this.transition({from:i.hiddenStyle,to:i.visibleStyle,isCleaning:!0,onTransitionEnd:t})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(i){var t=this.layout.options[i];if(t.opacity)return"opacity";for(var e in t)return e},d.hide=function(){this.isHidden=!0,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("hiddenStyle");t[e]=this.onHideTransitionEnd,this.transition({from:i.visibleStyle,to:i.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},x})}(w)),w.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var G;function J(){return G||(G=1,function(z){(function(y,g){z.exports?z.exports=g(y,V(),B(),Z(),X()):y.Outlayer=g(y,y.EvEmitter,y.getSize,y.fizzyUIUtils,y.Outlayer.Item)})(window,function(g,E,h,s,u){var r=g.console,a=g.jQuery,m=function(){},x=0,d={};function C(t,e){var o=s.getQueryElement(t);if(!o){r&&r.error("Bad element for "+this.constructor.namespace+": "+(o||t));return}this.element=o,a&&(this.$element=a(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(e);var p=++x;this.element.outlayerGUID=p,d[p]=this,this._create();var b=this._getOption("initLayout");b&&this.layout()}C.namespace="outlayer",C.Item=u,C.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var n=C.prototype;s.extend(n,E.prototype),n.option=function(t){s.extend(this.options,t)},n._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&this.options[e]!==void 0?this.options[e]:this.options[t]},C.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},n._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},n.reloadItems=function(){this.items=this._itemize(this.element.children)},n._itemize=function(t){for(var e=this._filterFindItemElements(t),o=this.constructor.Item,p=[],b=0;b<e.length;b++){var L=e[b],I=new o(L,this);p.push(I)}return p},n._filterFindItemElements=function(t){return s.filterFindElements(t,this.options.itemSelector)},n.getItemElements=function(){return this.items.map(function(t){return t.element})},n.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},n._init=n.layout,n._resetLayout=function(){this.getSize()},n.getSize=function(){this.size=h(this.element)},n._getMeasurement=function(t,e){var o=this.options[t],p;o?(typeof o=="string"?p=this.element.querySelector(o):o instanceof HTMLElement&&(p=o),this[t]=p?h(p)[e]:o):this[t]=0},n.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},n._getItemsForLayout=function(t){return t.filter(function(e){return!e.isIgnored})},n._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),!(!t||!t.length)){var o=[];t.forEach(function(p){var b=this._getItemLayoutPosition(p);b.item=p,b.isInstant=e||p.isLayoutInstant,o.push(b)},this),this._processLayoutQueue(o)}},n._getItemLayoutPosition=function(){return{x:0,y:0}},n._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(e,o){this._positionItem(e.item,e.x,e.y,e.isInstant,o)},this)},n.updateStagger=function(){var t=this.options.stagger;if(t==null){this.stagger=0;return}return this.stagger=i(t),this.stagger},n._positionItem=function(t,e,o,p,b){p?t.goTo(e,o):(t.stagger(b*this.stagger),t.moveTo(e,o))},n._postLayout=function(){this.resizeContainer()},n.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},n._getContainerSize=m,n._setContainerMeasure=function(t,e){if(t!==void 0){var o=this.size;o.isBorderBox&&(t+=e?o.paddingLeft+o.paddingRight+o.borderLeftWidth+o.borderRightWidth:o.paddingBottom+o.paddingTop+o.borderTopWidth+o.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},n._emitCompleteOnItems=function(t,e){var o=this;function p(){o.dispatchEvent(t+"Complete",null,[e])}var b=e.length;if(!e||!b){p();return}var L=0;function I(){L++,L==b&&p()}e.forEach(function(O){O.once(t,I)})},n.dispatchEvent=function(t,e,o){var p=e?[e].concat(o):o;if(this.emitEvent(t,p),a)if(this.$element=this.$element||a(this.element),e){var b=a.Event(e);b.type=t,this.$element.trigger(b,o)}else this.$element.trigger(t,o)},n.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},n.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},n.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},n.unstamp=function(t){t=this._find(t),t&&t.forEach(function(e){s.removeFrom(this.stamps,e),this.unignore(e)},this)},n._find=function(t){if(t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=s.makeArray(t),t},n._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},n._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},n._manageStamp=m,n._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,p=h(t),b={left:e.left-o.left-p.marginLeft,top:e.top-o.top-p.marginTop,right:o.right-e.right-p.marginRight,bottom:o.bottom-e.bottom-p.marginBottom};return b},n.handleEvent=s.handleEvent,n.bindResize=function(){g.addEventListener("resize",this),this.isResizeBound=!0},n.unbindResize=function(){g.removeEventListener("resize",this),this.isResizeBound=!1},n.onresize=function(){this.resize()},s.debounceMethod(C,"onresize",100),n.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},n.needsResizeLayout=function(){var t=h(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},n.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},n.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},n.prepended=function(t){var e=this._itemize(t);if(e.length){var o=this.items.slice(0);this.items=e.concat(o),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(o)}},n.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(o,p){o.stagger(p*e),o.reveal()})}},n.hide=function(t){if(this._emitCompleteOnItems("hide",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(o,p){o.stagger(p*e),o.hide()})}},n.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},n.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},n.getItem=function(t){for(var e=0;e<this.items.length;e++){var o=this.items[e];if(o.element==t)return o}},n.getItems=function(t){t=s.makeArray(t);var e=[];return t.forEach(function(o){var p=this.getItem(o);p&&e.push(p)},this),e},n.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),!(!e||!e.length)&&e.forEach(function(o){o.remove(),s.removeFrom(this.items,o)},this)},n.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(o){o.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete d[e],delete this.element.outlayerGUID,a&&a.removeData(this.element,this.constructor.namespace)},C.data=function(t){t=s.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&d[e]},C.create=function(t,e){var o=_(C);return o.defaults=s.extend({},C.defaults),s.extend(o.defaults,e),o.compatOptions=s.extend({},C.compatOptions),o.namespace=t,o.data=C.data,o.Item=_(u),s.htmlInit(o,t),a&&a.bridget&&a.bridget(t,o),o};function _(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var v={ms:1,s:1e3};function i(t){if(typeof t=="number")return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),o=e&&e[1],p=e&&e[2];if(!o.length)return 0;o=parseFloat(o);var b=v[p]||1;return o*b}return C.Item=u,C})}(R)),R.exports}/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(z){(function(y,g){z.exports?z.exports=g(J(),B()):y.Masonry=g(y.Outlayer,y.getSize)})(window,function(g,E){var h=g.create("masonry");h.compatOptions.fitWidth="isFitWidth";var s=h.prototype;return s._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var u=0;u<this.cols;u++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},s.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var u=this.items[0],r=u&&u.element;this.columnWidth=r&&E(r).outerWidth||this.containerWidth}var a=this.columnWidth+=this.gutter,m=this.containerWidth+this.gutter,x=m/a,d=a-m%a,C=d&&d<1?"round":"floor";x=Math[C](x),this.cols=Math.max(x,1)},s.getContainerWidth=function(){var u=this._getOption("fitWidth"),r=u?this.element.parentNode:this.element,a=E(r);this.containerWidth=a&&a.innerWidth},s._getItemLayoutPosition=function(u){u.getSize();var r=u.size.outerWidth%this.columnWidth,a=r&&r<1?"round":"ceil",m=Math[a](u.size.outerWidth/this.columnWidth);m=Math.min(m,this.cols);for(var x=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",d=this[x](m,u),C={x:this.columnWidth*d.col,y:d.y},n=d.y+u.size.outerHeight,_=m+d.col,v=d.col;v<_;v++)this.colYs[v]=n;return C},s._getTopColPosition=function(u){var r=this._getTopColGroup(u),a=Math.min.apply(Math,r);return{col:r.indexOf(a),y:a}},s._getTopColGroup=function(u){if(u<2)return this.colYs;for(var r=[],a=this.cols+1-u,m=0;m<a;m++)r[m]=this._getColGroupY(m,u);return r},s._getColGroupY=function(u,r){if(r<2)return this.colYs[u];var a=this.colYs.slice(u,u+r);return Math.max.apply(Math,a)},s._getHorizontalColPosition=function(u,r){var a=this.horizontalColIndex%this.cols,m=u>1&&a+u>this.cols;a=m?0:a;var x=r.size.outerWidth&&r.size.outerHeight;return this.horizontalColIndex=x?a+u:this.horizontalColIndex,{col:a,y:this._getColGroupY(a,u)}},s._manageStamp=function(u){var r=E(u),a=this._getElementOffset(u),m=this._getOption("originLeft"),x=m?a.left:a.right,d=x+r.outerWidth,C=Math.floor(x/this.columnWidth);C=Math.max(0,C);var n=Math.floor(d/this.columnWidth);n-=d%this.columnWidth?0:1,n=Math.min(this.cols-1,n);for(var _=this._getOption("originTop"),v=(_?a.top:a.bottom)+r.outerHeight,i=C;i<=n;i++)this.colYs[i]=Math.max(v,this.colYs[i])},s._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var u={height:this.maxY};return this._getOption("fitWidth")&&(u.width=this._getContainerFitWidth()),u},s._getContainerFitWidth=function(){for(var u=0,r=this.cols;--r&&this.colYs[r]===0;)u++;return(this.cols-u)*this.columnWidth-this.gutter},s.needsResizeLayout=function(){var u=this.containerWidth;return this.getContainerWidth(),u!=this.containerWidth},h})})(U);var K=U.exports;const tt=j(K);(async function(){const z="http://localhost:3080/notes",y=await fetch(z).then(l=>l.json()),g=document.querySelector("[data-add-note-btn]"),E=document.querySelector("[data-notes-container]"),h=["#EDB579","#5D76B6","#E15156","#C2CF74","#B58BAB"],s=new tt(E,{itemSelector:".note",columnWidth:310});g.addEventListener("click",x),E.addEventListener("keydown",L),E.addEventListener("keyup",L),C();function u(){const l=document.createElement("div"),c=document.createElement("span"),f=document.createElement("p");return l.dataset.noteEntity=!0,l.classList.add("note"),l.classList.add("playpen-sans"),c.contentEditable=!0,c.dataset.title=!0,c.classList.add("title"),c.textContent="New Note",f.dataset.body=!0,f.contentEditable=!0,f.classList.add("body"),f.textContent="Your text here...",l.append(c,f),n(l),i(l),v(l),c.focus(),f.addEventListener("focus",b),l}function r(l){const c=l.querySelector("[data-title]"),f=l.querySelector("[data-body]"),S=l.style.backgroundColor;return[c,f,S]}function a(l){let c=[...l];return function(){c.length===0&&(c=[...l]);const f=Math.floor(Math.random()*c.length),S=c[f];return c.splice(f,1),S}}const m=a(h);async function x(l){l.preventDefault();const c=u(),[f,S]=r(c);c.style.backgroundColor=m();const T=await fetch(z,{method:"POST",body:JSON.stringify({title:f.textContent,body:S.textContent,backgroundColor:c.style.backgroundColor}),headers:{"Content-Type":"application/json"}}).then(P=>P.json());c.dataset.id=T.id,y.unshift(T),E.prepend(c),p(f),s.prepended(c)}function d(){const l=document.createDocumentFragment(),c=[];for(const f of y){const S=u();S.dataset.id=f.id;const[T,P]=r(S);T.textContent=f.title,P.textContent=f.body,S.style.backgroundColor=f.backgroundColor,c.push(S),l.append(S)}return{fragment:l,mockNotesList:c}}async function C(){const{fragment:l,mockNotesList:c}=d();E.innerHTML="",E.append(l);for(const f of c)s.prepended(f);s.layout()}function n(l){const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("style","width: 20px; height: 28px"),c.setAttribute("viewBox","0 0 15 15"),c.setAttribute("fill","currentColor"),c.setAttribute("class","w-4 h-4"),c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");const f=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttributeNS(null,"fill-rule","evenodd"),f.setAttributeNS(null,"d","M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"),f.setAttributeNS(null,"clip-rule","evenodd"),c.append(f),l.append(c),c.classList.add("delete-icon"),c.addEventListener("click",_)}async function _(l){const c=I(l),f=O(c);await fetch(`${z}/${f}`,{method:"DELETE"}),s.remove(c);const S=y.findIndex(T=>T.id===f);y.splice(S,1),s.layout()}function v(l){const c=document.createElement("div");c.classList.add("color-picker-panel"),c.style.display="none",c.dataset.colorsPanel=!0;const f=document.createElement("ul");f.classList.add("specified-colors"),h.forEach(P=>{const W=document.createElement("li");W.classList.add("spec-color"),W.style.backgroundColor=P,W.dataset.specifiedColor=!0,f.append(W)});const S=document.createElement("label");S.textContent="Choose your color: ";const T=document.createElement("input");T.setAttribute("type","color"),T.dataset.inputColor="true",T.addEventListener("change",e,!1),S.append(T),c.append(f),c.append(S),l.append(c),f.addEventListener("click",e)}function i(l){const c=document.createElement("div");c.classList.add("color-picker-btn"),c.dataset.colorPickerIcon=!0,l.append(c),c.addEventListener("click",t)}function t(l){l.stopPropagation();const c=document.querySelectorAll("[data-colors-panel]"),S=I(l).querySelector("[data-colors-panel]");if(c.forEach(T=>{T.style.display==="block"&&T!==S&&(T.style.display="none")}),S.style.display==="block"){S.style.display="none";return}S.style.display="block"}window.addEventListener("click",function(l){document.querySelectorAll("[data-colors-panel]").forEach(f=>{l.target!==f&&!f.contains(l.target)&&(f.style.display="none")})});function e(l){l.stopPropagation();const c=I(l);if(l.target.dataset.specifiedColor==="true"){const f=l.target.style.backgroundColor;c.style.backgroundColor=f,L(l);return}l.target.dataset.inputColor==="true"&&o(l,c),L(l)}function o(l,c){c.style.backgroundColor=l.target.value}function p(l){const c=window.getSelection(),f=document.createRange();f.selectNodeContents(l),c.removeAllRanges(),c.addRange(f)}function b(l){p(l.target)}async function L(l){const c=I(l),f=O(c),[S,T,P]=r(c);await fetch(`${z}/${f}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:S.textContent,body:T.textContent,backgroundColor:P})}),s.layout()}function I(l){const c=l.target.closest("[data-note-entity]");if(c)return c}function O(l){return l.dataset.id}})();
