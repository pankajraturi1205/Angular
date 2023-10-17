import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../shared/store/counter.reducer';
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
})
export class PostModule {}
