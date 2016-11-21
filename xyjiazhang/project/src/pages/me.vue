<template lang="html">
<div class="">
  <div class="swiper">

  </div>
  <mu-list-item title="小 明">
    <mu-avatar :src="iconshayu" slot="leftAvatar"/>
  </mu-list-item>
  <div>
  <mu-paper style="width: 100%;" :zDepth="0">
    <mu-list>
      <mu-list-item title="我的合同" @click="routerHetong">
        <mu-badge color="#23a197" content="12" slot="right"/>
      </mu-list-item>
      <mu-divider shallowInset/>
      <mu-list-item title="关于我们">
        <mu-icon slot="right" value="more_vert" >
      </mu-icon-menu>
      </mu-list-item>
      <mu-list-item title="意见反馈" @click="routerYijian">
        <mu-icon slot="right" value="more_vert" >
      </mu-icon-menu>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</div>

</div>
</template>

<script>
import iconshayu from '../assets/img1.png'
export default {
  data () {
    return {
      iconshayu,
    }
  },
  mounted() {
  },
  methods: {
    routerHetong () {
      this.$router.push('/hetong')
    },
    routerYijian () {
      this.$router.push('/yijian')
    }
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 100vw;
  height: 40vw;
  max-height: 50vh;
  background-image: url("../assets/img1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


</style>
