<script setup lang="ts">
import { computed } from "vue";
import img1 from '@/assets/RadiciVocazione.jpg';
import img2 from '@/assets/Ayurveda.jpg';
import img3 from '@/assets/logoInLumine.svg';
import img4 from '@/assets/Maiorca.jpg';
import img5 from '@/assets/Riconoscimenti.jpg';
import img6 from '@/assets/Oggi.jpg';
import geometry from '@/assets/Geometry.svg';
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();

type Alignment = "left" | "right"

interface TimelineItem {
  h1: string;
  p: string;
  img: string;
  alt: string;
  class: Alignment;
  geometry?: number;
  isLogo?: boolean;
}

const items = computed(() =>[
    { h1: t('sections.historySection.milestone1.h1'),
        p: t('sections.historySection.milestone1.p'),
        alt: t('sections.historySection.milestone1.alt'),
        img: img1,
        class: "right",
        geometry: 1
    },
    { h1: t('sections.historySection.milestone2.h1'),
        p: t('sections.historySection.milestone2.p'),
        alt: t('sections.historySection.milestone2.alt'),
        img: img2,
        class: 'left'
    },
    { h1: t('sections.historySection.milestone3.h1'),
        p: t('sections.historySection.milestone3.p'),
        alt: t('sections.historySection.milestone3.alt'),
        img: img3,
        class: "right",
        isLogo: true
    },
    { h1: t('sections.historySection.milestone4.h1'),
        p: t('sections.historySection.milestone4.p'),
        alt: t('sections.historySection.milestone4.alt'),
        img: img4,
        class: "left",
        geometry: 4
    },
    { h1: t('sections.historySection.milestone5.h1'),
        p: t('sections.historySection.milestone5.p'),
        alt: t('sections.historySection.milestone5.alt'),
        img: img5,
        class: "right"
    },
    { h1: t('sections.historySection.milestone6.h1'),
        p: t('sections.historySection.milestone6.p'),
        alt: t('sections.historySection.milestone6.alt'),
        img: img6,
        class: "left"
    }
]);
</script>

<template>
    <div class="section" id="history">
        <div class="title">
            <h1>{{ t('sections.historySection.title') }}</h1>
            <Divider></Divider>
        </div>

        <div class="timeline">
            <div v-for="item in items" :key="item.h1" >

                <!--Milestones with layout to the right-->
                <div v-if="item.class == 'right' && !item.isLogo" class="milestone right">

                    <div class="image-container" style="grid-column: 2;">
                        <img :src="item.img" class="images" :alt="item.alt">
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
                        <img :src="item.img" class="logo" :alt="item.alt">
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
                        <img :src="item.img" class="images" :alt="item.alt">
                        <img v-if="item.geometry == 4" :src="geometry" class="geometry4" alt="">
                    </div>
                </div>
            </div>

            <!--Background geometry images-->
            <img :src="geometry" class="geometry2" alt="">
            <img :src="geometry" class="geometry3" alt="">
            <img :src="geometry" class="geometry5" alt="">
            <img :src="geometry" class="geometry6" alt="">
        </div>
    </div>
</template>

<style scoped>

.section{
    padding: 9rem 4rem 5rem 4rem;
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
    margin-bottom: 5rem;
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    text-align: justify;
}

.text h1{
    text-align: center;
    margin-bottom: 1rem;
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
    .section {
        gap: 2rem;
    }
    .milestone{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        gap: 2rem;
    }

    .milestone.left{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
    .geometry2 {
        width: 15rem;
        height: 15rem;
        right: -10rem;
    }
    .geometry3 {
        width: 30rem;
        height: 30rem;
        top: 60rem;
        left: -25rem;
    }
    .geometry6 {
        width: 40rem;
        height: 40rem;
        bottom: -30rem;
        right: -25rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 2rem 5rem 2rem;
    }
    .milestone {
        gap: 1rem;
    }
    .content {
        gap: 2rem;
    }
    .text {
        width: 25rem;
    }
    .geometry3 {
        width: 30rem;
        height: 30rem;
        top: 50rem;
        left: -25rem;
    }
}
</style>