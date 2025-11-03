'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFilterStore } from '@/presentation/store/filterStore';

export default function FilterInitializer() {
  const searchParams = useSearchParams();
  const { setSelectedCategories, setSelectedTags } = useFilterStore();

  useEffect(() => {
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');

    if (category) {
      setSelectedCategories([category]);
    }

    if (tag) {
      setSelectedTags([tag]);
    }
  }, [searchParams, setSelectedCategories, setSelectedTags]);

  return null;
}
