import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuickSearch from './QuickSearch';

describe('QuickSearch', () => {
  const menuItems = [
    { id: 'vortech', href: '/vortech-force/', children: 'VORTECH FORCE' },
    { id: 'kontakt', href: '/kontakt/', children: 'Kontakt' },
    { id: 'impressum', href: '/impressum/', children: 'Impressum' },
  ];

  it('rendert Suchfeld', () => {
    render(<QuickSearch menuItems={menuItems} />);
    expect(screen.getByPlaceholderText('Seite suchen...')).toBeInTheDocument();
  });

  it('zeigt Suchergebnisse bei Eingabe', async () => {
    const user = userEvent.setup();
    render(<QuickSearch menuItems={menuItems} />);

    const input = screen.getByPlaceholderText('Seite suchen...');
    await user.type(input, 'Kontakt');

    expect(screen.getAllByText('Kontakt').length).toBeGreaterThan(0);
  });

  it('zeigt "Keine Ergebnisse" bei keinem Treffer', async () => {
    const user = userEvent.setup();
    render(<QuickSearch menuItems={menuItems} />);

    const input = screen.getByPlaceholderText('Seite suchen...');
    await user.type(input, 'xyz123');

    expect(screen.getByText('Keine Ergebnisse gefunden')).toBeInTheDocument();
  });
});
