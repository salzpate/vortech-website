import { Metadata } from 'next';
import Link from 'next/link';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import QuickSearch from '@/components/QuickSearch';
import SiteMap from '@/components/SiteMap';
import { MenuData } from '@/data/MenuData';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

function FileNotFound(): JSX.Element {
  const popularPages = [
    { title: 'Startseite', href: '/', icon: 'home' },
    { title: 'VORTECH FORCE', href: '/vortech-force/', icon: 'product' },
    { title: 'Kontakt', href: '/kontakt/', icon: 'mail' },
  ];

  return (
    <HeaderMainLayout>
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <p className="pb-6 text-lg text-paragraph sm:pb-8 dark:text-paragraph-dark">Die gewünschte Seite wurde leider nicht gefunden. Möglicherweise wurde sie verschoben oder gelöscht.</p>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Beliebte Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularPages.map(page => (
              <Link key={page.href} href={page.href} className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                {page.icon === 'home' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                )}
                {page.icon === 'product' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                )}
                {page.icon === 'mail' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                <span className="font-medium text-paragraph dark:text-paragraph-dark">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6 sm:pb-8">
          <QuickSearch menuItems={MenuData.main} />
        </div>
        <div className="pb-6 sm:pb-8">
          <SiteMap menuItems={MenuData.main} title="Alle Seiten" compact />
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
