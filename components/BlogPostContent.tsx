import React, { useEffect } from 'react'

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

  const renderers = {
    image: (props) => (
      <img className="img-responsive" src={props.src} alt={props.alt} />
    ),

    table: (props) => (
      <table className="table">{ props.children }</table>
    ),

    link: (props) => (
      <a href={props.href} {...(isExternalUrl(props.href) ? { target: '_blank', rel: 'nofollow' } : {}) }>
        { props.children }
      </a>
    ),

    code: (props) => (
      <pre className={`language-${props.language}`}>
        <code className={`language-${props.language}`}>{ props.value }</code>
      </pre>
    )
  };

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <ReactMarkdown
      escapeHtml={false}
      transformImageUri={(uri) => transformInternalUri(uri) }
      transformLinkUri={(uri) => transformInternalUri(uri) }
      renderers={renderers}
    >
      {props.markdownContent}
    </ReactMarkdown>
  );
}
