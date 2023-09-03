<script>
export default {
  name: "postForm",
  data () {
    return {
      post: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    createPost() {
      const post = {
        id: new Date(),
        name: this.post.name,
        description: this.post.description
      }
      this.$emit('create', post)
      this.post = {
        name: '',
        description: '',
      }
    }
  }
}
</script>

<template>
  <form class="app" @submit.prevent="createPost">
    <input class="input" v-model="post.name" type="text" placeholder="название" />
    <input class="input" type="text" v-model="post.description" placeholder="описание" />
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