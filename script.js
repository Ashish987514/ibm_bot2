!function(){"use strict";!function(t){var e=t.screen,n=e.width,r=e.height,a=t.navigator.language,i=t.location,o=t.localStorage,c=t.document,u=t.history,s=i.hostname,f=i.pathname,l=i.search,d=c.currentScript;if(d){var p="data-",v=d.getAttribute.bind(d),h=v(p+"website-id"),g=v(p+"host-url"),b="false"!==v(p+"auto-track"),m=v(p+"do-not-track"),y=v(p+"domains")||"",S=y.split(",").map((function(t){return t.trim()})),k=(g?g.replace(/\/$/,""):d.src.split("/").slice(0,-1).join("/"))+"/api/send",j=n+"x"+r,w=/data-doitc-event-([\w-_]+)/,N=p+"doitc-event",T=300,A=function(t,e,n){var r=t[e];return function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return n.apply(null,e),r.apply(t,e)}},x=function(){return{website:h,hostname:s,screen:j,language:a,title:M,url:I,referrer:J}},E=function(){return o&&o.getItem("doitc.disabled")||m&&function(){var e=t.doNotTrack,n=t.navigator,r=t.external,a="msTrackingProtectionEnabled",i=e||n.doNotTrack||n.msDoNotTrack||r&&a in r&&r[a]();return"1"==i||"yes"===i}()||y&&!S.includes(s)},O=function(t,e,n){n&&(J=I,(I=function(t){return"http"===t.substring(0,4)?"/"+t.split("/").splice(3).join("/"):t}(n.toString()))!==J&&setTimeout(K,T))},D=function(t,e){if(void 0===e&&(e="event"),!E()){var n={"Content-Type":"application/json"};return void 0!==L&&(n["x-doitc-cache"]=L),fetch(k,{method:"POST",body:JSON.stringify({type:e,payload:t}),headers:n}).then((function(t){return t.text()})).then((function(t){return L=t}))}},K=function(t,e){return D("string"==typeof t?Object.assign({},x(),{name:t,data:"object"==typeof e?e:void 0}):"object"==typeof t?t:"function"==typeof t?t(x()):x())};t.doitc||(t.doitc={track:K,identify:function(t){return D(Object.assign({},x(),{data:t}),"identify")}});var L,P,_,q,C,I=""+f+l,J=c.referrer,M=c.title;if(b&&!E()){u.pushState=A(u,"pushState",O),u.replaceState=A(u,"replaceState",O),C=function(t){var e=t.getAttribute.bind(t),n=e(N);if(n){var r={};return t.getAttributeNames().forEach((function(t){var n=t.match(w);n&&(r[n[1]]=e(t))})),K(n,r)}return Promise.resolve()},c.addEventListener("click",(function(t){var e=t.target,n="A"===e.tagName?e:function(t,e){for(var n=t,r=0;r<e;r++){if("A"===n.tagName)return n;if(!(n=n.parentElement))return null}return null}(e,10);if(n){var r=n.href,a="_blank"===n.target||t.ctrlKey||t.shiftKey||t.metaKey||t.button&&1===t.button;if(n.getAttribute(N)&&r)return a||t.preventDefault(),C(n).then((function(){a||(i.href=r)}))}else C(e)}),!0),_=new MutationObserver((function(t){var e=t[0];M=e&&e.target?e.target.text:void 0})),(q=c.querySelector("head > title"))&&_.observe(q,{subtree:!0,characterData:!0,childList:!0});var $=function(){"complete"!==c.readyState||P||(K(),P=!0)};c.addEventListener("readystatechange",$,!0),$()}}}(window)}();
