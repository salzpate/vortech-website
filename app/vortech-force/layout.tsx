import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: `Vortech Force - ${SITE_TITLE}`,
};

function VortechForceLayout({ children }: LayoutProps<'/vortech-force'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="vortech">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default VortechForceLayout;
