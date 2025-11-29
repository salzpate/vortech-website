import { render, screen } from '@testing-library/react';

import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
  it('rendert HeaderImage mit Text', () => {
    render(<HeaderImage text1="Test Text 1" text2="Test Text 2" />);
    expect(screen.getByText('Test Text 1')).toBeInTheDocument();
    expect(screen.getByText('Test Text 2')).toBeInTheDocument();
  });

  it('rendert HeaderImage mit Children', () => {
    render(
      <HeaderImage>
        <div>Custom Content</div>
      </HeaderImage>,
    );
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('verwendet alternate Styling', () => {
    const { container } = render(<HeaderImage text1="Test" text2="Test" alternate={true} />);
    const spans = container.querySelectorAll('span');
    expect(spans[0]).toHaveClass('bg-alternate');
  });
});
