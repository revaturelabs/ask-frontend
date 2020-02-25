import { MessageBoxComponent } from '../message-box/message-box.component';
import { ChatMessage } from 'src/app/models/chat-message/chat-message';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Component, OnInit, Output, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter } from '@angular/core';
import { reduce } from 'rxjs/operators';
import { connect } from 'net';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user.service';



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

  public closed: boolean;

  private serverUrl = environment.url + 'socket'
  private stompClient;
  private form: FormGroup;
  private userForm: FormGroup;
  messages: ChatMessage[] = [];
  userName: string = "User";
  isLoaded: boolean = false;
  isCustomSocketOpened = false;
  isAmaActive = false;
  isSocketEstablished = false;

  expertDisplayName : string = 'EXPERT NAME';
  topicDisplayName : string = 'TOPIC NAME';

  @Input()
  newMessage : string = '';


  constructor(public authservice: AuthService, public userService: UserService) { }

  ngOnInit() {
      this.userService.getUserById(this.authservice.account.id).subscribe(data => this.userName = data.username);
      this.closed = true;
    }

  openChatBox() {
    if(!this.isSocketEstablished){
      this.initializeWebSocketConnection();
      this.openSocket();
      this.isSocketEstablished = true;
    }
    this.closed = false;
  }

  closeChatBox(){
    this.closed = true;
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
    this.stompClient = Stomp.over(ws);
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
      let message: ChatMessage = { body: text, name: this.userName, time: new Date()};
      this.stompClient.send("/socket-subscriber/send/message", {}, JSON.stringify(message));
      //temporary post line, send to server here
      // this.messages.push(new ChatMessage('Mr. Bean', text, new Date()));
    }
  }

  closeChat(event: any){


  }

  ngAfterViewChecked(){
    if(this.messageBox) {
      this.messageBox.scrollToBottom();
    }
  }
}