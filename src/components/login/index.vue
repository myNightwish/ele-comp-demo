<template>
  <div class="login-wrapper">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="login-form__wrapper">
        <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名" style="width: 240px"/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码" style="width: 240px"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 140px" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    }
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.ruleForm);
        } else {
          this.$emit('errHandler', this.ruleForm);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 1500px;

  .login-form__wrapper {
    width: 60%;
  }
}
</style>