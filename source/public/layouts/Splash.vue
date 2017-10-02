<template>
  <div class="container">
  <Hello />
  </div>
</template>

<script>
import Hello from 'Components/Hello.vue'

export default {
  name: 'Splash',
  components: {
    Hello,
  }
}
</script>

<style lang="less">
  .container {
    height: 100vh;
    width: 100vw;
  }
</style>
