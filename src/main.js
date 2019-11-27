import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'
import store from './store'
import Http from './service/http'

Vue.config.productionTip = false
//把Http挂载到实例上
Vue.prototype.$Http = Http

Vue.use(Vuex)
// const store = new Vuex.Store({
//   state:{
//     count:0
//   },
//   mutations:{
//     countIncrease(state){
//       state.count++
//     }
//   }
// })
Vue.prototype.$store = store

// router.beforeEach( (to,from , next) => {
//   console.log(store.state, 'store.state')
//   if (store.state.userInfo || to.path === '/login') {
//     next()
//   } else {
//     console.log(2)
//     next({
//       path : '/login'
//     })
//   }
// })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
