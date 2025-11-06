import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const { t } = useTranslation();

    const socialLinks = [
        { icon: faEnvelope, link: "mailto:amelie.engelmaier@gmail.com", label: "Gmail" },
        { icon: faGithub, link: "https://github.com/ikoronka", label: "GitHub" },
        { icon: faLinkedin, link: "https://www.linkedin.com/in/amelie-engelmaierov%C3%A1-a94b4a136/", label: "LinkedIn" }
    ];

    return (
        <div className='fullPage' id="contact">
            <div className="contact-section">
                <h1 className="monoText">{t('contact.title')}</h1>
                <div className="social-icons">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="social-icon"
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}