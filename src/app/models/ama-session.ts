import { User } from './User';
import { Tag } from './Tag';

export class AmaSession {
    id : number;
    date : Date;
    topic : Tag;
    expert : User;

    constructor(id : number, date : Date, topic : Tag, expert : User){
        this.id = id;
        this.date = date;
        this.topic = topic;
        this.expert = expert;
    }
}
