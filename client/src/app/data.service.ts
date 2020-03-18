import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse,  HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  env = environment
  constructor(private http: HttpClient) { }

  getLocation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.env.node_api}alllocation`)
       .pipe(
              map((data) => {
                   return data;
              }),
              //catchError(this.handleError)
           );
 }
}
