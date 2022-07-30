import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局组件
import TopNav from "@/components/TopNav";
import Foot from "@/components/Foot";

Vue.component(TopNav.name, TopNav);
Vue.component(Foot.name, Foot);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
