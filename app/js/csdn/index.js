$(function(){
	
	$("#csdn-toolbar .toolbar-subMenu-box").mouseenter(function(){
		$(this).find(".toolbar-subMenu").show();
	});
	$("#csdn-toolbar .toolbar-subMenu-box").mouseleave(function(){
		$(this).find(".toolbar-subMenu").hide();
	});
	//搜索框
	$("#toolbar-search-input").keyup(function(){
		$("#csdn-toolbar .toolbar-search .toolbar-search-drop-menu").show();
		$("#csdn-toolbar .toolbar-menus").css("width","242px");
		$("#csdn-toolbar .toolbar-menus li:eq(4)~li").hide();
	});
	
})
