<template>
  <canvas id="canvas"></canvas>
  <img id="image" src="@/assets/img/details.jpg" style="display: none">
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
  // background.src = '/img/img.709694e9.png'
  let pathToImage = document.getElementById('image').src
  // console.log(pathToImage)
  background.src = pathToImage

  background.onload = function () {
    ctx.value.drawImage(background,0,0)
  }
  ctx.value.fillStyle = "rgba(0, 0, 200, 0.5)"

  // ctx.value.fillRect(30, 30, 55, 50)

})
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
<!-- var pathToImg = document.getElementById('zoom-container').dataset.img;-->
<!--<div class="zoom-container"  oncontextmenu="return false;" style="position: relative" id="zoom-container" data-img="/uploads/images/9806824bc8/190/Поршень коленвал Chery Tiggo 5_original.jpg"  data-width="2120" data-height="2073">-->
