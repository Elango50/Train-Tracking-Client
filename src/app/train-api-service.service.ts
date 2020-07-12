import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Train } from './train';

const endpoint = 'http://localhost:4200/api/train';

@Injectable({
  providedIn: 'root'
})
export class TrainApiServiceService {

  constructor(private http: HttpClient) { }

  getTrains(stationCode : string): Observable<any> {
      debugger
    return this.http.get<Train>(endpoint + '/findTrain/' + stationCode).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
