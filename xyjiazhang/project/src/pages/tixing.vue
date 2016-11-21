<style lang="css" scoped>

.filterHead {

}

.filterTime,
.filterKind {
  float: left;
  width: 50vw;
}
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
    <mu-card-title title="小象口才公开课" subTitle="2016-11-29 10:00"/>

    <mu-card-text>
      地址：浑南新区胜利南京东北角星云大厦203室 星云活动教室
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button color="#F5A819" rippleColor="#F5A819" label="课程提醒"/>
    </mu-card-actions>
  </mu-card>
  <mu-card>
    <div class="iconmenu">
      <mu-icon-menu
    icon="more_vert"
  >
    <mu-menu-item title="编辑" />
    <mu-menu-item title="删除" />
  </mu-icon-menu>
    </div>
    <mu-card-title title="鲨鱼公园趣味实验" subTitle="2016-11-29 10:00"/>

    <mu-card-text>
      地址：浑南新区胜利南京东北角星云大厦203室 星云活动教室
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button color="#F5A819" rippleColor="#F5A819" label="活动提醒"/>
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
