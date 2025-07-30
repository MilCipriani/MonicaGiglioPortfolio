import { ref, reactive } from 'vue';
import type { TranslationStructure, SupportedLanguages, TranslationKey } from '@/translations/translationTyping.ts';

import it from '@/translations/italian.ts'
import es from '@/translations/spanish.ts'

const translations = reactive<Record<SupportedLanguages, TranslationStructure>>({
  it,
  es
})

const currentLanguage = ref<SupportedLanguages>('it')

export function useLanguage() {
  const setLanguage = (lang: SupportedLanguages) => {
    currentLanguage.value = lang
    localStorage.setItem('preferred-language', lang) //save current lang in browser
  }

/*localStorage is a Web Storage API that stores data in the browser's local storage, separate from cookies.
 Unlike cookies, localStorage data doesn't get sent to the server with every HTTP request,
 has larger storage capacity (5-10MB vs 4KB), and persists until explicitly cleared. */

  const t = (key: TranslationKey): string => {
    const keys = key.split('.') //example 'nav.about' -> 'nav', 'about'
    let result: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      result = result?.[k]  //example translations.it.nav, then translations.it.nav.about
    }
    
    return result || key
  }

  return {
    currentLanguage,
    setLanguage,
    t,
  }
}