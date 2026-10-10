import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { faqPageContent } from '../../data/faqs';
import { siteConfig } from '../../data/siteConfig';
import { waLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/BrandIcons';

export function FaqHelpBox() {
  const h = faqPageContent.help;
  return (
    <aside className="mt-12 flex flex-col gap-6 rounded-2xl border border-mint-line bg-mint p-7 md:flex-row md:items-center md:justify-between md:p-8">
      <div className="max-w-md">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">{h.overline}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">{h.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{h.description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(siteConfig.whatsapp.generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-forest px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest-dark">
          
          <WhatsAppIcon className="h-4 w-4" />
          {h.whatsappLabel}
        </a>
        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-line bg-white px-5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-forest">
          
          <PhoneIcon className="h-4 w-4" aria-hidden="true" />
          {siteConfig.contact.phoneDisplay}
        </a>
      </div>
    </aside>);

}