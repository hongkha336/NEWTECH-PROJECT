import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {BoardModel, BoardInterface} from 'src/app/model/board/board.model';
import {List, ListInterface} from 'src/app/model/list/list.model';
import {catchError,map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  URL : string = "http://localhost:3000/board/1"
  constructor(private http: HttpClient ) { }
  getBoard():Observable<any>{
    return this.http.get<BoardModel>(this.URL).pipe(
    );
  }
  updateBoard(board: BoardModel):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(this.URL,board,httpOptions).pipe(
    );
  }
}
