import { AppMenu } from '@/components/commons/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      children: 'Vortech Force',
      href: '/vortech-force/',
      activeMenuName: 'vortech',
    },
    {
      children: 'Thermostar',
      href: '/thermostar/',
      activeMenuName: 'thermostar',
    },
    {
      children: 'Kontakt',
      href: '/kontakt/',
      activeMenuName: 'kontakt',
    },
  ],
  footer: [
    {
      children: 'AGB',
      href: '/agb/',
      activeMenuName: 'agb',
    },
    {
      children: 'Datenschutz',
      href: '/datenschutz/',
      activeMenuName: 'datenschutz',
    },
    {
      children: 'Impressum',
      href: '/impressum/',
      activeMenuName: 'impressum',
    },
  ],
};
