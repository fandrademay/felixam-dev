import "./globals.css";
import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";

import { ThemeProvider } from '@designcise/next-theme-toggle';
import { themes } from '@designcise/next-theme-toggle/server';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({children}: {
  children: React.ReactNode; 
} ) {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // enable static rendering
  setRequestLocale(locale);

  const currentLocale = await getLocale();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>Felix Andrade May</title>
        
        <meta name="charset"      content="UTF-8" />
        <meta name="theme-color"  content="#ACCAB2"/>
        <meta name="description"  content="Felix Andrade May's Portfolio Site" />
        <meta name="author"       content="Felix Andrade May" />
        <meta name="keywords"     content="Felix Andrade May, portfolio, website, bioinformatics, computer science, python, typescript, nextjs, python3.0, Felix, Andrade, May, computing, Aberystwyth, Devon, Plymouth, Developer, Backend, Docker, Frontend, C++, C, Machine Learning, Artificial Intelligence, ML/AI, ML, AI, Developer, Software Developer" />
        <meta name="keywords"     content="Portffolio, Gwefan, Biowybodeg, Cyfrifadureg, Cyfrifiadura, Datblygwr Meddalwedd, Datblygwr, Cefn, Blaen, Dysgu Peirianyddol, Deallusrwydd Artiffisial" />
        <meta name="viewport"     content="width=device-width, initial-scale=1" />
      </head>
      
      <body>
        <NextIntlClientProvider>
          <ThemeProvider storageKey="user-pref" defaultTheme={themes.light.type}>
            <main className={styles.main}>
              <div className={styles.header}>
                <div className={styles.ctas}>
                  <Link className={styles.major} href={`/${currentLocale}/contact`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/contact.svg" 
                            width={20} height={20} alt="Contact"/>
                    {t('contact_button')}
                  </Link>
                  
                  <Link className={styles.minor} href={`/${currentLocale}/documents`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/file.svg" 
                            width={20} height={20} alt="Documents"/>
                    {t('documents_button')}
                  </Link>

                  <Link className={styles.minor} href={`/${currentLocale}/posts`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/posts.svg" 
                            width={20} height={20} alt="Posts"/>
                    {t('posts_button')}
                  </Link>

                  <div className={styles.otherButtons}>
                  
                    <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                          target="_blank" rel="noopener noreferrer">
                      <Image src="/images/icons/linkedin-White-34.png" width={20} height={20} alt="LinkedIn"/>
                    </Link>

                    <Link className={styles.other} href="https://github.com/fandrademay" 
                          target="_blank" rel="noopener noreferrer">
                      <Image src="/images/icons/github-mark-white.svg" width={20} height={20} alt="GitHub"/>
                    </Link>

                    <Link className={styles.other} href={`/${await getLocale()}/`}>
                      <Image src="/images/icons/home.svg" width={20} height={20} alt="Home"/>
                    </Link>
                  </div>
                </div>

                <div className={styles.ctas_mobile}>
                  <Link className={styles.other} href={`/${currentLocale}/contact`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/contact.svg" 
                            width={24} height={24} alt="Contact"/>
                  </Link>
                  
                  <Link className={styles.other} href={`/${currentLocale}/documents`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/file.svg" 
                            width={24} height={24} alt="Documents"/>
                  </Link>

                  <Link className={styles.other} href={`/${currentLocale}/posts`} prefetch={true} replace={true}>
                    <Image className={styles.inverting} src="/images/icons/posts.svg" 
                            width={24} height={24} alt="Posts"/>
                  </Link>

                  <Link className={styles.other} href={`/${currentLocale}/`}>
                    <Image src="/images/icons/home.svg" width={24} height={24} alt="Home"/>
                  </Link>
                </div>
              </div>
            </main>

            {children}
            
            <footer className={styles.footer}>
              <div className={styles.settings_access}>
                <Link href="/settings" prefetch={true} replace={true}>
                  <Image className={styles.settings_icon} src="/images/icons/settings.svg" width={24} height={24} alt="Settings"/>
                </Link>
              </div>
              <div className={styles.webring}>
                <a href="https://aberwebr.ing/felixam/left"> &lt; </a> <a href="https://aberwebr.ing"> {t('webring')} </a> <a href="https://aberwebr.ing/felixam/right"> &gt; </a>
              </div>
            </footer>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
