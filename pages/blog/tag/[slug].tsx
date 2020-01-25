import React from 'react'
import BlogPostsList from '../../../components/BlogPostsList'
import { BlogTag } from '../../../models/BlogTag'
import { BlogPostAnnotation } from '../../../models/BlogPost'
import { BlogRepository } from '../../../repositories/BlogRepository'

type BlogTagProps = {
  tag: BlogTag;
  posts: BlogPostAnnotation[]
}

const blogRepository = new BlogRepository();

export async function unstable_getStaticPaths() {
  const allTags = blogRepository.getAllTags();
  return allTags.map(tag => ({ params: { slug: tag.urlSlug } }));
}

export async function unstable_getStaticProps({ params }) {
  const tag = blogRepository.getTag(params.slug);
  const posts = blogRepository.getPostsForTag(params.slug);
  return { props: { tag, posts } };
}

export default function BlogTagPage(props: React.PropsWithChildren<BlogTagProps>) {
  return (
    <BlogPostsList
      subtitle={ `Latest posts tagged on ${ props.tag.name }` }
      posts={ props.posts } />
  )
}

