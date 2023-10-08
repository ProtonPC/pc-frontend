import { VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

export const vuefireConfig = {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
}
