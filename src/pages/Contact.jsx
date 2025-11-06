import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const { t } = useTranslation();

    const contacts = [
        { icon: faGoogle, label: 'Gmail', link: 'https://wikipedia.com' },
        { icon: faGithub, label: 'GitHub', link: 'https://wikipedia.com' },
        { icon: faLinkedin, label: 'LinkedIn', link: 'https://wikipedia.com' }
    ];

    return (
        <div className='fullPage' id="contact">
            <div className="contact-section">
                <h1 className="monoText">{t('contact.title')}</h1>
                <div className="contact-icons">
                    {contacts.map((c, i) => (
                        <a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon"
                            aria-label={c.label}
                        >
                            <FontAwesomeIcon icon={c.icon} size="3x" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}