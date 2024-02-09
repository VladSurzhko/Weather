

// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import '../header/header.css';

// const Header = () => {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <header className="app-header">
//       <h1 className="app-title">{t('title')}</h1>
//       <div>
//         <button onClick={() => changeLanguage('en')}>EN</button>
//         <button onClick={() => changeLanguage('ua')}>UA</button>
//         <button onClick={() => changeLanguage('he')}>HE</button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { useTranslation } from 'react-i18next';
import hcss from './header.module.css';
import logo from '../img/logo.png'

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <header className={hcss.header}>
      <img  src={logo} alt="Logo" className={hcss.logo} />
      {/* <h1 className={hcss.title}>{t('title')}</h1> */}
      <div className={hcss.headerBox} >
        <button className={hcss.headerBtn} onClick={() => changeLanguage('en')}>EN</button>
        <button className={hcss.headerBtn} onClick={() => changeLanguage('ua')}>UA</button>
        <button className={hcss.headerBtn} onClick={() => changeLanguage('he')}>HE</button>
      </div>
    </header>
  );
};

export default Header;