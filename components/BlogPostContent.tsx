import React, { useEffect } from 'react'
import remarkGfm from 'remark-gfm'

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
    img: (props) => (
      <img className="img-responsive" src={props.src} alt={props.alt} />
    ),

    table: (props) => (
      <table className="table">{ props.children }</table>
    ),

    a: (props) => (
      <a href={props.href} {...(isExternalUrl(props.href) ? { target: '_blank', rel: 'nofollow' } : {}) }>
        { props.children }
      </a>
    ),

    pre: (props) => (
      <pre className={`language-${props.language}`} data-x={props.className}>
        <code className={`language-${props.language}`}>{ props.children }</code>
      </pre>
    )
  };

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      //escapeHtml={false}
      components={components}
      urlTransform={transformInternalUri}
    >
      {props.markdownContent}
    </ReactMarkdown>
  );
}
