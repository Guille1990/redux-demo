import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();

  constructor(
    private countService: CountService
  ) { }

  ngOnInit() {
  }

  async getCountValue () {
    this.count = await this.countService.getCount();
    this.countChange.emit(this.count);
  }

}
