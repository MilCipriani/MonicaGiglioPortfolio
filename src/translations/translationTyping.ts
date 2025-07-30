export interface TranslationStructure {
  nav: {
    about: string;
    history: string;
    services: string;
    collab: string;
    courses: string;
    contacts: string;
  };
  sections: {
    heroSection: {
      p: string;
    };
    aboutSection: {
      title: string;
      h2: string;
      p: string;
      p2: string;
      alt: string;
      button: string;
      resume: string;
    };
    historySection: {
      title: string;
      milestone1: {
        h1: string;
        p: string;
        alt: string;
      };
      milestone2: {
        h1: string;
        p: string;
        alt: string;
      };
      milestone3: {
        h1: string;
        p: string;
        alt: string;
      };
      milestone4: {
        h1: string;
        p: string;
        alt: string;
      };
      milestone5: {
        h1: string;
        p: string;
        alt: string;
      };
      milestone6: {
        h1: string;
        p: string;
        alt: string;
      };
    };
    bannerSection: {
      h1: string;
      em: string;
      button: string;
    };
    servicesSection: {
      title: string;
      service1: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
      service2: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
      service3: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
      service4: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
      service5: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
      service6: {
        name: string;
        tag: string;
        alt: string;
        text: string;
      };
    };
    collabSection: {
      title: string;
      h2: string;
      h3: string;
      collab1: {
        name: string;
        text: string;
        alt: string;
      };
      collab2: {
        name: string;
        text: string;
        alt: string;
      };
      collab3: {
        name: string;
        text: string;
        alt: string;
      };
      collab4: {
        name: string;
        text: string;
        alt: string;
      };
      collab5: {
        name: string;
        text: string;
        alt: string;
      };
      collab6: {
        name: string;
        text: string;
        alt: string;
      };
    };
    coursesSection: {
      title: string;
      flyerLabel: string;
      course1: {
        date: string;
        name: string;
        location: string;
        teachers: string;
        text: string;
        duration: string;
      };
      course2: {
        date: string;
        name: string;
        location: string;
        teachers: string;
        text: string;
        duration: string;
      };
      course3: {
        date: string;
        name: string;
        location: string;
        teachers: string;
        text: string;
        duration: string;
      };
    };
    darkBannerSection: {
      p: string;
      p2: string;
    };
    contactsSection: {
      title: string;
      h2: string;
      p: string;
      follow: string;
      allRightsReserved: string;
    };
  };
}

export type SupportedLanguages = 'it' | 'es';

export type TranslationKey = 
  | 'nav.about'
  | 'nav.contact'
  | 'nav.history'
  | 'nav.services'
  | 'nav.collab'
  | 'nav.courses'
  | 'nav.contacts'
  | 'sections.heroSection.p'
  | 'sections.aboutSection.title'
  | 'sections.aboutSection.h2'
  | 'sections.aboutSection.p'
  | 'sections.aboutSection.p2'
  | 'sections.aboutSection.alt'
  | 'sections.aboutSection.button'
  | 'sections.aboutSection.resume'
  | 'sections.historySection.title'
  | 'sections.historySection.milestone1.h1'
  | 'sections.historySection.milestone1.p'
  | 'sections.historySection.milestone1.alt'
  | 'sections.historySection.milestone2.h1'
  | 'sections.historySection.milestone2.p'
  | 'sections.historySection.milestone2.alt'
  | 'sections.historySection.milestone3.h1'
  | 'sections.historySection.milestone3.p'
  | 'sections.historySection.milestone3.alt'
  | 'sections.historySection.milestone4.h1'
  | 'sections.historySection.milestone4.p'
  | 'sections.historySection.milestone4.alt'
  | 'sections.historySection.milestone5.h1'
  | 'sections.historySection.milestone5.p'
  | 'sections.historySection.milestone5.alt'
  | 'sections.historySection.milestone6.h1'
  | 'sections.historySection.milestone6.p'
  | 'sections.historySection.milestone6.alt'
  | 'sections.bannerSection.h1'
  | 'sections.bannerSection.em'
  | 'sections.bannerSection.button'
  | 'sections.servicesSection.title'
  | 'sections.servicesSection.service1.name'
  | 'sections.servicesSection.service1.tag'
  | 'sections.servicesSection.service1.alt'
  | 'sections.servicesSection.service1.text'
  | 'sections.servicesSection.service2.name'
  | 'sections.servicesSection.service2.tag'
  | 'sections.servicesSection.service2.alt'
  | 'sections.servicesSection.service2.text'
  | 'sections.servicesSection.service3.name'
  | 'sections.servicesSection.service3.tag'
  | 'sections.servicesSection.service3.alt'
  | 'sections.servicesSection.service3.text'
  | 'sections.servicesSection.service4.name'
  | 'sections.servicesSection.service4.tag'
  | 'sections.servicesSection.service4.alt'
  | 'sections.servicesSection.service4.text'
  | 'sections.servicesSection.service5.name'
  | 'sections.servicesSection.service5.tag'
  | 'sections.servicesSection.service5.alt'
  | 'sections.servicesSection.service5.text'
  | 'sections.servicesSection.service6.name'
  | 'sections.servicesSection.service6.tag'
  | 'sections.servicesSection.service6.alt'
  | 'sections.servicesSection.service6.text'
  | 'sections.collabSection.title'
  | 'sections.collabSection.h2'
  | 'sections.collabSection.h3'
  | 'sections.collabSection.collab1.name'
  | 'sections.collabSection.collab1.text'
  | 'sections.collabSection.collab1.alt'
  | 'sections.collabSection.collab2.name'
  | 'sections.collabSection.collab2.text'
  | 'sections.collabSection.collab2.alt'
  | 'sections.collabSection.collab3.name'
  | 'sections.collabSection.collab3.text'
  | 'sections.collabSection.collab3.alt'
  | 'sections.collabSection.collab4.name'
  | 'sections.collabSection.collab4.text'
  | 'sections.collabSection.collab4.alt'
  | 'sections.collabSection.collab5.name'
  | 'sections.collabSection.collab5.text'
  | 'sections.collabSection.collab5.alt'
  | 'sections.collabSection.collab6.name'
  | 'sections.collabSection.collab6.text'
  | 'sections.collabSection.collab6.alt'
  | 'sections.coursesSection.title'
  | 'sections.coursesSection.flyerLabel'
  | 'sections.coursesSection.course1.date'
  | 'sections.coursesSection.course1.name'
  | 'sections.coursesSection.course1.location'
  | 'sections.coursesSection.course1.teachers'
  | 'sections.coursesSection.course1.text'
  | 'sections.coursesSection.course1.duration'
  | 'sections.coursesSection.course2.date'
  | 'sections.coursesSection.course2.name'
  | 'sections.coursesSection.course2.location'
  | 'sections.coursesSection.course2.teachers'
  | 'sections.coursesSection.course2.text'
  | 'sections.coursesSection.course2.duration'
  | 'sections.coursesSection.course3.date'
  | 'sections.coursesSection.course3.name'
  | 'sections.coursesSection.course3.location'
  | 'sections.coursesSection.course3.teachers'
  | 'sections.coursesSection.course3.text'
  | 'sections.coursesSection.course3.duration'
  | 'sections.darkBannerSection.p'
  | 'sections.darkBannerSection.p2'
  | 'sections.contactsSection.title'
  | 'sections.contactsSection.h2'
  | 'sections.contactsSection.p'
  | 'sections.contactsSection.follow'
  | 'sections.contactsSection.allRightsReserved';