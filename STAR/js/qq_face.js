$(document).ready(function(e) {
    ImgIputHandler.Init();
});
var ImgIputHandler={
	facePath:[
	    {faceName:"微笑",facePath:"0_smile.gif"},
		{faceName:"撇嘴",facePath:"1.gif"},
		{faceName:"色",facePath:"2.gif"},
		{faceName:"发呆",facePath:"3.gif"},
		{faceName:"得意",facePath:"4.gif"},
		{faceName:"流泪",facePath:"5.gif"},
		{faceName:"害羞",facePath:"6.gif"},
		{faceName:"闭嘴",facePath:"7.gif"},
		{faceName:"睡",facePath:"8.gif"},
		{faceName:"大哭",facePath:"9.gif"},
		{faceName:"尴尬",facePath:"10.gif"},
		{faceName:"发怒",facePath:"11.gif"},
		{faceName:"调皮",facePath:"12.gif"},
		{faceName:"龇牙",facePath:"13.gif"},
		{faceName:"惊讶",facePath:"14.gif"},
		{faceName:"难过",facePath:"15.gif"},
		{faceName:"酷",facePath:"16.gif"},
		{faceName:"冷汗",facePath:"17.gif"},
		{faceName:"抓狂",facePath:"18.gif"},
		{faceName:"吐",facePath:"19.gif"},
		{faceName:"偷笑",facePath:"20.gif"},
	    {faceName:"可爱",facePath:"21.gif"},
		{faceName:"白眼",facePath:"22.gif"},
		{faceName:"傲慢",facePath:"23.gif"},
		{faceName:"饥饿",facePath:"24.gif"},
		{faceName:"困",facePath:"25.gif"},
		{faceName:"惊恐",facePath:"26.gif"},
		{faceName:"流汗",facePath:"27.gif"},
		{faceName:"憨笑",facePath:"28.gif"},
		{faceName:"大兵",facePath:"29.gif"},
		{faceName:"奋斗",facePath:"30.gif"},
		{faceName:"咒骂",facePath:"31.gif"},
		{faceName:"疑问",facePath:"32.gif"},
		{faceName:"嘘",facePath:"33.gif"},
		{faceName:"晕",facePath:"34.gif"},
		{faceName:"折磨",facePath:"35.gif"},
		{faceName:"衰",facePath:"36.gif"},
		{faceName:"骷髅",facePath:"37.gif"},
		{faceName:"敲打",facePath:"38.gif"},
		{faceName:"再见",facePath:"39.gif"},
		{faceName:"擦汗",facePath:"40.gif"},
		
		{faceName:"抠鼻",facePath:"41.gif"},
		{faceName:"鼓掌",facePath:"42.gif"},
		{faceName:"糗大了",facePath:"43.gif"},
		{faceName:"坏笑",facePath:"44.gif"},
		{faceName:"左哼哼",facePath:"45.gif"},
		{faceName:"右哼哼",facePath:"46.gif"},
		{faceName:"哈欠",facePath:"47.gif"},
		{faceName:"鄙视",facePath:"48.gif"},
		{faceName:"委屈",facePath:"49.gif"},
		{faceName:"快哭了",facePath:"50.gif"},
		{faceName:"阴险",facePath:"51.gif"},
		{faceName:"亲亲",facePath:"52.gif"},
		{faceName:"吓",facePath:"53.gif"},
		{faceName:"可怜",facePath:"54.gif"},
		{faceName:"菜刀",facePath:"55.gif"},
		{faceName:"西瓜",facePath:"56.gif"},
		{faceName:"啤酒",facePath:"57.gif"},
		{faceName:"篮球",facePath:"58.gif"},
		{faceName:"乒乓",facePath:"59.gif"},
		{faceName:"拥抱",facePath:"78.gif"},
		{faceName:"握手",facePath:"81.gif"},
		{faceName:"得意地笑",facePath:"82.gif"},
		{faceName:"听音乐",facePath:"83.gif"}
	]
	,
	Init:function(){
		//循环加载表情包
		for(var i=0;i<ImgIputHandler.facePath.length;i++){
						$(".faceDiv").append("<img title=\""+ImgIputHandler.facePath[i].faceName+"\" src=\"images/face/"+ImgIputHandler.facePath

[i].facePath+"\" />");
		}
		//输入框失去焦点时的样式
		$(".textarea textarea").focusout(function(){
			$(this).parent().css("box-shadow", "0px 0px 3px 0px rgba(0,0,0,0.15) inset");
            $(this).parent().css("box-shadow", "0px 0px 3px 0px rgba(0,0,0,0.15) inset");
            $(this).parent().css("-moz-box-shadow", "0px 0px 3px 0px rgba(0,0,0,0.15) inset");
            $(this).parent().css("-webkit-box-shadow", "0px 0px 3px 0px rgba(0,0,0,0.15) inset");
		});
		//输入框获得焦点时的样式
		$(".textarea textarea").focus(function(){
		$(this).parent().css("border-color", "#CCCCCC");
        $(this).parent().css("box-shadow", "0 0 3px rgba(19,105,192,.5)");
        $(this).parent().css("-moz-box-shadow", "0 0 3px rgba(241,39,232,.5)");
        $(this).parent().css("-webkit-box-shadow", "0 0 3px rgba(19,105,252,3)");
		});
		$(".faceDiv>img").click(function(){
		    $('.faceDiv').slideUp();
			ImgIputHandler.insertAtCursor($(".textarea textarea")[0],"["+$(this).attr("title")+"]");
		});
		//当点击表情按钮时切换表情包的显示和隐藏
        $('#face').click(function(){
        	$('.faceDiv').slideToggle(500);
        });
        /*提交*/
		$("#postbtn").click(function(){
			alert($(".textarea textarea").val());
		});
	},
	//该函数厉害了，可重复利用，它使你的表情插入在光标停留的位置
	//三种情况：1、文本框中有选中的文本；2、光标停留在文本中间或最前面（selectionStart从0开始记）；3、光标在最后
	insertAtCursor:function(myField, myValue) {
    if (document.selection) {  //如果当前网页中有选中的内容
        myField.focus(); //使输入框获得焦点
        //document.selection.createRange() 根据当前文字选择返回 TextRange 对象，或根据控件选择返回ControlRange 对象。
        sel = document.selection.createRange(); 
        sel.text = myValue; //把sel原来的文字内容替换myValue
        sel.select(); //依然选中它
    } else if (myField.selectionStart || myField.selectionStart == "0") {
        var startPos = myField.selectionStart; //用来获取或设置文本框中选定的文本起始点。
        var endPos = myField.selectionEnd;
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        if (restoreTop > 0) {
            myField.scrollTop = restoreTop;
        }
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
}
}