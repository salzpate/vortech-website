import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import styles from '@/styles/kontakt.module.css';

export const metadata: Metadata = {
  title: `Kontakt - ${SITE_TITLE}`,
};

function KontaktLayout({ children }: LayoutProps<'/kontakt'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="kontakt">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default KontaktLayout;
