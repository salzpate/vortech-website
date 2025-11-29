import { renderHook } from '@testing-library/react';

import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo = vi.fn();
  });

  it('sperrt Body-Scroll wenn isLocked true ist', () => {
    renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.width).toBe('100%');
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('macht nichts wenn isLocked false ist', () => {
    renderHook(() => useBodyScrollLock(false));

    expect(document.body.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
  });

  it('stellt Body-Styles beim Unmount wieder her', () => {
    const { unmount } = renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.position).toBe('fixed');

    unmount();

    expect(document.body.style.position).toBe('');
    expect(document.body.style.top).toBe('');
    expect(document.body.style.width).toBe('');
    expect(document.body.style.overflow).toBe('');
  });

  it('scrollt zur ursprünglichen Position beim Unmount', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

    const { unmount } = renderHook(() => useBodyScrollLock(true));

    unmount();

    expect(window.scrollTo).toHaveBeenCalledWith(0, 100);
  });

  it('reagiert auf Änderungen von isLocked', () => {
    const { rerender } = renderHook(({ locked }) => useBodyScrollLock(locked), {
      initialProps: { locked: false },
    });

    expect(document.body.style.position).toBe('');

    rerender({ locked: true });

    expect(document.body.style.position).toBe('fixed');

    rerender({ locked: false });

    expect(document.body.style.position).toBe('');
  });
});
