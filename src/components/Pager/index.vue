<template>
  <div class="pagerContainer">
    <div class="pager">
      <img src="@/assets/asset/323向左交换.png" @click="prevPage()" />
      <button v-if="startNumAndEndNum.start > 1" @click="getPageNo(1)">
        1
      </button>
      <button v-if="startNumAndEndNum.start > 2">...</button>

      <!-- 中间部分 -->
      <button
        v-for="(page, index) in startNumAndEndNum.end"
        :key="index"
        v-show="page >= startNumAndEndNum.start"
        :class="{ active: pageNo == index + 1 }"
        @click="getPageNo(page)"
      >
        {{ page }}
      </button>

      <button v-if="startNumAndEndNum.end < totalPage - 1">...</button>
      <button
        v-if="startNumAndEndNum.end < totalPage"
        @click="getPageNo(totalPage)"
      >
        {{ totalPage }}
      </button>
      <img src="@/assets/asset/324向右交换.png" @click="nextPage()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: ["pageNo", "pageSize", "blogTotal", "continues"],
  methods: {
    // 上一页
    prevPage() {
      if (this.pageNo === 1) return;
      this.$emit("getPageNo", this.pageNo - 1);
    },
    // 下一页
    nextPage() {
      if (this.pageNo === this.totalPage) return;
      this.$emit("getPageNo", this.pageNo + 1);
    },
    // 点击页码
    getPageNo(page) {
      this.$emit("getPageNo", page);
    },
  },
  //计算属性
  computed: {
    // 计算这个多少页
    totalPage() {
      return Math.ceil(this.blogTotal / this.pageSize);
    },
    // 计算连续的页码：起始数字 和 结束数字
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      //定义起始数字 和 结束数字
      let start = 0,
        end = 0;
      //【不正常现象】总页码数 < 连续页码
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //【正常现象】总页码数 >= 连续页码
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //start 出现不正常现象【start < 1】
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //end 出现不正常现象【end > totalPage】
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less">
.pagerContainer {
  .pager {
    width: 350px;
    height: 20px;
    margin: 0 0 130px 100px;
    // display: flex;

    img {
      width: 20px;
      display: inline-block;
      // float: auto;
    }

    button {
      flex: 1;
      color: #18191b;
      margin: 0 5px;
      cursor: pointer;
      border: 0px;
      background: #e7e7e5;
      font-size: 16px;
      padding: 0 5px;
      width: 30px;
      height: 30px;
      text-align: center;
      display: inline-block;
    }
    .active {
      border-radius: 50%;
      background: #c0392b;
      color: #e7e7e5;
      border: 1px solid #18191b;
    }
  }
}
</style>