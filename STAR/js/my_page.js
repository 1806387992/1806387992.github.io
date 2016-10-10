$().ready(function(){
	//定义几个颜色变量
	var normal = '#AAE5F7' ; //导航列表正常的背景颜色
	var hover = '#93E0F5' ;  //导航列表每项鼠标滑过的背景颜色
	var active = '#93E0F5' ; //导航列表每项被选中的颜色
	init_nav(); //初始化顶部导航栏
	change_content(); //左侧导航响应
//	zhanwei();//动态寄予顶部导航的占位，以使左侧导航紧挨着顶部导航    ps:娶不到nav_section的高度值

})
//初始化导航栏，每个页面都可用此加载，则省去了重写文档和样式的工作
function init_nav(){
	var a = $.ajax({
			  		type:"get",
			  		url:"nav.html",
			  		async:true,
			  		success:function(data){
			  			$("#nav_section").html(a.responseText);
			  		}
			  	});
}

//根据目录切换相应的页面
function change_content(){
	//我的主页按钮
	$('#my_home').click(function(){
		$('#content').attr('src','my_home.html');
		$('#my_home').parent().css('background-color','#93E0F5');
		$('#my_hotimg').parent().css('background-color','#AAE5F7');
		$('#my_focus').parent().css('background-color','#AAE5F7');
		$('#my_favorites').parent().css('background-color','#AAE5F7');
		$('#my_message').parent().css('background-color','#AAE5F7');
	})
	//热门图片按钮
	$('#my_hotimg').click(function(){
		$('#content').attr('src','my_hotimg.html');
		$('#my_hotimg').parent().css('background-color','#93E0F5');
		$('#my_home').parent().css('background-color','#AAE5F7');
		$('#my_focus').parent().css('background-color','#AAE5F7');
		$('#my_favorites').parent().css('background-color','#AAE5F7');
		$('#my_message').parent().css('background-color','#AAE5F7');
	})
	//特别关注按钮
	$('#my_focus').click(function(){
		$('#content').attr('src','my_focus.html');
		$('#my_focus').parent().css('background-color','#93E0F5');
		$('#my_home').parent().css('background-color','#AAE5F7');
		$('#my_hotimg').parent().css('background-color','#AAE5F7');
		$('#my_favorites').parent().css('background-color','#AAE5F7');
		$('#my_message').parent().css('background-color','#AAE5F7');
		
		//首次被按下时，徽章被摘下，即子节点i标签去掉badge class
		$(this).children().removeClass('badge');
		$('#my_focus span:nth-child(2)').html('');
	})
	//我的收藏按钮
	$('#my_favorites').click(function(){
		$('#content').attr('src','my_favorite.html');
		$('#my_favorites').parent().css('background-color','#93E0F5');
		$('#my_home').parent().css('background-color','#AAE5F7');
		$('#my_hotimg').parent().css('background-color','#AAE5F7');
		$('#my_focus').parent().css('background-color','#AAE5F7');
		$('#my_message').parent().css('background-color','#AAE5F7');
	})
	//我的消息按钮
	$('#my_message').click(function(){
		$('#content').attr('src','my_message.html');
		$('#my_message').parent().css('background-color','#93E0F5');
		$('#my_home').parent().css('background-color','#AAE5F7');
		$('#my_hotimg').parent().css('background-color','#AAE5F7');
		$('#my_focus').parent().css('background-color','#AAE5F7');
		$('#my_favorites').parent().css('background-color','#AAE5F7');
		
		//首次被按下时，徽章被摘下，即子节点i标签去掉badge class
		$(this).children().removeClass('badge');
		$('#my_message span:nth-child(2)').html('');
	})
}
////动态寄予顶部导航的占位，以使左侧导航紧挨着顶部导航
//function zhanwei(){
//	var h = $('#nav_section').outerHeight();
//	alert(h);
//	var a = h + 'px';
//	$('#zhanwei').css('height','a');
//}
