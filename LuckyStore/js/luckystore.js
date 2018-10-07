$(document).ready(function(){
	var indexs = 0;
	setInterval(function(){
		if(indexs == 3){
			$("#slideBg").css("left","0px");
			indexs = 0;
		}else{
			$("#slideBg").animate({left:"-=626.67px"});
			indexs++;
		}
		$("#slideButton li").removeClass("on");
		$("#slideButton li").eq(indexs).addClass("on");
	},3000);
	var autochange = function(i){
		if(i ==1){
			$("#slideBg").animate({left:"+=626.67px"});
		}
		if(i == -1){
			$("#slideBg").animate({left:"-=626.67px"});
		}
	}
//点击小圆点.改变颜色
	$("#slideButton li").click(function(){
		$("#slideButton li").removeClass("on");
		$(this).addClass("on");
		indexs = $(".on").index();
		var left_1 = 0;
		for(let k = 0; k < indexs; k++){
			 left_1 -= 626.67;
		}
		$("#slideBg").css("left",left_1 + "px");
	})
//向右	
	$(".right").click(function(){
		if(indexs >= 2){
			indexs = 0;
			$("#slideBg").css("left","0px");
		}else{
			autochange(-1);
			indexs++;
		}
		$("#slideButton li").removeClass("on");
		$("#slideButton li").eq(indexs).addClass("on");
	})
//向左
	$(".left").click(function(){
		if(indexs == 0){
			indexs = 2;
			$("#slideBg").css("left","-1878.81px");
		}else{
			autochange(1);
			indexs--;
		}
		$("#slideButton li").removeClass("on");
		$("#slideButton li").eq(indexs).addClass("on");
	})

//下拉 40.19
	$("#men_1").click(function(){
		if($("#men_2").css("height")=="0px"){
			if($("#women_2").css("height")!="0px"){
				$("#women_2").css({"margin-left":"0px"});
			}
			$("#men_2").animate({height:"120.6px"});
		}else{
			$("#men_2").animate({height:"0"});
		}
		
	})
	$("#women_1").click(function(){
		if($("#women_2").css("height")=="0px"){
			if($("#men_2").css("height")=="0px"){
				$("#women_2").css({"margin-left":"88.01px"});
			}
			$("#women_2").animate({height:"120.6px"});
		}else{
			$("#women_2").animate({height:"0"});
		}
		
	})
});
