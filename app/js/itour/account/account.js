$(function(){
/**
 * 校验email
 *  显示提示信息
 */
$("#form-email").focus(function(){
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
