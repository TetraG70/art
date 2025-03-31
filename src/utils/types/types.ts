export interface Artwork {
    id: string;
    title: string;
    medium: string;
    beforeImage: string;
    afterImage: string;
    process: string[];
    videoUrl?: string;
  }
  
  export interface ProjectPhase {
    title: string;
    description: string;
    icon: string;
  }