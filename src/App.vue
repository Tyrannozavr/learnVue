<template>
  <div>
    <posts-list :posts="posts"/>
  </div>
</template>

<script>
import postsList from "@/components/postsList.vue";
// import PostForm from "@/components/postForm.vue";
export default {
  components: {
    postsList,
    // PostForm
  },
  data () {
    return {
      posts: [
        {id: 1, name: 'JS', body: 'body is universal language'},
        {id: 2, name: 'Python', body: 'body is very simple language'},
        {id: 3, name: 'C#', body: 'body is very fast language'},
      ]
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
