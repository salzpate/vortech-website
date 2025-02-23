import { JSX } from 'react';
import { NavMenu } from '@/components/commons/Menu/Menu';
import Link from 'next/link';
import styles from './NavBarLink.module.css';

type NavBarLinkProps = NavMenu;

function NavBarLink(props: Readonly<NavBarLinkProps>): JSX.Element {
  const { href, children, activeMenu, activeMenuName } = props;
  return (
    <Link href={href} className={activeMenuName && activeMenu && activeMenu === activeMenuName ? styles.activated : styles.navbarlink}>
      {children}
    </Link>
  );
}
export default NavBarLink;
