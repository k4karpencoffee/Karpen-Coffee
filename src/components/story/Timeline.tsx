import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MilestoneIcon } from 'lucide-react';
import { storyContent, timelineEntries } from '../../data/storyContent';
import type { TimelineEntry } from '../../types/content';
import { Container } from '../common/Container';

function Entry({ entry }: {entry: TimelineEntry;}) {
  return (
    <div className="relative pl-10 md:pl-14">
      <span className="absolute left-0 top-5 h-5 w-5 rounded-full border-2 border-forest bg-white" aria-hidden="true" />
      <article className="rounded-xl border border-line bg-white p-6">
        <h3 className="flex flex-wrap items-center gap-2.5 text-base font-semibold text-ink">
          <span className="rounded bg-forest px-2 py-0.5 font-mono text-[11px] font-bold text-white">{entry.year}</span>
          {entry.title}
        </h3>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted">
          {entry.paragraphs.map((p, i) =>
          <p key={i}>{p}</p>
          )}
        </div>
      </article>
    </div>);

}

export function Timeline() {
  const [expanded, setExpanded] = useState(false);
  const t = storyContent.timeline;
  const [first, ...rest] = timelineEntries;

  return (
    <section className="bg-paper/60 py-20 md:py-24" aria-labelledby="timeline-title">
      <Container className="max-w-4xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
            <MilestoneIcon className="h-3 w-3" aria-hidden="true" />
            {t.pill}
          </span>
          <h2 id="timeline-title" className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">{t.description}</p>
        </div>

        <div className="relative mt-12">
          <span className="absolute bottom-6 left-[9px] top-6 w-0.5 bg-forest/30" aria-hidden="true" />
          <ol className="space-y-6">
            {first &&
            <li>
                <Entry entry={first} />
              </li>
            }
            <AnimatePresence initial={false}>
              {expanded &&
              rest.map((entry, i) =>
              <motion.li
                key={entry.year + i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.24, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}>
                
                    <Entry entry={entry} />
                  </motion.li>
              )}
            </AnimatePresence>
          </ol>
          {rest.length > 0 &&
          <div className="mt-8 pl-10 md:pl-14">
              <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-ink bg-white px-5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-white">
              
                {expanded ? t.collapseLabel : t.expandLabel}
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </div>
          }
        </div>
      </Container>
    </section>);

}