import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

// Menu items.
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupContent className="group-data-[collapsible=icon]:hidden" > */}
          <SidebarGroupContent>
            <ul>
                <Link className={styles.minor} href="/contact" prefetch={true} replace={true}>
                  <Image src="/contact.svg" width={20} height={20} alt="Contact"/>
                  Contact
                </Link>
                
                <Link className={styles.minor} href="/documents" prefetch={true} replace={true}>
                  <Image className={styles.inv} src="/file.svg" width={20} height= {20} alt="Documents"/>
                  Documents
                </Link>

                <Link className={styles.minor} href="https://felixam.dev">
                  <Image src="/home.svg" width={20} height={20} alt="Home"/>
                  Home
                </Link>
                
                <Link className={styles.minor} href="https://www.linkedin.com/in/felixAmay" 
                      target="_blank"  rel="noopener noreferrer">
                  <Image src="/linkedin-White-34.png" width={20} height={20} alt="LinkedIn"/>
                  LinkedIn
                </Link>

                <Link className={styles.minor} href="https://github.com/fandrademay"
                      target="_blank" rel="noopener noreferrer">
                  <Image src="/github-mark-white.svg" width={20} height={20} alt="GitHub"/>
                  GitHub
                </Link>
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
