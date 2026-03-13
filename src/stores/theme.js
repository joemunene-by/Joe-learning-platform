import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: true,
  }),
  actions: {
    toggle() {
      this.dark = !this.dark
      document.documentElement.setAttribute('data-theme', this.dark ? 'dark' : 'light')
    },
    init() {
      document.documentElement.setAttribute('data-theme', this.dark ? 'dark' : 'light')
    },
  },
})
