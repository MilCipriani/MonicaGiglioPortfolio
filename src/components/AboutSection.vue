<script setup lang="ts">
import { useLanguage } from '@/translations/index';
const { t } = useLanguage();

const downloadFile = (): void => {
  const link = document.createElement('a');
  link.href = t('sections.aboutSection.resume');
  link.download = 'MonicaGiglioCurriculum.pdf'; //filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
    <div class="section" id="about">
        <div class="title">
            <h1>{{ t('sections.aboutSection.title') }}</h1>
            <Divider></Divider>
        </div>
        <div class="content">
            <img src="@/assets/profilePicSquared.jpg" :alt="t('sections.aboutSection.alt')">
            <div class="text">
                <h2>{{ t('sections.aboutSection.h2') }}</h2>
                <div class="paragraphs">
                    <p>{{ t('sections.aboutSection.p') }}</p>
                    <p>{{ t('sections.aboutSection.p2') }}</p>
                </div>
                <Button :label="t('sections.aboutSection.button')" rounded icon="pi pi-download" @click="downloadFile"></Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section{
    height: 100vh;
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

.content{
    width: 100%;
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem;
}

.text{
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    text-align: center;

}

.paragraphs {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

img{
    border-radius: 100%;
    width: 35rem;
    height: 35rem;
    border: 1rem solid var(--light-blue);
}


@media (max-width: 1050px) {
    .section {
        gap: 1rem;
    }
    .content {
        flex-direction: column;
        gap: 3rem;
    }
    .text {
        width: 30rem;
        gap: 3rem;
    }
    img {
        width: 15rem;
        height: 15rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 7rem 2rem 5rem 2rem;
    }
    .content {
        gap: 2rem;
    }
    .text {
        width: 25rem;
    }
}

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 1050px) {
    .section {
        height: auto;
        padding: 9rem 2rem 5rem 2rem;

    }
}
</style>