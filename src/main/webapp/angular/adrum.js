;/* Version 2795adaa820aa371e916c2bf4f13dff3 v:4.2.1.2, c:e0673db0fd669466682a7692d443d9947b742b4e, b:3142 n:70-4.2.1.next-build */(function(){new function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var g=window.ADRUM={};window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();(function(a){(function(a){a.Uc=function(){for(var a=[],d=0;d<arguments.length;d++)a[d-0]=arguments[d];for(d=0;d<a.length;d++){var b=a[d];b&&b.setUp()}}})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){a=a.conf||(a.conf={});a.beaconUrlHttp="http://col.eum-appdynamics.com";a.beaconUrlHttps="https://col.eum-appdynamics.com";a.corsEndpointPath="/eumcollector/beacons/browser/v1";
a.imageEndpointPath="/eumcollector/adrum.gif?";a.appKey=window["adrum-app-key"]||"AD-AAB-AAC-JZR";var d="https:"===document.location.protocol;a.adrumExtUrl=(d?"https://cdn.appdynamics.com":"http://cdn.appdynamics.com")+"/adrum-ext.2795adaa820aa371e916c2bf4f13dff3.js";a.adrumXdUrl="https://cdn.appdynamics.com/adrum-xd.2795adaa820aa371e916c2bf4f13dff3.html";a.agentVer="4.2.1.2";a.sendImageBeacon="false";if(window["adrum-geo-resolver-url"]){var f=window["adrum-geo-resolver-url"],c=f.indexOf("://");-1!=
c&&(f=f.substring(c+3));f=(d?"https://":"http://")+f}else f=d?"":"";a.geoResolverUrl=f;a.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"];a.userConf=window["adrum-config"];a.Ud=10})(g||(g={}));(function(a){(function(d){function f(a){return"undefined"!==typeof a&&null!==a}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function b(a){return"object"==typeof a&&!c(a)&&null!==a}function e(a){return"string"==
typeof a}function h(a,e){for(var q in e){var d=e[q];if(e.hasOwnProperty(q)&&f(d)){var g=a[q];b(d)&&b(g)?h(g,d):a[q]=c(g)&&c(d)?g.concat(d):d}}return a}function q(a){return e(a)?a.replace(/^\s*/,"").replace(/\s*$/,""):a}d.isDefined=f;d.isArray=c;d.isObject=b;d.isFunction=function(a){return"function"==typeof a||!1};d.isString=e;d.isNumber=function(a){return"number"==typeof a};d.Sa=function(a){setTimeout(a,0)};d.addEventListener=function(h,b,e){function q(){try{return e.apply(this,Array.prototype.slice.call(arguments))}catch(d){a.exception(d,
"M1",b,h,d)}}a.isDebug&&a.log("M0",b,h);h.addEventListener?h.addEventListener(b,q,!1):h.attachEvent&&h.attachEvent("on"+b,q)};d.loadScriptAsync=function(h){var b=document.createElement("script");b.async=!0;b.src=h;var e=document.getElementsByTagName("script")[0];e?(e.parentNode.insertBefore(b,e),a.log("M2",h)):a.log("M3",h)};d.mergeJSON=h;d.hd=function(a){var h=[];a&&(d.isObject(a)?h=[a]:d.isArray(a)&&(h=a));return h};d.generateGUID="undefined"!==typeof window.crypto&&"undefined"!==typeof window.crypto.getRandomValues?
function(){function a(h){for(h=h.toString(16);4>h.length;)h="0"+h;return h}var h=new Uint16Array(8);window.crypto.getRandomValues(h);return a(h[0])+a(h[1])+"_"+a(h[2])+"_"+a(h[3])+"_"+a(h[4])+"_"+a(h[5])+a(h[6])+a(h[7])}:function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(a){var h=16*Math.random()|0;return("x"==a?h:h&3|8).toString(16)})};d.tryExtractingErrorStack=function(a){return a?(a=a.stack)&&"string"===typeof a?a:null:null};d.tg=function(a){var h={},b,e;if(!a)return h;
var d=a.split("\n");for(e=0;e<d.length;e++){var c=d[e];b=c.indexOf(":");a=q(c.substr(0,b)).toLowerCase();b=q(c.substr(b+1));a&&(h[a]=h[a]?h[a]+(", "+b):b)}return h};d.tryPeriodically=function(a,h,b,e){function q(){if(h())b&&b();else{var c=a(++d);0<c?setTimeout(q,c):e&&e()}}var d=0;q()};d.Dg=function(a,h,b){f(b)&&(a[h]=b)};d.Nb=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};d.Cc=function(a){for(var h=[],b=1;b<arguments.length;b++)h[b-1]=arguments[b];return function(){for(var b=[],e=0;e<arguments.length;e++)b[e-
0]=arguments[e];return a.apply(this,h.concat(b))}};d.now=Date&&Date.now||function(){return(new Date).getTime()}})(a.utils||(a.utils={}))})(g||(g={}));(function(a){function d(h,b,e,d){h=a.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+e+"&msg="+encodeURIComponent(h.substring(0,500));d&&(h+="&stack=",h+=encodeURIComponent(d.substring(0,1500-h.length)));return h}function f(h,b){2<=e||((new Image).src=d(h,0,a.conf.appKey,b),e++)}function c(a){return 0<=a.location.search.indexOf("ADRUM_debug=true")||
0<=a.cookie.search(/(^|;)\s*ADRUM_debug=true/)}a.iDR=c;a.isDebug=c(document);var b=[];a.log=function(h){for(var e=1;e<arguments.length;e++);a.isDebug&&b.push(Array.prototype.slice.call(arguments).join(" | "))};a.error=function(h){for(var b=1;b<arguments.length;b++);b=Array.prototype.slice.call(arguments).join(" | ");a.log(b);f(b,null)};a.exception=function(){for(var h=[],b=0;b<arguments.length;b++)h[b-0]=arguments[b];1>arguments.length||(h=Array.prototype.slice.call(arguments),b=a.utils.tryExtractingErrorStack(h[0]),
h=h.slice(1).join(" | "),a.log(h),f(h,b))};a.assert=function(h,b){h||a.error("Assert fail: "+b)};a.dumpLog=a.isDebug?function(){for(var a="",e=0;e<b.length;e++)a+=b[e].replace(RegExp("<br/>","g"),"\n\t")+"\n";return a}:function(){};a.cIEBU=d;var e=0;a.log("M4")})(g||(g={}));(function(a){var d=function(){function a(b){this.max=b;this.za=0}a.prototype.Jf=function(){this.ma()||this.za++};a.prototype.ma=function(){return this.za>=this.max};a.prototype.reset=function(){this.za=0};return a}(),f=function(){function c(){this.ja=
[];this.Ta=new d(c.ie);this.Ja=new d(c.Xd)}c.prototype.submit=function(b){this.push(b)&&a.initEXTDone&&this.processQ()};c.prototype.processQ=function(){for(var b=this.Ze(),e=0;e<b.length;e++){var h=b[e];"function"===typeof a.commands[h[0]]?(a.isDebug&&a.log("M5",h[0],h.slice(1).join(", ")),a.commands[h[0]].apply(a,h.slice(1))):a.error("M6",h[0])}};c.prototype.Xf=function(a){return"reportXhr"===a||"reportPageError"===a};c.prototype.push=function(b){var e=b[0],h=this.Xf(e),d=h?this.Ta:this.Ja;if(d.ma())return a.log("M7",
h?"spontaneous":"non spontaneous",e),!1;this.ja.push(b);d.Jf();return!0};c.prototype.Ze=function(){var a=this.ja;this.reset();return a};c.prototype.size=function(){return this.ja.length};c.prototype.reset=function(){this.ja=[];this.Ta.reset();this.Ja.reset()};c.prototype.isSpontaneousQueueDead=function(){return this.Ta.ma()};c.prototype.isNonSpontaneousQueueDead=function(){return this.Ja.ma()};c.ie=100;c.Xd=100;return c}();a.vd=f})(g||(g={}));(function(a){a.q=new a.vd;a.command=function(d){for(var f=
1;f<arguments.length;f++);a.isDebug&&a.log("M8",d,Array.prototype.slice.call(arguments).slice(1).join(", "));a.q.submit(Array.prototype.slice.call(arguments))}})(g||(g={}));(function(a){(function(a){var f=function(){function a(){this.status={}}a.prototype.setUp=function(){};a.prototype.set=function(a,e){this.status[a]=e};return a}();a.ib=f})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){(function(d){window.ADRUM.aop=d;d.support=function(a){return!a||"apply"in a};d.around=function(f,c,b,e){a.assert(d.support(f),
"aop.around called on a function which does not support interception");f=f||function(){};return function(){a.isDebug&&a.log("M9",e,Array.prototype.slice.call(arguments).join(", "));var h=Array.prototype.slice.call(arguments),d;try{c&&(d=c.apply(this,h))}catch(m){a.exception(m,"M10",e,m)}a.assert(!d||"[object Array]"===Object.prototype.toString.call(d));var l=void 0;try{l=f.apply(this,d||h)}finally{try{b&&b.apply(this,h)}catch(g){a.exception(g,"M11",e,g)}}return l}};d.before=function(a,c){return d.around(a,
c)};d.after=function(a,c){return d.around(a,null,c)}})(a.aop||(a.aop={}))})(g||(g={}));(function(a){a=a.EventType||(a.EventType={});a[a.BASE_PAGE=0]="BASE_PAGE";a[a.IFRAME=1]="IFRAME";a[a.XHR=2]="XHR";a[a.VIRTUAL_PAGE=3]="VIRTUAL_PAGE";a[a.PAGE_ERROR=4]="PAGE_ERROR";a[a.ABSTRACT=100]="ABSTRACT";a[a.ADRUM_XHR=101]="ADRUM_XHR";a[a.NG_VIRTUAL_PAGE=102]="NG_VIRTUAL_PAGE"})(g||(g={}));(function(a){a=a.events||(a.events={});a.p={};a.p[100]={guid:"string",url:"string",parentGUID:"string",parentUrl:"string",
parentType:"number",timestamp:"number"};a.p[3]={resTiming:"object"};a.p[102]={digestCount:"number"};a.p[2]={method:"string",parentPhase:"string",parentPhaseId:"number"};a.p[101]={xhr:"object"};a.p[4]={msg:"string",line:"number",stack:"string"}})(g||(g={}));(function(a){var d=function(){function a(){this.A={}}a.prototype.mark=function(a,e){f.mark.apply(this,arguments)};a.prototype.Af=function(a){return(a=this.getEntryByName(a))&&a.startTime};a.prototype.measure=function(a,e,h){f.measure.apply(this,
arguments)};a.prototype.getEntryByName=function(a){return f.getEntryByName.call(this,a)};return a}();a.vb=d;var f;(function(d){d.mark;d.measure;d.getEntryByName;var b=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance,e=b&&b.timing&&b.timing.navigationStart?b.timing.navigationStart:window["adrum-start-time"],h=a.utils.now;d.mark=function(b,e){this.A[b]={name:b,entryType:"mark",startTime:a.utils.isDefined(e)?e:h(),duration:0}};d.measure=function(b,d,c){this.A.hasOwnProperty(d)&&
this.A.hasOwnProperty(c)?this.A[b]={name:b,entryType:"measure",startTime:d?this.A[d].startTime:e,duration:(c?this.A[c].startTime:h())-(d?this.A[d].startTime:e)}:a.error("M12"+(this.A.hasOwnProperty(d)?c:d)+" does not exist. ")};d.getEntryByName=function(a){return this.A[a]||null}})(f||(f={}))})(g||(g={}));(function(a){(function(d){function f(b,h){b=b||{};for(var d in b)h[d]=function(){var h=d,c=b[d];return function(b){var e="_"+h,d=this[e];if(a.utils.isDefined(b))if(typeof b===c)this[e]=b;else throw TypeError("wrong type of "+
h+" value, "+typeof b+" passed in but should be a "+c+".");return d}}()}function c(a){var h={},b;for(b in a){var d=a[b];h[d.start]=!0;h[d.end]=!0}return h}var b=function(){function b(h){this.g=new a.vb;this.timestamp(a.utils.now());this.guid(a.utils.generateGUID());this.url(document.URL);this.Tc(h)}b.prototype.type=function(){return 100};b.prototype.Tc=function(b){if(a.utils.isObject(b))for(var e in b){var d=this[e]||this["mark"+a.utils.Nb(e)];d&&a.utils.isFunction(d)&&d.call(this,b[e])}};b.Jb=function(a,
b,e){return{guid:function(){return a},url:function(){return b},type:function(){return e}}};b.prototype.xf=function(){return b.Jb(this.parentGUID(),this.parentUrl(),this.parentType())};b.prototype.parent=function(b){var e=this.xf();a.utils.isDefined(b)&&(this.parentGUID(b.guid()),this.parentUrl(b.url()),this.parentType(b.type()));return e};return b}();d.EventTracker=b;d.X=f;d.Kb=function(b,h){b=b||{};var d=c(b),m;for(m in d)d=a.utils.Nb(m),h["mark"+d]=a.utils.Cc(function(a,b){this.g.mark(a,b)},m),
h["get"+d]=a.utils.Cc(function(a){return this.g.Af(a)},m)};f(d.p[100],b.prototype)})(a.events||(a.events={}))})(g||(g={}));var s=this.Be||function(a,d){function f(){this.constructor=a}for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c]);f.prototype=d.prototype;a.prototype=new f};(function(a){(function(a){var f=function(a){function b(b){a.call(this,b)}s(b,a);b.prototype.type=function(){return 4};return b}(a.EventTracker);a.Error=f;a.X(a.p[4],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=
function(d){function b(){d.apply(this,arguments)}s(b,d);b.prototype.setUp=function(){d.prototype.setUp.call(this);if(a.aop.support(window.onerror)){var e=this;window.onerror=a.aop.around(window.onerror,function(h,d,c,f,g){b.Ha||(b.errorsSent>=a.conf.Ud?a.log("M13"):(f=a.utils.tryExtractingErrorStack(g),a.command("reportPageError",new a.events.Error(a.utils.mergeJSON({msg:h,url:d,line:c,stack:f},e.status))),b.errorsSent++,b.Ha=!0))},function(){b.Ha=!1},"onerror");a.log("M14")}else a.log("M15")};b.Ha=
!1;b.errorsSent=0;return b}(d.ib);d.ErrorMonitor=f;d.Xb=new d.ErrorMonitor})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){var d=function(){function d(){this.ta=[];this.oa(d.wa,0)}d.prototype.jg=function(a){this.oa(d.Db,a)};d.prototype.lg=function(a){this.oa(d.Lb,a)};d.prototype.kg=function(a){this.oa(d.Fb,a)};d.prototype.oa=function(a,b){this.ta.push({ig:(new Date).getTime(),hg:b,Dc:a});this.Ve=a};d.prototype.getPhaseName=function(){return this.Ve};d.prototype.getPhaseID=function(a){for(var b=
0;b<d.Ib.length;b++)if(d.Ib[b]===a)return b;return null};d.prototype.getPhaseCallbackTime=function(a){for(var b=this.ta,d=0;d<b.length;d++)if(b[d].Dc===a)return b[d].ig;return null};d.prototype.findPhaseAtNominalTime=function(c){a.assert(0<=c);for(var b=this.ta,e=b.length-1;0<=e;e--)if(c>=b[e].hg)return b[e].Dc;a.error("M16",c,a.utils.$e(b));return d.wa};d.wa="AFTER_FIRST_BYTE";d.Db="AFTER_DOM_INTERACTIVE";d.Lb="AT_ONLOAD";d.Fb="AFTER_ONLOAD";d.Ib=[d.wa,d.Db,d.Lb,d.Fb];return d}();a.kh=d;a.lifecycle=
new d;a.lifecycle=a.lifecycle})(g||(g={}));(function(a){(function(a){var f=function(a){function b(){a.apply(this,arguments)}s(b,a);b.prototype.type=function(){return 0};return b}(a.EventTracker);a.PageView=f})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){}c.prototype.setUp=function(){c.Gg();c.Fg()};c.Fg=function(){a.utils.addEventListener(window,"load",c.pa);a.utils.addEventListener(window,"load",c.pg)};c.pg=function(b){a.lifecycle.lg(b&&b.timeStamp);
a.utils.Sa(function(){var b=(new Date).getTime();a.lifecycle.kg(b);a.command("mark","onload",b);d.ub.g&&(d.perfMonitor.Re(),d.perfMonitor.Se());a.command("reportOnload",new a.events.PageView);a.utils.loadScriptAsync(a.conf.adrumExtUrl)});a.log("M17")};c.Gg=function(){if(document.addEventListener)document.addEventListener("DOMContentLoaded",c.ea,!1);else{document.attachEvent("onreadystatechange",c.ea);var b=null;try{b=null===window.frameElement?document.documentElement:null}catch(d){}null!=b&&b.doScroll&&
function q(){if(!c.isReady){try{b.doScroll("left")}catch(a){setTimeout(q,10);return}c.pa()}}()}a.log("M18")};c.pa=function(b){c.xc||(a.lifecycle.jg(b&&b.timeStamp),a.command("mark","onready",(new Date).getTime()),c.xc=!0)};c.ea=function(a){document.addEventListener?(document.removeEventListener("DOMContentLoaded",c.ea,!1),c.pa(a)):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",c.ea),c.pa(a))};c.isReady=!1;c.xc=!1;return c}();d.yd=f;d.Ye=new d.yd})(a.monitor||(a.monitor=
{}))})(g||(g={}));(function(a){(function(d){var f=function(){function d(){this.navTiming=this.resTiming=null}d.prototype.setUp=function(){d.g=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance};d.prototype.Re=function(){var b=d.g;if(b=b&&b.timing)if(b.navigationStart&&b.navigationStart<=b.loadEventEnd){var e={},h;for(h in b){var q=b[h];"number"===typeof q&&(e[h]=q)}this.navTiming=e}else a.log("M20");else a.log("M19")};d.prototype.Se=function(){this.resTiming=
this.dc()};d.prototype.dc=function(){var b=d.g,e=[];b&&b.getEntriesByType&&(b=b.getEntriesByType("resource"))&&b.length&&0<b.length&&b.unshift&&(e=b);0==e.length&&a.log("M21");return e};d.g=null;return d}();d.ub=f;d.perfMonitor=new d.ub})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){a=a.events||(a.events={});a=a.b||(a.b={});a.navigationStart="navigationStart";a.domainLookupStart="domainLookupStart";a.domainLookupEnd="domainLookupEnd";a.connectStart="connectStart";a.secureConnectionStart="secureConnectionStart";
a.connectEnd="connectEnd";a.requestStart="requestStart";a.responseStart="responseStart";a.responseEnd="responseEnd";a.domContentLoadedEventStart="domContentLoadedEventStart";a.loadEventEnd="loadEventEnd";a.Qc="sendTime";a.Zb="firstByteTime";a.Mc="respAvailTime";a.Nc="respProcTime";a.Za="viewChangeStart";a.dd="viewChangeEnd";a.$a="viewDOMLoaded";a.kd="xhrRequestsCompleted";a.Sh="viewFragmentsLoaded";a.Th="viewResourcesLoaded";a.ab="virtualPageStart";a.Zg="virtualPageEnd"})(g||(g={}));(function(a){a=
a.events||(a.events={});a.C={};a.C[0]={ef:{start:a.b.navigationStart,end:a.b.loadEventEnd,name:"PLT"},lf:{start:a.b.navigationStart,end:a.b.responseStart,name:"FBT"},Oh:{start:a.b.navigationStart,end:a.b.requestStart,name:"SCT"},Ph:{start:a.b.secureConnectionStart,end:a.b.connectEnd,name:"SHT"},uh:{start:a.b.domainLookupStart,end:a.b.domainLookupEnd,name:"DLT"},Rh:{start:a.b.connectStart,end:a.b.connectEnd,name:"TCP"},Mh:{start:a.b.requestStart,end:a.b.responseStart,name:"RAT"},wh:{start:a.b.responseStart,
end:a.b.loadEventEnd,name:"FET"},zh:{start:a.b.responseStart,end:a.b.domContentLoadedEventStart,name:"DRT"},oh:{start:a.b.responseStart,end:a.b.responseEnd,name:"DDT"},sh:{start:a.b.responseEnd,end:a.b.domContentLoadedEventStart,name:"DPT"},Lh:{start:a.b.domContentLoadedEventStart,end:a.b.loadEventEnd,name:"PRT"},th:{start:a.b.navigationStart,end:a.b.domContentLoadedEventStart,name:"DOM"}};a.C[2]={lf:{start:a.b.Qc,end:a.b.Zb,name:"FBT"},yh:{start:a.b.Zb,end:a.b.Mc,name:"DDT"},nh:{start:a.b.Mc,end:a.b.Nc,
name:"DPT"},ef:{start:a.b.Qc,end:a.b.Nc,name:"PLT"}};a.C[3]={Fh:{start:a.b.ab,end:a.b.Zg,name:"PLT"},qh:{start:a.b.Za,end:a.b.dd,name:"DDT"},Ch:{start:a.b.Za,end:a.b.$a,name:"DRT"},fh:{start:a.b.dd,end:a.b.$a,name:"DPT"},gh:{start:a.b.Za,end:a.b.$a,name:"DOM"},Kh:{start:"viewChangeEnd",end:"xhrRequestsCompleted",name:null},Dh:{start:"viewChangeEnd",end:"viewPartialsLoaded",name:null},Bh:{start:"viewPartialsLoaded",end:"viewFragmentsLoaded",name:null},Eh:{start:"viewPartialsLoaded",end:"viewResourcesLoaded",
name:null}};a.C[102]=a.C[3]})(g||(g={}));(function(a){(function(a){var f=function(a){function b(b){a.call(this,b)}s(b,a);b.prototype.type=function(){return 2};return b}(a.EventTracker);a.Ajax=f;a.X(a.p[2],f.prototype);a.Kb(a.C[2],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(a){var f=function(a){function b(b){a.call(this,b)}s(b,a);b.prototype.type=function(){return 2};return b}(a.Ajax);a.AdrumAjax=f;a.X(a.p[101],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=
function(d){function b(){d.call(this);this.conf=null;this.Ua=!1;!0===window["adrum-xhr-disable"]?a.log("M22"):window.XMLHttpRequest?(this.conf={exclude:[{urls:[{pattern:a.conf.beaconUrlHttp+a.conf.corsEndpointPath},{pattern:a.conf.beaconUrlHttps+a.conf.corsEndpointPath}]}],include:[]},b.Gc(this.conf,a.conf.userConf&&a.conf.userConf.xhr),(this.d=window.XMLHttpRequest.prototype)?"open"in this.d&&"send"in this.d?(this.Ua=a.aop.support(this.d.open)&&a.aop.support(this.d.send))||a.log("M26"):a.log("M25"):
a.log("M24")):a.log("M23")}s(b,d);b.Gc=function(d,h){h&&(h.include=a.utils.hd(h.include),h.exclude=a.utils.hd(h.exclude),a.utils.mergeJSON(d,h));var q=d.exclude;if(q)for(var c=0;c<q.length;c++){var l=q[c].urls;l&&0<l.length&&(q[c].urls=b.Rb(l))}if(q=d.include)for(c=0;c<q.length;c++)(l=q[c].urls)&&0<l.length&&(q[c].urls=b.Rb(l))};b.Rb=function(b){for(var h=[],d=0;d<b.length;d++){var c=b[d].pattern;if("string"===typeof c)try{h.push(new RegExp(c))}catch(l){a.exception(l,"Parse regex pattern failed.")}else a.error("xhr filter pattern should be a string")}return h};
b.Vc=function(a,h,d){var c=d&&d.include;d=d&&d.exclude;return c&&0<c.length&&!b.sc(h,a,c)||d&&0<d.length&&b.sc(h,a,d)};b.prototype.setUp=function(){if(this.Ua){a.log("M27");a.xhrConstructor=window.XMLHttpRequest;a.xhrOpen=this.xhrOpen=this.d.open;a.xhrSend=this.xhrSend=this.d.send;var d=this;this.d.open=a.aop.around(this.d.open,function(){var h=1<=arguments.length?String(arguments[0]):"",q=2<=arguments.length?String(arguments[1]):"";b.Vc(q,h,d.conf)||(this._adrumAjaxT=new a.events.AdrumAjax(a.utils.mergeJSON({method:h,
url:q,xhr:this},d.status)))},null,"XHR.open");this.d.send=a.aop.around(this.d.send,function(){var h=this,q=h._adrumAjaxT;if(q){var c=a.utils.now(),l=q.getSendTime();a.assert(null===l,"M28");q.timestamp(c);q.markSendTime(l||c);q.parentPhase(a.lifecycle.getPhaseName());b.Vf(q.url())?h.setRequestHeader("ADRUM","isAjax:true"):a.log("M29",document.location.href,q.url());var f=0,g=function(){if(4==h.readyState)a.log("M30"),d.ua(h);else{var q=null;try{q=h.onreadystatechange}catch(c){a.log("M31",c);d.ua(h);
return}f++;q?a.aop.support(q)?(h.onreadystatechange=d.Sb(q,h,"XHR.onReadyStateChange"),a.log("M32",f)):(a.log("M33"),d.ua(h)):f<b.ze?a.utils.Sa(g):(a.log("M34"),d.ua(h))}};g()}},null,"XHR.send");"addEventListener"in this.d&&"removeEventListener"in this.d&&a.aop.support(this.d.addEventListener)&&a.aop.support(this.d.removeEventListener)?(this.d.addEventListener=a.aop.around(this.d.addEventListener,this.Ue(),null,"XHR.addEventListener"),this.d.removeEventListener=a.aop.around(this.d.removeEventListener,
function(b,d){if(this._adrumAjaxT){var e=Array.prototype.slice.call(arguments);d.__adrumInterceptor?(e[1]=d.__adrumInterceptor,a.log("M35")):a.log("M36");return e}},null,"XHR.removeEventListener")):a.log("M37");a.log("M38")}};b.fg=function(a,b){for(var d=!1,c=0;c<b.length;c++){var l=b[c];if(l&&l.test(a)){d=!0;break}}return d};b.sc=function(a,d,c){var m=!1;if(d&&c)for(var l=0;l<c.length;l++){var f=c[l];if(!(f.method&&a!==f.method||f.urls&&!b.fg(d,f.urls))){m=!0;break}}return m};b.Vf=function(a){var b=
document.createElement("a");b.href=a;a=document.location;return":"===b.protocol&&""===b.hostname&&""===b.port||b.protocol===a.protocol&&b.hostname===a.hostname&&b.port===a.port};b.jc=function(b){var d=b._adrumAjaxT;if(d){var c=(new Date).getTime();2==b.readyState?d.markFirstByteTime(d.getFirstByteTime()||c):4==b.readyState&&(a.assert(null===d.getRespAvailTime(),"M39"),d.markRespAvailTime(d.getRespAvailTime()||c),d.markFirstByteTime(d.getFirstByteTime()||c))}};b.prototype.Sb=function(d,h,c){return b.dh(d,
function(){b.jc(this)},function(){var d=h._adrumAjaxT;if(d&&4==h.readyState){var e=(new Date).getTime();a.assert(null===d.getRespProcTime(),"M40");d.markRespProcTime(d.getRespProcTime()||e);b.a(d)}},c)};b.a=function(b){a.command("reportXhr",b)};b.prototype.ua=function(d){if(d._adrumAjaxT){var h=(new Date).getTime()+3E4,c=function(){b.jc(d);var f=d._adrumAjaxT;if(f){var l=(new Date).getTime();4==d.readyState?(a.assert(null===f.getRespProcTime(),"M41"),f.markRespProcTime(f.markRespProcTime()||l),a.log("M42"),
b.a(f),delete d._adrumAjaxT):l<h?setTimeout(c,b.hb):(delete d._adrumAjaxT,a.log("M43"))}};c()}};b.dh=function(b,d,c,f){var l=b;b&&"object"===typeof b&&"toString"in b&&"[xpconnect wrapped nsIDOMEventListener]"===b.toString()&&"handleEvent"in b&&(l=function(){b.handleEvent.apply(this,Array.prototype.slice.call(arguments))});return a.aop.around(l,d,c,f)};b.prototype.Ue=function(){for(var b=0;b<arguments.length;b++);var d=this;return function(b,e){if(("load"===b||"error"===b)&&e&&this._adrumAjaxT){var c;
c=e;if(c.__adrumInterceptor)c=c.__adrumInterceptor;else if(a.aop.support(c)){var f=d.Sb(c,this,"XHR.invokeEventListener");c=c.__adrumInterceptor=f}else c=null;if(c)return f=Array.prototype.slice.call(arguments),f[1]=c,a.log("M44"),f;a.log("M45",b,e)}}};b.ze=5;b.hb=50;return b}(d.ib);d.ha=f;d.cb=new d.ha})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){(function(d){function f(a,b){var d=[],c=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);if(c){var f=c[1],c=c[2].replace(/^"|"$/g,""),c=decodeURIComponent(c).split("|"),
g=c[0].split(":");if("R"===g[0]&&Number(g[1])===b)for(e(f),f=1;f<c.length;f++)d.push(c[f])}return d}function c(a,b){var d=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);if(d){var c=d[1],f=d[4],g=d[5];if(Number(d[3])===b)return e(c),{index:Number(f),value:g}}return null}function b(b){var d=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);if(d){a.log("M48",b);if(3===d.length)return e("ADRUM"),{startTime:Number(d[1]),startPage:d[2]};a.error("M49",b);return null}}function e(b){a.log("M47",b);var d=new Date;
d.setTime(d.getTime()-1E3);document.cookie=b+"=;Expires="+d.toUTCString()}d.startTimeCookie=null;d.cookieMetadataChunks=null;d.Vb=function(h,e){a.log("M46");for(var g=e?e.length:0,l=[],p=h.split(";"),k=0;k<p.length;k++){var n=p[k],s=c(n,g);s?l.push(s):(n=b(n),null!=n&&(d.startTimeCookie=n))}Array.prototype.sort.call(l,function(a,b){return a.index-b.index});n=[];for(k=0;k<l.length;k++)n.push(l[k].value);for(k=0;k<p.length;k++)(l=f(p[k],g))&&0<l.length&&(n=n.concat(l));d.cookieMetadataChunks=n};a.correlation.eck=
d.Vb})(a.correlation||(a.correlation={}))})(g||(g={}));(function(a){a.report=function(d){a.utils.Sa(function(){a.command("reportEvent",d)})}})(g||(g={}));(function(a){"APP_KEY_NOT_SET"===a.conf.appKey&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");a.correlation.Vb(document.cookie,document.referrer);a.command("mark","firstbyte",window["adrum-start-time"]);a.monitor.Uc(a.monitor.Xb,
a.monitor.Ye,a.monitor.perfMonitor,a.monitor.cb)})(g||(g={}));(function(a){a=a.ng||(a.ng={});a=a.c||(a.c={});a.vc="locationChangeStart";a.cg="locationChangeSuccess";a.Oc="routeChangeStart";a.Pc="routeChangeSuccess";a.Xc="stateChangeStart";a.Yc="stateChangeSuccess";a.ed="viewContentLoaded";a.Gf="includeContentRequested";a.Ff="includeContentLoaded";a.Ub="digest";a.Hh="outstandingRequestsComplete";a.Mb="beforeNgXhrRequested";a.Eb="afterNgXhrRequested";a.Gh="ngXhrLoaded";a.Pb="$$completeOutstandingRequest"})(g||
(g={}));(function(a){(function(a){function f(b,e,h,c,f,g){if(e)try{return e.apply(b,[h,c,f].concat(g))}catch(p){return b.error(h,c,f,g,a.Error.Gd,"an exception occurred in a caller-provided callback function",p)}}function c(b,e){return function(){var h=this.current,c=e[h]||e[a.ga]||h,g=Array.prototype.slice.call(arguments);if(this.Pe(b))return this.error(b,h,c,g,a.Error.Hd,"event "+b+" inappropriate in current state "+this.current);if(!1===f(this,this["onbefore"+b],b,h,c,g))return a.fa.eb;c===a.ga&&
(c=h);if(h===c)return f(this,this["onafter"+b]||this["on"+b],b,h,c,g),a.fa.ke;var l=this;this.transition=function(){l.transition=null;l.current=c;f(l,l["onenter"+c]||l["on"+c],b,h,c,g);f(l,l["onafter"+b]||l["on"+b],b,h,c,g);return a.fa.se};if(!1===f(this,this["onleave"+h],b,h,c,g))return this.transition=null,a.fa.eb;if(this.transition)return this.transition()}}a.VERSION="2.3.5";a.fa={se:1,ke:2,eb:3,ih:4};a.Error={Hd:100,jh:200,Gd:300};a.ga="*";a.create=function(b,e){function h(b){var h=b.from instanceof
Array?b.from:b.from?[b.from]:[a.ga];k[b.name]=k[b.name]||{};for(var e=0;e<h.length;e++)n[h[e]]=n[h[e]]||[],n[h[e]].push(b.name),k[b.name][h[e]]=b.to||h[e]}var f="string"==typeof b.initial?{state:b.initial}:b.initial,g=e||b.target||{},l=b.events||[],p=b.callbacks||{},k={},n={};f&&(f.event=f.event||"startup",h({name:f.event,from:"none",to:f.state}));for(var s=0;s<l.length;s++)h(l[s]);for(var u in k)k.hasOwnProperty(u)&&(g[u]=c(u,k[u]));for(u in p)p.hasOwnProperty(u)&&(g[u]=p[u]);g.current="none";g.Ah=
function(a){return a instanceof Array?0<=a.indexOf(this.current):this.current===a};g.Oe=function(b){return!this.transition&&(k[b].hasOwnProperty(this.current)||k[b].hasOwnProperty(a.ga))};g.Pe=function(a){return!this.Oe(a)};g.ta=function(){return n[this.current]};g.error=b.error||function(a,b,d,h,e,c,f){throw f||c;};if(f&&!f.defer)g[f.event]();return g}})(a.yb||(a.yb={}))})(g||(g={}));(function(a){(function(d){var f=function(c){function b(b){c.call(this,b);this.g=new a.vb;this.start()}s(b,c);b.prototype.type=
function(){return 3};b.prototype.uf=function(){return d.EventTracker.Jb(this.guid(),this.url(),this.type())};b.prototype.Wc=function(b){var d=this.uf();b.set("parent",d);a.log("M50",d.guid(),d.url())};b.prototype.startCorrelatingXhrs=function(){a.log("M51");this.Wc(a.monitor.cb)};b.prototype.stopCorrelatingXhrs=function(){a.monitor.cb.set("parent",null);a.log("M52")};b.prototype.Jg=function(){a.log("M53");this.Wc(a.monitor.Xb)};b.prototype.start=function(){this.markVirtualPageStart();this.startCorrelatingXhrs()};
b.prototype.end=function(){this.markVirtualPageEnd();this.stopCorrelatingXhrs()};return b}(d.EventTracker);d.VPageView=f;d.X(d.p[3],f.prototype);d.Kb(d.C[3],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){var d=a.ng||(a.ng={}),d=d.conf||(d.conf={});d.disabled=a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&a.conf.userConf.spa.angular.disable;d.xhr={};d.metrics={includeResTimingInEndUserResponseTiming:!0};a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&
a.conf.userConf.spa.angular.vp&&(a.conf.userConf.spa.angular.vp.xhr&&a.monitor.ha.Gc(d.xhr,a.conf.userConf.spa.angular.vp.xhr),a.conf.userConf.spa.angular.vp.metrics&&a.utils.mergeJSON(d.metrics,a.conf.userConf.spa.angular.vp.metrics))})(g||(g={}));(function(a){(function(d){var f=function(c){function b(a){c.call(this,a);this.qc=!0;this.Z={};this.V=0;this.stopCorrelatingXhrs()}s(b,c);b.prototype.type=function(){return 3};b.prototype.ab=function(){this.markViewChangeStart();this.markVirtualPageStart(this.getViewChangeStart());
this.timestamp(this.getViewChangeStart())};b.prototype.ff=function(b){var d=this.identifier();b=b.identifier();var c=!1;return c=!a.utils.isDefined(d)&&!a.utils.isDefined(b)||d===b?!0:a.utils.isDefined(d)&&a.utils.isDefined(b)?d.state||b.state?a.utils.isDefined(d.state)&&a.utils.isDefined(b.state)?d.state.name===b.state.name&&d.state.$===b.state.$&&d.state.aa===b.state.aa&&d.state.url===b.state.url:!1:d.h&&b.h?d.h.La===b.h.La&&d.h.$===b.h.$&&d.h.aa===b.h.aa:d.url===b.url:!1};b.prototype.Hf=function(){this.digestCount(this.digestCount()+
1)};b.prototype.If=function(){this.V++;a.log("increasing xhr count "+this.V+" pending xhr requests")};b.prototype.We=function(){this.V--;a.log("decreasing xhr count "+this.V+" pending xhr requests")};b.prototype.Cf=function(){var b=this.g.getEntryByName(a.events.b.kd);a.log("xhrCount "+this.V+" xhrReuqestCompleted "+b);return 0<this.V};b.prototype.Le=function(){var a={sa:0},d=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");if(d&&0<d.length)for(var c in b.Lc)for(var f=0;f<d.length;f++){var g=
angular.element(d[f]).find(c);if(0<g.length)for(var p=0;p<g.length;p++){var k=g[p][b.Lc[c].Wa];(k=k?decodeURIComponent(k):null)&&!a[k]&&(a[k]=c,a.sa++)}}this.Z=a};b.prototype.Ke=function(a){return!!this.Z[decodeURIComponent(a.name)]};b.prototype.Me=function(){var b=[],d=this;0<this.Z.sa&&(b=a.monitor.perfMonitor.dc().filter(function(a){return d.Ke(a)}));this.resTiming(b)};b.hf=function(b){for(var h=[],c=0;c<b.length;c++){var f=b[c];2!==b[c].eventType&&101!==b[c].eventType||a.monitor.ha.Vc(f.eventUrl,
f.method,d.conf.xhr)||h.push(b[c])}return h};b.vf=function(a){var b,d,c=-1;b=0;for(d=a.length;b<d;b++)c=Math.max(c,a[b].timestamp+a[b].metrics.PLT);return c};b.prototype.Fe=function(){if(d.conf.xhr){var c=b.hf(a.channel.getEventsWithParentGUID(this.guid())),c=b.vf(c);if(0<c){var h=this.g.getEntryByName(a.events.b.kd);this.markXhrRequestsCompleted(Math.min(h&&h.startTime||Number.MAX_VALUE,c))}}};b.prototype.adjustTimings=function(){this.Fe();var b=this.getViewDOMLoaded(),h=this.getXhrRequestsCompleted(),
b=Math.max(b,h);d.conf.metrics.includeResTimingInEndUserResponseTiming&&(this.Ee(),h=this.getViewResourcesLoaded(),h=Math.max(b,h),a.log("adjust this.end from %s to %s",b,h),b=h);this.markVirtualPageEnd(b)};b.prototype.Ee=function(){if(0<this.Z.sa&&(this.Me(),this.resTiming&&this.resTiming.length>=this.Z.sa)){for(var a=[],b=0;b<this.resTiming.length;b++)a.push(this.resTiming[b].responseEnd);a=Math.max.apply(Math,a);this.markViewResourcesLoaded(a)}};b.prototype.identifier=function(d){var c=this.gd;
a.utils.isDefined(d)&&(this.gd=b.gf(d),this.url(this.gd.url));return c};b.gf=function(b){var d={};b&&b.h?(d.h={La:""},a.utils.mergeJSON(d.h,{La:b.h.originalPath,$:b.h.template,aa:b.h.templateUrl})):b&&b.state&&(d.state={url:""},a.utils.mergeJSON(d.state,{url:b.state.url,name:b.state.name,$:b.state.template,aa:b.state.templateUrl}));return d};b.Lc={img:{Wa:"src"},script:{Wa:"src"},link:{Wa:"href"}};return b}(a.events.VPageView);d.NgVPageView=f;a.events.X(a.events.p[102],f.prototype)})(a.ng||(a.ng=
{}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){this.e=new d.NgVPageView}c.prototype.Ag=function(){var b=this;d.conf.metrics.includeResTimingInEndUserResponseTiming?(a.log("M54"),setTimeout(function(){b.Oa()},c.ue)):setTimeout(function(){b.Oa()},c.ve)};c.prototype.Oa=function(){a.log("M55");var b=this.e;a.command("call",function(){b.adjustTimings();a.reporter.reportEvent(b)})};c.prototype.Eg=function(a){this.e=a};c.ue=5E3;c.ve=2*a.monitor.ha.hb;return c}();d.VirtualPageStateMachine=
f;a.yb.create({events:[{name:"start",from:"none",to:"ChangeView"},{name:"viewLoaded",from:"ChangeView",to:"XhrPending"},{name:"xhrCompleted",from:"XhrPending",to:"End"},{name:"abort",from:"*",to:"none"},{name:"init",from:"*",to:"none"},{name:"locChange",from:"*",to:"*"},{name:"beforeXhrReq",from:"*",to:"*"},{name:"afterXhrReq",from:"*",to:"*"}],error:function(d){a.log("M56"+d)},callbacks:{onChangeView:function(){this.e.ab();this.e.Jg()},onviewLoaded:function(){this.e.markViewDOMLoaded()},onXhrPending:function(){this.e.qc&&
this.xhrCompleted()},onleaveXhrPending:function(a,b,d){if("abort"===a)return this.Oa(),!0;if("xhrCompleted"===a&&"End"===d){if(this.e.Cf())return!1;this.e.markXhrRequestsCompleted();return!0}},onEnd:function(){this.e.Le();this.Ag()},oninit:function(a,b,d,h){this.Eg(h)},onlocChange:function(a,b,d,h){this.e.identifier.url=h},onbeforeXhrReq:function(d,b,f,h){var g=this.e;g.qc=!1;a.log("M57",h&&h[1]||"",g.guid());g.If();g.startCorrelatingXhrs();h[3]&&(h[3]=a.aop.before(h[3],function(b,d,c){a.log("M58");
g.We();c&&(b=a.utils.tg(c)["content-type"])&&0<=b.indexOf("text/html")&&g.markViewFragmentsLoaded()}));return h},onafterXhrReq:function(){this.e.stopCorrelatingXhrs()}}},f.prototype)})(a.ng||(a.ng={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){this.l=new d.VirtualPageStateMachine}c.prototype.j=function(b,c){a.log("M59",b);switch(b){case d.c.Oc:case d.c.Xc:this.l.start();var h=new d.NgVPageView({url:c.next.url,identifier:c.next});this.l.e.ff(h)?this.l.e.Tc({url:c.next.url,
identifier:c.next}):this.Og(h);break;case d.c.Pc:case d.c.Yc:this.l.e.markViewChangeEnd();break;case d.c.ed:this.l.viewLoaded();break;case d.c.Mb:this.l.beforeXhrReq(c);break;case d.c.Eb:this.l.afterXhrReq();break;case d.c.Pb:this.l.xhrCompleted();break;case d.c.vc:this.l.locChange(c.next.url);break;case d.c.Ub:this.l.e.Hf()}};c.prototype.Og=function(a){this.l.abort();this.l.init(a);this.l.start()};return c}();d.xe=f})(a.ng||(a.ng={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){this.k=
new d.xe}c.prototype.setUp=function(){var b=this;a.utils.addEventListener(document,"DOMContentLoaded",function(){a.log("M60");b.init()})};c.prototype.init=function(){if("undefined"!=typeof angular){a.log("M61");var b=this,d=angular.module("ng");d.config(["$provide",function(a){b.Mf(a);b.Lf(a)}]);d.run(["$browser",function(a){b.Kf(a)}]);a.log("M62")}};c.prototype.Lf=function(b){var c=a.aop,h=this;b.decorator("$httpBackend",["$delegate",function(a){return a=c.around(a,function(){var a=Array.prototype.slice.call(arguments);
h.k.j(d.c.Mb,a);return a},function(){h.k.j(d.c.Eb)})}])};c.prototype.Mf=function(b){var c=a.aop,h=this;b.decorator("$rootScope",["$delegate",function(a){a.$digest=c.after(a.$digest,function(){h.k.j(d.c.Ub)});a.$on("$locationChangeStart",function(a,b){var c={url:b},f=a&&a.Y&&a.Y.$state&&a.Y.$state.current;f&&(c.state=f);h.k.j(d.c.vc,{next:c})});a.$on("$locationChangeSuccess",function(){h.k.j(d.c.cg)});a.$on("$routeChangeStart",function(a,b){var c={url:location.href},f=b&&b.$$route;f&&(c.h=f);h.k.j(d.c.Oc,
{next:c})});a.$on("$routeChangeSuccess",function(){h.k.j(d.c.Pc)});a.$on("$stateChangeStart",function(a,b){h.k.j(d.c.Xc,{next:{state:b}})});a.$on("$stateChangeSuccess",function(){h.k.j(d.c.Yc)});a.$on("$viewContentLoaded",function(a){var b={url:location.href};if(a=a&&a.Y&&a.Y.$state&&a.Y.$state.current)b.state=a;h.k.j(d.c.ed,{next:b})});a.$on("$includeContentRequested",function(){h.k.j(d.c.Gf)});a.$on("$includeContentLoaded",function(){h.k.j(d.c.Ff)});return a}])};c.prototype.Kf=function(b){var c=
this;b.$$completeOutstandingRequest=a.aop.before(b.$$completeOutstandingRequest,function(){c.k.j(d.c.Pb)})};return c}();d.eh=f;d.ngMonitor=new f})(a.ng||(a.ng={}))})(g||(g={}));(function(a){var d=a.ng||(a.ng={});d.conf.disabled||a.monitor.Uc(d.ngMonitor)})(g||(g={}))}};})();

