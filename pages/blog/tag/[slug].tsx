import React from 'react'
import BlogPostsList from '../../../components/BlogPostsList'
import { BlogTag } from '../../../models/BlogTag'
import { BlogPost } from '../../../models/BlogPost'
import { BlogRepository } from '../../../repositories/BlogRepository'

type BlogTagProps = {
  tag: BlogTag;
  posts: BlogPost[]
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

export default class BlogTagPage extends React.Component<BlogTagProps> {
  public render() {
    return (
      <BlogPostsList
        subtitle={ `Latest posts tagged on ${this.props.tag.name}` }
        posts={ this.props.posts } />
    );
  }
}
