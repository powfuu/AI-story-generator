import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () =>
      import('src/app/domain/pages/home/home.module').then((m) => m.HomeModule),
    path: 'dashboard',
  },
  {
    loadChildren: () =>
      import('src/app/domain/pages/storybooks/storybooks.module').then(
        (m) => m.StoryBooksModule
      ),
    path: 'storybooks',
  },
  {
    redirectTo: 'dashboard',
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
