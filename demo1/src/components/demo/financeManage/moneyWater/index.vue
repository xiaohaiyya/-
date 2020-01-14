<template>
    <div class="container">
        <!-- 头部 -->
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                <el-form-item label="资金账户：">
                    <el-input v-model="formInline.user" placeholder></el-input>
                </el-form-item>
                <el-form-item label="操作类型">
                    <el-select v-model="formInline.region" placeholder="操作类型">
                        <el-option label="未完成" value="shanghai"></el-option>
                        <el-option label="已完成" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资金来源">
                    <el-select v-model="formInline.region" placeholder="资金来源">
                        <el-option label="未支付" value="shanghai"></el-option>
                        <el-option label="未支付" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="订单时间：">
                    <div class="block">
                        <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search" style="width: 120px;">搜索</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset" style="width: 120px;">重置</el-button>
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
                <el-table-column prop="date" label="资金账户" align="center"></el-table-column>
                <el-table-column prop="date" label="ID" align="center"></el-table-column>
                <el-table-column prop="date" label="变动金额" align="center"></el-table-column>
                <el-table-column prop="date" label="唯一凭证" align="center"></el-table-column>
                <el-table-column prop="date" label="操作类型" align="center"></el-table-column>
                <el-table-column prop="date" label="操作人" align="center"></el-table-column>
                <el-table-column prop="name" label="资金来源" align="center"></el-table-column>
                <el-table-column prop="address" label="操作订单" align="center"></el-table-column>
                <el-table-column prop="address" label="操作时间" align="center"></el-table-column>
            </el-table>
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
            formInline: {
                user: '',
                region: ''
            },
            value1: '',
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            currentPage4: 1 // 当前页
        };
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
</style>
