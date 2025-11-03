'use client';

import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Chip } from 'primereact/chip';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { BlogPost } from '@/lib/types/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const header = (
    <div className="relative">
      <img
        alt={post.title}
        src={post.imageUrl}
        className="w-full h-15rem object-cover"
        style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
      />
    </div>
  );

  const footer = (
    <div className="flex justify-content-between align-items-center">
      <div className="flex align-items-center gap-2">
        <Avatar icon="pi pi-user" shape="circle" size="normal" />
        <span className="text-sm font-medium">{post.author}</span>
      </div>
      <Link href={`/post/${post.id}`}>
        <Button label="Read More" icon="pi pi-arrow-right" iconPos="right" text />
      </Link>
    </div>
  );

  return (
    <Card
      header={header}
      footer={footer}
      className="w-full shadow-3 hover:shadow-4 transition-all transition-duration-300"
    >
      <div className="flex flex-column gap-3">
        <div className="flex justify-content-between align-items-start">
          <h3 className="m-0 text-2xl font-bold text-900">{post.title}</h3>
        </div>

        <div className="flex gap-2 flex-wrap">
          {post.categories.map((category) => (
            <Tag key={category} severity="info" value={category} />
          ))}
        </div>

        <p className="text-600 line-height-3 m-0">{post.excerpt}</p>

        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} className="text-sm" />
          ))}
        </div>

        <div className="flex gap-3 text-sm text-500">
          <span>
            <i className="pi pi-calendar mr-1" />
            {formattedDate}
          </span>
          <span>
            <i className="pi pi-clock mr-1" />
            {post.readTime} min read
          </span>
        </div>
      </div>
    </Card>
  );
}
