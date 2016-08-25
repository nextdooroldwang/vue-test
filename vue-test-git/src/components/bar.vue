
<template lang="html">
  <div v-el:bar style="width:100%;height:100%">

  </div>
</template>

<script>
import bar from 'echarts'

export default {
  props:{
    diff:{
      type:Boolean,
      default:false
    },
    right:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      data:''
    };
  },
  computed: {},
  ready() {
    // this.initbar();
  },
  beforeDestroy() {
    // this.mychar.$destroy(true);
  },
  methods: {
    initbar:function() {
      this.mychar=bar.init(this.$els.bar);
      this.mychar.setOption(this.data);
    }
  },
  events:{
    'set-data-bar':function(data) {
      this.data=data;
      this.initbar();
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
