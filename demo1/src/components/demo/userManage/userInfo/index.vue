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
                <el-table-column prop="userWeixinName" label="微信昵称" align="center"></el-table-column>
                <el-table-column prop="userSex" label="性别" align="center"></el-table-column>
                <el-table-column prop="userPhone" label="手机号" align="center"></el-table-column>
                <!-- <el-table-column prop="userEnable" label="骑行状态" align="center"></el-table-column>
                <el-table-column prop="userMoney" label="账户余额" align="center"></el-table-column>
                <el-table-column prop="name" label="身份证号" align="center"></el-table-column>-->
                <el-table-column label="骑行状态" align="center">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            plain
                            v-if="tableData[scope.$index].userEnable"
                            @click="changetable(scope.row.userId,scope.row.userEnable,scope.$index)"
                        >有效</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            plain
                            v-else
                            @click="changetable(scope.row.userId,scope.row.userEnable,scope.$index)"
                        >无效</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" class="change">
                    <template scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="lookProof(scope.$index, scope.row)"
                        >查看详细信息</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 用户详情 -->
            <el-dialog
                :title="detailData.userWeixinName"
                :visible.sync="detailFlag"
                width="30%"
                center
            >
                <div class="details clearfix">
                    <div class="d_left">
                        <img :src="detailData.userImg" alt />
                    </div>
                    <div class="d_right">
                        <div class="general">
                            <span>地址：</span>
                            <span>{{ detailData.userRemarks }}</span>
                        </div>
                        <div class="general">
                            <span>余额：</span>
                            <span>{{ detailData.userMoney }}</span>
                        </div>
                        <div class="general">
                            <span>总额：</span>
                            <span>{{ detailData.userallMoney }}</span>
                        </div>
                    </div>
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="detailFlag = false">取 消</el-button>
                    <el-button type="primary" @click="submit">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <!-- 分页器 -->
        <div class="paging">
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="5"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="tableData.length"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/http.js';
export default {
    data() {
        return {
            adminToken: '',
            formInline: {
                user: ''
            },
            value1: '',
            tableData: [],
            currentPage4: 1, // 当前页
            detailFlag: false, // 详情弹框
            detailData: {} // 详细信息数据
        };
    },
    created() {
        // 获取adminToken
        this.adminToken = localStorage.getItem('adminToken');
        this.getUser();
    },
    methods: {
        // 获取用户信息
        getUser() {
            let params = {
                adminToken: this.adminToken
            };
            http.fetchPost('/seeuser', params)
                .then(res => {
                    if (res.data.status == 10000) {
                        let userData = res.data.data;
                        for (var i = 0; i < userData.length; i++) {
                            if (userData[i].userEnable == 1) {
                                userData[i].userEnable = true;
                            } else if (userData[i].userEnable == 0) {
                                userData[i].userEnable = false;
                            }

                            if (userData[i].userSex == 1) {
                                userData[i].userSex = '男';
                            } else if (userData[i].userSex == 2) {
                                userData[i].userSex = '女';
                            }
                        }
                        this.tableData = userData;
                    }
                })
                .catch(err => {
                    console.log('请求出错', err);
                });
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
        },
        // 骑行状态修改
        changetable(id, flag, index) {
            // this.tableData[index].userEnable = !flag;
            let num = '';
            // true代表有效,点击后应该为无效，无效为0
            if (flag == true) {
                num = 0;
            } else {
                num = 1;
            }
            console.log(this.adminToken);
            let params = {
                adminToken: this.adminToken,
                userId: id,
                userEnable: num
            };
            // 调用修改用户可用状态接口
            http.fetchPost('/updateuser', params)
                .then(res => {
                    // console.log(res)
                    this.getUser();
                })
                .catch(err => {
                    console.log('请求出错', err);
                });
        },
        // 查看详细信息按钮
        lookProof(index, data) {
            console.log(index);
            // console.log(data);
            console.log('查看详细信息按钮');
            this.detailFlag = true;
            this.detailData = data;
            console.log(this.detailData);
        },
        // 弹框确定按钮
        submit() {
            this.detailFlag = false;
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
.details {
    width: 500px;
    background: rgba(0, 0, 0, 0.05);
    padding: 20px;
    box-sizing: border-box;
}
.d_left {
    width: 30%;
    height: 150px;
    float: left;
}
.d_left img {
    width: 100%;
    height: 100%;
}
.d_right {
    width: 70%;
    height: 150px;
    float: left;
    padding-left: 20px;
    box-sizing: border-box;
}
.general {
    height: 50px;
    line-height: 50px;
}
.general span {
    font-size: 20px;
    color: black;
}
</style>
