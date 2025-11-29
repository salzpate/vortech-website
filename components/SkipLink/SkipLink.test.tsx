import { render, screen } from '@testing-library/react';

import SkipLink from './SkipLink';

describe('SkipLink', () => {
  it('rendert Skip-Link mit korrektem Text', () => {
    render(<SkipLink />);
    expect(screen.getByText('Zum Hauptinhalt springen')).toBeInTheDocument();
  });

  it('hat korrekten href zum Hauptinhalt', () => {
    render(<SkipLink />);
    const link = screen.getByText('Zum Hauptinhalt springen');
    expect(link).toHaveAttribute('href', '#main-content');
  });
});
