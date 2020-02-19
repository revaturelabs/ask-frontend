import { Tag } from './Tag';
import { Question } from './Question';

export class User {
    id: number;
    username: string;
    isExpert: boolean;
    email: string;
    bio: string;
    profilePic: string;
    expertTags: Tag[];
    interestTags: Tag[];
    questions: Question[];
    responses: Response[];

}