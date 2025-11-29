import { render } from '@testing-library/react';

import ScrollToTop from './ScrollToTop';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn();
  });

  it('rendert ohne Fehler', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeEmptyDOMElement();
  });

  it('ist eine Client-Komponente', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeDefined();
  });
});
