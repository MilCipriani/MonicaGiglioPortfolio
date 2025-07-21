<script setup lang="ts">
import logo from '@/assets/logo.svg';
</script>

<template>
  <div class="hero-section">
    <video
      class="background-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="@/assets/HeroBackground.mp4" type="video/mp4">
    </video>
    
    <div class="content-overlay">
      <img :src="logo" alt="Logo" class="logo"/>
      <p class="tagline">La guarigione inizia dalla consapevolezza di sé</p>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 8rem;
  overflow: hidden;
  max-height: 960px;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center; /* Keeps center in focus when zooming in from phone*/
  z-index: -1;
  
}

.content-overlay {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 30rem;
}

.logo{
  width: 14rem;
  height: 14rem;
}

.tagline{
  font-size: 2rem;
  color: var(--white);
  text-align: center;
}

@media (max-width: 950px) {
  .hero-section {
    max-height: 600px;
  }
  
  .content-overlay {
    gap: 20rem;
  }

  .logo {
    width: 10rem;
    height: 10rem;
  }
  
  .tagline {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
    .hero-section {
        margin-top: 6rem;
    }
}
</style>