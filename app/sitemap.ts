import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/vortech-force/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/kontakt/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/agb/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/datenschutz/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/impressum/`,
      lastModified: new Date(),
    },
  ];
}
