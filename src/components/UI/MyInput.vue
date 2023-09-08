<script>
export default {
  name: "my-input",
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<template>
  <input class="my-input" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>

<style scoped>
.my-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>