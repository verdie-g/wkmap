import 'buefy/lib/buefy.css';
import 'moment/locale/fr';
import Buefy from 'buefy';
import Vue from 'vue';
import VueMoment from 'vue-moment';
import Vuex from 'vuex';

import App from './App';
import store from './store/index';

Vue.use(Buefy);
Vue.use(VueMoment);
Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
