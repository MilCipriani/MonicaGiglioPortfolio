<script setup lang="ts">
import { ref } from "vue";

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

import Greco from '@/assets/Greco.jpg';
import Lucci from '@/assets/Lucci.jpg';
import Damaschi from '@/assets/Damaschi.jpg';
import Casano from '@/assets/Casano.jpg';
import Zocca from '@/assets/Zocca.jpg';
import Bianchini from '@/assets/Bianchini.jpeg';

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

const products = ref<Product[]>([
    {
        name: "Dott.ssa Monica Greco",
        image: Greco,
        text: "Medico Chirurgo, Fisiatra, Ricercatrice, Medico di Segnale e Docente specializzata in Geriatria e Medicina Fisica e della riabilitazione"
    },
    {
        name: "Dott.ssa Gabriella Lucci",
        image: Lucci,
        text: "Psicologa Clinica, della Salute e Neurofisiologica INPP Italia e 'Provider Level Stimolazione uditiva Individualizzata Johansen (JISA)'. Esperta in disturbi dell’età evolutiva, anomalie dello sviluppo neuromotorio, disturbi dell’apprendimento."
    },
    {
        name: "Gloria Damaschi",
        image: Damaschi,
        text: "Aromaterapeuta e ideatrice dell'Aromaterapeuta del Terreno®, Docente e Vicepresidente per l'Italia della Asociación Profesional Española de Naturopatía y Bioterapia (APENB)."
    },
    {
        name: "Ilenia Casano",
        image: Casano,
        text: "Dottoressa in SC. Della Formazione, Peer alto contatto e Docente. Peer Supporter Alto Contatto e Baywearing, Holistic Babywearing (stretching dei meridiani), esperta in allattamento e pratiche preconcezionali, operatrice tecnica metamorfica. Aromaterapeuta e Coach alimentare A.M.A."
    },
    {
        name: "Prisca Zocca",
        image: Zocca,
        text: "Family Coach, Counselor e facilitatore di Costellazioni Familiari, nonché professionista certificata in Kinesiologia e Tecnica Metamorfica."
    },
    {
        name: "Daniele Bianchini",
        image: Bianchini,
        text: "Preparatore Fisico e dottore in scienze motorie e sportive. Preparatore Fisico Nazionale presso la FIP, dal 2017 si occupa del Wellness per finalità non agonistiche, con sedute e percorsi One to One."
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
    <div class="section">
        
        <div class="title">
            <h1>COLLABORATORI</h1>
            <Divider></Divider>
        </div>
        <div class="text">
            <h2>Credo nella forza della sinergia</h2>
            <h3>Per questo collaboro con altri professionisti della salute, offrendo un approccio integrato e personalizzato al benessere.</h3>            
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
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 4rem 5rem 4rem;
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
}

@media (max-width: 768px) {
    .section {
        padding: 3rem 0 5rem 0;
        margin-bottom: 0;

    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 500px) {
    .section {
        height: auto;
    }
}
</style>