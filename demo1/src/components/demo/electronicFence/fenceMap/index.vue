<template>
    <div class="container">
        <!-- 头部 -->
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                <el-form-item label="区域名称：">
                    <el-select v-model="value" filterable placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态：">
                    <el-select v-model="formInline.region" placeholder="禁用">
                        <el-option label="启用" value="shanghai"></el-option>
                        <el-option label="禁用" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态：">
                    <el-select v-model="formInline.region" placeholder="禁用">
                        <el-option label="启用" value="shanghai"></el-option>
                        <el-option label="禁用" value="beijing"></el-option>
                    </el-select>
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
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            formInline: {
                user: '',
                region: ''
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
        },
        // 搜索按钮
        search() {
            console.log('搜索按钮');
        },
        // 重置按钮
        reset() {
            console.log('重置按钮');
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
