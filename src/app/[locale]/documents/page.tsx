import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';
import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function Documents({params}:{params: Promise<{locale: string}>;}) {
  const { locale } = use(params);
 
  setRequestLocale(locale);
  const t = useTranslations('Documents');
  
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>{t('title')}</h1>
          <div className={styles.ctas}>
            <Link href={'pdfs/fea6_ProjectReport_2024.pdf'} className={styles.pdf_button} 
                  target="_blank" rel="noopener noreferrer" download>
              <div className={styles.container}>
                <Image src="/images/pdf_covers/fea6-ProjectReport-2024-cover.png" 
                        width={164.35} height={230.25} alt="fea6_ProjectReport_2024_cover.png"/>
              </div>
              <div className={styles.container}>
                {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                {t('download')} {t('dissertation')}
              </div>
            </Link>

            <Link href={'pdfs/FelixAM_cv.pdf'} className={styles.pdf_button} 
                  target="_blank" rel="noopener noreferrer" download>
              <div className={styles.container}>
                <Image src="/images/pdf_covers/FelixAM-cv-cover.png" width={164.35} height={230.25} alt="FelixAM-cv-cover.png"/>
              </div>
              <div className={styles.container}>
                {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                {t('download')} {t('cv')}
              </div>
            </Link>

            <Link href={'pdfs/cbi-report.pdf'} className={styles.pdf_button}
                  target="_blank" rel="noopener noreferrer" download>
              <div className={styles.container}>
                <Image src="/images/pdf_covers/cbi-report-cover.png" width={164.35} height={230.25} alt="cbi-report-cover.png"/>
              </div>
              <div className={styles.container}>
                {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                {t('download')} <i>&lsquo;{t('cbi_report')}&rsquo;</i> {t('paper')}
              </div>
            </Link>
            
          </div>

          <div className={styles.ctas_mobile}>
            <div className={styles.vertical_pdfs}>
              <Link href={'pdfs/fea6_ProjectReport_2024.pdf'} className={styles.pdf_button} 
                    target="_blank" rel="noopener noreferrer" download>
                <div className={styles.container}>
                  <Image src="/images/pdf_covers/fea6-ProjectReport-2024-cover.png" 
                          width={219} height={307} alt="fea6_ProjectReport_2024_cover.png"/>
                </div>
                <div className={styles.container}>
                  {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                {t('download')} {t('dissertation')}
                </div>
              </Link>

              <Link href={'pdfs/FelixAM_cv.pdf'} className={styles.pdf_button} 
                    target="_blank" rel="noopener noreferrer" download>
                <div className={styles.container}>
                  <Image src="/images/pdf_covers/FelixAM-cv-cover.png" width={219} height={307} alt="FelixAM-cv-cover.png"/>
                </div>
                <div className={styles.container}>
                  {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                  {t('download')} {t('cv')}
                </div>
              </Link>

              <Link href={'pdfs/cbi-report.pdf'} className={styles.pdf_button}
                  target="_blank" rel="noopener noreferrer" download>
                <div className={styles.container}>
                  <Image src="/images/pdf_covers/cbi-report-cover.png" width={219} height={307} alt="cbi-report-cover.png"/>
                </div>
                <div className={styles.container}>
                  {/* <Image src="download.svg" width={20} height={20} alt="Download"/> */}
                  {t('download')} <i>&lsquo;{t('cbi_report')}&rsquo;</i> {t('paper')}
                </div>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
