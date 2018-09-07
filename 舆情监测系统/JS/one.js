var myChart = echarts.init(document.getElementById('theoryHot'));
var myChart2 = echarts.init(document.getElementById('dataSources'));

var option = {
    tooltip: {},
    xAxis: {
        data: ["乡村振兴","经济新常态","全面深化改革","文化创新","水污染防治"]
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [5697, 5295, 4563, 3568, 3738]
    }]
};
myChart.setOption(option);


//app.title = '嵌套环形图';

option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    // },
    series: [
        // {
        //     name:'访问来源',
        //     type:'pie',
        //     selectedMode: 'single',
        //     radius: [0, '30%'],

        //     label: {
        //         normal: {
        //             position: 'inner'
        //         }
        //     },
        //     labelLine: {
        //         normal: {
        //             show: false
        //         }
        //     },
        //     data:[
        //         {value:335, name:'直达', selected:true},
        //         {value:679, name:'营销广告'},
        //         {value:1548, name:'搜索引擎'}
        //     ]
        // },
        {
            name:'访问来源',
            type:'pie',
            radius: [0, '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'解放日报'},
                {value:510, name:'新华日报'},
                {value:1048, name:'经济日报'},
                {value:1310, name:'人民日报'},
                {value:234, name:'河北日报'},
                {value:135, name:'重庆日报'},
                // {value:1048, name:'经济日报'},
                // {value:1310, name:'人民日报'},
                {value:251, name:'贵州日报'},
                {value:147, name:'浙江日报'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
myChart2.setOption(option2);