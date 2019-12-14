import {Component, Input, OnInit} from '@angular/core';
import { Card } from 'src/app/model/card/card.model';
import { CardService } from 'src/app/service/card/card.service';

@Component({
  selector: 'app-card-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() card: Card;
  @Input() listIndex: number;
  @Input() cardIndex: number;
  @Input() color : string = '#fff';
  get_random_color() {
    return "rgb(" + 255 + "," +251 + "," + 222 + ")";
}
  constructor(private servive : CardService) { 
    this.color = this.get_random_color();
  }

  ngOnInit() {
   this.card.colID = this.listIndex+1;
   this.servive.updateCard(this.card).subscribe();
  }

  update(event){
    this.servive.updateCard(this.card).subscribe();
  }

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.effectAllowed = 'move'
    dragEvent.dataTransfer.dropEffect= 'move'
    const transferObject = {
      'listIndex' : this.listIndex,
      'cardIndex' : this.cardIndex
    };
    dragEvent.dataTransfer.setData( 'text', JSON.stringify(transferObject));
  }

  allowCardDragToBeDropped(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect= 'move'
    dragEvent.preventDefault();
  }
}
