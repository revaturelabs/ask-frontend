import { Tag } from './Tag';
import { Question } from './Question';

export class User {
    id: number;
    username: string;
    isExpert: boolean;
    expertTags: Tag[];
    questions: Question[];
    responses: Response[];
}