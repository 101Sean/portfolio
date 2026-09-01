import React from 'react';

import GlassCard from '../components/common/GlassCard';
import ProfileHeader from '../components/profile/ProfileHeader';
import ContactLinks from '../components/profile/ContactLinks';
import InfoSection from '../components/profile/InfoSection';

import {
    profileData,
    educationData,
    certificateData,
    careerData,
    introText,
    skillGroups
} from '../data/profileData';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <GlassCard className="main-profile-card">
                {/* 상단: 프로필 헤더 */}
                <div className="profile-top">
                    <ProfileHeader profile={profileData} />

                    <ContactLinks
                        blogUrl={profileData.blogUrl}
                        githubUrl={profileData.githubUrl}
                        email={profileData.email}
                    />
                </div>

                {/* 자기소개 */}
                <div className="intro-section">
                    {introText.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>

                {/* 하단: 3단 정보 그리드 */}
                <div className="info-grid">
                    <InfoSection title="학력" icon={<i className="fas fa-graduation-cap"></i>}>
                        <div className="info-list">
                            {educationData.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <p className="info-main">{edu.school}</p>
                                    <p className="info-sub">{edu.degree} · {edu.major}</p>
                                    <p className="info-period">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </InfoSection>

                    <InfoSection title="자격증" icon={<i className="fas fa-certificate"></i>}>
                        <div className="info-list">
                            {certificateData.map((cert, index) => (
                                <div key={index} className="info-item">
                                    <p className="info-main">{cert.name}</p>
                                    <p className="info-sub">{cert.issuer}</p>
                                    <p className="info-period">{cert.date}</p>
                                </div>
                            ))}
                        </div>
                    </InfoSection>

                    <InfoSection title="경력" icon={<i className="fas fa-briefcase"></i>}>
                        <div className="info-list">
                            {careerData.map((career, index) => (
                                <div key={index} className="career-item">
                                    <p className="info-main">{career.company}</p>
                                    <p className="info-sub">{career.role}</p>
                                    <p className="info-period">{career.period}</p>
                                </div>
                            ))}
                        </div>
                    </InfoSection>
                </div>

                <div className="skill-section">
                    <h3 className="info-title">
                        <i className="fas fa-layer-group"></i> 기술 스택
                    </h3>

                    <div className="skill-grid">
                        <div className="skill-group">
                            <span className="skill-label">Frontend</span>
                            <div className="skill-badges">
                                {skillGroups.frontend.map(skill => (
                                    <span key={skill} className="skill-badge frontend">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-group">
                            <span className="skill-label">Backend</span>
                            <div className="skill-badges">
                                {skillGroups.backend.map(skill => (
                                    <span key={skill} className="skill-badge backend">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-group">
                            <span className="skill-label">Database</span>
                            <div className="skill-badges">
                                {skillGroups.database.map(skill => (
                                    <span key={skill} className="skill-badge database">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-group">
                            <span className="skill-label">Tools</span>
                            <div className="skill-badges">
                                {skillGroups.tools.map(skill => (
                                    <span key={skill} className="skill-badge tools">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>

            <div className="slide-hint" onClick={() => navigate('/projects')}>
                <span>프로젝트</span>
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    );
};

export default Home;