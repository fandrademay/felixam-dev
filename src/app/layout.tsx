import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function RootLayout(this: any, {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <main className={styles.main}>
            <div className={styles.header}>
              {/* <SidebarProvider> <AppSidebar/> <SidebarTrigger /> </SidebarProvider> */}
              <div className={styles.ctas}> 
                <Link className={styles.major} href="/contact" prefetch={true} replace={true}>
                  <Image src="/contact.svg" width={20} height={20} alt="Contact"/>
                  Contact
                </Link>
                
                <Link className={styles.minor} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.inv} src="/file.svg" width={20} height= {20} alt="Documents"/>
                  Documents
                </Link>

                <Link className={styles.other} href="https://felixam.dev">
                  <Image src="/home.svg" width={20} height={20} alt="Home"/>
                </Link>
                
                <Link className={styles.other} href="https://www.linkedin.com/in/felixAmay" 
                      target="_blank"  rel="noopener noreferrer">
                  <Image src="/linkedin-White-34.png" width={20} height={20} alt="LinkedIn"/>
                </Link>

                <Link className={styles.other} href="https://github.com/fandrademay"
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/github-mark-white.svg" width={20} height={20} alt="GitHub"/>
                </Link>
              </div>
            </div>
          </main>

          {children}
                

          <footer className={styles.footer}>
            This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.
          </footer>
      </body>
    </html>
  );
}
