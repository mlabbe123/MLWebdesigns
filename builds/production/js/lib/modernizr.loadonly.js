window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&v[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+w.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+j.join(r+" ")+r).split(" "),l(i,t,n))}var s,u,f,p="2.8.3",d={},y=t.documentElement,m="modernizr",h=t.createElement(m),v=h.style,g=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),b="Webkit Moz O ms",w=b.split(" "),j=b.toLowerCase().split(" "),C={},E=[],x=E.slice,A=function(e,n,r,o){var i,a,l,c,s=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)l=t.createElement("div"),l.id=o?o[r]:m+(r+1),s.appendChild(l);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),s.id=m,(u?s:f).innerHTML+=i,f.appendChild(s),u||(f.style.background="",f.style.overflow="hidden",c=y.style.overflow,y.style.overflow="hidden",y.appendChild(f)),a=n(s,e),u?s.parentNode.removeChild(s):(f.parentNode.removeChild(f),y.style.overflow=c),!!a},O=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),S={}.hasOwnProperty;f=o(S,"undefined")||o(S.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return S.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r});for(var T in C)f(C,T)&&(u=T.toLowerCase(),d[u]=C[T](),E.push((d[u]?"":"no-")+u));return d.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(y.className+=" "+(t?"":"no-")+e),d[e]=t}return d},r(""),h=s=null,d._version=p,d._prefixes=g,d._domPrefixes=j,d._cssomPrefixes=w,d.hasEvent=O,d.testProp=function(e){return a([e])},d.testAllProps=c,d.testStyles=A,d.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==h.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function l(){var e=v.shift();g=1,e?e.t?y(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),l()):g=0}function c(e,n,r,o,i,c,s){function u(t){if(!d&&a(f.readyState)&&(b.r=d=1,!g&&l(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&y(function(){j.removeChild(f)},50);for(var r in O[n])O[n].hasOwnProperty(r)&&O[n][r].onload()}}var s=s||p.errorTimeout,f=t.createElement(e),d=0,h=0,b={t:r,s:n,e:i,a:c,x:s};1===O[n]&&(h=1,O[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,h)},v.splice(o,0,b),"img"!=e&&(h||2===O[n]?(j.insertBefore(f,w?null:m),y(u,s)):O[n].push(f))}function s(e,t,n,r,i){return g=0,t=t||"j",o(e)?c("c"==t?E:C,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&l()),this}function u(){var e=p;return e.loader={load:s,i:0},e}var f,p,d=t.documentElement,y=e.setTimeout,m=t.getElementsByTagName("script")[0],h={}.toString,v=[],g=0,b="MozAppearance"in d.style,w=b&&!!t.createRange().compareNode,j=w?d:m.parentNode,d=e.opera&&"[object Opera]"==h.call(e.opera),d=!!t.attachEvent&&!d,C=b?"object":d?"script":"img",E=d?"script":C,x=Array.isArray||function(e){return"[object Array]"==h.call(e)},A=[],O={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=A.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=A[n](i);return i}function a(e,o,i,a,l){var c=t(e),s=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,l):(O[c.url]?c.noexec=!0:O[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(c.origUrl,l,a),s&&s(c.origUrl,l,a),O[c.url]=2})))}function l(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),a(e,f,t,0,s);else if(Object(e)===e)for(c in l=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--l&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[c])),a(e[c],f,t,c,s))}else!n&&d()}var l,c,s=!!e.test,u=e.load||e.both,f=e.callback||i,p=f,d=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var c,s,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(x(e))for(c=0;c<e.length;c++)s=e[c],o(s)?a(s,0,f,0):x(s)?p(s):Object(s)===s&&l(s,f);else Object(e)===e&&l(e,f)},p.addPrefix=function(e,t){S[e]=t},p.addFilter=function(e){A.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=l,e.yepnope.injectJs=function(e,n,r,o,c,s){var u,f,d=t.createElement("script"),o=o||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=s?l:n||i,d.onreadystatechange=d.onload=function(){!u&&a(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},y(function(){u||(u=1,n(1))},o),c?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,o,a,c){var s,o=t.createElement("link"),n=c?l:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(m.parentNode.insertBefore(o,m),y(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};