<template>
  <div class="video-player">
    <div class="video-player__frame-wrap">
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`"
        class="video-player__iframe"
        title="Course Video"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
      ></iframe>
    </div>
    <div class="video-player__meta">
      <span class="video-player__emoji">{{ courseEmoji }}</span>
      <div class="video-player__info">
        <div class="video-player__label">Now Playing</div>
        <div class="video-player__lesson">{{ lessonTitle }}</div>
      </div>
      <a
        :href="`https://www.youtube.com/watch?v=${videoId}`"
        target="_blank"
        rel="noopener noreferrer"
        class="video-player__yt-link"
        title="Open on YouTube"
      >
        <ExternalLink :size="15" />
      </a>
    </div>
  </div>
</template>

<script>
import { ExternalLink } from 'lucide-vue-next'

export default {
  name: 'VideoPlayer',
  components: { ExternalLink },
  emits: ['close'],
  props: {
    videoId:     { type: String, default: 'dQw4w9WgXcQ' },
    courseEmoji: { type: String, default: '🎓' },
    lessonTitle: { type: String, default: 'Introduction' },
  },
}
</script>

<style scoped>
.video-player {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: #000;
}

.video-player__frame-wrap {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.video-player__iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
}

.video-player__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-2);
  border-top: 1px solid var(--color-border);
}

.video-player__emoji { font-size: 1.4rem; flex-shrink: 0; }

.video-player__info { flex: 1; min-width: 0; }
.video-player__label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-hover);
  font-weight: 600;
}
.video-player__lesson {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.video-player__yt-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
  flex-shrink: 0;
}
.video-player__yt-link:hover {
  border-color: #ff0000;
  color: #ff0000;
}
</style>
