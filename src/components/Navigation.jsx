import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navigation">
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
            <div className={`fullscreen-nav ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#home" onClick={toggleMenu}>{t('navigation.home')}</a></li>
                    <li><a href="#about" onClick={toggleMenu}>{t('navigation.about')}</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>{t('navigation.projects')}</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>{t('navigation.contact')}</a></li>
                </ul>
            </div>
            <ul className="nav-desktop">
                <li><a href="#home">{t('navigation.home')}</a></li>
                <li><a href="#about">{t('navigation.about')}</a></li>
                <li><a href="#projects">{t('navigation.projects')}</a></li>
                <li><a href="#contact">{t('navigation.contact')}</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;