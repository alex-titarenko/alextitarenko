import React from 'react'
import BlogPostsList from '../../components/BlogPostsList'
import { BlogPost } from '../../models/BlogPost'
import { BlogRepository } from '../../repositories/BlogRepository'

type BlogProps = {
  posts: BlogPost[]
}

export async function unstable_getStaticProps() {
  const blogRepository = new BlogRepository();
    const posts = blogRepository.getAllPosts();
  return { props: { posts } };
}

class BlogPage extends React.Component<BlogProps> {
  render () {
    return (
      <BlogPostsList
        subtitle="Latest posts"
        posts={ this.props.posts } />
    )
  }
}

export default BlogPage
