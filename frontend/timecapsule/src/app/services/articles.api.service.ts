import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { Article } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {
    private baseUrl = 'http://localhost:3000/article';

  constructor(private http: HttpClient) { }
  
  public getArticles(): Promise<any> {
    return lastValueFrom( this.http.get(this.baseUrl));
  }

}
