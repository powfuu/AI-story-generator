import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from '../../routing/home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { StoriesDataService } from '../../shared/services/stories/stories.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RandomStoriesPipe } from '../../shared/pipes/random-stories/random-stories.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, RandomStoriesPipe],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [StoriesDataService],
  exports: [HomeComponent],
})
export class HomeModule {}
