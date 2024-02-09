// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         title: 'Weather App',
//         Remove: 'Remove',
//         searchBarPlaceholder: 'Enter city name',
//         searchBarButton: 'Search',
//       },
//     },
//     ua: {
//       translation: {
//         title: 'Погода',
//         Remove: 'Видалити',
//         searchBarPlaceholder: 'Введіть назву міста',
//         searchBarButton: 'Пошук',
//       },
//     },
//     he: {
//       translation: {
//         title: 'אפליקציית מזג אוויר',
//         Remove: 'מחק',
//         searchBarPlaceholder: 'הזן את שם העיר',
//         searchBarButton: 'חיפוש',
//       },
//     },
//   },
//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Weather App',
        Remove: 'Remove',
        searchBarPlaceholder: 'Enter city name',
        searchBarButton: 'Search',
      },
    },
    ua: {
      translation: {
        title: 'Погода',
        Remove: 'Видалити',
        searchBarPlaceholder: 'Введіть назву міста',
        searchBarButton: 'Пошук',
      },
    },
    he: {
      translation: {
        title: 'אפליקציית מזג אוויר',
        Remove: 'מחק',
        searchBarPlaceholder: 'הזן את שם העיר',
        searchBarButton: 'חיפוש',
      },
    },
  },
  lng: storedLanguage || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

