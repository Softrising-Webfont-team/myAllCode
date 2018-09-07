var chose =  document.getElementById('selectOne');
var showtime =  document.getElementById('showtime');
var dd1 =  document.getElementById('yearTime');
var dd2 =  document.getElementById('yearTime').getElementsByTagName('dd');

// var btn = chose.getElementsByTagName('select');
chose.onclick = function(){
	if(dd1.style.height != '160px'){
		dd1.style.height = '160px';
	}else{
		dd1.style.height = '0';
	}
	// dd1.style.height = '160px';
} 
function choseyear(){
	for(let i = 0; i < dd2.length ; i++){
		dd2[i].onclick = function(){
			var str = dd2[i].innerHTML;
			showtime.value = str;
			dd1.style.height = '0';
		}
	}
}
choseyear()