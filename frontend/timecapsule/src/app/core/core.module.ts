import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ArticlesService } from '../services/articles.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ArticlesService
  ]
})
export class CoreModule { }
