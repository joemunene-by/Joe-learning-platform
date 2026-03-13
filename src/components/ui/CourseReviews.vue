<template>
  <div class="reviews-section">
    <h2 class="reviews__title">
      <MessageSquare :size="20" /> Student Reviews
    </h2>
    <div class="reviews__summary">
      <div class="reviews__avg">
        <span class="reviews__avg-number gradient-text">{{ course.rating }}</span>
        <div class="reviews__stars">
          <Star v-for="i in 5" :key="i" :size="20"
            :fill="i <= Math.round(course.rating) ? 'currentColor' : 'none'"
            style="color: var(--color-warning)" />
        </div>
        <span class="reviews__avg-label">Course Rating</span>
      </div>
      <div class="reviews__bars">
        <div v-for="n in [5,4,3,2,1]" :key="n" class="reviews__bar-row">
          <span class="reviews__bar-label">{{ n }} ★</span>
          <div class="reviews__bar-bg">
            <div class="reviews__bar-fill" :style="{ width: barWidth(n) + '%' }"></div>
          </div>
          <span class="reviews__bar-pct">{{ barWidth(n) }}%</span>
        </div>
      </div>
    </div>

    <div class="reviews__list">
      <div v-for="review in reviews" :key="review.id" class="review-card glass">
        <div class="review-card__header">
          <div class="review-card__avatar" :style="{ background: review.avatarColor }">
            {{ review.initials }}
          </div>
          <div>
            <div class="review-card__name">{{ review.name }}</div>
            <div class="review-card__meta">
              <span class="review-card__stars">
                <Star v-for="i in review.rating" :key="i" :size="12" fill="currentColor" style="color:var(--color-warning)" />
              </span>
              <span class="review-card__date">{{ review.date }}</span>
            </div>
          </div>
        </div>
        <p class="review-card__body">{{ review.text }}</p>
        <div class="review-card__helpful">
          <ThumbsUp :size="13" /> {{ review.helpful }} found this helpful
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Star, MessageSquare, ThumbsUp } from 'lucide-vue-next'

const REVIEWS_POOL = [
  { id: 1, name: 'Alex M.', initials: 'AM', avatarColor: 'linear-gradient(135deg,#6366f1,#8b5cf6)', rating: 5, date: 'Feb 2026', helpful: 42, text: 'Incredibly well-structured course. The instructor explains complex concepts in a way that actually sticks. I went from confused to confident in just 3 weeks.' },
  { id: 2, name: 'Sofia R.', initials: 'SR', avatarColor: 'linear-gradient(135deg,#06b6d4,#0891b2)', rating: 5, date: 'Jan 2026', helpful: 38, text: 'Best course I have taken on this platform. Real-world projects and clear examples made all the difference. Already using these skills at work.' },
  { id: 3, name: 'James K.', initials: 'JK', avatarColor: 'linear-gradient(135deg,#10b981,#059669)', rating: 4, date: 'Jan 2026', helpful: 27, text: 'Solid content and great pacing. Some sections could go deeper, but overall this is excellent value. Would definitely recommend.' },
  { id: 4, name: 'Priya N.', initials: 'PN', avatarColor: 'linear-gradient(135deg,#f59e0b,#d97706)', rating: 5, date: 'Dec 2025', helpful: 55, text: 'The project-based approach is perfect. By the end I had a real portfolio piece to show recruiters. This course literally helped me land a new job.' },
]

export default {
  name: 'CourseReviews',
  components: { Star, MessageSquare, ThumbsUp },
  props: {
    course: { type: Object, required: true },
  },
  data() {
    return { reviews: REVIEWS_POOL }
  },
  methods: {
    barWidth(stars) {
      const map = { 5: 68, 4: 20, 3: 8, 2: 3, 1: 1 }
      return map[stars] || 0
    },
  },
}
</script>

<style scoped>
.reviews__title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: var(--space-6);
}
.reviews__summary {
  display: flex;
  gap: var(--space-8);
  align-items: center;
  padding: var(--space-6);
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
}
.reviews__avg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  min-width: 100px;
}
.reviews__avg-number { font-size: 3.5rem; font-weight: 900; line-height: 1; }
.reviews__stars { display: flex; gap: 2px; }
.reviews__avg-label { font-size: 0.78rem; color: var(--color-text-secondary); }
.reviews__bars { flex: 1; display: flex; flex-direction: column; gap: var(--space-2); }
.reviews__bar-row { display: flex; align-items: center; gap: var(--space-3); font-size: 0.8rem; color: var(--color-text-secondary); }
.reviews__bar-label { width: 28px; text-align: right; white-space: nowrap; }
.reviews__bar-bg { flex: 1; height: 6px; background: var(--color-surface-2); border-radius: var(--radius-full); overflow: hidden; }
.reviews__bar-fill { height: 100%; background: var(--color-warning); border-radius: var(--radius-full); transition: width 0.5s ease; }
.reviews__bar-pct { width: 32px; }

.reviews__list { display: flex; flex-direction: column; gap: var(--space-4); }
.review-card { border-radius: var(--radius-lg); padding: var(--space-5); }
.review-card__header { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3); }
.review-card__avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.review-card__name { font-weight: 600; font-size: 0.9rem; color: var(--color-text-primary); }
.review-card__meta { display: flex; align-items: center; gap: var(--space-2); margin-top: 2px; }
.review-card__stars { display: flex; gap: 1px; }
.review-card__date { font-size: 0.75rem; color: var(--color-text-muted); }
.review-card__body { font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.65; margin-bottom: var(--space-3); }
.review-card__helpful { display: flex; align-items: center; gap: var(--space-1); font-size: 0.75rem; color: var(--color-text-muted); }
</style>
