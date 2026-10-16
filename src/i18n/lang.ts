export type Lang = 'id' | 'en';

const KEY = 'karpen-lang';

function readLang(): Lang {
    try {
        return window.localStorage.getItem(KEY) === 'en' ? 'en' : 'id';
    } catch {
        return 'id';
    }
}

/** Bahasa aktif. Dibaca sekali saat halaman dimuat. Default selalu Indonesia. */
export const lang: Lang = readLang();

if (typeof document !== 'undefined') document.documentElement.lang = lang;

/** Teks kecil di dalam komponen: tr('Teks Indonesia', 'English text'). */
export const tr = (id: string, en: string): string => (lang === 'en' ? en : id);

type DeepPartial<T> = T extends (infer U)[]
    ? (DeepPartial<U> | undefined)[]
    : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
    Object.prototype.toString.call(v) === '[object Object]';

/** Gabungkan versi Indonesia (dasar) dengan versi Inggris. Yang tidak ditulis di versi Inggris otomatis tetap sama. */
function merge(base: unknown, over: unknown): unknown {
    if (over === undefined) return base;
    if (Array.isArray(base)) {
        return base.map((item, i) => merge(item, Array.isArray(over) ? over[i] : undefined));
    }
    if (isPlainObject(base) && isPlainObject(over)) {
        const out: Record<string, unknown> = { ...base };
        for (const key of Object.keys(over)) out[key] = merge(base[key], over[key]);
        return out;
    }
    return over;
}

/**
 * localize(versiIndonesia, versiInggris)
 * Versi Inggris cukup berisi teks yang berbeda. Sisanya (nama menu, brand, tagline, dst.)
 * otomatis ikut versi Indonesia, jadi daftar pengecualian selalu aman.
 */
export function localize<T>(id: T, en?: DeepPartial<NoInfer<T>>): T {
    return lang === 'en' && en !== undefined ? (merge(id, en) as T) : id;
}

export function setLang(next: Lang) {
    try {
        window.localStorage.setItem(KEY, next);
    } catch {
        /* abaikan */
    }
    window.location.reload();
}