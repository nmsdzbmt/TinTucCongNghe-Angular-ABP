import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoaderState } from './loader';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {}

  show(): void {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide(): void {
    new Observable((x) => {
      x.next();
    })
      .pipe(delay(300))
      .subscribe(() => {
        this.loaderSubject.next(<LoaderState>{ show: false });
      });
  }
}
