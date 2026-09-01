import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    padding?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
                                                 children,
                                                 className = '',
                                                 padding = '32px'
                                             }) => {
    return (
        <div
            className={`glass ${className}`}
            style={{ padding }}
        >
            {children}
        </div>
    );
};

export default GlassCard;