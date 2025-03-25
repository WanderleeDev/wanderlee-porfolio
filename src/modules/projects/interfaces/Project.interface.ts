export interface Project {
  title: string;
  links: Routes;
  deploy: string;
  description: string;
  image: string;
  technologies: string[];
  concepts: string[];
}

export interface Routes {
  code: string;
  demo: string;
}
