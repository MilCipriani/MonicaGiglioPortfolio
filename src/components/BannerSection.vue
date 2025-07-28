<script setup lang="ts">
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();
</script>

<template>
    <div class="section">
        <div class="text">
            <h2>{{ t('sections.bannerSection.h1') }}</h2>
            <h2><em>{{  t('sections.bannerSection.em') }}</em></h2>
        </div>
        <a href="#contacts">
            <Button rounded :label="t('sections.bannerSection.button')" class="button"></Button>
        </a>
        
    </div>
</template>

<style scoped>

.section{
    border-radius: 5rem;
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(@/assets/gabbiano.jpg);
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
    padding: 0 1rem;
}

.text{
    color: var(--white);
    width: 30rem;
    text-align: center;
}

h2 {
    margin: 2rem 0;
}

.text em {
    font-weight: 700;
}

.button {
    margin-top: 6rem;
}

@media (max-width:950px) {
    .button {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
}

@media (max-width: 768px) {
    .text{
        width: 100%;
        margin-top: 5rem;
    }
    .button {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
}
</style>