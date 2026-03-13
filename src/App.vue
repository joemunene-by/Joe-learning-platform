<template>
  <AppNavbar />
  <main class="main-content">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
  <ToastNotifications />
</template>

<script>
import AppNavbar from './components/layout/Navbar.vue'
import AppFooter from './components/layout/Footer.vue'
import ToastNotifications from './components/ui/ToastNotifications.vue'

export default {
  name: 'App',
  components: { AppNavbar, AppFooter, ToastNotifications },
}
</script>

<style>
.main-content {
  flex: 1;
  padding-top: var(--navbar-height);
}
</style>
