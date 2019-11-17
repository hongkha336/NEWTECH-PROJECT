import {Component, OnInit, Output, EventEmitter, HostListener, ElementRef} from '@angular/core';


@Component({
  selector: 'app-context-menu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {

  show = false;
  @Output() contextAction:  EventEmitter<string> = new EventEmitter<string>();
 
   constructor(private elementRef: ElementRef) { }
 
   ngOnInit() {
   }
 
   emitCloseEvent() {
      this.contextAction.emit('DELETE');
      this.show = false;
   }
 
   @HostListener('document:click' , [ '$event' ])
   closeOutClickOutside(event) {
     if (!this.elementRef.nativeElement.contains(event.target)) {
       this.show = false;
     }
   }
}
