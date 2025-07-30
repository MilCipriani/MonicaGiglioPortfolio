<script setup lang="ts">
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();
</script>

<template>
  <div class="section">
    <video
      class="background-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="@/assets/skyC.mp4" type="video/mp4">
    </video>
    
    <div class="content-overlay">
      <p class="tagline">{{ t('sections.darkBannerSection.p') }}</p>
      <p class="tagline">{{ t('sections.darkBannerSection.p2') }}</p>
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  max-height: 960px;
  border-radius: 0 0 5rem 5rem;
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
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
}

.logo{
  width: 14rem;
  height: 14rem;
}

.tagline{
  font-size: 2rem;
  color: var(--white);
  text-align: center;
  font-weight: 300;
}

@media (max-width: 1050px) {
  .hero-section {
    max-height: 600px;
  }

  .tagline {
    font-size: 1.5rem;
  }
}
</style>