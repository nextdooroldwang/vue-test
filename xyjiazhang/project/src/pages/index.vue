<template lang="html">
  <div id="container">

    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="swiper" @click="huodong">

        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper" @click="huodong">

        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper" @click="huodong">

        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="menu">
      <div class="menuButton">
        <mu-icon-button icon="android" touch @click="routerTuisong"/>
        <div class="menuTitle">
          老师推送
        </div>
      </div>
      <div class="menuButton">
        <mu-icon-button icon="android" touch @click="routerTixing"/>
        <div class="menuTitle">
          提醒
        </div>
      </div>
      <div class="menuButton">
        <mu-icon-button icon="android" touch @click="routerYueke"/>
        <div class="menuTitle">
          约课
        </div>
      </div>
    </div>
    <div class="subheader">
      <mu-icon value="videogame_asset" color="blue"/>消息
    </div>
    <div class="news">
      <mu-list>
        <mu-list-item title="这个周末一起吃饭么?">
          <mu-avatar :src="iconshayu" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
      <mu-list>
        <mu-list-item title="这个周末一起吃饭么?">
          <mu-avatar :src="iconxiaoxiang" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
      <mu-list>
        <mu-list-item title="这个周末一起吃饭么?">
          <mu-avatar :src="iconshayu" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
    </div>
  </div>
</template>

<script>
import iconshayu from '../assets/iconshayu.png'
import iconxiaoxiang from '../assets/iconxiaoxiang.jpg'

export default {
  name: 'carrousel',
  data () {
    return {
      iconshayu,
      iconxiaoxiang,
      swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
        }
    }
  },
  methods: {
    huodong () {
      this.$router.push('/huodong')
    },
    routerTuisong () {
      this.$router.push('/tuisongliebiao')
    },
    routerTixing () {
      this.$router.push('/tixing')
    },
    routerYueke () {
      // this.$router.push('/huodong')
    },
  },

}
</script>

<style lang="css" scoped>
  .swiper {
    width: 100vw;
    height: 60vw;
    max-height: 50vh;
    background-image: url("../assets/img1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .menuButton {
    flex:1;
  }
  .menuTitle {
    font-size: .6em;
    color: rgb(122, 122, 122);
  }

  .news {
    height: calc(100vh - 60vw - 66px - 56px - 25px);
    overflow: auto;
    -webkit-overflow-scrolling : touch;
  }
  .subheader {
    color: rgba(0, 0, 0, .54);
    width: 100%;
    padding-left: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
  }
</style>
