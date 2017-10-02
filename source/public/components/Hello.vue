<template>
  <div :style="style">
    hello
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    y: {
      default: '100px',
    },
    x: {
      default: '100px',
    },
    colour: {
      default: '#F5D023',
    }
  },
  computed: {
    style() {
      return {
        'position': 'absolute',
        'top': this.y,
        'left': this.x,
        'transform': 'translate(-50%, -50%)',
        'colour': this.colour,
      }
    }
  }
}
</script>

<style scoped>
</style>
