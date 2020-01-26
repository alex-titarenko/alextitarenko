import Link from 'next/link'
import { BlogPostAnnotation } from '../models/BlogPost'

export default function BlogPostFooter({ post }: { post: BlogPostAnnotation }) {
  return (
    <div className="blog-post-footer">
      {/* Category */}
      <div className="post-category">
        <span>Posted in </span>
        <Link href="/blog/category/[slug]" as={`/blog/category/${post.category.urlSlug}`}>
          <a title={`See all posts in ${post.category.name}`}>{post.category.name}</a>
        </Link>
      </div>

      {post.tags.length > 0 && (
        <div className="post-tags">
          <span>Tagged</span>
          {post.tags.map(tag => (
            <Link key={tag.urlSlug} href="/blog/tag/[slug]" as={`/blog/tag/${tag.urlSlug}`}>
              <a className="post-tag"><span className="label label-primary">{tag.name}</span></a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
