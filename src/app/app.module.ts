import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './domain/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './domain/components/header/header.component';
import { StoriesModule } from 'src/core/store/storybooks/storybooks.module';
import { StoreModule } from '@ngrx/store';
import { storiesReducer } from 'src/core/store/storybooks/storybooks.reducer';
import { StoryModule } from './domain/pages/story/story.module';
import { EffectsModule } from '@ngrx/effects';
import { StoryBooksEffects } from 'src/core/store/storybooks/storybooks.effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ storyBooksStore: storiesReducer }),
    EffectsModule.forRoot([StoryBooksEffects]),
    StoriesModule,
    StoryModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
