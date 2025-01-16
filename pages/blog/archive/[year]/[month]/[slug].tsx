import { Clock, Hourglass } from 'components/icons'

import { BlogPost } from 'models/BlogPost'
import BlogPostContent from 'components/blog/BlogPostContent'
import BlogPostFooter from 'components/blog/BlogPostFooter'
import { BlogRepository } from 'repositories/BlogRepository'
import { Container } from 'components/common/Container'
import Converter from 'utils/converter'
import Head from 'next/head'
import { Jumbotron } from 'components/common/Jumbotron'
import Layout from 'components/Layout'
import appConfig from 'app.config.json'
import { trackEvent } from 'utils/analytics'
import { useEffect } from 'react'

const blogRepository = new BlogRepository();

export async function getStaticPaths() {
  const allPosts = blogRepository.getAllPublishedPosts();
  return {
    paths: allPosts.map(post => {
      const postedOnDate = new Date(post.postedOn);
      return {
        params: {
          year: postedOnDate.getFullYear().toString(),
          month: postedOnDate.getMonth().toString(),
          slug: post.urlSlug
        }
      };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { year: number, month: number, slug: string } }) {
  const post = blogRepository.getPost(params.year, params.month, params.slug);
  return { props: post };
}

export default function BlogPostPage(props: BlogPost) {
  useEffect(() => {
    if (props.published) {
      trackEvent('blogpost_view', { 'blog_post_title': props.title });
    }
  });

  const imageUrl = /^http(s)?:/i.test(props.image ?? '') ?
    props.image :
    new URL((props.image ?? '').startsWith('/') ?
      `/posts${props.image}` :
      `/posts/${props.image}`, appConfig.canonicalBaseUrl).href;

  return (
    <Layout
      title={ `${props.title} - Blog` }
      description={ props.description }
      keywords={ props.tags.map(x => x.name).join(', ') }
      canonicalUrl={ props.canonicalUrl }
      pageId="blog">

      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        {props.description && (<meta property="og:description" content={props.description} />)}
        {props.image && (<meta property="og:image" content={imageUrl} />)}
        <meta name="twitter:card" content={ props.image ? 'summary_large_image' : 'summary' } />
        <meta name="twitter:site" content={appConfig.social.xLogin} />
        <meta name="twitter:creator" content={appConfig.social.xLogin} />
        <meta name="twitter:title" content={props.title} />
        {props.description && (<meta name="twitter:description" content={props.description} />)}
        {props.image && (<meta name="twitter:image" content={imageUrl} />)}
        {!props.published && (<meta name="robots" content="noindex" />)}
      </Head>

      <Jumbotron>
        <h1 itemProp="name">{props.title}</h1>
        <p style={{ display: 'flex' }}>
          { props.published ? <Clock /> : <Hourglass /> }
          &nbsp;
          <span itemProp="datePublished">{ Converter.formatDate(new Date(props.postedOn)) }</span>
        </p>
      </Jumbotron>

      <Container itemScope itemType="http://schema.org/BlogPosting">
        <section id="content" itemProp="blogPost" className="blog-post-content">
          <BlogPostContent urlSlug={props.urlSlug} markdownContent={props.content} />
        </section>

        <hr />

        <BlogPostFooter post={props} />
      </Container>
    </Layout>
  );
}
