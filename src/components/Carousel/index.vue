<template>
  <div class="carouselPic">
    <div class="homePicContent" v-for="img in list" :key="img.id">
      <!-- 获取本地图片 -->
      <img
        :src="require('./' + img.url)"
        :alt="img.title"
        v-show="img.id === currentIndex"
      />
    </div>
    <div class="changePic">
      <img src="./assets/zuo.png" @click="changePic('zuo')" />
      <img src="./assets/you.png" @click="changePic('you')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentIndex: 1, // 当前图片下表
      list: [
        {
          title: "第一张",
          url: "assets/homePic-1.jpg",
          id: 1,
        },
        {
          title: "第二张",
          url: "assets/homePic-2.jpg",
          id: 2,
        },
        {
          title: "第三张",
          url: "assets/homePic-3.jpg",
          id: 3,
        },
      ],
    };
  },
  methods: {
    // 点击左右按钮
    changePic(val) {
      if (val === "you") {
        this.currentIndex++;
        if (this.currentIndex === this.list.length + 1) {
          this.currentIndex = 1;
        }
      } else {
        console.log(this.currentIndex, 1);

        this.currentIndex--;
        if (this.currentIndex === 0) {
          this.currentIndex = this.list.length;
        }
        console.log(this.currentIndex, 2);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.carouselPic {
  height: 90%;
  margin-top: 13%;
  // 图片超出部分隐藏
  overflow: hidden;

  .homePicContent img {
    width: 400px;
  }

  .changePic {
    position: absolute;
    width: 100px;
    // height: 50px;
    bottom: 20px;
    right: 120px;

    img {
      width: 35px;
      border-radius: 8px;
      background: #e7e7e5;
      margin-left: 15px;
      width: 30px;
    }
  }
}
</style>