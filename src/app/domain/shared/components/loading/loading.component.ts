import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { LoaderModel } from '../../models/loader.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  loadingState$!: Observable<LoaderModel>;

  constructor(private loadingService: LoadingService) {
    this.loadingState$ = this.loadingService.getLoaderState();
  }
}
