<template>
  <my-button @click="showDialog = true">Создать пользователя</my-button>
    <my-dialog v-model:show="showDialog" ><post-form @create="createPost"/></my-dialog>
    <posts-list v-if="!isLoadingPosts" :posts="posts" @remove="removePost"/>
    <div v-else>Идет загрузка...</div>
</template>

<script>
import postsList from "@/components/postsList.vue";
import PostForm from "@/components/postForm.vue";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {PostForm, postsList},
    data () {
    return {
      posts: [],
      showDialog: false,
      isLoadingPosts: true
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async getPosts() {

      try {
      setTimeout( async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
        this.isLoadingPosts = false
      }, 1000)

      } catch (e) {
        alert(e)
      }
      // this.posts = response.data
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
