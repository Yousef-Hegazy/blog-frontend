'use client';

import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';
import { useFilterStore } from '@/presentation/store/filterStore';

interface FilterSidebarProps {
  categories: string[];
  tags: string[];
}

export default function FilterSidebar({ categories, tags }: FilterSidebarProps) {
  const { selectedCategories, selectedTags, setSelectedCategories, setSelectedTags, clearFilters } =
    useFilterStore();

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <Card className="w-full shadow-2 sticky top-[70px]" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="flex justify-content-between align-items-center mb-3">
        <h3 className="m-0 text-xl font-bold">
          <i className="pi pi-filter mr-2" />
          Filters
        </h3>
        {hasActiveFilters && (
          <Button
            label="Clear"
            icon="pi pi-times"
            size="small"
            text
            severity="secondary"
            onClick={clearFilters}
          />
        )}
      </div>

      <Accordion multiple activeIndex={[0, 1]}>
        <AccordionTab header="Categories">
          <div className="flex flex-column gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category);
              return (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer transition-all transition-duration-200 ${
                    isSelected ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  icon={isSelected ? 'pi pi-check' : undefined}
                />
              );
            })}
          </div>
        </AccordionTab>

        <AccordionTab header="Tags">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`cursor-pointer transition-all transition-duration-200 ${
                    isSelected ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  icon={isSelected ? 'pi pi-check' : undefined}
                />
              );
            })}
          </div>
        </AccordionTab>
      </Accordion>

      {hasActiveFilters && (
        <div className="mt-3 p-3 bg-primary-50 border-round">
          <p className="text-sm font-semibold text-primary-900 mb-2">Active Filters:</p>
          <div className="flex flex-column gap-2">
            {selectedCategories.length > 0 && (
              <div>
                <span className="text-xs text-600">Categories:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedCategories.map((cat) => (
                    <Chip
                      key={cat}
                      label={cat}
                      removable
                      onRemove={() => {
                        handleCategoryClick(cat);
                        return true;
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {selectedTags.length > 0 && (
              <div>
                <span className="text-xs text-600">Tags:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedTags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      removable
                      onRemove={() => {
                        handleTagClick(tag);
                        return true;
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
