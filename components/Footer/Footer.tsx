'use client';

import { JSX, ReactNode } from 'react';
import { NavMenuItem, Footer as UiFooter } from '@salzpate/react-ui';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: Readonly<FooterProps>): JSX.Element {
  const { text, menuItems } = props;

  return <UiFooter text={text} menuItems={menuItems} />;
}

export default Footer;
