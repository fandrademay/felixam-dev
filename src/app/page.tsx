import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import './fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/contact" prefetch={true} replace={true}>Contact</Link>
            
            <Link className={styles.secondary}
              href="/documents"
              prefetch={true}
              replace={true}
            >
              <Image
                src="/file.svg"
                width={20}
                height={20}
                alt="documents"
              />
              Documents
            </Link>
            
            <Link
              className={styles.minor}
              href="https://www.linkedin.com/in/felixAmay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-White-34.png"
                width={20}
                height={20}
                alt="LinkedIn"
              />
            </Link>
            <Link
              className={styles.minor}
              href="https://github.com/fandrademay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark-white.svg"
                width={20}
                height={20}
                alt="GitHub"
              />
            </Link>
            <Link
              className={styles.minor}
              href="https://www.felixam.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/home.svg"
                width={20}
                height={20}
                alt="Home"
              />
            </Link>

          </div>
        </div>
        
        <div className={styles.main}>
          <h1>Felix Andrade May</h1>
          <p>A Computer Science Graduate of Aberystwyth University</p>
        </div>

      </main>
    </div>
  );
}
