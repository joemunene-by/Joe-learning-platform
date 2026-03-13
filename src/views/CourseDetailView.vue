<template>
  <div class="detail" v-if="course">
    <!-- Certificate Modal -->
    <CertificateModal :show="showCert" :courseTitle="course.title" @close="showCert = false" />

    <div class="detail__hero">
      <div class="container detail__hero-inner">
        <div class="detail__breadcrumb">
          <RouterLink to="/courses" class="detail__breadcrumb-link">
            <ArrowLeft :size="14" /> Courses
          </RouterLink>
          <span class="detail__breadcrumb-sep">›</span>
          <span>{{ course.category }}</span>
        </div>
        <div class="detail__meta-row">
          <span class="badge badge--accent">{{ course.category }}</span>
          <span class="badge" :class="levelBadge">{{ course.level }}</span>
        </div>
        <h1 class="detail__title">{{ course.title }}</h1>
        <p class="detail__desc">{{ course.description }}</p>
        <div class="detail__stats">
          <span class="detail__stat">
            <Star :size="16" fill="currentColor" style="color: var(--color-warning)" />
            <strong>{{ course.rating }}</strong> rating
          </span>
          <span class="detail__stat"><Users :size="16" />{{ course.students.toLocaleString() }} students</span>
          <span class="detail__stat"><Clock :size="16" />{{ course.duration }}</span>
          <span class="detail__stat"><GraduationCap :size="16" />{{ course.instructor }}</span>
        </div>
      </div>
    </div>

    <div class="container detail__body">
      <div class="detail__main">

        <!-- Active Learning Section -->
        <section v-if="isEnrolled" class="detail__section glass">
          <div class="detail__section-header">
            <h2 class="detail__section-title" style="margin-bottom: 0;"><PlayCircle :size="18" /> Continue Learning</h2>
            <div class="learning-tabs">
              <button class="learning-tab" :class="{ 'learning-tab--active': activeTab === 'video' }" @click="activeTab = 'video'">
                <PlayCircle :size="14" /> Video
              </button>
              <button class="learning-tab" :class="{ 'learning-tab--active': activeTab === 'notes' }" @click="activeTab = 'notes'">
                <FileText :size="14" /> Notes
              </button>
            </div>
          </div>

          <div v-show="activeTab === 'video'">
            <VideoPlayer
              :videoId="course.videoId"
              :courseEmoji="course.image"
              :lessonTitle="currentLesson"
              @progress-update="onVideoProgress"
              @close="() => {}"
            />
          </div>

          <div v-show="activeTab === 'notes'" class="lesson-notes-wrap">
            <div v-if="currentNotes" class="lesson-notes" v-html="currentNotes"></div>
            <div v-else class="lesson-notes-empty">
              <FileText :size="32" />
              <p>No text notes available for this specific lesson yet.</p>
              <button class="btn btn--sm btn--secondary" @click="activeTab = 'video'" style="margin-top: 12px">Switch to Video</button>
            </div>
          </div>
        </section>

        <!-- Syllabus -->
        <section class="detail__section glass">
          <h2 class="detail__section-title"><BookOpen :size="18" /> Course Syllabus</h2>
          <div class="syllabus">
            <div v-for="(item, i) in course.syllabus" :key="item.week" class="syllabus__item">
              <div class="syllabus__week">Week {{ item.week }}</div>
              <div class="syllabus__topic">
                <div class="syllabus__dot" :style="{ '--i': i }"></div>
                {{ item.topic }}
              </div>
            </div>
          </div>
        </section>

        <!-- Quiz -->
        <section v-if="isEnrolled" class="detail__section glass">
          <QuizSection :weekNumber="1" @quiz-passed="onQuizPassed" />
        </section>

        <!-- Tags (What You'll Learn) -->
        <section class="detail__section glass">
          <h2 class="detail__section-title"><Tag :size="18" /> What You'll Learn</h2>
          <div class="detail__tags">
            <span v-for="tag in course.tags" :key="tag" class="detail__tag">
              <Check :size="12" /> {{ tag }}
            </span>
          </div>
        </section>

        <!-- Reviews -->
        <section class="detail__section glass">
          <CourseReviews :course="course" />
        </section>
      </div>

      <!-- Sidebar CTA -->
      <aside class="detail__sidebar">
        <div class="detail__cta-card glass">
          <div class="detail__cta-emoji">{{ course.image }}</div>
          <div class="detail__price">${{ course.price }}</div>

          <div v-if="isEnrolled">
            <div class="detail__enrolled-badge">
              <CheckCircle :size="16" /> You're enrolled!
            </div>
            <div class="detail__progress-label">
              <span>Progress</span>
              <span class="gradient-text">{{ progress }}%</span>
            </div>
            <div class="detail__progress-bar">
              <div class="detail__progress-fill" :style="{ width: progress + '%' }"></div>
            </div>

            <!-- Completion Certificate Button -->
            <button v-if="progress >= 100" class="btn btn--primary btn--full" style="margin-top:12px" @click="showCert = true">
              <Award :size="16" /> View Certificate
            </button>
            <button v-else class="btn btn--secondary btn--full" style="margin-top: 12px" @click="scrollToPlayer">
              <PlayCircle :size="16" /> Continue Learning
            </button>
          </div>

          <div v-else>
            <button class="btn btn--primary btn--full btn--lg" @click="enroll" id="enroll-btn">
              <Zap :size="17" /> Enroll Now — ${{ course.price }}
            </button>
            <p class="detail__guarantee">
              <Shield :size="13" /> 30-day money-back guarantee
            </p>
          </div>

          <!-- Wishlist Button -->
          <button class="detail__wishlist-btn" :class="{ 'detail__wishlist-btn--active': isWishlisted }" @click="toggleWishlist">
            <Heart :size="16" :fill="isWishlisted ? 'currentColor' : 'none'" />
            {{ isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist' }}
          </button>

          <ul class="detail__includes">
            <li><Clock :size="14" /> {{ course.duration }} of content</li>
            <li><Users :size="14" /> {{ course.students.toLocaleString() }} enrolled</li>
            <li><Award :size="14" /> Certificate of completion</li>
            <li><Infinity :size="14" /> Lifetime access</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="detail__not-found container section">
    <h2>Course not found.</h2>
    <RouterLink to="/courses" class="btn btn--primary" style="margin-top:16px">Browse Courses</RouterLink>
  </div>
</template>

<script>
import {
  Star, Users, Clock, BookOpen, ArrowLeft, Check, CheckCircle,
  PlayCircle, Zap, Shield, Tag, GraduationCap, Award, Infinity, Heart, FileText
} from 'lucide-vue-next'
import { useCoursesStore } from '../stores/courses'
import { useWishlistStore } from '../stores/wishlist'
import { useToastStore } from '../stores/toast'
import VideoPlayer from '../components/ui/VideoPlayer.vue'
import QuizSection from '../components/ui/QuizSection.vue'
import CourseReviews from '../components/ui/CourseReviews.vue'
import CertificateModal from '../components/ui/CertificateModal.vue'

export default {
  name: 'CourseDetailView',
  components: {
    Star, Users, Clock, BookOpen, ArrowLeft, Check, CheckCircle,
    PlayCircle, Zap, Shield, Tag, GraduationCap, Award, Infinity, Heart, FileText,
    VideoPlayer, QuizSection, CourseReviews, CertificateModal,
  },
  props: ['id'],
  setup() {
    const coursesStore = useCoursesStore()
    const wishlistStore = useWishlistStore()
    const toastStore = useToastStore()
    return { coursesStore, wishlistStore, toastStore }
  },
  data() {
    return {
      showCert: false,
      activeTab: 'video',
    }
  },
  computed: {
    course() { return this.coursesStore.getCourseById(this.id) },
    isEnrolled() { return this.coursesStore.isEnrolled(this.id) },
    progress() { return this.coursesStore.getCourseProgress(this.id) },
    isWishlisted() { return this.wishlistStore.isWishlisted(this.id) },
    levelBadge() {
      return { Beginner: 'badge--success', Intermediate: 'badge--cyan', Advanced: 'badge--warning' }[this.course?.level] || 'badge--accent'
    },
    currentLesson() {
      const idx = Math.min(Math.floor(this.progress / 17), (this.course?.syllabus?.length || 1) - 1)
      return this.course?.syllabus?.[idx]?.topic || 'Introduction'
    },
    currentNotes() {
      const idx = Math.min(Math.floor(this.progress / 17), (this.course?.syllabus?.length || 1) - 1)
      return this.course?.syllabus?.[idx]?.notes || null
    },
  },
  methods: {
    enroll() {
      this.coursesStore.enroll(this.id)
      this.toastStore.success('Enrolled!', `You're now enrolled in "${this.course.title}"`)
    },
    toggleWishlist() {
      this.wishlistStore.toggle(this.id)
      const saved = this.wishlistStore.isWishlisted(this.id)
      this.toastStore.info(saved ? 'Saved to Wishlist' : 'Removed from Wishlist', this.course.title)
    },
    onVideoProgress(pct) {
      const current = this.coursesStore.getCourseProgress(this.id)
      if (pct > current) {
        this.coursesStore.updateProgress(this.id, pct)
        if (pct >= 100) {
          setTimeout(() => {
            this.toastStore.success('Course Completed! 🏆', 'Your certificate is ready.')
            this.showCert = true
          }, 600)
        }
      }
    },
    onQuizPassed() {
      this.toastStore.success('Quiz Passed! 🎉', 'Great work — keep going!')
      const newProgress = Math.max(this.progress, Math.min(100, this.progress + 20))
      this.coursesStore.updateProgress(this.id, newProgress)
    },
    scrollToPlayer() {
      document.querySelector('.video-player')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
}
</script>

<style scoped>
.detail__hero {
  padding: var(--space-12) 0;
  background: linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%);
  border-bottom: 1px solid var(--color-border);
}
.detail__hero-inner { display: flex; flex-direction: column; gap: var(--space-4); }
.detail__breadcrumb {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 0.85rem; color: var(--color-text-secondary);
}
.detail__breadcrumb-link {
  display: flex; align-items: center; gap: 4px;
  color: var(--color-accent-hover); text-decoration: none;
  transition: var(--transition-fast);
}
.detail__breadcrumb-link:hover { color: var(--color-text-primary); }
.detail__breadcrumb-sep { color: var(--color-text-muted); }
.detail__meta-row { display: flex; gap: var(--space-2); }
.detail__title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900; letter-spacing: -0.025em; max-width: 800px;
}
.detail__desc { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7; max-width: 700px; }
.detail__stats { display: flex; gap: var(--space-5); flex-wrap: wrap; }
.detail__stat {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 0.9rem; color: var(--color-text-secondary);
}

.detail__body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: var(--space-8);
  padding-top: var(--space-10);
  padding-bottom: var(--space-16);
  align-items: start;
}
.detail__main { display: flex; flex-direction: column; gap: var(--space-5); }
.detail__section { border-radius: var(--radius-lg); padding: var(--space-8); }
.detail__section-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--space-6);
  flex-wrap: wrap; gap: var(--space-3);
}
.detail__section-title {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 1.1rem; font-weight: 700; color: var(--color-text-primary);
}

/* Learning Tabs */
.learning-tabs {
  display: flex; background: rgba(0,0,0,0.2);
  padding: 4px; border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}
[data-theme="light"] .learning-tabs { background: rgba(0,0,0,0.04); }
.learning-tab {
  display: flex; align-items: center; gap: var(--space-1);
  padding: 6px 16px; border-radius: var(--radius-sm);
  border: none; background: transparent; color: var(--color-text-secondary);
  font-size: 0.85rem; font-weight: 600; font-family: var(--font-sans);
  cursor: pointer; transition: var(--transition-fast);
}
.learning-tab:hover { color: var(--color-text-primary); }
.learning-tab--active {
  background: var(--color-surface); color: var(--color-accent-hover);
  box-shadow: var(--shadow-sm); border: 1px solid var(--color-border);
}
[data-theme="light"] .learning-tab--active { color: var(--color-accent); background: #ffffff; }

/* Lesson Notes Rich Text */
.lesson-notes-wrap {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}
.lesson-notes-empty {
  display: flex; flex-direction: column; align-items: center;
  gap: var(--space-2); padding: var(--space-10) 0;
  color: var(--color-text-muted); text-align: center;
}
.lesson-notes :deep(h3) { font-size: 1.3rem; margin-bottom: var(--space-3); color: var(--color-text-primary); }
.lesson-notes :deep(h4) { font-size: 1.1rem; margin: var(--space-5) 0 var(--space-2); color: var(--color-text-primary); }
.lesson-notes :deep(p) { font-size: 0.95rem; line-height: 1.7; margin-bottom: var(--space-4); color: var(--color-text-secondary); }
.lesson-notes :deep(ul), .lesson-notes :deep(ol) {
  margin-left: var(--space-5); margin-bottom: var(--space-4);
  font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.7;
}
.lesson-notes :deep(li) { margin-bottom: var(--space-1); }
.lesson-notes :deep(pre) {
  background: rgba(0,0,0,0.3); padding: var(--space-4);
  border-radius: var(--radius-md); border: 1px solid var(--color-border);
  overflow-x: auto; margin-bottom: var(--space-4); font-size: 0.85rem;
}
[data-theme="light"] .lesson-notes :deep(pre) { background: #f1f5f9; }
.lesson-notes :deep(code) { font-family: monospace; color: var(--color-accent-hover); }
[data-theme="light"] .lesson-notes :deep(code) { color: var(--color-accent); }

.syllabus { display: flex; flex-direction: column; gap: var(--space-1); }
.syllabus__item {
  display: grid; grid-template-columns: 80px 1fr;
  gap: var(--space-4); align-items: center;
  padding: var(--space-3) var(--space-2);
  border-radius: var(--radius-md); transition: var(--transition-fast);
}
.syllabus__item:hover { background: rgba(255,255,255,0.03); }
.syllabus__week {
  font-size: 0.75rem; font-weight: 700;
  color: var(--color-accent-hover);
  text-transform: uppercase; letter-spacing: 0.05em;
}
.syllabus__topic {
  display: flex; align-items: center; gap: var(--space-3);
  font-size: 0.9rem; color: var(--color-text-secondary);
}
.syllabus__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--gradient-brand); flex-shrink: 0;
}

.detail__tags {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-3);
}
.detail__tag {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 0.88rem; color: var(--color-text-secondary);
  padding: var(--space-3); border-radius: var(--radius-md);
  background: rgba(255,255,255,0.03); border: 1px solid var(--color-border);
}
.detail__tag svg { color: var(--color-success); }

/* Sidebar */
.detail__sidebar { position: sticky; top: calc(var(--navbar-height) + 24px); }
.detail__cta-card {
  border-radius: var(--radius-xl); padding: var(--space-8);
  display: flex; flex-direction: column; gap: var(--space-5);
}
.detail__cta-emoji { font-size: 3rem; text-align: center; }
.detail__price { font-size: 2rem; font-weight: 900; color: var(--color-text-primary); text-align: center; }
.detail__enrolled-badge {
  display: flex; align-items: center; justify-content: center;
  gap: var(--space-2); padding: var(--space-3);
  border-radius: var(--radius-md);
  background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.25);
  color: var(--color-success); font-weight: 600; font-size: 0.9rem;
  margin-bottom: var(--space-4);
}
.detail__progress-label {
  display: flex; justify-content: space-between;
  font-size: 0.85rem; color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}
.detail__progress-bar {
  height: 8px; background: var(--color-surface-2);
  border-radius: var(--radius-full); overflow: hidden;
}
.detail__progress-fill {
  height: 100%; background: var(--gradient-brand);
  border-radius: var(--radius-full); transition: width 0.5s ease;
}
.detail__guarantee {
  display: flex; align-items: center; justify-content: center;
  gap: var(--space-1); font-size: 0.78rem; color: var(--color-text-muted);
  margin-top: var(--space-3); text-align: center;
}

.detail__wishlist-btn {
  display: flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  width: 100%; padding: var(--space-3);
  border-radius: var(--radius-md);
  background: transparent; border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-family: var(--font-sans); font-size: 0.88rem; font-weight: 500;
  cursor: pointer; transition: var(--transition-fast);
}
.detail__wishlist-btn:hover { border-color: #ec4899; color: #ec4899; }
.detail__wishlist-btn--active { border-color: #ec4899; color: #ec4899; background: rgba(236,72,153,0.08); }

.detail__includes {
  list-style: none; display: flex; flex-direction: column;
  gap: var(--space-3); padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}
.detail__includes li {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: 0.85rem; color: var(--color-text-secondary);
}

.detail__not-found { text-align: center; }

@media (max-width: 900px) {
  .detail__body { grid-template-columns: 1fr; }
  .detail__sidebar { position: static; }
}
</style>
