import Link from 'next/link';
import { JSX } from 'react';

import { NavMenu } from '@/components/commons/Menu/Menu';
import { cn } from '@/utils/cn';

type NavBarLinkProps = NavMenu;

function NavBarLink(props: Readonly<NavBarLinkProps>): JSX.Element {
  const { href, children, activeMenu, activeMenuName } = props;
  const isActive = activeMenuName && activeMenu && activeMenu === activeMenuName;

  return (
    <Link
      href={href}
      className={cn(
        // Base Styles
        'relative text-sm font-thin tracking-widest uppercase',
        'text-gray-900 dark:text-gray-300',
        'transition-all duration-300 ease-in-out',
        // Pseudo-Element (Underline)
        'before:absolute before:bottom-[-8px] before:left-0',
        'before:h-[2px] before:w-0 before:opacity-0',
        'before:bg-secondary dark:before:bg-secondary-dark',
        'before:transition-all before:duration-300 before:ease-in-out',
        "before:content-['']",
        // Hover States
        'hover:text-secondary dark:hover:text-secondary-dark',
        'hover:opacity-75',
        'hover:before:w-full hover:before:opacity-75',
        // Active State
        isActive && 'text-secondary dark:text-secondary-dark',
        isActive && 'before:w-full before:opacity-100',
      )}
    >
      {children}
    </Link>
  );
}
export default NavBarLink;
