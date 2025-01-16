import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import './fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Felix Andrade May</h1>
        <p>A Computer Science Graduate of Aberystwyth University</p>
      </div>
    </div>
  );
}
