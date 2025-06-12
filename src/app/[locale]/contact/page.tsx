import styles from "../page.module.css";
import '../fonts.css';
import { useTranslations } from "next-intl";


export default function Contact() {

  const t = useTranslations('Contact');

  return (
    <div className={styles.page}>      
      <div className={styles.main}>
        <h1>{t('title')}</h1>
          <div className={styles.email_link}>
            <h2>{t('email')}:</h2> 
            <a href="mailto:f.andrademay@gmail.com">f.andrademay@gmail.com</a>
          </div>
      </div>
    </div>
  );
}
