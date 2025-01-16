import { BlogPostAnnotation } from 'models/BlogPost'
import BlogPostsList from 'components/blog/BlogPostsList'
import { BlogRepository } from 'repositories/BlogRepository'
import { BlogTag } from 'models/BlogTag'

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
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

