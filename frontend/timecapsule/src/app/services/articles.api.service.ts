import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/article.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {
    private baseUrl = 'http://localhost:3000/article';

  constructor(private http: HttpClient) { }
  
  public getArticles(): Promise<any> {
    return lastValueFrom( this.http.get(this.baseUrl));
  }

  public getOneArticle(id: string): Promise<any> {
    return lastValueFrom(this.http.get(`${this.baseUrl}/${id}`));
  }

  public deleteArticle(id: string): Promise<any> {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id}`, {headers : new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("token")}`)}) );
  }

  public modifyArticle(id:string, article: Article): Promise<any> {
    return lastValueFrom(this.http.put(`${this.baseUrl}/${id}`, article, {headers : new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("token")}`)}));
  }

  public createArticle(article: Article): Promise<any> {
    return lastValueFrom(this.http.post(`${this.baseUrl}`, article, {headers : new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("token")}`)}));
  }
}
