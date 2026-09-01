import React from 'react';
import { TechDetail } from '../../types/project';

interface TechDetailCardProps {
    detail: TechDetail;
    index: number;
    isVisible: boolean;
}

const TechDetailCard: React.FC<TechDetailCardProps> = ({ detail, index, isVisible }) => {
    return (
        <div
            className={`tech-detail-card ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <div className="tech-detail-icon">
                {detail.icon && <i className={detail.icon}></i>}
            </div>
            <div className="tech-detail-content">
                <h4 className="tech-detail-name">{detail.name}</h4>
                <p className="tech-detail-desc">{detail.description}</p>
            </div>
        </div>
    );
};

export default TechDetailCard;