import styles from "../page.module.css";
import '../fonts.css';

export default function Home() {
  return (
    <div className={styles.page}>      
      <div className={styles.main}>
        <h1>Contact</h1>
          <div className={styles.email_link}>
            <h2>Email:</h2> 
            <a href="mailto:f.andrademay@gmail.com">f.andrademay@gmail.com</a>
          </div>
      </div>
    </div>
  );
}
