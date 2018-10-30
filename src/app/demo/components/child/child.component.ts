import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  increase () {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrease () {
    this.count--;
    this.countChange.emit(this.count);
  }

  countChangeHandler (event) {
    this.count = event;
    this.countChange.emit(this.count);
  }
}
