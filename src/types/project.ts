export type ProjectCategory = 'vue' | 'iot' | 'backend';

export interface TechDetail {
    name: string;
    description: string;
    icon?: string;
}

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    images: string[];
    description: string[];
    role: string;
    period: string;
    techStack: string[];
    techDetails: TechDetail[];
    links?: {
        github?: string;
        demo?: string;
        blog?: string;
    };
    plugins?: IoTPlugin[];
}

export interface IoTPlugin {
    name: string;
    description: string;
    icon?: string;
    npmLink?: string;
    downloads?: string;
}