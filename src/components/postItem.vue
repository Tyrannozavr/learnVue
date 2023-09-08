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
    }
  }
}
</script>

<template>
  <div class="post">
    <strong>Название: </strong>{{post.name}}
    <strong>Описание: </strong>{{post.body}}
    <div class="post_btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>

    <br>
  </div>
</template>

<style scoped>
.post {
  margin: 10px;
  border: 1px solid teal;
  padding: 15px;
}
.post_btns {
  display: flex;
}

</style>