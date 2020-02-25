
import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { AskMeAnythingPageComponent } from './ama/ask-me-anything/ask-me-anything-page/ask-me-anything-page.component'; //This is imported for the Overlay.
import { ComponentPortal} from '@angular/cdk/portal';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private overlay: Overlay, private authService: AuthService) {}

  private getOverlayConfig(): OverlayConfig { //OverlayConfig starts here.
    const positionStrategy = this.overlay.position()//Funtion used to set global values for the overlay.
      .global()
      .bottom()
      .right()
      ;
    const overlayConfig = new OverlayConfig({
      hasBackdrop: false,
      backdropClass: 'dark-backdrop',
      panelClass: 'tm-file-preview-dialog-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      width: '300px', //Please don't change this.With will make a gap on right-side of the screen.
      positionStrategy,
    });
    return overlayConfig;
  }
  ngOnInit() { //The view of the Overlay.
    const overlayRef = this.overlay.create(this.getOverlayConfig());
    const askMeAnythingPortal = new ComponentPortal(AskMeAnythingPageComponent);
    overlayRef.attach(askMeAnythingPortal); 
  }

  isLoggedIn : boolean;
  isExpert: Boolean;

  getLoggedIn(){
    this.isLoggedIn = this.authService.isLoggedIn;
    return this.isLoggedIn;
  }

  getUserType(){
    this.isExpert = this.authService.account.expert;
    return this.isExpert;
  }

  onLogout() {
    this.authService.userLogOut();
  }
}
