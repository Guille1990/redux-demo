import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IncreaseCountAction, DecreaseCountAction } from 'src/app/store/actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public count: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('count').subscribe(state => this.count = state.counter);
  }

  increase () {
    const action = new IncreaseCountAction();
    this.store.dispatch(action);
  }

  decrease () {
    const action = new DecreaseCountAction();
    this.store.dispatch(action);
  }
}
