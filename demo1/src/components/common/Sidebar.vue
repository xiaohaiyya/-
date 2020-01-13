<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                // 用户管理
                {
                    icon: 'el-icon-lx-people',
                    index: '1',
                    title: '用户管理',
                    subs: [
                        {
                            index: 'userInfo',
                            title: '用户信息'
                        },
                        {
                            index: 'orderRecord',
                            title: '订单记录'
                        },
                    ]
                },
                // 车辆管理
                {
                    icon: 'el-icon-lx-cart',
                    index: '2',
                    title: '车辆管理',
                    subs: [
                        {
                            index: 'carsMsg',
                            title: '车辆信息'
                        },
                        {
                            index: 'carsDistribute',
                            title: '车辆分布'
                        },
                        {
                            index: 'areaAnalyze',
                            title: '区域热力分析'
                        },
                        {
                            index: 'questionRecord',
                            title: '车辆问题记录'
                        }
                    ]
                },
                // 维修管理
                {
                    icon: 'el-icon-lx-roundcheck',
                    index: '3',
                    title: '维修管理',
                    subs: [
                        {
                            index: 'repairPerson',
                            title: '维修人员'
                        },
                        {
                            index: 'repairRecord',
                            title: '维修记录'
                        }
                    ]
                },
                // 权限管理
                {
                    icon: 'el-icon-lx-exit',
                    index: '4',
                    title: '权限管理',
                    subs:[
                        {
                            index: 'adminMsg',
                            title: '管理员信息'
                        }
                    ]
                },
                // 电子围栏
                {
                    icon: 'el-icon-lx-move',
                    index: '5',
                    title: '电子围栏',
                    subs: [
                        {
                            index: 'fenceList',
                            title: '围栏列表'
                        },
                        {
                            index: 'fenceMap',
                            title: '围栏地图'
                        }
                    ]
                },
                // 统计管理
                {
                    icon: 'el-icon-lx-add',
                    index: '6',
                    title: '统计管理',
                    subs:[
                        {
                            index: 'userStatistics',
                            title: '用户统计'
                        },
                        {
                            index: 'orderStatistics',
                            title: '订单统计'
                        },
                        {
                            index: 'carsStatistics',
                            title: '车辆统计'
                        }
                    ]
                },
                // 财务管理
                {
                    icon: 'el-icon-lx-recharge',
                    index: '7',
                    title: '财务管理',
                    subs:[
                        {
                            index: 'moneyWater',
                            title: '资金流水'
                        },
                        {
                            index: 'moneyManage',
                            title: '资金管理'
                        }
                    ]
                },
                // 错误处理
                {
                    icon: 'el-icon-lx-warn',
                    index: '9',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
