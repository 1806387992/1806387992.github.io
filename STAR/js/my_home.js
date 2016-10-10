$().ready(function(){
	magnifier(); //放大缩小图片
	show_option() //控制option_list列表是否显示
})
function magnifier(){
	$('.picture img').click(function(e){
		var w = $(this).width();
//		var normal = $('p').fontsize();
//		alert(w + normal);
		if(w/14<16){
			$(this).css('width','35em');
		}else{
			$(this).css('width','15em');
		}
	})
}
function show_option(){
	$('.option').click(function(e){
		$(this).next().toggle();
//		$(document).one('click',function(){
//			$('.option_list ul').hide();
//		})
//		$('.option_list ul').click(function (event) 
//		{
//			event.stopImmediatePropagation();//阻止事件向上冒泡
//		});
//		event.stopImmediatePropagation();
	})
}
