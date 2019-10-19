// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('formatDate', function(str){
  if(!str) return ''
  var data = new Date(str);
  var time = new Date().getTime()-data.getTime();//相差的时间：单位为毫秒
  if(time < 0) return''
  else if(time/1000 <30) {
    return '刚刚'
  }else if(time/1000 < 60){
    return parseInt(time/1000)+'秒前'
  }else if(time/60000 <60){
    return parseInt(time/60000)+ '分钟前'
  }else if(3600000 <60){
    return parseInt(time/3600000)+ '小时前'
  }else if(time/8640000 <60){
    return parseInt(time/8640000)+ '天前'
  }else if(time/259200000 <60){
    return parseInt(time/259200000)+ '月前'
  }else if(time/94608000000 <60){
    return parseInt(time/94608000000)+ '年前'
  }
})
