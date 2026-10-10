import React from 'react';
import { useTypingOnTouch } from '../../hooks/useMobileFormFocus';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useScrollFlag } from '../../hooks/useHeroScroll';
import { waLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/BrandIcons';

const btn =
'inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-150 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:h-16 md:w-16';

/**
 * WhatsApp (top) + FAQ (bottom), stacked in the bottom-right corner.
 * Beranda: hidden over the hero, shown after scrolling ~20% of it (reversible). Other pages: always shown.
 */
export function FloatingActions() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const onFaq = pathname.startsWith(siteConfig.navigation.faq.to);
  const scrolledIn = useScrollFlag(isHome, (y, vh) => y > vh * 0.2, true);
  const typing = useTypingOnTouch();
  const visible = scrolledIn && !typing;
  const tab = visible ? 0 : -1;

  return (
    <div
    // is-typing: removed instantly (no fade) while the keyboard is open, so it never sits over a field.
    className={`floating-actions fixed z-30 flex flex-col items-center gap-3 md:gap-4 ${visible ? 'is-visible' : ''} ${typing ? 'is-typing' : ''}`}
    style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))', right: 'max(1rem, env(safe-area-inset-right))' }}
    aria-hidden={!visible}>
      
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={tab}
        aria-label={siteConfig.ui.floatingWhatsappAria}
        title={siteConfig.ui.floatingWhatsappAria}
        className={`${btn} bg-[#25D366] focus-visible:ring-[#25D366]`}>
        
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>
      {!onFaq &&
      <Link
        to={siteConfig.navigation.faq.to}
        tabIndex={tab}
        aria-label={siteConfig.ui.floatingFaqAria}
        title={siteConfig.ui.floatingFaqAria}
        className={`${btn} bg-forest focus-visible:ring-forest`}>
        
          <span className="relative inline-flex items-center justify-center">
            <MessageCircleIcon className="h-10 w-10 md:h-11 md:w-11" strokeWidth={1.75} aria-hidden="true" />
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-extrabold tracking-wide md:text-[10px]" aria-hidden="true">
              {siteConfig.ui.floatingFaq}
            </span>
          </span>
        </Link>
      }
    </div>);

}