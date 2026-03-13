<template>
  <div class="quiz-section">
    <h2 class="quiz__title">
      <Brain :size="20" /> Week {{ weekNumber }} Knowledge Check
    </h2>
    <p class="quiz__subtitle">Test your understanding of this week's material.</p>

    <div v-if="!submitted">
      <div v-for="(q, qi) in questions" :key="qi" class="quiz__question">
        <div class="quiz__q-text">{{ qi + 1 }}. {{ q.text }}</div>
        <div class="quiz__options">
          <label
            v-for="(opt, oi) in q.options"
            :key="oi"
            class="quiz__option"
            :class="{ 'quiz__option--selected': answers[qi] === oi }"
          >
            <input
              type="radio"
              :name="`q-${qi}`"
              :value="oi"
              v-model="answers[qi]"
              hidden
            />
            <span class="quiz__option-dot" :class="{ 'quiz__option-dot--selected': answers[qi] === oi }"></span>
            {{ opt }}
          </label>
        </div>
      </div>

      <button
        class="btn btn--primary"
        :disabled="answers.length < questions.length || answers.some(a => a === undefined)"
        @click="submitQuiz"
      >
        Submit Answers <ChevronRight :size="16" />
      </button>
    </div>

    <div v-else class="quiz__result glass">
      <div class="quiz__result-score" :class="passed ? 'quiz__result-score--pass' : 'quiz__result-score--fail'">
        {{ passed ? '🏆' : '📚' }}
      </div>
      <div class="quiz__result-title">{{ passed ? 'Great work!' : 'Keep studying!' }}</div>
      <div class="quiz__result-pct gradient-text">{{ score }}% correct</div>
      <p class="quiz__result-sub">{{ passed ? 'You passed this week\'s quiz.' : 'Review the material and try again.' }}</p>
      <div v-if="!passed" class="quiz__breakdown">
        <div v-for="(q, qi) in questions" :key="qi" class="quiz__breakdown-item"
          :class="answers[qi] === q.correct ? 'quiz__breakdown--ok' : 'quiz__breakdown--wrong'">
          <span>{{ qi + 1 }}. {{ q.text }}</span>
          <CheckCircle v-if="answers[qi] === q.correct" :size="14" />
          <XCircle v-else :size="14" />
        </div>
      </div>
      <button class="btn btn--secondary btn--sm" @click="retry">Retry Quiz</button>
    </div>
  </div>
</template>

<script>
import { Brain, ChevronRight, CheckCircle, XCircle } from 'lucide-vue-next'

export default {
  name: 'QuizSection',
  components: { Brain, ChevronRight, CheckCircle, XCircle },
  emits: ['quiz-passed'],
  props: {
    weekNumber: { type: Number, default: 1 },
    quizData: { type: Array, default: null },
  },
  data() {
    const defaultQuestions = [
      { text: 'What is the primary benefit of async/await over callbacks?', options: ['Faster execution', 'Cleaner, more readable code', 'Better browser support', 'Smaller bundle size'], correct: 1 },
      { text: 'Which of these is a pure function?', options: ['function add(a,b){ x++; return a+b }', 'function add(a,b){ return a+b }', 'function add(a,b){ return Math.random() }', 'None of the above'], correct: 1 },
      { text: 'What does the Vue Composition API primarily improve?', options: ['Template syntax', 'Logic reuse and organization', 'CSS scoping', 'Router performance'], correct: 1 },
    ]
    return {
      questions: this.quizData || defaultQuestions,
      answers: [],
      submitted: false,
      score: 0,
    }
  },
  computed: {
    passed() { return this.score >= 70 },
  },
  methods: {
    submitQuiz() {
      let correct = 0
      this.questions.forEach((q, i) => {
        if (this.answers[i] === q.correct) correct++
      })
      this.score = Math.round((correct / this.questions.length) * 100)
      this.submitted = true
      if (this.passed) this.$emit('quiz-passed')
    },
    retry() {
      this.answers = []
      this.submitted = false
      this.score = 0
    },
  },
}
</script>

<style scoped>
.quiz-section { display: flex; flex-direction: column; gap: var(--space-5); }
.quiz__title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 1.1rem;
  font-weight: 700;
}
.quiz__subtitle { font-size: 0.88rem; color: var(--color-text-secondary); }

.quiz__question { margin-bottom: var(--space-5); }
.quiz__q-text {
  font-size: 0.93rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
.quiz__options { display: flex; flex-direction: column; gap: var(--space-2); }
.quiz__option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  cursor: pointer;
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  transition: var(--transition-fast);
}
.quiz__option:hover { border-color: var(--color-accent); color: var(--color-text-primary); background: rgba(99,102,241,0.05); }
.quiz__option--selected { border-color: var(--color-accent); color: var(--color-text-primary); background: rgba(99,102,241,0.1); }
.quiz__option-dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  flex-shrink: 0;
  transition: var(--transition-fast);
}
.quiz__option-dot--selected { border-color: var(--color-accent); background: var(--color-accent); }

.btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }

.quiz__result {
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
}
.quiz__result-score { font-size: 3rem; }
.quiz__result-title { font-size: 1.2rem; font-weight: 700; color: var(--color-text-primary); }
.quiz__result-pct { font-size: 2rem; font-weight: 900; }
.quiz__result-score--pass .quiz__result-pct { color: var(--color-success); }
.quiz__result-sub { font-size: 0.88rem; color: var(--color-text-secondary); }
.quiz__breakdown { width: 100%; display: flex; flex-direction: column; gap: var(--space-2); }
.quiz__breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
}
.quiz__breakdown--ok { background: rgba(16,185,129,0.08); color: var(--color-success); }
.quiz__breakdown--wrong { background: rgba(239,68,68,0.08); color: #ef4444; }
</style>
