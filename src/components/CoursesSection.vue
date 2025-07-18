<script setup lang="ts">
import { ref } from "vue";

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';


interface Product {
    date: string;
    name: string;
    location: string;
    teachers: string;
    text: string;
    flyer?: string;
    duration: string;
}

interface ResponsiveOption {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

const products = ref<Product[]>([
    {
        date: '17-18 Ott 2025',
        name: 'Corso di riflessologia organica',
        location: 'Rivalta di Torino',
        teachers: 'Docente Monica Giglio',
        text: 'In questo corso imparerai come praticare la riflessologia plantare organica in piena autonomia con la massima efficacia. Questo tipo di riflessologia lavora direttamente sugli apparati e non sui meridiani.',
        duration: '2 incontri',
        flyer: 'string'
    },
    {
        date: '19 Ott 2025',
        name: 'Corso di tecnica metamorfica ',
        location: 'Rivalta di Torino',
        teachers: 'Docente Monica Giglio',
        text: 'Si complementa perfettamente con le terapie di medicina classica sia con i trattamenti di medicina olistica.',
        duration: '4 ore'
    },
    {
        date: '25 - 26 Apr 2026',
        name: 'Corso Volare Oltre',
        location: 'Rivalta di Torino',
        teachers: 'Docenti Monica Giglio, Prisca Zocca e Gloria Damaschi',
        text: 'Due giorni di seminario intensivo nella profondità di te stesso per ri-conoscerti e trasformare il tuo vissuto in ali per volare oltre.',
        duration: '2 incontri'
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

const getSeverity = (status: Product['location']): 'info' | 'warn' => {
    switch (status) {
        case 'Online':
            return 'info';
        default:
            return 'warn';
    }
};
</script>

<template>
    <div class="section">
        
        <div class="title">
            <h1>CORSI IN PROGRAMMAZIONE</h1>
            <Divider class="white-divider"></Divider>
        </div>

        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="card">
                    <span class="date"><i class="pi pi-calendar"></i><p>{{ slotProps.data.date }}</p></span>
                    <h2>{{ slotProps.data.name }}</h2>
                    <Tag :value="slotProps.data.location" :severity="getSeverity(slotProps.data.location)" class="tag"/>
                    <div class="text">
                        <p class="teachers">{{ slotProps.data.teachers }}</p>
                        <p>{{ slotProps.data.text }}</p>
                    </div>
                    <div class="card-footer">
                        <Button v-if="slotProps.data.flyer" icon="pi pi-download" class="flyer"> LOCANDINA</Button>
                        <span class="duration"><i class="pi pi-clock"></i><p>{{ slotProps.data.duration }}</p></span>
                    </div>
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
    padding: 5rem 4rem;
    --p-carousel-indicator-active-background: var(--blue);
    --p-carousel-indicator-background: var(--white);
    --p-carousel-indicator-list-padding: 4rem 0 0 0;

    background-image: url(@/assets/coursesBackground.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.title{
    width: 100%;
    display: flex;
    color: var(--white);
}

.title h1{
    white-space: nowrap;
    padding-right: 2rem;
}

.white-divider {
    --p-divider-border-color: var(--white);
}

.card{
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 22.5rem;
    height: 100%;
    padding: 1.5rem;
    margin-bottom: 3rem;
    border: 0.4rem solid var(--light-blue);
    border-radius: 3rem;
    background-color: var(--white);
}

.date {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
}

h2 {
    align-self: start;
    height: 4.5rem;
    margin-top: 1rem;
}

.tag {
    border-radius: 100rem;
    align-self: start;
    margin-top: 1rem;
}

.text {
    text-align: justify;
    margin-top: 2rem;
    margin-bottom: auto;
}

p {
    text-align: justify;
}

.teachers {
    margin-bottom: 1rem;
}

.card-footer {
    display: flex;
    width: 100%;
}

.flyer {
    width: 50%;
    justify-self: start;
    border-radius: 50rem;
}

.duration {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 50%;
    gap: 1rem;
    margin-left: auto;
}
</style>