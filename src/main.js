import Vue from 'vue'
import './plugins/axios'
import 'element-ui/lib/theme-chalk/index.css'
import App from "~/App"
import router from "~/router";
import ElementUI from 'element-ui'


Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
