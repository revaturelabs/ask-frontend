import { Component, OnInit, Output, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'app-ask-me-anything-page',
  templateUrl: './ask-me-anything-page.component.html',
  styleUrls: ['./ask-me-anything-page.component.css']
})
export class AskMeAnythingPageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }

  @ViewChild('messageBox',{static : false}) messageBox : MessageBoxComponent;
  @ViewChild('inputBox', {static : false}) inputBox : ElementRef;

  expertDisplayName : string = 'EXPERT NAME';
  topicDisplayName : string = 'TOPIC NAME';

  messages : string[] = [
  ]

  @Input()
  newMessage : string = '';


  constructor() { }

  ngOnInit() {

  }

  @Output()
  action(text : string, event){
    
    if (event.keyCode == 13) {
      event.preventDefault();
  }
    if(text){
      this.messages.push(text);
    }
  }

  closeWindow(){
    console.log('PLACEHOLDER CLOSE');
  }

  ngAfterViewChecked(){
    this.messageBox.scrollToBottom();
  }
}
