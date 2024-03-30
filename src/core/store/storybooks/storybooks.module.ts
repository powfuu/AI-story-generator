import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { storiesReducer } from './storybooks.reducer';

@NgModule({
  imports: [StoreModule.forFeature('storyBooks', storiesReducer)],
})
export class StoriesModule {}
