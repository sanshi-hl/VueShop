<template>
  <div class="background">
    <el-card class="box-card customize-card">
      <div slot="header" class="clearfix" style="text-align: center;">
        <h1 style="display:inline;position:relative;left: 20px">登录商城</h1>
        <el-button style="float: right; padding: 18px 0"
        type="text"><router-link to="register">注册</router-link></el-button>
      </div>
      <div class="text item"  style="text-align: center">
        <el-form :model="login" status-icon :rules="rules" label-position="left"
        ref="login" label-width="50px" class="demo-login">
          <el-form-item label="帐号" prop="username">
            <el-input type="text" v-model="login.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="login.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="position:relative;right:18px">
            <el-button type="primary" @click="submitForm('login')">提交</el-button>
            <el-button @click="resetForm('login')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import swal from 'sweetalert';

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.login.password.length < 6) {
          callback(new Error('密码不得少于6位'));
        }
        callback();
      }
    };
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.login.username.length < 4) {
          callback(new Error('账户不得少于4位'));
        }
        callback();
      }
    };
    return {
      login: {
        username: 'hl1234',
        password: '123456',
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/');
          localStorage.setItem('user', this.login.username);
        } else {
          swal('提示', '验证失败', 'error');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.background{
  width: 100%;
  padding-top: 5%;
}
.customize-card{
  width: 30%;
  min-width: 300px;
  margin: 0 auto;
}
</style>
