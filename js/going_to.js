$(function(){
	//立即抢购跳转到现货商城
	$('.xianhuo_shopping').on('click',function(){
		window.location.href="shangcheng/spot_mall.html";
	})
	//注册
	$('.zhuce_ss').on('click',function(){
		window.location.href="html/register.html";
	})
	//登录
	$('.logind_s').on('click',function(){
		window.location.href="html/sign_in.html";
	})
//	//热门资讯
//	$('.article_number p').on('click',function(){
//		window.location.href="wuli/news_information.html";
//	})
	//首页现货商城跳转到现货商城
	$('.g_shop_list li').on('click',function(){
		window.location.href="shangcheng/spot_mall.html";
	})
	//资讯跳转到资讯页面
	$('.g_show li').on('click',function(){
		window.location.href="wuli/news_information.html";
	})
})
