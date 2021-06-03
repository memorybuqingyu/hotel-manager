//注册element-ui组件库插件
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//注册MyPlugin插件
import myPlugin from './MyPlugin'
Vue.use(myPlugin)
