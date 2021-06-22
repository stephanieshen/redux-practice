export interface Project {
    id?: string;
    title: string;
    description: string;
    dateStarted: string;
    developers: string;
}

export interface Projects {
    projects: Project
}