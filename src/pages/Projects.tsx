import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import { Project, ProjectCategory } from '../types/project';
import ProjectMain from '../components/project/ProjectMain';
import TechDetailCard from '../components/project/TechDetailCard';
import { useNavigate } from 'react-router-dom';

const categories: { key: ProjectCategory; label: string; icon: string }[] = [
    { key: 'vue', label: 'Vue.js', icon: 'fab fa-vuejs' },
    { key: 'iot', label: 'IoT', icon: 'fas fa-microchip' },
    { key: 'backend', label: 'Backend', icon: 'fas fa-server' }
];

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('vue');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const filteredProjects = projectsData.filter(p => p.category === selectedCategory);
    const selectedProject: Project | undefined = filteredProjects[currentIndex];

    // 카테고리 변경 시 인덱스 0으로 리셋
    useEffect(() => {
        setCurrentIndex(0);
        setShowDetails(false);
        setTimeout(() => setShowDetails(true), 200);
    }, [selectedCategory]);

    // 프로젝트 변경 시 애니메이션 리셋
    useEffect(() => {
        setShowDetails(false);
        const timer = setTimeout(() => setShowDetails(true), 150);
        return () => clearTimeout(timer);
    }, [currentIndex, selectedCategory]);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    };

    const navigate = useNavigate();

    return (
        <div className="projects-container">
            {/* 상단 카테고리 탭 */}
            <div className="category-tabs">
                <button className="back-home-btn" onClick={() => navigate('/')}>
                    <i className="fas fa-home"></i>
                </button>

                {categories.map(cat => (
                    <button
                        key={cat.key}
                        className={`category-tab ${selectedCategory === cat.key ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.key)}
                    >
                        <i className={cat.icon}></i>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* 본문: 좌(메인 카드) + 우(기술 상세) */}
            <div className="projects-layout">
                <div className="projects-left">
                    {selectedProject ? (
                        <ProjectMain project={selectedProject} isActive={showDetails} />
                    ) : (
                        <p className="no-project">프로젝트를 선택해주세요.</p>
                    )}
                </div>

                <div className="projects-right">
                    <h3 className="tech-detail-heading">
                        <i className="fas fa-microchip"></i> 기술 상세
                    </h3>
                    <div className="tech-detail-list">
                        {selectedProject?.techDetails.map((detail, index) => (
                            <TechDetailCard
                                key={`${selectedProject.id}-${index}`}
                                detail={detail}
                                index={index}
                                isVisible={showDetails}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* 하단 dot 네비게이션 */}
            {filteredProjects.length > 1 && (
                <div className="project-dot-nav">
                    <button className="dot-nav-arrow" onClick={handlePrev}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="dot-nav-dots">
                        {filteredProjects.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot-nav-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`${idx + 1}번째 프로젝트`}
                            />
                        ))}
                    </div>
                    <button className="dot-nav-arrow" onClick={handleNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;