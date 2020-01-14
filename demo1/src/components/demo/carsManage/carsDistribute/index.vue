<template>
    <div>
        <div class="container">
            <div id="container"></div>
        </div>
    </div>
</template>


<script>
export default {
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
#container {
    width: 100%;
    height: 750px;
}
</style>
