<script setup lang="ts">
import { ref, computed } from "vue";
import { useLanguage } from '@/translations/index';

const { t } = useLanguage();


interface Product {
    date: string;
    name: string;
    location: string;
    teachers: string;
    text: string;
    link?: string;
    flyer?: string;
    duration: string;
}

interface ResponsiveOption {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

/*When updating courses t('sections.coursesSection.flyerLabel') is the label for the flyer download button if present*/
const products = computed( () =>[
    {
        date: t('sections.coursesSection.course1.date'),
        name: t('sections.coursesSection.course1.name'),
        location: t('sections.coursesSection.course1.location'),
        teachers: t('sections.coursesSection.course1.teachers'),
        text: t('sections.coursesSection.course1.text'),
        link: 'https://inlumine.es/it/event/riflessologia-plantare/',
        duration: t('sections.coursesSection.course1.duration'),
        //flyer: t('sections.coursesSection.flyerLabel')
    },
    {
        date: t('sections.coursesSection.course2.date'),
        name: t('sections.coursesSection.course2.name'),
        location: t('sections.coursesSection.course2.location'),
        teachers: t('sections.coursesSection.course2.teachers'),
        text: t('sections.coursesSection.course2.text'),
        link: 'https://inlumine.es/it/event/corso-tecnica-metamorfica/',
        duration: t('sections.coursesSection.course2.duration'),
    },
    {
        date: t('sections.coursesSection.course3.date'),
        name: t('sections.coursesSection.course3.name'),
        location: t('sections.coursesSection.course3.location'),
        teachers: t('sections.coursesSection.course3.teachers'),
        text: t('sections.coursesSection.course3.text'),
        link: 'https://inlumine.es/it/event/volare-oltre/',
        duration: t('sections.coursesSection.course3.duration'),
    },
]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '640px',
        numVisible: 1,
        numScroll: 1
    }
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
    <div class="section" id="courses">
        <div class="title">
            <h1>{{ t('sections.coursesSection.title') }}</h1>
            <Divider class="white-divider"></Divider>
        </div>

        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="card">
                    <span class="date"><i class="pi pi-calendar"></i><p>{{ slotProps.data.date }}</p></span>
                    <h2>{{ slotProps.data.name }}</h2>
                    <Tag :value="slotProps.data.location" :severity="getSeverity(slotProps.data.location)" icon="pi pi-map-marker" class="tag"/>
                    <div class="text">
                        <p class="teachers">{{ slotProps.data.teachers }}</p>
                        <p>{{ slotProps.data.text }}</p>
                        <a v-if="slotProps.data.link" :href="slotProps.data.link" target="_blank" rel="noopener noreferrer">{{ t('sections.coursesSection.moreInfo') }}</a>
                    </div>
                    <div class="card-footer">
                        <Button v-if="slotProps.data.flyer" icon="pi pi-download" class="flyer" :label="slotProps.data.flyer"></Button>
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
    min-height: 100vh;
    height: auto;
    gap: 5rem;
    padding: 9rem 4rem 5rem 4rem;
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
    flex-wrap: wrap;
    align-items: center;
    color: var(--white);
}

.title h1{
    flex-shrink: 0;
    white-space: nowrap;
    padding-right: 2rem;
    margin: 0;
}

.white-divider {
    --p-divider-border-color: var(--white);
    flex: 1;
    min-width: 5rem;
}

.card{
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 0.4rem solid var(--light-blue);
    border-radius: 3rem;
    padding: 1.5rem;
    margin: 0 1rem;
    height: 100%;
}

.date {
    display: flex;
    justify-self: flex-end;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.pi {
    color: var(--light-blue);
}

.tag {
    border-radius: 10rem;
    padding: 0.1rem 0.5rem;
    margin-top: 0.3rem;
    width: fit-content;
}

.text {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.text a {
    color: var(--light-blue);
    font-size: 0.9rem;
}

.teachers {
    font-weight: 100;
}

.card-footer {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
}

.flyer {
    border-radius: 10rem;
    padding: 0.8rem 1rem;
}

.duration {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
}

@media (min-width:1199px) {
    .card {
        margin: 0 2rem;
    }
}

@media (max-width:950px) {
    .section {
        padding: 9rem 1rem 5rem 1rem;
    }
    .title {
        padding: 0 2rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 0 5rem 0;
    }
}

@media (min-width: 500px) and ( max-width: 640px) {
    .card {
        margin: 0 4rem;
    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 1050px) {
    .section {
        height: auto;
    }
}
</style>