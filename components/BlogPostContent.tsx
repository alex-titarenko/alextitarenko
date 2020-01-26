import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-powershell'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/themes/prism-coy.css'


type BlogPostContentProps = {
  urlSlug: string;
  markdownContent: string
}

export default function BlogPostContent(props: BlogPostContentProps) {
  function transformImageUri(uri: string, children?: React.ReactNode, title?: string, alt?: string): string {
    if (!isExternalUrl(uri)) {
      return `/images/posts/${props.urlSlug}/${uri}`;
    }
    return uri;
  }

  function isExternalUrl(url: string) {
    return /^http(s)?:/i.test(url);
  }

  const renderers = {
    image: (props) => (<img className="img-responsive" src={props.src} alt={props.alt} />),
    table: (props) => (<table className="table">{ props.children }</table>),
    link: (props) => (<a href={props.href} {...(isExternalUrl(props.href) ? { target: '_blank', rel: 'nofollow' } : {}) }>{ props.children }</a>),
    code: (props) => (<pre className={`line-numbers language-${props.language}`}><code className={`language-${props.language}`}>{ props.value }</code></pre>
    )
  };

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <ReactMarkdown
      source={props.markdownContent}
      escapeHtml={false}
      transformImageUri={(uri, children, title, alt) => transformImageUri(uri, children, title, alt) }
      renderers={renderers} />
  );
}
