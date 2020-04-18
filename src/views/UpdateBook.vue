<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="编号" readonly>
            <el-input v-model="ruleForm.id" readonly></el-input>
        </el-form-item>

        <el-form-item label="书名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        {required: true, message: '图书名不能为空', trigger: 'blur'},

                    ],
                    author: [
                        {required: true, message: '作者不能为空', trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //console.log(_this.ruleForm)
                        axios.put("http://localhost:8080/updateBook/",this.ruleForm).then(function (resp) {
                            if(resp.data==="success"){
                                _this.$router.push("/ManageBook")
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created() {
            const _this=this
            //传递参数用$route，跳转用$router
            axios.get("http://localhost:8080/getBookById/"+(this.$route.query.id)).then(function (resp) {
                _this.ruleForm=resp.data
            })
        }
    }
</script>

