<template>
  <div class="skeleton-card">
    <div class="skeleton-card__header">
      <div class="skeleton skeleton--emoji"></div>
      <div class="skeleton skeleton--badge"></div>
    </div>
    <div class="skeleton-card__body">
      <div class="skeleton skeleton--title"></div>
      <div class="skeleton skeleton--title skeleton--short"></div>
      <div class="skeleton skeleton--meta"></div>
      <div class="skeleton skeleton--tags">
        <div class="skeleton skeleton--tag"></div>
        <div class="skeleton skeleton--tag"></div>
        <div class="skeleton skeleton--tag"></div>
      </div>
    </div>
    <div class="skeleton-card__footer">
      <div class="skeleton skeleton--price"></div>
      <div class="skeleton skeleton--badge"></div>
    </div>
  </div>
</template>

<script>
export default { name: 'SkeletonCard' }
</script>

<style scoped>
.skeleton {
  background: linear-gradient(90deg,
    var(--color-surface) 25%,
    var(--color-surface-2) 50%,
    var(--color-surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
  border-radius: var(--radius-sm);
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.skeleton-card__header {
  padding: var(--space-6) var(--space-5) var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--color-border);
}
.skeleton--emoji  { width: 44px; height: 44px; border-radius: var(--radius-md); }
.skeleton--badge  { width: 80px; height: 24px; border-radius: var(--radius-full); }

.skeleton-card__body {
  flex: 1;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.skeleton--title  { height: 16px; width: 85%; }
.skeleton--short  { width: 55%; }
.skeleton--meta   { height: 12px; width: 70%; }
.skeleton--tags   { display: flex; gap: var(--space-2); }
.skeleton--tag    { height: 22px; width: 70px; border-radius: var(--radius-full); }

.skeleton-card__footer {
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skeleton--price { width: 60px; height: 20px; }
</style>
