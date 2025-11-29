'use client';

import { FooterLink } from '@salzpate/react-ui';
import { JSX, ReactNode } from 'react';

import { NavMenuItem } from '../commons/Menu/Menu';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: Readonly<FooterProps>): JSX.Element {
  const { text, menuItems } = props;
  return (
    <footer className="w-full bg-gray-800 py-6 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex justify-center sm:mb-0 md:justify-end">
          <ThemeSwitcher />
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row md:flex-wrap">
          <div className="order-2 flex items-center lg:order-1">
            <div className="my-8 text-center text-xs font-thin text-gray-400 md:my-0 md:text-left md:text-sm">{text}</div>
          </div>
          <div className="order-1 flex flex-col md:grow md:flex-row md:items-stretch md:justify-end">
            {menuItems.map((item, i) => {
              return (
                <span key={`footer-item-${item.id}`} className="text-center md:text-left">
                  {i > 0 && <span className="mx-1 hidden text-gray-600 md:inline">|</span>}
                  <FooterLink href={item.href}>{item.children}</FooterLink>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
