<template>
    <div>
        用户管理
        <ul>
            <li v-for="(item,index) in tableData" :key="index">第{{index+1}}条数据：{{item}}</li>
        </ul>
    </div>
</template>

<script>
import http from '@/http.js';
export default {
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            http.fetchGet('/test', '')
                .then(res => {
                    this.tableData = res.data.data.list;
                    this.pageTotal = res.pageTotal || 50;
                })
                .catch(err => {
                    console.log('请求出错', err);
                });
        },
    }
};
</script>


<style scoped>
</style>
