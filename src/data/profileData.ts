import { Profile, Education, Certificate, Career } from '../types/profile';

export const profileData: Profile = {
    name: "유승원",
    title: "Fullstack Developer",
    email: "mikeryu98@gmail.com",
    blogUrl: "https://kingsean.tistory.com/",
    githubUrl: "https://github.com/101Sean",
    profileImage: "/images/ryu.jpg"
};

export const educationData: Education[] = [
    { school: "한국방송통신대학교", degree: "학사", major: "통계데이터과학과", period: "2026.07 - 재학중" },
    { school: "인천재능대학교", degree: "전문학사", major: "컴퓨터정보과", period: "2017.03 - 2021.02" }
];

export const certificateData: Certificate[] = [
    { name: "정보처리기사", issuer: "한국산업인력공단", date: "2026.06" },
    { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2026.03" }
];

export const careerData: Career[] = [
    {
        company: "닥터소프트",
        role: "프론트엔드 개발 + 백엔드 보조",
        period: "2021.10 - 2024.12"
    }
];

// 기술 스택
export const skillGroups = {
    frontend: ["Javascript", "TypeScript", "Vue.js", "React", "CSS", "Vuex"],
    backend: ["Java", "Node.js", "Spring Boot", "Spring Security", "JPA", "Python"],
    database: ["MSSQL", "MySQL", "Redis"],
    tools: ["Linux", "Git", "Docker"]
};

// 자기소개
export const introText = [
    "3년간 Vue.js 기반 엔터프라이즈 대시보드를 개발하며 프론트엔드에 깊이를 쌓았고,",
    "현재는 Spring·Node.js로 백엔드까지 영역을 넓혀 풀스택으로 서비스를 설계·구현하는 개발자입니다.",
    "IoT 플러그인을 배포하며 서버-클라이언트-디바이스를 아우르는 경험을 갖췄습니다."
];