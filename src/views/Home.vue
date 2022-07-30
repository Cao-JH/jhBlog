<template>
  <div class="home">
    <!-- 左侧按钮和右侧导航栏 -->
    <div class="nav">
      <div class="homeBtn">
        <img src="../assets/asset/分割线条.png" />
      </div>
    </div>
    <TopNav :activeId="1" />

    <!-- 整体内容 -->
    <div class="container">
      <div class="homeText">
        <!-- 雾海春颂 -->
        <img src="../assets/asset/wuhai.png" />
        <div class="homeTextWord">
          <p>
            打击犯罪行动再次成为媒体头条，休伊羡慕的看着电视屏幕，那份魅力和荣誉了早日搬出父亲的家，在外面租间公寓，过二人世界。今天二人约好一起吃午餐，到了午休时间，他们手牵着手，聊着将来美好生活。
            可就在准备过马路时，洛缤刚跨出路牙
          </p>
        </div>
      </div>
      <!-- 轮播图 -->
      <Carousel />
      <!-- 底部标签 -->
      <Foot class="foot" />
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

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background: #e7e7e5;
  z-index: -1;
}

.home {
  width: 100vw;
  height: 100vh;
  border: 16px solid #18191b;
  position: relative;

  .nav {
    position: relative;

    .homeBtn {
      position: absolute;
      left: 140px;
      top: 120px;
      width: 30px;
    }
  }

  .container {
    margin: 0 160px;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .homeText {
      width: 300px;
      flex: auto;
      position: relative;

      img {
        position: absolute;
        top: 220px;
        left: -48px;
        width: 190px;
      }

      .homeTextTitle {
        top: 280px;
        left: -10px;
      }

      .homeTextWord {
        position: absolute;
        width: 65%;
        top: 420px;
        font-size: 12px;
        color: #52555a;
      }
    }
  }

  .foot {
    position: absolute;
    width: 52%;
    bottom: 0;
    left: 0;

    .footPic {
      margin-right: 30px;
    }
  }
}
</style>