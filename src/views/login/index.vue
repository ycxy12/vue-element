<template>
    <div class="login-container">
        <div class="login-weaper">
            <div class="login-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="param.password">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'

export default {
    setup() {
        const router = useRouter();
        const param = reactive({
            username: "admin",
            password: "123123",
        });

        const rules = {
            username: [
                { required: true, message: "请输入用户名", trigger: "blur", },
            ],
            password: [
                { required: true, message: "请输入密码", trigger: "blur" },
            ],
        };
        const submitForm = () => {
            ElMessage.success("登录成功");
            router.push("/");
        };

        return {
            param,
            rules,
            submitForm
        };
    },
};
</script>

<style scoped>
.login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/login-bg.jpg');
    background-size: 100%;
}
.login-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.login-weaper {
    position: absolute;
    right: 10%;
    top: 55%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>