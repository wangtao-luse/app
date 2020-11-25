$(function(){
	/**logo二级菜单**/
	$("#toolbar-logo").mouseenter(function(){
		var logo = $("#csdn-toolbar .toolbar-logo .toolbar-subMenu");
		  logo.show();
	});
	$("#toolbar-logo").mouseleave(function(){
		var logo = $("#csdn-toolbar .toolbar-logo .toolbar-subMenu");
		  logo.hide();
	});
	 /**head菜单二级菜单**/
	$("#csdn-toolbar .toolbar-menus li").mouseenter(function(){
		var hasSubMenu = $(this).find("div").hasClass("toolbar-subMenu");
		if(hasSubMenu){
			 $(this).find("div.toolbar-subMenu").show();
		}
	});
	$("#csdn-toolbar .toolbar-menus li").mouseleave(function(){
		var hasSubMenu = $(this).find("div").hasClass("toolbar-subMenu");
		if(hasSubMenu){
			 $(this).find("div.toolbar-subMenu").hide();
		}
	});
	
	
	
	$("#toolbar-search-input").keyup(function(){
		$("#csdn-toolbar .toolbar-search .toolbar-search-drop-menu").show();
		$("#csdn-toolbar .toolbar-menus").css("width","242px");
		$("#csdn-toolbar .toolbar-menus li:eq(4)~li").hide();
	});
})
