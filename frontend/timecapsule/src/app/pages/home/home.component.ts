import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { getRandom, tagOptions } from 'src/app/utils/tag.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private articles: Article[] = [];
  public tagOptions = tagOptions;
  public tagSelected = "selectionner un tag";
  public articleDisplayed: Article | null = null;
  constructor(private articleService: ArticlesService){
    this.init();
  };

  private async init(){
    try{
      this.articles = await this.articleService.getArticles();
      console.log(this.articles);
    }catch(error){
      throw error;
    }
  }
  public displayArticle(){
    const articlesFiltered = this.articles.filter(a => a.tag === this.tagSelected);
    this.articleDisplayed = this.tagSelected === "tous" ? this.articles[getRandom(this.articles.length)] : articlesFiltered[getRandom(articlesFiltered.length)];    
  }


}
