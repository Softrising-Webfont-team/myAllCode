var dom = document.getElementById("picture3D");
var myChart = echarts.init(dom);
var app = {};
option = null;

var hours = [ ];
var days = [ ];

var data = [[0,0,8033,'新时代'],[0,1,5039,'中国特色社会主义'],[0,2,4676,'新时代中国特色社会主义.'],[1,2,3315,'马克思主义'],[1,3,3211,'改革开放']  ,[2,0,2957,'民主'],[0,3,4676,'现代化'] ,[1,0,4083,'习近平新时代中国特色社...'],[1,1,3568,'中华民族伟大复兴'],[2,1,2944,'小康社会'],[2,2,2846,'全面建成小康社会'],[2,3,2111,'党的领导']  ,[3,0,2051,'全面从严治党'],[3,1,1744,'全面深化改革'],[3,2,1668,'社会主要矛盾'],[3,3,879,'中国方案']];
option = {                                                                                                                                                                                                                                 
    tooltip: { trigger: 'item',
        formatter: "{b} <br/>热度: {c}"},
    visualMap: {
        max: 7000,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'category',
        data: hours
    },
    yAxis3D: {
        type: 'category',
        data: days
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 80,
        boxDepth: 80,
        viewControl: {
           
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                name: item[3],
                value:  [ item[0], item[1] , item[2]]
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var changone = document.getElementsByClassName('domspeading');
var tablevalues = document.getElementById('hotDgree');
var trnumbers = tablevalues.getElementsByTagName('tr');
function hotword(){
    for(let i = 0; i < trnumbers.length ; i++){
        trnumbers[i].onclick = function(){
            var values = tablevalues.rows[i].cells[0].innerHTML;
            changone[0].innerHTML = values;
            changone[1].innerHTML = values;
        }
    }
}
hotword()