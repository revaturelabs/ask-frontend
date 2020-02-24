import { Tag } from './Tag';
import { Question } from './Question';

export class User {
    id: number;
    username: string;
    expert: boolean;
    email: string;
    bio: string;
    profilePic: string;
    expertTags: Tag[];
    questions: Question[];
    responses: Response[];
}


