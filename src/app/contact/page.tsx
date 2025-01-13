import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/" prefetch={true} replace={true}>Home</Link>
            
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
          <h1>Contact</h1>
          <p>f.andrademay@gmail.com</p>
        </div>

      </main>
      <footer className={styles.footer}>
        This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.
      </footer>
    </div>
  );
}
