import React, { useState, useEffect } from 'react';
import { TechDetail } from '../../types/project';

interface TechDetailCardProps {
    detail: TechDetail;
    index: number;
    isVisible: boolean;
}

const TechDetailCard: React.FC<TechDetailCardProps> = ({ detail, index, isVisible }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setAnimate(true);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [isVisible, detail]);

    return (
        <div
            className={`tech-detail-card ${animate ? 'visible' : ''}`}
            style={{
                transitionDelay: animate ? `${index * 0.12}s` : '0s'
            }}
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