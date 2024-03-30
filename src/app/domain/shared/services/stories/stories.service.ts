import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuggestionsModel } from '../../models/suggestions.model';

@Injectable({
  providedIn: 'root',
})
export class StoriesDataService {
  constructor(private http: HttpClient) {}

  getSuggestions(): Observable<SuggestionsModel> {
    return this.http.get<SuggestionsModel>(
      `assets/json/suggested-stories.json`
    );
  }
}
