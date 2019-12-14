import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Card, CardInterface} from 'src/app/model/card/card.model';
import {List, ListInterface} from 'src/app/model/list/list.model';
import {catchError,map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  private GET_COLUMN_URL = "http://localhost:3000/column";
  constructor(private http: HttpClient) { }

  getList():Observable<List[]>{
    return this.http.get<List[]>(this.GET_COLUMN_URL).pipe(
    );
  }

  addList(col: ListInterface):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post(this.GET_COLUMN_URL,col,httpOptions).pipe(
    );
  }


  updateList(list: ListInterface):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(`${this.GET_COLUMN_URL}/${list.id}`,list,httpOptions).pipe(
    );
  }

   

  removeList(id: string):Observable<any>{
   
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.delete(this.GET_COLUMN_URL+"/"+id,httpOptions).pipe(
    );
  }




}
