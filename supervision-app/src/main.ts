import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { bootstrap } from '@/config/bootstrap';
import '@/config/index';
import comps from '@/components';
import '@/assets/css/reset.css';
import '@/assets/less/antd.less';

const app = createApp(App);

bootstrap(app).use(store).use(comps).use(router).mount('#app');
