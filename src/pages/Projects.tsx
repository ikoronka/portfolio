import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';
import { projects } from '../data/projectsData';
import type { Project } from '../types/project';

const ACCENTS = ["#E22E57", "#FFAB00", "#009CEA", "#74AF00"];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <div className='fullPage' id="projects">
            <div className="projects-section">
                <h1>{t('projects.title')}</h1>
                <div className="projects-list">
                    {projects.map((project: Project, index: number) => {
                        const description = t(project.descriptionKey);
                        const link = project.link || "https://github.com/ikoronka";
                        const accent = ACCENTS[index % ACCENTS.length];

                        return (
                            <a
                                key={index}
                                href={link}
                                className="project-row"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="project-mark" style={{ borderColor: accent }}>
                                    <span className="project-mark-ring" style={{ borderColor: accent }}></span>
                                    <span className="project-category" style={{ color: accent }}>{project.category}</span>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p className="project-summary">{description}</p>
                                    <span className="project-tags" style={{ color: accent }}>{project.tags.join('   ·   ')}</span>
                                    <span className="project-link">View project &rarr;</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
