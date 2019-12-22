import { BlogCategory } from './BlogCategory'
import { BlogTag } from './BlogTag'

export interface BlogPost {
  id?: string;
  title: string;
  urlSlug: string;
  canonicalUrl?: string;
  image: string;
  published: boolean;
  postedOn: string;
  modified: string;
  category: BlogCategory;
  tags: BlogTag[];
  description: string;
  content: string;
  annotation: string;
}
