$(function() {
	//
	//最上面个人中心点击下滑
	//
	 $('.huiyuan_zhoangixn').mouseenter(function(){
		$('.sjpi_koa').show();
		});
	$('.huiyuan_zhoangixn').mouseleave(function(){
		$('.sjpi_koa').hide();
	});
	//
	//资讯点击下滑
	//
	 $('.zuohou_de').mouseenter(function(){
		$('.zixun_down').show();
		});
	$('.zuohou_de').mouseleave(function(){
		$('.zixun_down').hide();
	});
	/*banner 轮播*/
	var swiper = new Swiper('.lunbo_nac ', {
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	/**/
	/*移上去APP二维码显示*/
	/*//*/
	$('.dian_app').on('mouseover', function() {
		$('.show_app').show();
	})
	$('.dian_app').on('mouseleave', function() {
		$('.show_app').hide();
	})
	
	//移上去公众号二维码显示*/
	//
	$('.dian_what').on('mouseover', function() {
		$('.show_what').show();
	})
	$('.dian_what').on('mouseleave', function() {
		$('.show_what').hide();
	})
	
	//
	/*点击nav下分类 第一行*/
	//
	//	点击全部隐藏地名
	
//	$('.inde_hide').on('click', function(){
//		$('.xianshi_shoyu').hide();
//	})
	$('.first_nav dd').on('click', function(){
		$(this).addClass('post_back').siblings().removeClass('post_back').parent().siblings('.taggel_nav').children().removeClass();
		$('.bootm_nav dd').removeClass();
	})
	//
	//	第二行
	//
//	$('.first_sjang dd').off('click');
	$('.first_sjang dd').on('click', function(){
		console.log($(this).index()-2);
		if($(this).index()-2<0){
			$('.taggel_nav').removeClass('xianshi_shoyu');
		}else{
			$('.taggel_nav').eq($(this).index()-2).addClass('xianshi_shoyu').siblings().removeClass('xianshi_shoyu');
		}
	})
	//
	//第三行
	//
	$('.bootm_nav dd').on('click', function(){
//		$(this).addClass('post_back').siblings().removeClass('post_back').parent().parent().siblings('.bootm_nav').find('dd').removeClass('post_back');
		$(this).addClass('post_back').siblings().removeClass('post_back').parents('.bootm_nav').siblings('.bootm_nav').find('dd').removeClass('post_back');
	})
	//
	//现货商城  显示对于产地的搜索
	//
	$('.jian_tou_xiahua').on('click', function() {
		if($('.xiayi_kuai').css('display') == "none") {
			$('.xiayi_kuai').slideDown();
		} else {
			$('.xiayi_kuai').slideUp();
		}
	})



})