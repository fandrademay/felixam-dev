import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className={styles.page}> */}
          <main className={styles.main}>
            <div className={styles.header}>
              <div className={styles.ctas}>
                <Link 
                  className={styles.major} 
                  href="/contact" 
                  prefetch={true} 
                  replace={true}
                >
                  <Image
                    src="/contact.svg"
                    width={20}
                    height={20}
                    alt="Contact"
                  />
                  Contact
                </Link>
                
                <Link 
                  className={styles.minor}
                  href="/documents"
                  prefetch={true}
                  replace={true}
                >
                  <Image className={styles.white_inverting}
                    src="/file.svg"
                    width={20}
                    height={20}
                    alt="Documents"
                  />
                  Documents
                </Link>
                
                <Link
                  className={styles.other}
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
                  className={styles.other}
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
                  className={styles.other}
                  href="https://felixam.dev"
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
          </main>
        {/* </div> */}

        {children}
        
        <footer className={styles.footer}>
          This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.
        </footer>
      </body>
    </html>
  );
}
