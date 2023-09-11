<template>
  <h1>Страница с постами</h1>
  <div class="app_btns">
    <my-button
        @click="showDialog = true"
    >
      Создать пользователя
    </my-button>
    <my-select
        v-model="selectedSort"
        :options="options"
    />
  </div>

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
      isLoadingPosts: true,
      selectedSort: "",
      options: [
        {name: "first", value: "first"},
        {name: "second", value: "second"},
        {name: "third", value: "third"},
        {name: "four", value: "four"},
      ],
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
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
<style>
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
</style>
