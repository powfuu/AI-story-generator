import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoryComponent } from './story.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [StoryComponent],
  imports: [CommonModule, MatFormFieldModule, MatCardModule, MatIconModule],
  exports: [StoryComponent],
})
export class StoryModule {}
