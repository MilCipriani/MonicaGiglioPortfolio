<script setup lang="ts">
import { ref } from "vue";

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

const products = ref<Product[]>([
    {
        id: 1,
        name: "SOUL COACHING",
        tag: "Online",
        image: soul,
        text: "Quando ti senti esausto, spesso è perché non stai vivendo in piena verità con te stesso. Solo entrando in contatto con la tua essenza può emergere la verità dell’anima. Questo percorso ti aiuta a guardarti con sincerità, affrontare le tue paure, riconoscere le ombre e liberarti dagli schemi familiari che non ti appartengono più.",
    },
    {
        id: 2,
        name: "LUMINOSA ESSENZA",
        tag: "Online",
        image: LumEss,
        text: "Ti senti sopraffatto dalle emozioni o desideri approfondire la tua consapevolezza interiore? Un percorso creato per chi vuole esplorare e trasformare le proprie emozioni attraverso un approccio sinergico che unisce l'Aromaterapia del Terreno® e il Soul Coaching.",
    },
    {
        id: 3,
        name: "LUMINOSA VITA",
        tag: "Online",
        image: LumVita,
        text: "Nata per aiutare le famiglie a superare difficoltà legate alla comunicazione, gestione delle emozioni e ai conflitti.  L'obiettivo è creare relazioni più consapevoli e armoniose, dando a ciascuno le chiavi per affrontare le sfide quotidiane.",
    },
    {
        id: 4,
        name: "TECNICA METAMORFICA",
        tag: "In sede",
        image: metamorfica,
        text: "Il massaggio metamorfico è pensato per tutte quelle persone che sentono dentro sè dei blocchi inconsci, che non riescono a comprendere e che desiderano risolvere. La Tecnica Metamorfica si puo’ considerare il tocco delicato della potente forza trasformativa. Non basandosi sulla cura di specifici sintomi, è un eccezionale mezzo di trasformazione personale ed è adatta a tutti.",
    },
    {
        id: 5,
        name: "EPIGENETICA DELL'ALBERO GENEALOGICO",
        tag: "Online",
        image: albero,
        text: "Fare uno studio dell’albero genealogico equivale ad accedere all’inconscio e sciogliere programmi, patti, credenze e nodi ancestrali che nemmeno immaginiamo di avere, per poi riprogrammare il nostro 'dna emozionale'. Senti di ripetere la storia vissuta dal tuo antenato? Ti chiami con il nome di un tuo antenato e senti di portarne il peso? Vuoi saperne di più sul tuo albero genealogico?",
    },
    {
        id: 6,
        name: "RIFLESSOLOGIA PLANTARE",
        tag: "In sede",
        image: RiflPlant,
        text: "Il piede è la base del nostro incedere nel mondo e riassume in sé tutto l’organismo umano. La riflessologia plantare è una tecnica che che sfrutta la sollecitazione di aree specifiche del piede per ristabilire l’equilibrio del corpo. ",
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
    <div class="section">
        <div class="title">
            <h1>SERVIZI</h1>
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
                    
                    <Tag :value="slotProps.data.tag" :severity="getSeverity(slotProps.data.tag)" class="tag"/>
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
    padding: 5rem 4rem;
    --p-carousel-indicator-active-background: var(--blue);
    --p-carousel-indicator-background: var(--light-blue);
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

.card{
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
    gap: 2rem;
    margin-bottom: 3rem;
}

h2 {
    text-align: center;
    height: 4.5rem;
}

p {
    text-align: justify;
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

</style>