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

  public async deleteArticle(id: string): Promise<Article[]> {
    try{
      return await this.api.deleteArticle(id);
    }catch(error){
      throw error;
    }
  }

  public async getOneArticle(id: string): Promise<Article> {
    try{
      return await this.api.getOneArticle(id);
    }catch(error){
      throw error;
    }
  }

  public async createArticle(article : Article): Promise<any> {
    try{
      return await this.api.createArticle(article);
    }catch(error){
      throw error;
    }
  }

  public async modifyArticle(id:string ,article : Article): Promise<any> {
    try{
      return await this.api.modifyArticle(id,article);
    }catch(error){
      throw error;
    }
  }

}
