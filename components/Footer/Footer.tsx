'use client';

import { Footer as UiFooter, NavMenuItem } from '@salzpate/react-ui';
import { JSX, ReactNode } from 'react';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: Readonly<FooterProps>): JSX.Element {
  const { text, menuItems } = props;

  return <UiFooter text={text} menuItems={menuItems} />;
}

export default Footer;
