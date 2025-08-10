import styles from "./page.module.css";
import './fonts.css';
import { useTranslations } from 'next-intl';


export default function NotFound() {
  const t = useTranslations('NotFound');
 
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>{t('title')}</h1>
        <h2>{t('content')}</h2>
      </div>
    </div>
  );
}