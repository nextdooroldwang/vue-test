<style lang="css" scoped>

.imgContaner {
    width: 100%;
    box-sizing: border-box;
}

.imgSmall {
    display: inline-block;
    box-sizing: border-box;
    width: calc((100vw - 72px - 56px - 14px) / 4);
    height: calc((100vw - 72px - 56px - 14px) / 4);
    padding: 2px 2px;
}

.imgSmall img {
    width: 100%;
    height: 100%;
}

</style>

<template lang="html">

<div class="">
  <mu-raised-button @click="openBottomSheet" label="选择消息类型" />
  <mu-bottom-sheet v-if="bottomSheet" @close="closeBottomSheet">
      <mu-menu @itemClick="closeBottomSheet">
          <mu-sub-header>
              请选择一个
          </mu-sub-header>
          <mu-menu-item title="全部类型" />
          <mu-menu-item title="课堂点评" />
          <mu-menu-item title="家庭作业" />
          <mu-menu-item title="成绩单" />
      </mu-menu>
  </mu-bottom-sheet>
    <mu-list>
        <mu-sub-header inset>
        </mu-sub-header>
        <mu-list-item title="课堂点评" describeText="Jan 20, 2014" @click="routerTuisong">
            <mu-avatar :src="shayu" slot="leftAvatar" />
            <mu-icon value="more_vert" slot="right" />
            <div class="imgContaner">
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
            </div>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="家庭作业" describeText="Jan 10, 2014" @click="routerTuisong">
            <mu-avatar :src="xiaoxiang" slot="leftAvatar" />
            <mu-icon value="more_vert" slot="right" />
            <div class="imgContaner">
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
                <div class="imgSmall">
                    <img src="../assets/img1.png" alt="" />
                </div>
            </div>
        </mu-list-item>
    </mu-list>
</div>

</template>

<script>

import shayu from '../assets/iconshayu.png'
import xiaoxiang from '../assets/iconxiaoxiang.jpg'
export default {
    data() {
            return {
                shayu,
                xiaoxiang,
                bottomSheet: false
            }
        },
        methods: {
            closeBottomSheet() {
                    this.bottomSheet = false
                },
                openBottomSheet() {
                    this.bottomSheet = true
                },
                routerTuisong() {
                  this.$router.push('/tuisong')
                }
        }
}

</script>
