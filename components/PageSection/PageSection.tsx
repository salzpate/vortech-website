'use client';

import { PageSection as UiPageSection, type PageSectionProps } from '@salzpate/react-ui';
import { JSX, PropsWithChildren } from 'react';

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <UiPageSection id={id} headline={headline} className={className} subSection={subSection}>
      {children}
    </UiPageSection>
  );
}

export default PageSection;
