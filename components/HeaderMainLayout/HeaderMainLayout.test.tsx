import { render, screen } from '@testing-library/react';

import HeaderMainLayout from './HeaderMainLayout';

vi.mock('@/components/Header', () => ({
  default: () => <div>Header Mock</div>,
}));

vi.mock('@/data/MenuData', () => ({
  MenuData: {
    main: [
      { href: '/', children: 'Home' },
      { href: '/kontakt/', children: 'Kontakt' },
    ],
  },
}));

describe('HeaderMainLayout', () => {
  it('rendert Header und Children', () => {
    render(
      <HeaderMainLayout>
        <div>Test Content</div>
      </HeaderMainLayout>,
    );

    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert main-content mit korrekter ID', () => {
    const { container } = render(
      <HeaderMainLayout>
        <div>Content</div>
      </HeaderMainLayout>,
    );

    const main = container.querySelector('#main-content');
    expect(main).toBeInTheDocument();
  });
});
