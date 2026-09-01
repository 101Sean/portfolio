import React from 'react';
import { Certificate } from '../../types/profile';

interface CertificateBadgeProps {
    certificate: Certificate;
}

const CertificateBadge: React.FC<CertificateBadgeProps> = ({ certificate }) => {
    return (
        <div className="certificate-badge">
            <div className="cert-name">{certificate.name}</div>
            <div className="cert-meta">
                <span className="cert-issuer">{certificate.issuer}</span>
                <span className="cert-date">{certificate.date}</span>
            </div>
        </div>
    );
};

export default CertificateBadge;