export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    featured?: boolean;
    content: string;
  }
  
  export type BlogCategory = {
    id: string;
    name: string;
    href?: string;
  }