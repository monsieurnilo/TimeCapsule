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
  public displayForm = false;
  public selectedIdArticle : string | null | undefined;

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

  public async deleteArticle(id: string){
    try{
      await this.articleService.deleteArticle(id);
      this.init();
    }catch(error){
      throw error;
    }
  }

  public openForm(id?:string){
    this.selectedIdArticle = id;
    this.displayForm = true;
  }

  public closeForm(isRefresh:boolean){
    this.displayForm = false;
    this.selectedIdArticle = null;
    if(isRefresh){
      this.init();
    }
  }
}
