import BlogPostSkeleton from './components/BlogPostSkeleton';

export default function Loading() {
  return (
    <div className="grid">
      <div className="col-12 lg:col-3">
        <div className="bg-white border-round shadow-2 p-4">
          <div className="animate-pulse">
            <div className="h-2rem bg-gray-200 border-round mb-3"></div>
            <div className="h-8rem bg-gray-200 border-round mb-3"></div>
            <div className="h-8rem bg-gray-200 border-round"></div>
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-9">
        <div className="grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="col-12 lg:col-6 xl:col-4">
              <BlogPostSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
