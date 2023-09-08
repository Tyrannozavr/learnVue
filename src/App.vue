<template>
  <div>
    <post-form @create="createPost"/>
    <posts-list :posts="posts"/>
    test
    <my-input />
  </div>
</template>

<script>
import postsList from "@/components/postsList.vue";
import PostForm from "@/components/postForm.vue";
export default {
  components: {
    postsList,
    PostForm
  },
  data () {
    return {
      posts: [
        {id: 1, name: 'JS', body: 'is universal language'},
        {id: 2, name: 'Python', body: 'is very simple language'},
        {id: 3, name: 'C#', body: 'is very fast language'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
