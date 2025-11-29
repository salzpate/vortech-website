import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SnackBarProvider } from '@/components/SnackBar';

import ContactForm from './ContactForm';

vi.mock('axios');

describe('ContactForm', () => {
  it('rendert Kontaktformular', () => {
    render(
      <SnackBarProvider>
        <ContactForm url="/api/contact" />
      </SnackBarProvider>,
    );

    expect(screen.getByPlaceholderText('Namen eingeben')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-Mail Adresse')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nachricht eingeben')).toBeInTheDocument();
  });

  it('zeigt Validierungsfehler bei leerem Submit', async () => {
    const user = userEvent.setup();
    render(
      <SnackBarProvider>
        <ContactForm url="/api/contact" />
      </SnackBarProvider>,
    );

    const submitButton = screen.getByText('Senden');
    await user.click(submitButton);

    expect(screen.getByText('Der Name muss eingeben werden.')).toBeInTheDocument();
  });

  it('hat Datenschutz-Checkbox', () => {
    render(
      <SnackBarProvider>
        <ContactForm url="/api/contact" />
      </SnackBarProvider>,
    );

    expect(screen.getByText(/Datenschutzerklärung/)).toBeInTheDocument();
  });
});
