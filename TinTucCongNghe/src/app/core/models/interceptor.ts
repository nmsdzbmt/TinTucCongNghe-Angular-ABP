import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { finalize } from "rxjs/operators";
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
  
  resExclude = RegExp ('Tenant\/CheckTenancyNameAsync|User\/CheckEmailAddressOrUserNameAsync|User\/GetSearchUser|TokenAuth\/Authenticate');

  constructor(
    private loadingBar: LoadingBarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (req.headers.has('ignoreLoadingBar')) {
      return next.handle(req.clone({ headers: req.headers.delete('ignoreLoadingBar') }));
    }

    const r = next.handle(req);

    let started = !this.resExclude.test(req.url);

    const responseSubscribe = r.subscribe.bind(r);
    r.subscribe = (...args) => {
      if(started) this.loadingBar.start();
      started = true;
      return responseSubscribe(...args);
    };

    return r.pipe(
      finalize(() => started && this.loadingBar.complete())
    );
  }

}
