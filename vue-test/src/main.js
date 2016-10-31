import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import halo from './components/Hello.vue'
import chart from './components/chart.vue'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  'halo/': {
    component: halo
  },
  'chart/': {
    component: chart
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/halo/'
})

router.start(App, '#app')
