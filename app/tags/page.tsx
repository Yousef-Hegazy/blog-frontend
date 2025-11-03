import { getAllPosts, getTags } from '@/lib/api/blog';
import { Chip } from 'primereact/chip';
import Link from 'next/link';

export default async function TagsPage() {
  const [tags, posts] = await Promise.all([
    getTags(),
    getAllPosts(),
  ]);

  // Count posts per tag
  const tagCounts = tags.map((tag) => ({
    name: tag,
    count: posts.filter((post) => post.tags.includes(tag)).length,
  }));

  // Sort by count descending
  tagCounts.sort((a, b) => b.count - a.count);

  // Calculate font size based on count
  const maxCount = Math.max(...tagCounts.map((t) => t.count));
  const minCount = Math.min(...tagCounts.map((t) => t.count));

  const getFontSize = (count: number) => {
    const ratio = (count - minCount) / (maxCount - minCount || 1);
    return 1 + ratio * 1.5; // Range from 1rem to 2.5rem
  };

  return (
    <div className="container mx-auto py-4">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-900 mb-2">
          <i className="pi pi-tags mr-3" />
          Tags
        </h1>
        <p className="text-600 text-lg">Browse posts by tag (size indicates popularity)</p>
      </div>

      <div className="bg-white border-round shadow-2 p-5">
        <div className="flex flex-wrap gap-3 justify-content-center align-items-center">
          {tagCounts.map((tag) => (
            <Link
              key={tag.name}
              href={`/?tag=${encodeURIComponent(tag.name)}`}
              className="no-underline"
            >
              <div
                className="hover:scale-110 transition-all transition-duration-200 cursor-pointer"
                style={{ fontSize: `${getFontSize(tag.count)}rem` }}
              >
                <Chip
                  label={`${tag.name} (${tag.count})`}
                  className="bg-primary-100 text-primary-900 font-semibold"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-900 mb-3">All Tags</h2>
        <div className="grid">
          {tagCounts.map((tag) => (
            <div key={tag.name} className="col-12 sm:col-6 md:col-4 lg:col-3">
              <Link href={`/?tag=${encodeURIComponent(tag.name)}`} className="no-underline">
                <div className="bg-white border-round shadow-1 hover:shadow-3 transition-all transition-duration-200 p-3 cursor-pointer">
                  <div className="flex justify-content-between align-items-center">
                    <span className="font-semibold text-900">
                      <i className="pi pi-tag mr-2 text-primary" />
                      {tag.name}
                    </span>
                    <span className="bg-primary text-white border-circle px-2 py-1 text-sm">
                      {tag.count}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
