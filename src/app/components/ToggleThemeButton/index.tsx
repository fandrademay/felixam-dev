// components/ToggleThemeButton/index.jsx
'use client'

import React, { useContext } from 'react';
import { useTheme } from '@designcise/next-theme-toggle';
import Image from 'next/image';
import Link from 'next/link';

import styles from "../../page.module.css";


export default function ToggleThemeButton() {
  const { toggleTheme } = useTheme()

  return (
    // <div className={styles.toggle_switch}>
    //   <label className={styles.switch}>
    //     <input type='checkbox'/>
    //     <span className={styles.slider} onClick={toggleTheme}></span>
    //   </label>
    //   <h3 className={styles.h3}>Toggle Theme</h3>
    // </div>  
    <div className={styles.ctas}>
      <a className={styles.major} onClick={toggleTheme}>
          <Image className={styles.inverting} src="/images/icons/theme.svg" 
                  width={20} height={20} alt="Change Theme"/>
            Change Theme
      </a>
    </div>
  );
}