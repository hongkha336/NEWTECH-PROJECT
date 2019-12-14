import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {
  boardName = "";
  @Output() boardChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  boardNames = [
      {"id":1, "name": "Board 1"},
      {"id":2, "name": "Board 2"},
      {"id":3, "name": "Board 3"}
    ];

      
  selectOption(id: number) {
    //getted from event
 
    for(let item of this.boardNames)
    {
      if(item.id == id )
      {
        this.boardName = item.name;
        console.log(this.boardName);
        this.boardChange.emit(this.boardName);
        break;
      }
    }
  }
}
