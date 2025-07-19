<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import itIcon from '@/assets/ITicon.svg';
import logo from '@/assets/logo.svg';

const items = ref([
    { label: 'Chi sono'},
    { label: 'La mia storia'},
    { label: 'Servizi'},
    { label: 'Collaborazioni'},
    { label: 'Corsi',},
    { label: 'Contatti'},
    { icon: itIcon },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <img :src="logo" alt="Logo" style="width: 5rem; height: 5rem;" />
                <h1 style="margin-left: 1rem;">MONICA GIGLIO</h1>
            </template>
            <template #item="{ item }">
                <a class="flex items-center">
                    <img v-if="item.icon" :src="item.icon" alt="Italian icon" class="lang">
                    <span v-if="item.label">{{ item.label }}</span>
                </a>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>

.card {
    height: 8rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.lang {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.2rem;
}

:deep(.p-menubar-root-list){
    margin: 0 0 0 auto;
    gap: 2rem;
}

:deep(.p-menubar-item-content){
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.p-menubar){
    color: var(--blue);
    height: 8rem;
    background-color: var(--white);
    padding: 0 1rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #14508936;
}

:deep(.p-menubar-start){
    font-size: 1.5rem;
}

</style>