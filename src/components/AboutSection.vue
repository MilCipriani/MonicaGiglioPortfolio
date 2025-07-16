<script setup lang="ts">
import Button from 'primevue/button';
import Divider from 'primevue/divider';

</script>

<template>
    <div class="section">
        <div class="title">
            <h1>CHI SONO</h1>
            <Divider></Divider>
        </div>
        <div class="content">
            <img src="@/assets/profilePicSquared.jpg" alt="Portrait">
            <div class="text">
                <h2>Sono Monica Giglio e mi occupo di naturopatia e discipline olistiche da circa 25 anni.</h2>
                <p>Il mio obbiettivo é quello di accompagnare attraverso il benessere olistico, la trasformazione personale e l’evoluzione interiore.<br><br>
                    Sono guidata da una profonda passione per l’equilibrio e la connessione tra mente, corpo e spirito.</p>
                <Button rounded>SCARICA IL MIO CV</Button>
            </div>
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
    width: 12rem;
}

:deep(.p-divider) {
  --p-divider-border-color: var(--light-blue);
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

img{
    border-radius: 100%;
    width: 35rem;
    height: 35rem;
    border: 1rem solid var(--light-blue);
}


@media (max-width: 768px) {
    .content {
        flex-direction: column;
        gap: 5rem;
    }

    .text {
        width: 16rem;
        gap: 3rem;
    }

    img {
        width: 15rem;
        height: 15rem;
    }
}


</style>