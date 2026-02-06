<script setup lang="ts">
import { ref, computed } from "vue";

import Fignon from '@/assets/Fignon.jpg';
import Greco from '@/assets/Greco.jpg';
import Wulhfard from '@/assets/Wulhfard.jpg';
import Lucci from '@/assets/Lucci.jpg';
import Damaschi from '@/assets/Damaschi.jpg';
import Casano from '@/assets/Casano.jpg';
import Zocca from '@/assets/Zocca.jpg';
import Bianchini from '@/assets/Bianchini.jpeg';
import Locarini from '@/assets/Locarini.jpg';
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();

interface ResponsiveOption {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

const products = computed( () =>[
    {
        name: t('sections.collabSection.collab0.name'),
        image: Fignon,
        alt: t('sections.collabSection.collab0.alt'),
        text: t('sections.collabSection.collab0.text'),
        link: 'https://www.alessiafignon.it/'
    },
    {
        name: t('sections.collabSection.collab1.name'),
        image: Greco,
        alt: t('sections.collabSection.collab1.alt'),
        text: t('sections.collabSection.collab1.text'),
        link: 'https://metatraining.it/'
    },
    {
        name: t('sections.collabSection.collab7.name'),
        image: Wulhfard,
        alt: t('sections.collabSection.collab7.alt'),
        text: t('sections.collabSection.collab7.text')
    },
    {
        name: t('sections.collabSection.collab2.name'),
        image: Lucci,
        alt: t('sections.collabSection.collab2.alt'),
        text: t('sections.collabSection.collab2.text')
    },
    {
        name: "Gloria Damaschi",
        image: Damaschi,
        alt: t('sections.collabSection.collab3.alt'),
        text: t('sections.collabSection.collab3.text'),
        link: 'https://www.gloriadamaschi.it/'
    },
    {
        name: "Ilenia Casano",
        image: Casano,
        alt: t('sections.collabSection.collab4.alt'),
        text: t('sections.collabSection.collab4.text')
    },
    {
        name: "Prisca Zocca",
        image: Zocca,
        alt: t('sections.collabSection.collab5.alt'),
        text: t('sections.collabSection.collab5.text')
    },
    {
        name: "Daniele Bianchini",
        image: Bianchini,
        alt: t('sections.collabSection.collab6.alt'),
        text: t('sections.collabSection.collab6.text'),
        link: 'https://www.instagram.com/danielebianchini_atwellness/'
    },
    {
        name: "Aessandra Locarini",
        image: Locarini,
        alt: t('sections.collabSection.collab8.alt'),
        text: t('sections.collabSection.collab8.text'),
    },
]);

const responsiveOptions = ref<ResponsiveOption[]>([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '1000px',
        numVisible: 1,
        numScroll: 1
    },

]);
</script>

<template>
    <div class="section" id="collab">
        
        <div class="title">
            <h1>{{  t('sections.collabSection.title') }}</h1>
            <Divider class="divider"></Divider>
        </div>
        <div class="text">
            <h2>{{  t('sections.collabSection.h2') }}</h2>
            <h3>{{  t('sections.collabSection.h3') }}</h3>            
        </div>
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" >
            <template #item="slotProps">
                <div class="card">
                    <h3 style="text-transform: uppercase;">{{ slotProps.data.name }}</h3>
                    <div class="image-container">
                        <img :src="slotProps.data.image" :alt="slotProps.data.alt"/>
                        <a v-if="slotProps.data.link" :href="slotProps.data.link" target="_blank" rel="noopener noreferrer">
                            <Button icon="pi pi-arrow-right" size="large" rounded class="button" v-bind:aria-label="t('sections.aria.ariaLabelMoreinfo')"></Button>
                        </a>
                    </div>
                    
                    <p>{{ slotProps.data.text }}</p>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style scoped>

.section{
    min-height: 100vh;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 9rem 4rem 5rem 4rem;
    --p-carousel-indicator-active-background: var(--blue);
    --p-carousel-indicator-background: var(--light-blue);

    background-image: url(@/assets/collaborationsBackground.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 5rem 5rem;
}

.title{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: var(--light-blue);
}

.title h1{
    flex-shrink: 0;
    white-space: nowrap;
    padding-right: 2rem;
    margin: 0;
}

.divider {
    flex: 1;
    min-width: 5rem;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}

.text h2{
    margin: 1rem 0;
    max-width: 30rem;
}

.text h3 {
    max-width: 45rem;
    text-align: center;
}

.card{
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h3 {
    text-align: center;
}

p {
    text-align: justify;
    font-weight: 600;
}

.image-container {
    position: relative;
    width: 100%;
    max-width: 20rem;
    align-self: center;
}

img{
    border-radius: 100%;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1rem solid var(--light-blue);
    object-fit: cover;
}

.button {
    position: absolute;
    bottom: 0;
    right: 2rem;
}


@media (max-width:950px) {
    .section {
        padding: 3rem 2rem 5rem 2rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 2rem 2rem 2rem;
        margin-bottom: 0;
    }
    img {
        border: 0.8rem solid var(--light-blue);

    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 1050px) {
    .section {
        height: auto;
    }
}
</style>