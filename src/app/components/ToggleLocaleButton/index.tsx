'use client'
import Image from 'next/image';

import styles from "../../../app/[locale]/page.module.css";

import { useLocale, useTranslations } from 'next-intl';
import {routing} from '@/i18n/routing';


export function ToggleLocale(locale: string){
  if (locale === 'en'){
    let newLocale = 'cy'
    return(newLocale)
  }
  if (locale === 'cy'){
    let newLocale = 'en'
    return(newLocale)
  }
}

export default function ToggleLocaleButton() {
  const t = useTranslations('ToggleLocaleButton')
  const locale = useLocale();

  return (
    <div className={styles.ctas}>
      <a className={styles.major} href={`/${ToggleLocale(locale)}/settings`}>
          <Image className={styles.inverting} src="/images/icons/translate.svg" 
                  width={20} height={20} alt="Change Locale"/>
            {t('content')}
      </a>
    </div>
  );
}
