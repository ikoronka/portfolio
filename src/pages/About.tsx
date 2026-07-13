import { useTranslation } from 'react-i18next';
import '../styles/index.css';
import '../styles/About.css';
import profilePic from '../assets/profilePic.png';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className='fullPage' id="about" style={{ color: "white" }}>
            <div id="aboutSection">
                <h1>{t('about.title')}</h1>
                <img src={profilePic} alt="" />
                <p className='monoText descrText'>
                    {t('about.description')}
                </p>
            </div>
        </div>
    );
}
