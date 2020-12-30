import { PropsWithChildren, ReactNode } from 'react';
import { UrlObject } from 'url';
import cn from 'classnames';
import Link from 'next/link';

export type Url = string | UrlObject;

type MoreLinkProps = {
  href: Url;
  headline: ReactNode;
  imgSrc?: string;
};

function MoreLink(props: PropsWithChildren<MoreLinkProps>): JSX.Element {
  const { href, headline, imgSrc, children } = props;

  return (
    <div>
      {imgSrc && (
        <Link href={href}>
          <a>
            <img src={imgSrc} width="100%" className="images-dark" alt={headline as string} />
          </a>
        </Link>
      )}
      <h3 className={cn('text-gray-900 uppercase tracking-tight text-lg sm:text-xl lg:font-medium lg:text-2xl dark:text-gray-200', { 'mt-4': imgSrc })}>{headline}</h3>
      <div className="my-4 text-sm lg:text-base font-light lg:font-normal">{children}</div>
      <div className="my-4">
        <Link href={href}>
          <a className="inline-flex items-center gap-0 hover:gap-1">
            <span>Weitere Informationen</span>
            <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
export default MoreLink;
