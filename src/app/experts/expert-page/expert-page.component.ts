import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.css'],
})
export class ExpertPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let nav = document.getElementById('navbar').style.visibility = 'visible';
  }
}
