import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/service/board/board.service';
import { BoardModel, BoardInterface } from 'src/app/model/board/board.model';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {
  constructor(private boardServive:BoardService) { }
  boardModel : BoardModel;
  boardname : string ="";
  ngOnInit() {
    this.boardModel = new BoardModel();
    this.boardModel.name = "";
    this.getBoard();
  }
  getBoard(){
    this.boardServive.getBoard().subscribe(
      rs => {
        this.boardModel = rs;
        if(this.boardModel.name.length == 0){
              this.boardModel.name = "DEFAULT NAME";
        }
        this.boardname = this.boardModel.name;
      }
    );
  }
  boardChange(name: string) {
  }

  update(event){
    if(this.boardModel.name.length == 0)
    this.boardModel.name = "DEFAULT NAME";
    this.boardServive.updateBoard(this.boardModel).subscribe();
  }

  
}
