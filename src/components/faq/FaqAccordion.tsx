import React, { useState } from 'react';
import { faqCategories, faqs } from '../../data/faqs';
import { FaqItem } from './FaqItem';

export function FaqAccordion() {
  const [category, setCategory] = useState('all');
  const visible = category === 'all' ? faqs : faqs.filter((f) => f.categoryId === category);
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div>
      <div role="tablist" aria-label="Kategori FAQ" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:justify-center">
        {faqCategories.map((c) => {
          const active = c.id === category;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 whitespace-nowrap rounded-md border px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
              active ? 'border-forest bg-forest text-white' : 'border-line bg-white text-ink-muted hover:border-forest hover:text-forest'}`
              }>
              
              {c.label}
            </button>);

        })}
      </div>
      <ul className="mt-8 space-y-3">
        {visible.map((faq) =>
        <FaqItem key={faq.id} faq={faq} open={openId === faq.id} onToggle={() => setOpenId((cur) => cur === faq.id ? null : faq.id)} />
        )}
      </ul>
    </div>);

}