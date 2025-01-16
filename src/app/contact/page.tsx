import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>      
      <div className={styles.main}>
        <h1>Contact</h1>
        <p>Email: f.andrademay@gmail.com</p>
      </div>
    </div>
  );
}
