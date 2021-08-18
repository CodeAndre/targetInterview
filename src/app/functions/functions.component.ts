import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  displayValue: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(n: any) {

    n = n +1;

    console.log(n)

    return this.displayValue = n
  }
  

  showDiv = false;

  openDiv(): void {
    this.showDiv = !this.showDiv;
  }
  
} 
