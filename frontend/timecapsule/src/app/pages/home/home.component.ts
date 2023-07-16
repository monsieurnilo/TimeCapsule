import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public articleDisplayed: Article | null = null;
  isOpen = false;

  public displayArticle(article : any){
    this.articleDisplayed = article
  }

  toggleColumn() {
    this.isOpen = !this.isOpen;
  }

}
