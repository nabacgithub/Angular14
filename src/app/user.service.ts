import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8282/products";
  constructor(private http:HttpClient) { }

  public getUsers():Observable<any> {
    return this.http.get<User>(this.apiURL+'/products')
      
  }

  getById(id:number){
    return this.http.get<User>(`http://localhost:8282/products/products/${id}`)
  }


  getByString(val: String):Observable<any>{
    return this.http.get<User>(`http://localhost:8282/products/products/allp?p=${val}`)
  }



  deleteUsers(): Observable<any>{
    const url = this.apiURL+'/products/delete/1'; // DELETE api/heroes/42
    return this.http.delete(url,{ responseType: 'text'})
   // return this.http.delete(this.apiURL+'/deleteusers/'+id)
    //return this.http.get<User>(url)
    
  }
  delet(id:number){
    return this.http.delete<User>(`http://localhost:8282/products/products/delete/${id}`)
  }

  create(user:User) {
  
    return this.http.post<User>(this.apiURL + '/products/add',user)
      
  }  

  update(user:User){
    return this.http.put(`http://localhost:8282/products/products/update/${user.id}`,user);
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // find(id:number): Observable<any> {
  
  //   return this.httpClient.get(this.apiURL + '/posts/' + id)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  
  /*update(id:number, user:User): Observable<any> {
  
    return this.http.put(this.apiURL + '/products/update/' + id, JSON.stringify(user))
 
   
  }*/
       
  /**
   * Write code on Method
   *
   * @return response()
   */
 






//   errorHandler(error:any) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       errorMessage = error.error.message;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
//  }

}
