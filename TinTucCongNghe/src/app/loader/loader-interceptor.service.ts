import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { includes } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  private loaderUrls: string[] = [];

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request: any = req.clone();

    if (!includes(request.urlWithParams, 'assets/')) {
      this.loaderUrls.push(request.urlWithParams);
      this.showLoader();
    }

    return next.handle(request).pipe(
      tap(
        (): void => {},
        (err: any): void => {
          this.loaderUrls = [];
          this.hideLoader();
        }
      ),
      finalize((): void => {
        const f = this.loaderUrls.indexOf(req.urlWithParams);
        if (f > -1) {
          this.loaderUrls.splice(f, 1);
        }
        if (this.loaderUrls.length === 0) this.hideLoader();
      })
    );
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
