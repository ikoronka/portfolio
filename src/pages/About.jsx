import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/index.css';
import '../styles/About.css';
import profilePic from '../images/profilePic.png';
import RotatingSquare from '../components/RotatingSquare';
import rotationImage from '../images/rotation.jpg'; // Update with your image path

export default function About() {
    const { t } = useTranslation();

    return (
        <div className='fullPage' id="about" style={{ color: "white" }}>
            <div id="aboutSection">
                <h1>{t('about.title')}</h1>
                {/* <RotatingSquare
                    imageUrl={rotationImage}
                    size={300}
                    rotationSpeed={10}
                    squareSize={50}
                /> */}
                <img src={profilePic} alt="" />
                <p className='monoText descrText'>
                    {t('about.description')}
                </p>
            </div>
        </div>
    );
}