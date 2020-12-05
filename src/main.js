import { createApp } from 'vue';
import App from './App.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PrimeComponents from './primevue';

const app = createApp(App);
Object.keys(PrimeComponents).map((key) => {
  app.component(`${key}`, PrimeComponents[key]);
});
app.mount('#app');
