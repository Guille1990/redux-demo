import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IncreaseCountAction, DecreaseCountAction } from 'src/app/store/actions';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  public count: number;
  public loading: boolean;
  public error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.count = 0;

    this.store.select('count').subscribe(state => {
      this.loading = state.loading;
      this.error = state.error;
      this.count = state.counter;
    });
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
