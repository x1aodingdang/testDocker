// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
const env = process.env.NODE_ENV || 'development'
console.log(env)
if (env !== 'development') {
	Vue.config.devtools = false
	Vue.config.productionTip = false
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
