<template>
  <footer class="footer" aria-label="Twitch Stream Monitor Footer">
    <p>© {{ currentYear }} Twitch Stream Monitor. All rights reserved.</p>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentYear = ref(new Date().getFullYear());
    return { currentYear };
  },
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  background: #9147ff;
  color: white;
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer {
    font-size: 12px;
    padding: 15px;
  }
}
</style>
