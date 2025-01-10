import BlogPostsList from 'components/BlogPostsList'
import { BlogCategory } from 'models/BlogCategory'
import { BlogPostAnnotation } from 'models/BlogPost'
import { BlogRepository } from 'repositories/BlogRepository'

type BlogCategoryProps = {
  category: BlogCategory;
  posts: BlogPostAnnotation[]
}

const blogRepository = new BlogRepository();

export async function getStaticPaths() {
  const allCategories = blogRepository.getAllCategories();
  return {
    paths: allCategories.map(category => ({ params: { slug: category.urlSlug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const category = blogRepository.getCategory(params.slug);
  const posts = blogRepository.getPostsForCategory(params.slug);
  return { props: { category, posts } };
}

export default function BlogCategoryPage(props: BlogCategoryProps) {
  return (
    <BlogPostsList
      subtitle={ `Latest posts on category ${props.category.name}` }
      posts={ props.posts } />
  )
}
