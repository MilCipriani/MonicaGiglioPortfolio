<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
    <div class="section">
        <div class="text">
            <h2>Che tu sia all’inizio del tuo cammino o desideri approfondire la tua consapevolezza, sono qui per accompagnarti verso:</h2>
            <h2><em>chiarezza, vitalità e trasformazione.</em></h2>
        </div>
        <Button rounded class="button">COMINCIAMO!</Button>
    </div>
</template>

<style scoped>

.section{
    border-radius: 5rem;
    width: 100%;
    aspect-ratio: 16 / 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(@/assets/gabbiano.jpg);
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
}

.text{
    color: var(--white);
    width: 30rem;
    text-align: center;
}

h2 {
    margin: 2rem 0;
}

.text em {
    font-weight: 700;
}

.button {
    margin-top: 6rem;
}

@media (max-width:950px) {
    .button {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
}

@media (max-width: 768px) {
    .text{
        width: 100%;
        margin-top: 5rem;
    }
    .button {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
}
</style>