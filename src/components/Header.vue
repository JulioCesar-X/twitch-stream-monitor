<template>
  <nav
    :class="{ scrolled: isScrolled }"
    class="navbar navbar-dark bg-dark fixed-top"
    aria-label="Main navigation of Twitch Stream Monitor"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Twitch Stream Monitor</a>
      <input
        v-model="streamStore.searchQuery"
        type="text"
        class="search-box"
        placeholder="🔍 Search streamer..."
      />
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useStreamStore } from "@/store/index.js";

export default {
  setup() {
    const isScrolled = ref(false);
    const streamStore = useStreamStore();

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isScrolled, streamStore };
  },
};
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease-in-out;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scrolled {
  background: rgba(0, 0, 0, 0.85);
  padding: 10px 0;
}

.search-box {
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  background: #222;
  color: white;
  text-align: center;
  outline: none;
  transition: 0.3s;
}

.search-box:focus {
  background: #333;
}


@media (max-width: 768px) {
  .navbar {
    padding: 10px 0;
  }

  .scrolled {
    padding: 8px 0;
  }

  .search-box {
    max-width: 200px;
    font-size: 12px;
  }
}
</style>
