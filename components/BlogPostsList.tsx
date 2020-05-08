import Link from 'next/link'
import Layout from './Layout'
import appConfig from 'app.config.json'
import { BlogPostAnnotation } from 'models/BlogPost'
import BlogPostContent from './BlogPostContent'
import BlogPostFooter from './BlogPostFooter'
import Converter from 'utils/converter'

type BlogPostsListProps = {
  subtitle: string;
  posts: BlogPostAnnotation[]
}

export default function BlogPostsList(props: BlogPostsListProps) {
  const keywords = props.posts
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
          <p>{props.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <section id="content">
          <div className="result">
            <span>{ `1 - ${props.posts.length} of ${props.posts.length} posts` }</span>
          </div>

          <ul className="reset list">
            { props.posts.map(post => <li key={ post.urlSlug }><PostDescription post={ post } /></li>) }
          </ul>
        </section>
      </div>
    </Layout>
  );
}

function PostDescription(props: { post: BlogPostAnnotation }) {
  return (
    <div className="post-template">
      <h1 className="post-title">
        <Link
          href="/blog/archive/[year]/[month]/[slug]"
          as={`/blog/archive/${new Date(props.post.postedOn).getFullYear()}/${new Date(props.post.postedOn).getMonth()}/${props.post.urlSlug}`}>
          <a title={ props.post.title }>{ props.post.title }</a>
        </Link>
      </h1>

      {/* Posted date */}
      <div className="post-date">
        <i className="fa fa-clock-o"></i> { Converter.formatDate(new Date(props.post.postedOn)) }
      </div>

      <div className="post-desc blog-post-content">
        <BlogPostContent urlSlug={props.post.urlSlug} markdownContent={props.post.annotation} />
      </div>

      <hr className="blog-post-footer-delimiter" />

      <BlogPostFooter post={props.post} />
    </div>
  );
}
