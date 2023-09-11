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
<!--  <select  @change="changeOption">-->
<!--    <option disabled value="">Выберите из списка:</option>-->
<!--    <option-->
<!--      v-for="option in options"-->
<!--      :key="option.value"-->
<!--      :value="option.value"-->
<!--      >-->
<!--      {{option.name}}-->
<!--    </option>-->
<!--  </select>-->
  <div id="app">
    <select v-model="modelValue" @change=changeOption>
        <option value="tom">Tom</option>
        <option value="bob">Bob</option>
        <option value="sam">Sam</option>
    </select>
    <span>Выбрано: {{modelValue}} modelvalue</span>
</div>
</template>

<style scoped>

</style>