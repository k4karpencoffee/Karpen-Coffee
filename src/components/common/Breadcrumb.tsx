import React from 'react';
import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  current: string;
  /** Extra classes on the list (e.g. "justify-center"). */
  className?: string;
}
export function Breadcrumb({
  current,
  className = ''
}: BreadcrumbProps) {
  return <nav aria-label="Breadcrumb" className="text-[11px] font-semibold uppercase tracking-[0.14em]">
      
    </nav>;
}