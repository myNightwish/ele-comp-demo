import Backtop from '@/components/backtop/index.vue';
import Login from '@/components/login/index.vue';
import phoneLogin from '@/components/phoneLogin/index.vue';

const components = [
  Backtop,
  Login,
  phoneLogin
];

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
}