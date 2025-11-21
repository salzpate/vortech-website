import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { MenuData } from '@/data/MenuData';
import { SITE_DESC, SITE_TITLE } from '@/lib/constants';
import { SnackBarProvider } from '@/components/SnackBar';
import SkipLink from '@/components/SkipLink';
import ScrollToTop from '@/components/ScrollToTop';

import '@salzpate/react-ui/dist/style.css';
import '@/styles/globals.css';
import '@/styles/print.css';
import { Footer } from '@/components/Footer';

const footerText = '© Elfi Bast - VORTECH FORCE Generalimport - Am Hügel 3 - 93089 Aufhausen - +49 9454 9498523';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
};

function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  const footerMenuItems = MenuData.footer;
  return (
    <html lang="de">
      <head />
      <body>
        <SkipLink />
        <ScrollToTop />
        <SnackBarProvider>
          {children}
          <Footer text={footerText} menuItems={footerMenuItems} />
        </SnackBarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
