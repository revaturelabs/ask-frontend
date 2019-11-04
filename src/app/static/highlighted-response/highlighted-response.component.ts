import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlighted-response',
  templateUrl: './highlighted-response.component.html',
  styleUrls: ['./highlighted-response.component.css']
})
export class HighlightedResponseComponent implements OnInit {

  @Input() highlight: Response;

  constructor() { }

  ngOnInit() {
  }

}
