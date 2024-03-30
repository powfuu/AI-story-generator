import { DispatchService } from './../../shared/services/dispatch/dispatch.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesDataService } from '../../shared/services/stories/stories.service';
import { Observable, mergeMap } from 'rxjs';
import {
  StoriesModel,
  SuggestionsModel,
} from '../../shared/models/suggestions.model';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { OpenAiService } from '../../shared/services/openai/openai.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  storyForm!: FormGroup;
  suggestions$!: Observable<SuggestionsModel>;
  constructor(
    private formBuilder: FormBuilder,
    private storiesData: StoriesDataService,
    private loadingService: LoadingService,
    private openAiService: OpenAiService,
    private dispatchService: DispatchService,
    private localStorageService: LocalStorageService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.getSuggestions();
  }

  initForm(): void {
    this.storyForm = this.formBuilder.group({
      story: ['', Validators.required],
    });
  }

  getSuggestions(): void {
    this.suggestions$ = this.storiesData.getSuggestions();
  }

  showInvalidDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Error',
        description: 'Invalid story sent to the openAi data.',
      },
    });
  }

  submitStoryForm(): void {
    this.generateStory(this.storyForm.get('story')?.value, true);
  }

  generateStory(story: string, fromSubmit?: boolean): void {
    if (this.storyForm.valid) {
      this.callBackGenerateStory(story);
    } else {
      if (!fromSubmit) {
        this.callBackGenerateStory(story);
      }
    }
  }

  callBackGenerateStory(story: string): void {
    this.loadingService.startLoader('Generating AI Story, be patient...');
    this.openAiService.getApiResponse(story).subscribe((response) => {
      const storyContent = response.choices[0].message.content;
      this.loadingService.stopLoader();
      if (storyContent.toUpperCase() !== 'REJECTED') {
        const storedStories = localStorage.getItem('stories') || '[]';
        let existingStories: StoriesModel[] = [];
        if (storedStories) {
          existingStories = JSON.parse(storedStories);
        }
        const isExisting = existingStories.some(
          (existingStory) =>
            existingStory.title === story &&
            existingStory.content === storyContent
        );
        const newStoryBook: StoriesModel = {
          title: story,
          content: storyContent,
        };
        if (!isExisting) {
          existingStories.push(newStoryBook);
          this.localStorageService.set('stories', existingStories);

          this.dispatchService.addStoryBook(newStoryBook);
        }
        this.router.navigate(['/dashboard/story/'], {
          queryParams: {
            story: JSON.stringify(newStoryBook),
          },
        });
      } else {
        this.showInvalidDialog();
      }
    });
  }
}
