import { Tag } from '../models/Tag';
import { Response } from '../models/Response';
import { User } from './User';
import { Image } from './Image';

export interface Question {
  id: number;
  username: string;
  tags?: string[];
  user?: User;
  head: string;
  body: string;
  creationDate: string;
  associatedTags: Tag[];
  responses: Response[];
  highlightedResponseId: number;
  images: Image[];
}
