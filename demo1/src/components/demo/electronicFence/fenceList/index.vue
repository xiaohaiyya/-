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
                <el-form-item>
                    <el-button type="primary" @click="addNew" style="width: 120px;">新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 筛选  打印  导出 -->
        <div class="common">
            <span @click="filter">筛选</span>
            <span @click="putOut">打印</span>
            <span @click="comeOut">导出</span>
        </div>
        <!-- 表格 -->
        <div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="ID" align="center"></el-table-column>
                <el-table-column prop="date" label="时间" align="center"></el-table-column>
                <el-table-column prop="date" label="名称" align="center"></el-table-column>
                <el-table-column prop="date" label="地址" align="center"></el-table-column>
                <el-table-column prop="date" label="车容比" align="center"></el-table-column>
                <el-table-column prop="date" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center" class="change">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="edit(scope.$index, scope.$row)"
                        >编辑</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="del(scope.$index)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 编辑弹框 -->
            <el-dialog title="编辑" :visible.sync="exitFlag" :fullscreen="true">
                <h1>我的下标是{{testIndex}}</h1>
                <el-form :inline="true" :model="tkForm" class="demo-form-inline rowcenter">
                    <el-form-item label="名称：">
                        <el-input v-model="tkForm.fenceExplain" placeholder="请输入名称"></el-input>
                    </el-form-item>
                    <el-form-item label="可容纳：">
                        <el-input v-model="tkForm.carNumber" placeholder="请输入数量"></el-input>
                    </el-form-item>
                    <el-form-item label="区域名称：">
                        <el-input v-model="tkForm.fenceName" placeholder="请输入区域名称"></el-input>
                    </el-form-item>
                    <el-form-item label="状态：">
                        <el-select v-model="tkForm.fencestatus" placeholder="禁用">
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="禁用" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期时间：">
                        <div class="block">
                            <el-date-picker v-model="tkForm.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
                        </div>
                    </el-form-item>
                </el-form>
                <!-- 地图 -->
                <div id="container">
                    <div id="allmap" style="overflow:hidden;zoom:1;position:relative;">
                        <div
                            id="map"
                            style="height:100%;-webkit-transition: all 0.5s ease-in-out;transition: all 0.5s ease-in-out;"
                        ></div>
                    </div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="exitFlag = false">取 消</el-button>
                    <el-button type="primary" @click="submit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- 分页器 -->
        <div class="paging">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                ></el-pagination>
            </div>
        </div>
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
            tableData: [
                {
                    date: '2016',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    date: '2016',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    date: '2016',
                    name: '王小虎',
                    address: '上海市普陀区'
                },
                {
                    date: '2016',
                    name: '王小虎',
                    address: '上海市普陀区'
                }
            ],
            currentPage4: 1, // 当前页
            // 弹框
            exitFlag: false,
            formLabelWidth: '120px',
            // 测试数据
            testIndex: '',
            tkForm: {
                fenceExplain: '',
                fenceName: '',
                carNumber: '',
                fencestatus: '',
                time: ''
            },
            // 区域坐标
            fenceRange: '1s'
        };
    },
    beforeUpdate() {
        // 编辑地图，延迟500毫秒
        setTimeout(() => {
            this.getMap();
        }, 500);
    },
    mounted(){
       
    },
    methods: {
        // 搜索按钮事件
        search() {
            console.log('搜索按钮');
        },
        // 重置按钮事件
        reset() {
            console.log('重置按钮');
        },
        // 新增按钮事件
        addNew() {
            console.log('新增按钮');
        },
        // 筛选按钮事件
        filter() {
            console.log('筛选按钮');
        },
        // 打印按钮事件
        putOut() {
            console.log('打印按钮');
        },
        // 导出按钮事件
        comeOut() {
            console.log('导出按钮');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 编辑按钮
        edit(index, data) {
            console.log(index);
            console.log(data);
            this.testIndex = index;
            console.log('编辑按钮');
            // this.getMap();
            this.exitFlag = true;
        },
        // 删除按钮
        del(index) {
            console.log(index);
            console.log('删除按钮');
        },
        // 调用百度API
        getMap() {
            // 百度地图API功能
            console.log(333);
            var map = new BMap.Map('map');
            var poi = new BMap.Point(116.307852, 40.057031);
            map.centerAndZoom(poi, 16);
            map.enableScrollWheelZoom();

            var overlays = [];
            //回调获得覆盖物信息
            var overlaycomplete = function(e) {
                //将多边形保存到数组
                overlays.push(e.overlay);
                console.log('-----------------');
                // console.log(overlays[0].bf)
                // 将数组转为字符串发送
                // console.log(JSON.stringify(overlays[0].bf[3]));
                this.fenceRange = JSON.stringify(overlays[0].bf[3]);
                console.log(this.fenceRange);
                console.log('-----------------');
                //开启编辑模式
                e.overlay.enableEditing();
                //添加事件监听函数
                //e.overlay.addEventListener("lineupdate",function(e){
                //});
                //创建右键菜单
                var markerMenu = new BMap.ContextMenu();
                markerMenu.addItem(new BMap.MenuItem('删除', removeMarker.bind(e.overlay)));
                e.overlay.addContextMenu(markerMenu);
            };
            //保存地图
            function save() {
                var map = this.map;
                var overlays = this.overlays; //获取存放的多边形数组

                var path = overlays[0].getPath(); //获取第一个多边形
                for (var i = 0; i < path.length; i++) {
                    alert('坐标为：lng:' + path[i].lng + ' lat:' + path[i].lat);
                }
            }
            //设置多边形样式对象
            var styleOptions = {
                strokeColor: '#2E8B57', //边线颜色。
                fillColor: '#388E8E', //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 2, //边线的宽度，以像素为单位。
                strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
                fillOpacity: 0.3, //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            };
            //实例化鼠标绘制工具
            var drawingManager = new BMapLib.DrawingManager(map, {
                isOpen: false, //是否开启绘制模式
                enableDrawingTool: true, //是否显示工具栏
                drawingMode: BMAP_DRAWING_POLYGON, //绘制模式  多边形
                drawingToolOptions: {
                    anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                    offset: new BMap.Size(5, 5), //偏离值
                    drawingModes: [
                        BMAP_DRAWING_POLYGON //仅支持多边形
                    ]
                },
                polygonOptions: styleOptions //设置多边形的样式
            });
            //添加鼠标绘制工具监听事件，用于获取绘制结果
            drawingManager.addEventListener('overlaycomplete', overlaycomplete);

            function $(id) {
                return document.getElementById(id);
            }
            //清除所有覆盖物
            function clearAll() {
                for (var i = 0; i < overlays.length; i++) {
                    map.removeOverlay(overlays[i]);
                }
                overlays.length = 0;
                map.removeOverlay(this.myPolygon);
                this.myPolygon = '';
            }
            var myPolygon = '';
            var myOverlay = [
                new BMap.Point(116.256515, 39.995242),
                new BMap.Point(116.502579, 39.951893),
                new BMap.Point(116.256515, 39.866882)
            ];
            //删除多边形
            var removeMarker = function(e, ee, marker) {
                map.removeOverlay(marker);
                for (var i = 0; i < overlays.length; i++) {
                    if (overlays[i] == marker) {
                        overlays.splice(i, 1);
                    }
                }
            };
            //加载多边形
            function loadMyOverlay() {
                var map = this.map;
                //清空现在有的多边形
                clearAll();
                map.centerAndZoom(this.poi, 11);
                var myPolygon = new BMap.Polygon(this.myOverlay, this.styleOptions);
                this.myPolygon = myPolygon;

                try {
                    myPolygon.enableEditing();
                } catch (e) {}
                //myPolygon.addEventListener("lineupdate",function(e){
                //});
                map.addOverlay(myPolygon);
                //将加载的多边形保存到数组里面
                overlays.push(myPolygon);
                //创建右键菜单
                var markerMenu = new BMap.ContextMenu();
                markerMenu.addItem(new BMap.MenuItem('删除', removeMarker.bind(myPolygon)));
                myPolygon.addContextMenu(markerMenu);
            }
        },
        // 弹窗提交事件
        submit() {
            console.log('提交');
            console.log(this.fenceRange);
            console.log('==============')
            console.log(this.tkForm);
            console.log(this.fenceRange);
            this.exitFlag = false;
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
.c_button {
    border: none;
    background: transparent;
    margin: 8px;
    outline: none;
    cursor: pointer;
}
#container {
    width: 100%;
    height: 700px;
}
#allmap {
    height: 100%;
    overflow: hidden;
}
</style>
