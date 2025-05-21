import styles from "../../page.module.css";
import '../../fonts.css';

import { remark } from 'remark'
import remarkHtml from 'remark-html'

import { getPostsById } from "../posts.utils";
import { parseFileId } from "../posts.utils";
import { readAllPostsFiles } from "../posts.utils";
import { mapFileToPosts } from "../posts.utils";
import { Posts } from "../posts.types";

export async function generateStaticParams() {
  const entries = await readAllPostsFiles() 
 
  return entries.map((entry) => ({
    id: parseFileId(entry),
  }))
}

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

// export async function fetchPostById(id: string): Promise<Posts | undefined> {
//   const allPostFiles = await readAllPostsFiles()
//   const postFile = allPostFiles.find(entry => parseFileId(entry) === id)
//   if (!postFile) return undefined
//   return mapFileToPosts(postFile)
// }

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