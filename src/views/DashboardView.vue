<template>
  <div class="dashboard">
    <div class="dashboard__hero">
      <div class="container">
        <div class="badge badge--accent"><LayoutDashboard :size="12" /> My Dashboard</div>
        <h1 class="dashboard__title">
          Welcome back, <span class="gradient-text">Learner</span> 👋
        </h1>
        <p class="dashboard__sub">Track your progress and keep the momentum going.</p>
      </div>
    </div>

    <div class="container section">
      <!-- Stats Overview -->
      <div class="dashboard__stats">
        <div class="dashboard__stat-card glass">
          <BookOpen :size="22" class="stat-icon stat-icon--accent" />
          <div>
            <div class="stat-value">{{ enrolled.length }}</div>
            <div class="stat-label">Enrolled Courses</div>
          </div>
        </div>
        <div class="dashboard__stat-card glass">
          <TrendingUp :size="22" class="stat-icon stat-icon--cyan" />
          <div>
            <div class="stat-value">{{ avgProgress }}%</div>
            <div class="stat-label">Average Progress</div>
          </div>
        </div>
        <div class="dashboard__stat-card glass">
          <Award :size="22" class="stat-icon stat-icon--success" />
          <div>
            <div class="stat-value">{{ completed }}</div>
            <div class="stat-label">Completed</div>
          </div>
        </div>
        <div class="dashboard__stat-card glass">
          <Clock :size="22" class="stat-icon stat-icon--warning" />
          <div>
            <div class="stat-value">{{ totalHours }}h</div>
            <div class="stat-label">Total Learning</div>
          </div>
        </div>
      </div>

      <!-- Enrolled Courses -->
      <div class="dashboard__section">
        <h2 class="dashboard__section-title">
          <BookOpen :size="20" /> My Courses
        </h2>

        <div v-if="enrolled.length > 0" class="dashboard__courses">
          <div v-for="course in enrolled" :key="course.id" class="dashboard__course-row glass">
            <div class="dashboard__course-emoji">{{ course.image }}</div>
            <div class="dashboard__course-info">
              <div class="dashboard__course-title">{{ course.title }}</div>
              <div class="dashboard__course-instructor">{{ course.instructor }}</div>
              <div class="dashboard__course-progress-row">
                <div class="dashboard__progress-bar">
                  <div
                    class="dashboard__progress-fill"
                    :style="{ width: store.getCourseProgress(course.id) + '%' }"
                  ></div>
                </div>
                <span class="dashboard__progress-pct gradient-text">
                  {{ store.getCourseProgress(course.id) }}%
                </span>
              </div>
            </div>
            <div class="dashboard__course-actions">
              <span class="badge" :class="progressBadge(course.id)">
                {{ progressLabel(course.id) }}
              </span>
              <RouterLink :to="`/courses/${course.id}`" class="btn btn--primary btn--sm">
                <PlayCircle :size="14" />
                {{ store.getCourseProgress(course.id) === 0 ? 'Start' : 'Continue' }}
              </RouterLink>
            </div>
          </div>
        </div>

        <div v-else class="dashboard__empty glass">
          <span class="dashboard__empty-icon">📚</span>
          <h3>No courses yet!</h3>
          <p>You haven't enrolled in any courses. Start learning today.</p>
          <RouterLink to="/courses" class="btn btn--primary" id="explore-courses-btn">
            <BookOpen :size="16" /> Explore Courses
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpen, TrendingUp, Award, Clock, PlayCircle, LayoutDashboard } from 'lucide-vue-next'
import { useCoursesStore } from '../stores/courses'

export default {
  name: 'DashboardView',
  components: { BookOpen, TrendingUp, Award, Clock, PlayCircle, LayoutDashboard },
  setup() {
    const store = useCoursesStore()
    return { store }
  },
  computed: {
    enrolled() { return this.store.enrolledCourses },
    avgProgress() {
      if (!this.enrolled.length) return 0
      const total = this.enrolled.reduce((sum, c) => sum + this.store.getCourseProgress(c.id), 0)
      return Math.round(total / this.enrolled.length)
    },
    completed() { return this.enrolled.filter((c) => this.store.getCourseProgress(c.id) >= 100).length },
    totalHours() {
      return this.enrolled
        .reduce((sum, c) => {
          const hrs = parseFloat(c.duration)
          return sum + (isNaN(hrs) ? 0 : hrs * (this.store.getCourseProgress(c.id) / 100))
        }, 0)
        .toFixed(1)
    },
  },
  methods: {
    progressBadge(id) {
      const p = this.store.getCourseProgress(id)
      if (p >= 100) return 'badge--success'
      if (p > 0) return 'badge--cyan'
      return 'badge--accent'
    },
    progressLabel(id) {
      const p = this.store.getCourseProgress(id)
      if (p >= 100) return 'Completed'
      if (p > 0) return 'In Progress'
      return 'Not Started'
    },
  },
}
</script>

<style scoped>
.dashboard__hero {
  padding: var(--space-12) 0 var(--space-10);
  background: linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%);
  border-bottom: 1px solid var(--color-border);
}
.dashboard__title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  margin: var(--space-3) 0 var(--space-2);
}
.dashboard__sub { color: var(--color-text-secondary); }

.dashboard__stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}
.dashboard__stat-card {
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  transition: var(--transition-base);
}
.dashboard__stat-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}
.stat-icon {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}
.stat-icon--accent { background: rgba(99,102,241,0.15); color: var(--color-accent-hover); }
.stat-icon--cyan { background: rgba(6,182,212,0.12); color: var(--color-accent-2); }
.stat-icon--success { background: rgba(16,185,129,0.12); color: var(--color-success); }
.stat-icon--warning { background: rgba(245,158,11,0.12); color: var(--color-warning); }
.stat-value { font-size: 1.6rem; font-weight: 800; color: var(--color-text-primary); }
.stat-label { font-size: 0.78rem; color: var(--color-text-secondary); margin-top: 2px; }

.dashboard__section-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: var(--space-6);
}

.dashboard__courses { display: flex; flex-direction: column; gap: var(--space-4); }
.dashboard__course-row {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
}
.dashboard__course-row:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
}
.dashboard__course-emoji { font-size: 2.5rem; text-align: center; }
.dashboard__course-title {
  font-weight: 700;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  margin-bottom: var(--space-1);
}
.dashboard__course-instructor {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}
.dashboard__course-progress-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.dashboard__progress-bar {
  flex: 1;
  height: 6px;
  background: var(--color-surface-2);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.dashboard__progress-fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}
.dashboard__progress-pct { font-size: 0.8rem; font-weight: 700; white-space: nowrap; }
.dashboard__course-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-3);
}

.dashboard__empty {
  text-align: center;
  padding: var(--space-20) var(--space-8);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}
.dashboard__empty-icon { font-size: 3.5rem; }
.dashboard__empty h3 { font-size: 1.4rem; font-weight: 700; }
.dashboard__empty p { color: var(--color-text-secondary); max-width: 340px; }

@media (max-width: 768px) {
  .dashboard__course-row {
    grid-template-columns: 48px 1fr;
  }
  .dashboard__course-actions {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
