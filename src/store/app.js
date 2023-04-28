// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    productTypes: []
  }),
  getters: {
    productTypesList: (state) => state.productTypes,
  },

  actions: {
    setProductTypes(items) {
      this.productTypes = items
    },
  },
})
