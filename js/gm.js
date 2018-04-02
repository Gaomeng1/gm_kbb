// 测试
var kbb = 'http://192.168.0.110:8080/';

//获取window.href属性
$.getUrlParam = function(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}
//$.getUrlParam('id')


jQuery(document).ready(function($) {

});


$('.g_nav_tab li').off('click');
$('.g_new_tab span').off('click');
$('#g_click_model').off('click');
$('.g_close,.g_bomb_mask').off('click');
$('#clickCart').off('click');
$('.g_spot_list button').off('click');
$('.g_success_alert button').off('click');
$('.g_click_alert').off('click');

// 物流swiper
var mySwiper = new Swiper('.g_log_swiper_container', {
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000
	},
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})
// 商城tab
$('.g_nav_tab li').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
	$('.g_shop_list ul').eq($(this).index() - 1).addClass('g_show').siblings().removeClass('g_show');
})

// 物流弹框 
$('#g_click_model,.g_settlement button').on('click', function() {
	$('.g_success_alert button,#g_selected_goods button').eq(0).addClass('active').siblings().removeClass('active');
	setTimeout(function() {
		$('body').addClass('body_css');
		$('.g_bomb_mask').show().siblings('.g_log_bomb_box').show();
		$('.g_lock_goods').show().siblings('.g_log_bomb_box').show();
	}, 300)
})

// 点击关闭
$('.g_close,.g_bomb_mask').on('click', function() {
	setTimeout(function() {
		$('body').removeClass('body_css');
		$('.g_bomb_mask').hide().siblings('.g_log_bomb_box').hide();
		$('.g_lock_goods').hide().siblings('.g_log_bomb_box').hide();
	})
})
//
// 购物车
//
var flag = true;
$('#clickCart').on('click', function() {
	if (flag == true) {
		$('.g_shopping_cart').animate({
			'right': '0'
		}, 600);
		flag = false;
	} else if (flag == false) {
		$('.g_shopping_cart').animate({
			'right': '-300px'
		}, 600);
		flag = true;
	}
})

// 点击加入购物车
$(function() {
	var offset = $('#end').offset();
	$(window).resize(site);

	function site() {
		offset = $('#end').offset();
	}
	$('#g_spot_list').on('click', 'button', function(event) {
		var flyer = $('<img class="u-flyer" src="../img/chidren/gouwuche.png">');
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			}

		})
		$('#g_length').html(parseInt($('#g_length').html()) + 1);
	})
})

// 立即锁货
$('.g_success_alert button').on('click', function() {
	$(this).addClass('active').siblings('button').removeClass('active');
})

//
//点击top制定
//
$('.zhiding_j').on('click', function() {
	$('html,body').animate({ scrollTop: 0 }, 500);
})

//
//在线客服
//
$('.g_service').on('mouseover', function() {
	$('.chuxiona_ba').css({ "transition": "0.5s", "right": "30px", 'background': '#0058a9' });
})
$('.g_service').on('mouseout', function() {
	$('.chuxiona_ba').css({ 'transition': '0.5s', 'right': '-50px', 'background': '#999999' });
})

//
//二维码显示  购物车
//
$('.g_code').on('mouseover', function() {
	$('.wei_ma').css({ "transition": "0.5s", "right": "44px" });
})
$('.g_code').on('mouseout', function() {
	$('.wei_ma').css({ 'transition': '0.5s', 'right': '-86px' });
})

//
//建议反馈
//
$('.g_feedback').on('mouseover', function() {
	$('.fuanyu_are').css({ "transition": "0.5s", "right": "30px", 'background': '#0058a9' });
})
$('.g_feedback').on('mouseout', function() {
	$('.fuanyu_are').css({ 'transition': '0.5s', 'right': '-50px', 'background': '#999999' });
})

/* 货源搜索 */
var goodsSwiper = new Swiper('.g_goods_banner', {
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

// 弹幕
$('#g_barrage').on('click', function() {
	$(this).animate({
		'left': '-230px'
	}, 300);
	setTimeout(function() {
		$('#g_search_barrage').animate({
			'left': '0'
		}, 600);
	}, 300)
})

$('#g_close').on('click', function() {
	$('#g_search_barrage').animate({
		'left': '-100%'
	}, 600);
	setTimeout(function() {
		$('#g_barrage').animate({
			'left': '0'
		}, 300);
	}, 600)
});


// 选货成功  
$('#g_goods_list button').on('click', function() {
	$('#g_selected_goods button').eq(0).addClass('active').siblings().removeClass('active');
	setTimeout(function() {
		$('body').addClass('body_css');
		$('.g_bomb_mask').show().siblings('#g_selected_goods').show();
	})
})

$('#g_goods_btn').on('click', function() {
	$('#g_free_purchase button').eq(0).addClass('active').siblings().removeClass('active');
	setTimeout(function() {
		$('body').addClass('body_css');
		$('.g_bomb_mask').show().siblings('#g_free_purchase').show();
	})
})
// 个人中心  弹框
$('.g_click_alert').on('click', function() {
	// console.log(888)
})


// 新闻资讯 swiper
var goodsSwiper = new Swiper('.g_news_banner', {
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})

// 注册 
// 获取图形码
function verification_code() {
	// 跨域
	var xhr = new XMLHttpRequest();
	xhr.open("get", kbb + 'kbb-webs/login/createCode', true);
	xhr.responseType = "blob";
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// xhr.withCredentials = true;
	xhr.send();
	xhr.onload = function() {
		if (this.status == 200) {
			var blob = this.response;
			console.log(blob)
			var img = document.getElementById('g_two_img');
			img.onload = function(e) {
				window.URL.revokeObjectURL(img.src);
			};
			img.src = window.URL.createObjectURL(blob);
		} else {
			alert('错误');
		}
	}
}

// function verification_code() {
// 	$.ajax({
// 		url:kbb + 'kbb-webs/login/createCode',
// 		type:"GET",
// 		dataType: '',
// 		data:{},
// 		success:function(data){
// 			console.log(data)
// 		}
// 	})
// }

// 点击换图形码
$('#g_change_one').on('click', function() {
	verification_code();
})
// 获取短信验证码
$('#g_obtain').on('click', function() {
	let phone = $('#g_iph_number').val();
	let img_code = $('#g_img_code').val();
	if (/^1(3|5|7|8)\d{9}$/.test(phone) && phone != '') {
		if (/^[A-Za-z0-9]+$/.test(img_code) && img_code != '' && img_code.length >= 4) {
			$.ajax({
				url: kbb + 'kbb-webs/login/getRegisterVerificationCode',
				type: 'GET',
				dataType: 'json',
				xhrFields: {
					withCredentials: true
				},
				async:false,
				data: { 'telphone': $('#g_iph_number').val(), 'code': $('#g_img_code').val() },
				success: function(data) {
					console.log(data)
					if (data.status == 200) {
						// 读取秒数
						var g_obtain = document.getElementById('g_obtain');
						startgetyzm(g_obtain, verification_code);
					} else {
						alert($.parseJSON(data).MSG);
						$('#g_obtain').off("click", verification_code);
					}

				}
			})
		} else {
			$('.g_form_vf p').eq(1).css({
				'visibility': 'visible'
			}).siblings().css({
				'visibility': 'hidden'
			});
		}
	} else {
		$('.g_form_vf p').eq(0).css({
			'visibility': 'visible'
		}).siblings().css({
			'visibility': 'hidden'
		});
	}

})
// 读取60秒
function startgetyzm(obj, func) {
	var starnum = 59;
	var gotime = null;
	obj.innerHTML = starnum + "秒";

	function minstime() {
		starnum--;
		obj.innerHTML = starnum + "秒";
		if (starnum == 0) {
			clearInterval(gotime);
			obj.innerHTML = "重新获取验证码";
			$(obj).on("click", func);
		}
	}
	gotime = setInterval(minstime, 1000);
}



// 点击注册
$('#registerSubmit').on('click', function() {
	$('.g_checkbox').find('b').remove();
	$(this).removeAttr('disabled');
	// 手机号
	let phone = $('#g_iph_number').val();
	// 图片码
	let img_code = $('#g_img_code').val();
	// 手机验证码
	let vf_code = $('#g_vf_code').val();
	// 
	if (/^1(3|5|7|8)\d{9}$/.test(phone) && phone != '') {
		if (img_code != '' && /^[A-Za-z0-9]+$/.test(img_code) && img_code.length >= 4) {
			if (vf_code != '' && /^[0-9]+$/.test(vf_code)) {
				if ($('.g_checkbox input').is(':checked') == true) {
					$.ajax({
						url: kbb + 'kbb-webs/login/register',
						type: 'POST',
						dataType: 'json',
						data: $("#registerForm").serialize(), //表单序列化\
						success: function(data) {
							console.log(data);
							if (data.status == 200) {
								alert(data.telephone);
								sessionStorage.setItem("phone", phone);
								sessionStorage.setItem("vyCode", vf_code);

								kbbLoad(phone, vf_code);
							} else {
								alert(data.msg);
							}
						}
					})
				} else {
					$('.g_checkbox').append('<b>请阅读该链接</b>');
				}
			} else {
				$('.g_form_vf p').eq(2).css({
					'visibility': 'visible'
				}).siblings().css({
					'visibility': 'hidden'
				});
			}
		} else {
			$('.g_form_vf p').eq(1).css({
				'visibility': 'visible'
			}).siblings().css({
				'visibility': 'hidden'
			});
		}
	} else {
		$('.g_form_vf p').eq(0).css({
			'visibility': 'visible'
		}).siblings().css({
			'visibility': 'hidden'
		});
	}
})


// 调取注册接口
function kbbLoad(tel, code) {
	$.ajax({
		url: kbb + 'kbb-webs/login/login',
		type: 'POST',
		dataType: 'json',
		data: { telphone: tel, localNumber: code },
		success: function(data) {
			console.log(data)
			if (data.status == 200) {
				window.location = '../index.html';
			} else {
				alert(data.msg);
			}
		}
	})
}


// 
// 关于我们
$('#g_about_nav_l').on('click', ' li', function() {
	$(this).addClass('active').siblings().removeClass('active').parents('#g_about_nav_l').siblings('#g_about_tab_r').find('.g_about_list').eq($(this).index()).addClass('g_show').siblings().removeClass('g_show');
})




//订单详情
function func(num) {
	if(num==1){
		$('.g_state li').eq(0).addClass('active');
	}else if(num==2){
        $('.g_state li').eq(4).prevAll().addClass('active').find('button').hide();
	}else if(num==3){
        $('.g_state li').eq(5).addClass('active').prevAll().addClass('active').find('b').addClass('active').end().find('button').hide();
	}else{
        $('.g_state li').eq(6).addClass('active').siblings().addClass('active').find('b').addClass('active').end().find('button').hide();
		console.log($('.g_state li').eq(6))
	}
}




// 填写提货函显示
$(".g_write_btn").on('click',function () {
	setTimeout(function() {
		$('body').addClass('body_css');
		$('.g_bomb_mask').show().siblings('#g_take_goods').show();
	}, 300)
})



//提货函事件
$('.g_fill_global label').on('click',function(){
	$(this).children('i').addClass('active').parent().siblings('label').children('i').removeClass('active');
})
$('.g_fill_global').eq(0).on('click','label',function(){
	if($(this).index()==1){
		$('.g_fill_list').eq(0).addClass('g_show').siblings('.g_fill_list').removeClass('g_show');
	}else{
		$('.g_fill_list').eq(1).addClass('g_show').siblings('.g_fill_list').removeClass('g_show');
	}
}).siblings('.g_fill_list').on('click','.g_fill_global label',function(){
	if($(this).index()==1){
		$('.g_in_batches').removeClass('g_show').siblings('.g_in_voucher').css({
			'padding-top':'40px'
		});
	}else{
		$('.g_in_batches').addClass('g_show').siblings('.g_in_voucher').css({
			'padding-top':'10px'
		});
	}
})


//我的订单
$(".m_order_tab li").on('click',function () {
	$(this).addClass('active').siblings().removeClass('active');
	$('.m_order_list').eq($(this).index()).addClass('g_show').siblings().removeClass('g_show')
})

$('#m_order_ls_inner .m_list_foot button').eq(1).on('click',function () {
	window.location='order_details.html';
})


//企业认证
$('.m_renzheng').eq($.getUrlParam('state')).show().siblings().hide();

$('#g_qiyeForm input[type="file"]').on('change',function () {
	$(this).parent().siblings('i').addClass('g_blue').html($(this).val().split('\\')[2]);
})
// 行业资讯
// function ()