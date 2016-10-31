<template lang="html">
  <h1>{{ activeNote.content }}</h1>
  <button type="button" @click='myc'>hhh</button>
</template>

<script>
import { activeNote, c } from '../vuex/getters'
import { newNote, deleteNote, toggleFavorite, myc } from '../vuex/actions'
export default {
  data () {
    return {
      data: 1
    }
  },
  vuex: {
    getters: {
      activeNote,
      c
    },
    actions: {
      newNote,
      deleteNote,
      toggleFavorite,
      myc
    }
  },
  ready () {
  },
  attached () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="css">
</style>
