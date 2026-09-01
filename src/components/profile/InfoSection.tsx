import React from 'react';

interface InfoSectionProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, icon, children }) => {
    return (
        <div className="info-section">
            <h3 className="info-title">
                {icon && <span className="info-icon">{icon}</span>}
                {title}
            </h3>
            <div className="info-content">
                {children}
            </div>
        </div>
    );
};

export default InfoSection;