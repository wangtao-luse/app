$(function(){
/**
 * 校验email
 *  显示提示信息
 */
$("#form-email").focus(function(){
	showDefault($(this));	
});
/**
 *  校验用户名
 *  显示提示信息
 */
$("#form-account").focus(function(){
	showDefault($(this));
});
/**
 * 鼠标聚焦时校验密码
 */
$("#form-pwd").focus(function(){
	showDefault($(this));
});
/**
 * 鼠标聚焦时校验密码
 */
$("#form-equalTopwd").focus(function(){
	showDefault($(this));
});
/**
 * 校验email
 * 校验通过显示成功图标
 * 校验失败提示错误信息
 */
$("#form-email").blur(function(){
	var email=$(this).val();	
	if(test_email(email)){//校验通过
		hideClose($(this));
		showsucess($(this));
		
	}else{//校验失败
		//显示错误信息		
		email?showError($(this),"form-email-error","格式错误"):"";
	}
	//清楚默认的提示信息
	clearTip($(this));
});	
/**
 * 鼠标释放时校验email
 */
$("#form-email").keyup(function(){
	var email = $(this).val();
	if(email){//不为空
		//显示email推荐
		showEmailSuggest(email);
			
		if(!test_email(email)){//校验失败
			//隐藏成功图标
			hideSucess($(this));
			//显示清除的图标
			showClose($(this));
			//显示错误信息	
			showError($(this),"form-email-error","格式错误")
		}else{//校验成功
			clearError($(this));
			showsucess($(this));
			hideClose($(this));
			$(".suggest-container.email-suggest").css("display","none");
		}
	}else{//为空
		$(".suggest-container.email-suggest").css("display","none");
		//隐藏清除的图标
		hideClose($(this));
		//显示默认的提示信息(需要先清楚错误信息)
		clearError($(this));
		showDefault($(this));
	}
});
function showEmailSuggest(email){
	//显示邮箱推荐邮箱
	$(".suggest-container.email-suggest").css("display","block");
	//获取后缀
	var arr = $(".suggest-container.email-suggest").find(".value");
	for (var i = 0; i < arr.length; i++) {
		//获取最后一次出现@的下标
		var start =$(arr[i]).text().lastIndexOf("@");
		//得到后缀
		 var  suffix =$(arr[i]).text().substring(start);
		 //清空推荐文本
		 //$(arr[i]).text("");
		 //添值
		 if(email.indexOf("@")==-1){
			 $(arr[i]).text(email.trim()+suffix); 
		 }
		
		
	}
	
}
$(".suggest-container.email-suggest li").click(function(){
	var v = $(this).text();
	$("#form-email").val(v);
	$(".suggest-container.email-suggest").css("display","none");
	$("#form-email").trigger("blur");
});
/**
 * 清除错误信息
 * @param $this
 * @returns
 */
function clearError($this){
	$this.parent().next().find("span").removeClass("error").attr("id","");
	$this.parent().next().find("span i").removeClass("i-error").addClass("i-def");
}
/**
 * 隐藏状态图标
 * @param $this
 * @returns
 */
function hideSucess($this){
	//1.添加成功的图标
	$this.parent().removeClass("form-item-valid");
}
/**
 * 显示清除图片
 * @param $this
 * @returns
 */
function showClose($this){
	$this.parent().find(".i-cancel").css("display","block");
}
/**
 * 用于文本框错误信息提示
 * @param $this 元素节点
 * @param id    错误信息父元素的id
 * @param errormsg 错误信息
 * @returns
 */
function showError($this,id,errormsg){
$this.parent().next().find("span").addClass("error").attr("id",id).html("<i class='i-error'></i>"+errormsg);
}
/**
 * 显示默认的提示信息
 * @param $this
 * @returns
 */
function showDefault($this){
	var df=$this.attr("default");
	var hasError = $this.parent().next().find("span").hasClass("error");
	if(!hasError){
		$this.parent().next().find("span").html(df);
	}
}
/**
 * 清楚默认的提示信息
 */
function clearTip($this){
	//清除默认的提示信息
	var hasdef = $this.parent().next().find("span i").hasClass("i-def");
	if(hasdef){
		$this.parent().next().find("span").html("");
	}
}
/**
 * 隐藏清除图片
 * @param $this
 * @returns
 */
function hideClose($this){
	$this.parent().find(".i-cancel").css("display","none");
}
/**
 * 校验成功后显示状态图标
 * @param $this
 * @returns
 */
function showsucess($this){
	//1.添加成功的图标
	$this.parent().addClass("form-item-valid");
	//2.移除错误信息提示
	$this.parent().next().find("span").html("").removeClass("error");
}
});
