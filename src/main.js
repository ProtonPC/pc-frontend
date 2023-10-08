import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Plugins
import { registerComponents } from "@/plugins/components";
import { loadFonts } from '@/plugins/webfontloader'
import { vuefireConfig } from '@/plugins/vuefire'
import { VueFire } from 'vuefire';
import vuetify from '@/plugins/vuetify'
import pinia from '@/store'
import router from '@/router'

(loadFonts())

const app = createApp(App)

app
.use(vuetify)
.use(router)
.use(pinia)
.use(VueFire, vuefireConfig)

registerComponents(app)

app.mount('#app')
