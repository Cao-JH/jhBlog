<template>
  <div class="proContain">
    <div class="wuhai"><img src="../assets/asset/wuhai.png" /></div>
    <TopNav :activeId="2" />
    <div class="proContainer">
      <div class="project project1">
        <p>第一个</p>
        <img src="../assets/asset/project1.jpg" alt="" />
      </div>
      <div class="project project2">
        <img src="../assets/asset/project2.jpg" alt="" />
        <p>第二个</p>
      </div>
      <div class="project project2">
        <p>第三个</p>
        <img src="../assets/asset/project3.jpg" alt="" />
      </div>
    </div>
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
  user-select: none;
  width: 100vw;
  height: 100vh;
  border: 16px solid #18191b;
  position: relative;

  .wuhai img {
    position: absolute;
    width: 130px;
    top: 44px;
    left: 70px;
  }

  .proFoot {
    position: absolute;
    bottom: 0;
  }

  .proContainer {
    // border: 1px solid #000;
    margin: 250px 100px 100px 0;
    height: 300px;
    display: flex;

    .project {
      width: 420px;
      flex: auto;
      position: relative;

      img {
        width: 420px;
      }

      p {
        width: 420px;
        border-right: 2px solid #52555a;
        font-family: "SimHei ", sans-serif;
        font-weight: 700;
        color: #52555a;
        font-size: 14px;
        text-align: right;
        padding-right: 20px;
        margin: 8px 0;
      }
    }
  }
}
</style>