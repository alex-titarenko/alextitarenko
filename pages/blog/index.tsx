import BlogPostsList from '@components/BlogPostsList'
import { BlogPostAnnotation } from '@models/BlogPost'
import { BlogRepository } from '@repositories/BlogRepository'

type BlogProps = {
  posts: BlogPostAnnotation[]
}

export async function getStaticProps() {
  const blogRepository = new BlogRepository();
  const posts = blogRepository.getAllPosts();
  return { props: { posts } };
}

export default function BlogPage(props: BlogProps) {
  return (
    <BlogPostsList
      subtitle="Latest posts"
      posts={ props.posts } />
  )
}
