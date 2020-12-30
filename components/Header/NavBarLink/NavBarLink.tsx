import { NavMenu } from '@/components/commons/Menu/Menu';
import Link from 'next/link';
import styles from './NavBarLink.module.css';

type NavBarLinkProps = NavMenu;

function NavBarLink(props: NavBarLinkProps): JSX.Element {
  const { href, children, activeMenu, activeMenuName } = props;
  return (
    <Link href={href}>
      <a className={activeMenuName && activeMenu && activeMenu === activeMenuName ? styles.activated : styles.navbarlink}>{children}</a>
    </Link>
  );
}
export default NavBarLink;
