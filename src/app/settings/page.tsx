import '../globals.css';
import '../fonts.css';
import styles from "../page.module.css";

import type { AppProps } from 'next/app';
import Image from "next/image";
import ToggleThemeButton from '../components/ToggleThemeButton';


export default function Home({ Component, pageProps }: AppProps) {
  
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Settings</h1>
          <ToggleThemeButton/>
          {/* <ToggleLanguageButton/> */}
        <p>This website was built with <a href="https://nextjs.org/">Next.js</a> in <a href="https://www.typescriptlang.org/">TypeScript</a>.</p>
      </div>
    </div>
  );
}
