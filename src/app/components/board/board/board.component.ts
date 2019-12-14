import {Component, NgModule, OnInit} from '@angular/core';
import {List, ListInterface} from '../../../model/list/list.model';
import { MovementIntf } from 'src/app/model/card/movement';

import {BoardModel} from '../../../model/board/board.model';
import { ListService } from 'src/app/service/list/list.service';
import { BoardService } from 'src/app/service/board/board.service';




@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {


  lists: ListInterface[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = [];
    this.getList();
  }
  getList(){
   this.listService.getList().subscribe(
     mlists => this.lists = mlists
   );
   console.log(this.lists);
  }
  addList() {
    const newList: ListInterface = new List();
    newList.position = this.lists.length + 1;
    newList.name = `NEW LIST`;
    newList.id=   newList.position.toString();
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);

    this.listService.addList(newList).subscribe();
  }

  moveCardAcrossList(movementInformation: MovementIntf) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);
  }

  saveBoard() {
    const boardModel = new BoardModel();
    boardModel.lists = this.lists;
    
  }

  deleteList(listIndex: number){
      this.lists.splice(listIndex,1);

  }
}
