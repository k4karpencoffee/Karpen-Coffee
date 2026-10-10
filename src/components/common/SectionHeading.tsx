import React from 'react';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  overlineStyle?: 'line' | 'pill' | 'plain';
  as?: 'h1' | 'h2';
  titleClassName?: string;
  id?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = 'left',
  overlineStyle = 'plain',
  as = 'h2',
  titleClassName = 'text-2xl font-bold tracking-tight md:text-3xl',
  id
}: SectionHeadingProps) {
  const Tag = as;
  const center = align === 'center';
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {overline && overlineStyle === 'pill' &&
      <span className="inline-flex items-center rounded-full bg-mint-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
          {overline}
        </span>
      }
      {overline && overlineStyle !== 'pill' &&
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
          {overlineStyle === 'line' && <span className="h-px w-4 bg-forest" aria-hidden="true" />}
          {overline}
        </p>
      }
      <Tag id={id} className={`${overline ? 'mt-3' : ''} text-ink ${titleClassName}`}>
        {title}
      </Tag>
      {description && <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">{description}</p>}
    </div>);

}