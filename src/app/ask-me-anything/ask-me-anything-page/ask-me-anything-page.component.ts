import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, Output } from '@angular/core';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { ChatMessage } from 'src/app/static/chat-message/chat-message';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
//import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

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

  private serverUrl = environment.url + 'socket'
  isLoaded: boolean = false;
  isCustomSocketOpened = false;
  private stompClient;
  private form: FormGroup;
  private userForm: FormGroup;
  messages: ChatMessage[] = [];

  expertDisplayName : string = 'EXPERT NAME';
  topicDisplayName : string = 'TOPIC NAME';

  @Input()
  newMessage : string = '';


  constructor() { }

  ngOnInit() {
    this.initializeWebSocketConnection();
    this.openSocket();

  }

  openSocket() {
    if (this.isLoaded) {
      this.isCustomSocketOpened = true;
      this.stompClient.subscribe("/socket-publisher/"+this.userForm.value.fromId, (message) => {
        this.handleResult(message);
      });
    }
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    //this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.isLoaded = true;
      that.openGlobalSocket();
    });
  }

  openGlobalSocket() {
    this.stompClient.subscribe("/socket-publisher", (message) => {
      this.handleResult(message);
    });
  }

  
  handleResult(message){
    if (message.body) {
      console.log(message);
      let messageResult: ChatMessage = JSON.parse(message.body);
      console.log(messageResult);
      this.messages.push(messageResult);
    }
  }



  @Output()
  inputText(text : string, event){
    
    if (event.keyCode == 13) {
      event.preventDefault();
  }
    if(text){
      let message: ChatMessage = { body: text, name: "Jordan", time: new Date()};
      this.stompClient.send("/socket-subscriber/send/message", {}, JSON.stringify(message));
      //temporary post line, send to server here
      // this.messages.push(new ChatMessage('Mr. Bean', text, new Date()));
    }
  }

  closeWindow(){
    console.log('PLACEHOLDER CLOSE');
  }

  ngAfterViewChecked(){
    this.messageBox.scrollToBottom();
  }

}