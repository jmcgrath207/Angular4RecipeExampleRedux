
import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {

  @Effect()
  authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP);

  constructor(private actions$: Actions ) {}


}
