import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import { SearchXIcon } from 'lucide-react';
import { Container } from '../components/common/Container';
import { MenuCategorySection } from '../components/menu/MenuCategorySection';
import { ALL_GROUPS, MenuFilterBar } from '../components/menu/MenuFilterBar';
import { MenuStatus } from '../components/menu/MenuStatus';
import { menuContent } from '../data/menuContent';
import { menuCategories, menuGroups, products } from '../data/products';
import { getStickyOffset, useActiveSection } from '../hooks/useActiveSection';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { subcategoriesOf, subcategoryAnchor } from '../utils/menuAnchors';

/** Scrolls so the element's top sits just below the sticky navbar + filter bar. */
function scrollToElement(el: HTMLElement | null) {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - getStickyOffset() - 16;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
}

export function Menu() {
  const live = useOpenStatus();
  const isClosed = live.status === 'closed' || live.status === 'opening-soon';
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [headerSlot, setHeaderSlot] = useState<HTMLElement | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);

  useEffect(() => setHeaderSlot(document.getElementById('header-subnav')), []);

  // A clicked category stays active until the user scrolls by themselves (wheel / touch / keys).
  // This keeps the chip from jumping back, even for the last categories that can't reach the top of the page.
  useEffect(() => {
    if (!clicked) return;
    const release = () => setClicked(null);
    const opts = { passive: true } as const;
    window.addEventListener('wheel', release, opts);
    window.addEventListener('touchstart', release, opts);
    window.addEventListener('keydown', release);
    return () => {
      window.removeEventListener('wheel', release);
      window.removeEventListener('touchstart', release);
      window.removeEventListener('keydown', release);
    };
  }, [clicked]);

  const requested = params.get('jenis');
  const activeGroup = menuGroups.some((g) => g.id === requested) ? requested as string : ALL_GROUPS;

  const q = query.trim().toLowerCase();
  const matches = (text: string) => text.toLowerCase().includes(q);

  // One shared data source (data/products.ts) drives tabs, chips, grids and search.
  const visibleGroups = activeGroup === ALL_GROUPS ? menuGroups : menuGroups.filter((g) => g.id === activeGroup);
  const sections = visibleGroups.map((group) => ({
    group,
    categories: menuCategories.
    filter((c) => c.groupId === group.id).
    map((category) => ({
      category,
      items: products.filter(
        (p) =>
        p.categoryId === category.id && (
        !q || matches(p.name) || matches(p.description) || matches(category.title) || matches(p.subcategory ?? ''))
      )
    })).
    filter((c) => c.items.length > 0)
  }));

  // Chips = every category + every sub-group inside it (e.g. Basic Coffee, Kopi Susu, Milk Based, Tea Based).
  const chips = sections.flatMap((s) =>
  s.categories.flatMap(({ category, items }) => [
  { id: category.id, title: category.title },
  ...subcategoriesOf(items).map((sub) => ({ id: subcategoryAnchor(category.id, sub), title: sub }))]
  )
  );
  const spied = useActiveSection(chips.map((c) => c.id));
  const activeCategory = clicked ?? spied;
  const hasResults = chips.length > 0;

  const selectCategory = (id: string) => {
    setClicked(id);
    scrollToElement(document.getElementById(id));
  };

  const changeGroup = (id: string) => {
    setParams(id === ALL_GROUPS ? {} : { jenis: id }, { replace: true });
    const top = document.getElementById('menu-top');
    if (top && top.getBoundingClientRect().top < getStickyOffset()) scrollToElement(top);
  };

  return (
    <>
      <header className="border-b border-line bg-white">
        <Container className="py-14 text-center md:py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-ink md:text-5xl">{menuContent.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">{menuContent.description}</p>
          <MenuStatus live={live} />
        </Container>
      </header>

      {headerSlot &&
      createPortal(
        <MenuFilterBar
          groups={menuGroups}
          activeGroup={activeGroup}
          onGroupChange={changeGroup}
          categories={chips}
          activeCategory={activeCategory}
          onCategorySelect={selectCategory}
          query={query}
          onQueryChange={setQuery}
          closed={isClosed} />,

        headerSlot
      )}

      <div id="menu-top" />
      <Container className={`py-12 transition-[filter] duration-300 ease-out md:py-16 ${isClosed ? 'grayscale' : ''}`}>
        {hasResults ?
        <div className="space-y-20">
            {sections.
          filter((s) => s.categories.length > 0).
          map(({ group, categories }) =>
          <section key={group.id} aria-label={group.title}>
                  {activeGroup === ALL_GROUPS &&
            <div className="mb-8 flex items-center gap-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                        {group.title} / {group.subtitle}
                      </p>
                      <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    </div>
            }
                  <div className="space-y-16">
                    {categories.map(({ category, items }) =>
              <MenuCategorySection key={category.id} category={category} products={items} />
              )}
                  </div>
                </section>
          )}
          </div> :

        <div className="flex flex-col items-center rounded-2xl border border-dashed border-line px-6 py-16 text-center">
            <SearchXIcon className="h-8 w-8 text-ink-faint" aria-hidden="true" />
            <p className="mt-4 text-base font-semibold text-ink">{menuContent.emptyTitle}</p>
            <p className="mt-1 text-sm text-ink-muted">{menuContent.emptyDescription}</p>
            <button
            type="button"
            onClick={() => setQuery('')}
            className="mt-5 inline-flex h-10 items-center rounded-lg bg-forest px-5 text-sm font-semibold text-white hover:bg-forest-dark">
            
              {menuContent.resetLabel}
            </button>
          </div>
        }
      </Container>
    </>);

}