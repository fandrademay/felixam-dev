import styles from "../../page.module.css";
import '../../fonts.css';

import Link from "next/link";

import { backButton, forwardButton, getPostsById, parseFileId, readAllPostsFiles } from "../posts.utils";

import remarkHtml from 'remark-html'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkDirective from 'remark-directive'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'


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

  const processor = unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkHtml)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw)
  .use(rehypeFormat)
  .use(rehypeStringify)

  const htmlContent = await (await processor.process(post.content)).toString()

  
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.postHeader}>
          <div className={styles.postTitle}>
            <Link className={styles.postsSeekingButton} href={(await backButton(post.id)).toString()}> 
              <h1> &lt; </h1> 
            </Link>
            <h1 className={styles.title}>{post.title}</h1>
            <Link className={styles.postsSeekingButton} href={(await forwardButton(post.id)).toString()}> 
              <h1> &gt; </h1>
            </Link>
          </div>
          <hr></hr>
          <h3>{post.description}</h3>
          <h3><i>Entered: {post.date?.toISOString().substring(0,10)}</i></h3>
          <hr></hr>
        </div>

          <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={styles.postContent}/>
      </div>
    </div>
  );
}