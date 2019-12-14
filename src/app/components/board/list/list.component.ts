import {Component, ElementRef, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ListInterface, List} from '../../../model/list/list.model';
import {Card, CardInterface} from '../../../model/card/card.model';
import { MovementIntf, Movement } from 'src/app/model/card/movement';
import { CardService } from 'src/app/service/card/card.service';
import { ListService } from 'src/app/service/list/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: ListInterface;
  @Input() listIndex: number;
  @Output() moveCardAcrossList: EventEmitter<MovementIntf> = new EventEmitter<MovementIntf>();
  @Output() newCardAdded: EventEmitter<Card> = new EventEmitter<CardInterface>();
  @Output() deleteList: EventEmitter<number> = new EventEmitter<number>();

  private cardCount = 0;
  mList : ListInterface;
  constructor(private elementRef: ElementRef , @Inject(DOCUMENT) private document: Document, private cardService :CardService, private listSerivce: ListService) { }

  ngOnInit() {
    this.list.cards = [];
    this.cardService.getCards(this.list.id).subscribe(
      rec => this.list.cards = rec
    );
    this.mList = this.list;
    this.mList.cards =[];
  }

  addNewCard() {
    
    const card = new Card( this.list.id,new Date().valueOf() +"" , 'header' , 'summary', '',0,"#fff","");
    if(this.list.cards == undefined)
        this.list.cards = [];
    this.list.cards.push(card);
    this.newCardAdded.emit(card);
    this.cardService.addCard(card).subscribe();
  }
  allowCardReplacement(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }

  delete(){
    this.deleteList.emit(this.listIndex);
     this.listSerivce.removeList(this.list.id).subscribe();
    console.log("I deleted list " + this.list.id);
  }
  update(event){
    this.mList.name = this.list.name;
     this.listSerivce.updateList(this.mList).subscribe();
  }

  dropCard(dragEvent: DragEvent) {
    const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
    const elements: Element[] = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
    const cardElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-card-summary');
    const listElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-list');
    const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
    const cardIndexDroppedOn  = cardElementBeingDroppedOn === undefined ? undefined :
          parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
    const listIndexDragged = parseInt(data.listIndex, 10);
    const cardIndexDragged = parseInt(data.cardIndex, 10);

    if (listIndexDragged != listIndexDroppedOn) {
        this.moveCardAcrossList.emit(new Movement(listIndexDragged, listIndexDroppedOn , cardIndexDragged , cardIndexDroppedOn));

      }

  }

  

  
}
