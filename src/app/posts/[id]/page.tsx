import styles from "../../page.module.css";
import '../../fonts.css';

import { remark } from 'remark'
import remarkHtml from 'remark-html'

import { getPostsById, parseFileId, readAllPostsFiles } from "../posts.utils";

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
  

  if (!post) return {}

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

  // const htmlContent = (await remark().use(remarkHtml).process(post.content)).toString()

  const htmlContent = await (await processor.process(post.content)).toString()
  
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.postHeader}>
          <h1>{post.title}</h1>
          <hr></hr>
          <h3>{post.description}</h3>
          <h3><i>Entered: &lt;{post.date?.toISOString().substring(0,10)}&gt;</i></h3>
          <hr></hr>
        </div>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: htmlContent }}/>
      </div>
    </div>
  );
}