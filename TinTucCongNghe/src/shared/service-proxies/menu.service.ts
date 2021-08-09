import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Menu } from "./menu.entity";
import { catchError, tap, map } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = '/assets/json/menu.json';

@Injectable({
providedIn: 'root'
  })
export class menuService{
   
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    getMenu(): Observable<Menu[]> 
    {       
        return this.http.get<Menu[]>(`${apiUrl}`)
        .pipe(
            tap(cases => console.log(cases)),
            catchError(this.handleError('getMenu', []))
          );
    }

}