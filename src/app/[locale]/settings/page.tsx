import '../globals.css';
import '../fonts.css';
import styles from "../page.module.css";

import { useTranslations } from 'next-intl';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';

import ToggleThemeButton from '../../components/ToggleThemeButton';
import ToggleLocaleButton from '@/app/components/ToggleLocaleButton';


export default function Settings({params}:{params: Promise<{locale: string}>;}) {
  const { locale } = use(params);
 
  setRequestLocale(locale);
  const t = useTranslations('Settings');
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>{t('title')}</h1>
          <ToggleThemeButton/>
          <ToggleLocaleButton/>
        <p>{t('declaration_start')}<a href="https://nextjs.org/">{t('declaration_nextjs')}</a>{t('declaration_mid')}<a href="https://www.typescriptlang.org/">{t('declaration_ts')}</a>.</p>
      </div>
    </div>
  );
}
