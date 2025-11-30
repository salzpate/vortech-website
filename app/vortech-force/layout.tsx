import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Vortech Force - ${SITE_TITLE}`,
};

function VortechForceLayout({ children }: LayoutProps<'/vortech-force'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="vortech">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass="bg-[url('/assets/images/head-vortech-1024-760a552188.jpg')] lg:bg-[url('/assets/images/head-vortech-1920-938f342435.jpg')]" />
      {children}
    </HeaderMainLayout>
  );
}

export default VortechForceLayout;
