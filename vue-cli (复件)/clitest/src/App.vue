<template>
  <div id="app">
    <headnav></headnav>
    <slidernav :selectmenu.sync="levelSelect"></slidernav>
    <section class="app-main">
      <div class="app-container">
        <levelbar :msg="levelNow" :levelitems="levelItems"></levelbar>
        <a v-link="{ path: '/foot', activeClass: 'active' }">路由跳转到footer组件</a>
        <div class="" @click="tiaozhuan">
-----路由跳转到首页-----
        </div>
        <router-view
          transition="fade"
          transition-mode="out-in"
          keep-alive>
        </router-view>
        <footbar></footbar>
        <hello></hello>
        <test2></test2>
      </div>
    </section>
  </div>
</template>

<script>
// import store from './vuex/store'
import Hello from './mytest/Hello'
import Headnav from './components/navbar/headbar'
import Slidernav from './components/navbar/slidernav'
import Levelbar from './components/navbar/levelbar'
import Footbar from './components/navbar/footbar'
import Test2 from './mytest/input'
import store from './vuex/store'
import { initStore } from './vuex/actions'
export default {
  components: {
    Hello,
    Headnav,
    Slidernav,
    Levelbar,
    Footbar,
    Test2
  },
  store,
  vuex: {
    actions: {
      initStore
    }
  },
  data () {
    return {
      levelSelect: '首页',
      levelItems: ['首页']
    }
  },
  ready () {
    this.initStore()
  },
  methods: {
    tiaozhuan: function () {
      this.$route.router.go({name: 'shouye', params: { userId: 'hhh' }})
    }
  },
  computed: {
    levelNow: function () {
      return this.levelSelect
    }
  },
  events: {
    'items-level': function (c) {
      this.levelItems = c
    }
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing:border-box;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  width: 100%;
  height: 100%;
}
body {
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  line-height: 34px;
}
#app {
  width: 100%;
  min-height: calc(100%-50px);
}
.app-main {
  padding-top: 50px;
  margin-left: 180px;
  transform: translate3d(0, 0, 0);
  background: #F5F7FA;
  width: calc(100%-150px);
  height: 100%;

}
.app-container {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
