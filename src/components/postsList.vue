<script>
import postItem from "@/components/postItem.vue";
export default {
  name: "postsList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    postItem
  }
}
</script>

<template>
  <div>
    <ul>
      <post-item v-for="post in posts" :key="post.id" :post="post"/>
    </ul>
  </div>
</template>

<style scoped>

</style>