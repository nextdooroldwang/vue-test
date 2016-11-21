<template lang="html">
<div id="container">
  <div class="swiper">

  </div>
  <div class="huodongContainer">
    <div class="huodongTitle">
      <h4>活动需知</h4>
    </div>
    <ul>
      <li>活动地点：<span><a href="map.html">新榆公馆</a></span></li>
      <li>开始时间：<span>2016-06-21 09:57</span></li>
      <li>结束时间：<span>2016-06-21 11:57</span></li>
      <li>活动费用：<span>100.00</span>元</li>
      <li>联系电话：<span><a href="tel:18640483559">024-31050302</a></span></li>
      <li>主办单位：<span>星云家门口</span></li>
    </ul>
    <div class="huodongTitle">
      <h4>活动详情</h4>
    </div>
    <div>
      <p>
        清凉套餐一 原价：86元/小时 团购价：56元/小时 人数：1-2人 套餐内容：小包，包含1套ＶＲ设备，共计16款ＶＲ游戏可供选择，让你玩到嗨！玩到爆！
      </p>
      <p>
        清凉套餐二 原价：144元/小时 团购价：122元/小时 人数：2-4人 套餐内容：大包，包含２套ＶＲ设备，共计16款ＶＲ游戏可供选择，带上你的兄弟，一起挑战极限，看看谁才是最后的强者。
      </p>
      <p>
        清凉套餐三 原价：10元 团购价：１元 人数：1人 套餐内容：小包，包含1套ＶＲ设备，16款ＶＲ游戏中可选择1款游戏，体验5分钟，时间紧，任务重啊。
      </p>
    </div>
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

.huodongContainer {
  padding: 15px;
}
.huodongTitle {
  border-bottom: 1px solid #f5a819;
}
.huodongTitle h4 {
  color: #f5a819;
  padding: 4px 4px 4px 4px;
  border-bottom: 3px solid #f5a819;
  display: inline-block;
}
#container ul {
  padding-left: 7%;
  padding-top: 5px;
}
#container li {
  color: rgb(106, 106, 106);
  font-size: 16px;
  /*display: flex;*/
  /*align-items: center;*/
  list-style: disc;
}
#container li span {
  color: rgb(0, 0, 0);
}
#container p {
  margin: 10px 0;
}
</style>
