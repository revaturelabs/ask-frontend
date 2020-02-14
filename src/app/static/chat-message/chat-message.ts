export class ChatMessage {
    name : string = '';
    body : string = '';
    time : Date;

    constructor(newName : string, newBody : string, newTime : Date){
        this.name = newName;
        this.body = newBody;
        this.time = newTime;
    }
}
