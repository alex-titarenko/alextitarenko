import React from 'react'
import Disqus from 'disqus-react'
import Head from 'next/head'
import Layout from '../../../../../components/Layout'
import { BlogPost } from '../../../../../models/BlogPost'
import { BlogRepository } from '../../../../../repositories/BlogRepository'
import { Analytics } from '../../../../../utils/analytics'
import appConfig from '../../../../../app.config.json'
import BlogPostContent from '../../../../../components/BlogPostContent'
import BlogPostFooter from '../../../../../components/BlogPostFooter'
import Converter from '../../../../../utils/converter'

const blogRepository = new BlogRepository();

export async function unstable_getStaticPaths() {
  const allPosts = blogRepository.getAllPosts();
  return allPosts.map(post => {
    const postedOnDate = new Date(post.postedOn);
    return {
      params: {
        year: postedOnDate.getFullYear().toString(),
        month: postedOnDate.getMonth().toString(),
        slug: post.urlSlug
      }
    };
  });
}

export async function unstable_getStaticProps({ params }) {
  const post = blogRepository.getPost(params.year, params.month, params.slug);
  return { props: post };
}

export default class BlogPostPage extends React.Component<BlogPost> {
  public componentDidMount() {
    if (this.props.published) {
      Analytics.logEvent('BlogPost', 'View', this.props.title);
    }
  }

  public render() {
    const imageUrl = /^http(s)?:/i.test(this.props.image) ?
      this.props.image :
      new URL(`/images/posts/${this.props.urlSlug}/${this.props.image}`, appConfig.canonicalBaseUrl).href;

    const disqusConfig = {
      identifier: this.props.id ?? this.props.urlSlug,
      title: this.props.title,
      url: undefined
    };

    return (
      <Layout
        title={ `${this.props.title} - Blog` }
        description={ this.props.description }
        keywords={ this.props.tags.map(x => x.name).join(', ') }
        canonicalUrl={ this.props.canonicalUrl }
        pageId="blog">

        <Head>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="@ViewContext.HttpContext.Request.GetDisplayUrl()" />
          <meta property="og:title" content={this.props.title} />
          {this.props.description && (<meta property="og:description" content={this.props.description} />)}
          {this.props.image && (<meta property="og:image" content={imageUrl} />)}
          <meta name="twitter:card" content={ this.props.image ? 'summary_large_image' : 'summary' } />
          <meta name="twitter:site" content={appConfig.social.twitterLogin} />
          <meta name="twitter:creator" content={appConfig.social.twitterLogin} />
          <meta name="twitter:title" content={this.props.title} />
          {this.props.description && (<meta name="twitter:description" content={this.props.description} />)}
          {this.props.image && (<meta name="twitter:image" content={imageUrl} />)}
          {!this.props.published && (<meta name="robots" content="noindex" />)}

          {/* Go to www.addthis.com/dashboard to customize your tools */}
          <script type="text/javascript" src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${appConfig.socialIntegration.addThisPubId}`} async />
        </Head>

        <div className="jumbotron page-header">
          <div className="container">
            <h1 itemProp="name">{this.props.title}</h1>
            <p>
              <i className={ this.props.published ? " fa fa-clock-o" : "glyphicon glyphicon-hourglass"}></i>&nbsp;
              <span itemProp="datePublished">{ Converter.formatDate(new Date(this.props.postedOn)) }</span>
            </p>
          </div>
        </div>

        <div className="container" itemScope itemType="http://schema.org/BlogPosting">
          <section id="content" itemProp="blogPost" className="blog-post-content">
            <BlogPostContent urlSlug={this.props.urlSlug} markdownContent={this.props.content} />
          </section>

          <hr className="blog-post-footer-delimiter" />

          <BlogPostFooter post={this.props} />

          {/* Go to www.addthis.com/dashboard to customize your tools */}
          <div className="addthis_sharing_toolbox"></div>

          <Disqus.DiscussionEmbed
            shortname={appConfig.socialIntegration.disqusShortname}
            config={disqusConfig} />

          <div className="scroll-to-top-button">
            <i className="fa fa-arrow-circle-up" onClick={this.scrollToTop}></i>
          </div>
        </div>
      </Layout>
    );
  }

  private scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  }
}
