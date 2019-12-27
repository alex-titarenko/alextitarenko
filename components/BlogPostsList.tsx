import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import appConfig from '../app.config.json'
import { BlogPostAnnotation } from '../models/BlogPost'
import BlogPostContent from './BlogPostContent'
import BlogPostFooter from './BlogPostFooter'
import Converter from '../utils/converter'

type BlogPostsListProps = {
  subtitle: string;
  posts: BlogPostAnnotation[]
}

export default class BlogPostsList extends React.Component<BlogPostsListProps> {
  public render() {
    const keywords = this.props.posts
      .map(x => x.tags)
      .reduce((a, b) => a.concat(b), [])
      .map(y => y.name)
      .filter((value, index, self) => self.indexOf(value) === index)
      .concat([ appConfig.brandName ]);

    return (
      <Layout
        title="Blog"
        description={ `${ appConfig.brandName } on programming, web, .NET and etc.` }
        keywords={ keywords.join(',') }
        pageId="blog">

        <div className="jumbotron page-header">
          <div className="container">
            <h1>Blog <i className="fa fa-newspaper-o"></i></h1>
            <p>{this.props.subtitle}</p>
          </div>
        </div>

        <div className="container">
          <section id="content">
            <div className="result">
              <span>{ `1 - ${this.props.posts.length} of ${this.props.posts.length} posts` }</span>
            </div>

            <ul className="reset list">
              { this.props.posts.map(post => <li>{ this.renderPostDescription(post) }</li>) }
            </ul>
          </section>
        </div>
      </Layout>
    );
  }

  private renderPostDescription(post: BlogPostAnnotation) {
    return (
      <div className="post-template">
        <h1 className="post-title">
          <Link
            href="/blog/archive/[year]/[month]/[slug]"
            as={`/blog/archive/${new Date(post.postedOn).getFullYear()}/${new Date(post.postedOn).getMonth()}/${post.urlSlug}`}>
            <a title={ post.title }>{ post.title }</a>
          </Link>
        </h1>

        {/* Posted date */}
        <div className="post-date">
          <i className="fa fa-clock-o"></i> { Converter.formatDate(new Date(post.postedOn)) }
        </div>

        <div className="post-desc blog-post-content">
          <BlogPostContent urlSlug={post.urlSlug} markdownContent={post.annotation} />
        </div>

        <hr className="blog-post-footer-delimiter" />

        <BlogPostFooter post={post} />
      </div>
    );
  }
}

