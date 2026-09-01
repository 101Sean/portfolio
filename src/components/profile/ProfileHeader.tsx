import React from 'react';
import { Profile } from '../../types/profile';

interface ProfileHeaderProps {
    profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
    return (
        <div className="profile-header">
            <img
                src={profile.profileImage}
                alt={profile.name}
                className="profile-image"
            />
            <div className="profile-info">
                <h1>{profile.name}</h1>
                <p className="profile-title">{profile.title}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;