/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue';

import Menubar from 'primevue/menubar';
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Carousel from 'primevue/carousel'
import Divider from 'primevue/divider'

export const RegisterComponents = (app: App<Element>): void => {
  app.component('Button', Button);
  app.component('Tag', Tag);
  app.component('Carousel', Carousel);
  app.component('Divider', Divider);
  app.component('Menubar', Menubar);
};