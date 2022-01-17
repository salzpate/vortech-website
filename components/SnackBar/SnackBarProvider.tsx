import React, { createContext, ReactNode, useContext, useState } from 'react';
import { SnackBar, SnackBarTypes } from '@salzpate/react-ui';

export const defaultDuration = 500;
export const defaultInterval = 250;

export type SnackBarProviderProps = {
  children: ReactNode;
};

export type SnackBarContextType = {
  openSnackbar: (text: string, type: SnackBarTypes, duration: number) => void;
  closeSnackbar: () => void;
};

function createCtx<ContextType extends unknown | null>() {
  const ctx = createContext<ContextType | null>(null);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useSnackBar, CtxProvider] = createCtx<SnackBarContextType>();

function SnackBarProvider(props: SnackBarProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(
    setTimeout(() => {
      return;
    }, 1),
  );
  const [text, setText] = useState('');
  const [type, setType] = useState(SnackBarTypes.info);
  const { children } = props;

  const triggerSnackbar = (snackBarText: string, snackBarType: SnackBarTypes, duration: number): void => {
    setText(snackBarText);
    setType(snackBarType);
    setIsOpen(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(false), duration));
  };

  const openSnackbar = (snackBarText: string, snackBarType: SnackBarTypes, duration: number): void => {
    if (isOpen === true) {
      setIsOpen(false);
      setTimeout(() => {
        triggerSnackbar(snackBarText, snackBarType, duration);
      }, defaultInterval);
    } else {
      triggerSnackbar(snackBarText, snackBarType, duration);
    }
  };

  const closeSnackbar = (): void => {
    setIsOpen(false);
  };

  return (
    <CtxProvider value={{ openSnackbar, closeSnackbar }}>
      {children}

      {isOpen && <SnackBar text={text} type={type} closeSnackbar={closeSnackbar} />}
    </CtxProvider>
  );
}

export default SnackBarProvider;
