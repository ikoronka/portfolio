import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/amelie-engelmaierov%C3%A1-a94b4a136/">{t('footer.linkedin')}</a>
            <a href="mailto:ikoronka.work@gmail.com">{t('footer.email')}</a>
            <a href="https://github.com/ikoronka/">{t('footer.github')}</a>
        </div>
    );
}