import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { Faq } from '../../types/content';
import { iconMap } from '../common/icons';

interface FaqItemProps {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}

export function FaqItem({ faq, open, onToggle }: FaqItemProps) {
  const Icon = iconMap[faq.icon];
  const panelId = `${faq.id}-panel`;
  return (
    <li className={`rounded-lg border bg-white transition-colors duration-150 ${open ? 'border-forest/50' : 'border-line'}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-3 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest md:px-6">
          
          <Icon className="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
          <span className="flex-1 text-sm font-medium text-ink md:text-base">{faq.question}</span>
          <ChevronDownIcon className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          id={panelId}
          role="region"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden">
          
            <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink-muted md:px-6">{faq.answer}</p>
          </motion.div>
        }
      </AnimatePresence>
    </li>);

}