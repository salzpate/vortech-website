'use client';

import { ContactCard, MoreLink, PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';

import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout';

function Home(): JSX.Element {
  return (
    <HeaderMainLayout>
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass="bg-[url('/assets/images/head-vortech-1024-760a552188.jpg')] lg:bg-[url('/assets/images/head-vortech-1920-938f342435.jpg')]" />
      <PageSection headline="Elfi Bast - VORTECH FORCE Generalimport" id="index">
        <p>Wir bieten Beratung, Direktvertrieb und Kundendienst für VORTECH FORCE in Deutschland an. Für ein sauberes Zuhause nach industriellen Standards.</p>
        <div className="my-6 grid grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2">
          <MoreLink href="/vortech-force/" headline="VORTECH FORCE" imgSrc="/assets/images/vortech-geraet-schlauch-f4f3c86daf.jpg">
            Der VORTECH FORCE, ein innovatives Staub- und Luftreinigungssystem, welches besonders für Allergiker geeignet ist.
          </MoreLink>
        </div>
      </PageSection>
      <PageSection headline="Kontakt" id="kontakt" subSection={true} className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-800">
        <p>Haben Sie interesse an einer Produktvorstellung? Wollen Sie Zubehör bestellen oder benötigen Sie einen Kundendienst?</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-3">
          <div>
            <ContactCard
              name="Elfi Bast"
              imageSrc="/assets/images/elfi-krammer-1413479a5b.jpg"
              email="info@vortech-force-krammer.de"
              phone="+49 9454 9498523"
              fax="+49 9454 9498521"
              emailHref="/lib/mailto.php"
              className="bg-white dark:bg-black"
            />
          </div>
          <div className="sm:col-span-2">
            <ContactForm url="/lib/sendmail.php" style="white" />
          </div>
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default Home;
