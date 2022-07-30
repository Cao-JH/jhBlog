<template>
  <div class="textTitle">
    <p class="white top">
      春
      <img src="./assets/圆圈.png" alt="" />
    </p>
    <p class="black top">雾</p>
    <br />
    <p class="white botton">颂</p>
    <p class="black botton">海</p>
  </div>
</template>

<script>
export default {
  name: "Wuhai",
};
</script>

<style lang="less">
.textTitle {
  position: absolute;
  align-self: align-self;
  font-size: 40px;
  font-family: "Microsoft YaHei", serif, sans-serif;
  color: #18191b;
  line-height: 45px;

  .top {
    display: inline-block;
    margin-left: 10px;
    position: relative;

    img {
      width: 22px;
      position: absolute;
      bottom: 32px;
      left: -8px;
      z-index: 1px;
    }
  }

  .botton {
    display: inline-block;
    margin-left: 10px;
    margin-top: 5px;
  }

  .black {
    background: #18191b;
    color: #e7e7e5;
  }
}
</style>