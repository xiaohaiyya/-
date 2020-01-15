<template>
    <div class="container">
        <!-- 区域1 -->
        <section class="area1">
            <div class="area1_top">
                <h1 style="font-size: 20px;">今日数据</h1>
                <div class="clearfix">
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日注册用户量（人）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日订单数量（笔）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>正在进行订单（笔）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>未支付订单（笔）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>正常运营车辆（辆）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>故障车辆（量）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日充值金额（元）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日订单总收益（元）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日微信收益（元）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>今日余额收益（元）</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="area1_bottom">
                <h1 style="font-size: 20px;">平台数据</h1>
                <div class="clearfix">
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>总用户量（人）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>总运营车辆（辆）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>总收益金额（元）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>总订单量（笔）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>平台累计收益（元）</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 区域2 -->
        <section class="area2">
            <div class="pie">
                <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
                <div id="main1" style="float:left;width:32%;height: 300px"></div>
                <div id="main2" style="float:left;width:32%;height: 300px"></div>
                <div id="main3" style="float:left;width:32%;height: 300px"></div>
            </div>
        </section>
        <!-- 区域3 -->
        <section class="area3">
            <div class="pie">
                <div id="main4" style="float:left;width:48%;height: 300px"></div>
                <div id="main5" style="float:left;width:48%;height: 300px"></div>
            </div>
        </section>
    </div>
</template>

<script>
let echarts = require('echarts/lib/echarts');
// 引入饼状图组件
require('echarts/lib/chart/pie');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
    data() {
        return {
            pie1Data: ['车型1', '车型2', '车型3', '车型4', '车型5'],
            pie2Data: ['车型11', '车型22', '车型33', '车型44', '车型55'],
            pie3Data: ['车型111', '车型222', '车型333', '车型444', '车型555'],
            barData: {
                x: ['3月', '4月', '5月', '6月', '7月', '8月'],
                y: [20, 20, 22, 18, 22, 15]
            },
            lineData: {
                x: ['2019-1-1', '2019-2-1', '2019-3-1', '2019-4-1', '2019-5-1', '2019-6-1', '2019-7-1'],
                y1: [220, 232, 201, 234, 290, 230, 220],
                y2: [120, 200, 150, 80, 70, 110, 130]
            }
        };
    },
    created() {},
    mounted() {
        this.initData();
    },
    methods: {
        // 图表初始化数据
        initData() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main1'));
            var myChart2 = echarts.init(document.getElementById('main2'));
            var myChart3 = echarts.init(document.getElementById('main3'));
            var myChart4 = echarts.init(document.getElementById('main4'));
            var myChart5 = echarts.init(document.getElementById('main5'));
            // 绘制图表
            // 第一张饼
            var option = {
                title: {
                    text: '使用/空闲车辆比例', //主标题
                    x: 'center' //x轴方向对齐方式
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 'bottom',
                    data: this.pie1Data
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
                        data: [
                            { value: 335, name: this.pie1Data[0] },
                            { value: 310, name: this.pie1Data[1] },
                            { value: 234, name: this.pie1Data[2] },
                            { value: 135, name: this.pie1Data[3] },
                            { value: 1548, name: this.pie1Data[4] }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
            // 第二张饼
            var option2 = {
                title: {
                    text: '正常/故障车辆比列', //主标题
                    x: 'center' //x轴方向对齐方式
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 'bottom',
                    data: this.pie2Data
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
                        data: [
                            { value: 335, name: this.pie2Data[0] },
                            { value: 310, name: this.pie2Data[1] },
                            { value: 234, name: this.pie2Data[2] },
                            { value: 135, name: this.pie2Data[3] },
                            { value: 1548, name: this.pie2Data[4] }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart2.setOption(option2);
            // 第三张饼
            var option3 = {
                title: {
                    text: '订单支付/未支付比列', //主标题
                    x: 'center' //x轴方向对齐方式
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 'bottom',
                    data: this.pie3Data
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
                        data: [
                            { value: 335, name: this.pie3Data[0] },
                            { value: 310, name: this.pie3Data[1] },
                            { value: 234, name: this.pie3Data[2] },
                            { value: 135, name: this.pie3Data[3] },
                            { value: 1548, name: this.pie3Data[4] }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart3.setOption(option3);
            // 柱状图
            var option4 = {
                legend: {
                    //图例
                    data: ['提交次数'], //与series的name对应
                    left: '75%', //图例的位置，可以用像素，可以用百分比，也可以用center，right等
                    top: 12.5, //图例的位置
                    itemWidth: 10, //图例图标的宽
                    itemHeight: 10, //图例图标的高
                    textStyle: {
                        color: '#878787' //值的具体的颜色
                    }
                },
                xAxis: {
                    //x轴
                    type: 'category',
                    data: this.barData.x, //x轴的数据
                    splitLine: { show: false }, //去除网格分割线
                    // splitArea: {show: true},//保留网格区域
                    axisLine: {
                        //坐标线
                        lineStyle: {
                            type: 'solid',
                            color: '#d8d8d8', //轴线的颜色
                            width: '1' //坐标线的宽度
                        }
                    },
                    axisTick: {
                        //刻度
                        show: false //不显示刻度线
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#878787' //坐标值的具体的颜色
                        }
                    },
                    splitLine: {
                        show: false //去掉分割线
                    }
                },
                backgroundColor: '#fff', //图得背景色
                yAxis: {
                    name: '单位：次', //轴的名字，默认位置在y轴上方显示
                    max: 30, //最大刻度
                    type: 'value',
                    axisLine: {
                        //线
                        show: false
                    },
                    axisTick: {
                        //刻度
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#878787' //坐标值得具体的颜色
                        }
                    },
                    minInterval: 5, //标值的最小间隔
                    splitLine: {
                        lineStyle: {
                            color: ['#f6f6f6'] //分割线的颜色
                        }
                    }
                },
                series: [
                    {
                        name: '提交次数', //每组数据的名字，与图例对应
                        data: this.barData.y, //数据
                        type: 'bar', //柱状图
                        itemStyle: {
                            normal: {
                                color: '#FD6B71', //设置柱子颜色
                                label: {
                                    show: true, //柱子上显示值
                                    position: 'top', //值在柱子上方显示
                                    textStyle: {
                                        color: '#FD6B71' //值得颜色
                                    }
                                }
                            }
                        },
                        barWidth: 15 //设置柱子宽度，单位为px
                    }
                ]
            };
            myChart4.setOption(option4);
            // 折线图
            var option5 = {
                tooltip: {
                    //设置tip提示
                    trigger: 'axis'
                },

                legend: {
                    //设置区分（哪条线属于什么）
                    data: ['平均的', '所有的']
                },
                color: ['#8AE09F', '#FA6F53'], //设置区分（每条线是什么颜色，和 legend 一一对应）
                xAxis: {
                    //设置x轴
                    type: 'category',
                    boundaryGap: false, //坐标轴两边不留白
                    data: this.lineData.x,
                    name: 'DATE', //X轴 name
                    nameTextStyle: {
                        //坐标轴名称的文字样式
                        color: '#FA6F53',
                        fontSize: 16,
                        padding: [0, 0, 0, 20]
                    },
                    axisLine: {
                        //坐标轴轴线相关设置。
                        lineStyle: {
                            color: '#FA6F53'
                        }
                    }
                },
                yAxis: {
                    name: 'SALES VOLUME',
                    nameTextStyle: {
                        color: '#FA6F53',
                        fontSize: 16,
                        padding: [0, 0, 10, 0]
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FA6F53'
                        }
                    },
                    type: 'value'
                },
                series: [
                    {
                        name: '平均的',
                        data: this.lineData.y1,
                        type: 'line', // 类型为折线图
                        lineStyle: {
                            // 线条样式 => 必须使用normal属性
                            normal: {
                                color: '#8AE09F'
                            }
                        }
                    },
                    {
                        name: '所有的',
                        data: this.lineData.y2,
                        type: 'line',
                        lineStyle: {
                            normal: {
                                color: '#FA6F53'
                            }
                        }
                    }
                ]
            };
            myChart5.setOption(option5);
        }
    }
};
</script>


<style scoped>
@import url('../../assets/css/reset.css');
/* .area2, .area1_top, .area1_bottom{
    border-bottom: 1px dashed black !important;
} */
.area1,
.area2,
.area3 {
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
}
.area1_top,
.area1_bottom {
    margin-top: 10px; 
    width: 100%;
    padding: 10px;
}
.number {
    font-size: 24px;
    font-weight: 800;
}
.one {
    width: 20%;
    text-align: center;
    padding: 10px 0 15px 0;
    float: left;
}
.pie {
    padding-top: 20px;
}
</style>
