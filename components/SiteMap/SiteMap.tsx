import { JSX } from 'react';
import Link from 'next/link';
import { NavMenuItem } from '@/components/commons/Menu/Menu';

interface SiteMapProps {
  menuItems: NavMenuItem[];
  title?: string;
  compact?: boolean;
}

function SiteMap({ menuItems, title = 'Sitemap', compact = false }: Readonly<SiteMapProps>): JSX.Element {
  const renderMenuItem = (item: NavMenuItem, level = 0) => {
    const indent = level > 0 ? 'ml-4' : '';
    const href = typeof item.href === 'string' ? item.href : '/';

    return (
      <div key={href} className={compact ? '' : 'mb-2'}>
        <Link href={href} className={`inline-flex items-center py-2 text-link hover:underline dark:text-link-dark ${indent} ${level === 0 ? 'font-medium uppercase' : ''}`}>
          {level > 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          )}
          {item.children}
        </Link>
      </div>
    );
  };

  return (
    <nav aria-label={title} className="bg-gray-50 p-6 dark:bg-gray-900">
      <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">{title}</h3>
      <div className={compact ? 'space-y-1' : 'space-y-2'}>{menuItems.map(item => renderMenuItem(item))}</div>
    </nav>
  );
}

export default SiteMap;
