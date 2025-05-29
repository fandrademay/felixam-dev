import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';
import { getAllPosts, sortPosts } from './posts.utils'
import { getTranslations } from "next-intl/server";

export default async function PostsHomePage() {
  const posts = await getAllPosts()
  posts.sort(sortPosts).reverse()
  const t = await getTranslations('PostsHomePage');
  
  return (
    <div className={styles.page}>
        <div className={styles.main}>
            <h1>{t('title')}</h1>
              <ul>
                {posts.map(posts => 
                  <li key={posts.id}>
                    <Link href={`/posts/${posts.id}`}>{posts.title}</Link>
                  </li>
                )}
              </ul>
        </div>
    </div>
  );
}