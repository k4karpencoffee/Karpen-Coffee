import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { waLink } from '../../utils/whatsapp';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons';

export function SocialLinks() {
  const links = [
  { label: 'WhatsApp', href: waLink(siteConfig.whatsapp.generalMessage), Icon: WhatsAppIcon },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: 'TikTok', href: siteConfig.social.tiktok, Icon: TikTokIcon },
  { label: 'Google Maps', href: siteConfig.social.googleMaps, Icon: MapPinIcon }];

  return (
    <ul className="flex gap-2.5">
      {links.map(({ label, href, Icon }) =>
      <li key={label}>
          <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-forest transition-colors duration-150 hover:bg-mint-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      )}
    </ul>);

}