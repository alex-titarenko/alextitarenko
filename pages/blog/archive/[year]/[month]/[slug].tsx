import { useEffect } from 'react'
import Disqus from 'disqus-react'
import Head from 'next/head'
import Layout from 'components/Layout'
import { BlogPost } from 'models/BlogPost'
import { BlogRepository } from 'repositories/BlogRepository'
import { trackEvent } from 'utils/analytics'
import appConfig from 'app.config.json'
import BlogPostContent from 'components/BlogPostContent'
import BlogPostFooter from 'components/BlogPostFooter'
import Converter from 'utils/converter'

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

export async function getStaticProps({ params }) {
  const post = blogRepository.getPost(params.year, params.month, params.slug);
  return { props: post };
}

export default function BlogPostPage(props: BlogPost) {
  useEffect(() => {
    if (props.published) {
      trackEvent('blogpost_view', { 'blog_post_title': props.title });
    }
  });

  const imageUrl = /^http(s)?:/i.test(props.image) ?
    props.image :
    new URL(`/images/posts${props.image}`, appConfig.canonicalBaseUrl).href;

  const disqusConfig = {
    identifier: props.id,
    title: props.title,
    url: undefined
  };

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
        <meta name="twitter:site" content={appConfig.social.twitterLogin} />
        <meta name="twitter:creator" content={appConfig.social.twitterLogin} />
        <meta name="twitter:title" content={props.title} />
        {props.description && (<meta name="twitter:description" content={props.description} />)}
        {props.image && (<meta name="twitter:image" content={imageUrl} />)}
        {!props.published && (<meta name="robots" content="noindex" />)}

        {/* Go to www.addthis.com/dashboard to customize your tools */}
        <script type="text/javascript" src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${appConfig.socialIntegration.addThisPubId}`} async />
      </Head>

      <div className="jumbotron page-header">
        <div className="container">
          <h1 itemProp="name">{props.title}</h1>
          <p>
            <i className={ props.published ? " fa fa-clock-o" : "glyphicon glyphicon-hourglass"}></i>&nbsp;
            <span itemProp="datePublished">{ Converter.formatDate(new Date(props.postedOn)) }</span>
          </p>
        </div>
      </div>

      <div className="container" itemScope itemType="http://schema.org/BlogPosting">
        <section id="content" itemProp="blogPost" className="blog-post-content">
          <BlogPostContent urlSlug={props.urlSlug} markdownContent={props.content} />
        </section>

        <hr className="blog-post-footer-delimiter" />

        <BlogPostFooter post={props} />

        {/* Go to www.addthis.com/dashboard to customize your tools */}
        <div className="addthis_sharing_toolbox"></div>

        <Disqus.DiscussionEmbed
          shortname={appConfig.socialIntegration.disqusShortname}
          config={disqusConfig} />

        <div className="scroll-to-top-button">
          <i className="fa fa-arrow-circle-up" onClick={scrollToTop}></i>
        </div>
      </div>
    </Layout>
  );
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}
