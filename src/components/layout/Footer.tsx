import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { getFooterNavItems } from '../../utils/navigation';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { SocialLinks } from '../common/SocialLinks';
import { WeeklyHours } from '../common/WeeklyHours';

export function Footer() {
  const { footer, address, contact, hours, navigation } = siteConfig;
  return (
    <footer className="bg-forest text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
        <div>
          <Link to="/" aria-label={siteConfig.businessName} className="inline-flex">
            <Logo variant="footer" className="h-12 w-32" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">{address.full}</p>
          <ul className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:underline">
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:underline">
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="text-sm font-semibold">{footer.navTitle}</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {getFooterNavItems().map((item) =>
            <li key={item.to}>
                <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                `inline-flex items-center gap-1 transition-colors duration-150 hover:text-white ${
                isActive ? 'font-semibold text-white underline underline-offset-4' : 'text-white/75'}`

                }>
                
                  {item.label}
                  {item.to === navigation.faq.to && <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">{footer.hoursTitle}</h2>
          <div className="mt-5 max-w-xs">
            <WeeklyHours tone="dark" />
            <p className="mt-2 text-[11px] text-white/60">{hours.timeZoneLabel}</p>
          </div>
          <h3 className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{footer.socialTitle}</h3>
          <div className="mt-3">
            <SocialLinks />
          </div>
        </div>
      </Container>
      <div className="bg-maroon">
        <Container className="flex flex-col gap-1 py-3 pr-20 text-[11px] text-white/90 sm:flex-row sm:justify-between md:pr-28">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </Container>
      </div>
    </footer>);

}