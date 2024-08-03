<template>
  <div class="login-wrapper--content">
    <h2>普通登录组件</h2>
    <login
        :ruleForm="ruleForm"
        :rules="rules"
        @errHandler="errHandler"
        @submit="submit"
    ></login>
    <phone-login
      :phoneForm="phoneForm"
      :countDown="countDown"
      @getcode="getcode"
      @loginSuccess="loginSuccess"
      @errHandler="errHandlerPhone"
    ></phone-login>
  </div>

</template>

<script>
export default {
  name: 'accountLogin',
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ]
      },
      phoneForm: {
        phone: '',
        code: ''
      },
      countDown: 60
    }
  },
  methods: {
    errHandler() {
      this.$message.error({
        message: '登录失败',
        duration: 1000
      });
    },
    submit() {
      this.$message.success({
        message: '登录成功',
        duration: 1000
      });
    },
    getcode() {
      this.$message.info({
        message: '验证码发送成功，请注意查收',
        duration: 1000
      });
    },
    loginSuccess() {
      this.$message.success({
        message: '验证通过，登录成功',
        duration: 1000
      });
    },
    errHandlerPhone() {
      this.$message.error({
        message: '登录失败，请检查手机号或验证码是否正确',
        duration: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper--content {
  padding: 30px;
}
</style>