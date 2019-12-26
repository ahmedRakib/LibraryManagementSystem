import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable(

)
export class BookService {
  myAppUrl: string = "";
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }
  saveBook(book): Observable<any> {
    const _url = `${this.myAppUrl}api/Book`;
    return this._http.post<any>(_url, book);
    // return this._http.post(this.myAppUrl + 'api/Book', book)  
    //     .map((response: Response) => response.json())  
    //     .catch(this.errorHandler)  
  }  

  editBook(book) {
    return this._http.put(this.myAppUrl + 'api/Book', book)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  getBookById(id: number) {
    return this._http.get<any>(this.myAppUrl + 'api/Book/' + id);
  }

  deleteBook(id: number) {
    return this._http.delete<any>(this.myAppUrl + 'api/Book/' + id);
  }

  getBooksByStatus(status: string): Observable<any> {
    console.log("service " + this.myAppUrl + status);
    return this._http.get<any>(this.myAppUrl + 'api/Book/GetByStatus/' + status);


  }

  getBooks(): Observable<any> {

    return this._http.get<any>(this.myAppUrl + 'api/Book');
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}
