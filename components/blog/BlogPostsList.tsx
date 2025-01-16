import { Clock, Newspaper } from '../icons'

import { BlogPostAnnotation } from 'models/BlogPost'
import BlogPostContent from './BlogPostContent'
import BlogPostFooter from './BlogPostFooter'
import { Container } from '../common/Container'
import Converter from 'utils/converter'
import { Jumbotron } from '../common/Jumbotron'
import Layout from '../Layout'
import Link from 'next/link'
import appConfig from 'app.config.json'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    listStyleType: 'none',
    padding: 0,
  },

  result: {
    color: '#a0a0a0',
	  marginBottom: '17px',

    '& span': {
      backgroundColor: '#f0f0f0',
      border: '1px solid #e5e5e5',
      borderRadius: '5px',
      padding: '3px 10px',
    },
  },

  postTitle: {
    fontWeight: 'bold'
  },

  postDate: {
    display: 'flex',
    gap: '5px',
    color: '#7f919e',
  }
})

type BlogPostsListProps = {
  subtitle: string;
  posts: BlogPostAnnotation[]
}

export default function BlogPostsList(props: BlogPostsListProps) {
  const classes = useStyles();

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

      <Jumbotron>
        <h1>Blog <Newspaper /></h1>
        <p>{props.subtitle}</p>
      </Jumbotron>

      <Container>
        <section>
          <div className={ classes.result }>
            <span>{ `1 - ${props.posts.length} of ${props.posts.length} posts` }</span>
          </div>

          <ul className={ classes.list }>
            { props.posts.map(post => <li key={ post.urlSlug }><PostDescription post={ post } /></li>) }
          </ul>
        </section>
      </Container>
    </Layout>
  );
}

function PostDescription(props: { post: BlogPostAnnotation }) {
  const classes = useStyles();

  return (
    <div>
      <h1 className={ classes.postTitle }>
        <Link
          href="/blog/archive/[year]/[month]/[slug]"
          as={`/blog/archive/${new Date(props.post.postedOn).getFullYear()}/${new Date(props.post.postedOn).getMonth()}/${props.post.urlSlug}`}
          title={ props.post.title }
        >
          { props.post.title }
        </Link>
      </h1>

      {/* Posted date */}
      <div className={ classes.postDate }>
        <Clock /> { Converter.formatDate(new Date(props.post.postedOn)) }
      </div>

      <div className="blog-post-content">
        <BlogPostContent urlSlug={props.post.urlSlug} markdownContent={props.post.annotation} />
      </div>

      <hr />

      <BlogPostFooter post={props.post} />
    </div>
  );
}
