import { render, screen } from '@testing-library/react';

import SiteMap from './SiteMap';

describe('SiteMap', () => {
  const menuItems = [
    { id: 'vortech', href: '/vortech-force/', children: 'VORTECH FORCE' },
    { id: 'kontakt', href: '/kontakt/', children: 'Kontakt' },
    { id: 'impressum', href: '/impressum/', children: 'Impressum' },
  ];

  it('rendert Sitemap mit Standard-Titel', () => {
    render(<SiteMap menuItems={menuItems} />);
    expect(screen.getByText('Sitemap')).toBeInTheDocument();
  });

  it('rendert Sitemap mit benutzerdefiniertem Titel', () => {
    render(<SiteMap menuItems={menuItems} title="Seitenübersicht" />);
    expect(screen.getByText('Seitenübersicht')).toBeInTheDocument();
  });

  it('rendert alle Menü-Items', () => {
    render(<SiteMap menuItems={menuItems} />);
    expect(screen.getByText('VORTECH FORCE')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
    expect(screen.getByText('Impressum')).toBeInTheDocument();
  });

  it('rendert Links mit korrekten hrefs', () => {
    render(<SiteMap menuItems={menuItems} />);
    const link = screen.getByText('Kontakt').closest('a');
    expect(link).toHaveAttribute('href', menuItems[1].href);
  });
});
