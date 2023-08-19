/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { registerComponents } from "@/plugins/components";

const app = createApp(App)

registerPlugins(app)
registerComponents(app)

app.mount('#app')
