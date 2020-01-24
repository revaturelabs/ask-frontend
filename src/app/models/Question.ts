import { Tag } from './Tag';
import { Response } from './Response';
import { User } from './User';
import { Image } from './Image';

export interface Question {
  id: number;
  username: string;
  tags?: string[];
  userId: number;
  user?: User;
  head: string;
  body: string;
  creationDate: string;
  associatedTags: Tag[];
  responses: Response[];
  highlightedResponseId: Response;
  images: Image[];
}
