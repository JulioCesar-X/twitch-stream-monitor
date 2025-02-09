<template>
  <div class="stream-card">
    <div class="stream-header">
      <div class="avatar-wrapper">
        <img 
          :src="avatarUrl" 
          :alt="`Profile picture of ${stream.name}`" 
          class="stream-avatar"
          @error="handleAvatarError"
        />
      </div>
      <div>
        <h5 class="stream-name">{{ stream.name }}</h5>
      </div>
    </div>

    <div class="stream-info">
      <p class="stream-status">
        <strong>Status:</strong>
        <span :class="stream.isLive ? 'live' : 'offline'">
          {{ stream.isLive ? '🔴 Live' : '⚫ Offline' }}
        </span>
      </p>
      <p v-if="stream.isLive" class="stream-game">
        🎮 <strong>Game:</strong> {{ stream.game }}
      </p>
      <p v-if="stream.isLive" class="stream-viewers">
        👀 <strong>Viewers:</strong> {{ stream.viewers }}
      </p>
      <p v-if="stream.isLive" class="stream-title">
        📝 <strong>Title:</strong> {{ stream.title }}
      </p>
    </div>

    <a :href="stream.url" target="_blank" class="btn-watch">
      <img :src="twitchIcon" alt="Twitch logo" class="icon" />
      Watch on Twitch
    </a>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: {
    stream: Object,
  },
  setup(props) {
    const BASE_URL = "https://twitch-proxy.freecodecamp.rocks/twitch-api/users/";
    
    const twitchIcon = ref(new URL('@/assets/twitch-icon.svg', import.meta.url).href);
    const defaultAvatar = ref(new URL('@/assets/default-avatar.png', import.meta.url).href);
    const avatarUrl = ref(defaultAvatar.value);

    const fetchUserAvatar = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${props.stream.name}`);
        
        if (response.data.logo) {
          avatarUrl.value = response.data.logo;
        } else {
          console.warn(`⚠️ No avatar found for ${props.stream.name}. Using default.`);
          avatarUrl.value = defaultAvatar.value;
        }
      } catch (error) {
        console.error(`❌ Failed to fetch avatar for ${props.stream.name}:`, error);
        avatarUrl.value = defaultAvatar.value;
      }
    };

    const handleAvatarError = () => {
      avatarUrl.value = defaultAvatar.value;
    };

    onMounted(fetchUserAvatar);

    return { twitchIcon, avatarUrl, handleAvatarError };
  },
};
</script>

<style scoped>
.stream-card {
  background: linear-gradient(145deg, #1e1e1e, #222);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  width: 100%;
  max-width: 350px;
}

.stream-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.avatar-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #9147ff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
}

.stream-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.stream-name {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
}

.stream-info {
  width: 100%;
  text-align: left;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.stream-status {
  font-size: 16px;
  margin: 8px 0;
}

.live {
  color: red;
  font-weight: bold;
}

.offline {
  color: gray;
}

.btn-watch {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #9147ff;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: bold;
  width: 100%;
  justify-content: center;
  font-size: 16px;
  border: 2px solid transparent;
}

.btn-watch:hover {
  background: #772ce8;
  border: 2px solid white;
}

.icon {
  width: 22px;
}

@media (max-width: 768px) {
  .stream-card {
    max-width: 100%;
  }
}
</style>
