import { siteConfig } from '../data/siteConfig';
import type { NavItem } from '../types/content';

/** FAQ is only added to the navbar while the visitor is on the FAQ page. */
export function getNavItems(pathname: string): NavItem[] {
  const { main, faq } = siteConfig.navigation;
  return pathname.startsWith(faq.to) ? [...main, faq] : main;
}

export function getFooterNavItems(): NavItem[] {
  const { main, faq } = siteConfig.navigation;
  return [...main, faq];
}

const splitTo = (to: string) => {
  const [path, hash = ''] = to.split('#');
  return { path: path || '/', hash: hash ? `#${hash}` : '' };
};

const pathMatches = (itemPath: string, pathname: string) =>
itemPath === '/' ? pathname === '/' : pathname === itemPath || pathname.startsWith(`${itemPath}/`);

/**
 * Hash-aware active state: "/outlet#reservasi" is active on /outlet#reservasi,
 * and "/outlet" is NOT active at the same time.
 */
export function isNavItemActive(item: NavItem, items: NavItem[], pathname: string, hash: string): boolean {
  const target = splitTo(item.to);
  if (!pathMatches(target.path, pathname)) return false;
  if (target.hash) return target.hash === hash;
  const hashItemActive = items.some((other) => {
    const o = splitTo(other.to);
    return o.hash && o.hash === hash && pathMatches(o.path, pathname);
  });
  return !hashItemActive;
}