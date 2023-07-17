import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { getRandom, tagOptions } from 'src/app/utils/tag.utils';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private articles: Article[] = [];
  public tagOptions = tagOptions;
  public tagSelected = "tous";
  isMenuOpen = false;
  @Output() displayedArticle = new EventEmitter();

  public displayArticle(){
    const articlesFiltered = this.articles.filter(a => a.tag === this.tagSelected);
    const articleDisplayed = this.tagSelected === "tous" ? this.articles[getRandom(this.articles.length)] : articlesFiltered[getRandom(articlesFiltered.length)];
    this.displayedArticle.emit(articleDisplayed);
  }

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
}
