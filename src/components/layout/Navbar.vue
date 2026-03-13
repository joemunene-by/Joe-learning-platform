<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <!-- Logo -->
      <RouterLink to="/" class="navbar__logo">
        <span class="navbar__logo-icon">⚡</span>
        <span class="navbar__logo-text">Joe<span class="gradient-text">Learn</span></span>
      </RouterLink>

      <!-- Nav Links (Desktop) -->
      <ul class="navbar__links">
        <li><RouterLink to="/" class="navbar__link" exact-active-class="navbar__link--active">Home</RouterLink></li>
        <li><RouterLink to="/courses" class="navbar__link" active-class="navbar__link--active">Courses</RouterLink></li>
        <li><RouterLink to="/dashboard" class="navbar__link" active-class="navbar__link--active">Dashboard</RouterLink></li>
      </ul>

      <!-- Actions -->
      <div class="navbar__actions">
        <!-- Wishlist Icon -->
        <RouterLink to="/wishlist" class="navbar__icon-btn" title="Wishlist">
          <Heart :size="18" />
          <span v-if="wishlistCount > 0" class="navbar__badge">{{ wishlistCount }}</span>
        </RouterLink>

        <!-- Theme Toggle -->
        <button class="navbar__icon-btn" @click="toggleTheme" :title="dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <Sun v-if="!dark" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <RouterLink to="/courses" class="btn btn--primary btn--sm navbar__explore-btn">
          <BookOpen :size="15" />
          Explore
        </RouterLink>

        <button class="navbar__mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <Menu v-if="!mobileOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="navbar__mobile">
        <div class="container">
          <ul class="navbar__mobile-links">
            <li><RouterLink to="/" @click="mobileOpen = false" class="navbar__mobile-link">Home</RouterLink></li>
            <li><RouterLink to="/courses" @click="mobileOpen = false" class="navbar__mobile-link">Courses</RouterLink></li>
            <li><RouterLink to="/dashboard" @click="mobileOpen = false" class="navbar__mobile-link">Dashboard</RouterLink></li>
            <li><RouterLink to="/wishlist" @click="mobileOpen = false" class="navbar__mobile-link">Wishlist ({{ wishlistCount }})</RouterLink></li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { BookOpen, Menu, X, Heart, Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '../../stores/theme'
import { useWishlistStore } from '../../stores/wishlist'

export default {
  name: 'AppNavbar',
  components: { BookOpen, Menu, X, Heart, Sun, Moon },
  setup() {
    const scrolled = ref(false)
    const mobileOpen = ref(false)
    const themeStore = useThemeStore()
    const wishlistStore = useWishlistStore()

    const dark = computed(() => themeStore.dark)
    const wishlistCount = computed(() => wishlistStore.count)

    const toggleTheme = () => themeStore.toggle()

    const handleScroll = () => { scrolled.value = window.scrollY > 20 }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      themeStore.init()
    })
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))

    return { scrolled, mobileOpen, dark, wishlistCount, toggleTheme }
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--navbar-height);
  transition: var(--transition-base);
}
.navbar--scrolled {
  background: rgba(8, 12, 20, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}
[data-theme="light"] .navbar--scrolled { background: rgba(255,255,255,0.8); }

.navbar__inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: var(--space-8);
}
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  flex-shrink: 0;
}
.navbar__logo-icon { font-size: 1.4rem; }
.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  list-style: none;
  flex: 1;
}
.navbar__link {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: var(--transition-fast);
}
.navbar__link:hover { color: var(--color-text-primary); background: var(--color-surface); }
.navbar__link--active { color: var(--color-text-primary) !important; background: var(--color-surface) !important; }

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}
.navbar__icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-fast);
}
.navbar__icon-btn:hover { border-color: var(--color-accent); color: var(--color-accent-hover); background: rgba(99,102,241,0.08); }
.navbar__badge {
  position: absolute;
  top: -5px; right: -5px;
  min-width: 16px; height: 16px;
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-full);
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
}

.navbar__mobile-toggle {
  display: none;
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-fast);
}
.navbar__mobile-toggle:hover { border-color: var(--color-accent); color: var(--color-accent-hover); }

.navbar__mobile {
  background: rgba(8, 12, 20, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) 0;
}
.navbar__mobile-links { list-style: none; display: flex; flex-direction: column; gap: var(--space-1); }
.navbar__mobile-link {
  display: block;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: var(--transition-fast);
}
.navbar__mobile-link:hover { color: var(--color-text-primary); background: var(--color-surface); }

.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 768px) {
  .navbar__links { display: none; }
  .navbar__mobile-toggle { display: flex; }
  .navbar__explore-btn { display: none; }
}
</style>
