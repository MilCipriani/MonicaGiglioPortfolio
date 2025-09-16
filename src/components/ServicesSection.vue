<script setup lang="ts">
import { ref, computed } from "vue";

import soul from '@/assets/soulCoach.jpg';
import LumEss from '@/assets/luminosaEssenza.jpg';
import LumVita from '@/assets/luminosaVita.jpg';
import metamorfica from '@/assets/metamorfica.jpg';
import albero from '@/assets/albero.jpg';
import RiflPlant from '@/assets/riflessologiaPlantareOrganica.jpg';
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();

interface Product {
    id: number;
    name: string;
    tag: string;
    image: string;
    alt: string;
    text: string;
    link?: string;
}

interface ResponsiveOption {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

const products = computed (() => [
    {
        id: 1,
        name: "SOUL COACHING",
        tag: t('sections.servicesSection.service1.tag'),
        image: soul,
        alt: t('sections.servicesSection.service1.alt'),
        text: t('sections.servicesSection.service1.text'),
        link: 'https://inlumine.es/it/services/coach-emozionale/'
    },
    {
        id: 2,
        name: t('sections.servicesSection.service2.name'),
        tag: t('sections.servicesSection.service2.tag'),
        image: LumEss,
        alt: t('sections.servicesSection.service2.alt'),
        text: t('sections.servicesSection.service2.text'),
        link: 'https://inlumine.es/it/services/luminosa-essenza/'
    },
    {
        id: 3,
        name: t('sections.servicesSection.service3.name'),
        tag: t('sections.servicesSection.service3.tag'),
        image: LumVita,
        alt: t('sections.servicesSection.service3.alt'),
        text: t('sections.servicesSection.service3.text'),
    },
    {
        id: 4,
        name: t('sections.servicesSection.service4.name'),
        tag: t('sections.servicesSection.service4.tag'),
        image: metamorfica,
        alt: t('sections.servicesSection.service4.alt'),
        text: t('sections.servicesSection.service4.text'),
        link: 'https://inlumine.es/it/event/corso-tecnica-metamorfica/'
    },
    {
        id: 5,
        name: t('sections.servicesSection.service5.name'),
        tag: t('sections.servicesSection.service5.tag'),
        image: albero,
        alt: t('sections.servicesSection.service5.alt'),
        text: t('sections.servicesSection.service5.text'),
        link: 'https://inlumine.es/it/services/decodificazione-epigenetica-dell-albero-genealogico/'
    },
    {
        id: 6,
        name: t('sections.servicesSection.service6.name'),
        tag: t('sections.servicesSection.service6.tag'),
        image: RiflPlant,
        alt: t('sections.servicesSection.service6.alt'),
        text: t('sections.servicesSection.service6.text'),
        link: 'https://inlumine.es/it/event/riflessologia-plantare/'
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

const getSeverity = (status: Product['tag']): 'info' | 'warn' | 'null' => {
    switch (status) {
        case 'Online':
            return 'info';

        case 'In sede':
            return 'warn';

        case 'Presencial':
            return 'warn';

        default:
            return 'null';
    }
};
</script>

<template>
    <div class="section" id="services">
        <div class="title">
            <h1>{{  t('sections.servicesSection.title') }}</h1>
            <Divider class="divider"></Divider>
        </div>
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" circular>
            <template #item="slotProps">
                <div class="card">
                    <h2>{{ slotProps.data.name }}</h2>
                    <div class="image-container">
                        <img :src="slotProps.data.image" :alt="slotProps.data.alt"/>
                        <a v-if="slotProps.data.link" :href="slotProps.data.link" target="_blank" rel="noopener noreferrer">
                            <Button icon="pi pi-arrow-right" size="large" rounded class="button" v-bind:aria-label="t('sections.aria.ariaLabelMoreinfo')"></Button>
                        </a>
                        
                    </div>
                    
                    <Tag :value="slotProps.data.tag" :severity="getSeverity(slotProps.data.tag)" class="tag"  icon="pi pi-map-marker"/>
                    <p>{{ slotProps.data.text }}</p>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style scoped>

.section{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 9rem 4rem 5rem 4rem;
    --p-carousel-indicator-active-background: var(--blue);
    --p-carousel-indicator-background: var(--light-blue);
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

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin: 0 1rem;
}

h2 {
    text-align: center;
    height: 4.5rem;
}

p {
    text-align: justify;
    max-width: 23rem;
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

.tag {
    border-radius: 100rem;
}


@media (max-width:950px) {
    .section {
        padding: 6rem 1rem 3rem 1rem;
    }
    .card p {
        max-width: 20rem;
    }
    .card {
        margin-bottom: 1rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 0 5rem 0;
    }
}
</style>