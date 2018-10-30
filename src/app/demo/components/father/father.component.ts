import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  public count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  increase () {
    this.count++;
  }

  decrease () {
    this.count--;
  }

  countChangeHandler (event) {
    this.count = event;
  }

}
