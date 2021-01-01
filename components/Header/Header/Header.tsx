import { ActiveMenuItem, NavMenuItem } from '@/components/commons/Menu/Menu';
import NavBarLink from '@/components/Header/NavBarLink';
import NavLink from '@/components/Header/NavLink';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: HeaderProps): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;

  return (
    <>
      <header className="bg-white fixed z-10 w-full dark:bg-gray-900">
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a className={styles.headlogo} tabIndex={-1}>
                    &nbsp;
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="inline-flex items-center justify-center space-x-6">
                {navMenuItems.map((item, i) => {
                  return (
                    <NavBarLink key={i} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                      {item.children}
                    </NavBarLink>
                  );
                })}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full text-header-color ease-in-out transition-all duration-300 hover:opacity-75 hover:bg-black dark:text-white dark:text-opacity-87"
                onClick={() => setIsOn(true)}
              >
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div
        aria-hidden="true"
        className={cn('z-10 fixed inset-0 transition-opacity', { hidden: !isOn })}
        onClick={() => setIsOn(false)}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            setIsOn(false);
          }
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <aside className={cn('transform top-0 left-0 w-64 bg-gray-100 shadow-xl fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 dark:bg-gray-900', { 'translate-x-0': isOn }, { '-translate-x-full': !isOn })}>
        <span className="flex w-full items-center p-4">
          <Link href="/">
            <a className={styles.headlogoSide} tabIndex={-1}>
              &nbsp;
            </a>
          </Link>
        </span>
        {navMenuItems.map((item, i) => {
          return (
            <span key={i} className="flex mb-1 px-2">
              <NavLink href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                {item.children}
              </NavLink>
            </span>
          );
        })}
      </aside>
    </>
  );
}
export default Header;
