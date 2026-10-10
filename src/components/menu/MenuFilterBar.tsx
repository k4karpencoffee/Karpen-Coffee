import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { menuContent } from '../../data/menuContent';
import type { MenuGroup } from '../../types/content';

/** A chip in the category bar — a category or one of its sub-groups. */
export interface MenuChip {
  id: string;
  title: string;
}
import { Container } from '../common/Container';

export const ALL_GROUPS = 'all';

interface MenuFilterBarProps {
  groups: MenuGroup[];
  activeGroup: string;
  onGroupChange: (id: string) => void;
  categories: MenuChip[];
  activeCategory: string | null;
  query: string;
  onQueryChange: (value: string) => void;
  /** Smooth-scrolls the page to the section (offset handled by the page). */
  onCategorySelect: (id: string) => void;
  /** Store closed → filter controls turn black & white. */
  closed?: boolean;
}

/**
 * Rendered inside the sticky header (see pages/Menu.tsx) so it never scrolls away.
 * On phones the search collapses behind an icon to keep the sticky bar short.
 */
export function MenuFilterBar({
  groups,
  activeGroup,
  onGroupChange,
  categories,
  activeCategory,
  query,
  onQueryChange,
  onCategorySelect,
  closed = false
}: MenuFilterBarProps) {
  const bw = `transition-[filter] duration-300 ease-out ${closed ? 'grayscale' : ''}`;
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const chipBarRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const showSearchMobile = searchOpen || query.length > 0;

  // Keep the active chip visible by scrolling ONLY the horizontal chip bar
  // (element.scrollIntoView would also scroll the window and cancel the page's smooth scroll).
  useEffect(() => {
    const bar = chipBarRef.current;
    const chip = activeCategory ? chipRefs.current[activeCategory] : null;
    if (!bar || !chip) return;
    const left = chip.offsetLeft - bar.clientWidth / 2 + chip.offsetWidth / 2;
    bar.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [activeCategory]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const groupOptions = [{ id: ALL_GROUPS, title: menuContent.allLabel }, ...groups];

  const closeSearch = () => {
    onQueryChange('');
    setSearchOpen(false);
  };

  return (
    <div className="border-t border-line bg-white">
      <Container className="space-y-2.5 py-2.5">
        <div className="flex items-center gap-2 md:gap-2.5">
          <div role="tablist" aria-label="Jenis menu" className={`flex min-w-0 flex-1 gap-1 rounded-xl bg-mint p-1 md:flex-none ${bw}`}>
            {groupOptions.map((g) => {
              const active = g.id === activeGroup;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onGroupChange(g.id)}
                  className={`flex-1 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest sm:px-4 md:flex-none md:px-5 md:py-1.5 ${
                  active ? 'bg-forest text-white' : 'text-ink hover:bg-white/70'}`
                  }>
                  
                  {g.title}
                </button>);

            })}
          </div>

          <button
            type="button"
            onClick={() => showSearchMobile ? closeSearch() : setSearchOpen(true)}
            aria-label={showSearchMobile ? menuContent.resetLabel : menuContent.searchPlaceholder}
            aria-expanded={showSearchMobile}
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-150 md:hidden ${
            showSearchMobile ? 'border-forest bg-forest text-white' : 'border-mint-line bg-white text-ink'}`
            }>
            
            {showSearchMobile ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
          </button>

          <SearchInput className={`hidden flex-1 md:block ${bw}`} value={query} onChange={onQueryChange} />
        </div>

        {showSearchMobile &&
        <SearchInput className="md:hidden" value={query} onChange={onQueryChange} inputRef={inputRef} />
        }

        {categories.length > 0 &&
        <nav
          ref={chipBarRef}
          aria-label="Kategori menu"
          className={`${bw} no-scrollbar relative -mx-5 flex snap-x gap-2 overflow-x-auto scroll-px-5 px-5 md:-mx-8 md:scroll-px-8 md:px-8`}>
            {categories.map((cat) => {
            const active = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  chipRefs.current[cat.id] = el;
                }}
                type="button"
                data-target={`#${cat.id}`}
                onClick={() => onCategorySelect(cat.id)}
                aria-current={active ? 'true' : undefined}
                className={`shrink-0 snap-start whitespace-nowrap rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest md:py-1.5 ${
                active ? 'border-forest bg-forest text-white' : 'border-mint-line bg-white text-ink hover:border-forest/50 hover:bg-mint'}`
                }>
                
                  {cat.title}
                </button>);

          })}
          </nav>
        }
      </Container>
    </div>);

}

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

function SearchInput({ value, onChange, className = '', inputRef }: SearchInputProps) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{menuContent.searchPlaceholder}</span>
      <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        inputMode="search"
        enterKeyHint="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={menuContent.searchPlaceholder}
        // text-base on phones prevents iOS Safari from zooming in on focus
        className="h-11 w-full rounded-lg border border-mint-line bg-white pl-10 pr-10 text-base text-ink placeholder:text-ink-faint focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15 md:h-10 lg:text-sm [&::-webkit-search-cancel-button]:hidden" />
      
      {value &&
      <button
        type="button"
        onClick={() => onChange('')}
        aria-label={menuContent.resetLabel}
        className="absolute right-0.5 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-ink-muted hover:bg-paper">
        
          <XIcon className="h-4 w-4" />
        </button>
      }
    </label>);

}