(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),d=a(r("pVnL")),l=a(r("q1tI")),u=a(r("17x9")),c=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),r=g(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+s+o+r+a+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(V,(0,d.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?l.default.createElement("picture",null,i(a),o):o})),V=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=g(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,O=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,d.default)({opacity:R?1:0,transition:C?"opacity "+v+"ms":"none"},o),q="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},_=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&T,{},o,{},f),j={title:t,alt:this.state.isVisible?"":r,style:_,className:g,itemProp:S};if(h){var P=h,N=p(h);return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),q&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),N.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:j,imageVariants:P,generateSources:I}),N.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:j,imageVariants:P,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(P),l.default.createElement(V,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:r,title:t,loading:E},N,{imageVariants:P}))}}))}if(m){var W=m,M=p(m),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},q&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:q,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&T)}),M.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:j,imageVariants:W,generateSources:I}),M.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:j,imageVariants:W,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(W),l.default.createElement(V,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:r,title:t,loading:E},M,{imageVariants:W}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),q=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});C.propTypes={resolutions:x,sizes:q,fixed:u.default.oneOfType([x,u.default.arrayOf(x)]),fluid:u.default.oneOfType([q,u.default.arrayOf(q)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=C;t.default=T},At4Z:function(e,t,r){"use strict";var a=r("q1tI"),i=r.n(a),n=r("qhky");t.a=function(e){var t=e.children,r=e.title;return i.a.createElement("div",{class:"container h-100 pt-5"},i.a.createElement(n.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:"Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"})),i.a.createElement("div",{class:"pb-2"},i.a.createElement("h1",null,r)),i.a.createElement("div",{class:"bg-light h-100 border-top border-primary p-4"},t))}},SGlo:function(e,t,r){"use strict";var a=r("rj/q"),i=r("N+BI").getWeak,n=r("1a8y"),s=r("BjK0"),o=r("xa9o"),d=r("yde8"),l=r("Wadk"),u=r("qDzq"),c=r("O1i0"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,n){var l=e((function(e,a){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=a&&d(a,r,e[n],e)}));return a(l.prototype,{delete:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(c(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(c(this,t)).has(e):r&&u(r,this._i)}}),l},def:function(e,t,r){var a=i(n(t),!0);return!0===a?h(e).set(t,r):a[e._i]=r,e},ufstore:h}},bBPc:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("q1tI"),i=function(e){var t=window.matchMedia(e),r=Object(a.useState)(t.matches),i=r[0],n=r[1];return Object(a.useEffect)((function(){var e=function(e){return n(e.matches)};return t.addListener(e),function(){return t.removeListener(e)}})),i}},e4VM:function(e,t,r){r("sC2a"),e.exports={convertToSlug:function(e){return e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}}},eMsz:function(e,t,r){"use strict";var a,i=r("emib"),n=r("Wadk")(0),s=r("IYdN"),o=r("N+BI"),d=r("k5Iv"),l=r("SGlo"),u=r("BjK0"),c=r("O1i0"),f=r("O1i0"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=r("94Pd")("WeakMap",b,v,l,!0,!0);f&&g&&(d((a=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new a);var n=this._f[e](t,i);return"set"==e?this:n}return r.call(this,t,i)}))})))},"t+fG":function(e,t,r){var a=r("P8UN"),i=r("96qb"),n=r("ap2Z"),s=/"/g,o=function(e,t,r,a){var i=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},zTTH:function(e,t,r){"use strict";var a=r("P8UN"),i=r("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(n)}}]);
//# sourceMappingURL=2d871f0a75be1c95c48031e4650944c96c9799d7-b92e4ed1e7c3d73a1cff.js.map