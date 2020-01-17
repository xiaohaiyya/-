<template>
    <div class="container">
        <!-- 头部 -->
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                <el-form-item label="用户名：">
                    <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="添加时间：">
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
                <el-form-item>
                    <el-button type="primary" @click="addPer" style="width: 120px;">新增维修人员</el-button>
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
                <el-table-column prop="date" label="用户名" align="center"></el-table-column>
                <el-table-column prop="date" label="登录名" align="center"></el-table-column>
                <el-table-column prop="date" label="状态" align="center"></el-table-column>
                <el-table-column prop="date" label="创建日期" align="center"></el-table-column>
                <el-table-column label="操作" align="center" class="change">
                  <template scope="scope">
                        <span class="c_button" @click="edit(scope.$index, scope.row)">编辑</span>
                        <span class="c_button" @click="del(scope.$index)">删除</span>
                    </template>
                </el-table-column>
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
        // 新增维修人员
        addPer() {
          console.log('新增维修人员按钮');
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
          console.log('编辑按钮');
        },
        // 删除按钮
        del(index) {
            console.log(index);
          console.log('删除按钮');
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
.c_button{
  border: none;
  background: transparent;
  margin: 8px;
  outline: none;
  cursor: pointer;
}
</style>
