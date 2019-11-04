import { Question } from '../../app/models/Question';

export interface Response {
  user: any;
  id: number;
  responderId: number;
  questionId: number;
  body: string;
  creationDate: string;
}