import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { tr } from '../i18n/lang';

export function NotFound() {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = tr('Halaman tidak ditemukan | Karpen Coffee', 'Page not found | Karpen Coffee');
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex';
        document.head.appendChild(meta);
        return () => {
            document.title = prevTitle;
            meta.remove();
        };
    }, []);

    return (
        <section className="bg-white py-20 md:py-28">
            <Container className="max-w-xl text-center">
                <p className="text-6xl font-extrabold tracking-tight text-forest md:text-7xl">404</p>
                <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">{tr('Halaman tidak ditemukan', 'Page not found')}</h1>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                    {tr('Alamat yang kamu buka tidak ada atau sudah dipindahkan. Yuk kembali ke beranda atau langsung lihat menu kami.', 'The page you are looking for does not exist or has been moved. Head back home or take a look at our menu.')}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex h-11 items-center rounded-lg bg-forest px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest-dark">
                        {tr('Kembali ke Beranda', 'Back to Home')}
                    </Link>
                    <Link
                        to="/menu"
                        className="inline-flex h-11 items-center rounded-lg border border-mint-line bg-white px-6 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-mint">
                        {tr('Lihat Menu', 'View Menu')}
                    </Link>
                </div>
            </Container>
        </section>);

}