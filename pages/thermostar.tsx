import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import HeadlineTextElement from '@/components/HeadlineTextElement';
import styles from '@/styles/thermostar.module.css';
import { FunctionComponent } from 'react';

export const pageTitle = 'THERMOSTAR';

const Thermostar: FunctionComponent = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle} activeMenu="thermostar">
      <HeaderImage text1="Sauberkeit" text2="ein Leben lang" imageClass={styles.headerimage} alternate />
      <PageSection headline="THERMOSTAR" id="thermostar">
        <div>Der THERMOSTAR, ein einzigartiges Trocken-Dampfreinigungsgerät, welches ohne Chemikalien hygienisch reinigt.</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <HeadlineTextElement headline="Trocken-Dampfreinigung" imgSrc="/assets/images/thermostar-logo-4c8c99645c.jpg">
            Der THERMOSTAR arbeitet mit einem Trockendampf von ca. 174° Celsius und ca. 6 bar Druck, dadurch werden auf allen Oberflächen Keime und Bakterien abgetötet und sogar Fette gelöst.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Kein Leistungsabfall" imgSrc="/assets/images/thermostar-geraet-42891b0506.jpg">
            Der THERMOSTAR wurde für den Dauereinsatz konzipiert. Nach einem erneuten Wasser einfüllen kann ohne Wartezeit sofort weiter gereinigt werden.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Selbstentkalkend" imgSrc="/assets/images/thermostar-logo-4c8c99645c.jpg">
            Der THERMOSTAR kann mit normalen Leitungswasser betrieben werden, da er einem selbstentkalkenden elektromechanischen Schwimmer und einen selbstentkalkenden Heizstab besitzt.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Für ein ganzes Leben" imgSrc="/assets/images/thermostar-geraet-schlauch-d4ae1e7ff1.jpg">
            Der THERMOSTAR wurde mit seinem kleinen und handlichen Design für den lebenslangen Gebrauch mit sehr hohen Qualitätsstandard und Garantieleistungen konzepiert.
          </HeadlineTextElement>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Thermostar;
