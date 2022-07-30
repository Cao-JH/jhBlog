<template>
  <div class="carouselPic">
    <img class="homePicContent" src="./assets/homePic-1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style lang="less">
.carouselPic {
  margin-top: 40px;
  margin-bottom: 0px;
  width: 100px;
  flex: 1;
  // 图片超出部分隐藏
  overflow: hidden;

  .homePicContent {
    width: 400px;
    // 图片向右移动100px
    // transform:translateX(-50px)
  }
}
</style>