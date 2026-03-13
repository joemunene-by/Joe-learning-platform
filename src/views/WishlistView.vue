<template>
  <div class="wishlist-page">
    <div class="wishlist-page__hero">
      <div class="container">
        <div class="badge badge--accent"><Heart :size="12" /> My Wishlist</div>
        <h1 class="wishlist-page__title">Saved <span class="gradient-text">Courses</span></h1>
        <p class="wishlist-page__sub">{{ wishlisted.length }} course{{ wishlisted.length !== 1 ? 's' : '' }} saved for later.</p>
      </div>
    </div>
    <div class="container section">
      <div class="courses-grid" v-if="wishlisted.length">
        <CourseCard v-for="course in wishlisted" :key="course.id" :course="course" />
      </div>
      <div v-else class="wishlist-empty glass">
        <span style="font-size:3rem">💜</span>
        <h3>No saved courses yet</h3>
        <p>Browse the catalog and tap the bookmark icon to save courses here.</p>
        <RouterLink to="/courses" class="btn btn--primary"><BookOpen :size="16" /> Browse Courses</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { Heart, BookOpen } from 'lucide-vue-next'
import CourseCard from '../components/ui/CourseCard.vue'
import { useWishlistStore } from '../stores/wishlist'
import { useCoursesStore } from '../stores/courses'

export default {
  name: 'WishlistView',
  components: { Heart, BookOpen, CourseCard },
  setup() {
    const wishlistStore = useWishlistStore()
    const coursesStore = useCoursesStore()
    return { wishlistStore, coursesStore }
  },
  computed: {
    wishlisted() {
      return this.coursesStore.courses.filter((c) => this.wishlistStore.isWishlisted(c.id))
    },
  },
}
</script>

<style scoped>
.wishlist-page__hero {
  padding: var(--space-12) 0 var(--space-10);
  background: linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%);
  border-bottom: 1px solid var(--color-border);
}
.wishlist-page__title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  margin: var(--space-3) 0 var(--space-2);
}
.wishlist-page__sub { color: var(--color-text-secondary); }
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
}
.wishlist-empty {
  text-align: center;
  padding: var(--space-20) var(--space-8);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}
.wishlist-empty h3 { font-size: 1.4rem; font-weight: 700; }
.wishlist-empty p { color: var(--color-text-secondary); max-width: 340px; }
</style>
