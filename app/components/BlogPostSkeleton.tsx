'use client';

import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';

export default function BlogPostSkeleton() {
  return (
    <Card className="w-full shadow-3">
      <Skeleton width="100%" height="15rem" className="mb-3" />
      <Skeleton width="80%" height="2rem" className="mb-2" />
      <Skeleton width="40%" height="1.5rem" className="mb-3" />
      <Skeleton width="100%" height="4rem" className="mb-3" />
      <div className="flex gap-2 mb-3">
        <Skeleton width="5rem" height="2rem" />
        <Skeleton width="6rem" height="2rem" />
      </div>
      <div className="flex justify-content-between">
        <Skeleton width="8rem" height="2rem" />
        <Skeleton width="6rem" height="2rem" />
      </div>
    </Card>
  );
}
