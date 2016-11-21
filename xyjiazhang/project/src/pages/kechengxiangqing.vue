<style lang="css" scoped>
.iconmenu {
  position: absolute;
  right: 16px;
  top:16px;
  z-index: 999;
}
</style>

<template lang="html">

<div id="container">
  <mu-card>
    <div class="iconmenu">
      <mu-icon-menu
    icon="more_vert"
  >
    <mu-menu-item title="编辑" />
    <mu-menu-item title="删除" />
  </mu-icon-menu>
    </div>
    <mu-card-title title="鲨鱼公园"/>

    <mu-card-text>
      教室：101
    </mu-card-text>
    <mu-card-text>
      教师：思思
    </mu-card-text>
    <mu-card-text>
      课节：1
    </mu-card-text>
    <mu-card-text>
      日期：2016-11-20
    </mu-card-text>
    <mu-card-text>
      时间：10:00 ～ 12:00
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button color="#F5A819" rippleColor="#F5A819" label="添加提醒"/>
    </mu-card-actions>
  </mu-card>

</div>

</template>

<script>
import myron from '../assets/iconshayu.png'
import img from '../assets/img1.png'
export default {
  data () {
    return {
      img,
      myron
    }
  },
  methods: {
    handleChange () {

    }
  }
}

</script>
