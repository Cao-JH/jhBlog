<template>
  <div class="foot">
    <div class="footText">
      <div>JH-雾海春颂</div>
    </div>
    <div class="footPic">
      <div>
        <a href="https://github.com/Cao-JH"
          ><img src="./assets/github-fill.png" alt="跳转至GitHub"
        /></a>
      </div>
      <div class="code">
        <img class="qrcode" src="./assets/qq.jpg" />
        <img class="minicode" src="./assets/QQ.png" alt="QQ" />
      </div>
      <div class="code">
        <img class="qrcode" src="./assets/wx.jpg" />
        <img class="minicode" src="./assets/微信.png" alt="微信" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style lang="less">
.foot {
  display: flex;
  height: 90px;
  width: 100%;
  align-items: center;
  border-top: 1px solid #a7abb3;

  .footText {
    flex: 1;
    width: 100px;
    font-size: 10px;
    color: #a7abb3;
    margin-left: 160px;
  }

  .footPic {
    flex: 1;
    margin-right: 120px;

    div {
      // border: 1px solid #000;
      width: 30px;
      margin-left: 10px;
      float: right;

      img {
        width: 25px;
      }
    }

    .code {
      position: relative;

      .qrcode {
        position: absolute;
        // 显示在最上层
        z-index: 99;
        width: 5rem;
        top: -300%;
        right: -70%;
        height: 5rem;
        // 位移
        transform: scale(0);
        transform-origin: bottom;
        opacity: 0;
        border: 0.3125rem solid #18191b;
        border-radius: 0.3rem;
        -webkit-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
    }

    .code:hover .qrcode {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>