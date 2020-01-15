<template>
    <div class="container">
        <div class="box">
            <div class="box_child">
                <div>你的账号: 注册成功</div>
                <el-button @click="gotoLogin" type="primary">返回首页</el-button>
            </div>    
        </div>
        
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
.box {
    width: 100%;
    height: 1000px;
}
.box_child {
    width: 300px;
    height: 300px;
    margin: 400px auto;
    text-align: center;
}
</style>
