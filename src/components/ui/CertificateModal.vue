<template>
  <Teleport to="body">
    <Transition name="cert-modal">
      <div v-if="show" class="cert-overlay" @click.self="$emit('close')">
        <div class="cert-modal" id="certificate-modal">
          <button class="cert-close" @click="$emit('close')"><X :size="18" /></button>
          <div class="cert-inner">
            <div class="cert-seal">🏆</div>
            <div class="cert-issuer">JoeLearn · Certificate of Completion</div>
            <h2 class="cert-headline">This certifies that</h2>
            <div class="cert-name gradient-text">Learner</div>
            <p class="cert-body">
              has successfully completed the course
            </p>
            <div class="cert-course">{{ courseTitle }}</div>
            <div class="cert-meta">
              <span>{{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
              <span>·</span>
              <span>With Distinction</span>
            </div>
            <div class="cert-divider"></div>
            <button class="btn btn--primary" @click="download">
              <Download :size="16" /> Download Certificate
            </button>
          </div>
          <!-- Decorative corners -->
          <div class="cert-corner cert-corner--tl"></div>
          <div class="cert-corner cert-corner--tr"></div>
          <div class="cert-corner cert-corner--bl"></div>
          <div class="cert-corner cert-corner--br"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { X, Download } from 'lucide-vue-next'

export default {
  name: 'CertificateModal',
  components: { X, Download },
  emits: ['close'],
  props: {
    show: { type: Boolean, default: false },
    courseTitle: { type: String, default: 'Course' },
  },
  methods: {
    download() {
      // In a real app this would generate a PDF
      alert('In a production app this would generate and download a PDF certificate! 🎓')
    },
  },
}
</script>

<style scoped>
.cert-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
}

.cert-modal {
  position: relative;
  background: linear-gradient(135deg, #0f1623, #151e2e);
  border: 1px solid rgba(99,102,241,0.3);
  border-radius: var(--radius-xl);
  padding: var(--space-16) var(--space-12);
  max-width: 560px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 80px rgba(99,102,241,0.25), var(--shadow-lg);
  overflow: hidden;
}

.cert-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  border-radius: var(--radius-sm);
  padding: var(--space-2);
  cursor: pointer;
  transition: var(--transition-fast);
}
.cert-close:hover { color: var(--color-text-primary); border-color: var(--color-accent); }

.cert-inner { display: flex; flex-direction: column; align-items: center; gap: var(--space-4); }
.cert-seal { font-size: 4rem; filter: drop-shadow(0 0 20px rgba(245,158,11,0.5)); }
.cert-issuer {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent-hover);
  font-weight: 600;
}
.cert-headline {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}
.cert-name {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.cert-body { color: var(--color-text-secondary); font-size: 0.95rem; }
.cert-course {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  padding: var(--space-3) var(--space-6);
  border: 1px solid rgba(99,102,241,0.25);
  border-radius: var(--radius-md);
  background: rgba(99,102,241,0.08);
}
.cert-meta {
  display: flex;
  gap: var(--space-3);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.cert-divider {
  width: 60%;
  height: 1px;
  background: var(--color-border);
  margin: var(--space-2) 0;
}

/* Decorative corner ornaments */
.cert-corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: rgba(99,102,241,0.3);
  border-style: solid;
}
.cert-corner--tl { top: 16px; left: 16px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
.cert-corner--tr { top: 16px; right: 16px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
.cert-corner--bl { bottom: 16px; left: 16px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
.cert-corner--br { bottom: 16px; right: 16px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

.cert-modal-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.cert-modal-leave-active { transition: all 0.2s ease; }
.cert-modal-enter-from, .cert-modal-leave-to { opacity: 0; transform: scale(0.85); }
</style>
