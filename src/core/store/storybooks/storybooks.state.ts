import { StoriesModel } from 'src/app/domain/shared/models/suggestions.model';

export interface StoryBooksStoreModel {
  storyBooksStore: StoriesState;
}

export interface StoriesState {
  storyBooks: StoriesModel[];
}

export const initialState: StoriesState = {
  storyBooks: [],
};
