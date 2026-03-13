<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__bg-glow"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="container hero__inner">
        <div class="hero__content">
          <div class="badge badge--accent hero__badge">
            <Sparkles :size="12" />
            Expert-Led Learning
          </div>
          <h1 class="hero__headline">
            Unlock Your
            <span class="gradient-text">Full Potential</span>
            With World-Class Courses
          </h1>
          <p class="hero__sub">
            Learn from industry experts at your own pace. From programming to design, build the skills that propel your career forward.
          </p>
          <div class="hero__cta">
            <RouterLink to="/courses" class="btn btn--primary btn--lg">
              <BookOpen :size="18" />
              Explore All Courses
            </RouterLink>
            <RouterLink to="/dashboard" class="btn btn--secondary btn--lg">
              My Dashboard
            </RouterLink>
          </div>
          <div class="hero__stats">
            <div class="hero__stat">
              <span class="hero__stat-value">{{ counters.courses }}+</span>
              <span class="hero__stat-label">Courses</span>
            </div>
            <div class="hero__stat-divider"></div>
            <div class="hero__stat">
              <span class="hero__stat-value">{{ counters.students }}k+</span>
              <span class="hero__stat-label">Students</span>
            </div>
            <div class="hero__stat-divider"></div>
            <div class="hero__stat">
              <span class="hero__stat-value">{{ counters.rating }}★</span>
              <span class="hero__stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>

        <!-- Hero Card Preview -->
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__card glass">
            <div class="hero__card-header">
              <span class="hero__card-emoji">🟨</span>
              <div>
                <div class="hero__card-title">Advanced JavaScript</div>
                <div class="hero__card-sub">by Sarah Thompson</div>
              </div>
            </div>
            <div class="hero__progress-label">
              <span>Lesson 4: Async Patterns</span>
              <span class="gradient-text">68%</span>
            </div>
            <div class="hero__progress-bar">
              <div class="hero__progress-fill" style="width: 68%"></div>
            </div>
            <div class="hero__card-meta">
              <span><Clock :size="12" /> 42h 30m</span>
              <span><Users :size="12" /> 18.4k students</span>
            </div>
          </div>
          <div class="hero__pill glass hero__pill--1">
            <TrendingUp :size="14" class="text-success" />
            <span>+240 enrolled today</span>
          </div>
          <div class="hero__pill glass hero__pill--2">
            <Star :size="14" style="color: var(--color-warning)" fill="currentColor" />
            <span>Top Rated 2026</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="section featured">
      <div class="container">
        <div class="section-header">
          <div class="badge badge--cyan">
            <Flame :size="12" />
            Popular Right Now
          </div>
          <h2 class="section-title">Featured <span class="gradient-text">Courses</span></h2>
          <p class="section-sub">Handpicked by our team for their exceptional quality and relevance.</p>
        </div>
        <div class="courses-grid">
          <template v-if="loading">
            <SkeletonCard v-for="n in 3" :key="n" />
          </template>
          <template v-else>
            <CourseCard v-for="course in featured" :key="course.id" :course="course" />
          </template>
        </div>
        <div class="section-cta">
          <RouterLink to="/courses" class="btn btn--secondary">
            View All Courses
            <ArrowRight :size="16" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why JoeLearn -->
    <section class="section why">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why <span class="gradient-text">JoeLearn</span>?</h2>
          <p class="section-sub">A learning experience built for the modern professional.</p>
        </div>
        <div class="why__grid">
          <div v-for="item in whyItems" :key="item.title" class="why__card glass">
            <div class="why__icon">{{ item.icon }}</div>
            <h3 class="why__title">{{ item.title }}</h3>
            <p class="why__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BookOpen, Sparkles, Star, Users, Clock, TrendingUp, Flame, ArrowRight } from 'lucide-vue-next'
import { useCoursesStore } from '../stores/courses'
import CourseCard from '../components/ui/CourseCard.vue'
import SkeletonCard from '../components/ui/SkeletonCard.vue'

export default {
  name: 'HomeView',
  components: { BookOpen, Sparkles, Star, Users, Clock, TrendingUp, Flame, ArrowRight, CourseCard, SkeletonCard },
  setup() {
    const store = useCoursesStore()
    return { featured: store.courses.slice(0, 3) }
  },
  data() {
    return {
      loading: true,
      counters: { courses: 0, students: 0, rating: 0 },
      targets: { courses: 6, students: 100, rating: 4.8 },
      whyItems: [
        { icon: '🎯', title: 'Expert Instructors', desc: 'Learn from seasoned professionals with real-world industry experience across every domain.' },
        { icon: '⚡', title: 'Learn at Your Pace', desc: 'Lifetime access to all course materials. Pick up exactly where you left off, anytime.' },
        { icon: '🏆', title: 'Recognized Certificates', desc: 'Earn shareable certificates upon completion to showcase your skills to future employers.' },
        { icon: '🤝', title: 'Community Support', desc: 'Join a thriving community of learners and get help on forums, live sessions, and peer reviews.' },
      ],
    }
  },
  mounted() {
    // Simulate load then trigger skeleton→content transition
    setTimeout(() => {
      this.loading = false
      this.$nextTick(() => this.animateCounters())
    }, 1200)
  },
  methods: {
    animateCounters() {
      const duration = 1800
      const steps = 60
      const interval = duration / steps
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const ease = 1 - Math.pow(1 - progress, 3)
        this.counters.courses = Math.round(this.targets.courses * ease)
        this.counters.students = Math.round(this.targets.students * ease)
        this.counters.rating = parseFloat((this.targets.rating * ease).toFixed(1))
        if (step >= steps) clearInterval(timer)
      }, interval)
    },
  },
}
</script>


<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space-20) 0;
  overflow: hidden;
}
.hero__bg-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  pointer-events: none;
}
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero__orb--1 {
  width: 400px; height: 400px;
  background: rgba(99, 102, 241, 0.15);
  top: -100px; right: 10%;
  animation: float 8s ease-in-out infinite;
}
.hero__orb--2 {
  width: 300px; height: 300px;
  background: rgba(6, 182, 212, 0.1);
  bottom: 0; left: 5%;
  animation: float 10s ease-in-out infinite reverse;
}
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero__content { display: flex; flex-direction: column; gap: var(--space-6); }
.hero__badge { align-self: flex-start; }
.hero__headline {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
}
.hero__sub {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 480px;
}
.hero__cta { display: flex; gap: var(--space-3); flex-wrap: wrap; }
.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding-top: var(--space-4);
}
.hero__stat { text-align: center; }
.hero__stat-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-text-primary);
}
.hero__stat-label {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
}

/* Hero Visual */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  padding: var(--space-8);
}
.hero__card {
  width: 320px;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  animation: float 6s ease-in-out infinite;
}
.hero__card-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.hero__card-emoji { font-size: 2.2rem; }
.hero__card-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text-primary);
}
.hero__card-sub {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
}
.hero__progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}
.hero__progress-bar {
  height: 6px;
  background: var(--color-surface-2);
  border-radius: var(--radius-full);
  overflow: hidden;
}
.hero__progress-fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
}
.hero__card-meta {
  display: flex;
  gap: var(--space-4);
  font-size: 0.78rem;
  color: var(--color-text-secondary);
}
.hero__card-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.hero__pill {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-primary);
  white-space: nowrap;
}
.hero__pill--1 { bottom: 20px; left: 0; }
.hero__pill--2 { top: 20px; right: 0; }

.text-success { color: var(--color-success); }

/* ---- Section Common ---- */
.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.section-sub {
  color: var(--color-text-secondary);
  font-size: 1rem;
  max-width: 500px;
}

/* ---- Featured ---- */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}
.section-cta {
  text-align: center;
  margin-top: var(--space-10);
}

/* ---- Why ---- */
.why { background: linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent); }
.why__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-5);
}
.why__card {
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: var(--transition-base);
}
.why__card:hover {
  border-color: var(--color-accent);
  transform: translateY(-3px);
}
.why__icon { font-size: 2rem; }
.why__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-primary);
}
.why__desc {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__visual { display: none; }
  .hero { min-height: auto; padding: var(--space-20) 0 var(--space-16); }
}
</style>
