import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  @Input() headers: any[] = [];
  @Input() body: any[] = [];

  @Output() selectedLine = new EventEmitter();
  @Output() deletedItem = new EventEmitter();

  constructor(){};

  public selectLine(id: string){
    this.selectedLine.emit(id);
  }

  public deleteItem(event : any, id: string){
    event.preventDefault();
    event.stopPropagation();
    this.deletedItem.emit(id);
  }





}
