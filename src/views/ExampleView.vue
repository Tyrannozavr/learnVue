<template>

  <div id="zoom-container" style="position: relative">
    <canvas id="defaultCanvas0" class="" style="width: 753px; height: 950px;" width="1506" height="1900"></canvas>
    <div style="position: absolute; height: 100px; width: 400px; top: 300px; left: 250px">
      <a href="#hello">1</a>
    </div>
  </div>

  <img id="image" src="@/assets/img/details.jpg" style="display: none">
</template>

<script setup>
import {onMounted, ref} from "vue";

const canvas = ref(null)
const ctx = ref(null)
const width = ref(window.innerWidth * 0.6)
const height =ref( window.innerHeight)
onMounted(() => {
  canvas.value = document.getElementById('defaultCanvas0')
  ctx.value = canvas.value.getContext('2d')
  canvas.value.width = width.value
  canvas.value.height = height.value
  let background = new Image()
  background.src = document.getElementById('image').src

  background.onload = function () {
    ctx.value.background = 'rgb(0, 0, 255'
    ctx.value.drawImage(background,0,0, width.value, height.value)
    // ctx.value.fillStyle = 'rgb(0,0,255)'
    // ctx.value.fillRect(0, 0, 55, 55)
  }

})
</script>
<!--$(zoomPoints[i]).css('left',deltaX+item.x*allScale).css('top',deltaY+item.y*allScale).css('transform','scale('+allScale+')')-->
<style scoped>
canvas {
  border: 1px solid black;
}
</style>