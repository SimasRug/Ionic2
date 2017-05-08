import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecepesComponent } from './recepes/recepes.component';
import { RecepeListComponent } from './recepes/recepe-list/recepe-list.component';
import { RecepeDetailComponent } from './recepes/recepe-detail/recepe-detail.component';
import { RecepeItemComponent } from './recepes/recepe-list/recepe-item/recepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepesComponent,
    RecepeListComponent,
    RecepeDetailComponent,
    RecepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
