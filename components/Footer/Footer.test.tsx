import { render, screen } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { describe, expect, it } from 'vitest';

import Footer from './Footer';

vi.mock('next-themes');

describe('Footer', () => {
  const mockMenuItems = [
    { id: 'impressum', href: '/impressum', children: 'Impressum', activeMenu: 'impressum' },
    { id: 'datenschutz', href: '/datenschutz', children: 'Datenschutz', activeMenu: 'datenschutz' },
    { id: 'kontakt', href: '/kontakt', children: 'Kontakt', activeMenu: 'kontakt' },
  ];

  const mockSetTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'system',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
      systemTheme: 'light',
      resolvedTheme: 'light',
      forcedTheme: undefined,
    });
  });

  it('renders text content', () => {
    render(<Footer text="© 2024 Test Company" menuItems={mockMenuItems} />);
    expect(screen.getByText('© 2024 Test Company')).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<Footer text="Footer text" menuItems={mockMenuItems} />);
    expect(screen.getByText('Impressum')).toBeInTheDocument();
    expect(screen.getByText('Datenschutz')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });

  it('renders menu items as links with correct hrefs', () => {
    render(<Footer text="Footer text" menuItems={mockMenuItems} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/impressum');
    expect(links[1]).toHaveAttribute('href', '/datenschutz');
    expect(links[2]).toHaveAttribute('href', '/kontakt');
  });

  it('renders ReactNode as text', () => {
    render(
      <Footer
        text={
          <span>
            Custom <strong>Footer</strong> Text
          </span>
        }
        menuItems={mockMenuItems}
      />,
    );
    expect(screen.getByText(/Custom/)).toBeInTheDocument();
    expect(screen.getByText(/Footer/)).toBeInTheDocument();
  });

  it('renders footer element', () => {
    const { container } = render(<Footer text="Footer text" menuItems={mockMenuItems} />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders ThemeSwitcher component', () => {
    render(<Footer text="Footer text" menuItems={mockMenuItems} />);
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /system theme/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
  });
});
