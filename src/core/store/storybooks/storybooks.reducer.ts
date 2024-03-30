import { createReducer, on } from '@ngrx/store';
import { initialState } from './storybooks.state';
import * as StoriesActions from './storybooks.actions';

export const storiesReducer = createReducer(
  initialState,
  on(StoriesActions.addStory, (state, { story }) => ({
    ...state,
    storyBooks: [...state.storyBooks, story],
  })),
  on(StoriesActions.loadStoryBooksSuccess, (state, { storyBooks }) => ({
    ...state,
    storyBooks,
  }))
);
