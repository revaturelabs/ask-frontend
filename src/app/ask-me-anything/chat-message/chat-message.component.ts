import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/static/chat-message/chat-message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  name : string;

  @Input()
  body : string;

  @Input()
  time : Date;

  constructor() {
  }

  ngOnInit() {
  }

  formatDate() : string{
    let result = `${this.time.getHours() % 12}:${this.time.getMinutes() < 10? '0' : ''}${this.time.getMinutes()} 
    ${this.time.getHours() > 11? 'PM' : 'AM'}`;
    return result;
  }

}
