<script>
export default {
  name: "postForm",
  data () {
    return {
      post: {
        name: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      const post = {
        id: new Date(),
        name: this.post.name,
        body: this.post.body
      }
      this.$emit('create', post)
      this.post = {
        name: '',
        body: '',
      }
    }
  }
}
</script>

<template>
  <strong>Создание поста</strong>
  <form @submit.prevent="createPost">
    <my-input v-model="post.name" placeholder="название" />
    <my-input v-model="post.body" placeholder="описание" />

    <input class="submit" type="submit"  />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 20px
}
.submit {
  border: 2px solid teal;
  padding: 10px;
  align-self: end;
  background: aliceblue;
  margin-top: 20px;
}
</style>