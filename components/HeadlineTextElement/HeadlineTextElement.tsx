import { PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

type HeadlineTextElementProps = {
  headline: ReactNode;
  imgSrc?: string;
};

function HeadlineTextElement(props: PropsWithChildren<HeadlineTextElementProps>): JSX.Element {
  const { headline, imgSrc, children } = props;

  return (
    <div>
      {imgSrc && <img src={imgSrc} width="100%" className="images-dark" alt={headline as string} />}
      <h3 className={cn('text-gray-900 tracking-tight text-lg sm:text-xl lg:font-medium lg:text-2xl dark:text-gray-200', { 'mt-4': imgSrc })}>{headline}</h3>
      <div className="my-4 text-sm lg:text-base font-light lg:font-normal">{children}</div>
    </div>
  );
}
export default HeadlineTextElement;
