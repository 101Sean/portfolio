export interface Profile {
    name: string;
    title: string;              // "Backend Developer (Former Frontend)"
    email: string;
    blogUrl: string;
    githubUrl: string;
    profileImage: string;
}

export interface Education {
    school: string;
    degree: string;
    major: string;
    period: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    date: string;
}

export interface Career {
    company: string;
    role: string;
    period: string;
}