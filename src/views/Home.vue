<template>
  <div class="home">
    <!-- 右侧导航栏 -->
    <TopNav :activeId="1" class="top" />

    <!-- 整体内容 -->
    <div class="container">
      <!-- 左侧按钮 -->
      <div class="nav">
        <img src="../assets/asset/分割线条.png" />
      </div>
      <div class="homeText">
        <!-- 雾海春颂 -->
        <img src="../assets/asset/wuhai.png" />
        <div class="homeTextWord">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            人活着就是为了解决困难，这才是生命的意义，也是生命的资料。逃避不是办法，知难而上才是最好的手段。这是我的个人网站，记录工作学习时发现的新问题，或者学习到的新知识。也欢迎大家能来欣赏。
          </p>
        </div>
      </div>
      <!-- 底部标签 -->
      <Foot class="foot" />
    </div>
    <!-- 轮播图 -->
    <div class="car">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Home",
  components: { Carousel },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background: #e7e7e5;
}

/* 全局滚动条事件 */
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #e7e7e5;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: #18191b;
}
</style>

<style lang="less" scoped>
.home {
  // 设置不可复制
  user-select: none;
  width: 100vw;
  height: 100vh;
  border: 16px solid #18191b;
  display: flex;
  justify-content: space-around;

  .top {
    position: absolute;
    right: 118px;
    top: 64px;
  }

  .container {
    flex: 0 0 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .nav {
      margin-top: 30px;
      width: 30px;
    }

    .homeText {
      // width: 300px;
      // flex: 0 0 400px;
      position: relative;

      img {
        width: 170px;
        margin-top: 20px;
        margin-left: -44px;
      }

      .homeTextWord {
        // width: 80%;
        font-size: 12px;
        color: #52555a;
      }
    }
  }

  .car {
    flex: 0 0 auto;
  }
}
</style>