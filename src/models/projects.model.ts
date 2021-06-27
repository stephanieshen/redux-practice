export interface Project {
    id?: string;
    title: string;
    description: string;
    dateStarted: string;
    developers: string;
    brds?: ProjectFile[];
}

export interface Projects {
    projects: Project
}

export interface ProjectFile {
    id?: string;
    filename: string;
    fileUrl: string;
    dateUploaded: any;
    uploadedBy: string;
}