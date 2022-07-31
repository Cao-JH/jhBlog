<template>
  <div class="abContain">
    <div class="wuhai"><img src="../assets/asset/wuhai.png" /></div>
    <TopNav :activeId="4" />
    <div>
      <div class="selfPic">
        <img src="@/assets/asset/about.jpg" alt="" />
      </div>
      <div class="slefText">
        <h3>曹嘉宏</h3>
        <p>
          果然学霸都是别人家的，留给我们的都是渣渣！我们从2岁开始就认识了3600个汉字，但是2岁的时候，我们不知道自己在做什么。没有比较就没有伤害。人比人受欢迎。别人家的孩子总是很聪明，自己家的孩子却总是那么调皮。
          不过，不管怎样，恭喜这位男生！
        </p>
        <img src="@/assets/asset/横线.png" />
        <h5>掌握技能</h5>
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
          <li>444</li>
          <li>555</li>
        </ul>
        <img src="@/assets/asset/横线.png" />
        <div class="connect"></div>
      </div>
    </div>
    <Foot class="abFoot" />
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style lang="less">
.abContain {
  user-select: none;
  border: 16px solid #18191b;
  position: relative;

  .selfPic {
    width: 450px;
    // position: absolute;
    // top: 200px;
    // left: 100px;
    margin: 200px 0 750px 200px;
    height: 600px;
    overflow: hidden;

    img {
      width: 450px;
    }
  }

  .slefText {
    position: absolute;
    // border: 1px solid #000;
    background: #e7e7e5;
    width: 600px;
    height: 1000px;
    top: 300px;
    left: 600px;

    h3 {
      font-size: 2.5rem;
      margin: 30px auto 30px 60px;
    }

    h5 {
      font-size: 1rem;
      margin: 0 auto 20px 60px;
    }

    p {
      font-size: 12px;
      color: #52555a;
      margin: 30px auto 10px 60px;
    }

    img {
      width: 50px;
      margin: 0 auto 0px 60px;
    }

    ul {
      margin: 0 auto 0px 60px;
      list-style-type: none;
      font-size: 12px;
      color: #52555a;
    }
  }

  .wuhai img {
    position: absolute;
    width: 130px;
    top: 44px;
    left: 70px;
  }

  .abFoot {
    position: absolute;
    bottom: 0;
  }
}
</style>