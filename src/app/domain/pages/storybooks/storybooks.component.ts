import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { DispatchService } from '../../shared/services/dispatch/dispatch.service';
import { Observable } from 'rxjs';
import { StoriesModel } from '../../shared/models/suggestions.model';
import { StoryBooksStoreModel } from 'src/core/store/storybooks/storybooks.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storybooks',
  templateUrl: './storybooks.component.html',
  styleUrls: ['./storybooks.component.scss'],
})
export class StorybooksComponent implements OnInit {
  storyBooks$!: Observable<StoriesModel[]>;

  constructor(
    private router: Router,
    private storyBooksStore: Store<StoryBooksStoreModel>,
    private dispatchService: DispatchService
  ) {}
  ngOnInit() {
    this.dispatchService.loadStoryBooks();
    this.storyBooks$ = this.storyBooksStore.select(
      (store) => store.storyBooksStore.storyBooks
    );
  }

  selectStory(story: StoriesModel): void {
    this.router.navigate(['/storybooks/story'], {
      queryParams: {
        story: JSON.stringify(story),
      },
    });
  }
}
