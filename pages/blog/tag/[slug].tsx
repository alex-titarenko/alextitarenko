import BlogPostsList from 'components/BlogPostsList'
import { BlogTag } from 'models/BlogTag'
import { BlogPostAnnotation } from 'models/BlogPost'
import { BlogRepository } from 'repositories/BlogRepository'

type BlogTagProps = {
  tag: BlogTag;
  posts: BlogPostAnnotation[]
}

const blogRepository = new BlogRepository();

export async function getStaticPaths() {
  const allTags = blogRepository.getAllTags();
  return {
    paths: allTags.map(tag => ({ params: { slug: tag.urlSlug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const tag = blogRepository.getTag(params.slug);
  const posts = blogRepository.getPostsForTag(params.slug);
  return { props: { tag, posts } };
}

export default function BlogTagPage(props: BlogTagProps) {
  return (
    <BlogPostsList
      subtitle={ `Latest posts tagged on ${ props.tag.name }` }
      posts={ props.posts } />
  )
}

