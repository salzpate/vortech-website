import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import HeadlineTextElement from '@/components/HeadlineTextElement';
import styles from '@/styles/index.module.css';
import { FunctionComponent } from 'react';

export const pageTitle = 'Vortech Force';

const VortechForce: FunctionComponent = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle} activeMenu="vortech">
      <HeaderImage text1="Die Kraft der Natur" text2="Die Stärke der Technologie" imageClass={styles.headerimage} />
      <PageSection headline="Vortech Force" id="vortechforce">
        <div>Ein innovatives Staub- und Luftreinigungssystem, welches besonders für Allergiker geeignet ist.</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <HeadlineTextElement headline="Tiefenreinigung" imgSrc="/assets/images/vortech-licht.jpg">
            Aufgrund der hohen Saugleistung des VORTECH FORCE und den Vibrationen der Motorbürste kann sogar Sand und grober Staub aus tief liegenden Schichten von Polstern und Matratzen gesaugt werden.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Kein Leistungsabfall" imgSrc="/assets/images/vortech-power.jpg">
            Durch die Erzeugung eines unglaublich starken Wirbelwinds und einem optimierten Luftstrom entsteht beim VORTECH FORCE selbst bei einem vollen Beutel kein Leistungsabfall.
          </HeadlineTextElement>
          <HeadlineTextElement headline="4 Phasen Filtersystem" imgSrc="/assets/images/vortech-filter.jpg">
            Durch HEPA- und ULPA-Filter werden 99,99 % des Hausstaubes zurückgehalten und die Luft gereinigt. Das Filtersystem reduziert Staub, Hautschuppen, Schimmelsporen, Pollen, Staubmilben, usw. auf ein Minimum.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Für ein ganzes Leben" imgSrc="/assets/images/vortech-geraet.jpg">
            Der VORTECH FORCE wurde mit seinem ergonomischen Design für den lebenslangen Gebrauch konzepiert und besitzt einen starken Motor, ein Gehäuse aus ABS und ein gewerbliches 6-Rollen-Qualitätssystem.
          </HeadlineTextElement>
        </div>
      </PageSection>
      <PageSection headline="Das 4 Phasen Filtersystem" id="filtersystem" subSection={true} className="bg-gray-200 dark:bg-gray-900 pb-2">
        <div>Alle Zubehörteile sind mit Spezial-Verriegelungselementen für ein bequemes und schnelles Austauschen versehen.</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <HeadlineTextElement headline="1. Papierfiltertüte" imgSrc="/assets/images/vortech-papierfiltertuete.jpg">
            Die Papierfiltertüte kann einfach, schnell und sauber ersetzt werden. Die Papierfiltertüte sollte nicht entleert und nochmals zu verwendet werden, ansonsten können sich die Poren verschließen, wodurch die Leistung gemindert
            wird.
          </HeadlineTextElement>
          <HeadlineTextElement headline="2. Textilfilter" imgSrc="/assets/images/vortech-textilfilter.jpg">
            Im Inneren befindet sich ein Textilfilter mit hoher Dichte, der den Feinstaub filtert. Der Textilfilter sollte zweimal im Jahr bei 30 °C mit einem Fein- oder Wollwaschmittel gewaschen werden.
          </HeadlineTextElement>
          <HeadlineTextElement headline="3. Microfilter" imgSrc="/assets/images/vortech-microfilter.jpg">
            Durch den Microfilter werden kleinste Staubpartikel herausgefiltert. Der Microfilter sollte alle 4 - 5 Monate ausgeblasen und je nach Anwendung ca. alle 2 Jahre ausgetauscht werden.
          </HeadlineTextElement>
          <HeadlineTextElement headline="4. Luftaustrittsfilter" imgSrc="/assets/images/vortech-luftaustrittsfilter.jpg">
            Der Luftaustrittsfilter behandelt die zurückgepustete Luft und entfernt die Verunreinigungen des Motors. Der Luftaustrittsfilter sollte alle 2 - 3 Jahre gewechselt werden.
          </HeadlineTextElement>
        </div>
      </PageSection>
      <PageSection headline="Zubehör" id="zubehoer" subSection={true}>
        <div>Alle Zubehörteile sind mit Spezial-Verriegelungselementen für ein bequemes und schnelles Austauschen versehen.</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <HeadlineTextElement headline="Motorbürste" imgSrc="/assets/images/vortech-licht.jpg">
            Durch die Vibrationen der Motorbürste kann Sand und grober Staub aus tief liegenden Schichten von Teppichen, Polstermöbel und Matratzen gesaugt werden. Bitte nur mit dem Elektroschlauch benutzen.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Bodenbürste" imgSrc="/assets/images/vortech-bodenbuerste.jpg">
            Die Bodenbürste ist optimal für alle glatte Böden, Textiltapeten, Strukturputz, Holzvertäfelungen, Holzdecken, usw.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Turbobürste" imgSrc="/assets/images/vortech-turbobuerste.jpg">
            Durch die schnell rotierende Bürste kann die Turbobürste optimal Kleidung (dunkle Mäntel, Schurwolle, Flanell abbürsten etc.) Polster, Polsterrückenteile, Autositze, Bettumrandungen, Treppenstufen, Teppich, Gardinen, usw.
            reinigen. Auch für die schnelle Entfernung von Tierhaaren.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Polsterbürste" imgSrc="/assets/images/vortech-polsterbuerste.jpg">
            Die Polsterbürste eignet sich zu Absaugen von Gardinen, Polster, Autositze, Treppenstufen, Auto, usw.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Staubpinsel" imgSrc="/assets/images/vortech-staubpinsel.jpg">
            Der Staubpinsel unterstützt das Staubwischen von Fernseher, Fernbedienungen, Möbel, Auto, Bilder, Stereoanlagen, Jalousien, Spinnweben, Blumen, Boxen, Computer, Lüftungsgitter, Lamellenvorhänge, Bücher, Türrahmen, usw. ohne
            diese zu zerkratzen.
          </HeadlineTextElement>
          <HeadlineTextElement headline="Saugdüse länglich" imgSrc="/assets/images/vortech-saugduese.jpg">
            Die Saudüse länglich passt in Polsterschlitze, Teppichleisten oben, im Auto zwischen Sitz und Konsole usw.
          </HeadlineTextElement>
        </div>
      </PageSection>
    </Layout>
  );
};

export default VortechForce;
