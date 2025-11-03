import { create } from 'zustand';

interface FilterState {
  selectedCategories: string[];
  selectedTags: string[];
  searchQuery: string;
  setSelectedCategories: (categories: string[]) => void;
  setSelectedTags: (tags: string[]) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategories: [],
  selectedTags: [],
  searchQuery: '',
  setSelectedCategories: (categories) => set({ selectedCategories: categories }),
  setSelectedTags: (tags) => set({ selectedTags: tags }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearFilters: () => set({ selectedCategories: [], selectedTags: [], searchQuery: '' }),
}));
