<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="dialog" v-if="show" @click="$emit('update:show', false)">
    <div class="dialog__content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 20px 15px;
}
</style>