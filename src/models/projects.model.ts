export interface Project {
    id?: string;
    title: string;
    description: string;
    dateStarted: string;
    developers: string;
    brds?: BRD[];
}

export interface Projects {
    projects: Project
}

export interface BRD {
    filename: string;
    fileUrl: string;
}