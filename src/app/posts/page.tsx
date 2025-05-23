import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';
import { getAllPosts, sortPosts } from './posts.utils'

export default async function PostsHomePage() {
  const posts = await getAllPosts()
  console.log(posts)
  posts.sort(sortPosts).reverse()

  return (
    <div className={styles.page}>
        <div className={styles.main}>
            <h1>Posts</h1>
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