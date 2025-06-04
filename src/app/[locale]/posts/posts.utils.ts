import '../fonts.css';
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { Posts } from './posts.types'
import { cache } from 'react'



export const postsFolder = path.join(process.cwd(), 'public/posts')

export async function readAllPostsFiles() {
  const dirEntries = await fs.promises.readdir(postsFolder, { recursive: true, withFileTypes: true })
  return dirEntries.filter(entry => entry.isFile())
}

export async function getAllPosts() {
  const postFiles = await readAllPostsFiles()
  return Promise.all(postFiles.map(mapFileToPosts))
}

export function sortPosts(a: Posts, b: Posts) {
  if (a.date > b.date) return 1
  return -1
}

export async function getPostsById(id: string): Promise<Posts | undefined> {
  const allPostFiles = await readAllPostsFiles()
  const postFile = allPostFiles.find(entry => parseFileId(entry) === id)
  if (!postFile) return undefined
  return mapFileToPosts(postFile)
}

export async function mapFileToPosts(file: fs.Dirent): Promise<Posts> {
  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' })
  const matterData = matter(fileContents)

  return {
    id: parseFileId(file),
    title: matterData.data.title,
    date: matterData.data.date,
    content: matterData.content,
    description: matterData.data.description,
  }
}

export const getPostById = cache(fetchPostById)

export async function fetchPostById(id: string): Promise<Posts | undefined> {
  const allPostFiles = await readAllPostsFiles()
  const postFile = allPostFiles.find(entry => parseFileId(entry) === id)
  if (!postFile) return undefined
  return mapFileToPosts(postFile)
}

function getFilePath(file: fs.Dirent): string {
  return path.join(file.parentPath, file.name)
}

export function parseFileId(file: fs.Dirent): string {
  return file.name.replace(/\.md$/, '')
}

export async function backButton(id: string): Promise<string>{
  const post = await getPostsById(id)
  const allPosts = await getAllPosts()

  if (!post) return ('')

  let postIndex = 0

  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].id === post.id) {
      postIndex = allPosts.indexOf(allPosts[i])
    }
  }

  if (postIndex === 0) {
    const href_link = `/posts`
    return href_link
  } else {
    const href_link = `/posts/${allPosts[postIndex-1].id}`
    return encodeURI(href_link)
  }
}

export async function forwardButton(id: string): Promise<string>{
  const post = await getPostsById(id)
  const allPosts = await getAllPosts()

  if (!post) return ('')

  let postIndex = 0

  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].id === post.id) {
      postIndex = allPosts.indexOf(allPosts[i])
    }
  }

  if (postIndex === (allPosts.length)-1) {
    const href_link = `/posts/${allPosts[0].id}`
    return encodeURI(href_link)
  } else {
    const href_link = `/posts/${allPosts[++postIndex]?.id}`
    return encodeURI(href_link)
  }
}