import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `AGB - ${SITE_TITLE}`,
};

function AGBLayout({ children }: LayoutProps<'/agb'>): JSX.Element {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}

export default AGBLayout;
