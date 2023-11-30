import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoModule } from './to-do/to-do.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosService } from './to-do/common/services/todos.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './to-do/common/stores/reducers/todo.reducer';
import { TodosEffects } from './to-do/common/stores/effects/todo.effect';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('todos', todosReducer),

    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
