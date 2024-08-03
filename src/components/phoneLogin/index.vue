<template>
  <el-form :model="phoneForm" :rules="rules" ref="phoneLogin">
    <el-form-item prop="phone">
      <el-input v-model= "phoneForm.phone" placeholder="请输入手机号" style="width: 240px"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row  :gutter="18"> 
          <el-col :span="12">
              <el-input v-model= "phoneForm.code" placeholder="输入验证码"></el-input>
          </el-col>
          <el-col :span="8">
              <el-button
                type="primary" 
                @click="startGetCode"
                :disabled="btnDisabled"
              >{{ btnText }}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePhoneLogin">登录</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'PhoneLogin',
  props: {
    phoneForm: {
      type: Object,
      require: true
    },
    countDown: {
      type: Number,
      default: 60,
    }
  },
  data() {
    const checkPhone = (_, value, callback) => {
        if (!value) {
            callback(new Error('手机号不能为空'));
        } else if(!/^1[34578]\d{9}$/.test(value) || value.length !== 11) {
            callback(new Error('请输入正确的手机号'));
        } else {
            callback();
        }
    };
    return {
      rules: {
        phone: [{validator: checkPhone, trigger: 'blur'}],
        code: [{ required: true, message: '验证码不能为空', trigger: 'blur'}]
      },
      btnDisabled: false,
      btnText: '获取验证码',
      countDownTime: 0,
      countDownTimer: null,
    };
  },
  methods: {
    startGetCode() {
      // 输入校验
      this.$refs.phoneLogin.validateField('phone', validMsg => {
        if (validMsg) {
          this.$emit('getcode');
          this.btnDisabled = true;
          // 倒计时
          this.countDownTime = this.countDown;
          this.countDownTimer = setInterval(() => {
            this.countDownTime--;
            this.btnText = this.countDownTime + '秒后可重新发送';

            if(this.countDownTime <= 0) {
              clearInterval(this.countDownTimer);
              this.countDownTime = this.countDown;
              this.btnDisabled = false;
              this.btnText = '获取验证码';
            }
          }, 1000);
        }
      });
    },
    handlePhoneLogin() {
      this.$refs.phoneLogin.validate((valid) => {
        if (valid) {
          this.$emit('loginSuccess');
        } else {
          this.$emit('errHandler');
        }
      });
    }
  },
};
</script>