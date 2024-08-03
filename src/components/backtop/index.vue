<template>
  <div class="ele-backtop__wrapper">
    <el-backtop target=".ele-backtop__wrapper" :visibilityHeight="100"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
};
</script>

<style scoped>
.ele-backtop__wrapper {
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
}
</style>