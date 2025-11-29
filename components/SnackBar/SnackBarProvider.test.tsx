import { SnackBarTypes } from '@salzpate/react-ui';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SnackBarProvider, { useSnackBar } from './SnackBarProvider';

const TestComponent = () => {
  const { openSnackbar } = useSnackBar();
  return <button onClick={() => openSnackbar('Test Nachricht', SnackBarTypes.success, 1000)}>Zeige SnackBar</button>;
};

describe('SnackBarProvider', () => {
  it('rendert Children korrekt', () => {
    render(
      <SnackBarProvider>
        <div>Test Content</div>
      </SnackBarProvider>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('zeigt SnackBar bei openSnackbar', async () => {
    const user = userEvent.setup();
    render(
      <SnackBarProvider>
        <TestComponent />
      </SnackBarProvider>,
    );

    await user.click(screen.getByText('Zeige SnackBar'));
    await waitFor(() => {
      expect(screen.getByText('Test Nachricht')).toBeInTheDocument();
    });
  });
});
