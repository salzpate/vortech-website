import { NavMenuItem } from '@/components/commons/Menu/Menu';
import FooterLink from '@/components/Footer/FooterLink';
import { ReactNode } from 'react';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: FooterProps): JSX.Element {
  const { text, menuItems } = props;
  return (
    <footer className="bg-gray-800 w-full py-6 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-col sm:flex-row md:flex-wrap">
          <div className="flex items-center order-2 lg:order-1">
            <div className="text-gray-400 font-thin my-8 text-xs text-center md:text-left md:text-sm md:my-0">{text}</div>
          </div>
          <div className="flex order-1 flex-col md:flex-grow md:items-stretch md:justify-end md:flex-row">
            {menuItems.map((item, i) => {
              return (
                <span key={'footer' + i} className="text-center md:text-left">
                  {i > 0 && <span className="text-gray-600 mx-1 hidden md:inline">|</span>}
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
