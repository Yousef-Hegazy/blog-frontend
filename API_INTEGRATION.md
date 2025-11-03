# Connecting to Your Backend API

This guide shows you how to connect this frontend to your actual backend API.

## Quick Setup

1. **Set your API URL**

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=https://your-api.com/api
```

2. **Update API functions**

Open `lib/api/blog.ts` and uncomment the real API calls:

```typescript
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/posts`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
```

3. **Remove mock data**

Delete or comment out the `mockPosts` array and mock implementations.

## Expected API Endpoints

Your backend should provide these endpoints:

### Get All Posts
```
GET /posts
Response: BlogPost[]
```

### Get Post by ID
```
GET /posts/:id
Response: BlogPost | null
```

### Get Categories
```
GET /categories
Response: string[]
```

### Get Tags
```
GET /tags
Response: string[]
```

### Get Posts by Category (Optional)
```
GET /posts?category=Frontend
Response: BlogPost[]
```

### Get Posts by Tag (Optional)
```
GET /posts?tag=React
Response: BlogPost[]
```

## BlogPost Type

Your API should return posts matching this structure:

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: Date | string; // ISO string format
  imageUrl: string;
  tags: string[];
  categories: string[];
  readTime: number; // minutes
}
```

## Example API Response

```json
{
  "id": "1",
  "title": "Getting Started with Next.js",
  "excerpt": "Learn how to build modern web applications...",
  "content": "Full post content here...",
  "author": "John Doe",
  "publishedDate": "2024-01-15T00:00:00.000Z",
  "imageUrl": "https://example.com/image.jpg",
  "tags": ["Next.js", "React"],
  "categories": ["Frontend", "Tutorial"],
  "readTime": 5
}
```

## Caching Strategy

Next.js provides several caching options:

### 1. Time-based Revalidation (ISR)
```typescript
const res = await fetch(`${API_BASE_URL}/posts`, {
  next: { revalidate: 3600 } // Revalidate every hour
});
```

### 2. On-demand Revalidation
```typescript
const res = await fetch(`${API_BASE_URL}/posts`, {
  cache: 'no-store' // Always fetch fresh data
});
```

### 3. Static Generation
```typescript
const res = await fetch(`${API_BASE_URL}/posts`, {
  cache: 'force-cache' // Cache indefinitely
});
```

## Error Handling

The API client includes basic error handling. Customize as needed:

```typescript
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/posts`);
    
    if (!res.ok) {
      // Handle different HTTP status codes
      if (res.status === 404) {
        return [];
      }
      throw new Error(`API error: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array or rethrow based on your needs
    return [];
  }
}
```

## Authentication (if needed)

If your API requires authentication, add headers:

```typescript
const res = await fetch(`${API_BASE_URL}/posts`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
```

For Next.js authentication, consider:
- [NextAuth.js](https://next-auth.js.org/)
- [Clerk](https://clerk.com/)
- [Auth0](https://auth0.com/)

## CORS Configuration

If your backend is on a different domain, ensure CORS is configured:

**Backend (Express.js example):**
```javascript
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));
```

## Testing Your API

Test each endpoint before integrating:

```bash
# Test posts endpoint
curl https://your-api.com/api/posts

# Test single post
curl https://your-api.com/api/posts/1

# Test categories
curl https://your-api.com/api/categories

# Test tags
curl https://your-api.com/api/tags
```

## Environment Variables

### Development
```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### Production
Set in your hosting platform (Vercel, Netlify, etc.):
```
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

## Complete Example

Here's a complete `lib/api/blog.ts` with real API calls:

```typescript
import { BlogPost } from '@/lib/types/blog';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getTags(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/tags`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch tags');
  return res.json();
}
```

## Troubleshooting

### Issue: CORS errors
**Solution:** Configure CORS on your backend to allow your frontend domain.

### Issue: 404 errors
**Solution:** Verify your API endpoints and `NEXT_PUBLIC_API_URL` are correct.

### Issue: Type mismatches
**Solution:** Ensure your API response matches the `BlogPost` interface in `lib/types/blog.ts`.

### Issue: Slow loading
**Solution:** 
- Add appropriate caching with `next: { revalidate: X }`
- Optimize your backend API
- Consider pagination for large datasets

---

**Ready to go! Just uncomment the real API calls and deploy!** 🚀
