<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import HistorySection from './components/HistorySection.vue';
import BannerSection from './components/BannerSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import CollaborationsSection from './components/CollaborationsSection.vue';
import CoursesSection from './components/CoursesSection.vue';
import ContactsSection from './components/ContactsSection.vue';

</script>

<template>
  <main>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <HistorySection></HistorySection>
    <BannerSection></BannerSection>
    <ServicesSection></ServicesSection>
    <div class="collab-wrapper">
      <CollaborationsSection></CollaborationsSection>
    </div>
    
    <div class="courses-wrapper">
      <CoursesSection></CoursesSection>
    </div>
    <ContactsSection></ContactsSection>
  </main>
</template>

<style scoped>
.collab-wrapper {
  position: relative;
  z-index: 1;
}
.courses-wrapper {
  margin-top: -4.5rem;
  position: relative;
}
</style>
