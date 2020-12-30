import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import styles from '@/styles/kontakt.module.css';
import { FunctionComponent } from 'react';

export const pageTitle = 'Kontakt';

const Contact: FunctionComponent = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle} activeMenu="kontakt">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      <PageSection headline="Kontakt" id="kontakt">
        <div>Haben Sie interesse an einer Produktvorstellung? Wollen Sie Zubehör bestellen oder benötigen Sie einen Kundendienst?</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-3 auto-rows-fr">
          <div>
            <ContactCard name="Elfi Krammer" imageSrc="/assets/images/elfi-krammer.jpg" email="info@vortech-force-krammer.de" phone="+49 9454 9498523" fax="+49 9454 9498521" emailHref="/lib/mailto.php" />
          </div>
          <div className="sm:col-span-2">
            <ContactForm url="https://www.rakkasans.de/lib/sendmail.php" />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Contact;
