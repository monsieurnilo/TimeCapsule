import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { headers } from 'src/app/utils/article-preview.utils';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public articles: Article[] = [];
  public headers = headers;

  constructor(private articleService: ArticlesService){
    this.init();
  };

  private async init(){
    try{
      this.articles = await this.articleService.getArticles();
    }catch(error){
      throw error;
    }
  }
  public selectArticle(id: string){
    console.log("passe selectLine", id);

  }

  public async deleteArticle(id: string){
      try{
        await this.articleService.deleteArticle(id);
        this.init();
      }catch(error){
        throw error;
      }
    }
}
