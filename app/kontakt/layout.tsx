import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Kontakt - ${SITE_TITLE}`,
};

function KontaktLayout({ children }: LayoutProps<'/kontakt'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="kontakt">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass="bg-[url('/assets/images/head-kontakt-1024-96c7d40843.jpg')] lg:bg-[url('/assets/images/head-kontakt-1920-6854c073a7.jpg')]" />
      {children}
    </HeaderMainLayout>
  );
}

export default KontaktLayout;
