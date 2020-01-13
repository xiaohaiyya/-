<template>
    <div class="container">
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
        <section class="area2">第二块区域</section>
        <section class="area3">第三块区域</section>
    </div>
</template>

<script>
export default {
    methods: {}
};
</script>


<style scoped>
@import url('../../assets/css/reset.css');
.container {
    padding: 10px;
}
.area1,
.area2,
.area3 {
    width: 100%;
    height: 350px;
    border: 1px solid black;
    margin-bottom: 20px;
}
.area1_top, .area1_bottom {
    width: 100%;
    padding: 10px;
}
.number{
    font-size: 24px;
    font-weight: 800;
}
.one {
    width: 20%;
    text-align: center;
    padding: 10px 0 15px 0;
    float: left;
}
</style>
