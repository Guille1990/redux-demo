import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountService } from '../../services/count.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadCountAction } from 'src/app/store/actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  public count: number;
  public val: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('count').subscribe(state => this.count = state.counter);
  }

  getCountValue () {
    if (this.val !== '' ) {
      const action = new LoadCountAction(this.val);
      this.store.dispatch(action);
      this.val = '';
    }
  }

}
