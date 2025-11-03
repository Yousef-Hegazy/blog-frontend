export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: Date | string;
  imageUrl: string;
  tags: string[];
  categories: string[];
  readTime: number;
}
