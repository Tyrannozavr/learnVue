<template>
    <my-dialog v-model:show="showDialog" ><post-form @create="createPost"/></my-dialog>
    <posts-list :posts="posts" @remove="removePost"/>
</template>

<script>

import postsList from "@/components/postsList.vue";
import PostForm from "@/components/postForm.vue";

export default {
  name: 'HomeView',
  components: {PostForm, postsList},
    data () {
    return {
      posts: [
        {id: 1, name: 'JS', body: 'is universal language'},
        {id: 2, name: 'Python', body: 'is very simple language'},
        {id: 3, name: 'C#', body: 'is very fast language'},
      ],
      showDialog: true
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>
