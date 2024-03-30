import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { StoryComponent } from '../pages/story/story.component';

const routes: Routes = [
  {
    component: HomeComponent,
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
export class HomeRoutingModule {}
