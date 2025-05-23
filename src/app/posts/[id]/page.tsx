import styles from "../../page.module.css";
import '../../fonts.css';

import { remark } from 'remark'
import remarkHtml from 'remark-html'

import { getPostsById, parseFileId, readAllPostsFiles } from "../posts.utils";


export async function generateStaticParams() {
  const entries = await readAllPostsFiles() 
  return entries.map((entry) => ({
    id: parseFileId(entry),
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const post = await getPostsById(id)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date?.toISOString(),
    }
  }
}

export default async function PostsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostsById(id)
  

  if (!post) return

  const htmlContent = (await remark().use(remarkHtml).process(post.content)).toString()
  
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h3>{post.title}</h3>
        <p>&lt;{post.date?.toISOString().substring(0,10)}&gt;</p>
        <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}