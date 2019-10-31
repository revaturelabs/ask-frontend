export interface Question {
  id: number;
  username: string;
  title: string;
  description: string;
  tags?: string;
  date?: string;
  userId: number;
  head: string;
  body: string;
  creationDate: string;
}
