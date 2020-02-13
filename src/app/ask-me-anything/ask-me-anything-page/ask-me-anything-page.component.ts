import { Component, OnInit, Output, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ask-me-anything-page',
  templateUrl: './ask-me-anything-page.component.html',
  styleUrls: ['./ask-me-anything-page.component.css']
})
export class AskMeAnythingPageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  @ViewChild('messageBox',{static : false}) messageBox : ElementRef;
  @ViewChild('inputBox', {static : false}) inputBox : ElementRef;

  messages : string[] = [
  ]

  @Input()
  newMessage : string = '';


  constructor() { }

  ngOnInit() {

  }

  @Output()
  action(text : string){

    if(text){
      this.messages.push(text);
      this.scrollToBottom();
    }
    
  }

  scrollToBottom(): void {
    try {
        this.messageBox.nativeElement.scrollTop = this.messageBox.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
