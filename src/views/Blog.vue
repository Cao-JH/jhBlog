<template>
  <div class="blogContainer">
    <div class="wuhai"><img src="../assets/asset/wuhai.png" /></div>
    <TopNav :activeId="3" />
    <ul class="blogContext">
      <li class="blogs" v-for="blog in currentPageData" :key="blog.id">
        <img src="@/assets/asset/横线.png" />
        <div class="blog">
          <h3>{{ blog.title }}</h3>
          <p>
            {{ blog.context }}
          </p>
          <router-link :to="blog.link" class="linkBtn">阅读全文</router-link>
        </div>
      </li>
    </ul>
    <Pager
      :pageNo="pageNo"
      :pageSize="pageSize"
      :blogTotal="blogs.length"
      :continues="continues"
      @getPageNo="getPageNo"
    />
    <Foot class="blogFoot" />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
export default {
  name: "Project",
  data() {
    return {
      // blogTotal: this.blogs.length,
      blogs: [
        {
          id: 0,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 1,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 2,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 3,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 4,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 5,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 6,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
        {
          id: 7,
          title: "这是第二个",
          context:
            "以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍",
          link: "/",
        },
      ],
      totalPage: 1, // 所有页数，默认为1
      currentPageData: [], // 当前页显示内容
      pageNo: 1, // 当前页数
      pageSize: 5, // 每页显示多少条
      continues: 3, // 中间显示数
    };
  },
  mounted() {
    this.setCurrentPageData();
  },
  methods: {
    // 设置当前页的内容
    setCurrentPageData() {
      // 解构
      const { pageNo, pageSize } = this;
      // 每一页的起始数字和结束数字
      let begin = (pageNo - 1) * pageSize;
      let end = pageNo * pageSize;
      console.log(begin, end);
      // 将内容切割放入当前页
      this.currentPageData = this.blogs.slice(begin, end);
    },

    // 获取当前第几页
    getPageNo(pageNo) {
      this.pageNo = pageNo;
      this.setCurrentPageData();
    },
  },
  components: {
    Pager,
  },
  computed: {
    getBlogTotal() {
      let blogTotal = this.blogs.length;
      return blogTotal;
    }, // 博客数量
  },
};
</script>

<style lang="less" scoped>
.blogContainer {
  user-select: none;
  width: 100vw;
  border: 16px solid #18191b;
  position: relative;

  .wuhai img {
    position: absolute;
    width: 130px;
    top: 44px;
    left: 70px;
  }

  .blogFoot {
    position: absolute;
    bottom: 0;
  }

  .blogContext {
    margin: 240px 100px 20px 100px;
    list-style-type: none;

    .blogs {
      img {
        width: 30px;
      }

      .blog {
        padding-bottom: 50px;
        width: 800px;

        h3 {
          margin-bottom: 15px;
        }
        p {
          font-size: 12px;
          margin-bottom: 15px;
        }
        .linkBtn {
          color: #fa983a;
          text-decoration: none;
          font-size: 12px;
        }

        .linkBtn:hover {
          color: #e55039;
        }
      }
    }
  }
}
</style>