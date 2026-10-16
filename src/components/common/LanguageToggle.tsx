import React from 'react';
import { lang, setLang } from '../../i18n/lang';

interface LanguageToggleProps {
    light?: boolean;
    className?: string;
}

export function LanguageToggle({ light = false, className = '' }: LanguageToggleProps) {
    const base = 'px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] transition-colors';
    const off = light ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-forest';
    return (
        <div
            role="group"
            aria-label="Bahasa / Language"
            className={`items-center overflow-hidden rounded-full border ${light ? 'border-white/40' : 'border-line'} ${className || 'inline-flex'}`}>
            {(['id', 'en'] as const).map((code) =>
                <button
                    key={code}
                    type="button"
                    aria-pressed={lang === code}
                    onClick={() => lang !== code && setLang(code)}
                    className={`${base} ${lang === code ? 'bg-forest text-white' : off}`}>
                    {code.toUpperCase()}
                </button>
            )}
        </div>);
}