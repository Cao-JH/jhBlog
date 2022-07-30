<template>
  <div class="foot">
    <div class="footText">
      <div>JH-雾海春颂</div>
    </div>
    <div class="footPic">
      <div><img src="./assets/github-fill.png" /></div>
      <div><img src="./assets/QQ.png" /></div>
      <div><img src="./assets/微信.png" /></div>
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
  }
}
</style>