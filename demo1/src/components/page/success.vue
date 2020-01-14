<template>
    <div>
        注册成功页面
        <el-button @click="gotoLogin">返回首页</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        gotoLogin() {
            this.$router.push('/login');
        }
    }
};
</script>


<style scoped>
</style>
