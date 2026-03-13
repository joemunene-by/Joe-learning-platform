<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          ⚡ Joe<span class="gradient-text">Learn</span>
        </div>
        <p class="footer__tagline">Accelerate your career with world-class, expert-led courses.</p>
      </div>
      <div class="footer__links">
        <div class="footer__col">
          <h4 class="footer__col-title">Platform</h4>
          <RouterLink to="/courses" class="footer__link">Browse Courses</RouterLink>
          <RouterLink to="/dashboard" class="footer__link">My Dashboard</RouterLink>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Company</h4>
          <a href="#" class="footer__link">About Us</a>
          <a href="#" class="footer__link">Careers</a>
          <a href="#" class="footer__link">Blog</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Support</h4>
          <a href="#" class="footer__link">Help Center</a>
          <a href="#" class="footer__link">Contact</a>
          <a href="#" class="footer__link">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p>© 2026 JoeLearn. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style scoped>
.footer {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}
.footer__inner {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--space-16);
  padding: var(--space-16) var(--space-6);
}
.footer__logo {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
.footer__tagline {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 280px;
}
.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}
.footer__col { display: flex; flex-direction: column; gap: var(--space-3); }
.footer__col-title {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--space-1);
}
.footer__link {
  text-decoration: none;
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  transition: var(--transition-fast);
}
.footer__link:hover { color: var(--color-accent-hover); }
.footer__bottom {
  border-top: 1px solid var(--color-border);
  padding: var(--space-5) var(--space-6);
}
.footer__bottom p {
  font-size: 0.82rem;
  color: var(--color-text-muted);
}
@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr; gap: var(--space-10); }
  .footer__links { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .footer__links { grid-template-columns: 1fr; }
}
</style>
