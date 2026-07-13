import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';
import { projects } from '../data/projectsData';
import type { Project } from '../types/project';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <div className='fullPage' id="projects">
            <div className="projects-section">
                <h1>{t('projects.title')}</h1>
                <div className="projects-grid">
                    {projects.map((project: Project, index: number) => {
                        const description = t(project.descriptionKey);
                        const link = project.link || "https://github.com/ikoronka";
                        const hasImage = !!project.image;

                        const tileContent = (
                            <div className="project-content">
                                <div className={`media-wrap ${hasImage ? '' : 'coming-soon'}`}>
                                    {hasImage ? (
                                        <img src={project.image!} alt={project.title} />
                                    ) : (
                                        <div className="coming-text">{project.title}</div>
                                    )}
                                    <div className="overlay">{description}</div>
                                </div>
                                <h3>{project.title}</h3>
                            </div>
                        );

                        return (
                            <a
                                key={index}
                                href={link}
                                className="project-tile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {tileContent}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
