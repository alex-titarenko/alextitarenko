import { BlogPostAnnotation } from 'models/BlogPost'
import { Label } from './common/Label';
import Link from 'next/link'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  blogPostFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '35px'
  },

  postTagsWrapper: {
    display: 'flex',
    alignItems: 'end',
    gap: '5px'
  },

  postTags: {
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  postTag: {
    margin: '2px',

    '&:hover': {
      textDecoration: 'none'
    }
  },

  tagLabel: {
    '&:hover': {
      backgroundColor: '#5bc0de',
    }
  }
})

export default function BlogPostFooter({ post }: { post: BlogPostAnnotation }) {
  const classes = useStyles();

  return (
    <div className={ classes.blogPostFooter }>
      {/* Category */}
      <div>
        <span>Posted in </span>
        <Link
          href="/blog/category/[slug]"
          as={`/blog/category/${post.category.urlSlug}`}
          title={`See all posts in ${post.category.name}`}
        >
          {post.category.name}
        </Link>
      </div>

      {post.tags.length > 0 && (
        <div className={ classes.postTagsWrapper }>
          <span>Tagged</span>
          <div className={ classes.postTags }>
            {post.tags.map(tag => (
              <Link
                key={tag.urlSlug}
                href="/blog/tag/[slug]"
                as={`/blog/tag/${tag.urlSlug}`}
                className={ classes.postTag }
              >
                <Label variant="primary" className={ classes.tagLabel }>
                  {tag.name}
                </Label>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
