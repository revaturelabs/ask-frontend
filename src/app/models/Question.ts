import { Tag } from './Tag';
import { Response } from './Response';
import { Image } from './Image';

export interface Question {
  id: number;
  username: string;
  tags?: string[];
  userId: number;
  head: string;
  body: string;
  creationDate: string;
  associatedTags: Tag[];
  responses: Response[];
  highlightedResponseId: Response;
  images: Image[];
}
