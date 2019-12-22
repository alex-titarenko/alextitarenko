import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../models/BlogPost'

type BlogPostFooterProps = {
  post: BlogPost
}

export default class BlogPostFooter extends React.Component<BlogPostFooterProps> {
  public render() {
    return (
      <div className="blog-post-footer">
        {/* Category */}
        <div className="post-category">
          <span>Posted in </span>
          <Link href="/blog/category/[slug]" as={`/blog/category/${this.props.post.category.urlSlug}`}>
            <a title={`See all posts in ${this.props.post.category.name}`}>{this.props.post.category.name}</a>
          </Link>
        </div>

        {this.props.post.tags.length > 0 && (
          <div className="post-tags">
            <span>Tagged</span>
            {this.props.post.tags.map(tag => (
              <Link key={tag.urlSlug} href="/blog/tag/[slag]" as={`/blog/tag/${tag.urlSlug}`}>
                <a className="post-tag"><span className="label label-primary">{tag.name}</span></a>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}
