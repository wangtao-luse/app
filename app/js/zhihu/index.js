$(function(){
	$("#popover-profile-toggle").click(function(e){
		var isHide = $("#popover-profile-content").is(":hidden");
		if(isHide){
			$("#popover-profile-content").show();
		}
		$(document).one("click", function(){
        $("#popover-profile-content").hide();
      });
       e.stopPropagation();
	})
	$("#popover-searchBar-content .menu-item").hover(function(){
		$("#popover-searchBar-content .menu-item").find(".searchBar-historyDelete").hide();
		$(this).find(".searchBar-historyDelete").show();
	})
	
	$("#popover1-toggle").focus(function(){
		$(".app-searchBar .searchBar-askButton ").addClass("searchBarHide-askButton");
		$(".app-searchBar .input-wrapper").addClass("is-focus");
		$(".app-searchBar .searchBar-tool").addClass("searchBar-tool-focus");
		$("#popover-searchBar-content").show();
	});
	$("#popover1-toggle").blur(function(){
		$(".app-searchBar .searchBar-askButton ").removeClass("searchBarHide-askButton");
		$(".app-searchBar .input-wrapper").removeClass("is-focus");
		$(".app-searchBar .searchBar-tool").removeClass("searchBar-tool-focus");
		$("#popover-searchBar-content").hide();
	});
})
