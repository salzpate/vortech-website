import { JSX } from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout';
import styles from '@/styles/index.module.css';
import { ContactCard, MoreLink, PageSection } from '@salzpate/react-ui';

function Home(): JSX.Element {
  return (
    <HeaderMainLayout>
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      <PageSection headline="Elfi Krammer - VORTECH FORCE Generalimport" id="index" className="page-section">
        <div>Wir bieten Beratung, Direktvertrieb und Kundendienst für VORTECH FORCE und THERMOSTAR an. Für uns die perfekte Kombination für ein sauberes Zuhause nach industriellen Standards.</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2">
          <MoreLink href="/vortech-force/" headline="VORTECH FORCE" imgSrc="/assets/images/vortech-geraet-schlauch-f4f3c86daf.jpg">
            Der VORTECH FORCE, ein innovatives Staub- und Luftreinigungssystem, welches besonders für Allergiker geeignet ist.
          </MoreLink>
          <MoreLink href="/thermostar/" headline="THERMOSTAR" imgSrc="/assets/images/thermostar-geraet-schlauch-d4ae1e7ff1.jpg">
            Der THERMOSTAR, ein einzigartiges Trocken-Dampfreinigungsgerät, welches ohne Chemikalien hygienisch reinigt.
          </MoreLink>
        </div>
      </PageSection>
      <PageSection headline="Kontakt" id="kontakt" subSection={true} className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8 page-section">
        <div>Haben Sie interesse an einer Produktvorstellung? Wollen Sie Zubehör bestellen oder benötigen Sie einen Kundendienst?</div>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-8 sm:grid-cols-3">
          <div>
            <ContactCard
              name="Elfi Krammer"
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
