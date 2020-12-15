$(function(){
		$("#itour-banner .toolbar-subMenu-box").mouseenter(function(){
		$(this).find(".toolbar-subMenu").show();
	});
	$("#itour-banner .toolbar-subMenu-box").mouseleave(function(){
		$(this).find(".toolbar-subMenu").hide();
	});
	$("article .contentItem-action.button,.commentItemV2-footer .button").mouseenter(function(){
		$(this).find(".isdefault").css("display","none");
		$(this).find(".isactive").css("display","block");
		$(this).css("color","#0077E6");
	});
	$("article .contentItem-action.button,.commentItemV2-footer .button").mouseleave(function(){
		$(this).find(".isdefault").css("display","block");
		$(this).css("color","#646464");
		$(this).find(".isactive").css("display","none");
	});
	
	$("#comment_content,#comment_contentNew").focus(function(){
		$(this).addClass("open");
	});
	$("#comment_content").blur(function(){
		$(this).removeClass("open");
	});
	$(".tool_bar__fold-btn").click(function(){
		var fold = $(this).hasClass("fold");
		if(fold){
			 $(this).removeClass("fold");	
			 $(this).text("回到顶部");
		}else{
		  $(this).addClass("fold");	
		  $(this).text("文章设置");
		}
		
	})
	
})
