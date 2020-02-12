import { Tag } from './Tag';
import { Question } from './Question';

export class User {
    id: number;
    username: string;
    isExpert: boolean;
    profilePic: string
    expertTags: Tag[];
    questions: Question[];
    responses: Response[];
}