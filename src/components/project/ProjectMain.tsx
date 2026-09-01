import React from 'react';
import { Project } from '../../types/project';
import ImageCarousel from "./ImageCarousel";

interface ProjectMainProps {
    project: Project;
    isActive: boolean;
}

const ProjectMain: React.FC<ProjectMainProps> = ({ project, isActive }) => {
    return (
        <div className={`project-main ${isActive ? 'active' : ''}`}>
            {/* ✅ 이미지 캐러셀 영역 */}
            <div className="project-image-area">
                <ImageCarousel images={project.images} interval={4000} />
            </div>

            <h2 className="project-title">{project.title}</h2>

            <div className="project-description">
                {/*{project.description.map((line, index) => (*/}
                {/*    <p key={index} className="description-line">{line}</p>*/}
                {/*))}*/}
                <p className="description-line">{project.description.join(' ')}</p>
            </div>

            <div className="project-meta">
                <span className="project-role"><i className="fas fa-user"></i> {project.role}</span><br/>
                <span className="project-period"><i className="fas fa-calendar"></i> {project.period}</span>
            </div>

            <div className="project-tags">
                {project.techStack.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                ))}
            </div>
            {project.links && (
                <div className="project-links">
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener" className="project-link">
                            <i className="fab fa-github"></i> 코드
                        </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener" className="project-link">
                            <i className="fas fa-external-link-alt"></i> 데모
                        </a>
                    )}
                    {project.links.blog && (
                        <a href={project.links.blog} target="_blank" rel="noopener" className="project-link">
                            <i className="fas fa-pencil"></i> 블로그
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectMain;