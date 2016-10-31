var data={
        // title: { text: 'ECharts 入门示例' },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['乐高','巴多','街舞','民族舞','乐器','表演']
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
                name:'乐高',
                type:'bar',
                data:[132, 201, 334, 190, 330, 420]
            },
            {
                name:'巴多',
                type:'bar',
                stack: '居住途径',
                data:[232, 501, 134, 90, 230, 210]
            },
            {
                name:'街舞',
                type:'bar',
                stack: '获知途径',
                data:[282, 191, 234, 790, 330, 310]
            },
            {
                name:'民族舞',
                type:'bar',
                stack: '消费能力',
                data:[662, 201, 154, 190, 230, 410]
            },
            {
                name:'乐器',
                type:'bar',
                stack: '课程爱好',
                data:[18, 264, 326, 1679, 1600, 1570],
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
                name:'表演',
                type:'bar',
                barWidth : 5,
                stack: '性格',
                data:[532, 701, 734, 490, 1130, 1120]
            }
        ]
      }
module.exports=data;
