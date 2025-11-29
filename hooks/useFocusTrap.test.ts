import { renderHook } from '@testing-library/react';
import { createRef } from 'react';

import { useFocusTrap } from './useFocusTrap';

describe('useFocusTrap', () => {
  let container: HTMLDivElement;
  let button1: HTMLButtonElement;
  let button2: HTMLButtonElement;
  let button3: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement('div');
    button1 = document.createElement('button');
    button2 = document.createElement('button');
    button3 = document.createElement('button');

    button1.textContent = 'Button 1';
    button2.textContent = 'Button 2';
    button3.textContent = 'Button 3';

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    document.body.appendChild(container);
  });

  it('ruft onEscape bei ESC-Taste auf', () => {
    const onEscape = vi.fn();
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref, onEscape));

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(onEscape).toHaveBeenCalled();
  });

  it('macht nichts wenn isActive false ist', () => {
    const onEscape = vi.fn();
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(false, ref, onEscape));

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(onEscape).not.toHaveBeenCalled();
  });

  it('trappt Fokus bei Tab-Taste', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref));

    button3.focus();
    expect(document.activeElement).toBe(button3);

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    document.dispatchEvent(tabEvent);

    // Fokus sollte zum ersten Element springen
    expect(document.activeElement).toBe(button1);
  });

  it('trappt Fokus bei Shift+Tab', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref));

    button1.focus();
    expect(document.activeElement).toBe(button1);

    const shiftTabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
    });
    document.dispatchEvent(shiftTabEvent);

    // Fokus sollte zum letzten Element springen
    expect(document.activeElement).toBe(button3);
  });

  it('entfernt Event-Listener beim Unmount', () => {
    const onEscape = vi.fn();
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    const { unmount } = renderHook(() => useFocusTrap(true, ref, onEscape));

    unmount();

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(onEscape).not.toHaveBeenCalled();
  });
});
