import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import NProgress from 'nprogress'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

require('font-awesome-webpack')
  /* eslint-disable no-new */
Vue.use(Element)
Vue.use(Router)
var router = new Router()
import Shouye from './page/shouye'
import Levelbar from './components/navbar/levelbar'
import Footbar from './components/navbar/footbar'

router.beforeEach(({
  next
}) => {
  NProgress.start()

  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.map({
  ':userId': {
    name: 'shouye',
    component: Shouye
  },
  '/level': {
    component: Levelbar
  },
  '/foot': {
    component: Footbar
  }
})
router.redirect({
  '*': 'shouye'
})
router.start(App, 'app')
