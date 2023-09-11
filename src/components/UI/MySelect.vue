<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      user: ""
    }
  },
  methods: {
    changeOption (event) {
      this.$emit('update:modelValue', event.target.value)
      // console.log(event)
    }
  }
}
</script>

<template>
  <select  v-model="modelValue" @change="changeOption">
    <option value="">Выберите из списка:</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      >
      {{option.name}}
    </option>
</template>

<style scoped>

</style>