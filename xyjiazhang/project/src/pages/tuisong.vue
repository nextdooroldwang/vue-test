<style lang="css" scoped>

.filterHead {

}

.filterTime,
.filterKind {
  float: left;
  width: 50vw;
}

.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-inline-demo{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling : touch;
}
</style>

<template lang="html">

<div id="container">
    <mu-card>
  <mu-card-header title="鲨鱼公园" subTitle="李 老师">
    <mu-avatar :src="myron" slot="avatar"/>
  </mu-card-header>
  <!-- <mu-card-media subTitle="图片说明这里是轮播大图">
    <img :src="img" />
  </mu-card-media> -->
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-inline-demo">
      <mu-grid-tile v-for="tile in list">
        <img :src="tile.image"/>
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">by <b>{{tile.author}}</b></span>
        <mu-icon-button icon="star_border" slot="action"/>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
  <mu-card-title title="课堂表现" subTitle="2016-11-29"/>
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
  </mu-card-text>
  <mu-card-actions>
    <mu-flat-button label="一键分享" class="demo-flat-button" icon="android" primary/>
  </mu-card-actions>
</mu-card>
</div>

</template>

<script>
import myron from '../assets/iconshayu.png'
import breakfast from '../assets/img1.png'
import burger from '../assets/img1.png'
import camera from '../assets/img1.png'
import img from '../assets/img1.png'
export default {
  data () {
    return {
      img,
      myron,
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      },]
    }
  },

  methods: {
    handleChange () {

    }
  }
}

</script>
