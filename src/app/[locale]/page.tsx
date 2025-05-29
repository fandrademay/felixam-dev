import styles from "./page.module.css";
import './fonts.css';
import { useTranslations } from 'next-intl';
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function Home({params}:{params: Promise<{locale: string}>;}) {
  const { locale } = use(params);
 
  setRequestLocale(locale);
 
  const t = useTranslations('Home');
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>{t('title')}</h1>
        <p>{t('content')}</p>
      </div>
    </div>
  );
}