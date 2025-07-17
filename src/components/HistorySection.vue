<script setup lang="ts">
import { ref } from "vue";
import Divider from 'primevue/divider';
import img1 from '@/assets/RadiciVocazione.jpg';
import img2 from '@/assets/Ayurveda.jpg';
import img3 from '@/assets/logoInLumine.svg';
import img4 from '@/assets/Maiorca.jpg';
import img5 from '@/assets/Riconoscimenti.jpg';
import img6 from '@/assets/Oggi.jpg';
import geometry from '@/assets/Geometry.svg';

type Alignment = "left" | "right"

interface TimelineItem {
  h1: string;
  p: string;
  img: string;
  class: Alignment;
  geometry?: number;
  isLogo?: boolean;
}

const items = ref<TimelineItem[]>([
    { h1: 'Le radici della mia vocazione',
        p: 'La mia passione nasce fin da bambina, ispirata dall’amore di mio padre per la medicina. Crescendo, mi avvicino alle discipline olistiche, che mi offrono una nuova visione della salute: una visione che cerca la causa, non solo il sintomo. Questo mi porta a studiare psicosomatica e antropologia.',
        img: img1,
        class: "right",
        geometry: 1
    },
    { h1: 'Il cammino nella naturopatia e nell’ayurveda',
        p: 'Mi iscrivo a una scuola di naturopatia e, dopo tre anni di studio e due master, scopro una nuova passione: la medicina ayurvedica. Anni di formazione come operatrice ayurvedica e tanta pratica sul campo mi trasformano in uno strumento al servizio del benessere altrui.',
        img: img2,
        class: 'left'
    },
    { h1: 'Evoluzione personale e nascita di In Lumine',
        p: 'Parallelamente alla mia formazione professionale, porto avanti un profondo percorso personale. In questo processo nasce il sogno di In Lumine: un centro di formazione, consapevolezza ed evoluzione interiore. Il mio obiettivo è creare uno spazio dedicato alla trasformazione, dove corpo, mente e spirito possano ritrovare equilibrio.',
        img: img3,
        class: "right",
        isLogo: true
    },
    { h1: 'La svolta: Maiorca e nuovi strumenti',
        p: 'Nel 2011, una profonda crisi mi spinge a cambiare tutto. Scelgo di trasferirmi a Maiorca, luogo che ho sempre sentito come casa. Qui riscopro la natura, il tempo, la spiritualità. Continuo a formarmi con nuovi strumenti come la Bioneuroemozione, la biodescodificazione dell’albero genealogico e l’epigenetica.',
        img: img4,
        class: "left",
        geometry: 4
    },
    { h1: 'Collaborazioni e riconoscimenti',
        p: 'Negli anni, inizio a collaborare con medici e professionisti delle terapie olistiche tra Italia e Spagna. Dal 2022 faccio parte del team della Dott.ssa Monica Greco come Coach A.M.A. e dal 2024 sono docente presso la sua Accademia di Naturopatia Scientifica del Terreno. Nel 2023, con l’accreditamento all’Associazione Professionale Spagnola di Naturopatia e Bioterapia, nasce ufficialmente il Centro di Formazione In Lumine.',
        img: img5,
        class: "right"
    },
    { h1: 'Oggi',
        p: 'Il mio viaggio interiore continua. Oggi mi sento una persona completa, realizzata, al servizio di me stessa e degli altri, come Soul Coach. Accompagno le anime verso il loro benessere fisico, emotivo e spirituale con un metodo personale costruito negli anni attraverso esperienze, studio e pratica.',
        img: img6,
        class: "left"
    }
]);
</script>

<template>
    <div class="section">
        <div class="title">
            <h1>LA MIA STORIA</h1>
            <Divider></Divider>
        </div>

        <div class="timeline">
            <div v-for="item in items" :key="item.h1" >

                <!--Milestones with layout to the right-->
                <div v-if="item.class == 'right' && !item.isLogo" class="milestone right">

                    <div class="image-container" style="grid-column: 2;">
                        <img :src="item.img" class="images">
                        <img v-if="item.geometry == 1" :src="geometry" class="geometry1" alt="">
                    </div>

                    <div class="text"  style="grid-column: 3;">
                        <h1>{{ item.h1 }}</h1>
                        <p>{{ item.p }}</p>
                    </div>                   
                </div>

                <!--Layout to the right with logo handling-->
                <div v-if="item.class == 'right' && item.isLogo" class="milestone right">
                    <div class="logo-container" style="grid-column: 2;">
                        <img :src="item.img" class="logo" >
                    </div>
                    
                    <div class="text"  style="grid-column: 3;">
                        <h1>{{ item.h1 }}</h1>
                        <p>{{ item.p }}</p>
                    </div>
                    
                </div>

                <!--Milestones with layout to the left-->
                <div v-if="item.class == 'left'" class="milestone left">
                    <div class="text">
                        <h1>{{ item.h1 }}</h1>
                        <p>{{ item.p }}</p>
                    </div>
                    <div class="image-container" style="grid-column: 2;">
                        <img :src="item.img" class="images">
                        <img v-if="item.geometry == 4" :src="geometry" class="geometry4" alt="">
                    </div>
                </div>
            </div>

            <!--Background geometry images-->
            <img :src="geometry" class="geometry2">
            <img :src="geometry" class="geometry3">
            <img :src="geometry" class="geometry5">
            <img :src="geometry" class="geometry6">
        </div>
    </div>
</template>

<style scoped>

.section{
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
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

.timeline{
    position: relative;
}

.geometry1 {
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: -1rem;
    left: -4rem;
    z-index: -1;
}

.geometry4 {
    width: 10rem;
    height: 10rem;
    position: absolute;
    bottom: -1rem;
    right: -4rem;
    z-index: -1;
}

.geometry2 {
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 30rem;
    right: -12rem;
    z-index: -1;
}

.geometry3 {
    width: 40rem;
    height: 40rem;
    position: absolute;
    top: 45rem;
    left: -30rem;
    z-index: -1;
}

.geometry5 {
    width: 20rem;
    height: 20rem;
    position: absolute;
    bottom: 22rem;
    left: -13rem;
    z-index: -1;
}

.geometry6 {
    width: 50rem;
    height: 50rem;
    position: absolute;
    bottom: -30rem;
    right: -25rem;
    z-index: -1;
}

.milestone{
    margin: 5rem 0;
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    text-align: justify;
}

.text h1{
    text-align: center;
}

.image-container{
    position: relative;
    justify-self: center;
}

.images{
    width: 20rem;
    height: 20rem;
    border-radius: 50rem;
    justify-self: center;
    border: 1rem solid var(--light-blue);
}

.logo{
    width: 15rem;
    height: 15rem;
    border-radius: 0;
    justify-self: center;
}

.logo-container{
    border: 1rem solid var(--light-blue);
    display: flex;
    padding: 1rem;
    align-items: start;
    justify-content: center;
    width: 20rem;
    height: 20rem;
    border-radius: 50rem;
    justify-self: center;
}

.keep-squared{
    border-radius: 0;
}


@media (max-width:950px) {
    .milestone{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .milestone.left{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
}


</style>