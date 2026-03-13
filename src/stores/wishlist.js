import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    ids: [],
  }),
  getters: {
    isWishlisted: (state) => (id) => state.ids.includes(parseInt(id)),
    count: (state) => state.ids.length,
  },
  actions: {
    toggle(id) {
      const parsed = parseInt(id)
      const idx = this.ids.indexOf(parsed)
      if (idx === -1) this.ids.push(parsed)
      else this.ids.splice(idx, 1)
    },
  },
})
