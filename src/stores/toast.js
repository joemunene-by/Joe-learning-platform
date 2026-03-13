import { defineStore } from 'pinia'

let nextId = 0

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [],
  }),
  actions: {
    show({ title, message = '', type = 'info', duration = 3500 }) {
      const id = ++nextId
      this.toasts.push({ id, title, message, type })
      setTimeout(() => this.remove(id), duration)
    },
    success(title, message) { this.show({ title, message, type: 'success' }) },
    error(title, message)   { this.show({ title, message, type: 'error' }) },
    info(title, message)    { this.show({ title, message, type: 'info' }) },
    remove(id) {
      const idx = this.toasts.findIndex((t) => t.id === id)
      if (idx !== -1) this.toasts.splice(idx, 1)
    },
  },
})
