<script setup lang="ts">
import { ref, computed } from "vue";

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';

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
    tag: 'Online' | 'In sede' | string;
    image: string;
    text: string;
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
        tag: "Online",
        image: soul,
        text: t('sections.servicesSection.service1.text'),
    },
    {
        id: 2,
        name: t('sections.servicesSection.service2.name'),
        tag: "Online",
        image: LumEss,
        text: t('sections.servicesSection.service2.text'),
    },
    {
        id: 3,
        name: t('sections.servicesSection.service3.name'),
        tag: "Online",
        image: LumVita,
        text: t('sections.servicesSection.service3.text'),
    },
    {
        id: 4,
        name: t('sections.servicesSection.service4.name'),
        tag: "In sede",
        image: metamorfica,
        text: t('sections.servicesSection.service4.text'),
    },
    {
        id: 5,
        name: t('sections.servicesSection.service5.name'),
        tag: "Online",
        image: albero,
        text: t('sections.servicesSection.service5.text'),
    },
    {
        id: 6,
        name: t('sections.servicesSection.service6.name'),
        tag: "In sede",
        image: RiflPlant,
        text: t('sections.servicesSection.service6.text'),
    },
]);

const responsiveOptions = ref<ResponsiveOption[]>([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
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

        default:
            return 'null';
    }
};
</script>

<template>
    <div class="section" id="services">
        <div class="title">
            <h1>{{  t('sections.servicesSection.title') }}</h1>
            <Divider></Divider>
        </div>
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="card">
                    <h2>{{ slotProps.data.name }}</h2>
                    <div class="image-container">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
                        <Button icon="pi pi-arrow-right" size="large" rounded class="button"></Button>
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
    gap: 5rem;
    padding: 9rem 4rem 5rem 4rem;
    --p-carousel-indicator-active-background: var(--blue);
    --p-carousel-indicator-background: var(--light-blue);
}

.title{
    width: 100%;
    display: flex;
    color: var(--light-blue);
    padding: 0 2rem;
}

.title h1{
    white-space: nowrap;
    padding-right: 2rem;
}

.card{
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 1rem;
    margin-bottom: 3rem;
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
}

img{
    border-radius: 100%;
    width: 20rem;
    height: 20rem;
    border: 1rem solid var(--light-blue);
    object-fit: cover;
}

.button {
    position: absolute;
    bottom: 0;
    right: 3rem;
}

.tag {
    border-radius: 100rem;
}


@media (max-width:950px) {
    .section {
        padding: 6rem 1rem 3rem 1rem;

    }
    .card p {
        width: 20rem;
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