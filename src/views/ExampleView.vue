<template>
  <canvas id="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted} from "vue";

const canvas = ref(null)
const ctx = ref(null)

onMounted(() => {
  canvas.value = document.getElementById('canvas')
  ctx.value = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth * 0.6
  canvas.value.height = window.innerHeight * 0.6
  let background = new Image()
  background.src = '/img/img.709694e9.png'
  background.onload = function () {
    ctx.value.drawImage(background,0,0)
  }
})
</script>
