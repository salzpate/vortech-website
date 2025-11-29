import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('rendert Footer mit Text und Menü-Items', () => {
    const menuItems = [
      { href: '/impressum/', children: 'Impressum' },
      { href: '/datenschutz/', children: 'Datenschutz' },
    ];

    render(<Footer text="© 2024 Test" menuItems={menuItems} />);

    expect(screen.getByText('© 2024 Test')).toBeInTheDocument();
  });
});
