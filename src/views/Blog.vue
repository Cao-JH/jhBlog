<template>
  <div class="blogContainer">
    <div class="wuhai"><img src="../assets/asset/wuhai.png" /></div>
    <TopNav :activeId="3" />
    <ul class="blogContext">
      <li class="blogs">
        <img src="@/assets/asset/横线.png" />
        <div class="blog">
          <h3>这是第一个</h3>
          <p>
            本站以现代、古代情诗为主，情诗网创办于2013年，以原创爱情诗歌、经典情诗、现代情诗、古代情诗、英文情诗、情诗绝句为主并收集古诗、古诗词、诗歌大全、诗词名句的文学门户。方便您下次继续阅读；可以放在浏览器的收藏夹中（快捷键Ctrl+D）;或者看到喜欢或者有趣的诗词可以通过分享按钮给你的好友分享；情诗网是目前最全情诗大全网站之一。并欢迎广大诗歌爱好者阅览投稿！喜欢本站的话请大家把本站告诉给你朋友哦！地址是
            www.qingshiwang.com ！
          </p>
          <router-link to="" class="linkBtn">阅读全文</router-link>
        </div>
      </li>
      <li class="blogs">
        <img src="@/assets/asset/横线.png" />
        <div class="blog">
          <h3>这是第二个</h3>
          <p>
            以为天亮了就会迎来蓬松的朝霞,以为黄昏了就会送别疲倦的月光,以为一切都在最初的时间里走动,以为最后都会循环到最初的相逢,我走过长长的街道看过树影斑驳,我背过美丽的回忆面对车水马龙,我说过以后的岁月候着灯火阑珊,我醉过曾经的诺言等到白发苍苍
          </p>
          <router-link to="" class="linkBtn">阅读全文</router-link>
        </div>
      </li>
    </ul>
    <div class="pager">
      <img src="@/assets/asset/323向左交换.png" class="prev" />
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <img src="@/assets/asset/324向右交换.png" class="next" />
    </div>
    <Foot class="blogFoot" />
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
  background: #e7e7e5;
  z-index: -1;
}

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
  .pager {
    width: 200px;
    height: 20px;
    margin: 0 0 130px 100px;
    display: flex;

    img {
      width: 20px;
      // float: auto;
    }

    div {
      // flex: auto;
      margin: 0 10px;
    }
  }
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #e7e7e5;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: #18191b;
}
</style>