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
            
            <Link className={styles.secondary} href="/documents" prefetch={true} replace={true}>Documents</Link>
            
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

          </div>
        </div>
        
        <div className={styles.main}>
          <h1>Felix Andrade May</h1>
          <p>A Computer Science Graduate of Aberystwyth University</p>
        </div>

      </main>
      <footer className={styles.footer}>
        This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.
      </footer>
    </div>
  );
}
