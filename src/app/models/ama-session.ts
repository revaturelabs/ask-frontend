export class AmaSession {
    id : number;
    date : Date;
    topic : string;
    expert : string;

    Constructor(id : number, date : Date, topic : string, expert : string){
        this.id = id;
        this.date = date;
        this.topic = topic;
        this.expert = expert;
    }
}
