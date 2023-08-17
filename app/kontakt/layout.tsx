import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/kontakt.module.css';

export const metadata: Metadata = {
  title: `Kontakt - ${SITE_TITLE}`,
};

function KontaktLayout({ children }: PropsWithChildren<object>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="kontakt">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default KontaktLayout;
