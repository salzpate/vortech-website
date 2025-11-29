import { UrlObject } from 'node:url';

import { ReactNode } from 'react';

export type Url = string | UrlObject;

export interface NavMenuItem {
  id: string;
  children: ReactNode;
  href: Url;
  activeMenuName?: string;
}

export interface ActiveMenuItem {
  activeMenu?: string;
}

export interface NavMenu extends NavMenuItem, ActiveMenuItem {}

export interface AppMenu {
  main: NavMenuItem[];
  footer: NavMenuItem[];
}
