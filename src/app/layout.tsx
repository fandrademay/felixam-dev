import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// import { slide as Menu } from "next-burger-menu"

export default function RootLayout(this: any, {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body>
          <main className={styles.main}>
            <div className={styles.header}>
              <div className={styles.ctas}>
                <Link className={styles.major} href="/contact" prefetch={true} replace={true}>
                  <Image src="/contact.svg" 
                          width={20} height={20} alt="Contact"/>
                  Contact
                </Link>
                
                <Link className={styles.minor} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.white_inverting} src="/file.svg" 
                          width={20} height={20} alt="Documents"/>
                  Documents
                </Link>

                <Link className={styles.minor} href="/posts" prefetch={true} replace={true}>
                  <Image className={styles.white_inverting} src="/posts.svg" 
                          width={20} height={20} alt="Posts"/>
                  Posts
                </Link>
                
                <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin-White-34.png" width={20} height={20} alt="LinkedIn"/>
                </Link>

                <Link className={styles.other} href="https://github.com/fandrademay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/github-mark-white.svg" width={20} height={20} alt="GitHub"/>
                </Link>

                <Link className={styles.other} href="https://felixam.dev">
                  <Image src="/home.svg" width={20} height={20} alt="Home"/>
                </Link>
              </div>

              <div className={styles.ctas_mobile}>
                <Link className={styles.other} href="/contact" prefetch={true} replace={true}>
                  <Image src="/contact_mobile.svg" width={15} height={15} alt="Contact"/>
                </Link>
                
                <Link className={styles.other} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.white_inverting} src="/file.svg" 
                          width={15} height={15} alt="Documents"/>
                </Link>

                <Link className={styles.other} href="/posts" prefetch={true} replace={true}>
                  <Image className={styles.white_inverting} src="/posts.svg" 
                          width={15} height={15} alt="Posts"/>
                </Link>
                
                <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin-White-34.png" width={15} height={15} alt="LinkedIn"/>
                </Link>

                <Link className={styles.other} href="https://github.com/fandrademay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/github-mark-white.svg" width={15} height={15} alt="GitHub"/>
                </Link>

                <Link className={styles.other} href="https://felixam.dev">
                  <Image src="/home.svg" width={15} height={15} alt="Home"/>
                </Link>
              </div>
            </div>
          </main>

        {children}
        
        <footer className={styles.footer}>
          <div className={styles.mytext}>
            This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.
          </div>
          <div className={styles.webring}>
                <a href="https://aberwebr.ing/felixam/left"> &lt; </a> <a href="https://aberwebr.ing"> Aber Webring </a> <a href="https://aberwebr.ing/felixam/right"> &gt; </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
