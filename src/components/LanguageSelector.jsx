import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('cs')}
        className={i18n.language === 'cs' ? 'active' : ''}
      >
        CS
      </button>
    </div>
  );
}