<template>
    <div class="container">
        <!-- 头部 -->
        <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline rowcenter">
                <el-form-item label="用户姓名：">
                    <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input v-model="formInline.user" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="注册时间：">
                    <div class="block">
                        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
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
                <el-table-column prop="userId" label="用户ID" align="center"></el-table-column>
                <el-table-column prop="userWeixinName" label="真实姓名" align="center"></el-table-column>
                <el-table-column prop="userSex" label="性别" align="center"></el-table-column>
                <el-table-column prop="userPhone" label="手机号" align="center"></el-table-column>
                <!-- <el-table-column prop="userEnable" label="骑行状态" align="center"></el-table-column>
                <el-table-column prop="userMoney" label="账户余额" align="center"></el-table-column>
                <el-table-column prop="name" label="身份证号" align="center"></el-table-column> -->
                <el-table-column prop="created_at" label="注册时间" align="center"></el-table-column>
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
import http from '@/http.js'
export default {
    data() {
        return {
            adminToken: '',
            formInline: {
                user: ''
            },
            value1: '',
            tableData: [],
            currentPage4: 1 // 当前页
        };
    },
    created() {
        // 获取adminToken
        this.adminToken = localStorage.getItem('adminToken');
        this.getUser();
    },
    methods: {
        // 获取用户信息
        getUser(){
            let params = {
                adminToken: this.adminToken
            }
            http.fetchPost('/seeuser', params).then(res =>{
                if(res.data.status == 10000){
                    let userData = res.data.data;
                    for(var i=0; i<userData.length;i++){
                        if(userData[i].userEnable == 1){
                            userData[i].userEnable = '有效';
                        }else if(userData[i].userEnable == 0){
                            userData[i].userEnable = '无效';
                        };
                        
                        if(userData[i].userSex == 1){
                            userData[i].userSex = '男';
                        }else if(userData[i].userSex == 2){
                            userData[i].userSex = '女';
                        }
                    };
                    this.tableData = userData;
                    console.log(this.tableData);
                }
            }).catch(err =>{
                console.log('请求出错', err);
            })
        },
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
.paging{
    margin-top: 20px;
    text-align: center;
}
</style>
