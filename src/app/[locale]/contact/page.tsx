import styles from "../page.module.css";
import '../fonts.css';
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";


export default function Contact() {

  const t = useTranslations('Contact');

  return (
    <div className={styles.page}>      
      <div className={styles.main}>
        <h1>{t('title')}</h1>
        <h2>{t('email')}:</h2> 
        <div className={styles.contact_options}>
          <Link className={styles.major} href="mailto:f.andrademay@gmail.com">
            <Image className={styles.inverting} src="/images/icons/contact.svg" 
                    width={20} height={20} alt="Contact"/>
            f.andrademay@gmail.com
          </Link>
        </div>
    
        <h2>{t('social_media')}:</h2>
        <div className={styles.contact_options}>
          <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/linkedin-White-34.png" width={24} height={24} alt="LinkedIn"/>
          </Link>

          <Link className={styles.other} href="https://github.com/fandrademay" 
                target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/github-mark-white.svg" width={24} height={24} alt="GitHub"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
