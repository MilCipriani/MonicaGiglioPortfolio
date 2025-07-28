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
        duration: t('sections.coursesSection.course1.duration'),
        flyer: t('sections.coursesSection.flyerLabel')
    },
    {
        date: t('sections.coursesSection.course2.date'),
        name: t('sections.coursesSection.course2.name'),
        location: t('sections.coursesSection.course2.location'),
        teachers: t('sections.coursesSection.course2.teachers'),
        text: t('sections.coursesSection.course2.text'),
        duration: t('sections.coursesSection.course2.duration'),
    },
    {
        date: t('sections.coursesSection.course3.date'),
        name: t('sections.coursesSection.course3.name'),
        location: t('sections.coursesSection.course3.location'),
        teachers: t('sections.coursesSection.course3.teachers'),
        text: t('sections.coursesSection.course2.text'),
        duration: t('sections.coursesSection.course3.duration'),
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
                        <p class="description">{{ slotProps.data.text }}</p>
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
    margin: 0 auto 3rem auto;
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
    padding-left: 1rem;
}


@media (max-width:950px) {
    .section {
        padding: 9rem 1rem 5rem 1rem;
    }
    .title {
        padding: 0 2rem;
    }
    .card{
        width: 75vw;
        max-width: 22.5rem;
    }
    .description {
        width: 65vw;
        max-width: 20rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 0 5rem 0;
    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 1050px) {
    .section {
        height: auto;
    }
}
</style>