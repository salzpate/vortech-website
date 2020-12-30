import { PropsWithChildren, ReactNode } from 'react';

type PageSectionProps = {
  id: string;
  headline: ReactNode;
  className?: string;
  subSection?: boolean;
};

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <section id={id} className={className}>
      <div className="max-w-screen-xl mx-auto text-base tracking-wide text-gray-900 dark:text-gray-300 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        {subSection && <h2 className="text-gray-900 uppercase tracking-tight font-medium text-xl sm:text-2xl lg:text-3xl dark:text-gray-200">{headline}</h2>}
        {!subSection && <h1 className="text-gray-900 uppercase tracking-tight font-bold text-2xl sm:text-3xl lg:text-4xl dark:text-gray-200">{headline}</h1>}
        <div className="text-sm lg:text-base font-light lg:font-normal pt-4 sm:pt-6 lg:pt-8">{children}</div>
      </div>
    </section>
  );
}
export default PageSection;
