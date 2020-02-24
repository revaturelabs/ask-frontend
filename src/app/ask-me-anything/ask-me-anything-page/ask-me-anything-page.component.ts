import { Component, OnInit, Output, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter } from '@angular/core';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { ChatMessage } from 'src/app/static/chat-message/chat-message';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-ask-me-anything-page',
  templateUrl: './ask-me-anything-page.component.html',
  styleUrls: ['./ask-me-anything-page.component.css'],
 
})


export class AskMeAnythingPageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }

  @ViewChild('messageBox',{static : false}) messageBox : MessageBoxComponent;
  @ViewChild('inputBox', {static : false}) inputBox : ElementRef;

  expertDisplayName : string = 'EXPERT NAME';
  topicDisplayName : string = 'TOPIC NAME';

  messages : ChatMessage[] = [
  ]

  @Input()
  newMessage : string = '';


  constructor() { }

  ngOnInit() {


  }

  @Output()
  inputText(text : string, event){
    
    if (event.keyCode == 13) {
      event.preventDefault();
  }
    if(text){
      //temporary post line, send to server here
      this.messages.push(new ChatMessage('Mr. Bean', text, new Date()));
    }
  }

  closeChat(){
    console.log('PLACEHOLDER CLOSE, YES');
   
  
  }

  ngAfterViewChecked(){
    this.messageBox.scrollToBottom();
  }
}
