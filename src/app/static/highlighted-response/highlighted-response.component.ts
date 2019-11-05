import { Component, OnInit, Input } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { Response } from '../../models/Response';

/**
 * @author: Alec Thavychith
 *
 * Displaying the highlighted response for a selected question
 *
 */

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

    // Used for displaying the username of the expert who responded
    let highlightId = this.highlight.id;
    this.responseService.getResponseById(highlightId).subscribe(result => {
      this.responderName = result.user.username;
    });
  }

}
