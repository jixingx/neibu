import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,NavBar,Search,Swipe,SwipeItem,Lazyload,Grid,GridItem,Tab,Tabs,Cell,CellGroup,Icon,Tabbar,TabbarItem,Collapse, CollapseItem,DatetimePicker,Overlay,Pagination,Dialog,Toast,Picker,List,Row, Col,Progress } from 'vant';
Vue.use(Button).use(NavBar).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Tab).use(Tabs).use(Cell).use(CellGroup).use(Icon).use(Tabbar).use(TabbarItem).use(Collapse).use(CollapseItem).use(DatetimePicker).use(Overlay).use(Pagination).use(Dialog).use(Toast).use(Picker).use(List).use(Row).use(Col).use(Progress);

import './assets/font1/iconfont.css';

import * as filters from './filter/filter'
 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import axios from 'axios';
//axios.defaults.baseURL = 'http://192.168.8.97:8080/MyService.asmx';
//axios.defaults.baseURL = 'http://192.168.8.139:80/myservers/MyService.asmx'
axios.defaults.baseURL = 'http://192.168.8.49/yxfw/MyService.asmx'
//axios.defaults.baseURL = 'http://localhost/myservers/MyService.asmx'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    mask: true,
    message: '加载中...'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Toast.clear();
  return response;
}, function (error) {
  // 对响应错误做点什么
  Toast.clear();
  return Promise.reject(error);
});
Vue.prototype.$axios=axios;
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
