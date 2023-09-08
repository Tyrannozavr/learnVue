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
    <my-button>hello</my-button>
    <br>
  </div>
</template>

<style scoped>
.post {
  margin: 10px;
  border: 1px solid teal;
  padding: 15px;

}

</style>