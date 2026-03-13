<template>
  <RouterLink :to="`/courses/${course.id}`" class="course-card">
    <div class="course-card__header" :style="{ '--course-color': course.color }">
      <span class="course-card__emoji">{{ course.image }}</span>
      <span class="badge badge--accent">{{ course.category }}</span>
    </div>
    <div class="course-card__body">
      <h3 class="course-card__title">{{ course.title }}</h3>
      <p class="course-card__instructor">
        <UserCircle :size="14" />
        {{ course.instructor }}
      </p>
      <div class="course-card__meta">
        <span class="course-card__meta-item">
          <Star :size="13" fill="currentColor" /> {{ course.rating }}
        </span>
        <span class="course-card__meta-item">
          <Users :size="13" /> {{ formatStudents(course.students) }}
        </span>
        <span class="course-card__meta-item">
          <Clock :size="13" /> {{ course.duration }}
        </span>
      </div>
      <div class="course-card__tags">
        <span v-for="tag in course.tags.slice(0, 3)" :key="tag" class="course-card__tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="course-card__footer">
      <span class="course-card__price">${{ course.price }}</span>
      <span class="badge" :class="levelBadge">{{ course.level }}</span>
    </div>
  </RouterLink>
</template>

<script>
import { Star, Clock, Users, UserCircle } from 'lucide-vue-next'

export default {
  name: 'CourseCard',
  components: { Star, Clock, Users, UserCircle },
  props: {
    course: { type: Object, required: true },
  },
  computed: {
    levelBadge() {
      return {
        Beginner: 'badge--success',
        Intermediate: 'badge--cyan',
        Advanced: 'badge--warning',
      }[this.course.level] || 'badge--accent'
    },
  },
  methods: {
    formatStudents(n) {
      return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n
    },
  },
}
</script>

<style scoped>
.course-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition-base);
  position: relative;
  cursor: pointer;
}

.course-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--course-color, #6366f1), transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.course-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-lg), 0 0 30px var(--color-accent-hover);
}
.course-card:hover::before { opacity: 1; }

.course-card__header {
  padding: var(--space-6) var(--space-5) var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: linear-gradient(135deg, rgba(var(--course-color, #6366f1), 0.08), transparent);
  border-bottom: 1px solid var(--color-border);
}

.course-card__emoji {
  font-size: 2.2rem;
  line-height: 1;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.course-card__body {
  flex: 1;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.course-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-card__instructor {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 0.82rem;
  color: var(--color-text-secondary);
}

.course-card__meta {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.course-card__meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.78rem;
  color: var(--color-text-secondary);
}

.course-card__meta-item:first-child {
  color: var(--color-warning);
}

.course-card__tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: auto;
}

.course-card__tag {
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 500;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

.course-card__footer {
  padding: var(--space-4) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
}

.course-card__price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-primary);
}
</style>
