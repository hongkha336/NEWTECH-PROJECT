import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board/board.component';

import { ListComponent } from './components/board/list/list.component';
import { ContextmenuComponent } from './components/common/contextmenu/contextmenu.component';
import { ContentEditDirective } from './directives/common/content-edit.directive';
import { SummaryComponent } from './components/card/summary/summary.component';
import { BoardHeaderComponent } from './components/board-header/board-header.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ContextmenuComponent,
    ContentEditDirective,
    SummaryComponent,
    BoardHeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
