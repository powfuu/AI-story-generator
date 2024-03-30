import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorybooksComponent } from '../pages/storybooks/storybooks.component';
import { StoryComponent } from '../pages/story/story.component';

const routes: Routes = [
  {
    component: StorybooksComponent,
    path: '',
  },
  {
    component: StoryComponent,
    path: 'story',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryBooksRoutingModule {}
