<script setup lang="ts">
import { computed } from "vue";
import itIcon from '@/assets/ITicon.svg';
import esIcon from '@/assets/ESicon.svg';
import logo from '@/assets/logo.svg';

import type { SupportedLanguages } from '@/translations/translationTyping.ts';
import { useLanguage } from '@/translations/index';

const { t, currentLanguage, setLanguage } = useLanguage();

const toggleLanguage = (): void => {
  const newLanguage: SupportedLanguages = currentLanguage.value === 'it' ? 'es' : 'it';
  setLanguage(newLanguage);
  console.log('new lang is set to: ', newLanguage);
};

const items = computed(() =>[
    { label: t('nav.about'),
        href: '#about',
    },
    { label: t('nav.history'),
        href: '#history'
    },
    { label: t('nav.services'),
        href: '#services',
    },
    { label: t('nav.collab'),
        href: '#collab',
    },
    { label: t('nav.courses'),
        href: '#courses',
    },
    { label: t('nav.contacts'),
        href: '#contacts',
    },
    { icon: currentLanguage.value === 'it' ? esIcon : itIcon },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <a class="start" href="#" >
                    <img :src="logo" alt="Logo" style="width: 5rem; height: 5rem;"/>
                    <h1 style="margin-left: 1rem;">MONICA GIGLIO</h1>
                </a>
            </template>
            <template #item="{ item }">
                <a :href="item.href">
                    <img v-if="item.icon" :src="item.icon" alt="Language icon" class="lang" @click="toggleLanguage">
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

.start{
    display: flex;
    justify-content: center;
    align-items: center;
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

:deep(.p-menubar){
    color: var(--blue);

}

:deep(.p-menubar-start){
    font-size: 1.5rem;
}

@media (max-width:960px) {
    :deep(.p-menubar){
        justify-content: space-between;
        --p-menubar-item-focus-color: var(--blue);
        --p-menubar-item-hover-color: var(--blue);
    }
    :deep(.p-menubar-item-content){
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
}

@media (max-width: 768px) {
    :deep(.p-menubar){
        height: 6rem;
    }
    :deep(.p-menubar-item-content){
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    .card {
        height: 6rem;
    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 500px) {
    :deep(.p-menubar){
        height: 6rem;
    }
    :deep(.p-menubar-item-content){
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    :deep(.p-menubar-root-list){
        height: 70vh;
    }
    .card {
        height: 6rem;
    }
    h1 {
        font-size: 2rem;
    }
}
</style>