import { Component, OnInit, Input, ViewChild, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent implements OnInit {
  @ViewChild('displayBox', {static : false}) displayBox : ElementRef;

  userScrolled : boolean = false;

  @Input()
  messages : string[] = [
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  scrollToBottom() : void{
    if(!this.userScrolled){
      try {
        this.displayBox.nativeElement.scrollTop = this.displayBox.nativeElement.scrollHeight;
      } catch(err) {
      }                 
    }
  }

  manualScroll(event){
    if(!this.userScrolled){
      this.userScrolled = true;
    }
  }

  enableAutoScroll(){
    this.userScrolled = false;
  }
}
