import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './HeaderImage.module.css';

type HeaderImageProps = {
  imageClass?: string;
  text1?: string;
  text2?: string;
  alternate?: boolean;
};

function HeaderImage(props: PropsWithChildren<HeaderImageProps>): JSX.Element {
  const { imageClass, text1, text2, alternate = false, children } = props;

  if (children) {
    return (
      <div className={cn(styles.headerimage, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)} aria-label="Header Bild">
        {children}
      </div>
    );
  } else {
    return (
      <div className={cn(styles.headerimage, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)} aria-label="Header Bild">
        <div className="absolute w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative mt-14 sm:mt-32">
              <div className="pr-16 text-right">
                <span className={cn('px-6 text-xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl', { 'bg-secondary': !alternate }, { 'bg-alternate': alternate })}>{text1}</span>
              </div>
              <div className="mt-3 pr-6 text-right sm:mt-4">
                <span className={cn('px-6 text-xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl', { 'bg-secondary': !alternate }, { 'bg-alternate': alternate })}>{text2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderImage;
