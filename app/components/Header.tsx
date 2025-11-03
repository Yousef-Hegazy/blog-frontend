'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { useFilterStore } from '@/presentation/store/filterStore';

export default function Header() {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery } = useFilterStore();

  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {},
      template: (item) => (
        <Link
          href="/"
          className={`p-menuitem-link flex align-items-center px-3 py-2 ${
            pathname === '/' ? 'bg-primary-100' : ''
          }`}
        >
          <span className={item.icon + ' mr-2'} />
          <span className="font-medium">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Categories',
      icon: 'pi pi-th-large',
      command: () => {},
      template: (item) => (
        <Link
          href="/categories"
          className={`p-menuitem-link flex align-items-center px-3 py-2 ${
            pathname === '/categories' ? 'bg-primary-100' : ''
          }`}
        >
          <span className={item.icon + ' mr-2'} />
          <span className="font-medium">{item.label}</span>
        </Link>
      ),
    },
    {
      label: 'Tags',
      icon: 'pi pi-tags',
      command: () => {},
      template: (item) => (
        <Link
          href="/tags"
          className={`p-menuitem-link flex align-items-center px-3 py-2 ${
            pathname === '/tags' ? 'bg-primary-100' : ''
          }`}
        >
          <span className={item.icon + ' mr-2'} />
          <span className="font-medium">{item.label}</span>
        </Link>
      ),
    },
  ];

  const start = (
    <Link href="/" className="flex align-items-center no-underline">
      <i className="pi pi-book text-4xl text-primary mr-3" />
      <span className="text-2xl font-bold text-primary">My Blog</span>
    </Link>
  );

  const end = (
    <div className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full md:w-auto"
      />
    </div>
  );

  return (
    <header className="mb-4 shadow-2 sticky top-0 z-20">
      <Menubar model={items} start={start} end={end} className="border-none border-round-none" />
    </header>
  );
}
