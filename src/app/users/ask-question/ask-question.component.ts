import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

  @Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
  })
  export class AskQuestionComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();

  options: string[] = [
  "Angular","Java","Javascript","Typescript","SQL"
  ,"Spring","CSS","HTML","JDBC","Micro-Services",
  "Docker" ]

  filteredOptions: Observable<string[]>;
  option : string[]; 

  ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges
  .pipe(startWith(''), map(value => this._filter(value)));

  }

  public _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => 
    option.toLowerCase().indexOf(filterValue) === 0);
  }

  public updateExpert(option){
  console.log(option);
  }
}
