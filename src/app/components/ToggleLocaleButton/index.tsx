'use client'
import Image from 'next/image';

import styles from "../../../app/[locale]/page.module.css";

import { useLocale, useTranslations } from 'next-intl';


export function ToggleLocale(locale: string){
  if (locale === 'en'){
    const newLocale = 'cy'
    return(newLocale)
  }
  if (locale === 'cy'){
    const newLocale = 'en'
    return(newLocale)
  }
}

export default function ToggleLocaleButton() {
  const t = useTranslations('ToggleLocaleButton')
  const locale = useLocale();

  return (
    <div className={styles.settings_button}>
      <a className={styles.major} href={`/${ToggleLocale(locale)}/settings`}>
          <Image className={styles.inverting} src="/images/icons/translate.svg" 
                  width={20} height={20} alt="Change Locale"/>
            {t('content')}
      </a>
    </div>
  );
}
