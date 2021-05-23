import fs from 'fs'
import glob from 'glob'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostAnnotation, BlogPost } from 'models/BlogPost'
import { BlogCategory } from 'models/BlogCategory'
import { BlogTag } from 'models/BlogTag'
import blogCategories from 'data/blogCategories'
import blogTags from 'data/blogTags'
import { fileNameToUrlSlug, getFileNameWithoutExtension } from 'utils/pathUtils'


export class BlogRepository {
  private static readonly postsFilePattern = 'data/posts/**/*.md';
  private static readonly blogPosts = BlogRepository.getPosts(BlogRepository.postsFilePattern);


  public getAllPosts(): BlogPostAnnotation[] {
    return BlogRepository.blogPosts.map(BlogRepository.toAnnotation);
  }

  public getAllCategories(): BlogCategory[] {
    return blogCategories;
  }

  public getAllTags(): BlogTag[] {
    return blogTags;
  }

  public getPost(year: number, month: number, slug: string): BlogPost {
    return BlogRepository.blogPosts.find(x =>
      new Date(x.postedOn).getFullYear() == year &&
      new Date(x.postedOn).getMonth() == month &&
      x.urlSlug.toLowerCase() === slug.toLowerCase());
  }

  public getTag(tagSlug: string): BlogTag {
    return BlogRepository.getTag(tagSlug);
  }

  public static getTag(tagSlug: string): BlogTag {
    const tag = blogTags.find(x => x.urlSlug.toLowerCase() === tagSlug.toLowerCase());

    if (tag) {
      return tag;
    }

    throw new Error(`The tag with the slug '${tagSlug}' is not defined.`);
  }

  public getPostsForTag(tagSlug: string): BlogPostAnnotation[] {
    return BlogRepository.blogPosts
      .filter(x => x.tags.findIndex(t => t.urlSlug.toLowerCase() == tagSlug.toLowerCase()) != -1)
      .map(BlogRepository.toAnnotation);
  }

  public getCategory(categorySlug: string): BlogCategory {
    return BlogRepository.getCategory(categorySlug);
  }

  public static getCategory(categorySlug: string): BlogCategory {
    const category = blogCategories.find(x => x.urlSlug.toLowerCase() === categorySlug.toLowerCase());

    if (category) {
      return category;
    }

    throw new Error(`The category with the slug '${categorySlug}' is not defined.`);
  }

  public getPostsForCategory(categorySlug: string): BlogPostAnnotation[] {
    return BlogRepository.blogPosts
      .filter(x => x.category.urlSlug.toLowerCase() == categorySlug.toLowerCase())
      .map(BlogRepository.toAnnotation);
  }

  public static parseBlogPost(urlSlug: string, rawContent: string): BlogPost {
    const obj = matter(rawContent);
    const metadata = obj.data;

    return {
      id: metadata['id'],
      title: metadata['title'],
      urlSlug: urlSlug,
      image: metadata['image'],
      published: (/true/i).test(metadata['published']),
      postedOn: metadata['postedOn'],
      modified: metadata['modified'] ?? null,
      description: metadata['description'],
      annotation: obj.content.split('<!--more-->')[0],
      category: this.getCategory(metadata['category']),
      tags: (<string>metadata['tags'] ?? '')
        .split(',')
        .filter(x => x)
        .map(x => this.getTag(x.trim())),
      content: obj.content
    };
  }

  private static getPosts(postsFilePattern: string): BlogPost[] {
    function getUrlSlugFromFilePath(filePath: string): string {
      const fileNameWithoutExtension = getFileNameWithoutExtension(path.basename(filePath));
      return fileNameToUrlSlug(fileNameWithoutExtension);
    }

    function sortPosts(a: BlogPost, b: BlogPost) {
     return new Date(b.postedOn).getTime() - new Date(a.postedOn).getTime();
    }

    var posts = glob.sync(postsFilePattern).map(file => {
      const urlSlug = getUrlSlugFromFilePath(file);
      const rawContent = fs.readFileSync(file, 'utf8');
      return BlogRepository.parseBlogPost(urlSlug, rawContent);
    });

    posts.sort(sortPosts);
    return posts;
  }

  private static toAnnotation(post: BlogPost): BlogPostAnnotation {
    const annotation = Object.assign({}, post);
    delete annotation.content;

    return annotation;
  }
}
