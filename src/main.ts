import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';

import { RegisterComponents } from './registration.ts'

const app = createApp(App);
RegisterComponents(app)
app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
 });
app.mount('#app')