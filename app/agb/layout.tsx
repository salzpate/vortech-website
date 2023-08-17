import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `AGB - ${SITE_TITLE}`,
};

function AGBLayout({ children }: PropsWithChildren<object>): JSX.Element {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}

export default AGBLayout;
