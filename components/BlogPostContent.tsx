import React, { ReactNode } from 'react'

import { CodeBlock } from './CodeBlock'
import ReactMarkdown from 'react-markdown'
import rehypePrism from './rehypePlugins/rehypePrism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type BlogPostContentProps = {
  urlSlug: string;
  markdownContent: string
}

export default function BlogPostContent(props: BlogPostContentProps) {
  function transformInternalUri(uri: string): string {
    if (!isExternalUrl(uri)) {
      return uri.startsWith('/') ? `/posts${uri}` : `/posts/${uri}`;
    }
    return uri;
  }

  function isExternalUrl(url: string) {
    return /^http(s)?:/i.test(url);
  }

  const components = {
    img: (props: { src?: string; alt?: string }) => (
      <img className="img-responsive" src={props.src} alt={props.alt} />
    ),

    table: (props: { children?: ReactNode }) => (
      <table className="table">{ props.children }</table>
    ),

    a: (props: { href?: string; children?: ReactNode }) => (
      <a href={props.href} {...(isExternalUrl(props.href!) ? { target: '_blank', rel: 'nofollow' } : {}) }>
        { props.children }
      </a>
    ),

    pre: (props: { children?: ReactNode, sourceCode?: string, className?: string }) => (
      <CodeBlock
        sourceCode={ props.sourceCode }
        className={ props.className }
      >
        { props.children }
      </CodeBlock>
    )
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypePrism, { ignoreMissing: true }]
      ]}
      components={components}
      urlTransform={transformInternalUri}
    >
      {props.markdownContent}
    </ReactMarkdown>
  );
}
