import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubComponent } from './component/github/github.component';

import { GithubService } from './service/github.service';


@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [
    GithubService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
