window.onload=function(){
	//热门资讯
	new_information(5);
	
	//新闻资讯
	new_information(3);
}

//新闻资讯接口
function new_information(num){
	$.ajax({
		type:"get",
		url:kbb+"kbb-webs/journalism/HotJournalism",
		data:{
			number:num
		},
		async:false,
		success:function(data){
			// console.log(data)
			if(data.status==200){
				if(num==5){
					var article_number=document.getElementById('article_number');
					for(let i=0;i<data.data.length;i++){
						var kbb_hotNews_func = new hotNews_func(data.data[i],article_number);
						kbb_hotNews_func.getclick();
					}
				}else{
					var new_ul=document.createElement('ul');
					var newCenter=document.getElementById('g_new_center');
					newCenter.append(new_ul);
					for(let i=0;i<data.data.length;i++){
						var kbb_new_func = new new_func(data.data[i],new_ul);
						kbb_new_func.getclick();
					}
				}	
			}else{
				alert(data.msg)
			}
		}
		
	});
}
//热门资讯
function hotNews_func(data,parent){
	this.p=document.createElement('p');
	this.p.innerHTML=data.banner;
	parent.appendChild(this.p);
	this.journalismId=data.journalismId;
}
hotNews_func.prototype.getclick = function() {
	var _this=this;
	this.p.onclick=function(){
		window.location='wuli/information_details.html?journalismId='+_this.journalismId;
	}
}
//新闻资讯
function new_func(data,parent){
	this.new_img=document.createElement('img');
	this.new_img.src=data.headImage;
	
	this.new_dt=document.createElement('dt');
	this.new_dt.appendChild(this.new_img);
	
	this.new_a=document.createElement('a');
	this.new_a.innerHTML=data.banner;
	
	this.new_h5=document.createElement('h5');
	this.new_h5.appendChild(this.new_a);
	
	this.new_p=document.createElement('p');
	this.new_p.innerHTML=data.content;
	
	this.new_span=document.createElement('span');
	this.new_span.innerHTML=data.putTime;
	
	this.new_dd=document.createElement('dd');
	this.new_dd.appendChild(this.new_h5);
	this.new_dd.appendChild(this.new_p);
	this.new_dd.appendChild(this.new_span);
	
	this.new_dl=document.createElement('dl');
	this.new_dl.className='clear';
	this.new_dl.appendChild(this.new_dt);
	this.new_dl.appendChild(this.new_dd);
	
	this.new_li=document.createElement('li');
	this.new_li.appendChild(this.new_dl);
	
	parent.appendChild(this.new_li);
	this.journalismId=data.journalismId;
}
new_func.prototype.getclick=function(){
	var _this=this;
    console.log(_this.journalismId);
	this.new_a.onclick=function(){
		// alert(_this.journalismId)
		window.location='wuli/information_details.html?journalismId='+_this.journalismId;
	}
}

// 资讯swiper
var priceSwiper = new Swiper('.g_swiper_container', {
	direction: 'vertical',
	slidesPerView: 'auto',
	mousewheel: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});



priceSwiper.scrollbar.$dragEl.css('background', '#cecece');
// k线图
var mint_time = ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07'];
option = {
	grid: {
		x: 30,
		y: 30,
		x2: 30,
		y2: 30,
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross'
		}
	},
	toolbox: {
		show: true,
		feature: {
			saveAsImage: {}
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: mint_time,
		axisLabel: {
			show: true
		},
		splitLine: {
			show: true
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ccc'
			}
		},
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			show: true
		},
		axisPointer: {
			snap: true
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ccc'
			}
		},
		nameTextStyle: {
			color: '#000',
		}
	},
	series: [{
		type: 'line',
		smooth: true,
		data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
		markArea: {
			data: [
				[{
					name: '早高峰',
					xAxis: '07:30'
				}, {
					xAxis: '10:00'
				}],
				[{
					name: '晚高峰',
					xAxis: '17:30'
				}, {
					xAxis: '21:15'
				}]
			]
		}
	}]
};
var myChart = echarts.init(document.getElementById('g_canvas'));
myChart.setOption(option);