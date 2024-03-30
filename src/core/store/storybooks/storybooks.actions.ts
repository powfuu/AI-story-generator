import { createAction, props } from '@ngrx/store';
import { StoriesModel } from 'src/app/domain/shared/models/suggestions.model';

export const addStory = createAction(
  '[STORE] Add Story',
  props<{ story: StoriesModel }>()
);

export const loadStoryBooks = createAction(
  '[STORE] Load storyBooks from LocalStorage'
);

export const loadStoryBooksSuccess = createAction(
  '[STORE] Load storyBooks Success',
  props<{ storyBooks: StoriesModel[] }>()
);
