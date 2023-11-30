import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoModule } from './to-do/to-do.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosService } from './to-do/common/services/todos.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToDoModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
