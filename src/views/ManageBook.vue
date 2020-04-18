<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="id" label="编号" width="140">
            </el-table-column>
            <el-table-column prop="name" label="书名" width="120">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="140">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="edit(scope.row)">修改</el-button>
                    <el-button type="primary" size="mini" @click="deleteById(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="change">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteById(row){
                axios.delete("http://localhost:8080/deleteBook/"+(row.id)).then(function (resp) {
                    if(resp.data==="success"){
                        //_this.$router.push("/ManageBook")
                        //页面刷新
                        window.location.reload();
                    }
                })
            },
            edit(row) {
                //传递多个参数时需要用{}，仅仅传递路径path时，push('/updatebook')即可
                this.$router.push({
                    path:'UpdateBook',
                    query:{
                        id:row.id
                    }
                })
            }
            ,
            change(currentPage) {
                const _this = this
                axios.get("http://localhost:8080/getAll/" + currentPage + "/3").then(function (resp) {
                    console.log(resp)
                    _this.tableData = resp.data.list
                    _this.pageSize = resp.data.pageSize
                    _this.total = resp.data.total
                })
            }
        },
        data() {
            return {
                pageSize: '',
                total: '',
                tableData: []
            }
        },
        created() {
            const _this = this
            axios.get("http://localhost:8080/getAll/1/5").then(function (resp) {
                console.log(resp)
                _this.tableData = resp.data.list
                _this.pageSize = resp.data.pageSize
                _this.total = resp.data.total

            })
        }
    }
</script>
