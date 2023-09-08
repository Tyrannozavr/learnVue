<script>
export default {
  name: "postItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<template>
  <div class="post">
    <strong>Название: </strong>{{post.name}}
    <strong>Описание: </strong>{{post.body}}
    <my-button>hello</my-button>
    <br>
    <my-input v-model="inputValue"/>
  </div>
</template>

<style scoped>
.post {
  margin: 10px;
  border: 1px solid teal;
  padding: 15px;

}

</style>