$().ready(function(){
	fixed_nav(); //当页面滚动超过多少px再固定住导航栏
	heart_hover(); //当hover时改变爱心的样式
	loadmore(); //页面底部加载更多图片
	goto_top(); //回到顶部方法
	iframe();//登入和注册的弹窗
	top_tip();//top四个分享图标和回到顶部的tip提示
	propaganda();//为了实现宣传语的响应式布局，需要动态获得宣传图片的高度
})

//使导航栏在下拉到一定高度时固定它
function fixed_nav(){
	var nav = $("#nav_section"); //获取导航对象
	var win = $(window); //获取窗口对象
	var sc = $(document); //获取文档对象
	win.scroll(function(){
		if(sc.scrollTop() >= 50){  //当页面滑动超过50像素时则添加该样式
			nav.addClass('fixed_nav');
//			$(".fixed_nav").fadeIn();
		}else{
			nav.removeClass('fixed_nav');
//			$(".fixed_nav").fadeOut();
		}
	})
}
//当鼠标滑过爱心，爱心改变样式
function heart_hover(){
	$('.may_like_info span i').hover(function(){
//		alert('asdf')
	  $('.may_like_info span i').removeClass('fa-heart-o').addClass('fa-heart');
	},function(){
	  $('.may_like_info span i').removeClass('fa-heart').addClass('fa-heart-o');
	})
	
}
//加载更多的图片
function loadmore(){
	$('.loadmore a').click(function(){
	 var a = $.ajax({
			type:"get",
			url:"more_img.html",
			async:true,
			success:function(){
				$('#more_img').append(a.responseText)
			}
		});
	})
}

function goto_top(){
//此函数控制下拉到那个位置显示按钮
   $(window).scroll(function(){  //给window添加滚动事件
   	 var sc = $(window).scrollTop();  //获取window距离文档顶端的垂直位置
   	 var  winheight = $(window).height(); //获取浏览器当前窗口可视区域高度
   	 if(sc > winheight){
   	 	$('.goto_top').css('display','block');  //控制按钮是否显示
   	 }else{
   	 	$('.goto_top').css('display','none');
   	 }
   })
//关键代码，使其匀速滑到顶端
   $('.goto_top').click(function(){
   	 var sc = $(window).scrollTop();
   	 $('body,html').animate({scrollTop:0},500);//$(selector).animate(styles,speed,easing,callback)
   })
}
function iframe(){
	$('#login').click(function() {
	layer.open({
		type: 2,
		skin: 'layui-layer-lan',
		title: ['登入页面', 'text-align:center'],
		shadeClose: true, //如果你的shade是存在的，那么你可以设定shadeClose来控制点击弹层外区域关闭。
		shade: 0.5, //是否开启遮罩，透明度[0.3,'#fff']
		area: ['50%', '60%'],
		content: 'login.html',
	});
})
	$('#register').click(function(){
		layer.open({
			type:2,
			skin:'layui-layer-lan',
			title:['注册页面','text-align:center'],
			shadeClose:true,
			shade:0.5,
			area:['60%','70%'],
			content:'register.html',
		})
	})
}
//top四个分享图标的tip
function top_tip(){
	$('#facebook').mouseover(function(){
		layer.tips('分享到facebook',"#facebook",{tips:[3,'#31B0D5'],time:1000});
	})//tips：[1,'blue'] ，方向用1234代表上下左右，后面是颜色
	$('#weibo').mouseover(function(){
		layer.tips('分享到新浪微博','#weibo',{tips:[3,'#31B0D5'],time:1000});
	})
	$('#qq').mouseover(function(){
		layer.tips('分享到QQ','#qq',{tips:[3,'#31B0D5'],time:1000});
	})
	$('#weixin').mouseover(function(){
		layer.tips('分享到微信','#weixin',{tips:[3,'#31B0D5'],time:1000});
	})
	$(".goto_top").mouseover(function(){
		layer.tips('回到顶部','.goto_top',{tips:[4,'#31b0d5'],time:1000})
	})
}
//为了实现宣传语的响应式布局，需要动态获得宣传图片的高度
function propaganda(){
	
	var h = $('#main_img img').outerHeight();
		var a = h + 'px';
		$('#propaganda').css('height',a);
	window.onresize = function(){
		var h = $('#main_img img').outerHeight();
	//	alert(h);
		var a = h + 'px';
		$('#propaganda').css('height',a);
	}
	
}
