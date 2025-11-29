import { AppMenu } from '@/components/commons/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      id: 'vortech',
      children: 'Vortech Force',
      href: '/vortech-force/',
      activeMenuName: 'vortech',
    },
    {
      id: 'kontakt',
      children: 'Kontakt',
      href: '/kontakt/',
      activeMenuName: 'kontakt',
    },
  ],
  footer: [
    {
      id: 'agb',
      children: 'AGB',
      href: '/agb/',
      activeMenuName: 'agb',
    },
    {
      id: 'datenschutz',
      children: 'Datenschutz',
      href: '/datenschutz/',
      activeMenuName: 'datenschutz',
    },
    {
      id: 'impressum',
      children: 'Impressum',
      href: '/impressum/',
      activeMenuName: 'impressum',
    },
  ],
};
