!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define123&&define.amd?define([],e):"object"==typeof exports?exports.reporter=e():(t.PortalCommonResource=t.PortalCommonResource||{},t.PortalCommonResource.reporter=e())}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/build/",o(o.s=14)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){var o={utf8:{stringToBytes:function(t){return o.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(o.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],o=0;o<t.length;o++)e.push(255&t.charCodeAt(o));return e},bytesToString:function(t){for(var e=[],o=0;o<t.length;o++)e.push(String.fromCharCode(t[o]));return e.join("")}}};t.exports=o},function(t,e,o){"use strict";var n=o(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=n(o(1)),a=n(o(2)),s=n(o(3)),c=n(o(6));!function(t){t.RTTI="rtti",t.TTI="tti",t.FMP="fmp"}(i||(i={}));var u={"www.huaweicloud.com/intl":{spa:!1,siteId:"201",reportRate:"0.5"},"activity.huaweicloud.com/intl":{spa:!1,siteId:"201",reportRate:"1"},"support.huaweicloud.com/intl":{spa:!1,siteId:"201",reportRate:"0.5"},"www.huaweicloud.com":{spa:!1,siteId:"101",reportRate:"0.5"},"beian.huaweicloud.com":{spa:!1,siteId:"101",reportRate:"0.5"},"activity.huaweicloud.com":{spa:!1,siteId:"101",reportRate:"0.7"},"support.huaweicloud.com":{spa:!1,siteId:"101",reportRate:"0.5"},"intl.huaweicloud.com":{spa:!1,siteId:"201",reportRate:"0"},"activity-intl.huaweicloud.com":{spa:!1,siteId:"201",reportRate:"0"},"support-intl.huaweicloud.com":{spa:!1,siteId:"201",reportRate:"0"},"marketplace.huaweicloud.com/intl":{spa:!1,siteId:"201",reportRate:"0"},"marketplace.huaweicloud.com":{spa:!1,siteId:"102",reportRate:"0.7"},"marketplace-intl.huaweicloud.com":{spa:!1,siteId:"202",reportRate:"0"},"bbs.huaweicloud.com":{spa:!1,siteId:"103",reportRate:"0.7"},"edu.huaweicloud.com/intl":{spa:!1,siteId:"204",reportRate:"0"},"edu.huaweicloud.com":{spa:!1,siteId:"104",reportRate:"1"},"edu-intl.huaweicloud.com":{spa:!1,siteId:"204",reportRate:"0"},"developer.huaweicloud.com/intl":{spa:!1,siteId:"205",reportRate:"0.5"},"developer.huaweicloud.com":{spa:!1,siteId:"105",reportRate:"1"},"competition.huaweicloud.com":{spa:!1,siteId:"105",reportRate:"1"},"developer-intl.huaweicloud.com":{spa:!1,siteId:"205",reportRate:"0"},"account.huaweicloud.com/usercenter":{spa:!0,siteId:"106",reportRate:"0.5"},"account-intl.huaweicloud.com/usercenter":{spa:!0,siteId:"206",reportRate:"0.5"},"account.huaweicloud.com/obmgr":{spa:!0,siteId:"107",reportRate:"0.5"},"account-intl.huaweicloud.com/obmgr":{spa:!0,siteId:"207",reportRate:"0"},"reg.huaweicloud.com/registerui/cn":{spa:!1,siteId:"108",reportRate:"1"},"reg.huaweicloud.com/registerui/intl":{spa:!1,siteId:"208",reportRate:"0"},"www.huaweicloud.com.*/pricing.html":{spa:!0,siteId:"101",reportRate:"0.5"},"www.huaweicloud.com/intl.*/pricing/index.html":{spa:!0,siteId:"201",reportRate:"0"},"console.huaweicloud.com":{spa:!0,siteId:"",reportRate:"1"},"storage.huaweicloud.com":{spa:!0,siteId:"",reportRate:"0.5"},"cloudscope.huaweicloud.com":{spa:!0,siteId:"110",reportRate:"0.5"},"activityy.huaweicloud.com:3454":{spa:!0,siteId:"110",reportRate:"1"},"cloudcrm.huawei.com":{spa:!0,siteId:"109",reportRate:"1"}},d=function(){function t(){var e=this;(0,r.default)(this,t),(0,s.default)(this,"info",void 0),(0,s.default)(this,"firstPaintEndTime",void 0),(0,s.default)(this,"options",void 0),(0,s.default)(this,"wiseTrace",void 0),(0,s.default)(this,"ua",void 0),(0,s.default)(this,"isReport",void 0),(0,s.default)(this,"originUrl",void 0),(0,s.default)(this,"enterHash",void 0),(0,s.default)(this,"reportCount",void 0),(0,s.default)(this,"PRODUCT_REG",".huaweicloud.com|cbcmc.huaweisre.com|pepcloud.huaweisre.com|cloudbi.huawei.com|cloudcrm.huawei.com"),(0,s.default)(this,"CONSOLE_DOMAIN","console.ulanqab.huawei.com|console.huaweicloud.com|storage.huaweicloud.com|console-intl.huaweicloud.com"),(0,s.default)(this,"isProduction",(function(){var t=!1;try{var o=document&&document.location&&document.location.host;o&&e.PRODUCT_REG&&new RegExp(e.PRODUCT_REG).test(o)&&(t=!0)}catch(t){}return t})),this.info={did:"default",uid:"default",url:"",st:"",dns:"",tcp:"",ssl:"",ttfb:"",content:"",dom:"",fp:"",res:"",fload:"",tti:0,os:"",ct:0,ua:"",net:"6"},this.isReport={web:!1,rtti:!1},this.firstPaintEndTime=0,this.originUrl=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),this.options={},this.wiseTrace=window.wiseTrace,this.ua=window.navigator&&window.navigator.userAgent,this.onLoad(this.startReport),this.enterHash=window.location.hash,this.reportCount=0,window.TinyMonitor=this,window.tinyMonitor=this}return(0,a.default)(t,[{key:"initDefaultData",value:function(){var t=0,e=window.location.href,o={};for(var n in u){if(e.match(new RegExp(n,"i"))&&n.indexOf(this.originUrl.replace(/https:\/\/|http:\/\//i,""))>-1){var i=n.length;i>t&&(o=u[n],t=i)}}return o}},{key:"collectData",value:function(){try{var t=void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"";if(/baiduspider|googlebot|bytespider|yandexbot|ahrefsbot|cincraw/i.test(t))return!1;var e=window.wiseTrace&&window.wiseTrace.getDomainId()||"default";if(["8d290a328afc43289615aafc19018094","f14556910eb34a85b517546ae48311bc","bece427a214249bfb392a77b4c64a0f9"].includes(e))return!1;var o=this.getPerformance(),n=this.initDefaultData(),i=this.getOsInfo(),r=/Mobile|Android|webOS|iPhone|iPad|Phone/i.test(this.ua);return this.options=window._tm&&window._tm.options?window._tm.options:this.options,this.info.did=window.wiseTrace&&window.wiseTrace.getDeviceId()||"default",this.info.sid=this.options&&this.options.siteId||n.siteId||"",this.info.spa=this.options&&this.options.isSPA||n.spa||!1,this.info.url=this.info.spa?window.location.host+window.location.pathname+(window.location.hash?window.location.hash.replace(/\?.*/,""):""):window.location.host+window.location.pathname,this.info.st=o.startTime,this.info.dns=o.dnsTime,this.info.tcp=o.tcpTime,this.info.ssl=o.sslTime,this.info.ttfb=o.ttfbTime,this.info.content=o.contentTime,this.info.dom=o.domReadyTime,this.info.fp=o.firstPaint,this.info.res=o.resTime,this.info.fload=o.onLoadTime,this.info.os=i.name+"_"+i.version,this.info.ct=r?1:0,this.info.ua=this.ua,this.info.net=this.getNetworkType(),this.info.netSpeed=this.getNetSpeed(),this.info.cver=this.options&&this.options.clientVersion||"default",this.info.region=this.getRegion(),this.info.resources=this.getResources(),!0}catch(t){return console.error(t),!1}}},{key:"getOsInfo",value:function(){try{if(!this.ua)return{};var t=navigator.userAgent.toLowerCase(),e="Unknown",o="Unknown";if(t.indexOf("win")>-1)e="Windows",o=t.indexOf("windows nt 5.0")>-1?"Windows 2000":t.indexOf("windows nt 5.1")>-1||t.indexOf("windows nt 5.2")>-1?"Windows XP":t.indexOf("windows nt 6.0")>-1?"Windows Vista":t.indexOf("windows nt 6.1")>-1||t.indexOf("windows 7")>-1?"Windows 7":t.indexOf("windows nt 6.2")>-1||t.indexOf("windows 8")>-1?"Windows 8":t.indexOf("windows nt 6.3")>-1?"Windows 8.1":t.indexOf("windows nt 6.2")>-1||t.indexOf("windows nt 10.0")>-1?"Windows 10":"Unknown";else if(t.indexOf("iphone")>-1){e="Iphone";var n=t.toLowerCase().match(/os [\d._]*/gi);o=String(n).replace(/[^0-9|_.]/gi,"").replace(/_/gi,".")}else if(t.indexOf("mac")>-1){e="Mac";var i=t.toLowerCase().match(/os x [\d._]*/gi);o=String(i).replace(/[^0-9|_.]/gi,"").replace(/_/gi,".")}else if(t.indexOf("x11")>-1||t.indexOf("unix")>-1||t.indexOf("sunname")>-1||t.indexOf("bsd")>-1)e="Unix";else if(t.indexOf("Android")>-1||t.indexOf("android")>-1||t.indexOf("linux")>-1){var r=t.indexOf("Android")>0?t.indexOf("Android"):t.indexOf("android");r>-1?(e="Android",o=t.substr(r+8,t.indexOf(";",r)-r-8)):e="Linux"}else e="Unknown";var a=new Object;return a.name=e,a.version=o.length>20?"Unknown":o,a}catch(t){console.debug(t)}}},{key:"getNetSpeed",value:function(){return{"4g":4,"3g":3,"2g":2,"slow-2g":1}[navigator.connection&&navigator.connection.effectiveType]||0}},{key:"getStation",value:function(){var t=0,e=window.location.hostname;return e.indexOf("-intl")>-1?t=2:/^(console.huaweicloud.com|account.huaweicloud.com|storage.huaweicloud.com|console.ulanqab.huawei.com|console-odin.ulanqab.huawei.com)$/.test(e)?t=1:/^.+\-(console.huaweicloud.com|console.ulanqab.huawei.com)$/.test(e)&&(t=3),t}},{key:"getRegion",value:function(){for(var t=window.location.search.substring(1).split("&"),e=0;e<t.length;e++){var o=t[e].split("=");if("region"===o[0])return this.extractRegionId(o[1])}return""}},{key:"extractRegionId",value:function(t){var e=t;if(e&&e.indexOf("_")>-1){var o=e.match(/^(DeC)_([^_]+)_(.+)$/);e=o?o[2]:e.slice(0,e.indexOf("_"))}return e}},{key:"getResources",value:function(){for(var t=[],e=["link","img","css","script","xmlhttprequest","fetch"],o=performance.getEntriesByType("resource"),n=Math.min(o.length,100),i=0;i<n;i++){var r=o[i];if(e.includes(r.initiatorType)){var a=r.name.replace(/^https?\:\/\//i,"");-1!==a.indexOf("?")&&(a=a.split("?")[0]);var s=(0,c.default)(a);Math.floor(100*Math.random())>0&&"1"!==this.getQueryVariable("reportResources")&&(a=""),t.push({d:Math.round(r.duration),s:r.encodedBodySize,u:a,t:r.initiatorType,h:s})}}return t}},{key:"getNetworkType",value:function(){try{var t,e=this.ua,o=e.match(/NetType\/\w+/)?e.match(/NetType\/\w+/)[0]:"NetType/other";switch(o=o.toLowerCase().replace("nettype/",""),navigator.connection&&"wifi"===navigator.connection.type?o="wifi":"other"!==o&&navigator.connection&&navigator.connection.effectiveType&&(o=navigator.connection.effectiveType),o){case"wifi":t="1";break;case"5g":t="2";break;case"4g":t="3";break;case"3g":t="4";break;case"2g":t="5";break;default:t="6"}return t}catch(t){return"0"}}},{key:"getPerformance",value:function(){var t={};try{var e=window.performance.timing;t.startTime=e.fetchStart,t.redirectTime=e.redirectEnd-e.redirectStart,t.dnsTime=e.domainLookupEnd-e.domainLookupStart,t.ttfbTime=e.responseStart-e.requestStart,t.appcacheTime=e.domainLookupStart-e.fetchStart,t.unloadTime=e.unloadEventEnd-e.unloadEventStart,t.tcpTime=e.connectEnd-e.connectStart,t.sslTime=e.secureConnectionStart?e.connectEnd-e.secureConnectionStart:0,t.reqTime=e.responseStart-e.requestStart,t.resTime=e.loadEventEnd-e.domContentLoadedEventEnd>=0?e.loadEventEnd-e.domContentLoadedEventEnd:0,t.contentTime=e.responseEnd-e.requestStart,t.blankTime=(e.domInteractive||e.domLoading)-e.fetchStart,t.domReadyTime=e.domContentLoadedEventEnd-e.fetchStart,t.onLoadTime=e.loadEventEnd-e.fetchStart;var o=0,n=e.fetchStart;if(window.performance.getEntriesByType("paint")&&window.performance.getEntriesByType("paint").length>1)return t.firstPaint=parseInt(window.performance.getEntriesByType("paint")[0].startTime,10),t;if(!(o=window._tm&&window._tm.firstPaintEndTime>0?window._tm.firstPaintEndTime:window.chrome&&window.chrome.loadTimes?1e3*window.chrome.loadTimes().firstPaintTime:e.msFirstPaint?e.msFirstPaint:e.responseEnd))return-1;t.firstPaint=o>=n?parseFloat((o-n).toFixed(2)):-1}catch(t){console.error("get performance err")}return t}},{key:"isNeedReport",value:function(t){try{return this.options&&this.options.customReportRate?Math.ceil(1e3*Math.random())<1e3*parseFloat(this.options.customReportRate):Math.ceil(1e3*Math.random())<1e3*parseFloat(t||"0")}catch(t){return!1}}},{key:"reportInfo",value:function(t){try{var e=(t?"https://excpt.huaweicloud.com":"https://portal.ulanqab.huawei.com")+"/api/monitor/rest/cbc/cbcopsdatacollector/v1/pmp/performance/web",o=window.performance.timing||{};if(this.info.fload<1||this.info.dom<1||o.fetchStart<1||o.requestStart<1||o.responseStart<1)return;if(this.isReport.web)return;this.isReport.web=!0,this.sendAjax(e,this.info)}catch(t){console.error("report info err")}}},{key:"getQueryVariable",value:function(t){for(var e=window.location.search.substring(1).split("&"),o=0;o<e.length;o++){var n=e[o].split("=");if(n[0]==t)return n[1]}return!1}},{key:"sendAjax",value:function(t,e){var o=new XMLHttpRequest;o.open("POST",t,!0),o.setRequestHeader("Content-type","text/plain"),o.send(JSON.stringify(e)),o.onreadystatechange=function(){4===o.readyState&&o.status}}},{key:"startReport",value:function(){var t=this;window.setTimeout((function(){try{if(!t.collectData())return;var e=t.initDefaultData();window._tm&&window._tm.options&&window._tm.options.siteId?t.reportInfo(!1!==window._tm.options.isProduction):t.isProduction()&&e.reportRate&&t.isNeedReport(e.reportRate)?t.reportInfo(!0):t.isProduction()||t.reportInfo(!1)}catch(t){}}),1500)}},{key:"onLoad",value:function(t){var e=this,o=function(){setTimeout(t.call(e),16)};"complete"===document.readyState?o():window.addEventListener("load",o)}},{key:"reportCustomTime",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object.values(i).includes(t)?this.isReport[t]?console.debug("无效调用，因为".concat(t," 重复上报")):this.enterHash&&this.enterHash!==window.location.hash?console.debug("路由已经切换，".concat(t," 无效上报")):(this.reportCount++,this.reportCount<n?console.debug("目前调用累积".concat(this.reportCount,"次，达到").concat(n,"次才会上报")):(window.setTimeout((function(){var n,i=(e.isProduction()?"https://excpt.huaweicloud.com":"https://portal.ulanqab.huawei.com")+"/api/monitor/rest/cbc/cbcopsdatacollector/v1/pmp/performance/reportTime",r={begin:((null===(n=window.performance)||void 0===n?void 0:n.timing)||{}).fetchStart,end:Date.now(),type:t,sid:o,url:window.location.host+window.location.pathname+(window.location.hash?window.location.hash.replace(/\?.*/,""):""),ua:navigator.userAgent,region:e.getRegion(),station:e.getStation()};e.sendAjax(i,r)}),0),this.isReport[t]=!0,console.debug("".concat(t," 上报成功")))):console.debug("未知类型 ".concat(t,"，无效上报"))}},{key:"reportRtti",value:function(){this.reportCustomTime(i.RTTI)}}]),t}();e.default=d},function(t,e,o){var n,i,r,a,s;n=o(7),i=o(4).utf8,r=o(8),a=o(4).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):i.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var o=n.bytesToWords(t),c=8*t.length,u=1732584193,d=-271733879,l=-1732584194,f=271733878,p=0;p<o.length;p++)o[p]=16711935&(o[p]<<8|o[p]>>>24)|4278255360&(o[p]<<24|o[p]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var h=s._ff,w=s._gg,m=s._hh,g=s._ii;for(p=0;p<o.length;p+=16){var v=u,y=d,b=l,T=f;u=h(u,d,l,f,o[p+0],7,-680876936),f=h(f,u,d,l,o[p+1],12,-389564586),l=h(l,f,u,d,o[p+2],17,606105819),d=h(d,l,f,u,o[p+3],22,-1044525330),u=h(u,d,l,f,o[p+4],7,-176418897),f=h(f,u,d,l,o[p+5],12,1200080426),l=h(l,f,u,d,o[p+6],17,-1473231341),d=h(d,l,f,u,o[p+7],22,-45705983),u=h(u,d,l,f,o[p+8],7,1770035416),f=h(f,u,d,l,o[p+9],12,-1958414417),l=h(l,f,u,d,o[p+10],17,-42063),d=h(d,l,f,u,o[p+11],22,-1990404162),u=h(u,d,l,f,o[p+12],7,1804603682),f=h(f,u,d,l,o[p+13],12,-40341101),l=h(l,f,u,d,o[p+14],17,-1502002290),u=w(u,d=h(d,l,f,u,o[p+15],22,1236535329),l,f,o[p+1],5,-165796510),f=w(f,u,d,l,o[p+6],9,-1069501632),l=w(l,f,u,d,o[p+11],14,643717713),d=w(d,l,f,u,o[p+0],20,-373897302),u=w(u,d,l,f,o[p+5],5,-701558691),f=w(f,u,d,l,o[p+10],9,38016083),l=w(l,f,u,d,o[p+15],14,-660478335),d=w(d,l,f,u,o[p+4],20,-405537848),u=w(u,d,l,f,o[p+9],5,568446438),f=w(f,u,d,l,o[p+14],9,-1019803690),l=w(l,f,u,d,o[p+3],14,-187363961),d=w(d,l,f,u,o[p+8],20,1163531501),u=w(u,d,l,f,o[p+13],5,-1444681467),f=w(f,u,d,l,o[p+2],9,-51403784),l=w(l,f,u,d,o[p+7],14,1735328473),u=m(u,d=w(d,l,f,u,o[p+12],20,-1926607734),l,f,o[p+5],4,-378558),f=m(f,u,d,l,o[p+8],11,-2022574463),l=m(l,f,u,d,o[p+11],16,1839030562),d=m(d,l,f,u,o[p+14],23,-35309556),u=m(u,d,l,f,o[p+1],4,-1530992060),f=m(f,u,d,l,o[p+4],11,1272893353),l=m(l,f,u,d,o[p+7],16,-155497632),d=m(d,l,f,u,o[p+10],23,-1094730640),u=m(u,d,l,f,o[p+13],4,681279174),f=m(f,u,d,l,o[p+0],11,-358537222),l=m(l,f,u,d,o[p+3],16,-722521979),d=m(d,l,f,u,o[p+6],23,76029189),u=m(u,d,l,f,o[p+9],4,-640364487),f=m(f,u,d,l,o[p+12],11,-421815835),l=m(l,f,u,d,o[p+15],16,530742520),u=g(u,d=m(d,l,f,u,o[p+2],23,-995338651),l,f,o[p+0],6,-198630844),f=g(f,u,d,l,o[p+7],10,1126891415),l=g(l,f,u,d,o[p+14],15,-1416354905),d=g(d,l,f,u,o[p+5],21,-57434055),u=g(u,d,l,f,o[p+12],6,1700485571),f=g(f,u,d,l,o[p+3],10,-1894986606),l=g(l,f,u,d,o[p+10],15,-1051523),d=g(d,l,f,u,o[p+1],21,-2054922799),u=g(u,d,l,f,o[p+8],6,1873313359),f=g(f,u,d,l,o[p+15],10,-30611744),l=g(l,f,u,d,o[p+6],15,-1560198380),d=g(d,l,f,u,o[p+13],21,1309151649),u=g(u,d,l,f,o[p+4],6,-145523070),f=g(f,u,d,l,o[p+11],10,-1120210379),l=g(l,f,u,d,o[p+2],15,718787259),d=g(d,l,f,u,o[p+9],21,-343485551),u=u+v>>>0,d=d+y>>>0,l=l+b>>>0,f=f+T>>>0}return n.endian([u,d,l,f])})._ff=function(t,e,o,n,i,r,a){var s=t+(e&o|~e&n)+(i>>>0)+a;return(s<<r|s>>>32-r)+e},s._gg=function(t,e,o,n,i,r,a){var s=t+(e&n|o&~n)+(i>>>0)+a;return(s<<r|s>>>32-r)+e},s._hh=function(t,e,o,n,i,r,a){var s=t+(e^o^n)+(i>>>0)+a;return(s<<r|s>>>32-r)+e},s._ii=function(t,e,o,n,i,r,a){var s=t+(o^(e|~n))+(i>>>0)+a;return(s<<r|s>>>32-r)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var o=n.wordsToBytes(s(t,e));return e&&e.asBytes?o:e&&e.asString?a.bytesToString(o):n.bytesToHex(o)}},function(t,e){var o,n;o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],o=0,n=0;o<t.length;o++,n+=8)e[n>>>5]|=t[o]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],o=0;o<32*t.length;o+=8)e.push(t[o>>>5]>>>24-o%32&255);return e},bytesToHex:function(t){for(var e=[],o=0;o<t.length;o++)e.push((t[o]>>>4).toString(16)),e.push((15&t[o]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],o=0;o<t.length;o+=2)e.push(parseInt(t.substr(o,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],r=0;r<4;r++)8*n+6*r<=8*t.length?e.push(o.charAt(i>>>6*(3-r)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&e.push((o.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|o.indexOf(t.charAt(n))>>>6-2*i);return e}},t.exports=n},function(t,e){function o(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(o(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&o(t.slice(0,0))}(t)||!!t._isBuffer)}},,,,,,function(t,e,o){t.exports=o(15)},function(t,e,o){"use strict";var n=o(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o(5)),r=window._tm||{options:{}};new i.default;var a=r;e.default=a}])}));