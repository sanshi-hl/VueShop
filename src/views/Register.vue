<template>
  <div class="background">
    <el-card class="box-card customize-card">
      <div slot="header" class="clearfix" style="text-align: center;">
        <h1 style="display:inline;position:relative;left: 10px">注册账户</h1>
      </div>
      <div class="text item"  style="text-align: center">
        <el-form :model="register" status-icon :rules="rules" label-position="left"
        ref="register" label-width="100px" class="demo-register">
          <el-form-item label="帐号" prop="username">
            <el-input type="text" v-model="register.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="register.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="register.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="position:relative;right:40px">
            <el-button type="primary" @click="submitForm('register')">提交</el-button>
            <el-button @click="resetForm('register')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    const validateCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.register.password) {
        callback(new Error('两次输入密码不一致!，请重新输入'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.register.password.length < 6) {
          callback(new Error('密码不得少于6位'));
        }
        callback();
      }
    };
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.register.username.length < 4) {
          callback(new Error('账户不得少于4位'));
        }
        callback();
      }
    };
    return {
      register: {
        username: '',
        password: '',
        checkPass: '',
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { validator: validateCheck, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('账户注册成功！!');
          this.$router.push('login');
        } else {
          console.log('创建失败');
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
