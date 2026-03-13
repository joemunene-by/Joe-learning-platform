<template>
  <div class="not-found">
    <div class="not-found__content">
      <div class="not-found__code gradient-text">404</div>
      <h1 class="not-found__title">Page Not Found</h1>
      <p class="not-found__sub">
        Looks like this page went on a learning adventure and never came back.
      </p>
      <div class="not-found__actions">
        <RouterLink to="/" class="btn btn--primary btn--lg">
          <Home :size="18" /> Go Home
        </RouterLink>
        <RouterLink to="/courses" class="btn btn--secondary btn--lg">
          <BookOpen :size="18" /> Browse Courses
        </RouterLink>
      </div>
    </div>
    <div class="not-found__orb not-found__orb--1"></div>
    <div class="not-found__orb not-found__orb--2"></div>
  </div>
</template>

<script>
import { Home, BookOpen } from 'lucide-vue-next'
export default {
  name: 'NotFoundView',
  components: { Home, BookOpen },
}
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.not-found__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-8);
}
.not-found__code {
  font-size: clamp(6rem, 20vw, 10rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
}
.not-found__title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text-primary);
}
.not-found__sub {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  max-width: 400px;
  line-height: 1.6;
}
.not-found__actions { display: flex; gap: var(--space-3); flex-wrap: wrap; justify-content: center; }
.not-found__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}
.not-found__orb--1 {
  width: 500px; height: 500px;
  background: rgba(99,102,241,0.1);
  top: -100px; right: -100px;
}
.not-found__orb--2 {
  width: 400px; height: 400px;
  background: rgba(6,182,212,0.08);
  bottom: -100px; left: -100px;
}
</style>
