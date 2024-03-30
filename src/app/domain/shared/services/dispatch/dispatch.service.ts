import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoriesModel } from '../../models/suggestions.model';
import {
  addStory,
  loadStoryBooks,
} from 'src/core/store/storybooks/storybooks.actions';

@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  constructor(private store: Store) {}

  addStoryBook(story: StoriesModel): void {
    this.store.dispatch(addStory({ story }));
  }

  loadStoryBooks(): void {
    this.store.dispatch(loadStoryBooks());
  }
}
