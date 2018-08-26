var seachInput = document.getElementById('seachInput');
var searchs = document.getElementById('search');
var replaceInput = document.getElementById('replaceInput');
var replace = document.getElementById('replace');
var reset = document.getElementById('reset');
var usetext = document.getElementById('usetext');
var origin = usetext.innerHTML;

searchs.onclick = function(){
	if(seachInput.value==''){
		alert('请输入关键字！')
	}else{
		//改变字体颜色
		// document.querySelectorAll('#seachInput').style.color = 'red';
		// var str="wertyuiosdfghjkknhjkughbilakdhaqifghjcvbnm,rettyiuoiol.k,jmhn";
		// var n=str.split("fgh").join("_hello_");
		// document.getElementById("demo").innerHTML=n;
		var old = origin;
		var changecolor ='<span>' +seachInput.value + '</span>';
		var newone = old.split(seachInput.value).join(changecolor);
		usetext.innerHTML = newone;
	}
	
}
replace.onclick = function(){
	if(seachInput.value==''){
		alert('请输入关键字！')
	} else{
		//替换文本内容
	   var old = origin;
	   var changecolor ='<span>' + replaceInput.value + '</span>';
	   var newone = old.split(seachInput.value).join(changecolor);
	   usetext.innerHTML = newone;
	}
	
}
reset.onclick = function(){
	//获取一个元素的内容
	usetext.innerHTML = origin;
	seachInput.value = '';
	replaceInput.value = '';
}

