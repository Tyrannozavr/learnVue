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
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>

<style scoped>

</style>