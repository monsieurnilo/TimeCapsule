import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateComponent } from './pages/create/create.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ArticlesService } from './services/articles.service';
import { ArticlesApiService } from './services/articles.api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    AdminComponent,
    ArticlePreviewComponent,
    ArticleFormComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticlesService,
    ArticlesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
