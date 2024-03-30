import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as StoryBooksActions from './storybooks.actions';

@Injectable()
export class StoryBooksEffects {
  loadArray$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoryBooksActions.loadStoryBooks),
      map(() => {
        const storyBooksValue = localStorage.getItem('stories') || '[]';
        const storyBooks = JSON.parse(storyBooksValue);
        return StoryBooksActions.loadStoryBooksSuccess({ storyBooks });
      })
    )
  );
  constructor(private actions$: Actions) {}
}
