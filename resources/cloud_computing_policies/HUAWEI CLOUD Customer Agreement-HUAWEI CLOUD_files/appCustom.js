
function endCustomer(){
	if( /pcloudApp/i.test(navigator.userAgent) ) {
		hideAllSome();
      }else{
  		var str = location.search;
  		var suband = "type=android";
  		var subios = "type=ios";
  		if( findStr(str,subios) || findStr(str,suband) ){
			hideAllSome();
  		}
	}
}
function findStr(a,b){
	return a.indexOf(b)>=0;
}
function hideAllSome(){
    $(".product-banner-btn-group a:contains(立即购买)").closest("a").css("display","none");
	$("[meta-data-adjust-app = hide]").css("display","none");
	$(".poster-actions-btns span:contains(立即购买)").closest(".aui-button").css("display","none");
	$(".btn-group .btn:contains(立即购买)").closest(".btn").css("display","none");
	$(".poster-actions-btns a:contains(立即购买)").closest(".aui-btn-red").css("display","none");
	$(".product-buy .act-btn.act-btn-def:contains(立即购买)").closest(".act-btn-def").css("display","none");
	$(".banner-actions .btn-def span:contains(价格计算器)").closest(".btn-def").css("display","none");
	$(".poster-actions-btns a:contains(价格计算器)").closest("a").css("display","none");
	$(".poster-actions a:contains(价格计算器)").closest("a").css("display","none");
	$(".meal-buy .act-btn.act-btn-def:contains(立即购买)").closest(".act-btn-def").css("display","none");
	$(".slider-box .slider-button.btn:contains(立即购买)").closest(".slider-button").css("display","none");
	$(".product-config-card .cui-btn:contains(立即购买)").css("display","none");
	$("#content").css({"padding-top":"0","backgroundPositionY":"0"})
}
endCustomer();


$('[data-mod-id="seo-bottom"] .pep-service-entrance .por-section').attr("style", "background-image:url(https://res-static.hc-cdn.cn/aem/content/dam/cloudbu-site/archive/china/zh-cn/about/events/ad.png)");


var recommendArticles = $(".pep-recommend-article ul.another>li");
for(var i=0;i<recommendArticles.length;i++) {
   var tmp = $(recommendArticles[i]);
   if(tmp.children("p").length>3) {
       tmp.hide();
   }
}

setTimeout(function(){
	var logoutBtn = $(".logout-btn");
	var href = logoutBtn.attr("href");
	if(href && href.indexOf("/index/logout?")==0 && window.location.pathname && window.location.pathname.indexOf("/articles/")==0) {
		logoutBtn.attr("href", "https://portal.huaweicloud.com" + href);
	}
}, 2000);

if(window.location.pathname && window.location.pathname.indexOf("/articles/")==0) {
    var lastPageEle = $('a[href*="-0.html"]');
    if(lastPageEle.length>0){
		lastPageEle.attr("href", lastPageEle.attr("href").replace("-0.html", ".html"));

    }

    var linksEle = $("link[href*='https://static.huaweicloud.com/static']");
    for(var i=0; i<linksEle.length; i++) { 
      var tmp = $(linksEle[i]); 
      tmp.attr("href", tmp.attr("href").replace("https://static.huaweicloud.com/static/", "https://res.hc-cdn.com/ecology/5.11.207/"));     
    }
}



// meta-data-adjust-app="hide"