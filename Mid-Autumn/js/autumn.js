function addEvent(dom,event,fun){
	return dom.addEventListener(event,fun);
}
//确定序列数
function getIndex(indexvalue,arr){
	for(let i = 0; i < arr.length; i++){
		if(indexvalue = arr[i]){
			return i;
		}
	}
}

var tabs = document.getElementsByClassName('tabs')[0];
var dllist = tabs.getElementsByTagName('dl');
var dtlist = tabs.getElementsByTagName('dt');
var ddlist = tabs.getElementsByTagName('dd');
var datalist = document.getElementById('datalist');
var spanlist = datalist.getElementsByTagName('span');
var ilist = datalist.getElementsByTagName('i');
var page = document.getElementById('page');
var details = document.getElementsByClassName('details')[0];
var ddtail = details.getElementsByTagName('dd');
function bigchose(){
	for(let i = 0; i < dtlist.length; i++){
		addEvent(dtlist[i],'click',function(e){
			if(dllist[i].style.height != '200px'){
				dllist[i].style.height = '200px';
			}else{
				dllist[i].style.height = '50px';
			}
			e.stopPropagation();
		})
	}
}
bigchose()

function showNav(){
	for(let i = 0; i < ddlist.length; i++){
		addEvent(ddlist[i],'click',function(e){
			if(ddtail[i].getAttribute('isAdd') =='false'){
				creatHead(ddlist[i].innerText,i);
				ddtail[i].setAttribute('isAdd','true');
			}
			show(i);
			showHead()

			deletes()

		e.stopPropagation();
		})
	}
}
showNav()

function deletes(){
	for(let i = 0; i < ilist.length; i++){
		addEvent(ilist[i],'click',function(e){
			ddtail[i+1].setAttribute('isAdd','false');
			ilist[i].style.display = 'none';
			spanlist[i+1].style.display = 'none';
		})
	}
}

function showHead(){
	for(let i = 0; i < spanlist.length; i++){
		addEvent(spanlist[i],'click',function(e){
			var showhaedIndex = spanlist[i].getAttribute('index')
			show(showhaedIndex);
		e.stopPropagation();
		})
	}
}

function show(i){
	var k = parseInt(i) + 1;
	page.innerHTML = '网页' + k;
	for(let j = 0; j < ddtail.length; j++){
		ddtail[j].style.display = 'none';
	}
	ddtail[i].style.display = 'block';
}

function creatHead(text,indexPage){
	var newSpan = document.createElement("span");
	var newIcon = document.createElement("i");
	newIcon.innerHTML = '&nbsp;&#xe768;'
	newIcon.className = 'iconfont';
	newSpan.innerText = text;
	newSpan.setAttribute('index',indexPage);
	if(datalist.innerHTML !=''){
		datalist.appendChild(newSpan);
		datalist.appendChild(newIcon);
	}else{
		datalist.appendChild(newSpan);
	}
}

