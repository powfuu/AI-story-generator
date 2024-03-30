import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { LoaderModel } from '../../models/loader.model';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private msg: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  startLoader(msg?: string): void {
    this.msg.next(msg || 'Loading...');
    this.isLoading.next(true);
  }

  stopLoader(): void {
    this.isLoading.next(false);
  }

  getLoaderState(): Observable<LoaderModel> {
    return combineLatest([
      this.isLoading.asObservable(),
      this.msg.asObservable(),
    ]).pipe(map(([isLoading, msg]) => ({ isLoading, msg })));
  }
}
