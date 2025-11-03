import { getAllPosts, getCategories } from '@/lib/api/blog';
import { Card } from 'primereact/card';
import Link from 'next/link';

export default async function CategoriesPage() {
  const [categories, posts] = await Promise.all([
    getCategories(),
    getAllPosts(),
  ]);

  // Count posts per category
  const categoryCounts = categories.map((category) => ({
    name: category,
    count: posts.filter((post) => post.categories.includes(category)).length,
  }));

  return (
    <div className="container mx-auto py-4">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-900 mb-2">
          <i className="pi pi-th-large mr-3" />
          Categories
        </h1>
        <p className="text-600 text-lg">Browse posts by category</p>
      </div>

      <div className="grid">
        {categoryCounts.map((category) => (
          <div key={category.name} className="col-12 md:col-6 lg:col-4 xl:col-3">
            <Link href={`/?category=${encodeURIComponent(category.name)}`} className="no-underline">
              <Card className="shadow-2 hover:shadow-4 transition-all transition-duration-300 cursor-pointer h-full">
                <div className="flex flex-column align-items-center text-center gap-3">
                  <div className="bg-primary-100 border-circle w-5rem h-5rem flex align-items-center justify-content-center">
                    <i className="pi pi-folder text-4xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-900 m-0">{category.name}</h3>
                  <p className="text-600 m-0">
                    {category.count} {category.count === 1 ? 'post' : 'posts'}
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
