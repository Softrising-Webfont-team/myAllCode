$(document).ready(function(){
	var index_1 = 0;
	setInterval(function(){
		if(index_1==3){
			$("#slideBg").css("left","0px");
			index_1 = 0;
		}else{
			$("#slideBg").animate({left:"-=626.67px"});
			index_1++;
		}
		showButton(index_1)
	},3000);
	var buttonClick = function(i){
		if(i ==0){
			$("#slideBg").css("left","0px");
			index_1 = 0;
			showButton(0)
		}else if(i == 1){
			$("#slideBg").css("left","-626.67px");
			index_1 = 1;
			showButton(1)
		}else{
			$("#slideBg").css("left","-1253.34px");
			index_1 = 2;
			showButton(2)
		}
	}
	$("#slideButton li").eq(0).click(function(){
		buttonClick(0)
	})
	$("#slideButton li").eq(1).click(function(){
		buttonClick(1)
	})
	$("#slideButton li").eq(2).click(function(){
		buttonClick(2)
	})

	var showButton = function(k){
		$("#slideButton li").removeClass("on");
		$("#slideButton li").eq(k).addClass("on");
	}

});
