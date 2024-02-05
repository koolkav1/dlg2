import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { User, initialState } from "./user.state";
import { UserService } from "./user.service";
import { inject } from "@angular/core";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from "rxjs";
import { tapResponse } from '@ngrx/operators';

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, userService = inject(UserService)) => ({
      addUser: rxMethod<User>(
        pipe(
          switchMap(user => {
            patchState(store, { loading: true });
            return userService.addUser(user).pipe(
              tapResponse(
                (addedUser) => patchState(store, { users: [...store.users(), addedUser] }),
                (error) => console.error(error),
                () => patchState(store, { loading: false })
              )
            );
          })
        )
      ),
    }))
  );