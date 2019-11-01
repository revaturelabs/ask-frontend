import { Question } from '../../app/models/Question';

export interface Response {
  id: number;
  responderId: number;
  questionId: number;
  body: string;
  creationDate: string;
  question: Question[];
}