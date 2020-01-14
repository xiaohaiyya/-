<template>
    <div class="container">
        <!-- 头部 -->
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                <el-form-item label="区域类型：">
                    <el-select v-model="formInline.region" placeholder="订单开始">
                        <el-option label="未完成" value="shanghai"></el-option>
                        <el-option label="已完成" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="订单时间：">
                    <el-date-picker
                        v-model="value1"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search" style="width: 120px;">搜索</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset" style="width: 120px;">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 地图展示 -->
         <div id="container"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                user: ''
            },
            value1: '',
        };
    },
    mounted() {
      this.getMap();
    },
    methods: {
      // 获取地图
        getMap() {
            var map = new BMap.Map('container');
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(); // 设置鼠标滑轮事件
            window.setTimeout(function() {
                map.panTo(new BMap.Point(116.409, 39.918));
            }, 2000);
        }
    }
};
</script>


<style scoped>
@import url('../../../../assets/css/reset.css');
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
.paging {
    margin-top: 20px;
    text-align: center;
}
#container {
  width: 100%;
  height: 700px;
}
</style>
