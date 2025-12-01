import { render, screen } from '@testing-library/react';

import NavBarLink from './NavBarLink';

describe('NavBarLink', () => {
  it('rendert Link mit Text', () => {
    render(
      <NavBarLink href="/test/" activeMenu="test" activeMenuName="test">
        Test Link
      </NavBarLink>,
    );
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('hat korrekten href', () => {
    render(
      <NavBarLink href="/kontakt/" activeMenu="kontakt" activeMenuName="kontakt">
        Kontakt
      </NavBarLink>,
    );
    const link = screen.getByText('Kontakt');
    expect(link).toHaveAttribute('href', '/kontakt/');
  });

  it('zeigt aktiven Status', () => {
    const { container } = render(
      <NavBarLink href="/test/" activeMenu="test" activeMenuName="test">
        Active Link
      </NavBarLink>,
    );
    const link = container.querySelector('a');
    expect(link).toHaveClass('text-secondary');
    expect(link?.className).toContain('before:w-full');
  });
});
