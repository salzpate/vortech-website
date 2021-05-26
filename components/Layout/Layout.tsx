import Header from '@/components/Header';
import { MenuData } from '@/data/MenuData';
import { Footer,  } from '@salzpate/react-ui';
import Head from 'next/head';
import { SnackBarProvider } from '../SnackBar';

export const siteTitle = 'VORTECH FORCE Generalimport Krammer';

const footerText = '© Elfi Krammer - VORTECH FORCE Generalimport - Am Hügel 3 - 93089 Aufhausen - +49 9454 9498523';

interface LayoutProps {
  title?: string;
  activeMenu?: string;
}

function Layout(props: React.PropsWithChildren<LayoutProps>): JSX.Element {
  const { children, title = siteTitle, activeMenu } = props;
  const navMenuItems = MenuData.main;
  const footerMenuItems = MenuData.footer;
  return (
    <SnackBarProvider>
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="VORTECH FORCE, ein innovatives Staub- und Luftreinigungssystem, welches besonders für Allergiker geeignet ist. In Deutschland vertrieben durch Krammer VORTECH FORCE Generalimport." />
      </Head>

      <Header activeMenu={activeMenu} navMenuItems={navMenuItems} />

      <main className="flex-1 pt-14 sm:pt-16">{children}</main>

      <Footer text={footerText} menuItems={footerMenuItems} />
    </SnackBarProvider>
  );
}
export default Layout;
