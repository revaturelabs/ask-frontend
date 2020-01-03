import { Tag } from '../models/Tag';
import { Response } from '../models/Response';
import { User } from './User';

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
}
