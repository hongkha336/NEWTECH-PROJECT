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
export class CardService {
  private MAINURL = "http://localhost:3000/";
  private URL1 = this.MAINURL+"columnsticket/";
  private URL2 = this.MAINURL+"ticket";
  constructor(private http: HttpClient) { }
  getCards(colID: string):Observable<Card[]>{
    return this.http.get<Card[]>(this.URL1+colID).pipe(
    );
  }

  updateCard(card: Card):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(`${this.URL2}/${card.id}`,card,httpOptions).pipe(
    );
   
  }

  addCard(card: Card):Observable<any>{
    console.log(card)
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post(this.URL2,card,httpOptions).pipe(
    );
  }
}
