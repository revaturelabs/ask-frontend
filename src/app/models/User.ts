import { Tag } from './Tag';
import { Question } from './Question';

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    bio: string;
    expert: boolean;
    profilePic: string;
    expertTags: Tag[];
    questions: Question[];
    responses: Response[];
}