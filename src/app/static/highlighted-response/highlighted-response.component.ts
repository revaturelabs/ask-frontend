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

  @Input() highlightedResponseNum: number;
  private highlightedResponse: Response;

  constructor(private responseService: ResponseService) { }
  
  ngOnInit() {
    this.populateResponseInfo();
  }

  populateResponseInfo() : void {
    this.responseService.getResponseById(this.highlightedResponseNum).subscribe((data) =>{
      this.highlightedResponse = data;
    })
  }

}
