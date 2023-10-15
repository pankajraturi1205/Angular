import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  getAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.apiUrl}/posts`)
      .pipe(catchError(this.handleError));
  }

  addData(data: any): Observable<Post> {
    console.log('data');
    console.log(data);
    console.log('data');
    return this.http
      .post<Post>(`${this.apiUrl}/posts`, data)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'error occured';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status : ${error.status}, Message: ${error.message}`;
    }
    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
