import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, InfoIcon, Loader2Icon } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';
import { reservationConfig } from '../../data/reservationConfig';
import { useReservationForm } from '../../hooks/useReservationForm';
import { ReservationCalendar } from './ReservationCalendar';
import { SelectField } from './SelectField';

const t = reservationConfig.copy;

export function ReservationForm() {
  const f = useReservationForm();
  const loading = f.status === 'loading';
  const guestOptions = reservationConfig.guestOptions.map((n) => ({
    value: String(n),
    label: `${n} ${t.guestsUnit}`
  }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        f.submit();
      }}
      className="mx-auto w-full max-w-[560px] rounded-2xl border border-line bg-white p-5 shadow-[0_12px_32px_-16px_rgba(15,61,34,0.25)] sm:p-8"
      aria-labelledby="reservation-form-title"
      noValidate>
      
      <h3 id="reservation-form-title" className="text-lg font-bold tracking-tight text-ink md:text-xl">
        {t.cardTitle}
      </h3>

      <div className="mt-6 space-y-5">
        {/* Nama */}
        <div>
          <label htmlFor="reservation-name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            {t.nameLabel}
          </label>
          <input
            id="reservation-name"
            type="text"
            autoComplete="name"
            autoCapitalize="words"
            autoCorrect="off"
            spellCheck={false}
            inputMode="text"
            enterKeyHint="next"
            required
            value={f.name}
            onChange={(e) => f.setName(e.target.value)}
            onBlur={f.touchName}
            placeholder={t.namePlaceholder}
            aria-invalid={f.nameError ? true : undefined}
            aria-describedby={f.nameError ? 'reservation-name-error' : undefined}
            className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 lg:text-sm ${
            f.nameError ? 'border-promo focus:border-promo focus:ring-promo/20' : 'border-line focus:border-forest focus:ring-forest/25'}`
            } />
          
          {/* Space always reserved, so the error appearing never shifts the layout. */}
          <div className="min-h-[1.25rem]">
            {f.nameError &&
            <p id="reservation-name-error" className="pt-1 text-xs leading-4 text-promo">
                {f.nameError}
              </p>
            }
          </div>
        </div>

        {/* Tanggal — the day name is derived automatically from the chosen date */}
        <ReservationCalendar today={f.today} value={f.date} isSelectable={f.isSelectable} onSelect={f.selectDate} />

        <div className="grid gap-5 sm:grid-cols-2">
          {/* c. Jam */}
          <SelectField
            id="reservation-time"
            label={t.timeLabel}
            value={f.time}
            disabled={!f.date}
            placeholder={f.date ? t.timePlaceholder : t.timeDisabledPlaceholder}
            options={f.slots.map((s) => ({ value: s, label: `${s} ${t.timeSuffix}` }))}
            onChange={f.setTime} />
          
          {/* d. Jumlah orang */}
          <SelectField
            id="reservation-guests"
            label={t.guestsLabel}
            value={f.guests}
            placeholder={t.guestsPlaceholder}
            options={guestOptions}
            onChange={f.setGuests} />
          
        </div>

        {/* e. Permintaan khusus */}
        <div>
          <label htmlFor="reservation-note" className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            {t.noteLabel}
          </label>
          <textarea
            id="reservation-note"
            rows={4}
            required
            maxLength={300}
            autoCapitalize="sentences"
            inputMode="text"
            enterKeyHint="done"
            value={f.note}
            onChange={(e) => f.setNote(e.target.value)}
            onBlur={f.touchNote}
            placeholder={t.notePlaceholder}
            aria-invalid={f.noteError ? true : undefined}
            aria-describedby={f.noteError ? 'reservation-note-error' : undefined}
            className={`mt-2 min-h-[136px] w-full resize-none rounded-xl border bg-white px-4 py-3 text-base leading-relaxed text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 lg:resize-y lg:text-sm ${
            f.noteError ? 'border-promo focus:border-promo focus:ring-promo/20' : 'border-line focus:border-forest focus:ring-forest/25'}`
            } />
          
          <div className="min-h-[1.25rem]">
            {f.noteError &&
            <p id="reservation-note-error" className="pt-1 text-xs leading-4 text-promo">
                {f.noteError}
              </p>
            }
          </div>
        </div>
      </div>

      {/* Always rendered (only made invisible when complete) so the form height never changes while typing. */}
      <p
        id="reservation-hint"
        aria-hidden={f.complete}
        className={`mt-6 flex items-start gap-2 rounded-xl border border-notice-line bg-notice px-4 py-3 text-xs leading-relaxed text-notice-ink ${
        f.complete ? 'invisible' : ''}`
        }>
        
        <InfoIcon className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
        {t.incompleteHint}
      </p>

      <button
        type="submit"
        disabled={!f.complete || loading}
        aria-describedby={!f.complete ? 'reservation-hint' : undefined}
        aria-busy={loading}
        className={`mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${
        f.complete ? 'bg-forest text-white hover:bg-forest-soft' : 'cursor-not-allowed bg-line text-ink-faint'} ${
        loading ? 'cursor-wait' : ''}`}>
        
        {loading ?
        <>
            <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
            {t.processing}
          </> :

        <>
            <WhatsAppIcon className="h-4 w-4" />
            {t.submit}
          </>
        }
      </button>
      <p className="mt-3 text-xs leading-relaxed text-ink-faint">{t.confirmationNote}</p>

      <div aria-live="polite">
        <AnimatePresence>
          {f.status === 'sent' &&
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-4 flex items-start gap-2 rounded-xl bg-mint px-4 py-3 text-xs leading-relaxed text-forest">
            
              <CheckCircle2Icon className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
              {t.success}
            </motion.p>
          }
        </AnimatePresence>
      </div>
    </form>);

}