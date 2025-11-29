import { render, screen } from '@testing-library/react';

import PageSection from './PageSection';

describe('PageSection', () => {
  it('rendert PageSection mit Headline und Children', () => {
    render(
      <PageSection id="test-section" headline="Test Headline">
        <p>Test Content</p>
      </PageSection>,
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert PageSection als SubSection', () => {
    render(
      <PageSection id="sub-section" headline="Sub Headline" subSection={true}>
        <p>Sub Content</p>
      </PageSection>,
    );

    expect(screen.getByText('Sub Headline')).toBeInTheDocument();
  });
});
