/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import { registerPrimeVue } from './primevue'
import router from '../router'
export { registerComponents } from './components'
export { makeServer } from './mirage'


export function registerPlugins (app) {
  loadFonts()

  registerPrimeVue(app)

  app
  .use(vuetify)
  .use(router)
  .use(pinia)
}
