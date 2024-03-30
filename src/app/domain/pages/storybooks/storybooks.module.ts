import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorybooksComponent } from './storybooks.component';
import { StoryBooksRoutingModule } from '../../routing/storybooks-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReversePipe } from '../../shared/pipes/reverse-pipe/reverse.pipe';

@NgModule({
  declarations: [StorybooksComponent, ReversePipe],
  imports: [
    StoryBooksRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [StorybooksComponent],
})
export class StoryBooksModule {}
