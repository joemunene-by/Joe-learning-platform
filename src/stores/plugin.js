// localStorage persistence plugin for Pinia
export function piniaLocalStoragePlugin({ store }) {
  const STORAGE_KEY = `joelearn_${store.$id}`

  // Hydrate from localStorage on startup
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      store.$patch(JSON.parse(saved))
    } catch (e) {
      // ignore corrupt data
    }
  }

  // Save to localStorage on every state mutation
  store.$subscribe((_mutation, state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  })
}
