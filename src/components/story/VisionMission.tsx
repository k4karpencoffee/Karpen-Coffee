import React from "react";
import { motion } from "framer-motion";
import { ArmchairIcon, BeanIcon, ClockIcon, CoffeeIcon, LeafIcon, QuoteIcon, SproutIcon, UsersIcon, BoxIcon } from "lucide-react";
import { storyContent } from "../../data/storyContent";
import { Container } from "../common/Container";
/** One icon per mission point, in order: quality, comfortable place, learning, worship time, team. */
const missionIcons: BoxIcon[] = [CoffeeIcon, ArmchairIcon, SproutIcon, ClockIcon, UsersIcon];
const cardHover = 'transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none';
export function VisionMission() {
  const v = storyContent.visionMission;
  return <section className="relative overflow-hidden bg-mint py-20 md:py-24" aria-labelledby="vision-title">
      {/* Soft blurred green circles behind the cards */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/40 to-forest/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-gradient-to-tl from-emerald-300/40 to-forest/20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-mint-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
            {v.overline}
          </span>
          <h2 id="vision-title" className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {v.title}
          </h2>
          {/* Short green rule with a small coffee bean in the middle */}
          <div className="mt-4 flex items-center justify-center gap-2.5" aria-hidden="true">
            <span className="h-0.5 w-10 rounded-full bg-forest/40" />
            <BeanIcon className="h-4 w-4 text-forest" />
            <span className="h-0.5 w-10 rounded-full bg-forest/40" />
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_1.25fr]">
          {/* Visi */}
          <article className={`relative overflow-hidden rounded-2xl bg-forest p-8 text-white md:p-10 ${cardHover}`}>
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 text-white opacity-[0.08]">
              <BeanIcon className="h-56 w-56 md:h-64 md:w-64" strokeWidth={1.25} />
              <LeafIcon className="absolute -left-10 bottom-24 h-24 w-24 -rotate-12" strokeWidth={1.25} />
            </div>
            <div className="relative">
              <QuoteIcon className="h-8 w-8 text-emerald-300/70" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">{v.visionTitle}</h3>
              <p className="mt-5 text-lg font-medium leading-relaxed md:text-xl">{v.vision}</p>
            </div>
          </article>

          {/* Misi */}
          <article className={`rounded-2xl border border-line bg-white p-8 md:p-10 ${cardHover}`}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">{v.missionTitle}</h3>
            <ol className="mt-6">
              {v.missions.map((m, i) => {
              const Icon = missionIcons[i % missionIcons.length];
              const isLast = i === v.missions.length - 1;
              return <motion.li key={i} initial={{
                opacity: 0,
                y: 8
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true,
                margin: '-40px'
              }} transition={{
                duration: 0.25,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.06
              }} className={`relative flex gap-4 ${isLast ? '' : 'pb-5'}`}>
                    {/* Thin vertical connector between points */}
                    {!isLast && <span aria-hidden="true" className="absolute bottom-0 left-3.5 top-8 w-px bg-mint-strong" />}
                    <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mint text-xs font-bold text-forest">
                      {i + 1}
                    </span>
                    <div className="flex min-w-0 flex-1 gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-forest/70" strokeWidth={1.75} aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-ink-muted md:text-base">{m}</p>
                    </div>
                  </motion.li>;
            })}
            </ol>
          </article>
        </div>
      </Container>
    </section>;
}