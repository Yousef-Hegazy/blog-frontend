'use client';

import { useMemo } from 'react';
import BlogPostCard from './BlogPost';
import { BlogPost } from '@/lib/types/blog';
import { useFilterStore } from '@/presentation/store/filterStore';
import { Message } from 'primereact/message';

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  const { selectedCategories, selectedTags, searchQuery } = useFilterStore();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Filter by categories
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.some((cat) => post.categories.includes(cat))
      ) {
        return false;
      }

      // Filter by tags
      if (selectedTags.length > 0 && !selectedTags.some((tag) => post.tags.includes(tag))) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.categories.some((cat) => cat.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [posts, selectedCategories, selectedTags, searchQuery]);

  if (filteredPosts.length === 0) {
    return (
      <div className="col-12">
        <Message
          severity="info"
          text="No posts found matching your filters. Try adjusting your search criteria."
          className="w-full"
        />
      </div>
    );
  }

  return (
    <>
      {filteredPosts.map((post) => (
        <div key={post.id} className="col-12 lg:col-6 xl:col-4">
          <BlogPostCard post={post} />
        </div>
      ))}
    </>
  );
}
