import React from 'react';
import '../styles/index.css';
import profilePic from '../images/profilePic.png';

export default function About() {
    return (
        <div className='fullPage' id="about" style={{ color: "white" }}>
            <div id="aboutSection">
                <h1>About</h1>
                <img width="300" height="300" src={profilePic} alt="Profile" />
                <p className='monoText descrText'>
                Programuju a učím programovat &lt;/&gt;
                </p>
            </div>
        </div>
    );
}