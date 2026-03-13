<template>
  <Teleport to="body">
    <TransitionGroup name="toast" tag="div" class="toast-container">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast"
        :class="`toast--${toast.type}`"
      >
        <component :is="iconFor(toast.type)" :size="18" class="toast__icon" />
        <div class="toast__content">
          <div class="toast__title">{{ toast.title }}</div>
          <div v-if="toast.message" class="toast__message">{{ toast.message }}</div>
        </div>
        <button class="toast__close" @click="remove(toast.id)">
          <X :size="14" />
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script>
import { CheckCircle, AlertCircle, Info, X } from 'lucide-vue-next'
import { useToastStore } from '../../stores/toast'

export default {
  name: 'ToastNotifications',
  components: { CheckCircle, AlertCircle, Info, X },
  setup() {
    const toastStore = useToastStore()
    return {
      toasts: toastStore.toasts,
      remove: toastStore.remove,
    }
  },
  methods: {
    iconFor(type) {
      return { success: 'CheckCircle', error: 'AlertCircle', info: 'Info' }[type] || 'Info'
    },
  },
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-lg);
  min-width: 280px;
  max-width: 380px;
  pointer-events: all;
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
}

.toast--success { border-left: 3px solid var(--color-success); }
.toast--error   { border-left: 3px solid #ef4444; }
.toast--info    { border-left: 3px solid var(--color-accent); }

.toast__icon { flex-shrink: 0; margin-top: 1px; }
.toast--success .toast__icon { color: var(--color-success); }
.toast--error   .toast__icon { color: #ef4444; }
.toast--info    .toast__icon { color: var(--color-accent-hover); }

.toast__content { flex: 1; }
.toast__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-primary);
}
.toast__message {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.toast__close {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 2px;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
  flex-shrink: 0;
}
.toast__close:hover { color: var(--color-text-primary); background: rgba(255,255,255,0.08); }

/* Transitions */
.toast-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from   { opacity: 0; transform: translateX(60px) scale(0.9); }
.toast-leave-to     { opacity: 0; transform: translateX(60px); }
.toast-move         { transition: transform 0.3s ease; }
</style>
