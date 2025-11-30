import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

vi.mock('@/hooks/useFocusTrap', () => ({
  useFocusTrap: vi.fn(),
}));

vi.mock('@/hooks/useBodyScrollLock', () => ({
  useBodyScrollLock: vi.fn(),
}));

describe('Header', () => {
  const navMenuItems = [
    { id: 'home', href: '/', children: 'Home', activeMenuName: 'home' },
    { id: 'vortech', href: '/vortech-force/', children: 'VORTECH FORCE', activeMenuName: 'vortech' },
    { id: 'kontakt', href: '/kontakt/', children: 'Kontakt', activeMenuName: 'kontakt' },
  ];

  it('rendert Header mit Navigation', () => {
    render(<Header navMenuItems={navMenuItems} />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('zeigt Desktop-Navigation', () => {
    render(<Header navMenuItems={navMenuItems} />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('VORTECH FORCE').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Kontakt').length).toBeGreaterThan(0);
  });

  it('öffnet Mobile-Menü bei Klick', async () => {
    const user = userEvent.setup();
    render(<Header navMenuItems={navMenuItems} />);

    const menuButton = screen.getByLabelText('Menü öffnen');
    await user.click(menuButton);

    expect(screen.getByLabelText('Menü schließen')).toBeInTheDocument();
  });
});
