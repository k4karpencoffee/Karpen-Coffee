import { useEffect, useState } from 'react';

/** Phones + tablets (below the laptop breakpoint), where the on-screen keyboard appears. */
const TOUCH_QUERY = '(max-width: 1023px)';

export const isTextField = (el: Element | null): el is HTMLElement =>
el instanceof HTMLTextAreaElement ||
el instanceof HTMLSelectElement ||
el instanceof HTMLInputElement && !['checkbox', 'radio', 'button', 'submit', 'reset', 'range', 'color', 'file'].includes(el.type);

/**
 * True while a text field is focused on a phone/tablet (= keyboard is open).
 * Used to step fixed elements (floating WhatsApp/FAQ) aside so they never cover the field.
 */
export function useTypingOnTouch(): boolean {
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const touch = window.matchMedia(TOUCH_QUERY);
    let frame = 0;
    const update = () => {
      frame = 0;
      setTyping(touch.matches && isTextField(document.activeElement));
    };
    // focusout fires before the next field's focusin — check one frame later so the buttons don't flicker between fields.
    const later = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    document.addEventListener('focusin', update);
    document.addEventListener('focusout', later);
    return () => {
      document.removeEventListener('focusin', update);
      document.removeEventListener('focusout', later);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return typing;
}