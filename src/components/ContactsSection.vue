<script setup lang="ts">
import { useLanguage } from '@/translations/index';
const { t } = useLanguage();
</script>

<template>
  <div class="section" id="contacts">    
    <div class="title">
        <h1>{{  t('sections.contactsSection.title') }}</h1>
        <Divider></Divider>
    </div>

    <div class="content">
        <div class="contacts">
            <div class="text">
                <h2>{{  t('sections.contactsSection.h2') }} :</h2>
                <p>{{  t('sections.contactsSection.p') }}</p>
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
            <h2>{{  t('sections.contactsSection.follow') }} :</h2>
            <div class="social-icons">
                <a href="https://instagram.com/naturopata.monica.giglio" target="_blank" rel="noopener noreferrer">
                    <Button icon="pi pi-instagram" severity="secondary" rounded size="large"></Button>
                </a>
                <a href="https://facebook.com/monica.giglio.7" target="_blank" rel="noopener noreferrer">
                    <Button icon="pi pi-facebook" severity="secondary" rounded size="large"></Button>
                </a>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>{{  t('sections.contactsSection.allRightsReserved') }}</p>      
    </div>
  </div>
</template>

<style scoped>
.section {
    height: 100vh;
    padding: 9rem 4rem 5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    gap: 1rem;
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

/*rotated phones*/
@media screen and (orientation: landscape) and (max-height: 500px) {
    .section {
        height: auto;
    }
}
</style>