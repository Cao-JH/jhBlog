<template>
  <div class="proContain">
    <div class="wuhai"><img src="../assets/asset/wuhai.png" /></div>
    <TopNav :activeId="2" />
    <Foot class="proFoot" />
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style lang="less">
body {
  width: 100vw;
  height: 100vh;
  background: #e7e7e5;
  z-index: -1;
}

.proContain {
  width: 100vw;
  height: 100vh;
  border: 24px solid #18191b;

  .wuhai img {
    position: absolute;
    width: 130px;
    top: 68px;
    left: 94px;
  }

  .proFoot {
    position: absolute;
    bottom: 24px;
    width: 97%;
  }
}
</style>