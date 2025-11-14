'use client';

import { JSX } from 'react';
import { PageLink, PageSection } from '@salzpate/react-ui';

function Impressum(): JSX.Element {
  return (
    <PageSection headline="Impressum" id="impressum">
      <div className="page-section pb-8">
        Elfi Bast
        <br />
        VORTECH FORCE Generalimport
        <br />
        Am Hügel 3
        <br />
        93089 Aufhausen
        <br />
        <br />
        Telefon: <PageLink href="tel:+4994549498523">+49 9454 9498523</PageLink>
        <br />
        Telefax: <PageLink href="tel:+4994549498521">+49 9454 9498521</PageLink>
        <br />
        E-Mail:{' '}
        <PageLink href="/lib/mailto.php" rel="nofollow noreferrer">
          info<span className="hidden">beuro</span>@vortech-force-krammer.de
        </PageLink>
        <br />
        <br />
        Steuernummer: 244 / 239 / 80261
        <br />
        <br />
        <br />
        <h2 className="text-3xl uppercase dark:text-gray-200">Disclaimer – rechtliche Hinweise</h2>
        <br />§ 1 Warnhinweis zu Inhalten
        <br />
        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten
        kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der
        kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
        <br />
        <br />§ 2 Externe Links
        <br />
        Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe Links&quot;). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei dererstmaligen Verknüpfung der externen Links die fremden
        Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der
        verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne
        konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
        <br />
        <br />§ 3 Urheber- und Leistungsschutzrechte
        <br />
        Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen
        Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen
        Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die
        Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
        <br />
        <br />
        Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
        <br />
        <br />§ 4 Besondere Nutzungsbedingungen
        <br />
        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die
        besonderen Nutzungsbedingungen.
        <br />
        <br />
        Quelle:{' '}
        <PageLink href="https://www.juraforum.de/impressum-generator/" target="_blank" rel="nofollow noreferrer">
          Impressum Generator von JuraForum.de
        </PageLink>
      </div>
    </PageSection>
  );
}

export default Impressum;
