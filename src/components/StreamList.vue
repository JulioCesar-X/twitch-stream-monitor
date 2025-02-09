<template>
  <div class="container">
    <h2 class="title" data-aos="zoom-in">📡 Live Streamers</h2>

    <div v-if="streamStore.loading" class="loading">🔄 Loading streams...</div>
    <div v-else-if="streamStore.error" class="error-message">⚠️ {{ streamStore.error }}</div>

    <div v-else class="streams-grid">
      <StreamCard
        v-for="stream in filteredStreams"
        :key="stream.id"
        :stream="stream"
      />
    </div>

    <div v-if="filteredStreams.length === 0 && !streamStore.loading && !streamStore.error" class="no-results">
      ⚠️ No matching streams found.
    </div>

    <div class="twitch-all">
      <a href="https://www.twitch.tv/directory/all" target="_blank" class="btn-all">
        🌍 View All Streams on Twitch
      </a>
    </div>
  </div>
</template>

<script>
import { useStreamStore } from "@/store/index.js";
import StreamCard from "@/components/StreamCard.vue";
import { onMounted, computed } from "vue";

export default {
  components: { StreamCard },
  setup() {
    const streamStore = useStreamStore();

    onMounted(() => {
      streamStore.fetchStreams();
    });

    const filteredStreams = computed(() => {
      if (!streamStore.searchQuery) {
        return streamStore.streams; // ✅ Show full list when no search is applied
      }
      return streamStore.streams.filter(stream =>
        stream.name.toLowerCase().includes(streamStore.searchQuery.toLowerCase())
      );
    });

    return { streamStore, filteredStreams };
  }
};
</script>

<style scoped>
.streams-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
}

.no-results {
  text-align: center;
  font-size: 18px;
  color: #b3b3b3;
  margin-top: 20px;
}

.twitch-all {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.btn-all {
  background: linear-gradient(90deg, #9147ff, #772ce8);
  color: white;
  padding: 18px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid transparent;
}

.btn-all:hover {
  background: linear-gradient(90deg, #772ce8, #9147ff);
  transform: scale(1.1);
  border: 2px solid white;
}
</style>
