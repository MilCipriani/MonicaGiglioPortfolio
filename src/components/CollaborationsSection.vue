<script setup lang="ts">
import { ref, computed } from "vue";

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

import Greco from '@/assets/Greco.jpg';
import Lucci from '@/assets/Lucci.jpg';
import Damaschi from '@/assets/Damaschi.jpg';
import Casano from '@/assets/Casano.jpg';
import Zocca from '@/assets/Zocca.jpg';
import Bianchini from '@/assets/Bianchini.jpeg';
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();

interface Product {
    name: string;
    image: string;
    text: string;

}

interface ResponsiveOption {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

const products = computed( () =>[
    {
        name: t('sections.collabSection.collab1.name'),
        image: Greco,
        text: t('sections.collabSection.collab1.text')
    },
    {
        name: t('sections.collabSection.collab2.name'),
        image: Lucci,
        text: t('sections.collabSection.collab2.text')
    },
    {
        name: "Gloria Damaschi",
        image: Damaschi,
        text: t('sections.collabSection.collab3.text')
    },
    {
        name: "Ilenia Casano",
        image: Casano,
        text: t('sections.collabSection.collab4.text')
    },
    {
        name: "Prisca Zocca",
        image: Zocca,
        text: t('sections.collabSection.collab5.text')
    },
    {
        name: "Daniele Bianchini",
        image: Bianchini,
        text: t('sections.collabSection.collab6.text')
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
</script>

<template>
    <div class="section" id="collab">
        
        <div class="title">
            <h1>{{  t('sections.collabSection.title') }}</h1>
            <Divider></Divider>
        </div>
        <div class="text">
            <h2>{{  t('sections.collabSection.h2') }}</h2>
            <h3>{{  t('sections.collabSection.h3') }}</h3>            
        </div>
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="card">
                    <h3 style="text-transform: uppercase;">{{ slotProps.data.name }}</h3>
                    <div class="image-container">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name"/>
                        <Button icon="pi pi-arrow-right" size="large" rounded class="button"></Button>
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
    gap: 3rem;
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
    color: var(--light-blue);
}

.title h1{
    white-space: nowrap;
    padding-right: 2rem;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text h2{
    margin: 1rem auto;
    width: 30rem;
}

.text h3 {
    max-width: 45rem;
    text-align: center;
}

.card{
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
    gap: 1rem;
    margin-bottom: 2rem;
}

h2 {
    text-align: center;
}

p {
    text-align: justify;
    font-weight: 600;
}

.image-container {
    position: relative;
}

img{
    border-radius: 100%;
    width: 15rem;
    height: 15rem;
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
        padding: 3rem 1rem 5rem 1rem;
    }
    .title {
        padding: 0 2rem;
    }
    .card p {
        width: 20rem;
    }
    .card{
        width: 75vw;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 0 2rem 0;
        margin-bottom: 0;

    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 1050px) {
    .section {
        height: auto;
    }
}
</style>