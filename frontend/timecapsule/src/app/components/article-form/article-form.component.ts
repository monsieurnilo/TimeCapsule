import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { tagOptions } from 'src/app/utils/tag.utils';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  public articleForm: FormGroup;
  public tagOptions = tagOptions;
  public article : Article | undefined;

  @Input() set id(value:string | null | undefined) {
    if(value){
      this.init(value);
    }
  }

  @Output() closedForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private articlesService: ArticlesService){
    this.articleForm = this.formBuilder.group({
      title:[null, [Validators.required]],
      contenu:[null, [Validators.required]],
      tag:[null, [Validators.required]],
      source:[null, [Validators.required]]

    })
  };

  private async init(id:string){
    try {
      this.article = await this.articlesService.getOneArticle(id); 
      console.log(this.article);
      this.articleForm.patchValue(this.article);
    } catch (error) {
      console.log(error);
    }
  }

  public async validate(){
    if(this.articleForm.dirty && this.articleForm.valid){
      try {
        this.article 
          ? await this.articlesService.modifyArticle(this.article._id, this.articleForm.value) 
          : await this.articlesService.createArticle(this.articleForm.value);
        this.close(true)
      } catch (error) {
        console.log(error);
      }
    }else{
      this.close(false);
    }
  }

  public close(isRefresh:boolean){
    this.closedForm.emit(isRefresh);
  }

}
