import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { CountService } from '../../services/count.service';
import { LOAD_COUNT, LoadCountSuccessAction, LoadCountErrorAction } from '../actions';

@Injectable()
export class CountEffects {
  constructor (
    private actions$: Actions,
    private countService: CountService
  ) {}

  @Effect()
  laodUser$ = this.actions$.ofType(LOAD_COUNT)
    .pipe(
      switchMap(action => {
        const val = action['val'];
        return this.countService.getCount(val)
          .then(number => new LoadCountSuccessAction(number))
          .catch(err => {
            return new LoadCountErrorAction(err);
          });
      })
    );
}
