/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: true,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#417690',
          secondary: '#5CBBF6',
          success: '#4CAF50',
          info: '#3F51B5',
          warning: '#FFC107',
          help: '#2196F3',
          danger: '#FF5252',
          white: '#FFFFFF',
          black: '#000000',
          light_grey: '#F5F5F5',
          sheet_card: '#cce5f7',
        },
      },
    },
  },
})
