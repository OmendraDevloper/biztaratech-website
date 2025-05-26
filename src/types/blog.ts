import { ReactElement, JSXElementConstructor } from "react";

export interface Blog {
  title?: string;
  excerpt?: string;
  date?: string;
  coverImage?: string;
  author?: string;
  authorImage?: string;
  slug?: string;
  content?: ReactElement<any, string | JSXElementConstructor<any>>;
  metadata?: {
    [key: string]: any;
  };
}
