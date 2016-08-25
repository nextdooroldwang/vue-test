var data={
        // title: { text: 'ECharts 入门示例' },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['5000以下','5000元','10000元','10000以上','单科','不在乎钱']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['一月','二月','三月','四月','五月','六月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'5000以下',
                type:'bar',
                data:[332, 301, 334, 390, 330, 320]
            },
            {
                name:'5000元',
                type:'bar',
                stack: '居住途径',
                data:[132, 101, 134, 90, 230, 210]
            },
            {
                name:'10000元',
                type:'bar',
                stack: '获知途径',
                data:[182, 191, 234, 290, 330, 310]
            },
            {
                name:'10000以上',
                type:'bar',
                stack: '消费能力',
                data:[232, 201, 154, 190, 330, 410]
            },
            {
                name:'10000以上',
                type:'bar',
                stack: '课程爱好',
                data:[228, 334, 126, 679, 400, 270],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'不在乎钱',
                type:'bar',
                barWidth : 5,
                stack: '性格',
                data:[732, 701, 734, 1090, 1130, 1120]
            }
        ]
      }
module.exports=data;
