<template>
  <div class="homeNav">
    <ul class="homeNavBtn">
      <!-- 需要解决 -->
      <!-- <li class="active">首页</a></li>
      <li><img src="./assets/竖线1.png" /></li>
      <li><a href="#">项目</a></li>
      <li><img src="./assets/竖线1.png" /></li>
      <li><a href="#">博客</a></li>
      <li><img src="./assets/竖线1.png" /></li>
      <li><a href="#">关于</a></li> -->
      <li
        v-for="item in navArr"
        :key="item.id"
        :class="{ active: active == item.id }"
      >
        <router-link :to="item.link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  props: ["activeId"],
  data() {
    return {
      active: this.activeId,
      navArr: [
        { title: "首页", id: 1, link: "/" },
        { title: "项目", id: 2, link: "/project" },
        { title: "博客", id: 3, link: "/blog" },
        { title: "关于", id: 4, link: "/about" },
      ],
    };
  },
};
</script>

<style lang="less">
.homeNav {
  position: absolute;
  border-radius: 5px;
  right: 120px;
  top: 72px;
  background: #18191b;
  width: 300px;
  height: 90px;

  .homeNavBtn {
    margin: 0 30px;
    height: 90px;
    // border: 1px solid red;
    display: flex;
    // 不换行
    flex-wrap: nowrap;

    li {
      // 去掉点
      list-style-type: none;
      // 设置文本为竖排
      writing-mode: vertical-lr;
      color: #a7abb3;
      font-size: 22px;
      font-family: "KaiTi", serif, sans-serif;
      text-align: center;
      flex: auto;
      margin-left: 20px;

      a {
        // 去除下划线
        text-decoration: none;
        // 改变默认颜色
        color: #a7abb3;
        border: 0;
        position: relative;
      }

      a::before,
      a::after {
        position: absolute;
        content: "";
        // 设置透明边框模板
        border: 1px solid transparent;
        width: 0;
        height: 0;
      }

      a::before {
        top: 0;
        left: 0;
      }

      a::after {
        bottom: 0;
        right: 0;
      }

      a:hover::before,
      a:hover::after {
        width: 100%;
        height: 110%;
      }

      a:hover::before {
        border-top-color: #a7abb3;
        border-right-color: #a7abb3;
        transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
      }

      a:hover::after {
        border-bottom-color: #a7abb3;
        border-left-color: #a7abb3;
        transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
      }
    }

    // 选择偶数项
    // li:nth-of-type(even) {
    //   flex: 1;
    //   overflow: hidden;

    //   img {
    //     // width: 10px;
    //     height: 50px;
    //   }
    // }

    // 选择后的样式
    .active {
      a {
        color: #c0392b !important;
      }

      a::before,
      a::after {
        position: absolute;
        content: "";
        // 设置透明边框模板
        border: 1px solid transparent;
        width: 100%;
        height: 110%;
      }

      a::before,
      a:hover::before {
        top: 0;
        left: 0;
        border-top-color: #c0392b;
        border-right-color: #c0392b;
      }

      a::after,
      a:hover::after {
        bottom: 0;
        right: 0;
        border-bottom-color: #c0392b;
        border-left-color: #c0392b;
      }
    }
  }
}
</style>