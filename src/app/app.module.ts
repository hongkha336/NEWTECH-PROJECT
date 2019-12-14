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
import { HeaderComponent } from './components/common/header/header.component';
import { SelectProjectComponent } from './components/common/select-project/select-project.component';
import { UseFaviconComponent } from './components/common/use-favicon/use-favicon.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ContextmenuComponent,
    ContentEditDirective,
    SummaryComponent,
    BoardHeaderComponent,
    HeaderComponent,
    SelectProjectComponent,
    UseFaviconComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
