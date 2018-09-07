var wordList = document.getElementById('wordList');
var pageChose = document.getElementById('pageChose');
var thinkings = document.getElementById('thinkings');
var reportMaking = document.getElementById('reportMaking');
var wordForm = document.getElementById('wordForm');
var wordPoint = wordForm.getElementsByTagName('td');

var choseConty = document.getElementById('choseConty');
var contyOption = document.getElementById('contyOption');
var myChart = echarts.init(document.getElementById('barChart'));

var wordListTwo = wordList.getElementsByTagName('li');
var pageChoseTwo = pageChose.getElementsByTagName('li');

var datalist = [[12,23,454,76,756,45,32,23],[34,46,34,8,6,78,97]];
var datass = [0,1,2,3,4,5,6];

function wordst(){
	for(let i = 0 ; i < wordListTwo.length ; i++){
		wordListTwo[i].onclick = function(){
			for(var j = 0; j < wordListTwo.length; j++){
				wordListTwo[j].style.background = '#ffffff';
			}
			wordListTwo[i].style.background = '#e9b3b3';
			thinkings.value = wordListTwo[i].innerHTML;
            for(let w = 0; w < datass.length; w++){
                datass.splice(w,1,datalist[i][w]);
            }
		}
	}
}
wordst()

// function page(){
// 	var len2 = pageChoseTwo.length;
// 	if(pageChoseTwo[1]>'1'){
// 		pageChoseTwo[0].onclick = pagemove(-1,len2);
// 	}
// 	pageChoseTwo[len2-1].onclick = pagemove(1,len2);
// 	for(let i2 = 1 ; i2 < len2-1 ; i2++){
		
// 		pageChoseTwo.onclick[i2] = function(){

// 		}
// 	}
// }
// page()

// function pagemove(x,y){
// 	for(let k = 1; k < y-1 ; k++){
// 		var n1 = parseInt(pageChoseTwo[k].innerHTML) + x ;
// 		pageChoseTwo[k].innerHTML = n1 + '';
// 	}
// }

choseConty.onclick = function(){
	if(contyOption.style.height != '210px'){
		contyOption.style.height = '210px';
	}else{
		contyOption.style.height = '0'
	}
}




var option = {
    tooltip: {},
     visualMap: {
        max: 5000,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis: {
        data: ["渝中区","江北区","渝北区","涪陵区","合川区","沙坪坝区","武隆区"]
    },
    yAxis: {},
    series: [{
        type: 'bar',
       // data: [5697, 5295, 4563,5295, 4563, 3568, 3738]
       data: datass
    }]
};
myChart.setOption(option);

// console.log(option['series'][0]['data'][3])

reportMaking.onclick = function(){
 for(let s = 0 ; s < wordPoint.length; s++){ 
 	wordPoint[s].innerHTML = option['xAxis'].data[s]+option['series'][0]['data'][s];
 }
}