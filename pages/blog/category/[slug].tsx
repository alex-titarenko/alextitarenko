import { NextPage } from 'next'
import BlogPostsList from '../../../components/BlogPostsList'
import { BlogCategory } from '../../../models/BlogCategory'
import { BlogPost } from '../../../models/BlogPost'
import { BlogRepository } from '../../../repositories/BlogRepository'

type BlogCategoryProps = {
  category: BlogCategory;
  posts: BlogPost[]
}

const blogRepository = new BlogRepository();

export async function unstable_getStaticPaths() {
  const allCategories = blogRepository.getAllCategories();
  return allCategories.map(category => ({ params: { slug: category.urlSlug } }));
}

export async function unstable_getStaticProps({ params }) {
  const category = blogRepository.getCategory(params.slug);
  const posts = blogRepository.getPostsForCategory(params.slug);
  return { props: { category, posts } };
}

const BlogCategoryPage: NextPage<BlogCategoryProps> = (props) => (
  <BlogPostsList
    subtitle={ `Latest posts on category ${props.category.name}` }
    posts={ props.posts } />
);

export default BlogCategoryPage;
