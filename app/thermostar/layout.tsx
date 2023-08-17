import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/thermostar.module.css';

export const metadata: Metadata = {
  title: `THERMOSTAR - ${SITE_TITLE}`,
};

function ThermostarLayout({ children }: PropsWithChildren<object>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="thermostar">
      <HeaderImage text1="Sauberkeit" text2="ein Leben lang" imageClass={styles.headerimage} alternate />
      {children}
    </HeaderMainLayout>
  );
}

export default ThermostarLayout;
