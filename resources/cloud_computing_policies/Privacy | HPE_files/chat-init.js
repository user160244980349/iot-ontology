if(window.DCEData={},DCEData.isTesting=/driftvadev|egaindev|dcedev/.test(location.search),DCEData.platform="",DCEData.chatFunctions={},DCEData.CCLL={country:"us",language:"en"},DCEData.log=function(){var a={info:10,warning:50,error:100};function n(e){return"[*DCE*] ts:|"+((new Date).getTime()-DCEData.log.ts)+"|: "+e}function t(e,t){if(DCEData.log.enabled&&a[e]&&a[e]>=a[DCEData.log.level])switch(e){case"error":console.error(n(t));break;case"warning":console.warn(n(t));break;case"info":default:console.log(n(t))}}return{ts:(new Date).getTime(),level:"info",enabled:function(){var e=!1;try{e=DCEData.isTesting||/dcelog=true/i.test(location.search+document.cookie)}catch(e){}return e}(),info:function(e){t("info",e)},warn:function(e){t("warning",e)},error:function(e){t("error",e)}}}(),DCEData.chatFunctions.getCountry=function(){var t;try{var e=digitalData.page.pageInfo.breadCrumbs[0];"v2.0"===e?t=digitalData.page.pageInfo.breadCrumbs.slice(1,2)[0]:"content"===e&&(t=digitalData.page.pageInfo.breadCrumbs.slice(3,4)[0]),t=t.length<2?null:t}catch(e){t=null}DCEData.log.info("Breadcrumbs Country: "+t);var a,n=window.document.querySelector("meta[name=target_country]")?window.document.querySelector("meta[name=target_country]").content:null;DCEData.log.info("Meta Country: "+n);try{a=location.pathname.match(/\/([^/]+)\/[^/]+/)[1]}catch(e){a=null}DCEData.log.info("Pathname Country: "+a);var o=t||n||a||null;if(!o){var r="us";try{r=localStorage.getItem("hpeIPLookupPriv")?JSON.parse(localStorage.getItem("hpeIPLookupPriv")).country.toLowerCase():null,DCEData.log.info("Firehose Country: "+r)}catch(e){}o=r||"us"}return DCEData.log.info("Final Country: "+t),o.toLowerCase()},DCEData.chatFunctions.getLanguage=function(){var t,a,n;try{var e=digitalData.page.pageInfo.breadCrumbs[0];"v2.0"===e?t=digitalData.page.pageInfo.breadCrumbs.slice(2,3)[0]:"content"===e&&(t=digitalData.page.pageInfo.breadCrumbs.slice(4,5)[0]),t=t.length<2?null:t}catch(e){t=null}DCEData.log.info("Breadcrumbs Language: "+t);try{a=document.documentElement.lang?document.documentElement.lang:document.querySelector("meta[name='lang']")?document.querySelector("meta[name='lang']").content:null}catch(e){a=null}DCEData.log.info("Meta Language: "+a);try{n=location.pathname.match(/\/[^/]+\/([^/]+)/)[1]}catch(e){n=null}DCEData.log.info("Pathname Language: "+n);var o=t||a||n;return DCEData.log.info("Final Language: "+o),o?o.toLowerCase():"en"},DCEData.chatFunctions.getCookie=digitalData.libs.cookie.get?digitalData.libs.cookie.get:function(e,t){return(t=RegExp("(^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?t[2]:""},DCEData.chatFunctions.chatTypeBuilder=function(){function e(e,t){for(var a=0;a<e.length;a++)if(e[a].regex.test(t))return DCEData.log.info("Value found:"),DCEData.log.info(e[a]),e[a].value}var t=e(/www\.hpe\.com/i.test(location.hostname)?[{value:"Index_DVE",regex:/\/discover\/index/},{value:"Index",regex:/index/},{value:"PMC",regex:/partner-marketing-concierge/},{value:"My_Account",regex:/my-account/},{value:"Alliance",regex:/alliance/},{value:"HPE_Discover",regex:/discover/},{value:"HLP",regex:/home|products|404|contact-hpe|buy-parts-products|about|leadership|login|sitemap|webinars/},{value:"ESSNCDI",regex:/servers|storage|networking|integrated-systems/},{value:"JRIT",regex:/solutions/},{value:"PN",regex:/services/},{value:"GSS",regex:/search-results/},{value:"VG",regex:/h22228\/video-gallery/}]:[{value:"Direct+",regex:/h50146\.www5\.hpe\.com\/directplus_ent/},{value:"HPE_Store",regex:/buy\.hpe\.com/},{value:"OCS",regex:/h22174\.www2\.hpe\.com|sce-public\.houston\.hp\.com/},{value:"B2B",regex:/goverment\.hpe\.com|b2b\.hpe\.com/},{value:"PF",regex:/paths\.ext\.hpe\.com/},{value:"GLQQ",regex:/glqq/},{value:"PSNow",regex:/psnow/},{value:"LST",regex:/myenterpriselicense\.hpe\.com/},{value:"Edu",regex:/education|education\.hpe|inter\.viewcentral\.com/},{value:"PMC",regex:/partner\.hpe\.com/},{value:"PRCL",regex:/certification-learning\.hpe\.com/}],location.href),a=e([{value:"AMS",regex:/ca|us/},{value:"EMEA",regex:/za|emea|be|cz|dk|fi|ie|il|no|uk|ae|sa|at|de|ch|fr|it|pt|ru|es|pl|se|tr|nl/},{value:"APJ",regex:/au|hk|in|my|nz|sg|tw|asia|cn|jp|kr/},{value:"LATAM",regex:/lamerica|mx|br/},{value:"WW",regex:/ww/}],DCEData.CCLL.country);return(t||"value_not_defined")+"_"+(a||"region_not_defined")+"_"+DCEData.CCLL.language.toUpperCase()},DCEData.chatFunctions.isLive=function(){if(window.location!==window.parent.location||0<window.navigator.userAgent.indexOf("Trident"))return DCEData.log.info("Iframe or IE detected, returning false to live function"),!1;if(/(driftva|driftvadev)=true/i.test(location.search))return!0;return function(e,t){for(var a=0;a<e.length;a++)if(e[a].regex.test(t))return console.log("value found:"),console.log(e[a].name),!0;return!1}([{name:"PSNow",regex:/psnow\.ext\.hpe\.com|www\.hpe\.com\/psnow\//i},{name:"demandGen",regex:/(www\.hpe\.com|buy\.hpe\.com)/i},{name:"greenlake",regex:/(connect|quoteservices)\.hpe\.com|greenlake\.hpe\.com/i},{name:"pathFactory",regex:/paths\.ext\.hpe\.com/i},{name:"direct+",regex:/h50146\.www5\.hpe\.com\/directplus_ent|onlinestore-japan\.hpe\.com/i},{name:"EDU",regex:/education\.hpe\.com\/us\/en\//i},{name:"PRCL",regex:/certification-learning\.hpe\.com/i},{name:"B2B",regex:/b2b\.hpe\.com/i},{name:"LST",regex:/myenterpriselicense\.hpe\.com/i},{name:"Store",regex:/ngec-qa\.it\.hpe\.com/i},{name:"seismic",regex:/h41360\.www4\.hpe\.com/i}],location.href)},DCEData.chatFunctions.isBlacklist=function(){if(/(driftva|driftvadev)=true/i.test(location.search)||/about\/(executive-briefing-centers|customer-centers|virtual-customer-innovation-center)\.html/i.test(location.pathname))return DCEData.log.info("forcing drift"),!1;return function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(t))return DCEData.log.info("blacklist regex:"),DCEData.log.info(e[a]),!0;return!1}([/investors\.hpe\.com/i,/support\.hpe\.com/i,/techpro\.hpe\.com/i,/community\.hpe\.com/i,/developer\.hpe\.com/i,/psnow\.ext\.hpe\.com\/#\//i,/\/about(\/|\.html)/i,/\/jp\/ja\/partner(\/|\.html)/i,/\/living-progress\.html/i,/\/pdfViewer\.html\?docid=a00005807/i,/\/hewlett-packard-labs\.html/i,/\/leadership\.html/i,/\/news-insights-press\.html/i,/\/partners\.html/i,/\/communities\.html/i,/\/directplus_ent\/guide\/(card|popup)/i,/\/directplus_ent\/(details|directpartner|jeprime|advantageplus)\//i,/\/is-bin\/INTERSHOP.enfinity\/WFS\/(directplus-advantage-site|directplus-partner-site)/i,/\/checkout/i,/\/intershop\//i,/hpe.com\/ru\/ru/i,/cc=ru/i,/collateral\.a00005807enw\.HPE-Modern-Slavery-Transparency-Statement\.html/i],location.href)},DCEData.CCLL.country=DCEData.chatFunctions.getCountry(),DCEData.CCLL.language=DCEData.chatFunctions.getLanguage(),/b2b\.hpe\.com/i.test(location.hostname)){console.log("B2B Patch Active"),DCEData.chatFunctions.getB2BLanguage=function(e){try{var t=e.split("_")[0].toUpperCase();return DCEData.log.info("B2B Language:"),DCEData.log.info(t),/en|fr/i.test(t)?t:"EN"}catch(e){return DCEData.log.info("Error "+e),"EN"}};try{DCEData.CCLL.language=DCEData.chatFunctions.getB2BLanguage(headerData.currentLocale)}catch(e){console.log("Header Data not found, language: EN"),DCEData.CCLL.language="EN"}}var injectedScript=function(){var e={prod:"chat/drift/drift-init.js",dev:"chat/drift/drift-dev.js"};if(DCEData.chatFunctions.isLive()&&!DCEData.chatFunctions.isBlacklist()){var t=/driftvadev=true/i.test(location.search)?e.dev:e.prod,a=document.createElement("script");a.type="text/javascript",a.src="https://www.hpe.com/global/metrics/"+t;var n=document.getElementsByTagName("script")[0];return n.parentNode.insertBefore(a,n),a}}();injectedScript.addEventListener("load",function(){DCEData.chatFunctions.DCECallToAction=function(e){return e?drift.api.startInteraction({interactionId:parseInt(e)}):drift.api.openChat()},DCEData.chatFunctions.showDCE=function(){return window.egainDockChat?egainShowChat():window.drift.api.widget.show()},DCEData.chatFunctions.hideDCE=function(){return window.egainDockChat?egainHideChat(-1):window.drift.api.widget.hide()},(DCEData.platform="drift")===DCEData.platform&&digitalData.promises.DCEReady.then(function(){console.log("promised fulfilled")})});
/** Build-time:20220531-042336 */