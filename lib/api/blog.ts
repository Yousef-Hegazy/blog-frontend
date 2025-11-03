import { BlogPost } from '@/lib/types/blog';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock data for demonstration (replace with real API calls)
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and its powerful features.',
    content: 'Full content here...',
    author: 'John Doe',
    publishedDate: new Date('2024-01-15'),
    imageUrl: 'https://picsum.photos/seed/nextjs/800/400',
    tags: ['Next.js', 'React', 'Web Development'],
    categories: ['Frontend', 'Tutorial'],
    readTime: 5,
  },
  {
    id: '2',
    title: 'Mastering TypeScript for React',
    excerpt: 'Discover best practices for using TypeScript in your React applications.',
    content: 'Full content here...',
    author: 'Jane Smith',
    publishedDate: new Date('2024-01-20'),
    imageUrl: 'https://picsum.photos/seed/typescript/800/400',
    tags: ['TypeScript', 'React', 'JavaScript'],
    categories: ['Frontend', 'Programming'],
    readTime: 8,
  },
  {
    id: '3',
    title: 'Clean Architecture in Frontend',
    excerpt: 'Apply clean architecture principles to your frontend applications for better maintainability.',
    content: 'Full content here...',
    author: 'Mike Johnson',
    publishedDate: new Date('2024-02-01'),
    imageUrl: 'https://picsum.photos/seed/architecture/800/400',
    tags: ['Architecture', 'Design Patterns', 'Best Practices'],
    categories: ['Architecture', 'Tutorial'],
    readTime: 12,
  },
  {
    id: '4',
    title: 'State Management with Zustand',
    excerpt: 'Simplify your state management with Zustand, a lightweight alternative to Redux.',
    content: 'Full content here...',
    author: 'Sarah Williams',
    publishedDate: new Date('2024-02-10'),
    imageUrl: 'https://picsum.photos/seed/zustand/800/400',
    tags: ['Zustand', 'State Management', 'React'],
    categories: ['Frontend', 'Tutorial'],
    readTime: 6,
  },
  {
    id: '5',
    title: 'Building Accessible Web Components',
    excerpt: 'Learn how to create web components that are accessible to all users.',
    content: 'Full content here...',
    author: 'David Brown',
    publishedDate: new Date('2024-02-15'),
    imageUrl: 'https://picsum.photos/seed/accessibility/800/400',
    tags: ['Accessibility', 'Web Components', 'HTML'],
    categories: ['Frontend', 'Best Practices'],
    readTime: 10,
  },
  {
    id: '6',
    title: 'PrimeReact UI Components Guide',
    excerpt: 'Explore the powerful UI component library PrimeReact and how to use it effectively.',
    content: 'Full content here...',
    author: 'Emily Davis',
    publishedDate: new Date('2024-02-20'),
    imageUrl: 'https://picsum.photos/seed/primereact/800/400',
    tags: ['PrimeReact', 'UI', 'React'],
    categories: ['Frontend', 'Tutorial'],
    readTime: 7,
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // TODO: Replace with actual API call when backend is ready
    // const res = await fetch(`${API_BASE_URL}/posts`, {
    //   next: { revalidate: 60 } // Revalidate every 60 seconds
    // });
    // if (!res.ok) throw new Error('Failed to fetch posts');
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    // TODO: Replace with actual API call
    // const res = await fetch(`${API_BASE_URL}/posts/${id}`);
    // if (!res.ok) return null;
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockPosts.find((post) => post.id === id) || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    // TODO: Replace with actual API call
    // const res = await fetch(`${API_BASE_URL}/categories`);
    // if (!res.ok) throw new Error('Failed to fetch categories');
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    const categories = new Set<string>();
    mockPosts.forEach((post) => {
      post.categories.forEach((category) => categories.add(category));
    });
    return Array.from(categories).sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function getTags(): Promise<string[]> {
  try {
    // TODO: Replace with actual API call
    // const res = await fetch(`${API_BASE_URL}/tags`);
    // if (!res.ok) throw new Error('Failed to fetch tags');
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    const tags = new Set<string>();
    mockPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    // TODO: Replace with actual API call
    // const res = await fetch(`${API_BASE_URL}/posts?category=${encodeURIComponent(category)}`);
    // if (!res.ok) throw new Error('Failed to fetch posts');
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockPosts.filter((post) => post.categories.includes(category));
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    throw error;
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  try {
    // TODO: Replace with actual API call
    // const res = await fetch(`${API_BASE_URL}/posts?tag=${encodeURIComponent(tag)}`);
    // if (!res.ok) throw new Error('Failed to fetch posts');
    // return res.json();

    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockPosts.filter((post) => post.tags.includes(tag));
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    throw error;
  }
}
