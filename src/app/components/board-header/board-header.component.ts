import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  boardname = "The kanban board";
}
