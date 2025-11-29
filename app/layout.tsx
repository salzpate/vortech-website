import '@/styles/globals.css';
import '@/styles/print.css';

import { Metadata, Viewport } from 'next';
import { JSX, PropsWithChildren } from 'react';

import { Footer } from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SkipLink from '@/components/SkipLink';
import { SnackBarProvider } from '@/components/SnackBar';
import ThemeProvider from '@/components/ThemeProvider';
import { MenuData } from '@/data/MenuData';
import { SITE_DESC, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants';

const footerText = '© Elfi Bast - VORTECH FORCE Generalimport - Am Hügel 3 - 93089 Aufhausen - +49 9454 9498523';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Elfi Bast', url: SITE_URL }],
  creator: 'Elfi Bast',
  publisher: 'VORTECH FORCE Generalimport Krammer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: SITE_NAME,
    images: [
      {
        url: '/assets/images/vortech-geraet-abb76df4cb.jpg',
        width: 1200,
        height: 630,
        alt: 'VORTECH FORCE Staubsauger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ['/assets/images/vortech-geraet-abb76df4cb.jpg'],
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
  alternates: {
    canonical: SITE_URL,
  },
};

function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  const footerMenuItems = MenuData.footer;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VORTECH FORCE Generalimport Krammer',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    description: SITE_DESC,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Hügel 3',
      addressLocality: 'Aufhausen',
      postalCode: '93089',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-9454-9498523',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: 'German',
    },
  };

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        <ThemeProvider>
          <SkipLink />
          <ScrollToTop />
          <SnackBarProvider>
            {children}
            <Footer text={footerText} menuItems={footerMenuItems} />
          </SnackBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout;
