import { ReactNode } from 'react';
import { UrlObject } from 'url';

export type Url = string | UrlObject;

export interface NavMenuItem {
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
