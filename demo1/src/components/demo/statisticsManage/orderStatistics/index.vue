<template>
    <div class="container">
        <!-- 区域1 -->
        <section class="area1">
            <!-- 运营数据 -->
            <div class="area1_top">
                <h1 style="font-size: 20px;">运营数据</h1>
                <div class="clearfix rowcenter">
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
                            <span>未支付订单（笔）</span>
                        </div>
                    </div>
                    <div class="one">
                        <div>
                            <span class="number">0</span>
                        </div>
                        <div>
                            <span>每单平均收入（元）</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 订单量统计 -->
            <div>
                <h1 style="font-size: 20px;">订单量统计</h1>
                <div class="footer">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                        <el-form-item label="选择日期：">
                            <div class="block">
                                <el-date-picker
                                    v-model="value1"
                                    type="datetimerange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                ></el-date-picker>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="search" style="width: 120px;">搜索</el-button>
                        </el-form-item>
                        <!-- 样式调整 -->
                        <el-form-item class="adjust">
                            <span>这里是空的呀,什么都没有</span>
                        </el-form-item>
                        <el-form-item class="adjust">
                            <span>这里是空的</span>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- 柱状图1 -->
                <div>
                    <div class="pie clearfix">
                        <div id="main1" style="float:left;width:60%;height: 300px"></div>
                    </div>
                </div>
            </div>
            <!-- 订单额统计 -->
            <div>
                <h1 style="font-size: 20px;">订单额统计</h1>
                <div class="footer">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                        <el-form-item label="选择日期：">
                            <div class="block">
                                <el-date-picker
                                    v-model="value1"
                                    type="datetimerange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                ></el-date-picker>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="search2" style="width: 120px;">搜索</el-button>
                        </el-form-item>
                        <!-- 样式调整 -->
                        <el-form-item class="adjust">
                            <span>这里是空的呀,什么都没有</span>
                        </el-form-item>
                        <el-form-item class="adjust">
                            <span>这里是空的</span>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- 柱状图2 -->
                <div>
                    <div class="pie">
                        <div id="main2" style="float:left;width:60%;height: 300px"></div>
                    </div>
                </div>
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
            formInline: {
                user: ''
            },
            value1: '',
            barData: {
                x: ['3月', '4月', '5月', '6月', '7月', '8月'],
                y: [20, 20, 22, 18, 22, 15]
            }
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        // 搜索按钮
        search() {
            console.log('搜索按钮');
        },
        // 搜索按钮2
        search2() {
            console.log('搜索按钮2');
        },
        // 图表初始化数据
        initData() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main1'));
            var myChart2 = echarts.init(document.getElementById('main2'));
            // 柱状图1
            var option = {
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
            myChart.setOption(option);
            // 柱状图2
            var option2 = {
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
            myChart2.setOption(option2);
        }
    }
};
</script>


<style scoped>
@import url('../../../../assets/css/reset.css');
.area1 {
    width: 100%;
    height: 920px;
    margin-bottom: 20px;
}
.area1_top {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
}
.number {
    font-size: 24px;
    font-weight: 800;
}
.one {
    text-align: center;
    padding: 10px 0 15px 0;
    float: left;
}
.common {
    width: 100%;
    height: 50px;
    background: rgb(10, 88, 119);
    text-align: right;
    font-size: 18px;
}
.common span {
    line-height: 50px;
    display: inline-block;
    cursor: pointer;
    margin: 0 20px;
    color: #fff;
}
.footer {
    margin-top: 20px;
}
.pie {
    padding-top: 20px;
}
</style>
