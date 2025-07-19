<script setup lang="ts">
import Divider from 'primevue/divider';
import Button from 'primevue/button';
</script>

<template>
  <div class="section">    
    <div class="title">
        <h1>CONTATTI</h1>
        <Divider></Divider>
    </div>

    <div class="content">
        <div class="contacts">
            <div class="text">
                <h2>CONTATTAMI</h2>
                <p>Se ti trovi qui il tuo viaggio è giá iniziato. Che sia per XYZ motivo sono disponibile per blah blah</p>
            </div>

            <div class="info">
                <div class="label">
                    <Button icon="pi pi-whatsapp" severity="secondary" rounded size="large" class="hide-hover"></Button>
                    <div class="contact-text">
                        <p>Whatsapp</p>
                        <p>+34 677164112</p>
                    </div>
                </div>
                <div class="label">
                    <Button icon="pi pi-google" severity="secondary" rounded size="large" class="hide-hover"></Button>
                    <div class="contact-text">
                        <p>E-Mail</p>
                        <p>naturopatagiglio@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="socials">
            <h2>SEGUIMI:</h2>
            <div class="social-icons">
                <Button icon="pi pi-instagram" severity="secondary" rounded size="large"></Button>
                <Button icon="pi pi-facebook" severity="secondary" rounded size="large"></Button>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>Privacy, P.IVA, bla bla bla <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati</p>
    </div>
  </div>
</template>

<style scoped>
.section {
    height: 100vh;
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 4rem 0;
}

.contacts {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4rem;
    gap: 4rem;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.label {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
}

.socials {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.text {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.footer {
    text-align: center;
}

.label {
    --p-button-secondary-hover-background: var(--blue);
    --p-button-secondary-hover-border-color: var(--blue);

    --p-button-secondary-active-background: var(--blue);
    --p-button-secondary-active-color: var(--white);
}

.hide-hover {
    --p-button-secondary-hover-background: var(--blue);
    --p-button-secondary-hover-border-color: var(--blue);
    --p-button-secondary-hover-color: var(--white);    
}
</style>