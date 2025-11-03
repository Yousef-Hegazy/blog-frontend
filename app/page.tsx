import { getAllPosts, getCategories, getTags } from '@/lib/api/blog';
import FilterSidebar from './components/FilterSidebar';
import BlogPostList from './components/BlogPostList';
import FilterInitializer from './components/FilterInitializer';
import { Suspense } from 'react';

export default async function Home() {
  // Fetch data server-side from API
  const [posts, categories, tags] = await Promise.all([
    getAllPosts(),
    getCategories(),
    getTags(),
  ]);

  return (
    <>
      <Suspense fallback={null}>
        <FilterInitializer />
      </Suspense>

      <div className="grid">
        <div className="col-12 lg:col-3">
          <FilterSidebar categories={categories} tags={tags} />
        </div>
        <div className="col-12 lg:col-9">
          <div className="grid">
            <BlogPostList posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
