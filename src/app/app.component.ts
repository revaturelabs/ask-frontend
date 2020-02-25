import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component'; //This is imported for the Overlay.
import { ComponentPortal} from '@angular/cdk/portal';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  showChat: boolean;
  overlayRef: OverlayRef;
  askMeAnythingPortal: ComponentPortal<AskMeAnythingPageComponent>;

  constructor(private overlay: Overlay, private route: Router) {
    this.showChat = false;
    this.askMeAnythingPortal = new ComponentPortal(AskMeAnythingPageComponent);
    var self = this;
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
                  if(ev.urlAfterRedirects === '/' || ev.urlAfterRedirects === '/chat') {
                    console.log("equals");
                    self.removeChatBox();
                  }
                  else {
                    console.log("Not equals");
                    this.showChat = true;
                    self.openChatBox();
                  }
                }});
  }
  private getOverlayConfig(): OverlayConfig { //OverlayConfig starts here.
    const positionStrategy = this.overlay.position()//Funtion used to set global values for the overlay.
      .global()
      .bottom()
      .right()
      ;
    const overlayConfig = new OverlayConfig({
      hasBackdrop: false, //Must be set to false
      backdropClass: 'dark-backdrop',
      panelClass: 'tm-file-preview-dialog-panel',
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      width: '300px', //Please don't change this.With will make a gap on right-side of the screen.
      positionStrategy,
    });
    return overlayConfig;
  }
  ngOnInit() { 
  }

  public openChatBox() {
    if(this.overlayRef == undefined){ //check if there is an already a chatbox. If it is, it will not make another one.
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
      this.overlayRef.attach(this.askMeAnythingPortal);
    }
  }

  public removeChatBox(){
    if(this.overlayRef != undefined){ // check if overlayRef is null
      var result = this.overlayRef.detach();// remove AskMeAnythingComponent from overlayRef
      this.overlayRef = undefined;//null
    }
  }

}
