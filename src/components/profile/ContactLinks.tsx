import React from 'react';

interface ContactLinksProps {
    blogUrl: string;
    githubUrl: string;
    email: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ blogUrl, githubUrl, email }) => {
    return (
        <div className="contact-links">
            <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fas fa-blog"></i><span>Blog</span>
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i><span>GitHub</span>
            </a>

            <a href={`mailto:${email}`} className="contact-link">
                <i className="fas fa-envelope"></i><span>Email</span>
            </a>
        </div>
    );
};

export default ContactLinks;