import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { AskMeAnythingPageComponent } from './ask-me-anything/ask-me-anything-page/ask-me-anything-page.component'; //This is imported for the Overlay.
import { ComponentPortal} from '@angular/cdk/portal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private overlay: Overlay) {}

  private getOverlayConfig(): OverlayConfig { //OverlayConfig starts here.
    const positionStrategy = this.overlay.position()//Funtion used to set global values for the overlay.
      .global()
      .bottom()
      .right()
      ;
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
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
    overlayRef.attach(askMeAnythingPortal); //OverlayCOnfig ends here.
  }

}
