import { Component } from '@angular/core';

import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html'
})
export class GitHubComponent {

    user: any;
    repos: any[]
    userName: string;
    constructor( private _githubService: GithubService){
        this.user = false;
    }

    onSearch(){
        this.loadProfile();
        console.log(this.userName);
    }

    loadProfile(){
        this._githubService.getUser(this.userName).subscribe(
            user => {
                this.user = user;
                console.log(this.user);
            }     
        )
 
        this._githubService.getRepos(this.userName).subscribe(
            repos => {
                this.repos = repos;
                console.log(this.repos);
            }       
        )
    }

}
