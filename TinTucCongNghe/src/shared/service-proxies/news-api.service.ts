import { Thongtin } from './menu.entity';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '62bdc518f59c4bdc92fc2db010885d23';
  api_url="";

  constructor(private http:HttpClient) { }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
 }
 
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  getVD(): Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost/backend/public/index.php/api/Tintuc/GetAll')
                   .pipe(
                      tap(res=>console.log(res)),
                      catchError(this.handleError('getVD', []))
                    );
                      
    
  }
  
} 
