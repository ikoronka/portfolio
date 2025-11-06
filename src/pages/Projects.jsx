import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';
import crm from '../images/projects/crm.png';
import javafx from '../images/projects/javafx.png';
import figma from '../images/projects/figma.png';

export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            title: "IT School Dashboard",
            image: crm,
            link: "https://github.com/ikoronka/crm-platforma",
            description: "I designed and developed a CRM platform for managing IT courses using Laravel. Learned a lot about effective web development."
        },
        {
            title: "UX/UI Food TikTok App",
            image: figma,
            link: "https://www.figma.com/design/BRp6VkMNP7SeirxHtuFNCL/F%C3%BCgnerova---D.-Franc--V.-Jen%C3%ADkov%C3%A1--A.-Engelmaierov%C3%A1--A.-Peerov%C3%A1--E.-P%C3%A1terov%C3%A1--L.-Loumov%C3%A1?node-id=11544-6038&t=JeAEgAxmzQZhdbNb-1",
            description: "I worked in a team to design a recipe video app from start to finish. Learned a lot about design principles and teamwork."
        },
        {
            title: "JavaFX Adventure Game",
            image: javafx,
            link: "https://github.com/ikoronka/stardew-adventure-javafx",
            description: "I took a text-based adventure game from a previous semester and remade it into a visual desktop application. Learned a lot about Java and basic game dev."
        }
    ];

    const comingSoon = {
        title: "Coming soon",
        image: null,
        link: null,
        description: "Currently, I am working on a huge team project to streamline the registration system for out student club. I am also in the midst of a data science project, analyzing the different characteristics of introverted and extroverted people."
    };

    return (
        <div className='fullPage' id="projects">
            <div className="projects-section">
                <h1>{t('projects.title')}</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        project.link ? (
                            <a
                                key={index}
                                href={project.link}
                                className="project-tile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="project-content">
                                    <div className="media-wrap">
                                        <img src={project.image} alt={project.title} />
                                        <div className="overlay">{project.description}</div>
                                    </div>
                                    <h3>{project.title}</h3>
                                </div>
                            </a>
                        ) : (
                            <div key={index} className="project-tile">
                                <div className="project-content">
                                    <div className="media-wrap coming-soon">
                                        <div className="coming-text">{project.title}</div>
                                        <div className="overlay">{project.description}</div>
                                    </div>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        )
                    ))}

                    {/* Render the explicit coming soon tile as the 4th item */}
                    <div className="project-tile">
                        <div className="project-content">
                            <div className="media-wrap coming-soon">
                                <div className="coming-text">{comingSoon.title}</div>
                                <div className="overlay">{comingSoon.description}</div>
                            </div>
                            <h3>{comingSoon.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}