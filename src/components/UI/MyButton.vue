<script>
export default {
  name: "MyButton"
}
</script>

<template>
  <button class="my-btn">
    <slot />
  </button>
</template>

<style scoped>
.my-btn {
  border: 1px solid teal;
  background: none;
  padding: 10px 15px;
  color: teal;
}
</style>