$(function(){
		$("#itour-banner .toolbar-subMenu-box").mouseenter(function(){
		$(this).find(".toolbar-subMenu").show();
	});
	$("#itour-banner .toolbar-subMenu-box").mouseleave(function(){
		$(this).find(".toolbar-subMenu").hide();
	});
	$("article .contentItem-action.button").mouseenter(function(){
		$(this).find(".isdefault").css("display","none");
		$(this).find(".isactive").css("display","block");
		$(this).css("color","#0077E6");
	});
	$("article .contentItem-action.button").mouseleave(function(){
		$(this).find(".isdefault").css("display","block");
		$(this).css("color","#646464");
		$(this).find(".isactive").css("display","none");
	});
})
