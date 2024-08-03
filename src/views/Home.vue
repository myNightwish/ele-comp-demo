<template>
  <div class="home">
    Scroll down to see the bottom-right button.
    <el-backtop :right="100" :bottom="100" />
    <el-button type="primary" @click="junmpUrl('/backtopone')">去backtop</el-button>
    <el-button type="primary" @click="junmpUrl('/backtoptwo')">去页面顶部</el-button>
    <el-button type="primary" @click="junmpUrl('/login')">去登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    junmpUrl (url) {
      this.$router.push(url)
    }
  }
}
</script>
