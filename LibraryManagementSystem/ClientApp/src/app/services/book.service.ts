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
  saveBook(book) {  
    return this._http.post(this.myAppUrl + 'api/Book', book)  
        .map((response: Response) => response.json())  
        .catch(this.errorHandler)  
}  

// getBooks() {  
//   // return this._http.get(this.myAppUrl + 'api/Book')  
//   //     .map((response: Response) => response.json())  
//   //     .catch(this.errorHandler);  
//   return this.http.get<any>(_url);
// }  

getBooks():Observable<any>{
 
  return this._http.get<any>(this.myAppUrl+ 'api/Book');
}
errorHandler(error: Response) {  
  console.log(error);  
  return Observable.throw(error);  
} 

}
