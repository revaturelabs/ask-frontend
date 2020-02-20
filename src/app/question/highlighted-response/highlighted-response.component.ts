import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  @Input()
  highlightedResponse: Response;

  constructor() { }
  
  ngOnInit() {
  }

}
