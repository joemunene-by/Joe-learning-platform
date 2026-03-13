<template>
  <div class="catalog">
    <div class="catalog__hero">
      <div class="container">
        <div class="badge badge--accent"><BookOpen :size="12" /> All Courses</div>
        <h1 class="catalog__title">Explore Our <span class="gradient-text">Course Catalog</span></h1>
        <p class="catalog__sub">{{ store.courses.length }} world-class courses to advance your skills.</p>
        <!-- Search & Filters -->
        <div class="catalog__controls">
          <div class="catalog__search">
            <Search :size="18" class="catalog__search-icon" />
            <input
              :value="searchInput"
              @input="onSearchInput"
              type="text"
              placeholder="Search courses, topics, instructors..."
              class="catalog__search-input"
              id="course-search"
            />
          </div>
          <div class="catalog__filters">
            <button
              v-for="cat in categories"
              :key="cat"
              class="catalog__filter-btn"
              :class="{ 'catalog__filter-btn--active': activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container section">
      <!-- Results count -->
      <div class="catalog__results-info">
        <span>Showing <strong>{{ filtered.length }}</strong> courses</span>
        <select v-model="sortBy" class="catalog__sort" id="catalog-sort">
          <option value="rating">Top Rated</option>
          <option value="students">Most Popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div class="courses-grid" v-if="filtered.length">
        <CourseCard v-for="course in sorted" :key="course.id" :course="course" />
      </div>
      <div v-else class="catalog__empty">
        <span class="catalog__empty-icon">🔍</span>
        <p>No courses found for <strong>"{{ search }}"</strong>.</p>
        <button @click="search = ''; activeCategory = 'All'" class="btn btn--secondary btn--sm">Clear Filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, BookOpen } from 'lucide-vue-next'
import { useCoursesStore } from '../stores/courses'
import CourseCard from '../components/ui/CourseCard.vue'

export default {
  name: 'CatalogView',
  components: { Search, BookOpen, CourseCard },
  setup() {
    const store = useCoursesStore()
    return { store }
  },
  data() {
    return {
      search: '',
      searchInput: '',
      activeCategory: 'All',
      sortBy: 'rating',
      debounceTimer: null,
    }
  },
  methods: {
    onSearchInput(e) {
      this.searchInput = e.target.value
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        this.search = this.searchInput
      }, 300)
    },
  },
  computed: {
    categories() {
      const cats = ['All', ...new Set(this.store.courses.map((c) => c.category))]
      return cats
    },
    filtered() {
      return this.store.courses.filter((c) => {
        const matchCat = this.activeCategory === 'All' || c.category === this.activeCategory
        const q = this.search.toLowerCase()
        const matchSearch =
          !q || c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q) || c.tags.some((t) => t.toLowerCase().includes(q))
        return matchCat && matchSearch
      })
    },
    sorted() {
      const list = [...this.filtered]
      if (this.sortBy === 'rating') return list.sort((a, b) => b.rating - a.rating)
      if (this.sortBy === 'students') return list.sort((a, b) => b.students - a.students)
      if (this.sortBy === 'price-asc') return list.sort((a, b) => a.price - b.price)
      if (this.sortBy === 'price-desc') return list.sort((a, b) => b.price - a.price)
      return list
    },
  },
}
</script>

<style scoped>
.catalog__hero {
  padding: var(--space-16) 0 var(--space-12);
  background: linear-gradient(180deg, rgba(99,102,241,0.07) 0%, transparent 100%);
  border-bottom: 1px solid var(--color-border);
}
.catalog__title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: var(--space-3) 0 var(--space-2);
}
.catalog__sub { color: var(--color-text-secondary); margin-bottom: var(--space-8); }

.catalog__controls { display: flex; flex-direction: column; gap: var(--space-4); }
.catalog__search {
  position: relative;
  max-width: 600px;
}
.catalog__search-icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
}
.catalog__search-input {
  width: 100%;
  padding: var(--space-4) var(--space-4) var(--space-4) calc(var(--space-4) + 28px);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  transition: var(--transition-fast);
}
.catalog__search-input::placeholder { color: var(--color-text-muted); }
.catalog__search-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-glow);
}

.catalog__filters {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
.catalog__filter-btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: var(--transition-fast);
}
.catalog__filter-btn:hover { border-color: var(--color-accent); color: var(--color-accent-hover); }
.catalog__filter-btn--active {
  background: rgba(99,102,241,0.15);
  border-color: var(--color-accent);
  color: var(--color-accent-hover);
  font-weight: 600;
}

.catalog__results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-6);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
.catalog__sort {
  padding: var(--space-2) var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  cursor: pointer;
}
.catalog__sort:focus { outline: none; border-color: var(--color-accent); }

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
}

.catalog__empty {
  text-align: center;
  padding: var(--space-20) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  color: var(--color-text-secondary);
}
.catalog__empty-icon { font-size: 3rem; }

@media (max-width: 768px) {
  .catalog__results-info { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
}
</style>
