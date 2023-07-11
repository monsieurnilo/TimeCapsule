import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article.interface';
import { ArticlesApiService } from './articles.api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private api: ArticlesApiService) { }
  
  public async getArticles(): Promise<Article[]> {
    try{
      return await this.api.getArticles();
    }catch(error){
      throw error;
    }
    
  }

}
