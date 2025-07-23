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
      button: string;
    };
    historySection: {
      title: string;
      milestone1: {
        h1: string;
        p: string;
      };
      milestone2: {
        h1: string;
        p: string;
      };
      milestone3: {
        h1: string;
        p: string;
      };
      milestone4: {
        h1: string;
        p: string;
      };
      milestone5: {
        h1: string;
        p: string;
      };
      milestone6: {
        h1: string;
        p: string;
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
        text: string;
      };
      service2: {
        name: string;
        tag: string;
        text: string;
      };
      service3: {
        name: string;
        tag: string;
        text: string;
      };
      service4: {
        name: string;
        tag: string;
        text: string;
      };
      service5: {
        name: string;
        tag: string;
        text: string;
      };
      service6: {
        name: string;
        tag: string;
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
      };
      collab2: {
        name: string;
        text: string;
      };
      collab3: {
        name: string;
        text: string;
      };
      collab4: {
        name: string;
        text: string;
      };
      collab5: {
        name: string;
        text: string;
      };
      collab6: {
        name: string;
        text: string;
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
  | 'sections.aboutSection.button'
  | 'sections.historySection.title'
  | 'sections.historySection.milestone1.h1'
  | 'sections.historySection.milestone1.p'
  | 'sections.historySection.milestone2.h1'
  | 'sections.historySection.milestone2.p'
  | 'sections.historySection.milestone3.h1'
  | 'sections.historySection.milestone3.p'
  | 'sections.historySection.milestone4.h1'
  | 'sections.historySection.milestone4.p'
  | 'sections.historySection.milestone5.h1'
  | 'sections.historySection.milestone5.p'
  | 'sections.historySection.milestone6.h1'
  | 'sections.historySection.milestone6.p'
  | 'sections.bannerSection.h1'
  | 'sections.bannerSection.em'
  | 'sections.bannerSection.button'
  | 'sections.servicesSection.title'
  | 'sections.servicesSection.service1.name'
  | 'sections.servicesSection.service1.tag'
  | 'sections.servicesSection.service1.text'
  | 'sections.servicesSection.service2.name'
  | 'sections.servicesSection.service2.tag'
  | 'sections.servicesSection.service2.text'
  | 'sections.servicesSection.service3.name'
  | 'sections.servicesSection.service3.tag'
  | 'sections.servicesSection.service3.text'
  | 'sections.servicesSection.service4.name'
  | 'sections.servicesSection.service4.tag'
  | 'sections.servicesSection.service4.text'
  | 'sections.servicesSection.service5.name'
  | 'sections.servicesSection.service5.tag'
  | 'sections.servicesSection.service5.text'
  | 'sections.servicesSection.service6.name'
  | 'sections.servicesSection.service6.tag'
  | 'sections.servicesSection.service6.text'
  | 'sections.collabSection.title'
  | 'sections.collabSection.h2'
  | 'sections.collabSection.h3'
  | 'sections.collabSection.collab1.name'
  | 'sections.collabSection.collab1.text'
  | 'sections.collabSection.collab2.name'
  | 'sections.collabSection.collab2.text'
  | 'sections.collabSection.collab3.name'
  | 'sections.collabSection.collab3.text'
  | 'sections.collabSection.collab4.name'
  | 'sections.collabSection.collab4.text'
  | 'sections.collabSection.collab5.name'
  | 'sections.collabSection.collab5.text'
  | 'sections.collabSection.collab6.name'
  | 'sections.collabSection.collab6.text'
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
  | 'sections.contactsSection.title'
  | 'sections.contactsSection.h2'
  | 'sections.contactsSection.p'
  | 'sections.contactsSection.follow'
  | 'sections.contactsSection.allRightsReserved';