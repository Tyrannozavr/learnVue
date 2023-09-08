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
  <div v-if="posts.length > 0">
    <ul>
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </ul>
  </div>
    <div v-else style="color: red">
    Список постов пуст
  </div>
</template>

<style scoped>

</style>