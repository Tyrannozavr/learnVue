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
  <form class="app" @submit.prevent="createPost">
    <my-input v-model="post.name" placeholder="название" />
    <my-input v-model="post.body" placeholder="описание" />

    <input class="submit" type="submit"  />
  </form>
</template>

<style scoped>
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.submit {
  border: 2px solid teal;
  padding: 10px;
  align-self: end;
  background: aliceblue;
  margin-top: 20px;
}
</style>