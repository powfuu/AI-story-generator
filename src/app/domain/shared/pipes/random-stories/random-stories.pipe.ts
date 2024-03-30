import { Pipe, PipeTransform } from '@angular/core';
import { StoriesModel } from '../../models/suggestions.model';

@Pipe({
  name: 'randomStories',
})
export class RandomStoriesPipe implements PipeTransform {
  transform(array: StoriesModel[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
