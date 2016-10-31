<template lang="html">
  <div class="btn-open" @click='clickopen'>
    <template v-if='diff'>
        打开对比图
    </template>
    <template v-else >
        关闭对比图
    </template>
  </div>
  <div class="echars">
    <div class="echart-diff" v-if='diff'>
        <bar v-ref:bar></bar>
    </div>
    <div class="echart-left" v-if='!diff'>
        <bar v-ref:bar-diff></bar>
    </div>
    <div class="echart-right" v-if='!diff'>
        <bar v-ref:bar-diff-right></bar>
    </div>
  </div>
</template>
<script>
import Bar from './bar.vue';
import Vue from 'vue';
import databar from '../data/data.js'
import databardiff from '../data/data_diff.js'
import databardiffright from '../data/data_diff_right.js'
module.exports={
  components:{
    'bar':Bar
  },
  data:function() {
    return {
      diff:true
    };
  },
  methods: {
    clickopen:function() {
      var _this=this;
      if(this.diff) {
        this.diff=!this.diff;
        Vue.nextTick(function() {
          _this.setdatadiff();
          _this.setdatadiffright();
        })
      }else {
        this.diff=!this.diff;
        Vue.nextTick(function() {
            _this.setdata();
        })
      }
    },
    setdata:function() {
      var option=databar;
      this.$refs.bar.$emit('set-data-bar',option);
    },
    setdatadiff:function() {
      var option=databardiff;
      this.$refs.barDiff.$emit('set-data-bar',option);
    },
    setdatadiffright:function() {
      var option=databardiffright;
      this.$refs.barDiffRight.$emit('set-data-bar',option);
    }
  },
  computed: {},
  ready:function() {
    this.setdata();
  },
  attached:function() {}
}

</script>

<style scoped>

.btn-open {
  display: inline-block;
  width: 120px;
  height: 34px;
  text-align: center;
  background: #f5a819;
  text-decoration: none;
  font-style: normal;
  color: #ffffff;
  font-family: '微软雅黑';
  line-height: 34px;
  cursor: pointer;
}
.echars {
  width: 100%;
  height: 500px;
}
.echart-diff {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 2px solid #666666;
}
.echart-left {
  width: 49%;
  height: 100%;
  float: left;
  border: 2px solid #333333;
}
.echart-right {
  width: 49%;
  height: 100%;
  float:right;
  border: 2px solid #333333;
}
</style>
