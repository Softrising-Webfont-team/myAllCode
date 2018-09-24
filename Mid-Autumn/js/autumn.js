var tabs = document.getElementsByClassName('tabs')[0];
var dllist = tabs.getElementsByTagName('dl');
var dtlist = tabs.getElementsByTagName('dt');
var ddlist = tabs.getElementsByTagName('dd');
var datalist = document.getElementById('datalist');
var spanlist = datalist.getElementsByTagName('span');
var page = document.getElementById('page');

var details = document.getElementsByClassName('details')[0];
var ddtail = details.getElementsByTagName('dd');

function bigchose(){
	for(let i = 0; i < dtlist.length; i++){
		dtlist[i].onclick = function(){
			if(dllist[i].style.height != '200px'){
				dllist[i].style.height = '200px';
			}else{
				dllist[i].style.height = '50px';
			}
		}
	}
}
bigchose()


var list = '';  

//创建右部的标题
function smallchose(){
	
	for(let i = 0; i < ddlist.length; i++){
		ddlist[i].onclick = function(){
			var stry = list.search(i);    //判断字符串里有没有这个数字
			if(stry == -1){ //如果没有这个数字，就添加到大标题里
				var para = document.createElement("span");
				var str1;
				
				if(datalist.innerHTML == ''){
					str1 = ddlist[i].innerHTML;
				}else{
					 str1 = ddlist[i].innerHTML + '&nbsp;<i class="iconfont" onclick="deletes()">&#xe768;</i>';
				}
				para.innerHTML = str1;
				datalist.appendChild(para);
				list += i;
			}
			var k = i + 1;
			page.innerHTML = '网页' + k;
			showtails(i);

			datachose()
			// console.log(spanlist.length)
			// console.log(list)

			deletes(list)
			//  console.log(list2)
			// list = list+ '';
			// console.log(list)
		}
	}
	
}
smallchose()

function datachose(){
	for(let l = 0; l < spanlist.length ; l++){
		spanlist[l].onclick = function(){
			var k1 = l + 1;
			page.innerHTML = '网页' + k1;
			showtails(l);
		}
	}
}
//删除标题
function deletes(list){
	var dels = document.querySelectorAll("i");
	var x2 = list;
	for(let i = 0 ; i < dels.length; i++){
		dels[i].onclick = function(){
			datalist.removeChild(spanlist[i+1]);
			// x2 = x2.split(i+1).join('');
			list = x2.split(i+1).join('');
			console.log(x2);
			// return x2;
		}
// x2 = dels[i].onclick()
	}
	// list = x2;
	// console.log(list)
	// return list
} 


function showtails(i){
	for(let j = 0; j < ddtail.length; j++){
		ddtail[j].style.display = 'none';
	}
	ddtail[i].style.display = 'block';
}

