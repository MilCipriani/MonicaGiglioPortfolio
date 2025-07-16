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
    { label: 'it',
      icon: itIcon },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <img :src="logo" alt="Logo" style="width: 2.5rem; height: 2.5rem;" />
                <span style="margin-left: 1rem;">MONICA GIGLIO</span>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a class="flex items-center" v-bind="props.action">
                    <img v-if="item.icon" :src="item.icon" alt="Italian icon">
                    <span>{{ item.label }}</span>
                </a>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
:deep(.p-menubar-root-list){
    margin: 0 0 0 auto;
}

</style>