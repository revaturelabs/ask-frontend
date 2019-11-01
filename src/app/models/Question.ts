export interface Question {
  id: number;
  username: string;
  tags?: string[];
  userId: number;
  head: string;
  body: string;
  creationDate: string;
}
