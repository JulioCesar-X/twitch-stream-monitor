import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

// Initialize Pinia
const pinia = createPinia();

// Create Vue App
const app = createApp(App);

// Use Pinia and Router
app.use(pinia);
app.use(router);

// Initialize AOS
AOS.init();

// Mount App
app.mount("#app");

// GSAP fade-in effect
gsap.from("body", { opacity: 0, duration: 1.5 });
