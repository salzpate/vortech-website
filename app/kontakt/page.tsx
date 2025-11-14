'use client';

import { JSX } from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import { ContactCard, PageSection } from '@salzpate/react-ui';

function Contact(): JSX.Element {
  return (
    <PageSection headline="Kontakt" id="kontakt" className="page-section">
      <div>Haben Sie interesse an einer Produktvorstellung? Wollen Sie Zubehör bestellen oder benötigen Sie einen Kundendienst?</div>
      <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-3">
        <div>
          <ContactCard name="Elfi Bast" imageSrc="/assets/images/elfi-krammer-1413479a5b.jpg" email="info@vortech-force-krammer.de" phone="+49 9454 9498523" fax="+49 9454 9498521" emailHref="/lib/mailto.php" />
        </div>
        <div className="sm:col-span-2">
          <ContactForm url="/lib/sendmail.php" />
        </div>
      </div>
    </PageSection>
  );
}

export default Contact;
