import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ThemeProvider } from '@designcise/next-theme-toggle';
import { themes } from '@designcise/next-theme-toggle/server';


// import { slide as Menu } from "next-burger-menu"

export default function RootLayout(this: any, {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider storageKey="user-pref" defaultTheme={themes.light.type}>
          <main className={styles.main}>
            <div className={styles.header}>
              <div className={styles.ctas}>
                <Link className={styles.major} href="/contact" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/contact.svg" 
                          width={20} height={20} alt="Contact"/>
                  Contact
                </Link>
                
                <Link className={styles.minor} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/file.svg" 
                          width={20} height={20} alt="Documents"/>
                  Documents
                </Link>

                <Link className={styles.minor} href="/posts" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/posts.svg" 
                          width={20} height={20} alt="Posts"/>
                  Posts
                </Link>

                <div className={styles.otherButtons}>
                
                  <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                        target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/linkedin-White-34.png" width={20} height={20} alt="LinkedIn"/>
                  </Link>

                  <Link className={styles.other} href="https://github.com/fandrademay" 
                        target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/github-mark-white.svg" width={20} height={20} alt="GitHub"/>
                  </Link>

                  <Link className={styles.other} href="/">
                    <Image src="/images/icons/home.svg" width={20} height={20} alt="Home"/>
                  </Link>
                </div>
              </div>

              <div className={styles.ctas_mobile}>
                <Link className={styles.other} href="/contact" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/contact.svg" 
                          width={15} height={15} alt="Contact"/>
                </Link>
                
                <Link className={styles.other} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/file.svg" 
                          width={15} height={15} alt="Documents"/>
                </Link>

                <Link className={styles.other} href="/posts" prefetch={true} replace={true}>
                  <Image className={styles.inverting} src="/images/icons/posts.svg" 
                          width={15} height={15} alt="Posts"/>
                </Link>
                
                <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/linkedin-White-34.png" width={15} height={15} alt="LinkedIn"/>
                </Link>

                <Link className={styles.other} href="https://github.com/fandrademay" 
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/github-mark-white.svg" width={15} height={15} alt="GitHub"/>
                </Link>

                <Link className={styles.other} href="/">
                  <Image src="/images/icons/home.svg" width={15} height={15} alt="Home"/>
                </Link>
              </div>
            </div>
          </main>

          {children}
          
          <footer className={styles.footer}>
            <div className={styles.settings_access}>
              <Link href="/settings" prefetch={true} replace={true}>
                <Image className={styles.settings_icon} src="/images/icons/settings.svg" width={30} height={30} alt="Settings"/>
              </Link>
            </div>
            <div className={styles.webring}>
              <a href="https://aberwebr.ing/felixam/left"> &lt; </a> <a href="https://aberwebr.ing"> Aber Webring </a> <a href="https://aberwebr.ing/felixam/right"> &gt; </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
