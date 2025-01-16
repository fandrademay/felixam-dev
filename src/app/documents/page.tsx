import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Documents</h1>
          <div className={styles.ctas}>
            <Link
              href={'fea6_ProjectReport_2024.pdf'}
              className={styles.pdf_button}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <div className={styles.pdf_preview}>
                <Image
                  src="/fea6-ProjectReport-2024-cover.png"
                  width={1060/4}
                  height={1498/4}
                  alt="fea6_ProjectReport_2024_cover.png"
                />
              </div>
              <>
                <Image
                  src="download.svg"
                  width={20}
                  height={20}
                  alt="Download Dissertation"
                />
                Download Dissertation
              </>
            </Link>
          </div>
      </div>
    </div>
  );
}
