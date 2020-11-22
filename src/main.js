import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "./globalComponents";
Vue.config.productionTip = false;

Vue.use(ElementUI);
locale.use(lang);

new Vue({
  el: "#app",
  render: h => h(App)
});
