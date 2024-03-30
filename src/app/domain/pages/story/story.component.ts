import { Component, OnInit } from '@angular/core';
import { StoriesModel } from '../../shared/models/suggestions.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  story!: StoriesModel;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.story = JSON.parse(params['story']);
      }
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}
