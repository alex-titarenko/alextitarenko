import { NextPage } from 'next'
import BlogPostsList from '../../components/BlogPostsList'
import { BlogPostAnnotation } from '../../models/BlogPost'
import { BlogRepository } from '../../repositories/BlogRepository'

type BlogProps = {
  posts: BlogPostAnnotation[]
}

export async function unstable_getStaticProps() {
  const blogRepository = new BlogRepository();
    const posts = blogRepository.getAllPosts();
  return { props: { posts } };
}

const BlogPage: NextPage<BlogProps> = (props: BlogProps) => (
  <BlogPostsList
    subtitle="Latest posts"
    posts={ props.posts } />
);

export default BlogPage;
