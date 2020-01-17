import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                // 用户管理
                {
                    path: '/userInfo',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/userManage/userInfo'),
                    meta: { title: '用户信息' }
                },
                {
                    path: '/orderRecord',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/userManage/orderRecord'),
                    meta: { title: '订单记录' }
                },
                // 车辆管理
                {
                    path: '/carsMsg',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/carsManage/carsMsg'),
                    meta: { title: '车辆信息' }
                },
                {
                    path: '/carsDistribute',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/carsManage/carsDistribute'),
                    meta: { title: '车辆分布' }
                },
                {
                    path: '/areaAnalyze',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/carsManage/areaAnalyze'),
                    meta: { title: '区域热力分析' }
                },
                {
                    path: '/questionRecord',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/carsManage/questionRecord'),
                    meta: { title: '车辆问题记录' }
                },
                // 维修管理
                {
                    path: '/repairPerson',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/repairManage/repairPerson'),
                    meta: { title: '维修人员' }
                },
                {
                    path: '/repairRecord',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/repairManage/repairRecord'),
                    meta: { title: '维修记录' }
                },
                // 权限管理
                {
                    path: '/adminMsg',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/jurisdictionManage/adminMsg'),
                    meta: { title: '管理员信息' }
                },
                // 系统管理（电子围栏）
                {
                    path: '/fenceList',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/electronicFence/fenceList'),
                    meta: { title: '围栏列表' },
                },
                {
                    path: '/fenceMap',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/electronicFence/fenceMap'),
                    meta: { title: '围栏地图' }
                },
                // 统计管理
                {
                    path: '/userStatistics',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/statisticsManage/userStatistics'),
                    meta: { title: '用户统计' }
                },
                {
                    path: '/orderStatistics',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/statisticsManage/orderStatistics'),
                    meta: { title: '订单统计' }
                },
                {
                    path: '/carsStatistics',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/statisticsManage/carsStatistics'),
                    meta: { title: '车辆统计' }
                },
                // 财务管理
                {
                    path: '/moneyWater',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/financeManage/moneyWater'),
                    meta: { title: '资金流水' }
                },
                {
                    path: '/moneyManage',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/demo/financeManage/moneyManage'),
                    meta: { title: '资金管理' }
                },
                // 权限页面
                {
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "register" */ '../components/page/register.vue'),
            meta: { title: '注册' },
        },
        {
            path: '/success',
            component: () => import(/* webpackChunkName: "register" */ '../components/page/success.vue'),
            meta: { title: '注册成功' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
