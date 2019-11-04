import { Component, OnInit, Input } from '@angular/core';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'app-highlighted-response',
  templateUrl: './highlighted-response.component.html',
  styleUrls: ['./highlighted-response.component.css']
})
export class HighlightedResponseComponent implements OnInit {

  @Input() highlight: Response;
  responderName: string;

  constructor(private responseService: ResponseService) { }

  ngOnInit() {

    let highlightId = this.highlight.id;
    this.responseService.getResponseById(highlightId).subscribe(result => {
      this.responderName = result.user.username;
    });
  }

}
