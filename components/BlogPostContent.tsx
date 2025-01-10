import React, { ReactNode, useEffect } from 'react'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import Prism from 'prismjs'
import ReactMarkdown from 'react-markdown'

import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-powershell'
import 'prismjs/themes/prism-tomorrow.css'


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

    // TODO: Fix Me
    // pre: (props: { language: string; className: string; children: ReactNode }) => (
    //   <pre className={`language-${props.language}`} data-x={props.className}>
    //     <code className={`language-${props.language}`}>{ props.children }</code>
    //   </pre>
    // )
  };

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
      urlTransform={transformInternalUri}
    >
      {props.markdownContent}
    </ReactMarkdown>
  );
}
